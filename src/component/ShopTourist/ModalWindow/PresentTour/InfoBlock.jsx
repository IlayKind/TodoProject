import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {TourSelector} from "../../../../store/Selector";
import {getHotel} from "../../../../store/asyncRequest/AsyncCreatedHotel";

const InfoBlock = ({setExactChoice}) => {
  const {descriptionTour} = useSelector(TourSelector);
  const {image} = useSelector(TourSelector)
  const dispatch = useDispatch();

  const requestHotel = () => {
    setExactChoice(true)
    dispatch(getHotel(`${image}Hotel`))
  }
  console.log(image)
  return (
    <div className='info-block'>
      <div className='description-block'>
        <span className='description-title'>{descriptionTour.title}</span>
        <br/>
        <br/>
        <span className="description-info">{descriptionTour.description}</span>
        <br/>
        <br/>
        <ul>
          <li>{descriptionTour.included1}</li>
          <li>{descriptionTour.included2}</li>
          <li>{descriptionTour.included3}</li>
        </ul>
        <button onClick={requestHotel} className='btn-add'>
          See<br/>surveillance
        </button>
      </div>
    </div>
  );
};

export default InfoBlock;