import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About SM Medi Lab | Top Diagnostic Centre in Jaffna",
  description:
    "Learn about SM Medi Lab, the leading medical laboratory in Jaffna, Sri Lanka. We provide accurate blood tests, DNA analysis, and reliable diagnostics with world-class technology.",
  alternates: { canonical: "https://www.smmedilab.com/about" },
  openGraph: {
    title: "About SM Medi Lab | Top Diagnostic Centre in Jaffna",
    description: "The leading medical laboratory in Jaffna, providing accurate and reliable diagnostics.",
    url: "https://www.smmedilab.com/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
