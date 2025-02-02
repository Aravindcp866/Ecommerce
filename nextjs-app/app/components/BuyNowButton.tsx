'use client'
import Link from "next/link";
import { useData } from "./Context/GlobalContext";

export function BuyNowButton({ product, onAddToBag }: any) {
    console.log(product)

    const { addToBag } = useData();

    return (
        <Link
            className="inline-block w-full h-14 text-lg font-semibold bg-yellow-gradient text-black/90 rounded-md hover:bg-yellow-600 transition text-center leading-[3.5rem]"
            href="/cart"
            onClick={(e) => {
                addToBag(product)
                // e.preventDefault()
            }}

        >
            <i className="fa-solid fa-bag-shopping px-2"></i>
            Add to Bag
        </Link>
    );
}
