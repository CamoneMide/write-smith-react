import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

import showcaseP from '../assets/images/vb1.png';
import Button from '../components/Button';

import { motion } from 'framer-motion';
import { staggerContainer, slideIn, textVariant } from '../utils/motion';


const MySwipe = () => {
  return (
    <>
    <Swiper
      spaceBetween={30}
      effect={'fade'}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[EffectFade, Navigation, Pagination]}
      className="max-lg:px-6 px-20 h-[100vh]z-50 w-[100vw] h-full bg-white mySwiper"
    >
      <SwiperSlide className="w-full h-[100%]">
      <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.25 }} className="py-10 flex flex-row max-lg:flex-col w-[100vw] h-[100%]">
    <motion.div variants={slideIn('left', 'tween', 0.2, 1)} className="flex flex-col justify-center pr-10" >
      <motion.h2 variants={textVariant(1.1)} className='text-[#013321] text-[50px] font-[700] ftDMSans'>Writting & Proofreading</motion.h2>
      <motion.h4 variants={textVariant(1.2)} className='text-[#000] text-[16px] font-[400] ftRoboto mb-10 mt-[8px]'>We are trusted by our client base and we are preferred for our professional and cost-effective services.</motion.h4>
      <div>
        <Button href="#pricing" label="Get Started" />
      </div>
    </motion.div>

    <motion.div variants={slideIn('right', 'tween', 0.2, 1)} className='w-[100%]'>
      <img className='pt-10 md:pr-[140px] pb-[140px] w-[100%] h-[100%] md:h-auto'  src={showcaseP} alt="showcase" />
    </motion.div>
  </motion.div>
      </SwiperSlide>
      <SwiperSlide className="w-full h-[100vh]">
        <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
      </SwiperSlide>
      <SwiperSlide className="w-full h-[100vh]">
        <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
      </SwiperSlide>
      <SwiperSlide className="w-full h-[100vh]">
        <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
      </SwiperSlide>
    </Swiper>
  </>
  )
}

export default MySwipe