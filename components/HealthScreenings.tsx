import Image from "next/image";

const screenings = [
    {
        title: "Blood Test",
        description: "Comprehensive hematology and biochemistry profiles for foundational health tracking.",
        price: "",
        icon: (
            <div >
              <Image
                src="/blood_test.svg"
                alt="ISO Accredited"
                width={32}
                height={32}
                className="w-10 h-10 md:w-12 md:h-12"
              />
            </div>
        ),
        color: "bg-[#f0f4ff]"
    },
    {
        title: "DNA",
        description: "Advanced genetic mapping for ancestry, wellness traits, and predispositions.",
        price: "",
        icon: (
            <div >
              <Image
                src="/dna.svg"
                alt="ISO Accredited"
                width={32}
                height={32}
                className="w-10 h-10 md:w-12 md:h-12"
              />
            </div>
        ),
        color: "bg-[#e7f9ee]"
    },
    {
        title: "Allergy",
        description: "Precise IgE screenings for hundreds of food and environmental triggers.",
        price: "",
        icon: (
            <div >
              <Image
                src="/alergy.svg"
                alt="ISO Accredited"
                width={32}
                height={32}
                className="w-10 h-10 md:w-12 md:h-12"
              />
            </div>
        ),
        color: "bg-[#f0f4ff]"
    }
];

export default function HealthScreenings() {
    return (
        <section className="bg-[#f8fafc] py-20 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div className="max-w-2xl space-y-4">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#002b5c] tracking-tight">
                            Popular Health Screenings
                        </h2>
                        <p className="text-gray-600 text-lg md:text-lg leading-relaxed">
                            Curated testing panels designed for comprehensive health insights, ranging from basic wellness to specialized genetic mapping.
                        </p>
                    </div>
                    <a href="#" className="flex items-center gap-2 text-[#002b5c] font-bold hover:underline group">
                        Browse all tests
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {screenings.map((test, index) => (
                        <div key={index} className="bg-white p-8 rounded-[10px] shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500 group flex flex-col justify-between min-h-[320px]">
                            <div className="space-y-6">
                                <div className="inline-block">
                                    {test.icon}
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-2xl font-bold text-[#002b5c]">{test.title}</h3>
                                    <p className="text-sm text-gray-500 font-medium leading-relaxed">
                                        {test.description}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center justify-between pt-8 border-t border-gray-50">
                                <span className="text-[#002b5c] font-black text-xs">{test.price}</span>
                                <button >
              <Image
                src="/rounded_plus.svg"
                alt="ISO Accredited"
                width={12}
                height={12}
                className="w-5 h-5 md:w-7 md:h-7"
              />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
