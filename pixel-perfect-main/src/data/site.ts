// Central editable configuration for Martabaan Restaurant & Bakery.
// Only verified facts belong here. Leave fields null until confirmed.
import hero from "@/assets/hero.jpg";
import paneerTikka from "@/assets/paneer-tikka.jpg";
import momosDosa from "@/assets/momos-dosa.jpg";
import bakery from "@/assets/bakery.jpg";
import dining from "@/assets/dining.jpg";
import hotdogFries from "@/assets/hotdog-fries.jpg";
import curries from "@/assets/curries.jpg";
import cakes from "@/assets/cakes.jpg";
import menuPlaceholder from "@/assets/menu-placeholder.svg";
import restaurantPlaceholder from "@/assets/restaurant-placeholder.svg";


export const images = { hero, paneerTikka, momosDosa, bakery, dining, hotdogFries, curries, cakes };

export const site = {
  name: "Martabaan Restaurant & Bakery",
  hindiName: "\n",
  phoneDisplay: "+91 81782 33039",
  phoneHref: "tel:+918178233039",
  address: {
    line1: "Shop 4 & 5, Shree Brahma Square",
    line2: "Behind ACE City, Sector 1, Aimnabad",
    city: "Greater Noida",
    region: "Uttar Pradesh",
    postalCode: "201318",
    country: "IN",
  },
  rating: { value: 4.4, count: 253, note: "As reported on the public listing. Recheck before publishing." },
  priceRange: "₹200–₹400 per person",
  reserveUrl: "https://www.google.com/maps/reserve/v/dine/c/Mwd1i5vM4XM",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=" +
    encodeURIComponent("Martabaan Restaurant & Bakery, Shree Brahma Square, Sector 1, Greater Noida 201318"),
  mapEmbedUrl:
    "https://www.google.com/maps?q=" +
    encodeURIComponent("Martabaan Restaurant & Bakery, Shree Brahma Square, Sector 1, Aimnabad, Greater Noida 201318") +
    "&output=embed",
  // Supplied listing — this is a Swiggy Dineout (table/dine-in) page, not food delivery.
  swiggyDineoutUrl:
    "https://www.swiggy.com/restaurants/martabaan-restaurant-and-bakery-sector-1-greater-noida-noida-1-660176/dineout?is_retargeting=true&media_source=GoogleReserve&utm_campaign=GoogleMap&utm_source=GoogleReserve",
  ordering: {
    // Set these to the verified delivery pages. While null, the button is not shown.
    zomatoUrl: null as string | null,
    // Swiggy delivery listing found via public search ("Order ... online"). Re-verify before launch.
    swiggyUrl: "https://www.swiggy.com/city/noida/martabaan-restaurant-and-bakery-sector-1-crossing-republic-rest733048" as string | null,
  },
  // Unverified — replace with confirmed hours. While `verified` is false, the site asks visitors to call.
  hours: {
    verified: false,
    rows: [{ days: "Monday – Sunday", time: "To be confirmed" }],
  },
};

export type MenuCategory =
  | "House Special Beverages"
  | "Soups & Raita"
  | "Tikka Shikka"
  | "Chaap Tandoor Se"
  | "Paneer & Dal"
  | "Vegetables & Kofta"
  | "Shakahari Gravy Chaap"
  | "Pilafs & Biryani"
  | "Oriental"
  | "Meethe Me";

export const menuCategories: MenuCategory[] = [
  "House Special Beverages",
  "Soups & Raita",
  "Tikka Shikka",
  "Chaap Tandoor Se",
  "Paneer & Dal",
  "Vegetables & Kofta",
  "Shakahari Gravy Chaap",
  "Pilafs & Biryani",
  "Oriental",
  "Meethe Me",
];

export const menuCards = [
  { title: "House Special Beverages", src: menuPlaceholder },
  { title: "Soups & Raita", src: menuPlaceholder },
  { title: "Tikka Shikka", src: menuPlaceholder },
  { title: "Chaap Tandoor Se", src: menuPlaceholder },
  { title: "Main Course · Paneer & Dal", src: menuPlaceholder },
  { title: "Main Course · Vegetables & Kofta", src: menuPlaceholder },
  { title: "Shakahari Gravy Chaap", src: menuPlaceholder },
  { title: "Pilafs & Biryani", src: menuPlaceholder },
  { title: "Oriental", src: menuPlaceholder },
  { title: "Meethe Me", src: menuPlaceholder },
];

export type MenuItem = {
  name: string;
  category: MenuCategory;
  price: string;
};

// Transcribed only from Martabaan's supplied menu cards.
const dishes = (category: MenuCategory, items: Array<[string, string]>): MenuItem[] =>
  items.map(([name, price]) => ({ name, category, price }));

export const menu: MenuItem[] = [
  ...dishes("House Special Beverages", [
    ["Hari Mirch Adrak Tadka Chaach", "₹110"], ["South Indian Masala Chachh", "₹130"], ["Mango Lassi", "₹140"],
    ["Banana Caramel Lassi", "₹170"], ["Modinagar ki Famous Soda Shikanji", "₹90"], ["Mathura Special Thandai", "₹160"],
    ["Saadi Lassi (Sweet/Salty)", "₹110"], ["Masaledaar Mountain Dew", "₹70"], ["Classic Cold Coffee (with Ice Cream)", "₹160"],
    ["Barfili Chai", "₹160"], ["Oreo Shake", "₹140"], ["Kit Kat Shake", "₹160"], ["Choco Brownie Shake", "₹180"], ["Strawberry Shake", "₹130"],
  ]),
  ...dishes("Soups & Raita", [
    ["Tomato Dhaniya Shorba", "₹120"], ["Manchow", "₹100"], ["Hot n Sour", "₹100"], ["Sweet Corn", "₹120"],
    ["Cream of Mushroom", "₹160"], ["Veg Clear", "₹100"], ["Veg Noodles Soup", "₹120"], ["Plain Raita", "₹70"],
    ["Boondi Raita", "₹100"], ["Mix Raita", "₹120"],
  ]),
  ...dishes("Tikka Shikka", [
    ["Hara Bhara Kebab", "₹180"], ["Tandoori Bharwan Aloo", "₹190"], ["Dahi Ke Sholey", "₹260"], ["Galawat Ke Kebab", "₹260"],
    ["Dahi Ke Kebab", "₹250"], ["Paneer Afghani Tikka", "₹260"], ["Paneer Tikka", "₹260"], ["Paneer Achari Tikka", "₹260"],
    ["Mushroom Tikka", "₹260"], ["Mushroom Malai Tikka", "₹280"], ["Mushroom Achari Tikka", "₹280"], ["Rampuri Veg Seekh Kebab", "₹220"],
  ]),
  ...dishes("Chaap Tandoor Se", [
    ["Malai Chaap", "₹130 / ₹190"], ["Afghani Chaap", "₹130 / ₹190"], ["Achari Chaap", "₹140 / ₹200"],
    ["Gambhir Masala Chaap", "₹130 / ₹190"], ["Hari Mirch Extra Hot Chaap", "₹140 / ₹200"], ["Hariyali Chaap", "₹130 / ₹190"],
    ["Kaju Paneer Stuffed Chaap", "₹160 / ₹230"], ["Chilli Cheese Chaap", "₹180 / ₹250"], ["Bhut Jolokia Chaap", "₹140 / ₹200"],
    ["Lemon Garlic Chaap", "₹140 / ₹200"],
  ]),
  ...dishes("Paneer & Dal", [
    ["Paneer Highway Butter Masala", "₹230"], ["Kadhai Paneer", "₹240"], ["Paneer Khurchan", "₹230"], ["Paneer Handi Korma", "₹240"],
    ["Shahi Paneer", "₹230"], ["Lasooni Palak Paneer", "₹220"], ["Paneer Tikka Masala", "₹260"], ["Tawa Paneer Bhurji", "₹240"],
    ["Matar Paneer", "₹220"], ["Dal Bukhara", "₹240"], ["Dal Makhani", "₹230"], ["Dhabe Wali Arhar Dal Tadka", "₹190"],
  ]),
  ...dishes("Vegetables & Kofta", [
    ["Nizamatkhani Bharwan Aloo", "₹260"], ["Kadhai Mushroom Hara Pyaaz", "₹250"], ["Lasooni Palak Mushroom", "₹250"],
    ["Mix Veg Khurchan", "₹220"], ["Rajma Raseela", "₹160"], ["Chakhne Wala Chana Masala", "₹180"], ["Gobhi Adraki", "₹160"],
    ["Ghee Wale Jeera Aloo", "₹140"], ["Angoori Malai Kofta", "₹250"], ["Achari Mix Veg", "₹230"],
  ]),
  ...dishes("Shakahari Gravy Chaap", [
    ["Raara Soya Chaap", "₹250"], ["Veg Murgh Dhauladhari", "₹230"], ["Saag Murgh", "₹230"], ["Soya Chaap Rogan Josh", "₹250"],
    ["Veg Chicken Chettinad", "₹250"], ["Butter Wala Chicken Chaap", "₹250"], ["Chicken Changezi Handi", "₹240"],
    ["Tari Wali Kadhai Chaap", "₹230"], ["Mutton Beliraam Chaap", "₹240"], ["Chaap Kali Mirch", "₹240"],
  ]),
  ...dishes("Pilafs & Biryani", [
    ["Steamed Rice", "₹100"], ["Jeera Rice", "₹120"], ["Ghee Me Bana Ghar Jaisa Pulav", "₹150"], ["Dal Khichdi", "₹130"],
    ["Navratan Pulav", "₹180"], ["Vegetable Biryani", "₹200"], ["Kathal Ki Biryani", "₹240"], ["Chaap Tikka Biryani", "₹220"],
    ["Hara Bhara Kebab Biryani", "₹280"], ["Tarbooj ki Biryani (Seasonal)", "₹260"],
  ]),
  ...dishes("Oriental", [
    ["Chilli Garlic Fried Rice", "₹120"], ["Hakka Noodles", "₹120"], ["Chilli Garlic Noodles", "₹140"],
    ["Desi Style Paneer Chowmein", "₹160"], ["Chilli Paneer", "₹180"], ["Chilli Mushroom", "₹200"], ["Chilli Gobhi", "₹160"],
    ["Chilli Potato", "₹130"], ["Honey Chilli Potato", "₹140"], ["Vegetable Manchurian", "₹160"], ["Crispy Corn", "₹200"],
  ]),
  ...dishes("Meethe Me", [
    ["Glazed Carrot Cake with Vanilla Ice Cream", "₹180"], ["Hot Chocolate with Toasted Marshmallow", "₹120"],
    ["Chocolate Brownie with Ice Cream", "₹160"], ["French Molten Chocolate Fondant", "₹180"], ["New York Cheesecake", "₹180"],
    ["Gulab Jamun (2 pcs)", "₹80"], ["Desi Ghee Moong Dal Halwa", "₹100"], ["White Chocolate Tortino (Signature)", "₹200"],
  ]),
];

// Illustrative bakery categories until actual products are confirmed.
export const bakeryShowcase = [
  { name: "Cakes", note: "Illustrative — range to be confirmed", image: cakes },
  { name: "Pastries", note: "Illustrative — range to be confirmed", image: bakery },
  { name: "Breads & Cookies", note: "Illustrative — range to be confirmed", image: bakery },
];

// Real photos of Martabaan, collected from the public Restaurant Guru listing.
export const realPhotos = [
  { src: restaurantPlaceholder, alt: "Martabaan shopfront at Shree Brahma Square", tag: "Martabaan · Exterior", w: 968, h: 645 },
  { src: restaurantPlaceholder, alt: "Inside Martabaan's dining room", tag: "Martabaan · Interior", w: 633, h: 645 },
  { src: restaurantPlaceholder, alt: "Dishes served at Martabaan", tag: "Martabaan · Food", w: 847, h: 645 },
];

export const gallery = [
  { src: hero, alt: "North Indian dishes on a shared table", tag: "Food & drinks", w: 1920, h: 1152 },
  { src: dining, alt: "Friends sharing plates at a dining table", tag: "Dining moments", w: 1024, h: 1280 },
  { src: bakery, alt: "Croissants, bread, cake and tarts", tag: "Bakery & desserts", w: 1280, h: 1024 },
  { src: paneerTikka, alt: "Paneer tikka with mint chutney", tag: "Food & drinks", w: 1024, h: 1280 },
  { src: cakes, alt: "Celebration cake beside a pastry cabinet", tag: "Ambience", w: 1024, h: 1280 },
  { src: hotdogFries, alt: "Cheese hot dog, fries and lemonade", tag: "Food & drinks", w: 1280, h: 1024 },
  { src: momosDosa, alt: "Momos and dosa", tag: "Food & drinks", w: 1280, h: 1024 },
  { src: curries, alt: "Butter paneer and dal makhani", tag: "Food & drinks", w: 1280, h: 1024 },
];
