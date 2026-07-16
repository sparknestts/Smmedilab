export default function BlogHero() {
  return (
    <div className="mb-8 md:mb-10 lg:mb-12">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black leading-tight tracking-tight mb-4">
        <span className="text-[#002b5c]">Insights</span>
        <span className="text-gray-400 font-normal mx-2 sm:mx-3">&</span>
        <span className="text-[#002b5c]">Accuracy</span>
      </h1>
      <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-2xl">
        Detailed medical perspectives, lab updates, and the latest in clinical
        excellence from SM Medical Lab.
      </p>
    </div>
  );
}
