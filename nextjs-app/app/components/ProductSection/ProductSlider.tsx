

'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const dummyData = [
    { id: 1, title: 'OverSzied Tee' },
    { id: 2, title: 'Regular Tshirt' },
    { id: 3, title: 'Anime Tshirt' },
    { id: 4, title: 'Retro Tee' },
    { id: 5, title: 'Funkey Print' },
];

interface ProductSliderProps {
    className?: string; 
}

const ProductSlider: React.FC<ProductSliderProps> = ({ className }) => {
    return (
        <div className={`p-4 ${className}`}>
        <Swiper
            spaceBetween={30}
            slidesPerView={3}
            pagination={false} 
            navigation={false} 
        >
            {dummyData.map((item) => (
                <SwiperSlide key={item.id}>
                    <div className={`md:hidden flex flex-col items-center border border-gray-200 rounded-lg `}>
                        <h3 className="text-center p-3 text-sm font-bold">{item.title}</h3>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
        </div>

    );
};

export default ProductSlider;