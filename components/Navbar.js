'use client';

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
//import logo from '@/public/images/Logo350.png'

const navLinks = [
  { name: "WELCOME", href: "/" },
  { name: "OUR SERVICES", href: "/Services" },
  { name: "RENTAL", href: "/Rental" },
  { name: "MARITIME TRANSPORT", href: "/Maritime" },
  { name: "PRICE & RESERVATION", href: "/" },
  { name: "ABOUT", href: "/About" },
  { name: "CONTACT", href: "/Contact" },
  
];

export default function Navbar() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
      <nav className="w-full bg-white ">
      <div className="container mx-auto justify-between flex  items-center  ">
        {/* Logo */}
        <div className="w-[99px] h-[99px]">
        <Link href="/">
          <Image src='/images/logo350.png' alt="Logo" width={99}
           height={99} className="cursor-pointer" />
        </Link>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          {navLinks.map((link, index) => (
            <li key={index} className="relative">
              <Link
                href={link.href}
                className="relative flex items-center text-gray-800 font-medium text-lg px-3 py-2 transition-transform duration-600 ease-in-out"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Circle Effect */}
                <span
                  className={`absolute left-0 transform -translate-x-3 w-2 h-2 bg-[#deba91] rounded-full transition-all duration-600 ${
                    hoveredIndex === index ? "scale-100 opacity-100 -translate-x-1" : "scale-0 opacity-0"
                  }`}
                ></span>

                {/* Text Transition */}
                <span
                  className={`relative transition-all tracking-widest text-[16px] duration-300 ${
                    hoveredIndex === index ? "translate-x-2" : "translate-x-0"
                  }`}
                >
                  {link.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
