"use client";

import StatCounter from "@/components/StatCounter";

export default function HomeCollection() {
    return (
        <section className="bg-[#002b5c] text-white py-20 px-6 md:px-12 lg:px-24 select-none">
            <div className="max-w-7xl mx-auto space-y-12">
                {/* Header */}
                <div className="text-center space-y-3">
                    <h2 className="text-2xl md:text-4xl font-bold tracking-tight">Our Track Record</h2>
                    <p className="text-blue-100/70 text-sm md:text-base font-semibold">
                        Numbers that speak to our commitment to diagnostics excellence and accuracy.
                    </p>
                </div>

                {/* Counter Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 items-center justify-items-center pt-6">
                    {/* Stat 1 */}
                    <div className="text-center space-y-2">
                        <div className="text-4xl lg:text-5xl font-bold tracking-tight text-white">
                            <StatCounter end={2.5} decimals={1} suffix="M+" />
                        </div>
                        <div className="text-[10px] md:text-xs font-bold text-blue-200/80 tracking-[0.2em] uppercase">
                            Tests Performed
                        </div>
                    </div>

                    {/* Stat 2 */}
                    <div className="text-center space-y-2">
                        <div className="text-4xl lg:text-5xl font-bold tracking-tight text-white">
                            <StatCounter end={99.9} decimals={1} suffix="%" />
                        </div>
                        <div className="text-[10px] md:text-xs font-bold text-blue-200/80 tracking-[0.2em] uppercase">
                            Accuracy Rate
                        </div>
                    </div>

                    {/* Stat 3 */}
                    <div className="text-center space-y-2">
                        <div className="text-4xl lg:text-5xl font-bold tracking-tight text-white">
                            <StatCounter end={150} suffix="+" />
                        </div>
                        <div className="text-[10px] md:text-xs font-bold text-blue-200/80 tracking-[0.2em] uppercase">
                            Expert Clinicians
                        </div>
                    </div>

                    {/* Stat 4 */}
                    <div className="text-center space-y-2">
                        <div className="text-4xl lg:text-5xl font-bold tracking-tight text-white">
                            <StatCounter end={12} />
                        </div>
                        <div className="text-[10px] md:text-xs font-bold text-blue-200/80 tracking-[0.2em] uppercase">
                            Strategic Branches
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
