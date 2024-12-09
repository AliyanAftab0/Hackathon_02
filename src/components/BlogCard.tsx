import Image from "next/image";

const BlogCards = () => {
  const blogs = [
    {
      image: "/i1.png",
      date: "10 February 2022",
      title: "Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis",
    },
    {
      image: "/i2.png",
      date: "10 February 2022",
      title: "Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A",
    },
    {
      image: "/i3.png",
      date: "10 February 2022",
      title: "Curabitur rutrum velit ac congue malesuada",
    },
  ];

  return (
    <section className="bg-black text-white py-16">
      <div className="text-center mb-12">
        <p className="text-primary great-vibes text-[32px]">Blog Post</p>
        <h2 className="text-4xl font-bold">
          Latest <span className="text-primary">News & Blog</span>
        </h2>
      </div>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="relative h-[250px]">
              <Image
                src={blog.image}
                alt={blog.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-10 bg-[#0D0D0D] border">
              <p className="text-orange-500 text-sm">{blog.date}</p>
              <h3 className="text-lg text-white font-bold my-4">{blog.title}</h3>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-sm font-semibold text-white hover:underline"
                >
                  Learn More
                </a>
                <div className="flex gap-4 text-gray-500">
                  <Image src={"/i4.png"} width={76} height={20} alt="buttons" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogCards;
