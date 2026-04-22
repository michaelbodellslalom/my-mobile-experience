# Product Requirements Document: Green Leaf Market Loyalty App

**Version:** 1.0  
**Date:** April 22, 2026  
**Author:** Michael Bodell  
**Project:** P200 Capstone - Mobile-First Web Application

---

## Executive Summary

Green Leaf Market needs a mobile-first loyalty application that helps members track rewards, discover offers, and feel good about their sustainable shopping choices. This app bridges the gap between sustainability values and practical shopping needs.

---

## Problem Statement

### Current Pain Points
- Loyalty members have no mobile-optimized way to check their points balance
- Eco-conscious shoppers can't see their environmental impact
- Customers miss out on personalized offers because they're buried in email
- Store locator requires desktop access or multiple website clicks
- Existing loyalty programs are desktop-first, creating friction for mobile users

### Impact
- Reduced customer engagement with loyalty program
- Lower redemption rates for personalized offers
- Missed opportunities to reinforce sustainability mission
- Customers shop at competitors with better mobile experiences

---

## Goals & Success Metrics

### Primary Goals
1. **Increase engagement:** Members check app 3-5x per month
2. **Drive sales:** 40% offer redemption rate (vs. 15% email)
3. **Reinforce brand:** 70% of users view sustainability impact widget
4. **Improve convenience:** 90% of store lookups completed in <30 seconds

### Key Performance Indicators (KPIs)
- Daily active users (DAU)
- Average session duration (target: 30-90 seconds)
- Offer redemption rate
- Points balance checks per month
- Store locator usage

---

## User Personas

### Primary: Sarah (The Conscious Commuter)
- **Age:** 34
- **Occupation:** Marketing manager
- **Shopping frequency:** 2-3x per month
- **Tech comfort:** High (iPhone user, apps for everything)
- **Values:** Sustainability, convenience, saving money
- **Context:** Uses phone one-handed while commuting, between meetings, or at the store entrance

**Pain Points:**
- Doesn't have time to check email for deals
- Wants to see points balance quickly
- Needs store hours and directions when planning trips
- Wants to feel good about sustainable choices

**Goals:**
- Quick points check (< 5 seconds)
- Easy offer browsing while waiting in line
- One-tap directions to nearest store
- See environmental impact of purchases

---

## Core Features (MVP)

### 1. Points Dashboard
**Priority:** P0 (Must-have)

**Description:** Immediate view of current points balance and progress

**Requirements:**
- Display current points balance prominently (hero section)
- Show points earned this month
- Visual progress bar to next reward tier
- Loads in <1 second

**User Stories:**
- As a member, I want to see my points balance immediately when I open the app
- As a member, I want to know how close I am to my next reward
- As a member, I want to see what I've earned recently

---

### 2. Personalized Offers
**Priority:** P0 (Must-have)

**Description:** Horizontally scrollable feed of 6-8 personalized product deals

**Requirements:**
- Display 6-8 offers based on purchase history
- Each card shows: product image, title, discount amount, expiration
- Horizontal swipe gesture for mobile
- Grid layout on tablet/desktop (2-3 columns)
- Touch targets minimum 44x44px

**User Stories:**
- As a member, I want to quickly browse current deals
- As a member, I want to see offers relevant to what I actually buy
- As a member, I want to know when offers expire

---

### 3. Store Locator
**Priority:** P0 (Must-have)

**Description:** Find nearest Green Leaf Market locations with directions

**Requirements:**
- Display 3 nearest stores with distance
- Show store status (open/closed)
- Display hours of operation
- "Get Directions" button (opens Google Maps)
- "Call" button (tel: link)
- Address and phone number visible

**User Stories:**
- As a member, I want to find the nearest store when I'm out
- As a member, I want to know if a store is open before driving there
- As a member, I want one-tap directions via my preferred maps app

---

### 4. Sustainability Impact Widget
**Priority:** P1 (Should-have)

**Description:** Show member's environmental impact from sustainable shopping

**Requirements:**
- Display monthly metrics: plastic saved, CO2 offset
- Use engaging visuals (icons, colors)
- Update based on purchase history
- Placement: Below points dashboard on home page

**User Stories:**
- As a conscious consumer, I want to see the positive impact of my choices
- As a member, I want to feel good about shopping at Green Leaf Market

---

### 5. Purchase History
**Priority:** P1 (Should-have)

**Description:** View past transactions and itemized details

**Requirements:**
- Display last 15-20 transactions
- Show date, store location, total amount, points earned
- Expandable cards for itemized details
- Sorted by date (newest first)

**User Stories:**
- As a member, I want to review my recent purchases
- As a member, I want to verify points were credited correctly

---

### 6. Bottom Navigation
**Priority:** P0 (Must-have)

**Description:** Thumb-friendly navigation bar for core sections

**Requirements:**
- Fixed bottom position (always visible)
- 4 navigation items: Home, Offers, Stores, History
- Active state highlighting
- Icons + labels
- Touch targets minimum 48x48px

**User Stories:**
- As a mobile user, I want to navigate one-handed
- As a member, I want quick access to key sections

---

## Technical Requirements

### Performance
- First Contentful Paint: <1.5 seconds on 4G
- Time to Interactive: <3 seconds
- Lighthouse score: 90+ (mobile)
- Bundle size: <300KB (gzipped)

### Browser Support
- Chrome 90+ (iOS/Android)
- Safari 14+ (iOS)
- Firefox 88+ (Android)

### Responsive Design
- Mobile-first: 375px - 428px (primary)
- Tablet: 768px - 1024px
- Desktop: 1024px+

### Accessibility
- WCAG 2.1 Level AA compliance
- Touch targets: minimum 44x44px
- Color contrast: 4.5:1 minimum
- Semantic HTML

---

## Out of Scope (MVP)

### Not Included
- ❌ Native mobile apps (iOS/Android)
- ❌ User authentication/login
- ❌ E-commerce/checkout
- ❌ Payment processing
- ❌ Push notifications
- ❌ Social sharing features
- ❌ Rewards catalog/redemption
- ❌ Digital receipts
- ❌ Barcode scanning

### Future Considerations (Post-MVP)
- Account creation and profile management
- Push notifications for new offers
- In-app rewards redemption
- Receipt scanning for automatic points
- Referral program
- Shopping list integration

---

## Design Constraints

### Brand Guidelines
- Primary color: Sage green (#87A878)
- Secondary color: Forest green (#2D5016)
- Font: Inter (clean, modern)
- Tone: Calm, sustainable, approachable

### Mobile-First Constraints
- One-handed use (thumb zone optimization)
- Horizontal scrolling for content feeds
- Bottom navigation (not top)
- Large touch targets (44px minimum)
- Minimal text input

### Technical Constraints
- Web-only (no native app development)
- Static deployment (Vercel)
- No backend/database (mock data)
- No authentication required

---

## Launch Criteria

### Must Be True to Launch
- ✅ Site deployed and accessible via HTTPS
- ✅ Core flows work end-to-end (points, offers, stores)
- ✅ Mobile responsive (375px - 428px)
- ✅ Production build optimized (<300KB)
- ✅ No console errors on core flows
- ✅ Lighthouse score >85 mobile

### Nice to Have
- Analytics tracking (GA4)
- Error boundary components
- Loading states for all async operations
- Empty states for zero data scenarios

---

## Dependencies & Assumptions

### Dependencies
- React 18 + Vite for development
- React Router for navigation
- Lucide React for icons
- Google Fonts (Inter)
- Vercel for hosting

### Assumptions
- Users have modern smartphones (2020+)
- Users allow location access for store distances
- Users have active internet connection
- Mock data sufficient for MVP demonstration

---

## Risk Assessment

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Performance on low-end devices | Medium | High | Bundle size optimization, lazy loading |
| Browser compatibility issues | Low | Medium | Test on Chrome, Safari, Firefox |
| Confusing navigation | Low | High | User testing, clear labeling |
| Design doesn't feel "sustainable" | Low | Medium | Strong color palette, leaf iconography |

---

## Timeline

**Phase 1: Foundation (Day 1 - Morning)**
- Project setup (Vite + React)
- Design system (CSS variables)
- Mock data structure
- Layout shell

**Phase 2: Core Features (Day 1 - Midday)**
- Points dashboard
- Offers feed
- Store locator
- Bottom navigation

**Phase 3: Polish (Day 1 - Afternoon)**
- Responsive design
- Purchase history
- Impact widget
- Bug fixes

**Phase 4: Deploy (Day 1 - Evening)**
- Production build
- Vercel deployment
- Final testing

---

## Appendix

### Reference Links
- Whole Foods mobile app (inspiration)
- Trader Joe's store locator (simplicity)
- Starbucks rewards (gamification)
- Patagonia impact metrics (sustainability)

### Questions & Decisions
- **Q:** Should we require login?
  **A:** No - reduces friction for MVP. Use mock data.

- **Q:** How many offers to show?
  **A:** 6-8 offers, horizontally scrollable. More overwhelming, fewer = boring.

- **Q:** Native app or web?
  **A:** Web-first for speed and cross-platform. PWA features post-MVP.

---

**Last Updated:** April 22, 2026  
**Status:** Complete - Ready for Development
