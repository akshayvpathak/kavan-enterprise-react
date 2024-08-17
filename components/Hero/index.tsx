"use client";
import Image from "next/image";
import { useState } from "react";

const Hero: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section className="overflow-hidden bg-slate-50 pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-8 xl:gap-32.5">
          <div className="w-full md:w-1/2">
            <h1 className="mb-5 pr-16 text-3xl font-bold text-charcoal xl:text-hero">
              Welcome to
              <span className="relative mt-1 inline-block text-4xl font-bold leading-none text-charcoal md:text-[6rem]">
                Kavan Enterprise
              </span>
            </h1>
            <p className="text-charcoal">
              At Kavan Enterprise, we take pride in our meticulous attention to
              detail and dedication to producing superior products. Whether
              you're looking for beautifully crafted ceramic homeware or seeking
              to enhance your diya manufacturing process, we have the expertise
              and resources to meet your needs.
            </p>
          </div>

          <div className="mt-10 w-full md:mt-0 md:w-1/2">
            <div className="relative 2xl:-mr-7.5">
              <div className="aspect-w-16 aspect-h-9 w-full bg-transparent">
                <Image
                  src="/images/custom/make-in-india.png"
                  alt="Make In India"
                  objectFit="cover"
                  width={600}
                  height={600}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
