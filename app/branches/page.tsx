import type { Metadata } from "next";
import Header from "@/components/Header";
import BranchesContent from "@/components/branches/BranchesContent";

export const metadata: Metadata = {
  title: "SM Medi Lab Branches in Jaffna | Find a Lab Near You",
  description:
    "Find your nearest SM Medi Lab branch in Jaffna, Sri Lanka. Multiple diagnostic lab locations across Jaffna for blood tests, DNA analysis & home sample collection.",
  alternates: { canonical: "https://www.smmedilab.com/branches" },
  openGraph: {
    title: "SM Medi Lab Branches in Jaffna | Find a Lab Near You",
    description: "Multiple SM Medi Lab locations across Jaffna for blood tests, DNA analysis & home sample collection.",
    url: "https://www.smmedilab.com/branches",
  },
};

export default function BranchesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      <Header />
      <main className="flex-grow">
        <BranchesContent />
      </main>
    </div>
  );
}
