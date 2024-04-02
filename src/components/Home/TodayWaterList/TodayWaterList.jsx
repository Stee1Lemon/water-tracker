import { WaterListWrap, List, ListItem, WaterListTitle, WaterListButton, ListItemTools, ItemBtnEdit, ItemBtnDelete } from "./TodayWaterList.styled"
import icons from '../../../assets/icons.svg';
import { TodayWaterInfo } from "../TodayWaterInfo/TodayWaterInfo"
import { TodayListModal } from "../TodayListModal/TodayListModal"
import {PopupDelete} from "../PopupDelete/PopupDelete"
import { useState } from "react";

export const TodayWaterList = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalType, setModalType] = useState(null);
    const [isDelete, setIsDelete] = useState(false);

    const openModalToAdd = () => {
        setIsModalOpen(true);
        setModalType(null);
        setIsDelete(false);
    };
    const openModalToEdit = () => {
        setIsModalOpen(true);
        setModalType("edit");
        setIsDelete(false);
    };
    const openModalToDelete = () => {
        setIsModalOpen(true);
        setIsDelete(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <WaterListWrap>
            <WaterListTitle>Today</WaterListTitle>
            <List>
                <ListItem>
                    <TodayWaterInfo/>
                    <ListItemTools>
                        <ItemBtnEdit type="button" onClick={openModalToEdit}>
                            <svg>
                                <use href={`${icons}#icon-icon-pencil`}></use>
                            </svg>
                        </ItemBtnEdit>
                        <ItemBtnDelete type="button" onClick={openModalToDelete}>
                            <svg>
                                <use href={`${icons}#icon-trash`}></use>
                            </svg>
                        </ItemBtnDelete>
                    </ListItemTools>
                </ListItem>
            </List>
            <WaterListButton onClick={openModalToAdd} type="button">
                <span>+</span>Add water
            </WaterListButton>
            {isDelete? <PopupDelete isOpen={isModalOpen}
                onClose={closeModal}/> :<TodayListModal isOpen={isModalOpen}
                onClose={closeModal} type={modalType} />}
      </WaterListWrap>
  )
}
