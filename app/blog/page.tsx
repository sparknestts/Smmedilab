import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogContent from "@/components/blog/BlogContent";

export const metadata: Metadata = {
  title: "Blog - SM Medi Lab",
  description:
    "Expert perspectives on diagnostics, preventive care, and wellness from the SM Medi Lab clinical team.",
};

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans overflow-x-hidden">
      <Header />
      <main className="flex-grow">
        <BlogContent />
      </main>
      <Footer />
    </div>
  );
}
