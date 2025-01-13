'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules';


const HomePageSlider: React.FC<any> = ({ imageProps }) => {
    return (
        <div className='bg-red-200'>

        <Swiper
        spaceBetween={10}
        centeredSlides={true}
            autoplay={{
                delay: 2000,
              }}
              pagination={{ clickable: true }}
            modules={[Pagination]}
        >
            {imageProps?.length && imageProps?.map((item: any, i: number) => (
                <SwiperSlide key={i}>
                    <div className='w-45 h-120'>
                    <img src={item?.asset?.url} className='' />
                    </div>
                    

                </SwiperSlide>
            ))}
        </Swiper>
        </div>
    )
}

export default HomePageSlider
