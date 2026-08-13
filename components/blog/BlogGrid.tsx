"use client";

import { useState } from "react";
import {
  blogCategories,
  blogPosts,
  matchesCategory,
  totalInsights,
  type BlogCategory,
} from "@/data/blog";
import BlogCard from "./BlogCard";

export default function BlogGrid() {
  const [activeFilter, setActiveFilter] = useState<BlogCategory>("all");

  const filtered = blogPosts.filter((post) =>
    matchesCategory(post.category, activeFilter)
  );

  const progressPercent = (blogPosts.length / totalInsights) * 100;

  return (
    <section className="py-10 md:py-14 lg:py-16 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="-mx-6 px-6 md:mx-0 md:px-0 mb-10 md:mb-12">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {blogCategories.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveFilter(category.id)}
                className={`shrink-0 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  activeFilter === category.id
                    ? "bg-[#002b5c] text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 md:gap-y-12 mb-12 md:mb-16">
            {filtered.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 mb-12">
            <p className="text-gray-500 text-lg font-medium">
              No articles found in this category.
            </p>
          </div>
        )}

        <div className="flex flex-col items-center gap-5">
          <button
            type="button"
            className="border-2 border-gray-200 hover:border-[#002b5c] text-[#002b5c] font-bold px-8 py-3.5 rounded-xl bg-white transition-colors"
          >
            Load More Articles
          </button>
          <div className="w-full max-w-md space-y-2">
            <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-wider">
              Showing {filtered.length} of {totalInsights} Insights
            </p>
            <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#002b5c] rounded-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
