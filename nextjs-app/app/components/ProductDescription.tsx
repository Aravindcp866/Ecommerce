import React from 'react'
import RatingSection from './RatingSection'
interface IProductInterface {
    productName: string
    size: Array<string>
    productDescription: string
}
export default function ({ productName, productDescription, size }: IProductInterface) {
    if(!productName || !productDescription || !size) return
    return (
        <>
            <h2 className='font-semibold text-4xl py-2'>{productName}</h2>
            <div className='font-medium pb-2 text-gray-700'>{productDescription}</div>
            {/* <div className="h-full"> */}
                <div className='pb-3 text-2xl '>Choose Size</div>
                <div className='flex gap-4'>
                    {size &&
                        size?.map((e: string, i: number) => {
                            return (<div key={i} className='p-1 w-8 text-center rounded-md bg-slate-500'>{e}</div>)
                        })
                    }
                </div>
            {/* </div> */}
            <RatingSection
             initialRating={4.5}
             mode={'readonly'}
             />
            <div className='underline-offset-1 pt-3'>See All Reviews </div>
        </>
    )
}
