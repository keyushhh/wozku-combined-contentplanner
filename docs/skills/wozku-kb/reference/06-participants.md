# 06 Participants & Community

Reference for the Community participant database, the Wozku Score, Potential Reach, the channel filter, and the ROI / Earned Media Value framework.
Source: https://wozku.com/kb/06-participants/

## Participants & Community
Source: https://wozku.com/kb/06-participants/community/

The Community table is the participant database for a Contest or Campaign. Every advocate who has shared appears here with their score, reach, and engagement.

### Prerequisites
- A Contest or Campaign exists with at least one participant who has shared a post.
- CSV export requires the campaign-level Community table. The global Community page has no download button.

### Global Community
- URL: `/admin/community`
- Scope: all participants across every Campaign and Contest on the account, across every channel.

| Aspect | Value |
| --- | --- |
| Columns | Profile photo, Name (linked to their LinkedIn profile), Wozku Score, Potential Reach, Shares, Likes, Comments |
| Channel filter | All Channels, LinkedIn, Twitter, Slack, Facebook, Instagram |
| Search | Free text search by participant name |
| Pagination | 10, 25, 50, or 100 entries per page |
| Download | Not available |

### Campaign-Level Community
- Location: Campaign Detail page (`/admin/campaigns/{ID}`), scroll below the All Posts table.

| Aspect | Value |
| --- | --- |
| Columns vs global | Adds a Clicks column and an Actions column |
| Actions dropdown | Hide (removes participant from the visible leaderboard for this campaign only) |
| Hide URL pattern | `/admin/campaigns/{ID}/update-social-user/{userID}/hide` |
| Channel filter | All Channels, LinkedIn, Twitter, Slack, Facebook, Instagram |
| Sort | Click any column header to sort ascending or descending |
| Download | Exports the campaign's community data as CSV (primary export path) |
| Pagination | 5 to 100 entries per page |

### Data Captured Per Participant

| Data Point | Source | Notes |
| --- | --- | --- |
| Name | Channel OAuth | From the participant's profile on the channel they first authorised |
| Profile URL | Channel OAuth | Clickable link in the Community table |
| Profile photo | Channel OAuth | Avatar in the leaderboard and Community table |
| Email address | OAuth scope | Captured during the Ninja URL OAuth flow on supported channels |
| First-degree audience count | OAuth scope | Used to calculate Potential Reach on that channel |
| Wozku Score | Wozku algorithm | Sum of all Wozku Points across all shares in this campaign, across every channel |
| Shares | Wozku tracking | Count of posts shared by this participant across all channels |
| Likes | Channel API | Engagement on their shares, per channel |
| Comments | Channel API | Engagement on their shares, per channel |
| Clicks | Wozku tracking | Clicks from their shared post back to Wozku |
| Potential Reach | Calculated | See Potential Reach article |

If a Form is assigned to the Contest, additional form submission data (name, email, phone, company, designation, custom fields) is collected separately under Additional Settings > Forms > View Submissions.

### The Hide Action
- Removes the participant from the visible leaderboard for that campaign. Moderation only, not deletion.
- Participant data remains in the database.
- Reversible from the same moderation menu (unhide restores them to the visible list).
- Use cases: removing test shares by your own team during setup, removing a team member or spam activity, removing a participant at their own request.

### Post Shares Page
- URL: `/admin/postshares?post_id={hash}`
- Shows individual share events, not participants.
- Columns: Avatar, Name, Wozku Points, Likes, Comments, Potential Reach, D/T (date and time of share), Channel.
- Download Report button: CSV of shares data for that post. Available at campaign level, contest level, and individual post level. Not available at global Community level.

### Operational Notes
- Export at the campaign level, not the global level.
- Sorting by Wozku Score descending surfaces advocates whose shares drove the strongest engagement and reach.
- The channel filter applies before export: filtering to LinkedIn then Download exports only LinkedIn advocates.
- A participant who shares on multiple channels appears once per channel in filtered views, and once overall in All Channels. Wozku Score aggregates all shares regardless of channel.
- Form submissions are a separate dataset from Community data.

### FAQ
- **What's in it for the participant?** Recognition, status, and (depending on the programme) a reward. Every share moves the participant on the leaderboard, visible to the room at a Contest or to the cohort in an always-on Campaign. The Wozku Score weights engagement fairly across audience sizes, so a 300-follower advocate can out-rank a 10,000-follower account on real impact rather than raw reach. Coupons, podium prizes, or recognition mechanics layer on top.
- **Why is there no download button on the global Community page?** The global page is a read-only overview across all campaigns and channels. Export from the Campaign Detail page Community table Download button.
- **What does hiding a participant do?** Removes them from the visible leaderboard for that campaign. Data remains in the database. Display moderation only. Reversible via unhide.
- **How is the Wozku Score in the Community table calculated?** It is the sum of all Wozku Points earned across every share in that campaign, across every channel. A participant who shared twice on LinkedIn and once on Twitter has a score reflecting all three share events combined.
- **What channels appear in the channel filter?** All five: LinkedIn, Twitter, Slack, Facebook, Instagram. If no participants shared on a channel in that campaign, the filter returns an empty table.
- **Can I see which specific post each participant shared?** Yes, via the Post Shares page (`/admin/postshares?post_id={hash}`), which shows each share event with sharer name, score, channel, and timestamp.
- **What if a participant shared on both LinkedIn and Twitter?** They appear in both channel filter views and in All Channels. Wozku Score aggregates all shares. Potential Reach is the sum of first-degree audience counts from every share across every channel.
- **Where is email address data?** Captured via OAuth during the Ninja URL share flow on channels that expose it. Appears in the campaign-level Community CSV export. If a Form is also assigned, additional contact data is in the Forms submissions view.
- **How is Community data different from form submission data?** Community data tracks who shared a post (channel OAuth plus Wozku tracking). Form submission data tracks what participants entered in a KYC form. Two separate datasets, exported separately.
- **What happens to a participant's score if they delete the post afterwards?** The share is logged. The Wozku Score retains all engagement that share earned up to the moment of deletion, because the score is built on activity recorded as it occurred. Future engagement signals stop because the post no longer exists on the channel, but every signal captured before deletion stays in the score. Leaderboard position is not retroactively zeroed out. Deletion is rare in B2B advocacy, and impact is small because the active engagement window has usually already closed.

## Understand the Wozku Score
Source: https://wozku.com/kb/06-participants/wozku-score/

The Wozku Score is the number that ranks every share on the leaderboard. It weights engagement against a capped audience size, so a small but engaged network can out-rank a large passive one.

### Three Levels of the Score

| Level | Where shown | Definition |
| --- | --- | --- |
| Wozku Points (per-share) | Post Shares page (`/admin/postshares?post_id={hash}`), Wozku Points column | Score for one share event on one channel. Reflects how that specific share performed on the channel it was published to. |
| Wozku Score (campaign leaderboard) | Campaign Detail page > Community tab, Wozku Score column | Sum of every Wozku Points a participant earned across all their shares inside that specific campaign, regardless of channel. |
| Wozku Score (global community) | `/admin/community`, Wozku Score column | Cumulative across every campaign the participant has ever shared on, across every channel, across the platform. |

### What Goes Into the Score (disclosure boundary)
- The Wozku Score is a proprietary model.
- **13+ parameters are used to calculate the Wozku Score using an AI engine**, spanning engagement quality on the authenticated share, audience characteristics, and cross-channel calibration.
- The exact weights, inputs, and formula are **not publicly disclosed**. This is intentional: it keeps the leaderboard honest and the model defensible over time.
- The stated tuning outcome: it rewards effective amplifiers on any channel (participants whose shares drive real engagement on real networks), not those with the largest raw followings.
- Publicly stated inputs at a general level: engagement quality, audience size, recency of the share, channel mix covered, share count. Per-signal breakdown and weights are not exposed to admins or participants.
- An audience-size cap is applied, described as a uniform cap; the cap value is not disclosed.

### Cross-Channel Fairness
- Uniform treatment across channels so that a LinkedIn, Twitter, Slack, Facebook, or Instagram share compete fairly on the same leaderboard.
- No channel is inherently advantaged by the scoring model.
- Participants on a smaller channel are not penalised; participants on a larger channel cannot dominate on follower count alone.

### Effect on the Leaderboard
- The public contest screen leaderboard ranks participants highest-to-lowest by their Wozku Score within that campaign, regardless of channel.
- Top 3 appear in the podium display. Below the podium, the full ranked list shows everyone.
- **View Participant Rank Wise** toggle ON (default): rank numbers and scores are visible.
- Toggled OFF: participants appear in a flat list with star icons instead of numeric scores. Useful at early stages of a contest or for smaller events.
- The leaderboard updates on the Page Refresh Interval (default 10 minutes).

### Wozku Score and Booster Posts

| Booster mode | Effect on the score |
| --- | --- |
| Auto Calculated Bonus | Wozku Score runs normally. Post is flagged as a booster but scoring is still engagement-based. Sharer still needs strong post performance. |
| Fixed Bonus Addition | Standard Wozku Score is calculated normally on whichever channel the share went to, then a fixed number is added on top. Always ranks above non-boosted shares. |
| Fixed Total Override | Standard Wozku Score is bypassed entirely. Every participant sharing the booster post receives exactly the fixed number as their score for that share, regardless of actual post performance. |

### Operational Notes
- Score accumulates across every share on every channel.
- Engagement beats follower count: a participant with 50,000 connections and flat engagement can score below a 3,000-connection participant whose shares land.
- Fixed Total Override changes leaderboard shape completely: everyone who shares the booster post outranks everyone who did not.

### FAQ
- **Difference between Wozku Points and Wozku Score?** Wozku Points is the score for a single share event on one channel. Wozku Score is the cumulative total of all Wozku Points across all shares in a campaign, summed across every channel. The leaderboard ranks by Wozku Score.
- **Does a LinkedIn share score the same as a Twitter or Slack share?** The proprietary model applies uniformly across channels. Comparable engagement and audience size compete directly. No channel is inherently advantaged.
- **Can a participant with fewer first-degree connections outrank someone with more?** Yes. 3,000 LinkedIn connections with strong engagement can outrank 50,000 connections with no engagement. Same logic within Twitter, Slack, Facebook, Instagram, and across combinations.
- **When does the leaderboard update after a share?** On the Page Refresh Interval, default 10 minutes. A participant sharing near the end of an event may see their score appear on the next refresh cycle.
- **How does Fixed Total Override affect the leaderboard?** It bypasses the standard Wozku Score and gives every booster-post sharer the exact fixed score set. All booster post sharers rank above all standard shares regardless of engagement or channel.
- **Does the global Wozku Score affect my campaign leaderboard?** No. The campaign leaderboard ranks by Wozku Score within that campaign only. The global score at `/admin/community` is informational and does not influence any single campaign's leaderboard.
- **What is the Wozku Score used for besides the leaderboard?** Primary input for identifying top advocates: post-event follow-up, ambassador programmes, targeted outreach.
- **Can I rename Wozku Score for our programme?** The default dashboard label is "Wozku Score". Programme-level renaming (for example "Champion Score" or "Partner Score") is configurable on request through the account team. It is not a self-serve setting in admin today. The underlying calculation does not change; only the displayed label does.
- **What does each participant see about their own score?** Three views: (1) the share confirmation received immediately after publishing, acknowledging the share and points earned; (2) the public leaderboard projected on the contest screen showing name, rank, and cumulative score; (3) the post-share Thank You page with a personal summary of their contribution. They do not see parameter weights, the per-signal breakdown, or how each input feeds the model.
- **Why does person A rank above person B with the same number of shares?** Share count is one input among many. The model uses 13+ parameters under an AI engine; engagement quality, audience size, recency of the share, and channel mix all play in. Identical share counts can rank differently because the engagement those shares generated differs.

## Understand Potential Reach
Source: https://wozku.com/kb/06-participants/potential-reach/

Potential Reach is the sum of first-degree audience across every share, across every channel a participant used.

### Definition
- When a participant shares a post, their first-degree network on the channel they shared to has the opportunity to see it.
- Potential Reach aggregates the first-degree audience counts of all participants who shared, across every channel they shared on.

### First-Degree Audience Surface Per Channel

| Channel | First-degree audience counted |
| --- | --- |
| LinkedIn | 1st-degree connection count |
| Twitter / X | Follower count |
| Slack | Channel member count of the Slack channel the share landed in |
| Facebook | Friend count (Timeline share), Group member count (Group share), or Page follower count (Page share) |
| Instagram | Follower count |

### Calculation Rules
- Wozku reads the participant's first-degree audience on each channel **at the moment they authorise the share**. The captured figure reflects network size on that channel at share time.
- Formula: Potential Reach for a campaign = sum of each share's first-degree audience on the channel it published to.
- Additive per share, per channel. Not per participant.
- No second-degree multiplier is applied, no projected reshare uplift is added, no engagement-weighted adjustment is layered on.
- If the participant's audience count changes later, Wozku uses the count captured at share time for that specific share.
- Beta channels (Slack, Facebook, Instagram) all contribute to Potential Reach.

### Worked Examples
- 10 participants share once each with an average 1,000 LinkedIn connections: campaign Potential Reach approximately 10,000. If the same 10 each also share on Twitter with an average 500-follower account, the total grows by 5,000 to 15,000.
- Priya Menon, a sales engineer with 5,000 LinkedIn first-degree connections, shares one post: that single share contributes 5,000 Potential Reach. A second post in the same campaign contributes another 5,000, taking her personal Potential Reach to 10,000.

### Interpretation Boundary
- Potential Reach is a **maximum estimate**, not a guaranteed impression count.
- Not every connection will see every post; each channel's feed algorithm decides what lands in each user's surface.
- Potential Reach represents the audience that could have seen the content, not the audience that definitely did. It will always be higher than actual impressions.

### Platform-Wide Figure
- As of April 2026, the Wozku platform shows a combined Potential Reach of over **3.4 million** across all campaigns and all channels: the sum of audience sizes of every participant who has ever shared on the account, counted per share per channel. It grows each time a participant completes a new share.

### Where Potential Reach Appears

| Location | What the number covers |
| --- | --- |
| Platform-wide dashboard (`/admin`) | Total across all campaigns on the account, summed across every channel |
| Campaign Detail page (`/admin/campaigns/{ID}`) stats header | Potential Reach for that campaign, summed across every channel it ran on |
| Community table (campaign level) | Per participant: sum of their first-degree audience counts across every share they completed in the campaign |
| All Posts page (`/admin/posts`) | Per post: aggregate across all participants who shared that post on whichever channel they selected |
| Post Shares page (`/admin/postshares?post_id={hash}`) | Per share: the sharer's first-degree audience on the channel that share went to |

### Potential Reach in the ROI Calculator
- Accessed via the **Calculate ROI** button on the Campaign Detail page, or the **View Total ROI** button on the dashboard.
- Uses Potential Reach as the basis for **Earned Media Value**: the equivalent paid media cost of organic advocacy.
- Logic: if you had to buy advertising to reach the same number of people across the channels your advocates used, what would that cost? Wozku applies paid-media CPM benchmarks to produce a monetary equivalent.
- **Default CPM anchor is the LinkedIn CPM benchmark**, which is conservative. LinkedIn CPMs are among the highest in B2B digital advertising, so using it as the anchor across channels under-states reach value on Twitter or Instagram rather than over-states it.
- The ROI Calculator sums Potential Reach across every channel the campaign ran on and applies the CPM benchmark. Programmes running heavy Twitter or Instagram amplification may annotate the number with a blended CPM assumption in their own reporting.

### Operational Notes
- A participant who shares 3 posts on LinkedIn and 1 on Twitter contributes four audience-count entries.
- High Potential Reach with low engagement signals (likes, comments, retweets, reactions, saves) suggests posts are not resonating or are channel-mismatched.
- Potential Reach and Wozku Score serve different purposes: reach measures exposure, score measures engagement and impact. A large following with low engagement shows high Potential Reach and a low Wozku Score.
- A LinkedIn-only programme produces large per-share reach but fewer shares. A multi-channel programme with Twitter and Instagram produces smaller per-share reach and more shares.

### FAQ
- **Is Potential Reach the same as impressions?** No. It is a maximum estimate based on first-degree audience counts per channel. Actual impressions depend on each channel's feed algorithm.
- **Why does a single participant's share count multiple times?** Each share is a separate exposure event on the channel it went to. Wozku counts each share separately per channel.
- **Where does the audience-count data come from?** Read from each channel at the moment a participant shares.
- **How does multi-channel Potential Reach feed the ROI Calculator?** Summed across every channel, then a CPM benchmark is applied (default LinkedIn CPM).
- **What does the platform-wide figure represent?** Cumulative sum of first-degree audience counts across every share, participant, campaign, and channel ever run on the account.
- **Do Beta channels count?** Yes. Every recorded share across every channel, GA or Beta, contributes at the first-degree audience count available on that channel.
- **What does the dashboard tile represent and not represent?** It is the maximum addressable audience at the moment of share, summed across every channel. It is not guaranteed views, not impressions, and not engagement. It is a ceiling for what could see the content. Engagement metrics (Total Clicks, Total Likes, Total Comments) are reported separately in the dashboard stats header and answer a different question.

## Filtering by Channel
Source: https://wozku.com/kb/06-participants/platform-filter/

The channel filter is the segmentation control on the Community table.

### Where the Filter Appears
- Global Community page (`/admin/community`): filter buttons above the participant table.
- Campaign Detail page (`/admin/campaigns/{ID}`) Community table: same filter buttons above the table.
- The UI label in the filter row reads "Platform" in some interface strings. The documented feature name is the channel filter.

### Filter Options

| Button | Shows |
| --- | --- |
| All Channels (default) | All participants regardless of which channel they shared on |
| LinkedIn | Only participants who shared via LinkedIn |
| Twitter | Only participants who shared via Twitter / X |
| Slack | Only participants who shared via Slack (Beta) |
| Facebook | Only participants who shared via Facebook (Private Beta) |
| Instagram | Only participants who shared via Instagram (Private Beta) |

### Behaviour
- Clicking a button activates the filter. The table updates immediately, no page reload.
- Click All Channels to return to the full view.
- The filter is multi-select capable: one channel can be activated at a time to see that channel's advocates in isolation.
- **Persistence:** the filter state persists for the current browser session. Navigating away and returning within the same session keeps the last active filter. Refreshing the page resets to All Channels.
- **Export is filter-aware:** applying a channel filter before clicking Download on the campaign-level Community table exports only that channel's participants.
- Filtering does not recalculate the Wozku Score; it changes which participants are visible.

### Use Cases
- Segmenting advocates for channel-specific outreach (filter to LinkedIn, sort by Wozku Score descending, export for a B2B follow-up sequence; filter to Instagram for a creator amplification kit).
- Checking participation by channel: step through each filter and note the participant count.
- Troubleshooting missing participants: check All Channels first, then the specific Beta channel filter.
- Exporting channel-specific participant lists.

### Operational Notes
- LinkedIn is the most common channel in B2B Contests. Unless other Ninja URLs were actively promoted, those filters return few or no results, and All Channels and LinkedIn will be nearly identical.
- A participant who shares on multiple channels appears in each channel's filtered view.
- Beta channel filters (Slack, Facebook, Instagram) are fully functional. Shares are recorded, scored, and filterable exactly like GA channels.

### FAQ
- **Does clicking a channel filter reload the page?** No. The table updates immediately.
- **Can I export only LinkedIn participants from a campaign?** Yes. Click the LinkedIn filter on the Campaign Detail page, then Download. The CSV reflects the filtered view.
- **A participant says they shared but I cannot find them.** Start with All Channels. If they shared on a Beta channel, switch to that filter. Also check whether the participant is hidden via the Actions dropdown on their row.
- **What if a channel filter returns zero participants?** Expected if nobody shared on that channel. Check that the channel was enabled on the post in Step 2 and that the corresponding Ninja URL or Universal Share URL was distributed.
- **Does filtering affect the Wozku Score shown?** No. The score is always the total across all shares in the campaign, across all channels.
- **Is the channel filter available on the Post Shares page?** The filter applies to the Community table (participant-level view). The Post Shares page shows individual share events and includes a channel indicator per share row, but does not use the same filter UI.

## Measuring ROI
Source: https://wozku.com/kb/06-participants/measuring-roi/

The framework for converting Wozku metrics into defensible ROI and Earned Media Value figures. It is a framework, not a benchmark report: the multipliers are the customer's own.

### Prerequisites
- Working understanding of the Wozku dashboard and its metrics.
- Access to your team's own paid-channel benchmarks: CPM (cost per thousand impressions), CPC (cost per click), CPL (cost per lead).

### The ROI Ladder

| Rung | What it is | Where it comes from |
| --- | --- | --- |
| 1. Shares | Authenticated share events that published through Wozku | Dashboard Total Shares tile |
| 2. Reach (Potential Reach) | First-degree audience size summed across every share, on every channel | Dashboard Potential Reach tile |
| 3. Clicks | Clicks on published shares back to your destination URL | Dashboard Total Clicks tile |
| 4. Registrations / Form Fills | Form completions on the destination: registration, gated content, demo request | Forms or LeadSpark submissions, plus tracking on your destination URL |
| 5. Pipeline-influenced | Opportunities in your CRM that touched a Wozku-driven click before becoming pipeline | Your CRM, joined to Wozku click data via UTM or attribution model |
| 6. Pipeline-sourced | Opportunities whose first recorded touch was a Wozku-driven click | Your CRM, joined to Wozku click data with a first-touch attribution model |

- Each rung up narrows the population and increases the dollar value of each unit.
- Match the rung to the audience: platform-level CMO reports often anchor at rung 5 or 6; programme-level end-of-event reports often anchor at rung 4 with reach and clicks as supporting context.

### What the Dashboard Exposes
- Total Shares: count of authenticated share events.
- Potential Reach: cumulative first-degree audience.
- Total Clicks: clicks on published shares back to your destination.
- Total Comments: comments on published shares as visible to the channel's API.
- Total Likes: likes on published shares as visible to the channel's API.
- Total Posts: count of distinct posts inside the contest that received shares.

The dashboard covers rungs 1 to 3 plus engagement signals. Rung 4 lives in Forms / LeadSpark plus destination tracking. Rungs 5 and 6 live in the CRM.

### Earned Media Value (EMV)
Definition: the ad-spend-equivalent value of unpaid (earned) media exposure. It translates rungs 2 to 4 into a dollar figure answering "what would it have cost us to buy this on a paid channel?".

| EMV component | Wozku metric | Multiply by |
| --- | --- | --- |
| Reach equivalency | Potential Reach | Your team's paid-channel CPM divided by 1,000 |
| Click equivalency | Total Clicks | Your team's paid-channel CPC |
| Lead equivalency | Registrations / Form Fills | Your team's paid-channel CPL |

- Sum the three line items to produce the EMV number.
- The benchmarks are the customer's own. LinkedIn paid-social CPM differs from Google Search CPC differs from event-driven CPL. Use benchmarks matching the channels and audience the programme hit.
- Worked shape (Acme AI Summit 2026 anchor): 200 authenticated shares, summed Potential Reach across LinkedIn and Twitter, click count off the dashboard, registrations from the LeadSpark form. Each multiplied by Acme's own CPM / CPC / CPL from the previous quarter's paid spend. Output is one EMV number for the summit.
- A second pass refines EMV by discounting Potential Reach to "estimated impressions delivered" using a channel-specific organic-reach factor the team already uses for unpaid social benchmarking. The discount factor is the customer's.

### CMO Summary Package
Three numbers plus a context line:
1. EMV, the ad-spend-equivalent dollar figure derived from rungs 2 to 4.
2. Pipeline-influenced (rung 5), the dollar value of opportunities that touched a Wozku-driven click before becoming pipeline.
3. Pipeline-sourced (rung 6), the dollar value of opportunities whose first touch was a Wozku-driven click.
Context line: how many credits were consumed (the cost side) and what that translates to commercially via the contracted credit rate.

Reach, share count, and engagement sit below as supporting evidence. The dashboard tiles are the audit trail, not the headline.

### Metrics Named as Non-ROI
- Total likes / total comments in isolation. Engagement signal feeds the Wozku Score but is not ROI on its own. A high like count without a corresponding click count is decorative.
- Number of contests run. Programme-volume number, not an outcome number.
- Number of admin seats / number of posts authored. Operational productivity, not marketing ROI.
- Time on the public dashboard / time on the contest screen. Display engagement is not advocacy ROI; the share is the unit of measurement.

### Operational Notes
- Anchor on the rung the data can prove. Do not claim pipeline sourced when attribution only supports pipeline influenced.
- EMV is a translation (historical equivalency), not a forecast.
- Use your own CPM / CPC / CPL benchmarks, not industry averages.
- Distinguish reach from impressions delivered; label whichever convention you pick.
- Pipeline lives in the CRM. Rungs 5 and 6 require joining Wozku click data to the CRM through UTM tags or an attribution model.
- Run the EMV calculation per programme, not per quarter.

### FAQ
- **What is Earned Media Value?** The ad-spend-equivalent value of unpaid (earned) media exposure. Wozku translates Potential Reach, clicks, and form fills into EMV by multiplying each metric by the team's own paid-channel CPM / CPC / CPL benchmarks.
- **Can the dashboard calculate EMV automatically?** The ROI Calculator turns the dashboard numbers (shares, reach, clicks) into an EMV figure when you provide your own benchmarks. The platform supplies the metrics; you supply the multipliers.
- **Difference between pipeline-influenced and pipeline-sourced?** Influenced: a Wozku-driven click appears anywhere in the touch history before the opportunity became pipeline. Sourced: the first recorded touch was a Wozku-driven click. Sourced is the harder claim and the smaller number.
- **Does Wozku integrate with Salesforce or HubSpot?** Native CRM integrations plus planned connector roadmap and the current CSV-export workflow are documented on the Integrations page.
- **Should I report every dashboard metric?** No. Match metric to audience: CMO wants EMV plus pipeline; marketing-ops wants share velocity, channel mix, and Wozku Score distribution; the board wants reach, EMV, and pipeline.
- **What is a good share-to-click ratio?** Your own. Establish a baseline across two or three programmes. Third-party industry averages will not survive an internal challenge.
- **How do I express ROI for an always-on Campaign?** Same ladder, different time window: run the EMV calculation per quarter or per content cycle, not per event. Pipeline-influenced and pipeline-sourced are stronger for Campaigns because the always-on motion has more touch points.
- **Can I count organic engagement toward EMV?** Engagement does not translate cleanly to EMV because there is no standard paid-channel equivalent for a comment. Treat engagement as evidence of share quality justifying the reach and click figures, not as its own line item.
- **What if my team has no CPM / CPC / CPL benchmarks?** Pull them. Most B2B teams have LinkedIn paid-social and Google Search benchmarks, which are enough to anchor an EMV calculation. If none exist, the EMV calculation is premature; establish benchmarks through a small paid-channel test.
