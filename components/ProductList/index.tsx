"use client";

import React, { FC, useState } from "react";
import Image from "next/image"; // Assuming you are using Next.js
import QuoteDialog from "./QuoteDialog";
import { ceramicProducts, clayItems, machineryProducts } from "@/data/products";

export interface Product {
  image: string;
  alt: string;
  title: string;
  description: string;
}
interface ProductCardProps {
  product: Product;
}
export default function ProductCard({ product }: ProductCardProps) {
  const [open, setOpen] = useState(false);

  const handleOpenDialog = () => setOpen(true);
  return (
    <div className="border-border mx-auto flex h-full w-[18rem] max-w-full flex-col rounded-[22px] border bg-white p-4 dark:bg-zinc-900 sm:p-10 md:w-[20rem]">
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
      <button
        className="mt-auto transform rounded-full bg-orange px-8 py-2 font-bold tracking-widest text-white transition-transform duration-200 hover:scale-105 hover:bg-btnHover sm:px-10 md:px-12 lg:px-16"
        onClick={handleOpenDialog}
      >
        Get Quotes
      </button>

      <QuoteDialog
        product={product}
        isOpen={open}
        handleClose={() => setOpen(false)}
      />
    </div>
  );
}

const ProductList = () => {
  return (
    <div className="pt-4  md:px-32">
      <div className="l mx-auto mt-4 w-fit rounded-full bg-black px-6 py-2 text-base text-zinc-50">
        ✨ Range Of Products ✨
      </div>
      <div className="mb-2 ml-4 mt-10 text-3xl font-bold  text-charcoal">
        Machinery Products
      </div>

      <div className=" flex flex-wrap justify-center ">
        {machineryProducts.map((product) => (
          <div
            key={product.id}
            className="w-full p-2 text-center sm:w-1/2 md:w-1/2 lg:w-1/5"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      <div className="mb-2 ml-4 mt-10 text-3xl font-bold text-charcoal">
        Clay Items
      </div>

      <div className=" flex flex-wrap justify-center ">
        {clayItems.map((product) => (
          <div
            key={product.id}
            className="w-full p-2 text-center sm:w-1/2 md:w-1/2 lg:w-1/5"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      <div className="mb-2 ml-4 mt-10 text-3xl font-bold  text-charcoal">
        Ceramic Products
      </div>

      <div className=" flex flex-wrap justify-center ">
        {ceramicProducts.map((product) => (
          <div
            key={product.id}
            className="w-full p-2 text-center sm:w-1/2 md:w-1/2 lg:w-1/5"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export { ProductList };
