import BlogHero from "./BlogHero";
import BlogFeatured from "./BlogFeatured";
import BlogGrid from "./BlogGrid";

export default function BlogContent() {
  return (
    <>
      <BlogHero />
      <section className="px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <BlogFeatured />
        </div>
      </section>
      <BlogGrid />
    </>
  );
}
