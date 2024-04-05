import { useState } from 'react';
import icons from '../../../assets/icons.svg';
import { AddWaterBtn, Wrapper, RangeBlock, RangeInput, Scope, StaticMarkStart, StaticMarkEnd, DynamicMark, RangeWrap } from "./WaterRatioPanel.styled"
import {TodayListModal} from "../TodayListModal/TodayListModal"

export const WaterRatioPanel = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [VolumePercentage, setVolumePercentage] = useState(35);

    const handlerToggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

    const handlerVolumePercentage = (e) => {
        setVolumePercentage(e.target.value);
  };
  return (
    <div>
      <Wrapper>
          <RangeBlock>
              <p>Today</p>
          <div>
            <RangeWrap>
              <RangeInput onChange={handlerVolumePercentage} name="volume" type="range" min="0" max="100" value={VolumePercentage} persent={VolumePercentage} />
              <DynamicMark persent={VolumePercentage}>{VolumePercentage}%</DynamicMark>
            </RangeWrap>
                  <Scope>
                      <StaticMarkStart>0%</StaticMarkStart><StaticMarkEnd>100%</StaticMarkEnd>
                  </Scope>
              </div>
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

