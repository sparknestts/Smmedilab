import {
  featuredPackage,
  matchesFilter,
  routineServices,
  type FilterCategory,
} from "@/data/services";
import Image from "next/image";

interface RoutineScreeningProps {
  filter: FilterCategory;
  searchQuery: string;
}

function matchesSearch(text: string, query: string): boolean {
  if (!query.trim()) return true;
  return text.toLowerCase().includes(query.toLowerCase().trim());
}

export default function RoutineScreening({
  filter,
  searchQuery,
}: RoutineScreeningProps) {
  const filteredRoutine = routineServices.filter(
    (service) =>
      matchesFilter(service.category, filter) &&
      matchesSearch(`${service.title} ${service.description}`, searchQuery)
  );

  const showFeatured =
    matchesFilter(featuredPackage.category, filter) &&
    matchesSearch(
      `${featuredPackage.title} ${featuredPackage.description}`,
      searchQuery
    );

  if (filteredRoutine.length === 0 && !showFeatured) return null;

  return (
    <section className="py-12 md:py-16 px-6 md:px-12 lg:px-[10px] bg-white">
      <div className="max-w-7xl mx-auto lg:max-w-none lg:mx-0 lg:px-[20px]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
          <div className="lg:col-span-2 order-2 lg:order-1">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#002b5c] mb-8 md:mb-10">
              Routine Screening
            </h2>

            {filteredRoutine.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
                {filteredRoutine.map((service) => (
                  <article
                    key={service.id}
                    id={service.id}
                    className="bg-white p-6 md:p-8 pb-[20px] md:pb-[20px] rounded-[24px] md:rounded-[8px] border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
                  >
                  {service.image && (
                    <Image
                      src={service.image}
                      alt=""
                      width={38}
                      height={38}
                      className="w-5 h-5 object-contain"
                    />
                  )}
                  <h3 className="mt-5 text-lg md:text-xl font-black text-[#002b5c]">
                      {service.title}
                    </h3>
                     <p className="mt-2 text-gray-500 text-sm md:text-base leading-relaxed">
                       {service.description}
                     </p>
                    <div className="mt-3 pt-2 border-t border-gray-50 flex items-center justify-between">
                      <span className="text-[#006E25] font-black text-lg md:text-xl">
                        {service.price}
                      </span>
                      <a
                        href="#"
                        className="text-[#003F87] font-bold text-sm hover:text-[#002b5c] transition-colors flex items-center gap-1"
                      >
                        Book Now
                        <span aria-hidden="true">→</span>
                      </a>
                    </div>
                  </article>
                ))}
            </div>
            )}
          </div>

          {showFeatured && (
            <aside
              className={`bg-[#002b5c] text-white p-8 md:p-10 rounded-[28px] md:rounded-[8px] flex flex-col justify-between min-h-[400px] lg:min-h-0 order-1 lg:order-2 ${
                filteredRoutine.length === 0 ? "lg:col-span-3 max-w-2xl mx-auto w-full" : ""
              }`}
            >
              <div className="space-y-5">
                <p className="text-[#4a90e2] font-bold text-xs tracking-[0.2em] uppercase">
                  {featuredPackage.label}
                </p>
                <h3 className="text-2xl md:text-3xl font-black leading-tight">
                  {featuredPackage.title}
                </h3>
                <p className="text-blue-100/80 text-sm md:text-base leading-relaxed">
                  {featuredPackage.description}
                </p>
                <ul className="space-y-3 pt-2">
                  {featuredPackage.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <svg
                        className="w-5 h-5 text-[#28a745] shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm md:text-base font-medium text-blue-50">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="#"
                className="mt-8 w-full text-center bg-white text-[#002b5c] font-bold py-4 rounded-sm hover:bg-gray-100 transition-colors"
              >
                Request Appointment
              </a>
            </aside>
          )}
        </div>
      </div>
    </section>
  );
}
