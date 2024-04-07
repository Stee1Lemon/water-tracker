import styled from '@emotion/styled';
// import styled from 'styled-components';

export const WaterListWrap = styled('div')`
margin-bottom: 24px;
flex:1 0 auto;
`

export const WaterListTitle = styled('div')`
font-size: 24px;
font-weight: 500;
line-height: 1.2;
margin-bottom: 16px;
color: var(--primary-dark);
@media only screen and (min-width: 768px) {
font-size: 26px;  
}
`

export const List = styled('ul')`
max-height:180px;
/* overflow: auto; */
margin-bottom: 12px;
@media only screen and (min-width: 768px) {
max-height:170px;
}
`
export const ListItem = styled('li')`
display: flex;
align-items: center;
justify-content: space-between;
column-gap:38px;
padding: 12px 10px 12px 4px;
border-bottom: 1px solid var(--secondary-fifth);
@media only screen and (min-width: 768px) {
padding: 12px 10px 12px 4px;
}
`

export const ListItemTools = styled('div')`
display: flex;
column-gap:20px;
button {
    border: none;
    background-color:transparent;
    padding:0;
    transition: all 150ms linear;
    border-bottom: 1px solid transparent;
}
svg {
    width: 16px;
    height: 16px;
}
`

export const ItemBtnEdit = styled('button')`
    :hover {
        border-bottom: 1px solid var(--secondary-third);
    }
    svg{
        stroke: var(--secondary-third);
        fill: transparent;
        width: 16px;
        height: 16px;
    }
`

export const ItemBtnDelete = styled('button')`
    :hover {
        border-bottom: 1px solid var(--secondary-second);
    }
    svg{
        stroke: var(--secondary-second);
        fill: transparent;
        width: 16px;
        height: 16px;
    }
`

export const WaterListButton = styled('button')`
width: 100px;
padding: 0;
font-weight: 500;
border:none;
background-color:transparent;
color: var(--primary-focus);
display: flex;
column-gap:6px;
align-items: center;
transition: all 150ms linear;
:hover {
color: var(--secondary-fourth);}
span{
    font-size: 24px;
}
@media only screen and (min-width: 768px) {
width: 115px;
font-size: 18px;
svg {
    width: 12px;
    height: 12px;
}
}
`