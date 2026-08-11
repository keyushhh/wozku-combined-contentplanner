# Build Plan: Campaign and Contest

Working plan for the current design sprint. Written to be handed directly to Claude Code as a sequence of tasks.

**Scope:** finish Screen Setup, then close out the campaign and contest section to handoff quality.
**Audience:** the design team working in this repo, and the AI tools they direct.
**Verified against:** commit `c196e1d`. Audited 7 August 2026.
**Read first:** `docs/Wozku-Program-Document.md` Part 0, for what "done" means here.

---

## 0. Stop and decide this first

**Per the knowledge base, a Campaign has no live screen. That is the entire difference between the two modes.**

This is worth stating precisely, because the names "Contest" and "Campaign" invite the wrong mental model: two different products. They are not. They are one mechanism with one optional layer.

**The mechanism, identical in both modes:**

A person scans a QR code or clicks a link. They share a post (or, in a Campaign with multiple posts, they choose which one) to their own LinkedIn, X, Slack, or other connected account. That share is scored by the Wozku Score, which is engagement-based, not share-based: it weights the real engagement the shared post receives against the sharer's audience size, so a 300-follower advocate whose post lands can outrank a 10,000-follower account that posts and gets nothing. Every participant who has shared appears in the Community table with their score, ranked. All of this is identical whether the record is a Contest or a Campaign. Source: `docs/skills/wozku-kb/reference/06-participants.md`.

**The one thing that differs:**

A Contest projects that ranking live, on a physical or virtual screen, with Go Live, Pause, and Stop controls governing when it is visible and Winner Finalization triggered on Stop. A Campaign has no screen. The scoring and the Community table still exist underneath, nobody is watching them update on a wall in real time.

**Do not model the discriminator as gating scoring, the Community table, or the Wozku Score. Those apply to both modes identically and must not be touched.** The discriminator gates only the screen layer and what depends on a screen existing.

### The decision

Add an immutable mode to the campaign type:

```ts
export type CampaignMode = "contest" | "campaign";
```

Set at creation in the wizard, never changed afterward, matching the KB's rule that the type locks at creation and cannot be converted.

**What it gates, precisely:**

| Surface | Contest | Campaign | Why |
| --- | --- | --- | --- |
| Screen Setup entry point | Shown | Hidden | Depends on a screen existing |
| Go Live, Pause, Stop | Shown | Hidden | Screen lifecycle controls |
| Theme Settings | Shown | Hidden | Screen visual configuration |
| Embed Code | Shown | Hidden | Embeds the screen |
| Live QR routing to the screen | Shown | Hidden | The screen is what is being routed to |
| Winner Finalization | Shown | Hidden | Triggered by Stop, which does not exist without a screen |
| Additional Settings: Coupons, Forms, Quiz, Booths | Shown | Hidden | The KB calls this the Contest differentiation layer specifically |
| Header Image field | Hidden | Shown, Campaign-exclusive | Campaign's public landing page has no screen to show instead |
| **Wozku Score, Community table, participant ranking** | **Shown** | **Shown** | **Identical mechanism in both modes. Do not gate this.** |
| **Sharing flow: pick a post, share to a channel** | **Shown** | **Shown** | **Identical mechanism in both modes. Do not gate this.** |

**Cost:** one field on `Campaign`, one step-1 choice in the wizard, one migration default (`"contest"` preserves current behaviour for the two seeded records), and gating at the call sites in the top half of the table above. Small now. It touches every one of those surfaces later.

**Recommendation: do this before task 1.** It is roughly half a day and it prevents the rest of this plan being built twice.

---

## Part A: Finish Screen Setup

Ordered by consequence. Tasks 1 and 2 are the ones that would embarrass you in a demo call.

### Task 1: Remove or wire the controls that lie

The most damaging defect in a design prototype is a control that implies behaviour it does not have, because a demo call will approve it and the dev team will build the wrong thing.

**1a. `contest.qrTarget` and `contest.qrUrl` are written by the UI and read by nothing.**

`contest-panel.tsx` offers a QR target radio (share, quiz, form) and a URL field. Every QR on the live screen ignores both. The "Quiz link" and "Form link" input is a dead field today.

Per the KB this is real behaviour: QR routing can point at the Public URL, the Universal Share URL, or a specific Channel Ninja URL, per post. But quiz and form targets belong to the Additional Settings layer, which does not exist here yet.

Options, pick one:

- **Recommended:** narrow the control to what the screen can actually honour, which is QR routing target, and defer quiz and form until the Additional Settings layer is designed.
- Or: make the live screen QR read `qrTarget` and `qrUrl`, and accept that quiz and form point at externally hosted URLs for now.

Do not leave it as is.

**1b. Moment image slots that do nothing on the selected template.**

`moments.welcome.imageUrl` is read only by the Blade welcome renderer. Broadcast and Beacon both ignore it, yet the Moments panel offers the upload as though it applies. Same pattern for prize and thanks images on any non-Blade template, and `moments.leaderboard.imageUrl` which is read only when the board is empty.

**Fix:** make the Moments panel template-aware. If the selected template does not consume a field, either hide the control or show it disabled with a one-line reason. A designer should never be able to upload an image that silently does nothing.

**1c. The Moments section on single-view templates.**

For `relay`, `mosaic`, and `ledger` there is no moment rotation. All six enable flags and five of the six duration values are inert. The only live control is seconds-per-post.

Current copy says "images and durations below still apply where the layout uses them," which is generous to the point of misleading.

**Fix:** for single templates, collapse the Moments section to the one control that works, and say plainly that this template shows one persistent view.

### Task 2: Signpost the moment fallback

`momentRenderer()` falls back to the Blade renderer for any moment a sequence template does not implement.

| Template | Implements | Falls back to Blade for |
| --- | --- | --- |
| `blade` | all six | none |
| `broadcast` | welcome, posts | leaderboard, featured, prize, thanks |
| `beacon` | welcome, posts, leaderboard | featured, prize, thanks |

Nothing crashes. But enabling Prize on Broadcast produces a Blade prize card wrapped in Broadcast chrome: a different type scale and a different layout language, inside a frame that does not expect it. Beacon is worse, because its whole identity is enormous mono type and Blade's cards are not.

**Fix, cheapest first:**

1. Mark fallback moments in the Moments panel with a short note ("uses the default layout on this template").
2. Preview the fallback honestly, which task 3 enables.
3. Decide per template whether to implement the missing moments natively or to disable them for that template. Implementing Broadcast's leaderboard is the highest-value one, since a news-desk template without standings is odd.

### Task 3: Make the preview tell the truth

`screen-preview.tsx` renders the real `LiveScreen`, which is the right architecture. Three fidelity problems:

- **`running={false}`.** Nothing rotates. For a sequence template with no pinned moment the preview freezes on the first moment, so the operator cannot see the sequence they are configuring. Add a play toggle, defaulting to paused so it is not distracting.
- **The paused state is a different design from the real paused page.** `screen-preview.tsx` shows one card, `live-screen-page.tsx` shows another. Pick one and share it.
- **Moment dots render inside the preview and inside every template thumbnail.** That is runtime chrome leaking into a configuration surface. Suppress it in preview contexts.

Also: pinning bypasses the active-moments list, so the preview can display a moment the live loop will never play. That is correct for the leaderboard-only embed, and wrong as silent behaviour in the preview. Show a note when a pinned moment is disabled.

### Task 4: Close the gap against the knowledge base

Screen Setup is missing Contest Settings that exist in the live product. Source: `docs/skills/wozku-kb/reference/02-creating-a-contest.md`.

| Live product setting | In this repo | Action |
| --- | --- | --- |
| Page Refresh Interval | No | Add. The KB notes it should be lowered in large rooms, so it is operationally real. |
| Show QR, with Top / Bottom / Hidden | No | Add. Position is a layout decision the designer should own. |
| Show Gift Image | No | Add, tied to the prize moment |
| Show Post Preview | No | Add |
| Winner Finalization, default or custom criteria | No | Design it. Triggered by Stop. Blocked on the prize model, see open questions. |
| Leaderboard title, ranked toggle, CTA text, locale | Yes | Done |
| Clear leaderboard | Yes | Done |
| Embed code | Yes | Done |

Winner Finalization is the significant one and it is currently absent from a Contest's entire lifecycle. Stopping a contest in the live product triggers it. Here, Stop just ends the campaign.

### Task 5: Portability pass on this area

Per Part 0.4 of the program document, this is a definition-of-done item, not cleanup.

**5a. The accordion state leak, and it is the biggest blocker here.** `SetupSectionId` is a hardcoded union of this one screen's five sections, exported from `setup-section.tsx` and threaded into `ThemePanel` and `ContestPanel` as `openSection` and `onToggleSection`. Neither panel can be copied into another project without adopting this page's section model.

**Fix:** `SetupSection` takes plain `open` and `onToggle` booleans. Move the id union into the page. Each panel stops knowing the vocabulary of its siblings.

**5b. Consistency.** `ThemePanel` receives both `campaign` and `theme`, where `theme` is always `campaign.theme`. `ThemeStudioDialog` receives only `campaign` and derives the theme itself. Pick one, and prefer passing `theme` alone so neither knows the `Campaign` shape.

**5c. Extract the duplicates.**

| Duplicated | Where | Fix |
| --- | --- | --- |
| The toggle switch markup | `theme-controls.tsx`, `screen-setup-page.tsx`, `contest-panel.tsx` | One `Switch` in `components/ui/` |
| Copy-to-clipboard with a 2 second flash | `screen-setup-page.tsx`, `contest-panel.tsx`, and three more in the campaign area | One `CopyLinkRow` |
| `window.location.origin` with an SSR guard | Four places in this area alone | One helper in `src/lib/` |
| `publicScreenPosts` logic | Reimplemented inline in `screen-setup-page.tsx` | Import it, per the convention that domain logic lives in `src/lib` |

**5d. Cross-feature imports.** `contest-panel.tsx` imports `ConfirmDialog` from the content-planner folder. Either promote shared dialogs to `components/ui/` or accept the coupling and note it in a single-line comment at the top of the file, per `/CLAUDE.md`.

**5e. Dead code.** `templatePreviewTheme()` in `screen-theme.ts` has no callers; `TemplateGrid` builds its own preview theme inline. Delete one of them.

**5f. Type the accent.** `accent` is `string` while `mode` and `font` are unions. Nothing prevents an invalid value; `accentOf` silently falls back to violet. Make it a union of the six accent ids.

### Task 6: Accessibility on the post reorder

The post list uses drag and drop with no keyboard equivalent. The dropdown's Move up and Move down is the only accessible path, which is acceptable, but the grip has `cursor-grab` and no role or tab index, so it reads as interactive to a sighted mouse user and as nothing at all to a keyboard user.

**Fix:** give the grip a role and a tab index with arrow-key reordering, or remove the affordance and rely on the menu. The repo's accessibility baseline is otherwise strong and this is the one place it slips.

---

## Part B: After Screen Setup

Sequenced. Each item assumes the mode discriminator from section 0 exists.

### B1. Campaign mode, end to end

With the discriminator in place, the Campaign path is currently unspecified. Per the KB it needs: a three-step wizard (Setup, Posts, Completed), the Header Image at 1920x400 as a Campaign-exclusive field, a public landing page, and a multi-post interval control with real values (0, 1, 2, 4, 6, 12, 24, 36, 48 hours) rather than the boolean that exists today.

The repo has `headerUrl` and a 1920x400 image box already, so this is mostly gating and wizard branching.

### B2. The Additional Settings layer

The largest single gap between this prototype and the live product. Coupons, Forms with 18 field types, form submissions, Quiz, and Booths. The KB calls it "the Contest differentiation layer," which makes it commercially significant, and none of it is designed here.

This is a substantial design effort and should be scoped as its own sprint, not appended to this one. Start with Forms, because Quiz and LeadSpark both depend on the form primitives.

### B3. Portability sweep across the campaign area

The screen-setup portability work in task 5 is the same job the campaign area needs, and the audit found it worse there:

- Six components take an identifier and manufacture their own data. `campaign-performance-card.tsx` and `campaign-stats-row.tsx` are the clearest: give them a metrics object and a series, and drop the fabrication imports.
- `campaign-page.tsx` has 18 inline `HANDOFF_MODE` checks. Either label the file app-specific at the top, which `/CLAUDE.md` permits, or lift the flag into a `capabilities` prop.
- `campaign-stats-row.tsx` builds mock data at module scope and points an avatar at an external URL. Both should go.
- No file carries the single-line dependency comment `/CLAUDE.md` requires. Adding it everywhere is an hour of work and makes every non-portable import visible at the point of copy.

Full detail in `docs/Wozku-Program-Document.md`, Finding 15.

### B4. Extract shared campaign logic

The audit found duplication worth collapsing into `src/lib/`:

- Campaign public URL construction plus copy-to-clipboard, written five times
- Campaign metric seeds, three places, which disappears once B3 is done
- Settings toggle labels and hints, duplicated between `campaign-settings-panel.tsx` and `campaign-form.tsx`, with one key hardcoded a third time
- `initials()`, redefined while already exported from another module
- Draft form state and the validation gate, identical between the wizard's step 1 and the editor. Extract a `useCampaignDraft` hook.

### B5. Fix the fragile bit

`campaign-create-wizard.tsx` does a non-null assertion on a campaign lookup at step 2. If the parent has not committed the created campaign, that crashes. It is a real fragility, not a style issue, and it sits in the middle of the primary creation flow.

---

## Suggested order

| # | Task | Size | Why here |
| --- | --- | --- | --- |
| 1 | Mode discriminator (section 0) | S | Determines whether Screen Setup should render at all |
| 2 | Controls that lie (task 1) | M | A demo call must not approve a dead control |
| 3 | Moment fallback signposting (task 2) | S | Same reason, cheaper |
| 4 | Preview fidelity (task 3) | M | Unblocks judging tasks 2 and 4 |
| 5 | Contest Settings gap (task 4) | M | Screen Setup is not complete without them |
| 6 | Portability, this area (task 5) | M | Definition of done |
| 7 | Reorder accessibility (task 6) | S | Small, and the baseline is otherwise strong |
| 8 | Campaign mode end to end (B1) | M | Now unblocked |
| 9 | Portability sweep, campaign area (B3, B4, B5) | L | Before the surface grows further |
| 10 | Additional Settings layer (B2) | XL | Its own sprint |

Winner Finalization sits inside task 4 but is blocked on the prize model, which is an open business decision. Design the rest of task 4 without it.

---

## Definition of done, applied here

From Part 0.5 of the program document. Screen Setup is finished when:

1. Every state is reachable by clicking: no template, each of the six templates, empty post list, paused, ended, and every moment enabled and disabled.
2. No control writes state that nothing reads.
3. No control is offered when the selected template ignores it.
4. The preview matches what the live screen will actually do, including fallbacks.
5. `ThemePanel` and `ContestPanel` can be copied into an empty Next.js project and render from their props.
6. Domain logic is imported from `src/lib`, not reimplemented inline.
7. Anything the prototype cannot express, notably Winner Finalization and the Additional Settings layer, is written down for the dev team.

---

## Open questions this plan surfaces

1. **Should Screen Setup be hidden for Campaign mode, or shown disabled with an explanation?** Hidden matches the live product. Shown-disabled teaches the distinction. This is a product decision.
2. **What is the prize model?** Blocks Winner Finalization. Name, tier, quantity, eligibility, winner selection, notification. Nothing exists in the repo or the KB.
3. **Do the six templates here replace the live product's four themes, or coexist?** Affects whether `ledger` and `beacon` need naming that matches the live product. See the mapping in `docs/skills/wozku-kb/reference/BUILD-BACKLOG.md`.
4. **Should QR routing be per post or per campaign?** The KB says per post. The repo models it per campaign on `ContestSettings`.
5. **Does Broadcast get a native leaderboard, or does it disable that moment?** Currently it silently borrows Blade's.
