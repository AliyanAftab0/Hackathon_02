import Image from "next/image";
import Link from "next/link";

const OurMenu = () => {
  return (
    <div className="max-w-[1320px] mx-auto py-10 space-y-10">
      <h1 className="text-[32px] text-primary text-center great-vibes">Choose & pick</h1>
      <h1 className="text-5xl font-bold text-white text-center">
        <span className="text-primary">Fr</span>om Our Menu
      </h1>

      {/* Menu Navigation */}
      <div className="flex space-x-20 my-6">
        {["Breakfast", "Lunch", "Dinner", "Dessert", "Drink", "Snack", "Soups"].map((category) => (
          <Link
            key={category}
            href={"/"}
            className="text-[20px] helvetica leading-[28px] text-white hover:font-bold hover:text-primary"
          >
            {category}
          </Link>
        ))}
      </div>

      {/* Menu Content */}
      <div className="flex items-start space-x-10 mt-10">
        {/* Left Image */}
        <div className="w-1/3">
          <Image
            src="/e1.png" // Replace with the actual image path
            alt="Menu Dish"
            width={515}
            height={406}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Menu Items */}
        <div className="w-2/3 grid grid-cols-2 gap-6">
          {[
            { name: "Lettuce Leaf", desc: "Lacus nisl, et ac dapibus velit in consequat.", price: "12.5$", img: "/e2.png" },
            { name: "Fresh Breakfast", desc: "Lacus nisl, et ac dapibus velit in consequat.", price: "14.5$", img: "/e3.png" },
            { name: "Mild Butter", desc: "Lacus nisl, et ac dapibus velit in consequat.", price: "12.5$", img: "/e4.png" },
            { name: "Fresh Bread", desc: "Lacus nisl, et ac dapibus velit in consequat.", price: "12.5$", img: "/e5.png" },
            { name: "Glow Cheese", desc: "Lacus nisl, et ac dapibus velit in consequat.", price: "12.5$", img: "/e6.png" },
            { name: "Italian Pizza", desc: "Lacus nisl, et ac dapibus velit in consequat.", price: "14.5$", img: "/e7.png" },
            { name: "Slice Beef", desc: "Lacus nisl, et ac dapibus velit in consequat.", price: "12.5$", img: "/e8.png" },
            { name: "Mushroom Pizza", desc: "Lacus nisl, et ac dapibus velit in consequat.", price: "12.5$", img: "/e9.png" },
          ].map((item, index) => (
            <div key={index} className="flex space-x-4">
              <Image
                src={item.img} // Replace with the actual image path
                alt={item.name}
                width={80}
                height={79}
                className="w-16 h-16 rounded-lg"
              />
              <div>
                <h3 className="text-lg font-bold text-white">{item.name}</h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
                <span className="text-primary font-bold">{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurMenu;
