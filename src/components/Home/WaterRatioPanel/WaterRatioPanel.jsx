import { useState } from 'react';
import { useSelector } from 'react-redux';

import { TodayListModal } from "../TodayListModal/TodayListModal"

import { AddWaterBtn, Wrapper, RangeBlock, RangeInput, StaticMarkStart, StaticMarkEnd, DynamicMark, RangeWrap } from "./WaterRatioPanel.styled"
import icons from '../../../assets/icons.svg';

import { selectTodayWater } from "../../../redux/water/waterSelectors";

export const WaterRatioPanel = () => {

  const { percentageWater } = useSelector(selectTodayWater);
  const volumePercentage = parseFloat(percentageWater).toFixed(1);

  const [isModalOpen, setIsModalOpen] = useState(false);

    const handlerToggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
 
  return (
    <div>
      <Wrapper>
          <RangeBlock>
           <p>Today</p>
            <RangeWrap>
              <RangeInput onChange={() => {}} name="volume" type="range" min="0" max="100" value={`${volumePercentage}`} persent={volumePercentage} />
              {/* <DynamicMark persent={volumePercentage}>{volumePercentage}%</DynamicMark> */}
              <StaticMarkStart>0%</StaticMarkStart><DynamicMark persent={volumePercentage}>{volumePercentage}%</DynamicMark><StaticMarkEnd>100%</StaticMarkEnd>
            </RangeWrap>
                  {/* <Scope>
                      <StaticMarkStart>0%</StaticMarkStart><DynamicMark persent={volumePercentage}>{volumePercentage}%</DynamicMark><StaticMarkEnd>100%</StaticMarkEnd>
                  </Scope> */}
        </RangeBlock>
        <AddWaterBtn onClick={handlerToggleModal}>
            <svg >
            <use href={`${icons}#icon-circle-plus`}></use>
            </svg>
              Add Water
          </AddWaterBtn>
      </Wrapper>
      <TodayListModal isOpen={isModalOpen}
      onClose={handlerToggleModal}/>
      </div>
  )
}

