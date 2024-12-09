import { FaCheck } from "react-icons/fa";
import { Button } from "./ui/button";
import Image from "next/image";

const About = () => {
  const List = [
    {
      icon: <FaCheck className="w-[17px] h-[12.24px]" />,
      desc: "Lacus nisi, et ac dapibus sit eu velit in consequat.",
    },
    {
      icon: <FaCheck className="w-[17px] h-[12.24px]" />,
      desc: "Quisque diam pellentesque bibendum non dui volutpat fringilla ",
    },
    {
      icon: <FaCheck className="w-[17px] h-[12.24px]" />,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
  ];
  return (
    <div className="w-[1320px] h-[562px] flex justify-between items-center">
      <div className="w-[562px] h-[562px] space-y-6">
        <h1 className="great-vibes text-[32px] leading-[40px] text-primary w-[91px] h-[40px]">
          About us
        </h1>
        <h1 className="w-[446px] h-[110px] font-bold text-5xl leading-[56px] helvetica text-white">
          <span className="text-primary">We</span> Create the best foody product
        </h1>
        <p className="w-[526px] h-[130px] text-base text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
          augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis
          sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in
          consequat.
        </p>
        <ul>
          {List.map((list, i) => (
            <li key={i} className="text-white flex items-center gap-3 text-lg">
              {list.icon} {list.desc}
            </li>
          ))}
        </ul>
        <Button className="text-base text-white rounded-full py-7 px-10">
          Read More
        </Button>
      </div>
      <div className="flex flex-col gap-3">
        <Image src={"/a1.png"} width={660} height={330} alt="img" />
      <div className="grid grid-cols-2 w-[660px]">
        <Image src={"/a2.png"} width={322} height={194} alt="img" />
        <Image src={"/a3.png"} width={322} height={194} alt="img" />
      </div>
      </div> 
    </div>
  );
};

export default About;
