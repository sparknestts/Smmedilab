import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactContent from "@/components/contact/ContactContent";

export const metadata: Metadata = {
  title: "Contact - SM Medi Lab",
  description:
    "Get in touch with SM Medi Lab for test inquiries, consultations, and appointment scheduling. Our diagnostic team is ready to assist you.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      <Header />
      <main className="flex-grow">
        <ContactContent />
      </main>
      <Footer />
    </div>
  );
}
