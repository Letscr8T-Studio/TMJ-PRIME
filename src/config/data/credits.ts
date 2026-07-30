// Image credits for the client's records. Not imported or rendered in the UI —
// attribution isn't legally required for Unsplash/Pexels licenses, but keeping
// provenance on file is good practice.

interface ImageCredit {
  file: string;
  photographer: string;
  sourceUrl: string;
}

export const imageCredits: ImageCredit[] = [
  {
    file: "public/images/sector-care-homes.jpg",
    photographer: "TODO: paste photographer name",
    sourceUrl: "TODO: paste the Unsplash/Pexels source URL",
  },
  {
    file: "public/images/sector-hotels.jpg",
    photographer: "TODO: paste photographer name",
    sourceUrl: "TODO: paste the Unsplash/Pexels source URL",
  },
  {
    file: "public/images/sector-commercial.jpg",
    photographer: "TODO: paste photographer name",
    sourceUrl: "TODO: paste the Unsplash/Pexels source URL",
  },
];
