import styled from '@emotion/styled';

export const StatsWrap = styled('div')`
display: flex;
  flex-direction: column;
  gap: 16px;
  width: 280px;
  position: absolute;
  bottom: 54px;

  background-color: var(--primary-light);
  border-radius: 10px;
  box-shadow: 0px 4px 4px 0px rgba(64, 123, 255, 0.3);
  padding: 24px 13px;
  transform-origin: bottom;
  z-index: 2;
span{
    color: var(--primary-focus);
    font-weight: 500;
    font-size: 18px;
    line-height: 133%;
}
p{
    color: var(--primary-dark);
    line-height: 125%;
    margin:0;
}
@media screen and (max-width: 767px) {
    ${({$deltaNum }) => `left: ${-7 - $deltaNum}px;`}
  }
@media only screen and (min-width: 768px) {
     ${({ $delta }) => $delta && `right: 17px;`}
      ${({ $delta }) => !$delta && `left: 17px;`}
width:292px;
padding:24px 16px;
row-gap:18px;
}
 @media screen and (min-width: 1440px) {
    bottom: 56px;
  }
`

export const StatsDate = styled('div')`
color: var(--primary-focus);
`