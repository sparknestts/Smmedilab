import Image from "next/image";
import { featuredPost } from "@/data/blog";

export default function BlogFeatured() {
  return (
    <article className="bg-[#f8fafc] rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
        <div className="relative aspect-[16/10] lg:aspect-auto lg:h-full min-h-[300px]">
          <Image
            src={featuredPost.image}
            alt={featuredPost.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-center space-y-5">
          <div className="flex items-center gap-3">
            <span className="inline-block bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
              Featured Insight
            </span>
            <span className="text-gray-400 text-xs font-medium">
              {featuredPost.readTime}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-[#002b5c] leading-snug">
            {featuredPost.title}
          </h2>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            {featuredPost.excerpt}
          </p>

          <div className="flex items-center gap-3 pt-4 border-t border-slate-200/60">
            <div className="w-10 h-10 rounded-full bg-[#002b5c] text-white flex items-center justify-center font-bold text-xs shrink-0">
              SM
            </div>
            <div>
              <p className="text-[#002b5c] font-bold text-sm">
                {featuredPost.author.name}
              </p>
              <p className="text-gray-400 text-xs">{featuredPost.author.role}</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
