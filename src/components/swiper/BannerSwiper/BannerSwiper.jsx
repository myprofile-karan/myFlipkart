import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import 'swiper/css';
  import 'swiper/css/bundle';
  import './bannerSwiper.css'

export default () => {
  return (
    <Swiper className='my-1 py-4'
    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, ]}
    spaceBetween={0}
    slidesPerView={1}
    navigation
    autoplay
    loop
    pagination={{ clickable: true }}
    >
      <SwiperSlide><img src="./images/banner1.jpeg" width="100%" alt="" /></SwiperSlide>
      <SwiperSlide><img src="./images/banner2.jpeg" width="100%" alt="" /></SwiperSlide>
      <SwiperSlide><img src="./images/banner3.jpeg" width="100%" alt="" /></SwiperSlide>
      <SwiperSlide><img src="./images/banner4.jpeg" width="100%" alt="" /></SwiperSlide>
      <SwiperSlide><img src="./images/banner5.jpeg" width="100%" alt="" /></SwiperSlide>
      <SwiperSlide><img src="./images/banner6.jpeg" width="100%" alt="" /></SwiperSlide>
    </Swiper>
  );
};