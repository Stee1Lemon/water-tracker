import Modal from "../../Modal/Modal"
import { ModalSubtitle, ModalTitle } from "../CommonStyles.styled"
import {Popup, PopupFooter, PopupBtnRemove, PopupBtnClose} from "./PopupDelete.styled"

export function PopupDelete() {
    return (
      <Modal isOpen>
            <Popup>
                <ModalTitle>Delete entry</ModalTitle>
                <ModalSubtitle>Are you sure you want to delete the entry?</ModalSubtitle>
                <PopupFooter>
                    <PopupBtnClose type="button">Cancel</PopupBtnClose>
                    <PopupBtnRemove type="button">Delete</PopupBtnRemove>
                </PopupFooter>
            </Popup>  
      </Modal>
  )
}