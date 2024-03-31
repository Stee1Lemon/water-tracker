import { WaterListWrap, List, ListItem, WaterListTitle, WaterListButton, ListItemTools, ListItemInfo, ListItemVolume, ListItemTime, ItemBtnEdit, ItemBtnDelete } from "./TodayWaterList.styled"
import { ReactComponent as AddWaterIcon } from '../homeIcons/plus.svg';
import { ReactComponent as WaterGlassIcon } from '../homeIcons/glass.svg';
import { ReactComponent as WaterEditIcon } from '../homeIcons/pen.svg';
import { ReactComponent as WaterDeleteIcon } from '../homeIcons/trash.svg';

export const TodayWaterList = () => {
    return (
        <WaterListWrap>
            <WaterListTitle>Today</WaterListTitle>
            <List>
                <ListItem>
                    <ListItemInfo>
                        <WaterGlassIcon />
                        <ListItemVolume>250 ml</ListItemVolume>
                        <ListItemTime>7:00 AM</ListItemTime>
                    </ListItemInfo>
                    <ListItemTools>
                        <ItemBtnEdit type="button"><WaterEditIcon /></ItemBtnEdit>
                        <ItemBtnDelete type="button"><WaterDeleteIcon /></ItemBtnDelete>
                    </ListItemTools>
                </ListItem>
                <ListItem>
                    <ListItemInfo>
                        <WaterGlassIcon />
                        <ListItemVolume>250 ml</ListItemVolume>
                        <ListItemTime>7:00 AM</ListItemTime>
                    </ListItemInfo>
                    <ListItemTools>
                        <ItemBtnEdit type="button"><WaterEditIcon /></ItemBtnEdit>
                        <ItemBtnDelete type="button"><WaterDeleteIcon /></ItemBtnDelete>
                    </ListItemTools>
                </ListItem>
                <ListItem>
                    <ListItemInfo>
                        <WaterGlassIcon />
                        <ListItemVolume>250 ml</ListItemVolume>
                        <ListItemTime>7:00 AM</ListItemTime>
                    </ListItemInfo>
                    <ListItemTools>
                        <ItemBtnEdit type="button"><WaterEditIcon /></ItemBtnEdit>
                        <ItemBtnDelete type="button"><WaterDeleteIcon /></ItemBtnDelete>
                    </ListItemTools>
                </ListItem>
                <ListItem>
                    <ListItemInfo>
                        <WaterGlassIcon />
                        <ListItemVolume>250 ml</ListItemVolume>
                        <ListItemTime>7:00 AM</ListItemTime>
                    </ListItemInfo>
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
