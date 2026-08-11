# 08 LeadSpark

Reference for the LeadSpark Contest Form workflow: lead capture and multi-channel amplification in one flow.
Source: https://wozku.com/kb/08-leadspark/

## LeadSpark - Contest Form Full Workflow
Source: https://wozku.com/kb/08-leadspark/leadspark-setup/

LeadSpark is the only Wozku flow where lead capture and multi-channel amplification run in the same UX. From a single form fill: the attendee submits, the Thank You page hands them a pre-populated post for whichever channel they pick, the share carries the form link back out to the attendee's first-degree network, and the booth screen shows the leaderboard climbing in real time. Lead capture is the front door, sharing is the reward, and every share becomes a lead magnet in front of the sharer's network.

LinkedIn is the default channel for most B2B LeadSpark flows, but the pattern works identically on Twitter / X and on the Beta channels (Slack, Facebook, Instagram). Channel selection is per post in Step 4.

### Prerequisites
- A Wozku admin account with access to **+ Forms (Beta)** at `https://wozku.com/admin`.
- Form logo and header image assets ready: 300 x 300 px logo, 1920 x 400 px header image.
- Post image ready (1200 x 628 px). At least one post is required before Form Screen Setup.
- Post copy written per channel with a placeholder for the form link.
- A screen (monitor or projector) at the booth to display the Contest Link.

### Step 1: Page Setup
URL: `/admin/forms/create`. The key toggle is "Mark this as a Contest Form": checking it turns a plain Global Form into LeadSpark and exposes the full flow.

| Field | Required | Notes |
| --- | --- | --- |
| Brand Logo | No | 300 x 300 px recommended. JPG / JPEG / PNG / WEBP / GIF. Opens Media Library. |
| Form Name | Yes | Public-facing heading displayed on the form page. |
| Header Image | No | 1920 x 400 px recommended. Banner image for the form page. |
| Form Description | No | Rich text editor. Tells the audience what the form is about. |
| Form End Date | No | Pre-fills to approximately 30 days out. Sets an expiry date for the form. |
| Mark this as a Contest Form | No | The key toggle. Check "Yes" to turn on the full LeadSpark contest flow. Adds Form Screen Setup as a 6th step and generates two URLs. |
| Allow multiple submission | No | Default OFF. When OFF, returning visitors are sent to the Redirection URL instead of seeing the form again. |

Hold & Fire and the multi-post interval are configured in the Page Setup Additional Settings.

### Step 2: Form Setup
The same field builder used in campaign-scoped Forms.

| Setting | Options | Notes |
| --- | --- | --- |
| Display Mode | STRICT / CONVERSATIONAL | STRICT: all fields on one page. CONVERSATIONAL: one field at a time in a guided chat flow. |
| Default fields | First Name, Last Name, Email ID (Official), Phone Number, Designation, Company, Submit Button | Pre-populated. All editable. |
| + Add New Field | CORE / CHOICE / ADVANCED field types | Extend the form with custom fields. |

### Step 3: Thank You Setup
What participants see immediately after submitting. The bridge between lead capture and the contest sharing step.

| Field | Notes |
| --- | --- |
| Thank You Heading | Main headline after submission (e.g. "Thank you! You're in.") |
| Thank You Description | Body text explaining what happens next (e.g. "Now share this on LinkedIn, Twitter, or your preferred channel and compete for the top spot on the leaderboard.") |
| CTA Text | Button label for the post-submission action (e.g. "Share Now" or "View Leaderboard") |
| CTA Link | Where the CTA button takes the participant |
| Click/Share/Win Description | Named field for the contest mechanic description. Wozku's branded label for the sharing mechanic. |

### Step 4: Add Posts
Identical to the Contest wizard's Add Posts step, including per-post channel selection.

- Posts added here are what participants share on their chosen channel.
- The form link is typically embedded in the post description. When shared, it appears in the participant's post as a link their network can click. This closes the loop: each share distributes the form link to new potential leads inside a trusted personal feed.
- Channel selection: most B2B events run LeadSpark LinkedIn-first. Event types with a live hashtag often add Twitter. Internal programmes use Slack.
- Each post has an individual on/off toggle in Form Screen Setup. The toggle must be ON before clicking Go Live for the post to appear on the contest screen.

### Step 5: Form Screen Setup
URL: `/admin/forms/{ID}/form-contest-screen-setup`. This step only appears when "Mark this as a Contest Form" is enabled.

#### Two URLs Generated

| URL | Audience | Format | Purpose |
| --- | --- | --- | --- |
| FORM LINK | Event attendees | `wozku.com/form/{accountID}-{slug}` | The lead capture form. Embed this in QR codes and in post descriptions for every channel. |
| CONTEST LINK | Event organisers / booth screen | `wozku.com/form/{accountID}-{slug}/screen-preview` | The live leaderboard screen. Cast to a large monitor or projector at the booth. |

#### Go Live, Required Sequence
Two steps in this exact order. Skipping either results in the contest screen showing only the Wozku "W" splash with no content.
1. Enable the individual post toggle for each post you want visible on the contest screen (must be ON).
2. Click Go Live.

#### Contest Lifecycle States

| State | Buttons Shown | Contest Screen Shows |
| --- | --- | --- |
| Not Live (default) | Go Live | Wozku "W" logo only |
| Live | Pause Screen + Stop Campaign | Full leaderboard screen |
| Paused | Go Live (resume) | Wozku "W" logo again |

Pause is reversible: click Go Live to resume. Stop Campaign triggers the Winner Finalization workflow.

#### Configuration Buttons

| Button | What it controls |
| --- | --- |
| Theme Settings | 7-tab editor: Theme / Background / Gift / Header / Welcome / Closing / Focus Content. 4 screen themes: Legacy Screen, Aura Live, Live TV Leaderboard, Grid Gallery - Wozku View. Dark / Light toggle for Legacy Screen. |
| Contest Settings | Full screen configuration: Post Pin Interval, Page Refresh Interval, CTA Text, Leaderboard Title, QR position (Top / Bottom / Hidden), View Participant Rank Wise toggle, Reset Leaderboard. Two tabs: Screen settings and Thank you page settings. |
| Individual Post Toggles | Per-post on / off. Each post also shows a lightning bolt icon if it is a Booster Post. |

### Step 6: Dashboard
URL: `/admin/forms/{ID}`. Shows submission stats and the participant community: who submitted the form and who shared a post, with channel filters to segment by LinkedIn, Twitter, Slack, Facebook, or Instagram activity.

### The Contest Screen Layout
Live screen at `wozku.com/form/{accountID}-{slug}/screen-preview`, designed for a large monitor or projector.

**Left panel:**
- Campaign CTA headline ("Scan. Share. Win." by default, configurable)
- QR code pointing to the Form Link
- Contest description from Step 1
- Live post feed: real-time scroll of posts being shared by participants across every channel

**Right panel:**
- Organisation logo
- Leaderboard title ("Social Champ" by default, configurable)
- Countdown timer to the next leaderboard refresh
- Podium for the top 3 participants with name and Wozku Score
- Full ranked list below the podium

**Update mechanics:**
- Individual share events push in real time via Pusher WebSocket, regardless of channel.
- Leaderboard rankings update on the Page Refresh Interval (default 600 seconds).
- The on-screen countdown timer shows when the next full refresh fires.
- To force an immediate update: reload the browser window, or reduce the Page Refresh Interval in Contest Settings.

### The Wozku Growth Loop
1. Attendee sees the leaderboard screen and QR code at the booth.
2. Scans the QR code, arrives at the Wozku Form, lead is captured.
3. Fills out the form (name, email, company, designation, phone).
4. Lands on the Thank You page, sees the Click/Share/Win CTA.
5. Clicks to share, picks their channel (LinkedIn by default in B2B, or Twitter / Slack / Facebook / Instagram), pre-populated post goes live on that channel containing the Form Link.
6. The attendee's first-degree network on the chosen channel sees the post, a trusted peer vouching for the content rather than a brand ad.
7. Network members click the Form Link, arrive at the form, new leads are captured.
8. New leads who share create their own posts on their chosen channel; the loop expands.

Why it works: the form link travels inside a native post written in the first person by a real person in the reader's network on whichever channel the reader uses most. It reads as a recommendation, not an advertisement. Every share is organic reach the brand did not pay for.

### Attendee Experience, Step by Step
1. Scan QR code, form page loads (`/form/{accountID}-{slug}`).
2. Fill out the form (STRICT: one page, CONVERSATIONAL: one field at a time).
3. Submit, Thank You page with Click/Share/Win description and CTA button.
4. Click CTA. If the post is configured for multiple channels, the Universal Share URL surfaces a channel picker. If the post is pinned to one channel, the Channel Ninja URL routes directly to that channel's OAuth.
5. Authorise and post. The pre-populated post with form link embedded publishes on the chosen channel and appears on the Contest Screen leaderboard in real time.

### LeadSpark vs Standard Global Form
A Global Form has two modes depending on a single checkbox in Step 1.

| Setting | Standard Global Form | LeadSpark (Contest Form) |
| --- | --- | --- |
| "Mark this as a Contest Form" | Unchecked | Checked |
| Wizard steps | 5 steps | 6 steps (adds Form Screen Setup) |
| Public URLs generated | 1 (form link only) | 2 (form link + contest screen) |
| Live leaderboard screen | No | Yes |
| Go Live / Pause / Stop controls | No | Yes |
| Post-sharing mechanic | No | Yes, across every enabled channel |

### Operational Notes
- The FORM LINK and CONTEST LINK serve different audiences. Form Link goes on QR codes, screens, and inside posts on every channel. Contest Link goes on a TV or projector at the booth facing attendees. Never swap them.
- Both the post toggle AND Go Live are required. Neither step alone makes the screen go live.
- The form link in the post description is what closes the loop. Write post copy to include it naturally, for example "Attending HPE Discover 2026? Register here: [link]".
- CONVERSATIONAL mode works well in a busy booth environment: one field at a time reduces cognitive load.
- Set Page Refresh Interval to 60 to 120 seconds at busy events. The default 600 seconds (10 minutes) leaves the leaderboard nearly 10 minutes behind.
- Author post copy per channel. Step 4 supports per-post copy and per-post channel assignment.
- Hold & Fire works for LeadSpark too, configured in the Page Setup Additional Settings, releasing all staged posts simultaneously across every enabled channel.

### FAQ
- **What happens if I click Go Live without enabling the post toggle first?** The contest screen shows only the Wozku "W" splash logo with no content. Both steps are required in order.
- **What is the difference between the FORM LINK and CONTEST LINK?** FORM LINK (`wozku.com/form/{accountID}-{slug}`) is for attendees and opens the lead capture form. CONTEST LINK (`wozku.com/form/{accountID}-{slug}/screen-preview`) is for the booth screen and displays the live leaderboard.
- **Can a participant share the same form-linked post on multiple channels?** If the post is configured for multiple channels in Step 4, the participant sees a channel picker on the Universal Share URL and selects one channel per share. A participant can share different posts on different channels within the same LeadSpark flow, subject to the one-share-per-post-per-participant rule.
- **Can I pause the leaderboard during a session without losing data?** Yes. Pause Screen pauses the display (screen shows the Wozku "W" logo again) with no data loss. Go Live resumes. Only Stop Campaign triggers Winner Finalization and ends the contest.
- **Why is the leaderboard not updating in real time?** Individual share events push in real time via Pusher WebSocket. Leaderboard rankings update on the Page Refresh Interval (default 600 seconds). Reduce it to 60 to 120 seconds at a busy event, or reload the browser window to force an immediate update.
- **Can a participant who submitted the form share multiple times?** Post sharing frequency is controlled by the multi-post interval setting, configured in Page Setup Additional Settings. Set it to 0 for no interval.
- **What field mapping is required for the Zoom integration with LeadSpark forms?** The Zoom integration requires at minimum `email` and `last_name` to be mapped from Wozku form fields to Zoom's registration fields.
