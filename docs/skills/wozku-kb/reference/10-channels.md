# 10 Channels

Reference for the five supported sharing channels (LinkedIn, Twitter / X, Slack, Facebook, Instagram), their GA / Beta / Private Beta status, OAuth and publishing behaviour, media limits, and the Channel Ninja URL direct-OAuth pattern.

Source: https://wozku.com/kb/10-channels/

## Channels - Overview

Source: https://wozku.com/kb/10-channels/overview/

Last updated May 15, 2026.

Wozku is a multi-channel Advocacy-Led Growth platform. A Contest or Campaign is not locked to one social network: it runs on LinkedIn, Twitter/X, Slack, Facebook, Instagram, or any combination of the five, from the same wizard and the same leaderboard. LinkedIn and Twitter / X are GA; Slack is Beta; Facebook and Instagram are Private Beta (access is gated, contact your account team to enable them on your tenant).

### Before you start

- Admin access to the Wozku platform at `https://wozku.com/admin`.
- Identify which channels the audience is actually active on. A channel the audience does not use is a channel that does not earn reach.
- The **Wozku Score** applies uniformly across every channel. A share on Twitter and a share on LinkedIn feed into the same leaderboard with the same scoring treatment.

### The five supported channels at a glance

| Channel | Status | Primary B2B Use Case |
| --- | --- | --- |
| LinkedIn | GA | Professional advocacy, event amplification, employee thought leadership. The default channel for B2B ALG. |
| Twitter / X | GA | Real-time event broadcasting, live-commentary during keynotes, hashtag-driven virality. |
| Slack | Beta | Internal advocacy. Share into team or community channels to drive internal pipeline visibility. |
| Facebook | Private Beta | Mixed B2B / B2C. Community-driven brands and verticals where decision-makers cluster in Facebook groups. Access is gated, contact your account team. |
| Instagram | Private Beta | Visual-first brand moments. Product launches, founder-led content, conference recap reels. Requested by customers serving design, retail, and consumer-adjacent B2B. Access is gated, contact your account team. |

Every Contest and Campaign can enable one channel, multiple channels, or all five. The choice is set **per post in Step 2 of the wizard**, not per contest. A participant on a multi-channel Contest sees the channel selector on the Universal Share URL page and picks which network to publish to.

### The URL ladder

| URL type | Pattern | Behaviour | Best for |
| --- | --- | --- | --- |
| Public URL | `wozku.com/campaigns/{hash}` | Loads the Wozku landing page: post preview, social proof grid of recent sharers, Share button. Channel-agnostic. | Email placements where social proof helps conversion. |
| Universal Share URL | `wozku.com/share/post/{hash}` | Lightweight share page presenting the channel selector (LinkedIn, Twitter/X, Slack, Facebook, Instagram) and routes to the picked channel. Channel-agnostic. | Multi-channel Contests, and printed collateral where one QR code serves every audience. |
| Channel Ninja URL | `wozku.com/share/{channel}/{hash}` | Direct OAuth to one specific channel. No Wozku landing page in the middle. Under 60 seconds from QR scan to published post. | Channel-pinned placements. |

Five Channel Ninja URL variants today: LinkedIn Ninja URL, Twitter Ninja URL, Slack Ninja URL (Beta), Facebook Ninja URL (Private Beta), Instagram Ninja URL (Private Beta).

### Single-channel vs multi-channel Contests

- **Single-channel Contest.** Pick one channel in Step 2 for every post. Use the Channel Ninja URL on QR codes. Best when the audience is concentrated on one network (a LinkedIn Live event, a Twitter Space, a Slack community event).
- **Multi-channel Contest.** Enable two or more channels per post (or different channels for different posts). Use the Universal Share URL on shared collateral. Best for conferences, trade shows, and internal summits where the audience lives across networks.

The Wozku Score applies uniformly in both modes.

### Scoring across channels

The Wozku Score formula is proprietary. What is disclosed and load-bearing:

- Engagement on the authenticated share counts toward the score (likes, comments, clicks, platform-specific engagement signals).
- The participant's first-degree audience size on the channel they shared to counts toward the score, capped at a threshold.
- The cap is uniform across channels. A participant with 500 LinkedIn connections and 500 Twitter followers is not penalised for being on the smaller channel.

The cap is the positioning moat: it keeps the leaderboard honest about effective amplifiers at every network size and channel. A 300-follower Twitter advocate driving real engagement can out-rank a 10,000-connection executive who posts and leaves.

### When to enable which channels (heuristic, not a rule)

| Channel | Enable if |
| --- | --- |
| LinkedIn | The audience is any B2B decision-maker. The default in B2B ALG. |
| Twitter / X | The event has a live hashtag, the content is time-sensitive, or the audience includes journalists, analysts, or developer-relations targets. |
| Slack | The Contest is internal: employee advocacy programmes, sales kickoffs, customer advisory board amplification. A Slack Ninja URL post lands in a workspace channel, not a personal feed. |
| Facebook | The audience skews toward community-driven verticals: field marketing in regions where Facebook Groups are the professional water cooler, or SMB segments. Private Beta, access gated, plan the request with the account team ahead of the programme. |
| Instagram | The content is visual-first: product launches with strong visual assets, founder-led brand moments, conference recap reels. Demand has come from design, retail, hospitality, and event-marketing segments. Private Beta, access gated. |

Start with the one or two channels where the audience already is; add more as the programme matures.

### Tips

- LinkedIn remains the hero channel in B2B ALG, but the platform has never been LinkedIn-only. Treat channel selection as an audience question, not a product question.
- Use the Universal Share URL for printed collateral. Printing five Channel Ninja URL QRs on one placard is clutter and slows the booth down.
- Use a Channel Ninja URL when the placement is channel-pinned.
- The Wozku Score cap is channel-agnostic. Do not assume a LinkedIn share automatically out-scores a Twitter share.
- Slack (Beta) and Facebook / Instagram (Private Beta) are production-ready but still maturing. Facebook and Instagram are gated on a per-tenant basis; access is granted through the account team.

### FAQ

| Question | Answer |
| --- | --- |
| Can one Contest run on multiple channels at the same time? | Yes. Enable two or more channels per post in Step 2. Participants see the channel selector on the Universal Share URL share page. The leaderboard ranks every share under the same Wozku Score. |
| Does a Twitter share score the same as a LinkedIn share? | The formula is proprietary, but the scoring model is uniform across channels: engagement on the authenticated share plus a capped audience-size component. |
| Which channels are GA, Beta, and Private Beta? | GA: LinkedIn, Twitter / X. Beta: Slack. Private Beta: Facebook, Instagram. Beta and Private Beta channels are production-ready and generate real shares, scores, and leaderboard entries. The labels reflect ongoing stabilisation of the redirect and OAuth paths. Slack (Beta) is available to every tenant; Facebook and Instagram (Private Beta) are gated per tenant through the account team. |
| Is there a Channel Ninja URL for every channel? | Yes: LinkedIn Ninja URL, Twitter Ninja URL, Slack Ninja URL, Facebook Ninja URL, Instagram Ninja URL. Each routes directly to the respective channel's OAuth with no Wozku landing page. |
| Can a Contest switch channels mid-event? | Channels are set per post. A post's channel list cannot be changed after publish without breaking pre-distributed QR codes. For a live mid-event addition, add a new post with the new channel set rather than editing an existing post. |
| Do Beta and Private Beta channels count toward my Shares Quota? | Yes. Every recorded share across every channel counts against the plan's Shares Quota Counter on the dashboard. |
| Is Instagram actually usable for B2B ALG? | Yes. Demand has come from B2B segments adjacent to consumer verticals: design platforms, retail tech, hospitality tech, event marketing. Instagram is visual-first, suiting product launches with strong visual assets, founder-led brand moments, and conference recap content. Instagram is Private Beta, access gated. |
| When does Slack go GA? | Slack is currently Beta and production-ready. Real customers run Slack contests today, scoring is uniform with GA channels, and the Slack Ninja URL is live. The Beta tag indicates ongoing stabilisation work on the OAuth and redirect paths, not feature gaps. GA timing sits on the roadmap; latest status from the account team. Facebook and Instagram follow a similar pattern one tier lower at Private Beta, gated per tenant, with GA on the longer-term roadmap. |
| Can the same contest run across all five channels? | Yes, in any combination including all five at once. Channel selection happens per post in Step 2, so different posts inside the same contest can carry different channel sets. One ranking, one Wozku Score model, one Potential Reach total summed across the channel mix. |
| Why is Instagram in scope for B2B? | Audience drives channel selection, not product category. B2B programmes with creator-economy adjacency see real engagement: developer evangelism with a visual demo culture, design tools, retail tech where the buyer is also a content creator, conference recap reels. Not the default for an enterprise sales event. |

## Ninja URL Pattern - How Direct OAuth Sharing Works

Source: https://wozku.com/kb/10-channels/ninja-url-pattern/

Last updated April 25, 2026.

A **Channel Ninja URL** is the Wozku share pattern that takes a participant straight to a specific channel's OAuth screen with no Wozku landing page in the middle. It is the mechanic that turns a QR scan into a published post in under 60 seconds.

### Verbatim URL pattern template

```
wozku.com/share/{channel}/{hash}
```

### Before you start

- Read the Channels Overview and understand the three URL types: Public URL, Universal Share URL, Channel Ninja URL.
- A contest or campaign created with at least one post.
- Know which channel the QR code or link will be pinned to. A Ninja URL is channel-specific by design.

### The share flow

1. Participant scans the QR code or clicks the link.
2. The scan takes the participant straight to their chosen channel's consent screen. The Wozku app is listed as the requester.
3. On approval, the post publishes to the participant's authenticated account.
4. The participant lands on the Wozku Thank You page with the Campaign's configured post-share state.

The flow skips the Wozku landing page, the channel picker, and any preview-then-confirm loop. The only two screens the participant sees are the channel's own consent screen and the Wozku Thank You page.

### The five variants

| Variant | URL Pattern | Status |
| --- | --- | --- |
| LinkedIn Ninja URL | `wozku.com/share/linkedin/{hash}` | GA |
| Twitter Ninja URL | `wozku.com/share/twitter/{hash}` | GA |
| Slack Ninja URL | `wozku.com/share/slack/{hash}` | Beta |
| Facebook Ninja URL | `wozku.com/share/facebook/{hash}` | Private Beta |
| Instagram Ninja URL | `wozku.com/share/instagram/{hash}` | Private Beta (Business or Creator account required) |

The same post can be fronted by one Universal Share URL for channel-agnostic placements and five Channel Ninja URLs for channel-pinned placements.

### Why direct OAuth matters

The Wozku Score formula rewards engagement on the participant's authenticated feed. That scoring only works if the post is published from the participant's real account under their real network. Screenshotting, copy-pasting, or re-hosting the post on a Wozku-owned intermediary does not count and cannot be scored. Direct OAuth is the mechanic that makes scored, attributable amplification possible at all.

### When to use each URL type

| Placement | Use |
| --- | --- |
| Booth QR for a LinkedIn-focused B2B event | LinkedIn Ninja URL |
| Booth QR for a Twitter Space or live-hashtag event | Twitter Ninja URL |
| Slack workspace event, internal SKO | Slack Ninja URL |
| Facebook Group-driven community launch | Facebook Ninja URL |
| Instagram-focused product or brand moment | Instagram Ninja URL |
| Multi-channel conference, mixed audience | Universal Share URL (channel picker) |
| Email placement, external website embed | Public URL (with social proof) |

Rule of thumb: if the placement is pinned to one channel, pin the URL to that channel. If the placement is channel-agnostic, let the Universal Share URL carry the channel decision.

### Tips

- Channel Ninja URLs are the fastest path to a share but not the only correct choice. If the audience is split across LinkedIn, Twitter, and Instagram, a Universal Share URL on one QR code serves every attendee.
- The hash is content-specific, not channel-specific. The same post hash works across all five Ninja variants. Change the post and the hash changes too; pre-printed QR codes become invalid. Plan the post list before printing collateral.
- Beta and Private Beta variants are production-ready but not behaviourally identical to GA. Slack (Beta), Facebook (Private Beta), and Instagram (Private Beta) OAuth flows have platform-specific consent screens and permission models. Expect slightly higher drop-off on first-OAuth than LinkedIn or Twitter.
- The channel identifier in the URL slug is stable. External systems can rely on the `/share/{channel}/{hash}` pattern to classify the channel without parsing the destination.
- Returning participants complete shares faster. Day 2 of a conference typically sees sub-20-second share times once a participant has authorised Wozku on the channel once.

### FAQ

| Question | Answer |
| --- | --- |
| Why is there no Wozku landing page in the Ninja URL flow? | Engineered for speed at live events. Every intermediate screen reduces booth throughput. Direct OAuth removes the channel-picker step because the channel is already encoded in the URL. |
| Can a single QR code serve multiple channels? | Yes, but use the Universal Share URL for that placement. A Channel Ninja URL is single-channel by design. |
| Do Beta and Private Beta channel Ninja URLs work the same as GA ones? | The URL pattern, hash handling, and redirect model are identical. The only differences are the OAuth consent screens (each platform controls its own) and ongoing stabilisation work on Beta and Private Beta redirect paths. Shares publish, score, and appear on the leaderboard on every channel. |
| What happens if the participant declines OAuth consent? | The participant is returned to the Wozku post page with no share recorded: no score, no leaderboard entry, no Shares Quota deduction. The flow is fail-safe. |
| Can I preview the Ninja URL behaviour without running an event? | Yes. Open the Links & QR Codes modal on any live post, copy the Ninja URL for the channel in scope, and open it in a browser. Wozku's admin preview path shows the same OAuth redirect the participant will see. |
| Does a Ninja URL carry the Redirection URL configured on the post? | Yes. Post-level Redirection URL applies on every URL variant: Public, Universal Share, and Ninja. The landing destination after the Thank You is identical across all three. |
| Is there a rate limit on Ninja URL hits? | Booth-scale volumes are well within normal operating range. For a coordinated burst at meaningful scale, contact Wozku support in advance so capacity can be verified. |
| What permissions does Wozku request and why does the participant grant them? | The OAuth flow asks for the minimum permissions needed to publish on the participant's behalf: enough to post the share to their authenticated feed and to read the engagement that share earns afterwards, nothing more. The consent screen is shown by the channel itself (LinkedIn, Twitter, Slack, Facebook, or Instagram) in the channel's own UI, not a Wozku-skinned version, so permissions, wording, and design are exactly what a participant would see granting any other third-party app access. Participants grant it because they get something back: leaderboard standing, often with a reward attached (a coupon, a draw entry, a points threshold). Permissions can be revoked at any time from the channel's own app settings; Wozku does not control the consent state, the channel does. |

## LinkedIn Channel Reference

Source: https://wozku.com/kb/10-channels/linkedin-channel/

Last updated April 25, 2026.

LinkedIn is the hero channel for Wozku. The platform launched on LinkedIn, the LinkedIn Ninja URL is the most battle-tested of the five variants, and the majority of B2B advocacy programmes run LinkedIn as the default channel.

### Before you start

- A contest or campaign created with LinkedIn enabled on at least one post (Step 2 of the wizard).
- Participants do not need a LinkedIn Premium account. A free personal LinkedIn account is sufficient to authenticate and share.

### Channel status and identifiers

| Property | Value |
| --- | --- |
| Status | GA |
| Ninja URL pattern | `wozku.com/share/linkedin/{hash}` |
| Auth app | Wozku LinkedIn App (listed on the consent screen as *Wozku*) |
| Target object | Personal LinkedIn profile feed |

LinkedIn is the only channel where the participant's **first-degree connections network** is the sole audience surface. There is no group routing, no page-level share, and no third-party feed. Every Wozku LinkedIn share lands on the participant's personal profile timeline.

### What publishes on a LinkedIn share

- The post copy configured in Step 2 (or the participant's own copy if UGC is enabled).
- The post image (1200 x 628 px recommended) or an embedded LinkedIn post URL.
- Any LinkedIn @mentions configured on the post or contest level.
- A trailing link only if the post copy includes one; Wozku does not auto-append a tracking link.

The share appears on the participant's profile as a standard LinkedIn feed post, indistinguishable in format from any other LinkedIn post the participant writes natively.

### Engagement signals the scoring model reads

The Wozku Score reads three LinkedIn-reported engagement signals on each authenticated share:

- **Reactions** (likes, celebrates, supports, loves, insightful, curious).
- **Comments**.
- **Link clicks** (when a link is present in the post copy).

Signals are read from LinkedIn after the share is authenticated. Engagement continues to accrue for the life of the post; the leaderboard refreshes at the interval configured in Contest Settings.

Shares, views, and impressions are **not** scoring inputs. LinkedIn's impression data is not exposed at the per-share granularity required for per-participant scoring.

### The audience-size cap on LinkedIn

The audience-size component is capped uniformly across all channels. On LinkedIn, the cap keeps executives with large first-degree networks from dominating the leaderboard while advocates with smaller, tighter networks still have a real shot at the top. A field marketer running a booth contest with 150 mid-network participants typically out-performs a scripted campaign with 20 senior executives posting.

### Consent behaviour

| Situation | Behaviour |
| --- | --- |
| First share per participant | LinkedIn consent screen appears with the Wozku app listed. |
| Subsequent shares | Consent auto-progresses once the participant has authorised Wozku on LinkedIn before. |
| Revoked consent | If a participant revokes Wozku app access in LinkedIn's third-party app settings, the next share triggers a fresh consent prompt. |
| Expired sessions | Re-authentication happens silently with no user-visible difference. |

### Image requirements

| Attribute | Recommended | Accepted |
| --- | --- | --- |
| Dimensions | 1200 x 628 px | Any aspect ratio supported by LinkedIn for feed-post images |
| Format | JPG, PNG | JPG, PNG, WEBP, GIF |
| Max file size | Under 5 MB | LinkedIn enforces its own platform limits |

Wozku optimises uploaded images for LinkedIn's feed renderer. Images outside the recommended aspect ratio display correctly but may be cropped on mobile.

### Embed Code alternative

Instead of an image, a post can carry an **Embed Code** referencing an existing LinkedIn post (the native LinkedIn embed URL). When a participant shares an Embed Code post, they reshare the referenced LinkedIn post with the configured post copy as their own commentary.

Use Embed Code when:

- The original content is published from a company page and advocates should amplify it natively.
- The post is video, carousel, or a format that benefits from native LinkedIn rendering.
- Attribution should flow to the original author (reshare signals stay intact).

### Tips

- LinkedIn is the default; treat every other channel as additive. For most B2B ALG programmes, a LinkedIn-only Contest will out-perform a multi-channel Contest with thin LinkedIn support.
- Pin the LinkedIn Ninja URL on LinkedIn-focused placements: LinkedIn Live events, webinar replay slides, booth signage at B2B conferences.
- Image-based posts out-perform text-only posts on LinkedIn's current ranking model. This is LinkedIn platform behaviour, not Wozku scoring.
- @Mentions earn notification real estate. A mentioned company page receives a LinkedIn notification on every share, which is why global product launches pair @mentions with Hold & Fire timing.
- Revoked Wozku app access is silent to the admin. A participant who revoked access after scoring high will fail on re-share attempts. Surface this in booth-staff training if the event spans multiple days.

### FAQ

| Question | Answer |
| --- | --- |
| What does Wozku ask for on the LinkedIn consent screen? | Only the minimum permissions needed to publish a single post to the authenticated participant's LinkedIn profile feed and read the engagement signals used for scoring. Wozku does not request access to Messaging or the ability to modify profile data. |
| Does Wozku post on behalf of the participant without consent? | No. Every LinkedIn share is triggered by the participant's explicit action after approving Wozku on the LinkedIn consent screen. A share that publishes silently in the background is a failure state. |
| Can a participant share the same post twice on LinkedIn? | No. Wozku enforces a one-share-per-post-per-participant rule on LinkedIn, regardless of whether the attempt comes through a Ninja URL, the Universal Share URL, or directly. |
| Does Wozku support LinkedIn company page sharing instead of personal profile? | Company page sharing is not in scope for the current GA flow. Shares go to the authenticated participant's personal profile feed. Company page amplification is available through the Embed Code pattern, where a company-page post is the underlying content and participants reshare it from their personal profiles. |
| What happens if LinkedIn slows down a burst of shares? | Wozku queues shares during peak burst moments and retries on LinkedIn's terms. The participant sees a "share queued" confirmation and the post publishes within minutes. The leaderboard reflects the publish time, not the queue time. |
| Does a LinkedIn share get removed from the leaderboard if the participant deletes the post? | No. The Wozku Score is calculated on engagement observed up to the refresh interval. A deleted post stops accruing new engagement, but prior engagement remains. Admins can manually remove participants or shares from the leaderboard if required. |

## Twitter / X Channel Reference

Source: https://wozku.com/kb/10-channels/twitter-channel/

Last updated April 25, 2026.

Twitter / X is Wozku's second GA channel and the platform of choice for time-sensitive, hashtag-driven, and real-time event amplification.

### Before you start

- A contest or campaign created with Twitter enabled on at least one post (Step 2 of the wizard).
- Participants need a standard Twitter / X account. A paid subscription (X Premium / Blue) is not required to authenticate and share.

### Channel status and identifiers

| Property | Value |
| --- | --- |
| Status | GA |
| Ninja URL pattern | `wozku.com/share/twitter/{hash}` |
| Auth app | Wozku Twitter App (listed on the consent screen as *Wozku*) |
| Target object | Participant's public Twitter timeline |

Twitter / X on Wozku is a single-surface channel: every share publishes to the authenticated participant's public timeline. There are no lists, no direct-message surfaces, and no protected-account behaviour within the Wozku flow.

### What publishes on a Twitter share

- The post copy configured in Step 2, truncated to Twitter's character limit if needed.
- The post image (landscape format recommended for timeline preview) or no image.
- Hashtags, @mentions, and links inline in the post copy.
- A single attached image per tweet; Twitter's multi-image composer is not used on Wozku shares.

Wozku does not auto-generate a tweet thread from a long post. If the content exceeds Twitter's character limit, the platform truncates and the participant sees a warning on the admin preview. Author post copy for Twitter specifically, not a re-use of LinkedIn copy.

### Engagement signals the scoring model reads

Four Twitter-reported engagement signals on each authenticated share:

- **Likes**.
- **Retweets**.
- **Replies**.
- **Quote tweets**.

Bookmark counts and impression estimates appear in participant-level reporting but are **not** scoring inputs. The leaderboard refreshes on the interval configured in Contest Settings.

### The audience-size cap on Twitter

The audience-size component reads the authenticated participant's **follower count at share time**, capped uniformly across channels. A participant with 800 Twitter followers is not penalised for being below LinkedIn-typical network sizes; the cap floors the comparison. A 300-follower developer with strong engagement density out-ranks a 100,000-follower celebrity executive who posts and walks away.

### When Twitter out-performs LinkedIn

- **Live event broadcasting.** Keynotes, product launches, and panel sessions with a live hashtag. Twitter's real-time surface compounds when many participants share within the same 30 to 60 minute window.
- **Developer-relations and community marketing.** The developer and open-source audience lives on Twitter.
- **Journalist, analyst, and influencer amplification.** Industry journalists, research analysts, and category influencers read Twitter first.

For standard B2B events without a live hashtag or a DevRel or analyst audience, LinkedIn remains the default.

### Consent behaviour

| Situation | Behaviour |
| --- | --- |
| First share per participant | Twitter consent screen appears with the Wozku app listed. |
| Subsequent shares | Consent auto-progresses once authorised before. Returning participants authenticate in a single tap. |
| Revoked consent | Revoking Wozku app access in Twitter's connected-app settings triggers a fresh consent prompt on the next share. |
| Protected accounts | A participant with a protected (private) Twitter account can still share, but engagement signals are visible only to approved followers, reducing the addressable engagement pool. |

### Character limits and post composition

| Attribute | Value |
| --- | --- |
| Standard character limit | 280 characters per tweet |
| X Premium character limit | Up to 25,000 (the share still publishes within the 280 limit regardless of the participant's subscription) |
| Link handling | All links count toward the character limit; Twitter does not shorten them in the Wozku payload |
| Hashtag behaviour | Inline hashtags appear as clickable Twitter links |
| Media support | One image per tweet, JPG or PNG, under 5 MB |

Compose post copy with the 280-character limit as the design constraint: a hook in the first 80 characters, the live-event hashtag, and a single call to action.

### Tips

- Twitter is where live moments compound. Pair a Twitter Ninja URL with a Hold & Fire burst timed to the keynote opening.
- Hashtag discipline: exactly one event hashtag per post. Two reads as noise, three reads as spam, and the hashtag should match what the conference host is already using.
- Twitter shares do not re-use LinkedIn copy. Author Twitter copy as a native tweet.
- Monitor the reply stream during live events. Replies accrue to the Wozku Score and are where real conversation happens.
- X Premium does not change the Wozku share payload. The payload is capped at standard tweet length for consistency across all participants.

### FAQ

| Question | Answer |
| --- | --- |
| What does Wozku ask for on the Twitter / X consent screen? | Only the minimum permissions needed to publish a single post to the authenticated participant's Twitter timeline, read their public user profile for scoring inputs, and keep returning shares working. Wozku does not request permission to read direct messages, modify follow relationships, or access lists. |
| Does Wozku support Twitter threads? | Not in the current GA flow. Each Wozku Twitter share publishes as a single standalone tweet. If post copy exceeds 280 characters, Wozku truncates and warns on the admin preview. |
| Is X Premium required for participants to share? | No. A free standard Twitter / X account is sufficient. |
| Do retweets of a Wozku-authored share score for the original participant? | No. The Wozku Score tracks engagement on the participant's authenticated share. A third party retweeting counts the retweet as an engagement signal on that share but does not create a separate scored share for the retweeter. |
| Can a participant with a protected (private) Twitter account participate? | Yes, but engagement signals are visible only to approved followers. The share publishes, the leaderboard records it, and the Wozku Score calculates normally, but reach is limited to the approved-follower circle. Consider a second public channel (LinkedIn) as the primary share surface. |
| Does Wozku support image carousels or video on Twitter? | Single image only in the current GA flow. Embedded video URLs in the post copy appear as standard Twitter link cards if Twitter's own unfurl service picks them up. |

## Slack Channel Reference (Beta)

Source: https://wozku.com/kb/10-channels/slack-channel/

Last updated April 22, 2026.

Slack is Wozku's internal-advocacy channel. Where LinkedIn and Twitter are outbound channels to external networks, Slack routes shares into an organisation's own workspace: team channels, community channels, customer Slack Connect channels, and cross-functional project channels.

### Before you start

- A contest or campaign created with Slack enabled on at least one post (Step 2 of the wizard).
- The organisation has a Slack workspace and an admin who can authorise the Wozku Slack app on first install.
- Beta status: Slack is Beta on Wozku. The channel is production-ready and shares are real, scored, and leaderboard-visible. OAuth and redirect paths are still being stabilised across Slack's multi-workspace edge cases.

### Channel status and identifiers

| Property | Value |
| --- | --- |
| Status | Beta |
| Ninja URL pattern | `wozku.com/share/slack/{hash}` |
| Auth app | Wozku Slack App (installed per-workspace by a workspace admin) |
| Target object | A channel in the participant's Slack workspace, selected at share time |

Slack differs structurally: the target is a channel, not a personal feed.

### What publishes on a Slack share

- The post copy configured in Step 2, shown as a Slack message with mrkdwn formatting (bold, italic, links).
- The post image (attached as a Slack file upload or unfurled from a hosted URL).
- A header block with the Wozku Contest context, including campaign name and an optional CTA link.
- The post appears authored by the participant's Slack user identity, not a bot account.

Slack messages do not enforce the same character limits as Twitter or the feed-post structure of LinkedIn. Wozku formats the post copy into a clean Slack block so it reads natively in the target channel.

### Engagement signals the scoring model reads

Three Slack-reported engagement signals on each authenticated share:

- **Reactions** (emoji reactions added by channel members to the shared message).
- **Replies** (messages in the thread started by the shared message).
- **Reply participants** (unique users replying in the thread).

Views, channel membership counts, and message forwarding do **not** score.

### The audience-size cap on Slack

The audience-size component reads the **membership count of the channel the participant shared to**, capped uniformly across channels. A share to a 500-member company-wide channel is weighted higher than a share to a 6-member private project channel, up to the cap. Above the cap, additional channel size stops adding audience credit. A participant sharing to a 50-member engineering channel with high engagement can out-rank a participant sharing to a 500-member all-hands channel that sees no reactions.

### Workspace OAuth behaviour

- **First-install is workspace-scoped, not user-scoped.** The first person from a workspace who shares triggers a Slack admin approval flow. Once the Wozku Slack app is installed on the workspace, subsequent participants authenticate as individual users without re-triggering admin approval.
- **Per-user consent after workspace install.** Each participant's first share still requires their individual Slack OAuth consent under the installed app. Subsequent shares from the same participant auto-progress.
- Budget extra onboarding time for the first Wozku Slack Contest at an organisation. The admin approval is typically a **24 to 48 hour lag** from the first participant's attempt. Once approved, every subsequent Contest on that workspace skips this step.

### Channel selection at share time

When a participant shares via the Slack Ninja URL, the OAuth flow includes a channel selector. The participant picks which channel receives the post. Private channels the participant is a member of are selectable; private channels they have no membership in are not. This is the only Wozku channel where the destination within the channel (the specific Slack channel within the workspace) is chosen at share time.

### Slack-specific use cases

- **Sales kickoff (SKO) amplification.** Every AE shares product-launch content into their regional Slack channels; the leaderboard ranks internal amplification across regions.
- **Customer Advisory Board (CAB) activation.** Participants share into Slack Connect channels shared with customer organisations.
- **Internal product-launch rollout.** Coordinate a Hold & Fire burst into #general, #launches, and product-team channels simultaneously.
- **Community programme activity.** For organisations running external Slack communities (developer communities, customer communities), a Slack Ninja URL places shares into the right community channel with scored engagement.

### Tips

- Slack is internal. Treat the programme design as internal marketing, not external advocacy.
- The workspace admin approval is the slowest step. Confirm the Slack admin is onboard before announcing the Contest.
- Pair Slack with LinkedIn for a dual-motion programme. Two distinct leaderboards can be configured per channel if internal-vs-external competition should be ranked separately.
- Private-channel shares have private scoring implications. A share into a private channel still counts toward the Wozku Score, but admins without access cannot verify engagement organically.
- Beta caveats: the Slack redirect and OAuth path are stabilising. If a Slack share fails intermittently during a live event, the fallback is the Universal Share URL.

### FAQ

| Question | Answer |
| --- | --- |
| What does Wozku ask for on the Slack consent screen? | Only the minimum permissions needed to post a message as the authenticated participant, list the channels the participant can post to, and read the participant's user profile for scoring inputs. Wozku does not request permission to read message history, join channels, or access direct messages. |
| Why does the first Slack share at an organisation require admin approval? | Slack's OAuth model installs apps at the workspace level first and per-user second. The workspace admin approves the Wozku Slack app once; individual participants then authenticate under that installation. This is Slack platform behaviour, not a Wozku choice. |
| Can a participant share the same post to multiple Slack channels? | No. Wozku enforces the one-share-per-post-per-participant rule across every channel including Slack. To amplify to multiple Slack channels, share different posts from the Contest to each channel. |
| Does a Slack share count toward my plan's Shares Quota? | Yes. Every recorded share across every channel, GA or Beta, counts against the plan's Shares Quota Counter. |
| What happens if the Wozku Slack app is uninstalled mid-event? | All subsequent Slack shares fail with a "Slack app not installed" error. Shares already published stay on the leaderboard with their existing scores. Re-install via the Slack workspace admin to resume. |
| Can I restrict which Slack channels a participant can share to? | Not within the current Beta flow. The channel selector shows every channel the participant is a member of. Channel-level restrictions are a product roadmap item for Slack GA. |
| Does Slack support the Embed Code pattern (resharing an existing message)? | Not in the current Beta flow. Slack shares are original messages composed from the Wozku post payload. The Embed Code pattern is LinkedIn-specific. |

## Facebook Channel Reference (Private Beta)

Source: https://wozku.com/kb/10-channels/facebook-channel/

Last updated April 22, 2026.

Note: the published article currently contains only the introduction; the detailed body sections (OAuth scope, post types, engagement signals, segments) are not present in the page source as fetched.

Facebook is Wozku's community-and-group channel. For most pure-B2B SaaS programmes, Facebook is not the default. For organisations whose decision-makers cluster in Facebook Groups (SMB services, field marketing in specific regions, community-led brands, vertical trade associations), Facebook is a legitimate amplification surface. The page is stated to be the reference for how the Facebook channel behaves on Wozku: OAuth scope, post types, engagement signals, and the B2B segments where Facebook earns its seat at the table.

Facts confirmed from the Channels Overview and Ninja URL Pattern articles:

| Property | Value |
| --- | --- |
| Status | Private Beta (access gated per tenant; contact the account team to enable) |
| Ninja URL pattern | `wozku.com/share/facebook/{hash}` |
| Primary B2B use case | Mixed B2B / B2C. Community-driven brands and verticals where decision-makers cluster in Facebook groups. |
| Enable if | The audience skews toward community-driven verticals: field marketing in regions where Facebook Groups are the professional water cooler, or SMB segments. |
| Placement fit | Facebook Group-driven community launch. |
| Shares Quota | Counts against the plan's Shares Quota Counter like every other channel. |
| Compliance posture | Same data discipline as GA channels; the Private Beta label refers to product stabilisation, not a weaker compliance position. |
| Account-level enablement | Only the account Admin role can enable or disable Beta channels (Slack, Facebook, Instagram). |

## Instagram Channel Reference (Private Beta)

Source: https://wozku.com/kb/10-channels/instagram-channel/

Last updated April 22, 2026.

Note: the published article currently contains only the introduction; the detailed body sections (Business account requirements, post types, engagement signals, segments) are not present in the page source as fetched.

Instagram is Wozku's visual-first channel. Product launches with strong visual assets, founder-led brand moments, conference recap reels, and design-forward B2B categories are the use cases that have driven customer demand for Instagram on Wozku. Instagram is a Beta channel best suited to creator-economy and consumer-adjacent B2B programmes; it is not a default for enterprise sales events. The page is stated to be the reference for Business account requirements, post types, engagement signals, and the B2B segments where Instagram belongs in the channel mix.

Facts confirmed from the Channels Overview and Ninja URL Pattern articles:

| Property | Value |
| --- | --- |
| Status | Private Beta (access gated per tenant; contact the account team to enable) |
| Ninja URL pattern | `wozku.com/share/instagram/{hash}` |
| Account requirement | Business or Creator account required |
| Primary B2B use case | Visual-first brand moments: product launches, founder-led content, conference recap reels. Requested by customers serving design, retail, and consumer-adjacent B2B. |
| Enable if | The content is visual-first and the audience is genuinely on the channel. Demand has come from design, retail, hospitality, and event-marketing segments; also developer evangelism with a visual demo culture and retail tech where the buyer is also a content creator. |
| Placement fit | Instagram-focused product or brand moment. |
| Shares Quota | Counts against the plan's Shares Quota Counter like every other channel. |
| Compliance posture | Same data discipline as GA channels; the Private Beta label refers to product stabilisation, not a weaker compliance position. |
| Account-level enablement | Only the account Admin role can enable or disable Beta channels (Slack, Facebook, Instagram). |
