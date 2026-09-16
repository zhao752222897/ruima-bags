---
version: alpha
name: Ruima Bags Storefront
description: Catalog-style B2B storefront visual system derived from the Shanxi Ruima Trading Co., Ltd. Alibaba.com store — deep navy sign band, a single vivid orange trade bar, white product tiles, and full-bleed photographic media bands.
colors:
  # Brand
  primary: "#FF6A00"
  primary-600: "#C24A00"
  primary-700: "#A63F00"
  primary-ink: "#B03A00"
  secondary: "#17304A"
  tertiary: "#0066CC"
  neutral: "#F5F5F5"
  # Surfaces
  surface: "#FFFFFF"
  surface-subtle: "#F5F5F5"
  surface-muted: "#F4F4F4"
  surface-tint: "#F1F4F9"
  brand-tint: "rgba(252, 106, 6, 0.2)"
  # Ink
  on-surface: "#222222"
  body: "#333333"
  muted: "#666666"
  faint: "#767676"
  on-primary: "#FFFFFF"
  link-vivid: "#007FFC"
  promo: "#E52828"
  # Lines and scrims
  border: "#DAE2ED"
  border-strong: "#DDDDDD"
  scrim: "rgba(0, 0, 0, 0.5)"
  scrim-soft: "rgba(51, 51, 51, 0.2)"

typography:
  display:
    fontFamily: Inter
    fontSize: 56px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Inter
    fontSize: 22px
    fontWeight: 500
    lineHeight: 1.36
  headline-md:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.33
  title-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.38
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.43
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.29
  body-xs:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.33
  label-bold:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.14
  label-badge:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: 700
    lineHeight: 1

rounded:
  none: 0px
  sm: 3px
  md: 4px
  lg: 16px
  xl: 18px
  pill: 100px
  full: 9999px

spacing:
  micro: 2px
  xxs: 4px
  xs: 6px
  sm: 10px
  md: 15px
  lg: 18px
  xl: 20px
  2xl: 30px
  3xl: 40px
  4xl: 70px
  container: 1200px
  media-width: 1920px
  nav-height: 44px
  sign-height: 280px
  scrim-height: 45px
  hero-band-height: 650px
  company-band-height: 280px
  product-item-width: 300px
  footer-info-height: 120px
  grid-columns: 4
  grid-columns-mobile: 2
  gutter-desktop: 20px
  gutter-mobile: 16px

components:
  store-sign:
    backgroundColor: "{colors.secondary}"
    width: "{spacing.container}"
    height: "{spacing.sign-height}"
  store-sign-scrim:
    backgroundColor: "{colors.scrim-soft}"
    height: "{spacing.scrim-height}"
    padding: "{spacing.xl}"
  store-name:
    typography: "{typography.body-md}"
    textColor: "{colors.on-primary}"
  store-nav:
    backgroundColor: "{colors.primary-600}"
    height: "{spacing.nav-height}"
    width: "{spacing.container}"
  store-nav-item:
    typography: "{typography.body-md}"
    textColor: "{colors.on-primary}"
    height: "{spacing.nav-height}"
    padding: "{spacing.md}"
  store-nav-item-selected:
    backgroundColor: "{colors.primary-700}"
    textColor: "{colors.on-primary}"
  button-primary:
    backgroundColor: "{colors.primary-600}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.pill}"
    height: "36px"
    padding: "28px"
  button-primary-hover:
    backgroundColor: "{colors.primary-700}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary-ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.pill}"
    height: "36px"
    padding: "28px"
  button-search:
    backgroundColor: "{colors.primary-600}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.pill}"
    height: "32px"
    padding: "16px"
  module-heading:
    typography: "{typography.headline-lg}"
    textColor: "{colors.primary-ink}"
  product-item:
    backgroundColor: "{colors.surface}"
    width: "{spacing.product-item-width}"
    padding: "{spacing.lg}"
  product-title:
    typography: "{typography.body-sm}"
    textColor: "{colors.on-surface}"
  product-price:
    typography: "{typography.label-bold}"
    textColor: "{colors.body}"
  product-meta:
    typography: "{typography.body-md}"
    textColor: "{colors.faint}"
  trust-chip:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary-ink}"
    typography: "{typography.body-xs}"
    rounded: "{rounded.sm}"
    padding: 16px
  company-banner:
    backgroundColor: "{colors.secondary}"
    height: "{spacing.company-band-height}"
    padding: "{spacing.2xl}"
  company-banner-scrim:
    backgroundColor: "{colors.scrim}"
    typography: "{typography.body-md}"
    textColor: "{colors.on-primary}"
  fact-chip:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.muted}"
    typography: "{typography.body-xs}"
    rounded: "{rounded.sm}"
    padding: 16px
  verification-item:
    backgroundColor: "{colors.surface}"
    height: "90px"
    padding: "{spacing.2xl}"
  verification-label:
    typography: "{typography.label-bold}"
    textColor: "{colors.on-surface}"
  verification-value:
    typography: "{typography.body-md}"
    textColor: "{colors.primary-ink}"
  text-link:
    typography: "{typography.body-md}"
    textColor: "{colors.tertiary}"
  floating-rail:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.md}"
    width: "68px"
  footer:
    backgroundColor: "{colors.surface}"
    padding: "{spacing.3xl}"
  footer-heading:
    typography: "{typography.title-md}"
    textColor: "{colors.on-surface}"
    padding: "{spacing.xl}"
  footer-link:
    typography: "{typography.body-md}"
    textColor: "{colors.body}"
  footer-info-bar:
    backgroundColor: "{colors.surface-muted}"
    textColor: "{colors.muted}"
    height: "{spacing.footer-info-height}"
    padding: "{spacing.2xl}"
  field-input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.body}"
    typography: "{typography.body-md}"
    rounded: "{rounded.pill}"
    height: "{spacing.nav-height}"
    padding: "{spacing.md}"
  field-input-focus:
    border: "2px solid {colors.tertiary}"
---

## Overview

Shanxi Ruima Trading Co., Ltd. sells rolling suitcases, school backpacks, and casual/crossbody bags as a B2B exporter. Its storefront reads as a **trade catalog with a single confident masthead**: a fixed-width 1200px catalog canvas laid over full-bleed 1920px photographic bands, capped by a navy sign board and one vivid orange trade bar. The tone is commercial and unornamented — white product tiles on white, dark ink, orange used as the only "act here" signal, and continuous stacked full-width imagery that communicates manufacturing scale between catalog blocks.

The rebuild must preserve four signature moves exactly, because together they carry the brand:

1. **A navy store sign** (`#17304A`) carrying the store name and its trust badges behind a translucent scrim, with the orange trade bar docked to its bottom edge.
2. **One vivid orange trade bar** — the single saturated element in the upper third of every page — holding flat, uppercase-feeling white navigation labels on a 44px-tall strip.
3. **Full-bleed media bands** that span the whole viewport (1920px wide in the reference, 650px tall for the hero carousel) and are the only place where the brand's colors appear decoratively.
4. **A dense, factual product tile** — square photo, two-line clamped title, bold price line, MOQ line, sold count, and a small verification chip — arranged four-up inside the 1200px canvas.

Personality: industrial, dependable, export-grade. Dense rather than airy, rectangular rather than rounded, photoreal rather than illustrative. Nothing is decorative for its own sake; every element either sells or verifies.

## Colors

The system is a **two-accent scheme on white**: a deep navy for authority surfaces, one orange family for every action, plus a functional blue for links and a neutral ramp for text. Because this storefront sits inside Alibaba.com, the platform's own promotional red (`#E52828`) and platform-blue (`#007FFC`) appear in the surrounding shell; the store's own identity is navy + orange.

- **Primary orange (`#FF6A00`)** is the brand's signature. It is measured directly from the store's search button and the "Contact Supplier" call to action. It is used as a fill on large and non-text surfaces: the trade bar, the primary CTA, badges, icons.
- **Primary 600 (`#C24A00`)** is the accessible text-bearing fill. White 14px labels on `#FF6A00` measure only 2.9:1, which fails the normal-text requirement, so every orange surface that carries a 14px label — the trade bar, the search button, both CTA buttons — uses `#C24A00` (white text = **4.91:1**). This is the single deliberate, accessibility-driven deviation from the sampled pixel value; hue and brand read are preserved, only lightness is corrected.
- **Primary 700 (`#A63F00`)** is the hover/pressed fill (white text = **6.3:1**). The reference's selected navigation item used a darkened orange (`#E85600`) for exactly this role.
- **Primary ink (`#B03A00`)** is orange used as *text*. The reference's section headings (`#FC6A06`) and chip text (`#FF751A`) measure ≈2.9:1 on white; `#B03A00` measures **6.1:1** and is mandated for headings, chip labels, and verification values.
- **Secondary navy (`#17304A`)** is the store canvas behind the sign board and the base color of every masthead. White text on it measures **13.5:1**.
- **Tertiary blue (`#0066CC`)** is the link color. The reference's link blue `#007FFC` measures 3.9:1 on white, so it is retained only as `link-vivid` for icon glyphs and non-text accents; link *text* uses `#0066CC` (**5.6:1**).
- **Neutral (`#F5F5F5`)** is the platform badge fill; `surface-muted` `#F4F4F4` is the footer legal strip; `surface-tint` `#F1F4F9` is the pale blue-grey used for quiet panels.
- **Ink ramp:** `#222222` for headings (**15.9:1**), `#333333` for body copy (**12.6:1**), `#666666` for secondary labels (**5.7:1**), `#767676` for the smallest metadata such as sold counts (**4.55:1** — the floor; do not go lighter).
- **Scrims:** `rgba(0, 0, 0, 0.5)` over photography for centered copy, `rgba(51, 51, 51, 0.2)` for the badge strip over the store sign. Both are measured values; they exist so that white text stays legible over arbitrary merchant imagery, and they must never be removed in favor of "cleaner" imagery.

Never place normal-size text directly on `#FF6A00`, on photography, or on `brand-tint`. Orange never carries body copy.

## Typography

The reference renders everything in Alibaba's proprietary `Alibaba_B2B_Sans` with the fallback chain `Inter, "SF Pro Text", Roboto, "Helvetica Neue", Helvetica, Tahoma, Arial, "PingFang SC", "Microsoft YaHei"`. The rebuild uses **Inter** as the licensed open substitute and keeps the same fallback chain, ending in the CJK faces because product titles, trust chips, and navigation in this catalog are Chinese while brand and section copy is English.

The scale is deliberately shallow and utilitarian — a catalog does not need a display ramp, it needs one heading size, one body size, and two micro sizes.

- **Headings (`headline-lg`, 22px / 500):** module and section titles ("Tile"-style catalog headings, "公司介绍"). The reference sets these in orange at 22px with no letter-spacing; line-height is tight (1.36) so headings sit compactly above grids. Rendered in `primary-ink`.
- **Sub-headings (`headline-md`, 18px / 400):** in-section labels such as "认证类型". Regular weight, not bold — the reference trusts size over weight for hierarchy.
- **Column headings (`title-md`, 16px / 700):** footer and panel column titles, with a 20px bottom margin that is part of the heading token, not the list.
- **Body (`body-md`, 14px / 1.43):** the default for navigation labels, breadcrumbs, MOQ lines, footer links, and descriptive copy. Fourteen pixels is the reference's true base size; do not inflate it to 16px, because the dense four-up catalog grid depends on it.
- **Product titles (`body-sm`, 14px / 1.29):** tighter leading than body copy because titles are clamped to exactly two lines with ellipsis. Two lines at 18px leading = a fixed 36px title block, which is what keeps product tiles in a row aligned.
- **Micro (`body-xs`, 12px / 1.33):** chips, badges, metadata. Never below 12px.
- **Emphasis (`label-bold`, 14px / 700):** prices, MOQ values, verification field names. Price is the one place the catalog uses bold — never bold a product title.
- **Badges (`label-badge`, 12px / 700):** the membership-year badge and similar counters.

Uppercase is not used. The reference's all-caps product-category headline lives inside hero artwork, not in the type system.

## Layout

**Desktop (≥1200px).** A **fixed 1200px catalog canvas** is centered in the viewport; content never stretches beyond it. Media bands break out to **1920px full-bleed** and are centered with a negative inline offset so the band is cropped symmetrically on both sides. The header stack is: store sign (280px tall, 1200px wide) → badge scrim docked to its top (45px) → orange trade bar docked to its bottom (44px) → hero carousel band (1920×650). Below that, catalog modules stack with a **20px vertical rhythm**.

Inside the canvas:

- Product grids are **4 columns of 300px items**, each item padded 18px vertically and 15px horizontally, giving a 270px square image well and 15px visual gutters.
- Media bands are 1920px wide and vary in height from roughly 320px to 1700px; the hero is 650px. They are the page's breathing room — do not add extra vertical margin around them beyond the 20px module rhythm.
- The company panel is one 1200×280 media band with a 50% scrim and 30px inner padding, followed by a 40px-padded white body containing a centered 22px heading and a 3-up grid of 373px verification items (15px/30px padding, 60px circular icon, text offset 70px from the left).
- The supplier summary repeats the same 3-up metric grid, then a right-aligned action pair.
- The footer is a 5-column link block with 40px side padding over a 120px `#F4F4F4` legal strip.

**Tablet (750–1199px).** The canvas becomes fluid at 100% width with 24px gutters; media bands remain full-bleed and keep their aspect ratio, scaling height proportionally with a 320px floor. Product grids step to 3 columns, then 2.

**Mobile (<750px).** The reference itself serves the same fixed 1200px canvas at narrow widths and relies on horizontal panning — that is observed behavior, not a pattern to copy, because it breaks both readability and touch targeting. The rebuild instead:

- uses 16px gutters on a fluid canvas;
- crops media bands to the composition's center at roughly 1.6:1 (hero) instead of preserving 2.95:1, so the artwork's subject survives the crop;
- stacks the store sign scrim above the store name rather than beside it, keeping the 45px-tall badge row intact;
- turns the orange trade bar into one horizontally scrollable 44px-tall strip of nav items with 16px inter-item gaps, keeping the active item's darker fill;
- drops product grids to **2 columns with 12px gutters**, keeping the two-line clamped title, price, and MOQ line exactly as on desktop (the sold count may be dropped first);
- stacks the 3-up verification grid and footer columns into single-column blocks with 20px separation.

Everything that is not listed above is invariant across breakpoints: the navy/orange/white palette, the 20px module rhythm, the 36px pill buttons, the chip geometry, the orange heading color, and the two-line product title clamp.

## Elevation & Depth

The reference is **almost entirely flat**. Depth is not simulated with layered shadows; it is produced by three other means:

1. **Full-bleed photography** as the only large-scale contrast event on the page. A 1920px band reads as "in front of" the white canvas without needing a shadow.
2. **Translucent scrims.** The badge strip on the store sign is `rgba(51, 51, 51, 0.2)`; centered copy over company photography sits on `rgba(0, 0, 0, 0.5)`. These are the system's depth device: they float white text above arbitrary imagery.
3. **Hairline rules.** `1px solid #DAE2ED` outlines circular verification icons, and `#DDDDDD` divides list rows. Borders, not shadows, separate content.

Shadows appear only on genuinely floating chrome, and there they are soft and low: the fixed contact rail is white with a 4px radius and a `0 2px 10px rgba(0, 0, 0, 0.1)` shadow, pinned `right: 16px / top: 300px` at `z-index: 1000`. The chat launcher uses a slightly stronger `0 4px 20px rgba(0, 0, 0, 0.25)`. Nothing else in the catalog may take a shadow — in particular, product tiles are **not** carded: they are white on white and separated by whitespace alone.

When a product tile is hovered, do not lift it with a shadow. Use the reference's own vocabulary: a 1px `#DDDDDD` border on the tile and an orange title color change, both over 0.2s.

## Shapes

The shape language is **rectilinear and unrounded, with a single exception: pills.** Surfaces — the sign board, the orange trade bar, media bands, product tiles, the 3-up verification items, footer blocks — all use a **0px radius**. This is what gives the storefront its catalog-sheet feel.

- **Chips and badges:** 3px (`rounded.sm`) for trust chips and fact chips — enough to read as a chip, not enough to soften the grid.
- **Floating panels:** 4px (`rounded.md`) for the contact rail and popovers.
- **Counters:** 16px (`rounded.lg`) for the membership-year badge, 18px (`rounded.xl`) for wide utility buttons.
- **Buttons:** 100px (`rounded.pill`) — every button in the system is a pill, including the 32px-tall search button and the 36px-tall CTAs.
- **Icon containers:** 100% (`rounded.full`) for the 60px circular icon wells and the 16px verified badge glyphs.

The rule to hold: **no radius between 5px and 15px, and no radius on any container larger than a chip.** Mixing a rounded card into this grid breaks the look immediately.

## Components

**Store sign.** A 1200×280 media plate holding the merchant's sign artwork, rendered over `secondary` navy so letterboxed artwork still reads as intentional. The badge scrim is docked to its top: 45px tall, `rgba(51, 51, 51, 0.2)`, 20px left padding, containing — in order — the membership-year badge (30×16px, `#F5F5F5` fill, 16px radius, 2px padding, 12px/700 dark label), 16px gold-supplier and verified-supplier glyphs in `tertiary` blue with 5px gaps, the store name `h2` in 14px white with a 10px left offset, and a 12px white disclosure chevron.

**Store nav bar.** 1200px wide, 44px tall (the reference paints a 40px orange plate behind 44px items), fill `primary-600`. Items are flat links: 14px white, 2px/15px padding, 20px line-height, and a 110px nominal width. Active and hover state fills `primary-700` — a full-height darker block, not an underline. A store search field sits at the trailing edge: pill input on white plus a 32px `primary-600` pill button with a 16px search glyph. Every nav item is at least 44px tall, satisfying the touch-target minimum without visual bulk.

**Hero carousel.** A 1920×650 full-bleed band, absolutely centered on the canvas. Slides are artwork-only. Controls are 25.6px circular dots that light in `primary-ink` when selected; the carousel advances automatically with a 0.5s transform transition, and dots are the only interactive chrome.

**Media band.** Any 1920px-wide photograph carrying a campaign or capability message, stacked with the 20px module rhythm. No border, no radius, no caption. Treat as content, not decoration: the reference intersperses bands between catalog blocks to restate manufacturing scale.

**Module heading.** 22px/500 in `primary-ink`, left-aligned inside catalog modules and centered inside the company panel, with 20px bottom padding. One heading per module; no eyebrow, no subtitle.

**Product tile.** The system's workhorse. 300px wide, 18px/15px padding, transparent on the white canvas, content centered. Anatomy top to bottom: 1:1 image well (square, product photographed on a light seamless ground), then a 13px gap, then a **two-line clamped title** at 14px/18px in `on-surface`, then an 8px gap, then the bold price line (14px/700, `body`), then a 4px gap, then the MOQ line at 14px `on-surface` with the sold count trailing in `#767676`, then the trust chip. Hover: title turns `primary-ink` and the tile gains a 1px `#DDDDDD` border over a 0.2s background transition.

**Trust chip / fact chip.** 12px/400, 3px radius, 6px/16px padding, 10px/6px margin, placed under the title ("无忧退"-style guarantee) or over photography (company facts). On photography use a white or `rgba(255,255,255,0.92)` fill with `primary-ink` or `muted` text so the 6.1:1 / 5.7:1 ratios survive; never let a chip's fill drop below 0.92 alpha.

**Company panel.** A 1200×280 band with a `brand-tint` underlay and a 50% black scrim, 30px padding, centered 14px/22px white copy, then a row of fact chips. Below it, on white with 40px padding: a centered 22px orange heading, an 18px "认证类型" label with a 24px blue verified glyph and link, then a 3-up grid of verification items (373px wide, 15px/30px padding). Each item is a 60px circular icon with a `#DAE2ED` hairline border plus a text column offset 70px: a 14px/700 label above a 14px value. Verified values are `primary-ink`; unverified values are `body`.

**Metric grid (supplier summary).** Same 3-up geometry as the verification grid, reused for main products, payment types, and main markets, followed by a right-aligned action row.

**Buttons.** All pills, all 14px. `button-primary`: 36px tall, 28px horizontal padding, `primary-600` fill, white label, hover `primary-700`, 0.3s ease-out. `button-secondary`: 36px tall, 28px padding, white fill, `primary-600` 1px border, `primary-ink` label, hover a 6% orange wash. `button-search`: 32px tall, 16px padding, `primary-600`. Because visual heights are 32–36px, each button must expose a **44×44 minimum hit area** via a transparent inset (padding or a pseudo-element) without changing its painted size. Text links use `tertiary` at 14px with no underline, underlining on hover.

**Inputs.** Pill-shaped, white fill, `body` text, 44px tall, 15px padding, 1px `#DAE2ED` border, `#767676` placeholder. Focus: the border becomes 2px `tertiary` **and** the element gets a 2px outer `tertiary` ring at 2px offset — border color alone is never the only focus signal.

**Focus and keyboard behaviour (applies to every interactive element).** Visible focus is mandatory: `outline: 2px solid #0066CC; outline-offset: 2px` on nav items, product tiles, chips, buttons, and links. On the orange trade bar, focus uses a 2px white ring plus a 2px `secondary` outer ring so it stays visible against `primary-600`. Never remove focus outlines; never rely on hover-only affordances.

**Floating contact rail.** Fixed white panel, 68px wide, 4px radius, soft shadow, pinned to the right edge 16px from the viewport and 300px from the top, containing two stacked entries (contact / chat) with orange glyphs over 12px labels. Each entry is at least 44px tall.

**Footer.** White, 40px top padding, five link columns of 200px with 16px/700 column headings (20px bottom margin) and 14px `body` links. Below it, a full-width `#F4F4F4` strip, 120px tall with 20px/30px padding, holding sister-site links, policy links, and the copyright line in 14px `muted`.

**Motion.** Restrained and functional: 0.2s for background and color feedback on hover, 0.3s ease-out for button state changes, 0.5s transform for carousel advancement, 0.24s for opacity fades on floating chrome. No entrance animations, no scroll-triggered reveals, no parallax — the bands are already visually loud. All transitions must be suppressed under `prefers-reduced-motion: reduce`.

## Do's and Don'ts

- Do keep the orange trade bar as the single most saturated element in the top third of the page; if two orange bars compete, the composition is wrong.
- Do keep every orange surface that carries a 14px white label at `primary-600` or darker. White on `#FF6A00` is 2.9:1 and is not acceptable for text.
- Do keep normal text at or above 4.5:1: `#333333` on white (12.6:1), `#666666` (5.7:1), `#767676` (4.55:1, the floor), and headings at `#B03A00` (6.1:1) rather than `#FC6A06`.
- Do keep interactive targets at least 44×44 CSS px; pad the 32–36px pills with a transparent hit area rather than enlarging the paint.
- Do clamp product titles to exactly two lines and reserve the MOQ line's space, so tiles in a row stay aligned.
- Do keep the 1200px catalog canvas fixed on desktop and let only media bands run full-bleed to 1920px.
- Do separate tiles with whitespace on a white canvas; the grid is the boundary, not a card.
- Don't put a shadow on product tiles, media bands, or the trade bar — shadows belong only to the floating contact rail and chat launcher.
- Don't introduce any corner radius between 5px and 15px, and never round a container larger than a chip.
- Don't use `#FF751A`, `#FC6A06`, or `#007FFC` as text colors; they are non-text accents only.
- Don't set body text below 14px or metadata below 12px, and never ship the fixed 1200px canvas as the mobile experience.
- Don't stack more than two full-bleed media bands back to back without an intervening catalog block; the reference always alternates band → catalog → band.
- Don't remove the scrims over photography to "clean up" a banner; white copy on unscrimmed merchant artwork will fail contrast.
