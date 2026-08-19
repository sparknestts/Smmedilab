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
  testDetails?: string;
  preparation?: string[];
  turnaroundTime?: string;
}

export interface SpecializedService {
  id: string;
  title: string;
  description: string;
  price: string;
  category: ServiceCategory;
  testDetails?: string;
  preparation?: string[];
  turnaroundTime?: string;
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
  id: "featured",
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
    description: "Blood glucose test to evaluate your blood sugar levels and screen for diabetes.",
    price: "",
    category: "specialized",
    testDetails: "Measures blood glucose levels — Fasting (FBS), Post-prandial (PPBS, 2hrs after meal), or Random (RBS). Used to screen and monitor diabetes.",
    preparation: [
      "FBS - 8-10hrs fasting required",
      "PPBS - eat normal meal then test 2hrs later",
      "RBS - no fasting needed"
    ],
    turnaroundTime: "Same day (within 2-4 hours)",
  },
  {
    id: "lipid-profile",
    title: "Lipid Profile",
    description: "Comprehensive cholesterol and triglyceride assessment.",
    price: "",
    category: "specialized",
    testDetails: "Measures Total Cholesterol, HDL, LDL, and Triglycerides to assess cardiovascular risk.",
    preparation: [
      "9-12hrs fasting required",
      "Avoid alcohol 24hrs before test"
    ],
    turnaroundTime: "Within 24 hours",
  },
  {
    id: "fbc",
    title: "FBC",
    description: "Complete blood count for evaluating overall blood health.",
    price: "",
    category: "specialized",
    testDetails: "Evaluates RBC, WBC, platelets, and hemoglobin levels to detect infection, anemia, and blood disorders.",
    preparation: [
      "No fasting required",
      "Inform if on any medication"
    ],
    turnaroundTime: "Within a few hours",
  },
  {
    id: "crp",
    title: "CRP",
    description: "C-reactive protein test for detecting inflammation.",
    price: "",
    category: "specialized",
    testDetails: "Detects inflammation in the body, often used to monitor infections or inflammatory conditions.",
    preparation: [
      "No special preparation needed"
    ],
    turnaroundTime: "Within 24 hours",
  },
  {
    id: "esr",
    title: "ESR",
    description: "Erythrocyte sedimentation rate test for assessing inflammation.",
    price: "",
    category: "specialized",
    testDetails: "Measures how quickly red blood cells settle, indicating inflammation in the body.",
    preparation: [
      "No fasting required"
    ],
    turnaroundTime: "Within 24 hours",
  },
  {
    id: "ufr",
    title: "UFR",
    description: "Urine full report for routine urinary and kidney health assessment.",
    price: "",
    category: "specialized",
    testDetails: "Analyzes urine for infections, kidney issues, and other urinary abnormalities.",
    preparation: [
      "Provide mid-stream, clean-catch urine sample",
      "Avoid excess fluids before sample collection"
    ],
    turnaroundTime: "Within a few hours",
  },
  {
    id: "lft",
    title: "LFT",
    description: "Liver function test for evaluating liver health.",
    price: "",
    category: "specialized",
    testDetails: "Assesses liver health via enzymes (ALT, AST), bilirubin, and proteins.",
    preparation: [
      "8hrs fasting recommended",
      "Avoid alcohol 24hrs before"
    ],
    turnaroundTime: "Within 24 hours",
  },
  {
    id: "rft",
    title: "RFT",
    description: "Renal function test for assessing kidney function.",
    price: "",
    category: "specialized",
    testDetails: "Evaluates kidney function through urea, creatinine, and electrolyte levels.",
    preparation: [
      "No fasting typically required",
      "Stay well hydrated"
    ],
    turnaroundTime: "Within 24 hours",
  },
  {
    id: "hiv-hbsag",
    title: "HIV / HBsAg",
    description: "Screening tests for HIV and Hepatitis B infection.",
    price: "",
    category: "specialized",
    testDetails: "Screening tests for HIV antibodies and Hepatitis B surface antigen.",
    preparation: [
      "No fasting required",
      "Confidential counselling available on request"
    ],
    turnaroundTime: "Within 24-48 hours",
  },
  {
    id: "thyroid-profile",
    title: "Thyroid Profile",
    description: "Thyroid hormone assessment for evaluating thyroid function.",
    price: "",
    category: "specialized",
    testDetails: "Measures TSH, T3, T4 hormone levels to evaluate thyroid gland function.",
    preparation: [
      "Fasting may be required",
      "Consult physician before testing",
      "Bring previous medical records if any"
    ],
    turnaroundTime: "Typically available within 24 hours",
  },
  {
    id: "dengue-antibody",
    title: "Dengue Antibody",
    description: "Antibody testing to support dengue infection assessment.",
    price: "",
    category: "specialized",
    testDetails: "Detects NS1 antigen or IgG/IgM antibodies to confirm dengue infection.",
    preparation: [
      "No fasting required",
      "Best tested based on days since fever onset (consult physician)"
    ],
    turnaroundTime: "Within a few hours (same day)",
  },
  {
    id: "hba1c",
    title: "HBA1C",
    description: "Long-term blood glucose monitoring for diabetes assessment.",
    price: "",
    category: "specialized",
    testDetails: "Measures average blood sugar levels over the past 2-3 months, key for diabetes monitoring.",
    preparation: [
      "No fasting required"
    ],
    turnaroundTime: "Within 24 hours",
  },
  {
    id: "malaria",
    title: "Malaria",
    description: "Laboratory testing for malaria infection.",
    price: "",
    category: "specialized",
    testDetails: "Detects malaria parasites in blood via smear test or rapid antigen test.",
    preparation: [
      "No fasting required",
      "Best done during fever episode"
    ],
    turnaroundTime: "Within a few hours (urgent cases prioritized)",
  },
  {
    id: "sat",
    title: "SAT",
    description: "Serum agglutination test for infection-related antibody detection.",
    price: "",
    category: "specialized",
    testDetails: "Detects antibodies against specific infections (e.g., typhoid - Widal test) via agglutination reaction.",
    preparation: [
      "No fasting required"
    ],
    turnaroundTime: "Within 24 hours",
  }
];

export function matchesFilter(
  category: ServiceCategory,
  filter: FilterCategory
): boolean {
  return filter === "all" || category === filter;
}

export type AnyService = RoutineService | SpecializedService | typeof featuredPackage;

export function getAllServices(): AnyService[] {
  return [
    ...routineServices,
    featuredPackage,
    ...specializedServices,
  ];
}

export function getServiceById(id: string): AnyService | undefined {
  if (id === "executive-wellness-annual-panel" || id === "featured") {
    return featuredPackage;
  }
  
  const routine = routineServices.find(s => s.id === id);
  if (routine) return routine;
  
  const specialized = specializedServices.find(s => s.id === id);
  if (specialized) return specialized;
  
  return undefined;
}
