import styled from '@emotion/styled';
import { CommonStyleBtn, ModalWrap } from "../reuse/CommonStyles.styled"

export const NormaModal = styled('div')`
${ModalWrap}
display: flex;
flex-direction:column;
row-gap:24px;
 position: relative;
 z-index:2;
/* max-height: 648px; */
/* @media only screen and (min-width: 768px) {
    max-height: 580px;
} */
`

export const CalculationScheme = styled('div')`
    display: flex;
    flex-direction:column;
    row-gap:16px;
    margin-bottom: 12px;
    span {
        color: var(--primary-focus);
         ${({ lang }) => lang==="uk" ? `font-size: 16px;` : `font-size: 18px;`}
    }
    @media only screen and (min-width: 768px) {
        flex-direction:row;
         ${({ lang }) => lang==="uk" ? `column-gap:15px;` : `column-gap:24px;`}
    }
`

export const CalculationText = styled('div')`
    color: #8F8F8F;
    font-size: 12px;
    line-height: 130%;
    padding:10px;
    border:1px solid var(--secondary-fifth);
    border-radius:10px;
    span {
        color: var(--primary-focus);
    }
`
export const Form = styled('form')`
    display: flex;
    flex-direction:column;
    row-gap:24px;
`

export const FormRadioItems = styled('div')`
    display: flex;
    column-gap:24px;
    margin-bottom: 16px;
`

export const RadioItem = styled('div')`
    position: relative;
	display: flex;
	flex-direction: column;
	row-gap: 8px;
    input{
    position: absolute;
	top: 0;
	left: 0;
	opacity: 0;
    }
    label{
	line-height: 125%;
	position: relative;
	padding-left: 22px;
	cursor: pointer;
    }
    label::before {
	content: "";
	width: 14px;
	height: 14px;
	border-radius: 50%;
	border: 2px solid #0156ff;
	position: absolute;
	top: 50%;
	left: 0;
    transform:translate(0%,-51%);
}
label::after {
	content: "";
	width: 6px;
	height: 6px;
	border-radius: 50%;
	background-color: #0156ff;
	position: absolute;
	top: 50%;
	left: 0;
    transform:translate(65%,-52%);
	opacity: 0;
	transition-duration: 0.3s;
}
    input:checked + label::after {
	opacity: 1;
}
`


export const CalculationItem = styled('div')`
    margin-bottom: 16px;
`
export const CalculationResult = styled('div')`
    display: flex;
    align-items: center;
    p{
        max-width:180px;
    }
    span {
        color: var(--primary-focus);
        font-weight:700;
        font-size: 18px;
        width: 57px;
        text-align: end;
    }
    @media only screen and (min-width: 768px) {
        column-gap:6px;
        p{
        max-width:100%;
    }
    }
`


export const ModalBtn = styled('button')`
    width: 100%;
    ${CommonStyleBtn}
    @media only screen and (min-width: 768px) {
        width:160px;
        margin-left:auto;
    }
`

