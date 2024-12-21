import Link from "next/link";
import React from "react";

import { CiPlay1 } from "react-icons/ci";

function RestaurantActive() {
  return (
    <section className="relative bg-black md:px-[135px] md:py-[120px] h-[80vh]">
      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/RestaurantActiveProcess.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Content Container */}
        <div className="z-10 flex flex-col md:justify-center md:items-end w-[100%] h-[100%] text-white md:text-center sm:text-right px-[30px] py-[60px] md:px-[120px]">
          <h1 className="text-[#FF9F0D] md:text-[32px] font-great text-[20px] font-bold mb-4">
            Restaurant Active Process
          </h1>
          <h1 className="text-2xl md:text-[48px] font-bold w-[300px] md:w-[705px] mb-4">
            <span className="text-[#FF9F0D]">We</span> Document Every Food Bean
            Process until it is saved
          </h1>
          <h3 className="md:w-[651px] w-full text-sm md:text-base mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
            pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
            augue urna,
          </h3>

          {/* Links */}
          <div className="flex md:flex-row flex-col justify-start items-center gap-[24px] mt-[33px]">
            <Link href={"/"} className="border border-[#FF9F0D] px-8 md:px-10 flex items-center justify-center py-5 h-[30px] md:w-[200px] md:h-[60px] rounded-[30px]">
              Read More
            </Link>
            <Link href={"/"} className="flex justify-center items-center gap-4">
              <div className="w-[60px] h-[60px] rounded-full bg-[#FF9F0D] flex justify-center items-center">
                <CiPlay1 className="h-[24px] w-[24px]" />
              </div>
              <h2 className="font-bold text-base">Play Video</h2>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RestaurantActive;
