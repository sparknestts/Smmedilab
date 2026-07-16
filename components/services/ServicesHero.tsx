"use client";

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
    <section className="py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-[10px] bg-white">
      <div className="max-w-7xl mx-auto lg:max-w-none lg:mx-0 lg:px-[20px]">
        {/* Heading row - full width */}
        <div className="flex flex-col md:flex-row md:items-center gap-10 lg:gap-16">
          <div className="flex-1 space-y-5 max-w-2xl">
            <p className="text-[#003F87] font-bold text-xs md:text-sm tracking-[0.2em] uppercase">
              Diagnostic Excellence
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#002b5c] leading-tight tracking-tight">
              Clinical Precision.
              <br />
              Editorial Clarity.
            </h1>
          </div>
          <div className="flex-1" />
        </div>

        {/* Paragraph + Search row - side by side on desktop */}
        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10 lg:gap-16 mt-6 md:mt-8 lg:mt-10">
          <div className="flex-[2]">
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Explore our comprehensive directory of laboratory services,
designed to provide deep biological insights with uncompromising
accuracy.
            </p>
          </div>

          <div className="flex-[1] w-full md:max-w-xl">
            <form
              className="flex items-center bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="flex items-center flex-1 pl-4 md:pl-5">
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
                  placeholder="Search for tests (e.g. Glucose, Lipid Profile...)"
                  className="w-full px-3 py-4 md:py-5 text-sm md:text-base text-gray-700 placeholder:text-gray-400 outline-none bg-transparent"
                  aria-label="Search for tests"
                />
              </div>
              <button
                type="submit"
                className="bg-[#002b5c] hover:bg-[#003d7a] text-white font-bold text-sm md:text-base px-5 md:px-8 py-4 md:py-5 transition-colors shrink-0"
              >
                Search
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 md:mt-10 -mx-6 px-6 md:mx-0 md:px-0">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {filterCategories.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => onFilterChange(category.id)}
                className={`shrink-0 px-4 md:px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                  activeFilter === category.id
                    ? "bg-[#002b5c] text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}