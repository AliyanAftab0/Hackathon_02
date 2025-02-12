import React from "react";

import Image from "next/image";

import { FaCheck } from "react-icons/fa6";

import pic1 from "../../../public/about1.png";
import pic2 from "../../../public/about2.png";
import pic3 from "../../../public/about3.png";
import Link from "next/link";

function AbountUs() {
  return (
    <section className="bg-black px-3 xl:px-[135px] flex flex-col justify-evenly xl:flex-row md:items-center py-[50px]">
      {/* Heading */}
      <div className="text-white w-full md:w-[50%]">
        <h1 className="md:text-[32px] text-[24px] font-normal text-[#FF9F0D] font whitespace-nowrap font-great">
          About us
        </h1>

        <h1 className="text-[20px] md:text-[50px] font-bold  md:whitespace-normal">
          <span className="text-[#FF9F0D]">We</span> Create the best foody
          product
        </h1>

        <p className="text-[10px] md:text-[16px] font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
          augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis
          sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in
          consequat.
        </p>

        <ul>
          <li className="text-[10px] md:text-[16px] font-normal mt-10 flex text-center">
            <span className="mr-[1px] lg:mr-[10px]">
              <FaCheck />
            </span>{" "}
            Lacus nisi, et ac dapibus sit eu velit in consequat.
          </li>
          <li className="text-[10px] md:text-[16px] font-normal mt-10 flex text-center">
            <span className="mr-[1px] lg:mr-[10px]">
              <FaCheck />
            </span>{" "}
            Quisque diam pellentesque bibendum non dui volutpat fringilla{" "}
          </li>
          <li className="text-[10px] md:text-[16px] font-normal mt-10 flex text-center">
            <span className="mr-[1px] lg:mr-[10px]">
              <FaCheck />
            </span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </li>
        </ul>

        <div className="flex flex-col md:flex-row items-center mb-10 md:items-start">
          <Link href={"/about"} className="bg-[#FF9F0D] text-white flex items-center justify-center w-[120px] h-[40px] md:w-[190px] md:h-[60px] rounded-[40px] mt-[32px] hover:bg-yellow-800">
            See More
          </Link>
        </div>
      </div>

      {/* Image */}

      <div className="flex flex-col justify-center items-center mt-[50px] md:mt-0 ml-0 md:ml-[20px]">
        <Image src={pic1} alt="Hero Image" className="w-[200px] xl:w-[660px] h-[130px] xl:h-[330px] max-md:hover:scale-105 transition-all rounded-lg" />
        <div className="flex flex-col xl:flex-row mt-[16px] lg:mt-[0] px-5 md:px-0">
          <Image src={pic2} alt="Hero Image" className="mr-[16px] pt-[40px] max-md:hover:scale-105 transition-all" />
          <Image src={pic3} alt="Hero Image" className="pt-[40px] max-md:hover:scale-105 transition-all" />
        </div>
      </div>
    </section>
  );
}

export default AbountUs;
