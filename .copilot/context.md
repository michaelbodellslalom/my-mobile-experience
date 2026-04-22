# Context: Green Leaf Market Loyalty App

**Purpose:** This document provides context for AI coding assistants working on this project.

---

## Project Overview

A mobile-first loyalty web application for Green Leaf Market, a sustainable grocery chain. Built with React + Vite for the P200 Capstone project.

**Live Site:** [Deployed on Vercel]  
**Repository:** https://github.com/michaelbodellslalom/my-mobile-experience

---

## Key Technologies

- **Framework:** React 18 with functional components and hooks
- **Build Tool:** Vite 8.0.9 (fast HMR, optimized builds)
- **Routing:** React Router v6 (client-side navigation)
- **Icons:** Lucide React (tree-shakeable icon library)
- **Styling:** CSS Modules (scoped styles, co-located with components)
- **Fonts:** Inter from Google Fonts
- **Deployment:** Vercel (static hosting)

---

## Project Structure

```
my-mobile-experience/
├── .copilot/              # AI scaffolding & context
│   ├── PRD.md            # Product requirements
│   ├── DESIGN.md         # Design system documentation
│   ├── TASKS.md          # Task breakdown and progress
│   └── context.md        # This file
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── Layout.jsx            # App shell (top bar + bottom nav)
│   │   ├── PointsDashboard.jsx   # Points balance widget
│   │   ├── ImpactWidget.jsx      # Sustainability metrics
│   │   ├── OfferCard.jsx         # Individual offer card
│   │   ├── StoreCard.jsx         # Store location card
│   │   ├── HistoryItem.jsx       # Purchase history item
│   │   └── *.module.css          # Component styles
│   ├── pages/            # Route pages
│   │   ├── Home.jsx             # Dashboard (points + offers preview)
│   │   ├── Offers.jsx           # All offers grid
│   │   ├── Stores.jsx           # Store locator
│   │   ├── History.jsx          # Purchase history
│   │   └── *.module.css         # Page styles
│   ├── data/
│   │   └── mockData.js          # User, offers, stores, transactions
│   ├── styles/
│   │   └── global.css           # Design system, CSS custom properties
│   ├── App.jsx          # Root component with router
│   └── main.jsx         # Entry point
├── BRIEF.md             # Project brief (what and why)
├── README.md            # Setup and deployment instructions
├── LICENSE              # MIT License
└── package.json         # Dependencies and scripts
```

---

## Design System

### CSS Custom Properties (global.css)

All design tokens defined as CSS variables in `:root`:

**Colors:**
- `--sage-green`: #87A878 (primary brand)
- `--forest-green`: #2D5016 (emphasis)
- `--off-white`: #F8FAF6 (background)

**Spacing:**
- Base unit: 8px
- `--space-md`: 16px (most common)
- `--space-lg`: 24px (card padding)

**Typography:**
- `--font-size-body`: 16px
- `--font-weight-semibold`: 600

**Layout:**
- `--bottom-nav-height`: 64px
- `--max-content-width`: 1200px

**Responsive Breakpoints:**
- Mobile: 375px - 767px (base)
- Tablet: 768px - 1023px
- Desktop: 1024px+

### Component Patterns

**Cards:** White background, 12px border radius, medium shadow
**Buttons:** 44px min height, forest green primary, outline secondary
**Navigation:** Fixed bottom, 4 items, sage green active state
**Grids:** 1 col mobile → 2 col tablet → 3 col desktop

---

## State Management

**Approach:** Simple React hooks (no Redux/Context API needed for MVP)

- `useState` for component-level state (expanded history items, etc.)
- Mock data imported directly (no API calls)
- No global state management (each page self-contained)

**Why this works:**
- Small app with limited data flow
- No authentication or user sessions
- Static data (no real-time updates)

---

## Data Structure

### User Profile
```javascript
{
  name: "Alex Chen",
  points: 2450,
  pointsThisMonth: 340,
  tier: "Gold",
  // ...
}
```

### Offers
```javascript
{
  id: 1,
  title: "Organic Spring Mix",
  description: "Fresh local greens",
  discount: "$1.50 off",
  image: "https://...",
  validUntil: "Apr 30, 2026",
  category: "produce"
}
```

### Stores
```javascript
{
  id: 1,
  name: "Green Leaf Market - Downtown",
  address: "456 Main Street...",
  phone: "(555) 234-5678",
  distance: "1.2 miles",
  hours: { ... },
  isOpen: true
}
```

### Purchase History
```javascript
{
  id: 1,
  date: "2026-04-15",
  store: "Downtown",
  total: 87.32,
  pointsEarned: 87,
  items: [
    { name: "Organic Spinach", price: 4.99, quantity: 2 }
  ]
}
```

---

## Key Design Decisions

### 1. Mobile-First, Actually
- Bottom navigation (thumb-friendly)
- Horizontal scrolling for offers (natural swipe)
- Touch targets: 44px minimum
- One-handed use optimized

**Rationale:** Users check loyalty apps on the go, not at desks. Desktop is secondary.

### 2. No Authentication (MVP)
- Loads directly to points dashboard
- Mock data represents logged-in state
- Reduces friction dramatically

**Rationale:** For a portfolio demo, showing the experience is more important than login flow.

### 3. CSS Modules Over Styled Components
- Scoped by default
- Co-located with components
- Zero runtime cost
- No new syntax to learn

**Rationale:** Keeps things simple, fast builds, familiar CSS.

### 4. Horizontal Scrolling for Offers
- Natural swipe gesture on mobile
- Shows multiple offers at once
- Partial card visible = affordance to scroll

**Rationale:** Users expect horizontal swiping on mobile (like Instagram Stories).

### 5. Flexbox for Store Card Buttons
- `margin-top: auto` pushes buttons to bottom
- Works regardless of content height differences
- Clean, semantic CSS

**Rationale:** Addresses button alignment inconsistency when address lengths vary.

---

## Common Patterns

### Page Structure
```jsx
function PageName() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h1>Page Title</h1>
        {/* page content */}
      </div>
    </div>
  );
}
```

**Key:** Wrapper has bottom padding (`calc(var(--bottom-nav-height) + var(--space-xl))`) to prevent bottom nav overlap.

### Component Styling
```css
.card {
  background: var(--white);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-md);
  padding: var(--space-lg);
}
```

**Key:** Always use CSS variables for consistency.

### Responsive Grids
```css
.grid {
  display: grid;
  grid-template-columns: 1fr; /* mobile */
  gap: var(--space-lg);
}

@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr); /* tablet */
  }
}

@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, 1fr); /* desktop */
  }
}
```

---

## Known Issues & Solutions

### Issue: Bottom Nav Covers Content
**Solution:** Add bottom padding to page wrappers
```css
padding-bottom: calc(var(--bottom-nav-height) + var(--space-xl));
/* 64px + 32px = 96px total */
```

### Issue: Header Logo/Profile Too Centered on Desktop
**Solution:** Remove `justify-content: center` and `max-width` from topBar
```css
.topBar {
  /* Removed: justify-content: center; */
  /* Removed: max-width: var(--max-content-width); */
}
```

### Issue: Store Card Buttons Misaligned
**Solution:** Use flexbox with `margin-top: auto`
```css
.card {
  display: flex;
  flex-direction: column;
}

.actions {
  margin-top: auto; /* Pushes to bottom */
}
```

---

## Development Workflow

### Local Development
```bash
npm run dev        # Start dev server (localhost:5173)
npm run build      # Create production build
npm run preview    # Test production build locally
```

### Git Workflow
- Descriptive commit messages using conventional format
- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation updates

### Testing
- Manual testing on multiple screen sizes (Chrome DevTools)
- Test all navigation flows
- Verify all images load
- Check console for errors

---

## Performance Considerations

### Bundle Size
- Target: <300KB total (uncompressed)
- Current: ~260KB
- Gzipped: ~81KB

### Optimization Strategies
- Tree-shaking (Vite default)
- Lucide React imports individual icons
- CSS Modules (no runtime CSS-in-JS)
- No unnecessary dependencies

### Load Time
- First Contentful Paint: <1.5s on 4G
- Time to Interactive: <3s
- Lighthouse mobile score: 90+

---

## Future Enhancements

### Phase 2 Features (Not in MVP)
- User authentication
- Backend API integration
- Rewards catalog and redemption
- Push notifications
- Receipt scanning
- Shopping list
- Dark mode

### Technical Debt
- Add TypeScript for type safety
- Implement error boundaries
- Add loading states
- Create skeleton loaders
- Unit tests (Vitest)
- E2E tests (Playwright)

---

## AI Assistant Tips

### When Making Changes
1. **Always use CSS variables** from global.css (never hardcode colors/spacing)
2. **Test responsive behavior** at mobile, tablet, desktop breakpoints
3. **Check bottom nav overlap** when editing page layouts (padding-bottom required)
4. **Use descriptive commit messages** following conventional commits format
5. **Maintain consistency** with existing component patterns

### File Naming Conventions
- Components: PascalCase (e.g., `OfferCard.jsx`)
- Styles: Match component name (e.g., `OfferCard.module.css`)
- Pages: PascalCase (e.g., `Home.jsx`)
- Utilities: camelCase (e.g., `mockData.js`)

### CSS Module Usage
```jsx
import styles from './Component.module.css';

function Component() {
  return <div className={styles.wrapper}>...</div>;
}
```

### Never Do
- ❌ Hardcode colors (use CSS variables)
- ❌ Inline styles (use CSS Modules)
- ❌ Break mobile-first approach
- ❌ Add heavy dependencies without justification
- ❌ Ignore accessibility (WCAG AA minimum)

---

## Contact & References

**Developer:** Michael Bodell  
**Project Type:** P200 Capstone  
**Date:** April 22, 2026

**Reference Documentation:**
- React Docs: https://react.dev
- Vite Docs: https://vitejs.dev
- Lucide Icons: https://lucide.dev
- WCAG Guidelines: https://www.w3.org/WAI/WCAG21/quickref/

---

**Last Updated:** April 22, 2026  
**Status:** Production - Deployed to Vercel
