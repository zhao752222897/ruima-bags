---
version: alpha
name: Ruima Bags Storefront
description: Full multi-section B2B trade-catalog storefront visual system for Shanxi Ruima Trading Co., Ltd. (luggage, student backpacks, casual bags) — a navy sign board with trust badges, one vivid orange trade bar with multi-level category navigation, then a long alternating sequence of full-bleed 1920px campaign and factory-capability bands over a fixed 1200px white catalog canvas, ending in a verification-led company panel and a five-column footer.
colors:
  # Action orange
  primary: "#C24A00"
  primary-vivid: "#FF6A00"
  primary-bright: "#FC6A06"
  primary-600: "#A63F00"
  primary-tint: "rgba(252, 106, 6, 0.2)"
  # Navy canvas
  secondary: "#17304A"
  secondary-deep: "#0A192F"
  secondary-mid: "#0E1C2E"
  # Links
  tertiary: "#0066CC"
  tertiary-vivid: "#007FFC"
  # Surfaces
  surface: "#FFFFFF"
  surface-subtle: "#F5F5F5"
  surface-muted: "#F4F4F4"
  surface-tint: "#F1F4F9"
  band-black: "#000000"
  # Ink
  on-surface: "#222222"
  body: "#333333"
  muted: "#666666"
  faint: "#767676"
  on-primary: "#FFFFFF"
  on-secondary: "#FFFFFF"
  # Lines, scrims, seals
  border: "#DBE3EF"
  border-strong: "#DDDDDD"
  scrim-bar: "rgba(51, 51, 51, 0.2)"
  scrim-photo: "rgba(0, 0, 0, 0.5)"
  seal-gold: "#D4AF37"

typography:
  display:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: -0.01em
  headline-xl:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: 700
    lineHeight: 1.2
  headline-lg:
    fontFamily: Inter
    fontSize: 22px
    fontWeight: 500
    lineHeight: 30px
  headline-lg-light:
    fontFamily: Inter
    fontSize: 22px
    fontWeight: 400
    lineHeight: 28px
  headline-md:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: 400
    lineHeight: 24px
  title-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 700
    lineHeight: 22px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 400
    lineHeight: 18px
  body-md-tight:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 400
    lineHeight: 16px
  body-xs:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
  label-bold:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 700
    lineHeight: 16px
  label-chip:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: 600
    lineHeight: 18px
  label-badge:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: 700
    lineHeight: 12px

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
  sm: 8px
  md: 13px
  lg: 15px
  xl: 20px
  2xl: 28px
  3xl: 30px
  4xl: 40px
  5xl: 44px
  container: 1200px
  media-width: 1920px
  media-width-wide: 2514px
  grid-columns: 4
  grid-columns-tablet: 3
  grid-columns-mobile: 2
  gutter-desktop: 20px
  gutter-mobile: 16px
  platform-bar-height: 40px
  platform-header-height: 73px
  sign-height: 280px
  badge-bar-height: 45px
  nav-height: 44px
  nav-item-width: 110px
  search-width: 213px
  search-height: 28px
  hero-height: 650px
  promo-height: 324px
  campaign-height: 650px
  capability-band-height: 935px
  factory-tour-height: 1708px
  workshop-band-height: 893px
  certification-band-height: 655px
  team-band-height: 696px
  category-banner-height: 815px
  product-module-height: 714px
  product-row-height: 337px
  module-header-height: 55px
  product-cell-width: 300px
  product-card-width: 160px
  product-card-width-compact: 120px
  contact-band-height: 544px
  company-band-height: 280px
  company-intro-height: 454px
  verification-item-width: 373px
  verification-item-height: 90px
  footer-height: 513px
  footer-column-width: 200px
  footer-links-height: 232px
  footer-info-height: 120px
  rail-width: 68px

components:
  platform-promo-bar:
    backgroundColor: "#FD701E"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-md}"
    height: "{spacing.platform-bar-height}"
    width: "{spacing.container}"
  platform-header:
    backgroundColor: "{colors.surface}"
    height: "{spacing.platform-header-height}"
    width: "{spacing.container}"
  store-sign:
    backgroundColor: "{colors.secondary}"
    width: "{spacing.container}"
    height: "{spacing.sign-height}"
  store-sign-badge-bar:
    backgroundColor: "{colors.scrim-bar}"
    textColor: "{colors.on-secondary}"
    typography: "{typography.body-md}"
    height: "{spacing.badge-bar-height}"
    padding: "{spacing.xl}"
  store-sign-name:
    typography: "{typography.body-md}"
    textColor: "{colors.on-secondary}"
  brand-badge:
    backgroundColor: "{colors.surface-subtle}"
    textColor: "{colors.body}"
    typography: "{typography.label-badge}"
    rounded: "{rounded.lg}"
    padding: "{spacing.micro}"
    size: "30px"
  store-sign-headline:
    typography: "{typography.display}"
    textColor: "{colors.on-secondary}"
  store-nav:
    backgroundColor: "{colors.primary-bright}"
    height: "{spacing.nav-height}"
    width: "{spacing.container}"
  store-nav-item:
    textColor: "{colors.on-primary}"
    typography: "{typography.body-md}"
    height: "{spacing.nav-height}"
    width: "{spacing.nav-item-width}"
    padding: "{spacing.lg}"
  store-nav-item-selected:
    backgroundColor: "{colors.primary-vivid}"
    textColor: "{colors.on-primary}"
  store-nav-dropdown:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.body}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: "{spacing.sm}"
    width: "220px"
  store-nav-dropdown-item:
    textColor: "{colors.body}"
    typography: "{typography.body-md}"
    height: "{spacing.5xl}"
    padding: "{spacing.xl}"
  store-search:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.pill}"
    width: "{spacing.search-width}"
    height: "{spacing.search-height}"
  store-search-field:
    textColor: "{colors.body}"
    typography: "{typography.body-md}"
    height: "{spacing.search-height}"
    padding: "{spacing.xl}"
  button-search:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.pill}"
    height: "{spacing.search-height}"
    width: "33px"
  hero-carousel:
    backgroundColor: "{colors.secondary-deep}"
    width: "{spacing.media-width}"
    height: "{spacing.hero-height}"
  hero-headline:
    typography: "{typography.display}"
    textColor: "{colors.on-secondary}"
  hero-copy:
    typography: "{typography.body-md}"
    textColor: "{colors.on-secondary}"
  carousel-dot:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.full}"
    size: "25.6px"
  carousel-dot-selected:
    backgroundColor: "{colors.primary-bright}"
  promo-strip:
    width: "{spacing.media-width}"
    height: "{spacing.promo-height}"
  campaign-band:
    width: "{spacing.media-width}"
    height: "{spacing.campaign-height}"
  capability-band:
    width: "{spacing.media-width}"
    height: "{spacing.capability-band-height}"
  factory-tour-band:
    backgroundColor: "{colors.secondary-deep}"
    width: "{spacing.media-width}"
    height: "{spacing.factory-tour-height}"
  workshop-band:
    width: "{spacing.media-width}"
    height: "{spacing.workshop-band-height}"
  certification-band:
    backgroundColor: "{colors.band-black}"
    width: "{spacing.media-width-wide}"
    height: "{spacing.certification-band-height}"
  certificate-tile:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-xs}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
  team-band:
    backgroundColor: "{colors.secondary-deep}"
    width: "{spacing.media-width}"
    height: "{spacing.team-band-height}"
  team-headline:
    typography: "{typography.display}"
    textColor: "{colors.on-secondary}"
  team-member:
    textColor: "{colors.on-primary}"
    typography: "{typography.body-md}"
    height: "230px"
    width: "200px"
  team-avatar:
    rounded: "{rounded.full}"
    size: "72px"
  button-chat:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.secondary}"
    typography: "{typography.body-xs}"
    rounded: "{rounded.pill}"
    height: "28px"
    padding: "{spacing.xl}"
  category-banner:
    backgroundColor: "{colors.secondary-deep}"
    width: "{spacing.media-width}"
    height: "{spacing.category-banner-height}"
  category-banner-cta:
    backgroundColor: "{colors.primary-vivid}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    height: "40px"
    padding: "{spacing.2xl}"
  module-shell:
    backgroundColor: "{colors.surface}"
    width: "{spacing.container}"
    height: "{spacing.product-module-height}"
  module-header:
    textColor: "{colors.primary-bright}"
    height: "{spacing.module-header-height}"
    padding: "{spacing.xl}"
  module-heading:
    typography: "{typography.headline-lg}"
    textColor: "{colors.primary}"
  product-grid:
    width: "{spacing.container}"
    height: "{spacing.product-row-height}"
  product-item:
    backgroundColor: "{colors.surface}"
    width: "{spacing.product-cell-width}"
    height: "{spacing.product-row-height}"
    padding: "{spacing.lg}"
  product-card:
    backgroundColor: "{colors.surface}"
    width: "{spacing.product-card-width}"
  product-image:
    rounded: "{rounded.none}"
    size: "{spacing.product-card-width}"
  product-title:
    typography: "{typography.body-md-tight}"
    textColor: "{colors.body}"
  product-price:
    typography: "{typography.label-bold}"
    textColor: "{colors.body}"
  product-moq:
    typography: "{typography.body-md}"
    textColor: "{colors.on-surface}"
  product-sold:
    typography: "{typography.body-md}"
    textColor: "{colors.faint}"
  product-chip:
    backgroundColor: "{colors.surface-subtle}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-chip}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs}"
  contact-band:
    backgroundColor: "{colors.secondary-deep}"
    width: "{spacing.media-width}"
    height: "{spacing.contact-band-height}"
  contact-band-copy:
    typography: "{typography.headline-xl}"
    textColor: "{colors.on-secondary}"
  contact-band-cta:
    backgroundColor: "{colors.primary-vivid}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    height: "44px"
    padding: "{spacing.2xl}"
  company-panel:
    backgroundColor: "{colors.secondary}"
    height: "{spacing.company-band-height}"
    padding: "{spacing.3xl}"
  company-panel-tint:
    backgroundColor: "{colors.primary-tint}"
    height: "{spacing.company-band-height}"
  company-panel-scrim:
    backgroundColor: "{colors.scrim-photo}"
    textColor: "{colors.on-secondary}"
    typography: "{typography.body-md}"
    height: "{spacing.company-band-height}"
    padding: "{spacing.3xl}"
  company-intro:
    backgroundColor: "{colors.surface}"
    height: "{spacing.company-intro-height}"
    padding: "{spacing.4xl}"
  company-intro-title:
    typography: "{typography.headline-lg-light}"
    textColor: "{colors.primary}"
    padding: "{spacing.xl}"
  verify-row:
    textColor: "{colors.body}"
    typography: "{typography.headline-md}"
    height: "24px"
  verify-link:
    textColor: "{colors.tertiary}"
    typography: "{typography.body-md}"
  verification-grid:
    width: "{spacing.container}"
    height: "180px"
  verification-item:
    backgroundColor: "{colors.surface}"
    width: "{spacing.verification-item-width}"
    height: "{spacing.verification-item-height}"
    padding: "{spacing.3xl}"
  verification-label:
    typography: "{typography.label-bold}"
    textColor: "{colors.body}"
  verification-value:
    typography: "{typography.body-md}"
    textColor: "{colors.primary}"
  verification-value-muted:
    textColor: "{colors.body}"
  company-actions:
    height: "36px"
    width: "{spacing.container}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.pill}"
    height: "36px"
    padding: "{spacing.2xl}"
  button-primary-hover:
    backgroundColor: "{colors.primary-600}"
  button-primary-active:
    backgroundColor: "{colors.primary-600}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.pill}"
    height: "36px"
    padding: "{spacing.2xl}"
  text-link:
    textColor: "{colors.tertiary}"
    typography: "{typography.body-md}"
  footer:
    backgroundColor: "{colors.surface}"
    width: "{spacing.container}"
    height: "{spacing.footer-height}"
    padding: "{spacing.4xl}"
  footer-column:
    width: "{spacing.footer-column-width}"
    height: "{spacing.footer-links-height}"
  footer-heading:
    typography: "{typography.title-md}"
    textColor: "{colors.on-surface}"
    padding: "{spacing.xl}"
  footer-link:
    typography: "{typography.body-md}"
    textColor: "{colors.on-surface}"
  footer-info-bar:
    backgroundColor: "{colors.surface-muted}"
    textColor: "{colors.muted}"
    typography: "{typography.body-md}"
    height: "{spacing.footer-info-height}"
    padding: "{spacing.3xl}"
  floating-rail:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.md}"
    width: "{spacing.rail-width}"
    padding: "{spacing.sm}"
  field-input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.body}"
    typography: "{typography.body-md}"
    rounded: "{rounded.pill}"
    height: "{spacing.5xl}"
    padding: "{spacing.lg}"
  field-input-focus:
    textColor: "{colors.body}"
    rounded: "{rounded.pill}"
    height: "{spacing.5xl}"
---

## Overview

Shanxi Ruima Trading Co., Ltd. sells rolling suitcases, hard-shell luggage, student backpacks, and casual/crossbody bags as a B2B exporter, and its Alibaba storefront reads as a **trade catalog on a navy deck**: a fixed 1200px white catalog canvas floating over a `secondary` navy underlay, capped by an image-based navy sign board and one vivid orange trade bar, then carried down the page by a long, alternating sequence of **full-bleed 1920px photographic and campaign bands** and **white catalog modules separated by a 20px navy rhythm**.

The store is long on purpose — roughly seventeen 1200px-wide content blocks stack after the header before the footer — and each block has a job. The rebuild must reproduce the *whole* sequence, in order, not a subset:

1. **Platform shell** (`#FD701E` 40px promo bar, 73px white header with logo, search, and account icons) — the surrounding marketplace chrome, kept as a thin imitation strip so the storefront still reads as "inside Alibaba.com".
2. **Store sign board** — a 1200×280 navy artwork carrying the "RM" logo, the all-caps headline "LUGGAGE | STUDENT BACKPACKS | CASUAL BAGS", the line "Professional Bag Manufacturer Since 2013", and a right-side product cluster.
3. **Trust badge bar** — the sign's top 45px strip, `scrim-bar` over the artwork, holding the 1YR badge (30×16, `surface-subtle`, 16px radius, 12px/700 label), the gold-supplier and verified-supplier glyphs, the store name at 14px white, and a disclosure chevron.
4. **Orange trade bar** — 1200×44, `primary-bright` fill, white 14px navigation with a `primary-vivid` selected block, **multi-level category navigation** (Home / Products ▾ / Company Profile ▾, where the Products menu opens an 11-item vertical panel and the Company Profile menu a 2-item panel), plus a 213×28 white pill store search docked right.
5. **Hero carousel** — 1920×650, five artwork slides, auto-advancing, dot controls.
6. **Promo strip** — 1920×324 single artwork.
7. **Campaign band** — 1920×650 single artwork.
8. **Factory-tour band** — 1924×1708 navy collage titled "Worldwide Factory Tour": an asymmetric six-photo mosaic with thin white separators, faint line-art luggage/zipper marks in the margins, and copy in orange + white.
9. **Capability band stack** — a 3720px column of five full-bleed workshop photographs (893 / 603 / 675 / 714 / 815) documenting production, storage, and inspection.
10. **Certification band** — 2514×655 on `band-black`: eight white-framed certificate tiles in one horizontal row with seals, blue/red/green marks, and gold embossing; carousel-capable.
11. **OEM/ODM team band** — 1920×696: "Hello," / "What could we do for you?" / "You are welcome to discuss with us about OEM or ODM business." plus an orange podium carrying five representative modules (circular portrait, name, chat status, "Chat Now!" pill).
12. **Category banner → product grid × 3** — three 1920×815 category banners (luggage, backpacks, casual bags) each followed by a 1200px white module: a 55px orange-ruled header row and a **4-column × 2-row grid of 8 product tiles**.
13. **Contact band** — 1920×544 with "Complete range, fast delivery, customized size." / "Contact us! Get the Latest Price List!" and an orange CTA.
14. **Company panel** — a 1200×280 band (`primary-tint` underlay + 50% black scrim) holding the wholesale/OEM introduction, then a 454px white block: centered orange "Company Profile" title, a "Certification type" row with a blue inspection link, a **3 × 2 verification grid** (region, founded, business type, main products, payment types, main markets), and a centered action row.
15. **Footer** — 40px top padding, five 200px link columns, an app/social row, and a 120px `surface-muted` legal strip.

The sixteen supplied store photographs (sewing workshop, assembly line, hosiery/warehouse racks, moulding and cutting shops, office) are the store's own authentic capability material and are the page's visual spine: they carry items 8, 9, and the band art of 12. Use them at full bleed, unretouched, and never crop a workshop interior into a decorative thumbnail.

Personality: industrial, factual, export-grade. Dense rather than airy; rectangular rather than rounded; photoreal rather than illustrative. Nothing is decorative for its own sake — every block either sells, verifies, or proves capacity.

## Colors

The system is a **two-accent scheme on white and navy**: a deep navy for authority surfaces, one orange family for every action, a functional blue for links, and a neutral ink ramp. Because the store sits inside Alibaba.com, the platform's own promo orange-red (`#FD701E`) appears in the shell strip; the store's identity is navy + orange.

- **Primary (`#C24A00`)** is the action and text-bearing orange and the normative brand color. White 14px labels on it measure **4.91:1**, so every orange surface that carries text — the primary CTA, the search button, badge text — uses this value.
- **Primary vivid (`#FF6A00`)** is the sampled CTA fill and the selected-navigation fill measured directly from the store's buttons and press states. White on it measures only 2.87:1, so it is a **non-text, large-surface accent**: button fills without text, the selected nav block, the oval podium, band gradients. Never set 14px copy on it.
- **Primary bright (`#FC6A06`)** is the measured module-heading and trade-bar hue. It measures ≈2.9:1 on white and is therefore restricted to **non-text use**: the 2px rule at the top of each catalog module, the 44px trade bar fill, and 22px module headings only when they are set at `headline-lg` weight 500 or heavier and paired with the `primary` value for the actual glyph color.
- **Primary 600 (`#A63F00`)** is the hover/pressed fill (white text = **6.3:1**).
- **Primary tint (`rgba(252, 106, 6, 0.2)`)** is the underlay beneath the company band's photographic scrim.
- **Secondary (`#17304A`)** is the storefront canvas: the deck behind the catalog, the sign board's base, the factory-tour and team grounds. White text on it measures **13.5:1**.
- **Secondary deep (`#0A192F`)** and **secondary mid (`#0E1C2E`)** are the artwork-side navy gradient floor and mid-tone measured inside the store's own banner images (deepest at the edges, lighter behind product clusters). Use them for band gradients and band grounds so artwork and CSS chrome match.
- **Tertiary (`#0066CC`)** is link *text* (**5.6:1** on white); **tertiary vivid (`#007FFC`)** is the reference's own link blue and is retained only for icon glyphs, the verified shield, and non-text accents because it measures 3.9:1.
- **Surfaces:** `surface` white is the catalog canvas and every tile; `surface-subtle` `#F5F5F5` is badge fill; `surface-muted` `#F4F4F4` is the footer legal strip; `surface-tint` `#F1F4F9` is the pale blue-grey quiet panel; `band-black` `#000000` is the certification band's ground behind the white certificate frames.
- **Ink:** `#222222` headings (**15.9:1**), `#333333` body and catalog copy (**12.6:1**), `#666666` secondary labels and legal strip (**5.74:1**), `#767676` the smallest metadata such as "3 sold" (**4.54:1** — the floor; never go lighter).
- **Lines:** `#DBE3EF` (measured as the module header's hairline rule) and `#DDDDDD` (tile hover border and list dividers).
- **Scrims:** `scrim-bar` `rgba(51, 51, 51, 0.2)` over the sign artwork's badge strip; `scrim-photo` `rgba(0, 0, 0, 0.5)` under copy that sits on photography (company band, factory-tour captions). Both are measured values and must never be removed in favour of "cleaner" imagery — white copy on unscrimmed merchant photography fails contrast.
- **Seal gold (`#D4AF37`)** appears only inside the certification artwork and may be reused for certification seals and award marks; it is never a UI accent.

Never place normal-size text on `primary-vivid`, on `primary-bright`, on photography, or on `primary-tint`. Orange never carries body copy.

## Typography

The reference renders everything in Alibaba's proprietary `Alibaba_B2B_Sans` with a multi-script fallback chain. The rebuild uses **Inter** as the licensed open substitute and keeps the same chain — `Inter, "SF Pro Text", Roboto, "Helvetica Neue", Helvetica, Tahoma, Arial, "PingFang SC", "Microsoft YaHei"` — because product titles, guarantee chips, navigation, and verification labels in this catalog are Chinese while brand and section copy is English.

The catalog scale is deliberately shallow: one display size for band headlines, one 22px heading, one 18px sub-heading, one 16px column heading, and a 14px base with 12px micro sizes. The depth in this storefront comes from imagery, not from type size.

- **Display (`display`, 48px / 700 / 1.15):** band headlines — the sign board's all-caps category line, the hero's "OEM/ODM manufacturer" statement, the "Hello," opener of the team band, and the contact band's promise line. This is the only size that is allowed to be all-caps.
- **Band headline (`headline-xl`, 32px / 700 / 1.2):** secondary band copy where two lines of 48px would crowd a 544–650px band.
- **Module heading (`headline-lg`, 22px / 500 / 30px):** catalog module titles in the 55px header row above each product grid (rendered in `primary`). The reference's own value is `#FC6A06` at 22px/500; color moves to `primary` so the 4.91:1 rule holds for text while the header row's 2px rule keeps the measured `primary-bright` hue.
- **Centered panel heading (`headline-lg-light`, 22px / 400 / 28px):** the centered "Company Profile" title. The reference trusts size, not weight, for centered hierarchy.
- **Sub-heading (`headline-md`, 18px / 400 / 24px):** in-panel labels such as "Certification type", and band sub-copy set in HTML rather than baked into artwork.
- **Column heading (`title-md`, 16px / 700 / 22px):** footer and panel column titles, with a 20px bottom margin that belongs to the heading, not the following list.
- **Body (`body-md`, 14px / 400 / 18px):** the default for navigation labels, breadcrumbs, MOQ lines, verification values, footer links, and descriptive copy. Fourteen pixels is the reference's true base size; do not inflate it to 16px, because the dense catalog grid, the 44px trade bar, and the 90px verification rows all depend on it.
- **Product title (`body-md-tight`, 14px / 400 / 16px):** tighter leading because titles are clamped to exactly two lines; two lines at ~18px leading produce the fixed 36px title block that keeps tiles in a row aligned.
- **Micro (`body-xs`, 12px / 400 / 16px):** certificate captions, helper text, metadata. Never below 12px.
- **Emphasis (`label-bold`, 14px / 700 / 16px):** prices, MOQ values, verification field names, the "1YR" counter. Price is the one place the catalog bolds; never bold a product title.
- **Guarantee chip (`label-chip`, 12px / 600):** the return/guarantee chips inside product tiles and over photography.
- **Badge (`label-badge`, 12px / 700 / 12px):** the supplier-year badge and similar counters.

Uppercase is used only in band artwork and in the 12px badge; navigation, headings, and buttons are never uppercased. Weight hierarchy is fixed: 400 for body and links, 500 for module headings, 600 for chips, 700 for prices, badges, column headings, and display.

## Layout

**Desktop (≥1200px).** A **fixed 1200px catalog canvas** is centered in the viewport and content never stretches beyond it. Media bands break out to **1920px full-bleed** (the certification band to 2514px) and are centered so the composition crops symmetrically. The header stack is: platform promo bar (40px) → platform header (73px) → store sign (1200×280) with the 45px badge bar docked to its top → orange trade bar (1200×44) → hero carousel band (1920×650).

Below the hero the page is a **single 1200px column of blocks with a 20px vertical rhythm and no other separators**: the navy canvas shows through the 20px gaps, which is what draws the catalog's horizontal rules. Block heights are fixed by their artwork: promo 324, campaign 650, capability 935, factory tour 1708, workshop bands 893 / 603 / 675 / 714 / 815, certification 655, team 696, category banners 815, contact 544.

Inside the canvas:

- **Product module:** white 1200px shell with a 2px `primary-bright` rule across its top, a 55px header row (12px/20px padding, 22px heading, 1px `border` rule beneath), then a 4-column grid of 300px cells × 2 rows (337px each) = **8 tiles per module**. Cells pad 18px vertically and 15px horizontally; the tile is a centered 160px-wide column so the square image well is 160×160 with generous whitespace on either side. The tile is *not* a card — the whitespace is the separator.
- **Company panel:** one 1200×280 band with a `primary-tint` underlay and a `scrim-photo` scrim, 30px inner padding and centered 14px/18px white copy; then a 454px white block with 40px padding containing a centered 22px heading, a centered 24px "Certification type" row (18px label + blue 14px link), a 3 × 2 grid of 373×90 verification items (15px/30px padding), and a centered 36px action row.
- **Footer:** white, 40px top padding, five 200px columns starting at x = 40 with 30px gaps inside a 1120px content width (so 40px side padding), a 232px links block, then an app/social row, closed by a full-width 120px `#F4F4F4` legal strip with 20px/30px padding.

**Tablet (750–1199px).** The canvas becomes fluid at 100% width with 24px gutters; media bands stay full-bleed and keep their aspect ratio with a 320px height floor. Product grids step to **3 columns**, then 2.

**Mobile (<750px).** The reference itself keeps serving the fixed 1200px canvas at 390px and relies on horizontal panning — that is *observed behavior, not a pattern to copy*, because it breaks reading order and touch targeting. The rebuild instead:

- uses **16px gutters** on a fluid canvas and never ships a horizontally scrolling page;
- crops bands to the composition's center at roughly 1.6:1 (hero, campaign) and 1:1 (certification collage) so the subject survives, rather than preserving 2.95:1;
- stacks the badge bar above the store name instead of the name beside the badges, keeping the 45px row and all badge glyphs intact;
- turns the trade bar into one horizontally scrollable 44px strip with 16px inter-item gaps, keeps the selected item's `primary-vivid` block, and moves the store search into a full-width row directly beneath it;
- opens the Products menu as a full-width accordion panel listing all 11 categories as 44px rows, and the Company Profile menu as a 2-row accordion; a level-3 group (materials: neoprene, Oxford cloth) is a labelled sub-section inside the panel, not a hover flyout, because hover is unavailable on touch;
- drops product grids to **2 columns with 12px gutters** and a 120px image well, keeping the two-line clamped title, price, MOQ row, and guarantee chip in that order (the sold-count line is dropped first);
- stacks the 3 × 2 verification grid into single-column rows, the five footer columns into single-column blocks with 20px separation, and the certificate row into a swipeable 1-up carousel;
- keeps every touch target at least 44×44 CSS px, which means the 44px nav rows pass as-is and the 28–36px pills need an invisible inset hit area.

Everything not listed above is invariant across breakpoints: the navy/orange/white palette, the 20px module rhythm, the 2px orange module rule, the 36px pill buttons, the 3px chip geometry, the 22px module heading, and the two-line product title clamp.

## Elevation & Depth

The reference is **almost entirely flat**. Depth is produced by four means other than shadows:

1. **Full-bleed photography** as the page's only large-scale contrast event. A 1920px band reads as sitting in front of the white canvas without any shadow, and the thin white separators inside the factory-tour collage do the work a border would do.
2. **The navy deck.** Because the 1200px canvas sits on `secondary`, every 20px gap between modules is a visible navy line; that deck is the page's structural layer.
3. **Translucent scrims.** `scrim-bar` (`rgba(51, 51, 51, 0.2)`) floats the badge bar over the sign artwork; `scrim-photo` (`rgba(0, 0, 0, 0.5)`) floats white copy over workshop photography and under the company-band tint.
4. **Hairlines.** `1px solid #DBE3EF` separates module header rows; `#DDDDDD` divides hover states and list rows. Borders, not shadows, separate content.

Shadows appear only on genuinely floating chrome and stay soft and low: the fixed contact rail is white with a 4px radius and `0 2px 10px rgba(0, 0, 0, 0.1)`, pinned `right: 16px / top: 300px` at `z-index: 1000`; the chat launcher uses `0 4px 20px rgba(0, 0, 0, 0.25)`. Nothing else takes a shadow — in particular product tiles, media bands, the trade bar, and certificate tiles are **not** shadowed.

For hover on a product tile, do not lift it. Use the reference's vocabulary: a 1px `#DDDDDD` border on the tile and a title color change to `primary`, both over 0.2s.

## Shapes

The shape language is **rectilinear and unrounded, with one exception: pills.** Every surface — the sign board, the orange trade bar, all media bands, product tiles, the module shell, the 3 × 2 verification grid, certificate frames, footer blocks — uses a **0px radius**. That is what gives the storefront its catalog-sheet feel and what makes full-bleed bands read as bands rather than cards.

- **Chips and badges:** 3px (`rounded.sm`) for guarantee chips; a chip is the largest thing that may be rounded.
- **Floating panels:** 4px (`rounded.md`) for the contact rail and dropdown popovers.
- **Counters:** 16px (`rounded.lg`) for the supplier-year badge, 18px (`rounded.xl`) for wide utility buttons.
- **Buttons and search:** 100px (`rounded.pill`) — every button in the system is a pill, including the 28px search button and the 36px CTAs.
- **Circular wells:** 100% (`rounded.full`) for avatars in the team band, carousel dots, and circular certification marks.

The rule to hold: **no radius between 5px and 15px, and no radius on any container larger than a chip.** A rounded card dropped into this grid destroys the look immediately.

## Components

**Platform strip.** A 1200px `#FD701E` promo bar, 40px tall, white 14px copy, followed by a 73px white header carrying the marketplace logo, a large search field with a `primary` search button and a camera icon, and account/delivery/cart/message/order icons. Keep this strip visually subordinate — it is context, not identity — and keep every icon target ≥44×44 via padding.

**Store sign.** A 1200×280 media plate holding the sign artwork, rendered over `secondary` so letterboxed artwork still reads as intentional. The badge bar is docked to its top: 45px tall, `scrim-bar`, 20px left padding, containing in order the 30×16 `1YR` badge (`surface-subtle` fill, 16px radius, 2px padding, 12px/700 `body` label), the gold-supplier and verified-supplier glyphs in `tertiary` with 5px gaps, the store name at 14px `on-secondary` with a 10px left offset, and a 12px white disclosure chevron that opens a store summary. Artwork copy ("LUGGAGE | STUDENT BACKPACKS | CASUAL BAGS", "Professional Bag Manufacturer Since 2013") is set in `display` and must stay left-aligned with the right 45% reserved for the product cluster.

**Trade bar and multi-level navigation.** 1200×44, `primary-bright` fill, positioned directly under the sign. Level-1 items are flat 110px-wide blocks, 14px `on-primary`, 2px/15px padding, 20px line height; the selected item fills `primary-vivid` full height (a block, never an underline) and hover does the same. Level-1 items that own children show a 12px chevron. The **Products** menu opens a 220px white vertical panel with 0px radius and a soft low shadow: first row "View all", then the eleven categories — Pet bags, Sports bags, Shoulder bags, Luggage bags, Casual crossbody bags, Student backpacks, Trolley rods, Electric luggage, plus a materials group (Neoprene, Oxford cloth) that is visually separated as a labelled sub-section, making three distinguishable levels. The **Company Profile** menu opens a 2-row panel: Company overview, Ratings & reviews. Every menu row is 44px tall, 14px `body`, with a `#F5F5F5` hover wash and a full-row focus ring. The store search sits at the trailing edge: a 213×28 white pill holding a 14px field and a 33px right-capped pill button; on mobile it becomes a full-width 44px row.

**Hero carousel.** A 1920×650 full-bleed band, absolutely centered on the canvas, over `secondary-deep` so slide gaps never flash white. Five artwork slides, auto-advancing with a 0.5s transform transition; controls are 25.6px circular dots that fill `primary-bright` when selected. The hero's own copy pattern — a `display` headline with the first phrase in orange ("13-Year OEM/ODM Luggage & Bag Manufacturer"), a 14px white sub-line, two columns of 12px value bullets, and a row of white certification marks (BSCI, ISO 9001, REACH, Trade Assurance) — is the template for any HTML-rendered hero slide. Slide 1 keeps a left-to-right navy gradient (`secondary-deep`, ~60–70% opacity) under the copy.

**Campaign, promo, capability, and workshop bands.** Any full-bleed photograph carrying a campaign, category, or capability message, stacked with the 20px rhythm: 324px promo strips, 650px campaigns, 893–935px capability frames, and 815px category banners. No border, no radius, no caption. Treat them as content, not decoration; the reference intersperses them so that no two product grids ever touch. The sixteen supplied store photographs — sewing workshop with rows of industrial machines, garment/assembly lines, moulding and cutting shops, warehouse racking, and the office floor — are the primary fill for the capability frames and the firm's proof of capacity; keep them unretouched, at full bleed, and pair each with at most one line of copy on a `scrim-photo` scrim.

**Factory-tour collage.** A 1924×1708 `secondary-deep` band titled "Worldwide Factory Tour" with "Worldwide" in orange and the rest in white, a thin white rule extending to the right margin, faint line-art luggage and zipper marks in the navy margins, and an asymmetric six-photo mosaic separated by thin white lines: large landscape (production floor), large portrait (machinery), medium landscape (component stacking), small square (finished samples), medium landscape (conveyor), and a wide landscape across the bottom (warehouse). Rebuild the mosaic as a CSS grid with 2px white gaps rather than as one flattened image so it stays sharp and replaceable.

**Certification band.** 2514px wide, 655px tall, `band-black` ground, carrying eight white-framed certificate tiles in a single row with a subtle inner shadow to fake physical paper: mixed blue/red/green marks, gold embossed or blue rosette seals, and a signature line. Captions inside tiles are 12px `on-surface`. On narrow screens this becomes a 1-up swipeable carousel; never shrink the row below legibility.

**Team / OEM-ODM band.** 1920×696 `secondary-deep`, left-aligned "Hello," at `display`, a white 18px question line, a 14px "OEM or ODM" line, a white pill "Contact us" button, and a large `primary-vivid` rounded podium (100px ends) across the lower half holding five 200px representative modules: 72px circular portrait, 14px white name, a 12px chat-status badge with a blue glyph, and a 28px white `button-chat` pill reading "Chat Now!". This is the only place in the system where a large rounded shape is allowed, because it is artwork.

**Category banner.** 1920×815 navy-gradient artwork, left third for type, right two-thirds for the product cluster. The type pattern is fixed: a two-line all-caps `display` headline whose second word is orange (or gold-on-navy for the luggage variant), one 14px sub-line with the emphasised phrase in the same accent, and a solid `primary-vivid` rectangular **VIEW MORE** CTA button (0px radius, 40px tall, 28px side padding, 14px white). Category banners are the seam between the factory story and the catalog.

**Product tile.** The system's workhorse, 8 per module in a 4 × 2 grid. Cell 300px wide, 18px/15px padding, content centered; the tile column is 160px wide at desktop and 120px at mobile, so the image well is a 160×160 (or 120×120) square — product photographed on a light seamless ground. Anatomy top to bottom: square well, 13px gap, **two-line clamped title** at 14px/16px in `body`, 8px gap, bold price line (14px/700, `body`), 4px gap, the MOQ row at 14px `on-surface` with the sold count trailing in `faint` on the same 18px line, then an 8px gap and the guarantee chip (12px/600, `surface-subtle` fill, 3px radius). Hover: title turns `primary` and the tile gains a 1px `#DDDDDD` border over a 0.2s background transition. Product images are `object-fit: cover` squares; reserve the well's height so a slow image never reflows the row.

**Module header.** A 2px `primary-bright` rule across the top of the white module, then a 55px flex row with 12px/20px padding, a left-aligned 22px/500 `primary` heading, and a 1px `border` rule beneath. One heading per module, no eyebrow, no subtitle.

**Company panel.** A 1200×280 band with a `primary-tint` underlay and `scrim-photo` over photography, 30px padding, centered 14px/18px white copy restating wholesale and OEM service ("We provide wholesale and OEM services to customers around the world…"). Below it, on white with 40px padding: a centered 22px `primary` heading, a centered 18px "Certification type" label with a blue verified glyph and a `tertiary` 14px inspection link, then the **3 × 2 verification grid** — six `surface` items of 373×90 with 15px/30px padding, each a 14px/700 label over a 14px value. Verified values render in `primary`, unverified values in `body`; never invent a verification value, and never render an unverified field as verified. Close with a centered 36px action row: `button-primary` "Contact Supplier", `button-secondary` "Start Order" (white fill, 1px `primary` border, `primary` label), and a `tertiary` "Learn more about us >" text link.

**Buttons.** All pills, all 14px. `button-primary`: 36px tall, 28px horizontal padding, `primary` fill, white label, hover and pressed `primary-600`, 0.3s ease-out. `button-secondary`: 36px tall, 28px padding, white fill, 1px `primary` border, `primary` label, hover a 6% orange wash. `button-search`: 28px tall, 33px wide, right-capped pill in `primary`. Band CTAs are the exception and are rectangular with 0px radius, matching their artwork. Because painted heights are 28–36px, every button must expose a **44×44 minimum hit area** through transparent padding or a pseudo-element, without changing the painted size. Text links are `tertiary` at 14px, no underline, underline on hover.

**Inputs.** Pill-shaped, white fill, `body` text, 44px tall, 15px padding, 1px `border`, `faint` placeholder. Focus: the border becomes 2px `tertiary` **and** the element gains a 2px outer `tertiary` ring at 2px offset — a border color change alone is never the only focus signal.

**Focus and keyboard behaviour (applies to every interactive element).** Visible focus is mandatory: `outline: 2px solid #0066CC; outline-offset: 2px` on nav items, dropdown rows, product tiles, chips, buttons, certificate carousels, and links. On the orange trade bar, focus uses a 2px white ring plus a 2px `secondary` outer ring so it stays visible against `primary-bright`. Disclosure menus open on Enter/Space and on click (not hover only), close on Escape, and trap arrow-key navigation between rows. Never remove focus outlines; never rely on hover-only affordances.

**Floating contact rail.** Fixed white panel, 68px wide, 4px radius, soft low shadow, pinned 16px from the right edge and 300px from the top, containing two stacked entries (contact supplier / chat now) with orange glyphs over 12px labels; each entry is at least 44px tall. A chat launcher sits bottom-right with the stronger `0 4px 20px rgba(0, 0, 0, 0.25)` shadow.

**Footer.** White, 40px top padding, five 200px link columns with 30px gaps inside 40px side padding. Each column is a 16px/700 `on-surface` heading with 20px bottom margin over a list of 14px links on 18px rows: Get Support, Trade Assurance, Source on Alibaba.com, Sell on Alibaba.com, Know Us. Then an app/social row (social glyphs, an app download prompt, and store buttons — each target ≥44×44). Then a full-width 120px `#F4F4F4` strip with 20px/30px padding holding marketplace links (AliExpress, 1688.com, Tmall Taobao World, Alipay, Lazada), policy links, and the copyright line in 14px `muted`.

**Motion.** Restrained and functional: 0.2s for background and color feedback on hover, 0.3s ease-out for button states, 0.5s transform for carousel advancement, 0.24s for opacity fades on floating chrome. No entrance animations, no scroll-triggered reveals, no parallax — the bands are already visually loud. All transitions must be suppressed under `prefers-reduced-motion: reduce`, and carousels must pause on hover and focus.

## Do's and Don'ts

- Do ship the full block sequence in order: shell → sign → badge bar → trade bar → hero → promo → campaign → factory tour → capability stack → certification → team → three category-banner-plus-grid modules → contact band → company panel → footer. Dropping bands, collapsing the three catalog modules into one, or rendering grids with fewer than 8 tiles is a failed replication.
- Do keep the orange trade bar the single most saturated element in the top third of the page; if two orange blocks compete above the hero, the composition is wrong.
- Do keep every orange surface that carries a 14px white label at `primary` (`#C24A00`) or darker. White on `#FF6A00` is 2.87:1 and is not acceptable for text.
- Do keep normal text at or above 4.5:1: `#333333` on white (12.6:1), `#666666` (5.74:1), `#767676` (4.54:1, the floor), and headings at `#C24A00` (4.91:1) rather than `#FC6A06`.
- Do keep interactive targets at least 44×44 CSS px; pad the 28–36px pills with an invisible hit area rather than enlarging the paint.
- Do clamp product titles to exactly two lines and reserve the MOQ row's space so tiles in a row stay aligned.
- Do keep the 1200px catalog canvas fixed on desktop and let only media bands run full-bleed to 1920px.
- Do keep the 20px module rhythm and let the navy canvas show through the gaps; add no extra margins around bands.
- Do separate tiles with whitespace on a white canvas; the grid is the boundary, not a card.
- Do keep the horizontal white separators inside the factory-tour mosaic at 2px and build the mosaic in CSS so photographs stay replaceable.
- Do pair every caption that sits on photography with a `scrim-photo` or `scrim-bar` scrim, and never let a chip's fill drop below `rgba(255, 255, 255, 0.92)` over imagery.
- Don't put a shadow on product tiles, media bands, certificate tiles, or the trade bar — shadows belong only to the floating rail, chat launcher, and dropdown panels.
- Don't introduce any corner radius between 5px and 15px, and never round a container larger than a chip (the team podium's 100px artwork shape is the sole exception).
- Don't use `#FF6A00`, `#FC6A06`, or `#007FFC` as text colors; they are non-text accents only.
- Don't set body text below 14px or metadata below 12px, and never ship the fixed 1200px canvas as the mobile experience.
- Don't stack more than two full-bleed bands back to back without an intervening catalog block; the reference always alternates band → catalog → band.
- Don't remove scrims from banners to "clean up" the design, and don't substitute stock imagery for the store's own workshop photographs.
- Don't mark an unverified company field as verified, and never invent verification values, certificate names, or capacity statistics that the store has not published.
