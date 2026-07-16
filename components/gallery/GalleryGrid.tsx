import {
  galleryImages,
  totalGalleryItems,
  visibleGalleryItems,
} from "@/data/gallery";
import GalleryImage from "./GalleryImage";
import SequencingCard from "./SequencingCard";

export default function GalleryGrid() {
  const progressPercent = (visibleGalleryItems / totalGalleryItems) * 100;

  return (
    <section className="pb-12 md:pb-16 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          <GalleryImage
            item={galleryImages.labFeature}
            className="min-h-[320px] sm:min-h-[360px] lg:min-h-0 lg:row-span-2 lg:col-start-1 lg:row-start-1 aspect-auto lg:aspect-[3/4]"
            priority
          />

          <GalleryImage
            item={galleryImages.technology}
            className="min-h-[200px] lg:col-start-2 lg:row-start-1 aspect-[4/3]"
          />

          <GalleryImage
            item={galleryImages.staff1}
            className="min-h-[200px] sm:col-span-1 lg:col-start-3 lg:row-start-1 aspect-[4/3]"
          />

          <GalleryImage
            item={galleryImages.microscope}
            className="min-h-[200px] sm:col-span-2 lg:col-span-2 lg:col-start-2 lg:row-start-2 aspect-[21/9]"
          />

          <GalleryImage
            item={galleryImages.waitingArea}
            className="min-h-[200px] lg:col-start-1 lg:row-start-3 aspect-[4/3]"
          />

          <GalleryImage
            item={galleryImages.sampleCollection}
            className="min-h-[200px] lg:col-start-2 lg:row-start-3 aspect-[4/3]"
          />

          <div className="min-h-[200px] lg:col-start-3 lg:row-start-3 h-full">
            <SequencingCard />
          </div>

          <GalleryImage
            item={galleryImages.labStaff}
            className="min-h-[260px] md:min-h-[300px] sm:col-span-2 lg:col-span-3 lg:col-start-1 lg:row-start-4 aspect-[21/9]"
          />
        </div>

        <div className="flex flex-col items-center gap-5 mt-12 md:mt-16">
          <button
            type="button"
            className="border-2 border-gray-200 hover:border-[#002b5c] text-[#002b5c] font-bold px-8 py-3.5 rounded-xl bg-white transition-colors"
          >
            Load More Articles
          </button>
          <div className="w-full max-w-md space-y-2">
            <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-wider">
              Showing {visibleGalleryItems} of {totalGalleryItems} Insights
            </p>
            <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#002b5c] rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
