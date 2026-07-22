"use client";

import Image from "next/image";
import { useState } from "react";
import ContactNumberChooser, { ChooserMode } from "@/components/ContactNumberChooser";
import { contactInfo } from "@/data/contact";

export default function Hero() {
  const [chooserMode, setChooserMode] = useState<ChooserMode | null>(null);
    return (
    <>
        <main className="flex-grow flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-24 py-12 md:py-20 lg:py-24 gap-12 overflow-hidden bg-white">
            {/* Left Content */}
            <div className="flex-1 max-w-2xl space-y-8 animate-in fade-in slide-in-from-left duration-1000">
                <div className="inline-block bg-[#80F98B] text-[#007327] px-4 py-1 rounded-xl
                 text-[10px] font-bold uppercase tracking-wider ">
                    Certified Precision
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-[72px] font-semibold font-manrope text-[#003F87] leading-[1.1] tracking-tight">
                    Trusted Medical Testing at Your Doorstep
                </h1>

                <p className="text-gray-600 text-[14px] md:text-xl leading-relaxed max-w-lg">
                    Experience laboratory excellence delivered with editorial grace. We bring world-class diagnostics to your home, ensuring speed, accuracy, and comfort.
                </p>

                <div className="flex flex-col sm:flex-row items-start gap-4 pt-4">
                    <button
                        type="button"
                        onClick={() => setChooserMode("whatsapp")}
                        className="flex items-center justify-center gap-2
                         bg-[#008a3e] hover:bg-[#007032] text-white px-8 py-4 
                         rounded-lg font-bold text-[15px] md:text-[18px] transition-all shadow-lg
                          hover:-translate-y-1 w-full sm:w-auto"
                    >
                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.893" />
                        </svg>
                        WhatsApp
                    </button>
                    <a href="#" className="bg-gray-100 hover:bg-gray-200 text-gray-800 
                    px-8 py-4 rounded-lg font-bold text-[15px] md:text-[18px] 
                    transition-all border border-gray-200 text-center 
                    w-full sm:w-auto">
                        View All Packages
                    </a>
                </div>
            </div>

            {/* Right Content - Image */}
            <div className="flex-1 relative animate-in fade-in slide-in-from-right duration-1000 
            max-w-sm md:max-w-none mx-auto">
          <div className="relative z-10 overflow-hidden group">
            <div className="rounded-[32px] overflow-hidden">
              <Image
                src="/home_1.png"
                alt="Medical Microscope"
                width={800}
                height={600}
                className="w-full object-cover transform transition-transform duration-700
                 group-hover:scale-105"
                priority
              />
            </div>
            {/* Background shape accent */}
            <div className="absolute -inset-10 -z-10 bg-blue-100/50 rounded-full blur-3xl opacity-50 translate-x-10 translate-y-10 group-hover:translate-x-12 transition-transform duration-700"></div>
          </div>

          {/* ISO Card */}
          <div className="absolute -bottom-4 -left-2 md:-bottom-6 md:-left-12 bg-white p-2 md:p-6 rounded-xl md:rounded-2xl shadow-2xl z-20 flex items-center gap-2 md:gap-4 animate-bounce-slow border border-gray-50">
            <div className="bg-[#dbffeb] p-1.5 md:p-3 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 md:w-8 md:h-8 text-[#28a745]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 013 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <div className="font-black text-gray-900 text-xs md:text-lg leading-tight">ISO Accredited</div>
              <div className="text-gray-500 text-[10px] md:text-sm font-medium">Global Standard Lab</div>
            </div>
          </div>
        </div>
        </main>

        <ContactNumberChooser
            open={chooserMode !== null}
            onClose={() => setChooserMode(null)}
            mode={chooserMode ?? "whatsapp"}
            numbers={contactInfo.contactNumbers}
        />
    </>
    );
}
