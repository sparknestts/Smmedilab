import Image from "next/image";

export default function BranchesHero() {
  return (
    <section className="bg-[#0061C1] text-white py-12 md:py-16 lg:py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="flex-1 space-y-5 md:space-y-6">
            <span className="inline-block bg-white/20 text-white text-xs font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full">
              Our Presence
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
              Clinical Precision,
              <br />
              Local Care.
            </h1>
            <p className="text-blue-100 text-base md:text-lg leading-relaxed max-w-xl">
              Find an SM Medical Lab branch near you. Our network ensures expert
              diagnostic services are always within reach.
            </p>
          </div>

          <div className="flex-1 w-full">
            <div className="relative aspect-square max-w-md mx-auto lg:max-w-none lg:ml-auto">
              <Image
                src="/branches_1.svg"
                alt="SM Medi Lab global network"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
