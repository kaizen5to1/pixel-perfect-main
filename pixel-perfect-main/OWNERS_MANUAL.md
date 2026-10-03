# 📘 Martabaan Website: Non-Coder Owner's Manual & Guide
**Everything you need to know to manage, edit, publish, and run your website without coding knowledge.**

---

## 👋 Welcome & Introduction

Congratulations on your new website for **Martabaan Restaurant & Bakery**!

This website was custom-built with high speed, mobile responsiveness, and modern design. **You do NOT need to be a software engineer or programmer to manage this website.** 

This manual is written in plain, simple language to guide you step-by-step on:
1. [How to Use and Understand This Website](#1-how-to-use-and-understand-this-website)
2. [The "Single File" Magic: Where Everything Lives](#2-the-single-file-magic-where-everything-lives)
3. [How to Edit Any Text (Phone, Address, Timings, Dishes, Prices)](#3-how-to-edit-any-text)
4. [How to Add New Text (New Dishes, New Categories, New Hours)](#4-how-to-add-new-text)
5. [How to Remove Text (Deleting Sold-out Items or Outdated Info)](#5-how-to-remove-text)
6. [How to Edit / Replace an Image (The Easiest Trick)](#6-how-to-edit-or-replace-an-image)
7. [How to Add a New Image](#7-how-to-add-a-new-image)
8. [How to Remove an Image](#8-how-to-remove-an-image)
9. [How to Buy a Domain (e.g., martabaan.com or martabaan.in)](#9-how-to-buy-a-domain)
10. [How to Publish and Connect Your Website to the Internet](#10-how-to-publish-and-connect-your-website)
11. [Troubleshooting & The "Emergency Undo" Button](#11-troubleshooting--the-emergency-undo-button)

---

## 1. How to Use and Understand This Website

Your website serves as your restaurant's digital front door. Here is how your customers use it and how it brings business to Martabaan:

### **Key Customer Actions:**
* **Browsing on Mobile Phones:** Over 85% of restaurant diners visit from their smartphones. Your site has a quick-action drawer menu with instant **"Reserve a Table"** and **"Call Us"** buttons.
* **Exploring the Menu:** Customers can tap through 10 categories (Beverages, Chaap, Paneer & Dal, Biryani, Bakery, etc.) or click the physical menu cards to view them full-screen with pinch-to-zoom.
* **Ordering Food Online:**
  * **Direct Phone Orders:** Tapping *"Order by Phone"* opens the phone dialler with Martabaan's number ready.
  * **Swiggy Orders:** Tapping *"Order on Swiggy"* opens Martabaan's official Swiggy store in a new tab.
  * **Zomato Orders:** Once your Zomato link is added, customers can order through Zomato in one click.
* **Finding the Restaurant & Booking a Table:**
  * Customers tap *"Reserve a Table"* to book via Google Reserve.
  * Customers tap *"Get Directions"* to open Google Maps with step-by-step navigation directly to Shop 4 & 5, Shree Brahma Square, Sector 1, Greater Noida.
* **Social Proof:** Displays your verified 4.4★ rating with a link to read real reviews on Swiggy Dineout.

---

## 2. The "Single File" Magic: Where Everything Lives

To make updates effortless, **all the information on the website is stored in one single file:**

📁 `src/data/site.ts`

You never need to touch complex code files, HTML layouts, or CSS styles. Whenever you want to change a phone number, address, price, dish name, or image link, you only open this one file.

### **The Easiest Ways to Open and Edit This File:**
* **Option A (Directly in Web Browser on GitHub - Recommended):**
  1. Open your website's GitHub repository in any browser (Chrome, Edge, Safari).
  2. Click on the `src` folder $\rightarrow$ click on `data` $\rightarrow$ click on `site.ts`.
  3. Click the **Pencil Icon** (Edit) on the top-right.
  4. Make your text changes just like in a Word document or email.
  5. Scroll to the bottom and click the green button: **Commit changes** (Save).
* **Option B (On Your Computer):**
  1. Open the project folder in any free text editor (like **VS Code** or even **Notepad**).
  2. Open `src/data/site.ts`.
  3. Edit, save the file (`Ctrl + S`), and you're done!

---

## 3. How to Edit Any Text

> [!IMPORTANT]
> **The Golden Rule for Non-Coders:**  
> When editing text, always keep the quotation marks (`""`) and commas (`,`) in place. Only change what is *inside* the quotation marks!

### **A. How to Change Phone Numbers**
In `src/data/site.ts`, find lines 20-21:
```typescript
phoneDisplay: "+91 81782 33039",
phoneHref: "tel:+918178233039",
```
* **To change the number:**  
  Change `+91 81782 33039` to your new display number.  
  Change `tel:+918178233039` to `tel:+91` followed by your new 10 digits without spaces.

### **B. How to Change Restaurant Address**
In `src/data/site.ts`, find lines 23-28:
```typescript
address: {
  line1: "Shop 4 & 5, Shree Brahma Square",
  line2: "Behind ACE City, Sector 1, Aimnabad",
  city: "Greater Noida",
  region: "Uttar Pradesh",
  postalCode: "201318",
  country: "IN",
},
```
Simply edit any line between the quotation marks.

### **C. How to Change Opening Hours**
In `src/data/site.ts`, find lines 50-53:
```typescript
hours: {
  verified: false,
  rows: [{ days: "Monday – Sunday", time: "To be confirmed" }],
},
```
Change it to your actual timings, and change `verified: false` to `verified: true`:
```typescript
hours: {
  verified: true,
  rows: [{ days: "Monday – Sunday", time: "11:00 AM – 11:00 PM" }],
},
```

### **D. How to Change a Dish Name or Price**
In `src/data/site.ts`, scroll down to `export const menu`. Each dish looks like this:
```typescript
["Dal Makhani", "₹230"],
```
* If Dal Makhani price increases to ₹250, change `"₹230"` to `"₹250"`:
```typescript
["Dal Makhani", "₹250"],
```
* If you want to rename a dish:
```typescript
["Special Dal Makhani Handi", "₹250"],
```

### **E. How to Add Your Zomato Link**
In `src/data/site.ts`, find line 45:
```typescript
zomatoUrl: null as string | null,
```
When you get your official Zomato store link, replace `null` with your link in quotes:
```typescript
zomatoUrl: "https://www.zomato.com/ncr/martabaan-greater-noida" as string | null,
```
The website will automatically display the active **"Order on Zomato"** button!

---

## 4. How to Add New Text

### **A. How to Add a New Dish to the Menu**
1. Open `src/data/site.ts`.
2. Scroll to the category you want to add the dish to (for example, `Paneer & Dal` or `Tikka Shikka`).
3. Copy an existing line, paste it on a new line, and change the dish name and price.

**Example: Adding "Paneer Lababdar" to Paneer & Dal:**
```typescript
...dishes("Paneer & Dal", [
  ["Paneer Highway Butter Masala", "₹230"],
  ["Kadhai Paneer", "₹240"],
  ["Paneer Lababdar", "₹260"],  // <-- NEW DISH ADDED HERE!
  ["Dal Bukhara", "₹240"],
  ["Dal Makhani", "₹230"],
]),
```
*(Make sure to put a comma `,` at the end of the line).*

### **B. How to Add Split Timings (e.g., Weekday vs Weekend)**
In `src/data/site.ts`, under `hours:`, add multiple rows inside the brackets:
```typescript
hours: {
  verified: true,
  rows: [
    { days: "Monday – Friday", time: "12:00 PM – 11:00 PM" },
    { days: "Saturday – Sunday", time: "11:00 AM – 11:30 PM" },
  ],
},
```

---

## 5. How to Remove Text

### **A. How to Remove a Dish from the Menu**
If a dish is discontinued or permanently sold out:
1. Open `src/data/site.ts`.
2. Find the dish line in `export const menu`.
3. Simply select that line and press **Backspace/Delete**.
4. Save the file.

### **B. How to Temporarily Hide Zomato or Swiggy Ordering**
If your online kitchen on Zomato or Swiggy is closed:
* Set the link to `null`:
```typescript
zomatoUrl: null as string | null,
```
When set to `null`, the website automatically replaces the delivery button with a friendly *"Call instead"* button so you never lose customer orders.

---

## 6. How to Edit or Replace an Image

### **The "No-Code" Secret Trick (Zero Editing of Code Required):**
All images displayed on the website are stored inside the folder:
📁 `src/assets/`

Notice how the files are named:
* `hero.jpg` $\rightarrow$ The large banner picture at the top of the homepage.
* `bakery.jpg` $\rightarrow$ The main bakery section picture.
* `paneer-tikka.jpg` $\rightarrow$ The paneer tikka photo.
* `dining.jpg` $\rightarrow$ The dining hall ambience photo.
* `cakes.jpg` $\rightarrow$ The bakery cakes photo.

**To replace any photo without touching a single line of code:**
1. Pick your new photo from your phone or camera.
2. Rename your new photo file to match the exact name you want to replace (for example: rename your new image to `hero.jpg`).
3. Drag and drop it into `src/assets/` to overwrite the old file.
4. That's it! The website will now show your new picture automatically!

> [!TIP]
> **Photo Quality Tip:**  
> Use `.jpg` or `.png` images. Keep image file sizes between **150 KB and 600 KB**. If a photo from your phone is 5MB or 10MB, compress it first using a free website like [tinypng.com](https://tinypng.com) so the website loads instantly on mobile 4G/5G networks.

---

## 7. How to Add a New Image

To add a completely new photo to the **Photo Gallery** section:

1. Copy your new image into `src/assets/` (e.g. name it `tandoori-platter.jpg`).
2. Open `src/data/site.ts`.
3. At the top of `src/data/site.ts` (around line 10), add an import line:
```typescript
import tandooriPlatter from "@/assets/tandoori-platter.jpg";
```
4. Scroll down to `export const gallery` (around line 173) and add a new row:
```typescript
export const gallery = [
  { src: tandooriPlatter, alt: "Delicious Tandoori Platter", tag: "Food & drinks", w: 1280, h: 1024 },
  ...
];
```
5. Save the file. Your new photo is now live in the interactive gallery and lightbox viewer!

---

## 8. How to Remove an Image

1. Open `src/data/site.ts`.
2. Scroll to `export const gallery`.
3. Delete the line corresponding to the image you want to remove.
4. Save the file.

---

## 9. How to Buy a Domain

A domain is your restaurant's internet address (such as `martabaan.com` or `martabaan.in`).

### **Step-by-Step Guide to Buying Your Domain:**
1. **Choose a Registrar:**
   * Recommended registrars: **GoDaddy India** ([godaddy.com](https://www.godaddy.com/en-in)), **Hostinger India**, or **Cloudflare Registrar**.
2. **Search for Your Name:**
   * Search for `martabaan.in` or `martabaan.com` or `martabaanrestaurant.com`.
3. **Select and Purchase:**
   * A `.in` domain usually costs around **₹499 to ₹899 per year**.
   * A `.com` domain usually costs around **₹899 to ₹1,200 per year**.
   * Pay online using UPI, Net Banking, or Credit/Debit Card.
4. **Important Security Tip:**
   * Always turn on **Auto-Renew** so you never lose ownership of your restaurant's domain.
   * Write down your login email and password in [`HANDOVER.md`](file:///c:/Users/Dell/Downloads/pixel-perfect-main/pixel-perfect-main/HANDOVER.md).

---

## 10. How to Publish and Connect Your Website

Your website is pre-configured to run on **Cloudflare Workers / Pages**. 

Cloudflare is a world-leading web hosting network. It offers:
* **Zero Monthly Cost** (generous free tier handling up to 100,000 visitors every day).
* **Super-Fast Edge Speed** across India and worldwide.
* **Free SSL Certificate** (the secure green lock icon 🔒 in browsers).

### **Step-by-Step Publishing Process:**

#### **Method 1: Connect GitHub to Cloudflare (Easiest & Fully Automated)**
1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/) and create a free account.
2. Click on **Workers & Pages** in the left sidebar $\rightarrow$ click **Create application** $\rightarrow$ select **Pages** tab.
3. Click **Connect to Git** and choose your GitHub repository.
4. In Build Settings:
   * **Framework Preset:** None / Vite
   * **Build command:** `npm run build`
   * **Build output directory:** `.output/public`
5. Click **Save and Deploy**.
6. Cloudflare will build and publish your website within 60 seconds!
7. **Future Updates:** Whenever you edit `site.ts` on GitHub, Cloudflare automatically updates your live website in real time without you pressing any buttons!

#### **Method 2: One-Time Manual Publish from Computer**
If you or your staff are running the project from a computer with Node.js installed:
1. Open terminal / PowerShell in the project folder.
2. Run:
```sh
npm install
npm run build
npx nitro deploy --prebuilt
```
3. Follow the on-screen prompt to sign into your Cloudflare account. Your website is published immediately.

---

### **Connecting Your Custom Domain (e.g., martabaan.in):**
1. In your Cloudflare dashboard, open your deployed project under **Workers & Pages**.
2. Click on **Custom domains** tab $\rightarrow$ click **Set up a custom domain**.
3. Type in your registered domain (e.g. `martabaan.in` or `www.martabaan.in`).
4. Follow Cloudflare's step-by-step instructions:
   * If you bought your domain on GoDaddy, log into GoDaddy and update the Nameservers (DNS) to the two nameservers Cloudflare shows you (e.g., `ns1.cloudflare.com`).
5. Within a few hours (often within 15 minutes), your domain is active and live worldwide!

---

## 11. Troubleshooting & The "Emergency Undo" Button

### **"What if I made a typo or deleted something by mistake?"**
Don't panic! Because your website is backed up on **GitHub**, every single edit is recorded in history.
* **The Undo Button:** If you make a mistake, simply go to your GitHub repository, click on **Commits** (History), find the previous working version, and click **Revert**. Everything will instantly return to normal!

### **Common Mistakes to Check:**
| Symptom | Cause | Easy Solution |
| :--- | :--- | :--- |
| **Site didn't update after saving?** | Your phone or computer browser has stored the old page in memory. | Open the site in an **Incognito / Private tab** or press `Ctrl + F5` on your computer to force refresh. |
| **Menu price shows an error?** | A quotation mark or comma was accidentally deleted. | Check `src/data/site.ts`. Ensure every dish looks like: `["Dish Name", "₹200"],`. |
| **A photo is not showing up?** | File name spelling mistake or file format issue. | Make sure the file name matches exactly (e.g. `hero.jpg`, all lowercase). |

---

## 12. Quick Reference Summary Card

Print or save this cheat sheet for your restaurant manager:

```
========================================================================
MARTABAAN RESTAURANT & BAKERY - WEBSITE MANAGEMENT CHEAT SHEET
========================================================================
1. All website content lives in: src/data/site.ts
2. All pictures live in:         src/assets/
3. To edit dishes or prices:     Open src/data/site.ts -> edit dish rows
4. To swap a picture:           Name new photo with old name -> replace in src/assets/
5. Free hosting dashboard:      https://dash.cloudflare.com
6. Support contact:             Ishaan Sareen (14-day warranty included)
========================================================================
```

---
*Created with care for Martabaan Restaurant & Bakery.*
