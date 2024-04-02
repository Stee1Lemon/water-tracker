import { useState } from 'react';
import icons from '../../../assets/icons.svg';
import { AddWaterBtn, Wrapper, RangeBlock, RangeInput, Scope, StaticMarkStart, StaticMarkEnd, DynamicMark } from "./WaterRatioPanel.styled"
import {TodayListModal} from "../TodayListModal/TodayListModal"

export const WaterRatioPanel = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [VolumePercentage, setVolumePercentage] = useState(50);

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
                  <RangeInput onChange={handlerVolumePercentage} name="volume" type="range" min="0" max="100" value={VolumePercentage} persent={VolumePercentage}/>
                  <Scope>
                      <StaticMarkStart>0%</StaticMarkStart><DynamicMark>50%</DynamicMark><StaticMarkEnd>100%</StaticMarkEnd>
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

