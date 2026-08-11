# 05 Additional Settings

The Contest-only differentiation layer: Coupons, Forms, Forms Submissions, Quiz, Booths, and the incentive-design strategy above them.
Source: https://wozku.com/kb/05-additional-settings/

## Admin URL quick reference

| Feature | URL |
| --- | --- |
| Coupons | `/admin/campaigns/{ID}/importcoupons` (`/coupons` returns 404) |
| Forms | `/admin/campaigns/{ID}/forms` |
| Form submissions | `/admin/campaigns/{ID}/formsubmissions` |
| Form submissions (per form) | `/admin/campaigns/{ID}/forms?submissions_form={formID}` |
| Quiz | `/admin/campaigns/{ID}/quizzes` (`/quiz` may not resolve) |
| Quiz public URL | `wozku.com/quiz/{slug}` |
| Booths | `/admin/campaigns/{ID}/importbooths` (`/booths` returns 404) |
| Booths CSV sample | `https://wozku.com/assets/samples/wozku-import-booths-sample.csv` |
| Coupons CSV sample | `wozku-import-coupons-sample.csv` (via **Download Sample**) |

## Additional Settings - The Contest Differentiation Layer
Source: https://wozku.com/kb/05-additional-settings/additional-settings-overview/

Last updated April 25, 2026.

Additional Settings is the fourth-tab layer that turns a Contest from a sharing mechanic into a full event programme. All four tabs are Contest-only; Campaigns do not expose them. The sidebar link sits below the step navigator and is reachable at any point after Step 1 is saved.

### Prerequisites

- Step 1 of the Contest is completed and saved. The Contest must exist before any Additional Settings tab can be used.
- You are inside a Contest. Campaigns do not expose Additional Settings.
- Plan which tabs you need before the event starts. Coupon pool depletion, quiz Draft status, and missing booth data are the three most common day-of failures.

### The four tabs

| Tab | URL | What it does |
| --- | --- | --- |
| **Coupons** | `/admin/campaigns/{ID}/importcoupons` | Import prize codes (gift cards, discount codes, event perks). Distributed to participants automatically on share across every channel. |
| **Forms** | `/admin/campaigns/{ID}/forms` | Build KYC / registration forms for lead capture. Assigned to a Quiz to gate the participant flow. Also powers **LeadSpark** when used as a global Contest Form. |
| **Quiz** | `/admin/campaigns/{ID}/quizzes` | Build assessments that qualify participants before sharing or educate and reward them after. Each quiz carries its own public URL and can sit at either point in the flow. |
| **Booths** | `/admin/campaigns/{ID}/importbooths` | Map physical booth numbers to sponsor brand names for per-sponsor attribution at multi-sponsor events. Attribution runs at share time across every channel. |

### When to set up each tab

All four tabs are reachable before or after **Go Live**, but earlier is better. Attribution and distribution apply at the moment of share; data from before setup is not backfilled.

| Tab | Before Go Live requirement |
| --- | --- |
| **Coupons** | Load the full pool before the first share. An empty pool at share time means no code is delivered. |
| **Forms** | Build and preview the form before assigning it to a Quiz. Forms do not run standalone in a Contest. |
| **Quiz** | Build, configure, and click **Publish**. A quiz in Draft is invisible to participants. |
| **Booths** | Import before the doors open. Booth attribution is applied at share time and is not retroactive. |

### Scenario to tab mapping

| Scenario | Use |
| --- | --- |
| Give prize codes to the first N sharers | **Coupons** - First N Distribution |
| Random prize draw across all sharers | **Coupons** - Random Distribution |
| Capture lead data before a quiz | **Forms** (assigned to a Quiz via KYC dropdown) |
| Lead-capture-first flow with sharing as the reward | **Forms** as a global Contest Form (**LeadSpark**) |
| Gate sharing behind a product knowledge check | **Quiz** placed pre-share |
| Educate or reward participants after they share | **Quiz** placed post-share |
| Multiple sponsors at different booths | **Booths** - import your booth / sponsor CSV |
| QR code on the live screen opens a form-gated quiz | **Forms** + **Quiz**, then set **Manage QR Code** to Form in Contest Settings |

### Scope

Everything created in Additional Settings belongs to this specific Contest. Forms, Quizzes, Coupons, and Booths cannot be copied or reused across other campaigns. Build them fresh for each Contest.

### Tips

- Additional Settings is the differentiation layer. Layering Coupons, a Quiz, and a Form on top of a sharing mechanic turns it into a lead qualification programme with advocacy built in.
- Set up all relevant tabs before **Go Live**.
- Forms must be assigned to a Quiz to appear in the participant flow: create the Form first, then assign it inside Quiz Settings under **KYC / Registration Form**.
- A quiz in Draft is invisible to participants. Always click **Publish** before the event.
- Coupon codes are distributed at the moment of share. Import more codes than you expect to need.
- Booth attribution is applied at share time across every channel. A participant who scans at Booth 14 and shares on Twitter still attributes to Booth 14's sponsor.

### FAQ

| Question | Answer |
| --- | --- |
| Are Additional Settings available in Campaigns? | No. **Coupons**, **Forms**, **Quiz**, and **Booths** only appear inside Contests. |
| Can I set up Additional Settings after the contest is live? | Yes, any tab is reachable after Step 1 is saved, including after **Go Live**. Coupons and Booths apply only to shares after setup. Forms and Quizzes do not retroactively gate participants who already shared. |
| Do Additional Settings work across all channels? | Yes. Coupon delivery, form gates, quiz gates, and booth attribution apply uniformly on LinkedIn, Twitter / X, Slack, Facebook, and Instagram. |
| Can I reuse a Form or Quiz from a previous contest? | No. Forms, Quizzes, Coupons, and Booths are campaign-scoped and do not copy or transfer. |
| Why do `/coupons` and `/booths` return 404? | The correct URL suffixes are `/importcoupons` and `/importbooths`. |
| What happens if I go live without importing coupons? | Participants who share receive no coupon code. Codes are distributed at the moment of share; an empty pool means nothing is delivered. |
| Do I need to use all four tabs? | No. A single-sponsor event with no quiz or lead capture can skip Forms, Quiz, and Booths entirely and run Coupons only. |

## Set Up and Distribute Coupons in a Contest
Source: https://wozku.com/kb/05-additional-settings/coupons/

Last updated April 25, 2026.

Coupons are prize codes handed out automatically the moment a participant shares, on LinkedIn, Twitter, Slack, Facebook, or Instagram, whichever channel they used. Wozku delivers the code on the thank-you screen the instant the share lands. Contest-only feature under Additional Settings.

### Prerequisites

- The Contest is created and Step 1 is saved.
- Coupon codes are ready: gift card codes, discount codes, promo codes, or content unlock links.
- Codes are prepared in CSV format using the required columns.
- Distribution type decided before importing: First N or Random.

### Part 1: Import coupon codes

URL: `/admin/campaigns/{ID}/importcoupons`. The URL `/coupons` returns a 404. All codes import via CSV; there is no manual entry interface.

1. Click **Download Sample** to get the required CSV format (`wozku-import-coupons-sample.csv`).
2. Populate the CSV with coupon codes.
3. Click **Choose File** and select the populated CSV.
4. Click **Import** to upload the codes.

Once a coupon code is delivered to a participant on the thank-you screen it cannot be recalled. Test a small import pool with a dry-run share before loading the full event inventory.

### Part 2: Configure distribution settings

| Field | Type | Options / Default | Description |
| --- | --- | --- | --- |
| **Distribution Type** | Radio button | `firstndistri` = **First N distribution** | Codes go to the first N participants who share, in order of share time |
| | | `randomdistri` = **Random distribution** | Codes assigned randomly from the pool to any sharer |
| **Thank You Message** | Text input | Default: `"You got a coupon"` | Message shown on screen when the participant receives a code |
| **Email** | Email input | (your email address) | Receives coupon notification emails when codes are distributed |

Click **Save** to apply.

### Delivery mechanics

Codes appear immediately on the post thank-you screen right after a share completes, regardless of channel. A share on LinkedIn and a share on Twitter trigger the same delivery mechanic against the same pool. Flow: Share, see leaderboard, receive coupon code instantly.

Delivery is instant and admin-free: no delay between the share and the code, no manual approval step, no follow-up email to the participant. The **Email** field notifies the admin when codes run low; it does not send anything to the participant.

### Distribution type comparison

| Type | Behaviour | Best when |
| --- | --- | --- |
| **First N Distribution** | Only the first N sharers across all channels get a reward, in order of share time from the same pool | Number of coupons is smaller than expected participant count; scarcity is the mechanic. Announce the limit from the stage at Go Live. |
| **Random Distribution** | Every sharer has an equal chance regardless of arrival time or channel | Longer events or programmes where sustained engagement matters more than a front-loaded burst |

### Use cases

| Use case | Shape |
| --- | --- |
| Event swag unlock | "First 20 to share get a branded kit code." Drives explosive early sharing. Print the scarcity message on the leaderboard screen. |
| Premium content unlock | Share the post and receive a PDF download link or a software trial code. Strong fit for product launches and tech events. |
| Vendor voucher | "Share this session recap and get 20% off your next order with [Partner Brand]." Multi-sponsor events can pair specific coupon pools with specific booths using **Booths** for per-sponsor delivery tracking. |
| Post-event follow-through | "Share this recap and get 30% off our next event." Extends engagement beyond the booth. |

### Tips

- Coupons exist so the booth team is not a vending machine. The participant gets the code on-screen the moment they share; the admin gets a notification email.
- Import the full coupon inventory before **Go Live**. Re-importing mid-event is possible but adds operational risk.
- The **Thank You Message** is the only in-product communication to the recipient. State what the code is for, where to redeem it, and any expiry. The default "You got a coupon" is a placeholder.
- First N Distribution requires a realistic sense of audience size. Setting N = 5 at a 200-person event exhausts the pool in minutes.
- Random Distribution does not guarantee every participant gets a code.
- Coupon delivery is channel-agnostic.

### FAQ

| Question | Answer |
| --- | --- |
| When exactly does a participant receive their coupon code? | Immediately on the post thank-you screen after the share completes, regardless of channel. No delay, no admin action. |
| What if the pool is exhausted? | They receive no code and see the standard thank-you screen. There is no channel-specific pool; all shares draw from the same pool. |
| Can I import more codes after the contest goes live? | Yes. Re-import at any time. New codes add to the existing pool and are available immediately for the next share. |
| Difference between First N and Random? | First N gives codes to the first N sharers in order of share time across all channels. Random assigns codes randomly to any sharer. |
| Can I change the distribution type after the contest is live? | Yes. Update the selection and click **Save**. Changes apply to future shares, not retroactively. |
| What should the Thank You Message contain? | What the code is for, where to redeem it, any expiry information. |
| Does coupon delivery work on Beta channels? | Yes. Beta channel shares draw from the same pool under the same distribution logic as LinkedIn and Twitter. |

## Build and Configure Lead Capture Forms
Source: https://wozku.com/kb/05-additional-settings/forms/

Last updated April 25, 2026.

Forms are the lead capture layer inside a Contest. They collect KYC and registration data (name, email, company, designation) and gate the participant flow before or during a quiz. The same form works identically whether the participant arrived via a **LinkedIn Ninja URL**, a **Twitter Ninja URL**, or the **Universal Share URL**.

The Forms tab is the Contest-scoped variant that gates a quiz flow within an existing Contest. For the lead-capture-first flow where the form is the front door and the share is the reward, use **LeadSpark**.

### Prerequisites

- The Contest is created and Step 1 is saved.
- A Form must be assigned to a Quiz to appear in the participant flow. Forms do not run standalone inside a Contest.
- For the QR code to route directly to a form-gated quiz, set that in Contest Settings under **Manage QR Code** after the form is created.

### Forms list

URL: `/admin/campaigns/{ID}/forms`

- Columns: Form Name | Fields (count) | Submissions | Created | Actions
- Actions per form: View submissions | Edit form | Delete form

### Create a new form

1. Click **Create New Form**.
2. Enter a **Form Name** (internal label, not shown to participants).
3. Choose a **Display Mode**.
4. Configure fields.
5. Click **Save Form**.

### Display modes

| Mode | Description | Default |
| --- | --- | --- |
| **STRICT** | All fields presented at once, traditional single-page form layout | Yes |
| **CONVERSATIONAL** | Fields shown one at a time in a guided, chat-style flow | No |

STRICT for fast, familiar completion (busy booth environments where throughput matters). CONVERSATIONAL for longer qualification flows or digital campaigns where a guided experience improves completion rates.

### Default fields

| Order | Label | Type | Notes |
| --- | --- | --- | --- |
| 1 | First Name | TEXT | Placeholder: "Alex" |
| 2 | Last Name | TEXT | Placeholder: "Wozku" |
| 3 | Email ID (Official) | EMAIL | Placeholder: "alex@company.com" |
| 4 | Phone Number | PHONE | Two-part field: country code dropdown (full international list) + number input |
| 5 | Designation | TEXT | Placeholder: "Chief Marketing Officer" |
| 6 | Company | TEXT | Placeholder: "Wozku AI" |
| 7 | Submit Response | SUBMIT BUTTON | Button label, can be renamed |

Each field row carries a label input, a type badge, and action buttons (move up, move down, required toggle, delete, add field below).

### Custom field types

Click **+ Add New Field** to open the field type picker. Three categories.

CORE fields:

| Type | Description |
| --- | --- |
| Short Text | Single-line text input |
| Long Text | Multi-line textarea |
| Email | Email address input with validation |
| Phone | Phone number input |
| Number | Numeric input |

CHOICE fields:

| Type | Description |
| --- | --- |
| Dropdown | Select from a dropdown list |
| Single Choice | Radio buttons, pick one option |
| Multiple Choice | Checkboxes, pick multiple options |
| Yes / No | Binary toggle field |

ADVANCED fields:

| Type | Description |
| --- | --- |
| Rating | Star or numeric rating input |
| Date | Date picker |
| Date & Time | Date + time picker |
| File Upload | Allow participants to attach a file |
| Website / URL | URL input with validation |
| GDPR / Compliance | Consent checkbox with custom text |
| Heading | Section label / display text (non-input element) |
| Divider | Visual separator line (non-input element) |
| Button | Custom action button (non-input element) |

### How forms work in a Contest

- Forms must be **assigned to a Quiz** via the **KYC / Registration Form** dropdown in Quiz Settings. Default is `-- None (Disabled) --`.
- When assigned, the form appears as a **hard gate before the first quiz question**. Participants see: "Please fill in your details to continue." No skip.
- The **Form** option in **Manage QR Code** (Contest Settings) only appears after at least one form exists for the campaign.
- Forms are campaign-scoped; they cannot be shared or reused across different campaigns.
- The form experience is identical across channels.

### Participant flow with a form gate

1. Participant scans QR code, quiz landing page loads.
2. **Form gate**: participant fills in required fields and submits.
3. Quiz questions begin.
4. Review page (if enabled).
5. Results page.

### Tips

- The Contest-scoped form gates a quiz. The global **LeadSpark** form is where the form is the front door and the share is the reward.
- STRICT mode is faster to complete; CONVERSATIONAL feels more guided.
- The **Phone** field is two-part (country code dropdown plus number input). Do not swap it for a plain Short Text field if formatted phone data matters for CRM import.
- Add the **GDPR / Compliance** field for any event capturing EU participant data, placed as the last field before the submit button.
- Form submissions are not retroactive. Adding or changing fields after submissions start means earlier submissions do not carry the new field data.
- Multiple forms per campaign are supported. Each quiz can point to a different form.

### FAQ

| Question | Answer |
| --- | --- |
| Does a form work without a quiz? | Not in a Contest. It must be assigned to a Quiz via the **KYC / Registration Form** dropdown. For a standalone lead capture flow, build a global **LeadSpark** form. |
| Difference between this form and a LeadSpark form? | A Contest-scoped form gates a quiz inside an existing Contest. A LeadSpark global form (with "Mark this as a Contest Form" enabled) is its own front-door flow where form fill leads directly to sharing as the reward. Same field builder, different flow position. |
| STRICT vs CONVERSATIONAL? | STRICT shows all fields at once on a single page. CONVERSATIONAL shows one field at a time in a guided flow. |
| Can I use the same form for multiple quizzes? | Each quiz has its own **KYC / Registration Form** assignment. Assign the same form to every quiz, or build a separate form per quiz. |
| Why don't I see "Form" in the Manage QR Code dropdown? | The **Form** option only appears after at least one form exists for this campaign. |
| Does the form work the same way for all channels? | Yes. The gate appears identically for Public URL, Universal Share URL, or any Channel Ninja URL variant. |
| What if I add a field after the contest is live? | New fields apply going forward. Earlier submissions show an empty cell in the export. |

## View and Export Form Submissions
Source: https://wozku.com/kb/05-additional-settings/forms-submissions/

Last updated April 25, 2026.

Every form fill becomes a row in the submissions inbox, whether it came through a KYC gate before a quiz or through a **LeadSpark** global form. The channel column is the primary segmentation lens for post-event analysis.

### Prerequisites

- A form exists for this campaign under Additional Settings - Forms.
- At least one participant has submitted the form.
- For multi-form campaigns, each form's submissions are accessed separately.

### Access

- URL: `/admin/campaigns/{ID}/formsubmissions`
- Also reachable from the Forms list at `/admin/campaigns/{ID}/forms` by clicking **View submissions** next to the relevant form.
- Per-form submissions URL pattern: `/admin/campaigns/{ID}/forms?submissions_form={formID}`

The view header reads "Submissions for [Form Name]" with column headers matching the form fields and an **Export CSV** button.

### Submissions table columns

One row per submission. Column headers match the field labels set when the form was built.

| Column | Notes |
| --- | --- |
| Submission timestamp | Date and time the form was submitted |
| First Name | As submitted |
| Last Name | As submitted |
| Email ID (Official) | As submitted |
| Phone Number | As submitted (country code + number) |
| Designation | As submitted |
| Company | As submitted |
| Channel shared on | The channel the participant used for their share: LinkedIn, Twitter / X, Slack, Facebook, or Instagram |
| Wozku Score | The participant's score at the time of export |
| Any custom fields | One column per custom field added to the form |

The **Channel shared on** column is the primary segmentation lens. Filter or sort by it post-event to separate leads by channel.

### Export

Click **Export CSV** to download all submissions as a comma-separated values file, one row per submission with all field values. Ready for:

- Direct import into a CRM
- Post-event follow-up email list segmentation by channel
- Sponsor lead delivery packages (filtered by channel or booth)
- Verification of participant registration data

The same export opens in Excel or Google Sheets for per-channel or per-sponsor views.

### Tips

- Export within 24 hours of event close. The channel column tells you where each lead came from.
- The channel column is the attribution anchor. For multi-sponsor events with **Booths** configured, pair the booth column with the channel column: Sponsor X drove N leads on LinkedIn and M leads on Twitter from Booth 14.
- Form submissions are separate from community data. The Community table on the Campaign Detail page tracks sharing participants and their social metrics; the Forms submissions inbox tracks form fills. Different datasets, separate exports.
- Adding fields after submissions start leaves empty cells in older CSV rows.
- One submissions view per form.

### FAQ

| Question | Answer |
| --- | --- |
| Where is the submissions inbox? | `/admin/campaigns/{ID}/formsubmissions`, or Additional Settings - Forms then **View submissions**. |
| Can I download submissions as a spreadsheet? | Yes. Click **Export CSV**. |
| What does the channel column show? | Which social channel the participant used when they shared: LinkedIn, Twitter / X, Slack, Facebook, or Instagram. |
| Are form submissions the same as the community participant list? | No. The Community table tracks sharing participants and their social metrics; form submissions track data collected through the form gate. Export separately. |
| A participant completed the form but their data does not appear. | Confirm the submissions view is for the correct form (each form has its own view) and that the participant fully submitted. Partial completions are not recorded. |
| Can I view submissions for all forms at once? | No. Submissions are per-form. Export each CSV and merge in a spreadsheet tool. |
| Does the Wozku Score in the export reflect score at event close or at share time? | At the time of export. Export after the event closes to capture the final score. |

## Create and Configure a Quiz in a Contest
Source: https://wozku.com/kb/05-additional-settings/quiz/

Last updated April 25, 2026.

Quiz adds a knowledge assessment, lead qualification gate, or sponsor trivia check to a Contest. Place it before the share to gate advocacy behind a knowledge check; place it after the share to extend engagement and reward committed participants. Quiz performance is captured per participant regardless of which channel they shared on. Each quiz is campaign-scoped and carries its own public URL.

### Prerequisites

- The Contest is created and Step 1 is saved.
- For a KYC form gate before the quiz questions, create a Form first under Additional Settings - Forms.
- Decide whether the quiz sits before the share (qualification gate) or after the share (reward / education layer).

### Quiz list

URL: `/admin/campaigns/{ID}/quizzes`. The URL `/quiz` may not resolve correctly.

- Columns: Title | Description | Status | Questions (count) | Submissions (count) | Created | Actions
- Actions per quiz: Edit | Manage questions | Preview | View attempts | Copy quiz | Delete
- Statuses: **Draft** | **Published**. A newly created quiz starts in **Draft** and must be manually published before participants can access it. The **Publish** button appears on the questions tab.

### Basic information

| Field | Description |
| --- | --- |
| **Quiz Title** | Public-facing name shown on the quiz landing page |
| **Public URL Slug** | Auto-generated from the title. Used in the quiz's public URL: `wozku.com/quiz/{slug}` |
| **Description** | Shown as a subtitle on the quiz landing page |

### Scoring and grading

| Field | Options | Default |
| --- | --- | --- |
| **Global Scoring Strategy** | Fixed / Tiered Per Option / Tiered Range / Tiered Keyword | Fixed |
| **Pass %** | 0-100 | 50 |
| **Time Limit** | Seconds per attempt (leave empty for no limit) | (none) |

- **Fixed scoring**: each correct answer earns the question's point value. Standard for product knowledge checks and sponsor trivia.
- **Tiered scoring modes**: partial credit or variable point values based on the specific answer chosen or the score range. Fit for BANT-style qualification questions where "decision-maker" earns more points than "influencer."

### Attempt settings

| Field | Options | Default |
| --- | --- | --- |
| **Attempt Strategy** | Unlimited / Fixed Count / Once Per Email / Once Per Campaign / Once Per User | Fixed Count |
| **Max Attempts** | Number (shown only when strategy = Fixed Count) | (none) |

**Once Per Email** or **Once Per User** blocks repeat attempts from the same participant. **Fixed Count** allows a set number of retries.

### Quiz navigation

| Setting | Options | Default |
| --- | --- | --- |
| **Max Questions per Attempt** | All / a specific number | All |
| **Questions Per Page** | Number | 1 |
| **Allow Back Navigation** | Toggle | ON |
| **Randomize Questions** | Toggle | OFF |

Setting **Max Questions per Attempt** below the total question count creates a randomised sample: each attempt draws a subset from the full pool. Pair with **Randomize Questions** for variance between attempts.

### Result display

All toggles.

| Setting | Default |
| --- | --- |
| Pass / Fail message | Show default |
| Show Score | ON |
| Show Percentage | ON |
| Show Grading Label | ON |
| Show Breakdown | ON |
| Show Answers Review | ON |
| Show Review Page | ON |

Turn off **Show Answers Review** when the answer key should not be exposed.

### After quiz completion

Six options:

| Option | Description |
| --- | --- |
| **Show results only** *(default)* | Results page with score, no further action |
| **Redirect to a URL** | Sends participant to a URL after results |
| **Button with Link to a URL** | CTA button on the results page linking to a URL |
| **Redirect to Engagement Post** | Sends participant to the contest's engagement post to share |
| **Share Button with Link to Engagement Post** | Share button on results page linking to the engagement post |
| **Unlock a Reward** | Reveals a coupon code on the results page upon completion |

**Unlock a Reward** wires directly to **Coupons**: completing the quiz releases a code from the coupon pool.

### KYC / Registration Form

A dropdown that assigns a Form from the campaign's Forms tab to this quiz.

- Default: `-- None (Disabled) --`
- When assigned: the form appears as a **hard gate before the first quiz question**.
- Participants see: "Please fill in your details to continue." No skip option.

### Managing questions

Click **Manage questions** from the quiz list to enter the question builder.

Question types:

| Type | Description |
| --- | --- |
| **Multiple Choice** | One or more correct answers from a list of options |
| **True / False** | Binary yes/no or true/false |
| **Open Text** | Free-text answer, no automated scoring |
| **Image-Based** | Question or answer options include images |

Per-question fields:

| Field | Notes |
| --- | --- |
| Question text | Rich text editor, supports text, images, audio, video |
| Points | Default 1.00 |
| Required | Toggle |
| Hint | Optional, shown during the question |
| Explanation | Shown after the participant answers |

Answer options (Multiple Choice and True / False):

| Field | Notes |
| --- | --- |
| Allow multiple selections | Toggle, switches between single-select and multi-select |
| Option text | Answer label |
| Image URL | Optional image for this answer option |
| Weight | Used for tiered scoring strategies |
| Correct | Checkbox, marks this option as correct |

Click **+ Add Option** to add more answer choices. After adding questions, click **Publish** on the questions tab to move the quiz from Draft to Published. Only Published quizzes are reachable by participants.

### Gate placement

| Placement | Role | Use for |
| --- | --- | --- |
| **Before sharing** | Qualifying gate. Participants must complete the quiz before they can share. | Product launches where accurate messaging matters, certification-style campaigns, partner programmes, sponsor trivia where only engaged attendees should amplify. |
| **After sharing** | Reward or education layer. The participant has already amplified the content. | Product knowledge deepening, sponsor education goals, gated reward reveal with **Unlock a Reward**. |

BANT-style lead qualification: use Choice fields (Dropdown, Single Choice) to collect budget, authority, need, and timeline signals inside the quiz form gate. Pair with **Once Per Email** attempt strategy so each lead submits once.

### Participant-facing quiz flow

1. Quiz landing page: title, description, question count, and **Start Quiz** button.
2. KYC form gate (if a form is assigned): "Please fill in your details to continue."
3. Quiz questions, one per page by default.
4. Review page (if enabled): participant reviews answers before final submission.
5. Results page: score, pass / fail, breakdown, and any completion action (redirect, reward, share button).

### Tips

- A quiz placed before the share means the participant absorbed the core messaging before broadcasting it.
- Always publish before the event. A quiz in Draft is inaccessible to participants on every channel.
- Use **Once Per Email** for lead generation quizzes to block coupon farming.
- Assign the quiz's public URL (`wozku.com/quiz/{slug}`) to the QR code via Contest Settings > Manage QR Code > Quiz.
- **Open Text** questions do not score automatically. Review them manually in **View Attempts**.
- Keep the Review Page ON unless running a timed, exam-style quiz.
- **Randomize Questions** reduces the value of answer-sharing between participants in the same room.

### FAQ

| Question | Answer |
| --- | --- |
| Why can't participants access my quiz? | A quiz in Draft is inaccessible. Go to **Manage questions** and click **Publish**. Confirm the status shows Published before the event. |
| How do I add a KYC form gate? | Create a form under Additional Settings - Forms, then select it in the quiz's **KYC / Registration Form** dropdown. It becomes a hard gate before the first question. |
| Does quiz performance track which channel the participant shared on? | Yes. Quiz attempts are captured per participant regardless of channel; the Forms Submissions export includes the channel column. |
| What does "Unlock a Reward" do? | The quiz results page releases a coupon code from the campaign's coupon pool. Requires coupon codes imported under Additional Settings - Coupons. |
| Can a participant retake the quiz? | Depends on **Attempt Strategy**: **Unlimited**, **Fixed Count** (capped), or **Once Per Email** / **Once Per User** (one attempt per person). |
| Fixed vs Tiered scoring? | Fixed awards each question's point value for a correct answer. Tiered awards different point values depending on which answer was chosen (Tiered Per Option), the score range achieved (Tiered Range), or a keyword match (Tiered Keyword). |
| How does Max Questions per Attempt work? | Set below the total question count and each attempt pulls that many questions at random from the pool. Combined with **Randomize Questions**, each attempt differs. |

## Import Booth Data for Multi-Sponsor Attribution
Source: https://wozku.com/kb/05-additional-settings/booths/

Last updated April 25, 2026.

**Booths** map physical event booth numbers to sponsor brand names. Booth data is how Wozku tells each sponsor which shares, participants, and reach came from their booth. Attribution works identically across channels. Without booth data, everything rolls up into one campaign total.

### Prerequisites

- The Contest is created and Step 1 is saved.
- The booth / sponsor mapping is ready: booth numbers and corresponding brand names for all sponsors.
- Booth data prepared in CSV format with `booth_number` and `sponsor_brand_name` columns.
- Import before the contest goes live. Booth attribution is applied at share time and is not retroactive.

### How booths work

Each sponsor occupies a numbered or labelled booth on the event floor. QR codes deployed at each booth carry the booth identifier. When a participant scans the QR at Booth 14 and shares on any channel, Wozku attributes that share to Booth 14's sponsor. Post-event, sharing activity segments cleanly by sponsor.

Booth codes surface on the participant flow via the QR code routing. The participant does not see the booth number as a form field; the attribution is embedded in the QR code assignment in Contest Settings. No booth data means no segmentation.

### Import workflow

URL: `/admin/campaigns/{ID}/importbooths`. The URL `/booths` returns a 404. All booth data is batch-imported via CSV; there is no manual entry interface.

1. Click **Download Sample**, which downloads `wozku-import-booths-sample.csv`.
2. Populate the CSV with booth numbers and sponsor names.
3. Click **Choose File** and select the populated CSV.
4. Click **Import** to load the booth data.

### CSV format

Sample available at `https://wozku.com/assets/samples/wozku-import-booths-sample.csv`

| Column | Description | Format |
| --- | --- | --- |
| `booth_number` | Booth identifier | Numeric or alphanumeric (`1`, `2`, `Booth 3`, `L1B2`) |
| `sponsor_brand_name` | Brand name for that booth | Text, use quotes for names with commas or special characters |

Sample CSV:

```
booth_number,sponsor_brand_name
1,Brand Name
2,IBM
Booth 3,"ABCD Pvt. Ltd."
L1B2,"Abcd Delta XYZ promo Hgvt 125 Inc"
```

### Booth number formats

- Numeric: `1`, `2`, `10`, `200`
- Alphanumeric: `Booth 3`, `L1B2`, `Hall-A-15`
- Any identifier matching how the physical booth is labelled at the event

The `booth_number` value must match exactly what is assigned in Wozku when QR codes are deployed. Booth numbers are case-sensitive: "Booth 3" and "booth3" are different values.

### Channel attribution with booths

Booth attribution and channel attribution are independent columns in the reporting data. A participant who scans at Booth 14 and shares on LinkedIn contributes to both Booth 14's total and the LinkedIn channel total; the same participant sharing on Twitter contributes to Booth 14's total and the Twitter total.

Post-event, export participant and sharing data from the Campaign Detail page and filter by booth column and channel column together to build per-sponsor, per-channel breakdowns.

### Strategic use

| Scenario | Application |
| --- | --- |
| Trade shows and exhibitions | Import all sponsor booths before the doors open. All shares from a sponsor's booth QR across every channel attribute to that sponsor. Filter by booth post-event to hand each sponsor their results: shares, participants, reach, engagement, channel breakdown. |
| Multi-track conferences | Breakout rooms or sessions treated as booths, giving per-track engagement data across every channel. |
| Sponsor reporting packages | Each sponsor receives a performance report showing booth visitors who became advocates on their chosen channel, combined Potential Reach, and Wozku Score distribution. |

### Tips

- Import before the doors open. Retroactive attribution is not available.
- Booth numbers are case-sensitive and must match exactly.
- Booths can be imported multiple times. Re-import to update a sponsor change, correct a booth number, or add a late booth. Later imports update the mapping for future shares.
- Booths is for multi-sponsor attribution. Single-sponsor events can skip this tab entirely.
- Pair the Booths export with the channel column in the Forms Submissions export.

### FAQ

| Question | Answer |
| --- | --- |
| What happens to shares before I import booth data? | Booth attribution is applied at share time; earlier shares are not retroactively attributed. |
| Does booth attribution work on Beta channels? | Yes. A participant sharing via the **Slack Ninja URL** at Booth 14 attributes to Booth 14's sponsor the same as one sharing via the **LinkedIn Ninja URL**. |
| Do booth numbers need to be numeric? | No. Numeric or alphanumeric. The value must match exactly what is used in Wozku's QR code assignment. |
| Can I update booth data after the initial import? | Yes. Re-importing updates the mapping. Changes apply to future shares, not retroactively. |
| Is Booths required for every contest? | No. Single-sponsor events or simple contests with one QR code do not need it. |
| How do I use booth data in sponsor reports? | Export participant and sharing data from the Campaign Detail page, filter or segment by sponsor, and combine the booth column with the channel column. |
| What format should sponsor names use in the CSV? | Plain text for most names. Wrap in double quotes when they contain commas or special characters, e.g. `"ABCD Pvt. Ltd."`. |

## Reward & Incentive Design
Source: https://wozku.com/kb/05-additional-settings/incentive-design/

Last updated April 25, 2026.

The strategy layer above **Coupons**. The leaderboard creates visibility, the **Wozku Score** creates fairness, the **Channel Ninja URL** creates speed; the incentive is the lever that turns "I see what's happening" into "I'm going to share now." Mechanical distribution is handled by **Coupons**.

### Prerequisites

- A Contest configured at least through Step 1 and a sense of expected attendance.
- A rough budget shape: a small number of named prizes versus a large number of low-cost rewards.
- Understanding of how **Coupons** distributes codes mechanically.

### Pattern A - Top-N Podium

Everyone competes for a small fixed number of named prizes. Top three is the canonical shape; top five and top ten work too. Worked example: the Acme AI Summit 2026 sales kickoff, top 3 sharers across the day win a named prize tier announced on stage, leaderboard on the keynote screen makes standing visible all day.

| Dimension | Detail |
| --- | --- |
| **Budget shape** | Few high-perceived-value prizes. The drama comes from the prize tier, not the prize count. |
| **Audience fit** | Audiences that respond to public recognition: sales kickoffs, partner conferences, community programmes with a competitive culture. Less effective in audiences uncomfortable with public ranking. |
| **What to announce from stage** | Name the top-three prizes early in the keynote, again at the start of breakouts, announce winners on stage at the close. |
| **Leaderboard interaction** | Direct. The podium on the public screen visualises the standing live. |

Risk: the long tail. A handful of high-follower advocates can pull away early and demoralise the rest of the room. The **Wozku Score** blunts this (engagement-quality scoring keeps a 200-follower advocate competitive against a 5,000-follower one) but Top-N alone is rarely right for a broad-participation goal.

### Pattern B - Random Draw

Every authenticated share enters a draw. Announced as a draw, not a competition. Worked example: the Acme AI Summit 2026 customer track, every share enters a draw for one named prize at close, leaderboard hidden so the focus stays on participation rather than rank.

| Dimension | Detail |
| --- | --- |
| **Budget shape** | Mid-tier reward, often a single named prize with meaningful unit value. |
| **Audience fit** | Audiences where competition is not culturally welcome: regulated industries, customer summits with cross-competitor attendees, communities where ranking would feel off-tone. |
| **What to announce from stage** | "Every share goes into the draw. Three shares triples your odds." The arithmetic is the message. |
| **Leaderboard interaction** | Indirect. The leaderboard is still on screen for the secondary effect but the prize is detached from rank. Some teams hide the leaderboard entirely for Random Draw events. |

### Pattern C - Threshold Unlock

Every participant who shares N times gets a guaranteed reward, identical for everyone who clears the threshold. Worked example: the Acme AI Summit 2026 community track, every attendee who shares three times earns a coupon for branded swag; five shares unlocks a higher tier.

| Dimension | Detail |
| --- | --- |
| **Budget shape** | Many low-to-mid-tier rewards. Cost per participant is bounded; total cost scales with participation rate. |
| **Audience fit** | Any audience, because nobody competes. |
| **What to announce from stage** | "Three shares earns a coupon for X. Five shares earns a higher tier." Tiered thresholds scale reward to effort. |
| **Leaderboard interaction** | Mostly orthogonal. The threshold reward is independent of leaderboard position. |

Threshold Unlock is the highest-participation pattern in most B2B events because it removes the "I won't win anyway" objection.

### Combining the patterns

| Combination | What it does |
| --- | --- |
| **Threshold Unlock + Top-N Podium** | Floor and ceiling. Anyone who shares three times earns the baseline reward; the top three sharers earn named prizes on top. |
| **Random Draw + Threshold Unlock** | Everyone who clears the threshold enters the draw. Removes the "draw odds are low" objection by gating entry to people who already engaged. |
| **Top-N Podium + Random Draw** | Named prizes for the top three, a draw for everyone else. The podium drives competition; the draw catches the long tail. |

Pick one combination, not three. The room has to be able to summarise the rules in one sentence from the stage.

### Recurring incentive after the first share

A live-event Contest is intrinsically a one-shot motion; once the event ends the leaderboard freezes and the prize is awarded. In a **Campaign** (always-on), every share continues to earn **Wozku Score** and continues to update the participant's standing in the global Community view. The recurring-incentive design is a two-programme question: the Contest covers the live event, the Campaign covers what happens after.

### Integrating with an existing lucky-draw or rewards programme

Wozku supplements rather than displaces an existing lucky-draw mechanic (badges scanned at the booth, business cards in a fishbowl, app-based check-ins).

- Cleanest integration: every authenticated Wozku share counts as one entry into the existing lucky-draw. Export the participant list from the Wozku dashboard at end of event and merge it into the draw entries. Reward distribution stays in the existing programme.
- Tighter integration: use **Coupons** to issue a coupon code on every authenticated share that the participant then redeems through the existing rewards system.

### Picking the pattern

Three questions, in order:

1. **Is the audience comfortable with visible competition?** If yes, Top-N Podium is in scope. If no, Random Draw or Threshold Unlock is the floor.
2. **Is the budget shape "few high-value prizes" or "many low-value rewards"?** Few high-value points to Top-N Podium. Many low-value points to Threshold Unlock. Mid-tier with one named prize points to Random Draw.
3. **What participation rate is the success metric?** A 10% top-decile target accepts Top-N Podium alone. A 40% authenticated-share target needs Threshold Unlock or a combination.

Sales kickoffs and partner conferences favour Top-N. Customer events with regulated-industry attendees favour Random Draw. Broad community events with a "swag for everyone who plays" culture favour Threshold Unlock.

### Tips

- The leaderboard is the reward, not just the prize. Even a Random Draw event benefits from the leaderboard running on screen.
- State the rules in one sentence from stage. If the rules need a slide, the design is too complex.
- Do not over-prize the top. A top-three prize wildly larger than the threshold reward creates the "I can't win" effect that suppresses the long tail.
- Threshold Unlock removes the lottery objection.
- The **Wozku Score** is the leaderboard signal, not the reward signal. The leaderboard ranks by Wozku Score (engagement-weighted); reward distribution is whatever is configured in **Coupons**.
- Sponsor activations work well with Threshold Unlock per booth: each booth offers a small reward to anyone who shares the booth's specific post, with the unified leaderboard on top.

### FAQ

| Question | Answer |
| --- | --- |
| How many prizes for a 400-person event? | Pick a Top-N number where the win feels reachable. Top three out of 400 is tight enough to be aspirational, loose enough to be possible. Top one is too narrow; top thirty dilutes the named-prize drama. |
| Can we run a lucky-draw alongside the leaderboard? | Yes. Run the leaderboard for visible competition and use the participant list from the Wozku dashboard as draw entries, or use **Coupons** to issue a draw-entry code on every authenticated share. |
| What is the recurring incentive after the first share? | In a Contest, leaderboard standing: each additional share builds Wozku Score and rank. In a Campaign (always-on), every share continues to update the global Wozku Score on the Community view. |
| Is a single-winner format ever right? | Rarely. It has the winner-take-all problem at scale. It works only in very small audiences (under 50) or where the prize is so high-value that even a 1% chance is worth chasing. |
| Can the same Coupon code go to every Threshold Unlock participant? | Yes. Coupon distribution can issue one shared code to everyone who clears the threshold, or unique per-participant codes if redemption must be tracked to the individual. |
| What if the budget is genuinely small? | Threshold Unlock with a low-cost reward outperforms a Top-N Podium with a single small prize most of the time. Branded swag, a digital download, a platform credit all work. |
| How do Booster Posts interact with reward design? | A Booster Post boosts the Wozku Score weighting on a specific post, surfacing it higher on the leaderboard. It interacts with Top-N Podium designs (boosted-post sharers tend to dominate the podium) and is mostly orthogonal to Random Draw and Threshold Unlock. |
| Can the reward be non-monetary? | Yes, and these often outperform monetary rewards in B2B audiences (a private session, a shoutout, a meeting with an executive). Coupons handles the mechanical distribution of the access code. |
