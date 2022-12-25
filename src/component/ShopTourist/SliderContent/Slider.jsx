import React from 'react';
import '../ShopTourist.scss'
import {Swiper,SwiperSlide} from "swiper/react";
import { Navigation, Pagination, EffectCoverflow,Autoplay,Mousewheel } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';
import ModalWindow from "../ModalWindow/ModalWindow";
import {useDispatch} from "react-redux";
import {addImage} from "../../../store/TourSlice";

const Slider = ({setModalActive}) => {
  const dispatch = useDispatch()

  const modalInfo = (img) => {
    dispatch(addImage(img))
    setModalActive(true)
  }

  return (
    <div className='slider _container'>
    <Swiper
      modules={[Navigation, Pagination, EffectCoverflow,Autoplay,Mousewheel]}
      navigation={true}
      centeredSlides={true}
      coverflowEffect={{
        rotate: 15,
        stretch: 0,
        depth: 150,
        modifier: 1,
        slideShadows: true,
      }}
      slideToClickedSlide={true}
      initialSlide={2}
      mousewheel={{
        sensitive:1
      }}
      loop={true}
      autoplay={{
        delay: 5000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
      }}
      effect={"coverflow"}
      spaceBetween={30}
      slidesPerView={3}
      pagination={{
        clickable: true
      }}
    >
          <SwiperSlide onClick={() => modalInfo("winter")}>
              <img  src='/img/slider/winter1.jpg'/>
          </SwiperSlide>
        <SwiperSlide onClick={() => modalInfo("desert")}>
          <img  src='/img/slider/desert1.jpg'/>
        </SwiperSlide>
        <SwiperSlide onClick={() => modalInfo("metropolis")}>
          <img  src='/img/slider/metropolis1.jpg'/>
        </SwiperSlide>
        <SwiperSlide onClick={() => modalInfo("aqua")}>
          <img  src='/img/slider/aqua1.jpg'/>
        </SwiperSlide>
        <SwiperSlide onClick={() => modalInfo("wild-forest")}>
          <img  src='/img/slider/wild-forest1.jpg'/>
        </SwiperSlide>
        <SwiperSlide>
          <div className='block-style'></div>
          <img  src='/img/slider/block-zone.jpg'/>
          <img className='icon'  src='/img/block.png'/>
          <span className='danger-text'>
            Danger<br/> Territory
          </span>
        </SwiperSlide>
    </Swiper>
    </div>
  );
};

export default Slider;