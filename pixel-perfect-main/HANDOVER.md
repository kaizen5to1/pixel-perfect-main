# 📄 Website Handover & Management Guide: Martabaan

## 🔐 Section 1: System Credentials & Ownership
> *Fill in these details before delivering to Martabaan.*

| Asset Type | Platform / Login URL | Username | Password / Action |
| :--- | :--- | :--- | :--- |
| **Domain & Hosting** | `[e.g., Hostinger / GoDaddy]` | `[Insert Email]` | *Set Auto-Renew ON* |
| **Website Admin** | `https://yourwebsite.com` | `[Insert Admin ID]` | `[Insert Temporary Pass]` |
| **Zomato Link** | Outbound CTA Button Link | N/A | `[Insert Zomato URL]` |
| **Swiggy Link** | Outbound CTA Button Link | N/A | `[Insert Swiggy URL]` |

---

## 🍔 Section 2: Editing Content in Code

All menu content, restaurant details, pricing, links, and image references are managed in:

- `src/data/site.ts`

Use this file as the single source of truth for edits:

1. Open `src/data/site.ts`.
2. Update the relevant restaurant facts, menu items, prices, or CTA links.
3. Change image URLs or local asset references there when swapping food photos.
4. Save the file and refresh the app to preview the new content.
5. If a menu item should be hidden or removed, update the relevant data entry in `site.ts` instead of editing component markup.

This keeps the website content centralized and avoids breaking the layout or duplicating values across components.

---

## 🚨 Section 3: Troubleshooting & Scope Parameters

### 🛠️ Quick Self-Fix Checklist
* **Changes not visible?** Clear your mobile phone browser cache or open the link in an Incognito/Private window.
* **Site displaying a server error?** Check your domain registrar dashboard to ensure your annual payment method hasn't expired.

### 📋 Support Clause
* **One-Time Asset Purchase:** This website configuration and associated assets are fully owned by Martabaan upon final settlement.
* **Complimentary Support:** Includes **14 days of hyper-responsive support** via Email/WhatsApp ending on `[Insert Date]`.
* **Post-Support Routine:** Any functional overhauls or theme reconstructions after the window closes will be billed separately.
