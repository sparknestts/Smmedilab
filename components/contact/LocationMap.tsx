import { location } from "@/data/contact";

export default function LocationMap() {
  return (
    <section className="py-12 md:py-16 lg:py-20 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8 md:mb-10">
          <div className="flex items-start gap-3">
            <svg
              className="w-6 h-6 text-[#4a90e2] shrink-0 mt-1"
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <div>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-[#002b5c]">
                {location.title}
              </h2>
              <p className="text-gray-500 text-sm md:text-base mt-1">
                {location.address}
              </p>
            </div>
          </div>
          <a
            href={location.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border-2 border-[#002b5c] text-[#002b5c] font-bold px-6 py-3 rounded-xl hover:bg-[#002b5c] hover:text-white transition-colors shrink-0"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
              />
            </svg>
            Get Directions
          </a>
        </div>

        <div className="relative rounded-[28px] md:rounded-[32px] overflow-hidden h-[300px] sm:h-[360px] md:h-[420px]">
          <div className="absolute inset-0 bg-[#0a2540]">
            <svg
              className="w-full h-full opacity-60"
              viewBox="0 0 800 400"
              preserveAspectRatio="xMidYMid slice"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="mapGrid"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 40 0 L 0 0 0 40"
                    fill="none"
                    stroke="#1a4a6e"
                    strokeWidth="1"
                  />
                </pattern>
              </defs>
              <rect width="800" height="400" fill="url(#mapGrid)" />
              <path
                d="M0 200 Q200 180 400 200 T800 200"
                fill="none"
                stroke="#2a6a8e"
                strokeWidth="8"
              />
              <path
                d="M100 0 L100 400 M300 0 L300 400 M500 0 L500 400 M700 0 L700 400"
                fill="none"
                stroke="#1a4a6e"
                strokeWidth="4"
              />
              <path
                d="M0 100 L800 100 M0 300 L800 300"
                fill="none"
                stroke="#1a4a6e"
                strokeWidth="4"
              />
              <circle cx="420" cy="195" r="12" fill="#4a90e2" opacity="0.8" />
              <circle cx="420" cy="195" r="24" fill="#4a90e2" opacity="0.3" />
            </svg>
          </div>

          <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-sm bg-white/90 backdrop-blur-sm rounded-2xl p-5 md:p-6 shadow-lg border border-white/50">
            <span className="inline-block bg-[#28a745] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
              Open Now
            </span>
            <h3 className="text-lg font-black text-[#002b5c] mb-2">
              {location.facilityName}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {location.facilityDescription}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
