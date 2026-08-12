"use client";

import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StatCounter from "@/components/StatCounter";
import { useState } from "react";
import ContactNumberChooser, { ChooserMode } from "@/components/ContactNumberChooser";
import { contactInfo } from "@/data/contact";

export default function AboutPage() {
    const [chooserMode, setChooserMode] = useState<ChooserMode | null>(null);

    const coreValues = [
        {
            title: "Innovation First",
            description: "We embrace cutting-edge diagnostics, advanced automation, and innovative approaches to solve complex medical testing challenges.",
            icon: (
                <svg className="w-8 h-8 text-[#003F87]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" strokeWidth="2" />
                    <circle cx="12" cy="12" r="6" strokeWidth="2" />
                    <circle cx="12" cy="12" r="2" strokeWidth="2" />
                </svg>
            )
        },
        {
            title: "Patient-Centric",
            description: "Our patients' health and ease is our success. We build lasting trust through exceptional service, home collections, and custom guidance.",
            icon: (
                <svg className="w-8 h-8 text-[#003F87]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            )
        },
        {
            title: "Quality Excellence",
            description: "We maintain the gold standard of ISO precision in every analysis, ensuring reliable and robust medical reports that lead to timely decisions.",
            icon: (
                <svg className="w-8 h-8 text-[#003F87]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
            )
        },
        {
            title: "Ownership",
            description: "We take full responsibility for each sample as if it's our own family's test, which directly influences deliverable precision and quality standards.",
            icon: (
                <svg className="w-8 h-8 text-[#003F87]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            )
        }
    ];

    const achievements = [
        {
            title: "Industry Recognition",
            description: "Accredited by ISO 15189 international guidelines for diagnostics and professional medical standards.",
            icon: "/home_2.svg"
        },
        {
            title: "Expert Team",
            description: "Highly qualified pathologists and biochemists overseeing laboratory precision and diagnostics.",
            icon: "/home_3.svg"
        },
        {
            title: "Ownership & Ethics",
            description: "Rigorous standards for quality validation and sample logistics to prevent report inconsistencies.",
            icon: "/home_4.svg"
        },
        {
            title: "Client Success",
            description: "A solid history of over 2.5 million tests completed and trust earned from clinical communities.",
            icon: "/g_badge.svg"
        }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-white font-sans overflow-x-hidden w-full">
            <Header />

            <main className="flex-grow">
                {/* 1. About Hero Section (Full-width & height with background image and center text - Sarvify Style) */}
                <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/about_hero_1.jpg"
                            alt="Facility Laboratory"
                            fill
                            className="object-cover"
                            priority
                        />
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#001a3a]/80 via-[#001a3a]/70 to-[#002b5c]/0"></div>
                    </div>
                    <div className="relative z-10 max-w-4xl mx-auto text-center px-6 md:px-12 pt-32 pb-20 md:pt-40 md:pb-28 space-y-4">
                        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight">
                            About SM Medi Lab
                        </h1>
                        <p className="text-blue-100/80 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                            Empowering diagnostic services and clinical answers through professional laboratory technologies and medical expertise.
                        </p>
                    </div>

                    {/* Mouse Scroll Indicator */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
                        <div className="w-6 h-10 rounded-full border-2 border-white/60 flex justify-center p-1">
                            <div className="w-1.5 h-3 bg-white rounded-full animate-bounce"></div>
                        </div>
                    </div>
                </section>

                {/* 2. Who We Are (2-column layout - Left text/CTA + Right image - Sarvify Style) */}
                <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
                    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                        {/* Left Side Content */}
                        <div className="flex-1 space-y-6">
                            <div className="space-y-2">
                                <span className="text-[#003F87] font-bold text-xs uppercase tracking-widest">Since 2013</span>
                                <h2 className="text-3xl md:text-5xl font-bold text-[#002b5c] tracking-tight">
                                    Who We Are
                                </h2>
                            </div>
                            <p className="text-gray-600 text-sm md:text-base font-semibold leading-relaxed">
                                SM Medical Lab was founded in 2013 with a vision to bridge the gap between scientific accuracy and patient wellness. Over the past decade, we have grown into a trusted diagnostics partner.
                            </p>
                            <p className="text-gray-500 text-sm md:text-base font-medium leading-relaxed">
                                We combine state-of-the-art pathology instruments with highly experienced clinicians to deliver diagnostics delivered with clinical grace and surgical accuracy. From simple blood counts to advanced genetic indices, we ensure every test result supports confident clinical decisions.
                            </p>
                            <div className="pt-4">
                                <button
                                    onClick={() => setChooserMode("whatsapp")}
                                    className="bg-[#003F87] hover:bg-[#002b5c] text-white px-8 py-3.5 rounded-xl font-bold text-base transition-all shadow-md active:scale-95 flex items-center gap-2"
                                >
                                    Get in Touch
                                    <span>&rarr;</span>
                                </button>
                            </div>
                        </div>

                        {/* Right Side Image with Overlay Banner */}
                        <div className="flex-1 w-full relative">
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                                <Image
                                    src="/img4.png"
                                    alt="Expert Medical Lab Technologist"
                                    width={600}
                                    height={500}
                                    className="w-full h-auto object-cover transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                                <div className="absolute bottom-6 left-6 right-6">
                                    <h4 className="text-white text-lg font-bold">SM Medi Lab</h4>
                                    <p className="text-blue-100/90 text-sm font-semibold">Transforming Diagnostics Through Precision</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

        

                {/* 4. Core Values (4 horizontal cards layout - Sarvify Style) */}
                <section className="py-24 px-6 md:px-12 lg:px-24 bg-slate-50">
                    <div className="max-w-7xl mx-auto space-y-16">
                        {/* Heading */}
                        <div className="text-center space-y-4 max-w-3xl mx-auto">
                            <h2 className="text-3xl md:text-5xl font-bold text-[#002b5c] tracking-tight">
                                Our Core Values
                            </h2>
                            <p className="text-gray-500 text-sm md:text-base font-semibold">
                                The diagnostic principles that guide everything we do and shape our patient relationships.
                            </p>
                        </div>

                        {/* Values Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 select-none">
                            {coreValues.map((val, index) => (
                                <div
                                    key={index}
                                    className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col gap-6"
                                >
                                    <div className="flex items-center gap-4 sm:flex-col sm:items-start sm:gap-6">
                                        <div className="bg-[#f0f4ff] p-3 rounded-2xl w-fit">
                                            {val.icon}
                                        </div>
                                        <h3 className="font-bold text-gray-900 text-lg">{val.title}</h3>
                                    </div>
                                    <p className="text-gray-500 text-sm font-medium leading-relaxed">
                                        {val.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 5. Legacy & Achievements (2-col layout Left lists + Right staggered achievements grid - Sarvify style) */}
                <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
                    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
                        {/* Left Info Column */}
                        <div className="flex-1 space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-3xl md:text-5xl font-bold text-[#002b5c] tracking-tight leading-tight">
                                    Our Achievements
                                </h2>
                                <p className="text-gray-500 text-sm md:text-base font-semibold leading-relaxed">
                                    We are proud of our certifications, partnerships, and achievements. They reflect our continuous commitment to medical lab excellence.
                                </p>
                            </div>

                            <ul className="space-y-4 font-semibold text-gray-700">
                                <li className="flex items-start gap-4">
                                    <span className="w-2 h-2 rounded-full bg-[#003F87] mt-2.5"></span>
                                    <span>NABL Guidelines & CLIA compliant standards of testing</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="w-2 h-2 rounded-full bg-[#003F87] mt-2.5"></span>
                                    <span>Gold standard ISO 15189 credential accreditation</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="w-2 h-2 rounded-full bg-[#003F87] mt-2.5"></span>
                                    <span>Fully automated diagnostics running Roche & Siemens machinery</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="w-2 h-2 rounded-full bg-[#003F87] mt-2.5"></span>
                                    <span>Recognized by major clinical associations and hospitals</span>
                                </li>
                            </ul>
                        </div>

                        {/* Right staggered achievements grid */}
                        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 select-none relative">
                            {achievements.map((ach, idx) => {
                                const isStaggered = idx % 2 === 1;

                                return (
                                    <div
                                        key={idx}
                                        className={`p-8 rounded-3xl transition-all duration-500 flex flex-col gap-4 border border-gray-200 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 ${isStaggered ? "lg:translate-y-6" : ""}`}
                                    >
                                        <div className="flex items-center gap-4 sm:flex-col sm:items-start sm:gap-4">
                                            <div className="p-3 rounded-2xl w-fit bg-gray-100">
                                                <Image
                                                    src={ach.icon}
                                                    alt={ach.title}
                                                    width={30}
                                                    height={30}
                                                    className="w-6 h-6"
                                                />
                                            </div>
                                            <h3 className="font-bold text-lg md:text-lg text-gray-900">{ach.title}</h3>
                                        </div>
                                        <p className="text-xs md:text-sm leading-relaxed text-gray-600">
                                            {ach.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* 6. Ready to Work Together CTA Banner (Redesigned matching Sarvify CTA block before footer) */}
                <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
                    <div className="max-w-6xl mx-auto rounded-3xl bg-[#002b5c] text-center text-white py-16 px-8 relative overflow-hidden shadow-2xl">
                        {/* Abstract backdrop aesthetic */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
                        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#003F87]/20 rounded-full blur-3xl"></div>

                        <div className="relative z-10 space-y-8">
                            <div className="space-y-3">
                                <span className="text-blue-200/90 font-bold uppercase tracking-widest text-[#93C5FD]">Precision Diagnostics</span>
                                <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Ready to Check Your Health?</h2>
                                <p className="text-blue-100/70 text-sm md:text-lg max-w-xl mx-auto leading-relaxed">
                                    Let's schedule your pathology tests at home. Speak to our customer support or explore packages.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                                <button
                                    onClick={() => setChooserMode("whatsapp")}
                                    className="bg-white hover:bg-slate-100 text-[#002b5c] px-8 py-3.5 rounded-xl font-bold text-base transition-all shadow-md active:scale-95 w-full sm:w-auto"
                                >
                                    Book Home Collection
                                </button>
                                <a
                                    href="/services"
                                    className="border-2 border-white/30 hover:bg-white/10 text-white px-8 py-3.5 rounded-xl font-bold text-base transition-all w-full sm:w-auto text-center"
                                >
                                    Explore Services
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />

            <ContactNumberChooser
                open={chooserMode !== null}
                onClose={() => setChooserMode(null)}
                mode={chooserMode ?? "whatsapp"}
                numbers={contactInfo.contactNumbers}
            />
        </div>
    );
}
