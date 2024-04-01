import Modal from "../../Modal/Modal"
import { ModalSubtitle, ModalTitle, ModalCloseButton } from "../CommonStyles.styled"
import { Popup, PopupFooter, PopupBtnRemove, PopupBtnClose } from "./PopupDelete.styled"
import icons from '../../../assets/icons.svg';

export function PopupDelete() {
    return (
      <Modal isOpen>
            <Popup>
                <ModalTitle>Delete entry</ModalTitle>
                <ModalCloseButton>
                    <svg >
                        <use href={`${icons}#icon-close`}></use>
                    </svg>
                </ModalCloseButton>
                <ModalSubtitle>Are you sure you want to delete the entry?</ModalSubtitle>
                <PopupFooter>
                    <PopupBtnClose type="button">Cancel</PopupBtnClose>
                    <PopupBtnRemove type="button">Delete</PopupBtnRemove>
                </PopupFooter>
            </Popup>  
      </Modal>
  )
}