import ModalOverlay from 'components/ModalOverlay/ModalOverlay';
import { TodayWaterInfo } from "../TodayWaterInfo/TodayWaterInfo"
import { AddWaterModal, PrevInfo, WaterCounter, CounterLabel, CounterBtn, ModalFooter, Label, ModalBtn, Form, TimeInput } from "./TodayListModal.styled"
import { Input, ModalSubtitle, ModalTitle, ModalCloseButton } from "../CommonStyles.styled"
import icons from '../../../assets/icons.svg';
import { useEffect, useState } from 'react';
import { format } from 'date-fns';
// import { Formik } from 'formik';


const maxVolumeLimit = 5000;
const minVolumeLimit = 50;
const step = 50;


const getOptions = () => {
  const options = [];

  for (let i = 0; i < 24; i++) {
    for (let j = 0; j < 60; j += 5) {
      const hour = i < 10 ? `0${i}` : `${i}`;
      const minute = j < 10 ? `0${j}` : `${j}`;
      options.push({
        value: `${hour}:${minute}`,
        label: `${hour}:${minute}`,
      });
    }
  }
  return options;
};


const getCurrentTime = date => {
  const currentTime = date ? new Date(date) : new Date();
  const minutes = currentTime.getMinutes();
  const roundedMinutes = Math.ceil(minutes / 5) * 5;
  currentTime.setMinutes(roundedMinutes);
  return currentTime;
};



export const TodayListModal = ({ isOpen, onClose, isEditing, selectedItemId, amountWater, date }) => {

  const [volume, setVolume] = useState(amountWater||0);

  // Дані введені через інпут
  const [enteredVolume, setEnteredVolume] = useState(volume);
  
  // ___________________________________________________Time

  const now = getCurrentTime(date);
  const nowTimeRounded = format(new Date(now), 'HH:mm');
  const nowTime = format(new Date(), 'HH:mm');

   const [time, setTime] = useState({
    value: nowTimeRounded,
    label: nowTime,
   })
  
  
  
  useEffect(() => {
    if (isEditing) {
      setVolume(amountWater);
      setEnteredVolume(amountWater)
    } 
      
  }, [isEditing, amountWater])
  
  console.log('volume :>> ', volume);
  console.log('time  :>> ', date);

  const handleChangeTime = selectedOption => {
    setTime(selectedOption);
  };

  const onMenuOpen = () => {
    requestAnimationFrame(() => {
      const selectedOption = document.querySelector(
        '.Select__option--is-selected'
      );
      if (selectedOption) {
        selectedOption.scrollIntoView({});
      }
    });
  };
  // ---------------------------------------------------
  

  //_____________________________________________ Volume

  const increaseVolume = () => {
    if (volume >= maxVolumeLimit) {
      return;
    }
    setVolume((prev) => parseFloat(prev) + step);
    setEnteredVolume((prev) => parseFloat(prev) + step);
  };

  const decreaseVolume = () => {
    if (volume <= minVolumeLimit) {
      return;
    }
    setVolume((prev) => parseFloat(prev) - step);
    setEnteredVolume((prev) => parseFloat(prev) - step);
  };

  const handleOnFocus = (e) => {
     e.target.value = '';
  }

  const handleOnBlur = (e) => {
      if (!e.target.value) {
      e.target.value = volume;
      return;
    }
    const value = parseFloat(e.target.value);
    if (value >= 0 && value <= maxVolumeLimit) {
      setVolume(value);
    }
  }

  const handleChangeVolume = e => {
   setEnteredVolume(e.target.value);
  };
// ---------------------------------------------------------

  const handleOnSubmit = (e) => {
    e.preventDefault();
    let selectedDate;
    // Add Water Modal
    if (!isEditing) {
      // Беремо поточний день
      const currentDate = new Date();

      // Беремо години і хвилини обрані користувачем
      const [hours, minutes] = time.value.split(':');

      // Редагуємо поточну дату з урахуванням обраного часу
      currentDate.setHours(hours, minutes, 0);
      // console.log(' currentDate:>> ',currentDate);
      selectedDate = currentDate.toISOString();
      // console.log(' selectedDate:>> ',selectedDate);
    }
    console.log('ADD Water data :>> ', {
      time: selectedDate,
      water: volume
    });
  }
  return (
    <ModalOverlay isOpen={isOpen} onClose={onClose}>
          <AddWaterModal>
        <ModalTitle>{isEditing? "Edit the entered amount of water" : "Add water"}</ModalTitle>
              <ModalCloseButton onClick={onClose}>
                <svg >
                <use href={`${icons}#icon-close`}></use>
                </svg>
              </ModalCloseButton>
              {isEditing && <PrevInfo><TodayWaterInfo data={{amountWater,date}}/></PrevInfo>}
              <div>
                <ModalSubtitle>{isEditing? "Correct entered data:" : "Choose a value:"}</ModalSubtitle>
                <p>Amount of water:</p>
                <WaterCounter>
                  <CounterBtn minus onClick={decreaseVolume}>
                    <svg>
                      <use href={`${icons}#icon-minus`}></use>
                    </svg>
                  </CounterBtn>
                  <CounterLabel>{volume}</CounterLabel>
                  <CounterBtn plus onClick={increaseVolume}>
                    <svg>
                      <use href={`${icons}#icon-plus`}></use>
                    </svg>
                  </CounterBtn>
                </WaterCounter>
              </div>
              <Form onSubmit={handleOnSubmit}>
                <div>
            <p>Recording time:</p>
              <TimeInput classNamePrefix={'Select'}
              options={getOptions()} value={time} defaultValue={time} onChange={handleChangeTime} onMenuOpen={onMenuOpen}/>
                </div>
                <div>
                  <ModalSubtitle>Enter the value of the water used:</ModalSubtitle>
                  <Input type="number" name="volume" min="0" value={enteredVolume} onChange={handleChangeVolume} onFocus={handleOnFocus} onBlur={handleOnBlur}/>
                </div>
                <ModalFooter>
                  <Label>{volume}ml</Label>
                  <ModalBtn type='submit'>Save</ModalBtn>
                </ModalFooter>
             </Form>
          </AddWaterModal> 
    </ModalOverlay>
  )
}