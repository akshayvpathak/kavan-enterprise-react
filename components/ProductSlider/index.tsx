"use client";
import React, { FC, useState } from "react";
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

export const ProductSlider: FC<{
  images: string[];
}> = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

  return (
    <>
      <Swiper
        spaceBetween={10}
        loop
        zoom={true}
        navigation={true}
        thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined} // Add this condition
        modules={[Zoom, FreeMode, Navigation, Thumbs]}
        className="text-center"
      >
        {images.map((src) => {
          return (
            <SwiperSlide>
              <Image height={300} alt="product" width={300} src={src} />
            </SwiperSlide>
          );
        })}
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
        {images.map((src) => {
          return (
            <SwiperSlide>
              <div className="cursor-pointer rounded-lg border border-orange p-4">
                <Image height={75} alt="product" width={75} src={src} />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
