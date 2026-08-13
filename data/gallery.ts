export interface GalleryImageItem {
  id: string;
  src: string;
  alt: string;
  badge?: string;
  overlay?: {
    title: string;
    subtitle: string;
  };
}

export const galleryImages = {
  labFeature: {
    id: "lab-feature",
    src: "/Large Feature_ The Lab.svg",
    alt: "SM Medi Lab — laboratory glassware and precision equipment",
  },
  technology: {
    id: "technology",
    src: "/Technology.svg",
    alt: "Advanced laboratory centrifuge technology",
  },
  staff1: {
    id: "staff-1",
    src: "/Staff 1.svg",
    alt: "Lead pathologist at SM Medi Lab",
    badge: "Lead Pathologist",
  },
  microscope: {
    id: "microscope",
    src: "/Microscope View.svg",
    alt: "High-precision laboratory microscope",
  },
  waitingArea: {
    id: "waiting-area",
    src: "/Waiting Area.svg",
    alt: "Modern patient waiting area",
  },
  sampleCollection: {
    id: "sample-collection",
    src: "/Sample Collection.svg",
    alt: "Clinical sample collection room",
  },
  labStaff: {
    id: "lab-staff",
    src: "/Lab Staff.svg",
    alt: "SM Medi Lab precision team",
    overlay: {
      title: "The Precision Team",
      subtitle: "Committed to clinical accuracy every day.",
    },
  },
} as const satisfies Record<string, GalleryImageItem>;

export const galleryStats = [
  { value: "24/7", label: "Monitoring" },
  { value: "ISO", label: "Certified" },
];

export const sequencingCard = {
  title: "Next-Generation Sequencing Technology",
  badges: ["99.9% Accuracy", "Rapid Processing"],
};

export const totalGalleryItems = 42;
export const visibleGalleryItems = 9;
