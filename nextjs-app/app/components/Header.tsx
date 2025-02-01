"use client"
import { useState } from "react";
import Link from "next/link";
import logo from "../public/images/logo.png"
import Image from "next/image";
import CTA from "./Cta";
import { HiOutlineUserCircle } from "react-icons/hi";
import MobileSidebar from "./common/MobileSidebar";
import Head from "next/head";
import { json } from "../jsonld";
import router from "next/router";


export const menu : any = [
  { heading: 'Home', route: '/' },
  { heading: 'About', route: '/about' },
  { heading: 'Contact', route: '/contact' },
  { heading: 'Cart', route: '/cart' }
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };



  return (
    <header className="shadow-md bg-yellow-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* <Image src={logo} alt={"Trendy T-shirts in India"} width={90} height={90} /> */}

         <MobileSidebar/>

          <p className="font-bold">UBV(Unitied By Vibe)
          </p>
          <div className="text-2xl font-bold text-gray-800">
            {/* <Link href="/">Logo</Link> */}
            <Link href="/signup" className="flex flex-col items-center">
            <HiOutlineUserCircle />
            </Link>
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
          </nav>.

        </div>

        {/* Mobile Menu */}

        {/* {isMobileMenuOpen && (

          <div className="absolute sm:hidden flex flex-col space-y-2 bg-gray-100 p-4 rounded-md shadow-md">
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
          </div>
        )} */}
      </div>
    </header>
  );
};

export default Header;
