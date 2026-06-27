---
title: "How to Send Emails to Slack: Complete Guide with 3 Methods"
description: "Learn how to send emails to Slack using 3 methods: create a channel email address, use Gmail or Outlook plugins, or forward emails to Slackbot. Step-by-step tutorial."
author: "Bold Studio"
date: "2026-06-24"
url: "https://getboldstudio.com/blog/send-emails-to-slack"
tags:
  - slack
  - email
  - integration
  - gmail
  - outlook
  - productivity
  - slackbot
---

# How to Send Emails to Slack: Complete Guide with 3 Methods

Slack helps you centralize work communications, including emails. There are three ways to send emails to Slack depending on your plan and how you want to use them once they arrive.

## Why send emails to Slack?

Email inboxes are crowded. Critical updates from clients, automated reports from monitoring tools, and support tickets often get buried under newsletters and spam. By forwarding emails directly into Slack channels, your team sees important communications right where conversations already happen.

Slack offers three distinct methods: dedicated email addresses for channels (paid plans), Gmail and Outlook plugins (all plans), and Slackbot forwarding (all plans).

## Method 1: Create an email address for a channel or DM

**Requires:** Paid Slack plans (Pro, Business+, Enterprise Grid)

Steps:
1. Open the channel or DM where you want to receive emails.
2. Click the channel name or member name in the conversation header.
3. Click the **Integrations** tab.
4. Select **Send emails to this channel** or **Send emails to this conversation**.
5. Click **Get email address** to generate a unique address.
6. Copy the address to set up auto-forwarding in your email client.

### Customize how emails appear

Open the channel, go to Integrations, select the email option, and click **Customize email appearance**. Upload an image or pick an emoji, then set a display name.

### Remove an email address

Open the conversation, go to Integrations, select the email option, and click **Delete address**. Emails sent to that address will stop posting to Slack.

## Method 2: Use Slack email plugins for Gmail and Outlook

**Requires:** All Slack plans

### Slack for Gmail

1. Install **Slack for Gmail** from the Google Workspace Marketplace.
2. Open any email and click the Slack icon in the right sidebar.
3. Click **Connect to Slack** and authorize access.
4. Choose a channel or person from the dropdown and click **Send to [name]**.

To disconnect: Google Workspace Marketplace > Manage apps > Slack > Manage > Remove.

### Slack for Outlook

Available for Office 365 only. Not compatible with on-premises Exchange, POP/IMAP, or national cloud deployments.

1. Install **Slack for Outlook** from Microsoft AppSource.
2. Open an email and click the Slack icon (desktop) or the three dots menu > Slack for Outlook (browser).
3. Select a channel or person and click **Send to Slack**.

## Method 3: Forward emails to Slackbot

**Requires:** All Slack plans

1. Click your profile picture in the sidebar.
2. Select **Preferences > Messages & Media**.
3. Scroll to **Bring your emails into Slack** and click **Get a forwarding address**.
4. Copy the generated address and configure a forwarding rule in your email client.

To disable: Go back to Preferences and click **Disable this address**.

## Method comparison

| Method | Plan | Best for |
|--------|------|----------|
| Channel email address | Paid plans | Team-wide visibility, auto-forwarding |
| Gmail/Outlook plugin | All plans | Individual email forwarding |
| Slackbot forwarding | All plans | Personal inbox consolidation |

## FAQ

**Can I send emails to Slack on a free plan?**
Yes. Gmail/Outlook plugins and Slackbot forwarding work on all plans. Channel email addresses require a paid plan.

**Does HIPAA compliance affect sending emails to Slack?**
Yes. HIPAA-compliant Enterprise Grid organizations cannot send emails to Slack.

**Why are my emails not showing up in Slack?**
Incoming emails may be disabled for your workspace. Contact an owner or admin to check workspace settings.

**Can I customize how forwarded emails look in Slack?**
Yes for channel email addresses (custom icon and display name). Plugins and Slackbot forwarding use default formatting.

## Related

- [How to Deploy Your First Workflow in Slack](/blog/deploy-first-slack-workflow)
- [Connect Hermes Agent to Your Slack Workspace](/blog/connect-hermes-agent)
- [Slack CI/CD Best Practices](/blog/slack-cicd-best-practices)
