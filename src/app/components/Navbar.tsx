"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { IoBagHandle } from "react-icons/io5";
import { HiMenuAlt3, } from "react-icons/hi";
import LoadingBar from "react-top-loading-bar";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Heart } from "lucide-react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    setProgress(30);
    setTimeout(() => setProgress(70), 100);
    setTimeout(() => setProgress(100), 800);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setProgress(0), 900);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const routes = {
    Home: "/",
    Menu: "/menu",
    Blog: "/blogdetail",
    About: "/about",
    Shop: "/shoplist",
    Page: "/faq",
    Contact: "/chef",
  };

  const handleLinkClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
  };


  return (
    <nav className="bg-black text-white p-4 w-full">
      <LoadingBar color="#FF9F0D" progress={progress} onLoaderFinished={() => setProgress(0)} />
      <section className="flex items-center justify-between px-4 lg:px-[135px]">
        {/* Logo */}
        <div className="text-2xl font-bold md:hidden">
          <Link href="/" aria-label="Navigate to Home">
            <span className="text-[#FF9F0D]">Food</span>tuck
          </Link>
        </div>

        {/* Hamburger Menu */}
        <div className="flex gap-2 lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <div
                className="text-[#FF9F0D] md:hidden cursor-pointer"
                aria-label="Open menu"
                aria-expanded="false"
              >
                <HiMenuAlt3 className="w-6 h-6" />
              </div>
            </SheetTrigger>
            <SheetContent side="bottom" className="p-6 bg-black text-white">
              <SheetHeader>
              </SheetHeader>
              <div className="flex flex-col space-y-6 mt-4">
                {Object.entries(routes).map(([label, path]) => (
                  <Link
                    key={label}
                    href={path}
                    onClick={() => handleLinkClick(label.toLowerCase())}
                    className={`block text-center py-3 text-lg ${activeSection === label.toLowerCase() ? "text-[#FF9F0D]" : ""
                      } hover:text-[#FF9F0D] transition-all duration-200`}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
        {/* Desktop Navigation */}
        <div className="text-2xl font-bold hidden md:flex">
          <Link href="/" aria-label="Navigate to Home">
            <span className="text-[#FF9F0D]">Food</span>tuck
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-6 text-sm">
          {Object.entries(routes).map(([label, path]) => (
            <Link
              key={label}
              href={path}
              className={`transition ease-in-out duration-200 hover:text-[#FF9F0D] ${activeSection === label.toLowerCase() ? "text-[#FF9F0D]" : ""
                }`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Search and Cart */}
        <div className="hidden md:flex items-center space-x-4">
          <form
            className="relative"
          >
          </form>
          <Link href="/cart" aria-label="View cart">
            <IoBagHandle className="w-6 h-6 cursor-pointer" />
          </Link>
          <Link href={"/wishlist"}><Heart /></Link>
        </div>
      </section>
    </nav>
  );
}
