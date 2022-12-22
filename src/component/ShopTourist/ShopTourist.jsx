import React from 'react';
import './ShopTourist.scss'
import HeaderShop from "./Header/HeaderShop";
const ShopTourist = () => {
  return (
    <div className='shop-container'>
    <div className='blackout-fon'></div>
      <div className='shop-content'>
        <HeaderShop/>
      </div>
    </div>
  );
};

export default ShopTourist;