import Image from "next/image";
import {
  getStatusStyles,
  headquarters,
  otherBranches,
} from "@/data/branches";

function StatusBadge({
  status,
  text,
}: {
  status: "open" | "closed" | "opens-soon";
  text: string;
}) {
  return (
    <span
      className={`inline-block text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${getStatusStyles(status)}`}
    >
      {text}
    </span>
  );
}

export default function BranchLocations() {
  return (
    <section className="py-12 md:py-16 lg:py-20 px-6 md:px-12 lg:px-20 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#002b5c] mb-8 md:mb-12">
          Our Strategic Locations
        </h2>

        {/* Desktop: HQ left (7 cols) + Branch cards right (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-13 gap-6 lg:gap-5">
          {/* ─── HQ Card ─── */}
          <article className="relative lg:col-span-8 bg-white rounded-[8px] md:rounded-[8px] overflow-hidden shadow-sm border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-3">
              {/* Image – left side */}
                <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[220px] bg-[#0a2540] overflow-hidden mr-0 md:mr-0 ml-3 md:ml-8 mt-3 md:mt-8 mb-3 md:mb-8 rounded-lg md:col-span-1">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0a2540] via-[#1a3a5c] to-[#0a2540]" />
                <Image
                  src="/branches_2.svg"
                  alt={headquarters.name}
                  fill
                  className="object-cover opacity-90"
                  priority
                />
              </div>

              {/* Content – right side */}
              <div className="p-6 md:p-8 flex flex-col justify-center md:col-span-2">
                {/* Label + Status */}
                <div className="flex items-center justify-between gap-3 mb-2">
                  <div className="flex items-center gap-1.5 text-[#007327]">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm font-bold">Main Headquarters</span>
                  </div>
                  <StatusBadge
                    status={headquarters.status}
                    text={headquarters.statusText}
                  />
                </div>

                {/* Name */}
                <h3 className="text-xl md:text-xl font-black text-[#002b5c] mb-4">
                  {headquarters.name}
                </h3>

                {/* Address */}
                <div className="flex items-start gap-2 text-gray-500 text-sm mb-5">
                  <svg className="w-4 h-4 text-[#4a90e2] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  <span>{headquarters.address}</span>
                </div>

                {/* Hours grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-[#F3F4F5] rounded-xs p-3">
                    <p className="text-[10px] font-bold text-[#727784] uppercase tracking-wider mb-0.5">
                      Mon – Fri
                    </p>
                    <p className="text-xs font-black text-[#191C1D]">
                      {headquarters.weekdayHours
                        ? headquarters.weekdayHours.replace("Mon–Fri: ", "")
                        : "06:00 AM – 09:00 PM"}
                    </p>
                  </div>
                  <div className="bg-[#F3F4F5] rounded-xs p-3">
                    <p className="text-[10px] font-bold text-[#727784] uppercase tracking-wider mb-0.5">
                      Sat – Sun
                    </p>
                    <p className="text-xs font-black text-[#191C1D]">
                      {headquarters.weekendHours
                        ? headquarters.weekendHours.replace("Sat–Sun: ", "")
                        : "07:00 AM – 05:00 PM"}
                    </p>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-2">
                  <a
                    href="/contact"
                    className="flex-7 inline-flex items-center justify-center bg-[#003F87] hover:bg-[#003d7a] text-white font-bold px-5 py-2 rounded-sm transition-colors text-xs"
                  >
                    Book Here
                  </a>
                  <a
                    href={headquarters.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center border-1 border-[#C2C6D4] text-[#424752] hover:bg-[#002b5c] hover:text-white font-bold px-5 py-2 rounded-sm transition-colors text-xs"
                  >
                    Directions
                  </a>
                </div>
              </div>
            </div>
          </article>

          {/* ─── Other Branches (stacked on the right) ─── */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {otherBranches.map((branch) => (
              <article
                key={branch.id}
                className="bg-white rounded-[8px] md:rounded-[8px] p-6 md:p-7 shadow-sm border border-gray-100 flex flex-col flex-1"
              >
                {/* Name + Status */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <h3 className="text-lg md:text-xl font-black text-[#002b5c]">
                    {branch.name}
                  </h3>
                  <StatusBadge
                    status={branch.status}
                    text={branch.statusText}
                  />
                </div>

                {/* Address */}
                <div className="flex items-start gap-2 text-gray-500 text-sm mb-4">
                  <svg className="w-4 h-4 text-[#4a90e2] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  <span>{branch.address}</span>
                </div>

                {/* Hours rows */}
                <div className="space-y-2 mb-5 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-[#727784] font-medium">Weekdays</span>
                    <span className="font-bold text-[#002b5c]">
                      {branch.weekdayHours
                        ? branch.weekdayHours.replace(/Mon–\w+:\s*/, "")
                        : branch.hours.replace(/Mon–\w+:\s*/, "")}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[191C1D] font-medium">Saturdays</span>
                    <span className="font-bold text-[#002b5c]">
                      {branch.hours.includes("Sat")
                        ? branch.hours.replace(/Mon–\w+:\s*/, "")
                        : "Closed"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 font-medium">Sundays</span>
                    <span className="font-bold text-red-500">Closed</span>
                  </div>
                </div>

                {/* Special note */}
                {branch.specialNote && (
                  <div className="bg-[#e7f9ee] border border-[#28a745]/20 rounded-xl p-3 mb-4">
                    <p className="text-sm font-medium text-[#28a745]">
                      {branch.specialNote}
                    </p>
                  </div>
                )}

                {/* Buttons */}
                <div className="flex gap-3 mt-auto pt-4 border-t border-gray-100">
                  <a
                    href={`tel:${branch.phone.replace(/\D/g, "")}`}
                    className="flex-1 bg-[#F3F4F5] inline-flex items-center justify-center  hover:border-[#002b5c] text-[#003F87] font-bold px-4 py-2 rounded-lg transition-colors text-sm"
                  >
                    Call Branch
                  </a>
                  <a
                    href={branch.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center bg-[#0056B3] hover:bg-[#003d7a] text-white font-bold px-4 py-2 rounded-lg transition-colors text-sm"
                  >
                    View Info
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
