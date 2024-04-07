import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useDispatch } from 'react-redux';

import ModalOverlay from 'components/ModalOverlay/ModalOverlay';

import { ModalSubtitle, ModalTitle, ModalCloseButton } from "../CommonStyles.styled"
import { Popup, PopupFooter, PopupBtnRemove, PopupBtnClose } from "./PopupDelete.styled"
import icons from '../../../assets/icons.svg';

import waterApi from "../../../redux/water/waterOperations"
import { useTranslation } from 'react-i18next';

export function PopupDelete({ isOpen, onClose, selectedItemId }) {
    const { t } = useTranslation();

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
                <ModalTitle>{t('deleteEntryModal.header')}</ModalTitle>
                <ModalCloseButton onClick={onClose}>
                    <svg >
                        <use href={`${icons}#icon-close`}></use>
                    </svg>
                </ModalCloseButton>
                <ModalSubtitle>{t('deleteEntryModal.question')}</ModalSubtitle>
                <PopupFooter>
                    <PopupBtnClose onClick={onClose} type="button">{t('deleteEntryModal.buttonCancel')}</PopupBtnClose>
                    <PopupBtnRemove onClick={handleDelete} type="button">{t('deleteEntryModal.buttonDelete')}</PopupBtnRemove>
                </PopupFooter>
            </Popup>  
      </ModalOverlay>
  )
}