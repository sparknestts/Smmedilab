import ContactInfoCards from "./ContactInfoCards";
import ConsultationForm from "./ConsultationForm";

export default function ContactFormSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 px-6 md:px-12 lg:px-24 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <ContactInfoCards />
          </div>
          <div className="lg:col-span-2">
            <ConsultationForm />
          </div>
        </div>
      </div>
    </section>
  );
}
