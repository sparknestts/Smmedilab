"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import ContactNumberChooser, { ChooserMode } from "@/components/ContactNumberChooser";
import { contactInfo } from "@/data/contact";

const isMobileDevice = () =>
  typeof navigator !== "undefined" &&
  /Mobi|Android|iPhone|iPod|iPad/i.test(navigator.userAgent);

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/branches", label: "Branches" },
  { href: "/contact", label: "Contact" },
  { href: "/blog", label: "Blog" },
  { href: "/gallery", label: "Gallery" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [chooserMode, setChooserMode] = useState<ChooserMode | null>(null);

  const openWhatsAppChooser = () => setChooserMode("whatsapp");

  const handleCallClick = () => {
    if (isMobileDevice()) {
      setChooserMode("call");
    } else {
      window.location.href = contactInfo.phoneHref;
    }
  };

  const isActive = (href: string) =>
    href !== "#" && (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="bg-[#002b5c] text-white py-4 px-6 md:px-12 sticky top-0 z-50 shadow-md">
      <div className="flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.svg" alt="SM Medi Lab" className="h-9 w-auto" />
          <span className="text-xl md:text-2xl font-bold tracking-tight">
            SM Medi Lab
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`hover:text-blue-200 transition-colors ${
                isActive(link.href)
                  ? "text-white border-b-2 border-white pb-0.5"
                  : ""
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={openWhatsAppChooser}
            className="hidden sm:flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebd5e] text-white px-4 py-2 rounded-md font-semibold text-sm transition-all shadow-sm"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.893" />
            </svg>
            WhatsApp
          </button>
          <button
            type="button"
            onClick={handleCallClick}
            className="hidden sm:flex items-center gap-2 bg-white hover:bg-gray-100 text-[#002b5c] px-4 py-2 rounded-md font-semibold text-sm transition-all border border-[#002b5c] shadow-sm"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.82 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            Call Now
          </button>

          <button
            type="button"
            className="lg:hidden p-2 rounded-md hover:bg-white/10 transition-colors"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav className="lg:hidden mt-4 pt-4 border-t border-white/10 flex flex-col gap-1">
          <div className="flex items-center gap-2 px-1 pb-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.svg" alt="SM Medi Lab" className="h-8 w-auto" />
            <span className="text-lg font-bold tracking-tight">SM Medi Lab</span>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`px-3 py-3 rounded-lg text-sm font-medium transition-colors ${
                isActive(link.href)
                  ? "bg-white/10 text-white"
                  : "text-blue-100 hover:bg-white/5"
              }`}
            >
              {link.label}
            </a>
          ))}
          <div className="flex flex-col gap-2 pt-4 mt-2 border-t border-white/10 sm:hidden">
            <button
              type="button"
              onClick={openWhatsAppChooser}
              className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-md font-semibold text-sm"
            >
              WhatsApp
            </button>
            <button
              type="button"
              onClick={handleCallClick}
              className="flex items-center justify-center gap-2 bg-white text-[#002b5c] px-4 py-3 rounded-md font-semibold text-sm"
            >
              Call Now
            </button>
          </div>
        </nav>
      )}

      <ContactNumberChooser
        open={chooserMode !== null}
        onClose={() => setChooserMode(null)}
        mode={chooserMode ?? "whatsapp"}
        numbers={contactInfo.contactNumbers}
      />
    </header>
  );
}
