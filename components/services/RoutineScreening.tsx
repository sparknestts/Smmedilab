import {
  featuredPackage,
  matchesFilter,
  routineServices,
  type FilterCategory,
} from "@/data/services";
import Image from "next/image";
import Link from "next/link";

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
    <section className="py-16 md:py-20 px-6 md:px-12 lg:px-24 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

          {/* Main Services Grid */}
          <div className="lg:col-span-2 order-2 lg:order-1 space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[#002b5c] tracking-tight">
              Diagnostic Screenings
            </h2>

            {filteredRoutine.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch">
                {filteredRoutine.map((service) => (
                  <Link key={service.id} href={`/services/${service.id}`}>
                    <article
                      id={service.id}
                      className="bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group h-full"
                    >
                      <div className="space-y-4">
                      {service.image && (
                        <div className="bg-[#f0f4ff] p-3 rounded-2xl w-fit">
                          <Image
                            src={service.image}
                            alt=""
                            width={32}
                            height={32}
                            className="w-6 h-6 object-contain"
                          />
                        </div>
                      )}
                      <h3 className="text-lg md:text-xl font-bold text-[#002b5c] group-hover:text-[#003F87] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-500 text-sm font-medium leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-50 flex items-center justify-end">
                      <span className="text-[#002b5c] font-bold text-sm group-hover:text-[#003F87] flex items-center gap-1.5 group-hover:translate-x-1 transition-all">
                        View Details
                        <span>&rarr;</span>
                      </span>
                    </div>
                  </article>
                </Link>
                ))}
              </div>
            )}
          </div>

          {/* Featured Package Card */}
          {showFeatured && (
            <Link 
              href={`/services/${featuredPackage.id}`}
              className={`order-1 lg:order-2 ${filteredRoutine.length === 0 ? "lg:col-span-3 max-w-2xl mx-auto w-full" : ""}`}
            >
              <aside
                className="bg-[#002b5c] text-white p-8 md:p-10 rounded-3xl shadow-xl flex flex-col justify-between min-h-[400px] lg:min-h-0 hover:shadow-2xl transition-all h-full group"
              >
              <div className="space-y-6">
                <span className="text-[#93C5FD] font-bold text-xs tracking-[0.2em] uppercase bg-white/10 px-3 py-1 rounded-full">
                  {featuredPackage.label}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold leading-tight">
                  {featuredPackage.title}
                </h3>
                <p className="text-blue-100/80 text-sm leading-relaxed">
                  {featuredPackage.description}
                </p>
                <ul className="space-y-3 pt-2">
                  {featuredPackage.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <svg
                        className="w-5 h-5 text-emerald-400 shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm font-medium text-blue-50">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 w-full text-center bg-white text-[#002b5c] font-bold py-4 rounded-xl group-hover:bg-slate-100 transition-all shadow-md">
                View Details
              </div>
            </aside>
          </Link>
          )}

        </div>
      </div>
    </section>
  );
}
