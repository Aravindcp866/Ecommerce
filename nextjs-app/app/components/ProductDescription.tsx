import React from 'react'
interface IProductInterface {
    productName: string
    size: Array<string>
    productDescription: string
}
export default function ProductDescription({ productName, productDescription, size }: IProductInterface) {
    return (
        <>
            <h2 className='font-semibold text-4xl py-2'>{productName}</h2>
            <span className='font-medium pb-2 text-gray-700'>{productDescription}</span>
            <div>
                <div className='pb-3 text-2xl '>Choose Size</div>
                <div className='flex gap-4'>
                    {size &&
                        size?.map((e: string, i: number) => {
                            return (<div key={i} className='p-1 w-8 text-center rounded-md bg-slate-500'>{e}</div>)
                        })
                    }
                </div>
            </div>
            <div className='underline-offset-1 pt-3'>See All Reviews </div>
        </>
    )
}
