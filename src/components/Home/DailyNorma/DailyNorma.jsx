import { ModalSubtitle, } from "../CommonStyles.styled"
import { NormaBlock, NormaBlockFooter } from "./DailyNorma.styled"
import {DailyNormaModal} from "../DailyNormaModal/DailyNormaModal"
import { useState } from "react";

export const DailyNorma = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handlerToggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
      <NormaBlock>
          <ModalSubtitle>My daily norma</ModalSubtitle>
          <NormaBlockFooter>
              <span>1.5 L</span>
              <button onClick={handlerToggleModal} type="button">Edit</button>
      </NormaBlockFooter>
      <DailyNormaModal isOpen={isModalOpen}
        onClose={handlerToggleModal} />
    </NormaBlock>
  )
}