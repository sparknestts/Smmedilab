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
    <section className="py-16 md:py-20 px-6 md:px-12 lg:px-24 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto space-y-10">
        <h2 className="text-2xl md:text-4xl font-bold text-[#002b5c] tracking-tight">
          Our Strategic Locations
        </h2>

        {/* Desktop Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* ─── Headquarters Card ─── */}
          <article className="lg:col-span-7 bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 p-6 md:p-8 flex flex-col justify-between hover:shadow-xl transition-all duration-300">
            <div className="space-y-6">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Main Headquarters</span>
                </div>
                <StatusBadge
                  status={headquarters.status}
                  text={headquarters.statusText}
                />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-[#002b5c]">
                  {headquarters.name}
                </h3>
                <div className="flex items-start gap-2 text-gray-500 text-sm font-medium">
                  <svg className="w-4 h-4 text-[#003F87] shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  <span>{headquarters.address}</span>
                </div>
              </div>

              {/* Hours Grid */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
                  <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">Mon – Fri</p>
                  <p className="text-xs md:text-sm font-bold text-gray-800">
                    {headquarters.weekdayHours
                      ? headquarters.weekdayHours.replace("Mon–Fri: ", "")
                      : "06:00 AM – 09:00 PM"}
                  </p>
                </div>
                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
                  <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">Sat – Sun</p>
                  <p className="text-xs md:text-sm font-bold text-gray-800">
                    {headquarters.weekendHours
                      ? headquarters.weekendHours.replace("Sat–Sun: ", "")
                      : "07:00 AM – 05:00 PM"}
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-8 mt-6 border-t border-slate-50">
              <a
                href="/contact"
                className="flex-1 text-center bg-[#003F87] hover:bg-[#002b5c] text-white font-bold px-6 py-3.5 rounded-xl transition-all shadow-sm text-sm"
              >
                Book Appointment Here
              </a>
              <a
                href={headquarters.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center border-2 border-slate-200 text-gray-700 hover:border-[#002b5c] hover:text-[#002b5c] font-bold px-6 py-3.5 rounded-xl transition-all text-sm"
              >
                Get Directions &rarr;
              </a>
            </div>
          </article>

          {/* ─── Other Branches ─── */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {otherBranches.map((branch) => (
              <article
                key={branch.id}
                className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-xl font-bold text-[#002b5c]">
                      {branch.name}
                    </h3>
                    <StatusBadge
                      status={branch.status}
                      text={branch.statusText}
                    />
                  </div>

                  <div className="flex items-start gap-2 text-gray-500 text-sm font-medium">
                    <svg className="w-4 h-4 text-[#003F87] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    <span>{branch.address}</span>
                  </div>
                </div>

                <div className="flex gap-3 pt-6 mt-4 border-t border-slate-50">
                  <a
                    href={`tel:${branch.phone.replace(/\D/g, "")}`}
                    className="flex-1 text-center bg-slate-100 hover:bg-slate-200 text-[#002b5c] font-bold px-4 py-3 rounded-xl transition-all text-xs md:text-sm"
                  >
                    Call Branch
                  </a>
                  <a
                    href={branch.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-[#003F87] hover:bg-[#002b5c] text-white font-bold px-4 py-3 rounded-xl transition-all text-xs md:text-sm"
                  >
                    Directions &rarr;
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
