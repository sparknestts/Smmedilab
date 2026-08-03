import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StatCounter from "@/components/StatCounter";

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white font-sans">
            <Header />

            <main className="flex-grow">
                {/* Hero Section */}
                <section className="py-20 px-6 md:px-12 lg:px-24">
                    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">

                        {/* Left Side Content */}
                        <div className="flex-3 space-y-8 animate-in fade-in slide-in-from-left duration-1000">
                            <div className="space-y-4">
                                <div className="text-[#4a90e2] font-bold text-sm tracking-[0.2em] uppercase">
                                    Since 1998
                                </div>
                                <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-gray-900 leading-tight tracking-tight">
                                    The Science of <br />
                                    <span className="text-[#002b5c]">Clinical Grace.</span>
                                </h1>
                                <p className="text-gray-600 text-lg md:text-lg leading-relaxed max-w-xl">
                                    SM Medical Lab was founded on a singular principle: that diagnostic excellence should be delivered with surgical precision and human empathy. For over two decades, we've curated the path to wellness through rigorous data.
                                </p>
                            </div>

                            <div className="flex items-center gap-4 pt-4">
                                <div className="w-12 h-[2px] bg-gray-200"></div>
                                <span className="text-gray-400 font-medium italic tracking-wide">
                                    Redefining Diagnostic Standards
                                </span>
                            </div>
                        </div>

                        {/* Right Side Image */}
                        <div className="flex-2 relative animate-in fade-in slide-in-from-right duration-1000">
                            {/* Outer relative container WITHOUT overflow-hidden */}
                            <div className="relative">
                                {/* Inner Image Container WITH overflow-hidden and rounded corners */}
                                <div className="relative rounded-[10px] overflow-hidden shadow-2xl group">
                                    <Image
                                        src="/img4.png"
                                        alt="Lab Expertise"
                                        width={100}
                                        height={1000}
                                        className="w-150 h-150 object-cover transform transition-transform duration-1000 group-hover:scale-105"
                                        priority
                                    />
                                    {/* Subtle Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                                </div>

                                {/* Floating Card - Outside overflow-hidden container */}
                                <div
                                    id="heritage-card"
                                    className="absolute bottom-8 left-8 right-8 md:bottom-0 md:left-[-40px] md:right-auto md:w-[360px] md:mt-100 
                                    bg-white p-10 rounded-[8px] shadow-2xl animate-bounce-slow z-20 border border-gray-50"
                                >
                                    <p className="text-[#003F87] text-xl md:text-xl font-bold">
                                        "Accuracy isn't an option, it's our heritage."
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                {/* Mission & Vision Section */}
                <section className="py-24 bg-slate-50 px-6 md:px-12 lg:px-24">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

                        {/* Our Mission Card */}
                        <div className="bg-white p-10 md:p-14 rounded-[10px] shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 group">
                            <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                                <svg className="w-8 h-8 text-[#002b5c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <circle cx="12" cy="12" r="10" strokeWidth="2" />
                                    <circle cx="12" cy="12" r="6" strokeWidth="2" />
                                    <circle cx="12" cy="12" r="2" strokeWidth="2" />
                                </svg>
                            </div>
                            <h2 className="text-3xl md:text-3xl font-bold text-[#002b5c] mb-6">Our Mission</h2>
                            <p className="text-gray-500 text-lg md:text-lg leading-relaxed font-medium">
                                To empower patients and healthcare providers by delivering timely, accurate, and actionable diagnostic insights that drive informed medical decisions and improve health outcomes globally.
                            </p>
                        </div>

                        {/* Our Vision Card */}
                        <div className="bg-[#002b5c] p-10 md:p-14 rounded-[10px] shadow-2xl hover:shadow-blue-900/20 transition-all duration-500 group border border-[#003d7e]">
                            <div className="bg-blue-900/30 w-16 h-16 rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </div>
                            <h2 className="text-3xl md:text-3xl font-bold text-white mb-6">Our Vision</h2>
                            <p className="text-blue-100/80 text-lg md:text-lg leading-relaxed font-medium">
                                To be the most trusted name in laboratory diagnostics, recognized for pioneering innovation, unmatched clinical precision, and a culture of empathy that treats every sample as a person.
                            </p>
                        </div>

                    </div>
                </section>

                {/* Legacy of Credibility Section */}
                <section className="py-24 bg-white px-6 md:px-12 lg:px-24">
                    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">

                        {/* Left Column: Timeline */}
                        <div className="lg:flex-1 space-y-12">
                            <h2 className="text-4xl md:text-4xl font-bold text-gray-900 tracking-tight">
                                A Legacy of Credibility
                            </h2>

                            <div className="space-y-22 relative before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[2px] before:bg-blue-100">
                                {/* 1998 */}
                                <div className="relative pl-12 group">
                                    <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-[#002b5c] border-4 border-white shadow-sm z-10 group-hover:scale-125 transition-transform"></div>
                                    <div className="space-y-2">
                                        <div className="text-[#003F87] font-bold text-sm tracking-widest">1998</div>
                                        <h3 className="text-xl font-bold text-gray-900">Foundation</h3>
                                        <p className="text-gray-500 text-sm leading-relaxed max-w-lg font-medium">
                                            Established as a specialized hematology lab with a team of three visionary pathologists in downtown. Building trust through one-on-one patient care.
                                        </p>
                                    </div>
                                </div>

                                {/* 2010 */}
                                <div className="relative pl-12 group">
                                    <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-[#002b5c] border-4 border-white shadow-sm z-10 group-hover:scale-125 transition-transform"></div>
                                    <div className="space-y-2">
                                        <div className="text-[#003F87] font-bold text-sm tracking-widest">2010</div>
                                        <h3 className="text-2xl font-bold text-gray-900">ISO Certification</h3>
                                        <p className="text-gray-500 text-sm leading-relaxed max-w-lg font-medium">
                                            Achieved gold-standard ISO 15189 accreditation, cementing our status as a laboratory of international repute and technical competence.
                                        </p>
                                    </div>
                                </div>

                                {/* 2023 */}
                                <div className="relative pl-12 group">
                                    <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-[#002b5c] border-4 border-white shadow-sm z-10 group-hover:scale-125 transition-transform"></div>
                                    <div className="space-y-2">
                                        <div className="text-[#003F87] font-bold text-sm tracking-widest">2023</div>
                                        <h3 className="text-xl font-bold text-gray-900">Digital Evolution</h3>
                                        <p className="text-gray-500 text-sm leading-relaxed max-w-lg font-medium">
                                            Launched the SM Digital Portal, integrating AI-driven trends into patient reports to provide a more holistic view of long-term health metrics.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Accreditations & Image */}
                        <div className="lg:flex-1 flex flex-col justify-between">
                            {/* Accreditation Box */}
                            <div className="bg-[#EDEEEF] p-8 md:p-7 rounded-[10px] space-y-8">
                                <div className="flex items-center gap-6">
                                    <div >
              <Image
                src="/g_badge.svg"
                alt="ISO Accredited"
                width={32}
                height={32}
                className="w-5 h-5 md:w-12 md:h-12"
              />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-medium text-gray-900 leading-tight">Accredited Excellence</h4>
                                        <p className="text-gray-400 text-sm font-medium">Certified by global medical boards</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        { label: "CAP Accredited", icon: "badge" },
                                        { label: "CLIA Certified", icon: "location" },
                                        { label: "ISO 15189", icon: "globe" },
                                        { label: "HIPAA Compliant", icon: "shield" }
                                    ].map((item, idx) => (
                                        <div key={idx} className="bg-white p-3 rounded-[6px] flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow">
                                            <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center">
                                                <Image
                                                    src={`/${item.icon}.svg`}
                                                    alt={item.label}
                                                    width={24}
                                                    height={24}
                                                    className="w-6 h-6"
                                                />
                                            </div>
                                            <span className="font-bold text-gray-800 text-sm whitespace-nowrap">{item.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Facility Image - Fixed height to match timeline bottom exactly */}
                            <div className="relative group rounded-[10px] overflow-hidden shadow-2xl h-[310px] mt-8">
                                <Image
                                    src="/img5.png"
                                    alt="Laboratory Facility"
                                    width={800}
                                    height={500}
                                    className="w-full h-full object-cover transform scale-150 transition-transform duration-1000 group-hover:scale-160"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                <div className="absolute bottom-6 left-8 right-8">
                                    <p className="text-white/90 text-xs md:text-sm font-semibold leading-relaxed">
                                        Equipped with the latest Roche and Siemens diagnostic platforms.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                {/* Stats Counter Section */}
                <section className="py-24 ">
                    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 items-center justify-items-center">

                            {/* Stat 1 */}
                            <div className="text-center space-y-3">
                                <div className="text-4xl lg:text-5xl font-medium text-[#003F87] tracking-tight">
                                    <StatCounter end={2.5} decimals={1} suffix="M+" />
                                </div>
                                <div className="text-[10px] md:text-sm font-bold text-gray-400 tracking-[0.2em] uppercase">Tests Performed</div>
                            </div>

                            {/* Stat 2 */}
                            <div className="text-center space-y-3">
                                <div className="text-4xl lg:text-5xl font-medium text-[#003F87] tracking-tight">
                                    <StatCounter end={99.9} decimals={1} suffix="%" />
                                </div>
                                <div className="text-[10px] md:text-sm font-bold text-gray-400 tracking-[0.2em] uppercase">Accuracy Rate</div>
                            </div>

                            {/* Stat 3 */}
                            <div className="text-center space-y-3">
                                <div className="text-4xl lg:text-5xl font-medium text-[#003F87] tracking-tight">
                                    <StatCounter end={150} suffix="+" />
                                </div>
                                <div className="text-[10px] md:text-sm font-bold text-gray-400 tracking-[0.2em] uppercase">Expert Clinicians</div>
                            </div>

                            {/* Stat 4 */}
                            <div className="text-center space-y-3">
                                <div className="text-4xl lg:text-5xl font-medium text-[#003F87] tracking-tight">
                                    <StatCounter end={12} />
                                </div>
                                <div className="text-[10px] md:text-sm font-bold text-gray-400 tracking-[0.2em] uppercase">Strategic Branches</div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Founder's Quote Section */}
                <section className="py-32 bg-white px-6 md:px-12 lg:px-24 overflow-hidden">
                    <div className="max-w-5xl mx-auto text-center space-y-16">

                        {/* Quote Text */}
                        <div className="relative">
                            {/* Decorative Quote Marks */}
                         
                            <h2 className="text-3xl md:text-5xl lg:text-5xl font-medium text-gray-900 leading-[1.1] tracking-tight relative z-10">
                                &ldquo;Behind every sample is a life waiting for answers. We don&apos;t just process data; we deliver <span className="text-[#002b5c]">peace of mind.</span>&rdquo;
                            </h2>
                        </div>

                        {/* Founder Profile */}
                        <div className="flex flex-col items-center gap-6 animate-in fade-in slide-in-from-bottom duration-1000 delay-300">
                            <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-[2rem] overflow-hidden shadow-xl ring-4 ring-white">
                                <Image
                                    src="/founder.png"
                                    alt="Dr. Sarah Mitchell"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div>
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900">Dr. Sarah Mitchell</h3>
                                <p className="text-gray-400 font-medium tracking-wide uppercase text-xs md:text-sm mt-1">Medical Director & Founder</p>
                            </div>
                        </div>

                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
