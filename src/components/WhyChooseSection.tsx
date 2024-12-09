import Image from "next/image";
import { PiHamburgerThin } from "react-icons/pi";

const WhyChooseSection = () => {
  return (
    <div className="w-[1320px] h-[716px] flex justify-between items-center">
      <Image src={"/c.png"} width={650} height={250} alt="img" />
      <div className="space-y-7">
        <h1 className="great-vibes text-[32px] leading-[40px] text-primary">
          Why Choose us
        </h1>
        <h1 className="w-[451px] h-[112px] text-white font-bold helvetica text-5xl leading-[56px]">
          <span className="text-primary">Ex</span>tra ordinary taste And
          Experienced{" "}
        </h1>
        <p className="w-[526px] h-[120px] text-white text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
          augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis
          sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in
          consequat.
        </p>
        <div className="flex gap-5">
          <div>
            <div className="w-[95px] h-[93px] rounded-[6px] bg-primary flex justify-center items-center">
              <PiHamburgerThin className="w-[50px] h-[50px] text-white" />
            </div>
              <p className="text-white text-center text-lg">Fast Food</p>
          </div>
          <div>
            <div className="w-[95px] h-[93px] rounded-[6px] bg-primary flex justify-center items-center">
              <PiHamburgerThin className="w-[50px] h-[50px] text-white" />
            </div>
              <p className="text-white text-center text-lg">Lunch</p>
          </div>
          <div>
            <div className="w-[95px] h-[93px] rounded-[6px] bg-primary flex justify-center items-center">
              <PiHamburgerThin className="w-[50px] h-[50px] text-white" />
            </div>
              <p className="text-white text-center text-lg">Dinner</p>
          </div>
        </div>
        <div className="w-[325px] px-6 py-4 bg-white border-l-8 border-l-primary rounded-[6px] flex justify-center items-center gap-10">
            <h1 className="text-primary font-bold text-5xl helvetica">30+</h1>
            <div>
                <p className="text-[20px] text-[#1E1E1E]">Years of</p>
                <p className="text-2xl font-bold text-[#1E1E1E]">Experienced</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseSection;
