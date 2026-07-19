import Image from "next/image";
import { featuredPost } from "@/data/blog";

export default function BlogFeatured() {
  return (
    <article className="bg-[#FFFFFF] rounded-[8px] md:rounded-[8px] overflow-hidden border border-gray-100 shadow-sm">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[250px] px-5 pb-5 md:px-8 md:pb-8 lg:px-10 lg:pb-10 mt-5 md:mt-5 lg:mt-5">
          <Image
            src={featuredPost.image}
            alt={featuredPost.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center">
          <div className="flex items-center gap-4 mb-5">
            <span className="inline-block bg-[#80F98B] text-[#007327] text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
              Featured Insight
            </span>
            <span className="text-[#424752] text-xs font-medium">
              {featuredPost.readTime}
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-[1.65rem] font-medium text-[#003F87] leading-snug mb-4">
            {featuredPost.title}
          </h2>

          <p className="text-[#424752] text-xs md:text-base leading-relaxed mb-8">
            {featuredPost.excerpt}
          </p>

          <div className="flex items-center gap-3 pt-6 ">
            <div className="w-11 h-11 rounded-full bg-[#f0f4ff] flex items-center justify-center shrink-0 overflow-hidden">
              <span className="text-[#4a90e2] font-bold text-sm">SM</span>
            </div>
            <div>
              <p className="text-[#002b5c] font-bold text-sm md:text-base">
                {featuredPost.author.name}
              </p>
              <p className="text-gray-400 text-sm">{featuredPost.author.role}</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
