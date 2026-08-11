"use client";

import Image from "next/image";
import { useState } from "react";
import ContactNumberChooser, { ChooserMode } from "@/components/ContactNumberChooser";
import { contactInfo } from "@/data/contact";

const isMobileDevice = () =>
  typeof navigator !== "undefined" &&
  ("ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    /Mobi|Android|iPhone|iPod|iPad/i.test(navigator.userAgent));

export default function ContactHero() {
  const [chooserMode, setChooserMode] = useState<ChooserMode | null>(null);

  const openWhatsAppChooser = () => setChooserMode("whatsapp");

  const handleCallClick = () => {
    if (isMobileDevice()) {
      setChooserMode("call");
    } else {
      window.location.href = contactInfo.phoneHref;
    }
  };

  return (
    <>
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/contact-img.svg"
            alt="Contact Background"
            fill
            className="object-cover opacity-15"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#001730]/90 via-[#002b5c]/85 to-[#002b5c]"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 pt-32 pb-20 md:pt-40 md:pb-28 text-center space-y-6">
          <span className="inline-block bg-white/10 backdrop-blur-xs text-[#93C5FD] text-xs md:text-sm font-bold uppercase tracking-[0.25em] px-4 py-2 rounded-full border border-white/10">
            Patient Support & Desk
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
            Clinical Precision. Personal Connection.
          </h1>
          <p className="text-blue-100/80 text-base md:text-xl leading-relaxed max-w-2xl mx-auto">
            Have questions about your results or need to schedule a home collection? Our clinical support team is ready to assist you with editorial grace and speed.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto pt-4">
            <button
              type="button"
              onClick={openWhatsAppChooser}
              className="bg-[#008a3e] hover:bg-[#007032] text-white font-bold px-8 py-4 
              rounded-lg transition-all shadow-lg flex items-center justify-center gap-2.5"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.893" />
              </svg>
              WhatsApp Support
            </button>
            <button
              type="button"
              onClick={handleCallClick}
              className="border-2 border-white/40 hover:bg-white hover:text-[#002b5c] 
              text-white font-bold px-8 py-4 rounded-lg transition-all flex items-center justify-center gap-2.5"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.82 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              Call Our Desk
            </button>
          </div>
        </div>

        {/* Mouse Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
          <div className="w-6 h-10 rounded-full border-2 border-white/60 flex justify-center p-1">
            <div className="w-1.5 h-3 bg-white rounded-full animate-bounce"></div>
          </div>
        </div>

        <ContactNumberChooser
          open={chooserMode !== null}
          onClose={() => setChooserMode(null)}
          mode={chooserMode ?? "whatsapp"}
          numbers={contactInfo.contactNumbers}
        />
      </section>
    </>
  );
}
