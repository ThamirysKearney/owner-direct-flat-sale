// All listing content lives here so the page stays in sync with the owner's description.

import diningArea from "@/assets/dining-area.jpg.asset.json";
import entranceHall from "@/assets/entrance-hall.jpg.asset.json";
import enSuiteBathroom from "@/assets/en-suite-bathroom.jpg.asset.json";
import enSuiteWashbasin from "@/assets/en-suite-washbasin.jpg.asset.json";
import floorPlan from "@/assets/floor-plan.jpg.asset.json";
import frontOfBuilding from "@/assets/front-of-building.jpg.asset.json";
import gardenViews from "@/assets/garden-views.jpg.asset.json";
import gym from "@/assets/gym.jpg.asset.json";
import kitchen from "@/assets/kitchen.jpg.asset.json";
import livingRoom from "@/assets/living-room.jpg.asset.json";
import livingRoomPortrait from "@/assets/living-room-portrait.jpg.asset.json";
import masterBedroom from "@/assets/master-bedroom.jpg.asset.json";
import pitchPutt from "@/assets/pitch-putt.jpg.asset.json";
import playground from "@/assets/playground.jpg.asset.json";
import poolMountain from "@/assets/pool-mountain.jpg.asset.json";
import poolsGardens from "@/assets/pools-gardens.jpg.asset.json";
import privateTerrace from "@/assets/private-terrace.jpg.asset.json";
import secondBathroom from "@/assets/second-bathroom.jpg.asset.json";
import secondBedroom from "@/assets/second-bedroom.jpg.asset.json";
import terraceView from "@/assets/terrace-view.jpg.asset.json";

export const LISTING = {
  title: "Exclusive two-bedroom apartment in Arenal Golf",
  location: "Arroyo de la Miel, Benalmádena · Costa del Sol",
  price: 395000,
  contact: {
    email: "arenalgolfpiso@gmail.com",
    phone: "+34 694 497 708",
    whatsapp: "34694497708", // international format, digits only
    instagram: "costadelsolflat",
  },
};

export function formatPrice(value: number) {
  return `€${value.toLocaleString("en-GB")}`;
}

export const FACTS = [
  { value: "2", label: "Bedrooms" },
  { value: "2", label: "Bathrooms" },
  { value: "80 m²", label: "Total surface" },
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
 * Recommended sizes: gallery 1600×1200 (4:3 landscape), feature portrait 1200×1500 (4:5),
 * feature landscape 1600×1200 (4:3).
 */
export type PhotoSlot = { id: string; label: string; size: string; src?: string };

export const FEATURE_PHOTOS: Record<"apartment" | "resort", PhotoSlot> = {
  apartment: {
    id: "feature-apartment",
    label: "Dining & living room",
    size: "1200 × 1500 px",
    src: livingRoomPortrait.url,
  },
  resort: {
    id: "feature-resort",
    label: "Swimming pool with mountain views",
    size: "1200 × 1500 px",
    src: poolMountain.url,
  },
};

export const GALLERY: PhotoSlot[] = [
  { id: "g1", label: "Terrace with golf views", size: "1600 × 1200 px", src: terraceView.url },
  { id: "g2", label: "Living room", size: "1600 × 1200 px", src: livingRoom.url },
  { id: "g3", label: "Dining area", size: "1600 × 1200 px", src: diningArea.url },
  { id: "g17", label: "Private terrace", size: "1600 × 1200 px", src: privateTerrace.url },
  { id: "g4", label: "Kitchen", size: "1600 × 1200 px", src: kitchen.url },
  { id: "g14", label: "Entrance hall & corridor", size: "1600 × 1200 px", src: entranceHall.url },
  { id: "g5", label: "Master bedroom", size: "1600 × 1200 px", src: masterBedroom.url },
  {
    id: "g6",
    label: "En-suite bathroom",
    size: "1600 × 1200 px",
    src: enSuiteBathroom.url,
  },
  {
    id: "g15",
    label: "En-suite washbasin & bidet",
    size: "1600 × 1200 px",
    src: enSuiteWashbasin.url,
  },
  { id: "g7", label: "Second bedroom", size: "1600 × 1200 px", src: secondBedroom.url },
  { id: "g8", label: "Second bathroom", size: "1600 × 1200 px", src: secondBathroom.url },
  {
    id: "g9",
    label: "Pools and gardens from above",
    size: "1600 × 1200 px",
    src: poolsGardens.url,
  },
  { id: "g10", label: "Pitch & Putt course", size: "1600 × 1200 px", src: pitchPutt.url },
  { id: "g11", label: "Clubhouse & gym", size: "1600 × 1200 px", src: gym.url },
  { id: "g12", label: "Gardens & views", size: "1600 × 1200 px", src: gardenViews.url },
  { id: "g13", label: "Building & entrance", size: "1600 × 1200 px", src: frontOfBuilding.url },
  { id: "g16", label: "Children's play area", size: "1600 × 1200 px", src: playground.url },
];

/** Room-by-room plan of the apartment, shown in its own section after the photos. */
export const FLOOR_PLAN: PhotoSlot = {
  id: "floor-plan",
  label: "Floor plan",
  size: "839 × 454 px",
  src: floorPlan.url,
};

export function whatsappLink(digits: string) {
  return `https://wa.me/${digits}`;
}

export function phoneLink(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

export function instagramLink(username: string) {
  return `https://www.instagram.com/${username}/`;
}
