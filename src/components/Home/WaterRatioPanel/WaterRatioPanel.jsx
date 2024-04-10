import { useState } from 'react';
import { useSelector } from 'react-redux';

import { TodayListModal } from "../TodayListModal/TodayListModal"

import { AddWaterBtn, Wrapper, RangeBlock, RangeInput, StaticMarkStart, StaticMarkEnd, DynamicMark, RangeWrap } from "./WaterRatioPanel.styled"
import icons from '../../../assets/icons.svg';

import { selectTodayWater } from "../../../redux/water/waterSelectors";
import { selectWaterRate } from "../../../redux/water/waterSelectors"; 
import { useTranslation } from 'react-i18next';

export const WaterRatioPanel = () => {
  const { t } = useTranslation();

  const waterRate = useSelector(selectWaterRate);
  const {allAmountForDay = 0} = useSelector(selectTodayWater);
  
  const percent = allAmountForDay / waterRate * 100;

  const volumePercentage = parseFloat(percent).toFixed(0);

  const [isModalOpen, setIsModalOpen] = useState(false);

    const handlerToggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
 
  return (
    <div>
      <Wrapper>
          <RangeBlock>
           <p>{t('today')}</p>
            <RangeWrap>
              <RangeInput onChange={() => {}} name="volume" type="range" min="0" max="100" value={`${volumePercentage}`} persent={volumePercentage} />
              <StaticMarkStart>0%</StaticMarkStart><DynamicMark persent={volumePercentage}>{volumePercentage}%</DynamicMark><StaticMarkEnd>100%</StaticMarkEnd>
            </RangeWrap>
        </RangeBlock>
        <AddWaterBtn onClick={handlerToggleModal}>
            <svg >
            <use href={`${icons}#icon-circle-plus`}></use>
            </svg>
              {t('addEditWaterModal.headerAdd')}
          </AddWaterBtn>
      </Wrapper>
      <TodayListModal isOpen={isModalOpen}
      onClose={handlerToggleModal}/>
      </div>
  )
}

