import styled from '@emotion/styled';

export const NormaBlock = styled('div')`
background-color:var(--primary-light);
padding: 8px 20px;
border-radius: 10px;
box-shadow: 0px 4px 8px rgba(158, 187, 255,0.2);
width: 164px;
position: relative;
z-index:1;
`

export const NormaBlockFooter = styled('div')`
display: flex;
align-items: center;
column-gap:12px;
span {
    color:var(--primary-focus);
    font-weight: 700;
    font-size: 24px;
}
button {
    background-color: transparent;
    border:none;
    color:var(--primary-focus);
    transition: all 150ms linear;
    :hover {
    color: var(--secondary-fourth);}
    }
`


