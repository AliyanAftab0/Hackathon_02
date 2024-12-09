import Image from "next/image";

const MeetOurChef = () => {
    return (
      <div className="py-10">
        <div className="max-w-[1320px] mx-auto text-center">
          {/* Heading */}
          <h1 className="text-[32px] text-primary great-vibes">Chefs</h1>
          <h2 className="text-5xl font-bold text-white">
            <span className="text-primary">Me</span>et Our Chef
          </h2>
        </div>
  
        {/* Chef Cards */}
        <div className="max-w-[1320px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 px-4">
          {[
            {
              
              image: "/f2.png", // Replace with actual image path
            },
            {
              image: "/f3.png", // Replace with actual image path
            },
            {
              image: "/f4.png", // Replace with actual image path
            },
            {
              image: "/f5.png", // Replace with actual image path
            },
          ].map((chef, index) => (
            <div
              key={index}
              className="bg-white rounded-[6px] shadow-lg overflow-hidden"
            >
              <Image
                src={chef.image}
                alt={"chef img"}
                width={312}
                height={391}
                className="object-cover"
              />
            </div>
          ))}
        </div>
  
        {/* See More Button */}
        <div className="text-center mt-8">
          <button className="bg-transparent text-white px-8 py-3 rounded-full border border-primary text-base">
            See More
          </button>
        </div>
      </div>
    );
  };
  
  export default MeetOurChef;
  