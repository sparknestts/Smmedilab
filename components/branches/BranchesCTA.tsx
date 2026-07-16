import Image from "next/image";

export default function BranchesCTA() {
  return (
    <section className="py-12 md:py-16 lg:py-20 px-6 md:px-12 lg:px-24 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="flex-1 text-center lg:text-left space-y-5 md:space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#002b5c] leading-tight">
              Can&apos;t make it to a branch?
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              We offer home collection services for most diagnostic tests. Our
              certified phlebotomists come to you — at home, office, or hotel —
              with the same clinical precision you expect in our labs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <a
                href="/contact"
                className="inline-flex items-center justify-center bg-[#002b5c] hover:bg-[#003d7a] text-white font-bold px-8 py-4 rounded-xl transition-colors"
              >
                Book Home Collection
              </a>
              <a
                href="/services"
                className="inline-flex items-center justify-center border-2 border-[#002b5c] text-[#002b5c] font-bold px-8 py-4 rounded-xl hover:bg-[#002b5c] hover:text-white transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="flex-1 w-full">
            <div className="relative aspect-[4/3] max-w-lg mx-auto lg:max-w-none rounded-[28px] md:rounded-[32px] overflow-hidden shadow-lg">
              <Image
                src="/branches_2.svg"
                alt="SM Medi Lab home collection service"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
