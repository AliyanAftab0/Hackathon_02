import Image from "next/image";

export default function Footer() {
  const posts = [
    { date: "20 Feb 2022", title: "Keep Your Business", imgSrc: "/j1.png" },
    { date: "20 Feb 2022", title: "Keep Your Business", imgSrc: "/j2.png" },
    { date: "20 Feb 2022", title: "Keep Your Business", imgSrc: "/j3.png" },
  ];

  return (
    <footer className="bg-[url('/footerbg.png')] bg-no-repeat z-10">
      {/* Overlay Section */}
      <div className="bg-[#0D0D0DF2] text-white font-inter">
        <div className="max-w-[1320px] px-5 sm:px-15 mx-auto">
          {/* Subscription Section */}
          <div className="max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-between items-center gap-8 py-12 border-b border-[#FF9F0D]">
            <div>
              <h3 className="font-helvetica text-2xl font-bold">
                <span className="text-[#FF9F0D]">St</span>ill Need Our Support?
              </h3>
              <p className="mt-2 text-base font-normal">
                Don’t wait—make a smart & logical quote here. It’s pretty easy.
              </p>
            </div>
            <form className="flex flex-col lg:flex-row items-center">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="p-3 rounded-l bg-[#FF9F0D] text-white placeholder-white/60 focus:outline-none"
              />
              <button
                type="submit"
                className="p-3 bg-white text-[#FF9F0D] font-semibold rounded-r hover:bg-[#FF9F0D] hover:text-white transition"
              >
                Subscribe Now
              </button>
            </form>
          </div>

          {/* Footer Content Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-8">
            {/* About Us Section */}
            <div>
              <h3 className="font-helvetica text-lg font-bold">About Us</h3>
              <p className="mt-4 text-sm font-normal">
                Corporate clients and leisure travelers rely on Groundlink for dependable, safe, and professional chauffeured car service in major cities worldwide.
              </p>
              <div className="flex items-center gap-4 mt-6">
                <div className="bg-[#FF9F0D] p-3 rounded">
                  <Image src="/j4.png" width={20} height={20} alt="Icon" />
                </div>
                <div>
                  <h4 className="text-sm font-medium">Opening Hours</h4>
                  <p className="text-xs">Mon - Sat (8:00 AM - 6:00 PM)</p>
                  <p className="text-xs">Sunday - Closed</p>
                </div>
              </div>
            </div>

            {/* Useful Links Section */}
            <div>
              <h3 className="font-helvetica text-lg font-bold">Useful Links</h3>
              <ul className="mt-4 space-y-2 text-sm">
                {["About", "News", "Partners", "Team", "Menu", "Contacts"].map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:underline">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Help Section */}
            <div>
              <h3 className="font-helvetica text-lg font-bold">Help</h3>
              <ul className="mt-4 space-y-2 text-sm">
                {["FAQ", "Terms & Conditions", "Reporting", "Documentation", "Support Policy", "Privacy"].map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:underline">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Posts Section */}
            <div>
              <h3 className="font-helvetica text-lg font-bold">Recent Posts</h3>
              <div className="mt-4 space-y-4">
                {posts.map((post, index) => (
                  <a href="#" key={index} className="flex items-center gap-4">
                    <div className="w-14 h-14">
                      <Image
                        src={post.imgSrc}
                        alt={post.title}
                        className="w-full h-full object-cover rounded"
                        width={55}
                        height={47}
                      />
                    </div>
                    <div>
                      <p className="text-xs font-normal text-gray-300">{post.date}</p>
                      <p className="text-sm font-medium">{post.title}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="bg-[#4F4F4F] text-white font-inter">
        <div className="max-w-[1320px] px-5 sm:px-15 py-5 flex flex-col lg:flex-row justify-between items-center">
          <p className="text-sm font-normal text-center lg:text-left mb-4 lg:mb-0">
            Copyright &copy; 2022 by Ayeman. All Rights Reserved.
          </p>
          <div className="flex gap-4">
            <Image src="/j5.png" width={200} height={200} alt="Social Links" />
          </div>
        </div>
      </div>
    </footer>
  );
}
