# Phase 1 progress and session handoff

Live status of the admin shell build. **Read this plus `docs/Phase-1-Admin-Shell.md` before continuing Phase 1 in a new session.**

Last updated 7 August 2026, after step 3 of 3.

---

## Handoff prompt

Paste this into a fresh chat to continue without losing the thread.

```
Load the wozku-context, wozku-admin-design and wozku-kb skills by reading
docs/skills/*/SKILL.md directly (they are not registered as invocable skills).
Then read docs/Phase-1-Admin-Shell.md and docs/Phase-1-Progress.md in full,
then CLAUDE.md.

We are mid-way through Phase 1: replacing the app's 40px utility strip with a
real admin shell. Steps 1 to 3 are done and verified (Classic mode removed,
brand layer made permanent, AdminShell built and wired). What remains is listed
under "Not done yet" in docs/Phase-1-Progress.md.

Decisions already made, do not relitigate them:
- Classic mode is deleted. There is one application, not two.
- The .wozku brand layer is always on. BrandMode is "dark" | "light"; there is
  no unbranded state and no on/off toggle.
- Navigation is a 224px left rail, docked on every section EXCEPT Repository,
  where it is not rendered at all and is revealed as an overlay from a
  hamburger in the content header. Content never reflows when it opens.
- Reserved seams are Community and Account Settings only. Not Integrations.

Follow the CLAUDE.md workflow: audit first, propose, wait for approval on
anything non-trivial, and run `npx tsc --noEmit` plus `npm run build` after
every change and report pass or fail.
```

---

## What the problem was

`src/app/page.tsx` rendered a 40px strip holding the literal text "Content Planner", a two-tab Repository/Campaigns switcher and a search box, then one full-bleed view below it. No logo, no persistent nav, no account area, and no room for a third section without redesigning the strip. Phase 1 replaces that strip with a real frame so Community, Account Settings, Additional Settings and LeadSpark attach to a nav item instead of forcing a shell change later.

## Done and verified

Each step was verified with `npx tsc --noEmit -p tsconfig.json` and `npm run build`, both clean, before the next began.

### Step 1: Classic mode removed

Deleted: `src/lib/versions.ts`, `campaign-sidebar.tsx`, `version-switch-dialog.tsx`, `version-preview.tsx`, `post-type-modal-classic.tsx` (529 lines).

In `page.tsx`: removed `mode`, `pendingVersion`, `sidebarCollapsed`, `VERSION_STORAGE_KEY`, `changeVersion`, `classicDrafts`, `campaignSessions`, the entire Classic render branch, and every `mode === "repository"` guard on `repoCampaign`, `screenSetupCampaign`, `campaignPageId`, `currentCampaignId`, `openCampaign`, `SendSuccessModal` and both `Walkthrough` renders. `composerLayout` collapsed to the constant `"canvas"`. `DevPanel` lost its `version` / `versions` / `onVersion` props.

`page.tsx` went 1,864 to 1,594 lines at this point.

### Step 2: brand layer made permanent

`BrandMode` narrowed from `"off" | "dark" | "light"` to `"dark" | "light"`. `BrandToggle` (the on/off switch) deleted. `read()` returns `"dark"` when nothing is stored; `apply()` always adds the `wozku` class. `layout.tsx` now renders `className="dark wozku ..."` on `<html>` so there is no unbranded first paint. Dev Panel's brand segment dropped its "Off" option.

`CLAUDE.md` and the `handoff.ts` header comment were corrected: they both claimed `HANDOFF_MODE=false` re-enables "the brand-off look", which is no longer true.

### Step 3: the shell

Four new components under `src/components/shell/`, all named exports, all props-only:

| File | Role |
| --- | --- |
| `admin-shell.tsx` | The frame: top bar, content slot, `railMode` docked/overlay, focus-trapped overlay |
| `nav-rail.tsx` | 224px rail, exports the `NavItem` type, badges and "Soon" markers |
| `account-menu.tsx` | Avatar, initials via `avatarTint()`, menu items, a `footer` slot |
| `wozku-mark.tsx` | Placeholder wordmark, swap the SVG when the real asset lands |
| `section-placeholder.tsx` | The empty state the reserved seams render |

`page.tsx` now composes `<AdminShell>` around the existing views. `AppSection` widened to `"repository" | "campaigns" | "community" | "settings"`. `SECTIONS` became a `NavItem[]`; `SECONDARY_SECTIONS` holds Account Settings below a divider. `section` state is still owned by `page.tsx`, because `Walkthrough.onNavigate` and the send sheet's `onNewCampaign` both drive it.

**Verified in a real browser** (headless Chrome against `next dev`, zero console errors):

- Repository renders with no rail and a hamburger present.
- The hamburger opens a `role="dialog"` overlay; content does not reflow behind it.
- Selecting Campaigns from the overlay docks the rail and removes the hamburger.
- Community renders the placeholder empty state.
- The account menu opens with the dark/light brand picker in its footer.

### Step 4: Campaign render chain refactored & shell breadcrumbs added

Replaced the 4 fragmented campaign state hooks (`repoCampaignId`, `editingCampaignId`, `campaignWizard`, `screenSetupCampaignId`) in `src/app/page.tsx` with a single discriminated union state (`CampaignView`):

- `list`: Viewing all campaigns (`CampaignsView`).
- `detail`: Viewing a campaign's page (`CampaignPage`).
- `edit`: Editing campaign settings (`CampaignEditor`).
- `screen-setup`: Configuring screen setup (`ScreenSetupPage`).
- `wizard`: Creating a new campaign (`CampaignCreateWizard`).

Added `breadcrumbs?: BreadcrumbItem[]` prop to `AdminShell` and rendered a dynamic breadcrumb trail in the shell header with clickable navigation links and `ChevronRight` dividers.

### Step 5: Main Admin Dashboard built & set as default launch section

Created `src/components/admin/admin-dashboard.tsx` matching the live Wozku admin design:
- **8 Metric Summary Cards**: Potential Reach, Total Posts, Total Shares, Total Clicks, Form Fills, Total Comments, Total Likes, Shares Remaining (99/100 meter).
- **Popular Campaigns & Popular Posts Split View**: Interactive cards & tables linked to campaign/session details and ROI calculator.
- **Community Dashboard Section**: Stat overview, Running Contests summary table, Advocacy Users tabbed form (`Invite Advocates`, `Invited Advocates`, `New Joining Requests`), and Enquiries & Redemptions card.
- **Header Quick Action Buttons**: Added `+ Contest`, `+ Campaign`, `+ Forms (Beta)` quick creation actions to `AdminShell` header.
- **Default Launch Section**: Set `AppSection` default to `"dashboard"`, making the Admin Dashboard the initial landing view on app open.

## Not done yet

1. **The overlay close button was repositioned after the screenshots were taken.** It originally overlapped the first nav item; it now sits in its own `h-11` header row inside the panel. Build and typecheck pass, but this specific change has not been looked at in a browser. Verify it first.
2. **`sessions-table.tsx` still carries the dead `variant="classic"` branch.** The default was flipped to `"canvas"` and every caller passes `"canvas"`, but roughly 100 lines of unreachable classic styling remain in a 1,860-line file. Deliberately deferred so the shell change stayed a frame change.
3. **Three duplicated `max-w-[1280px] px-6` containers.** `repository-shell.tsx`, `campaigns-view.tsx` and `campaign-page.tsx` each impose their own width. The shell deliberately does not, to avoid touching view internals. Consolidating is a follow-up.
4. **The Wozku mark is a placeholder.** A geometric W plus the wordmark in the heading font. Swap the `<svg>` in `wozku-mark.tsx` when the real asset exists.
5. **`accountItems` are placeholders.** Profile, Integrations and Sign out are all `disabled`. Only Keyboard shortcuts does anything.

## Things that will bite you

- **The shell must not remount when `section` changes**, or `Stagger` in `repository-shell.tsx` replays its entry animation on every navigation. Keep `AdminShell` above the section conditional.
- **Tour anchors live inside the views**, not the shell. `APP_TOUR` step 1 targets `repo-header`, which is Repository's own `<h1>`. If the shell ever absorbs page titles, that anchor moves with it.
- **`TourSection` is still `"repository" | "campaigns"`** while `AppSection` now has four members. Both `Walkthrough` call sites narrow with `section === "campaigns" ? "campaigns" : "repository"`. Widening `TourSection` without adding tour steps would break that.
- **The stale `cp_version` localStorage key is intentionally left behind.** Nothing reads it.
- **`.next` in this working tree accumulates duplicated ` 2.ts` files** that make `tsc` report phantom duplicate-identifier errors. `rm -rf .next` before believing a typecheck failure.
