import Image from "next/image";

export default function ServicesCTA() {
  return (
    <section className="relative px-6 md:px-12 lg:px-20">
      <div className="relative overflow-hidden rounded-2xl">
        <div className="absolute inset-0">
          <Image
            src="/CTA.png"
            alt=""
            fill
            className="object-cover"
            priority={false}
          />
          <div className="absolute inset-0 bg-[#002b5c]/80" aria-hidden="true" />
        </div>

        <div className="relative z-10 py-16 md:py-20 lg:py-24 px-6 md:px-12 lg:px-[10px]">
        <div className="max-w-7xl mx-auto lg:max-w-none lg:mx-0 lg:px-[20px]">
          <div className="max-w-2xl space-y-5 md:space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
              Can&apos;t find what you&apos;re looking for?
            </h2>
            <p className="text-blue-100/90 text-base md:text-lg leading-relaxed">
              Our catalog includes over 2,000 specific clinical assays.
Contact our specialist desk for custom test requirements or
bulk corporate inquiries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="#"
                className="inline-flex items-center justify-center bg-white text-[#002b5c] font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors text-center"
              >
                Speak to an Expert
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors text-center"
              >
                Download Catalog
              </a>
            </div>
          </div>
        </div>
        </div>
        </div>
    </section>
  );
}
