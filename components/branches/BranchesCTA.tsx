import Image from "next/image";

export default function BranchesCTA() {
  return (
    <section className="py-12 md:py-16 lg:py-20 px-6 md:px-12 lg:px-24 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16">
          <div className="text-center space-y-5 md:space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-[#003F87] leading-tight">
              Can&apos;t make it to a branch?
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
              We offer home collection services for most diagnostic tests. Our
              certified phlebotomists come to you — at home, office, or hotel —
              with the same clinical precision you expect in our labs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <a
                href="/contact"
                className="inline-flex items-center justify-center bg-[#003F87] hover:bg-[#003d7a] text-white font-medium px-8 py-3 rounded-lg transition-colors"
              >
                Book Home Collection
              </a>
              <a
                href="/services"
                className="inline-flex items-center justify-center border-1 border-[#003F87] text-[#003F87] font-medium px-8 py-3 rounded-lg hover:bg-[#002b5c] hover:text-white transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
