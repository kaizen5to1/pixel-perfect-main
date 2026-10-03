# Martabaan Restaurant & Bakery Website

This guide explains how to publish the website and keep its content up to date.

## Important: how website changes work

This project does not include an owner login or visual content-management
dashboard. Updating text or pictures means updating the project files and then
deploying the updated website. If you do not want to edit project files, give
this guide and the requested changes to the person who maintains the website.

The project is built with React, TypeScript, and TanStack Start, and is set up
for **Cloudflare Workers** hosting. It is not a plain three-file HTML/CSS/JS
website.

## Publish the website

### One-time setup

1. Create a [Cloudflare account](https://dash.cloudflare.com/sign-up) and a
   [GitHub account](https://github.com/signup), if needed.
2. Make sure the latest project files are saved in the GitHub repository.
3. Install the current **Node.js LTS** release from
   [nodejs.org](https://nodejs.org/). npm is included with Node.js.
4. Download the project from GitHub using **Code → Download ZIP**, then extract
   it. Open PowerShell (Windows) or Terminal (Mac) in the extracted project
   folder. The correct folder contains `package.json`.

### Deploy or publish an update

Run these commands in the project folder:

```sh
npm install
npm run build
npx nitro deploy --prebuilt
```

On the first deployment, follow the prompts to sign in to Cloudflare and
authorize access. Cloudflare will provide a `workers.dev` website address when
deployment completes. Open it to check the published site.

For later updates, download the latest project files from GitHub and run:

```sh
npm install
npm run build
npx nitro deploy --prebuilt
```

The build must complete successfully before deploying. `npm run dev` starts a
local preview for development; it does not publish the website.

## Buy and connect a domain

A domain is the address customers type, such as `example.com`. Domain
registration is separate from website hosting, and prices and renewal fees vary
by provider.

1. Choose an available domain and register it with a domain provider. Cloudflare
   Registrar is one option if the website is hosted on Cloudflare.
2. In the Cloudflare dashboard, open **Workers & Pages** and select the
   deployed website's Worker.
3. Find **Settings** or **Domains & Routes**, then choose **Add Custom Domain**.
   Enter the domain you registered and follow the instructions.
4. If another company registered the domain, Cloudflare may ask you to change
   its DNS settings at that company. Use the exact DNS instructions Cloudflare
   provides.
5. When the domain is active, open it on a phone and computer to check the
   website.

Keep the domain registration renewed. The website address will stop working if
the domain expires. Hosting and domain registration are separate services.

## Edit website text and restaurant information

Restaurant facts, contact information, external links, menu items, prices, and
the lists of images are primarily in:

```text
src/data/site.ts
```

Some headings, button labels, and descriptive text that appears on the page are
in:

```text
src/components/site.tsx
```

The source files use TypeScript/React syntax. Make a backup or confirm that the
changes are saved in GitHub before editing. Change only the text between quotes
or the relevant menu entry; keep the surrounding punctuation and brackets.

Examples of the information stored in `src/data/site.ts`:

- Restaurant name: `name`
- Phone: `phoneDisplay` and `phoneHref` (update both)
- Address: the fields inside `address`
- Website links: `reserveUrl`, `directionsUrl`, and the ordering URLs
- Menu categories: `menuCategories`
- Menu dishes and prices: entries in `menu`

Menu dishes use this format:

```ts
["Dish name", "₹150"]
```

To change the dish or price, edit the words or price inside the quotes. To add a
dish, add another entry in the correct category in `menu`. To remove one, remove
that dish's complete entry, including its comma as appropriate. Keep prices
accurate and confirm them with the restaurant before publishing.

For general headings or other visible page wording, find and edit the text in
`src/components/site.tsx`. If you are not comfortable editing TypeScript, ask a
web developer to make the change rather than deleting unfamiliar code.

## Add or replace an image

Website image files are stored in:

```text
src/assets/
```

To add an image, place the image file in that folder. Use a simple filename
without spaces, such as `paneer-special.jpg`. Adding a file alone does not make
it appear on the website: the project must import the image and connect it to
the right part of the page in `src/data/site.ts` (and, in some cases,
`src/components/site.tsx`).

For example, an image used by the homepage hero is referenced in the `images`
object in `src/data/site.ts`. Gallery images are listed in the `gallery` array.
Menu card pictures are in `menuCards`; the current menu cards use a shared local
placeholder. Replacing one menu card image requires connecting the new file to
the matching menu-card entry.

Replacing an image usually means adding the new file, changing the image
reference, checking the preview on desktop and mobile, then deploying. Use
images you own or have permission to publish.

## Remove an image

First remove the image from the relevant website list or section in
`src/data/site.ts` or `src/components/site.tsx`. The gallery list is named
`gallery`; the menu-card list is named `menuCards`. Then preview the site and
deploy the change.

Do not delete the image file from `src/assets` until you have checked that no
other part of the site uses it. A single file may appear in several sections.
When in doubt, ask the website maintainer to remove it.

## Check before publishing

- Check spelling, phone number, address, opening hours, menu, and prices.
- Test buttons and links, including phone, maps, reservations, and ordering.
- Check how images crop on both a phone and a computer.
- Run `npm run build` and make sure it succeeds before deploying.
- Open the live domain after deployment and check it again.

If deployment fails, confirm that the terminal is open in the project folder
(the one containing `package.json`) and review the last error message. Do not
deploy if the build has failed. Ask the website maintainer for help if the error
is unclear.
