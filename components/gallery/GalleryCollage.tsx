import type { ReactNode } from "react";

function Panel({
  src,
  alt,
  className = "",
  badge,
  overlay,
}: {
  src: string;
  alt: string;
  className?: string;
  badge?: ReactNode;
  overlay?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[16px] border border-gray-100 bg-[#eef2f7] ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Consistent blue color grading overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#002b5c]/25 via-[#002b5c]/5 to-transparent" />
      {overlay && <div className={`absolute inset-0 ${overlay}`} />}
      {badge}
    </div>
  );
}

const LEAD_BADGE = (
  <span className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 lg:bottom-3 lg:left-3 bg-[#002b5c] text-white text-[9px] sm:text-[11px] lg:text-[14px] font-bold uppercase tracking-[0.12em] px-2.5 py-1 rounded-full shadow-md">
    Lead Pathologist
  </span>
);

const SEQ_TEXT = (
  <span className="absolute top-5 left-5 sm:top-6 sm:left-6 lg:top-10 lg:left-8 right-3 text-left text-white text-[28px] sm:text-[20px] lg:text-[28px] font-semibold leading-snug drop-shadow">
    Next-Generation<br />sequencing technology
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src="/micro.svg" alt="" className="mt-2 block h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 object-contain" />
    <span className="mt-3 sm:mt-6 lg:mt-10 flex w-fit flex-row items-center gap-2 sm:gap-3 text-[14px] sm:text-[12px] lg:text-[13px] font-semibold leading-snug">
      <span className="rounded-[16px] bg-[#FFFFFF]/20 p-2 sm:p-3 text-[#FFFFFF]">99.9% Accuracy</span>
      <span className="rounded-[16px] bg-[#FFFFFF]/20 p-2 sm:p-3 text-[#FFFFFF]">Rapid Processing</span>
    </span>
  </span>
);

export default function GalleryCollage() {
  return (
    <section className="px-3 md:px-0 lg:px-0 pb-12 md:pb-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Desktop: exact split collage */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-3 lg:h-[580px]">
          <Panel
            src="/Large%20Feature_%20The%20Lab.svg"
            alt="Laboratory glassware and beakers"
            className="h-full rounded-lg"
          />
          <div className="grid grid-rows-2 gap-3 h-full">
            <div className="grid grid-cols-2 gap-3 h-full">
              <Panel
                src="/Equipment%201.svg"
                alt="Centrifuge machine"
                className="h-full rounded-lg  "
              />
              <Panel
                src="/founder.png"
                alt="Lead pathologist portrait"
                className="h-full rounded-lg"
                badge={LEAD_BADGE}
              />
            </div>
            <Panel
              src="/Microscope%20View.svg"
              alt="Microscope close-up"
              className="h-full rounded-lg"
            />
          </div>
        </div>

        {/* Desktop: second row (images 5, 6, 7) */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-3 lg:h-[300px] mt-3">
          <div className="grid grid-cols-2 gap-3 h-full">
            <Panel
              src="/waiting%20area.svg"
              alt="Waiting area"
              className="h-full rounded-lg"
            />
            <Panel
              src="/Sample%20Collection.svg"
              alt="Sample collection"
              className="h-full rounded-lg"
            />
          </div>
          <Panel
            src="/staff_1.svg"
            alt="Lab staff"
            className="h-full rounded-lg"
            overlay="bg-[#003F87]/80"
            badge={SEQ_TEXT}
          />
        </div>

        {/* Desktop: final row (image 8) */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-3 lg:h-[300px] mt-3">
          <Panel
            src="/lab.svg"
            alt="Laboratory technology"
            className="h-full rounded-lg"
          />

        </div>

        {/* Mobile / tablet: flowing, balanced grid (desktop unchanged) */}
        <div className="grid lg:hidden grid-cols-2 gap-3">
          <Panel
            src="/Large%20Feature_%20The%20Lab.svg"
            alt="Laboratory glassware and beakers"
            className="col-span-2 aspect-[16/10]"
          />
          <Panel
            src="/Equipment%201.svg"
            alt="Centrifuge machine"
            className="aspect-square"
          />
          <Panel
            src="/founder.png"
            alt="Lead pathologist portrait"
            className="aspect-square"
            badge={LEAD_BADGE}
          />
          <Panel
            src="/Microscope%20View.svg"
            alt="Microscope close-up"
            className="aspect-square"
          />
          <Panel
            src="/Waiting Area.svg"
            alt="Waiting area"
            className="aspect-square"
          />
          <Panel
            src="/taff_1.svg"
            alt="Laboratory technology"
            className="col-span-2 aspect-[16/10]"
            overlay="bg-[#003F87]/80"
            badge={SEQ_TEXT}
          />
          <Panel
            src="/Sample%20Collection.svg"
            alt="Sample collection"
            className="aspect-square"
          />
          <Panel
            src="/lab.svg"
            alt="Lab staff"
            className="aspect-square"
          />
          <Panel
            src="/Staff%201.svg"
            alt="Lab staff"
            className="col-span-2 aspect-[16/9]"
          />
        </div>
      </div>
    </section>
  );
}
