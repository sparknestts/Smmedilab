import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HealthScreenings from "@/components/HealthScreenings";
import ScienceOfCertainty from "@/components/ScienceOfCertainty";
import HomeCollection from "@/components/HomeCollection";
import WhyChooseUs from "@/components/WhyChooseUs";
import GoogleReviews from "@/components/GoogleReviews";

export const metadata: Metadata = {
  title: "SM Medi Lab | Best Medical Lab in Jaffna & Sri Lanka",
  description:
    "SM Medi Lab – the best medical laboratory in Jaffna, Sri Lanka. Blood tests, DNA analysis, urine tests & home sample collection. Fast digital reports. Call us today.",
  alternates: {
    canonical: "https://www.smmedilab.com",
  },
  openGraph: {
    title: "SM Medi Lab | Best Medical Lab in Jaffna & Sri Lanka",
    description:
      "Accurate blood tests, DNA analysis & home sample collection in Jaffna. The most trusted medical lab in Sri Lanka.",
    url: "https://www.smmedilab.com",
  },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans overflow-x-hidden w-full">
      <Header />
      <Hero />
      <HealthScreenings />
      <ScienceOfCertainty />
      <HomeCollection />
      <WhyChooseUs />
      <GoogleReviews />
    </div>
  );
}
