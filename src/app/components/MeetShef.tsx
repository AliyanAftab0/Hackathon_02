import React from "react";

import Image from "next/image";

import chef1 from "../../../public/Card1.png";
import chef2 from "../../../public/Card2.png";
import chef3 from "../../../public/Card3.png";
import chef4 from "../../../public/Card4.png";
import Link from "next/link";


function MeetShef() {
  return (
    <div className="bg-black flex flex-col justify-center items-center">
      <section className="md:px-[135px] py-[50px]">
        <div className="flex flex-col justify-center items-center">
          <h1 className="md:text-[32px] text-[24px] font-normal text-[#FF9F0D] whitespace-nowrap font-great">
            Chefs
          </h1>
          <h1 className="text-[20px] text-white md:text-[50px] font-bold whitespace-nowrap md:whitespace-normal">
            <span className="text-[#FF9F0D]">Me</span>et Our Chef
          </h1>
        </div>
        <div className="flex flex-col xl:flex-row justify-center items-center gap-[20px] mt-[50px]">
          <Image src={chef1} alt="" className="w-[200px] md:w-[305px] md:h-[400px] cursor-pointer hover:scale-105 transition-all" />
          <Image src={chef2} alt="" className="w-[200px] md:w-[280px] md:h-[400px] cursor-pointer hover:scale-105 transition-all" />
          <Image src={chef3} alt="" className="w-[200px] md:w-[280px] md:h-[400px] cursor-pointer hover:scale-105 transition-all" />
          <Image src={chef4} alt="" className="w-[200px] md:w-[280px] md:h-[400px] cursor-pointer hover:scale-105 transition-all" />
        </div>
      </section>
      <Link href={"/chef"} className="border border-[#FF9F0D] flex items-center justify-center w-[120px] h-[40px] md:w-[200px] md:h-[60px] rounded-[30px] text-white mb-5">
        See More
      </Link>
    </div>
  );
}

export default MeetShef;
