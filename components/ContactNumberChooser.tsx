"use client";

import { useEffect } from "react";

export type ChooserMode = "whatsapp" | "call";

const WHATSAPP_ICON = (
  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.893" />
);

const PHONE_ICON = (
  <path d="M6.62 10.79c1.44 2.82 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
);

function formatNumber(value: string) {
  return value.replace(/(\d{3})(\d{3})(\d{3})/, "$1 $2 $3");
}

export default function ContactNumberChooser({
  open,
  onClose,
  mode,
  numbers,
}: {
  open: boolean;
  onClose: () => void;
  mode: ChooserMode;
  numbers: string[];
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  const title =
    mode === "whatsapp" ? "Choose a number to WhatsApp" : "Choose a number to call";

  const handleSelect = (number: string) => {
    if (mode === "whatsapp") {
      const intl = number.replace(/\D/g, "").replace(/^0/, "94");
      window.open(`https://wa.me/${intl}`, "_blank", "noopener,noreferrer");
    } else {
      window.location.href = `tel:${number}`;
    }
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-black/50 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div
        className="w-full max-w-sm bg-white rounded-2xl p-5 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base font-bold text-[#191C1D]">{title}</h3>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="p-1 rounded-md hover:bg-gray-100 transition-colors"
          >
            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="space-y-3">
          {numbers.map((number) => (
            <button
              key={number}
              type="button"
              onClick={() => handleSelect(number)}
              className="w-full flex items-center justify-between gap-3 bg-[#f8fafc] hover:bg-[#eef2ff] border border-gray-100 rounded-xl px-4 py-3.5 text-left transition-colors"
            >
              <span className="text-[#191C1D] font-semibold text-base">{formatNumber(number)}</span>
              {mode === "whatsapp" ? (
                <svg className="w-5 h-5 text-[#25D366] shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  {WHATSAPP_ICON}
                </svg>
              ) : (
                <svg className="w-5 h-5 text-[#4a90e2] shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  {PHONE_ICON}
                </svg>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
