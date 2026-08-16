import type { Metadata } from "next";
import Header from "@/components/Header";
import ContactContent from "@/components/contact/ContactContent";

export const metadata: Metadata = {
  title: "Contact SM Medi Lab | Book a Blood Test in Jaffna",
  description:
    "Contact SM Medi Lab in Jaffna, Sri Lanka to book blood tests, DNA analysis or home sample collection. Reach us by phone, WhatsApp or visit our lab in Kondavil, Jaffna.",
  alternates: { canonical: "https://www.smmedilab.com/contact" },
  openGraph: {
    title: "Contact SM Medi Lab | Book a Blood Test in Jaffna",
    description: "Book your blood test or home sample collection at SM Medi Lab, Jaffna. Contact us by phone or WhatsApp today.",
    url: "https://www.smmedilab.com/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      <Header />
      <main className="flex-grow">
        <ContactContent />
       </main>
    </div>
  );
}
