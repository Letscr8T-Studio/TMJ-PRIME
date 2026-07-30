import type { Sector } from "@/types";

export const sectors: Sector[] = [
  {
    id: "care-homes",
    title: "Care Homes",
    blurb:
      "Dependable hygiene essentials that keep residents comfortable and facilities running to standard.",
    icon: "heart-handshake",
    href: "/contact",
    image: "/images/sector-care-homes.jpg",
    imageAlt: "A bright, tidy care home lounge",
  },
  {
    id: "hotels",
    title: "Hotels",
    blurb:
      "Guest toiletries and housekeeping supplies that reflect the standard your guests expect.",
    icon: "bed",
    href: "/contact",
    image: "/images/sector-hotels.jpg",
    imageAlt: "A clean, freshly prepared hotel bathroom",
  },
  {
    id: "commercial",
    title: "Commercial",
    blurb: "Bulk hygiene and washroom supplies for offices, facilities, and trade clients.",
    icon: "building",
    href: "/contact",
    image: "/images/sector-commercial.jpg",
    imageAlt: "A modern, well-kept commercial washroom",
  },
];
