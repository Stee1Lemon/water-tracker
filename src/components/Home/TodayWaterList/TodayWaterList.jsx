import { useSelector } from "react-redux";
import { useState } from "react";

import { TodayWaterInfo } from "../TodayWaterInfo/TodayWaterInfo"
import { TodayListModal } from "../TodayListModal/TodayListModal"
import { PopupDelete } from "../PopupDelete/PopupDelete"

import { WaterListWrap, List, ListItem, WaterListTitle, WaterListButton, ListItemTools, ItemBtnEdit, ItemBtnDelete } from "./TodayWaterList.styled"
import icons from '../../../assets/icons.svg';

import { selectTodayWater } from "../../../redux/water/waterSelectors";
import { getConvertedTime } from "../../../hooks/water"
import { useTranslation } from 'react-i18next'; 

export const TodayWaterList = () => {
    const { t } = useTranslation();
    const { portionsOfWater } = useSelector(selectTodayWater);
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditing, setisEditing] = useState(false);
    const [isDelete, setIsDelete] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const openModalToAdd = () => {
        setIsModalOpen(true);
        setisEditing(false);
        setIsDelete(false);
        setSelectedItem(null)
    };
    const openModalToEdit = (item) => {
        setIsModalOpen(true);
        setisEditing(true);
        setIsDelete(false);
        setSelectedItem(item)
    };
    const openModalToDelete = (item) => {
        setIsModalOpen(true);
        setIsDelete(true);
         setSelectedItem(item)
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <WaterListWrap>
            <WaterListTitle>{t('today')}</WaterListTitle>
            {portionsOfWater?.length > 0 &&
            <List>
                {portionsOfWater.slice().sort((a,b)=>{return getConvertedTime(a.time).getTime() - getConvertedTime(b.time).getTime()}).map((item) => {
                    return (
                         <ListItem key={item.id}>
                            <TodayWaterInfo data={item} />
                    <ListItemTools>
                        <ItemBtnEdit type="button" onClick={()=>openModalToEdit(item)}>
                            <svg>
                                <use href={`${icons}#icon-icon-pencil`}></use>
                            </svg>
                        </ItemBtnEdit>
                        <ItemBtnDelete type="button" onClick={()=>openModalToDelete(item)}>
                            <svg>
                                <use href={`${icons}#icon-trash`}></use>
                            </svg>
                        </ItemBtnDelete>
                    </ListItemTools>
                </ListItem>
                    )
                })}
            </List>
            }
            <WaterListButton onClick={openModalToAdd} type="button">
                <span>+</span>{t('addEditWaterModal.headerAdd')}
            </WaterListButton>
            {isDelete ?
                <PopupDelete isOpen={isModalOpen} onClose={closeModal} selectedItemId={selectedItem?.id}/>
                : <TodayListModal isOpen={isModalOpen} onClose={closeModal} isEditing={isEditing} selectedItemId={selectedItem?.id} amountWater={selectedItem?.amount} date={selectedItem?.time}/>}
      </WaterListWrap>
  )
}
