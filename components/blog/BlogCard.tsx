import Image from "next/image";
import type { BlogPost } from "@/data/blog";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group flex flex-col h-full">
      <div className="relative aspect-[16/10] rounded-t-[8px] md:rounded-t-[8px] overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="relative p-8 md:p-4 rounded-b-[8px] border border-gray-100 md:rounded-b-[8px] overflow-hidden flex flex-col flex-1">

      <span className="text-[#006E25] text-[12px] font-semibold uppercase tracking-wider mb-2">
        {post.categoryLabel}
      </span>

      <h3 className="text-lg md:text-xl font-black text-[#003F87] leading-snug mb-3">
        {post.title}
      </h3>

      <p className="text-[#424752] text-sm md:text-regular leading-relaxed mb-5 flex-grow">
        {post.excerpt}
      </p>

      <a
        href="#"
        className="text-[#003F87] font-bold text-sm hover:text-[#002b5c] transition-colors inline-flex items-center gap-1 w-fit"
      >
        Read full report
        <span aria-hidden="true">→</span>
      </a>
       </div>
    </article>
  );
}
