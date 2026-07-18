"use client";

import { useState } from "react";
import {
  branches,
  matchesCitySearch,
  matchesServiceFilter,
  serviceFilters,
  type ServiceFilter,
} from "@/data/branches";

const ALL_BRANCHES_HTML = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
  <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
  <style>
    html, body, #map { height: 100%; margin: 0; padding: 0; background: #e8ecf0; }
    .leaflet-popup-content-wrapper {
      background: #002b5c !important;
      color: #ffffff !important;
      border-radius: 12px !important;
      font-family: system-ui, -apple-system, sans-serif !important;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15) !important;
    }
    .leaflet-popup-tip {
      background: #002b5c !important;
    }
    .leaflet-popup-content {
      margin: 10px 14px !important;
      font-size: 13px !important;
      line-height: 1.4 !important;
    }
    .leaflet-popup-content b {
      font-size: 14px !important;
    }
    .custom-pin svg {
      filter: drop-shadow(0px 3px 4px rgba(0,0,0,0.3));
    }
    .leaflet-control-attribution {
      font-size: 10px !important;
    }
  </style>
</head>
<body>
  <div id="map"></div>
  <script>
    var map = L.map('map', { zoomControl: false });
    L.control.zoom({ position: 'bottomright' }).addTo(map);

    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      maxZoom: 19,
      attribution: '&copy; CartoDB &copy; OpenStreetMap'
    }).addTo(map);

    var pinSvg = \`
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#ea4335"/>
        <circle cx="12" cy="9" r="3.5" fill="#ffffff"/>
      </svg>
    \`;

    var customIcon = L.divIcon({
      html: pinSvg,
      className: 'custom-pin',
      iconSize: [34, 34],
      iconAnchor: [17, 34],
      popupAnchor: [0, -32]
    });

    var marker1 = L.marker([9.7076931, 80.0190207], {icon: customIcon}).addTo(map)
      .bindPopup("<b>SM MediLabs &ndash; Jaffna</b><br/>Main Headquarters");

    var marker2 = L.marker([8.601004, 81.214157], {icon: customIcon}).addTo(map)
      .bindPopup("<b>SM MediLabs &ndash; Trincomalee</b><br/>Branch Office");

    var group = new L.featureGroup([marker1, marker2]);
    map.fitBounds(group.getBounds().pad(0.35));
    
    setTimeout(function() {
      marker1.openPopup();
    }, 500);
  </script>
</body>
</html>
`;

export default function InteractiveMap() {
  const [cityQuery, setCityQuery] = useState("");
  const [serviceFilter, setServiceFilter] = useState<ServiceFilter>("all");
  const [showAllBranches, setShowAllBranches] = useState(false);

  const HQ_EMBED_URL =
    "https://maps.google.com/maps?q=SM+MediLabs+Jaffna+Town&z=17&output=embed";

  const filteredCount = branches.filter(
    (b) =>
      matchesCitySearch(b, cityQuery) &&
      matchesServiceFilter(b.services, serviceFilter)
  ).length;

  return (
    <section className="py-12 md:py-16 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <h2 className="text-2xl md:text-3xl font-black text-[#002b5c]">
            Interactive Map
          </h2>
          <div className="flex items-center gap-5 text-sm font-medium text-gray-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#28a745]" />
              Open Now
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
              Closed
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          <div className="lg:col-span-2 relative rounded-[28px] overflow-hidden bg-[#e8ecf0] h-[320px] sm:h-[400px] md:h-[460px]">
            {showAllBranches ? (
              /* All Branches View: Leaflet map showing EXACTLY our 2 locations (no unrelated clinics) */
              <iframe
                title="SM MediLabs Branches Map"
                srcDoc={ALL_BRANCHES_HTML}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                className="absolute inset-0 w-full h-full"
              />
            ) : (
              /* Single HQ View: Google Maps view of Jaffna Town headquarters */
              <iframe
                title="SM MediLabs – Jaffna Town Location"
                src={HQ_EMBED_URL}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
              />
            )}

            {/* Main Headquarters callout — only in HQ view */}
            {!showAllBranches && (
              <div
                className="absolute pointer-events-none"
                style={{ top: "35%", left: "50%", transform: "translateX(-50%) translateY(-100%)" }}
              >
                <div className="flex flex-col items-center">
                  <div className="flex items-center gap-1.5 bg-white text-[#002b5c] text-[11px] font-bold px-3 py-1.5 rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.25)] border border-gray-200 whitespace-nowrap">
                    <svg className="w-3.5 h-3.5 text-[#0061C1] shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    Main Headquarters
                  </div>
                  <div
                    style={{
                      width: 0,
                      height: 0,
                      borderLeft: "6px solid transparent",
                      borderRight: "6px solid transparent",
                      borderTop: "7px solid white",
                      filter: "drop-shadow(0 2px 2px rgba(0,0,0,0.15))",
                    }}
                  />
                </div>
              </div>
            )}

            {/* Open in Maps link */}
            <a
              href="https://maps.app.goo.gl/1L43egCcgGwABbp49"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-4 right-4 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm text-[#0061C1] text-xs font-bold px-3 py-2 rounded-xl shadow-lg border border-white/60 hover:bg-white transition-colors"
            >
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              Open in Maps
            </a>

            {/* Toggle: HQ view ↔ All Branches view */}
            <button
              type="button"
              onClick={() => setShowAllBranches((v) => !v)}
              className="absolute bottom-4 right-4 flex items-center gap-1.5 bg-[#002b5c] text-white text-xs font-bold px-3 py-2 rounded-xl shadow-lg hover:bg-[#003d7a] transition-colors"
            >
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={showAllBranches
                    ? "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    : "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"}
                />
              </svg>
              {showAllBranches ? "Zoom in to HQ" : "View All Branches"}
            </button>
          </div>

          <aside className="bg-white rounded-[28px] border border-gray-100 shadow-sm p-6 md:p-8 flex flex-col">
            <h3 className="text-xl md:text-2xl font-black text-[#002b5c] mb-6">
              Quick Find
            </h3>

            <div className="space-y-2 mb-6">
              <label
                htmlFor="citySearch"
                className="text-xs font-bold text-gray-400 uppercase tracking-wider"
              >
                City / Region
              </label>
              <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden focus-within:border-[#4a90e2] focus-within:ring-2 focus-within:ring-[#4a90e2]/20 transition-all">
                <svg
                  className="w-5 h-5 text-gray-400 ml-4 shrink-0"
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
                  id="citySearch"
                  type="search"
                  value={cityQuery}
                  onChange={(e) => setCityQuery(e.target.value)}
                  placeholder="Enter your city..."
                  className="w-full px-3 py-3.5 text-sm text-gray-700 placeholder:text-gray-400 outline-none bg-transparent"
                />
              </div>
            </div>

            <div className="mb-6">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                Service Filter
              </p>
              <div className="flex flex-wrap gap-2">
                {serviceFilters.map((filter) => (
                  <button
                    key={filter.id}
                    type="button"
                    onClick={() => setServiceFilter(filter.id)}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${serviceFilter === filter.id
                      ? "bg-[#002b5c] text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="button"
              className="mt-auto w-full bg-[#0056B3] hover:bg-[#003d7a] text-white font-bold py-4 rounded-xl transition-colors"
            >
              Locate Nearest Branch
              {filteredCount > 0 && (
                <span className="ml-1 opacity-80">({filteredCount} found)</span>
              )}
            </button>
          </aside>
        </div>
      </div>
    </section>
  );
}
