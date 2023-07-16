'use client'

import { Swiper, SwiperSlide } from 'swiper/react';

import slide1 from '@/assets/slide/slide1.jpg';
import slide2 from '@/assets/slide/slide2.png';
import slide3 from '@/assets/slide/slide3.png';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import Image from 'next/image';
import { Navigation } from 'swiper/modules';

const Carosel = () => {
  return (
    <Swiper
    rewind={true}
    navigation={true}
    modules={[Navigation]}
    className="mySwiper"
  >
    <SwiperSlide>
        <Image className='w-full' src={slide1} alt='slider' />
    </SwiperSlide>
    <SwiperSlide>
        <Image className='w-full' src={slide2} alt='slider2'/>
    </SwiperSlide>
    <SwiperSlide>
        <Image className='w-full' src={slide3}  alt='slider3'/>
    </SwiperSlide>
  </Swiper>
  )
}

export default Carosel