import React from 'react';
import RatingSection from './RatingSection';

interface IProductInterface {
    productName: string;
    size: Array<string>;
    productDescription: string;
}

export default function ProductDescription({ productName, productDescription, size }: IProductInterface) {
    if (!productName || !productDescription || !size) return null;
    return (
        <>
            <h2 className="font-semibold text-4xl py-2 capitalize ">{productName}</h2>
            <div className="font-medium pb-2 text-gray-700">{productDescription}</div>
            <div className="pb-3 text-xl font-semibold">Choose Size</div>
            <div className="flex gap-4">
                {size?.map((e: string, i: number) => {
                    return (
                        <button key={i} className="p-1 w-8 rounded-sm outline outline-offset-2 outline-1 capitalize">
                            {e}
                        </button>
                    );
                })}
            </div>
            <RatingSection initialRating={4.5} mode={"readonly"} />
            <div className="underline-offset-1 pt-3">See All Reviews</div>
        </>
    );
}
