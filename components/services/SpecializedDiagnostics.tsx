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

export default function SpecializedDiagnostics({
  filter,
  searchQuery,
}: SpecializedDiagnosticsProps) {
  const filtered = specializedServices.filter(
    (service) =>
      matchesFilter(service.category, filter) &&
      matchesSearch(`${service.title} ${service.description}`, searchQuery)
  );

  if (filtered.length === 0) return null;

  return (
    <section className="py-12 md:py-16 px-6 md:px-12 lg:px-[10px] bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto lg:max-w-none lg:mx-0 lg:px-[20px]">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#002b5c] mb-8 md:mb-10">
          Specialized Diagnostics
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {filtered.map((service) => (
            <article
              key={service.id}
              className="bg-[#F3F4F5] border-l-4 border-[#002b5c] p-6 md:p-7 rounded-r-lg shadow-sm hover:shadow-md transition-all duration-300 flex flex-col min-h-[200px]"
            >
              <h3 className="text-base md:text-lg font-black text-[#191C1D] leading-snug">
                {service.title}
              </h3>
              <p className="mt-3 text-[#424752] text-sm leading-relaxed flex-grow">
                {service.description}
              </p>
              <p className="mt-5 text-[#003F87] font-black text-lg md:text-xl">
                {service.price}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
