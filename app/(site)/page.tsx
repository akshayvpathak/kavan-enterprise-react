import { Metadata } from "next";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import Feedback from "@/components/Testimonial";
import { ProductList } from "@/components/ProductList";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Kavan Enterprise",
  description:
    "Discover the epitome of Diyas, futuristic Diya making machines, and exquisite ceramic delights. Revolutionize your festivities now!",
  robots: "index, follow",
  keywords: [
    "Diya Making Machine",
    "Diya Machine",
    "Thangadh Diya Making Machine",
    "foundry filters",
    "Automatic Diya Making Machine",
    "Semi-automatic Diya Making Machine",
    "Deepak/Diya",
    "Manual Diya Making Machine",
    "Electric Diya Making Machine",
    "Hydraulic Diya Making Machine",
    "Candle and Diya Making Machine",
    "Diya Moulding Machine",
    "Kullad",
    "Clay Diya Making Machine",
    "Wax Diya Making Machine",
    "Candle and Diya Moulding Machine",
    "Ceramic",
    "Small-scale Diya Making Machine",
    "Industrial Diya Making Machine",
    "High-speed Diya Making Machine",
    "Low-cost Diya Making Machine",
    "Portable Diya Making Machine",
    "Multi-functional Diya Making Machine",
    "Eco-friendly Diya Making Machine",
    "Custom Diya Making Machine",
    "Kitkat fuse",
    "Affordable Diya Making Machine",
    "Best Diya Making Machine",
    "Reliable Diya Making Machine",
    "Easy-to-use Diya Making Machine",
    "Diya Making Machine Supplier",
    "Diya Making Machine Manufacturer",
    "Diya Making Machine Exporter",
    "Diya Making Machine Dealer",
    "Buy Diya Making Machine Online",
    "Diya Making Machine Price",
    "Diya Making Machine Cost",
    "Diya Making Machine Specifications",
    "Diya Making Machine Features",
    "Diya Making Machine Reviews",
    "Diya Making Machine Comparison",
    "Diya Making Machine Benefits",
    "Diya Making Machine Uses",
    "Diya Making Machine Applications",
    "Diya Making Machine Components",
    "Diya Making Machine Parts",
    "Diya Making Machine Assembly",
    "Diya Making Machine Operation",
    "Diya Making Machine Maintenance",
    "Diya Making Machine Training",
    "Diya Making Machine Manual",
    "Diya Making Machine Warranty",
    "Diya Making Machine Service",
    "Diya Making Machine Repair",
    "Diya Making Machine Installation",
    "Diya Making Machine Consultation",
    "Diya Making Machine Inquiry",
    "Kavan Enterprise",
  ],
  openGraph: {
    type: "website",
    url: "https://kavanenterprise.com",
    title: "Illuminate Life: Diyas, Machines & More | Kavan Enterprise",
    description:
      "Discover the epitome of Diyas, futuristic Diya making machines, and exquisite ceramic delights. Revolutionize your festivities now!",
    siteName: "Kavan Enterprise",
  },
  twitter: {
    site: "https://kavanenterprise.com",
    description:
      "Discover the epitome of Diyas, futuristic Diya making machines, and exquisite ceramic delights. Revolutionize your festivities now!",
    title: "Illuminate Life: Diyas, Machines & More | Kavan Enterprise",
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <ProductList />
      <Feedback />
      <Contact />
      <div className="relative my-8 w-full">
        <div className="relative flex w-full justify-center">
          <Image
            src="/images/about/shiv.jpg"
            alt="Make In India"
            objectFit="cover"
            layout="responsive"
            width={1200}
            height={600}
          />
          {/* Centered Text */}
          <p className="absolute inset-0 flex items-end justify-center bg-black bg-opacity-30 p-4 text-3xl font-bold text-white">
            Second Unit at Surendranagar
          </p>
        </div>
      </div>
    </main>
  );
}
