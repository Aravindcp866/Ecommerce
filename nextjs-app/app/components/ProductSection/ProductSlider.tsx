

'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const dummyData = [
    { id: 1, title: 'OverSzied' },
    { id: 2, title: 'Regular Fit' },
    { id: 3, title: 'Anime Tshirt' },
    { id: 4, title: 'Retro Tee' },
    { id: 5, title: 'Funkey Print' },
];

interface ProductSliderProps {
    className?: string;
}

const ProductSlider: React.FC<ProductSliderProps> = ({ className }) => {
    return (
        <div className={`p-2 ${className}`}>
            <Swiper
                spaceBetween={0}
                slidesPerView={3}
                pagination={false}
                navigation={false}
            >
                {dummyData.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className={`md:hidden flex w-28 flex-col items-center bg-blue-950 text-[12px] font-medium rounded-xl text-white/80  p-2`}>
                        {item.title}
                            {/* <p className=' bg-gray-600 text-[12px] font-medium rounded-xl w-max p-2'> {item.title}</p> */}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>

    );
};

export default ProductSlider;