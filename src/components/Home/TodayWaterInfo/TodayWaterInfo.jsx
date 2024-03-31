import { ReactComponent as WaterGlassIcon } from '../homeIcons/glass.svg';
import {ListItemInfo, ListItemVolume, ListItemTime} from "./TodayWaterInfo.styled"

export const TodayWaterInfo = () => {
  return (
   <ListItemInfo>
        <WaterGlassIcon />
        <ListItemVolume>250 ml</ListItemVolume>
        <ListItemTime>7:00 AM</ListItemTime>
    </ListItemInfo>
  )
}
