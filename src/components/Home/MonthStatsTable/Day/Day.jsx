import { useEffect, useRef, useState } from 'react';

import { DaysGeneralStats } from "../DaysGeneralStats/DaysGeneralStats"

import { DayWrap, DayButton, Percentage } from "./Day.styled"

export const DayComponent = ({ isConsumed, date, percentage, day, data, calendarRef }) => {
  
  const [activeModal, setActiveModal] = useState(null);
  const [selectedDayStats, setSelectedDayStats] = useState(null);
  
  const ref = useRef(null);

  const handleClick = e => {
    if (ref.current && !ref.current.contains(e.target)) {
      setActiveModal(null);
    }
  };
    
  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
    document.removeEventListener('click', handleClick);
    };
  }, []);

  const toggleModal = (day) => {
      setActiveModal(prevModal => (prevModal === day ? null : day));
      const dayData = data[day] || 0;
      setSelectedDayStats({
        date: day,
        dailyNorm: dayData ? dayData.dailyNorm : 0,
        totalWaterPortionsForDay: dayData ? dayData.totalWaterPortionsForDay : 0,
        percentageWater: dayData ? parseInt(dayData.percentageWater) : 0,
      });
  };

  return (
      <DayWrap>
          <div>
            {activeModal && (<DaysGeneralStats key={day} calendarRef={calendarRef} refData={ref} waterData={selectedDayStats}/>)}
          </div>
          <DayButton ref={ref}  onClick={() => toggleModal(day)} isConsumed={isConsumed}>{date}</DayButton>
          <Percentage>{percentage}%</Percentage>
      </DayWrap>
  )
}
