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
  image?: string;
  height?: string;
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
    id: "urine",
    title: "Urine Test",
    description:
      "Comprehensive urinalysis to detect kidney function, urinary tract infections, and metabolic disorders.",
    price: "",
    category: "routine",
    image: "/drop.svg",
  },
  {
    id: "blood",
    title: "Blood Test",
    description:
      "Complete blood analysis including hematology, biochemistry, and immune system markers for overall health assessment.",
    price: "",
    category: "routine",
    image: "/drop1.svg",
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
    id: "fbs-ppbs-rbs",
    title: "FBS / PPBS / RBS",
    description:
      "Blood glucose testing for fasting, post-meal, and random blood sugar levels.",
    price: "",
    category: "specialized",
  },
  {
    id: "lipid-profile",
    title: "Lipid Profile",
    description:
      "Comprehensive cholesterol and triglyceride assessment.",
    price: "",
    category: "specialized",
  },
  {
    id: "fbc",
    title: "FBC",
    description:
      "Complete blood count for evaluating overall blood health.",
    price: "",
    category: "specialized",
  },
  {
    id: "crp",
    title: "CRP",
    description:
      "C-reactive protein test for detecting inflammation.",
    price: "",
    category: "specialized",
  },
  {
    id: "esr",
    title: "ESR",
    description:
      "Erythrocyte sedimentation rate test for assessing inflammation.",
    price: "",
    category: "specialized",
  },
  {
    id: "ufr",
    title: "UFR",
    description:
      "Urine full report for routine urinary and kidney health assessment.",
    price: "",
    category: "specialized",
  },
  {
    id: "lft",
    title: "LFT",
    description:
      "Liver function test for evaluating liver health.",
    price: "",
    category: "specialized",
  },
  {
    id: "rft",
    title: "RFT",
    description:
      "Renal function test for assessing kidney function.",
    price: "",
    category: "specialized",
  },
  {
    id: "hiv-hbsag",
    title: "HIV / HBsAg",
    description:
      "Screening tests for HIV and Hepatitis B infection.",
    price: "",
    category: "specialized",
  },
  {
    id: "thyroid-profile",
    title: "Thyroid Profile",
    description:
      "Thyroid hormone assessment for evaluating thyroid function.",
    price: "",
    category: "specialized",
  },
  {
    id: "dengue-antibody",
    title: "Dengue Antibody",
    description:
      "Antibody testing to support dengue infection assessment.",
    price: "",
    category: "specialized",
  },
  {
    id: "hba1c",
    title: "HBA1C",
    description:
      "Long-term blood glucose monitoring for diabetes assessment.",
    price: "",
    category: "specialized",
  },
  {
    id: "malaria",
    title: "Malaria",
    description:
      "Laboratory testing for malaria infection.",
    price: "",
    category: "specialized",
  },
  {
    id: "sat",
    title: "SAT",
    description:
      "Serum agglutination test for infection-related antibody detection.",
    price: "",
    category: "specialized",
  },
];

export function matchesFilter(
  category: ServiceCategory,
  filter: FilterCategory
): boolean {
  return filter === "all" || category === filter;
}
