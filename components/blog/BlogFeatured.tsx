import Image from "next/image";
import { featuredPost } from "@/data/blog";

export default function BlogFeatured() {
  return (
    <article className="bg-white rounded-[24px] md:rounded-[28px] overflow-hidden border border-gray-100 shadow-sm">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[340px]">
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
            <span className="inline-block bg-[#e7f9ee] text-[#28a745] text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
              Featured Insight
            </span>
            <span className="text-gray-400 text-sm font-medium">
              {featuredPost.readTime}
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-[1.65rem] font-black text-[#002b5c] leading-snug mb-4">
            {featuredPost.title}
          </h2>

          <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8">
            {featuredPost.excerpt}
          </p>

          <div className="flex items-center gap-3 pt-6 border-t border-gray-100">
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
