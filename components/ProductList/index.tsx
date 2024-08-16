"use client";

import React, { FC } from "react";
import Image from "next/image"; // Assuming you are using Next.js

const products = [
  {
    id: 1,
    image: "/images/products/achar-jar.jpeg",
    alt: "Diya Making Machine",
    title: "Diya Making Machine",
    description: "High-efficiency machine for manufacturing clay diyas.",
    price: "$100",
  },
  {
    id: 2,
    image: "/images/products/achar-jar.jpeg",
    alt: "Kullad Making Machine",
    title: "Kullad Making Machine",
    description: "Automatic machine for creating traditional kullads.",
    price: "$150",
  },
  {
    id: 3,
    image: "/images/products/achar-jar.jpeg",
    alt: "Suraki Machine",
    title: "Suraki Machine",
    description: "Efficient machine for producing suraki.",
    price: "$120",
  },
  {
    id: 4,
    image: "/images/products/achar-jar.jpeg",
    alt: "Hydraulic Diya Making Machine",
    title: "Hydraulic Diya Making Machine",
    description: "Advanced hydraulic machine for manufacturing diyas.",
    price: "$200",
  },
  {
    id: 5,
    image: "/images/products/achar-jar.jpeg",
    alt: "Mitti Diya",
    title: "Mitti Diya",
    description: "Traditional clay diyas for festive occasions.",
    price: "$10",
  },
  {
    id: 6,
    image: "/images/products/achar-jar.jpeg",
    alt: "Matka",
    title: "Matka",
    description: "Handcrafted clay matka for water storage.",
    price: "$20",
  },
  {
    id: 7,
    image: "/images/products/achar-jar.jpeg",
    alt: "Kullad",
    title: "Kullad",
    description: "Traditional clay kullad for serving tea.",
    price: "$5",
  },
  {
    id: 8,
    image: "/images/products/achar-jar.jpeg",
    alt: "Ceramic Mug",
    title: "Ceramic Mug",
    description: "Stylish ceramic mugs for everyday use.",
    price: "$15",
  },
  {
    id: 9,
    image: "/images/products/achar-jar.jpeg",
    alt: "One Piece",
    title: "One Piece",
    description: "Ceramic one piece for decoration.",
    price: "$25",
  },
  {
    id: 10,
    image: "/images/products/achar-jar.jpeg",
    alt: "Heater Plate",
    title: "Heater Plate",
    description: "Efficient ceramic heater plates.",
    price: "$30",
  },
  {
    id: 11,
    image: "/images/products/achar-jar.jpeg",
    alt: "Ceramic Foundary Filter",
    title: "Ceramic Foundary Filter",
    description: "High-quality ceramic foundary filters.",
    price: "$40",
  },
  {
    id: 12,
    image: "/images/products/achar-jar.jpeg",
    alt: "Achar Jar",
    title: "Achar Jar",
    description: "Ceramic jars for storing pickles.",
    price: "$12",
  },
  {
    id: 13,
    image: "/images/products/achar-jar.jpeg",
    alt: "Kunda",
    title: "Kunda",
    description: "Traditional ceramic kunda.",
    price: "$18",
  },
  {
    id: 14,
    image: "/images/products/achar-jar.jpeg",
    alt: "Ceramic Toys",
    title: "Ceramic Toys",
    description: "Handmade ceramic toys for kids.",
    price: "$22",
  },
  {
    id: 15,
    image: "/images/products/achar-jar.jpeg",
    alt: "Agarbatti Stand",
    title: "Agarbatti Stand",
    description: "Elegant ceramic agarbatti stands.",
    price: "$8",
  },
  {
    id: 16,
    image: "/images/products/achar-jar.jpeg",
    alt: "Ceramic Damru",
    title: "Ceramic Damru",
    description: "Decorative ceramic damrus.",
    price: "$14",
  },
  {
    id: 17,
    image: "/images/products/achar-jar.jpeg",
    alt: "Tulsi Kyara",
    title: "Tulsi Kyara",
    description: "Ceramic tulsi kyaras for homes.",
    price: "$16",
  },
  {
    id: 18,
    image: "/images/products/achar-jar.jpeg",
    alt: "Decorative Diyas",
    title: "Decorative Diyas",
    description: "Beautifully designed decorative diyas.",
    price: "$12",
  },
  {
    id: 19,
    image: "/images/products/achar-jar.jpeg",
    alt: "Decorative Matki",
    title: "Decorative Matki",
    description: "Artistic decorative matkis.",
    price: "$20",
  },
  {
    id: 20,
    image: "/images/products/achar-jar.jpeg",
    alt: "Cultivator Blade",
    title: "Cultivator Blade (Farva)",
    description: "Durable cultivator blades for agriculture.",
    price: "$50",
  },
];

const ProductCard: FC<{
  product: {
    id: number;
    image: string;
    alt: string;
    title: string;
    description: string;
  };
}> = ({ product }) => {
  return (
    <div className="mx-auto w-[15rem] rounded-[22px] border border-border bg-white p-4 dark:bg-zinc-900 sm:p-10 md:w-[17rem]">
      <Image
        src={product.image}
        alt={product.alt}
        height="400"
        width="400"
        className="object-contain"
      />
      <p className="mb-2 mt-4 text-base text-black dark:text-neutral-200 sm:text-xl">
        {product.title}
      </p>
      <p className="text-sm text-neutral-600 dark:text-neutral-400">
        {product.description}
      </p>
    </div>
  );
};

const ProductList = () => {
  return (
    <div className="pt-4">
      <div className="l mx-auto mt-4 w-fit rounded-full bg-black px-6 py-2 text-base text-zinc-50">
        ✨ Range Of Products ✨
      </div>

      <div className="flex flex-wrap justify-center">
        {products.map((product) => (
          <div
            key={product.id}
            className="w-full p-2 text-center sm:w-1/2 md:w-1/3 lg:w-1/4"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export { ProductList };
