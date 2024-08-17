"use client";
import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

// Import required modules
import { Zoom, Navigation, FreeMode, Thumbs } from "swiper/modules";
import Image from "next/image";

export default function ProductSlider() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

  return (
    <>
      <Swiper
        spaceBetween={10}
        zoom={true}
        navigation={true}
        thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined} // Add this condition
        modules={[Zoom, FreeMode, Navigation, Thumbs]}
        className="text-center"
      >
        <SwiperSlide>
          <Image
            height={300}
            alt="product"
            width={300}
            src="/images/products/achar-jar.jpeg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            height={300}
            alt="product"
            width={300}
            src="/images/products/achar-jar.jpeg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            height={300}
            alt="product"
            width={300}
            src="/images/products/achar-jar.jpeg"
          />
        </SwiperSlide>
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mt-6 text-center"
      >
        <SwiperSlide>
          <div className="rounded-lg border border-orange p-4">
            <Image
              height={75}
              alt="product"
              width={75}
              src="/images/products/achar-jar.jpeg"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-lg border border-orange p-4">
            <Image
              height={75}
              alt="product"
              width={75}
              src="/images/products/achar-jar.jpeg"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-lg border border-orange p-4">
            <Image
              height={75}
              alt="product"
              width={75}
              src="/images/products/achar-jar.jpeg"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
