import React from "react";

import Image from "next/image";

import food1 from "./../../../public/food1.png";
import food2 from "./../../../public/food2.png";
import food3 from "./../../../public/food3.png";
import food4 from "./../../../public/food4.png";

function FoodCategory() {
  return (
    <>
      <section className="bg-black md:px-[135px] py-[50px]">
        <div className="flex flex-col justify-center items-center">
          <h1 className="md:text-[32px] text-[24px] font-great text-[#FF9F0D] whitespace-nowrap">
            Food Category
          </h1>
          <h1 className="text-[20px] text-white md:text-[50px] font-bold whitespace-nowrap md:whitespace-normal">
            <span className="text-[#FF9F0D]">Ch</span>oose Food Iteam
          </h1>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-[20px] mt-[50px]">
          <Image
            src={food1}
            alt=""
            className="w-[200px] md:w-[305px] md:h-[280px] cursor-pointer max-md:hover:scale-105 transition-all"
          />
          <Image
            src={food2}
            alt=""
            className="w-[200px] md:w-[280px] md:h-[280px] cursor-pointer max-md:hover:scale-105 transition-all"
          />
          <Image
            src={food3}
            alt=""
            className="w-[200px] md:w-[280px] md:h-[280px] cursor-pointer max-md:hover:scale-105 transition-all"
          />
          <Image
            src={food4}
            alt=""
            className="w-[200px] md:w-[280px] md:h-[280px] cursor-pointer max-md:hover:scale-105 transition-all"
          />
        </div>
      </section>
    </>
  );
}

export default FoodCategory;
