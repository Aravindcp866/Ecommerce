"use client"
import { useState } from "react";
import Link from "next/link";
import CTA from "./Cta";
import { HiOutlineUserCircle } from "react-icons/hi";
import MobileSidebar from "./common/MobileSidebar";
import useMediaQuery from "./utils/useMediaHook";
import { BsHandbag } from "react-icons/bs";


export const menu : any = [
  { heading: 'Home', route: '/' },
  { heading: 'About', route: '/about' },
  { heading: 'Contact', route: '/contact' },
  { heading: 'Cart', route: '/cart' }
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile: boolean = useMediaQuery(767);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };



  return (
    <header className="shadow-md bg-yellow-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
        {isMobile &&<MobileSidebar/>}
         <Link href="/" className="flex flex-col items-center"><p className="font-bold">UBV</p>
         </Link>
         {isMobile && <div className="text-2xl font-bold flex gap-1 text-gray-800">
            <Link href="/signup" className="flex flex-col items-center">
            <HiOutlineUserCircle color="white" />
            </Link>
            <Link href="/cart" className="flex flex-col items-center">
            <BsHandbag  color="white" />
            </Link>
          </div>}
   

          {/* Desktop Navigation */}
        {!isMobile && <nav className="hidden md:flex space-x-6">
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
          </nav>}

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
