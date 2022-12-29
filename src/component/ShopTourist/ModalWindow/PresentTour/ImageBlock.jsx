import React from 'react';
import '../Modal.scss'
import {useSelector} from "react-redux";
import {TourSelector} from "../../../../store/Selector";

const ImageBlock = ({imageNumber, setImageNumber}) => {
  const {image} = useSelector(TourSelector)

  const imageDisplay = (number) => {
    setImageNumber(number)
  }
  return (
    <div className='image-block'>
      <div className='title-image'>
        <img className='title' src={`/img/slider/${image}${imageNumber}.jpg`}/>
      </div>
      <div className='present-image'>
        <img onClick={() => imageDisplay(1)} src={`/img/slider/${image}1.jpg`}/>
        <img onClick={() => imageDisplay(2)} src={`/img/slider/${image}2.jpg`}/>
        <img onClick={() => imageDisplay(3)} src={`/img/slider/${image}3.jpg`}/>
        <img onClick={() => imageDisplay(4)} src={`/img/slider/${image}4.jpg`}/>
      </div>
    </div>
  );
};

export default ImageBlock;