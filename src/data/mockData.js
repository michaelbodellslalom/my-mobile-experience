// Mock Data for Green Leaf Market Loyalty App

// User Profile
export const userProfile = {
  id: 'GLM-2024-8472',
  name: 'Alex Chen',
  email: 'alex.chen@email.com',
  memberSince: '2024-01-15',
  points: 2450,
  monthlyPoints: 120,
  pointsToNextReward: 50, // Points needed to reach next $5 reward
  lifetimeImpact: {
    plasticSaved: 12.4, // lbs
    carbonOffset: 45.8, // lbs CO2
  },
};

// Personalized Offers
export const offers = [
  {
    id: 'OFF-001',
    title: 'Organic Spinach',
    discount: '$2 OFF',
    description: '16 oz package of fresh organic spinach',
    expirationDate: '2026-04-28',
    imageUrl: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&h=400&fit=crop',
    category: 'Produce',
    terms: 'Limit one per customer. Cannot be combined with other offers.',
  },
  {
    id: 'OFF-002',
    title: 'Almond Milk',
    discount: '$1.50 OFF',
    description: 'Organic unsweetened almond milk, 64 oz',
    expirationDate: '2026-05-05',
    imageUrl: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&h=400&fit=crop',
    category: 'Dairy Alternatives',
    terms: 'Valid on any brand. Limit two per customer.',
  },
  {
    id: 'OFF-003',
    title: 'Organic Avocados',
    discount: '2 for $5',
    description: 'Fresh organic Hass avocados',
    expirationDate: '2026-04-25',
    imageUrl: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=400&h=400&fit=crop',
    category: 'Produce',
    terms: 'While supplies last. No rain checks.',
  },
  {
    id: 'OFF-004',
    title: 'Quinoa',
    discount: '$3 OFF',
    description: 'Organic tricolor quinoa, 2 lb bag',
    expirationDate: '2026-05-10',
    imageUrl: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=400&fit=crop',
    category: 'Grains',
    terms: 'Valid on any brand of organic quinoa.',
  },
  {
    id: 'OFF-005',
    title: 'Kombucha',
    discount: 'Buy 2 Get 1 Free',
    description: 'Organic kombucha, any flavor',
    expirationDate: '2026-04-30',
    imageUrl: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=400&fit=crop',
    category: 'Beverages',
    terms: 'Equal or lesser value. Mix and match flavors.',
  },
  {
    id: 'OFF-006',
    title: 'Free-Range Eggs',
    discount: '$2 OFF',
    description: 'Dozen organic free-range eggs',
    expirationDate: '2026-05-02',
    imageUrl: 'https://images.unsplash.com/photo-1506976785307-8732e854ad03?w=400&h=400&fit=crop',
    category: 'Eggs & Dairy',
    terms: 'Valid on one dozen. Limit one per customer.',
  },
  {
    id: 'OFF-007',
    title: 'Dark Chocolate',
    discount: '30% OFF',
    description: 'Fair trade dark chocolate bars, 70% cacao',
    expirationDate: '2026-05-08',
    imageUrl: 'https://images.unsplash.com/photo-1511381939415-e44015466834?w=400&h=400&fit=crop',
    category: 'Snacks',
    terms: 'Valid on any size. Mix and match varieties.',
  },
  {
    id: 'OFF-008',
    title: 'Sourdough Bread',
    discount: '$1 OFF',
    description: 'Freshly baked organic sourdough loaf',
    expirationDate: '2026-04-26',
    imageUrl: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=400&h=400&fit=crop',
    category: 'Bakery',
    terms: 'While supplies last. Baked fresh daily.',
  },
];

// Store Locations
export const stores = [
  {
    id: 'STORE-001',
    name: 'Green Leaf Market - Downtown',
    address: '123 Market St',
    city: 'San Francisco',
    state: 'CA',
    zip: '94102',
    phone: '(415) 555-0123',
    coordinates: { lat: 37.7749, lng: -122.4194 },
    distance: 1.2, // miles from user
    hours: {
      monday: '7:00 AM - 10:00 PM',
      tuesday: '7:00 AM - 10:00 PM',
      wednesday: '7:00 AM - 10:00 PM',
      thursday: '7:00 AM - 10:00 PM',
      friday: '7:00 AM - 10:00 PM',
      saturday: '8:00 AM - 10:00 PM',
      sunday: '8:00 AM - 9:00 PM',
    },
    isOpen: true,
  },
  {
    id: 'STORE-002',
    name: 'Green Leaf Market - Mission',
    address: '456 Valencia St',
    city: 'San Francisco',
    state: 'CA',
    zip: '94110',
    phone: '(415) 555-0456',
    coordinates: { lat: 37.7599, lng: -122.4209 },
    distance: 2.8,
    hours: {
      monday: '7:00 AM - 9:00 PM',
      tuesday: '7:00 AM - 9:00 PM',
      wednesday: '7:00 AM - 9:00 PM',
      thursday: '7:00 AM - 9:00 PM',
      friday: '7:00 AM - 9:00 PM',
      saturday: '8:00 AM - 9:00 PM',
      sunday: '8:00 AM - 8:00 PM',
    },
    isOpen: true,
  },
  {
    id: 'STORE-003',
    name: 'Green Leaf Market - Marina',
    address: '789 Chestnut St',
    city: 'San Francisco',
    state: 'CA',
    zip: '94123',
    phone: '(415) 555-0789',
    coordinates: { lat: 37.8024, lng: -122.4361 },
    distance: 3.5,
    hours: {
      monday: '8:00 AM - 9:00 PM',
      tuesday: '8:00 AM - 9:00 PM',
      wednesday: '8:00 AM - 9:00 PM',
      thursday: '8:00 AM - 9:00 PM',
      friday: '8:00 AM - 9:00 PM',
      saturday: '8:00 AM - 9:00 PM',
      sunday: '8:00 AM - 8:00 PM',
    },
    isOpen: false,
  },
];

// Purchase History
export const purchaseHistory = [
  {
    id: 'TXN-015',
    date: '2026-04-18',
    storeId: 'STORE-002',
    storeName: 'Green Leaf Market - Mission',
    total: 42.83,
    pointsEarned: 45,
    itemCount: 8,
    items: [
      { name: 'Organic Spinach', price: 4.99, category: 'Produce' },
      { name: 'Almond Milk', price: 5.49, category: 'Dairy' },
      { name: 'Sourdough Bread', price: 6.99, category: 'Bakery' },
      { name: 'Free-Range Eggs', price: 7.99, category: 'Eggs' },
      { name: 'Organic Avocados (2)', price: 5.00, category: 'Produce' },
    ],
    sustainability: {
      plasticSaved: 0.2, // lbs
      carbonOffset: 1.8, // lbs CO2
    },
  },
  {
    id: 'TXN-014',
    date: '2026-04-11',
    storeId: 'STORE-001',
    storeName: 'Green Leaf Market - Downtown',
    total: 67.24,
    pointsEarned: 68,
    itemCount: 12,
    items: [
      { name: 'Organic Quinoa', price: 12.99, category: 'Grains' },
      { name: 'Kombucha (3)', price: 11.97, category: 'Beverages' },
      { name: 'Dark Chocolate', price: 8.49, category: 'Snacks' },
      { name: 'Mixed Greens', price: 5.99, category: 'Produce' },
      { name: 'Hummus', price: 4.99, category: 'Deli' },
    ],
    sustainability: {
      plasticSaved: 0.3,
      carbonOffset: 2.5,
    },
  },
  {
    id: 'TXN-013',
    date: '2026-04-05',
    storeId: 'STORE-001',
    storeName: 'Green Leaf Market - Downtown',
    total: 28.57,
    pointsEarned: 29,
    itemCount: 5,
    items: [
      { name: 'Organic Bananas', price: 3.99, category: 'Produce' },
      { name: 'Oat Milk', price: 5.99, category: 'Dairy' },
      { name: 'Granola', price: 7.49, category: 'Breakfast' },
      { name: 'Berries', price: 6.99, category: 'Produce' },
    ],
    sustainability: {
      plasticSaved: 0.1,
      carbonOffset: 1.2,
    },
  },
  {
    id: 'TXN-012',
    date: '2026-03-29',
    storeId: 'STORE-002',
    storeName: 'Green Leaf Market - Mission',
    total: 54.18,
    pointsEarned: 55,
    itemCount: 10,
    items: [
      { name: 'Tofu', price: 4.99, category: 'Protein' },
      { name: 'Brown Rice', price: 8.99, category: 'Grains' },
      { name: 'Bell Peppers', price: 5.99, category: 'Produce' },
      { name: 'Olive Oil', price: 14.99, category: 'Pantry' },
      { name: 'Tomatoes', price: 4.49, category: 'Produce' },
    ],
    sustainability: {
      plasticSaved: 0.2,
      carbonOffset: 2.1,
    },
  },
  {
    id: 'TXN-011',
    date: '2026-03-22',
    storeId: 'STORE-001',
    storeName: 'Green Leaf Market - Downtown',
    total: 38.92,
    pointsEarned: 40,
    itemCount: 7,
    items: [
      { name: 'Organic Apples', price: 6.99, category: 'Produce' },
      { name: 'Peanut Butter', price: 8.99, category: 'Pantry' },
      { name: 'Whole Grain Pasta', price: 4.49, category: 'Pasta' },
      { name: 'Marinara Sauce', price: 5.99, category: 'Sauces' },
    ],
    sustainability: {
      plasticSaved: 0.15,
      carbonOffset: 1.6,
    },
  },
  {
    id: 'TXN-010',
    date: '2026-03-15',
    storeId: 'STORE-003',
    storeName: 'Green Leaf Market - Marina',
    total: 75.43,
    pointsEarned: 76,
    itemCount: 14,
    items: [
      { name: 'Wild Salmon', price: 18.99, category: 'Seafood' },
      { name: 'Asparagus', price: 6.99, category: 'Produce' },
      { name: 'Sweet Potatoes', price: 4.99, category: 'Produce' },
      { name: 'Coconut Milk', price: 3.99, category: 'Dairy' },
      { name: 'Coffee Beans', price: 12.99, category: 'Beverages' },
    ],
    sustainability: {
      plasticSaved: 0.4,
      carbonOffset: 3.2,
    },
  },
  {
    id: 'TXN-009',
    date: '2026-03-08',
    storeId: 'STORE-001',
    storeName: 'Green Leaf Market - Downtown',
    total: 31.27,
    pointsEarned: 32,
    itemCount: 6,
    items: [
      { name: 'Greek Yogurt', price: 6.99, category: 'Dairy' },
      { name: 'Blueberries', price: 5.99, category: 'Produce' },
      { name: 'Honey', price: 9.99, category: 'Pantry' },
      { name: 'Chia Seeds', price: 7.99, category: 'Pantry' },
    ],
    sustainability: {
      plasticSaved: 0.1,
      carbonOffset: 1.3,
    },
  },
  {
    id: 'TXN-008',
    date: '2026-03-01',
    storeId: 'STORE-002',
    storeName: 'Green Leaf Market - Mission',
    total: 49.65,
    pointsEarned: 50,
    itemCount: 9,
    items: [
      { name: 'Chicken Breast', price: 14.99, category: 'Meat' },
      { name: 'Broccoli', price: 4.99, category: 'Produce' },
      { name: 'Carrots', price: 3.49, category: 'Produce' },
      { name: 'Garlic', price: 1.99, category: 'Produce' },
      { name: 'Lemon', price: 0.99, category: 'Produce' },
    ],
    sustainability: {
      plasticSaved: 0.2,
      carbonOffset: 2.0,
    },
  },
  {
    id: 'TXN-007',
    date: '2026-02-23',
    storeId: 'STORE-001',
    storeName: 'Green Leaf Market - Downtown',
    total: 58.84,
    pointsEarned: 59,
    itemCount: 11,
    items: [
      { name: 'Organic Kale', price: 4.99, category: 'Produce' },
      { name: 'Cashews', price: 11.99, category: 'Nuts' },
      { name: 'Green Tea', price: 8.99, category: 'Beverages' },
      { name: 'Dark Chocolate', price: 7.49, category: 'Snacks' },
    ],
    sustainability: {
      plasticSaved: 0.3,
      carbonOffset: 2.4,
    },
  },
  {
    id: 'TXN-006',
    date: '2026-02-16',
    storeId: 'STORE-002',
    storeName: 'Green Leaf Market - Mission',
    total: 36.72,
    pointsEarned: 37,
    itemCount: 7,
    items: [
      { name: 'Organic Lettuce', price: 3.99, category: 'Produce' },
      { name: 'Cucumbers', price: 2.99, category: 'Produce' },
      { name: 'Cherry Tomatoes', price: 4.99, category: 'Produce' },
      { name: 'Balsamic Vinegar', price: 9.99, category: 'Pantry' },
    ],
    sustainability: {
      plasticSaved: 0.15,
      carbonOffset: 1.5,
    },
  },
  {
    id: 'TXN-005',
    date: '2026-02-09',
    storeId: 'STORE-001',
    storeName: 'Green Leaf Market - Downtown',
    total: 44.91,
    pointsEarned: 45,
    itemCount: 8,
    items: [
      { name: 'Tempeh', price: 5.99, category: 'Protein' },
      { name: 'Kimchi', price: 7.99, category: 'Fermented' },
      { name: 'Miso Paste', price: 8.99, category: 'Pantry' },
      { name: 'Seaweed Snacks', price: 4.99, category: 'Snacks' },
    ],
    sustainability: {
      plasticSaved: 0.2,
      carbonOffset: 1.9,
    },
  },
  {
    id: 'TXN-004',
    date: '2026-02-02',
    storeId: 'STORE-003',
    storeName: 'Green Leaf Market - Marina',
    total: 62.37,
    pointsEarned: 63,
    itemCount: 10,
    items: [
      { name: 'Grass-Fed Beef', price: 22.99, category: 'Meat' },
      { name: 'Zucchini', price: 3.99, category: 'Produce' },
      { name: 'Mushrooms', price: 6.99, category: 'Produce' },
      { name: 'Herbs', price: 2.99, category: 'Produce' },
    ],
    sustainability: {
      plasticSaved: 0.25,
      carbonOffset: 2.6,
    },
  },
  {
    id: 'TXN-003',
    date: '2026-01-26',
    storeId: 'STORE-001',
    storeName: 'Green Leaf Market - Downtown',
    total: 27.48,
    pointsEarned: 28,
    itemCount: 5,
    items: [
      { name: 'Oranges', price: 5.99, category: 'Produce' },
      { name: 'Grapefruit', price: 4.99, category: 'Produce' },
      { name: 'Sparkling Water', price: 6.99, category: 'Beverages' },
    ],
    sustainability: {
      plasticSaved: 0.1,
      carbonOffset: 1.1,
    },
  },
  {
    id: 'TXN-002',
    date: '2026-01-19',
    storeId: 'STORE-002',
    storeName: 'Green Leaf Market - Mission',
    total: 51.29,
    pointsEarned: 52,
    itemCount: 9,
    items: [
      { name: 'Lentils', price: 4.99, category: 'Legumes' },
      { name: 'Onions', price: 2.99, category: 'Produce' },
      { name: 'Canned Tomatoes', price: 3.99, category: 'Pantry' },
      { name: 'Vegetable Broth', price: 4.99, category: 'Pantry' },
    ],
    sustainability: {
      plasticSaved: 0.2,
      carbonOffset: 2.1,
    },
  },
  {
    id: 'TXN-001',
    date: '2026-01-12',
    storeId: 'STORE-001',
    storeName: 'Green Leaf Market - Downtown',
    total: 39.56,
    pointsEarned: 40,
    itemCount: 7,
    items: [
      { name: 'Organic Milk', price: 6.99, category: 'Dairy' },
      { name: 'Butter', price: 7.99, category: 'Dairy' },
      { name: 'Cheddar Cheese', price: 8.99, category: 'Dairy' },
      { name: 'Whole Wheat Bread', price: 5.99, category: 'Bakery' },
    ],
    sustainability: {
      plasticSaved: 0.15,
      carbonOffset: 1.7,
    },
  },
];

// Rewards Catalog (for future use)
export const rewards = [
  {
    id: 'REW-001',
    title: '$5 Off Purchase',
    pointsRequired: 500,
    description: '$5 off your next purchase of $25 or more',
    available: true,
  },
  {
    id: 'REW-002',
    title: '$10 Off Purchase',
    pointsRequired: 1000,
    description: '$10 off your next purchase of $50 or more',
    available: true,
  },
  {
    id: 'REW-003',
    title: 'Free Reusable Bag',
    pointsRequired: 750,
    description: 'Premium Green Leaf Market reusable shopping bag',
    available: true,
  },
  {
    id: 'REW-004',
    title: '$25 Off Purchase',
    pointsRequired: 2500,
    description: '$25 off your next purchase of $100 or more',
    available: true,
  },
];

// Helper Functions
export const calculateMonthlyImpact = () => {
  const thisMonth = new Date().getMonth();
  const thisYear = new Date().getFullYear();
  
  const monthlyTransactions = purchaseHistory.filter((txn) => {
    const txnDate = new Date(txn.date);
    return txnDate.getMonth() === thisMonth && txnDate.getFullYear() === thisYear;
  });
  
  const plasticSaved = monthlyTransactions.reduce(
    (sum, txn) => sum + txn.sustainability.plasticSaved,
    0
  );
  
  const carbonOffset = monthlyTransactions.reduce(
    (sum, txn) => sum + txn.sustainability.carbonOffset,
    0
  );
  
  return { plasticSaved: plasticSaved.toFixed(1), carbonOffset: carbonOffset.toFixed(1) };
};

export const getExpiringOffers = (daysThreshold = 3) => {
  const now = new Date();
  const threshold = new Date(now.getTime() + daysThreshold * 24 * 60 * 60 * 1000);
  
  return offers.filter((offer) => {
    const expirationDate = new Date(offer.expirationDate);
    return expirationDate <= threshold && expirationDate >= now;
  });
};

export const getNearestStore = () => {
  return stores.reduce((nearest, store) => 
    store.distance < nearest.distance ? store : nearest
  );
};
