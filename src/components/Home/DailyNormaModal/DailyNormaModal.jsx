import ModalOverlay from 'components/ModalOverlay/ModalOverlay';
import { NormaModal, ModalBtn, CalculationScheme, CalculationText, CalculationItem, CalculationResult, Form, FormRadioItems, RadioItem } from "./DailyNormaModal.styled"
import { Input, ModalSubtitle, ModalTitle, ModalCloseButton } from "../CommonStyles.styled"
import icons from '../../../assets/icons.svg';

export const DailyNormaModal = ({isOpen, onClose}) => {
  return (
    <ModalOverlay isOpen={isOpen} onClose={onClose}>
          <NormaModal>
        <ModalTitle>My daily norma</ModalTitle>
        <ModalCloseButton onClick={onClose}>
          <svg >
            <use href={`${icons}#icon-close`}></use>
          </svg>
        </ModalCloseButton>
              <div>
                  <CalculationScheme>
                      <p>For girl: <span>V=(M*0,03) + (T*0,4)</span></p>
                      <p>For man: <span>V=(M*0,04) + (T*0,6)</span></p>
                  </CalculationScheme>
                  <CalculationText><span>*</span> V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)</CalculationText>
              </div>
              <Form>
              <div>
                <ModalSubtitle>Calculate your rate:</ModalSubtitle>
                      <FormRadioItems>
                          <RadioItem>
                            <input
                            id="gender-f"
                            type="radio"
                            name="gender"
                            value="female" />
                            <label htmlFor="gender-f">For girl</label>
                          </RadioItem>
                        <RadioItem>
                            <input
                            id="gender-m"
                            type="radio"
                            name="gender"
                            value="male" />
                            <label htmlFor="gender-m">For man</label>
                          </RadioItem>
                    </FormRadioItems>  
                <CalculationItem>
                    <p>Your weight in kilograms:</p>
                    <Input type="number" name="weight" min="0"/>
                </CalculationItem>
                <CalculationItem>
                    <p>The time of active participation in sports or other activities with a high physical. load in hours:</p>
                    <Input type="number" name="activity" min="0"/>
                  </CalculationItem>
                  <CalculationResult><p>The required amount of water in liters per day:</p><span>1.8 L</span></CalculationResult>
              </div>
              <div>
                  <ModalSubtitle>Write down how much water you will drink:</ModalSubtitle>
                  <Input type="number" name="volume" min="0"/>
              </div>
                  <ModalBtn type="submit">Save</ModalBtn>
            </Form>
          </NormaModal>
    </ModalOverlay>
  )
}