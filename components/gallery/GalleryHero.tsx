import { galleryStats } from "@/data/gallery";

export default function GalleryHero() {
  return (
    <section className="pt-10 md:pt-14 lg:pt-16 pb-10 md:pb-12 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-16">
          <div className="flex-1 max-w-2xl">
            <p className="text-[#4a90e2] font-bold text-xs md:text-sm tracking-[0.2em] uppercase mb-4">
              Visual Precision
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black text-[#002b5c] leading-tight tracking-tight mb-5">
              Inside the Precision Hub.
            </h1>
            <p className="text-gray-500 text-base md:text-lg leading-relaxed">
              Explore the environment where science meets patient care. Our
              laboratory is equipped with world-class diagnostic technology and
              managed by experts dedicated to clinical excellence.
            </p>
          </div>

          <div className="flex items-center gap-0 shrink-0 lg:pt-4">
            {galleryStats.map((stat, index) => (
              <div key={stat.label} className="flex items-center">
                {index > 0 && (
                  <div className="w-px h-12 md:h-14 bg-gray-200 mx-6 md:mx-8" />
                )}
                <div className="text-center lg:text-left">
                  <p className="text-2xl md:text-3xl font-light text-[#002b5c] tracking-wide">
                    {stat.value}
                  </p>
                  <p className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-[0.15em] mt-1">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
