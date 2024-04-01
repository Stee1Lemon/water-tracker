import { useState } from 'react';
import icons from '../../../assets/icons.svg';
import {AddWaterBtn, Wrapper, RangeBlock,RangeInput, Scope, StaticMarkStart, StaticMarkEnd, DynamicMark} from "./WaterRatioPanel.styled"

export const WaterRatioPanel = () => {
    const [VolumePercentage, setVolumePercentage] = useState(50);

    const handlerVolumePercentage = (e) => {
        setVolumePercentage(e.target.value);
  };
  return (
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
          <AddWaterBtn>
            <svg >
            <use href={`${icons}#icon-circle-plus`}></use>
            </svg>
              Add Water
          </AddWaterBtn>
    </Wrapper>
  )
}

