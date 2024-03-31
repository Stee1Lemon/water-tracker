import Modal from "../../Modal/Modal"
import { TodayWaterInfo } from "../TodayWaterInfo/TodayWaterInfo"
import { AddWaterModal, PrevInfo, WaterCounter, CounterLabel, CounterBtn, ModalFooter, Label, ModalBtn } from "./TodayListModal.styled"
import {Input, ModalSubtitle, ModalTitle} from "../CommonStyles.styled"
import { ReactComponent as IncrementIcon } from '../homeIcons/increment.svg';
import { ReactComponent as DecrementIcon } from '../homeIcons/decrement.svg';

export const TodayListModal = () => {
  return (
    <Modal isOpen>
          <AddWaterModal>
                <ModalTitle>Edit the entered amount of water</ModalTitle>
              <PrevInfo><TodayWaterInfo /></PrevInfo>
              <div>
                <ModalSubtitle>Correct entered data:</ModalSubtitle>
                <p>Amount of water:</p>
                <WaterCounter>
                  <CounterBtn><DecrementIcon/></CounterBtn>
                  <CounterLabel>200 ml</CounterLabel>
                  <CounterBtn><IncrementIcon/></CounterBtn>
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