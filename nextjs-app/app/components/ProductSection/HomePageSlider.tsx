'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'



const HomePageSlider: React.FC<any> = ({ imageProps }) => {
    return (
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
            autoplay={{
                delay: 2000,
              }}
        >
            {imageProps?.length && imageProps?.map((item: any, i: number) => (
                <SwiperSlide key={i}>
                    <div className='w-56 h-60'>
                    <img src={item?.asset?.url} className='' />
                    </div>
                    

                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default HomePageSlider
