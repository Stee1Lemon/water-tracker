import ModalOverlay from 'components/ModalOverlay/ModalOverlay';
import { TodayWaterInfo } from "../TodayWaterInfo/TodayWaterInfo"
import { AddWaterModal, PrevInfo, WaterCounter, CounterLabel, CounterBtn, ModalFooter, Label, ModalBtn } from "./TodayListModal.styled"
import { Input, ModalSubtitle, ModalTitle, ModalCloseButton } from "../CommonStyles.styled"
import icons from '../../../assets/icons.svg';
import { useState } from 'react';

export const TodayListModal = ({ isOpen, onClose, type }) => {
  const [volume, setVolume] = useState(0);

  const increaseVolume = () => {
    setVolume((prev) => prev === "" ? 0 : parseFloat(prev) + 50);
  };
  const decreaseVolume = () => {
    setVolume((prev) => prev > 50 ? prev - 50 : 0);
  };
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
                <div>
                    <p>Recording time:</p>
                    <Input type="time" name="time" />
                </div>
                <div>
                  <ModalSubtitle>Enter the value of the water used:</ModalSubtitle>
                  <Input type="number" name="volume" min="0" value={volume} onChange={e => setVolume(e.target.value)}/>
                </div>
                  <ModalFooter>
                      <Label>{volume || 0}ml</Label>
                      <ModalBtn>Save</ModalBtn>
                  </ModalFooter>
          </AddWaterModal> 
    </ModalOverlay>
  )
}