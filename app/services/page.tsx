import Header from "@/components/Header";
import ServicesContent from "@/components/services/ServicesContent";

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
