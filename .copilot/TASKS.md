# Task List: Green Leaf Market Loyalty App

**Project:** P200 Capstone  
**Date:** April 22, 2026  
**Developer:** Michael Bodell

---

## Project Phases

### ✅ Phase 1: Planning & Setup (Completed)
- [x] Create BRIEF.md with project scope
- [x] Create PRD.md with feature requirements
- [x] Create DESIGN.md with design system
- [x] Initialize Git repository
- [x] Set up Vite + React project
- [x] Install dependencies (React Router, Lucide Icons)
- [x] Configure project structure

---

### ✅ Phase 2: Design System (Completed)

#### Foundation
- [x] Create `global.css` with CSS custom properties
- [x] Define color palette (sage/forest green)
- [x] Set up typography scale (Inter font)
- [x] Configure spacing system (8px base)
- [x] Add border radius and shadow variables
- [x] Set up responsive breakpoints (768px, 1024px)

#### Global Styles
- [x] Reset default browser styles
- [x] Set base font family and size
- [x] Configure smooth scrolling
- [x] Add max-width constraint (1200px)
- [x] Style scrollbars (webkit)

---

### ✅ Phase 3: Mock Data (Completed)

#### Data Structure
- [x] Create `mockData.js` file
- [x] Define user profile object (name, points, tier)
- [x] Create offers array (8 offers)
  - [x] Organic produce offers
  - [x] Sustainable meat/seafood
  - [x] Eco-friendly products
  - [x] Each with image, discount, expiry
- [x] Create stores array (3 locations)
  - [x] Downtown, Mission, Marina
  - [x] Addresses, phone numbers, hours
  - [x] Distance from user
- [x] Create purchase history (15 transactions)
  - [x] Date, store, items, totals, points

---

### ✅ Phase 4: App Shell & Layout (Completed)

#### Layout Component
- [x] Create `Layout.jsx` component
- [x] Build top bar
  - [x] Green Leaf Market logo (leaf icon + text)
  - [x] Profile icon button (right side)
- [x] Build bottom navigation
  - [x] 4 nav items: Home, Offers, Stores, History
  - [x] Icons from Lucide React
  - [x] Active state highlighting
  - [x] Fixed positioning at bottom
- [x] Set up React Router
  - [x] Configure routes for all pages
  - [x] Use NavLink for active states

#### Layout Styling
- [x] Create `Layout.module.css`
- [x] Style top bar (white bg, forest green text)
- [x] Style bottom nav (64px height, border-top)
- [x] Add main content padding to prevent overlap
- [x] Responsive adjustments

---

### ✅ Phase 5: Home Page (Completed)

#### Components
- [x] Create `Home.jsx` page
- [x] Create `PointsDashboard.jsx` component
  - [x] Display current points balance
  - [x] Show monthly earnings
  - [x] Add progress bar to next reward
- [x] Create `ImpactWidget.jsx` component
  - [x] Show plastic saved metric
  - [x] Show CO2 offset metric
  - [x] Use Leaf and Cloud icons
- [x] Create `OfferCard.jsx` component
  - [x] Product image (top)
  - [x] Title and description
  - [x] Discount badge
  - [x] Expiry date

#### Home Page Layout
- [x] Points dashboard at top
- [x] Impact widget below points
- [x] "Just For You" offers section
- [x] Horizontal scrolling on mobile
- [x] Grid layout on desktop (3 columns)

#### Styling
- [x] Create `Home.module.css`
- [x] Create `PointsDashboard.module.css`
- [x] Create `ImpactWidget.module.css`
- [x] Create `OfferCard.module.css`
- [x] Add responsive grid for tablet/desktop
- [x] Fix bottom padding to prevent nav overlap

---

### ✅ Phase 6: Offers Page (Completed)

#### Implementation
- [x] Create `Offers.jsx` page
- [x] Reuse `OfferCard` component
- [x] Display all 8 offers in grid
- [x] Add page title and description
- [x] Filter/sort options (future enhancement area)

#### Styling
- [x] Create `Offers.module.css`
- [x] Grid layout: 1 col mobile, 2 col tablet, 3 col desktop
- [x] Consistent card sizing
- [x] Responsive gap spacing
- [x] Bottom padding for nav clearance

---

### ✅ Phase 7: Stores Page (Completed)

#### Components
- [x] Create `Stores.jsx` page
- [x] Create `StoreCard.jsx` component
  - [x] Store name and distance badge
  - [x] Open/closed status indicator
  - [x] Full address
  - [x] Phone number
  - [x] Store hours
  - [x] "Get Directions" button (Google Maps link)
  - [x] "Call" button (tel: link)

#### Functionality
- [x] Display 3 store locations
- [x] Show real-time open/closed status
- [x] Format phone numbers
- [x] Clickable directions (opens maps app)
- [x] Clickable phone (opens dialer)

#### Styling
- [x] Create `Stores.module.css`
- [x] Create `StoreCard.module.css`
- [x] Responsive grid layout
- [x] Status color coding (green = open, gray = closed)
- [x] Button alignment fix (flexbox)

---

### ✅ Phase 8: History Page (Completed)

#### Components
- [x] Create `History.jsx` page
- [x] Create `HistoryItem.jsx` component
  - [x] Date and store name
  - [x] Total amount and points earned
  - [x] Expandable details (show/hide items)
  - [x] Chevron icon indicator

#### Functionality
- [x] Display 15 recent transactions
- [x] Toggle expanded/collapsed state
- [x] Show itemized purchases when expanded
- [x] Sort by date (newest first)

#### Styling
- [x] Create `History.module.css`
- [x] Create `HistoryItem.module.css`
- [x] Card-based layout
- [x] Smooth expand/collapse animation
- [x] Date formatting (Month DD, YYYY)

---

### ✅ Phase 9: Responsive Design (Completed)

#### Mobile Optimization
- [x] Test on 375px (iPhone SE)
- [x] Test on 390px (iPhone 12/13)
- [x] Test on 428px (iPhone 14 Pro Max)
- [x] Verify touch targets (44px minimum)
- [x] Test horizontal scrolling on offers
- [x] Verify bottom nav doesn't overlap content

#### Tablet Optimization
- [x] 2-column grid for offers
- [x] 2-column grid for stores
- [x] Adjust spacing and font sizes
- [x] Test landscape orientation

#### Desktop Optimization
- [x] Max-width container (1200px)
- [x] 3-column grid for offers
- [x] 3-column grid for stores (initially)
- [x] Center content on wide screens
- [x] Header logo/profile at edges (not centered)
- [x] Proper scaling of components

#### Fixes Applied
- [x] Fix header alignment (logo left, profile right)
- [x] Remove center constraint on desktop
- [x] Add bottom padding to all pages (96px)
- [x] Fix offer image URLs (switch to working images)
- [x] Align store card buttons to bottom (flexbox)

---

### ✅ Phase 10: Polish & Bug Fixes (Completed)

#### Content
- [x] Update offer images (working URLs)
- [x] Verify all mock data is realistic
- [x] Check for typos in copy
- [x] Ensure consistent tone/voice

#### UX Improvements
- [x] Active nav state highlighting
- [x] Button press states (scale on tap)
- [x] Smooth scrolling behavior
- [x] Card hover states (desktop)

#### Visual Polish
- [x] Consistent card shadows
- [x] Proper spacing throughout
- [x] Color consistency
- [x] Typography hierarchy
- [x] Icon sizing and alignment

#### Cross-Browser Testing
- [x] Test in Chrome
- [x] Test in Safari (desktop)
- [x] Test in Mobile Safari (if possible)
- [x] Verify no console errors

---

### ✅ Phase 11: Build & Deploy (Completed)

#### Production Build
- [x] Run `npm run build`
- [x] Verify build output in `dist/`
- [x] Check bundle size (<300KB target)
- [x] Test production build locally (`npm run preview`)

#### Deployment
- [x] Deploy to Vercel
- [x] Verify deployed site loads correctly
- [x] Test all routes on production
- [x] Check mobile responsiveness on real devices

#### Git & Documentation
- [x] Commit all code changes
- [x] Write descriptive commit messages
- [x] Push to GitHub repository
- [x] Verify repo is public
- [x] Create README.md with setup instructions
- [x] Add LICENSE file
- [x] Create AI scaffolding (.copilot directory)

---

### ✅ Phase 12: Project Submission Prep (Completed)

#### Required Files
- [x] BRIEF.md in root
- [x] README.md in root
- [x] LICENSE in root
- [x] PRD.md in .copilot/
- [x] DESIGN.md in .copilot/
- [x] TASKS.md in .copilot/

#### Quality Checks
- [x] All core flows work end-to-end
- [x] Mobile responsive (375px+)
- [x] Tablet responsive (768px+)
- [x] Desktop responsive (1024px+)
- [x] No broken images
- [x] No console errors
- [x] Descriptive commit history (12+ commits)
- [x] Clean folder structure

#### Final Review
- [x] Review against P200 rubric
- [x] Test on multiple screen sizes
- [x] Verify deployment URL works
- [x] Check GitHub repo is organized
- [x] Confirm all planning docs are present

---

## Future Enhancements (Post-MVP)

### Authentication & Personalization
- [ ] User login/signup
- [ ] Profile customization
- [ ] Personalized offer recommendations
- [ ] Purchase history sync

### Enhanced Features
- [ ] Rewards catalog and redemption
- [ ] Push notifications for new offers
- [ ] Receipt scanning for auto-points
- [ ] Shopping list integration
- [ ] Referral program

### Technical Improvements
- [ ] Add backend API
- [ ] Implement real-time data
- [ ] Add state management (Context/Redux)
- [ ] Progressive Web App (PWA) features
- [ ] Offline mode support
- [ ] Analytics integration

### Design Refinements
- [ ] Dark mode toggle
- [ ] Custom animations
- [ ] Skeleton loaders
- [ ] Empty states
- [ ] Error boundaries
- [ ] Loading states

---

## Lessons Learned

### What Went Well
- Mobile-first approach simplified responsive design
- CSS Modules kept styles organized and scoped
- Mock data allowed focus on UX without backend complexity
- Component reusability (OfferCard, StoreCard) saved time
- Horizontal scrolling worked well for offers on mobile

### Challenges Overcome
- Header alignment on desktop (removed center constraint)
- Bottom nav overlap (added calc() for padding)
- Button alignment in store cards (used flexbox with margin-top: auto)
- Image URLs breaking (switched to reliable sources)

### Time Estimates
- **Planning & Setup:** 1 hour
- **Design System:** 1 hour
- **Core Components:** 3 hours
- **Pages Implementation:** 2 hours
- **Responsive Design:** 2 hours
- **Polish & Bug Fixes:** 1.5 hours
- **Deployment & Documentation:** 1 hour
- **Total:** ~11.5 hours

---

**Last Updated:** April 22, 2026  
**Status:** ✅ Project Complete - Ready for Submission
