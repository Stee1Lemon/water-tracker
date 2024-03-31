import styled from 'styled-components';

export const Statistics = styled('div')`
display: flex;
flex-direction:column;
background-color:var(--secondary-first);
max-width:280px;
max-height:830px;
padding: 24px 8px;
border-radius: 10px;
box-shadow: 0px 4px 14px rgba(64, 123, 255, 0.3);
@media only screen and (min-width: 768px) {
max-width:704px;
height:680px;
padding: 32px 24px;
}
@media only screen and (min-width: 1440px) {
max-width:592px;
height:680px;
}
`