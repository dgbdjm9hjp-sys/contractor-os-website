# Contractor OS — Contract Control Review Website

Static marketing website for the Contractor OS Contract Control Review offer.

## Purpose

This is a standalone marketing page. It is not connected to the Contractor OS app, Supabase, or any backend service. It has no authentication and no live data.

The goal of the page is to turn housing contractors into booked Contract Control Review calls.

---

## Preview Locally

No build step or server required.

1. Open `index.html` directly in any browser.
2. The page uses only `styles.css`, `script.js`, and inline SVGs — no dependencies.

---

## Push to GitHub

1. Create a new repository on GitHub named `contractor-os-website`.
2. In this folder, run:

```bash
git init
git add .
git commit -m "Initial commit: Contract Control Review landing page"
git remote add origin https://github.com/YOUR-USERNAME/contractor-os-website.git
git push -u origin main
```

---

## Enable GitHub Pages

1. Go to the repository on GitHub.
2. Click **Settings** → **Pages**.
3. Under **Source**, select **Deploy from a branch**.
4. Choose **main** branch, root folder `/`.
5. Click **Save**.
6. GitHub will publish the site at `https://YOUR-USERNAME.github.io/contractor-os-website/`.

---

## CTA Placeholder Note

All CTA buttons currently use a placeholder mailto link:

```
mailto:sean@contractoros.uk?subject=Contract%20Control%20Review
```

When a booking tool (such as Calendly) is set up, replace this link in three places inside `index.html`:

- Nav CTA (desktop)
- Nav CTA (mobile)
- Hero CTA
- Final CTA

Search for `mailto:sean@contractoros.uk` to find all instances.

---

## File Structure

```
contractor-os-website/
├── index.html          Main landing page
├── styles.css          All styles
├── script.js           Mobile nav and FAQ accordion
├── assets/             Placeholder for any future images or icons
├── README.md           This file
└── .claude/
    └── skills/         Claude Code skill definitions for this project
        ├── frontend-landing-page/SKILL.md
        ├── conversion-copy/SKILL.md
        ├── responsive-design/SKILL.md
        ├── accessibility-quality/SKILL.md
        ├── github-pages-deploy/SKILL.md
        └── contractor-os-brand/SKILL.md
```

---

## What Is Not Connected Yet

- Booking link (Calendly or equivalent) — placeholder mailto in use
- Custom domain — not configured
- Analytics — not added
- Contact form — not built (not needed for initial version)
