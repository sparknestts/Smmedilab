import Image from "next/image";

export default function ScienceOfCertainty() {
    return (
        <section className="bg-white py-20 px-6 md:px-12 lg:px-24 overflow-visible">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                {/* Left Side - Image and Accuracy Card */}
                <div className="flex-1 relative">
                    {/* Inner relative container WITHOUT overflow-hidden to allow card to extend */}
                    <div className="relative">
                        {/* Image Wrapper WITH overflow-hidden and rounded corners */}
                        <div className="relative rounded-[40px] overflow-hidden shadow-2xl group">
                            <Image
                                src="/img2.png"
                                alt="Lab Scientist at Work"
                                width={800}
                                height={600}
                                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                                priority
                            />
                        </div>

                        {/* Accuracy Card - Outside overflow-hidden container */}
                        <div className="absolute top-10 right-0 md:top-20 md:right-[-40px] bg-[#002b5c] text-white p-8 rounded-3xl shadow-2xl z-20 max-w-[280px] animate-in fade-in slide-in-from-right duration-1000 border border-white/10">
                            <div className="text-4xl md:text-5xl font-black mb-2 tracking-tight">99.9%</div>
                            <p className="text-blue-100 text-sm font-medium leading-relaxed">
                                Diagnostic Accuracy rate based on annual internal clinical audits.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Side - Content */}
                <div className="flex-1 space-y-12">
                    <h2 className="text-3xl md:text-5xl font-black text-[#002b5c] tracking-tight leading-tight">
                        The Science of Certainty
                    </h2>

                    <div className="space-y-10">
                        {/* Feature 1 */}
                        <div className="flex items-start gap-6 group">
                            <div className="bg-[#e7f9ee] p-4 rounded-2xl flex-shrink-0 group-hover:scale-110 transition-transform">
                                <svg className="w-8 h-8 text-[#28a745]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                                </svg>
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-xl font-bold text-gray-900">Accredited Lab</h3>
                                <p className="text-gray-500 font-medium leading-relaxed">
                                    Our facilities meet the highest international standards of clinical excellence and safety protocols.
                                </p>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="flex items-start gap-6 group">
                            <div className="bg-[#f0f4ff] p-4 rounded-2xl flex-shrink-0 group-hover:scale-110 transition-transform">
                                <svg className="w-8 h-8 text-[#4a90e2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-xl font-bold text-gray-900">Fast Results</h3>
                                <p className="text-gray-500 font-medium leading-relaxed">
                                    Digital reports delivered within 12-24 hours for most standard tests, ensuring peace of mind sooner.
                                </p>
                            </div>
                        </div>

                        {/* Feature 3 */}
                        <div className="flex items-start gap-6 group">
                            <div className="bg-[#f0f9ff] p-4 rounded-2xl flex-shrink-0 group-hover:scale-110 transition-transform">
                                <svg className="w-8 h-8 text-[#00a8e8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-xl font-bold text-gray-900">Clinical Guidance</h3>
                                <p className="text-gray-500 font-medium leading-relaxed">
                                    Free post-report consultation with our lab experts to help you understand your data points.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
