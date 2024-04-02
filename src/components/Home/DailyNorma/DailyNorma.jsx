import { ModalSubtitle, } from "../CommonStyles.styled"
import { NormaBlock, NormaBlockFooter } from "./DailyNorma.styled"
import {DailyNormaModal} from "../DailyNormaModal/DailyNormaModal"
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectAuthUser } from "../../../redux/auth/authSelectors";

export const DailyNorma = () => {
  const { dailyNorma } = useSelector(selectAuthUser);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handlerToggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
      <NormaBlock>
          <ModalSubtitle>My daily norma</ModalSubtitle>
          <NormaBlockFooter>
              <span>{parseFloat(dailyNorma).toFixed(1)} L</span>
              <button onClick={handlerToggleModal} type="button">Edit</button>
      </NormaBlockFooter>
      <DailyNormaModal isOpen={isModalOpen}
        onClose={handlerToggleModal} />
    </NormaBlock>
  )
}