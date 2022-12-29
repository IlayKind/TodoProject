import React, {useState} from 'react';
import './Modal.scss'
import ImageBlock from "./PresentTour/ImageBlock";
import InfoBlock from "./PresentTour/InfoBlock";
import SelectionService from "./SelectionService/SelectionService";

const ModalWindow = ({modalActive, setModalActive}) => {
  const [imageNumber, setImageNumber] = useState(1)
  const [exactChoice, setExactChoice] = useState(false)


  const closeModal = () => {
    setModalActive(false);
    setImageNumber(1)
    setExactChoice(false)
  };

  return (
    <div className={modalActive ? "modal-window active" : 'modal-window'} onClick={closeModal}>
      <div className='modal__content-container' onClick={(e) => e.stopPropagation()}>
        <div className='modal-content'>
          {
            !exactChoice ? <>
              <ImageBlock imageNumber={imageNumber} setImageNumber={setImageNumber} />
              <InfoBlock setExactChoice={setExactChoice}/>
            </> : <SelectionService setExactChoice={setExactChoice}/>
          }
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;