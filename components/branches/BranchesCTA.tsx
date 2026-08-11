export default function BranchesCTA() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-6xl mx-auto rounded-3xl bg-[#002b5c] text-white py-16 px-8 md:px-16 text-center space-y-8 relative overflow-hidden shadow-2xl">
        {/* Background Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-2xl mx-auto space-y-4">
          <span className="text-[#93C5FD] font-bold text-xs uppercase tracking-widest">
            Home Specimen Collection
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Can&apos;t make it to a branch?
          </h2>
          <p className="text-blue-100/80 text-base md:text-lg leading-relaxed">
            We offer home collection services for diagnostic tests. Our certified phlebotomists come to you with the same clinical precision expected in our labs.
          </p>
        </div>

        <div className="relative z-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="/contact"
            className="bg-white hover:bg-slate-100 text-[#002b5c] font-bold px-8 py-4 rounded-xl transition-all shadow-md w-full sm:w-auto"
          >
            Book Home Collection
          </a>
          <a
            href="/services"
            className="border-2 border-white/40 hover:bg-white/10 text-white font-bold px-8 py-4 rounded-xl transition-all w-full sm:w-auto text-center"
          >
            Explore Services
          </a>
        </div>
      </div>
    </section>
  );
}
