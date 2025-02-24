'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import Image from 'next/image'

const HeroSlider: React.FC<any> = ({ imageProps }: any) => {
    return (
        <div className="w-full">
            <Swiper
                spaceBetween={10}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                className="w-full md:h-[30rem] h-full"
            >
                {imageProps?.length > 0 && imageProps.map((item: any, i: number) => (
                    <SwiperSlide key={i}>
                        <div className="w-full h-120">
                            <Image 
                                src={item?.asset?.url} 
                                alt={"Trendy T-shirts in India"}
                                className="w-full h-full object-cover"
                                fill
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default HeroSlider