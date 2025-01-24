// nextjs-app/app/components/Footer.tsx

import React from 'react';
import Home from '../public/Icons/Home';
import Account from '../public/Icons/Account';
import Cart from '../public/Icons/Cart';
import Search from '../public/Icons/Search';
import WishList from '../public/Icons/WishList';
import Link from 'next/link';

const Footer: React.FC = () => {
    return (
        <div className="md:hidden  fixed bottom-0 w-full bg-white shadow-md border-t border-gray-200">
            <div className="flex justify-around p-4">
                <div className="flex flex-col items-center">
                    <Home />
                    <span>Home</span>
                </div>
                <div className="flex flex-col items-center">
                    <Search />
                    <span>Search</span>
                </div>
                <div className="flex flex-col items-center">
                    <WishList />
                    <span>Saved</span>
                </div>
                <div className="flex flex-col items-center">
                    <Cart />
                    <span>Cart</span>
                </div>
                <Link href="/signup" className="flex flex-col items-center">
                    <Account />
                    <span>Account</span>
                </Link>
            </div>
        </div>
    );
};

export default Footer;