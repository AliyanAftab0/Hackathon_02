"use client"
import React, { useEffect, useState } from "react";

import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

interface Chef {
  name: string;
  position: string;
  specialty: string;
  image: string;
  experience: number;
  description: string;
  available: string;
}

const ChefGrid = () => {
  const revalidate = 10;
  const query = `*[_type == "chef" && available == true] {
  name,
  position,
  specialty,
  experience,
  description,
  available,
  image
}`

  const [chefs, setChefs] = useState<Chef[]>([]);

  useEffect(() => {
    const fetchChefs = async () => {
      const data = await client.fetch(query);
      setChefs(data);
      console.log(data);
    };
    
    fetchChefs();
  }, []);

  return (
    <section>
    <div
    className="relative h-72 md:h-96 flex items-center justify-center bg-cover bg-center"
    style={{ backgroundImage: "url('/hero.png')" }}
  >
    <div className="text-center text-white px-4 md:px-8">
      <h1 className="text-3xl md:text-4xl font-bold">Our Chef</h1>
      <nav className="mt-2 text-xs md:text-sm">
        <a href="/" className="text-gray-300 hover:text-yellow-500">
          Home
        </a>
        <span className="mx-2 text-yellow-500">{'>'}</span>
        <span className="text-yellow-500">Chef</span>
      </nav>
    </div>
  </div>

    <div className="p-6 mt-20"> {/* Adding mt-20 for margin top */}
      {/* Grid with responsive columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-6 2xl:px-[240px]">
        {chefs.map((chef, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-lg shadow-lg bg-white flex flex-col m-auto w-[400px] transition-transform transform hover:scale-105 hover:shadow-xl ${
              index === 6
            }`}
          >
            {/* Chef Image */}
            <div className="flex-1">
              <Image
                src={urlFor(chef.image).url()}
                alt={chef.name}
                width={400}
                height={400}
                className="object-cover rounded-t-lg"
              />
            </div>

            {/* Static Information Section Below Image */}
            <div className="p-4">
              <h3 className="text-gray-800 font-bold text-lg">Name: {chef.name}</h3>
              <p className="font-bold text-gray-600 text-sm">Speciality: {chef.specialty}</p>
              <h3 className="text-gray-600 font-bold text-sm">Position: {chef.position}</h3>
              <p className="font-bold text-gray-600 text-sm">Experience: {chef.experience}</p>
              <p className="font-bold text-gray-600 text-sm">Description: {chef.description}</p>
              <h3 className="text-gray-600 font-bold text-sm">Available: {chef.available}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default ChefGrid;