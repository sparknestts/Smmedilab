export default function GalleryCTA() {
  return (
    <section className="py-12 md:py-16 lg:py-20 px-6 md:px-12 lg:px-24 bg-[#002b5c]">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-[28px] md:rounded-[32px] bg-[#002b5c] px-8 md:px-12 lg:px-16 py-10 md:py-14">
          <div
            className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none"
            aria-hidden="true"
          >
            <svg
              className="w-full h-full"
              viewBox="0 0 400 300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="300" cy="100" r="120" stroke="white" strokeWidth="1" />
              <circle cx="350" cy="200" r="80" stroke="white" strokeWidth="1" />
              <path
                d="M200 50 L350 150 L200 250"
                stroke="white"
                strokeWidth="0.5"
              />
            </svg>
          </div>

          <div className="relative z-10 max-w-2xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight mb-4">
              Experience our care in person.
            </h2>
            <p className="text-blue-100/80 text-base md:text-lg leading-relaxed mb-8">
              Visit any of our state-of-the-art facilities for seamless
              diagnostic testing with results you can trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/branches"
                className="inline-flex items-center justify-center bg-[#25D366] hover:bg-[#1ebd5e] text-white font-bold px-8 py-4 rounded-xl transition-colors"
              >
                Find a Branch
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center border-2 border-white/40 text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
