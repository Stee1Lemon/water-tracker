import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useDispatch } from 'react-redux';

import ModalOverlay from 'components/ModalOverlay/ModalOverlay';

import { ModalSubtitle, ModalTitle, ModalCloseButton } from "../CommonStyles.styled"
import { Popup, PopupFooter, PopupBtnRemove, PopupBtnClose } from "./PopupDelete.styled"
import icons from '../../../assets/icons.svg';

import waterApi from "../../../redux/water/waterOperations"

export function PopupDelete({ isOpen, onClose, selectedItemId }) {
    
    const dispatch = useDispatch();
    
    const handleDelete = () => {
        dispatch(waterApi.deleteWaterThunk({
        id: selectedItemId,
        }));
        Notify.success('The portion is removed');
        onClose()
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