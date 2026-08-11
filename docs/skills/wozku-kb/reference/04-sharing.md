# 04 Sharing Your Contest

Every URL class Wozku generates: participant-facing share URLs, QR code files, admin-side Screen Preview URLs, and the PIN-protected Public Dashboard.
Source: https://wozku.com/kb/04-sharing/

## URL pattern quick reference

| URL class | Exact pattern | Audience |
| --- | --- | --- |
| Public URL (Campaign post) | `https://wozku.com/post/{hash}` | Participant |
| Public URL (Contest landing) | `https://wozku.com/campaigns/{hash}` | Participant |
| Universal Share URL | `https://wozku.com/share/post/{hash}` | Participant |
| Channel Ninja URL (generic) | `https://wozku.com/share/{channel}/{hash}` | Participant |
| LinkedIn Ninja URL | `wozku.com/share/linkedin/{hash}` | Participant |
| Twitter Ninja URL | `wozku.com/share/twitter/{hash}` | Participant |
| Slack Ninja URL | `wozku.com/share/slack/{hash}` | Participant |
| Facebook Ninja URL | `wozku.com/share/facebook/{hash}` | Participant |
| Instagram Ninja URL | `wozku.com/share/instagram/{hash}` | Participant |
| Post Screen Preview URL | `wozku.com/post/screen/{post-hash}` | Admin / AV, display-only |
| Contest Screen Preview URL | `wozku.com/campaigns/screen/{contest-hash}` | Admin / AV, display-only |
| Public Dashboard URL | `https://wozku.com/dashboard/campaign/{ID}` | Stakeholder, PIN-gated |
| Campaign Detail page (admin) | `/admin/campaigns/{ID}` | Admin |
| Screen Setup page (admin) | `/admin/campaigns/{ID}/screen-setup` | Admin |

All three participant-facing URL types use the same post hash ID. Only the path prefix differs.

## Sharing URLs - Public URL, Universal Share URL, and Channel Ninja URLs
Source: https://wozku.com/kb/04-sharing/sharing-urls/

Last updated April 25, 2026.

### Prerequisites

- At least one post exists in the Contest with one or more channels selected.
- Access to the **Links & QR Codes** button (the link icon) next to any post on the Screen Setup page or the Campaign Detail page.
- Known placement context per URL: email, booth QR, printed collateral, channel-pinned event signage.

### Public URL

**Format:** `https://wozku.com/post/{hash}` (Campaign) or `https://wozku.com/campaigns/{hash}` (Contest landing)

What the participant sees: a full Wozku-hosted landing page with two panels.

- Left panel: organisation logo, contest description, **Share** button, post preview card showing the post copy and image with a "Just Shared" activity feed.
- Right panel: "Who shared this post", a grid of profile photos of all participants who have already shared.

Flow:

1. Participant scans QR or clicks the link. Wozku landing page loads.
2. Participant reads the post, sees social proof of who has already shared.
3. Clicks **Share**. If the post is enabled for multiple channels, a channel picker surfaces. If it is channel-pinned, OAuth begins directly.
4. After authorisation, the post is published on the selected channel.

Best for: email campaigns, website links, anywhere social proof should be visible before the participant commits to sharing. Channel-agnostic.

### Universal Share URL

**Format:** `https://wozku.com/share/post/{hash}`

What the participant sees: a lightweight Wozku-hosted share page with a channel picker. No social proof grid, no full landing page, just "Share this post on:" followed by channel options for every channel enabled on the post.

Flow:

1. Participant scans QR or clicks the link. The lightweight share page loads.
2. Participant picks a channel: LinkedIn, Twitter / X, Slack, Facebook, or Instagram.
3. Wozku routes the participant to that channel's OAuth through the same mechanic as the corresponding **Channel Ninja URL**.
4. After authorisation, the post is published on the selected channel.

Best for: multi-channel Contests where the participant chooses. Printed collateral where one QR code must serve every audience at a conference, summit, or launch event. Channel-agnostic. The Universal Share URL replaces what used to be the admin's "all social share" link.

### Channel Ninja URL

**Format:** `https://wozku.com/share/{channel}/{hash}`

What the participant sees: no Wozku landing page, no channel picker. The URL opens the chosen channel's OAuth consent screen immediately.

Flow:

1. Participant scans QR or clicks the link. Instantly lands on the channel's sign-in or consent screen.
2. Signs in (or is already signed in on their device).
3. The post publishes to the participant's authenticated account.
4. Done. No compose dialog, no confirmation screen. Under 60 seconds end-to-end.

Five variants:

| Variant | URL Format | Status |
| --- | --- | --- |
| **LinkedIn Ninja URL** | `wozku.com/share/linkedin/{hash}` | GA |
| **Twitter Ninja URL** | `wozku.com/share/twitter/{hash}` | GA |
| **Slack Ninja URL** | `wozku.com/share/slack/{hash}` | Beta |
| **Facebook Ninja URL** | `wozku.com/share/facebook/{hash}` | Beta |
| **Instagram Ninja URL** | `wozku.com/share/instagram/{hash}` | Beta |

Best for: channel-pinned placements. A LinkedIn Live event gets a **LinkedIn Ninja URL** QR on the slide. A Twitter Space gets a **Twitter Ninja URL** in the event notes. A Slack-workspace internal contest gets a **Slack Ninja URL**.

### Side-by-side comparison

| | **Public URL** | **Universal Share URL** | **Channel Ninja URL** |
| --- | --- | --- | --- |
| Format | `/post/{hash}` or `/campaigns/{hash}` | `/share/post/{hash}` | `/share/{channel}/{hash}` |
| Landing page | Full Wozku page | Lightweight channel picker | None, straight to channel OAuth |
| Social proof grid | Yes | No | No |
| Post preview | Yes | No | No |
| Channel picker | On Share click (if multi-channel) | Yes, first screen | No, channel is encoded in URL |
| Steps to share | Landing page > Share > channel pick > consent | Channel pick > consent | Consent only |
| Published via | Participant's authenticated account | Participant's authenticated account | Participant's authenticated account |
| Best placement | Email, web, context-rich | Multi-channel printed QR, conference collateral | Channel-pinned QR, live event slides |
| Conversion speed | Slowest | Fast | Fastest |

### Accessing the URLs

- **From Screen Setup.** Each post in the list has a link icon button. Click to open the **Links & QR Codes** modal. Tabs per URL type; each tab has a copy field and a **Download QR Code** dropdown (SVG or PNG).
- **From the Campaign Detail Page.** On `/admin/campaigns/{ID}`, the All Posts table has a **Links & QR Codes** action per post.
- **From the Dashboard.** The Popular Posts section on the main dashboard has a **Links & QR Codes** action per post.

### Tips

- Use a **Channel Ninja URL** for channel-pinned QR codes; fewer taps between scan and published post equals higher conversion.
- Use the **Universal Share URL** for multi-channel QR codes; printing five **Channel Ninja URL** QRs on one placard is clutter.
- Use the **Public URL** for email or context-rich distribution where social proof reduces hesitation.
- QR codes are available as SVG and PNG. Always use SVG for physical print.
- The same QR code works before and after **Go Live**.
- The **Channel Ninja URL** is the cleanest attribution signal: no Wozku landing page in the middle, no drop-off between intent and published post.

### FAQ

| Question | Answer |
| --- | --- |
| Difference between Public URL and Universal Share URL? | The Public URL loads a full Wozku landing page with a social-proof grid. The Universal Share URL skips the landing page but shows a channel picker. Public URL when social proof matters (email, web); Universal Share URL when speed matters and the audience is multi-channel. |
| Why does the consent screen list more than one permission? | Wozku requests only the minimum permissions needed to publish the post and read the engagement signals required for the leaderboard. Each channel's consent screen lists permissions in its own native language. |
| Where do I find the Channel Ninja URLs for Slack, Facebook, and Instagram? | In the **Links & QR Codes** modal for any post that has those channels enabled in Step 2. Each channel contributes its own tab with a copy field and a QR download. |
| Can I use the same QR code before the event starts? | Yes. QR codes are fixed to their URL at generation and do not expire. Before **Go Live**, scanning a Ninja URL still takes participants to the channel's consent screen; the post publishes but the leaderboard is not visible until **Go Live**. |
| Which URL type produces cleaner attribution data? | The **Channel Ninja URL**, because there is no intermediate landing page. The Universal Share URL introduces a channel-pick step with near-zero drop-off. The Public URL introduces a landing-page drop-off point. |
| Do all three URL types use the same post hash? | Yes. Only the path prefix differs: `/post/{hash}` (or `/campaigns/{hash}`), `/share/post/{hash}`, `/share/{channel}/{hash}`. |
| What happens on a Channel Ninja URL for a channel not enabled on the post? | The URL returns a "channel not enabled for this post" error. Channel enablement is a Step 2 decision per post. |

## Links & QR Codes Modal - Full Guide
Source: https://wozku.com/kb/04-sharing/links-modal/

Last updated April 25, 2026.

### Accessing the modal

| Location | How |
| --- | --- |
| Screen Setup page | Click the link icon button next to any post in the post list |
| Campaign Detail page (`/admin/campaigns/{ID}`) | Click **Links & QR Codes** in the Actions column of the All Posts table |
| Dashboard (`/admin`) | Click **Links & QR Codes** in the Popular Posts section |

### Modal structure: tabs

| Tab | Presence | Audience |
| --- | --- | --- |
| **Public URL** | Always present | Participant-facing |
| **Universal Share URL** | Always present | Participant-facing |
| **LinkedIn Ninja URL** | When LinkedIn is enabled on the post | Participant-facing |
| **Twitter Ninja URL** | When Twitter / X is enabled on the post | Participant-facing |
| **Slack Ninja URL** *(Beta)* | When Slack is enabled on the post | Participant-facing |
| **Facebook Ninja URL** *(Private Beta)* | When Facebook is enabled on the post | Participant-facing |
| **Instagram Ninja URL** *(Private Beta)* | When Instagram is enabled on the post | Participant-facing |
| **Screen Preview** | Always present | Admin-side, display-only |

Tab count: a post enabled on LinkedIn only surfaces four tabs (Public URL, Universal Share URL, LinkedIn Ninja URL, Screen Preview). A post enabled on all five channels surfaces eight tabs. Participant-facing tab count follows the Step 2 channel selection; the Screen Preview tab is always present regardless of channel mix.

### Tab contents

The three participant-facing tab types (Public, Universal Share, Channel Ninja) carry the same three elements:

| Element | Description |
| --- | --- |
| **URL field** | Displays the full URL. Click to copy to clipboard. |
| **QR code preview** | Visual preview of the QR code for the URL on that tab. |
| **Download QR Code** | Dropdown with two format options: **SVG** (vector, for print) and **PNG** (raster, for digital). |

The **Screen Preview** tab is admin-side and carries a **URL field** with a **Copy** button and an **Open** button to preview the screen in a browser. No QR code download; Screen Preview URLs are for casting to a display, not for scanning.

### Tab-by-tab

- **Public URL tab.** Displays `wozku.com/post/{hash}`. Opens the full Wozku-hosted landing page with social proof grid, post preview, and a **Share** button that surfaces a channel picker if multi-channel or begins OAuth directly if channel-pinned.
- **Universal Share URL tab.** Displays `wozku.com/share/post/{hash}`. Opens the lightweight Wozku share page with a channel picker.
- **Channel Ninja URL tabs.** One per enabled channel, channel encoded in the path.
- **Screen Preview tab.** Displays `wozku.com/post/screen/{hash}`. Admin-side, display-only. Casting this URL onto a screen projects the post with its QR code and the full contest leaderboard alongside.

Channel Ninja URL formats and status as listed in this modal:

| Channel | URL format | Status |
| --- | --- | --- |
| LinkedIn | `wozku.com/share/linkedin/{hash}` | GA |
| Twitter | `wozku.com/share/twitter/{hash}` | GA |
| Slack | `wozku.com/share/slack/{hash}` | Beta |
| Facebook | `wozku.com/share/facebook/{hash}` | Private Beta |
| Instagram | `wozku.com/share/instagram/{hash}` | Private Beta |

### Which URL to use where

| Placement | Recommended tab | Reason |
| --- | --- | --- |
| Channel-pinned event screen QR | The **Channel Ninja URL** for that channel | Fastest path: scan, authorise, post goes live. Direct OAuth, under 60 seconds end-to-end. |
| Multi-channel booth QR (one QR serves LinkedIn + Twitter + Instagram) | **Universal Share URL** | One QR, channel picker at scan time. Five Ninja QRs on one placard is clutter. |
| Printed booth placard for a LinkedIn-only event | **LinkedIn Ninja URL** | Speed-at-the-booth logic, channel-pinned placement. |
| Email campaign | **Public URL** | Social proof of "who shared" visible before committing. |
| Website embed | **Public URL** | Context and social proof help conversion in digital placements. |
| Slack-workspace internal contest | **Slack Ninja URL** *(Beta)* | Channel-pinned, direct OAuth into the pre-approved workspace channel. |
| Creator-led Instagram launch placement | **Instagram Ninja URL** *(Private Beta)* | Direct OAuth into the participant's Instagram Business/Creator account. |
| Slide deck link | Depends on session | Phone-first in a session: Channel Ninja URL for that session's channel. Laptop-first later: Public URL. |
| Projecting the post onto a track screen, breakout room, or location-specific kiosk | **Screen Preview URL** | Admin-side cast URL. Pins the post to the screen with its QR code and the full contest leaderboard. |

### QR code format guide

| Format | Type | Use |
| --- | --- | --- |
| **SVG** | Vector, no pixel limit | All physical print: banners, placards, lanyards, roller displays |
| **PNG** | Raster, fixed pixel size | Digital placements: slide decks, email, social posts, digital signage. Do not scale significantly beyond native size. |

### Tips

- Each post has its own unique modal. A contest with 3 posts has 3 separate **Links & QR Codes** modals with distinct URLs and QR codes.
- Tab count reflects Step 2 channel selection plus the always-present Public URL, Universal Share URL, and Screen Preview tabs. A missing Channel Ninja tab means that channel is not enabled on the post.
- The **Universal Share URL** replaces the old "all social share" link.
- Label downloaded QR codes immediately. A 3-post contest enabled on LinkedIn and Twitter produces 3 posts x (Public + Universal + LinkedIn Ninja + Twitter Ninja) in two formats = 24 files.
- Test QR codes on a physical device before printing.
- **Channel Ninja URL** tabs are the booth tabs.

### FAQ

| Question | Answer |
| --- | --- |
| Why does the modal show a different number of tabs for different posts? | It always shows **Public URL**, **Universal Share URL**, and **Screen Preview**, plus one **Channel Ninja URL** tab per channel enabled in Step 2. LinkedIn-only post = four tabs. All five channels = eight tabs. |
| What is the Screen Preview tab for? | It exposes the **Screen Preview URL** for that post, an admin-side, display-only URL cast onto an event screen to project the post with the full contest leaderboard. Not a participant URL. |
| How is the Universal Share URL different from the Public URL? | Public URL loads a full Wozku-hosted landing page with a social proof grid and post preview. Universal Share URL skips the landing page but shows a channel picker. |
| Where are the Slack, Facebook, and Instagram Ninja tabs? | They appear only when the corresponding channel is enabled on the post in Step 2. They behave identically to LinkedIn and Twitter in the modal: tab, URL field, QR preview, download dropdown. |
| Can I copy the URL without downloading a QR code? | Yes. Every tab has a URL field; click the field to copy the full URL. |
| What format for a banner printed at 1.5 metres wide? | Always SVG for physical print at large scale. PNG is fixed-pixel and degrades when scaled beyond native resolution. |
| Do I need to re-download QR codes if the post content changes? | No. The QR code is tied to the post's URL hash, not its content. A new post record means a new hash and new QR codes. |
| What if I enable a new channel on a post after printing QR codes? | The Public URL QR and Universal Share URL QR remain valid; both adapt to the new channel set automatically. Download the new **Channel Ninja URL** QR if a channel-pinned placement is needed. |

## Generate and Download QR Codes
Source: https://wozku.com/kb/04-sharing/qr-codes/

Last updated April 25, 2026.

### Prerequisites

- At least one post created in Step 2 with one or more channels selected.
- Contest is in Screen Setup (Step 3) or the Campaign Detail page is accessible.
- Known whether the placement is physical print (SVG) or digital (PNG).
- Decision on whether each placement is channel-pinned (**Channel Ninja URL**), multi-channel (**Universal Share URL**), or context-rich (**Public URL**).

### Where to access QR codes

QR codes live inside the **Links & QR Codes** modal, reachable from Screen Setup (link icon per post), the Campaign Detail page (`/admin/campaigns/{ID}`, All Posts table action), and the Dashboard (`/admin`, Popular Posts section action).

### QR tab matrix

| Tab | URL format | QR downloadable | Status |
| --- | --- | --- | --- |
| **Public URL** | `wozku.com/post/{hash}` | SVG, PNG | Always present |
| **Universal Share URL** | `wozku.com/share/post/{hash}` | SVG, PNG | Always present |
| **LinkedIn Ninja URL** | `wozku.com/share/linkedin/{hash}` | SVG, PNG | When LinkedIn is enabled |
| **Twitter Ninja URL** | `wozku.com/share/twitter/{hash}` | SVG, PNG | When Twitter is enabled |
| **Slack Ninja URL** | `wozku.com/share/slack/{hash}` | SVG, PNG | When Slack is enabled *(Beta)* |
| **Facebook Ninja URL** | `wozku.com/share/facebook/{hash}` | SVG, PNG | When Facebook is enabled *(Private Beta)* |
| **Instagram Ninja URL** | `wozku.com/share/instagram/{hash}` | SVG, PNG | When Instagram is enabled *(Private Beta)* |

### Choosing the right QR code

- **Channel Ninja URL QR code.** Straight to the named channel's OAuth, no Wozku landing page. Fastest path from scan to published post, under 60 seconds end-to-end. Five variants. Best for channel-pinned placements: a LinkedIn-only session booth, a Twitter Space event notes page, a Slack workspace internal contest, a creator-led Instagram launch, a Facebook Group takeover.
- **Universal Share URL QR code.** Opens the lightweight Wozku share page with a channel picker covering every channel enabled on the post. Best for conference placards, printed collateral, and any physical surface where the audience splits across channels.
- **Public URL QR code.** Opens the Wozku landing page with post preview and the grid of who has already shared. The participant clicks **Share** and either picks a channel or begins OAuth directly. Best for email campaigns, website embeds, digital materials.

### Before and after Go Live

Every QR code works before and after **Go Live**. Before **Go Live** is clicked, scanning a **Channel Ninja URL** QR still takes participants through OAuth on the named channel; the share can be authorised and the post publishes, but the contest experience (leaderboard, score) is not visible on the live screen until **Go Live**. QR codes can be printed days ahead and are valid the moment **Go Live** is clicked at the venue.

### Participant journey end-to-end

1. **Scan the QR code with the phone camera.** No special app needed. Modern iPhone and Android cameras read the QR natively, surface the URL as a tappable banner, and open it in the default mobile browser.
2. **Land on the Public URL or jump straight to the channel's OAuth screen.** A **Channel Ninja URL** QR routes straight to the channel's OAuth consent screen with no Wozku page in the middle. A **Universal Share URL** QR shows a lightweight channel picker first. A **Public URL** QR loads the Wozku landing page with post preview and a social-proof grid, then the participant taps **Share**.
3. **One-tap consent on the channel's own consent screen.** This is the channel's own UI (LinkedIn, Twitter, Slack, Facebook, Instagram show their native consent screen, not a Wozku-skinned version). Wozku is listed as the requesting application; the participant taps **Allow** or the channel's equivalent. On returning visits consent is often remembered and the screen skips, dropping the journey to two steps.
4. **Share publishes and the participant lands on the Wozku Thank You page.** The post goes live on the participant's authenticated account in their own name. The Thank You page shows confirmation, their leaderboard standing, and any post-share state configured (a coupon code, a quiz prompt, a redirect to a registration form).

The participant does not need to install an app, create a Wozku account, or remember a password. There is no Wozku login anywhere in the journey; they sign in with the channel they were already signed into. There is no "Post on LinkedIn" button on the booth screen: the QR code is the button.

### Tips

- Always use SVG for print. PNG loses quality when scaled up and may not scan reliably.
- Test every QR code before printing; scan with a phone in a different browser from the one used to download.
- QR codes are post-specific. Three posts (Keynote, Product, Booth) each enabled on LinkedIn and Twitter produce 12 QR codes.
- Do not print five **Channel Ninja URL** QRs on one placard; use the **Universal Share URL** QR.
- Pin **Channel Ninja URL** QRs to session surfaces.
- QR codes on the public screen at `wozku.com/campaigns/screen/{hash}` are generated automatically and appear on the left panel of the live screen. No manual embed needed.
- Change the **Manage QR Code** setting in Contest Settings to make the on-screen QR open a Form or Quiz instead of the post share URL. This only affects the QR displayed on the public screen; downloaded QR codes stay fixed to the URL they were generated for.

### FAQ

| Question | Answer |
| --- | --- |
| Difference between SVG and PNG? | SVG is vector with no pixel limit, correct for all physical print. PNG is raster fixed at a pixel size, fine for digital at or near native resolution, degrades when scaled up. |
| Why does each post generate so many QR codes? | One per sharing URL it carries: **Public URL**, **Universal Share URL**, and one **Channel Ninja URL** per enabled channel. A post enabled on LinkedIn and Twitter produces four QR codes, each in SVG and PNG. |
| Universal Share URL QR versus Channel Ninja URL QR? | Universal Share URL QR when one physical surface serves every audience (main-stage placard, lanyard insert, printed programme). Channel Ninja URL QR when the surface is pinned to one channel. |
| Can I print QR codes before the event starts? | Yes. QR codes are fixed to their URL at generation and do not expire. |
| How many QR codes does a contest with 3 posts generate? | Three posts each on LinkedIn only: 9 QR codes (18 files across SVG and PNG). Three posts each on all five channels: 21 QR codes (42 files). |
| Does the on-screen QR update automatically if I change the post? | The on-screen QR at `wozku.com/campaigns/screen/{hash}` is generated live from the current **Manage QR Code** setting in Contest Settings. Downloaded QR files stay fixed to the URL at time of download. |
| What if I enable a new channel after downloading QR codes? | Previously downloaded Public URL and Universal Share URL QRs stay valid and adapt to the new channel set. Download a new **Channel Ninja URL** QR for a channel-pinned placement. |

## Screen Preview URL - Multi-Screen Contest Projection
Source: https://wozku.com/kb/04-sharing/screen-preview-url/

Last updated April 25, 2026. The grammar: one Contest, one Leaderboard, many Screens.

### Prerequisites

- A Contest or Campaign exists with at least one post added in Step 2.
- Understanding of the three participant-facing URL types. Screen Preview URLs are a fourth, admin-side, display-only class.
- For post-level Screen Preview URLs, the post must be enabled and live in the Contest. A paused post shows a "Contest Ended" screen on its Screen Preview URL.

### The two Screen Preview URL classes

| URL class | Pattern | What it shows | When to use it |
| --- | --- | --- | --- |
| **Contest Screen Preview URL** | `wozku.com/campaigns/screen/{contest-hash}` | The full contest screen: leaderboard, rotating post feed, QR code, podium, "Just Shared" activity | Single-screen events, or the main stage at a multi-screen event |
| **Post Screen Preview URL** | `wozku.com/post/screen/{post-hash}` | Same screen layout pinned to one post: that post's content, that post's QR code, with the full contest leaderboard alongside | Track-specific screens at a multi-track event, location-specific screens at a multi-location activation, sponsor-booth screens pinned to sponsor-specific posts |

Both URLs project the same shared leaderboard. The difference is what occupies the "featured post" slot: a rotating feed (contest-level) or one specific post (post-level). Both are generated automatically; both are admin-side and display-only.

### Where to find them

- **Contest Screen Preview URL** is generated automatically when you reach **Step 3: Screen Setup** in the contest wizard. It appears on the Screen Setup page and remains accessible from the Campaign Detail page (`/admin/campaigns/{ID}`) after the contest is live.
- **Post Screen Preview URL** exists for every post. Open the **Links & QR Codes** modal for any post (Screen Setup page, Campaign Detail page, or the admin Dashboard's Popular Posts section) and click the **Screen Preview** tab. The URL is displayed with a **Copy** button and an **Open** button.

### The "one Contest, many Screens" pattern

Concrete setup for a 500-attendee conference with a keynote, 5 breakouts, and an expo hall:

1. Create **one contest** with 7 posts in Step 2 (Keynote Post, Breakout A Post, Breakout B Post, and so on).
2. Open each post's **Links & QR Codes** modal, copy its **Screen Preview URL**, and send it to the AV contact responsible for that room.
3. Each room casts its own Screen Preview URL. Room-specific post front and centre, contest-wide leaderboard alongside.
4. One **Go Live** / **Pause** / **Stop** control runs the whole event.
5. Reporting: one Potential Reach number, one **Wozku Score** total, one ROI report.

The same pattern applies to multi-location events (city tour, global roadshow, retail chain activation): Tokyo gets its screen pinned to the Tokyo post, NYC to the NYC post, London to the London post, one leaderboard unites the tour.

### One contest vs many contests

| Need | Solution |
| --- | --- |
| **Unified leaderboard** across every track, location, or station | **One contest**, many Screen Preview URLs (one per surface) |
| **Independent leaderboards** per track, location, or station | **Multiple contests**, each with its own Contest Screen Preview URL |

### What the screen shows

Both classes share the same visual template; the differences are content only.

Contest Screen Preview URL layout:

- Left panel: contest CTA, description, QR code (routing set in **Manage QR Code**), rotating post feed with "Just Shared" activity.
- Right panel: leaderboard, top-3 podium, optional gift image.
- Real-time updates on the contest's **Page Refresh Interval**.

Post Screen Preview URL layout:

- Same template, same real-time leaderboard.
- Left panel pinned to one post: that post's image, description, and its QR code.
- The QR code on the post-level screen points to the post's share URL (Public, Universal Share, or Channel Ninja, whichever is configured for the post).
- The right-panel leaderboard continues to show the full contest ranking across all shares on all posts, not a post-filtered subset.

### Paused and ended states

| Condition | Screen Preview behaviour |
| --- | --- |
| Post is toggled off in the Screen Setup post list | The Post Screen Preview URL for that post shows a **Contest Ended** screen. The contest and other screens continue running normally. Switching the post back on restores the screen. |
| Contest is paused from the main controls | Every Screen Preview URL, contest-level and post-level, shows the Wozku logo (the pre-Go-Live state). Participation is suspended across all surfaces. |
| Contest is stopped (Winner Finalization) | Every Screen Preview URL switches to the end-state view with the winner announcement, regardless of URL class. |

### Aspect ratio and layout

Post Screen Preview URLs inherit the same screen theme, background, and layout settings configured in the contest's **Theme Settings**. If the contest uses the **Aura Live** theme on its main screen, every post-level screen inherits it automatically. The screen is designed for 16:9 displays (projectors, TVs, landscape monitors). Kiosk or portrait orientations work but may clip elements; test on the actual display before the event.

### Tips

- Screen Preview URLs are not participant URLs. Do not distribute them to attendees.
- No PIN protection by design. For a gated read-only metrics view use the Public Dashboard PIN.
- Test every room's screen the day before on the target display for aspect-ratio fit.
- Plan the post-per-surface content in Step 2; a seven-screen event needs seven purpose-written posts.
- Lower the **Page Refresh Interval** to 60-120 seconds in **Contest Settings** at high-traffic events.
- Multi-location programmes inherit the same time zone. The contest's end time is one value; set it to the latest local close so no region is cut off mid-day.

### FAQ

| Question | Answer |
| --- | --- |
| Difference between Contest and Post Screen Preview URL? | Contest-level projects the full contest screen with a rotating post feed in the featured slot; post-level pins that slot to one specific post with its QR code. Both show the same full contest leaderboard. |
| Can I run many Screen Preview URLs for the same contest at once? | Yes. Every post has its own; every URL is live the moment the contest is live. A contest with 10 posts can run 10 screens concurrently with zero additional configuration. |
| Does the leaderboard on a Post Screen Preview URL show only shares to that post? | No. It always shows the full contest ranking across every post and every channel. Deliberate: cross-track FOMO drives participation in less-attended surfaces. |
| What happens if the post is toggled off? | That URL shows a **Contest Ended** view. Other posts' Screen Preview URLs and the contest-level URL continue running normally. |
| Does the Screen Preview URL need a PIN? | No. Display-only and designed to be cast publicly. For PIN-protected read-only dashboard numbers, use the Public Dashboard PIN. |
| Can I use Screen Preview URLs for a Campaign? | No. Screen Preview URLs exist only for Contest-type programmes. A Campaign has no live-screen layer by design. |
| When should I use multiple contests instead? | When the surfaces should not share a leaderboard (for example a Berlin user group meetup and a Singapore customer advisory board in the same week). |
| Can the QR on a Post Screen Preview URL point to a different share URL than the main screen? | Yes. It points to whichever share URL is configured on that post (Public URL, Universal Share URL, or a specific Channel Ninja URL). Set in **Contest Settings** > **Manage QR Code** at the post level. |

## Public Dashboard PIN
Source: https://wozku.com/kb/04-sharing/public-dashboard-pin/

Last updated April 25, 2026.

The **Share Dashboard** modal on the Campaign Detail page generates a PIN-protected, read-only public dashboard at `wozku.com/dashboard/campaign/{ID}`. Use case: the marketing manager runs the contest from the admin panel; the field executive, sponsor, or senior stakeholder sees progress without logging into admin.

### Prerequisites

- A Contest or Campaign exists in your account.
- The Campaign Detail page (`/admin/campaigns/{ID}`) is accessible.
- A PIN value ready, simple enough to communicate verbally.

### Setup workflow

1. Go to the **Campaign Detail page** at `/admin/campaigns/{ID}`.
2. Click the **Share Dashboard** action in the page's action bar to open the **Share Dashboard** modal.
3. Enter the PIN in the **Dashboard PIN** field.
4. Copy the **Public Dashboard URL** (`https://wozku.com/dashboard/campaign/{ID}`) with the **Copy** button.
5. Click **Save PIN**. The modal confirms "Public dashboard PIN saved."

Modal fields:

| Field | Behaviour |
| --- | --- |
| **Dashboard PIN** | The PIN that gates access. Anyone with the URL and the PIN can open the dashboard; access is not per-user. |
| **Public Dashboard URL** | Format `https://wozku.com/dashboard/campaign/{ID}`. **Copy** button puts it on the clipboard. |
| **Save PIN** | Saves the PIN and activates the public dashboard. |
| Empty PIN + Save | Disables public dashboard access entirely. Help text: "Leave empty to disable public dashboard access." |

### What stakeholders see

Stakeholders opening the URL are prompted for the PIN on a **Dashboard Access** screen. After entering it and clicking **Access Dashboard**, they see the campaign's read-only performance view, branded with the campaign's uploaded logo in the top-right, with six headline tiles:

| Tile | Definition |
| --- | --- |
| **Potential Reach** | The summed first-degree audience across every channel the campaign ran on |
| **Total Shares** | Every authenticated share recorded across all posts and all channels |
| **Total Clicks** | Clicks recorded on shared links across the campaign |
| **Total Comments** | Comments on participant shares, summed across channels |
| **Total Likes** | Reactions or likes on participant shares, summed across channels |
| **Total Posts** | How many posts the contest is running |

Read-only by design: stakeholders cannot reach admin controls, switch to other campaigns, change any setting, or see participant-level data.

### Rotate or disable

- **Rotate the PIN:** open the **Share Dashboard** modal, enter a new PIN, click **Save PIN**. The URL stays the same. The old PIN stops working immediately.
- **Disable access entirely:** clear the **Dashboard PIN** field and click **Save PIN** with an empty value. The dashboard URL is deactivated immediately; anyone holding the link gets a Dashboard Access prompt with no valid PIN until a new one is set.

### Tips

- Primary use case is the field-exec / marketing-manager split.
- Use a PIN you can say out loud (event year, simple 4-digit code).
- The PIN is shared, not per-user. Do not reuse PINs from other systems.
- Clear the PIN after reporting is complete.
- The public dashboard URL is campaign-specific; there is no single URL that spans all campaigns.
- Rotate the PIN for tiered stakeholders: sponsor gets PIN A for 48 hours post-event, client gets PIN B the following week, internal leadership keeps PIN C through the quarter. One URL per campaign, one active PIN at a time.

### FAQ

| Question | Answer |
| --- | --- |
| Who can access the public dashboard? | Anyone with the Public Dashboard URL and the current PIN. Not per-user. To revoke one stakeholder's access, change the PIN and share the new PIN only with those who should retain access. |
| What exactly does it show? | Six headline tiles: **Potential Reach**, **Total Shares**, **Total Clicks**, **Total Comments**, **Total Likes**, **Total Posts**, plus the campaign logo in the top-right. No admin controls, no other campaigns, no internal settings, no per-participant breakdowns. |
| Does Potential Reach reflect all channels? | Yes. For a multi-channel Contest it is the combined first-degree audience of all participants across LinkedIn, Twitter / X, Slack, Facebook, and Instagram, summed. |
| How do I disable access after the event? | Open the **Share Dashboard** modal, clear the **Dashboard PIN** field, click **Save PIN**. Deactivates the URL immediately. |
| Is the URL the same for all campaigns? | No. Each campaign has its own unique URL at `wozku.com/dashboard/campaign/{ID}`. |
| Can I change the PIN without disabling access? | Yes. Enter a new PIN and click **Save PIN**. The URL stays the same; the old PIN stops working immediately. |
| Can stakeholders see per-post or per-participant performance? | No. Those breakdowns are visible inside the admin panel on the Campaign Detail page. Grant an admin sub-account if that detail is needed. |
| Is the public dashboard the same as the live event screen? | No. The **Public Dashboard** is a read-only PIN-protected metrics view. The **Screen Preview URL** is a cast-to-screen live display with no PIN, including leaderboard and QR. |
