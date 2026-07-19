import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesContent from "@/components/services/ServicesContent";

export const metadata: Metadata = {
  title: "Services - SM Medi Lab",
  description:
    "Explore SM Medi Lab's comprehensive catalog of laboratory services — routine screenings, specialized diagnostics, and wellness packages.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans overflow-x-clip">
      <Header />
      <main className="flex-grow">
        <ServicesContent />
      </main>
      <Footer />
    </div>
  );
}
