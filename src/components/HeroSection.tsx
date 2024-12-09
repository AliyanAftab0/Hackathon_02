import Image from "next/image";
import SideLinks from "./SideLinks";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex justify-center items-center space-x-16">
          <SideLinks />
          <div className="w-[472px] h-[356px] space-y-5 -mt-10">
            <h1 className="great-vibes text-primary text-[32px] leading-[40px]">
              Its Quick & Amusing!
            </h1>
            <h1 className="text-white font-bold helvetica text-6xl leading-[68px] w-[472px] h-[136px]">
              <span className="text-primary">Th</span>e Art of speed food
              Quality
            </h1>
            <p className="w-[418px] h-[48px] text-base text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Varius sed pharetra dictum neque massa congue</p>
            <Button className="text-base text-white rounded-full py-7 px-10">See Menu</Button>
          </div>
          <Image src={"/1.png"} width={877.8} height={670} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
