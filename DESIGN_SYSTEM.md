# Contractor OS — Design System

Design source of truth for all website work, visual improvements, and new landing page sections.

Read this file before making any visual or structural changes to the website.

---

## 1. Brand Feel

Contractor OS is a contract control system for contractor businesses.

The brand feel is:

- **Practical** — built around real operations, not theoretical software
- **Premium** — credible enough to sell a £1k–£5k consulting or implementation offer
- **Contractor-led** — the language, problems, and visuals come from the contractor world
- **Operational** — the site shows how work is controlled, not just promised
- **Calm** — confident without being flashy; clear without being cold
- **Commercially sharp** — every section earns its place by serving the buyer's decision

The website is not a generic SaaS landing page. It is not an AI product. It is not a startup portfolio. It reads like a serious UK B2B service company that understands how contractor businesses actually run.

---

## 2. Design Goal

The website must feel like a company that housing contractor businesses — voids, repairs, planned works, FM, extra care, maintenance — would trust with live contracts worth hundreds of thousands of pounds.

A buyer visiting this page should feel:

> "These people understand my operation."

Not:

> "This looks like another software demo."

Every visual, heading, and section must reinforce operational credibility, not generic technology positioning.

---

## 3. Visual Rules

### Do

- Use clean layout with strong whitespace between sections
- Use a consistent grid and clear visual hierarchy
- Use software-style UI panels built from HTML and CSS to show the product
- Use realistic, fictional demo data in all panels and mockups
- Use subtle box shadows to lift cards off the background
- Use colour purposefully — navy for authority, orange for action and attention, green sparingly for completion states
- Use inline SVG icons that are clean and professional
- Use section labels (small uppercase orange text) above every section heading
- Use an orange horizontal rule (40px wide, 3px tall) below section labels for rhythm
- Use two-column layouts on desktop for hero, portal preview, and mobile view sections
- Keep cards scannable — short heading, short description, one clear detail

### Do not

- No neon colours
- No heavy or colourful gradients (subtle repeating-line textures on dark sections are acceptable)
- No generic SaaS blobs or shapes
- No childish icons or illustration-style graphics
- No fake screenshots or imported dashboard images
- No stock photo feel
- No customer logos unless real logos are explicitly provided
- No invented testimonials
- No unsupported savings claims
- No AI-heavy language or visuals
- No clutter — every element must have a clear purpose
- No Lorem Ipsum

---

## 4. Colours

All colours are defined as CSS custom properties in `:root` inside `styles.css`.

| Token | Hex | Use |
|---|---|---|
| `--navy` | `#0B2A4A` | Primary background, headings, nav, dark sections |
| `--navy-mid` | `#0e3460` | Not currently in use — reserved |
| `--navy-deep` | `#060f1a` | Footer background |
| `--orange` | `#FC952A` | Primary CTA, section labels, active accents, dividers |
| `--orange-dk` | `#df7f18` | CTA hover state |
| `--orange-pale` | `rgba(252,149,42,0.10)` | Soft orange tint backgrounds |
| `--offwhite` | `#F7F8FA` | Section alternating backgrounds, card insets |
| `--white` | `#ffffff` | Card backgrounds, screen backgrounds |
| `--text` | `#0F1115` | All body text |
| `--muted` | `#5B6472` | Secondary text, descriptions, metadata |
| `--border` | `#E6E8ED` | Card borders, dividers, row separators |
| `--border-dk` | `#d0d4db` | Hover border states |
| `--green` | `#1F9D55` | Success states only — tick marks, completed items |
| `--green-pale` | `#dcfce7` | Success badge backgrounds |
| `--red-pale` | `#fee2e2` | Error badge backgrounds |
| `--red` | `#dc2626` | Error states, blocked status indicators |

### Colour use rules

- Orange is the action colour. Use it on CTAs, section labels, the orange divider bar, and active/highlight accents only.
- Navy is the authority colour. Use it for headings, the header, dark section backgrounds, product screen headers, and icon backgrounds.
- Green is a completion colour only. Use it for ticks, "done" states, evidence checklist items marked complete, and the "Clear" job tag. Do not use it decoratively.
- Red signals a problem. Use it for blocked, missing, or failed states in product panels. Do not use it as a design accent.
- Off-white is the alternating section background. Sections alternate between `--white` and `--offwhite` to create rhythm without visible dividers.

---

## 5. Typography

Fonts are loaded via Google Fonts in `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
```

The `@import` is at the top of `styles.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Sora:wght@600;700;800&family=Inter:wght@400;500;600&display=swap');
```

### Font assignments

| Role | Font | Weight |
|---|---|---|
| All headings (H1–H3) | Sora | 700 |
| Section labels | Inter | 600 |
| Body text | Inter | 400 |
| Supporting text, metadata | Inter | 400–500 |
| CTA buttons | Inter | 600 |
| Product panel labels | Sora | 600–700 |

### Type scale

| Element | Size | Line height | Notes |
|---|---|---|---|
| H1 (hero) | `clamp(1.9rem, 4.2vw, 3rem)` | 1.13 | Letter spacing −0.03em |
| H2 (section title) | `clamp(1.5rem, 3vw, 2.1rem)` | 1.2 | Letter spacing −0.025em |
| H3 (card heading) | `0.97rem` | 1.3 | Letter spacing −0.01em |
| Body (main) | `1.05rem` | 1.8 | — |
| Body (cards) | `0.88–0.93rem` | 1.65 | — |
| Section label | `0.72rem` | — | Uppercase, letter spacing 0.12em |
| Product panel label | `0.78–0.85rem` | — | — |
| Small / metadata | `0.7–0.77rem` | — | — |

### Mobile scaling

- H1: floor at `1.7rem` on screens below 480px
- H2: `clamp()` handles scaling automatically
- Body: maintain `0.98rem` minimum on mobile
- Section gap reduces from `96px` to `52–64px` below 768px

---

## 6. Layout System

### Container

```css
max-width: 1100px;
margin: 0 auto;
padding: 0 32px;   /* 20px on mobile */
```

### Section spacing

| Breakpoint | Section padding |
|---|---|
| Desktop (≥768px) | `96px` top and bottom |
| Tablet (≥480px, <768px) | `64px` top and bottom |
| Mobile (<480px) | `52px` top and bottom |

### Section background alternation

Sections alternate `--white` and `--offwhite` to create visual rhythm. Dark navy sections (`guardrails`, `workflow-strip`, `final-cta`) sit at key positions and act as contrast anchors.

Current section order and backgrounds:

| Section | Background |
|---|---|
| Hero | `--navy` |
| Video explainer | `--offwhite` |
| Workflow strip | `--navy` |
| Inside Contractor OS | `--offwhite` |
| Client portal preview | `--white` |
| Problem | `--offwhite` |
| Mobile view | `--offwhite` |
| Offer | `--white` |
| Review areas | `--offwhite` |
| What you get | `--white` |
| Guardrails | `--navy` |
| Who it is for | `--offwhite` |
| How it works | `--white` |
| FAQ | `--offwhite` |
| Final CTA | `--navy` |
| Footer | `--navy-deep` |

### Grid patterns

| Layout | Columns | Collapses at |
|---|---|---|
| Hero | 2-col (copy + panel, `1fr 420px`) | 900px → 1-col |
| Product screens | 2×2 grid | 900px → 2-col, 768px → 1-col |
| Review cards | 3-col | 1024px → 2-col, 600px → 1-col |
| Deliverables | `auto-fill, minmax(280px, 1fr)` | Fluid |
| Guardrails | 4-col | 1024px → 2-col, 600px → 1-col |
| Fit grid (who it is for) | 2-col | 768px → 1-col |
| Steps (how it works) | 4-col with connector | 900px → 2-col, 600px → 1-col |
| Client portal | 2-col (copy + mock) | 900px → 1-col |
| Mobile view | 2-col (phone + copy, `320px 1fr`) | 900px → 1-col (phone hidden) |
| Video layout | 2-col (storyboard + panel, `1fr 380px`) | 900px → 1-col (right panel hidden) |

---

## 7. Component Rules

### Header

- Background: `--navy`
- Height: 64px fixed, sticky, `z-index: 200`
- Left: brand wordmark — "Contractor" in white, "OS" in orange, Sora 700
- Centre/Right: tagline (hidden on mobile) + CTA button
- CTA button: orange, `border-radius: 4px`, small text (0.875rem)
- Mobile: shows hamburger toggle; reveals a full-width CTA panel below the nav bar
- Bottom border: `1px solid rgba(255,255,255,0.07)` — barely visible separator

### Hero

- Dark navy background with subtle vertical repeating-line texture (1px lines, 80px spacing, very low opacity)
- Two columns: left copy, right panel
- Left: eyebrow label → H1 → subheadline → bullet list → primary CTA
- Right: `hero-panel` — dark-glass style card (5% white fill, 12% white border, backdrop blur) showing live job cards
- Hero panel shows: job title, dot status indicator, meta text, status tag
- Footer of panel: 3 stats (blocked count, approvals count, missing evidence count)
- H1 at `clamp(1.9rem, 4.2vw, 3rem)`, letter spacing −0.03em
- Right panel hides below 900px — hero becomes single-column

### CTA Buttons

- **Primary (`.btn-primary`)**: orange `#FC952A`, white text, `border-radius: 8px`, 15px/30px padding
- Box shadow: `0 2px 12px rgba(252,149,42,0.35)` — orange glow lifts the button
- Hover: darker orange `#df7f18`, stronger shadow `0 4px 18px rgba(252,149,42,0.45)`
- Active: `transform: scale(0.98)`
- Arrow variant (`.btn-arrow`): appends `→` via `::after`, slides right 3px on hover
- Mobile: full width, centred
- One primary CTA only per page. Do not add secondary competing CTAs.

### Software Mockup Panels (hero panel, product screens)

- Dark-section panels use: `rgba(255,255,255,0.05)` fill, `rgba(255,255,255,0.12)` border, `border-radius: 14px`
- Light-section product screens use: white fill, `--border` border, `--navy` header bar, `border-radius: 14px`
- Screen header: navy background, orange letter badge, Sora heading in white
- Rows: key/value pairs with `--border` separators, 8px vertical padding
- Status badges: small pill labels (`border-radius: 99px`) — amber, red, green, active styles defined
- Alert rows: very light tinted background (3–5% red or amber) with full-bleed negative margin
- Next action block: `--offwhite` inset background, orange label, text below
- No fake screenshots. All panels are built from HTML and CSS with fictional demo data.

### Product Cards (review areas)

- White background, `--border` border, `border-radius: 14px`, `padding: 28px 24px 22px`
- `box-shadow: 0 1px 3px rgba(11,42,74,0.06)` at rest
- Hover: `box-shadow: 0 4px 20px rgba(11,42,74,0.10)`, `border-color: #d0d4db`
- Card number: orange, Sora, 0.7rem, uppercase, letter spacing
- Heading: navy, Sora, 0.97rem, 700
- Description: muted text, 0.88rem
- Example: italic, `--offwhite` background, 2px left border in `--border-dk`

### Video Preview Block

- Left: storyboard scenes — a bordered/rounded white card with numbered scene rows
- Each scene row: scene number column (offwhite, right border), SVG visual icon, caller label, dialogue text
- Scene states: neutral, found (green tint), problem (red tint)
- Right: navy video placeholder card (16:9 aspect ratio) with play button, label, and sub-label; summary panel below
- Right column hides below 900px
- Video card is a placeholder — replace with `<iframe>` embed when footage is available

### Workflow Strip

- Dark navy background
- Full-width row of 7 steps: Instruction → Audit → Approval → Materials → Works → QA → Sign-off
- Each step: circle icon (44px, rgba white fill), label below
- Arrows between steps: muted white, hidden on mobile
- Final step (Sign-off): orange icon background and orange label
- Wraps gracefully on tablet; collapses to vertical on mobile
- Explanatory note below the row in muted white

### Client Portal Preview

- Two-column layout: copy left, browser chrome mockup right
- Browser chrome: offwhite bar with three dot indicators + URL bar (styled text, not a real input)
- Portal screen: white background, site name + ref, stage badge, row-by-row key/value status display
- Amber highlight rows for awaiting/blocked items
- Approval action card: inset card with title, variation ref, and disabled action buttons (visual only)
- Communicates client visibility without exposing internal systems

### Evidence Checklist / Handover Status

- Flat list of evidence items with three states: done (green tint), missing (red tint), pending (offwhite)
- Each row: coloured circle icon (✓ / ! / ○) + item label
- Below the list: a progress bar — `--border` track, orange fill, percentage text
- Communicates handover completeness at a glance

### Mobile Phone Mockup

- CSS phone frame: 260px wide, navy background, `border-radius: 32px`, deep shadow
- Notch: small dark element at the top
- Screen: offwhite background inside the frame
- Status bar: navy strip with time and signal dots in white
- Header: navy section with greeting and date
- Job list: today's 3 jobs with colour dot, job name, stage, chevron
- Quick actions grid: 2-column grid of white action tiles with inline SVG icons
- Flag blocker tile: light red tint
- Phone is hidden below 900px on the mobile view section — copy remains visible

### Footer

- Background: `--navy-deep` (`#060f1a`)
- Left: Contractor OS wordmark
- Right: email address link + copyright line
- Email link transitions from muted white to brighter white on hover
- No unnecessary links. Clean and minimal.

---

## 8. Product Visual Rules

Software visuals must show real contractor control concepts. They should look like clean product UI, not marketing graphics.

### What to show in visuals

- **Live jobs**: job title, type (void/repair/FM/planned works), current stage, owner, days open
- **Blockers**: red dot status, "Blocked" tag, reason for blockage, days blocked
- **Approvals**: amber dot, "Approval" tag, what is awaiting sign-off, which party
- **Materials**: ordered / awaiting delivery / approval pending tags on line items
- **Evidence**: before photos, after photos, certificates, QA checks — each with a done/missing/pending state
- **Visits**: on-site status, operatives, work being done today
- **Client visibility**: current stage, last update, next steps, outstanding blockers, photo count
- **Next actions**: specific, assigned, dated — not vague instructions

### Fictional demo data in use

All panels use consistent fictional demo data. When creating new sections, reuse these references for continuity:

| Reference | Detail |
|---|---|
| Site / job | Fountain View — Kitchen Replacement |
| Contract ref | FV-2026-041 |
| Stage | Works In Progress |
| Owner | J. Marsh |
| Active issue | Materials delivery unconfirmed |
| Today on site | Kitchen strip-out in progress |
| Recent completion | EICR completed 29 Apr 2026 |
| Variation | Additional tiling — VAR-041-02 |
| Other jobs | 14 Ashbrook Lane (Void), Block C (Planned Works), 7 Thornfield Road (Repairs), FM Heating Site B, Extra Care Maple House |

### Visual quality bar

- Panel headers should use the navy bar + letter badge + Sora heading pattern
- Status tags must be pill-shaped, colour-coded, and small (0.67–0.72rem)
- Every panel must show a realistic operational state, not a pristine empty screen
- Progress bars, evidence checklists, and stat rows must show work-in-progress states
- Avoid showing "all green, all complete" states — show realistic partial completion

---

## 9. Conversion Rules

### Primary CTA

**Book a Contract Control Review**

This is the only primary CTA on the page. It appears in:
1. Navigation (desktop) — "Book a Review"
2. Navigation (mobile panel) — full label
3. Hero section
4. Final CTA section

All instances use the placeholder mailto link until a booking tool is configured:
```
mailto:hello@contractoros.co.uk?subject=Contract%20Control%20Review
```

Search for `mailto:hello@contractoros.co.uk` to find and replace all instances when a real link is available.

### Conversion rules

- Do not add a second competing CTA (e.g. "Watch Demo" as a primary action)
- Do not add a "Start Free Trial" button — there is no trial product
- Do not add pop-ups, countdown timers, or fake urgency
- Do not lead with AI, automation, or technology features
- Do not make unsupported savings claims ("save 30% of your time")
- Do not invent case studies, testimonials, or client logos
- Do not add statistics without a cited source
- Keep copy buyer-led: talk about their delayed jobs, their chasing load, their margin risk
- The offer is the Contract Control Review — a paid, practical review. Position it accordingly.

---

## 10. Design Quality Checklist

Run this checklist before finishing any design change or new section.

### Accessibility

- [ ] One H1 only on the page
- [ ] Heading order is logical (H1 → H2 → H3, no skipped levels)
- [ ] All CTA buttons have `aria-label` text
- [ ] All decorative SVGs have `aria-hidden="true"`
- [ ] All interactive elements are keyboard accessible
- [ ] Colour contrast is readable (navy/white, orange/navy, muted on white)
- [ ] Colour is not the only way meaning is communicated (tags also have text labels)
- [ ] Page works for core content without JavaScript

### Layout

- [ ] No horizontal scrolling at 375px, 768px, 1024px, 1440px
- [ ] Hero shows correctly at all widths (panel hides cleanly below 900px)
- [ ] All grids collapse cleanly at their defined breakpoints
- [ ] Cards stack vertically on mobile without overflow
- [ ] Section spacing is reduced correctly on mobile
- [ ] Nav CTA is hidden on mobile and replaced by the hamburger panel

### Typography

- [ ] Sora is used for all headings
- [ ] Inter is used for all body text
- [ ] Font sizes are not below 0.67rem anywhere
- [ ] Line heights are at least 1.5 for body text

### Visual

- [ ] No fake testimonials, invented client logos, or unsupported claims added
- [ ] No Lorem Ipsum text present
- [ ] All demo data is clearly fictional (no real addresses, names, or companies)
- [ ] No neon colours, heavy gradients, or generic SaaS shapes introduced
- [ ] Inline SVG icons are clean and professional
- [ ] Product panels show realistic partial-completion states

### Copy and content

- [ ] Primary CTA wording is "Book a Contract Control Review" (consistent throughout)
- [ ] All CTA links use the placeholder mailto (or have been updated to a real booking link)
- [ ] No AI-heavy language introduced
- [ ] No savings claims without a cited basis
- [ ] Brand tone is practical, plain-speaking, and commercially sharp

### Technical

- [ ] Site remains fully static — no server, no build step, no backend
- [ ] No external dependencies added beyond Sora + Inter from Google Fonts
- [ ] All asset paths are relative (GitHub Pages compatible)
- [ ] No console errors on page load
- [ ] `script.js` still handles FAQ accordion and mobile nav correctly after changes

---

*Last updated: April 2026. Update this file whenever the design system, brand position, or component patterns change.*
