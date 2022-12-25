import React, {useState} from 'react';
import './Modal.scss'
import {useSelector} from "react-redux";
import {TourSelector} from "../../../store/Selector";

const ModalWindow = ({modalActive, setModalActive}) => {
  const {image} = useSelector(TourSelector)

  const closeModal = () => {
    setModalActive(false);
  };
console.log(image)
  return (
    <div className={modalActive ? "modal-window active" : 'modal-window'} onClick={closeModal}>
      <div className='modal__content-container' onClick={(e) => e.stopPropagation()}>
        <div className='modal-content'>
            <div className='image-block'>
              <div className='title-image'>
                <img className='title' src={`/img/slider/${image}1.jpg`}/>
              </div>
              <div className='present-image'>
                <img src={`/img/slider/${image}2.jpg`}/>
                <img src={`/img/slider/${image}3.jpg`}/>
                <img src={`/img/slider/${image}4.jpg`}/>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;