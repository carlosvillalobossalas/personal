import React from 'react';
import { Slide1 } from './Slides/Slide1';
import { Slide2 } from './Slides/Slide2';
import { Slide3 } from './Slides/Slide3';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

import './Components.css';
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";

export const SwiperComponent = () => {
    return (
        <div className='swiper-component-container'>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('cambiando')}
                onSwiper={(swiper) => console.log(swiper)}
                className='swiper-container'
                navigation={true}
                loop={true}
                pagination={{
                    clickable: true
                }}
                modules={[Navigation, Pagination]}
            >
                <SwiperSlide>
                    <Slide1 />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide2 />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide3 />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
