import React from 'react';
import '../ShopTourist.scss'
import {Swiper,SwiperSlide} from "swiper/react";
import { Navigation, Pagination, EffectCoverflow,Autoplay,Mousewheel } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';
import {useDispatch} from "react-redux";
import {addDescription, addImage} from "../../../store/TourSlice";
import {
  aquaDescription,
  aquaTitle,
  aquaWhatIncluded1, aquaWhatIncluded2, aquaWhatIncluded3,
  desertDescription,
  desertTitle,
  desertWhatIncluded1, desertWhatIncluded2, desertWhatIncluded3,
  forestDescription,
  forestTitle,
  forestWhatIncluded1, forestWhatIncluded2, forestWhatIncluded3,
  metropolisDescription,
  metropolisTitle,
  metropolisWhatIncluded1, metropolisWhatIncluded2, metropolisWhatIncluded3,
  wildForestDescription,
  wildForestTitle,
  wildForestWhatIncluded1, wildForestWhatIncluded2, wildForestWhatIncluded3,
  winterDescription,
  winterTitle,
  winterWhatIncluded1, winterWhatIncluded2, winterWhatIncluded3
} from "../DescriptionTour";

const Slider = ({setModalActive}) => {
  const dispatch = useDispatch()

  const modalInfo = (img, title,  description, included1, included2, included3) => {
    dispatch(addImage(img))
    dispatch(addDescription({
      title,
      description,
      included1,
      included2,
      included3,
    }))
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
          <SwiperSlide onClick={() => modalInfo("winter", winterTitle, winterDescription, winterWhatIncluded1, winterWhatIncluded2, winterWhatIncluded3)}>
              <img  src='/img/slider/winter1.jpg'/>
          </SwiperSlide>
        <SwiperSlide onClick={() => modalInfo("desert", desertTitle, desertDescription, desertWhatIncluded1, desertWhatIncluded2, desertWhatIncluded3)}>
          <img  src='/img/slider/desert1.jpg'/>
        </SwiperSlide>
        <SwiperSlide onClick={() => modalInfo("metropolis", metropolisTitle, metropolisDescription,metropolisWhatIncluded1, metropolisWhatIncluded2, metropolisWhatIncluded3)}>
          <img  src='/img/slider/metropolis1.jpg'/>
        </SwiperSlide>
        <SwiperSlide onClick={() => modalInfo("aqua", aquaTitle, aquaDescription, aquaWhatIncluded1, aquaWhatIncluded2, aquaWhatIncluded3)}>
          <img  src='/img/slider/aqua1.jpg'/>
        </SwiperSlide>
        <SwiperSlide onClick={() => modalInfo("wild-forest", wildForestTitle, wildForestDescription, wildForestWhatIncluded1, wildForestWhatIncluded2, wildForestWhatIncluded3)}>
          <img  src='/img/slider/wild-forest1.jpg'/>
        </SwiperSlide>
      <SwiperSlide onClick={() => modalInfo("forest", forestTitle, forestDescription, forestWhatIncluded1, forestWhatIncluded2, forestWhatIncluded3)}>
        <img  src='/img/slider/forest1.jpg'/>
      </SwiperSlide>
        <SwiperSlide>
          <div className='block-style'></div>
          <img  src='/img/slider/block-zone.jpg'/>
          <img className='icon'  src='/img/block.png'/>
          <span className='danger-text'>
            Danger<br/>Territory
          </span>
        </SwiperSlide>
    </Swiper>
    </div>
  );
};

export default Slider;