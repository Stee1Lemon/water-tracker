import { useState } from "react"
import { startOfMonth, lastDayOfMonth, eachDayOfInterval, format, subMonths, addMonths, isSameMonth } from "date-fns";

import { CalendarHeader, CalendarTitle, Pagination, PaginationButton, CalendarWrap, Day, DayButton, } from "./MonthStatsTable.styled"
import icons from '../../../assets/icons.svg';

const formatOfYear = "yyyy";
const formatOfMonth = "MMMM";
const formatOfDay = "d";

export const MonthStatsTable = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [activeButton, setActiveButton] = useState(null);
    // Find the first day of month of this currentDate
    const firstDay = startOfMonth(currentDate);
    // Find the last day of month of this currentDate
    const lastDay = lastDayOfMonth(currentDate);
    // temporary data!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    const percentOfWaterVolume = 0;
    const isConsumed = percentOfWaterVolume >= 100;
    console.log('isConsumed :>> ', isConsumed);
    // render all days
    const totalDate = eachDayOfInterval({
        start: firstDay,
        end: lastDay
    });

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
              {totalDate.map((date, index) =>  <Day key={index}><DayButton isConsumed={isConsumed} type="button">{format(date, formatOfDay)}</DayButton><span>{percentOfWaterVolume}%</span></Day>)}
          </CalendarWrap>
    </div>
  )
}
