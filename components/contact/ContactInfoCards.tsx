import { contactInfo, operatingHours } from "@/data/contact";

export default function ContactInfoCards() {
  return (
    <div className="space-y-5 md:space-y-6">
      <article className="bg-[#FFFFFF]/40 rounded-[14px] p-6 md:p-8">
        <div className="bg-[#f0f4ff] w-12 h-12 rounded-xl flex items-center justify-center mb-5">
          <svg
            className="w-6 h-6 text-[#4a90e2]"
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
        <h3 className="text-lg md:text-xl font-bold text-[#191C1D] mb-2">
          Email Inquiry
        </h3>
        <p className="text-[#424752] text-xd md:text-base mb-4 leading-relaxed">
          Send us your medical requirements or lab
orders electronically.
        </p>
        <a
          href={contactInfo.emailHref}
          className="text-[#003F87] font-bold hover:text-[#002b5c] transition-colors break-all"
        >
          {contactInfo.email}
        </a>
      </article>

      <article className="bg-[#F3F4F5] border border-gray-100 rounded-[14px] p-6 md:p-8">
        <div className="bg-[#e7f9ee] w-12 h-12 rounded-xl flex items-center justify-center mb-5">
          <svg
            className="w-6 h-6 text-[#28a745]"
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
        <h3 className="text-lg md:text-xl font-black text-[#191C1D] mb-4">
          Operating Hours
        </h3>
        <ul className="space-y-3">
          {operatingHours.map((item) => (
            <li
              key={item.days}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 text-sm md:text-base"
            >
              <span className="text-[#424752] font-medium text-xs md:text-sm">{item.days}</span>
              <span
                className={`font-bold ${
                  item.highlight ? "text-[#006E25] text-xs md:text-sm" : "text-[#191C1D] text-xs md:text-sm"
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
