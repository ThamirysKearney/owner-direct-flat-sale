// All listing content lives here so the page stays in sync with the owner's description.

export const LISTING = {
  title: "Exclusive two-bedroom apartment in Arenal Golf",
  location: "Arroyo de la Miel, Benalmádena · Costa del Sol",
  price: 395000,
  // Replace with the owner's real contact details.
  contact: {
    email: "owner@example.com",
    whatsapp: "", // international format, digits only, e.g. "34600000000"
  },
};

export function formatPrice(value: number) {
  return `€${value.toLocaleString("en-GB")}`;
}

export const FACTS = [
  { value: "2", label: "Bedrooms" },
  { value: "2", label: "Bathrooms" },
  { value: "64 m²", label: "Interior" },
  { value: "12 m²", label: "Private terrace" },
  { value: "Ground", label: "Floor, exterior" },
  { value: "Parking", label: "+ storage room" },
];

export const APARTMENT_FEATURES = [
  "Two spacious bedrooms, including a master bedroom with en-suite bathroom and bathtub.",
  "Two full bathrooms, one with a bathtub and the other with a walk-in shower.",
  "Built-in wardrobes in both bedrooms.",
  "Fully furnished and ready to move into.",
  "Fully equipped kitchen: fridge-freezer, washing machine, dishwasher, microwave and other essential appliances.",
  "Bright living and dining area.",
  "Spacious 12 m² private terrace, ideal for outdoor dining and relaxing.",
  "Open views over the golf course, paddle and tennis facilities, and surrounding mountains.",
  "Central air conditioning and heating.",
  "Exterior-facing ground-floor apartment.",
  "Private underground parking space and storage room.",
];

export const AMENITIES = [
  { icon: "waves", label: "Two communal swimming pools" },
  { icon: "flag", label: "Andalusia's only 18-hole Pitch & Putt" },
  { icon: "dumbbell", label: "Private clubhouse with fitness facilities" },
  { icon: "trophy", label: "Tennis and paddle courts" },
  { icon: "baby", label: "Children's play areas" },
  { icon: "utensils", label: "On-site restaurant" },
  { icon: "trees", label: "Landscaped communal gardens" },
  { icon: "mountain", label: "Views to the mountains and coastline" },
  { icon: "shield", label: "Concierge and 24-hour security" },
] as const;

export const LOCATION = [
  {
    icon: "sun",
    title: "Beach",
    text: "A few minutes' drive from the Costa del Sol beaches and the lively beachfront promenade.",
  },
  {
    icon: "heart",
    title: "Healthcare",
    text: "Two hospitals about five minutes' walk away — one private international, one public — both with 24-hour adult and paediatric emergencies.",
  },
  {
    icon: "cart",
    title: "Shopping",
    text: "Carrefour and a pharmacy on the same street. Mercadona, Lidl and other essentials just 5 minutes away.",
  },
  {
    icon: "school",
    title: "Education",
    text: "Private bilingual schools inside the complex (ages 0–12) and an international college (ages 2–18) five minutes' drive away.",
  },
  {
    icon: "car",
    title: "Transport & leisure",
    text: "Easy access to the surrounding towns, beaches, restaurants and attractions of the Costa del Sol.",
  },
] as const;

export const DIRECT_SALE = [
  {
    title: "No agency fees",
    text: "You deal directly with the owner. No commission is added to the price.",
  },
  {
    title: "Legal handled by a lawyer",
    text: "An independent lawyer holds the owner's power of attorney and manages all the paperwork.",
  },
  {
    title: "Free of debts",
    text: "The property carries no debts, charges or pending paperwork.",
  },
  {
    title: "Barely lived in",
    text: "Bought brand new and used only occasionally as a second home. Never rented out.",
  },
];

/**
 * Photo slots. Each slot shows a labelled placeholder until `src` is set.
 * Recommended sizes: gallery 1600×1200 (4:3 landscape), feature 1200×1500 (4:5 portrait).
 */
export type PhotoSlot = { id: string; label: string; size: string; src?: string };

export const FEATURE_PHOTOS: Record<"apartment" | "resort", PhotoSlot> = {
  apartment: { id: "feature-apartment", label: "Living & dining area", size: "1200 × 1500 px" },
  resort: { id: "feature-resort", label: "Communal pool", size: "1200 × 1500 px" },
};

export const GALLERY: PhotoSlot[] = [
  { id: "g1", label: "Terrace with golf views", size: "1600 × 1200 px" },
  { id: "g2", label: "Living room", size: "1600 × 1200 px" },
  { id: "g3", label: "Dining area", size: "1600 × 1200 px" },
  { id: "g4", label: "Kitchen", size: "1600 × 1200 px" },
  { id: "g5", label: "Master bedroom", size: "1600 × 1200 px" },
  { id: "g6", label: "En-suite bathroom", size: "1600 × 1200 px" },
  { id: "g7", label: "Second bedroom", size: "1600 × 1200 px" },
  { id: "g8", label: "Second bathroom", size: "1600 × 1200 px" },
  { id: "g9", label: "Swimming pools", size: "1600 × 1200 px" },
  { id: "g10", label: "Pitch & Putt course", size: "1600 × 1200 px" },
  { id: "g11", label: "Clubhouse & gym", size: "1600 × 1200 px" },
  { id: "g12", label: "Gardens & views", size: "1600 × 1200 px" },
  { id: "g13", label: "Building & entrance", size: "1600 × 1200 px" },
];
