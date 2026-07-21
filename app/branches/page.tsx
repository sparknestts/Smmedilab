import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BranchesContent from "@/components/branches/BranchesContent";

export const metadata: Metadata = {
  title: "Branches - SM Medi Lab",
  description:
    "Find an SM Medi Lab branch near you. Explore our network of diagnostic centers with expert services always within reach.",
};

export default function BranchesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      <Header />
      <main className="flex-grow">
        <BranchesContent />
      </main>
      <Footer />
    </div>
  );
}
