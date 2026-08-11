import Image from "next/image";

export default function BranchesHero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img5.png"
          alt="Network Background"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#001730]/90 via-[#002b5c]/85 to-[#002b5c]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 pt-32 pb-20 md:pt-40 md:pb-28 text-center space-y-6">
        <span className="inline-block bg-white/10 backdrop-blur-xs text-[#93C5FD] text-xs md:text-sm font-bold uppercase tracking-[0.25em] px-4 py-2 rounded-full border border-white/10">
          Our Strategic Network
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
          Clinical Precision, Local Care.
        </h1>
        <p className="text-blue-100/80 text-base md:text-xl leading-relaxed max-w-2xl mx-auto">
          Find an SM Medical Lab branch near you. Our expanding network ensures world-class diagnostic services and home collections are always within reach.
        </p>
      </div>

      {/* Mouse Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <div className="w-6 h-10 rounded-full border-2 border-white/60 flex justify-center p-1">
          <div className="w-1.5 h-3 bg-white rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
