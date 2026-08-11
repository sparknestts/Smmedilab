"use client";

import { useState } from "react";
import {
  matchesFilter,
  specializedServices,
  type FilterCategory,
} from "@/data/services";

interface SpecializedDiagnosticsProps {
  filter: FilterCategory;
  searchQuery: string;
}

function matchesSearch(text: string, query: string): boolean {
  if (!query.trim()) return true;
  return text.toLowerCase().includes(query.toLowerCase().trim());
}

const serviceIcons: Record<string, React.ReactNode> = {
  "fbs-ppbs-rbs": (
    <svg className="w-6 h-6 text-[#002b5c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
  ),
  "lipid-profile": (
    <svg className="w-6 h-6 text-[#002b5c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
  "fbc": (
    <svg className="w-6 h-6 text-[#002b5c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  "crp": (
    <svg className="w-6 h-6 text-[#002b5c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
    </svg>
  ),
  "esr": (
    <svg className="w-6 h-6 text-[#002b5c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  "ufr": (
    <svg className="w-6 h-6 text-[#002b5c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
  ),
  "lft": (
    <svg className="w-6 h-6 text-[#002b5c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
    </svg>
  ),
  "rft": (
    <svg className="w-6 h-6 text-[#002b5c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
  "hiv-hbsag": (
    <svg className="w-6 h-6 text-[#002b5c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  "thyroid-profile": (
    <svg className="w-6 h-6 text-[#002b5c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  "dengue-antibody": (
    <svg className="w-6 h-6 text-[#002b5c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
    </svg>
  ),
  "hba1c": (
    <svg className="w-6 h-6 text-[#002b5c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
    </svg>
  ),
  "malaria": (
    <svg className="w-6 h-6 text-[#002b5c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
    </svg>
  ),
  "sat": (
    <svg className="w-6 h-6 text-[#002b5c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  ),
};

export default function SpecializedDiagnostics({
  filter,
  searchQuery,
}: SpecializedDiagnosticsProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  const filtered = specializedServices.filter(
    (service) =>
      matchesFilter(service.category, filter) &&
      matchesSearch(`${service.title} ${service.description}`, searchQuery)
  );

  // Show only 8 items (2 rows of 4) on desktop when not showing all
  const displayItems = showAll ? filtered : filtered.slice(0, 8);

  if (filtered.length === 0) return null;

  return (
    <section className="py-12 md:py-16 px-6 md:px-12 lg:px-[60px] bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto lg:max-w-none lg:mx-0 lg:px-[20px]">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#002b5c] mb-8 md:mb-10 flex items-center gap-3">
          <svg className="w-8 h-8 md:w-10 md:h-10 text-[#FFD700]" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          Specialized Diagnostics
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {displayItems.map((service) => {
            const isExpanded = expandedId === service.id;
            return (
              <article
                key={service.id}
                onClick={() => setExpandedId(isExpanded ? null : service.id)}
                className="bg-[#F3F4F5] border-l-4 border-[#002b5c] p-5 md:p-6 rounded-r-lg shadow-sm hover:shadow-md transition-all duration-300 flex flex-col min-h-[120px] cursor-pointer"
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    {serviceIcons[service.id] || (
                      <svg className="w-6 h-6 text-[#002b5c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    )}
                  </div>
                  <h3 className="text-base md:text-lg font-black text-[#191C1D] leading-snug">
                    {service.title}
                  </h3>
                </div>
                <p className="mt-3 text-[#424752] text-sm leading-relaxed flex-grow">
                  { service.description }
                </p>
               
                {service.price && (
                  <p className="mt-3 text-[#003F87] font-black text-lg md:text-xl">
                    {service.price}
                  </p>
                )}
              </article>
            );
          })}
        </div>

        {filtered.length > 8 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="mt-8 text-[#003F87] font-black text-center w-full hover:underline"
          >
            {showAll ? "Show less.." : "show more.."}
          </button>
        )}
      </div>
    </section>
  );
}
