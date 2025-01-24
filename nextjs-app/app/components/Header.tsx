"use client"
import { useState } from "react";
import Link from "next/link";
import logo from "../public/images/logo.png"
import Image from "next/image";
import CTA from "./Cta";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Image src={logo} alt={""} width={90} height={90}/>
          <p>Malayalee Made Crafted with Pride, Worn with Swag.
          </p>
          <div className="text-2xl font-bold text-gray-800">
            {/* <Link href="/">Logo</Link> */}
          </div>
          <div className="sm:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden sm:flex space-x-6">
            <Link href="/" className="text-gray-600 hover:text-indigo-500">
              Home
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-indigo-500">
              About
            </Link>
            <Link
              href="/services"
              className="text-gray-600 hover:text-indigo-500"
            >
              Services
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-indigo-500">
              Contact
            </Link>
            <CTA value={"Buy Now  "}/>
          </nav>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="sm:hidden flex flex-col space-y-2 bg-gray-100 p-4 rounded-md shadow-md">
            <Link href="/" className="block text-gray-600 hover:text-indigo-500">
              Home
            </Link>
            <Link
              href="/about"
              className="block text-gray-600 hover:text-indigo-500"
            >
              About
            </Link>
            <Link
              href="/services"
              className="block text-gray-600 hover:text-indigo-500"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="block text-gray-600 hover:text-indigo-500"
            >
              Contact
            </Link>
            <CTA value={"Buy Now  "}/>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
