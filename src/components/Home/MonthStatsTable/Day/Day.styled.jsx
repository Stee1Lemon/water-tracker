import styled from '@emotion/styled';

export const DayWrap = styled('div')`
display: flex;
flex-direction:column;
row-gap:4px;
justify-content:center;
align-items:center;
position: relative;
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
 ${({ isConsumed }) => isConsumed ? `border-color: transparent;` : `border-color: var(--secondary-fourth);`}
`

export const Percentage = styled('span')`
    font-size: 12px;
    text-align: center;
    color: var(--secondary-third);
`