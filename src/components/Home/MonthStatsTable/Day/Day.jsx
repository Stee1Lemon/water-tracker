import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { uk } from 'date-fns/locale';
import { format } from "date-fns";

import { DaysGeneralStats } from "../DaysGeneralStats/DaysGeneralStats"

import { DayWrap, DayButton, Percentage } from "./Day.styled"

import { selectLang } from "../../../../redux/root/rootSelectors";

export const DayComponent = ({ isConsumed, date, percentage, day, data, calendarRef }) => {
  const language = useSelector(selectLang);

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
      if (language === "uk") {
      day = format(day, "d, MMMM", { locale: uk });
      }
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
