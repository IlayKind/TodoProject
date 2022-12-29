import React, {useState} from 'react';
import '../Modal.scss'
import {useDispatch, useSelector} from "react-redux";
import {TourSelector} from "../../../../store/Selector";
import {addCountPrice} from "../../../../store/TourSlice";



const SelectionService = () => {
  const {hotel} = useSelector(TourSelector);
  const dispatch = useDispatch();
  const {countPriceHotel} = useSelector(TourSelector);
  const [totalPrice, setTotalPrice] = useState(countPriceHotel.price)

  const priceHotel = (hotel) => {
    dispatch(addCountPrice(hotel))
  }
  console.log(countPriceHotel)
  return (
    <div className='service-container'>
      <div className='choice-hotel-block'>
        {
          hotel.map((item) => {
            const {id, image, name, description, roomTypes, roomNumber, price} = item;
            return < div key={id} className = 'hotel-item' >
              <div className='hotel-image'>
                <img  src={`/img/Slider/Hotel/${image}${id}.jpg`}/>
              </div>
              <div className='hotel-info'>
                <h3 className='hotel-title'>{name}</h3>
                <label>description</label>
                <span className="hotel-description">{description}</span>
                <label>room types</label>
                <span className='hotel-types'>{roomTypes}</span>
                <label>room seats</label>
                <span className='hotel-room-numbers'>{roomNumber}</span>
                <div className='info-price-block'>
                  <label>price</label>
                  <span className="hotel-price">{price} P&G</span>
                  <div className='btn-group'>
                    <button onClick={() => priceHotel(item)} className='btn-count'>
                      Count
                    </button>
                    <button className='btn-phone'>
                      Request call
                    </button>
                  </div>
                </div>
              </div>
            < /div>
          })
        }
      </div>
      <div className='price-block'>
          <div className="price-info">
            <h3>{countPriceHotel.name}</h3>
            <div className='price-amount'>
            <label>total amount</label>
            <span>{totalPrice} P&G</span>
          </div>
          </div>
      </div>
    </div>
  );
};

export default SelectionService;