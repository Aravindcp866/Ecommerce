import Link from 'next/link';
import Image from "next/image";
import logo from "../../public/images/logo.png"


import React, { useState } from 'react';
import { menu } from '../Header';

const MobileSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Hamburger Icon */}
      <div
        className="lg:hidden p-4 text-white cursor-pointer"
        onClick={toggleSidebar}
      >
        <span className="block w-8 h-1 bg-white mb-2"></span>
        <span className="block w-8 h-1 bg-white mb-2"></span>
        <span className="block w-8 h-1 bg-white"></span>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed z-10 top-0 left-0 h-full w-64 bg-gray-900 bg-yellow-gradient transition-transform duration-300 ease-in-out transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 lg:flex lg:items-center lg:justify-start lg:h-auto lg:w-64 lg:relative`}
      >
        <div className="flex justify-between items-center p-6 lg:p-4">
          <h2 className="text-xl  text-white font-semibold">Ubv</h2>
          <Image src={logo} alt={"Trendy T-shirts in India"} width={90} height={90} />
{/* 
          <button
            onClick={toggleSidebar}
            className="lg:hidden text-2xl text-white"
          >
            &#x2715;
          </button> */}
        </div>

        <ul className="space-y-6 px-6">
          {menu?.map((item:any) => (
            <li key={item.route}>
              <Link href={item.route} className="text-lg text-white/90 hover:text-blue-500 transition-colors duration-200" onClick={toggleSidebar}>
                {item.heading}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay */}
      <div
        onClick={toggleSidebar}
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      ></div>
    </div>
  );
};

export default MobileSidebar;


