"use client";

import { useState } from "react";
import {
  branches,
  matchesCitySearch,
  matchesServiceFilter,
  serviceFilters,
  type ServiceFilter,
} from "@/data/branches";

export default function InteractiveMap() {
  const [cityQuery, setCityQuery] = useState("");
  const [serviceFilter, setServiceFilter] = useState<ServiceFilter>("all");

  const filteredCount = branches.filter(
    (b) =>
      matchesCitySearch(b, cityQuery) &&
      matchesServiceFilter(b.services, serviceFilter)
  ).length;

  return (
    <section className="py-12 md:py-16 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <h2 className="text-2xl md:text-3xl font-black text-[#002b5c]">
            Interactive Map
          </h2>
          <div className="flex items-center gap-5 text-sm font-medium text-gray-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#28a745]" />
              Open Now
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
              Closed
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          <div className="lg:col-span-2 relative rounded-[28px] overflow-hidden bg-[#e8ecf0] h-[320px] sm:h-[400px] md:h-[460px]">
            {/* Real Google Maps embed — SM MediLabs Jaffna Town */}
            <iframe
              title="SM MediLabs – Jaffna Town Location"
              src="https://maps.google.com/maps?q=SM+MediLabs+Jaffna+Town&z=17&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
            />

            {/* Main Headquarters callout — floats above the red pin */}
            <div
              className="absolute pointer-events-none"
              style={{ top: "35%", left: "50%", transform: "translateX(-50%) translateY(-100%)" }}
            >
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-1.5 bg-white text-[#002b5c] text-[11px] font-bold px-3 py-1.5 rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.25)] border border-gray-200 whitespace-nowrap">
                  <svg className="w-3.5 h-3.5 text-[#0061C1] shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  Main Headquarters
                </div>
                <div
                  style={{
                    width: 0,
                    height: 0,
                    borderLeft: "6px solid transparent",
                    borderRight: "6px solid transparent",
                    borderTop: "7px solid white",
                    filter: "drop-shadow(0 2px 2px rgba(0,0,0,0.15))",
                  }}
                />
              </div>
            </div>

            {/* Open in Maps link */}
            <a
              href="https://maps.app.goo.gl/1L43egCcgGwABbp49"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-4 right-4 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm text-[#0061C1] text-xs font-bold px-3 py-2 rounded-xl shadow-lg border border-white/60 hover:bg-white transition-colors"
            >
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              Open in Maps
            </a>
          </div>

          <aside className="bg-white rounded-[28px] border border-gray-100 shadow-sm p-6 md:p-8 flex flex-col">
            <h3 className="text-xl md:text-2xl font-black text-[#002b5c] mb-6">
              Quick Find
            </h3>

            <div className="space-y-2 mb-6">
              <label
                htmlFor="citySearch"
                className="text-xs font-bold text-gray-400 uppercase tracking-wider"
              >
                City / Region
              </label>
              <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden focus-within:border-[#4a90e2] focus-within:ring-2 focus-within:ring-[#4a90e2]/20 transition-all">
                <svg
                  className="w-5 h-5 text-gray-400 ml-4 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  id="citySearch"
                  type="search"
                  value={cityQuery}
                  onChange={(e) => setCityQuery(e.target.value)}
                  placeholder="Enter your city..."
                  className="w-full px-3 py-3.5 text-sm text-gray-700 placeholder:text-gray-400 outline-none bg-transparent"
                />
              </div>
            </div>

            <div className="mb-6">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                Service Filter
              </p>
              <div className="flex flex-wrap gap-2">
                {serviceFilters.map((filter) => (
                  <button
                    key={filter.id}
                    type="button"
                    onClick={() => setServiceFilter(filter.id)}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${serviceFilter === filter.id
                      ? "bg-[#002b5c] text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="button"
              className="mt-auto w-full bg-[#0056B3] hover:bg-[#003d7a] text-white font-bold py-4 rounded-xl transition-colors"
            >
              Locate Nearest Branch
              {filteredCount > 0 && (
                <span className="ml-1 opacity-80">({filteredCount} found)</span>
              )}
            </button>
          </aside>
        </div>
      </div>
    </section>
  );
}
