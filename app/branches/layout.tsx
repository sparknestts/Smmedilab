import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SM Medi Lab Branches in Jaffna | Find a Lab Near You",
  description:
    "Find your nearest SM Medi Lab branch in Jaffna, Sri Lanka. Multiple diagnostic lab locations across Jaffna for blood tests, DNA analysis & home sample collection.",
  alternates: { canonical: "https://www.smmedilab.com/branches" },
  openGraph: {
    title: "SM Medi Lab Branches in Jaffna | Find a Lab Near You",
    description:
      "Multiple SM Medi Lab locations across Jaffna for blood tests, DNA analysis & home sample collection.",
    url: "https://www.smmedilab.com/branches",
  },
};

export default function BranchesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
