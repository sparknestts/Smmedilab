import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Health Blog | Medical Testing Insights – SM Medi Lab Jaffna",
  description:
    "Read expert articles on diagnostics, preventive care, blood tests, and health wellness from the clinical team at SM Medi Lab in Jaffna, Sri Lanka.",
  alternates: { canonical: "https://www.smmedilab.com/blog" },
  openGraph: {
    title: "Health Blog | Medical Testing Insights – SM Medi Lab Jaffna",
    description: "Expert perspectives on diagnostics and preventive care from SM Medi Lab.",
    url: "https://www.smmedilab.com/blog",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
