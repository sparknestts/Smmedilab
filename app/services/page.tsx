import type { Metadata } from "next";
import Header from "@/components/Header";
import ServicesContent from "@/components/services/ServicesContent";

export const metadata: Metadata = {
  title: "Medical Lab Services in Jaffna | Blood Tests, DNA & More – SM Medi Lab",
  description:
    "Explore SM Medi Lab's full range of laboratory services in Jaffna, Sri Lanka – blood tests, DNA analysis, urine tests, health packages & home sample collection. Fast, accurate results.",
  alternates: { canonical: "https://www.smmedilab.com/services" },
  openGraph: {
    title: "Medical Lab Services in Jaffna | SM Medi Lab",
    description: "Blood tests, DNA analysis, urine tests, health packages & home sample collection in Jaffna, Sri Lanka.",
    url: "https://www.smmedilab.com/services",
  },
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      <Header />
      <main className="flex-grow">
        <ServicesContent />
      </main>
    </div>
  );
}
