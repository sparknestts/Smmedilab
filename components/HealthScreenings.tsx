import Image from "next/image";

const screenings = [
    {
        title: "Blood Test",
        description: "Comprehensive hematology and biochemistry profiles for foundational health tracking.",
        category: "FOUNDATIONAL",
        bulletPoints: ["Full Blood Count", "Liver & Kidney Panels", "Glucose & Cholesterol", "Thyroid Profile"],
        icon: (
            <div>
                <Image
                    src="/blood_test.svg"
                    alt="Blood Test"
                    width={32}
                    height={32}
                    className="w-10 h-10"
                />
            </div>
        )
    },
    {
        title: "DNA Analysis",
        description: "Advanced genetic mapping for ancestry, wellness traits, and health predispositions.",
        category: "GENOMIC",
        bulletPoints: ["Ancestry Mapping", "Wellness Traits", "Carrier Status", "Genetic Predispositions"],
        icon: (
            <div>
                <Image
                    src="/dna.svg"
                    alt="DNA Analysis"
                    width={32}
                    height={32}
                    className="w-10 h-10"
                />
            </div>
        )
    },
    {
        title: "Allergy Screening",
        description: "Precise IgE screenings for hundreds of food and environmental allergen triggers.",
        category: "IMMUNOLOGY",
        bulletPoints: ["Food Allergens", "Environmental Triggers", "IgE Antibody Screen", "Post-Test Guidance"],
        icon: (
            <div>
                <Image
                    src="/alergy.svg"
                    alt="Allergy Screening"
                    width={32}
                    height={32}
                    className="w-10 h-10"
                />
            </div>
        )
    },
    {
        title: "Corporate Wellness",
        description: "Customized health screening profiles and occupational medicine programs for enterprises.",
        category: "OCCUPATIONAL",
        bulletPoints: ["Executive Screens", "Pre-Employment", "Custom Panel Options", "Group Plan Bookings"],
        icon: (
            <div>
                <Image
                    src="/rounded_plus.svg"
                    alt="Corporate Wellness"
                    width={32}
                    height={32}
                    className="w-10 h-10 text-[#002b5c]"
                />
            </div>
        )
    }
];

export default function HealthScreenings() {
    return (
        <section className="bg-[#f8fafc] py-24 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#002b5c] tracking-tight">
                        Our Services
                    </h2>
                    <p className="text-gray-600 text-base md:text-lg leading-relaxed font-medium">
                        Comprehensive IT solutions and diagnostic packages designed to accelerate your health insights and drive clinical excellence.
                    </p>
                </div>

                {/* Grid Layout (2x2 matching Sarvify style) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {screenings.map((test, index) => (
                        <div
                            key={index}
                            className="relative bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500 group flex flex-col justify-between overflow-hidden"
                        >
                            {/* Accent Circle Shape in Corner */}
                            {/* <div className="absolute -top-12 -right-12 w-28 h-28 bg-[#002b5c]/5 rounded-full group-hover:scale-125 transition-transform duration-500"></div> */}

                            <div className="space-y-6 z-10">
                                <div className="flex items-center justify-between">
                                    <div className="inline-block">
                                        {test.icon}
                                    </div>
                                    <span className="text-[10px] md:text-xs font-bold text-[#003F87] bg-slate-100 px-3 py-1 rounded-full uppercase tracking-wider">
                                        {test.category}
                                    </span>
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-xl md:text-2xl font-bold text-[#002b5c] group-hover:text-[#003F87] transition-colors">
                                        {test.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 font-medium leading-relaxed">
                                        {test.description}
                                    </p>
                                </div>

                                {/* Bullet point details from Sarvify card style */}
                                <ul className="grid grid-cols-2 gap-3 pt-2 text-xs md:text-sm font-semibold text-gray-600">
                                    {test.bulletPoints.map((point, idx) => (
                                        <li key={idx} className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#003F87]"></span>
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex items-center justify-between pt-8 mt-6 border-t border-slate-50 z-10">
                                <a
                                    href="/services"
                                    className="flex items-center gap-1.5 text-sm md:text-base font-bold text-[#002b5c] hover:text-[#003F87] group-hover:translate-x-1 transition-all"
                                >
                                    Learn More
                                    <span className="text-xs group-hover:translate-x-1.5 transition-transform">&rarr;</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
