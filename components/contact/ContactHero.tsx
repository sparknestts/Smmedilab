import Image from "next/image";
import { contactInfo } from "@/data/contact";

export default function ContactHero() {
  return (
    <section className="py-12 md:py-16 lg:py-20 px-6 md:px-12 lg:px-24 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="flex-1 space-y-6 md:space-y-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-[#002b5c] leading-tight tracking-tight">
              Clinical Precision.
              <br />
              Personal Connection.
            </h1>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-xl">
              Have questions about your results or need to schedule a specialized
              screening? Our expert diagnostic team is ready to assist you with
              editorial grace and scientific accuracy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href={contactInfo.phoneHref}
                className="inline-flex items-center justify-center bg-[#F3F4F5] gap-3   text-[#002b5c] font-medium px-6 py-3.5 rounded-lg  transition-colors"
              >
                <svg
                  className="w-5 h-5 text-[#4a90e2]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6.62 10.79c1.44 2.82 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                {contactInfo.phone}
              </a>
              <a
                href={contactInfo.whatsappHref}
                className="inline-flex items-center justify-center gap-3 bg-[#107837] hover:bg-[#1ebd5e] text-white font-medium px-6 py-3.5 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.893" />
                </svg>
                WhatsApp
              </a>
            </div>
          </div>

          <div className="flex-1 w-full">
            <div className="relative rounded-[32px] md:rounded-[40px] overflow-hidden  aspect-square max-w-lg mx-auto lg:max-w-none">
              <Image
                src="/contact-img.svg"
                alt="SM Medi Lab diagnostic facility"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
