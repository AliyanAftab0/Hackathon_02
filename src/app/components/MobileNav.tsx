"use client";

import React, { useState } from "react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import Link from "next/link";

const navLinks = [
  { id: "home", label: "Home", href: "/" },
  { id: "menu", label: "Menu", href: "/menu" },
  { id: "blogdetail", label: "Blog", href: "/blogdetail" },
  { id: "about", label: "About", href: "/about" },
  { id: "shoplist", label: "Shop", href: "/shoplist" },
  { id: "faq", label: "Page", href: "/faq" },
  { id: "chef", label: "Contact", href: "/chef" },
];

const MobileNav = () => {
  const [activeSection, setActiveSection] = useState("home");

  const handleLinkClick = (id: string) => {
    setActiveSection(id); // Sets the clicked section as active
  };

  return (
    <div className="sm:hidden">
      <Sheet>
        {/* Mobile Navigation Content */}
        <SheetContent side="bottom" className="p-4">
          <SheetHeader>
            <SheetTitle>Navigation</SheetTitle>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            {/* Navigation Links */}
            {navLinks.map(({ id, label, href }) => (
              <SheetClose asChild key={id}>
                <Link
                  href={href}
                  onClick={() => handleLinkClick(id)}
                  className={`block py-3 px-4 text-lg ${
                    activeSection === id ? "text-[#FF9F0D]" : ""
                  } hover:text-[#FF9F0D] transition-all duration-300`}
                >
                  {label}
                </Link>
              </SheetClose>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
