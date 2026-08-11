"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import ContactNumberChooser, { ChooserMode } from "@/components/ContactNumberChooser";
import { contactInfo } from "@/data/contact";

const heroImages = [
  { src: "/home_scr_1.jpg", alt: "Medical Laboratory - Professional Testing" },
  { src: "/home_scr_2.jpg", alt: "Medical Laboratory - Home Collection" },
  { src: "/home_scr_3.jpg", alt: "Medical Laboratory - Advanced Diagnostics" },
  { src: "/home_scr_4.jpg", alt: "Medical Laboratory - Quality Assurance" },
];

const SLIDE_INTERVAL = 5000;

export default function Hero() {
  const [chooserMode, setChooserMode] = useState<ChooserMode | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  const goToPrev = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  }, []);

  const goToNext = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  }, []);

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, [currentSlide]);

  return (
    <>
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Images — stacked with crossfade */}
        {heroImages.map((img, index) => (
          <div
            key={img.src}
            className="absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out"
            style={{ opacity: index === currentSlide ? 1 : 0 }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}

        {/* Dark Overlay */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#001a3a]/80 via-[#001a3a]/70 to-[#002b5c]/0"></div>

        {/* Previous / Next Arrows */}
        {/* <button
          type="button"
          aria-label="Previous slide"
          onClick={goToPrev}
          className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-20
            w-10 h-10 md:w-12 md:h-12 rounded-full
            bg-black/30 hover:bg-black/50 backdrop-blur-sm
            flex items-center justify-center
            text-white transition-all duration-300
            border border-white/20 hover:border-white/40
            hover:scale-110 cursor-pointer"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          type="button"
          aria-label="Next slide"
          onClick={goToNext}
          className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-20
            w-10 h-10 md:w-12 md:h-12 rounded-full
            bg-black/30 hover:bg-black/50 backdrop-blur-sm
            flex items-center justify-center
            text-white transition-all duration-300
            border border-white/20 hover:border-white/40
            hover:scale-110 cursor-pointer"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
          </svg>
        </button> */}

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center pt-32 pb-20 md:pt-40 md:pb-28">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
            Trusted Medical Testing <br className="hidden md:block" />
            at Your Doorstep
          </h1>
          <p className="text-blue-100/80 text-base md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            Experience laboratory excellence delivered with editorial grace. We bring world-class diagnostics to your home, ensuring speed, accuracy, and comfort.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => setChooserMode("whatsapp")}
              className="flex items-center justify-center gap-2.5
               bg-[#008a3e] hover:bg-[#007032] text-white px-8 py-4 
               rounded-lg font-bold text-[15px] md:text-[17px] transition-all shadow-lg
               hover:-translate-y-0.5 w-full sm:w-auto"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.893" />
              </svg>
              WhatsApp Us
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <a
              href="/services"
              className="flex items-center justify-center gap-2 border-2 border-white/40 hover:bg-white hover:text-[#002b5c]
              text-white px-8 py-4 rounded-lg font-bold text-[15px] md:text-[17px] 
              transition-all w-full sm:w-auto"
            >
              View All Packages
            </a>
          </div>
        </div>

        {/* ISO Floating Card */}
        <div className="absolute bottom-6 left-4 md:bottom-10 md:left-12 bg-white p-3 md:p-4 rounded-lg 
        shadow-2xl z-20 flex items-center gap-3 animate-bounce-slow border border-gray-50">
          <div className="p-1.5 md:p-2 rounded-full flex items-center justify-center">
            <Image
              src="/home_1.svg"
              alt="ISO Accredited"
              width={32}
              height={32}
              className="w-6 h-6 md:w-10 md:h-10"
            />
          </div>
          <div>
            <div className="font-semibold text-gray-900 text-[11px] md:text-[15px] leading-tight">ISO Accredited</div>
            <div className="text-gray-500 text-[10px] md:text-[12px] font-medium">Global Standard Lab</div>
          </div>
        </div>

        {/* Slide Indicator Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 hidden md:flex items-center gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => goToSlide(index)}
              className={`rounded-full transition-all duration-300 ${index === currentSlide
                ? "w-7 h-2.5 bg-white"
                : "w-2.5 h-2.5 bg-white/40 hover:bg-white/70"
                }`}
            />
          ))}
        </div>

        {/* Scroll-to-top style floating button (decorative) */}
        {/* <div className="absolute bottom-6 right-4 md:bottom-10 md:right-12 z-20">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#003F87] flex items-center justify-center shadow-lg cursor-pointer hover:bg-[#002b5c] transition-colors">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </div>
        </div> */}
      </section>

      <ContactNumberChooser
        open={chooserMode !== null}
        onClose={() => setChooserMode(null)}
        mode={chooserMode ?? "whatsapp"}
        numbers={contactInfo.contactNumbers}
      />
    </>
  );
}

