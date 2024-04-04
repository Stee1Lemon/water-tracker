import ModalOverlay from 'components/ModalOverlay/ModalOverlay';
import { TodayWaterInfo } from "../TodayWaterInfo/TodayWaterInfo"
import { AddWaterModal, PrevInfo, WaterCounter, CounterLabel, CounterBtn, ModalFooter, Label, ModalBtn, Form, TimeInput } from "./TodayListModal.styled"
import { Input, ModalSubtitle, ModalTitle, ModalCloseButton } from "../CommonStyles.styled"
import icons from '../../../assets/icons.svg';
import { useState } from 'react';
import { format } from 'date-fns';
import { Formik } from 'formik';


const maxVolumeLimit = 2000;
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
  currentTime.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });
  return currentTime;
};



export const TodayListModal = ({ isOpen, onClose, type }) => {
  const [volume, setVolume] = useState(0);

  // Дані введені через інпут
  const [enteredVolume, setEnteredVolume] = useState(volume);
  
  const now = getCurrentTime();
  const nowTimeRounded = format(new Date(now), 'HH:mm');
  const nowTime = format(new Date(), 'HH:mm');
   const [time, setTime] = useState({
    value: nowTimeRounded,
    label: nowTime,
  })

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

  const handleChangeTime = selectedOption => {
    setTime(selectedOption);
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


  const handleOnSubmit = (e) => {
    e.preventDefault();
    let selectedDate;
    // Add Water Modal
    if (!type) {
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
        <ModalTitle>{type? "Edit the entered amount of water" : "Add water"}</ModalTitle>
              <ModalCloseButton onClick={onClose}>
                <svg >
                <use href={`${icons}#icon-close`}></use>
                </svg>
              </ModalCloseButton>
              {type && <PrevInfo><TodayWaterInfo /></PrevInfo>}
              <div>
                <ModalSubtitle>{type? "Correct entered data:" : "Choose a value:"}</ModalSubtitle>
                <p>Amount of water:</p>
                <WaterCounter>
                  <CounterBtn minus onClick={decreaseVolume}>
                    <svg>
                      <use href={`${icons}#icon-minus`}></use>
                    </svg>
                  </CounterBtn>
                  <CounterLabel>{volume || 0}</CounterLabel>
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
            {/* <Input type="time" name="time" step={step} value={time} onChange={e => {
              console.log('e.target Time :>> ', e);
              setTime(e.target.value)
            }} /> */}
                </div>
                <div>
                  <ModalSubtitle>Enter the value of the water used:</ModalSubtitle>
                  <Input type="number" name="volume" min="0" value={enteredVolume} onChange={handleChangeVolume} onFocus={handleOnFocus} onBlur={handleOnBlur}/>
                </div>
                <ModalFooter>
                  <Label>{volume || 0}ml</Label>
                  <ModalBtn type='submit'>Save</ModalBtn>
                </ModalFooter>
             </Form>
          </AddWaterModal> 
    </ModalOverlay>
  )
}