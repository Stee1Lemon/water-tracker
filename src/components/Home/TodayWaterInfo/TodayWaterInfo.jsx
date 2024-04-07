import { ListItemInfo, ListItemVolume, ListItemTime } from "./TodayWaterInfo.styled"
import icons from '../../../assets/icons.svg';

export const TodayWaterInfo = ({data:{amount,time}}) => {
  return (
   <ListItemInfo>
      <svg >
        <use href={`${icons}#icon-glass`}></use>
      </svg>
        <ListItemVolume>{amount} ml</ListItemVolume>
        <ListItemTime>{time} AM</ListItemTime>
    </ListItemInfo>
  )
}
