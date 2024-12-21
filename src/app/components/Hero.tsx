import React from "react";

import Image from "next/image";

import hero from "../../../public/hero1.png";
import Link from "next/link";
import { FaFacebookF, FaPinterestP, FaTwitter } from "react-icons/fa";

function Hero() {
  return (
    <section className="bg-black px-3 md:px-[135px] flex flex-col justify-evenly md:flex-row  md:items-center py-[50px]">
      {/* Heading */}
      <div className="hidden md:flex flex-col items-center space-y-4 mx-10">
        <div className="w-px h-[158px] bg-white"></div>
        <Link href="https://facebook.com" target="_blank">
          <FaFacebookF className="text-white hover:text-[#FF9F0D] transition duration-300" size={20} />
        </Link>
        <Link href="https://twitter.com" target="_blank">
          <FaTwitter className="text-white hover:text-[#FF9F0D] transition duration-300" size={20} />
        </Link>
        <Link href="https://pinterest.com" target="_blank">
          <FaPinterestP className="text-white hover:text-[#FF9F0D] transition duration-300" size={20} />
        </Link>
        <div className="w-px h-[158px] bg-white"></div>
      </div>
      <div className="text-white w-full md:w-[50%]">
        <h1 className="md:text-[32px] text-[24px] font-great text-[#FF9F0D] font whitespace-nowrap">
          Its Quick & Amusing!
        </h1>

        <h1 className="text-2xl md:leading-[3.5rem] md:text-[50px] font-bold md:w-[472px] whitespace-nowrap md:whitespace-normal">
          <span className="text-[#FF9F0D]">Th</span>e Art of speed food Quality
        </h1>

        <p className="text-[10px] md:text-[16px] md:w-[472px] font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
          pharetra dictum neque massa congue
        </p>

        <div className="flex flex-col md:flex-row items-center md:items-start">
          <Link href={"/"} className="bg-[#FF9F0D] text-white flex items-center justify-center w-[120px] h-[40px] md:w-[190px] md:h-[60px] rounded-[40px] mt-[32px] hover:bg-yellow-800">
            See More
          </Link>
        </div>
      </div>

      {/* Image */}

      <div className="mt-[50px] md:mt-0 ">
        <Image src={hero} alt="Hero Image" className="" />
      </div>
    </section>
  );
}

export default Hero;
