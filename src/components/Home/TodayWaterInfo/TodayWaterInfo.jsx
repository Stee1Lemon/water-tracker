import { ListItemInfo, ListItemVolume, ListItemTime } from "./TodayWaterInfo.styled"
import icons from '../../../assets/icons.svg';

export const TodayWaterInfo = () => {
  return (
   <ListItemInfo>
      <svg >
        <use href={`${icons}#icon-glass`}></use>
      </svg>
        <ListItemVolume>250 ml</ListItemVolume>
        <ListItemTime>7:00 AM</ListItemTime>
    </ListItemInfo>
  )
}
