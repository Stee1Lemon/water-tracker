import { WaterListWrap, List, ListItem, WaterListTitle, WaterListButton, ListItemTools, ItemBtnEdit, ItemBtnDelete } from "./TodayWaterList.styled"
import icons from '../../../assets/icons.svg';
import {TodayWaterInfo} from "../TodayWaterInfo/TodayWaterInfo"

export const TodayWaterList = () => {
    return (
        <WaterListWrap>
            <WaterListTitle>Today</WaterListTitle>
            <List>
                <ListItem>
                    <TodayWaterInfo/>
                    <ListItemTools>
                        <ItemBtnEdit type="button">
                            <svg>
                                <use href={`${icons}#icon-icon-pencil`}></use>
                            </svg>
                        </ItemBtnEdit>
                        <ItemBtnDelete type="button">
                            <svg>
                                <use href={`${icons}#icon-trash`}></use>
                            </svg>
                        </ItemBtnDelete>
                    </ListItemTools>
                </ListItem>
            </List>
            <WaterListButton type="button">
                <span>+</span>Add water
            </WaterListButton>
      </WaterListWrap>
  )
}
