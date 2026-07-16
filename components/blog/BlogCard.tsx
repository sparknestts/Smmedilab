import Image from "next/image";
import type { BlogPost } from "@/data/blog";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group flex flex-col">
      <div className="relative aspect-[16/10] rounded-[20px] md:rounded-[24px] overflow-hidden mb-5">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <span className="text-[#28a745] text-xs font-bold uppercase tracking-wider mb-2">
        {post.categoryLabel}
      </span>

      <h3 className="text-lg md:text-xl font-black text-[#002b5c] leading-snug mb-3">
        {post.title}
      </h3>

      <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-5 flex-grow">
        {post.excerpt}
      </p>

      <a
        href="#"
        className="text-[#4a90e2] font-bold text-sm hover:text-[#002b5c] transition-colors inline-flex items-center gap-1 w-fit"
      >
        Read full report
        <span aria-hidden="true">→</span>
      </a>
    </article>
  );
}
