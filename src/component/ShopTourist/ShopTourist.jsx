import React, {useState} from 'react';
import './ShopTourist.scss'
import HeaderShop from "./Header/HeaderShop";
import Slider from "./SliderContent/Slider";
import ModalWindow from "./ModalWindow/ModalWindow";

const ShopTourist = () => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <div className='shop-container'>
    <div className='blackout-fon'></div>
      <ModalWindow modalActive={modalActive} setModalActive={setModalActive}/>
      <div className='shop-content'>
        <HeaderShop/>
        <Slider setModalActive={setModalActive}/>
      </div>
    </div>
  );
};

export default ShopTourist;