# Phase 1: The Admin Shell

What to build next, and why it comes before finishing Screen Setup or the campaign portability pass.

**Verified against:** commit `c196e1d`. Written 7 August 2026.
**Read first:** `docs/Wozku-Program-Document.md` Part 0, for the operating model this phase is built inside.

---

## The gap this phase closes

There is no admin panel. There is a product.

Look at what exists today: `src/app/page.tsx` renders a 40-pixel-tall utility strip containing the word "Content Planner," a Repository/Campaigns tab switcher, and a search box. Below that, one of two full-bleed views fills the rest of the screen. There is no logo, no persistent navigation frame, no account area, no settings, no room to add a third section without redesigning the strip itself. What looks like an admin panel is actually two screens sharing a header.

This matters more than it looks like it should, for three reasons:

1. **Your CEO named it directly:** update the live product's shell with brand guidelines, then improve UI and UX from there. That is a shell-first instruction, and the shell does not exist yet to update.
2. **Every other plan in this repo assumes a shell that can hold new sections.** Additional Settings (Coupons, Forms, Quiz, Booths) needs somewhere to live that is not another tab squeezed into a 40px strip. LeadSpark, when it is designed, needs the same. The Community view, Account Settings, and Integrations, all documented in the knowledge base as real sections of the live product, have no home in this repo at all.
3. **Brand guidelines are currently optional and off by default.** `src/lib/handoff.ts` and `brand-toggle.tsx` show the `.wozku` brand layer is a toggle, defaulting to off, only forced on under `HANDOFF_MODE`. A live product does not ship with its own brand as a togglable preference. That toggle was correct for a prototype exploring both looks. It is not correct for what ships.

**The conclusion:** the admin shell is Phase 1. Screen Setup and the campaign portability work are real and still need to happen, but they are refinements to two sections that live inside a frame that does not exist yet. Build the frame first, or every one of those sections gets rebuilt into it later anyway.

## Why this is Phase 1 and not a detour

Nothing here is new invention. It is the connective tissue the rest of this repo already assumes:

- The KB documents `/admin` as the root, with persistent top navigation exposing creation actions and a full set of sections beyond Repository and Campaigns: Community, Account Settings, Integrations, Users. None of that has anywhere to live in this codebase today.
- The design token system, the three theme layers, and the accessibility baseline are already excellent and already built. Phase 1 does not touch them. It puts them inside a frame instead of a strip.
- This is the cheapest point at which to build it. Every section added after this point either gets bolted onto the strip, which is already showing strain with two tabs, or gets rebuilt into a shell later. Building the shell now means Additional Settings, LeadSpark, and Community are born inside it instead of migrated into it.

## What Phase 1 is not

Not a redesign of Repository or Campaigns. Not the mode discriminator, not Screen Setup, not the campaign portability sweep. Those remain exactly as planned in `docs/Build-Plan-Campaign-Contest.md`, and can run in parallel with this once the shell exists. Phase 1 is strictly the frame: navigation, brand, identity, and the seams where future sections attach.

---

## Scope

### 1. A real navigation frame

**Decided, 7 August 2026: a 224px left rail, hidden entirely on Repository, revealed as an overlay from a hamburger in the content header.**

Replace the 40px utility strip with a persistent shell that has:

- **The Wozku identity mark** in place of the placeholder text "Content Planner."
- **A left rail** carrying primary navigation, structured to hold more than two items without redesign. Repository and Campaigns at minimum, with Community, Account Settings, and Integrations attachable as further items rather than a new pattern.
- **An account and settings area** pinned to the bottom of the rail. `currentUser` arrives as a prop, rendered as initials on `avatarTint()`. Menu contents are placeholders in this phase.
- **A content slot** that Repository and Campaigns render into. The shell does not impose `max-w-[1280px]` in Phase 1; the views keep their own containers. Deduplicating those three duplicate width containers is a follow-up.

Keep: the command palette, the search entry point, the keyboard shortcuts. These move into the new frame rather than being rebuilt.

#### The Repository exception

Repository is the widest surface in the app and the rail costs it 224px it cannot spare. So on Repository the rail is **not collapsed to icons, it is not rendered at all.**

- A hamburger sits top-left of the content header, always visible, always in the same place on every section.
- Activating it slides the rail in **as an overlay above the content**, not as a sibling in the flex row. Content never reflows, so the table never re-lays-out on nav open or close.
- Dismiss on select, on Escape, and on outside click.
- The overlay is a real dialog with focus trapping, so the global focus ring rules in `globals.css` apply without extra work.

This makes the rail's visibility a prop, not internal state: `railMode: "docked" | "overlay"`. Repository passes `"overlay"`, every other section passes `"docked"`. The shell owns only the transient open/closed boolean of the overlay, which is presentational and resets freely.

#### Component contract

Four new files, all named exports, all kebab-case, all fed by props only:

```
admin-shell.tsx    the frame, the content slot, railMode
nav-rail.tsx       items, activeId, onNavigate, badges
account-menu.tsx   user, items
wozku-mark.tsx     pure SVG, zero dependencies
```

```
<AdminShell
  brand={<WozkuMark />}
  items={NavItem[]}          activeId  onNavigate
  railMode="docked" | "overlay"
  onOpenSearch  searchHint="⌘K"
  utility={ReactNode}
  user={{ name, avatarUrl? }}  accountItems={MenuItem[]}
>
  {children}
</AdminShell>
```

`NavItem` gains a `badge?: number` field so the drafts count stops being special-cased inline, and a `placeholder?: boolean` field for the reserved seams in scope 4.

Nothing here imports `useCommandPalette`, `useBrandLayer`, `mock-data`, or `HANDOFF_MODE`. `section` state stays in `page.tsx`, because `Walkthrough.onNavigate` and the send sheet's `onNewCampaign` both drive it and the shell cannot be the source of truth.

**One constraint that is easy to violate:** the shell must not remount when `section` changes, or `Stagger` in `repository-shell.tsx` replays its entry animation on every navigation.

### 2. Apply brand guidelines as the default, not a toggle

**Decided, 7 August 2026: the `.wozku` brand layer is always on. Brand-off is removed from the product entirely. Dark and light both survive as brand variants.**

There is no unbranded look any more. `BrandMode` narrows from `"off" | "dark" | "light"` to `"dark" | "light"`.

- `read()` in `brand-toggle.tsx` drops its `HANDOFF_MODE ? "dark" : "off"` fallbacks and returns `"dark"` when nothing is stored.
- `apply()` stops toggling the `wozku` class conditionally; it is always present.
- `BrandToggle`, the on/off switch, is deleted. It is the only thing that could produce the unbranded state.
- `BrandVariantToggle`, the dark/light picker, moves out of the `HANDOFF_MODE`-only block in the top strip and into the account menu, where it is a normal user preference.
- The Dev Panel's `brandMode` / `onBrandMode` props narrow to the same two-value union.
- `.wozku.wozku-light` in `globals.css` stays and stays maintained. It is part of the brand guidelines, not a legacy look.

Consequence for `/CLAUDE.md`: the sentence describing `HANDOFF_MODE=false` as re-enabling "the brand-off look" becomes wrong and must be updated in the same change.

### 3. Remove Classic mode

**Decided, 7 August 2026: Classic is deleted, not carried into the new shell.** This closes Finding 6 from the program document. Classic mode (`AppVersion`, `src/lib/versions.ts`) forks the entire application, including its own sidebar, its own header, its own post-type modal, and a second table variant. A new shell makes that fork more expensive to maintain, not less, and every hour spent porting it into the frame is an hour spent on a mode that is not the product.

Removal is part of Phase 1, sequenced before the shell is built, so the frame is designed around one application rather than two.

**What deletes outright:**

| File | Lines | Note |
| --- | --- | --- |
| `src/lib/versions.ts` | 35 | `AppVersion`, `VERSIONS`, `versionMeta`, all Classic-only |
| `src/components/content-planner/campaign-sidebar.tsx` | 150 | Classic's sidebar, the only consumer is the Classic branch |
| `src/components/content-planner/version-switch-dialog.tsx` | 97 | Only exists to confirm a mode switch |
| `src/components/content-planner/version-preview.tsx` | 107 | Only consumed by the switch dialog |
| `src/components/content-planner/post-type-modal-classic.tsx` | 140 | `PostTypeModal` becomes unconditional |

**What changes in `src/app/page.tsx`:**

- Delete state: `mode`, `pendingVersion`, `sidebarCollapsed`, and the `VERSION_STORAGE_KEY` read and write.
- Delete the Classic render branch (roughly lines 1291 to 1431: sidebar, Classic header, Invite / New post / Screen Setup buttons, the submit-drafts button, the post-count footer).
- Delete `changeVersion` and `classicDrafts`.
- Collapse `composerLayout` to the constant `"canvas"` and `isCanvas` to `true`, then remove every branch they gate.
- Drop the `mode === "repository"` guards on `repoCampaign`, `screenSetupCampaign`, `campaignPageId`, `currentCampaignId`, `openCampaign`, the `SendSuccessModal` view handler, and both `Walkthrough` renders. All become unconditional.
- Drop the `mode === "classic"` branch in `createContent` that pushes a new post into `selectedCampaignId`.
- `useBrandLayer(mode === "repository")` becomes `useBrandLayer(true)`, and then folds into whatever scope 2 decides.
- Remove the `version`, `versions`, and `onVersion` props from `DevPanel` and their handling inside it.

**What survives with a narrowed role:** `selectedCampaignId` and `selectedCampaign` stay, because `InviteModal`'s `contextName`, the seed helper, and `openCampaign` still use them. `campaignSessions` loses its only consumer and goes with the Classic branch.

**Deferred to a follow-up, deliberately:** `sessions-table.tsx` carries a `variant: "classic" | "canvas"` prop that defaults to `"classic"`. Once the Classic branch is gone, every external caller passes `"canvas"`. Flip the default to `"canvas"` in Phase 1 and prune the dead branch in a separate pass, so the shell change stays a frame change and does not become a 1,800-line table refactor.

The stale `cp_version` localStorage key is left in place. Nothing reads it after this change and clearing it is not worth a migration.

### 4. Reserve the seams, do not build behind them yet

Add navigation entries and empty-state placeholder screens for the sections the KB documents but this repo has never designed: Community, Account Settings, Integrations. Do not design their content in this phase. The point is that Phase 1 proves the shell can hold them, so Additional Settings and LeadSpark, whenever they are scoped, attach to a nav item rather than needing a shell change.

---

## Sequencing against the rest of the roadmap

| Track | What | Depends on |
| --- | --- | --- |
| **Phase 1** | The admin shell: nav, identity, brand default, account area, reserved seams | Nothing. Can start immediately. |
| Mode discriminator | `CampaignMode`, gating the screen layer only | Nothing. Can run in parallel with Phase 1. |
| Screen Setup fixes | Dead controls, fallback signposting, preview fidelity | The mode discriminator |
| Campaign portability | The ID-to-fake-data pattern, `HANDOFF_MODE` gating, extracted duplicates | Nothing blocking, but cheapest once inside the new shell |
| Additional Settings | Coupons, Forms, Quiz, Booths | The reserved seams from Phase 1, plus the mode discriminator |

Phase 1 and the mode discriminator can start the same day, by different people or in different sessions, because they touch different layers: one is the frame, one is the data model.

---

## Definition of done for Phase 1

1. The application opens into a shell with a Wozku identity mark, not placeholder text.
2. Repository and Campaigns are entries in a navigation structure that has visible room for at least three more sections without a redesign.
3. There is an account and settings area in the frame, even if its contents are placeholders.
4. Brand guidelines always render. `BrandMode` has no `"off"` member, `BrandToggle` is deleted, and the dark/light picker lives in the account menu.
5. Classic mode is gone: the five files in scope 2 are deleted, `page.tsx` has no `AppVersion` state, and `npx tsc --noEmit` plus `npm run build` are both clean.
6. The command palette, search, and keyboard shortcuts all continue to work, relocated into the new frame.
7. Every new shell component passes the portability test in Part 0.4 of the program document: copy it into an empty Next.js project, does it render from its documented props.

---

## Prompt to start this in Claude Code

Paste this directly.

```
Load the wozku-context, wozku-admin-design, and wozku-kb skills first.

I want to start Phase 1 from docs/Phase-1-Admin-Shell.md: building a real admin
shell for this app. Read that file in full first, then read CLAUDE.md.

Right now the app has no navigation frame. src/app/page.tsx renders a 40px
utility strip (the literal text "Content Planner", a Repository/Campaigns tab
switcher, and a search box) and then one full-bleed view fills the rest of the
screen. There is no logo, no left rail or persistent top nav, no account area,
and no room to add a third section without redesigning the strip.

Before writing any code:

1. Audit src/app/page.tsx, the SECTIONS constant, and how mode/section state
   currently drives which view renders. Report exactly what state and props
   the new shell would need to own versus what it can keep delegating to
   page.tsx.
2. Propose a shell structure (I'm expecting a persistent nav frame, a content
   slot, and an account/settings area) and show me two or three layout
   directions before building anything. Use the existing design tokens from
   globals.css, the existing button and surface patterns, and keep the
   command palette / search / keyboard shortcuts working, just relocated into
   the new frame.
3. Do not touch Repository or Campaigns' internal content. This is a frame
   around them, not a redesign of them.
4. Flag whether brand guidelines (the .wozku class) should become the default
   in this shell rather than a toggle, per CLAUDE.md's HANDOFF_MODE behavior,
   and wait for my decision before changing that default.
5. Every new component you write must pass the portability test from the
   program document Part 0.4: no app-specific global state, data via props,
   flag any project-specific dependency in a one-line comment at the top of
   the file.

Give me the audit and the layout options first. Do not start building until
I've picked a direction.
```

## Open questions before starting

1. ~~**Left rail or top navigation?**~~ Answered: left rail, hidden on Repository, overlay reveal. See scope 1.
2. ~~**Does brand-off survive as a Dev Panel debug option, or is it removed entirely?**~~ Answered: removed entirely. `BrandToggle` is deleted, `BrandVariantToggle` relocates to the account menu. See scope 2.
3. ~~**What happens to Classic mode's sidebar** once a real shell exists?~~ Answered: Classic is removed. See scope 3.
4. **Which reserved seams get a nav entry in Phase 1?** Recommend Community and Account Settings at minimum, since both are documented in the KB as real, and Additional Settings is already known to be the next major build after this.
