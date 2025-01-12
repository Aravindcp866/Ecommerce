

'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const dummyData = [
    { id: 1, title: 'Tshirt' },
    { id: 2, title: 'Jeans' },
    { id: 3, title: 'Sweaters' },
    { id: 4, title: 'Hoodies' },
    { id: 5, title: 'Vests' },
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
                        <h3 className="text-center p-3">{item.title}</h3>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
        </div>

    );
};

export default ProductSlider;