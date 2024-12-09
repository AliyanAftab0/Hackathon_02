import Image from "next/image"

const CategorySection = () => {
  return (
    <div className="w-[1320px] h-[489px] space-y-10">
        <h1 className="great-vibes text-[32px] text-primary text-center">Food Category</h1>
        <h1 className="text-white helvetica text-5xl font-bold text-center"><span>Ch</span>oose Food Iteam</h1>
        <div className="flex justify-center items-center gap-7">
            <Image src={"/b1.png"} width={305} height={328} alt="img" />
            <Image src={"/b2.png"} width={306} height={329} alt="img" />
            <Image src={"/b3.png"} width={306} height={329} alt="img" />
            <Image src={"/b4.png"} width={306} height={329} alt="img" />
        </div>
    </div>
  )
}

export default CategorySection