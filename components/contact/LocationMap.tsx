import { location } from "@/data/contact";

export default function LocationMap() {
  return (
    <section className="py-12 md:py-16 lg:py-20 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8 md:mb-10">
          <div className="flex items-start gap-3">
            
            <div>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-[#191C1D]">
                {location.title}
              </h2>
              <div className="flex items-start gap-2 mt-1">
                <span
                  className="w-4 h-4 mt-0.5 shrink-0 bg-[#424752] [mask-image:url('/Container.svg')] [mask-repeat:no-repeat] [mask-position:center] [mask-size:contain]"
                  aria-hidden="true"
                />
                <p className="text-[#424752] text-sm md:text-base">
                  {location.address}
                </p>
              </div>
            </div>
          </div>
          <a
            href={location.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex bg-[#E1E3E4] items-center justify-center gap-2  text-[#191C1D] font-bold px-6 py-3 rounded-lg hover:bg-[#002b5c] hover:text-white transition-colors shrink-0"
          >
            <span
              className="w-5 h-5 bg-current [mask-image:url('/Icon.svg')] [mask-repeat:no-repeat] [mask-position:center] [mask-size:contain]"
              aria-hidden="true"
            />
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
