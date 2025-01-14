import React from "react";
import Image from "next/image";

import extra from "../../../public/c.png";

import experience from "../../../public/30Year.png"
import { PiCookie, PiHamburger, PiWineBold } from "react-icons/pi";
const Home = () => {
  return (
    <>
      {/* Left  */}
      <section className="flex flex-row justify-between md:space-x-10 items-center bg-black py-[120px] px-3 md:px-[240px]">
        <div>
          <div className="col-span-2 row-span-1 relative hidden lg:flex">
            <Image
              src={extra}
              alt="img"
              className="object-cover 2xl:w-[660px] h-full"
            />
          </div>
        </div>

        {/* right */}
        <div className="bg-black">
          <div className="mt-[50]">
            <h3 className="text-[#FF9F0D] text-2xl font-great mb-[35]">Why Choose us</h3>
            <h1 className="text-white lg:w-[557px] text-4xl lg:text-6xl font-bold mb-7">
              <span className="text-[#FF9F0D]">Ex</span>tra ordinary taste
              And Experienced{" "}
            </h1>
            <p className="text-gray-200 lg:w-[580px] mb-14 text-base lg:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam
              pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit augue urna, vitae feugiat pretium donec id
              elementum. Ultrices mattis sed vitae mus risus. Lacus nisi,
              et ac dapibus sit eu velit in consequat.
            </p>

            <div className="flex justify-start items-center gap-5 mb-5">
              <div className="text-center">
              <div className="bg-[#FF9F0D] text-white p-2 rounded-md">
                <PiHamburger size={56} />
              </div>
              <p className="text-white">
                Fast Food
              </p>
              </div>
              <div className="text-center">
              <div className="bg-[#FF9F0D] text-white p-2 rounded-md">
                <PiCookie size={56} />
              </div>
              <p className="text-white">
                Lunch
              </p>
              </div>
              <div className="text-center">
              <div className="bg-[#FF9F0D] text-white p-2 rounded-md">
                <PiWineBold size={56} />
              </div>
              <p className="text-white">
                Dinner
              </p>
              </div>
            </div>

            <Image
              src={experience}
              alt="experience"
              width={374}
              height={93}
              className="w-[270px] md:w-[347px] md:h-[93px]"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
