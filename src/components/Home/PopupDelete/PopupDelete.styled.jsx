import styled from '@emotion/styled';
import { CommonStyleBtn, ModalWrap } from "../reuse/CommonStyles.styled"

export const Popup = styled('div')`
${ModalWrap}
display: flex;
flex-direction:column;
row-gap:24px;
`

export const PopupFooter = styled('div')`
display: flex;
flex-direction:column;
gap:24px;
@media only screen and (min-width: 768px) {
    flex-direction:row;
    justify-content:flex-end;
}
`
export const PopupBtnClose = styled('button')`
${CommonStyleBtn}
color: var(--primary-focus);
background-color: var(--secondary-fifth);
box-shadow:none;
:hover {
  box-shadow:none;
  background-color: var(--secondary-third);  
}
`

export const PopupBtnRemove = styled('button')`
${CommonStyleBtn}
background-color: var(--secondary-second);
box-shadow:none;
:hover {
  box-shadow:none;
  background-color: #ec1717;  
}
`