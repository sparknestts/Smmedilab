import Image from "next/image";
import type { BlogPost } from "@/data/blog";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group flex flex-col h-full bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-6 md:p-8 flex flex-col flex-1 justify-between space-y-4">
        <div className="space-y-3">
          <span className="inline-block text-emerald-700 text-xs font-bold uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full">
            {post.categoryLabel}
          </span>

          <h3 className="text-lg md:text-xl font-bold text-[#002b5c] group-hover:text-[#003F87] transition-colors leading-snug">
            {post.title}
          </h3>

          <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
            {post.excerpt}
          </p>
        </div>

        <div className="pt-4 border-t border-slate-50">
          <a
            href="/blog"
            className="text-[#003F87] font-bold text-sm hover:text-[#002b5c] transition-colors inline-flex items-center gap-1.5 group-hover:translate-x-1 transition-transform"
          >
            Read full report
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </article>
  );
}
