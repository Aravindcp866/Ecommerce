'use client'
import Link from "next/link";
import { useData } from "./Context/GlobalContext";
import { FaRegHeart } from "react-icons/fa";
import { useState } from "react";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Router } from "next/router";

export function BuyNowButton({ product, onAddToBag }: any) {
    const { addToBag } = useData();
    const [isWishListed, setToWoshList] = useState<boolean>(false);


    const handleAddToBag = () => {
        if (product) {
          onAddToBag(product);
        }
      };
    

    return (
        <div className="flex gap-1">
            <ToastContainer
                position="top-right"
                autoClose={1000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
                transition={Bounce}
            />

            <button
                className="flex items-center gap-3 w-full h-14 text-lg font-semibold text-black/90 rounded-md justify-center text-center leading-[3.5rem] border border-gray-300 outline-none hover:border-gray-500"
                onClick={(e) => {
                    addToBag(product)
                    setToWoshList(!isWishListed);
                    { !isWishListed ? toast.success('Added to Bag') : toast.error('Removed From Bag') }
                }}
            >
                <FaRegHeart color={isWishListed ? 'red' : ''} />
                Add to Bag
            </button>

            <Link
                className="inline-block w-full h-14 text-lg font-semibold bg-yellow-gradient text-black/90 rounded-md hover:bg-yellow-600 transition text-center leading-[3.5rem]"
                href="/cart">
                <i className="fa-solid fa-bag-shopping px-2"></i>
                Checkout Bag
            </Link>
        </div>
    );
}
