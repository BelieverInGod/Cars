import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import carImg from '../../assets/images/car.png';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default  () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={440}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img src={carImg} alt="car"/></SwiperSlide>
      <SwiperSlide><img src={carImg} alt="car"/></SwiperSlide>
      <SwiperSlide><img src={carImg} alt="car"/></SwiperSlide>
      <SwiperSlide><img src={carImg} alt="car"/></SwiperSlide>
    </Swiper>
  );
};