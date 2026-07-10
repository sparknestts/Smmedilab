import Image from "next/image";

const screenings = [
    {
        title: "Blood Test",
        description: "Comprehensive hematology and biochemistry profiles for foundational health tracking.",
        price: "From LKR49",
        icon: (
            <div className="bg-[#f0f4ff] p-3 rounded-lg">
                <svg className="w-6 h-6 text-[#4a90e2]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM10 2a1 1 0 011 1v1h1a1 1 0 110 2h-1v1h1a1 1 0 110 2h-1v1h1a1 1 0 110 2h-1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1H9a1 1 0 110-2h1v-1H9a1 1 0 110-2h1V9H9a1 1 0 110-2h1V6H9a1 1 0 110-2h1V3a1 1 0 011-1z" />
                </svg>
            </div>
        ),
        color: "bg-[#f0f4ff]"
    },
    {
        title: "DNA",
        description: "Advanced genetic mapping for ancestry, wellness traits, and predispositions.",
        price: "From LKR 199",
        icon: (
            <div className="bg-[#e7f9ee] p-3 rounded-lg">
                <svg className="w-6 h-6 text-[#28a745]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.6,18.3c-0.1,0.2-0.2,0.4-0.3,0.6c-0.1,0.2-0.3,0.3-0.5,0.4c-0.2,0.1-0.4,0.1-0.7,0.1c-0.3,0-0.5-0.1-0.7-0.1 c-0.2-0.1-0.4-0.2-0.5-0.4c-0.2-0.2-0.3-0.4-0.4-0.6c-0.1-0.2-0.1-0.4-0.1-0.7c0-0.3,0.1-0.5,0.1-0.7c0.1-0.2,0.2-0.4,0.4-0.6 c0.2-0.2,0.4-0.3,0.6-0.3c0.1,0,0.1,0,0.2,0c0,0,0.1,0,0.1,0c0.1,0,0.2-0.1,0.2-0.1c0.1,0,0.2,0.1,0.3,0.1c0.1,0.1,0.1,0.2,0.1,0.3 c0,0.1-0.1,0.2-0.1,0.3c0,0-0.1,0.1-0.2,0.1c0,0-0.1,0-0.1,0c-0.2,0-0.4,0.1-0.5,0.2C16.8,16.8,16.7,16.9,16.6,17 c-0.1,0.1-0.1,0.2-0.1,0.4c0,0.2,0.1,0.3,0.1,0.5c0.1,0.1,0.2,0.3,0.3,0.4c0.1,0.1,0.2,0.2,0.4,0.2c0.1,0,0.2,0.1,0.4,0.1 c0.2,0,0.3-0.1,0.4-0.1c0.1,0.1,0.2,0.2,0.2,0.3C18.6,18,18.6,18.2,18.6,18.3z M10.5,12.5c-0.1,0.1-0.1,0.2-0.1,0.2c0,0,0,0.1,0,0.1 c0,0.1,0,0.2,0,0.3c0,0.1,0.1,0.2,0.1,0.3c0.1,0.1,0.2,0.2,0.2,0.2c0.1,0.1,0.2,0.1,0.3,0.1c0.1,0,0.2,0,0.2-0.1c0,0,0.1-0.1,0.1-0.1 c0.1-0.1,0.1-0.2,0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.1-0.1-0.2-0.1-0.3c-0.1-0.1-0.2-0.2-0.2-0.2c-0.1-0.1-0.2-0.1-0.3-0.1 C10.7,12.4,10.6,12.4,10.5,12.5z M10.5,15.5c-0.1,0.1-0.1,0.2-0.1,0.2c0,0.1,0,0.2,0,0.2c0,0.1,0,0.2,0,0.3c0,0.1,0.1,0.2,0.1,0.3 c0.1,0.1,0.2,0.2,0.2,0.2c0.1,0.1,0.2,0.1,0.3,0.1c0.1,0,0.2,0,0.2-0.1c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0.1-0.2,0.1-0.2c0-0.1,0-0.2,0-0.3 c0-0.1-0.1-0.2-0.1-0.3c-0.1-0.1-0.2-0.2-0.2-0.2c-0.1-0.1-0.2-0.1-0.3-0.1C10.7,15.4,10.6,15.4,10.5,15.5z M10.5,9.5 c-0.1,0.1-0.1,0.2-0.1,0.2c0,0,0,0.1,0,0.1c0,0.1,0,0.2,0,0.3c0,0.1,0.1,0.2,0.1,0.3c0.1,0.1,0.2,0.2,0.2,0.2c0.1,0.1,0.2,0.1,0.3,0.1 c0.1,0,0.2,0,0.2-0.1c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0.1-0.2,0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.1-0.1-0.2-0.1-0.3c-0.1-0.1-0.2-0.2-0.2-0.2 c-0.1-0.1-0.2-0.1-0.3-0.1C10.7,9.4,10.6,9.4,10.5,9.5z M5.4,5.7c0.1,0.2,0.2,0.4,0.3,0.6c0.1,0.2,0.3,0.3,0.5,0.4 c0.2,0.1,0.4,0.1,0.7,0.1c0.3,0,0.5-0.1,0.7-0.1c0.2-0.1,0.4-0.2,0.5-0.4c0.2-0.2,0.3-0.4,0.4-0.6c0.1-0.2,0.1-0.4,0.1-0.7 c0-0.3-0.1-0.5-0.1-0.7c-0.1-0.2-0.2-0.4-0.4-0.6c-0.2-0.2-0.4-0.3-0.6-0.3c-0.1,0-0.1,0-0.2,0c0,0-0.1,0-0.1,0c-0.1,0-0.2,0.1-0.2,0.1 c-0.1,0-0.2-0.1-0.3-0.1C6.6,3.4,6.5,3.5,6.5,3.6c0,0.1,0.1,0.2,0.1,0.3c0,0,0.1,0.1,0.2,0.1c0,0,0.1,0,0.1,0c0.2,0,0.4,0.1,0.5,0.2 c0.2,0.2,0.2,0.3,0.3,0.4c0.1,0.1,0.1,0.2,0.1,0.4c0,0.2-0.1,0.3-0.1,0.5c-0.1,0.1-0.2,0.3-0.3,0.4c-0.1,0.1-0.2,0.2-0.4,0.2 c-0.1,0-0.2,0.1-0.4,0.1c-0.2,0-0.3-0.1-0.4-0.1c-0.1-0.1-0.2-0.2-0.2-0.3C5.4,6,5.4,5.8,5.4,5.7z M12,0.5c-6.3,0-11.5,5.2-11.5,11.5 s5.2,11.5,11.5,11.5s11.5-5.2,11.5-11.5S18.3,0.5,12,0.5z M12,21.5c-5.2,0-9.5-4.3-9.5-9.5S6.8,2.5,12,2.5s9.5,4.3,9.5,9.5 S17.2,21.5,12,21.5z" />
                </svg>
            </div>
        ),
        color: "bg-[#e7f9ee]"
    },
    {
        title: "Allergy",
        description: "Precise IgE screenings for hundreds of food and environmental triggers.",
        price: "From LKR 89",
        icon: (
            <div className="bg-[#f0f4ff] p-3 rounded-lg">
                <svg className="w-6 h-6 text-[#4a90e2]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19,10V7a1,1,0,0,0-1-1H16V3a1,1,0,0,0-1-1H9A1,1,0,0,0,8,3V6H6A1,1,0,0,0,5,7v3a2,2,0,0,0,2,2h1v7a3,3,0,0,0,3,3h2a3,3,0,0,0,3-3V12h1A2,2,0,0,0,19,10ZM10,4h4V6H10ZM15,19a1,1,0,0,1-1,1H10a1,1,0,0,1-1-1V12h6ZM17,10H7V8H17Z" />
                </svg>
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
                        <h2 className="text-3xl md:text-5xl font-black text-[#002b5c] tracking-tight">
                            Popular Health Screenings
                        </h2>
                        <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
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
                        <div key={index} className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500 group flex flex-col justify-between min-h-[320px]">
                            <div className="space-y-6">
                                <div className="inline-block">
                                    {test.icon}
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-2xl font-black text-[#002b5c]">{test.title}</h3>
                                    <p className="text-gray-500 font-medium leading-relaxed">
                                        {test.description}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center justify-between pt-8 border-t border-gray-50">
                                <span className="text-[#002b5c] font-black text-xl">{test.price}</span>
                                <button className="bg-white text-[#002b5c] border-2 border-[#002b5c] p-2 rounded-full hover:bg-[#002b5c] hover:text-white transition-all transform hover:rotate-90">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
