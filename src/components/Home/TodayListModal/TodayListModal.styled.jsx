import styled from '@emotion/styled';
import {CommonStyleBtn, ModalWrap} from "../CommonStyles.styled"

export const AddWaterModal = styled('div')`
${ModalWrap}
display: flex;
flex-direction:column;
row-gap:24px;
max-height: 648px;
@media only screen and (min-width: 768px) {
    max-height: 580px;
}
p {
    margin-bottom: 12px;
}
`

export const PrevInfo = styled('div')`
background-color: var(--secondary-first);
border-radius:10px;
padding: 8px 24px;
max-width:254px;
`


export const WaterCounter = styled('div')`
display: flex;
align-items: center;
column-gap:7px;
`

export const CounterLabel = styled('span')`
background-color: var(--secondary-fifth);
color: var(--primary-focus);
font-size: 18px;
font-weight: 700;
line-height: 130%;
padding: 6px 10px;
border-radius:40px;
min-width:92px;
text-align: center;
`

export const CounterBtn = styled('button')`
background-color: transparent;
border: 1px solid var(--secondary-third);
width: 44px;
height: 44px;
border-radius:30px;
box-shadow: 0px 2px 4px rgba(64, 123, 255, 0.2);
display: flex;
align-items: center;
justify-content:center;
transition: all 150ms linear;
svg {
    fill: var(--primary-focus);
    width: 24px;
    height: 24px;
}
:hover{
    box-shadow: 0px 2px 6px rgba(64, 123, 255, 0.5);
}
`

export const ModalFooter = styled('div')`
     display: flex;
     flex-direction:column;
     gap:16px;
     justify-content: center;
     text-align: center;
@media only screen and (min-width: 768px) {
    display: flex;
    flex-direction:row;
    justify-content:flex-end;
    align-items: center;
    gap:24px;
}
`
export const Label = styled('div')`
    color: var(--primary-focus);
    font-weight: 700;
    font-size: 18px;
    line-height: 133%; 
`

export const ModalBtn = styled('button')`
    width: 100%;
    ${CommonStyleBtn}
    @media only screen and (min-width: 768px) {
        width:160px;
    }
`