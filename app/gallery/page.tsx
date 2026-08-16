import type { Metadata } from "next";
import Header from "@/components/Header";
import GalleryContent from "@/components/gallery/GalleryContent";

export const metadata: Metadata = {
  title: "Lab Facilities & Gallery | SM Medi Lab Jaffna",
  description:
    "View the state-of-the-art facilities, advanced technology, and precision medical testing equipment at SM Medi Lab in Jaffna, Sri Lanka.",
  alternates: { canonical: "https://www.smmedilab.com/gallery" },
  openGraph: {
    title: "Lab Facilities & Gallery | SM Medi Lab Jaffna",
    description: "Explore SM Medi Lab's state-of-the-art diagnostic facilities in Jaffna.",
    url: "https://www.smmedilab.com/gallery",
  },
};

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      <Header />
      <main className="flex-grow">
        <GalleryContent />
      </main>
    </div>
  );
}
