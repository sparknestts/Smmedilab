import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HealthScreenings from "@/components/HealthScreenings";
import ScienceOfCertainty from "@/components/ScienceOfCertainty";
import HomeCollection from "@/components/HomeCollection";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans overflow-x-hidden">
      <Header />
      <Hero />
      <HealthScreenings />
      <ScienceOfCertainty />
      <HomeCollection />
      <Reviews />
      <Footer />
    </div>
  );
}
