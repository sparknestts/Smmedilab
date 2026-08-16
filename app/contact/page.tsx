import Header from "@/components/Header";
import ContactContent from "@/components/contact/ContactContent";

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
