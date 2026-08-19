import { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import ServiceDetails from "@/components/services/ServiceDetails";
import { getServiceById, getAllServices } from "@/data/services";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  const services = getAllServices();
  return services.map((service) => ({
    id: service.id || "featured",
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const service = getServiceById(id);
  
  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} | SM Medi Lab`,
    description: service.description,
  };
}

export default async function ServicePage({ params }: Props) {
  const { id } = await params;
  const service = getServiceById(id);

  if (!service) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      <Header forceSolid />
      <main className="flex-grow pt-[72px]">
        <ServiceDetails service={service} />
      </main>
    </div>
  );
}
