"use client";

import React, { FC } from "react";
import Image from "next/image"; // Assuming you are using Next.js

const machineryProducts = [
  {
    id: 1,
    image: "/images/products/achar-jar.jpeg",
    alt: "Diya Making Machine",
    title: "Diya Making Machine",
    description: "High-efficiency machine for manufacturing clay diyas.",
  },
  {
    id: 2,
    image: "/images/products/achar-jar.jpeg",
    alt: "Kullad Making Machine",
    title: "Kullad Making Machine",
    description: "Automatic machine for creating traditional kullads.",
  },
  {
    id: 3,
    image: "/images/products/achar-jar.jpeg",
    alt: "Suraki Machine",
    title: "Suraki Machine",
    description: "Efficient machine for producing suraki.",
  },
  {
    id: 4,
    image: "/images/products/achar-jar.jpeg",
    alt: "Hydraulic Diya Making Machine",
    title: "Hydraulic Diya Making Machine",
    description: "Advanced hydraulic machine for manufacturing diyas.",
  },
  {
    id: 20,
    image: "/images/products/achar-jar.jpeg",
    alt: "Cultivator Blade",
    title: "Cultivator Blade (Farva)",
    description: "Durable cultivator blades for agriculture.",
  },
];

const clayItems = [
  {
    id: 5,
    image: "/images/products/achar-jar.jpeg",
    alt: "Mitti Diya",
    title: "Mitti Diya",
    description: "Traditional clay diyas for festive occasions.",
  },
  {
    id: 6,
    image: "/images/products/achar-jar.jpeg",
    alt: "Matka",
    title: "Matka",
    description: "Handcrafted clay matka for water storage.",
  },
  {
    id: 7,
    image: "/images/products/achar-jar.jpeg",
    alt: "Kullad",
    title: "Kullad",
    description: "Traditional clay kullad for serving tea.",
  },
  {
    id: 18,
    image: "/images/products/achar-jar.jpeg",
    alt: "Decorative Diyas",
    title: "Decorative Diyas",
    description: "Beautifully designed decorative diyas.",
  },
  {
    id: 19,
    image: "/images/products/achar-jar.jpeg",
    alt: "Decorative Matki",
    title: "Decorative Matki",
    description: "Artistic decorative matkis.",
  },
];

const ceramicProducts = [
  {
    id: 8,
    image: "/images/products/achar-jar.jpeg",
    alt: "Ceramic Mug",
    title: "Ceramic Mug",
    description: "Stylish ceramic mugs for everyday use.",
  },
  {
    id: 9,
    image: "/images/products/achar-jar.jpeg",
    alt: "One Piece",
    title: "One Piece",
    description: "Ceramic one piece for decoration.",
  },
  {
    id: 10,
    image: "/images/products/achar-jar.jpeg",
    alt: "Heater Plate",
    title: "Heater Plate",
    description: "Efficient ceramic heater plates.",
  },
  {
    id: 11,
    image: "/images/products/achar-jar.jpeg",
    alt: "Ceramic Foundary Filter",
    title: "Ceramic Foundary Filter",
    description: "High-quality ceramic foundary filters.",
  },
  {
    id: 12,
    image: "/images/products/achar-jar.jpeg",
    alt: "Achar Jar",
    title: "Achar Jar",
    description: "Ceramic jars for storing pickles.",
  },
  {
    id: 13,
    image: "/images/products/achar-jar.jpeg",
    alt: "Kunda",
    title: "Kunda",
    description: "Traditional ceramic kunda.",
  },
  {
    id: 14,
    image: "/images/products/achar-jar.jpeg",
    alt: "Ceramic Toys",
    title: "Ceramic Toys",
    description: "Handmade ceramic toys for kids.",
  },
  {
    id: 15,
    image: "/images/products/achar-jar.jpeg",
    alt: "Agarbatti Stand",
    title: "Agarbatti Stand",
    description: "Elegant ceramic agarbatti stands.",
  },
  {
    id: 16,
    image: "/images/products/achar-jar.jpeg",
    alt: "Ceramic Damru",
    title: "Ceramic Damru",
    description: "Decorative ceramic damrus.",
  },
  {
    id: 17,
    image: "/images/products/achar-jar.jpeg",
    alt: "Tulsi Kyara",
    title: "Tulsi Kyara",
    description: "Ceramic tulsi kyaras for homes.",
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
    <div className="mx-auto flex h-full w-[18rem] max-w-full flex-col rounded-[22px] border border-border bg-white p-4 dark:bg-zinc-900 sm:p-10 md:w-[20rem]">
      <Image
        src={product.image}
        alt={product.alt}
        height="400"
        width="400"
        className="object-contain"
      />
      <div className="flex flex-grow flex-col">
        <p className="mb-2 mt-4 text-base text-black dark:text-neutral-200 sm:text-xl">
          {product.title}
        </p>
        <p className="pb-4 text-sm text-neutral-600 dark:text-neutral-400">
          {product.description}
        </p>
      </div>
      <button className="bg-orange hover:bg-orange mt-auto transform rounded-full px-12 py-2  font-bold tracking-widest text-white transition-colors duration-200 hover:scale-105">
        Get Quotes
      </button>
    </div>
  );
};

const ProductList = () => {
  return (
    <div className="pt-4  md:px-32">
      <div className="l mx-auto mt-4 w-fit rounded-full bg-black px-6 py-2 text-base text-zinc-50">
        ✨ Range Of Products ✨
      </div>
      <div className="text-charcoal mb-2 ml-4 mt-4 text-3xl  font-bold">
        Machinery Products
      </div>

      <div className=" flex flex-wrap justify-center ">
        {machineryProducts.map((product) => (
          <div
            key={product.id}
            className="w-full p-2 text-center sm:w-1/2 md:w-1/3 lg:w-1/4"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      <div className="text-charcoal mb-2 ml-4 mt-4 text-3xl font-bold">
        Clay Items
      </div>

      <div className=" flex flex-wrap justify-center ">
        {clayItems.map((product) => (
          <div
            key={product.id}
            className="w-full p-2 text-center sm:w-1/2 md:w-1/3 lg:w-1/4"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      <div className="text-charcoal mb-2 ml-4 mt-4 text-3xl  font-bold">
        Ceramic Products
      </div>

      <div className=" flex flex-wrap justify-center ">
        {ceramicProducts.map((product) => (
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
