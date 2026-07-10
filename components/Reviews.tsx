import Image from "next/image";

const reviews = [
    {
        name: "Elena Rodriguez",
        test: "Annual Health Check",
        text: '"The home collection service was incredibly professional. The phlebotomist arrived exactly on time and the report was in my inbox by the next morning. Simply exceptional."',
    },
    {
        name: "Dr. James Wilson",
        test: "Genetic Screening",
        text: '"I\'ve used many labs, but SM Medical stands out for their clarity. The way the reports are presented makes it so easy to understand what\'s actually going on with my health."',
    },
    {
        name: "Marcus Chen",
        test: "Allergy Panel",
        text: '"Navigating my allergies was a nightmare until I did their comprehensive panel. Accurate, fast, and the follow-up consultation was eye-opening. Highly recommend."',
    }
];

export default function Reviews() {
    return (
        <section className="bg-[#f8fafc] py-20 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto space-y-16">

                {/* Header */}
                <div className="text-center space-y-4 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-black text-[#002b5c] tracking-tight">
                        The Voice of Our Patients
                    </h2>
                    <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                        Real experiences from our community, highlighting our commitment to scientific accuracy and human empathy.
                    </p>
                </div>

                {/* Reviews Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <div key={index} className="flex flex-col h-full">
                            <div className="bg-white p-8 md:p-10 rounded-[32px] shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500 flex flex-col justify-between h-full group">

                                {/* Review Text */}
                                <div className="space-y-6">
                                    {/* Google Stars & Logo */}
                                    <div className="flex items-center justify-between">
                                        <div className="flex gap-1">
                                            {[1, 2, 3, 4, 5].map((s) => (
                                                <svg key={s} className="w-5 h-5 text-[#FBBC05] fill-current" viewBox="0 0 24 24">
                                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                            ))}
                                        </div>
                                        {/* Google Logo Placeholder (Text for now for speed/reliability) */}
                                        <div className="flex items-center gap-1 opacity-40 group-hover:opacity-100 transition-opacity">
                                            <span className="font-bold text-lg tracking-tighter">
                                                <span className="text-[#4285F4]">G</span>
                                                <span className="text-[#EA4335]">o</span>
                                                <span className="text-[#FBBC05]">o</span>
                                                <span className="text-[#4285F4]">g</span>
                                                <span className="text-[#34A853]">l</span>
                                                <span className="text-[#EA4335]">e</span>
                                            </span>
                                        </div>
                                    </div>

                                    <p className="text-gray-600 text-lg font-medium italic leading-relaxed">
                                        {review.text}
                                    </p>
                                </div>

                                {/* Patient Info */}
                                <div className="flex items-center gap-4 pt-8 mt-4 border-t border-gray-50">
                                    <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center text-[#002b5c] font-black text-xl">
                                        {review.name.charAt(0)}
                                    </div>
                                    <div>
                                        <div className="font-black text-gray-900 leading-tight">{review.name}</div>
                                        <div className="text-gray-400 text-sm font-bold uppercase tracking-widest mt-0.5">{review.test}</div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

                {/* Google Trust Banner */}
                <div className="flex items-center justify-center gap-2 pt-8">
                    <div className="flex items-center gap-1.5 bg-white px-6 py-3 rounded-full shadow-sm border border-gray-100">
                        <span className="text-gray-500 font-medium">Excellent</span>
                        <div className="flex gap-0.5">
                            {[1, 2, 3, 4, 5].map((s) => (
                                <div key={s} className="w-4 h-4 bg-[#34A853] flex items-center justify-center rounded-sm">
                                    <svg className="w-2.5 h-2.5 text-white fill-current" viewBox="0 0 24 24">
                                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                    </svg>
                                </div>
                            ))}
                        </div>
                        <span className="text-gray-400 mx-1">|</span>
                        <span className="font-bold text-gray-900 tracking-tight">
                            <span className="text-[#4285F4]">G</span>
                            <span className="text-[#EA4335]">o</span>
                            <span className="text-[#FBBC05]">o</span>
                            <span className="text-[#4285F4]">g</span>
                            <span className="text-[#34A853]">l</span>
                            <span className="text-[#EA4335]">e</span>
                            <span className="text-gray-400 text-sm ml-1 font-normal italic">Reviews</span>
                        </span>
                    </div>
                </div>

            </div>
        </section>
    );
}
