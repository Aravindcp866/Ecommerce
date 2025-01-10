import Link from "next/link";
import React from "react";

export default function ProductListItem({ props }: any) {
    // Check if props and _id exist to avoid undefined errors
    const productId = props?._id || '';
    
    return (
        <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 sm:w-1/2 lg:w-1/3 mx-auto">
            <Link href={`/product/${productId}`} className="block">
                <img
                    className="w-full h-40 object-cover rounded-t-lg sm:h-48 lg:h-56"
                    src={props?.image?.asset?.url}
                    alt={props?.image?.asset?.altText || "Product Image"}
                />
            </Link>

            <div className="p-1">
                <Link href={`/product/${productId}`}>
                    <p className="text-balance text-center sm:text-sm sm:font-normal text-gray-800 dark:text-white sm:text-orange-600 sm:mt-2">
                        {props?.stockName || "Default Product Name"}
                    </p>
                </Link>
                <div className="flex items-center justify-between mt-4 flex-col">
                    <p className="text-balance text-center text-xl font-bold text-gray-900 dark:text-white sm:text-orange-600">
                        699/-
                    </p>
                    <button
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm p-1 w-full text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
}