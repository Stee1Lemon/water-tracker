import styled from 'styled-components';

export const Label = styled('label')`
display: flex;
flex-direction: column;
row-gap: 8px;
position: relative;
`

export const Input = styled('input')`
background-color:transparent;
color: var(--primary-focus);
border-radius:6px;
padding: 12px 10px;
width: 100%;
line-height: 125%;
border: 1px solid var(--secondary-fifth);
&::-webkit-outer-spin-button,
&::-webkit-inner-spin-button {
    -webkit-appearance: none;
}
`

export const ErrorMessage = styled('p')`
position: absolute;
bottom:-30px;
left:5px;
  color: var(--secondary-second);
  font-size: 12px;
  line-height: 120%;
`;