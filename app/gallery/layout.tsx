import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lab Facilities & Gallery | SM Medi Lab Jaffna",
  description:
    "View the state-of-the-art facilities, advanced technology, and precision medical testing equipment at SM Medi Lab in Jaffna, Sri Lanka.",
  alternates: { canonical: "https://www.smmedilab.com/gallery" },
  openGraph: {
    title: "Lab Facilities & Gallery | SM Medi Lab Jaffna",
    description: "Explore SM Medi Lab's state-of-the-art diagnostic facilities in Jaffna.",
    url: "https://www.smmedilab.com/gallery",
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
