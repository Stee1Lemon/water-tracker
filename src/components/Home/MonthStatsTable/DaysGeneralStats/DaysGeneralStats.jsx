import {StatsWrap, StatsDate} from "./DaysGeneralStats.styled"

export const DaysGeneralStats = ({ calendarRef, refData, waterData = {} }) => {
  
  const { date, dailyNorm, totalWaterPortionsForDay, percentageWater } = waterData;

  const currentRef = refData?.current.getBoundingClientRect().left;
  const containerRef = calendarRef?.current.getBoundingClientRect().left;
  let position = true;

  const delta = currentRef - containerRef;
  if (delta < 250) {
    position = false;
  }
  return (
      <StatsWrap $delta={position} $deltaNum={delta}>
      <StatsDate>{date}</StatsDate>
      <p>Daily norma: <span>{dailyNorm}</span></p>
          <p>Fulfillment of the daily norm: <span>{percentageWater}%</span></p>
          <p>How many servings of water: <span>{totalWaterPortionsForDay}</span></p>
    </StatsWrap>
  )
}
