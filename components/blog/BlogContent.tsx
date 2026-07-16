import BlogHero from "./BlogHero";
import BlogFeatured from "./BlogFeatured";
import BlogGrid from "./BlogGrid";

export default function BlogContent() {
  return (
    <>
      <section className="pt-10 md:pt-14 lg:pt-16 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <BlogHero />
          <BlogFeatured />
        </div>
      </section>
      <BlogGrid />
    </>
  );
}
