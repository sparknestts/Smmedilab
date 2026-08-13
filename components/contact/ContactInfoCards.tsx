import { contactInfo, operatingHours } from "@/data/contact";

export default function ContactInfoCards() {
  return (
    <div className="space-y-6">
      {/* Email Inquiry Card */}
      <article className="bg-white rounded-3xl p-8 shadow-xs border border-slate-100 space-y-4">
        <div className="bg-[#f0f4ff] w-12 h-12 rounded-2xl flex items-center justify-center">
          <svg
            className="w-6 h-6 text-[#003F87]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>
        <div>
          <h3 className="text-xl font-bold text-[#002b5c]">
            Email Inquiry
          </h3>
          <p className="text-gray-500 text-sm font-medium leading-relaxed mt-1">
            Send us your medical requirements or lab orders electronically.
          </p>
        </div>
        <a
          href={contactInfo.emailHref}
          className="inline-block text-[#003F87] font-bold text-sm hover:text-[#002b5c] transition-colors break-all"
        >
          {contactInfo.email} &rarr;
        </a>
      </article>

      {/* Operating Hours Card */}
      <article className="bg-white rounded-3xl p-8 shadow-xs border border-slate-100 space-y-4">
        <div className="bg-emerald-50 w-12 h-12 rounded-2xl flex items-center justify-center">
          <svg
            className="w-6 h-6 text-emerald-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-[#002b5c]">
          Operating Hours
        </h3>
        <ul className="space-y-3 pt-2">
          {operatingHours.map((item) => (
            <li
              key={item.days}
              className="flex items-center justify-between gap-2 text-sm border-b border-slate-50 pb-2 last:border-none last:pb-0"
            >
              <span className="text-gray-500 font-medium">{item.days}</span>
              <span
                className={`font-bold ${item.highlight ? "text-emerald-600" : "text-gray-800"
                  }`}
              >
                {item.hours}
              </span>
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
}
