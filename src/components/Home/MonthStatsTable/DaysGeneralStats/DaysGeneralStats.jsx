import { StatsWrap, StatsDate } from "./DaysGeneralStats.styled"

import { useTranslation } from 'react-i18next';

export const DaysGeneralStats = ({ calendarRef, refData, waterData = {} }) => {
  const { t } = useTranslation();

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
      <p>{t('daysGeneralStats.norma')} <span>{dailyNorm}</span></p>
          <p>{t('daysGeneralStats.fulfillment')} <span>{percentageWater}%</span></p>
          <p>{t('daysGeneralStats.servings')} <span>{totalWaterPortionsForDay}</span></p>
    </StatsWrap>
  )
}
