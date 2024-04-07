import { WaterListWrap, List, ListItem, WaterListTitle, WaterListButton, ListItemTools, ItemBtnEdit, ItemBtnDelete} from "./TodayWaterList.styled"
import icons from '../../../assets/icons.svg';
import { TodayWaterInfo } from "../TodayWaterInfo/TodayWaterInfo"
import { TodayListModal } from "../TodayListModal/TodayListModal"
import {PopupDelete} from "../PopupDelete/PopupDelete"
import { useState } from "react";
import {CustomScrollbars} from "../CustomScrollbars/CustomScrollbars"
import { selectTodayWater } from "../../../redux/water/waterSelectors";

import {dailyWaterList} from "../arr.js"
import { useSelector } from "react-redux";

export const TodayWaterList = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditing, setisEditing] = useState(false);
    const [isDelete, setIsDelete] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const today = useSelector(selectTodayWater);
  console.log('TodayWaterList :>> ', useSelector(selectTodayWater));

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
            <List>
                <CustomScrollbars>
                {dailyWaterList?.length > 0 && dailyWaterList.map((item) => {
                    return (
                         <ListItem key={item._id}>
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
            <WaterListButton onClick={openModalToAdd} type="button">
                <span>+</span>Add water
            </WaterListButton>
            {isDelete ?
                <PopupDelete isOpen={isModalOpen} onClose={closeModal} selectedItemId={selectedItem?._id}/>
                : <TodayListModal isOpen={isModalOpen} onClose={closeModal} isEditing={isEditing} selectedItemId={selectedItem?._id} amountWater={selectedItem?.amountWater} date={selectedItem?.date}/>}
      </WaterListWrap>
  )
}
