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
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 800 460"
              preserveAspectRatio="xMidYMid slice"
              aria-hidden="true"
            >
              <rect width="800" height="460" fill="#e8ecf0" />
              <ellipse cx="400" cy="230" rx="280" ry="180" fill="#d5dce3" />
              <ellipse cx="400" cy="230" rx="180" ry="120" fill="#c8d0d8" />
              <path
                d="M200 180 Q400 120 600 180 Q500 280 400 320 Q300 280 200 180"
                fill="#b8c4ce"
                opacity="0.6"
              />
            </svg>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full">
              <div className="relative flex flex-col items-center">
                <svg
                  className="w-16 h-16 md:w-20 md:h-20 text-white drop-shadow-lg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <div className="mt-1 bg-[#0061C1] text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-md whitespace-nowrap">
                  Main Headquarters
                </div>
              </div>
            </div>
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
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                      serviceFilter === filter.id
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
