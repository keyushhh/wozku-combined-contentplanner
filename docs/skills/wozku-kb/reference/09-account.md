# 09 Account & Settings

Operator profile and security, the role-based user and sub-account access model, third-party integrations, and the trust, privacy and compliance posture.

Source: https://wozku.com/kb/09-account/

## Account Settings

Source: https://wozku.com/kb/09-account/account-settings/

Last updated April 25, 2026.

Account Settings covers the operator's own profile and security configuration: the identity record, the timezone that every scheduled moment is interpreted against, and the 2FA layer. Two URLs cover it.

| Surface | URL | Opened from |
| --- | --- | --- |
| My Profile | `/admin/edit-profile` | User menu (avatar, top-right) > My Profile |
| Security Settings | `/admin/settings/security` | User menu (avatar, top-right) > Security Settings |
| Password reset | `/password/reset` | Login page, or Reset Password in the user menu |

### Before you start

- Logged in to the Wozku admin at `https://wozku.com/admin`.
- Access My Profile or Security Settings by clicking your avatar (user menu, top-right corner of any admin page).
- If enabling 2FA, install an authenticator app on your device before starting.

### My Profile fields (`/admin/edit-profile`)

| Field | Required | Notes |
| --- | --- | --- |
| Profile Image | No | Opens the Media Library. Used as your avatar in the admin. |
| Name | Yes | Your display name in the admin. |
| E-Mail Address | Yes | Your login email. Changing this changes both display email and login email. |
| Phone | Yes | Contact phone number. |
| Company | No | Your organisation name. |
| Designation | No | Your job title. |
| Timezone | No | Full global timezone list. Default: UTC. Sets the timezone used for date and time display throughout the admin: campaign end dates, event scheduling, Hold & Fire, and the date-range reports on the Campaign Detail page. |

Actions: **Update** saves changes, **Skip** dismisses without saving.

### Security Settings (`/admin/settings/security`)

Two-Factor Authentication (2FA):

- Wozku supports 2FA with an authenticator app.
- When 2FA is enabled, a verification code is required at each login in addition to the password.

Backup codes (the recovery mechanism if the authenticator app is lost):

- Button: **"Generate 10 backup codes"** creates a set of 10 single-use codes.
- Each code can only be used once; after use it is invalidated.
- Store codes in a secure location (password manager, printed and locked away).
- Generating a new set immediately invalidates the previous set, including unused codes.
- Input field: **"Code Or Backup code"** accepts a backup code, to use or test it directly.

### Reset your password

Go to `/password/reset` or click **Reset Password** from the user menu. Enter your registered email address to receive a reset link. Both the login-page route and the user-menu route do the same thing: send a password reset link to the registered email. The login-page route is for when you are locked out; the user-menu route is accessible when already logged in.

### Tips

- Set the timezone correctly before scheduling events. Campaign end dates, the Hold & Fire scheduler, and date-range reports all display relative to the profile timezone. A mismatch causes confusion when scheduling across teams.
- Generate backup codes the moment 2FA is enabled. Losing the authenticator app without backup codes can lock you out.
- Do not regenerate backup codes unless the previous set is lost; regenerating without storing the new codes leaves no recovery option.

### FAQ

| Question | Answer |
| --- | --- |
| What timezone should I set in My Profile? | Match your local timezone or the timezone where events run. Campaign end dates, the Hold & Fire scheduler, and all date-time displays in the admin are interpreted against this setting. |
| What happens when I generate new backup codes? | Generating a new set of 10 immediately invalidates the previous set. Any unused codes from the previous set can no longer be used. Store the new codes immediately. |
| Can I use a backup code directly from the Security Settings page? | Yes. The "Code Or Backup code" input on `/admin/settings/security` accepts backup codes; enter a code there to use or test it directly. |
| How do I change my login email address? | Update the E-Mail Address field on `/admin/edit-profile` and click Update. This changes both display email and login email. |
| Difference between Reset Password from login page vs inside the admin? | Both send a password reset link to the registered email. The login-page route is for lockout; the user-menu route is for when already logged in. |

## Managing Users & Sub-Accounts

Source: https://wozku.com/kb/09-account/users/

Last updated April 25, 2026.

Wozku's access model is role-based, module-scoped, and auditable. A user can be a Campaigns Admin but a Forms Viewer. An event coordinator can manage only the contests they own. An external stakeholder can see results without touching a setting. Every action (every edit, delete, and account switch) is recorded in the Activity Log.

The account Admin role also controls channel configuration at the account level, including whether Beta channels (Slack, Facebook, Instagram) are enabled for the organisation's programmes.

### Before you start

- Logged in as the primary account holder or a Campaigns Admin at `https://wozku.com/admin`.
- Only account Admins can invite new users and edit roles.
- You have the email address of the person to invite.
- You know which modules (Campaigns, Forms) and permission levels (Admin, Manager, Viewer) to assign.

### URLs

| Surface | URL |
| --- | --- |
| Account Management | `/admin/accounts` |
| Activity Log | `/admin/accounts/activity-logs` |
| Add User | `/admin/accounts/create` |
| Edit a user's roles | `/admin/accounts/{ID}/role-edit` |

### Page structure: three tables

| Table | Shows |
| --- | --- |
| Invited Users | Users who have been sent an invitation (including expired invitations) |
| All Users | Active users who have accepted their invitation |
| Cancelled Invitations | Invitations that were explicitly cancelled before acceptance |

Download buttons are available on all three tables.

- Invited Users columns: Name / Email, Team Roles, Invited On, Status, Invite Link, Actions.
- All Users columns: Name / Email, Team Roles, Invited On, Status, Actions.

Status values:

| Value | Meaning |
| --- | --- |
| Active | Invitation was accepted |
| Expired | Invitation link expired before the user accepted |
| Removed | User was removed from the account |

Invite Link column shows **"Not Available"** when the invitation has expired. Resend the invitation to generate a new link.

Actions per user:

- **Roles** (`/admin/accounts/{ID}/role-edit`): edit that user's role assignments.
- **Remove**: removes the user from the account.

### Roles and permissions model

Roles are assigned per **Module** (Campaigns, Forms) and **Permission Level**.

| Role | Campaigns | Forms |
| --- | --- | --- |
| Admin | Edit, Create & Delete all campaigns | Edit, Create & Delete all forms |
| Manager | Edit, Create & Delete only assigned campaigns | Edit, Create & Delete only assigned forms |
| Viewer | View only assigned campaigns | View only assigned forms |

- Each module is independently assignable. A user can be a Campaigns Admin and a Forms Viewer at the same time, or have access to one module but not the other.
- Adding a user as Admin on a module grants full edit, create, and delete access across every contest or form in that module. Use Manager or Viewer when the role only needs scoped access to specific campaigns or forms.
- Beta-channel enablement: the account Admin role is the only role level that can enable or disable Beta channels (Slack, Facebook, Instagram) at the account level. Manager and Viewer roles cannot change account-level channel configuration.

### Send an invite

1. Click **Add User** or go to `/admin/accounts/create`.
2. Enter the user's email address.
3. Toggle **Require email verification** ON or OFF.
4. Click **"Send Invite"**.

The invited user receives an email with an invitation link and must click it to set up their account and gain access.

### Activity Log (`/admin/accounts/activity-logs`)

Records every action taken by sub-users on the account.

- Filters: Subadmin dropdown, Action Type, Date From, Date To, with **Apply** / **Clear**.
- Action Types: All Actions, Created, Updated, Deleted, Account Switch.
- Table columns: Action, Activity, Subadmin, Date, Details.
- Click **Details** on any row to open the **Activity Details modal** showing the full record of what was changed.

Use it to audit what team members created, edited, or deleted, and to trace any change to a live leaderboard or campaign post back to the user who made it.

### Sub-account structure

If you are operating as a sub-account (a child account under a parent account), the user menu shows **Switch Account Back**, returning you to the parent account view. Agencies and multi-brand operators run sub-accounts to keep each client's campaigns, forms, and participant data walled off from the others.

### Tips

- Use Manager role for event operators: create and edit campaigns they are assigned to, without access to other team members' campaigns.
- Viewer role is read-only, for sponsors, clients, or reporting stakeholders who need to see results without changing anything.
- Expired invitations need resending: remove the old record and re-invite with a fresh link.
- Use the Activity Log after events to trace unexpected changes (post edited, leaderboard reset, campaign deleted).
- Admin role controls Beta-channel access. Confirm with the account Admin that the organisation is ready before enabling Slack, Facebook, or Instagram on a programme. Beta channels are production-ready but require a deliberate decision to activate in a customer-facing programme.

### FAQ

| Question | Answer |
| --- | --- |
| Can a user have Admin access to Campaigns but only Viewer access to Forms? | Yes. Roles are assigned independently per module. |
| What if an invited user does not accept before the link expires? | Invite Link shows "Not Available". Remove the expired entry and click Add User again to send a fresh invitation to the same email address. |
| Can a Manager see all campaigns or only assigned ones? | Only ones they are explicitly assigned to. They cannot see or modify campaigns belonging to other team members. Use Admin for full management. |
| How do I audit which team member deleted a post or reset a leaderboard? | Activity Log (`/admin/accounts/activity-logs`), filter Action Type "Deleted" or "Updated" plus the date range, then click Details. |
| Difference between Removing a user and Cancelling an invitation? | Remove (All Users table) removes an active user who already accepted. Cancelled Invitations were explicitly cancelled before acceptance. Both remain in their tables for record-keeping. |
| Who can enable Beta channels (Slack, Facebook, Instagram)? | Beta channel enablement is a post-level decision in Step 2 of the wizard, but the account Admin governs whether those channels appear as options. Manager and Viewer roles cannot change this configuration. |

## Integrations

Source: https://wozku.com/kb/09-account/integrations/

Last updated April 25, 2026.

The Integrations page (`/admin/integrations`, titled **"Modular Connection Vault"**) lists every third-party connector Wozku exposes. One connector is live today: **Zoom**, wired to **LeadSpark** so a form submission becomes a webinar registration.

### Before you start

- A Wozku admin account at `https://wozku.com/admin`.
- For Zoom: a Zoom account with "Meeting Write" permissions and an upcoming webinar created in Zoom.
- For Zoom: the Wozku LeadSpark (Global Form) already created and including at minimum an **Email ID** field and a **Last Name** field; Zoom requires both for registration.
- All other integrations are listed as Coming Soon and cannot be configured yet.

### Integration status

| Integration | Category | Status |
| --- | --- | --- |
| Zoom | Webinar | Available, "Initialize Connection" |
| Webex | Webinar | Coming Soon |
| HubSpot | CRM | Coming Soon |
| Salesforce | CRM | Coming Soon |
| Google Sheets | Spreadsheet | Coming Soon |
| Slack | Collaboration | Coming Soon |
| Mailchimp | CRM | Coming Soon |
| Zapier | Automation | Coming Soon |
| Webhook | Automation | Coming Soon |

Each adapter has two tabs: **Settings** and **Guide**.

### Connect Zoom: 3 steps

1. **Authorize Account.** Ensure the Zoom account has "Meeting Write" permissions enabled in the Wozku Vault. The Vault is the credentials storage layer holding the Zoom OAuth token.
2. **Select Webinar.** During the Global Form (LeadSpark) setup, select the specific upcoming Zoom webinar from the Discovery list.
3. **Map Required Fields.** Map Wozku form fields to Zoom registration fields. Zoom requires at minimum `email` and `last_name`. The **Map Fields modal** shows a Source > Destination mapping interface.

### Zoom error troubleshooting

| Error | Cause | Fix |
| --- | --- | --- |
| Error 401 (Unauthorized) | Vault token expired | Reconnect in the Vault |
| Error 404 (Not Found) | Webinar ID invalid or deleted in Zoom | Verify the webinar exists in Zoom |
| Error 429 (Too Many Requests) | Zoom's registration rate limit hit | Slow down form submissions or stagger them |
| (no code) | Webinar is set to "Invite Only" | Invite-only webinars block API registrations |
| (no code) | Registrant already added to the session | Duplicate registration, Zoom rejects it |

### CSV-to-CRM workflow today

Until native HubSpot and Salesforce integrations ship, the working pattern is a CSV handoff: four steps, roughly ten minutes per campaign.

1. Open the Campaign Detail page (`/admin/campaigns/{ID}`) and scroll to the Community table.
2. Apply any filter (channel filter, date range, search), then click **Download** to export the participant list as CSV. Each row carries the participant's name, profile URL, channel, Wozku Score, Potential Reach, Shares, Likes, Clicks, and Comments. If a Form is attached, export the Form Submissions CSV separately from Additional Settings > Forms > View Submissions.
3. In the CRM, run a contact lookup against the email column and tag each Wozku row as net-new or existing before import. Deduplication happens on the CRM side, not inside Wozku.
4. Import the CSV using the CRM's standard contact import (Salesforce Data Import Wizard, HubSpot's import tool, or equivalent). Map Wozku columns to CRM fields, set lead source to the Wozku campaign name, and complete the import.

Result: every advocate is a contact, every share is recorded, and the Wozku Score is available as a sales-triage filter. When native CRM connectors ship, this workflow becomes optional rather than required.

### What's in flight

Two themes over the next two quarters. Specific dates are not committed; timing depends on partner platform validation cycles and engineering throughput.

- **Native CRM connectors.** HubSpot and Salesforce are next after Zoom. Shape: direct sync of the Community table and Form Submissions into the CRM as contacts and activities, with Wozku Score and Potential Reach as custom fields for segmentation and scoring rules.
- **Webhook and Zapier surfaces.** A general-purpose webhook on share events plus a Zapier connector for low-code automation. The path for teams routing Wozku data into Mailchimp, Google Sheets, a data warehouse, or any system not on the native-connector list.

Webex, Slack, and Mailchimp sit further out. Slack as a sharing channel is already live in Beta; the Slack card on the Integrations page refers to a future inbound-from-Slack workflow, not the share path.

### Tips

- Zoom is the only live integration at this time. For CRM or automation connectivity now, use the CSV export from Forms and import manually.
- Test the Zoom mapping before the event: submit a test form entry and verify the registrant appears in the Zoom webinar attendee list. This validates field mapping and confirms the Vault token is active.
- The Zoom integration works within LeadSpark (Global Forms) only, configured during the Global Form creation wizard, not within campaign-scoped Forms.

### FAQ

| Question | Answer |
| --- | --- |
| Why does the Zoom integration throw a 401 Unauthorized? | The Vault token for the Zoom OAuth connection has expired. Reconnect the Zoom account in the Vault to generate a fresh token. |
| Does Zoom work with campaign-scoped Forms? | No. It is configured within the Global Form (LeadSpark) creation wizard only. |
| What if a registrant submits the form twice? | Zoom rejects duplicate registrations. The Wozku form submission is still recorded; only the Zoom registration step is skipped for duplicates. |
| What do I do while CRM integrations are Coming Soon? | Use the CSV export from the Forms dashboard and import into the CRM manually. |
| What minimum fields does Zoom require for API registration? | `email` and `last_name`. Map the Wozku Email ID field to Zoom's email and the Last Name field to Zoom's last_name in the Map Fields modal. |
| Does Wozku need access to our LinkedIn company page? | No. Wozku publishes through individual participants' authenticated personal accounts, not company, brand, or organisation pages. Each participant authenticates Wozku once on their own LinkedIn profile via OAuth and shares publish to their personal feed under their own name. No admin access, no page token, no posting rights on the company page are ever requested. The same principle applies to every other channel. |
| How much IT lift does Wozku require to deploy? | Zero IT lift, zero integration, zero plugin, zero dependency. Wozku is a SaaS dashboard. Admins log in at `https://wozku.com/admin`, configure the contest in the wizard, and the participant flow runs entirely through the participant's own browser and authenticated channel accounts. No software installed on the customer network, no API keys wired in, no SSO configuration required to launch a contest. Wiring the CSV export into a CRM is optional and does not block any contest. |

## Trust, Privacy & Compliance

Source: https://wozku.com/kb/09-account/trust-and-compliance/

Last updated May 15, 2026.

Wozku is **SOC 2 Type II compliant** and **GDPR compliant**. The platform has a CISO on staff who owns the security and privacy posture at executive level, and a current Trust Pack with sub-processor list, hosting region, certification details, and in-flight assessments is available on request.

Full policy text: [Privacy Policy](https://wozku.com/privacy-policy) and [Terms & Conditions](https://wozku.com/term-and-conditions). For certificates, the Trust Pack, the Data Processing Agreement, or a briefing with the Wozku CISO, contact the Wozku account team or sales contact.

### What Wozku collects at OAuth

When a participant scans a Wozku QR code, picks a channel, and grants permission, the channel runs its own OAuth flow. Wozku receives a **scoped publishing token** plus the minimum profile information needed to attribute the share on the leaderboard: typically a name, a profile image, and a stable channel-level identifier.

The token permits two things only:

1. Publishing the content the participant just authorised.
2. Reading engagement on that specific share for dashboard reporting.

It does not permit access to the participant's inbox, DMs, network graph beyond first-degree audience size, other posts, or account settings.

### What Wozku never sees, stores, or has access to

| Item | Detail |
| --- | --- |
| Participant passwords | The OAuth flow is the channel's own. The credential stays with the channel; Wozku holds only the scoped token the channel issued. |
| Inbox contents, DMs, or private content | Not in scope of the OAuth permissions, and no read path exists. |
| Off-Wozku activity | Posts published outside Wozku, networks the participant belongs to, search history, browsing behaviour: none of this is in the data model. |

### What Wozku does store (contract level)

- Campaign and contest configuration.
- Participant identifiers from authenticated channels.
- Share events (which participant shared which post on which channel and when).
- Engagement signals on those shares.
- The derived **Wozku Score**.

The dashboard is a read view over that data. The data model is narrow on purpose: a scoped publishing layer needs to know who shared what when and what happened to that share. Storing more would create risk for both the participant and the customer.

### Compliance posture

| Framework | Status |
| --- | --- |
| SOC 2 Type II | Compliant |
| GDPR | Compliant |
| CISO | On staff |
| Data Processing Agreement | Available |
| Sub-processor list | Available on request |
| Trust Pack | Available on request |

- The current Trust Pack (hosting region, sub-processor names and data categories, certification dates, and a summary of in-flight assessments) is provided by the account team during the commercial conversation or on request afterwards.
- Material changes to the sub-processor list are notified to customers under the terms of the DPA.
- Wozku is not an advertising platform. The platform does not share share-event data with advertising networks, data brokers, or any third party outside the named sub-processors.

### Revocation and post-deletion

- A participant can revoke Wozku's permission at any time from the channel's own app permissions screen, a one-click action.
- From the moment of revocation, future shares through Wozku require re-authorisation and engagement reading stops on existing shares for that channel.
- Past shares remain on the channel; revocation does not delete past posts.
- The Wozku Score reflects what was earned up to the moment of revocation.
- A participant can also delete the post directly on the channel after sharing. The share event is logged and the credit is consumed at publish, so the leaderboard does not retroactively remove the share, but engagement tracking stops at the moment the post is deleted.

### Tips

- The OAuth flow is the channel's own. Wozku never sees the participant's password. A security reviewer can verify this independently against the channel's published OAuth documentation.
- Revocation is one click on the channel side. Include this in participant communications.
- The admin password is yours, not Wozku's. At signup you set your own admin username and password; Wozku staff do not have access to it.
- Bring the Trust Pack to the security review. Request it from the account team before the review meeting.
- Beta channels carry the same data discipline. Slack (Beta), Facebook (Private Beta), and Instagram (Private Beta) operate at the same trust posture as the GA channels. The Beta label refers to product stabilisation, not to a weaker compliance position.

### FAQ

| Question | Answer |
| --- | --- |
| Does Wozku store participant passwords for LinkedIn, Twitter, Slack, Facebook, or Instagram? | No. The OAuth flow is the channel's own. Wozku receives a scoped token authorising publishing; the password stays with the channel. |
| What does Wozku collect at OAuth? | A scoped publishing token, plus the minimum profile information needed to attribute the share on the leaderboard: typically a name, a profile image, and a stable channel-level identifier. Nothing else. |
| Is Wozku SOC 2 Type II and GDPR compliant? | Yes, both. Certificates and the current Trust Pack are available from the account team on request. |
| What happens if a participant revokes Wozku's permission? | Future share attempts require re-authorisation; engagement reading stops on existing shares for that channel. Past shares remain on the channel. The Wozku Score reflects what was earned up to revocation. |
| Does Wozku have access to my admin account? | No. You set your own username and password at signup, and Wozku staff do not have access to it. |
