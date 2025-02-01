'use client'
import Link from "next/link";
import React, { useState } from "react";
import Image from 'next/image'

export default function ProductListItem({ props }: any) {
    console.log(props?.image?.asset.url)
    const [whisListed, setToWhishList] = useState(false);
    const productId = props?._id || '';

    return (
        <div className="h-[410px] w-auto" >
            <Link href={`/product/${productId}`} className="block">
                <Image
                    className="w-full h-[300px]  object-cover rounded-sm"
                    src={props?.image?.asset?.url}
                    alt={"Trendy T-shirts in India"}
                    width={500}
                    height={500}

                />
            </Link>
            <div className="text-sm/5 font-semibold line-clamp-2 pt-1">
                Breathing Graphic Printed Oversized T-shirt
            </div>
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
            <div className="flex flex-row items-center gap-2">
                <div className="block text-gray-600  text-xs line-through">
                    <i className="fa-sharp fa-solid fa-indian-rupee-sign"></i> 1200
                </div>
                <div className="block text-gray-600 font-extrabold text-sm ">
                    <i className="fa-sharp fa-solid fa-indian-rupee-sign"></i> 599
                </div>
                <div className="block text-green-800 font-bold text-xs ">
                     51% off
                </div>
            </div>


        </div>
    );
}