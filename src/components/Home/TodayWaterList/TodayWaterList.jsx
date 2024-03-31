import { WaterListWrap, List, ListItem, WaterListTitle, WaterListButton, ListItemTools, ItemBtnEdit, ItemBtnDelete } from "./TodayWaterList.styled"
import { ReactComponent as AddWaterIcon } from '../homeIcons/plus.svg';
import { ReactComponent as WaterEditIcon } from '../homeIcons/pen.svg';
import { ReactComponent as WaterDeleteIcon } from '../homeIcons/trash.svg';
import {TodayWaterInfo} from "../TodayWaterInfo/TodayWaterInfo"

export const TodayWaterList = () => {
    return (
        <WaterListWrap>
            <WaterListTitle>Today</WaterListTitle>
            <List>
                <ListItem>
                    <TodayWaterInfo/>
                    <ListItemTools>
                        <ItemBtnEdit type="button"><WaterEditIcon /></ItemBtnEdit>
                        <ItemBtnDelete type="button"><WaterDeleteIcon /></ItemBtnDelete>
                    </ListItemTools>
                </ListItem>
            </List>
            <WaterListButton type="button"><AddWaterIcon/><span>Add water</span></WaterListButton>
      </WaterListWrap>
  )
}
