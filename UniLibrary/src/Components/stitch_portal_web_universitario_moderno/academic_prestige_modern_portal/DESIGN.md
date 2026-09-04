---
name: Academic Prestige Modern Portal
colors:
  surface: '#fbf9fa'
  surface-dim: '#dbd9db'
  surface-bright: '#fbf9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f4'
  surface-container: '#efedee'
  surface-container-high: '#e9e8e9'
  surface-container-highest: '#e3e2e3'
  on-surface: '#1b1c1d'
  on-surface-variant: '#424751'
  inverse-surface: '#303032'
  inverse-on-surface: '#f2f0f1'
  outline: '#737782'
  outline-variant: '#c2c6d2'
  surface-tint: '#285ea6'
  primary: '#00346a'
  on-primary: '#ffffff'
  primary-container: '#054a91'
  on-primary-container: '#95bcff'
  inverse-primary: '#a9c7ff'
  secondary: '#006a60'
  on-secondary: '#ffffff'
  secondary-container: '#86f2e2'
  on-secondary-container: '#006f64'
  tertiary: '#680c37'
  on-tertiary: '#ffffff'
  tertiary-container: '#86264d'
  on-tertiary-container: '#ff9fbd'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#a9c7ff'
  on-primary-fixed: '#001b3d'
  on-primary-fixed-variant: '#00468b'
  secondary-fixed: '#89f5e5'
  secondary-fixed-dim: '#6bd8c9'
  on-secondary-fixed: '#00201c'
  on-secondary-fixed-variant: '#005048'
  tertiary-fixed: '#ffd9e2'
  tertiary-fixed-dim: '#ffb1c8'
  on-tertiary-fixed: '#3e001d'
  on-tertiary-fixed-variant: '#812249'
  background: '#fbf9fa'
  on-background: '#1b1c1d'
  surface-variant: '#e3e2e3'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 3.5rem
    fontWeight: '700'
    lineHeight: 4rem
    letterSpacing: -0.03em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 2.25rem
    fontWeight: '700'
    lineHeight: 2.75rem
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 2rem
    fontWeight: '600'
    lineHeight: 2.5rem
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 1.5rem
    fontWeight: '600'
    lineHeight: 2rem
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 1.5rem
    fontWeight: '600'
    lineHeight: 2rem
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 1.25rem
    fontWeight: '600'
    lineHeight: 1.75rem
    letterSpacing: -0.005em
  title-md:
    fontFamily: Inter
    fontSize: 1.125rem
    fontWeight: '600'
    lineHeight: 1.5rem
    letterSpacing: 0em
  body-lg:
    fontFamily: Inter
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: 1.75rem
    letterSpacing: 0em
  body-md:
    fontFamily: Inter
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: 1.5rem
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: '400'
    lineHeight: 1.25rem
    letterSpacing: 0.01em
  label-md:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: '500'
    lineHeight: 1.25rem
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 0.75rem
    fontWeight: '600'
    lineHeight: 1rem
    letterSpacing: 0.03em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  space-2xs: 0.25rem
  space-xs: 0.5rem
  space-sm: 0.75rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
  space-2xl: 3rem
  space-3xl: 4rem
  gutter-mobile: 1rem
  gutter-desktop: 1.5rem
  margin-mobile: 1rem
  margin-tablet: 2rem
  margin-desktop: 3rem
---

## Brand & Style

This design system establishes a high-performance, technologically forward academic environment. It combines institutional authority with cutting-edge engineering precision. Tailored for students, researchers, faculty, and administrators, the system projects rigorous trust, intellectual clarity, and institutional prestige.

The visual direction draws from **Corporate / Modern** principles combined with structured data density and refined academic restraint:
- **Calm Authority:** Grounded in collegiate traditions without feeling stagnant or archaic.
- **Precision Engineering:** Clean geometric alignments, tight vertical rhythm, and unmistakable functional hierarchy.
- **Accessible Density:** Capable of handling complex information—transcripts, research repos, course syllabi, and administrative tooling—without cognitive fatigue.

## Colors

The palette is derived directly from the institutional collegiate schema:

- **Primary (`#054A91` - Steel Azure):** The central anchor of the university's identity. Applied to dominant interactive elements, main headers, high-level navigation, and active system states.
- **Secondary (`#1B998B` - Verdigris / Teal):** Represents discovery, growth, and technical progress. Used for success states, progress trackers, secondary interactive controls, and research markers.
- **Tertiary (`#912F56` - Vintage Berry):** Provides prestigious academic contrast. Reserved for honors distinctions, badges, critical deadlines, urgent notifications, and accent flourishes.
- **Neutral (`#08090A` - Charcoal Black):** High-contrast base for typography, high-priority iconography, and structural structural rules. Ensures maximum legibility across all form factors.
- **Background / Surface (`#F4FAFF` - Alice Blue):** The primary canvas hue, offering an expansive, luminous quality far cleaner than flat neutral gray, reducing visual strain during prolonged research sessions.

## Typography

The type system uses `Inter` across all text tiers. Its neutral, systematic glyph construction ensures uncompromised legibility when rendering complex mathematical notation, dense academic tables, and operational portals.

- **Headlines & Display:** Tightly tracked with heavy weights (`600`, `700`) to convey institutional weight and technological authority.
- **Body:** Open counters and standard letterform metrics allow comfortable scanning across long-form research papers and course guides.
- **Labels & Numbers:** Tuned with tabular lining figure alternatives for data grids, grade point averages, timestamps, and metric readouts.

## Layout & Spacing

A disciplined 8px base rhythm governs layout structure and spacing tokens:

- **Grid Architecture:** 12-column responsive fluid grid on desktop (`1200px` to `1440px` max container width), scaling down to 8 columns on tablet and 4 columns on mobile devices.
- **Gutters & Margins:** Desktop interfaces maintain `1.5rem` (`24px`) gutters with `3rem` outer margins. Compact tablet breakpoints utilize `2rem` margins, while mobile layouts collapse to `1rem` margins for optimal content throughput.
- **Information Density:** Vertical stacking prioritizes generous whitespace around primary headers (`3rem`) while maintaining dense, functional clustering (`0.5rem` to `1rem`) within interactive widgets and tabular data blocks.

## Elevation & Depth

Visual hierarchy leverages pure white layered cards on top of the Alice Blue (`#F4FAFF`) baseline, separated by crisp borders and ambient, tinted shadows:

- **Level 0 (Base):** Flat Alice Blue background (`#F4FAFF`).
- **Level 1 (Default Containers & Cards):** Pure white background (`#FFFFFF`), reinforced with a `1px` subtle border tint (`rgba(5, 74, 145, 0.08)`) and an ambient drop shadow: `0 2px 4px -1px rgba(8, 9, 10, 0.04), 0 4px 6px -1px rgba(5, 74, 145, 0.04)`.
- **Level 2 (Hover & Raised Elements):** `0 4px 12px -2px rgba(8, 9, 10, 0.06), 0 8px 16px -4px rgba(5, 74, 145, 0.08)`. Used for interactive cards upon mouse hover and active selector panels.
- **Level 3 (Modals & Overlays):** `0 12px 24px -4px rgba(8, 9, 10, 0.12), 0 24px 48px -8px rgba(5, 74, 145, 0.16)`. Applied to popovers, contextual drawers, and modal dialogs.

## Shapes

The design system operates with **Rounded** geometry (`roundedness: 2`):

- **Core Components (Buttons, Inputs, Badges):** Feature an `8px` (`0.5rem`) corner radius, projecting precision, approachability, and contemporary digital polish.
- **Structured Cards & Panels:** Feature a `16px` (`1rem`) corner radius, creating clear visual segregation across academic modules, schedules, and analytics widgets.
- **Pills / Tags:** Dedicated status tags and small pill badges utilize full rounding (`9999px`) to distinguish meta status indicators from rectangular interactive targets.

## Components

### Buttons
- **Primary:** Background Steel Azure (`#054A91`), text `#FFFFFF`, radius `0.5rem`. States: hover transitions to darkened navy (`#043b74`), focus exhibits a 2px offset ring in Verdigris (`#1B998B`).
- **Secondary:** Surface pure white, border `1.5px` solid `#054A91`, text `#054A91`. Hover fills with a light tint of Alice Blue.
- **Tertiary / Distinction:** Background Vintage Berry (`#912F56`), text `#FFFFFF`. Reserved for high-priority submissions, enrollment confirmations, and major institutional actions.

### Cards & Content Modules
- Base card utilizes pure `#FFFFFF` over `#F4FAFF`, with a `16px` radius and a `1px` stroke in `rgba(5, 74, 145, 0.08)`.
- Header areas within cards incorporate subtle accent borders or icons tinted in Verdigris (`#1B998B`).

### Chips & Badges
- **Status Badges:** Fully rounded (`rounded-full`), padded `0.25rem 0.75rem`.
  - *Active / Verified:* Verdigris background at 12% opacity with solid `#1B998B` text.
  - *Honors / Critical:* Vintage Berry at 12% opacity with solid `#912F56` text.
  - *Course / Meta:* Steel Azure at 8% opacity with solid `#054A91` text.

### Input Fields & Controls
- **Form Inputs:** Pure white surface, `1px` border `#08090A` at 20% opacity, `0.5rem` radius. Focus shifts border to Steel Azure (`#054A91`) with a 3px outer halo in `rgba(5, 74, 145, 0.15)`.
- **Checkboxes & Radios:** `054A91` active fill with sharp white check marks. Checkbox corners use `4px` radius; radio targets are circular.

### Lists & Data Tables
- Horizontal row dividers use `#08090A` at 6% opacity. Alternate row striping utilizes `#F4FAFF` at 50% opacity. Headers display `label-sm` in all-caps Charcoal Black (`#08090A`) with subtle 0.03em tracking.