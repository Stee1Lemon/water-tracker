import { ModalSubtitle, } from "../CommonStyles.styled"
import {NormaBlock, NormaBlockFooter} from "./DailyNorma.styled"

export const DailyNorma = () => {
  return (
      <NormaBlock>
          <ModalSubtitle>My daily norma</ModalSubtitle>
          <NormaBlockFooter>
              <span>1.5 L</span>
              <button type="button">Edit</button>
          </NormaBlockFooter>
    </NormaBlock>
  )
}