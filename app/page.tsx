import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HealthScreenings from "@/components/HealthScreenings";
import ScienceOfCertainty from "@/components/ScienceOfCertainty";
import HomeCollection from "@/components/HomeCollection";
import GoogleReviews from "@/components/GoogleReviews";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      <Header />
      <Hero />
      <HealthScreenings />
      <ScienceOfCertainty />
      <HomeCollection />
      <GoogleReviews />
      <Footer />
    </div>
  );
}
