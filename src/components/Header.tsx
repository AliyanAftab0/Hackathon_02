import Link from "next/link";
import Image from "next/image";
import { Input } from "./ui/input";
import { LuSearch } from "react-icons/lu";
import { HiOutlineShoppingBag } from "react-icons/hi";

const Header = () => {
  const Links = [
    { name: "Home" },
    { name: "Menu" },
    { name: "Blog" },
    { name: "Pages" },
    { name: "About" },
    { name: "Shop" },
    { name: "Contact" },
  ];
  return (
    <div className="w-full h-[87px] pt-10 px-[300px] bg-[#0D0D0D] flex justify-between items-center">
      <div className="flex items-center justify-center space-x-7 mt-10">
        {Links.map((link, i) => (
          <Link
            key={i}
            href="/"
            className="pt-[48px] font-normal text-base text-white group"
          >
            {link.name}{" "}
            <div className="w-[7px] h-[7px] group-hover:bg-primary mx-auto pt-1 group-hover:rounded-full"></div>
          </Link>
        ))}
      </div>
      <Image src={"/Foodtuck.png"} width={109} height={32} alt="logo" className="mb-10" />
      <div className="flex justify-center items-center space-x-2 mt-14">
        <div className="w-[310px] h-[54px] rounded-[27px] border-primary border flex justify-between items-center px-4">
          <Input className="w-[90px] h-[24px] font-normal text-base text-white outline-none border-black bg-transparent" placeholder="Search..." />
          <LuSearch className="w-6 h-6 text-white" />
        </div>
        <HiOutlineShoppingBag className="w-6 h-6 text-white" />
      </div>
    </div>
  );
};

export default Header;
