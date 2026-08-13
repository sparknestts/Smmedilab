import Script from "next/script";

export default function GoogleReviews() {
  return (
    <section className="bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-20 text-center space-y-4">
        <h2 className="text-3xl md:text-5xl font-bold text-[#002b5c] tracking-tight">
          What Our Patients Say
        </h2>
        <p className="text-gray-600 text-lg md:text-lg leading-relaxed">
          See what our patients are saying about us on Google
        </p>
      </div>

      <div className="mx-auto max-w-25xl px-6" >
        <div
          className="elfsight-app-7c905eb9-7f19-4e9a-9361-93fc72094232"
          data-elfsight-app-lazy=""
        ></div>
      </div>

      <Script
        src="https://elfsightcdn.com/platform.js"
        strategy="afterInteractive"
      />
    </section>
  );
}
