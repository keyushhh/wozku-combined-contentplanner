# 03 Running a Live Contest

Control surface for a live Contest: the Go Live / Pause / Stop state machine, Winner Finalization, and the destructive Leaderboard Reset.
Source: https://wozku.com/kb/03-running-live/

## Go Live, Pause, and Stop a Contest
Source: https://wozku.com/kb/03-running-live/go-live/

Last updated April 25, 2026.

Three buttons on the Screen Setup page (`/admin/campaigns/{ID}/screen-setup`) are the entire control surface for a live Contest: **Go Live**, **Pause**, **Stop**.

### Prerequisites before Go Live

- Contest is created and at least one post has its individual toggle set to ON.
- Logo, contest name, and description correct in Contest Settings.
- Theme Settings configured: background, gift image, leaderboard title.
- **Page Refresh Interval** set. Default 600 seconds. Lower for busy events.
- QR codes downloaded and ready to display.
- Public screen URL shared with the AV team and displaying on the event monitor. Before **Go Live** the screen shows only the Wozku logo, so the AV team can frame it without exposing live data.
- If using **Hold & Fire**, the UTC datetime is already set in Step 1 Additional Settings.

### State machine

| State | Buttons Shown | Public Screen Shows | Sharing Active |
| --- | --- | --- | --- |
| **Not Live** (default) | Go Live | Wozku logo only | No, but QR scans still trigger OAuth and posts can publish on the channel |
| **Live** | Pause + Stop | Full leaderboard screen | Yes |
| **Paused** | Go Live (resume) | Wozku logo only | No |

Transitions:

| Transition | Trigger | Effect | Reversible |
| --- | --- | --- | --- |
| Not Live to Live | Click **Go Live** | Public screen switches to full contest display; all enabled channels open simultaneously | Yes, via Pause |
| Live to Paused | Click **Pause** | Screen reverts to Wozku logo, sharing suspended, leaderboard frozen, no data deleted | Yes, click **Go Live** to resume from exactly where it was |
| Paused to Live | Click **Go Live** | Leaderboard resumes from exactly where it was | Yes |
| Live to Stopped | Click **Stop** | Opens **Winner Finalization** workflow; permanent | No. There is no "unstop" |
| Scheduled fire | **Hold & Fire** UTC datetime reached | Platform fires all enabled posts simultaneously across every enabled channel without a manual **Go Live** click | Admin retains **Pause** and **Stop** after the fire |

### Behaviour before Go Live

Printing QR codes in advance is safe. Before **Go Live**, scanning a **Channel Ninja URL** still routes the participant to the channel's OAuth consent screen. If they authorise, the post publishes on the channel. What does not happen: the contest leaderboard is not visible on the public screen. Shares made before **Go Live** can still be recorded.

### What Go Live changes immediately

- The public screen at `wozku.com/campaigns/screen/{hash}` switches from the Wozku logo to the full contest display.
- Left panel shows CTA text, QR code, contest description, and post preview with the "just shared" activity feed.
- Right panel shows the leaderboard, podium for top 3, and gift image if enabled.
- Pusher WebSocket begins driving real-time leaderboard updates. New shares surface on the next Page Refresh Interval cycle.
- Every enabled channel goes live simultaneously. Participants on LinkedIn, Twitter / X, Slack, Facebook, or Instagram all enter the same leaderboard under the same **Wozku Score**.
- The "Next Scoreboard Update In" countdown timer starts.

What Go Live does not change:

- Posts with their individual toggle set to OFF do not appear on the screen after **Go Live**.
- Contest settings (Page Refresh Interval, CTA text, theme) remain as configured. Set them before clicking **Go Live**.

### Hold & Fire

Enabled in Step 1 Additional Settings with a UTC datetime. The campaign does not require a manual **Go Live** click at that moment; the platform fires all enabled posts simultaneously across every enabled channel at the scheduled time. Simultaneous multi-channel launch concentrates organic activity into a single moment on each network. The admin still has access to **Pause** and **Stop** after the fire.

### Individual post toggles

Each post in the Screen Setup list has its own on/off toggle, independent of the overall contest state.

| Contest state | Post toggle | Result |
| --- | --- | --- |
| Live | ON | Post appears on screen |
| Live | OFF | That post is hidden; other posts with toggles ON remain visible and active |
| Not Live | Any | All posts hidden regardless of individual toggle states |

- Toggles programme the run-of-show without touching **Go Live** (enable "Keynote" during the keynote, flip on "Booth" during the networking break).
- Individual post toggles do not affect which channels are enabled on a post. A toggled-off post is only hidden from the screen; its channel configuration is unchanged.
- Toggles are editable at any time without pausing the Contest.

### Pause detail

| Changes | Does not change |
| --- | --- |
| Public screen reverts to Wozku logo only | Contest settings, posts, and theme configuration remain intact |
| Sharing suspended across all channels | Leaderboard frozen at the moment of pause |
| All contest data (leaderboard, participant list, shares, Wozku Scores) preserved, nothing deleted | |

When to use Pause: between event sessions when sharing should stop; technical breaks when the public screen needs reconfiguring; end-of-day on multi-day events to suspend activity overnight.

### Stop and Winner Finalization

Clicking **Stop** opens the **Winner Finalization** workflow. Permanent.

Step 1, choose winner selection method:

| Option | How winners are selected |
| --- | --- |
| **Default** | Top 3 participants by **Wozku Score** are automatically selected |
| **Custom Criteria** | Opens a criteria builder |

Custom Criteria Builder fields:

| Field | Options | Notes |
| --- | --- | --- |
| **Type** | Top / Random | "Top" = highest **Wozku Score**; "Random" = random draw from a pool |
| **Number of Winners** | Number input | How many winners to select |
| **Rank Range** | From / To | Consider only participants ranked within this range (e.g. rank 1-10 for a top-10 draw) |

After finalizing winners:

- The contest screen switches to the end state.
- The public screen shows the winner announcement.
- **Contest End Heading** and **Contest End Message** fields in Contest Settings control what text appears.

### End-state messages

| Message | Default text | When shown |
| --- | --- | --- |
| **Contest End Message (Winners Pending)** | "The winners will be announced soon." | After **Stop** but before winners are announced |
| **Contest End Message (Winners Announced)** | "Thank you for your interest and participation!" | Once the finalization workflow completes |

Both configurable in **Contest Settings** > **Screen Settings** tab.

### Tips

- Test the public screen before Go Live; share the screen URL with the AV team the day before.
- QR codes work before Go Live; pre-event shares are recorded.
- Pause is reversible, Stop is not.
- Individual post toggles programme the agenda: stage every post toggled off and flip each on at the right moment.
- Lower Page Refresh Interval for fast-paced events: default 600 seconds, set 60-120 seconds at a busy booth so leaderboard competition stays visible in near real time via the Pusher WebSocket feed.
- Hold & Fire compounds reach across channels; set the UTC datetime in Step 1 and brief the team on what fires automatically.
- The **Channel Ninja URL** converts a scan into a published post in under 60 seconds. If the screen goes down mid-event, **Pause** only if sharing must stop; otherwise the Ninja QR still works and shares are still recorded.

### FAQ

| Question | Answer |
| --- | --- |
| What happens to participant data when I click Pause? | Nothing is deleted. All shares, Wozku Scores, and participant records stay intact. The public screen reverts to the Wozku logo and sharing is suspended, but leaderboard data is frozen at the moment of pause. Clicking **Go Live** again resumes from exactly where you left off. |
| Can participants share before I click Go Live? | Yes, with a caveat. Scanning a **Channel Ninja URL** still routes to the channel's OAuth; if they authorise, the post publishes on the channel. The contest leaderboard is not visible on the public screen until **Go Live**. |
| Can I go back to Live after clicking Stop? | No. **Stop** is permanent and triggers Winner Finalization. There is no "unstop." Use **Pause** for a temporary break. |
| Why is my leaderboard not updating immediately after Go Live? | The leaderboard updates on the Page Refresh Interval cycle, driven by the Pusher WebSocket. At the default 600 seconds new shares surface up to 10 minutes later. Lower **Page Refresh Interval** in Contest Settings before **Go Live**. |
| Can I add or edit posts after the contest is Live? | Individual post toggles are editable at any time without pausing. To edit post content (copy, image, channel selection) you may need to pause first depending on the change; check the post editor for availability. Adding a new post via the Dashboard **Add Post** button is available at any time. |
| What does the public screen show between Stop and the winner announcement? | The Contest End Message (Winners Pending): "The winners will be announced soon." Configurable in **Contest Settings** > **Screen Settings** tab. |
| Difference between Default and Custom Criteria winner selection? | **Default** automatically selects the top 3 participants by **Wozku Score**. **Custom Criteria** opens a builder for selection type (Top or Random), number of winners, and an optional rank range. |
| Does Hold & Fire replace the Go Live button? | For the scheduled launch moment, yes. The platform fires all enabled posts simultaneously across every enabled channel at that exact time without a manual **Go Live** click. The admin retains full access to **Pause** and **Stop**. |

## Leaderboard Reset
Source: https://wozku.com/kb/03-running-live/leaderboard-reset/

Last updated April 22, 2026.

The **Reset Leaderboard** button clears all shares and scores for the Contest (every participant, every channel, every **Wozku Score**) so the leaderboard starts from zero. The reset is destructive and is only reversible by contacting Wozku support.

### Prerequisites

- Admin access to the Wozku platform at `https://wozku.com/admin`.
- Understanding that the action is **irreversible without support intervention**. No undo button.
- Confirmation of which data to clear. The reset clears all shares and scores for the entire Contest, across every channel and every participant. There is no partial reset by channel or by date range.
- Export the Community table from the Campaign Detail page first if any data must be preserved.

### When to reset

| Scenario | Detail |
| --- | --- |
| **Test-run clean-up before the real event** | AV checks, QR code tests, booth team run-throughs all create participants and test shares. A reset at the end of the dry run clears the board so the first real participant share starts from zero. |
| **Accidental test entries mixed into real data** | Team member scans and shares by mistake, or test entries made after **Go Live**. Reset clears everything and restores a clean starting point. Any real participant shares made before the reset are also cleared. |

### Reset workflow

1. Go to the **Campaign Detail page** at `/admin/campaigns/{ID}`.
2. Click **Screen Setup** to open the Screen Setup page.
3. Click **Contest Settings**.
4. Locate the **Reset Leaderboard** button.
5. A confirmation dialog appears stating the action is irreversible.
6. Confirm the reset.

The reset is applied immediately on the server. The public screen updates on the next **Page Refresh Interval** cycle (default 600 seconds / 10 minutes). Reduce the **Page Refresh Interval** to 60 seconds before applying the reset if it must be visible quickly at a live event.

### Scope of the reset

| What is cleared | What is not cleared |
| --- | --- |
| All shares for the contest | Contest configuration (posts, channels, theme) |
| All Wozku Scores for the contest | Participant account records on the platform |
| All leaderboard entries across every channel | Contest settings, QR codes, URLs |
| All Potential Reach calculations for the contest | Any data in other contests or campaigns |

The reset is scoped to the Contest it is applied to. Other Contests and Campaigns in the account are not affected.

### Reversibility

Irreversible without support intervention. No Regenerate button, no undo, no restore from a local snapshot. Contact Wozku support immediately if applied in error; restoration depends on timing and backup state and is not guaranteed. This differs from the legacy Reset / Regenerate pattern in older documentation; the current reset is a hard clear.

### Tips

- Export the Community table before you reset. The CSV preserves participant names, Wozku Scores, Potential Reach, and share counts by channel.
- Time the reset after the dry run and before the audience arrives.
- Reduce Page Refresh Interval before resetting at a live event.
- Do not confuse Reset with Stop. **Stop** ends the Contest and triggers Winner Finalization; it does not clear the leaderboard. **Reset** clears the leaderboard and leaves the Contest running.
- Pair a reset with a verbal announcement at the event when resetting between rounds.

### FAQ

| Question | Answer |
| --- | --- |
| Is the leaderboard reset reversible? | No. Only reversible by contacting Wozku support. There is no in-platform undo. |
| Does the reset affect other contests or campaigns? | No. Scoped to the specific Contest it is applied to. |
| Does the reset clear participant account records? | No. Participant accounts remain intact; only their share and score data for this Contest is cleared. New shares after the reset are recorded as fresh entries. |
| How quickly does the reset appear on the public screen? | On the next Page Refresh Interval cycle. At the default 600 seconds, up to 10 minutes. Reduce to 60 seconds beforehand. |
| Can I reset only one channel's data, or a specific time window? | No. Partial resets by channel, time window, or participant are not available. |
| What if I applied the reset by mistake? | Contact Wozku support immediately with the contest ID and approximate time of the reset. |
