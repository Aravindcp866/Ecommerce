'use client'
import Link from "next/link";
import React, { useState } from "react";
import Image from 'next/image'

export default function ProductListItem({ props }: any) {
    console.log({ props })
    const [whisListed, setToWhishList] = useState(false);
    const productId = props?._id || '';

    return (
        <div className="h-[300px] w-auto" >
            <Link href={`/product/${productId}`} className="block">
                <Image
                    className="w-full h-[300px]  object-cover rounded-sm"
                    src={props?.image?.asset?.url}
                    alt={props?.image?.asset?.altText || "Product Image"}
                />
            </Link>
            <div className="text-gray-600 font-medium text-xs pt-2 flex items-center justify-between">
                <div className="flex-1 overflow-hidden">
                    <span className="font-semibold truncate">{props?.stockName || "Default Product Name"}</span>
                </div>
                <div className="ml-4">
                    {!whisListed ? (
                        <i
                            className="fa-regular fa-heart cursor-pointer"
                            onClick={(e: React.SyntheticEvent) => setToWhishList(true)}
                        ></i>
                    ) : (
                        <i
                            className="fa-solid text-red-600 fa-heart cursor-pointer"
                            onClick={(e: React.SyntheticEvent) => setToWhishList(false)}
                        ></i>
                    )}
                </div>
            </div>
            <div className="block text-gray-600 font-extrabold text-xs ">
                <i className="fa-sharp fa-solid fa-indian-rupee-sign"></i> 699
            </div>
        </div>
    );
}