import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Medical Lab Services in Jaffna | Blood Tests, DNA & More – SM Medi Lab",
  description:
    "Explore SM Medi Lab's full range of laboratory services in Jaffna, Sri Lanka – blood tests, DNA analysis, urine tests, health packages & home sample collection. Fast, accurate results.",
  alternates: { canonical: "https://www.smmedilab.com/services" },
  openGraph: {
    title: "Medical Lab Services in Jaffna | SM Medi Lab",
    description:
      "Blood tests, DNA analysis, urine tests, health packages & home sample collection in Jaffna, Sri Lanka.",
    url: "https://www.smmedilab.com/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
