import { useSelector } from "react-redux";
import { useState } from "react";

import { TodayWaterInfo } from "../TodayWaterInfo/TodayWaterInfo"
import { TodayListModal } from "../TodayListModal/TodayListModal"
import { PopupDelete } from "../PopupDelete/PopupDelete"
import {CustomScrollbars} from "../CustomScrollbars/CustomScrollbars"

import { WaterListWrap, List, ListItem, WaterListTitle, WaterListButton, ListItemTools, ItemBtnEdit, ItemBtnDelete } from "./TodayWaterList.styled"
import icons from '../../../assets/icons.svg';

import { selectTodayWater } from "../../../redux/water/waterSelectors";

export const TodayWaterList = () => {
    const { portionsOfWater } = useSelector(selectTodayWater);
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditing, setisEditing] = useState(false);
    const [isDelete, setIsDelete] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

  console.log('portionsOfWater :>> ', portionsOfWater);

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
            <WaterListTitle>Today</WaterListTitle>
            {portionsOfWater?.length > 0 &&
            <List>
                <CustomScrollbars>
                {portionsOfWater.map((item) => {
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
                </CustomScrollbars>
            </List>
            }
            <WaterListButton onClick={openModalToAdd} type="button">
                <span>+</span>Add water
            </WaterListButton>
            {isDelete ?
                <PopupDelete isOpen={isModalOpen} onClose={closeModal} selectedItemId={selectedItem?.id}/>
                : <TodayListModal isOpen={isModalOpen} onClose={closeModal} isEditing={isEditing} selectedItemId={selectedItem?.id} amountWater={selectedItem?.amount} date={selectedItem?.time}/>}
      </WaterListWrap>
  )
}
