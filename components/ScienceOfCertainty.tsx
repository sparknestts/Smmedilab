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
                        <div className="relative rounded-[20px] overflow-hidden shadow-2xl group">
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
                        <div className="absolute top-10 right-0 md:top-20 md:right-[-40px] bg-[#003F87] text-white p-6
                         rounded-xl shadow-2xl z-20 max-w-[280px] animate-in fade-in slide-in-from-right duration-1000 border border-white/10">
                            <div className="text-4xl md:text-4xl font-bold mb-2 tracking-tight">99.9%</div>
                            <p className="text-blue-100 text-sm font-Regular leading-relaxed">
                                Diagnostic Accuracy rate based on annual internal clinical audits.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Side - Content */}
                <div className="flex-1 space-y-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#003F87] tracking-tight leading-tight">
                        The Science of Certainty
                    </h2>

                    <div className="space-y-10">
                        {/* Feature 1 */}
                        <div className="flex items-start gap-6 group">
                            <div >
              <Image
                src="/home_2.svg"
                alt="ISO Accredited"
                width={32}
                height={32}
                className="w-5 h-5 md:w-22 md:h-22"
              />
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
                            <div >
              <Image
                src="/home_3.svg"
                alt="ISO Accredited"
                width={32}
                height={32}
                className="w-5 h-5 md:w-22 md:h-22"
              />
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
                            <div >
              <Image
                src="/home_4.svg"
                alt="ISO Accredited"
                width={32}
                height={32}
                className="w-5 h-5 md:w-20 md:h-20"
              />
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
