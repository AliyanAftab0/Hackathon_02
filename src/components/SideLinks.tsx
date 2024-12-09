import Link from "next/link";
import { FaFacebookF, FaPinterestP, FaTwitter } from "react-icons/fa";

const SideLinks = () => {
  return (
    <div className="-translate-y-1/2 mt-[410px] flex flex-col items-center space-y-7">
      <div className="w-px h-[158px] bg-white"></div>
      <Link href="https://facebook.com" target="_blank">
        <FaFacebookF
          className="text-white hover:text-primary transition duration-300"
          size={20}
        />
      </Link>
      <Link href="https://twitter.com" target="_blank">
        <FaTwitter
          className="text-white hover:text-primary transition duration-300"
          size={20}
        />
      </Link>
      <Link href="https://pinterest.com" target="_blank">
        <FaPinterestP
          className="text-white hover:text-primary transition duration-300"
          size={20}
        />
      </Link>
      <div className="w-px h-[158px] bg-white"></div>
    </div>
  );
};

export default SideLinks;
