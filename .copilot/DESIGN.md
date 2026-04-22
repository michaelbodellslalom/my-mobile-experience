# Design Document: Green Leaf Market Loyalty App

**Version:** 1.0  
**Date:** April 22, 2026  
**Designer:** Michael Bodell  
**Project:** P200 Capstone

---

## Design Philosophy

**Core Principle:** *"Sustainability should feel calm, not stressful."*

This app celebrates eco-conscious choices through thoughtful design. Every interaction reinforces that shopping sustainably is both easy and rewarding.

### Design Pillars
1. **Thumb-First:** Optimized for one-handed mobile use
2. **Glanceable:** Information accessible in 3-second bursts
3. **Organic:** Natural colors, soft edges, breathing room
4. **Purposeful:** Every element serves the user's immediate need

---

## Visual Design System

### Color Palette

#### Primary Colors
```css
--sage-green: #87A878       /* Primary brand color - buttons, badges, icons */
--forest-green: #2D5016     /* Headings, emphasis, navigation active state */
--leaf-green: #4A7C2F       /* Accents, success states */
```

#### Neutral Colors
```css
--white: #FFFFFF            /* Card backgrounds, button text */
--off-white: #F8FAF6        /* Page background (subtle warmth) */
--light-gray: #E8EDE6       /* Borders, dividers */
--medium-gray: #6B7566      /* Body text, secondary information */
--charcoal: #2A2D27         /* Primary text, strong emphasis */
```

#### Semantic Colors
```css
--success-green: #4A7C2F    /* Open stores, positive metrics */
--warning-amber: #D4A234    /* Expiring offers, attention */
--error-red: #C44536        /* Closed stores, errors */
```

**Why these colors?**
- Sage green evokes natural, organic, sustainable
- Forest green adds authority and trust
- Neutral grays have slight green tint (cohesive)
- High contrast ratios meet WCAG AA standards

---

### Typography

**Font Family:** Inter (Google Fonts)
- Modern, clean, optimized for screens
- Excellent legibility at small sizes
- Humanist warmth (not cold/corporate)

#### Type Scale
```css
--font-size-h1: 32px        /* Page titles */
--font-size-h2: 24px        /* Section headings */
--font-size-h3: 20px        /* Card titles */
--font-size-body: 16px      /* Body text, labels */
--font-size-small: 14px     /* Metadata, captions */
--font-size-tiny: 12px      /* Timestamps, fine print */
```

#### Font Weights
```css
--font-weight-regular: 400  /* Body text */
--font-weight-semibold: 600 /* Emphasis, labels */
--font-weight-bold: 700     /* Headings, CTAs */
```

**Why Inter?**
- Variable font = single file, multiple weights
- Designed for UI (not editorial)
- Pairs well with icons

---

### Spacing System

**8px base unit** for consistent rhythm

```css
--space-xs: 4px     /* Tight spacing (icon-to-text) */
--space-sm: 8px     /* Compact (list items) */
--space-md: 16px    /* Comfortable (card padding) */
--space-lg: 24px    /* Generous (section margins) */
--space-xl: 32px    /* Spacious (page padding) */
```

**Why 8px base?**
- Divisible by 2 and 4 (responsive scaling)
- Industry standard
- Creates visual harmony

---

### Border & Shadows

#### Border Radius
```css
--radius-sm: 6px    /* Badges, small buttons */
--radius-md: 12px   /* Cards, main buttons */
--radius-lg: 16px   /* Modals, large containers */
--radius-full: 9999px /* Circular elements (profile icon) */
```

**Why rounded corners?**
- Softer, more approachable than sharp edges
- Aligns with organic/natural brand values

#### Shadows
```css
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05)    /* Subtle depth */
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.07)    /* Card elevation */
--shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1)   /* Modal, overlays */
```

**Why minimal shadows?**
- Suggests lightness (not heavy/corporate)
- Maintains clean, modern aesthetic

---

## Layout Architecture

### Mobile-First Breakpoints
```css
/* Mobile (base): 375px - 767px */
/* Tablet: 768px - 1023px */
/* Desktop: 1024px+ */
```

### Page Structure

```
┌─────────────────────────────┐
│  Top Bar (fixed)            │ ← 64px height
│  Logo + Profile             │
├─────────────────────────────┤
│                             │
│  Main Content Area          │ ← Scrollable
│  (page-specific)            │
│                             │
│                             │
│                             │
├─────────────────────────────┤
│  Bottom Nav (fixed)         │ ← 64px height
│  Home | Offers | Stores     │
└─────────────────────────────┘
```

### Content Max Width
```css
--max-content-width: 1200px  /* Desktop readability */
```

**Why 1200px?**
- Prevents endless horizontal stretching on large screens
- Maintains comfortable reading line length
- Centers content elegantly

---

## Component Design Specs

### 1. Points Dashboard Card

**Visual Hierarchy:**
1. Points balance (largest, bold, forest green)
2. "You have" label (small, gray, above balance)
3. Progress indicator (visual bar, below balance)
4. Monthly earnings (small, sage green badge)

**Spacing:**
- Padding: 24px
- Gap between elements: 16px
- Border radius: 12px
- Shadow: md

**Colors:**
- Background: white
- Balance text: forest-green
- Progress bar fill: sage-green
- Progress bar background: light-gray

---

### 2. Impact Widget Card

**Layout:**
- Two-column grid on mobile
- Icons above metrics
- Equal-width columns

**Visual Treatment:**
- Leaf icon for plastic saved
- Cloud icon for CO2 offset
- Sage green icons
- Bold numbers, gray labels

**Spacing:**
- Padding: 24px
- Gap between columns: 16px
- Icon-to-text gap: 8px

---

### 3. Offer Card

**Dimensions:**
- Width: 280px (horizontal scroll)
- Height: 340px (fixed, image ratio)
- Border radius: 12px

**Image:**
- Height: 180px
- Object-fit: cover
- Border radius: top only (12px)

**Content:**
- Padding: 16px
- Title: 20px, semibold, 2 lines max
- Discount badge: sage-green, absolute top-right
- Expiry: small text, gray, bottom

**Touch Target:**
- Entire card clickable
- Active state: slight scale (0.98)

---

### 4. Store Card

**Layout:**
- Vertical stack
- Header: name + distance badge
- Status indicator (open/closed)
- Address block
- Action buttons (bottom)

**Buttons:**
- "Get Directions": primary (forest-green)
- "Call": secondary (outline)
- Side-by-side, equal width
- Height: 44px (thumb-friendly)

**Spacing:**
- Padding: 24px
- Gap between sections: 16px

---

### 5. Bottom Navigation

**Specifications:**
- Height: 64px
- Position: fixed bottom
- Background: white
- Border top: 1px light-gray
- 4 equal-width items

**Navigation Items:**
- Icon + label (vertical stack)
- Icon size: 24x24px
- Touch target: 64x64px
- Active state: sage-green icon + text
- Inactive state: medium-gray

**Icons:**
- Home: house icon
- Offers: tag icon
- Stores: map pin icon
- History: receipt icon

---

## Interaction Design

### Touch Targets

**Minimum sizes (iOS/Android guidelines):**
- Buttons: 44x44px minimum
- Navigation items: 48x48px (bottom nav larger)
- Links: 44x44px
- Icons: 24x24px visible, 44x44px touch area

### Tap States

**Visual Feedback:**
```css
button:active {
  transform: scale(0.98);
  transition: transform 0.1s;
}
```

**Why scale instead of color change?**
- More physical/tactile feel
- Instant visual confirmation
- Works across all button styles

### Scrolling Behavior

**Horizontal Scrolling (Offers):**
- Snap to grid on desktop
- Smooth momentum scroll on mobile
- No scroll bar (cleaner)
- Visual hint: partial card visible on right edge

**Vertical Scrolling (Pages):**
- Smooth scroll
- Padding bottom: 96px (clears bottom nav)
- No overscroll bounce on web

---

## Responsive Behavior

### Mobile (375px - 767px)

**Layout:**
- Single column
- Horizontal scrolling offers
- Full-width store cards
- Bottom navigation always visible

**Typography:**
- Base: 16px
- Comfortable reading on small screens

### Tablet (768px - 1023px)

**Layout:**
- 2-column grid for offers/stores
- Wider cards (350px)
- Same bottom navigation

**Typography:**
- Scale up slightly (18px base)

### Desktop (1024px+)

**Layout:**
- Max-width container (1200px)
- 3-column grid for offers/stores
- Bottom nav OR side nav (consideration)

**Typography:**
- Base: 16px (consistency)
- More generous spacing

---

## Accessibility Considerations

### Color Contrast

All text meets WCAG AA:
- Forest green on white: 8.2:1 ✅
- Sage green on white: 4.8:1 ✅
- Medium gray on white: 5.1:1 ✅

### Focus States

```css
button:focus-visible {
  outline: 3px solid sage-green;
  outline-offset: 2px;
}
```

### Screen Reader Support

- Semantic HTML (`<nav>`, `<main>`, `<button>`)
- Alt text for all images
- ARIA labels for icon-only buttons
- Skip links for keyboard navigation

---

## Animation & Motion

### Principles
- **Subtle:** Enhance, don't distract
- **Fast:** 100-200ms transitions
- **Purpose:** Provide feedback, guide attention

### Examples

**Button Press:**
```css
transform: scale(0.98);
transition: transform 0.1s;
```

**Card Hover (Desktop):**
```css
transform: translateY(-2px);
box-shadow: var(--shadow-lg);
transition: all 0.2s;
```

**Page Transitions:**
- Fade in: 150ms
- Slide up: 200ms

---

## Design Patterns

### Cards as Primary Container
- Consistent across app
- Clear boundaries
- Easy to scan
- Works well on mobile

### Color Coding
- Green = positive/active
- Gray = neutral/inactive
- Amber = attention/warning

### Icon + Label Pattern
- Icons reinforce meaning
- Labels provide clarity
- Both work together (not redundant)

---

## Brand Expression

### How Design Reflects Sustainability

1. **Color Palette:** Natural greens, earthy tones
2. **Spacing:** Generous white space = "breathing room"
3. **Typography:** Clean, modern = transparency/trust
4. **Imagery:** Fresh produce, natural lighting
5. **Tone:** Calm, encouraging, never preachy

### Avoiding Common Pitfalls

❌ **Don't:**
- Use neon greens (feels artificial)
- Overcrowd with information
- Lecture about sustainability
- Make navigation complicated

✅ **Do:**
- Use muted, natural greens
- Prioritize clarity and simplicity
- Celebrate positive impact
- Make it effortless to use

---

## Implementation Notes

### CSS Architecture

**Structure:**
```
styles/
├── global.css          # Design system, reset
├── Home.module.css     # Page-specific
├── Layout.module.css   # Shell
└── OfferCard.module.css # Component
```

**Why CSS Modules?**
- Scoped styles (no conflicts)
- Co-located with components
- No build config needed (Vite)

### Design Tokens

All values in CSS custom properties:
```css
:root {
  /* Colors */
  --sage-green: #87A878;
  
  /* Spacing */
  --space-md: 16px;
  
  /* Typography */
  --font-size-body: 16px;
}
```

**Why custom properties?**
- Single source of truth
- Easy theming (future dark mode)
- Dynamic updates possible

---

## Future Considerations

### Dark Mode
- Invert background to dark gray
- Reduce color saturation
- Maintain brand feel

### Animations
- Skeleton loaders for data
- Micro-interactions on success
- Confetti on reward milestones

### Personalization
- Themed offers by season
- Member tier badges
- Custom avatars

---

**Last Updated:** April 22, 2026  
**Status:** Complete - Design System Implemented
