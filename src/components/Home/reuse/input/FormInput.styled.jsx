import styled from 'styled-components';

export const Label = styled('label')`
display: flex;
flex-direction: column;
row-gap: 8px;
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
  color: var(--secondary-second);
  font-size: 14px;
  line-height: 120%;
`;