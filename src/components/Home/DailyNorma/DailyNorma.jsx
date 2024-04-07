import { useState } from 'react';
import { useSelector } from "react-redux";

import { DailyNormaModal } from '../DailyNormaModal/DailyNormaModal';

import { ModalSubtitle } from '../CommonStyles.styled';
import { NormaBlock, NormaBlockFooter } from './DailyNorma.styled';

import { selectWaterRate } from "../../../redux/water/waterSelectors";
// import { selectAuthUser } from "../../../redux/auth/authSelectors";

export const DailyNorma = () => {
  const waterRate  = useSelector(selectWaterRate);
  const dailyNorma = (waterRate / 1000).toFixed(1);
  // console.log('waterRate :>> ', waterRate);
  // console.log('useSelector(selectWaterRate) :>> ', useSelector(selectWaterRate));
  // console.log('useSelector(selectAuthUser) :>> ', useSelector(selectAuthUser));
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlerToggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <NormaBlock>
      <ModalSubtitle>My daily norma</ModalSubtitle>
      <NormaBlockFooter>
        <span>{dailyNorma} L</span>
        <button onClick={handlerToggleModal} type="button">
          Edit
        </button>
      </NormaBlockFooter>
      <DailyNormaModal isOpen={isModalOpen} onClose={handlerToggleModal} />
    </NormaBlock>
  );
};
