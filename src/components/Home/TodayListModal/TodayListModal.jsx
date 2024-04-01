import Modal from "../../Modal/Modal"
import { TodayWaterInfo } from "../TodayWaterInfo/TodayWaterInfo"
import { AddWaterModal, PrevInfo, WaterCounter, CounterLabel, CounterBtn, ModalFooter, Label, ModalBtn } from "./TodayListModal.styled"
import { Input, ModalSubtitle, ModalTitle, ModalCloseButton } from "../CommonStyles.styled"
import icons from '../../../assets/icons.svg';

export const TodayListModal = () => {
  return (
    <Modal isOpen>
          <AddWaterModal>
              <ModalTitle>Edit the entered amount of water</ModalTitle>
              <ModalCloseButton>
                <svg >
                <use href={`${icons}#icon-close`}></use>
                </svg>
              </ModalCloseButton>
              <PrevInfo><TodayWaterInfo /></PrevInfo>
              <div>
                <ModalSubtitle>Correct entered data:</ModalSubtitle>
                <p>Amount of water:</p>
                <WaterCounter>
                  <CounterBtn minus>
                    <svg>
                      <use href={`${icons}#icon-minus`}></use>
                    </svg>
                  </CounterBtn>
                  <CounterLabel>200 ml</CounterLabel>
                  <CounterBtn plus>
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
                    <Input type="number" name="volume" min="0"/>
                </div>
                  <ModalFooter>
                      <Label>200 ml</Label>
                      <ModalBtn>Save</ModalBtn>
                  </ModalFooter>
          </AddWaterModal> 
    </Modal>
  )
}