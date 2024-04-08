import { useState } from 'react';
import { useSelector } from "react-redux";

import { DailyNormaModal } from '../DailyNormaModal/DailyNormaModal';

import { ModalSubtitle } from '../reuse/CommonStyles.styled';
import { NormaBlock, NormaBlockFooter } from './DailyNorma.styled';

import { selectWaterRate } from "../../../redux/water/waterSelectors";
import { useTranslation } from 'react-i18next';

export const DailyNorma = () => {
  const { t } = useTranslation(); 

  const waterRate  = useSelector(selectWaterRate);
  const dailyNorma = (waterRate / 1000).toFixed(1);
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlerToggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  
  return (
    <NormaBlock>
      <ModalSubtitle>{t('dailyNormaModal.header')}</ModalSubtitle>
      <NormaBlockFooter>
        <span>{dailyNorma} L</span>
        <button onClick={handlerToggleModal} type="button">
          {t('dailyNormaModal.edit')}
        </button>
      </NormaBlockFooter>
      <DailyNormaModal isOpen={isModalOpen} onClose={handlerToggleModal} />
    </NormaBlock>
  );
};
