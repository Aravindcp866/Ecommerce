'use client'
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import useMediaQuery from '../utils/useMediaHook';

const BestSellerSlider = ({ imageProps = [] }) => {
    const [swiperRef, setSwiperRef] = useState(null);
    const [additionalSlides, setAdditionalSlides] = useState([]);
    const isMobile: any = useMediaQuery(767);



    const allSlides = [
        ...additionalSlides.filter(slide => slide.type === 'blank'),
        ...(imageProps?.map((item, index) => ({
            type: 'image',
            data: item,
            id: `image-${index}`
        })) || [])
    ];

    return (
        <div className="w-full bg-gray-100 p-8 rounded-lg flex flex-col gap-3">
            <h2 className='text-center text-xl'>Best Sellers</h2>
            <Swiper
                onSwiper={setSwiperRef}
                slidesPerView={isMobile ? 1 : 3}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    type: 'fraction',
                    el: '.swiper-pagination',
                }}
                navigation={{
                    prevEl: '.swiper-button-prev',
                    nextEl: '.swiper-button-next',
                }}
                modules={[Pagination, Navigation]}
                className="w-full h-[400px] relative"
            >
                {allSlides.map((slide) => (
                    <SwiperSlide key={slide.id} className="bg-white rounded-lg shadow-md">
                        {slide.type === 'image' ? (
                            <div className="w-full h-full flex items-center justify-center">
                                <img 
                                    src={slide.data?.asset?.url} 
                                    alt={`Slide ${slide.id}`}
                                    className="w-full h-full object-cover rounded-lg "
                                />
                            </div>
                        ) : (
                            <div className="w-full h-full bg-white flex items-center justify-center rounded-lg">
                                <span className="text-xl text-gray-600">Slide {slide.id.split('-')[1]}</span>
                            </div>
                        )}
                    </SwiperSlide>
                ))}
                
                {!isMobile &&
                    <><div className="swiper-button-prev !text-blue-500 !w-8 !h-8 !left-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </div>
                <div className="swiper-button-next !text-blue-500 !w-8 !h-8 !right-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </div></>}
                
                <div className="swiper-pagination !bottom-4"></div>
            </Swiper>

        </div>
    );
};

export default BestSellerSlider;