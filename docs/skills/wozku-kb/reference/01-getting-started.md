# 01 Getting Started

Dense reference for the Wozku Knowledge Base "Getting Started" section: product model, Contest vs Campaign, credits and pricing, admin login, dashboard layout, onboarding arc, use-case archetypes, gamification levers, and the multi-track/multi-location playbook.

Source: https://wozku.com/kb/01-getting-started/

Note: "What is Wozku?" (https://wozku.com/kb/01-getting-started/what-is-wozku/) is not repeated here; it is covered in SKILL.md.

## Contest vs Campaign - Which One to Use?
Source: https://wozku.com/kb/01-getting-started/contest-vs-campaign/

Prerequisites: Wozku admin account at `https://wozku.com/admin`; use case classified as live in-person event (Contest) or always-on / email-driven sharing programme (Campaign). Type must be decided before clicking **+ Contest** or **+ Campaign**.

### Core difference
- **Contest**: runs on a live public screen. Carries leaderboard, QR code, **Go Live** / **Pause** / **Stop** controls, and the **Additional Settings** layer (Coupons, Forms, Quiz, Booths). Every post carries its own **Screen Preview URL**, so one Contest can drive a main screen plus a dedicated screen in every breakout room, booth, or roadshow location, all feeding the same leaderboard.
- **Campaign**: generates a landing page URL for participants to visit and share from. No leaderboard, no screen, no QR on a monitor. Built for always-on advocacy (employee sharing programmes, product-launch amplification, virtual summit distribution).
- The leaderboard + screen + podium + prizes combination inside a Contest is the **gamification layer**.
- Salaried employees on internal advocacy do not need the screen (company email, role expectation, recognition cadence do the activation). Volunteer participants (customers, partners, community members, event attendees) typically need the gamification layer, which is why Contests outperform Campaigns for those audiences.
- Both types can run on one channel, any combination, or all five channels: LinkedIn, Twitter / X, Slack, Facebook, Instagram.

### Feature comparison

| Feature | Contest | Campaign |
| --- | --- | --- |
| Live public screen | Yes | No |
| Multi-screen projection (Screen Preview URL per post) | Yes | No |
| Leaderboard | Yes | No |
| QR code on screen | Yes | No |
| **Go Live** / **Pause** / **Stop** controls | Yes | No |
| Coupons tab | Yes | No |
| Forms (KYC / registration) | Yes | No |
| Quiz tab | Yes | No |
| Booths tab | Yes | No |
| Header Image (1920 x 400 px) | No | Yes |
| Logo upload (300 x 300 px) | Yes | Yes |
| **Public URL** per post | Yes | Yes |
| **Universal Share URL** per post | Yes | Yes |
| **Channel Ninja URL** per post (5 variants: LinkedIn, Twitter, Slack Beta, Facebook Private Beta, Instagram Private Beta) | Yes | Yes |
| Multi-channel sharing | Yes | Yes |
| Wizard steps | 4 (Setup, Posts, Screen Setup, Dashboard) | 3 (Setup, Posts, Completed) |
| Hold & Fire | No | Yes |
| Post Scheduling | No | Yes |

### Creation and URL formats
- Both created from `https://wozku.com/admin`, through different buttons (**+ Contest** vs **+ Campaign**). The URL parameter determines type at creation and is permanent.
- Contest with screen public URL: `https://wozku.com/campaigns/screen/{hash}`
- Campaign without screen public URL: `https://wozku.com/campaigns/{hash}`
- Post-level share URLs (Public URL, Universal Share URL, Channel Ninja URLs) follow the same patterns in both types.

### Wizard structure
**Contest wizard, 4 steps:**
1. **Campaign Setup** - name, description, logo, end date, optional settings
2. **Add Posts** - social posts participants share, with per-post channel selection
3. **Screen Setup** - **Go Live** controls, theme, leaderboard configuration, QR and embed code
4. **Dashboard** - analytics and participant data

An **Additional Settings** sidebar link (available from any step) exposes Coupons, Forms, Quiz, Booths.

**Campaign wizard, 3 steps:**
1. **Campaign Setup** - same fields as Contest, plus **Header Image** (1920 x 400 px)
2. **Add Posts** - identical to Contest, including multi-channel post configuration
3. **Completed** - landing page URL and individual post links

### When to use a Contest
- Live physical event (conference, summit, trade show booth, user group meetup).
- A live leaderboard must be projected for the room; leaderboard ranks every share across every enabled channel on the same scoring model.
- Event has multiple tracks, rooms, or locations and each surface needs its own post, on-screen QR, and pinned content while one leaderboard unites the audience.
- Prizes are in play or Coupons will distribute codes.
- Experience must be gated behind a registration form, quiz, or booth assignment.
- Multi-booth or multi-sponsor attribution is required.

### When to use a Campaign
- Always-on employee advocacy: no event, no prizes, just sharing.
- Content amplification is the goal and a leaderboard would add unnecessary competitive pressure.
- A live screen and leaderboard would not be seen by anyone.
- Motion is internal-first (e.g. Slack-centric employee programme) and a public leaderboard does not fit.
- Post scheduler or social media thunderclap is wanted.

### Rules and constraints
- A Campaign cannot be converted to a Contest after creation. Type is locked at creation.
- When in doubt, start with Contest: the screen is optional at runtime and every Campaign feature is also available inside a Contest.
- Both types share identical post mechanics: Post Variations, AI content generator, Booster Posts, per-post channel selection, every Channel Ninja URL.
- Employee advocacy programmes can use Contest; the leaderboard creates internal competition between teams or regions and can be paused. For pure Slack-internal programmes without a physical room, Campaign is lighter.

### FAQ
- **Add a leaderboard to a Campaign after creation?** No. A new Contest is the only path to a leaderboard and live screen.
- **Header Image in a Contest?** Campaign-only (1920 x 400 px). Does not appear in the Contest wizard.
- **Do both types track engagement the same way?** Yes. Shares, Likes, Comments, Clicks, Potential Reach all track identically. The **Wozku Score** formula is the same in both: proprietary weighting of engagement against a capped first-degree audience size, uniform across every channel.
- **Forms, Coupons, Quiz in a Campaign?** No. Additional Settings tabs (Coupons, Forms, Quiz, Booths) are Contest-only.
- **Channel Ninja URLs in both types?** Yes. Both generate a Public URL, a Universal Share URL, and a Channel Ninja URL per post per enabled channel. The Channel Ninja URL opens that channel's OAuth directly with no Wozku landing page in the middle. Five variants: LinkedIn Ninja URL, Twitter Ninja URL, Slack Ninja URL (Beta), Facebook Ninja URL (Private Beta), Instagram Ninja URL (Private Beta).
- **Multiple channels simultaneously?** Yes. Channel selection is per post in Step 2 of either wizard: one channel, any combination, or all five.
- **One Contest across multiple tracks/rooms/locations with its own screen each?** Yes, via per-post Screen Preview URL. Every screen feeds the same leaderboard.
- **Is LeadSpark a third type?** Technically yes. **LeadSpark** is a Global Form (created via **+ Forms (Beta)**) with the Contest Form toggle enabled. It produces two URLs: a form link and a contest screen URL.
- **Recurring incentive after the first share?** Contest: leaderboard position; each additional share moves the participant up, visible live to the room. Campaign: same leaderboard mechanic on an open-ended cadence, no public live screen, leaderboard sits inside the admin Community view; participant accrues points over weeks or months and the signal is cumulative standing. Threshold-based incentives (coupon at three shares, draw entry at five shares, higher tier at ten) are covered in Reward & Incentive Design.

## Credits, Shares & Top-up
Source: https://wozku.com/kb/01-getting-started/credits-and-shares/

Prerequisites: active admin account at `https://wozku.com/admin`; starter credit balance provisioned by the account team; understanding that credits are an account-level balance shared across every contest and campaign (not per-event or per-channel).

### Core rule
- Wozku is consumption-priced. One credit is consumed each time a participant completes an authenticated share (or when Wozku AI credits are consumed). Detailed breakdown comes from the account manager.
- Credits are consumed **at publish, not at click**. Failed OAuth attempts and abandoned shares consume nothing, and there is no refund if a participant deletes the post afterwards.
- No per-event minimums, no per-channel surcharges.
- Wozku does not run on a POC, pilot, sandbox, or trial model. Buy a starter credit pack to begin, top up as the programme runs.

### What does not consume a credit
- A click on a Wozku link without a completed share. A QR scan that lands on the Public URL but never completes OAuth costs zero credits.
- A failed share: abandoned OAuth, declined permission prompt, or channel rejection. The unit of billing is a successful publish, not an attempt.
- A page view of the public dashboard, the contest screen, or any read-only surface.
- Admin actions: creating a contest, editing a post, viewing analytics, exporting a CSV, generating a Channel Ninja URL or a Screen Preview URL.
- Engagement on a participant's published post (likes, comments, reshares). Engagement is tracked for the **Wozku Score** and dashboard but never consumes credits.

### Shares Quota Counter
- Remaining balance shown on the admin dashboard as the **Shares Quota Counter**, updating in near-real time as shares publish across all live programmes.
- Displays two pieces of information: **Credits remaining** (headline number) and **Credits consumed in the current period** (running total since the last top-up).
- Account-level only; does not split by contest or channel. For per-contest cost allocation, use the Campaign Detail page share count (1 share = 1 credit).

### Top-up workflow
- Top up at any time. No waiting for a billing cycle, no monthly reset penalty, no penalty for adding credits before the balance hits zero.
- Workflow owned by the account team: contact them, agree the additional credit volume, balance is added. The dashboard counter reflects the new total within minutes of provisioning.
- Topped-up credits sit on the same balance as the original starter pack. One pool, one counter, no old/new separation, no first-in-first-out consumption order.

### Low-balance notifications
When the balance drops below the threshold configured by the account team, two signals surface:
- A **low-balance indicator** on the admin dashboard alongside the Shares Quota Counter.
- A **notification email** to the admin contact on the account.

### Exceeding balance mid-event
- In-flight shares already in the OAuth flow complete normally.
- New share attempts after exhaustion are blocked at the publishing step until top-up.
- Participants see a "share temporarily unavailable" state on the channel; the share is not silently lost. Once the top-up lands, the next attempt completes normally.

### Forecasting notes
- Plan top-ups against share volume forecast, not the calendar.
- Watch the Shares Quota Counter during the first hour of a live contest (share velocity peaks then).
- Cross-channel posts are one share per channel: a participant sharing the same post to LinkedIn and Twitter consumes two credits.
- Failed OAuth attempts are free; a 5% drop-off rate at the OAuth step has no cost impact.
- Engagement is free; a post that goes viral after publishing pulls no additional credits.

### FAQ
- **Does a click cost a credit?** No. Only an authenticated share that successfully publishes.
- **Does a failed share consume a credit?** No.
- **Balance reaches zero mid-event?** In-flight shares complete; new attempts blocked at publishing until top-up.
- **Free trial or sandbox?** No. Starter credit pack only, scoped by the account team against the first programme.
- **Do credits expire?** Expiry is set in the commercial agreement. The default behaviour is that credits expire every month.
- **Can one contest run out while another keeps running?** No. Credits are account-level; at zero, every live contest and campaign on the account is affected at once.
- **Where does the Shares Quota Counter live?** Admin dashboard, alongside headline programme metrics.
- **Refund if the participant deletes the post?** No.

## Logging In
Source: https://wozku.com/kb/01-getting-started/logging-in/

Scope: admin login only. Participant OAuth connections to LinkedIn, Twitter, Slack, Facebook, and Instagram are handled per share at the participant level, not here.

Prerequisites: Wozku account with registered email and password; account provisioned by the Wozku account administrator; if 2FA is enabled, authenticator app or backup code within reach.

### Steps
| Action | Path / control |
| --- | --- |
| Log in | Go to `https://wozku.com/admin`. Unauthenticated sessions redirect to the login page. Enter email and password, click **Sign In**. |
| Reset password (logged out) | Click **Forgot Password** on the login page, enter registered email, Wozku sends a reset link. |
| Reset password (logged in) | User menu (avatar, top-right) > **Reset Password**, opens `/password/reset` without logging out. |
| Two-Factor Authentication | Supported through any standard authenticator app. With 2FA enabled, login prompts for a verification code after the password step. |
| Backup codes | Generate 10 single-use backup codes from **Security Settings** (`/admin/settings/security`). |
| Switch accounts | Accounts with sub-accounts show **Switch Account Back** in the user menu; moves between parent and sub-account views without signing out. |

### Rules
- Backup codes are single-use; consumed codes invalidate. Generating a fresh set invalidates the entire previous set.
- A lost authenticator without backup codes locks the account.
- Admin login and participant channel OAuth are entirely separate flows; logging in to `wozku.com/admin` connects no social channel.

### FAQ
- **All 2FA backup codes used?** Log in with the authenticator app, open **Security Settings** (`/admin/settings/security`), click **"Generate 10 backup codes"**. A fresh set invalidates the previous set automatically.
- **Invitation link expired?** Ask the Wozku account administrator to remove the old invitation and resend a fresh one.
- **Switch Account Back missing?** It only appears when the account has sub-accounts configured, or the active session is already on the parent account.
- **Change login email?** Yes. Update the **E-Mail Address** field in **My Profile** (`/admin/edit-profile`) and click **Update**.
- **Forgot Password location?** Directly on the login page at `https://wozku.com/admin`.
- **SSO support?** Not in the current release. Authentication is email and password with optional 2FA. SSO is on the enterprise roadmap.

## Navigating the Dashboard
Source: https://wozku.com/kb/01-getting-started/dashboard-overview/

### Top navigation bar (creation buttons, present on every page)

| Button | Creates | URL |
| --- | --- | --- |
| **+ Contest** | A contest with a live screen, leaderboard, and QR codes | `/admin/campaigns/create?withscreen=1` |
| **+ Campaign** | An always-on campaign without a live screen | `/admin/campaigns/create` |
| **+ Forms (Beta)** | A standalone global form (the foundation for LeadSpark) | `/admin/forms/create` |

User menu (avatar, top-right) holds: **My Profile**, **Reset Password**, **Sub Account Settings**, **Security Settings**, **Sign Out**.

### Quick Links

| Link | URL | What it shows |
| --- | --- | --- |
| **Community** | `/admin/community` | All participants across all campaigns |
| **All Posts** | `/admin/posts` | All posts across all campaigns |
| **All UGC Posts** | `/admin/ugc-posts` | All user-generated content posts |
| **All Campaign** | `/admin/campaigns` | All campaigns and contests |
| **All Forms** | `/admin/forms` | All global standalone forms |
| **Integrations** | `/admin/integrations` | Third-party integration management |

### Platform-wide stats
Six stat cards aggregate totals across every campaign on the account, spanning all channels (LinkedIn, Twitter / X, Slack, Facebook, Instagram):

| Stat | Links to |
| --- | --- |
| **Potential Reach** | `/admin/community` |
| **Form Fills** | `/admin/forms` |
| **Total Post** | `/admin/posts` |
| **Total Comments** | `/admin/community` |
| **Total Share** | `/admin/community` |
| **Total Likes** | `/admin/community` |
| **Total Click** | `/admin/community` |

- **Total Share** and **Total Click** open an expanded report with a date-range chart when clicked.
- All share counts include shares recorded across every enabled channel; a share on Twitter and a share on LinkedIn each count as one share toward the total.
- **Potential Reach** rolls up first-degree audience across every participant and every channel; a participant who shared on both LinkedIn and Twitter contributes both audiences, each counted once per channel. Platform-wide value cited: 3.4M as of April 2026.

### Shares Quota Counter (dashboard)
- Shown below the stat cards in the format: `[Used]/[Total] - Shares Remaining - [%]`
- Plan-level usage meter tracking shares consumed across all channels against the plan's total allocation.
- At 0 remaining, new shares stop recording on every channel until the plan resets or upgrades.

### Popular Campaigns
The two most-shared campaigns on the account, with post counts and share counts. Each card opens its Campaign Detail page.

### Popular Posts table
- Columns: Post Title | Shares | Links & QR Codes
- The **Links & QR Codes** action opens the sharing modal for that post directly from the dashboard, surfacing the **Public URL**, the **Universal Share URL**, and every enabled **Channel Ninja URL** for that post. Fastest path to a QR code during a live event, no campaign wizard navigation required.

### Total ROI button
**View Total ROI** opens the ROI Calculator modal with platform-wide figures: Total Earned Media Value, ROI Multiplier, Ad Spend Savings, and the value attribution breakdown across every campaign on the account.

### FAQ
- **What does the Shares Quota Counter track?** Every recorded share across any channel counts against the plan's share allocation. Format `[Used]/[Total] - Shares Remaining - [%]`. At 0, new shares are not recorded on any channel until the plan resets or is upgraded.
- **Dashboard stats vs per-campaign stats?** Dashboard stats aggregate every campaign across all channels. Per-campaign stats sit on each Campaign Detail page, accessible from **All Campaign**. For per-booth or per-event attribution, use the campaign-level view.
- **Individual QR codes from the dashboard?** Click **Links & QR Codes** in the Popular Posts table. The modal opens with the **Public URL**, the **Universal Share URL**, and a **Channel Ninja URL** tab for each enabled channel on that post.
- **What does View Total ROI show?** ROI Calculator modal with Total Earned Media Value, ROI Multiplier, Ad Spend Savings, and value attribution breakdown across every campaign.
- **Sub-account or security settings?** Click the avatar (top-right) for **My Profile**, **Reset Password**, **Sub Account Settings**, **Security Settings**, **Sign Out**.
- **Do the numbers update in real time?** Stat cards refresh on page load and on navigation back to the dashboard. For live real-time updates during a contest, use the Screen Setup view on the individual Contest Detail page; the public screen uses a Pusher WebSocket connection for instant updates.

## Multi-Track & Multi-Location Playbook
Source: https://wozku.com/kb/01-getting-started/multi-track-and-multi-location/

Prerequisites: working understanding of the Contest wizard; Screen Preview URL mechanics read; decision made on which surfaces (tracks, cities, booths) need their own pinned post and screen.

### The decision rule
- If the leaderboard should unify the surfaces: **one Contest with many Screen Preview URLs**.
- If the surfaces should not share a ranking: **multiple Contests**.

| Need | Solution |
| --- | --- |
| **Unified leaderboard** across every track, location, or station | **One Contest**, many Screen Preview URLs (one per surface) |
| **Independent leaderboards** per track, location, or station | **Multiple Contests**, each with its own Contest Screen Preview URL |

The first answer is right for almost every multi-surface event (same brand, same week, same audience, same ROI report). The second is right when surfaces belong to genuinely different programmes (e.g. a customer event in Berlin and a customer advisory board in Singapore the same week, commercially separate).

### Pattern 1 - Multi-track conference
Worked example: **Acme AI Summit 2026**, 500 attendees, keynote plus five breakouts, expo floor, hands-on workshop track.

| Setting | Configuration |
| --- | --- |
| **Step 1 - Contest Setup** | One Contest. Name and end date scoped to the whole event |
| **Step 2 - Add Posts** | One post per surface: Keynote post, a post per breakout track, Expo post, Workshop post. Per-post channel selection: LinkedIn-default, plus Twitter on the developer track, Instagram (Private Beta) on the creator track |
| **Step 3 - Screen Setup** | One Contest Screen Preview URL for the main stage. Each post's own Screen Preview URL goes to the AV operator for that room |
| **Who scans what** | Each room's QR placard routes attendees to the **Channel Ninja URL** on that room's post |
| **Leaderboard** | One unified ranking across every track and every channel; a Breakout B sharer competes directly with a keynote sharer |

Mechanic: cross-track FOMO. The Breakout B screen shows the Breakout B post on the left, but the leaderboard on the right is the whole event.

### Pattern 2 - Multi-city roadshow

| Setting | Configuration |
| --- | --- |
| **Step 1 - Contest Setup** | One Contest spanning the whole roadshow. End date set to the latest local close so no city is cut off mid-day |
| **Step 2 - Add Posts** | One post per city (Tokyo, NYC, London, Singapore), each with city-localised copy and city-specific imagery |
| **Step 3 - Screen Setup** | Each city's Post Screen Preview URL goes to the local AV team; venue screen pinned to that city's post |
| **Who scans what** | Each city's QR placard is unique to that city |
| **Leaderboard** | One ranking across the entire roadshow. By the time London runs, the leaderboard already shows top sharers from Tokyo and NYC |

Deviate when cities are commercially separate (different regional P&Ls, commercial teams, reporting requirements): run separate contests.

### Pattern 3 - Multi-booth sponsor activation

| Setting | Configuration |
| --- | --- |
| **Step 1 - Contest Setup** | One Contest scoped to the host event |
| **Step 2 - Add Posts** | One post per booth, written for that booth's content (partner-specific demo, on-stand offer, booth-specific CTA). Use Post Variations or the AI content generator |
| **Step 3 - Screen Setup** | Each booth's Post Screen Preview URL runs on a monitor at the stand: booth's post on the left, full event leaderboard on the right |
| **Who scans what** | A QR at each booth routes the attendee to that booth's Channel Ninja URL; booth-specific attribution flows back to the booth-specific post in the dashboard |
| **Leaderboard** | One ranking across every booth in the activation |

Booth-level attribution is preserved in the dashboard while the leaderboard remains unified.

### What varies vs what stays the same
Identical across all three patterns: wizard, leaderboard mechanic, Wozku Score, multi-channel post architecture, Coupons, Forms, Quiz, Booths, dashboard.

What differs:
- **Number of posts in Step 2**: 7 for a keynote-plus-six-track conference, 4 for a four-city roadshow, 12 for a twelve-booth activation.
- **Per-post channel selection**: developer breakout post may add Twitter; creator booth post may add Instagram (Private Beta); rest stay LinkedIn-default.
- **Distribution of Screen Preview URLs**: one per surface, to that surface's AV operator.
- **End date in Step 1**: set to the latest local close for multi-day or multi-city patterns.

### Operational rules
- Plan the post list before opening the wizard; author each post for its surface rather than duplicating a generic conference post.
- Send each Screen Preview URL to its AV operator a day before, not on the day; run a dress rehearsal per room.
- Do not filter the leaderboard per track; cross-track FOMO depends on every screen showing the whole event.
- Multi-city tours: set the end date to the latest local close (e.g. Thursday close in London local time for a Tokyo-NYC-London tour).
- Booth attribution lives in the dashboard (shares per post), not the leaderboard (ranks participants).
- One credit balance for the whole programme; multi-surface programmes do not bill separately per surface.

### FAQ
- **One contest with eight posts and eight Screen Preview URLs vs eight contests?** Product output looks similar (eight screens, eight QRs, eight pinned posts). One Contest gives one leaderboard, one Potential Reach number, one ROI report. Eight Contests give eight separate reports stitched together manually.
- **Leaderboard filtered to one track?** Not by default; leaderboard on every Screen Preview URL shows the full Contest ranking by design. A toggle for post-filtered leaderboards is on the roadmap.
- **Will a small track be invisible on the leaderboard?** No. The Wozku Score is uniform across audiences. A 200-follower attendee on a smaller track who drives strong engagement can outrank a 5,000-follower attendee on the keynote whose share lands flat.
- **Who manages the multi-track contest day-of?** One admin through one wizard. Go Live / Pause / Stop controls every screen at once. AV teams only need the Screen Preview URL for their surface; no admin access needed. For sponsor or stakeholder visibility without admin access, use the Public Dashboard PIN.
- **Multi-city tour across time zones: local or global end?** The Contest has one end time set in Step 1. Set it to the latest local close. The leaderboard freezes at that one global end time.
- **Can a partner sponsor see only their own booth's data?** The host admin sees all booths in one dashboard. Read-only partner view today is the Public Dashboard PIN at the contest level. Per-booth PIN-protected views are not a separate surface in the current product. For partner-specific isolated reporting, run separate contests per partner.
- **If a city is cancelled or postponed?** Pause or remove the affected post in Step 2. Other surfaces continue. The postponed city can run as its own follow-up contest.
- **Can a participant who shared in Tokyo also share in London?** Yes. Each city's post is a different post; a participant can share both and earn Wozku Score on each. Cumulative score ranks them on the unified leaderboard.

## Onboarding & Time-to-Launch
Source: https://wozku.com/kb/01-getting-started/onboarding/

Admin note on the page: this describes the typical onboarding shape; specific timelines, named contacts, and cadence are confirmed during commercial discussion with the account team.

Prerequisites: signed commercial agreement with a starter credit pack provisioned; admin account at `https://wozku.com/admin`; a first programme in mind (specific event, campaign, or kickoff date).

Stated configuration time: a Wozku contest can technically be configured and launched in 5 minutes (the FAQ states the product can be configured in 15 mins). Value of the first contest depends on pre-launch work: post copy, channel mix, screen layout, prize design, briefing of the on-site team.

### Kickoff agenda
- **The first programme**: which event or campaign, what date, who attends, which channels the audience uses.
- **Roles**: who owns admin, content, on-site experience, and who is the executive sponsor.
- **Success criteria**: share volume, reach, registrations, pipeline-influenced; which rung of the ROI ladder is the success metric.
- **Operational logistics**: credit balance sized to the first programme, top-up workflow, dashboard access, admin user creation, security/compliance documentation if a CISO review is needed.
- Anything needing procurement, IT, or security sign-off is flagged at kickoff.

### Dry run / co-piloted first contest
Reviewed in the dry run:
- **Step 1 (Contest Setup)**: name, end date, logo, screen-mode toggle, additional settings.
- **Step 2 (Add Posts)**: post copy per surface, channel selection per post, post variations or AI-generated content.
- **Step 3 (Screen Setup)**: theme, leaderboard configuration, QR routing, Screen Preview URLs distributed to the AV team.
- **Coupons / Forms / Quiz / Booths** if part of the programme.
- **End-to-end test**: a test participant scans, authenticates, shares, and the share appears on the leaderboard. Repeat across each enabled channel.

### Launch and on-site support
Admin team during the live window:
- Watches the **Shares Quota Counter** to confirm credit consumption is on track.
- Watches the dashboard headline tiles (shares, reach, clicks) against kickoff success criteria.
- Manages **Go Live / Pause / Stop** controls on the Contest.
- Handles edge cases: participant authentication help, a sponsor needing a Public Dashboard PIN for read-only visibility, an AV issue on a track screen.

For flagship events this often means a real-time support channel during the live window. For an always-on Campaign the cadence is lighter: check-ins on share velocity, dashboard health, content drops. By the second or third programme, the admin team typically runs the live window without real-time support.

### Admin handoff
Admin team owns after handoff: configuring contests and campaigns end to end; managing credit balance and top-ups; reading the dashboard and producing the ROI summary; distributing Screen Preview URLs and coordinating with AV; handling participant edge cases through the Community view.

Account team continues to own: strategic programme design (new use cases, archetypes, channel mixes); roadmap visibility (upcoming product changes, Beta-to-GA promotions on Slack / Facebook / Instagram); renewal and credit-pack scoping; escalation path for technical issues.

By the third or fourth contest, most teams run independently.

### Ongoing support cadence
- **Programme reviews** at the close of each major contest or campaign, covering the ROI ladder against success criteria.
- **Quarterly business reviews** for customers running multiple programmes per quarter.
- **Ad-hoc strategic sessions** when a new programme shape is scoped (multi-track conference, partner ecosystem activation, new always-on Campaign).
- **Issue support** through the standard support channel.

### Admin training
No certification course or formal training programme. The Knowledge Base documents the product surface, the wizard guides configuration, and the dry run on the first programme does most of the practical training. Most admins are confident on the wizard after one programme and proficient on the dashboard after two. Deeper playbook training happens in strategic sessions with the account team.

### Operational guidance
- Anchor onboarding to a real programme, not a calendar date ("live for the keynote on April 22nd" rather than "live in two weeks").
- Start any CISO review at kickoff. The Trust Pack and Data Processing Agreement live with the account team.
- Run the dry run with the actual on-site team (AV, event ops, the field marketer at the booth), not just admin.
- Do not over-scope the first programme: a successful first programme driving 200 authenticated shares beats an ambitious one that buckles operationally.
- Plan the always-on follow-on at kickoff, not after.

### FAQ
- **How long to go live?** The product can be configured in 15 mins. Realistic time-to-launch depends on the first programme's content, channel mix, and on-site coordination; scoped by the account team at kickoff.
- **Who runs the first contest?** Most teams run it with the Wozku account team in the loop, co-piloted or reviewed before launch. By the second or third programme, the admin team runs the live window independently.
- **Certification or formal training course?** No.
- **Ongoing support after the first contest?** Part of the commercial agreement; typically programme reviews at close of each major programme, QBRs for higher-volume customers, ad-hoc strategic sessions, standard issue support.
- **Add more admin users after onboarding?** Yes. Adding admins does not affect the credit balance.
- **Escalation for a live issue?** Part of the commercial agreement; most customers have a real-time support channel during the live window of a flagship programme, established at kickoff.
- **Shorter timeline than the typical arc?** Workable, but trade-offs scale: a two-week first programme has less time for content review, dry run, and AV coordination than a six-week one.
- **Moving from a first programme into a quarterly cycle?** Covered in the strategic session after the first programme close: expanding from one event to a multi-event quarter, adding an always-on Campaign for the audience the events activated, and sizing the credit balance against the new volume.

## Pricing Model
Source: https://wozku.com/kb/01-getting-started/pricing-model/

The article describes the model shape only; it lists no numbers. Quotes come from the Wozku account team.

Prerequisites: understanding of credits and shares; a rough programme shape (event count, participants per event, channels enabled); scoping a commercial conversation rather than configuring product.

### What scales with spend
- One thing scales: the volume of authenticated shares the programmes produce.
- A **share** is an authenticated publish event: one participant, one channel, one post that went live.
- A flagship event drives more share volume in a single day than a smaller roadshow stop; an always-on Campaign drips credits steadily across the quarter rather than spiking on event day.
- The unit rate may differ across channels. A LinkedIn share, a Twitter share, a Slack share (Beta), a Facebook share (Beta), and an Instagram share (Beta) may consume one credit.

### What is not metered

| Dimension | Metered? | Notes |
| --- | --- | --- |
| Number of contests | No | Run as many contests as the balance supports in shares |
| Number of campaigns | No | Unlimited within the credit balance |
| Number of channels enabled per post | No | One channel or all five, same rate per share |
| Number of admin seats | No | Add admins as needed |
| Number of events covered | No | One event, ten events, fifty events all sit on the same balance |
| Number of posts inside a contest | No | A 7-post conference and a 1-post booth activation are billed only by share output |
| Wozku Score, leaderboard, screen, dashboard | No | All included, not metered |
| Authenticated shares | Yes | Refer to the pricing agreement |

Pricing is the share count or AI credit consumption, subject to change over time; refer to the agreement.

### Scoping variables
Three programme variables drive the share forecast the account team needs to size the starter credit pack:
1. **Programme volume**: how many events, roadshow stops, or always-on weeks over the term.
2. **Average attendance or audience**: room size, employee headcount, partner audience.
3. **Expected share rate**: the fraction of that audience expected to authenticate and share. This variable moves the most; the account team can suggest planning ranges based on similar programme shapes.

Multiply for an order-of-magnitude share forecast; top-ups handle the rest.

### Top-ups and renewals
- Top-ups happen on demand. There is a monthly billing cycle that resets the balance.
- When the **Shares Quota Counter** signals a low balance, contact the account team to add credits. New credits sit on the same balance as the original pack.

### What only the account team can provide
- The starter credit pack sized to the first programme.
- The top-up cadence matching the forecast.
- Commercial terms specific to the contract: region, currency, payment cycle, term length, renewal mechanics.

### Guidance
- Forecast against share volume, not event count. A 50-attendee user group with strong advocacy can drive more shares than a 500-attendee conference with passive engagement.
- Always-on Campaigns sit on the same balance as live Contests; model both forecasts together when sizing the starter pack.
- A top-up arranged a day before a flagship event is enough headroom.
- Admin seats are not a budget lever.

### FAQ
- **Priced per event, user, share, monthly, or annually?** Per share, on a credit balance topped up as needed. Events, users, channels, contests, and campaigns are not metered.
- **Pricing tiers by company size or seat count?** Consumption-priced on shares, not seats. Tiers, contract terms, and volume considerations are scoped by the account team against forecast share volume.
- **Unlimited contests within the balance?** Yes. Contest, campaign, post, channel, and admin seat counts are all uncapped. Only cumulative share volume and expiry date are metered.
- **Free trial or POC?** No POC, pilot, sandbox, or trial model.
- **Run out mid-event?** In-flight shares complete; new attempts blocked at publishing until top-up.
- **Where to get a quote?** The Wozku account team, given event count, audience size, and channels intended.
- **One-time setup fees?** Setup terms are part of the commercial agreement. The product does not require any one-time licence purchase outside the credit pack.

## Use Cases - Beyond Live Events
Source: https://wozku.com/kb/01-getting-started/use-cases/

Prerequisites: understanding of the Contest vs Campaign distinction; at least one live-event programme run or scoped (Event Amplification is the entry motion, the others are expansion motions). For B2B programmes LinkedIn is the default hero channel.

### Archetype 1 - Event Amplification (default, hero)
Live in-person event: conference, summit, trade show, user group meetup, customer advisory board, sales kickoff. Canonical worked example: **Acme AI Summit 2026**, a 500-attendee summit with a screen on the keynote stage, QR codes on every badge, and a leaderboard the room watches in real time.

| Field | Value |
| --- | --- |
| **Who runs it** | Marketing, often with field marketing and event ops |
| **Programme shape** | Contest |
| **Channel mix** | LinkedIn (default for B2B), plus any combination of Twitter, Slack (Beta), Facebook (Private Beta), Instagram (Private Beta) per post |
| **Anchor KPI** | Pipeline-influenced from event-driven shares; Potential Reach and Total Shares as headline tiles |
| **What's different** | Live screen with leaderboard, real-time share velocity, podium and prize mechanics. Multi-track conferences and multi-city roadshows use one Contest with many Screen Preview URLs |

### Archetype 2 - Internal Employee Advocacy (always-on amplification)
Employees share company content (product launches, thought leadership, customer wins, team posts) through their own networks. No event, no room, no podium.

| Field | Value |
| --- | --- |
| **Who runs it** | Marketing, Communications, or a dedicated Employee Advocacy lead |
| **Programme shape** | Campaign (with the option of a Contest for periodic gamification) |
| **Channel mix** | LinkedIn (hero for most B2B employee advocacy), Slack (Beta) for internal-first programmes, Twitter where appropriate |
| **Anchor KPI** | Cumulative monthly Potential Reach, share frequency per active employee, retention of active sharers over time |
| **What's different** | No live screen. Posts ship into Wozku on a content cadence (weekly, fortnightly); employees authenticate once and share when content drops. The Wozku Score still ranks contributors even without a public leaderboard, so high-performing advocates surface automatically |

Participant identifiers from the live event carry over into the always-on programme via the global Community view.

### Archetype 3 - Partner Ecosystem Advocacy
Resellers, distributors, alliance partners, agency partners, integrators.

| Field | Value |
| --- | --- |
| **Who runs it** | Partner Marketing, Channel Marketing, or an Alliance team |
| **Programme shape** | Contest for partner kickoff and partner conferences; Campaign for always-on partner amplification |
| **Channel mix** | LinkedIn dominates for partner content. Twitter for developer-aligned partner ecosystems. Multi-channel where the partner network spans platform preferences |
| **Anchor KPI** | Partner-attributed Potential Reach, partner-attributed registrations or form fills (TOFU), long tail of pipeline influenced by partner shares |
| **What's different** | Partners have their own brand voice, internal approval cycles, and often competing programmes. Post Variations and the AI content generator allow a partner-A variation, a partner-B variation, and a generic variation under the same leaderboard |

### Archetype 4 - Community / Developer Advocacy
Developers using the product, user group members, students in a programme, an industry association's membership.

| Field | Value |
| --- | --- |
| **Who runs it** | Developer Relations, Community, Education, or DevRel-aligned Marketing |
| **Programme shape** | Contest for community events and hackathons; Campaign for always-on community amplification |
| **Channel mix** | Twitter often co-hero alongside LinkedIn for developer audiences. Slack (Beta) where the community has its own Slack workspace. Instagram (Private Beta) for creator-economy adjacent communities |
| **Anchor KPI** | Community share rate as a fraction of active members, top-decile community advocates identified by Wozku Score, growth in net-new community participants over time |
| **What's different** | Community members are volunteer participants; motivation is recognition, learning, belonging, not employer expectation. Lower-friction reward design (Threshold Unlock, Random Draw) fits better than executive-grade prizes. The leaderboard surfaces community heroes already evangelising |

### Shared product surface
All four archetypes use the identical wizard: Step 1 sets up the programme, Step 2 adds posts and selects channels per post, Step 3 (Contest only) configures the screen. The leaderboard ranks every share against the same Wozku Score. Coupons, Forms, Quiz, Booths, and the **Additional Settings** layer are available in any Contest, and the Channel Ninja URL pattern works the same on every archetype. What differs is operational shape: events run intensely for a day, employee advocacy runs lightly for months.

### Guidance
- Lead with Event Amplification and expand from there; starting with employee advocacy from cold is harder because the proof point is fuzzier than a live leaderboard.
- Do not pitch a partner programme like an employee programme; run partner archetypes as their own Contest or Campaign so the leaderboard ranks partners against partners.
- Pick channels by audience, not by archetype.
- Use the Community view as the bridge between archetypes; participants who authenticated for an event appear in the global Community view and are the warm list for the follow-on Campaign.
- One credit balance covers all four archetypes.

### FAQ
- **All four archetypes from one account?** Yes: same account, same admin team, same credit balance. The global Community view aggregates participants across every programme they have shared on.
- **Is employee advocacy a move away from events?** No. Events stay the entry motion and hero use case; employee advocacy compounds the event programme.
- **Sponsor at someone else's event?** Same wizard, same Contest mode. Set up a Contest with posts written for the booth; natural copy shape: "I just learned how X solves Y at the [Brand] booth at [Event]." Copy publishes on the participant's authenticated channel, so it should sound like the participant. Generate the QR from the post's Links & QR Codes modal (typically the Channel Ninja URL QR for the most active channel, or the Universal Share URL QR if the booth audience is mixed). Print on a placard, booth backdrop, or lanyard insert. Put a screen behind the booth running the Post Screen Preview URL so leaderboard, post preview, and QR are visible. The contest, dashboard, and post-event lead list sit under your account, not the host's. For a sponsor across a circuit of conferences, use the one-Contest-many-screens pattern.
- **Does a leaderboard make sense for an always-on Campaign?** A Campaign has no public live screen, but the leaderboard mechanic exists in the admin Community view and the global Wozku Score still ranks contributors. Some teams publish a periodic leaderboard digest internally (a fortnightly Slack post, an internal newsletter).
- **Best archetype for B2C?** Wozku is primarily built for B2B advocacy; all four archetypes are B2B shapes. A B2C consumer-share programme is mechanically possible.
- **Community programme on Twitter only?** Yes. Channel selection is per post; Twitter-only posts can sit alongside LinkedIn-only posts in the same Contest, and the leaderboard ranks everyone uniformly.
- **Do partner programmes need a separate tenant?** No. A partner programme runs as a separate Contest or Campaign on the existing tenant; partner participants authenticate through the same OAuth flow.
- **Moving from an event programme to always-on Internal Employee Advocacy?** Three steps: identify high-Wozku-Score participants from the event; scope a Campaign with a sustainable content cadence (weekly or fortnightly is common); size the credit balance with the account team for a quarter of always-on share volume.

## Why Wozku Works - The Gamification Layer
Source: https://wozku.com/kb/01-getting-started/why-it-works/

Conceptual article; no setup required. The four levers apply across every product mode (Contest, Campaign, LeadSpark) and every advocate type (employee, customer, partner, community member).

### The advocacy cold-start problem
Sharing company content publicly is a small social cost: the participant's network, colleagues, and boss see the post. Without a counterweight the rational move is to do nothing. Wozku adds the counterweight with four levers that compound.

### Lever 1 - Visible standing
A leaderboard projected on a screen at an event, or visible in a Slack channel for an internal programme, makes effort and outcome public. Does not depend on prizes, rewards, or sponsorship budget. Surfaces in Wozku: the public contest screen, the Post Screen Preview URL pinned to a track, the Public Dashboard PIN shared with stakeholders, and the global Community view ranking lifetime contributors across every campaign.

### Lever 2 - Stakes
Stakes turn a ranking into a competition. They can be small (a podium called from stage, top three names announced over lunch) or large (a meaningful prize, tangible reward, status award). What matters is that stakes exist and are public. Wozku stakes live in three places:
- **Coupons** distributes prizes the moment a share lands.
- **Reward & Incentive Design** patterns structure the setup: Top-N Podium, Random Draw, Threshold Unlock.
- **Booster Post** escalates stakes mid-event: Power Hour, Golden Post Hunt, VIP Stage Pass.

### Lever 3 - Speed
Under 60 seconds from QR scan to published post is a product-level commitment. The **Channel Ninja URL** skips the Wozku landing page, the channel picker, and any preview-then-confirm loop: the participant scans, taps consent on the channel's own OAuth screen, and the post publishes. A 60-second flow holds the participant through the moment of intent; a 5-minute flow does not.

### Lever 4 - Fair recognition
A leaderboard ranking by raw follower count rewards the executive with 20,000 LinkedIn connections who posts once, and ignores the 200-follower advocate who drove real engagement. The **Wozku Score** corrects this: an audience-size cap means a participant with a smaller, more engaged network can outrank one with a larger, passive network. The **13+ parameters** the AI engine reads are tuned to reward effective amplifiers, not loudest voices.

### How the levers compound
- **Visible standing** creates the social context for showing up.
- **Stakes** create the reason for caring about position.
- **Speed** removes the friction that would block participation.
- **Fair recognition** earns the trust that the leaderboard reflects real effort.

Worked example: a Contest at a 500-attendee summit pulls all four at once. A screen on the keynote stage projects the leaderboard; top-three prizes are announced from the podium; the Channel Ninja URL on every badge gets the participant from scan to share in under a minute; the Wozku Score caps the audience-size bonus so a 300-follower developer ranks above a 10,000-connection executive who only posts once. The same four levers run an always-on Campaign for internal employee advocacy: the leaderboard lives in a Slack channel rather than a public screen, and stakes are recognition rather than prizes.

### Guidance
- Stakes do not have to be expensive: a named callout from stage, a leadership shoutout in an all-hands, a short feature on company social channels are all stakes.
- The cold-start problem is hardest at the first programme; the second starts on warm ground.
- Once a booth flow has more than three steps, participation rate drops sharply; design every interaction down to the minimum from the start.
- A gameable leaderboard becomes a vanity exercise within a programme or two; the Wozku Score's audience-size cap and engagement weighting keep it worth showing up for in week eight, programme four.
- Employee advocacy programmes that struggle usually have only one lever (a content library as stakes-of-sorts) and miss visible standing, speed, and fair recognition.

### FAQ
- **Why would employees, customers, or partners actually share?** The four levers turn the share into a moment with a visible payoff. Most participation problems trace back to one or more missing levers.
- **Is this event-only?** No. Live Contests pull the levers most visibly; always-on Campaigns pull the same levers in different shapes (Slack-channel leaderboard, recognition cadence, speed-optimised internal share flow, same Wozku Score).
- **Does a leaderboard create unhealthy pressure?** A well-designed gamification layer makes participation feel optional, not mandatory. Random Draw and Threshold Unlock exist for programmes where Top-N Podium pressure would be wrong.
- **Participants sceptical of leaderboards?** Fair recognition addresses this: the audience-size cap and engagement weighting mean the leaderboard ranks effective amplifiers, not popularity.
- **Introducing the gamification layer to internal stakeholders?** Use the four-lever framing: walk each lever, name what is missing in the current programme, connect each gap to a Wozku capability.
