import type { Metadata, ResolvingMetadata } from "next";
import DiyaMakingMachine from "@/components/Products/Diya-Making-Machine";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const slug = params.slug;
  if (slug === "diya-making-machine") {
    return {
      title: "Premium Diya Making Machines Shop | Kavan Enterprise",
      description:
        "Revolutionize Diya production with our advanced machines. Precision, speed, and quality in every mold. Elevate your craft today!",
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
      ],
      openGraph: {
        type: "website",
        url: "https://kavanenterprise.com/product/diya-making-machine",
        title: "Premium Diya Making Machines Shop | Kavan Enterprise",
        description:
          "Multi Purpose Manual Diya Making Machine is very useful to make Diyas. By using Different Die (Mold) it can Produce : Deepak/Diya, Kullad, Kitkat fuse, Ceramic foundry filters etc.",
        siteName: "Diya Making Machine | Kavan Enterprise",
        images: [
          {
            url: "https://kavanenterprise.com/diya-making-machine-1.jpeg",
          },
        ],
      },
      twitter: {
        site: "https://kavanenterprise.com/product/diya-making-machine",

        description:
          "Multi Purpose Manual Diya Making Machine is very useful to make Diyas. By using Different Die (Mold) it can Produce : Deepak/Diya, Kullad, Kitkat fuse, Ceramic foundry filters etc.",
        title: "Premium Diya Making Machines Shop | Kavan Enterprise",
        images: "https://kavanenterprise.com/diya-making-machine-1.jpeg",
      },
    };
  }

  return {
    title: slug.replace(/-/g, " "), // Convert slug to a more readable title
  };
}

const ProductPage = ({ params }: Props) => {
  const { slug } = params;

  if (slug === "diya-making-machine") return <DiyaMakingMachine />;

  return (
    <section className="py-28">
      <h1>Coming Soon</h1>
    </section>
  );
};

export default ProductPage;
