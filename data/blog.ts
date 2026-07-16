export type BlogCategory =
  | "all"
  | "clinical-research"
  | "patient-wellness"
  | "technology"
  | "lab-news";

export interface BlogAuthor {
  name: string;
  role: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: Exclude<BlogCategory, "all">;
  categoryLabel: string;
  image: string;
}

export interface FeaturedPost extends BlogPost {
  readTime: string;
  author: BlogAuthor;
}

export const blogCategories: { id: BlogCategory; label: string }[] = [
  { id: "all", label: "All Updates" },
  { id: "clinical-research", label: "Clinical Research" },
  { id: "patient-wellness", label: "Patient Wellness" },
  { id: "technology", label: "Technology" },
  { id: "lab-news", label: "Lab News" },
];

export const featuredPost: FeaturedPost = {
  id: "featured",
  title:
    "Advancing Genomic Sequencing: The Future of Personalized Medicine at SM Lab",
  excerpt:
    "Exploring how our new molecular diagnostics wing is revolutionizing the way we detect hereditary conditions before symptoms even emerge.",
  category: "clinical-research",
  categoryLabel: "Featured Insight",
  readTime: "10 Min Read",
  image: "/blog_1.svg",
  author: {
    name: "Dr. Sarah Miller",
    role: "Chief Pathologist",
  },
};

export const blogPosts: BlogPost[] = [
  {
    id: "cbc",
    title: "Understanding Complete Blood Count: Beyond the Numbers",
    excerpt:
      "A deep dive into how CBC results can reveal vital clues about your overall immune health and energy levels.",
    category: "clinical-research",
    categoryLabel: "Hematology",
    image: "/blog_sub_1.svg",
  },
  {
    id: "ai-screening",
    title: "AI Integration in Rapid Diagnostic Screening",
    excerpt:
      "How artificial intelligence is assisting our pathologists in identifying anomalies with 99.8% precision.",
    category: "technology",
    categoryLabel: "Technology",
    image: "/blog_sub_2.svg",
  },
  {
    id: "annual-screenings",
    title: "Annual Health Screenings: A Proactive Guide",
    excerpt:
      "Why regular check-ups are the most effective tool in modern preventative medicine today.",
    category: "patient-wellness",
    categoryLabel: "Wellness",
    image: "/blog_sub_3.svg",
  },
  {
    id: "antibiotic-resistance",
    title: "Tracking Antibiotic Resistance Trends",
    excerpt:
      "Analyzing the data from 2023 lab samples to identify emerging strains and treatment pathways.",
    category: "clinical-research",
    categoryLabel: "Microbiology",
    image: "/blog_sub_4.svg",
  },
  {
    id: "biochemistry-wing",
    title: "New Biochemistry Wing Opening in Downtown",
    excerpt:
      "We are expanding our reach to provide faster turnaround times for our community partners.",
    category: "lab-news",
    categoryLabel: "Innovation",
    image: "/blog_sub_5.svg",
  },
  {
    id: "fasting-science",
    title: "The Science of Fasting: Why It Matters for Bloodwork",
    excerpt:
      "How metabolic shifts during fasting ensure the clinical precision of your test results.",
    category: "patient-wellness",
    categoryLabel: "Patient Care",
    image: "/blog_sub_6.svg",
  },
];

export const totalInsights = 42;

export function matchesCategory(
  postCategory: Exclude<BlogCategory, "all">,
  filter: BlogCategory
): boolean {
  return filter === "all" || postCategory === filter;
}
