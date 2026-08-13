export default function ScienceOfCertainty() {
    return (
        <section className="bg-white py-24 px-6 md:px-12 lg:px-24">
            <div className="max-w-4xl mx-auto text-center space-y-8 animate-in fade-in duration-1000">
                <h2 className="text-3xl md:text-5xl font-bold text-[#002b5c] tracking-tight leading-tight">
                    The Science of Certainty
                </h2>

                <p className="text-[#003F87] font-bold tracking-widest text-[#003F87] text-[11px] md:text-sm uppercase tracking-[0.2em] relative inline-block py-1">
                    Accredited. Accurate. Accelerated.
                    <span className="absolute bottom-0 left-1/4 right-1/4 h-[2px] bg-[#003F87] rounded-full"></span>
                </p>

                <p className="text-gray-600 text-base md:text-xl leading-relaxed max-w-3xl mx-auto">
                    In today's medical landscape, certain diagnostics require uncompromising quality, precision technology, and expert interpretation. At SM Medi Lab, we ensure ultimate precision with advanced instruments and an auditing process that supports timely, confident actions.
                </p>

                {/* Animated scrolling mouse/scroll indicator (like Sarvify) */}
                <div className="flex justify-center pt-8">
                    <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center p-1.5 opacity-60">
                        <div className="w-1.5 h-1.5 bg-[#003F87] rounded-full animate-bounce"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
