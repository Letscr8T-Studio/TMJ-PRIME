import type { ProductCategory } from "@/types";

export const products: ProductCategory[] = [
  {
    id: "washroom-toiletries",
    title: "Washroom & Toiletries",
    blurb: "Soap, shampoo, and washroom essentials that keep facilities running smoothly.",
    icon: "droplets",
  },
  {
    id: "paper-consumables",
    title: "Paper & Consumables",
    blurb:
      "Toilet rolls, hand towels, and everyday consumables for washrooms and back-of-house.",
    icon: "scroll",
  },
  {
    id: "cleaning-chemicals",
    title: "Cleaning Chemicals",
    blurb: "Everyday cleaning and disinfecting chemicals for washrooms and communal areas.",
    icon: "spray",
  },
  {
    id: "infection-control",
    title: "Infection Control",
    blurb: "Hand sanitiser, PPE, and infection control essentials for high-traffic areas.",
    icon: "shield",
  },
  {
    id: "janitorial-equipment",
    title: "Janitorial Equipment",
    blurb: "Dispensers, mops, and janitorial equipment to keep facilities properly equipped.",
    icon: "brush",
  },
  {
    id: "laundry-housekeeping",
    title: "Laundry & Housekeeping",
    blurb: "Laundry supplies and housekeeping essentials for hotels and care homes.",
    icon: "shirt",
  },
];
