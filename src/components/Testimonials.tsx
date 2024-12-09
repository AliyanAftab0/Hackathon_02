import Image from "next/image";

const Testimonials = () => {
  return (
    <div className="py-16 px-6">
      <div className="max-w-[1320px] mx-auto">
        {/* Section Heading */}
        <h1 className="text-[32px] text-primary great-vibes mb-2">
          Testimonials
        </h1>
        <h2 className="text-5xl font-bold text-white">
          What our client <span className="text-primary">are saying</span>
        </h2>
      </div>

      {/* Testimonial Card */}
      <div className="bg-white p-[50px] max-w-[860px] lg:h-[450px] mx-auto mt-20 shadow-xl rounded-lg relative">
        {/* Profile Image */}
        <div className="w-[133px] h-[133px] mx-auto transform mt-[-125px] z-30">
          <Image
            src="/g1.png"
            alt="Client Profile - Alamin Hasan"
            width={133}
            height={133}
            className="w-[100%] h-[100%] object-contain rounded-[50%]"
            priority
          />
        </div>

        {/* Testimonial Content */}
        <div className="flex flex-col gap-[20px] items-center">
          {/* Quote Icon */}
          <div>
            <Image src="/quotes.png" alt="Quotes" width={50} height={50} />
          </div>

          {/* Testimonial Text */}
          <p
            className="m-0 text-center text-[18px] font-normal lg:w-[75%] mx-auto"
            style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, elit augue urna, vitae feugiat pretium donec id elementum.
            Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
            eu velit in consequat.
          </p>

          {/* Star Rating */}
          <div className="flex gap-[10px]">
            <i className="text-[#FF9F0D] bi bi-star-fill"></i>
            <i className="text-[#FF9F0D] bi bi-star-fill"></i>
            <i className="text-[#FF9F0D] bi bi-star-fill"></i>
            <i className="text-[#FF9F0D] bi bi-star-fill"></i>
            <i className="text-[#E0E0E0] bi bi-star-fill"></i>
          </div>

          {/* Client Info */}
          <h5
            className="font-bold text-[24px] text-[#333333] helvetica"
          >
            Alamin Hasan
          </h5>
          <p
            className="m-0 text-[#828282] text-[16px] font-normal helvetica"
          >
            Food Specialist
          </p>
        </div>
      </div>
      {/* Pagination */}
      <div className="flex justify-center space-x-2 mt-8">
        {Array(4)
          .fill(null)
          .map((_, index) => (
            <button
              key={index}
              aria-label={`Go to testimonial ${index + 1}`}
              className={`${
                index === 0 ? "bg-primary" : "bg-gray-500"
              } w-3 h-3 rounded-full focus:ring-2 focus:ring-offset-2 focus:ring-primary`}
            ></button>
          ))}
      </div>
    </div>
  );
};

export default Testimonials;
