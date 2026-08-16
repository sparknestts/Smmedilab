import Header from "@/components/Header";
import BlogContent from "@/components/blog/BlogContent";

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      <Header />
      <main className="flex-grow">
        <BlogContent />
      </main>
    </div>
  );
}
