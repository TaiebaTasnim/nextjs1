"use client";

import { useState } from "react";
import { useRouter } from "next/router"; // Import useRouter
import Link from "next/link";
import Image from "next/image";
import { HiMenu, HiX } from "react-icons/hi"; // Import hamburger and close icons

const navLinks = [
  { name: "Accueil", href: "/" },
  { name: "Nos services", href: "/Services" },
  { name: "Location", href: "/Location" },
  { name: "Transport Maritime", href: "/Maritime" },
  { name: "Tarif et réservation", href: "/Reservation" },
  { name: "À propos", href: "/About" },
  { name: "Contact", href: "/Contact" },
];

export default function Navbar() {
  const router = useRouter(); // Get current route
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isOpen, setIsOpen] = useState(false); // State for hamburger menu

  return (
    <nav className="navbar w-full bg-white">
      <div className="max-w-7xl mx-auto w-[90%] flex items-center justify-between ">
        {/* Logo */}
        <div className="w-[105px] h-[105px] mt-6">
          <Link href="/">
            <Image src="/images/logo350.png" alt="Logo" width={105} height={105} className="cursor-pointer" />
          </Link>
        </div>

        {/* Desktop Navigation (Hidden on small & medium screens) */}
        <ul className="hidden lg:flex space-x-4">
          {navLinks.map((link, index) => {
            const isActive = router.pathname === link.href; // Check if route is active
            return (
              <li key={index} className="relative">
                <Link
                  href={link.href}
                  className="relative flex items-center text-gray-800 font-medium text-lg px-5 py-2 transition-transform duration-600 ease-in-out"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Circle Effect (Always visible for active route) */}
                  <span
                    className={`absolute left-0 transform -translate-x-3 w-2 h-2 bg-[#deba91] rounded-full transition-all duration-600 ${
                      isActive || hoveredIndex === index ? "scale-100 opacity-100 -translate-x-1" : "scale-0 opacity-0"
                    }`}
                  ></span>

                  {/* Text Transition */}
                  <span
                    className={`relative transition-all uppercase tracking-wider text-[16px] duration-300 ${
                      hoveredIndex === index ? "translate-x-2" : "translate-x-0"
                    }`}
                  >
                    {link.name}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Hamburger Menu Button (Small & Medium Screens) */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-black focus:outline-none">
            {isOpen ? <HiX size={32} /> : <HiMenu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Small & Medium Screens) */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-full h-full bg-[#deba91] text-white z-50 transform transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-5">
          <button onClick={() => setIsOpen(false)} className="text-white">
            <HiX size={32} />
          </button>
        </div>

        <ul className="flex flex-col items-center space-y-6 mt-10">
          {navLinks.map((link, index) => {
            const isActive = router.pathname === link.href; // Check active route
            return (
              <li key={index} className="relative">
                <Link
                  href={link.href}
                  className="text-white text-lg font-medium flex items-center"
                  onClick={() => setIsOpen(false)}
                >
                  {/* Circle Effect for Active Route in Mobile */}
                  <span
                    className={`w-2 h-2 bg-white rounded-full transition-all uppercase tracking-wider duration-300 mr-2 ${
                      isActive ? "opacity-100 scale-100" : "opacity-0 scale-0"
                    }`}
                  ></span>
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
