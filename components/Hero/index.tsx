"use client";
import Image from "next/image";
import { useState } from "react";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" md:w-1/2">
              <h1 className="text-linkhover mb-5 pr-16 text-3xl font-bold  xl:text-hero ">
                Welcome to
                <span className="text-linkhover relative  inline-block">
                  Kavan Enterprise
                </span>
              </h1>
              <p className="text-white">
                At Kavan Enterprise, we take pride in our meticulous attention
                to detail and dedication to producing superior products. Whether
                you're looking for beautifully crafted ceramic homeware or
                seeking to enhance your diya manufacturing process, we have the
                expertise and resources to meet your needs.
              </p>
            </div>

            <div className="animate_right  md:w-1/2 ">
              <div className="relative 2xl:-mr-7.5">
                <Image
                  src="/images/shape/shape-01.png"
                  alt="shape"
                  width={46}
                  height={246}
                  className="absolute -left-11.5 top-0"
                />
                <Image
                  src="/images/shape/shape-02.svg"
                  alt="shape"
                  width={36.9}
                  height={36.7}
                  className="absolute bottom-0 right-0 z-10"
                />
                <Image
                  src="/images/shape/shape-03.svg"
                  alt="shape"
                  width={21.64}
                  height={21.66}
                  className="absolute -right-6.5 bottom-0 z-1"
                />
                <div className=" relative aspect-[700/444] w-full  bg-transparent">
                  <Image
                    className="shadow-solid-l dark:hidden"
                    src="/images/custom/make-in-india.png"
                    alt="Make In India"
                    fill
                  />
                  <Image
                    className="hidden shadow-solid-l dark:block"
                    src="/images/custom/make-in-india.png"
                    alt="Make In India"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
