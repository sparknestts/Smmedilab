export type ServiceCategory =
  | "routine"
  | "specialized"
  | "wellness"
  | "imaging"
  | "genomics";

export type FilterCategory = "all" | ServiceCategory;

export interface RoutineService {
  id: string;
  title: string;
  description: string;
  price: string;
  category: ServiceCategory;
  iconColor: string;
}

export interface SpecializedService {
  id: string;
  title: string;
  description: string;
  price: string;
  category: ServiceCategory;
}

export const filterCategories: { id: FilterCategory; label: string }[] = [
  { id: "all", label: "All Services" },
  { id: "routine", label: "Routine Tests" },
  { id: "specialized", label: "Specialized Tests" },
  { id: "wellness", label: "Wellness Packages" },
  { id: "imaging", label: "Imaging" },
  { id: "genomics", label: "Genomics" },
];

export const routineServices: RoutineService[] = [
  {
    id: "cbc",
    title: "Complete Blood Count",
    description:
      "Comprehensive hematology panel measuring red cells, white cells, and platelets.",
    price: "$45.00",
    category: "routine",
    iconColor: "bg-[#f0f4ff]",
  },
  {
    id: "lipid",
    title: "Lipid Profile",
    description:
      "Full cholesterol and triglyceride assessment for cardiovascular health.",
    price: "$55.00",
    category: "routine",
    iconColor: "bg-[#e7f9ee]",
  },
  {
    id: "glucose",
    title: "Glucose (Fasting)",
    description:
      "Baseline blood sugar screening for diabetes monitoring and prevention.",
    price: "$25.00",
    category: "routine",
    iconColor: "bg-[#f0f9ff]",
  },
  {
    id: "hba1c",
    title: "HbA1c",
    description:
      "Three-month average glucose levels for long-term diabetes management.",
    price: "$40.00",
    category: "routine",
    iconColor: "bg-[#f0f4ff]",
  },
];

export const featuredPackage = {
  label: "Featured Package",
  title: "Executive Wellness Annual Panel",
  description:
    "A comprehensive annual health assessment designed for busy professionals who demand precision and convenience.",
  features: [
    "85+ Clinical Parameters",
    "Physician Consultation",
    "Personalized Health Report",
    "Priority Sample Collection",
  ],
  category: "wellness" as ServiceCategory,
};

export const specializedServices: SpecializedService[] = [
  {
    id: "thyroid",
    title: "Thyroid Profile (T3, T4, TSH)",
    description:
      "Complete thyroid hormone assessment for metabolic and energy regulation.",
    price: "$65.00",
    category: "specialized",
  },
  {
    id: "lft",
    title: "Liver Function Test (LFT)",
    description:
      "Comprehensive hepatic enzyme panel for liver health evaluation.",
    price: "$50.00",
    category: "specialized",
  },
  {
    id: "kft",
    title: "Kidney Function Test (KFT)",
    description:
      "Renal health markers including creatinine, urea, and electrolytes.",
    price: "$48.00",
    category: "specialized",
  },
  {
    id: "vitamins",
    title: "Vitamin D & B12 Panel",
    description:
      "Essential vitamin levels for bone health, immunity, and neurological function.",
    price: "$72.00",
    category: "specialized",
  },
];

export function matchesFilter(
  category: ServiceCategory,
  filter: FilterCategory
): boolean {
  return filter === "all" || category === filter;
}
