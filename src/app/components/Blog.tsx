import React from "react";

import Image from "next/image";

import { AiOutlineLike } from "react-icons/ai";
import { RiMessage2Line } from "react-icons/ri";
import { FiShare2 } from "react-icons/fi";
import Link from "next/link";

function Blog() {
    const posts = [
        {
            id: 1,
            date: "10 February 2022 ",
            title: "Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis",
            imageSrc: "/b2.0.png",
            height: 300,
            width: 423
        },
        {
            id: 2,
            date: "10 February 2022 ",
            title: "Morbi Sodales Tellus Elit In Blandit Risus Suscipit A",
            imageSrc: "/b2.1.png",
            height: 349,
            width: 423
        },
        {
            id: 3,
            date: "10 February 2022 ",
            title: "Curabitur rutrum velit ac congue malesuada",
            imageSrc: "/b2.2.png",
            height: 349,
            width: 423
        },
    ];
    return (
        <section className="bg-black md:px-[135px] py-[120px]">
            <div className="flex flex-col justify-center items-center">
                <h1 className="md:text-[32px] text-[24px] font-normal text-[#FF9F0D] font whitespace-nowrap font-great">
                    Food Category
                </h1>
                <h1 className="text-[20px] text-white md:text-[50px] font-bold whitespace-nowrap md:whitespace-normal">
                    <span className="text-[#FF9F0D]">Ch</span>oose Food Iteam
                </h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 flex-grow mt-[59px]">
                {posts.map((post) => (
                    <div key={post.id} className="w-[330px] xl:w-[330px] mb-8 mx-auto">
                        <Image
                            src={post.imageSrc}
                            alt={post.title}
                            width={post.width}
                            height={post.height}
                        />
                        <div className="border">
                            <h2 className="text-[#FF9F0D] text-[16px] font-normal mt-[30px] px-[43px]">{post.date}</h2>
                            <h2 className="text-white text-[24px] font-bold px-[43px] mt-[16px]">{post.title}</h2>
                            <div className="text-white flex justify-between px-[43px] my-[32px]">
                                <Link href={"/blogdetail"} className="hover:text-[#FF9F0D] cursor-pointer">Learn More</Link>
                                <div className="flex gap-[8px]">
                                    <AiOutlineLike className="hover:text-[#FF9F0D] cursor-pointer" />
                                    <RiMessage2Line className="hover:text-[#FF9F0D] cursor-pointer" />
                                    <FiShare2 className="hover:text-[#FF9F0D] cursor-pointer" />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>

    )
}

export default Blog;
