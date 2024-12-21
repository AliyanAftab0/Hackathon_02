import Image from "next/image";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import footer1 from "./../../../public/j1.png"
import footer2 from "./../../../public/j3.png"
import footer3 from "./../../../public/j1.png"


export default function Footer() {
  const Posts = [
    { date: '20 Feb 2022', title: 'Keep Your Business', imgSrc: footer1 },
    { date: '20 Feb 2022', title: 'Keep Your Business', imgSrc: footer2 },
    { date: '20 Feb 2022', title: 'Keep Your Business', imgSrc: footer3 },
  ];

  return (
    <footer className="bg-[url('/footerbg.png')] bg-no-repeat bg-cover text-white font-inter">
      {/* Overlay */}
      <div className="bg-[#000000]">
        <div className="max-w-[1320px] mx-auto px-6">
          {/* Support Section */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 py-10 border-b border-[#FF9F0D]">
            <div>
              <h3 className="text-2xl font-bold font-helvetica">
                <span className="text-[#FF9F0D]">St</span>ill You Need Our Support?
              </h3>
              <p className="text-sm mt-2">
                Don’t wait—make a smart & logical quote here. It&apos;s pretty easy.
              </p>
            </div>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="md:px-4 md:py-3 p-2 md:w-[247px] md:h-[48px] bg-[#FF9F0D] text-white placeholder-white/60 rounded-l"
              />
              <button
                type="submit"
                className="md:px-5 md:py-3 p-2 md:w-[157.5px] md:h-[48px] bg-white text-[#FF9F0D] text-sm md:text-base font-semibold rounded-r"
              >
                Subscribe Now
              </button>
            </form>
          </div>

          {/* Footer Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-10">
            {/* About Section */}
            <div>
              <h3 className="text-lg font-bold font-helvetica mb-4">About Us</h3>
              <p className="text-sm leading-relaxed">
                Corporate clients and leisure travelers rely on Groundlink for dependable,
                safe, and professional chauffeured car service in major cities worldwide.
              </p>
              <div className="flex items-center gap-4 mt-6">
                <div className="bg-[#FF9F0D] p-3 rounded">
                  <Image src={"/j4.png"} width={20} height={20} alt="Clock Icon" />
                </div>
                <div>
                  <h4 className="text-sm font-medium">Opening Hours</h4>
                  <p className="text-xs">Mon - Sat (8:00 AM - 6:00 PM)</p>
                  <p className="text-xs">Sunday - Closed</p>
                </div>
              </div>
            </div>

            {/* Useful Links */}
            <div>
              <h3 className="text-lg font-bold font-helvetica mb-4">Useful Links</h3>
              <ul className="space-y-2 text-sm">
                {['About', 'News', 'Partners', 'Team', 'Menu', 'Contacts'].map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-[#FF9F0D]">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Help Section */}
            <div>
              <h3 className="text-lg font-bold font-helvetica mb-4">Help?</h3>
              <ul className="space-y-2 text-sm">
                {[
                  'FAQ',
                  'Term & Conditions',
                  'Reporting',
                  'Documentation',
                  'Support Policy',
                  'Privacy',
                ].map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-[#FF9F0D]">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Posts */}
            <div>
              <h3 className="text-lg font-bold font-helvetica mb-4">Recent Post</h3>
              <div className="space-y-4">
                {Posts.map((post, index) => (
                  <a key={index} href="#" className="flex items-center gap-4">
                    <Image
                      src={post.imgSrc}
                      alt={post.title}
                      width={60}
                      height={60}
                      className="rounded w-14 h-14 object-cover"
                    />
                    <div>
                      <p className="text-xs text-gray-300">{post.date}</p>
                      <p className="text-sm font-medium">{post.title}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-[#4F4F4F]">
        <div className="max-w-[1320px] mx-auto px-6 py-4 flex flex-col lg:flex-row justify-between items-center">
          <p className="text-sm text-gray-300 text-center lg:text-left">
            Copyright &copy; 2022 by Ayeman. All Rights Reserved.
          </p>
          <div className="flex gap-4 mt-4 lg:mt-0">
            <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-[#FF9F0D] transition-colors">
              <FaFacebook size={24} />
            </a>
            <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-[#FF9F0D] transition-colors">
              <FaInstagram size={24} />
            </a>
            <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-[#FF9F0D] transition-colors">
              <FaTwitter size={24} />
            </a>
            <a href="#" aria-label="YouTube" className="text-gray-400 hover:text-[#FF9F0D] transition-colors">
              <FaYoutube size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
