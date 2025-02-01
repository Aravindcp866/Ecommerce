"use client"
import { useState } from "react";
import Link from "next/link";
import logo from "../public/images/logo.png"
import Image from "next/image";
import CTA from "./Cta";
import Head from "next/head";
import { json } from "../jsonld";
import router from "next/router";


const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const menu: any = [
    { heading: 'Home', route: '/' },
    { heading: 'About', route: '/about' },
    { heading: 'Contact', route: '/contact' },
    { heading: 'Cart', route: '/cart' }
  ];

  return (
    <header className="shadow-md bg-yellow-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Image src={logo} alt={"Trendy T-shirts in India"} width={90} height={90} />
          <p className="font-bold">UBV(Unitied By Vibe)
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
          {
              menu?.map((e: any, i: number) => {
                console.log("Menu Item:", e);
                return (
                  <Link key={i} href={e.route} 
                  onClick={() => {
                    toggleMobileMenu()
                    
                  }}
                  >
                    {e.heading}
                  </Link>
                );
              })
            }

            <CTA value={"Buy Now  "} />
          </nav>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="sm:hidden flex flex-col space-y-2 bg-gray-100 p-4 rounded-md shadow-md relative top-[-19px]">
            {
              menu?.map((e: any, i: number) => {
                console.log("Menu Item:", e);
                return (
                  <Link key={i} href={e.route}
                  onClick={() => {
                    toggleMobileMenu()
                   
                  }}>
                    {e.heading}
                  </Link>
                );
              })
            }
            {/* <CTA value={"Buy Now  "} /> */}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
