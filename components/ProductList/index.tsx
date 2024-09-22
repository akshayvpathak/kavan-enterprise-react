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
    <div className="mx-auto flex h-full w-full max-w-xs flex-col rounded-2xl border border-gray-200 bg-white p-4 shadow-md dark:bg-zinc-900 sm:max-w-sm md:max-w-md lg:max-w-xs">
      <div className="flex items-center justify-center text-center">
        <div className="flex h-48 w-56 items-center justify-center text-center">
          <img
            src={product.image}
            alt={product.alt}
            className="object-fit mx-auto h-full w-full"
          />
        </div>
      </div>

      <div className="flex  flex-col text-center">
        <p className="mb-2 mt-4 text-lg font-semibold text-black dark:text-neutral-200 sm:text-xl">
          {product.title}
        </p>
        <p className="pb-4 text-sm text-neutral-600 dark:text-neutral-400">
          {product.description}
        </p>
      </div>
      <button
        className="mx-auto mt-auto flex w-full items-center justify-center rounded-full bg-orange px-6 py-2 font-bold tracking-widest text-white transition-transform duration-200 hover:scale-105 hover:bg-btnHover sm:px-8 md:px-10 lg:px-12"
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
        🔆 Explore Our Product Range 🔆
      </div>
      <div className="mb-2 ml-4 mt-10 text-3xl font-bold  text-charcoal">
        Machinery Products
      </div>

      <div className=" flex flex-wrap justify-center ">
        {machineryProducts.map((product) => (
          <div
            key={product.id}
            className="w-full p-2 text-center sm:w-1/2 md:w-1/3 lg:w-1/5"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      <div className="mb-2 ml-4 mt-10 text-3xl font-bold text-charcoal">
        Clay Products
      </div>

      <div className=" flex flex-wrap justify-center ">
        {clayItems.map((product) => (
          <div
            key={product.id}
            className="w-full p-2 text-center sm:w-1/2 md:w-1/3 lg:w-1/5"
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
            className="w-full p-2 text-center sm:w-1/2 md:w-1/3 lg:w-1/5"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export { ProductList };
