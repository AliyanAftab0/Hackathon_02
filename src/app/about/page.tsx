"use client"

import Image from "next/image";
import upper from "../../../public/about1.png";
import main from "./../../../public/aboutcopy.png";
import third from "../../../public/about5.png";
import student from "../../../public/Student.png";
import coffee from "../../../public/Coffee.png";
import person from "../../../public/Person.png";
import Link from "next/link";
import { CiPlay1 } from "react-icons/ci";
import { Card, CardContent } from "@/components/ui/card";
import review1 from "../../../public/Reviewslider1.png";
import review2 from "../../../public/Reviwslider2.png";
import review3 from "../../../public/Reviewslider3.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    image: review1,
    width: 200,
    hieght: 200
  },
  {
    id: 2,
    image: review2,
    width: 300,
    hieght: 300
  },
  {
    id: 3,
    image: review3,
    width: 300,
    hieght: 300
  },
];

const links = [
  { name: "Breakfast" },
  { name: "Lunch" },
  { name: "Dinner" },
  { name: "Dessert" },
  { name: "Drink" },
  { name: "Snack" }
]

export default function About() {
  return (
    <div>
      {/* First Section: Image and Breadcrumb */}
      <div className="relative font-[sans-serif] before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
        <Image
          src={upper}
          alt="Banner Image"
          className="absolute inset-0 w-full h-full object-cover"
          layout="fill"
        />
        <div className="min-h-[350px] relative z-50 max-w-4xl mx-auto flex flex-col justify-center items-center text-center p-6">
          <h2 className="text-white md:text-5xl text-3xl font-bold mb-8">
            About Us
          </h2>
          <div className="flex items-center space-x-2 text-black">
            <a href="/" className="text-white">Home</a>
            <span className="text-white"> &gt; </span>
            <a href="/about" className="text-orange-500">About</a>
          </div>
        </div>
      </div>

      {/* Second Section: Content and Links */}
      <section className="text-black body-font bg-white">
        <div className="container mx-auto flex px-5 py-24 space-x-10 items-center justify-center">
          <div className="w-full md:w-3/10 hidden md:flex flex-col space-y-4 mt-10">
            <Image
              className="object-cover object-center md:w-[500px] md:h-[734px] 2xl:w-[669px] rounded-lg"
              alt="hero"
              src={main}
              layout="intrinsic"
            />
          </div>
          <div className="w-full md:w-7/10 flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="text-sm mb-4 font-medium text-yellow-400 italic">
              About us _____
            </h1>
            <p className="text-black title-font text-3xl font-bold">
              Food is an important part of a balanced Diet
            </p>
            <p className="mb-8 leading-relaxed mt-8 text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit augue urna, vitae feugiat pretium donec id elementum.
              Ultrices mattis vitae mus risus. Lacus nisi, et ac dapibus sit eu
              velit in consequat.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <Link href={"/about/"} className="inline-flex justify-center items-center text-white bg-orange-400 border-0 py-2 px-3 focus:outline-none rounded text-lg">
                Show More
              </Link>
              <Link href={"/"} className="flex justify-center items-center gap-4">
                <div className="w-[60px] h-[60px] rounded-full bg-[#FF9F0D] flex justify-center items-center">
                  <CiPlay1 className="h-[24px] w-[24px] text-white" />
                </div>
                <h2 className="font-bold text-base">Watch Video</h2>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Third Section: Why Choose Us */}
      <section className="text-black body-font bg-white">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <h1 className="text-black max-sm:text-center text-5xl font-bold mt-3 mb-6">Why Choose Us</h1>
          <p className="text-center mb-8 text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum.
          </p>
          <Image
            className="mb-10  w-full md:w-3/4 lg:w-2/3 h-[300px] md:h-[400px] 2xl:h-[686px] 2xl:w-[1920px]"
            alt="Why Choose Us"
            src={"/a1.png"}
            width={1320}
            height={386}
          />
          <section className="text-black body-font bg-white">
            <div className="container px-3 py-20 mx-auto">
              <div className="flex flex-wrap -m-4">
                {/* Features */}
                {[{ img: student, title: "BEST CHEF" }, { img: coffee, title: "120 Item Food" }, { img: person, title: "Clean Environment" }].map((feature, index) => (
                  <div className="p-4 md:w-1/3" key={index}>
                    <div className="h-full overflow-hidden flex flex-col justify-center items-center">
                      <Image
                        className="h-20 w-20 object-cover object-center"
                        src={feature.img}
                        alt={feature.title}
                        width={80}
                        height={80}
                        layout="intrinsic"
                      />
                      <div className="p-6">
                        <h1 className="title-font text-lg font-medium text-black mb-2 text-bold text-center">
                          {feature.title}
                        </h1>
                        <p className="leading-relaxed mb-3 text-center text-black">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat.
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>
      <Image
        className="mb-10 object-cover object-center w-full md:w-3/4 lg:w-2/3 h-[300px] md:h-[400px] 2xl:h-[686px] 2xl:w-[1920px] rounded-lg"
        alt="Why Choose Us"
        src={third}
        width={1320}
        height={480}
      />

      {/* Testimonials Section */}
      <section className="px-5 md:px-[135px] py-[120px] bg-white">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="text-[#FF9F0D] font-great text-[20px] md:text-[32px]">
            Testimonials
          </h2>
          <h2 className="font-bold text-[25px] md:text-[48px]">
            What our clients are saying
          </h2>
        </div>

        {/* Carousel */}
        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent className="carousel-content">
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="carousel-item p-4">
                <Card className="border-2 rounded-lg overflow-hidden">
                  {/* Client Image */}
                  <Image
                    className="w-full h-64 object-cover"
                    src={testimonial.image}
                    alt={"Reviews"}
                    width={testimonial.width}
                    height={testimonial.hieght}
                    layout="responsive"
                  />
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Dots Pagination */}
          <div className="flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${index === 0
                  ? "bg-[#FF9F0D]"
                  : "bg-gray-300 hover:bg-[#FF9F0D]"
                  }`}
                onClick={() => {
                  // Add logic to navigate to the corresponding slide
                  document.querySelector(`.carousel-item:nth-child(${index + 1})`)?.scrollIntoView({
                    behavior: "smooth",
                    block: "nearest",
                    inline: "start",
                  });
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </Carousel>
      </section>
      <section className="w-full max-w-7xl mx-auto flex flex-col mb-20 items-center justify-center space-y-7">
        <div className="space-y-3">
          <h1 className="helvetica font-bold text-5xl text-black text-center">Our Food Menu</h1>
          <p className="text-base text-[#4F4F4F] text-center md:w-[418px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Varius sed pharetra dictum neque massa congue</p>
        </div>
        <div className="text-lg flex flex-wrap text-[#4F4F4F] space-x-8">
          {links.map((link: any, i: number) => (
            <Link href={"/"} key={i} className="hover:text-[#FF9F0D] hover:border-b-4 hover:border-b-[#FF9F0D] pb-8">{link.name}</Link>
          ))}
        </div>
        <div className="h-[1px] w-full bg-[#E0E0E0] -mt-5"></div>
        <div className="grid place-content-between grid-cols-1 lg:grid-cols-2">
          <div className="flex justify-between space-x-20 cursor-pointer my-5 mx-10 border-b pb-5">
            <div>
              <h1 className="text-[#333333] hover:text-[#FF9F0D] font-bold text-2xl helvetica">Alder Grilled Chinook Salmon</h1>
              <p className="text-base text-[#4F4F4F] helvetica">Toasted French bread topped with romano, cheddar</p>
              <p className="text-[#828282] text-base helvetica">560 CAL</p>
            </div>
            <div>
              <h5 className="text-2xl text-[#FF9F0D] font-bold helvetica">32$</h5>
            </div>
          </div>
          <div className="flex justify-between space-x-20 cursor-pointer my-5 mx-10 border-b pb-5">
            <div>
              <h1 className="text-[#333333] hover:text-[#FF9F0D] font-bold text-2xl helvetica">Alder Grilled Chinook Salmon</h1>
              <p className="text-base text-[#4F4F4F] helvetica">Toasted French bread topped with romano, cheddar</p>
              <p className="text-[#828282] text-base helvetica">560 CAL</p>
            </div>
            <div>
              <h5 className="text-2xl text-[#FF9F0D] font-bold helvetica">32$</h5>
            </div>
          </div>
          <div className="flex justify-between space-x-20 cursor-pointer my-5 mx-10 border-b pb-5">
            <div>
              <h1 className="text-[#333333] hover:text-[#FF9F0D] font-bold text-2xl helvetica">Alder Grilled Chinook Salmon</h1>
              <p className="text-base text-[#4F4F4F] helvetica">Toasted French bread topped with romano, cheddar</p>
              <p className="text-[#828282] text-base helvetica">560 CAL</p>
            </div>
            <div>
              <h5 className="text-2xl text-[#FF9F0D] font-bold helvetica">32$</h5>
            </div>
          </div>
          <div className="flex justify-between space-x-20 cursor-pointer my-5 mx-10 border-b pb-5">
            <div>
              <h1 className="text-[#333333] hover:text-[#FF9F0D] font-bold text-2xl helvetica">Alder Grilled Chinook Salmon</h1>
              <p className="text-base text-[#4F4F4F] helvetica">Toasted French bread topped with romano, cheddar</p>
              <p className="text-[#828282] text-base helvetica">560 CAL</p>
            </div>
            <div>
              <h5 className="text-2xl text-[#FF9F0D] font-bold helvetica">32$</h5>
            </div>
          </div>
          <div className="flex justify-between space-x-20 cursor-pointer my-5 mx-10 border-b pb-5">
            <div>
              <h1 className="text-[#333333] hover:text-[#FF9F0D] font-bold text-2xl helvetica">Alder Grilled Chinook Salmon</h1>
              <p className="text-base text-[#4F4F4F] helvetica">Toasted French bread topped with romano, cheddar</p>
              <p className="text-[#828282] text-base helvetica">560 CAL</p>
            </div>
            <div>
              <h5 className="text-2xl text-[#FF9F0D] font-bold helvetica">32$</h5>
            </div>
          </div>
          <div className="flex justify-between space-x-20 cursor-pointer my-5 mx-10 border-b pb-5">
            <div>
              <h1 className="text-[#333333] hover:text-[#FF9F0D] font-bold text-2xl helvetica">Alder Grilled Chinook Salmon</h1>
              <p className="text-base text-[#4F4F4F] helvetica">Toasted French bread topped with romano, cheddar</p>
              <p className="text-[#828282] text-base helvetica">560 CAL</p>
            </div>
            <div>
              <h5 className="text-2xl text-[#FF9F0D] font-bold helvetica">32$</h5>
            </div>
          </div>
          <div className="flex justify-between space-x-20 cursor-pointer my-5 mx-10 border-b pb-5">
            <div>
              <h1 className="text-[#333333] hover:text-[#FF9F0D] font-bold text-2xl helvetica">Alder Grilled Chinook Salmon</h1>
              <p className="text-base text-[#4F4F4F] helvetica">Toasted French bread topped with romano, cheddar</p>
              <p className="text-[#828282] text-base helvetica">560 CAL</p>
            </div>
            <div>
              <h5 className="text-2xl text-[#FF9F0D] font-bold helvetica">32$</h5>
            </div>
          </div>
          <div className="flex justify-between space-x-20 cursor-pointer my-5 mx-10 border-b pb-5">
            <div>
              <h1 className="text-[#333333] hover:text-[#FF9F0D] font-bold text-2xl helvetica">Alder Grilled Chinook Salmon</h1>
              <p className="text-base text-[#4F4F4F] helvetica">Toasted French bread topped with romano, cheddar</p>
              <p className="text-[#828282] text-base helvetica">560 CAL</p>
            </div>
            <div>
              <h5 className="text-2xl text-[#FF9F0D] font-bold helvetica">32$</h5>
            </div>
          </div>
        </div>
          <Link href={"/"} className="text-[#FF9F0D] border-[#FF9F0D] text-center p-2 border w-28 mx-auto hover:bg-[#FF9F0D] hover:text-white">
            View menu
          </Link>
      </section>
    </div >
  );
}
