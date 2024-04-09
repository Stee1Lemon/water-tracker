import styled from 'styled-components';

export const BackgroundWrap = styled('div')`
  position: relative;
`;

export const BackgrounImage = styled('img')`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top left;
  z-index: -1;
`;

export const PageWrap = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 24px 0 40px 0;
  @media only screen and (min-width: 768px) {
    padding: 40px 0 40px 0;
  }
  @media only screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 32px;
    padding: 20px 0 40px 0;
  }
`;

export const DailyNormaBlock = styled('div')`
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  @media only screen and (min-width: 1440px) {
    row-gap: 24px;
  }
`;
export const ImageWrap = styled('div')`
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: 290px;
  position: relative;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.8;
    object-fit: contain;
    object-position: bottom;
  }
  @media only screen and (min-width: 768px) {
    min-height: 386px;
    object-position: center;
  }
  @media only screen and (min-width: 1440px) {
    flex: 1 0 auto;
    img {
      object-fit: cover;
    }
  }
`;

export const ProgressWrap = styled('div')``;

export const Statistics = styled('div')`
  display: flex;
  flex-direction: column;
  background-color: var(--secondary-first);
  max-width: 280px;
  max-height: 830px;
  padding: 24px 8px;
  border-radius: 10px;
  box-shadow: 0px 4px 14px rgba(64, 123, 255, 0.3);
  @media only screen and (min-width: 768px) {
    max-width: 704px;
    height: 680px;
    padding: 32px 24px;
  }
  @media only screen and (min-width: 1440px) {
    max-width: 592px;
    height: 680px;
  }
`;

export const HomeTeam = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    justify-content: center;
    padding-bottom: 20px;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    margin: 0 auto;
    padding-bottom: 20px;
  }
  @media screen and (min-width: 1440px) {
    margin: 0 auto;
    margin-top: 10px;
  }
`;
