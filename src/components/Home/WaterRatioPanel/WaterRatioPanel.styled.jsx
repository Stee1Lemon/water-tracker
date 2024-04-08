import styled from '@emotion/styled';
import { CommonStyleBtn } from "../reuse/CommonStyles.styled"


export const Wrapper = styled('div')`
display: flex;
flex-direction:column;
row-gap:20px;
@media only screen and (min-width: 768px) {
flex-direction:row;
align-items: center;
column-gap:23px;
}
`

export const AddWaterBtn = styled('button')`
    display: flex;
    justify-content: center; 
    align-items: center;
    gap:12px;
    ${CommonStyleBtn}
    svg{
        width: 20px;
        height: 20px;
        stroke:var(--primary-light);
        fill: transparent;
    }
`
export const RangeBlock = styled('div')`
flex: 1 0 auto;
height: 82px;
@media only screen and (min-width: 768px) {
height: 90px;
}
p{
    font-size: 18px;
    line-height: 130%;
    color: var(--primary-focus);
    margin-bottom: 8px;
    @media only screen and (min-width: 768px) {
    margin-bottom: 16px;
}
 }
`

export const RangeWrap = styled('div')`
position: relative;
color: var(--primary-focus);
`


export const RangeInput = styled('input')`
&[type="range"] {
  -webkit-appearance: none;
  appearance: none;
  cursor: pointer;
  width: 100%;
   background: var(--secondary-third);
   ${({ persent }) => `background-image: linear-gradient(
      to right, var(--secondary-third) 0%, var(--secondary-third) ${persent}%, var(--secondary-fifth) ${persent}%, var(--secondary-fifth) 100%);`}
    background-repeat: no-repeat;
    border-radius:10px;
}
&[type='range']:focus {
    outline: none;
  }
  &[type='range']::-webkit-slider-runnable-track {
    width: 100%;
    height: 8px;
    animation: 0.2s;
    border-radius: 10px;
    -webkit-appearance: none;
    box-shadow: none;
    border: none;
    background: transparent;
  }
  &[type='range']::-webkit-slider-thumb {
    height: 14px;
    width: 14px;
    border-radius: 50%;
    background: var(--primary-light);
    border: solid 1px var(--primary-focus);
    -webkit-appearance: none;
    margin-top: -3px;
  }
`
export const StaticMarkStart = styled('span')`
 font-size: 12px;
 line-height: 133%;
 position: absolute;
 top:27px;
 left:0;
 ::before{
        content:"";
        position: absolute;
        width: 1px;
        height: 8px;
        background: var(--secondary-fifth);
        top:-55%;
        left: 10%;
    }
`
export const StaticMarkEnd = styled('span')`
 font-size: 12px;
 line-height: 133%;
 position: absolute;
 top:27px;
 right:0;
 ::before{
        content:"";
        position: absolute;
        width: 1px;
        height: 8px;
        background: var(--secondary-fifth);
        top:-55%;
        right: 5%;
    }
`

export const DynamicMark = styled('span')`
background-color: rgba(255, 255, 255, 0.9);
display: block;
padding:3px;
border-radius:5px;
color: var(--primary-focus);
text-align:center;
 font-size: 16px;
 font-weight: 500;
 position: absolute;
 top:40px;
 ${({ persent }) => persent<=100 ? `left: ${persent}%;`: `left: 99%;`}
 transform:translate(-50%,0);
 ::before{
        content:"";
        position: absolute;
        width: 1px;
        height: 8px;
        background: var(--secondary-fifth);
        top:-50%;
        left: 50%;
    }
`

