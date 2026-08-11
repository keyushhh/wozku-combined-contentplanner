# 02 Creating a Contest

Full reference for the four-step Wozku Contest creation wizard, post configuration, live screen setup, screen theming, embedding, and the Campaign Dashboard.
Source: https://wozku.com/kb/02-creating-a-contest/

## Create a Contest - Workflow Overview
Source: https://wozku.com/kb/02-creating-a-contest/contest-overview/

A Contest is the live-event programme type in Wozku. A Campaign is the simpler mode without the live screen. The URL parameter locks the choice at creation (`?withscreen=1` for Contest).

### Prerequisites
- Admin access to the Wozku platform.
- Event brief prepared: event name, logo file, end date, post copy, post images.
- A view on which channels the audience uses.

### Starting the wizard
- Click **+ Contest** in the top navigation bar.
- Left sidebar step navigator, in order: **Campaign Setup** > **Add Posts** > **Screen Setup** > **Dashboard**.
- A collapsible **Additional Settings** link in the sidebar opens Coupons, Forms, Quiz, and Booths at any point after Step 1 is saved.

### The 4 wizard steps

| # | Step | URL | What it does | Gate |
| - | ---- | --- | ------------ | ---- |
| 1 | **Campaign Setup** | `/admin/campaigns/create?withscreen=1` | Contest identity, timing, sharing behaviour | **Logo** required (hard gate). Clicking **Continue** saves the contest record, assigns a Campaign ID, unlocks Step 2 |
| 2 | **Add Posts** | `/admin/campaigns/{ID}/createpost` | Creates the posts participants share; channel selection lives here | Minimum one post to advance to Screen Setup |
| 3 | **Screen Setup** | `/admin/campaigns/{ID}/screen-setup` | Generates the public screen URL, activates lifecycle controls, themes, embed, settings, QR codes | Reaching Step 3 does NOT make the contest live |
| 4 | **Dashboard** | `/admin/campaigns/{ID}` | Post-creation management hub, stats, community, ROI | n/a |

### Step 1 fields (summary)
Key fields: **Logo** (required, hard gate), **Campaign Name**, **Description**, **Redirection URL**, **Thank You Message**, **Campaign End Date**, **LinkedIn Company ID**, **Tags**.
In Additional Settings (collapsed): UGC toggle, Enable SPA, @Mentions, multi-post interval, **Hold & Fire** (scheduled burst launch at a UTC datetime).

### Step 2 fields (summary)
Each post carries its own **channel selection** (one, multiple, or all five).
Fields: **Post Title** (internal), **Post Image** (1200 x 628 px, required) or **Embed Code**, **Frame** (optional overlay, 1280 x 720 px), **Post Description**.
From the description field: **+ Add Post Variations**, **@ Add Mentions**.
Post-level Additional Settings: override **Redirection URL** and **Thank You Message** per post, add a CTA button, mark as Booster Post, enable UGC per post.

### Step 3 outputs (summary)
On entering Step 3 Wozku generates: `https://wozku.com/campaigns/screen/{unique_hash_id}`.
The URL is accessible but the public screen shows only the Wozku logo until **Go Live**.
From Screen Setup the admin: controls **Go Live** / **Pause** / **Stop** (Stop triggers Winner Finalization), toggles individual posts on or off, opens Theme Settings (4 display themes, background, gift image, header, welcome, closing, focus content), opens Embed Code, opens Contest Settings, downloads QR codes per post (SVG or PNG). QR routing can be set to the **Public URL**, the **Universal Share URL** (channel picker), or a specific **Channel Ninja URL** per post.

### Step 4 Dashboard (summary)
- **Stats header:** Potential Reach (summed across every channel), Total Share, Total Click, Total Comments, Total Likes, Total Post.
- **All Posts table:** per-post stats and actions (Preview, Reports, Edit, Links & QR Codes, Delete).
- **Community table:** every participant with **Wozku Score**, Potential Reach, Shares, Likes, Clicks, Comments. Exportable. Channel filter segments activity by channel.
- **Action buttons:** **Add Post**, **Edit**, **Screen Setup**, **Share** (PIN-protected public dashboard), **Calculate ROI**.

### Additional Settings tabs (available after Step 1 is saved)

| Tab | URL | What it does |
| --- | --- | ------------ |
| **Coupons** | `/importcoupons` | Import prize codes, distributed to participants on share |
| **Forms** | `/forms` | Create KYC / registration / Download forms for lead capture |
| **Quiz** | `/quizzes` | Create assessments, can gate sharing before or after the quiz |
| **Booths** | `/importbooths` | Map booth numbers to sponsor brands for multi-sponsor attribution |

### Typical setup sequence for a live event
1. Step 1: enter contest details, upload logo, set end date.
2. Step 2: create 1-3 posts with images and copy, choose channels per post, add variations for mixed audiences.
3. Step 3: copy the public screen URL to the AV team, configure Theme Settings, set Contest Settings (lower **Page Refresh Interval** in large rooms), choose QR routing (**Universal Share URL** for multi-channel, a specific **Channel Ninja URL** for channel-pinned placements).
4. Additional Settings: create a Form for lead capture, set up Coupons, create a Quiz.
5. Before the event: print QR codes (SVG scales without pixelation), brief the booth team on Go Live.
6. At the event: click **Go Live**, enable individual post toggles as sessions begin, click **Stop** at the close to trigger Winner Finalization.

### Notes
- The Contest record carries no channel setting; posts do. Channel selection is a Step 2 decision.
- Add Posts can be returned to at any time after Step 1. The wizard does not require single-session completion.
- **Stop** triggers Winner Finalization and cannot be reversed. **Pause** is the temporary hold.
- **Hold & Fire** (Step 1) stages all content and releases every post at once at a scheduled UTC datetime.

### FAQ
- **Difference between a Contest and a Campaign:** a Contest includes a public leaderboard screen, QR codes, participant scoring, prize mechanics, and a live event display. A Campaign is the simpler mode without the live screen. The URL parameter locks the choice at creation.
- **Can a Contest run on multiple channels simultaneously:** yes. Channel selection is per post in Step 2. One, any combination, or all five. The leaderboard ranks every share on the same **Wozku Score** regardless of channel.
- **Can posts be added after the wizard:** yes. The **Add Post** button on the Dashboard creates new posts at any time. Each new post gets its own QR code, Universal Share URL, and a Channel Ninja URL per enabled channel.
- **Does reaching Step 3 make the contest visible:** no. The screen URL is generated and accessible, but the public screen shows only the Wozku logo until **Go Live**.
- **Stop vs Pause:** Pause is a temporary, resumable hold. Stop triggers Winner Finalization and cannot be reversed.
- **Launch at a specific time:** enable **Hold & Fire** in Step 1 Additional Settings and set the exact UTC datetime. All content stages but stays hidden until that moment, then every post goes live at once.

---

## Configure Contest Setup - Step 1
Source: https://wozku.com/kb/02-creating-a-contest/step-1-contest-setup/

Access: `https://wozku.com/admin/campaigns/create?withscreen=1` or click **+ Contest** in the top navigation bar.

### Prerequisites
- Logo file ready: 300 x 300 px, JPG, JPEG, PNG, WEBP, or GIF, ideally pre-uploaded to the Media Library.
- Event name confirmed.
- LinkedIn Company ID available if LinkedIn attribution is in scope.

### Fields

| Field | Required | Notes |
| ----- | -------- | ----- |
| **Logo** | Required | Click the logo upload area to open the **Media Library**. Recommended 300 x 300 px. Accepted: JPG, JPEG, PNG, WEBP, GIF. Hard gate: clicking **Continue** without a logo shows *"Logo is required"* and does not advance |
| **Campaign Name** | Required | Public-facing name of the contest, visible to participants on the sharing page. Examples: "Salesforce GSS", "Share to Win", "HPE AI Summit 2026" |
| **Campaign Page Description** | Required | Text shown to participants explaining why they should share. Quill-based rich text editor with toolbar: text style, bold, italic, link, blockquote, ordered list, unordered list |
| **Redirection URL** | Optional | Where participants are sent after sharing. Blank skips the post-share redirect |
| **Thank You Message** | Required | Displayed after the share action. Default: *"Thank you for participating"* |
| **Campaign End Date** | Required | Date the contest closes. Date picker pre-fills to approximately two weeks from today. Format: YYYY-MM-DD |
| **LinkedIn Company ID** | Optional | Links the campaign to a LinkedIn company page for attribution. Does not affect the participant sharing flow. LinkedIn-specific; other channels use per-post @mentions |
| **Tags** | Optional | Comma-separated hashtags for internal filtering. Example: `#Test1, #test2`. Not shown publicly |

### Selecting an image in the Media Library
1. Click the relevant folder in the left panel (e.g., **Logos**).
2. Click an image thumbnail. A blue checkmark appears.
3. The **Use Selected (1)** button activates and turns yellow / green.
4. Click **Use Selected (1)** to confirm.

Media Library collections: All Photos, Creative Studio, Background Image, Frames, Gift Images, Headers, Logos, Post Images, Thankyou Images, Welcome Images.

### Additional Settings (collapsed by default)

| Setting | Default | Notes |
| ------- | ------- | ----- |
| **Allow users to write their own post (UGC)** | OFF | Enables User Generated Content. Participants write their own post instead of the curated copy. Contest-level toggle; individual posts also have a UGC toggle in Step 2 |
| **Enable SPA** | OFF | Single Page Application mode for the contest screen |
| **Mentions for campaign** | Empty | Pre-populate @mentions across every shared post in this contest. Channel-specific behaviour: LinkedIn tags a Company Page, Twitter tags an @handle |
| **Allow users to share multiple posts at different Intervals** | OFF | When enabled, participants can share more than one post but must wait a minimum number of hours between shares |
| **Post Sharing Interval** | 0 | Hours between allowed post shares. Options: 0, 1, 2, 4, 6, 12, 24, 36, 48. Active only when the multi-post toggle is ON |
| **Enable Hold & Fire** | OFF | Holds all posts in staging and releases them at a scheduled datetime |
| **Hold & Fire Date/Time (UTC)** | Empty | The exact UTC moment the campaign fires. Required when Hold & Fire is ON |

### Multiple posts at different intervals
- Toggle OFF (default): participants can share every post with no enforced wait.
- Toggle ON: the platform enforces a minimum wait between shares, set by admin.
- Independent of this setting: a participant can share every post in a contest, but each post only once. The same post is never shareable twice on the same channel by the same participant.

### Hold & Fire
Scheduled burst launch. Stage the entire contest (all posts, QR codes, branding, channel selections) while keeping everything invisible to participants. At the specified UTC datetime the contest fires automatically and every piece of content goes live at the same moment on every enabled channel.

Workflow:
1. Set up the full contest including posts, channel selections, and settings.
2. Set **Hold & Fire Date/Time** to the exact UTC moment of launch.
3. Distribute QR codes or links in advance and collect signups.
4. At the scheduled time the contest fires automatically; posts go live from every account at once.

Use for: global product launches, conference Day 1 opening shares, earnings call campaigns that fire at market open.

### Proceeding
Click **Continue** to advance to Step 2. The contest is saved and gets a Campaign ID visible in the URL (e.g., `/campaigns/1519/edit`).

### FAQ
- **Continue without a logo:** the form shows *"Logo is required"* and does not advance.
- **Change Campaign Name after Continue:** yes. Every Step 1 field is editable at any point via the **Edit** button on the Dashboard or the sidebar step navigator.
- **LinkedIn Company ID:** links the campaign record to a LinkedIn company page for attribution. Optional. Does not change the sharing flow. No equivalent contest-level field exists for other channels; per-post @mentions cover that.
- **Hold & Fire visibility:** content is staged but not visible to participants until the scheduled UTC datetime passes.
- **Contest-level vs post-level UGC:** contest-level applies to every post. The per-post UGC toggle in Step 2 Additional Settings overrides it for individual posts.
- **Hold & Fire without a live screen:** works on Campaigns too. The scheduled release fires whether or not a live screen is displayed.
- **Where channels are picked:** on each post in Step 2. A Contest has no contest-level channel setting.

---

## Add Posts to a Contest - Step 2
Source: https://wozku.com/kb/02-creating-a-contest/step-2-add-posts/

URL: `/admin/campaigns/{ID}/createpost`. At least one post is required before Screen Setup opens.

### Prerequisites
- Step 1 saved and the contest has a Campaign ID.
- Post image ready: 1200 x 628 px preferred, JPG, JPEG, PNG, WEBP, or GIF.
- Post copy drafted in first person from the participant's perspective.

### Channel Selection (required)
The channel picker sits at the top of every post form. Channels: **LinkedIn**, **Twitter / X**, **Slack** (Beta), **Facebook** (Beta), **Instagram** (Beta).

- Select one channel, multiple, or all five.
- Multiple channels enabled: the participant sees a channel picker at share time, via the **Universal Share URL** or the **Public URL** landing page.
- One channel enabled: the participant goes straight to that channel's OAuth with no picker step.
- Status: LinkedIn and Twitter / X are GA. Slack, Facebook, and Instagram are Beta (production-ready and fully scored, ongoing stabilisation of OAuth redirect paths).
- A post's channel list should be finalised before QR codes are printed. Changing channels after distribution breaks any Channel Ninja URL QR codes already in the field. For a mid-event channel addition, add a new post rather than editing an existing one.
- The Contest record carries no channel setting. Each post sets its own list independently, so one contest can mix a LinkedIn-focused keynote post, a multi-channel booth post, and an Instagram visual post on the same leaderboard and the same Wozku Score.

### Post fields

| Field | Required | Notes |
| ----- | -------- | ----- |
| **Post Title** | Required | Internal label, not shown publicly. Examples: "I am attending", "Day 1 Keynote", "HPE Booth Share" |
| **Post Image** | One of Post Image / Embed Code required | Preferred size 1200 x 628 px. Opens the Media Library, or click **Upload Media**. Live preview shows the post with a "Participant Name" placeholder |
| **Embed Code** | One of Post Image / Embed Code required | Paste a post embed code to reshare existing content. Mutually exclusive with Post Image |
| **Frame** | Optional | Overlay frame on top of the post image. Preferred size 1280 x 720 px. Opens the Media Library |
| **Post Description** | Required | The copy participants publish on their selected channel. Write in first person |

Validation: if neither Post Image nor Embed Code is present, the form returns *"Image or LinkedIn Embedcode is required"*.

Two buttons above the description field:
- **+ Add Post Variations** opens the Variations modal.
- **@ Add Mentions** opens the Tag Community Members modal.

### Post Variations modal
Two tabs: **Add Manually** and **Generate With AI**.

**Tab 1: Add Manually**
- **Primary Post Content** field, pre-filled from the Post Description.
- **@** button to add @mentions to this variation.
- **Save** button. A success dialog confirms each save. Each click of **Save** adds the current content as a new numbered variation.

**Tab 2: Generate With AI**
1. Primary Post Content is pre-filled from the typed description.
2. Configure Additional Settings (optional) to guide AI tone and format.
3. Click **Generate Content With AI**.
4. Loading message: *"Loading… because instant gratification is overrated."*
5. In roughly 6 seconds a 3-column grid of variation cards appears.

Each variation card shows: variation number label, full post copy (editable textarea), **@** button, **Delete** button.

**AI generation settings**

| Setting | Options | Default |
| ------- | ------- | ------- |
| **Use emojis** | Toggle ON/OFF | OFF |
| **Number of variations** | 5, 10, 20 | 10 |
| **Optimization** | Select optimization / Optimize for clicks / Optimize for engagement | None |
| **Hook Format** | 16 templates (multi-select) | None |
| **Structure / Flow** | 16 narrative frameworks (multi-select) | None |
| **Use Case** | 16 content use cases (multi-select) | None |
| **Ideal CTA** | 16 call-to-action styles (multi-select) | None |

All four list fields are multi-select. Full option lists are in the "Generating Post Variations with AI" section below.

### @Mentions
Click **@ Add Mentions** to open the **Tag Community Members** modal. Enter the company LinkedIn URL in **Add Organization from LinkedIn** (example: `linkedin.com/company/wozku/`) and optionally a **Twitter Handle** (example: `https://x.com/wozku`). Click **Add Organization**. Previously added organisations appear as chips and can be re-selected.
Behaviour is channel-specific: LinkedIn tags a Company Page, Twitter / X tags an @handle.

### Post-level Additional Settings (collapsed)

| Field | Notes |
| ----- | ----- |
| **Redirection URL** | Overrides the contest-level redirect URL for this post only |
| **Thank You Message** | Overrides the contest-level thank you message for this post |
| **CTA Text** | Call-to-action button label shown after sharing (e.g., "Visit our website") |
| **CTA Link** | URL the CTA button points to |
| **Mark this as a Booster Post** | Enables extra points configuration for this post |
| **Enable UGC** | Allows participants to write their own version of this post; overrides the contest-level UGC toggle |

### Adding more posts
After saving a post and advancing to Screen Setup, return to Add Posts at any time. Each post gets its own QR code, its own **Universal Share URL**, and a **Channel Ninja URL** for every channel enabled on that post.

### Proceeding
Click **Continue** to advance to Step 3: Screen Setup.

### Limits and rules
- No enforced maximum on manual variations. The AI generator creates up to 20 per run; run it multiple times to accumulate more.
- Each participant shares each post once per contest, regardless of channel or the multi-post interval setting.
- Post Image and Embed Code are mutually exclusive. Frame pairs with either.
- Twitter / X posts are limited to 280 characters, which constrains variation length on multi-channel posts.

### FAQ
- **Why channel selection is in Step 2:** it is a per-post decision. A single contest can mix a LinkedIn-only post, a Twitter-only post, and an all-channel post under the same leaderboard.
- **Different posts, different channels:** yes. Post A LinkedIn-only, Post B LinkedIn + Twitter, Post C all five, all on the same leaderboard and Wozku Score.
- **Save without image or embed:** form returns *"Image or LinkedIn Embedcode is required"* and refuses to save.
- **Both image and embed:** not possible. Mutually exclusive.
- **Variation maximum:** none enforced manually; AI creates up to 20 per run.
- **Editing AI copy:** every card has an editable textarea.
- **Post-level Redirection URL scope:** affects that post only.
- **Same post shared more than once:** no.
- **Universal Share URL vs Channel Ninja URL:** Universal Share URL (`wozku.com/share/post/{hash}`) presents a channel picker of every channel enabled on the post. Channel Ninja URL (`wozku.com/share/{channel}/{hash}`) goes straight to one channel's OAuth with no picker.

---

## Configure the Live Screen - Step 3
Source: https://wozku.com/kb/02-creating-a-contest/step-3-screen-setup/

URL: `/admin/campaigns/{ID}/screen-setup`. Prerequisite: at least one post added in Step 2 with at least one channel enabled.

### Screen URLs

| URL type | Pattern | Purpose |
| -------- | ------- | ------- |
| **Main screen** (contest-level) | `https://wozku.com/campaigns/screen/{unique_hash_id}` | Main stage: rotating feed of every post plus the full contest leaderboard |
| **Screen Preview URL** (per post) | `https://wozku.com/post/screen/{post_hash}` | Track-specific, room-specific, or location-specific screen. Featured slot pinned to one post; leaderboard still shows the full contest ranking. Available inside that post's **Links & QR Codes** modal |

Reaching Step 3 does not make the contest live. Every screen shows only the Wozku logo (no leaderboard, no posts, no content) until **Go Live** is clicked. A contest with 7 posts can drive 8 screens (1 main + 7 track screens) with zero extra configuration.

### Contest lifecycle: 3 states

| State | Buttons shown | What the public screen shows |
| ----- | ------------- | ---------------------------- |
| **Not Live** (default) | Go Live | Wozku logo only. No participant activity possible |
| **Live** | Pause + Stop | Full screen: leaderboard, posts, QR codes. Participants can share |
| **Paused** | Go Live (resume) | Wozku logo again. Participation suspended |

State transitions:
- Not Live to Live: click **Go Live**.
- Live to Paused: click **Pause**.
- Paused to Live: click **Go Live** again.
- Live to Stopped: click **Stop**, which triggers the Winner Finalization workflow.

### Individual post toggles
Each post in the Screen Setup list has its own on / off toggle, independent of the contest live status.
- Contest Live, post toggle OFF: that post does not appear on the screen; other posts remain visible.
- Contest Not Live: every post is hidden regardless of its toggle state.
- Toggling a post on or off does not change its channel list.

### Links & QR Codes per post
Each post in the Screen Setup list has a link icon button opening the **Links & QR Codes** modal, with one tab per URL type plus an admin-side Screen Preview tab.

| Tab | Pattern | Notes |
| --- | ------- | ----- |
| **Public URL** | `wozku.com/post/{hash}` | Full Wozku landing page with social proof grid. Copy link or download QR (SVG or PNG) |
| **Universal Share URL** | `wozku.com/share/post/{hash}` | Lightweight channel picker. Use for multi-channel printed QR codes. Copy link or download QR (SVG or PNG) |
| **Channel Ninja URL** (one tab per enabled channel) | `wozku.com/share/{channel}/{hash}` | Direct OAuth to that channel. Under 60 seconds from scan to published post. Copy link or download QR (SVG or PNG) |
| **Screen Preview** | `wozku.com/post/screen/{post_hash}` | Admin-side, display-only. Copy and Open buttons, no QR download. Not a participant URL |

The on-screen QR routing (what the QR displayed on the live leaderboard screen links to) is controlled separately in **Contest Settings** > **Manage QR Code**.

### Public screen layout (when live)

**Left panel:**
- Contest CTA text (configurable in Contest Settings, default "Scan. Share. Win.").
- Contest description from Step 1.
- QR code (routing controlled by **Manage QR Code**: Public URL, Universal Share URL, a specific Channel Ninja URL, a Form, or a Quiz).
- Post preview with a "Just Shared" activity feed of recent participant shares.

**Right panel:**
- Leaderboard with participant names, **Wozku Score** values, and ranks.
- Gift / prize image (if enabled in **Theme Settings**).
- Podium display for the top 3 participants.

**Real-time updates:** the screen uses Pusher WebSocket for live event streaming. Leaderboard and post feed updates fire on the **Page Refresh Interval** (default 600 seconds = 10 minutes), not instant push. The "Next Scoreboard Update In" countdown shows when the next refresh lands.

### Theme Settings (7 tabs)
Tab order: **Theme** > **Background** > **Gift** > **Header** > **Welcome** > **Closing** > **Focus Content**.

Campaign Themes, 4 options:

| Theme | Best for |
| ----- | -------- |
| **Legacy Screen** (default) | Classic dark / light layout. General-purpose |
| **Aura Live** | High-impact event display with live leaderboard. Large events and conferences |
| **Live TV Leaderboard** | Real-time leaderboard designed for TV screens and large displays |
| **Grid Gallery - Wozku View** | Responsive 64-grid layout featuring participant photos. Social wall effect |

Click a theme to preview it on the right side of the modal, then **Use This Theme** to apply.
**Legacy Theme Color** (bottom of the Theme tab): **Dark** / **Light** toggle, applies only when no Campaign Theme is selected.

Asset tabs and dimensions:
- **Background:** Background Image 1920 x 1080 px, or Background Video via Vimeo URL.
- **Gift:** Gift Image 1920 x 400 px, shown on the left panel when **Show Gift Image** is enabled.
- **Header:** Header Image 1350 x 500 px.
- **Welcome:** Welcome Image 1920 x 1080 px.
- **Closing:** Thank You Image 1920 x 1080 px, shown after the contest ends.
- **Focus Content:** Focus Image 1920 x 1080 px and Focus Video via Vimeo URL. The focus image shows while the video loads.

### Embed Code modal

| Option | Choices |
| ------ | ------- |
| **Select View Type** | Full Screen / Leaderboard |
| **Popup Speed** | Slow / Medium / Fast |
| **Select Theme Type** | Light / Dark |

The HTML and JavaScript snippet auto-generates from the selections.

### Contest Settings
Opens the Contest Settings modal with two tabs: **Screen settings** and **Thank you page settings**.

### Stop Campaign: Winner Finalization flow
Clicking **Stop** on a live contest opens the **Winner Finalization** workflow.

Step 1, winner selection method:

| Option | How winners are selected |
| ------ | ------------------------ |
| **Default** | Top 3 participants by **Wozku Score** selected automatically |
| **Custom Criteria** | Opens a criteria builder |

Custom Criteria Builder fields:

| Field | Options | Notes |
| ----- | ------- | ----- |
| **Type** | Top / Random | "Top" = highest Wozku Score values; "Random" = random draw from a pool |
| **Number of Winners** | Number input | How many winners to select |
| **Rank Range** | From / To (number inputs) | Only consider participants ranked within this range (e.g., rank 1-10 for a top-10 draw) |

After finalising winners, the contest screen switches to the end state with winner announcements.

### FAQ
- **Does Step 3 make the contest live:** no. Reaching Step 3 generates the URL; the screen shows the Wozku logo until **Go Live**.
- **Switch posts while live:** yes, via individual post toggles. Leaderboard and participant activity continue uninterrupted.
- **Pause vs Stop:** Pause is temporary and reversible. Stop triggers Winner Finalization and cannot be undone.
- **URL types per post:** three participant URL types (Public URL, Universal Share URL, one Channel Ninja URL per enabled channel) plus an admin-side Screen Preview tab. Participant tabs have a copy field and QR download (SVG or PNG); Screen Preview has Copy and Open, no QR.
- **Multiple screens simultaneously:** yes. Main screen URL and every post's Screen Preview URL are independent and can all be cast at once.
- **Faster leaderboard:** lower **Page Refresh Interval** in **Contest Settings** > **Screen settings**; 60-120 seconds at high-activity events.
- **Random draw from the top 10:** Custom Criteria Builder, Type = Random, Number of Winners = target count, Rank Range 1 to 10.
- **On-screen QR routing:** **Contest Settings** > **Screen settings** > **Manage QR Code**.

---

## Contest Settings - Full Reference
Source: https://wozku.com/kb/02-creating-a-contest/contest-settings/

Access: click **Contest Settings** on the Screen Setup page. URL `/admin/campaigns/{ID}/settings`. Two tabs: **Screen settings** and **Thank you page settings**.

### Screen settings tab: display text and timing

| Setting | Default | Description |
| ------- | ------- | ----------- |
| **Post Pin Interval (Seconds)** | 60 | How often the featured post rotates on the left panel. Active only when the contest has more than one post |
| **Page Refresh Interval (Seconds)** | 600 | How often leaderboard scores and rankings refresh on the public screen. Drives the "Next Scoreboard Update In" countdown |
| **Campaign CTA Text** | "Scan. Share. Win." | Call-to-action text on the left panel of the screen |
| **Leader Board Title** | "Social Champ" | Title above the leaderboard rankings on the right panel |
| **Contest End Heading** | "This contest has ended." | Heading shown after the contest end date passes |
| **Contest End Message (Winners Announced)** | "Thank you for your interest and participation!" | Shown after winners are announced |
| **Contest End Message (Winners Pending)** | "The winners will be announced soon." | Shown after the contest ends but before winners are announced |

### Screen settings tab: screen display settings

| Setting | Default | Description |
| ------- | ------- | ----------- |
| **Show Leaderboard** | ON | Shows the participant rankings panel on the right side of the screen |
| **Show Gift Image** | ON | Shows the gift image from Theme Settings on the left panel |
| **Show Post Preview** | ON | Shows the post preview card on the left panel with the QR code and CTA text |
| **Show QR** | Top | QR code position on the left panel. Options: Top / Bottom / Hidden |

### Manage QR Code
Controls what the QR code displayed on the live screen links to. Separate from the per-post QR codes in the **Links & QR Codes** modal.

| Option | Availability | Description |
| ------ | ------------ | ----------- |
| **Public URL** | Always | Links to `wozku.com/post/{hash}`, the full Wozku landing page with social proof grid and post preview |
| **Universal Share URL** | Always | Links to `wozku.com/share/post/{hash}`, the lightweight channel picker. Participant selects LinkedIn, Twitter, Slack, Facebook, or Instagram after scanning |
| **Channel Ninja URL** | Per enabled channel | Links to `wozku.com/share/{channel}/{hash}`, direct OAuth to one channel. Under 60 seconds from scan to published post. One option per channel enabled on the post |
| **Quiz** | Always | Links to the contest's quiz |
| **Form** | Only when a Form exists | Links to the lead capture form. Does not appear in the dropdown until at least one Form has been created for this campaign under **Additional Settings** > **Forms** |

### View Participant Rank Wise
- Toggle ON (default): right panel shows the leaderboard with rank numbers, a podium for the top 3 with profile photos and **Wozku Score** values, and a ranked list below.
- Toggle OFF: right panel shows participants in a flat list with star icons in place of numeric scores. Rank numbers and score values disappear.

### Leaderboard management: Reset Leaderboard
Clears all shares and scores for the contest across every channel and every participant. Irreversible without support intervention: no Regenerate button, no undo, no in-platform restore.

Two-step process with a mandatory reason:
1. Click **Reset Leaderboard**.
2. A dialog asks for a reset reason. Enter one and click **Confirm**.
3. A second confirmation dialog appears. Click **Yes, reset it!**
4. The reset is applied immediately on the server.

The reset is not instant on the public screen; it updates on the next **Page Refresh Interval** cycle (default 600 seconds). Reload the browser manually or lower the interval before triggering the reset for an immediate visible effect.

Both **Reset Leaderboard** and **Stop / Winner Finalization** are irreversible. Reset clears all shares and scores; Stop ends the contest and locks the winners.

Click **Save Settings** after any change in the **Screen settings** tab.

### Thank you page settings tab
Channel-agnostic: the same settings apply regardless of which channel the participant shared to.

| Setting | Description |
| ------- | ----------- |
| **Hide Wozku score** | Show or hide the participant's **Wozku Score** on their thank you page |
| **Hide Profile ranking** | Show or hide the participant's current rank |
| **Hide FAQs** | Show or hide the FAQ section on the thank you page |
| **Show pinned posts** | Show pinned posts on the thank you page |
| **Thank you page CTA** | Button label shown on the thank you page (optional) |
| **Thank you page CTA link** | URL the CTA button points to (optional) |

Click **Save Settings** after changes. Each tab saves separately.

### FAQ
- **Form option availability:** appears only after at least one form has been created under **Additional Settings** > **Forms**.
- **On-screen QR at multi-channel events:** use the **Universal Share URL**.
- **Does reset delete data permanently:** yes, across every channel and participant. Irreversible without support intervention. Export the Community table first.
- **Reset visibility on the public screen:** updates on the next **Page Refresh Interval** cycle.
- **Flat list mode:** participants in a flat list with star icons instead of numeric Wozku Score values, rank numbers hidden.
- **Custom CTA on the thank you page:** enter a label in **Thank you page CTA** and a URL in **Thank you page CTA link**. Both optional.
- **Save per tab:** yes. A save in one tab does not save the other.
- **Route on-screen QR to a Channel Ninja URL:** yes; one option appears per channel enabled on the current post.

---

## Booster Post - Extra Points Configuration
Source: https://wozku.com/kb/02-creating-a-contest/booster-post/

A Booster Post is a post inside a contest that pays out extra points when a participant shares it. Flagged in the post-level Additional Settings during Step 2 (Add Posts).

### Enabling
In Step 2, scroll to the bottom of the post form, click **Additional Settings**, toggle on **Mark this as a Booster Post (Enable extra points for sharing)**. A **Bonus Point Configuration** panel appears with three mutually exclusive radio button options.

### The three scoring modes

| Mode | How it works | Input required |
| ---- | ------------ | -------------- |
| **Auto Calculated Bonus** (default) | The Wozku Score runs normally. The post carries a booster flag but points still reflect real channel engagement | None |
| **Fixed Bonus Addition** | Adds a fixed number of bonus points on top of the standard Wozku Score for that share | **Bonus Points**, number input (e.g., 50) |
| **Fixed Total Override** | Replaces the standard Wozku Score calculation entirely with the fixed number. Every participant who shares this post on any channel receives exactly that number for that share | **Total Points**, number input (e.g., 100) |

Key distinctions:
- Auto Calculated Bonus: the bonus is a signal, not a guarantee. Participants still need strong post performance to score well.
- Fixed Bonus Addition: standard Wozku Score plus the fixed bonus. Reliably ranks above non-boosted shares regardless of engagement.
- Fixed Total Override: the fixed number is the score for the share, regardless of post performance or audience size. Engagement-based scoring is bypassed entirely.

The scoring treatment is uniform across all five channels. A Fixed Bonus Addition of 50 adds 50 points on LinkedIn, Twitter, Slack, Facebook, or Instagram. A Fixed Total Override of 500 gives every sharer exactly 500 points regardless of channel.

Booster Posts show a lightning bolt icon on the Screen Setup post list. The indicator is admin-only and does not appear to participants.
Multiple Booster Posts can be stacked in one contest, each with its own mode and value independently. There is no cap on the number of Booster Posts per contest.

### Game design patterns
- **Golden Post Hunt:** one post revealed at peak hour worth 10x normal points. Fixed Bonus Addition or Fixed Total Override with a large value.
- **Time-Gated Power Hour:** a Fixed Bonus Addition post active for 30 minutes during a keynote.
- **Topic Challenges:** three posts on different themes, each on Auto Calculated Bonus; sharing all three compounds score.
- **VIP Stage Pass:** a Fixed Total Override post worth exactly 500 points, QR distributed only at a specific booth.
- **Underdog Comeback:** in the final two hours, a Fixed Total Override "comeback post" worth 1000 points.
- **Scavenger Hunt:** multiple posts hidden across breakout rooms, each with a moderate Auto Calculated Bonus.
- **Multi-Channel Post:** a Booster Post enabled across all five channels with the Universal Share URL QR on signage.

### FAQ
- **Multiple Booster Posts:** yes, each independently configured, no cap.
- **Fixed Bonus Addition vs Fixed Total Override:** Addition adds on top of the Wozku Score; Override replaces it entirely.
- **Auto Calculated Bonus guaranteed extra points:** no. Points still reflect real channel engagement.
- **Same bonus on all channels:** yes. The Wozku Score model is channel-agnostic.
- **Admin indicator:** lightning bolt icon on the Screen Setup post list, admin-only.
- **Changing mode after the contest starts:** allowed. The new mode applies to subsequent scoring calculations; points already awarded do not change retroactively.
- **Channel Ninja URL vs Universal Share URL on a Booster Post QR:** Universal Share URL if the post is enabled for multiple channels; Channel Ninja URL if pinned to a specific channel for fastest scan-to-post.

---

## Creating Post Variations Manually
Source: https://wozku.com/kb/02-creating-a-contest/post-variations-manual/

Variations are multiple copy versions of one post, served in round-robin rotation for fair distribution across participants.

### Prerequisites
- Post Description written in Step 2 (Add Posts).
- The **Add Variations** modal is open (click **+ Add Post Variations** above the Post Description field).

### Steps (Add Manually tab)
1. The **Primary Post Content** field is pre-filled from the Post Description.
2. Edit the copy for this variation.
3. Optionally click the **@** button to add @mentions specific to this variation.
4. Click **Save**.
5. A success dialog confirms the save. Each click of **Save** adds the current content as a new numbered variation.
6. Edit the text again and click **Save** again to create the next variation.
7. Repeat until every wanted variation exists.

Each variation is numbered sequentially.

### Rotation
Wozku serves saved variations in round-robin order: Variation 1 to the first participant, Variation 2 to the second, cycling back to Variation 1 after the last variation in the set. The mechanic is channel-agnostic; the assigned variation travels to whichever channel the participant picks.

### Localisation pattern
One variation per language under the same parent post, with channel selection unchanged across variations. Every variation is the same post, same hashtags, same tracking, copy in a different language.

Worked example (Acme AI Summit 2026, three languages): parent post "Acme AI Summit 2026 - Launch Day" with channel selection set in Step 2 (LinkedIn, Twitter), and three variations:
- Variation 1, English (en-US).
- Variation 2, German (de-DE), translated by a German-speaking translator, not a literal translation.
- Variation 3, Japanese (ja-JP), translated by a Japanese-speaking translator with greeting register and politeness level adapted for a B2B Japanese audience.

Round-robin distribution serves each variation across participants without region-aware routing. For region-aware routing, give region-specific events their own contests. The AI generator can produce a first-pass localised draft per language for a human translator to refine.

Channel selection lives at the post level (the parent post, not the variation), which lets one product launch ship in multiple languages without fragmenting the contest into multiple posts.

### Limits and guidance
- No enforced maximum number of variations. 3-5 is the stated practical target for most events.
- On posts enabled for Twitter, variations must fit the 280-character limit or they truncate on that channel.

### FAQ
- **Editing a saved variation:** close and reopen the modal via **+ Add Post Variations**. Previously saved variations are listed and editable; make changes and click **Save** again.
- **Which variation a participant sees:** round-robin order, cycling after the last variation.
- **Maximum variations:** no enforced maximum.
- **Effect on Primary Post Content:** the original Post Description stays unchanged in Step 2. Variations are stored separately and served in round-robin rotation in place of the primary copy.
- **@mentions per variation:** yes, each variation has its own **@** button; mentions apply only to that variation.
- **Adding variations before Go Live:** not required. Variations can be added or edited at any point including during a live contest; changes take effect for participants who access the post after the save.
- **Does the served variation change by channel:** no. Variation assignment is participant-based, not channel-based.

---

## Generating Post Variations with AI
Source: https://wozku.com/kb/02-creating-a-contest/post-variations-ai/

### Prerequisites
- Primary post copy written in the **Post Description** field in Step 2.
- The **Add Variations** modal is open and the **Generate With AI** tab is selected.

### Flow
1. **Primary Post Content** is pre-filled from the Post Description.
2. Configure the Additional Settings (optional).
3. Click **Generate Content With AI**.
4. Loading message: *"Loading… because instant gratification is overrated."*
5. In roughly 6 seconds a 3-column grid of variation cards appears.

Each variation card shows: variation number label, full post copy in an editable textarea, an **@** button for variation-specific @mentions, and a **Delete** button.

Regenerating replaces the previous cards.

### AI generation settings
All list settings fields are multi-select.

| Setting | Options | Default |
| ------- | ------- | ------- |
| **Use emojis** | Toggle ON / OFF | OFF |
| **Number of variations** | 5, 10, 20 | 10 |
| **Optimization** | none / Optimize for clicks / Optimize for engagement | none |
| **Hook Format** | 16 options, multi-select | none |
| **Structure / Flow** | 16 options, multi-select | none |
| **Use Case** | 16 options, multi-select | none |
| **Ideal CTA** | 16 options, multi-select | none |

### Hook Format (16 options)

| # | Format |
| - | ------ |
| 1 | "In [X years], [common belief] won't matter." |
| 2 | "Stop doing [X]. Start doing [Y]." |
| 3 | "There's a $[X] gap no one is solving." |
| 4 | "We analyzed [X] companies. Here's what we found." |
| 5 | "If you relate to 2+ of these, read this now." |
| 6 | "This slide changed how I think about [topic]." |
| 7 | "I used to think [X]. I was wrong." |
| 8 | "I wish I knew this at 25." |
| 9 | "We use this 3-part framework to do [X]." |
| 10 | "How we [achieved X] in [Y days]." |
| 11 | "I still remember the moment it all changed." |
| 12 | "Everyone talks about [X], but not [Y]." |
| 13 | "If you're a [role], what's one thing you're stuck on?" |
| 14 | "This wasn't the plan. But it worked." |
| 15 | "Most [ICPs] struggle with [X]. So we built [Y]." |
| 16 | "This idea sat on our whiteboard for 6 months." |

### Structure / Flow (16 options)

| # | Structure |
| - | --------- |
| 1 | Hook - Trend - Insight - Strategic Take - What to Watch |
| 2 | Myth - Why it's wrong - Proof - New Play - Action |
| 3 | Gap - Pain - Opportunity - Who's missing it - Your take |
| 4 | Top insights - Surprising stat - Impact - Link to report |
| 5 | Checklist - Pain Signals - Context - Resource Value |
| 6 | Slide visual - Context - Takeaway - How to use it |
| 7 | Old belief - Turning point - New truth - Impact |
| 8 | Context - Advice - Life lesson - Emotional Close |
| 9 | Framework visual/name - Description - Use case |
| 10 | Problem - Action - Result - How to replicate |
| 11 | Set the scene - What happened - What it taught me |
| 12 | Mainstream POV - Your deeper truth - Why it matters |
| 13 | Challenge - Invite - Shared learning |
| 14 | Setup - Action - Unexpected win - Reflection |
| 15 | Problem - Insight - Solution - Access instructions |
| 16 | Origin - Roadblocks - Launch moment - Outcome |

### Use Case (16 options)
Market POVs/Founder voice, Contrarian POVs, Product GTM/investor interest, Report drops/resource sharing, Funnel activation, Visual-first posts, Founder reflections, Vulnerable/empathy content, Positioning your expertise, Proof of execution, Origin stories, Perspective shifting, Engagement boost, Social proof, Product drops, Feature stories.

### Ideal CTA (16 options)
"What do you think?", "Tag someone who needs this", "Let's build this", "Download the full report", "Grab the guide", "Explore the full deck", "Agree or disagree?", "What would you add?", "Steal this framework", "Want the playbook?", "Have you faced similar?", "Let's talk in comments", "Drop your thoughts below", "Let's hear your story", "Try it now", "Be part of the beta".

### Channel-aware editing after generation
- LinkedIn variations: longer-form, professional tone, more context and a structured takeaway.
- Twitter variations: trim to 280 characters, punchy hook, hashtags front-loaded.
- Instagram variations: visual-first language, emoji-friendly if appropriate.

The mechanic is channel-agnostic (the same variations modal serves all channels), but the AI output is editable so tailoring a subset of cards per channel is a valid post-generation workflow.

### FAQ
- **AI starting point:** whatever is in **Primary Post Content**, pre-filled from the Post Description.
- **Regenerating:** yes; adjust settings and click **Generate Content With AI** again. Previous cards are replaced.
- **Mixing manual edits with AI cards:** yes. Every card is editable and edits persist on save.
- **Optimize for clicks vs engagement:** clicks biases toward stronger CTAs and direct links; engagement biases toward copy that invites comments, reactions, and discussion.
- **Hashtags:** the AI incorporates hashtags present in the seed description.
- **Same variations on a multi-channel post:** yes. Variations are stored at the post level and serve to any participant regardless of channel.
- **Generation limit:** no documented limit per campaign. Each generation runs in about 6 seconds.

---

## Post Image vs Embed Code
Source: https://wozku.com/kb/02-creating-a-contest/post-image-vs-embed/

Every post in Step 2 requires either a **Post Image** or an **Embed Code**. They are mutually exclusive.

### Post Image
A brand-uploaded image. When a participant shares using a Post Image, a new post lands on their profile on whichever channel they selected, with the image and the post description copy.
- Recommended size: 1200x628px. This is the LinkedIn native post image dimension and a safe ratio for Twitter and Facebook. Other sizes or ratios may crop or distort.
- Best for: most use cases (events, product launches, registration drives) and all multi-channel contests.
- How to add: click the **Post Image** field to open the Media Library, select an existing image or upload a new one.

### Embed Code
Lets participants reshare an existing LinkedIn post rather than publish a new one.
- Best for: amplification campaigns concentrating engagement on a single existing piece of content.
- Channel note: Embed Code is a LinkedIn mechanic. For posts enabled on non-GA channels (notably Instagram, Private Beta), embed content may not preview richly or display with full visual fidelity. Static Post Images are safer for cross-channel posts.
- How to add: open the LinkedIn post, click the three-dot menu, select **Embed**, copy the embed code, paste it into the **Embed Code** field in Step 2.

### Frame (optional)
Available alongside both Post Image and Embed Code. Adds a branded overlay on top of the post image.
- Recommended size: 1280x720px. Design as a transparent PNG with the branded element at the edges and the centre left clear.

### Comparison

| | **Post Image** | **Embed Code** |
| --- | --- | --- |
| Creates new post on participant's channel | Yes | No, reshares existing LinkedIn post |
| Custom copy (your description) | Yes | Depends on embed |
| Custom image | Yes | Uses original post's image |
| Engagement credited to | New post on participant's profile | Original LinkedIn post |
| Works across all five channels | Yes | LinkedIn only; limited on non-GA channels |
| Best for | Most event and multi-channel use cases | Amplifying existing LinkedIn content |

### FAQ
- **Both on the same post:** no. Mutually exclusive. The form returns "Image or LinkedIn Embedcode is required" if neither is provided and rejects both being set simultaneously.
- **Finding the LinkedIn Embed Code:** three-dot menu on the post > **Embed** > copy.
- **Frame applies to both:** yes.
- **Post Image size:** 1200x628px.
- **Does Embed Code publish a new post:** no. Engagement (likes, comments, clicks) credits to the original post.
- **Embed Code on Instagram or Slack:** Embed Code is a LinkedIn mechanic; use a static Post Image for any post enabled on multiple channels or non-GA channels.

---

## Upload and Manage Images in the Media Library
Source: https://wozku.com/kb/02-creating-a-contest/media-library/

The Media Library is Wozku's central image repository. It opens whenever an image upload field is clicked: Logo in Step 1, Post Image in Step 2, or any image slot in Theme Settings. Every asset uploaded once is available across every future contest and campaign.

### Library structure
**LIBRARY:**
- **All Photos:** every image ever uploaded to the account, sorted by recency.
- **Creative Studio:** designs saved from the Creative Studio editor.

**COLLECTIONS (folders):**

| Folder | Contents |
| ------ | -------- |
| Background Image | Images for contest screen backgrounds |
| Frames | Post image overlay frames (1280x720px) |
| Gift Images | Prize and gift images shown on the leaderboard screen |
| Headers | Header banner images for the contest screen |
| Logos | Organisation and campaign logos |
| Post Images | Post images for sharing (1200x628px, works across all channels) |
| Thankyou Images | Images shown on the closing screen after the contest ends |
| Welcome Images | Images shown on the welcome screen before Go Live |

Custom folders can be created using the **Create Folder** field at the bottom of the Collections panel.

### Selecting an existing image
1. Click the relevant folder in the Collections panel (e.g., **Logos**).
2. Click an image thumbnail. A blue checkmark appears.
3. Click **Use Selected (1)** to insert the image into the field.

The button shows the count of selected images in parentheses. Clicking it with nothing selected does nothing.

### Uploading a new image
1. Click **Upload Media**, or drag and drop files directly into the library.
2. A progress bar runs while the file uploads.
3. The image appears in **All Photos** and the folder it was uploaded to.

Supported formats: JPG, JPEG, PNG, WEBP, GIF. Use **Load More** to paginate large libraries.

### Recommended image sizes by use

| Field | Recommended Size | Notes |
| ----- | ---------------- | ----- |
| **Logo** | 300x300px | Square. Used on the contest screen and form page |
| **Post Image** | 1200x628px | LinkedIn native post image dimensions; also displays cleanly on Twitter, Facebook, and other enabled channels |
| **Frame** | 1280x720px | Overlay on top of the post image. Design as a transparent PNG with branded elements at the edges |
| **Background Image** | 1920x1080px | Full screen background for the contest display |
| **Gift Image** | 1920x400px | Prize banner on the leaderboard left panel. Landscape format |
| **Header Image** | 1350x500px | Header banner in Theme Settings |
| **Welcome Image** | 1920x1080px | Shown before contest goes live |
| **Thank You Image** | 1920x1080px | Shown after contest ends |

### FAQ
- **Same image in multiple contests:** yes. Upload once, select from the folder in any future contest.
- **Finding recent uploads:** click **All Photos**, sorted by recency, use **Load More** to paginate.
- **Custom folder names:** yes, via **Create Folder**. Once created it appears in the Collections list and accepts uploads directly.
- **Use Selected with nothing selected:** nothing happens.
- **Creative Studio designs:** appear in the **Creative Studio** section of the Library panel and are available as Post Images or in other image fields.
- **Post Image size for non-LinkedIn channels:** 1200x628px is also safe for Twitter and Facebook, so it avoids cropping or distortion on any enabled channel.

---

## Customising the Screen Theme
Source: https://wozku.com/kb/02-creating-a-contest/screen-theme/

Access: click **Theme Settings** on the Screen Setup page (Step 3). The modal has 7 tabs. Changes take effect on the public screen the moment they are saved. Theme settings do not affect channel selection or scoring.

### Theme tab: the four campaign themes

| Theme | Best for |
| ----- | -------- |
| **Legacy Screen** (default) | Classic layout. General-purpose. Works correctly on any screen size from laptop to projector |
| **Aura Live** | High-impact animated leaderboard. Large events and conferences with a big screen or projector |
| **Live TV Leaderboard** | Real-time leaderboard designed for TV screens and large displays |
| **Grid Gallery - Wozku View** | Responsive 64-grid layout featuring participant profile photos. Social wall effect at exhibitions |

Preview on the right panel, apply with **Use This Theme**.
**Legacy Theme Colour** (bottom of the Theme tab): **Dark** / **Light** toggle. Applies only when Legacy Screen is selected. Controls the screen's background treatment.

### Background tab

| Field | Notes |
| ----- | ----- |
| **Background Image** | Replaces the default background of the contest screen. Recommended 1920x1080px. Accepted formats: JPG, JPEG, PNG, WEBP, GIF via Media Library |
| **Background Video** | Paste a Vimeo URL to run a looping video background. The Background Image displays while the video loads |

### Gift tab

| Field | Notes |
| ----- | ----- |
| **Gift Image** | Prize or gift image shown on the left panel of the leaderboard screen. Recommended 1920x400px. Displayed when **Show Gift Image** is toggled ON in Contest Settings |

The Gift Image is a landscape banner, not a square. Centre the key visual in the middle third of the canvas.

### Header tab

| Field | Notes |
| ----- | ----- |
| **Header Image** | Banner image shown at the top of the contest screen. Recommended 1350x500px |

### Welcome tab

| Field | Notes |
| ----- | ----- |
| **Welcome Image** | Full-screen image shown before the contest goes live (while in "Not Live" state, in place of the default Wozku logo). Recommended 1920x1080px |

### Closing tab

| Field | Notes |
| ----- | ----- |
| **Thank You Image** | Full-screen image shown after the contest ends (once **Stop** is clicked and Winner Finalization is complete). Recommended 1920x1080px |

### Focus Content tab

| Field | Notes |
| ----- | ----- |
| **Focus Image** | Image shown in the Focus Content panel. Recommended 1920x1080px |
| **Focus Video** | Paste a Vimeo URL. The Focus Image displays while the video loads |

### FAQ
- **Immediate effect:** yes. Visual theme changes are visible at the next page load; leaderboard data still updates on the **Page Refresh Interval**.
- **Background Image and Background Video together:** yes. The image displays while the video loads, then the video takes over as the looping background.
- **No Welcome Image uploaded:** the public screen shows the Wozku logo by default while Not Live.
- **Best theme for a standard monitor or laptop:** **Legacy Screen**. Aura Live and Live TV Leaderboard are optimised for large displays.
- **Changing theme after going live:** yes. Open **Theme Settings**, select a new theme, click **Use This Theme**, save. The public screen updates at next load.
- **File size limit:** follows the Media Library. Use recommended dimensions with standard compression.

---

## Embedding the Contest Screen
Source: https://wozku.com/kb/02-creating-a-contest/screen-embed/

The Embed Code generates an HTML and JavaScript snippet that displays the contest leaderboard on any external website or digital signage system. It reflects the live contest state in real time and requires no backend access on the host site beyond the ability to paste HTML.

### Prerequisites
- Contest created and at least at Step 3 (Screen Setup).
- Access to the HTML of the external website or digital signage system.
- The contest does not need to be live to generate the snippet. The embed shows the Wozku logo until **Go Live**, then switches to live content automatically.

### Configuration
On the Screen Setup page click **Embed Code**. Three options sit above the generated snippet; the code updates automatically as selections change.

| Option | Choices | Notes |
| ------ | ------- | ----- |
| **Select View Type** | Full Screen / Leaderboard | Full Screen embeds the entire contest experience including the left panel (CTA, QR code, post preview) and the right panel (leaderboard). Leaderboard embeds only the rankings panel |
| **Popup Speed** | Slow / Medium / Fast | Animation speed of the embedded widget on load |
| **Select Theme Type** | Light / Dark | Match the host website's design |

Click inside the code field to select all, then copy and paste into the website's HTML. The snippet is fixed at the point of copy; to change options, return to **Embed Code**, reconfigure, copy the new snippet, and replace the old one.

### Use cases
- **Event landing page:** leaderboard on the event microsite for visitors not at the venue.
- **Sponsor microsites:** Leaderboard view on a sponsor's event page.
- **Digital signage beyond the primary screen:** lobby, hallways, breakout rooms, via a webpage embedding the leaderboard.
- **Post-event showcase:** the Leaderboard embed shows the final rankings as a permanent record.

### FAQ
- **Automatic state updates:** yes. Go Live switches the embed from the Wozku logo to live content; Pause or Stop returns it to the logo or end state.
- **Multiple pages or sites:** yes. All instances display the same live contest data.
- **Full Screen vs Leaderboard:** Full Screen includes both panels; Leaderboard is rankings only, suited to sidebars, sponsor placements, and narrower display areas.
- **Changing options after pasting:** no. Regenerate and replace the snippet.
- **Platform support:** standard HTML and JavaScript, works on any platform allowing custom HTML embeds including most CMS platforms, landing page builders, and digital signage systems.

---

## Campaign Dashboard and Analytics
Source: https://wozku.com/kb/02-creating-a-contest/dashboard-analytics/

URL: `/admin/campaigns/{ID}`. Requires at least one post and some participant activity to populate metrics.

### Action buttons (five across the top)

| Button | Purpose |
| ------ | ------- |
| **Add Post** | Go to `/admin/campaigns/{ID}/createpost` to add another post at any time |
| **Edit** | Return to Step 1 and edit campaign settings |
| **Screen Setup** | Open Screen Setup (contests only) |
| **Share** | Open the Share Dashboard modal, set a PIN for public, read-only access for clients or stakeholders |
| **Calculate ROI** | Open the ROI Calculator for this campaign |

### Stats header (six metrics, totals across every channel)

| Metric | Notes |
| ------ | ----- |
| **Potential Reach** | Sum of first-degree audience size across every participant and every channel. A participant who shared on both LinkedIn and Twitter contributes LinkedIn connections plus Twitter followers |
| **Total Share** | Clickable, opens the Shares Report with a date-range chart |
| **Total Click** | Clickable, opens the Clicks Report with a date-range chart |
| **Total Comments** | Comments on all shared posts across all channels |
| **Total Likes** | Likes on all shared posts across all channels |
| **Total Post** | Number of posts in this campaign |

### Shares and Clicks reports
Click **Total Share** or **Total Click** to open a report modal.
- Date range picker, defaults to the last 30 days.
- Click **View** to show a chart for the selected range.

### All Posts table
Columns: Post Title | Shares | Likes | Comments | Potential Reach | Clicks | Actions

| Action | Notes |
| ------ | ----- |
| **Preview** | Opens a modal showing the post as participants see it |
| **Reports** | Go to the Post Shares page, individual share events for this post |
| **Edit** | Edit the post (image, copy, additional settings) |
| **Links & QR Codes** | Opens the sharing modal: Public URL, Universal Share URL, Channel Ninja URLs, and QR code downloads |
| **Delete** | Delete this post |

### Community table
Columns: Profile photo | Name | **Wozku Score** | Potential Reach | Shares | Likes | Clicks | Comments | Actions
- **Channel filter** above the table segments participant activity by channel (LinkedIn-only, Twitter-only, etc.).
- **Download** button exports the community data as CSV.
- **Actions > Hide** removes the participant from the visible leaderboard for this campaign without deleting their data. Used to scrub test shares.

### ROI Calculator
Click **Calculate ROI**. Tabs: Calculator | Assumptions | FAQ & Guide.

Input fields (auto-populated from campaign data, all editable):
- Total Posts (shares)
- Potential Reach
- Likes
- Comments
- Link Clicks
- Leads Gen (total leads captured via forms)
- CPL ($), default benchmark $75

Output metrics:

| Metric | Description |
| ------ | ----------- |
| **Total EMV** | Total Earned Media Value, combined Direct + Indirect value |
| **ROI Multiplier** | "For every $1 spent, you generated $X in value" |
| **Ad Spend Savings** | Equivalent paid media cost saved by running organic event amplification |
| **Conversion Rate** | Leads / Clicks |
| **Engagement Rate** | Total Engagement / Reach |
| **Effective CPL** | Your CPL vs the market benchmark |
| **Direct Value** | Value generated via Clicks and Leads |
| **Indirect Value** | Value generated via Reach and Engagement |

The **Value Attribution Chart** shows the percentage breakdown of Total EMV by type: Leads Value, Clicks Value, Engagement, Reach Value.

**Download Full Report** generates a branded PDF ROI report with an Executive Summary and Detailed Analysis. A **Campaign Name** field appears before downloading to name the report.

### FAQ
- **Potential Reach definition:** sum of first-degree audience size across every participant on every channel; multi-channel sharers contribute each channel's audience.
- **Editing ROI inputs:** yes, every Calculator tab field is editable and overrides the auto-populated value.
- **Download Full Report output:** branded PDF with an Executive Summary and Detailed Analysis; name it via the **Campaign Name** field.
- **Hiding a test participant:** Community table > **Actions** > **Hide**.
- **Direct Value vs Indirect Value:** Direct is calculated from Clicks and Leads (clear conversion path); Indirect from Reach and Engagement (brand awareness and social proof).
- **Sharing the dashboard without admin access:** click **Share** to open the Share Dashboard modal and set a PIN for read-only public access.
- **Channel filter in the Community table:** segments participant rows by the channel they shared on; the primary tool for channel-level attribution after a multi-channel event.
- **Net new vs repeat registrations:** Wozku does not deduplicate against a CRM. Export the Community table CSV via **Download** and run a contact lookup in Salesforce, HubSpot, or another CRM using the email column as the join key; matching rows are repeat, non-matching are net new.
