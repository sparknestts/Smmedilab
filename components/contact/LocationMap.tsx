import { location } from "@/data/contact";
import { contactMapHtml } from "@/components/contact/contactMapHtml";

export default function LocationMap() {
  return (
    <section className="py-12 md:py-16 lg:py-20 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto shadow-lg pb-8 md:pb-5 rounded-t-[8px] rounded-b-[12px]">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4  p-6 md:p-6">
          <div className="flex items-start ">
            
            <div>
              <h2 className="text-lg md:text-2xl lg:text-3xl font-black text-[#191C1D]">
                {location.title}
              </h2>
              <div className="flex items-start gap-2 mt-1">
                <span
                  className="w-4 h-4 mt-0.5 shrink-0 bg-[#424752] [mask-image:url('/Container.svg')] [mask-repeat:no-repeat] [mask-position:center] [mask-size:contain]"
                  aria-hidden="true"
                />
                <p className="text-[#424752] text-sm md:text-base">
                  {location.address}
                </p>
              </div>
            </div>
          </div>
          <a
            href={location.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex bg-[#E1E3E4] items-center justify-center gap-2  text-[#191C1D] font-bold px-6 py-3 rounded-lg hover:bg-[#002b5c] hover:text-white transition-colors shrink-0"
          >
            <span
              className="w-5 h-5 bg-current [mask-image:url('/Icon.svg')] [mask-repeat:no-repeat] [mask-position:center] [mask-size:contain]"
              aria-hidden="true"
            />
            Get Directions
          </a>
        </div>

        <div className="relative rounded-[0px] overflow-hidden h-[300px] sm:h-[360px] md:h-[420px]">
          <iframe
            title="SM MediLabs – Headquarters Map"
            srcDoc={contactMapHtml}
            className="absolute inset-0 w-full h-full"
            style={{ border: 0 }}
          />

          <div className="absolute bottom-3 left-3 max-w-[72%] sm:bottom-4 sm:left-4 sm:right-auto sm:max-w-sm bg-[#FFFFFF]/40 backdrop-blur-xl rounded-2xl p-3 sm:p-4 md:p-6">
            <span className="inline-block bg-[#28a745] text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full mb-2 sm:mb-3">
              Open Now
            </span>
            <h3 className="text-base sm:text-lg md:text-lg font-black text-[#002b5c] mb-1 sm:mb-2">
              {location.facilityName}
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              {location.facilityDescription}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
