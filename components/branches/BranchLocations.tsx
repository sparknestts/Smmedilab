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
      className={`inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${getStatusStyles(status)}`}
    >
      {text}
    </span>
  );
}

export default function BranchLocations() {
  return (
    <section className="py-12 md:py-16 lg:py-20 px-6 md:px-12 lg:px-24 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#002b5c] mb-8 md:mb-12">
          Our Strategic Locations
        </h2>

        <article className="bg-white rounded-[28px] md:rounded-[32px] overflow-hidden shadow-sm border border-gray-100 mb-8 md:mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[360px] bg-[#0a2540]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0a2540] via-[#1a3a5c] to-[#0a2540]" />
              <div className="absolute inset-0 flex items-center justify-center opacity-30">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 400 300"
                  aria-hidden="true"
                >
                  <rect x="50" y="80" width="300" height="8" fill="#4a90e2" rx="2" />
                  <rect x="50" y="120" width="300" height="8" fill="#4a90e2" rx="2" opacity="0.6" />
                  <rect x="50" y="160" width="300" height="8" fill="#4a90e2" rx="2" opacity="0.4" />
                  <rect x="180" y="60" width="40" height="180" fill="#2a5a8e" rx="4" />
                </svg>
              </div>
            </div>

            <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center">
              <p className="text-[#28a745] font-bold text-sm mb-2">
                {headquarters.label}
              </p>
              <h3 className="text-2xl md:text-3xl font-black text-[#002b5c] mb-3">
                {headquarters.name}
              </h3>
              <div className="flex items-start gap-2 text-gray-500 text-sm md:text-base mb-4">
                <svg
                  className="w-5 h-5 text-[#4a90e2] shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                </svg>
                {headquarters.address}
              </div>
              <StatusBadge
                status={headquarters.status}
                text={headquarters.statusText}
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                <div className="bg-[#f8fafc] rounded-xl p-4">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                    Weekdays
                  </p>
                  <p className="text-sm font-bold text-[#002b5c]">
                    {headquarters.weekdayHours}
                  </p>
                </div>
                <div className="bg-[#f8fafc] rounded-xl p-4">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                    Weekend
                  </p>
                  <p className="text-sm font-bold text-[#002b5c]">
                    {headquarters.weekendHours}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center bg-[#002b5c] hover:bg-[#003d7a] text-white font-bold px-6 py-3.5 rounded-xl transition-colors"
                >
                  Book Here
                </a>
                <a
                  href={headquarters.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center border-2 border-[#002b5c] text-[#002b5c] font-bold px-6 py-3.5 rounded-xl hover:bg-[#002b5c] hover:text-white transition-colors"
                >
                  Directions
                </a>
              </div>
            </div>
          </div>
        </article>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {otherBranches.map((branch) => (
            <article
              key={branch.id}
              className="bg-white rounded-[24px] md:rounded-[28px] p-6 md:p-8 shadow-sm border border-gray-100 flex flex-col"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="text-lg md:text-xl font-black text-[#002b5c]">
                  {branch.name}
                </h3>
                <StatusBadge status={branch.status} text={branch.statusText} />
              </div>

              <div className="flex items-start gap-2 text-gray-500 text-sm mb-4">
                <svg
                  className="w-4 h-4 text-[#4a90e2] shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                </svg>
                {branch.address}
              </div>

              <p className="text-sm font-medium text-gray-600 mb-4">
                {branch.hours}
              </p>

              {branch.specialNote && (
                <div className="bg-[#e7f9ee] border border-[#28a745]/20 rounded-xl p-4 mb-4">
                  <p className="text-sm font-medium text-[#28a745]">
                    {branch.specialNote}
                  </p>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-3 mt-auto pt-4">
                <a
                  href={`tel:${branch.phone.replace(/\D/g, "")}`}
                  className="inline-flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-[#002b5c] font-bold px-5 py-3 rounded-xl transition-colors text-sm"
                >
                  Call Branch
                </a>
                <a
                  href={branch.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-[#002b5c] hover:bg-[#003d7a] text-white font-bold px-5 py-3 rounded-xl transition-colors text-sm"
                >
                  View Info
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
