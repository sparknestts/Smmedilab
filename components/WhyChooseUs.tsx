"use client";

import Image from "next/image";
import { useState } from "react";
import ContactNumberChooser, { ChooserMode } from "@/components/ContactNumberChooser";
import { contactInfo } from "@/data/contact";

const checklist = [
    "ISO accredited facilities meeting highest global guidelines",
    "99.9% diagnostic accuracy rate verified by audits",
    "Fast digital results delivered within 12-24 hours",
    "Free post-report consultation with clinical lab experts",
    "Professional, painless home collection service",
    "Strict cold-chain logistics maintaining sample integrity"
];

const cards = [
    {
        title: "Accredited Lab",
        description: "Meeting global standards of clinical excellence and patient safety protocols.",
        icon: "/home_2.svg"
    },
    {
        title: "Fast Results",
        description: "Digital reports delivered directly to your inbox within 12 to 24 hours.",
        icon: "/home_3.svg"
    },
    {
        title: "Clinical Guidance",
        description: "Free consultations with lab technicians to explain report details.",
        icon: "/home_4.svg"
    },
    {
        title: "Home Collection",
        description: "Hygienic, painless sample collection at your convenience.",
        icon: "/g_badge.svg" // Using available local icons
    }
];

export default function WhyChooseUs() {
    const [chooserMode, setChooserMode] = useState<ChooserMode | null>(null);

    return (
        <>
            <section className="bg-white py-24 px-6 md:px-12 lg:px-24">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">

                    {/* Left Column - Checklist */}
                    <div className="flex-1 space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-3xl md:text-5xl font-bold text-[#002b5c] tracking-tight leading-tight">
                                Why Choose SM Medi Lab?
                            </h2>
                            <p className="text-gray-500 text-base md:text-lg font-medium leading-relaxed">
                                We combine technical expertise with compassionate care to deliver diagnostic solutions you can trust for your wellness journey.
                            </p>
                        </div>

                        <ul className="space-y-4">
                            {checklist.map((item, index) => (
                                <li key={index} className="flex items-start gap-4">
                                    <div className="bg-emerald-50 rounded-full p-1 mt-0.5 border border-emerald-100 flex-shrink-0">
                                        <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-700 font-semibold text-sm md:text-base leading-relaxed">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        <div className="pt-4">
                            <button
                                type="button"
                                onClick={() => setChooserMode("whatsapp")}
                                className="bg-[#003F87] hover:bg-[#002b5c] text-white px-8 py-4 rounded-xl font-bold text-base md:text-lg tracking-wide transition-all shadow-md active:scale-95 flex items-center gap-2"
                            >
                                Schedule Home Collection
                                <span>&rarr;</span>
                            </button>
                        </div>
                    </div>

                    {/* Right Column - Staggered Cards (Like Sarvify 2-column alternating grid) */}
                    <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-6 relative select-none">
                        {/* Background aesthetic shadow shape */}
                        <div className="absolute -inset-4 bg-slate-50/50 rounded-3xl -z-10 blur-xl"></div>

                        {cards.map((card, index) => {
                            // Stagger columns: even card indexes get scaled/offset styling options or normal grid spacing
                            const isEven = index % 2 === 1;
                            return (
                                <div
                                    key={index}
                                    className={`bg-[#f8fafc] p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:bg-white transition-all duration-500 flex flex-col gap-4 ${isEven ? "lg:translate-y-6" : ""
                                        }`}
                                >
                                    <div className="bg-white p-3 rounded-2xl w-fit shadow-xs border border-slate-50">
                                        <Image
                                            src={card.icon}
                                            alt={card.title}
                                            width={32}
                                            height={32}
                                            className="w-8 h-8"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="font-bold text-gray-900 text-lg">{card.title}</h3>
                                        <p className="text-gray-500 text-sm font-medium leading-relaxed">
                                            {card.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </section>

            <ContactNumberChooser
                open={chooserMode !== null}
                onClose={() => setChooserMode(null)}
                mode={chooserMode ?? "whatsapp"}
                numbers={contactInfo.contactNumbers}
            />
        </>
    );
}
