"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Import review images
import review1 from "../../../public/Reviewslider1.png";
import review2 from "../../../public/Reviwslider2.png";
import review3 from "../../../public/Reviewslider3.png";

// Review Data
const reviews = [
  { id: 1, image: review1, alt: "Review 1" },
  { id: 2, image: review2, alt: "Review 2" },
  { id: 3, image: review3, alt: "Review 3" },
];

function Testimonials() {
  return (
    <section className="bg-black px-5 md:px-[135px] py-[120px]">
      {/* Section Heading */}
      <div>
        <h2 className="text-[#FF9F0D] font-great text-[20px] md:text-[32px]">
          Testimonials
        </h2>
        <h2 className="text-white font-bold text-[25px] md:text-[48px]">
          What our clients are saying
        </h2>
      </div>

      {/* Swiper Slider */}
      <div className="w-full mt-[40px]">
        <Swiper
          modules={[Pagination]}
          pagination={{
            clickable: true, // Make dots clickable
            el: ".swiper-pagination-custom", // Attach to custom element
          }}
          spaceBetween={50}
          slidesPerView={1}
          className="w-full h-[300px] md:h-[500px]"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="flex justify-center items-center">
                <Image
                  src={review.image}
                  alt={review.alt}
                  className="w-[300px] md:w-[800px] h-[200px] md:h-[500px] bg-white rounded-lg"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination Dots */}
        <div className="swiper-pagination-custom mt-8 flex justify-center"></div>
      </div>
    </section>
  );
}

export default Testimonials;
