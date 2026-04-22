# BRIEF: Green Leaf Market Loyalty App

**Project Type:** Mobile-First Web Application  
**Timeline:** P200 Capstone Project  
**Last Updated:** April 22, 2026

---

## What I'm Building

A mobile-first loyalty app for Green Leaf Market, a sustainable grocery chain. The app helps members check their rewards points, discover personalized offers, locate nearby stores, and track their environmental impact—all optimized for quick, one-handed use on the go.

---

## The Problem

Green Leaf Market customers care about sustainability, but they don't have an easy way to:
- Check their loyalty points balance quickly between shopping trips
- See which eco-friendly products have deals right now
- Find the nearest store when they're out running errands
- Feel good about their environmental impact from shopping sustainably

Existing loyalty programs often require desktop access or clunky apps. This creates friction at the exact moment when someone is deciding where to shop.

---

## The User

**Primary User:** Sarah, 34, marketing manager
- Shops at Green Leaf Market 2-3x per month
- Uses phone one-handed while commuting or between meetings
- Values sustainability but also wants to save money
- Doesn't have time to dig through email for coupons

**Context of Use:**
- On the go (not at a desk)
- Quick glances (30-90 second sessions)
- One-handed phone use
- Possibly outside (bright sunlight)
- Planning a shopping trip or already near a store

---

## Core Experience

### The Flow (30 seconds)
1. Opens app → sees points balance immediately (2,450 points)
2. Scrolls down → sees "Your Impact This Month" (2.1 lbs plastic saved)
3. Swipes through 3-4 personalized offers → "$2 off Organic Spinach"
4. Taps "Stores" → finds nearest location 1.2 miles away
5. Taps "Get Directions" → navigates via maps app

**Key Insight:** Every interaction should complete in under 3 seconds. No account setup, no login friction, no waiting.

---

## What Makes This Different

### 1. Sustainability Front & Center
Unlike typical loyalty apps that focus only on savings, this app celebrates environmental impact. Every transaction shows plastic saved and carbon offset. It makes users feel good about shopping at Green Leaf.

### 2. Mobile-First (Actually)
Designed for one-handed use with thumb-friendly navigation. Bottom nav bar, large touch targets (44px minimum), and horizontal swipe gestures. Not a desktop app shrunk down.

### 3. Instant Gratification
No login for MVP. App loads directly to your points balance. Information is glanceable—you can check your status at a red light.

### 4. Personalized Offers That Matter
Shows 3-6 offers based on shopping habits. No endless scrolling through irrelevant deals. Each offer card shows the product, discount, and expiration clearly.

---

## Features (Priority Order)

### Must-Have (P1)
- **Points Dashboard:** Balance, monthly earnings, progress to next reward
- **Personalized Offers:** Card-based feed with product images and discounts
- **Store Locator:** 3 nearest locations with directions and hours
- **Bottom Navigation:** Home, Offers, Stores, History (thumb-accessible)
- **Impact Widget:** Monthly sustainability metrics (plastic saved, CO2 offset)

### Should-Have (P2)
- **Purchase History:** Last 20 transactions with itemized details
- **Rewards Catalog:** Browse and redeem points for in-store codes
- **Profile Page:** Member info and lifetime sustainability stats

### Won't Have (MVP)
- ❌ E-commerce/checkout
- ❌ Payment processing
- ❌ Social features or sharing
- ❌ Push notifications
- ❌ Native mobile apps (web only)

---

## Design Direction

### Visual Aesthetic
**Calm, clean, and sustainable.** Think Whole Foods meets a wellness app—not a traditional grocery store.

**Color Palette:**
- Sage green (#87A878) as primary brand color
- Forest green (#2D5016) for important actions
- Light sage backgrounds (#B7C9A7) for sustainability widgets
- Mint cream (#F5F9F3) for page backgrounds

**Typography:**
- Inter font (clean, modern, highly legible on mobile)
- Large numbers for points (48px)
- Minimum 14px for body text
- Bold weights for emphasis

**Components:**
- Rounded corners (12-16px border-radius)
- Subtle shadows for depth
- White cards on light backgrounds
- Touch-friendly spacing (minimum 16px)

### Interaction Patterns
- Pull-down to refresh (home screen)
- Horizontal swipe for offer cards (snap to center)
- Tap to expand (history items, offer details)
- Bottom sheet modals (profile, offer details)

---

## Technical Approach

### Stack Decision
**React 18 + Vite** - Fast development, excellent mobile performance, modern tooling.

**Why not native mobile?**
- Faster to build (one codebase)
- No app store approval needed
- Instant updates
- Web URLs are shareable
- Still feels native with good design

**Styling:** CSS Modules + Custom Properties (fast, scoped, themeable)

**Data:** localStorage + mock data (no backend needed for MVP)

**Deployment:** Vercel (free, optimized for mobile, instant HTTPS)

### Mobile-First Constraints
- Target: 375px - 428px width (iPhone SE to iPhone Pro Max)
- Touch targets: Minimum 44×44px
- Load time: Under 2 seconds on 4G
- Safe areas: Account for notches and home indicators

---

## Success Metrics

### User Engagement
- **Primary:** Can user check points balance in under 5 seconds?
- **Secondary:** Do users tap through to view offers?
- **Tertiary:** Do users use the store locator feature?

### Technical Performance
- First Contentful Paint < 1.5s
- Lighthouse mobile score > 90
- No layout shift (good UX on slow connections)

### Qualitative
- Does it feel like a Green Leaf Market app? (brand consistency)
- Can a first-time user orient themselves? (clarity)
- Does it work smoothly with one hand? (mobile UX)

---

## What I'm Learning

### Mobile Design Challenges
- Designing for thumbs, not mice
- Making information glanceable
- Prioritizing ruthlessly (can't fit everything)
- Safe areas and device variations

### Development Skills
- React + Vite setup and configuration
- Responsive design with CSS custom properties
- Touch interactions and gestures
- Component-based architecture
- Mobile-first CSS

### Product Thinking
- Understanding user context (when/where/why they use the app)
- Balancing features vs. simplicity
- Making mock data feel realistic
- Designing for motivation (sustainability impact)

---

## Development Plan

### Session 1: Foundation (3-4 hours)
- Initialize Vite + React project ✅
- Set up design system (CSS variables)
- Create mock data file
- Build app shell and bottom navigation
- Get routing working

### Session 2: Home Screen (3-4 hours)
- Build points dashboard component
- Create sustainability impact widget
- Design offer card component
- Assemble home page layout
- Test on mobile device

### Session 3: Secondary Pages (3-4 hours)
- Build offers page (full list view)
- Create store locator with cards
- Implement purchase history
- Build profile modal
- Connect all navigation

### Session 4: Polish & Ship (2-4 hours)
- Mobile optimization (touch targets, gestures)
- Accessibility audit (contrast, ARIA labels)
- Responsive design testing
- Build for production
- Deploy to Vercel

**Total Time:** 12-16 hours  
**Timeline:** Complete over 1-2 weeks

---

## Definition of Done

### Minimum Viable Product (MVP)
- [ ] App loads on mobile device
- [ ] Points dashboard shows balance and progress
- [ ] Sustainability impact is visible
- [ ] Offers display with images and details
- [ ] Store locator shows 3 locations with directions
- [ ] Bottom navigation works across all pages
- [ ] Deployed live with public URL

### Polish (Go Further)
- [ ] Purchase history with expandable transactions
- [ ] Profile modal with member info
- [ ] Smooth transitions and animations
- [ ] Accessibility compliance (WCAG AA)
- [ ] Works well on tablets too
- [ ] Lighthouse score > 90

---

## Commit Strategy

I'll commit after each major task completion:
- `feat: initialize project with Vite and React` ✅
- `feat: add design system and global styles`
- `feat: create mock data for users, offers, stores`
- `feat: build app shell and bottom navigation`
- `feat: implement points dashboard and impact widget`
- `feat: add offer cards and home page layout`
- `feat: build store locator page`
- `feat: add purchase history`
- `fix: improve mobile touch targets`
- `deploy: ship to Vercel`

Descriptive messages that show real progress over time (P200 rubric requirement).

---

**Status:** Building 🚀  
**Current Step:** Setting up project structure
