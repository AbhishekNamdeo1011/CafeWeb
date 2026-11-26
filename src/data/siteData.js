const name = "The Leaf - Cafe and Brew";
const address = "1st Floor, E7/161, E-7, Arera Colony, Bhopal, Madhya Pradesh 462016";
const coordinates = "23.211198,77.4365579";
const districtUrl = "https://www.district.in/dining/bhopal/the-leaf-1-arera-colony";
const photosUrl = "https://magicpin.in/Bhopal/Arera-Colony/Restaurant/The-Leaf-Cafe-And-Brew/store/2115310/photos";
const navigation = [
  { name: "About", href: "#about" },
  { name: "Food & drink", href: "#menu" },
  { name: "Gallery", href: "#gallery" },
  { name: "Visit", href: "#contact" },
];

export const siteData = {
  business: { name, type: "cafe", tagline: "Arera Colony, Bhopal", description: "Coffee and vegetarian food on the first floor at E7/161." },
  theme: { primary: "#c2d699", primaryHover: "#d9e9bb", accent: "#9bae75", background: "#101510", surface: "#171e18", card: "#202820" },
  sections: { hero: true, about: true, featuredItems: true, menu: true, services: true, gallery: true, testimonials: true, reservation: true, contact: true },
  navigation,
  hero: {
    eyebrow: "Arera Colony · Bhopal",
    title: "The Leaf",
    subtitle: "Cafe and Brew",
    image: "/leaf/counter-hero.webp",
    primaryButton: { label: "Explore food & drink", href: "#menu" },
    secondaryButton: { label: "Find the café", href: "#contact" },
  },
  about: {
    eyebrow: "The café",
    title: "Upstairs in Arera Colony",
    description: "The Leaf is a vegetarian café on the first floor of E7/161. Pull up a cane chair for a coffee, or settle around a wooden table with a pizza to share.",
    stats: [{ value: "E7/161", label: "Arera Colony" }, { value: "1st", label: "Floor" }],
    chef: { name: "The coffee counter", title: "Inside The Leaf", image: "/leaf/counter.webp" },
    image: "/leaf/seating.webp",
    button: { label: "See inside", href: "#gallery" },
  },
  featuredItems: {
    eyebrow: "In focus", title: "From cup to kitchen",
    subtitle: "A closer look at three picks from the café counter.",
    items: [
      { name: "Coffee", description: "A warm cup for a slow start upstairs.", image: "/leaf/coffee.webp" },
      { name: "Pizza to share", description: "A golden crust, cut into slices for the table.", image: "/leaf/pizza.webp" },
      { name: "Iced cooler", description: "Served over ice with a sprig of mint.", image: "/leaf/cooler.webp" },
    ],
  },
  menu: {
    eyebrow: "Food & drink",
    title: "At the table",
    description: "A selection from the café’s photos. Ask the team about today’s menu and prices.",
    categories: [
      { id: "kitchen", name: "From the kitchen", items: [
        { name: "Pizza", image: "/leaf/pizza.webp" },
        { name: "Pasta", image: "/leaf/pasta.webp" },
        { name: "Bakery counter", image: "/leaf/bakery.webp" },
      ] },
      { id: "drinks", name: "From the bar", items: [
        { name: "Coffee", image: "/leaf/coffee.webp" },
        { name: "Iced cooler", image: "/leaf/cooler.webp" },
      ] },
    ],
  },
  gallery: { eyebrow: "Gallery", title: "Inside The Leaf", items: [
    { title: "The coffee counter", image: "/leaf/counter.webp" },
    { title: "A table for two", image: "/leaf/seating.webp" },
    { title: "Coffee at the corner table", image: "/leaf/coffee.webp" },
  ] },
  services: {
    eyebrow: "At The Leaf",
    title: "Coffee, kitchen & match days",
    description: "On the first floor in Arera Colony, coffee shares the menu with vegetarian dishes and cold drinks.",
    items: [
      { id: "coffee", icon: "Coffee", title: "Coffee at the counter", description: "Order a freshly brewed coffee or try the Lotus Biscoff shake mentioned by guests." },
      { id: "kitchen", icon: "Utensils", title: "Vegetarian kitchen", description: "Choose from Continental, Indo-Chinese and Mexican dishes, with pizza and pasta for the table." },
      { id: "sports", icon: "Users", title: "Live sports screenings", description: "District lists live sports screening at The Leaf. Call ahead to find out which match is on." },
    ],
  },
  testimonials: {
    eyebrow: "Guest reviews",
    title: "Guests on The Leaf",
    description: "Excerpts from diners who reviewed The Leaf in Arera Colony on District.",
    url: districtUrl,
    items: [
      { id: "work", quote: "A good environment to sit and work.", author: "Anand Shekher", publication: "District", rating: 5 },
      { id: "vegetarian", quote: "Highly recommended restaurant for vegetarians!", author: "Shravan Raghav", publication: "District", rating: 5 },
      { id: "pasta", quote: "please provide garlic bread with all pastas", author: "vidhi Mishra", publication: "District", rating: 5 },
    ],
  },
  reservation: {
    enabled: true,
    eyebrow: "Table Bookings",
    title: "Plan a table at The Leaf",
    description: "Try the reservation form, or call the café to arrange a table.",
    button: {
      label: "Plan a visit",
      href: "#reservation"
    },
    partySizes: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8
    ],
    timeSlots: [
      "12:00 PM",
      "12:30 PM",
      "01:00 PM",
      "01:30 PM",
      "02:00 PM",
      "07:00 PM",
      "07:30 PM",
      "08:00 PM",
      "08:30 PM",
      "09:00 PM",
      "09:30 PM",
      "10:00 PM"
    ],
    areas: ["No seating preference", "Indoor table"],
    notice: "Demo form. Call the café for availability and bookings."
  },
  contact: {
    eyebrow: "Visit us", title: "Find The Leaf", address, phone: "+91 70001 09775",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=" + coordinates,
    embedUrl: "https://maps.google.com/maps?q=" + coordinates + "&z=17&output=embed",
    hours: [{ days: "Hours listed on District", time: "11:00 AM – 11:00 PM" }],
    note: "Call ahead to confirm hours for your visit.",
  },
  footer: {
    quickLinks: [...navigation, { name: "Featured picks", href: "#featured" }, { name: "Experiences", href: "#services" }, { name: "Guest reviews", href: "#testimonials" }, { name: "Plan a table", href: "#reservation" }].map(({ name, href }) => ({ label: name, href })),
    copyright: "Website demo for The Leaf - Cafe and Brew",
    legalLinks: [{ label: "The Leaf on District", href: districtUrl }, { label: "Café photos on Magicpin", href: photosUrl }],
  },
};
