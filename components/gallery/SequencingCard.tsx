import { sequencingCard } from "@/data/gallery";

export default function SequencingCard() {
  return (
    <div className="relative rounded-[16px] md:rounded-[20px] overflow-hidden bg-[#002b5c] p-6 md:p-8 flex flex-col justify-between min-h-[200px] h-full">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute bottom-0 right-0 w-3/4 h-3/4 bg-gradient-to-tl from-[#4a90e2]/40 to-transparent rounded-full blur-2xl" />
      </div>

      <div className="relative z-10">
        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-5">
          <svg
            className="w-7 h-7 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>
        <h3 className="text-white font-black text-base md:text-lg leading-snug mb-5">
          {sequencingCard.title}
        </h3>
      </div>

      <div className="relative z-10 flex flex-wrap gap-2">
        {sequencingCard.badges.map((badge) => (
          <span
            key={badge}
            className="bg-white/15 text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/20"
          >
            {badge}
          </span>
        ))}
      </div>
    </div>
  );
}
