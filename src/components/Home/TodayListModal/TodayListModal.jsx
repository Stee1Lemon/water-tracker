import ModalOverlay from 'components/ModalOverlay/ModalOverlay';
import { TodayWaterInfo } from "../TodayWaterInfo/TodayWaterInfo"
import { AddWaterModal, PrevInfo, WaterCounter, CounterLabel, CounterBtn, ModalFooter, Label, ModalBtn, Form, TimeInput } from "./TodayListModal.styled"
import { Input, ModalSubtitle, ModalTitle, ModalCloseButton } from "../CommonStyles.styled"
import icons from '../../../assets/icons.svg';
import { useState } from 'react';
import { format } from 'date-fns';
import { Formik } from 'formik';


const getTimeOptions = () => {
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



export const TodayListModal = ({ isOpen, onClose, type }) => {
  const [volume, setVolume] = useState(0);
  const [time, setTime] = useState({
    value: format(new Date(), 'HH:mm'),
    label: format(new Date(), 'HH:mm'),
  })
  //  const [time, setTime] = useState(new Date())
  console.log('time :>> ', time);

  const increaseVolume = () => {
    setVolume((prev) => prev === "" ? 0 : parseFloat(prev) + 50);
  };
  const decreaseVolume = () => {
    setVolume((prev) => prev > 50 ? prev - 50 : 0);
  };

  const handleChangeTime = selectedOption => {
    setTime(selectedOption);
  };

  // const onMenuOpen = () => {
  //   requestAnimationFrame(() => {
  //     const selectedEl = document.querySelector(
  //       '.MyDropdown__option--is-selected'
  //     );
  //     if (selectedEl) {
  //       selectedEl.scrollIntoView({});
  //     }
  //   });
  // };


  const handleOnSubmit = (e) => {
    e.preventDefault();
    let selectedDate;
    // Add Water Modal
    if (!type) {
      // Беремо поточний день
      const currentDate = new Date();
       // Беремо години і хвилини обрані користувачем
      const [hours, minutes] = time.split(':');
      // Редагуємо поточну дату з урахуванням обраного часу
      currentDate.setHours(hours, minutes, 0);
      // console.log(' currentDate:>> ',currentDate);
      selectedDate = currentDate.toUTCString();
      console.log(' selectedDate:>> ',selectedDate);
    }
    if (type) {
      // Беремо поточний день
      const currentDate = new Date();
       // Беремо години і хвилини обрані користувачем
      const [hours, minutes] = time.split(':');
      // Редагуємо поточну дату з урахуванням обраного часу
      currentDate.setHours(hours, minutes, 0);
      // console.log(' currentDate:>> ',currentDate);
      selectedDate = currentDate.toUTCString();
      console.log(' selectedDate:>> ',selectedDate);
    }
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
              <TimeInput classNamePrefix={'MyDropdown'}
              options={getTimeOptions()} value={time} defaultValue={time} onChange={handleChangeTime} />
            {/* <Input type="time" name="time" step={step} value={time} onChange={e => {
              console.log('e.target Time :>> ', e);
              setTime(e.target.value)
            }} /> */}
                </div>
                <div>
                  <ModalSubtitle>Enter the value of the water used:</ModalSubtitle>
                  <Input type="number" name="volume" min="0" value={volume} onChange={e => setVolume(e.target.value)}/>
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