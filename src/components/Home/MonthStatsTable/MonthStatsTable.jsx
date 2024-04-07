import { useEffect, useState } from "react"
import { startOfMonth, lastDayOfMonth, eachDayOfInterval, format, subMonths, addMonths, isSameMonth } from "date-fns";
import { useSelector } from "react-redux";

import { CalendarHeader, CalendarTitle, Pagination, PaginationButton, CalendarWrap, Day, DayButton, } from "./MonthStatsTable.styled"
import icons from '../../../assets/icons.svg';

import { selectMonthWater } from "../../../redux/water/waterSelectors";

const formatOfYear = "yyyy";
const formatOfMonth = "MMMM";
const formatOfDay = "d";

export const MonthStatsTable = () => {

  const waterForMonth = useSelector(selectMonthWater);
  console.log('month :>> ', waterForMonth);

    const [currentDate, setCurrentDate] = useState(new Date());
    const [activeButton, setActiveButton] = useState(null);
    // const [isConsumed, setIsConsumed] = useState(false);
    // Find the first day of month of this currentDate
    const firstDay = startOfMonth(currentDate);
    // Find the last day of month of this currentDate
    const lastDay = lastDayOfMonth(currentDate);
    // temporary data!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    const percentOfWaterVolume = 0;
    const isConsumed = percentOfWaterVolume >= 100;
    // console.log('isConsumed :>> ', isConsumed);

    // render all days
    const totalDate = eachDayOfInterval({
        start: firstDay,
        end: lastDay
    });
  
  // ---------------------------------------------------------------------------------------------------------------------------
  console.log('totalDate :>> ', totalDate);
  // const monthData = waterForMonth?.reduce((acc, dayData) => {
  //   acc[dayData.date] = dayData;
  //   return acc;
  // }, {});
  // console.log('monthData :>> ', monthData);
 // ---------------------------------------------------------------------------------------------------------------------------
    const currentMonth = format(currentDate, formatOfMonth);
    const currentYear = format(currentDate, formatOfYear);
    // const isToday = (day) => isSameDay(day, new Date());
    
    const handlePrevMonth = () => {
    const newMonth = subMonths(currentDate, 1);
    setCurrentDate(newMonth);
    if (isSameMonth(newMonth, new Date())) {
      setActiveButton(null);
    } else {
      setActiveButton('prev');
    }
    };

    const handleNextMonth = () => {
    const newMonth = addMonths(currentDate, 1);
    setCurrentDate(newMonth);
    if (isSameMonth(newMonth, new Date())) {
      setActiveButton(null);
    } else {
      setActiveButton('next');
    }
  };

  return (
      <div>
          <CalendarHeader>
              <CalendarTitle>Month</CalendarTitle>
              <Pagination>
                <PaginationButton onClick={handlePrevMonth} active={activeButton === 'next'} type="button">
                  <svg >
                    <use href={`${icons}#icon-pagination-arrow-prev`}></use>
                  </svg>
                </PaginationButton>
                <span>{currentMonth}, {currentYear}</span>
                <PaginationButton onClick={handleNextMonth} active={activeButton === 'prev'} type="button">
                  <svg >
                    <use href={`${icons}#icon-pagination-arrow-next`}></use>
                  </svg>
                </PaginationButton>
              </Pagination>
          </CalendarHeader>
          <CalendarWrap>
        {/* {totalDate.map((date, index) =>  <Day key={index}><DayButton isConsumed={isConsumed} type="button">{format(date, formatOfDay)}</DayButton><span>{percentOfWaterVolume}%</span></Day>)} */}
        {totalDate.map((date, index) => {
          const key = format(date, 'yyyy-MM-dd');
          // const dayData = monthData[key];

          // const percentage = dayData ? dayData.percentageWater : 0;
          // const isHighlighted = dayData && dayData.percentageWater < 100;

          return (
             <Day key={key}><DayButton type="button">{format(date, formatOfDay)}</DayButton><span>0%</span></Day>
           )
         })}
          </CalendarWrap>
    </div>
  )
}
