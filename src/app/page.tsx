"use client";

// import React from 'react'
import Hero from "./components/Hero";
import AbountUs from "./components/AbountUs";
import FoodCategory from "./components/FoodCategory";
import Items from "./components/Items";
import MeetShef from "./components/MeetShef";
import MenuItem from "./components/MenuItem";
import RestaurantActive from "./components/RestaurantActive";
import Blog from "./components/Blog";
import Testimonials from "./components/Testimonials";
import ExtraTaste from './components/ExtraTaste';
import MainNav from "./components/MainNav";


function page() {
  return (
    <>
      <MainNav />
      <Hero />
      <AbountUs />
      <FoodCategory />
      <ExtraTaste />
      <Items />
      <MenuItem />
      <MeetShef />
      <Testimonials />
      <RestaurantActive />
      <Blog />
    </>
  );
}

export default page;
