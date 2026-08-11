"use client";

import Image from "next/image";
import { filterCategories, type FilterCategory } from "@/data/services";

interface ServicesHeroProps {
  searchQuery: string;
  activeFilter: FilterCategory;
  onSearchChange: (value: string) => void;
  onFilterChange: (filter: FilterCategory) => void;
}

export default function ServicesHero({
  searchQuery,
  activeFilter,
  onSearchChange,
  onFilterChange,
}: ServicesHeroProps) {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Background image overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/home_1.png"
          alt="Services Hero Background"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#001730]/90 via-[#002b5c]/85 to-[#002b5c]"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-24 md:pt-40 md:pb-28 space-y-10">
        {/* Header content */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-[#93C5FD] font-bold text-xs md:text-sm tracking-[0.25em] uppercase">
            Diagnostic Excellence
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
            Our Diagnostic Assays & Packages
          </h1>
          <p className="text-blue-100/80 text-base md:text-lg leading-relaxed">
            Explore our comprehensive directory of laboratory services designed to provide deep biological insights with uncompromising accuracy.
          </p>
        </div>

        {/* Search bar */}
        <div className="max-w-2xl mx-auto">
          <form
            className="flex items-center bg-white/95 backdrop-blur-md p-2 rounded-2xl shadow-xl border border-white/20"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex items-center flex-1 pl-4">
              <svg
                className="w-5 h-5 text-gray-400 shrink-0"
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
                type="search"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search for tests (e.g. Glucose, Lipid Profile, Thyroid...)"
                className="w-full px-3 py-3.5 text-sm md:text-base text-gray-800 placeholder:text-gray-400 outline-none bg-transparent"
                aria-label="Search for tests"
              />
            </div>
            <button
              type="submit"
              className="bg-[#002b5c] hover:bg-[#003F87] text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-all shadow-md shrink-0"
            >
              Search
            </button>
          </form>
        </div>

        {/* Filter categories tabs */}
        <div className="flex justify-center">
          <div className="flex gap-2.5 overflow-x-auto pb-2 scrollbar-hide max-w-full">
            {filterCategories.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => onFilterChange(category.id)}
                className={`shrink-0 px-5 py-2.5 rounded-full text-xs md:text-sm font-bold transition-all shadow-xs ${activeFilter === category.id
                    ? "bg-white text-[#002b5c] shadow-lg scale-105"
                    : "bg-white/10 text-white hover:bg-white/20 backdrop-blur-xs"
                  }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Mouse Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <div className="w-6 h-10 rounded-full border-2 border-white/60 flex justify-center p-1">
          <div className="w-1.5 h-3 bg-white rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}