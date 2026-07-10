import Image from "next/image";

export default function HomeCollection() {
    return (
        <section className="bg-[#002b5c] py-20 px-6 md:px-12 lg:px-24 overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">

                {/* Left Side Content */}
                <div className="flex-1 space-y-8 text-white animate-in fade-in slide-in-from-left duration-1000">
                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight">
                            Professional Lab Services, <br />
                            <span className="text-blue-200">Delivered to Your Living Room</span>
                        </h2>
                        <p className="text-blue-50/80 text-lg md:text-xl leading-relaxed max-w-xl">
                            Skip the commute and the waiting room. Our certified phlebotomists come to you with clinical precision and editorial grace.
                        </p>
                    </div>

                    <ul className="space-y-5">
                        {[
                            "Painless, hygienic collection techniques",
                            "Cold-chain logistics for sample integrity",
                            "Real-time tracking of your medical expert"
                        ].map((feature, index) => (
                            <li key={index} className="flex items-center gap-4 text-white font-semibold text-lg">
                                <div className="bg-blue-400/20 p-1 rounded-full border border-blue-300/30">
                                    <svg className="w-6 h-6 text-[#25D366]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                {feature}
                            </li>
                        ))}
                    </ul>

                    <div className="pt-6">
                        <button className="bg-white text-[#002b5c] px-10 py-5 rounded-2xl font-black text-xl hover:bg-blue-50 transition-all shadow-xl hover:-translate-y-1 active:scale-95">
                            Schedule Home Collection
                        </button>
                    </div>
                </div>

                {/* Right Side Image */}
                <div className="flex-1 relative animate-in fade-in slide-in-from-right duration-1000">
                    <div className="relative rounded-[40px] overflow-hidden shadow-2xl border-8 border-white/10 group">
                        <Image
                            src="/img1.png"
                            alt="Professional Lab Collection at Home"
                            width={800}
                            height={800}
                            className="w-full h-auto object-cover transform transition-transform duration-1000 group-hover:scale-105"
                            priority
                        />
                        {/* Subtle Overlay Effect */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#002b5c]/40 to-transparent opacity-60"></div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-300/10 rounded-full blur-3xl animate-pulse delay-700"></div>
                </div>

            </div>
        </section>
    );
}
