/**
 * ============================================================================
 * REUSABLE CLIENT SITE DATA SCHEMA (Single Source of Truth)
 * ============================================================================
 * To create a new client website (Restaurant, Café, Hotel, Bakery, Bar, Fine Dining):
 * 1. Modify the data fields in this configuration object.
 * 2. Enable or disable sections using the `sections` toggle map.
 * 3. Customize client brand colors & fonts in the `theme` object.
 * 4. Replace client image files in `src/assets/images/` or link external URLs.
 * 
 * NO component code needs to be modified when deploying a new client!
 * ============================================================================
 */

export const siteData = {
  // 1. Business & Brand Identity
  business: {
    name: "Saffron Courtyard",
    type: "restaurant", // 'restaurant' | 'cafe' | 'hotel' | 'bakery' | 'bar' | 'fine-dining'
    tagline: "Contemporary Indian Cuisine & Warm Hospitality",
    description: "A refined culinary sanctuary in Bhopal celebrating rich regional Indian recipes, live charcoal tandoor craftsmanship, hand-ground spices, and warm hospitality.",
    logo: "" // Leave empty for text logo or specify path e.g. "/src/assets/images/logo.png"
  },

  // 2. Client Visual Theme System (Injected into CSS variables)
  theme: {
    primary: "#C89B3C",         // Saffron gold accent color
    primaryHover: "#D9AB4E",    // Brighter gold hover state
    secondary: "rgba(255, 255, 255, 0.06)",
    background: "#0D0C0A",      // Deep charcoal background
    surface: "#151310",         // Warm muted brown surface
    card: "#1B1813",            // Card container background
    text: "#F8F3EA",            // Cream/off-white main text
    mutedText: "#B5ADA0 font-light",   // Muted text
    border: "rgba(255, 255, 255, 0.10)",
    accent: "#B8892D",
    fontHeading: "'Cormorant Garamond', Georgia, serif",
    fontBody: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif"
  },

  // 3. Section Visibility Toggles (Enable/Disable sections per client)
  sections: {
    hero: true,
    about: true,
    featuredItems: true,
    menu: true,
    services: true,
    gallery: true,
    testimonials: true,
    reservation: true,
    contact: true
  },

  // 4. Header Navigation Links
  navigation: [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Menu", href: "#menu" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" }
  ],

  // 5. Hero Section
  hero: {
    eyebrow: "Fine Dining in Bhopal",
    title: "Saffron Courtyard",
    subtitle: "Contemporary Indian Cuisine & Warm Hospitality",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2000&q=90",
    primaryButton: {
      label: "Reserve a Table",
      href: "#reservation"
    },
    secondaryButton: {
      label: "Explore Menu",
      href: "#menu"
    }
  },

  // 6. About Section
  about: {
    eyebrow: "Our Story",
    title: "Crafting Authentic Culinary Journeys Across India",
    description: "Saffron Courtyard is a contemporary Indian dining sanctuary inspired by rich regional cooking traditions, live-fire charcoal tandoors, hand-harvested spices, and soulful hospitality. Located at Arera Hills in Bhopal, we honor age-old royal recipes while elevating them with elegant modern presentation.",
    paragraph2: "From slow-cooked Dal Makhani simmered overnight to succulent kebabs seasoned with hand-milled spices, every dish tells a story of passion, purity, and heritage.",
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=85",
    button: {
      label: "Reserve Your Table",
      href: "#reservation"
    },
    chef: {
      name: "Chef Vikramaditya Singh",
      title: "Executive Culinary Director",
      image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=85",
      quote: "Indian cooking is a soul-stirring harmony of regional spices, live charcoal flames, and heartfelt warmth."
    },
    stats: [
      { value: "18+", label: "Years Culinary Heritage" },
      { value: "100%", label: "Hand-Ground Spices" },
      { value: "40+", label: "Signature Recipes" },
      { value: "4.9★", label: "Guest Satisfaction" }
    ]
  },

  // 7. Signature / Featured Items
  featuredItems: [
    {
      id: "f1",
      name: "Paneer Tikka",
      description: "Artisanal cottage cheese marinated in Kashmiri chilli, hung curd, and mustard oil, charred in live clay tandoor.",
      price: 395,
      currency: "₹",
      tag: "Chef Special",
      popular: true,
      isVeg: true,
      image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=800&q=85"
    },
    {
      id: "f2",
      name: "Butter Chicken",
      description: "Tender tandoori chicken cooked in a silky, velvet tomato, butter, and dried fenugreek gravel sauce.",
      price: 495,
      currency: "₹",
      tag: "House Signature",
      popular: true,
      isVeg: false,
      image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=800&q=85"
    },
    {
      id: "f3",
      name: "Laal Maas",
      description: "Traditional Rajasthani slow-cooked tender lamb stew infused with smoky Mathania red chillies and cloves.",
      price: 545,
      currency: "₹",
      tag: "Royal Specialty",
      popular: true,
      isVeg: false,
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=85"
    },
    {
      id: "f4",
      name: "Hyderabadi Chicken Biryani",
      description: "Fragrant long-grain Basmati rice layered with spiced chicken, caramelized onions, saffron, and fresh mint in dum.",
      price: 475,
      currency: "₹",
      tag: "Dum Biryani",
      popular: true,
      isVeg: false,
      image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=85"
    },
    {
      id: "f5",
      name: "Dal Makhani",
      description: "Black lentils slow-cooked for 18 hours over charcoal embers, finished with white butter and fresh cream.",
      price: 325,
      currency: "₹",
      tag: "Classic Delight",
      popular: true,
      isVeg: true,
      image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=85"
    },
    {
      id: "f6",
      name: "Kesar Kulfi",
      description: "Traditional dense Indian ice cream flavored with saffron threads, cardamom, and toasted pistachios.",
      price: 195,
      currency: "₹",
      tag: "Dessert",
      popular: false,
      isVeg: true,
      image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=85"
    }
  ],

  // 8. Flexible Menu (Supports Restaurant, Café, Hotel, Bakery, Bar)
  menu: {
    eyebrow: "Authentic Offerings",
    title: "Seasonal Indian Menu",
    description: "Handcrafted daily using organic seasonal produce, freshly ground spices, and traditional tandoor techniques.",
    categories: [
      {
        id: "starters",
        name: "Starters",
        items: [
          {
            id: "m1",
            name: "Paneer Tikka",
            description: "Fresh cottage cheese marinated in hung curd, Kashmiri red chilli, and mustard oil, clay-baked to perfection.",
            price: 395,
            currency: "₹",
            tag: "Vegetarian",
            popular: true,
            isVeg: true,
            image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=800&q=85"
          },
          {
            id: "m2",
            name: "Dahi Ke Kebab",
            description: "Crispy velvety patties made of hung yogurt, green cardamom, coriander roots, and crushed cashews.",
            price: 365,
            currency: "₹",
            tag: "Chef Special",
            popular: false,
            isVeg: true,
            image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=85"
          },
          {
            id: "m3",
            name: "Amritsari Fish",
            description: "Crispy carom-seed and gram-flour battered river fish fillets served with spicy mint chutney.",
            price: 495,
            currency: "₹",
            tag: "Non-Veg",
            popular: false,
            isVeg: false,
            image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=85"
          }
        ]
      },
      {
        id: "tandoor",
        name: "Tandoor",
        items: [
          {
            id: "m4",
            name: "Tandoori Chicken",
            description: "Whole spring chicken double-marinated in yogurt, degi mirch, and royal spices, roasted in clay oven.",
            price: 475,
            currency: "₹",
            tag: "Tandoor Classic",
            popular: true,
            isVeg: false,
            image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=85"
          },
          {
            id: "m5",
            name: "Chicken Malai Tikka",
            description: "Boneless chicken morsels steeped in cream, cheese, cardamom, and cashew marinade, gently charred.",
            price: 445,
            currency: "₹",
            tag: "Mild & Creamy",
            popular: true,
            isVeg: false,
            image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=800&q=85"
          }
        ]
      },
      {
        id: "mains",
        name: "Main Course",
        items: [
          {
            id: "m6",
            name: "Butter Chicken",
            description: "Tender tandoori chicken cooked in a velvety tomato, white butter, and kasuri methi gravy.",
            price: 495,
            currency: "₹",
            tag: "House Favorite",
            popular: true,
            isVeg: false,
            image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=800&q=85"
          },
          {
            id: "m7",
            name: "Chicken Tikka Masala",
            description: "Char-broiled chicken tikka simmered in a spiced onion tomato gravy with capsicum and ginger juliennes.",
            price: 485,
            currency: "₹",
            tag: "Popular",
            popular: false,
            isVeg: false,
            image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=85"
          },
          {
            id: "m8",
            name: "Laal Maas",
            description: "Traditional Rajasthani slow-cooked tender lamb curry infused with smoky Mathania red chillies.",
            price: 545,
            currency: "₹",
            tag: "Spicy Signature",
            popular: true,
            isVeg: false,
            image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=85"
          },
          {
            id: "m9",
            name: "Dal Makhani",
            description: "Overnight slow-cooked black lentils finished with cultured butter, cream, and subtle smoky flavor.",
            price: 325,
            currency: "₹",
            tag: "Vegetarian",
            popular: true,
            isVeg: true,
            image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=85"
          },
          {
            id: "m10",
            name: "Palak Paneer",
            description: "Fresh cottage cheese cubes cooked in a vibrant spinach puree tempered with garlic and cumin.",
            price: 375,
            currency: "₹",
            tag: "Healthy & Rich",
            popular: false,
            isVeg: true,
            image: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=85"
          },
          {
            id: "m11",
            name: "Paneer Lababdar",
            description: "Succulent cottage cheese in a rich tomato, cashew, and grated paneer gravy enriched with aromatic spices.",
            price: 395,
            currency: "₹",
            tag: "Vegetarian",
            popular: true,
            isVeg: true,
            image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=85"
          }
        ]
      },
      {
        id: "biryani",
        name: "Biryani & Rice",
        items: [
          {
            id: "m12",
            name: "Hyderabadi Chicken Biryani",
            description: "Aromatic Basmati rice dum-cooked with spiced chicken, saffron, caramelized onions, and kewra water.",
            price: 475,
            currency: "₹",
            tag: "Royal Dum Biryani",
            popular: true,
            isVeg: false,
            image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=85"
          },
          {
            id: "m13",
            name: "Vegetable Biryani",
            description: "Garden fresh vegetables layered with saffron Basmati rice, mint, and whole sweet spices.",
            price: 385,
            currency: "₹",
            tag: "Vegetarian Dum",
            popular: false,
            isVeg: true,
            image: "https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?auto=format&fit=crop&w=800&q=85"
          },
          {
            id: "m14",
            name: "Jeera Rice",
            description: "Fluffy aged Basmati rice tempered with roasted cumin seeds and desi ghee.",
            price: 220,
            currency: "₹",
            tag: "Staple",
            popular: false,
            isVeg: true,
            image: "https://images.unsplash.com/photo-1596560548464-f010549b84d7?auto=format&fit=crop&w=800&q=85"
          }
        ]
      },
      {
        id: "breads",
        name: "Indian Breads",
        items: [
          {
            id: "m15",
            name: "Butter Naan",
            description: "Traditional refined flour flatbread baked in tandoor and brushed generously with white butter.",
            price: 85,
            currency: "₹",
            tag: "Freshly Baked",
            popular: true,
            isVeg: true,
            image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=800&q=85"
          },
          {
            id: "m16",
            name: "Garlic Naan",
            description: "Leavened flatbread topped with minced garlic, fresh coriander, and melted butter.",
            price: 95,
            currency: "₹",
            tag: "House Favorite",
            popular: true,
            isVeg: true,
            image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=85"
          },
          {
            id: "m17",
            name: "Tandoori Roti",
            description: "Whole wheat unleavened bread baked crisp on clay tandoor walls.",
            price: 45,
            currency: "₹",
            tag: "Classic",
            popular: false,
            isVeg: true,
            image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=800&q=85"
          }
        ]
      },
      {
        id: "desserts",
        name: "Desserts",
        items: [
          {
            id: "m18",
            name: "Gulab Jamun",
            description: "Warm golden milk-solid dumplings soaked in rose-cardamom sugar syrup.",
            price: 180,
            currency: "₹",
            tag: "Classic Sweet",
            popular: true,
            isVeg: true,
            image: "https://images.unsplash.com/photo-1605197586508-aa929dd23653?auto=format&fit=crop&w=800&q=85"
          },
          {
            id: "m19",
            name: "Kesar Kulfi",
            description: "Traditional slow-churned saffron ice cream served with silver leaf and chopped nuts.",
            price: 195,
            currency: "₹",
            tag: "Refreshing",
            popular: true,
            isVeg: true,
            image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=85"
          },
          {
            id: "m20",
            name: "Rasmalai",
            description: "Soft cottage cheese discs floating in chilled saffron and cardamom infused milk.",
            price: 210,
            currency: "₹",
            tag: "Royal Sweet",
            popular: true,
            isVeg: true,
            image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=85"
          }
        ]
      },
      {
        id: "beverages",
        name: "Beverages",
        items: [
          {
            id: "m21",
            name: "Masala Chai",
            description: "Brewed Assam tea steeped with ginger, green cardamom, cloves, and whole milk.",
            price: 120,
            currency: "₹",
            tag: "Traditional",
            popular: false,
            isVeg: true,
            image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=85"
          },
          {
            id: "m22",
            name: "Mango Lassi",
            description: "Creamy churned yogurt drink sweetened with Alphonso mango pulp and cardamom.",
            price: 160,
            currency: "₹",
            tag: "House Special",
            popular: true,
            isVeg: true,
            image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=800&q=85"
          },
          {
            id: "m23",
            name: "Fresh Lime Soda",
            description: "Sparkling soda with freshly squeezed lime juice, mint leaves, and black salt.",
            price: 130,
            currency: "₹",
            tag: "Cooler",
            popular: false,
            isVeg: true,
            image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=85"
          }
        ]
      }
    ]
  },

  // 9. Flexible Services & Experiences
  services: {
    eyebrow: "Hospitality & Dining",
    title: "Signature Experiences",
    description: "Immersive culinary and hospitality services crafted for unforgettable dining.",
    items: [
      {
        id: "s1",
        icon: "Utensils",
        title: "Contemporary Indian Dining",
        description: "Artfully curated regional recipes prepared with artisanal techniques and modern plating."
      },
      {
        id: "s2",
        icon: "Flame",
        title: "Live Tandoor",
        description: "Watch master chefs roast kebabs and breads over open live-fire clay tandoor ovens."
      },
      {
        id: "s3",
        icon: "Crown",
        title: "Private Celebrations",
        description: "Bespoke private dining lounge equipped for intimate anniversaries and luxury banquets."
      },
      {
        id: "s4",
        icon: "Users",
        title: "Family Dining",
        description: "Warm, spacious seating arrangements designed for relaxed multi-generational family feasts."
      },
      {
        id: "s5",
        icon: "Award",
        title: "Corporate Dining",
        description: "Premium executive dining setups with curated thalis and tasting menus for business meetings."
      },
      {
        id: "s6",
        icon: "Coffee",
        title: "Chai & Mithai Experience",
        description: "Artisanal afternoon tea service featuring handcrafted Indian sweets and fragrant masala brews."
      }
    ]
  },

  // 10. Photo Gallery
  gallery: {
    eyebrow: "Visual Gallery",
    title: "Ambience & Artistry",
    description: "Take a visual journey inside Saffron Courtyard's dining halls and royal kitchens.",
    items: [
      { id: "g1", title: "Main Courtyard Dining", category: "Interior", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80" },
      { id: "g2", title: "Royal Tandoor Kebabs", category: "Culinary", image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=800&q=80" },
      { id: "g3", title: "Authentic Indian Feast", category: "Culinary", image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80" },
      { id: "g4", title: "Open Flame Tandoor", category: "Kitchen", image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80" },
      { id: "g5", title: "Fine Dining Lounge", category: "Interior", image: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?auto=format&fit=crop&w=800&q=80" },
      { id: "g6", title: "Artisanal Indian Desserts", category: "Sweets", image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80" }
    ]
  },

  // 11. Testimonials & Reviews
  testimonials: {
    eyebrow: "Guest Reviews",
    title: "Words from Our Valued Guests",
    description: "Read genuine dining experiences shared by food enthusiasts in Bhopal.",
    items: [
      {
        id: "t1",
        quote: "Beautiful ambience, excellent service and some of the best butter chicken we've had in Bhopal. The Dal Makhani was cooked to perfection.",
        author: "Riya Sharma",
        role: "Food Blogger",
        publication: "Bhopal Food Chronicles",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
      },
      {
        id: "t2",
        quote: "Saffron Courtyard sets a new benchmark for fine dining in Madhya Pradesh. The live tandoor starters and Hyderabadi biryani are unforgettable.",
        author: "Aman Verma",
        role: "Frequent Guest",
        publication: "Bhopal Living",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
      },
      {
        id: "t3",
        quote: "Hosted a private family dinner here. The hospitality, elegant gold decor, and authentic Laal Maas blew everyone away.",
        author: "Neha Kapoor",
        role: "Event Planner",
        publication: "MP Times",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80"
      }
    ]
  },

  // 12. Reservation & Booking CTA
  reservation: {
    enabled: true,
    eyebrow: "Table Bookings",
    title: "Reserve Your Dining Experience",
    description: "Select your preferred date, time slot, and guest count for an exceptional meal at Saffron Courtyard.",
    button: {
      label: "Confirm Table Reservation",
      href: "#"
    },
    partySizes: [1, 2, 3, 4, 5, 6, 7, 8],
    timeSlots: [
      "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM",
      "07:00 PM", "07:30 PM", "08:00 PM", "08:30 PM", "09:00 PM", "09:30 PM", "10:00 PM"
    ],
    areas: ["Main Courtyard Sanctuary", "Private Family Dining Room", "Royal Tandoor Lounge", "Garden Patio"],
    notice: "For private dining events or large group celebrations exceeding 8 guests, please reach out directly to our reservations desk."
  },

  // 13. Contact & Location
  contact: {
    eyebrow: "Get in Touch",
    title: "Location & Operational Hours",
    description: "We welcome guests daily for lunch service and dinner in Bhopal.",
    address: "21 Arera Hills, Near DB City Mall, Bhopal, Madhya Pradesh 462011",
    phone: "+91 755 412 8899",
    phoneClean: "+917554128899",
    email: "hello@saffroncourtyard.in",
    mapsUrl: "https://maps.google.com/?q=21+Arera+Hills,+Near+DB+City+Mall,+Bhopal,+Madhya+Pradesh+462011",
    whatsapp: "+917554128899",
    hours: [
      { days: "Monday – Thursday", time: "12:00 PM – 11:00 PM" },
      { days: "Friday – Sunday", time: "12:00 PM – 11:30 PM" }
    ],
    note: "Kitchen accepts last orders 30 minutes prior to main closing time."
  },

  // 14. Social Links
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    youtube: "https://youtube.com",
    tripadvisor: "https://tripadvisor.com"
  },

  // 15. Footer Information
  footer: {
    description: "Contemporary Indian Cuisine & Warm Hospitality in Bhopal, Madhya Pradesh.",
    copyright: "© 2026 Saffron Courtyard. All rights reserved.",
    quickLinks: [
      { label: "Our Story", href: "#about" },
      { label: "Signature Dishes", href: "#featured" },
      { label: "Seasonal Menu", href: "#menu" },
      { label: "Reservations", href: "#reservation" }
    ],
    legalLinks: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "FSSAI Compliance", href: "#" }
    ]
  }
};
