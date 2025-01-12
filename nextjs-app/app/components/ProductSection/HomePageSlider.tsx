import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

interface ImageProps {
    url: string
    id: string
    title: string
}

export default function HomePageSlider(imageProps: Array<ImageProps>) {
    return (
        <Swiper
            spaceBetween={30}
            slidesPerView={3}
            pagination={false}
            navigation={false}
        >
            {imageProps.map((item: ImageProps) => (
                <SwiperSlide key={item.id}>
                    <div className={`md:hidden flex flex-col items-center border border-gray-200 rounded-lg `}>
                        <h3 className="text-center p-3">{item.title}</h3>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
