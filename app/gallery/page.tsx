import Header from "@/components/Header";
import GalleryContent from "@/components/gallery/GalleryContent";

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
