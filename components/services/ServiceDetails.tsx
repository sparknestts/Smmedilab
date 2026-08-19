import Image from "next/image";
import Link from "next/link";
import { AnyService } from "@/data/services";
import WhatsAppInquiry from "./WhatsAppInquiry";

export default function ServiceDetails({ service }: { service: AnyService }) {
  // Determine if it's the featured package
  const isFeatured = "features" in service;
  const detailsService = service as any;
  const hasDetails = detailsService.testDetails || detailsService.preparation || detailsService.turnaroundTime;

  return (
    <section className="py-12 md:py-20 px-6 md:px-12 lg:px-[60px] bg-[#f8fafc] min-h-[70vh] flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full">
        <Link 
          href="/services" 
          className="inline-flex items-center gap-2 text-sm font-bold text-[#003F87] hover:text-[#002b5c] transition-colors mb-8"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to all services
        </Link>

        <div className="bg-white rounded-[24px] md:rounded-[32px] shadow-sm border border-slate-100 p-10 md:p-16 min-h-[60vh] flex flex-col">
          
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-4">
            <div className="space-y-4 flex-1">
              <span className="inline-flex items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-wider text-[#003F87] bg-blue-50 px-4 py-1.5 rounded-full">
                <svg className="w-3.5 h-3.5 text-[#003F87]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2c-2 2-5 5.5-5 8a5 5 0 0010 0c0-2.5-3-6-5-8zm0 13a3 3 0 110-6 3 3 0 010 6z" clipRule="evenodd" />
                </svg>
                {service.category.replace("-", " ")}
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#002b5c] leading-tight">
                {service.title}
              </h1>
              <p className="text-[#64748b] text-base md:text-lg leading-relaxed max-w-2xl font-medium">
                {service.description}
              </p>
            </div>

            {/* If there's an image (like in routine services), show it */}
            {"image" in service && service.image && (
              <div className="shrink-0 bg-blue-50/50 p-6 rounded-2xl hidden md:block">
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  width={80} 
                  height={80} 
                  className="w-16 h-16 md:w-20 md:h-20"
                />
              </div>
            )}
          </div>

          {/* Featured Package Features */}
          {isFeatured && "features" in service && (
            <div className="bg-slate-50 rounded-2xl p-6 md:p-8 mt-6 mb-10 border border-slate-100">
              <h3 className="text-lg font-bold text-[#002b5c] mb-4">What's included:</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.features.map((feature: string, idx: number) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-700">
                    <svg className="w-5 h-5 text-emerald-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-medium text-sm md:text-base">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Details Section */}
          <div className="my-10 border-t border-b border-slate-200 py-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-10 divide-y md:divide-y-0 md:divide-x divide-slate-200">
              
              {/* Test Details */}
              <div className="flex gap-4 items-start md:pt-0 pt-6 first:pt-0">
                <div className="bg-[#f0f4ff] p-3 rounded-xl shrink-0 text-[#002b5c]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-[#002b5c] font-black text-sm mb-2">Test Details</h4>
                  <p className="text-sm text-[#64748b] font-medium leading-relaxed">
                    {detailsService.testDetails || "Detailed information about this specific test and its clinical significance will be provided here."}
                  </p>
                </div>
              </div>

              {/* Preparation */}
              <div className="flex gap-4 items-start md:pl-6 lg:pl-10 md:pt-0 pt-6">
                <div className="bg-[#f0f4ff] p-3 rounded-xl shrink-0 text-[#002b5c]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-[#002b5c] font-black text-sm mb-2">Preparation</h4>
                  <ul className="space-y-2">
                    {(detailsService.preparation && detailsService.preparation.length > 0 ? detailsService.preparation : [
                      "Fasting may be required",
                      "Consult your physician before testing",
                      "Bring previous medical records if any"
                    ]).map((prep: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-[#64748b] font-medium leading-relaxed">
                        <svg className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{prep}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Turnaround Time */}
              <div className="flex gap-4 items-start md:pl-6 lg:pl-10 md:pt-0 pt-6">
                <div className="bg-[#f0f4ff] p-3 rounded-xl shrink-0 text-[#002b5c]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-[#002b5c] font-black text-sm mb-2">Turnaround Time</h4>
                  <p className="flex items-start gap-2 text-sm text-[#64748b] font-medium leading-relaxed">
                    <svg className="w-4 h-4 text-[#94a3b8] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{detailsService.turnaroundTime || "Typically available within 24 hours"}</span>
                  </p>
                </div>
              </div>

            </div>
          </div>

          <div className="mt-auto pt-4 md:pt-8 text-center">
            <h3 className="text-xl font-black text-[#002b5c] mb-2">
              Ready to get started?
            </h3>
            <p className="text-[#64748b] font-medium text-sm mb-6">
              Book an appointment or contact us on WhatsApp for more information.
            </p>
            <div className="flex justify-center">
              <div className="w-full sm:max-w-[260px]">
                <WhatsAppInquiry serviceName={service.title} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
