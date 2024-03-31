import styled from '@emotion/styled';

export const Calendar = styled('div')`
/* max-width:264px;
@media only screen and (min-width: 768px) {
max-width:538px;
} */
`

export const CalendarHeader = styled('div')`
margin-bottom: 16px;
display: flex;
justify-content: space-between;
align-items: center;
column-gap:10px;
button {
    border:none;
    background-color:transparent;
}
span {
    line-height: 1.25;
    color: var(--primary-focus);
}
@media only screen and (min-width: 768px) {
    column-gap:20px;
}
`

export const Pagination = styled('div')`
    min-width:180px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap:3px;
    @media only screen and (min-width: 768px) {
    column-gap:5px;
    min-width:190px;
}
`
export const PaginationButton = styled('button')`
padding:0;
width: 14px;
height: 14px;
svg {
    width: 14px;
    height: 14px;
    ${({ active }) => active ? `fill: var(--secondary-third);` : `fill:var(--primary-focus);`}
    ${({ next }) => next && `transform: rotate(180deg);`}
}
`

export const CalendarTitle = styled('div')`
font-size: 24px;
font-weight: 500;
line-height: 1.2;
color: var(--primary-dark);
@media only screen and (min-width: 768px) {
font-size: 26px;  
}
`

export const CalendarWrap = styled('div')`
display: grid;
grid-template-columns: repeat(5, 1fr);
grid-template-rows: repeat(6, 52px);
gap: 16px;
justify-content: space-between;
@media only screen and (min-width: 768px) {
grid-template-columns: repeat(10, 1fr);
grid-template-rows: repeat(4, 56px);
gap: 20px;
}
`

export const Day = styled('div')`
display: flex;
flex-direction:column;
row-gap:4px;
span {
    font-size: 12px;
    width: 100%;
    text-align: center;
    color: var(--secondary-third);
}
`

export const DayButton = styled('button')`
display: flex;
align-items: center;
justify-content: center;
width: 34px;
height: 34px;
background-color:var(--primary-light);
border: 1px solid;
border-radius: 50%;
 ${({ isConsumed }) => isConsumed ? `border-color: transparent;`: `border-color: var(--secondary-fourth);`}
`
