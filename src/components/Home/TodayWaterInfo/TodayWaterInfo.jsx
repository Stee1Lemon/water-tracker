import { ListItemInfo, ListItemVolume, ListItemTime } from "./TodayWaterInfo.styled"
import icons from '../../../assets/icons.svg';
import { format } from 'date-fns';

export const TodayWaterInfo = ({data:{amountWater,date}}) => {
  return (
   <ListItemInfo>
      <svg >
        <use href={`${icons}#icon-glass`}></use>
      </svg>
        <ListItemVolume>{amountWater} ml</ListItemVolume>
        <ListItemTime>{format(new Date(date), 'HH:mm')} AM</ListItemTime>
    </ListItemInfo>
  )
}
