import Image from "next/image";

export default function ServicesCTA() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-6xl mx-auto rounded-3xl bg-[#002b5c] text-white py-16 px-8 md:px-16 relative overflow-hidden shadow-2xl">
        {/* Background ambient lighting */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-[#003F87]/20 rounded-full blur-3xl"></div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="space-y-4 max-w-2xl text-center lg:text-left">
            <span className="text-[#93C5FD] font-bold text-xs uppercase tracking-widest">
              Custom Diagnostics Assays
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              Can&apos;t find what you&apos;re looking for?
            </h2>
            <p className="text-blue-100/80 text-base md:text-lg leading-relaxed">
              Our lab catalog includes over 2,000 specific clinical assays. Contact our specialist desk for custom test requirements or corporate group inquiries.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-4 w-full lg:w-auto shrink-0">
            <a
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-[#002b5c] font-bold px-8 py-4 rounded-xl hover:bg-slate-100 transition-all shadow-md text-center"
            >
              Speak to an Expert
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center border-2 border-white/40 text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition-all text-center"
            >
              Request Custom Assays
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
