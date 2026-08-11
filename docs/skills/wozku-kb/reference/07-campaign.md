# 07 Creating a Campaign

Reference for what a Campaign is, how it differs from a Contest, and the three-step Campaign wizard.
Source: https://wozku.com/kb/07-campaign/

## What is a Campaign?
Source: https://wozku.com/kb/07-campaign/what-is-campaign/

A Campaign is Wozku's always-on sharing mode. No live screen, no leaderboard projected on a wall, no Go Live button at runtime. A Campaign gives participants a URL they can visit from an email, a Slack message, or a calendar invite, and every share from that URL tracks back to the same programme record, the same Wozku Score, the same Potential Reach total, and the same ROI report. All five channels are available. All three URL types are generated per post. The only thing missing is the live screen layer.

### What a Campaign Includes
- Multi-channel sharing: LinkedIn, Twitter / X, Slack (Beta), Facebook (Private Beta), Instagram (Private Beta), or any combination the admin enables per post.
- All three URL types per post: Public URL, Universal Share URL, and Channel Ninja URL variants for every enabled channel.
- Downloadable QR codes (SVG and PNG) for each post.
- Engagement tracking: Shares, Likes, Comments, Clicks, Potential Reach, across all channels.
- A participant Community table with Wozku Score per participant, channel filter, and CSV export.
- An ROI Calculator.
- A PIN-protected public dashboard for sharing results with stakeholders.
- Multi-post interval control (how often participants can share).
- Hold & Fire (scheduled burst launch).
- Post Variations (manual and AI-generated).
- Booster Points (extra points for specific posts).
- UGC (User-Generated Content mode: participants write their own version of the post).
- Header Image (1920x400px), a campaign banner on the public landing page, exclusive to Campaigns.

### What a Campaign Does Not Include
- A live public screen or leaderboard display.
- Go Live / Pause / Stop controls.
- Theme Settings (no display themes, background, or gift image).
- Embed Code (no embeddable leaderboard widget).
- Winner Finalization workflow.
- Additional Settings tabs (Coupons, Forms, Quiz, Booths).

### Campaign vs Contest, Quick Reference

| Feature | Campaign | Contest |
| --- | --- | --- |
| Live public screen | No | Yes |
| Leaderboard | No | Yes |
| Go Live / Pause / Stop | No | Yes |
| Wozku Score | Yes | Yes |
| Potential Reach | Yes | Yes |
| Community table with channel filter | Yes | Yes |
| All five channels | Yes | Yes |
| All three URL types per post | Yes | Yes |
| Header Image (1920x400px) | Yes, exclusive | No |
| Coupons, Forms, Quiz, Booths | No | Yes |
| Wizard steps | 3 | 4 |

Additional differences stated elsewhere in the article:
- Theme Settings: Contest only.
- Embed Code: Contest only.
- Winner Finalization workflow: Contest only.
- Public URL format: Campaign `https://wozku.com/campaigns/{hash}` vs Contest screen URL `https://wozku.com/campaigns/screen/{hash}`.
- A Campaign cannot be converted to a Contest after creation. Type is set at creation.

### Wozku Score and Potential Reach in a Campaign
- Both work identically in a Campaign and a Contest: same formula, same channel-specific engagement signals, same uniform audience-size cap, same Booster Post multiplier behaviour.
- The absence of a live leaderboard screen does not change how participants are scored.
- The Community table on the Campaign Detail page shows each participant's Wozku Score (summed across all their shares in that campaign, across every channel), Potential Reach, Shares, Likes, Clicks, and Comments.

### When to Use a Campaign
- Always-on employee advocacy programmes; multi-post interval controls pacing (24 hours means one post per day per participant).
- Pre-event warm-up to drive registration and awareness.
- Post-event long-tail amplification (recap, report, case study, session recording).
- Evergreen sharing programmes.
- Asynchronous programmes where a live leaderboard would not be seen (no projector or room).
- When the landing page needs a banner image: the Header Image (1920x400px) is Campaign-exclusive.

### Operational Notes
- A Campaign generates a public landing page URL (`https://wozku.com/campaigns/{hash}`) rather than a screen URL. Channel Ninja URLs work the same as in a Contest: direct OAuth to the channel, under 60 seconds from click to published post.
- The multi-post interval is set at the campaign level and applies to all posts. 24 hours for a drip-style programme, 0 for no interval.
- The PIN-protected public dashboard shares results with stakeholders without giving them admin access.
- Campaign posts and Contest posts are identical in mechanics: Post Variations, the AI content generator, Booster Posts, per-post channel selection, and every Channel Ninja URL variant work identically in both modes.

### FAQ
- **Can I add a leaderboard to a Campaign?** No. Leaderboard, live screen, and Go Live controls are Contest-only.
- **Does a Campaign support all five channels?** Yes. LinkedIn, Twitter / X, Slack (Beta), Facebook (Private Beta), Instagram (Private Beta). Channel selection is per post in Step 2, same as the Contest wizard.
- **Are the Channel Ninja URLs available in a Campaign?** Yes. Every Campaign post generates a Public URL, a Universal Share URL, and a Channel Ninja URL for each enabled channel. The Channel Ninja URL routes directly to that channel's OAuth with no Wozku landing page in the middle.
- **What is the Header Image and why is it Campaign-exclusive?** A banner shown on the campaign's public landing page, 1920x400px. It does not appear in the Contest wizard because Contest programmes use a full live screen instead. A brief requiring a banner on the public landing page must use a Campaign.
- **How does the multi-post interval work?** It controls how often a single participant can share posts from the campaign. 24 hours means one post per day per participant. 0 means no interval.
- **Does a Campaign support UGC?** Yes. The UGC toggle is in Campaign Additional Settings. When enabled, participants write their own version of the post instead of sharing the preset copy.
- **Can a Campaign be converted to a Contest after creation?** No. Type is set at creation. A new Contest is the only path to a live leaderboard and screen. Every Campaign feature is also available inside a Contest, and the screen is optional at runtime.

## Creating a Campaign
Source: https://wozku.com/kb/07-campaign/create-campaign/

The Campaign wizard is three steps: Campaign Setup, Add Posts, Completed. No Screen Setup, no Go Live button, no live leaderboard. The one extra field versus the Contest flow is the Header Image.

### Prerequisites
- A Wozku admin account at `https://wozku.com/admin`.
- Campaign logo ready. The logo is a hard gate: the wizard does not advance without it. Upload it to the Media Library before starting.
- Post image(s) ready (1200x628px). At least one post with an image is required to complete Step 2.
- Decision made to use a Campaign rather than a Contest.

### Step 1: Campaign Setup
- Entry: click **+ Campaign** in the top navigation, or go to `/admin/campaigns/create`.
- Every field matches the Contest wizard's Step 1 with one addition: the Header Image field, exclusive to Campaigns.
- Wizard sidebar shows three steps: Setup, Posts, Dashboard.

#### Core Fields

| Field | Required | Notes |
| --- | --- | --- |
| Logo | Yes | Hard gate, the form does not advance without a logo. Opens Media Library. |
| Campaign Name | Yes | Internal and public-facing label for the campaign. |
| Campaign Description | No | Rich text (Quill editor). Shown on the campaign public landing page. |
| Redirection URL | No | Where participants are sent after sharing. Campaign-level default, overridable per post. |
| Thank You Message | No | Message shown to participants after sharing. Campaign-level default, overridable per post. |
| Campaign End Date | No | Sets expiry date. Campaign remains accessible but shows an ended state after this date. |
| LinkedIn Company ID | No | Associates the campaign with a LinkedIn company page for attribution. |
| Tags | No | Internal classification tags for filtering in the All Campaigns list. |

#### Campaign-Exclusive Field

| Field | Required | Size | Notes |
| --- | --- | --- | --- |
| Header Image | No | 1920x400px recommended | Banner image shown on the campaign public landing page. Not available in the Contest wizard. |

#### Additional Settings (collapsed panel)

| Setting | Description |
| --- | --- |
| UGC (User-Generated Content) | Toggle ON to allow participants to write their own version of the shared post instead of using the preset copy. |
| Enable SPA | Enables Single Page Application mode for the campaign. |
| @Mentions | Add LinkedIn @mentions that appear in the shared post copy by default. |
| Multi-post interval | Controls how often a participant can share posts from this campaign. Options: 0 (no interval), 1, 2, 4, 6, 12, 24, 36, 48 hours. 24 hours means one post per day per participant. |
| Hold & Fire | Set a UTC datetime to schedule a burst launch. All posts are staged and held, then released simultaneously at the specified time. |

Click **Continue** to advance to Step 2.

### Step 2: Add Posts
Identical to the Contest wizard's Step 2.

- **Channel selection is per post.** For each post, select which channels participants can share it to: LinkedIn, Twitter / X, Slack (Beta), Facebook (Private Beta), Instagram (Private Beta), or any combination. Same per-post channel selector as the Contest wizard.

Key fields:

| Field | Notes |
| --- | --- |
| Post Title | Internal label, not shown to participants on the channel |
| Post Image | 1200x628px, required, or Embed Code. One of the two is required to save the post. |
| Frame | 1280x720px, optional. Branded overlay on top of the post image. |
| Post Description | The post copy participants will share, written in first person |
| Post Variations | Generate multiple versions (manual or AI-assisted) |
| @ Add Mentions | Tag a LinkedIn company page in the post |
| Post-level Additional Settings | Override Redirection URL, Thank You Message, set CTA, enable Booster Post scoring, enable UGC for this specific post |

Once at least one post is saved, click **Continue**.

### Step 3: Completed
- The wizard ends at the Completed page. There is no Screen Setup step for Campaigns.
- From the Completed page you can view the campaign's public landing page URL, and open the Campaign Detail page to manage posts and view participants.
- Campaign public URL format: `https://wozku.com/campaigns/{hash}`.
- Contest screen URL format for contrast: `https://wozku.com/campaigns/screen/{hash}`. The `screen/` segment indicates the Contest type with a live leaderboard screen.

### Campaign Detail Page
URL: `/admin/campaigns/{ID}`. The management hub after creation.

**Action buttons:**
- Add Post: add more posts to the campaign at any time.
- Edit: return to Step 1 and edit campaign settings.
- Share: opens the Share Dashboard modal to set a PIN for public dashboard access.
- Calculate ROI: opens the ROI Calculator.

**Stats header:** Potential Reach | Total Share | Total Click | Total Comments | Total Likes | Total Post. Clicking Total Share or Total Click opens a date-range report.

**All Posts table:** all posts with per-post stats (Shares, Likes, Comments, Potential Reach, Clicks) and per-post actions: Preview, Reports, Edit, Links & QR Codes, Delete.

**Links & QR Codes per post:** modal with three URL types (Public URL, Universal Share URL, and one tab per enabled Channel Ninja URL). Each tab has a copy field and a Download QR Code dropdown (SVG or PNG).

**Community table:** all participants with Wozku Score, Potential Reach, Shares, Likes, Clicks, Comments. Channel filter: All Channels | LinkedIn | Twitter | Slack | Facebook | Instagram. Exportable to CSV. Per-participant action to hide from leaderboard.

**Sharing the Dashboard:** the Share button opens a modal to set a PIN (minimum 4 characters) for public access to the campaign dashboard. Leave the PIN empty to disable public access.

### What Campaigns Do Not Have
- A live public screen or leaderboard display.
- Go Live / Pause / Stop controls.
- Theme Settings (no background, gift image, or display themes).
- Embed Code (no embeddable leaderboard widget).
- Winner Finalization workflow.
- Additional Settings tabs (Coupons, Forms, Quiz, Booths).

### Operational Notes
- Logo is a hard gate; prepare it in the Media Library before starting.
- Channel selection is per post in Step 2, same as a Contest. All three URL types are generated per post for every enabled channel.
- The Header Image is Campaign-exclusive.
- The Universal Share URL suits multi-channel email campaigns: one link serves participants on all five channels; they pick their channel on the share page.
- A 24-hour multi-post interval across a 5-post campaign means participants share roughly one post per day over 5 days.
- Hold & Fire suits coordinated launches. All participants must have authorised their chosen channels before the fire time.
- Campaigns work as the pre-event and post-event wrapper around a Contest. All three generate Wozku Score data and feed the same Community table structure.

### FAQ
- **Why does the wizard not advance past Step 1?** The Logo field is a hard gate. Upload and select a logo in the Media Library and the Continue button becomes active.
- **What is the campaign public URL format and how is it different from a Contest?** Campaign: `https://wozku.com/campaigns/{hash}`. Contest screen: `https://wozku.com/campaigns/screen/{hash}`.
- **Can I add more posts after completing the wizard?** Yes, via Add Post on the Campaign Detail page.
- **Are all three URL types available for Campaign posts?** Yes, identical to Contest posts. Access them from the Links & QR Codes action per post.
- **Which channels can I enable on a Campaign post?** All five: LinkedIn (GA), Twitter / X (GA), Slack (Beta), Facebook (Private Beta), Instagram (Private Beta). Selection is per post in Step 2.
- **What does Hold & Fire do and when should I use it?** It stages all posts and releases them simultaneously at a UTC datetime you specify, for example at the start of a keynote or product launch. All participants must have authorised their channels before the fire time.
- **How do I share campaign results with stakeholders without admin access?** Click Share on the Campaign Detail page and set a PIN (minimum 4 characters). This generates a public dashboard URL for read-only access.
- **Can I convert a Campaign to a Contest?** No. Type is set at creation. A new Contest is the only path to a live leaderboard screen.
