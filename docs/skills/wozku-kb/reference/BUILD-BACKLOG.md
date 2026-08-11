# KB to Repo Build Backlog

How every capability in the live Wozku platform maps to the current state of the `wozku-combined-contentplanner` prototype.

**Verified against:** repo commit `c196e1d`, and the KB captured 7 August 2026.

## How to read this

The KB is the **target state**. The prototype is being built toward it. Every row below is therefore either done, partly done, or a future build item. Nothing here is a defect in the KB or a contradiction to resolve.

| Status | Meaning |
| --- | --- |
| **Built** | Exists in the repo and behaves broadly as the KB describes |
| **Partial** | Exists in some form, but materially narrower than the KB, or present as interface with no behaviour |
| **Not built** | No equivalent in the repo |
| **Ahead** | The repo has gone further than the KB documents |

## Vocabulary map

The same concept has different names in the KB and in the code. Both are correct in their own context.

| KB term | Repo term | Where |
| --- | --- | --- |
| Post | `Session` | `src/lib/types.ts`. Historical naming. A rename is recommended. |
| Contest / Campaign (two modes) | `Campaign` with `contest: ContestSettings` nested | One entity, no mode discriminator. See the modelling note below. |
| Participant / advocate | No entity | The repo has no person model at all |
| Wozku Score | `score` in `leaderboard.ts` | Fabricated. `shares x random_weight`. |
| Potential Reach | `mockCount` output | Fabricated |
| Channel | `Platform` | Union of `linkedin`, `x`, `slack`, `facebook`, `instagram` |
| Screen theme | Screen template | KB has 4 themes, repo has 6 templates. Mapping below. |
| Media Library | Media Library | Same name, same concept |
| Additional Settings | `CampaignSettings` | Four booleans, none implemented |

## The modelling correction this KB resolves

The KB presents Contest and Campaign as two types, **chosen at creation and not convertible**. But both live at `/admin/campaigns/{ID}`, both use `campaigns/{hash}` URLs, and the KB states that a Contest "starts from a campaign record."

**Therefore: one record type with an immutable mode discriminator, not two entities.**

The repo's single `Campaign` entity is the right shape. What it lacks is the discriminator. Recommended addition:

```
type CampaignMode = "contest" | "campaign";
```

Set at creation, immutable thereafter. This supersedes the earlier recommendation in `docs/Wozku-Program-Document.md` (Finding 4) to treat the two as presets. Presets were close, but the KB is explicit that the choice locks at creation, which makes it a discriminator rather than a preset.

**What the discriminator actually gates, and the mistake to avoid.** The underlying mechanism is identical in both modes: a person scans a code or clicks a link, shares a post (choosing which one, if there are several) to a connected channel, and that share is scored by the Wozku Score, an engagement-based model that weights real engagement against audience size so a small engaged account can outrank a large passive one. Every sharer appears in the Community table, ranked, in both a Contest and a Campaign. None of that is gated by the discriminator.

The only thing a Contest has that a Campaign does not is the **live screen layer**: the physical or virtual projection of that same ranking, plus the lifecycle controls that govern it. Gate exactly that layer, listed in full in `docs/Build-Plan-Campaign-Contest.md` section 0. Do not gate scoring, the Community table, or the share flow itself, they are not Contest-specific.

## Screen theme mapping

The KB documents four Campaign Themes in the live product. The repo has six templates and appears to be a redesign of them.

| KB theme (live) | Description | Likely repo template | Confidence |
| --- | --- | --- | --- |
| **Legacy Screen** (default) | Classic dark / light layout, general purpose | `blade` | Medium |
| **Aura Live** | High-impact event display with live leaderboard, large events | `relay` (the racetrack) | High |
| **Live TV Leaderboard** | Real-time leaderboard for TV and large displays | `broadcast` (news desk, ticker) | High |
| **Grid Gallery - Wozku View** | Responsive 64-grid of participant photos, social wall | `mosaic` (tile wall) | High |
| n/a | | `ledger` | New in repo |
| n/a | | `beacon` | New in repo |

**This mapping is inferred, not documented. Confirm it before relying on it.**

**It also resolves an open item.** The meeting action "rename Legacy theme to Classic" refers to the live product's **Legacy Screen** theme, which does exist. The earlier assessment in `docs/Wozku-Program-Document.md` that this item "appears superseded" was wrong, because that document was written before the KB was available. The rename is a live-product change, and the repo should adopt whichever name is settled on.

## Section by section

### 01 Getting Started

| KB capability | Status | Repo detail |
| --- | --- | --- |
| Contest and Campaign as distinct modes | **Partial** | One entity, no discriminator. See modelling correction above. |
| Credits, shares and top-up | **Not built** | No credit, metering or billing entity anywhere |
| Consumption pricing, one credit per share | **Not built** | Nothing counts shares |
| Logging in, password recovery, 2FA | **Not built** | No auth. One hardcoded `currentUser`. |
| Sub-account switcher | **Not built** | `SubAccount` type exists, invite modal goes nowhere |
| Dashboard overview | **Partial** | Repository and Campaigns views exist, all metrics simulated |
| Multi-track and multi-location playbook | **Not built** | No concept of tracks or locations |
| Four use-case archetypes | **Not built** | No programme templates |

### 02 Creating a Contest

| KB capability | Status | Repo detail |
| --- | --- | --- |
| Four-step wizard: Setup, Posts, Screen Setup, Dashboard | **Partial** | Repo wizard is three steps and creates the campaign at end of step 1 |
| Logo as a hard gate | **Built** | `CAMPAIGN_REQUIRED` includes logo |
| Campaign name, description, redirect URL, thank you, end date, LinkedIn Company ID, tags | **Built** | All present on `Campaign` |
| Post Image vs Embed Code, mutually exclusive | **Partial** | Repo models post types as Image, Frames, Reshare, PDF, which is a different taxonomy |
| Post image 1200x628 | **Not built** | Repo image boxes are logo 300x300, header 1920x400, screen 1920x1080 |
| Frame 1280x720 | **Partial** | `Frames` is a post type, no dimension enforced |
| Media Library | **Built** | Folders, type filtering, per-post-type restrictions |
| Post Variations, manual | **Built** | Full A/B variation manager, max 3 assets per variation |
| Post Variations, AI generated | **Partial** | `variation-generator.tsx` is string templating with an artificial delay. No model, no network call. |
| Hook Format, Structure, Use Case, CTA option lists (16 each) | **Partial** | Repo has its own shorter option vocabularies |
| Booster Post, extra points | **Not built** | No points model to boost |
| Screen Setup step | **Built** | `screen-setup-page.tsx`, 555 lines |
| Theme Settings, 7 tabs | **Partial** | Repo has template grid, theme panel, moments. Different structure. |
| Embed Code | **Built** | `contest-panel.tsx` builds an iframe snippet |
| Dashboard analytics | **Partial** | Present, entirely simulated |

### 03 Running a Live Contest

| KB capability | Status | Repo detail |
| --- | --- | --- |
| Go Live | **Built** | `takeCampaignLive`, gated on `canGoLive` |
| Pause and Resume | **Built** | `setCampaignPaused` |
| Stop | **Built** | `stopCampaign`, kept separate from `endDate` |
| Winner Finalization on Stop, default or custom criteria | **Not built** | No winner concept, no prize entity |
| Individual post toggle on the screen | **Built** | `hiddenSessionIds`, per campaign |
| Hold & Fire scheduled fire | **Partial** | `settings.holdAndFire` toggle exists, zero implementation |
| Leaderboard reset | **Partial** | `contest.leaderboardCleared` flag exists, clears a fabricated board |

### 04 Sharing

| KB capability | Status | Repo detail |
| --- | --- | --- |
| Public URL `wozku.com/post/{hash}` | **Partial** | Repo route is `/p/[id]`. Reads localStorage with SSR off, so it renders only in the authoring browser. |
| Universal Share URL `wozku.com/share/post/{hash}` | **Not built** | No channel picker page |
| Channel Ninja URL `wozku.com/share/{channel}/{hash}` | **Not built** | `platformSharePath` produces `/p/{id}?share={platform}`, which routes through the landing page rather than direct to OAuth |
| Under 60 seconds scan to post | **Not built** | No OAuth, no publishing integration |
| QR code generation, SVG and PNG | **Partial** | Real QR via the `qrcode` package in the admin links panel. The live screen QR is a decorative, non-scannable grid. |
| QR routing choice per post | **Partial** | `contest.qrTarget` stores share, quiz or form. No behaviour. |
| Screen Preview URL, multi-screen projection | **Partial** | `?only={momentId}` pins a moment |
| Public dashboard PIN | **Not built** | No public dashboard, no PIN |

### 05 Additional Settings

| KB capability | Status | Repo detail |
| --- | --- | --- |
| Coupons, import and distribute | **Not built** | |
| Forms, 18 field types across Core, Choice, Advanced | **Not built** | |
| Form submissions view and export | **Not built** | |
| Quiz, with scoring, attempts, navigation, result display | **Not built** | `qrTarget: "quiz"` is a stored value only |
| Booths, CSV import for multi-sponsor attribution | **Not built** | |
| Incentive and reward design | **Not built** | No prize entity |

**This whole section is unbuilt.** The KB calls it "the Contest differentiation layer," which makes it commercially significant. It is the largest single gap.

### 06 Participants and Community

| KB capability | Status | Repo detail |
| --- | --- | --- |
| Community table, per participant | **Not built** | No participant entity. `leaderboard.ts` has 12 hardcoded names. |
| Wozku Score, 13+ parameters, proprietary | **Not built** | `shares x random_weight` from a PRNG |
| Wozku Points per share, campaign score, global lifetime score | **Not built** | No three-level aggregation |
| Potential Reach | **Not built** | `mockCount` output |
| Channel filter with session persistence | **Not built** | |
| CSV export, filter aware | **Partial** | `shareLedgerCsv` exists and exports fabricated data |
| ROI Calculator, Earned Media Value | **Partial** | `roi-sheet.tsx` takes real inputs, all metrics simulated, nothing saved |
| Hide participant from leaderboard | **Not built** | |

### 07 Creating a Campaign

| KB capability | Status | Repo detail |
| --- | --- | --- |
| Three-step Campaign wizard | **Partial** | Repo has one wizard, no mode branching |
| Header Image 1920x400, Campaign exclusive | **Partial** | `headerUrl` and `HEADER_BOX` at 1920x400 exist, but are not mode gated |
| Campaign lacks screen, leaderboard, lifecycle controls | **Not built** | No mode discriminator to gate on |
| Multi-post interval, 0 to 48 hours | **Partial** | `settings.multiPostIntervals` boolean only, no interval value, no behaviour |
| UGC mode | **Not built** | |
| `@Mentions` default in post copy | **Built** | Full mention parsing and directory, though the directory is fabricated |
| Enable SPA | **Not built** | |

### 08 LeadSpark

| KB capability | Status | Repo detail |
| --- | --- | --- |
| Standalone global form with Contest Form toggle | **Not built** | Entire feature absent |
| Form URL plus contest screen URL pair | **Not built** | |

### 09 Account and Settings

| KB capability | Status | Repo detail |
| --- | --- | --- |
| Account settings | **Not built** | |
| Users, roles, sub-accounts | **Not built** | `SubAccount` type and an invite modal that goes nowhere |
| Integrations | **Not built** | |
| Trust, privacy, compliance: SOC 2, GDPR, AWS, encryption | **Not built** | No backend to secure |

### 10 Channels

| KB capability | Status | Repo detail |
| --- | --- | --- |
| Five channels in the type system | **Built** | `Platform` union matches exactly |
| Per-post channel selection | **Built** | `platforms` on both `Session` and `Campaign` |
| Per-channel character limits | **Built** | LinkedIn 3000, X 280, Slack 4000, Facebook 63206, Instagram 2200 |
| LinkedIn GA, Twitter GA, Slack Beta, Facebook and Instagram Private Beta | **Partial** | `GRANTED_PLATFORMS = ["linkedin"]` is a hardcoded entitlement, not a real status model |
| OAuth authorisation per channel | **Not built** | No OAuth anywhere |
| Actual publishing to any channel | **Not built** | Platforms are labels only |
| Ninja URL direct-to-OAuth routing | **Not built** | |

## Where the repo is ahead of the KB

Worth protecting, because these are real assets.

| Repo capability | Note |
| --- | --- |
| Six screen templates versus four KB themes | `ledger` and `beacon` have no live equivalent. `beacon` in particular targets extreme legibility, readable from the back of a hall. |
| Container-query sizing on all screen templates | A template renders identically in a 200px preview and on a 4K projector |
| The design token system | Three theme layers, a brand remap, and a full accessibility baseline (reduced motion, reduced transparency, increased contrast) |
| Post readiness gating | Copy plus at least one asset, Reshare exempt. A clean, framework-free rule the KB does not describe. |
| Staged versus submitted lifecycle per (post, campaign) pair | More precise than anything documented in the KB |
| Feedback threads and post history on a post | Editorial workflow the KB does not cover |
| Moment-based screen sequencing | Six moments with per-moment duration and enablement |

## Suggested build order against the KB

This refines Part VIII of `docs/Wozku-Program-Document.md` with KB detail now available.

**Phase 1, close the loop.** Backend, auth, org and sub-accounts, real media storage, server-rendered public routes. Then the three URL types exactly as the KB specifies them: Public URL, Universal Share URL, and Channel Ninja URL. Then LinkedIn OAuth and real publishing. Then real QR on the screen.

**Phase 2, make it truthful.** Participant entity. Real share, click and engagement capture. The Wozku Score three-level aggregation, noting the formula is proprietary and must come from the business, not be invented. Potential Reach. Earned Media Value in the ROI calculator. Credits and metering.

**Phase 3, the differentiation layer.** The whole of section 05: Coupons, Forms, Quiz, Booths. Then Booster Posts, Hold & Fire, multi-post intervals, UGC mode, Winner Finalization. Then LeadSpark.

**Phase 4, consolidate.** The mode discriminator. The `Session` to `Post` rename. Theme naming alignment with the live product. Remaining channels beyond LinkedIn.

## Open questions this KB raises

1. **What is the Wozku Score formula?** Deliberately undisclosed publicly. The prototype needs the real one from the business, or an explicitly stated interim rule. It cannot be invented.
2. **Do the repo's six screen templates replace the live product's four themes, or coexist with them?** The mapping above is inferred.
3. **Is the repo's post-type taxonomy (Image, Frames, Reshare, PDF) replacing the KB's Post Image versus Embed Code model, or additive?**
4. **Does the mode discriminator get added before or after the backend?** It changes the schema, so before is cheaper.
5. **Which channel ships second after LinkedIn?** The KB says Twitter is already GA in the live product.
6. **Do the Facebook and Instagram KB articles need republishing upstream?** They are truncated at source, so their real constraints are undocumented.
