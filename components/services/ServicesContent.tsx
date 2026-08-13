"use client";

import { useState } from "react";
import type { FilterCategory } from "@/data/services";
import ServicesHero from "./ServicesHero";
import RoutineScreening from "./RoutineScreening";
import SpecializedDiagnostics from "./SpecializedDiagnostics";
import ServicesCTA from "./ServicesCTA";

export default function ServicesContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");

  const hasVisibleContent =
    activeFilter === "all" ||
    activeFilter === "routine" ||
    activeFilter === "specialized" ||
    activeFilter === "wellness";

  return (
    <>
      <ServicesHero
        searchQuery={searchQuery}
        activeFilter={activeFilter}
        onSearchChange={setSearchQuery}
        onFilterChange={setActiveFilter}
      />
      {hasVisibleContent ? (
        <>
          <RoutineScreening filter={activeFilter} searchQuery={searchQuery} />
          <SpecializedDiagnostics
            filter={activeFilter}
            searchQuery={searchQuery}
          />
        </>
      ) : (
        <section className="py-20 px-6 md:px-12 lg:px-[10px] bg-white">
          <div className="max-w-7xl mx-auto lg:max-w-none lg:mx-0 lg:px-[20px] text-center">
            <p className="text-gray-500 text-lg font-medium">
              No services found in this category. Try a different filter or
              search term.
            </p>
          </div>
        </section>
      )}
      <ServicesCTA />
    </>
  );
}
