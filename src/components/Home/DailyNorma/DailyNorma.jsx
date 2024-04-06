import { ModalSubtitle } from '../CommonStyles.styled';
import { NormaBlock, NormaBlockFooter } from './DailyNorma.styled';
import { DailyNormaModal } from '../DailyNormaModal/DailyNormaModal';
import { useState } from 'react';
import { useSelector } from "react-redux";
import { selectAuthUser } from "../../../redux/auth/authSelectors";

export const DailyNorma = () => {
  const { waterRate } = useSelector(selectAuthUser);
  const dailyNorma = waterRate / 1000;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handlerToggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <NormaBlock>
      <ModalSubtitle>My daily norma</ModalSubtitle>
      <NormaBlockFooter>
        <span>{dailyNorma || 0} L</span>
        <button onClick={handlerToggleModal} type="button">
          Edit
        </button>
      </NormaBlockFooter>
      <DailyNormaModal isOpen={isModalOpen} onClose={handlerToggleModal} />
    </NormaBlock>
  );
};
