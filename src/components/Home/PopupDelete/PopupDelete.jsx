import ModalOverlay from 'components/ModalOverlay/ModalOverlay';
import { ModalSubtitle, ModalTitle, ModalCloseButton } from "../CommonStyles.styled"
import { Popup, PopupFooter, PopupBtnRemove, PopupBtnClose } from "./PopupDelete.styled"
import icons from '../../../assets/icons.svg';

export function PopupDelete({ isOpen, onClose, selectedItemId }) {
    const handleDelete = () => {
        console.log('DELETE PORTION WATER :>> ', {_id:selectedItemId});
    }
    return (
      <ModalOverlay isOpen={isOpen} onClose={onClose}>
            <Popup>
                <ModalTitle>Delete entry</ModalTitle>
                <ModalCloseButton onClick={onClose}>
                    <svg >
                        <use href={`${icons}#icon-close`}></use>
                    </svg>
                </ModalCloseButton>
                <ModalSubtitle>Are you sure you want to delete the entry?</ModalSubtitle>
                <PopupFooter>
                    <PopupBtnClose onClick={onClose} type="button">Cancel</PopupBtnClose>
                    <PopupBtnRemove onClick={handleDelete} type="button">Delete</PopupBtnRemove>
                </PopupFooter>
            </Popup>  
      </ModalOverlay>
  )
}