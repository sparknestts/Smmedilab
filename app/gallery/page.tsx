import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GalleryContent from "@/components/gallery/GalleryContent";

export const metadata: Metadata = {
  title: "Gallery - SM Medi Lab",
  description:
    "Explore SM Medi Lab's state-of-the-art facilities, technology, and precision team through our visual gallery.",
};

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      <Header />
      <main className="flex-grow">
        <GalleryContent />
      </main>
      <Footer />
    </div>
  );
}
