import styled from 'styled-components';

export const TeamButton = styled.button`
  height: 36px;
  width: 280px;
  padding: 8px 30px;
  justify-content: center;
  align-items: center;

  border-radius: 10px;
  border: none;
  background: var(--primary-focus);
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);

  color: var(--primary-light);
  text-align: center;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.2;

  @media screen and (min-width: 768px) {
    margin: 0 auto;
    height: 44px;
    width: 336px;
    padding: 10px 30px;
    font-size: 18px;
    line-height: 1.3;
  }
  @media screen and (min-width: 1440px) {
    display: flex;
    margin: auto;
    height: 44px;
    width: 384px;
  }
`;

export const CardArray = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 300px;
  height: 650px;
  justify-content: center;

  @media (min-width: 768px) {
    width: 650px;
    height: 550px;
  }

  @media (min-width: 1440px) {
    flex-direction: column;
    width: 1000px;
    height: 700px;
  }
`;

export const ModalTeamOverlay = styled.div`
  background-color: var(--primary-light);
  position: relative;
  padding: 12px 8px;
  color: var(--primary-dark);
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: 768px) {
    padding: 0 10px;
  }

  @media screen and (min-width: 1440px) {
    padding: 24px 12px;
  }
`;

export const BoxPhoto = styled.div`
  position: relative;
`;

export const ButtonOverlay = styled.button`
  border: none;
  background-color: transparent;
  position: absolute;

  top: 10px;
  right: 15px;

  svg {
    width: 16px;
    height: 16px;
    stroke: var(--primary-focus);
  }
  &:focus,
  &:active {
    stroke: var(--secondary-second);

    outline: none;
  }

  @media screen and (min-width: 768px) {
    top: 20px;
    right: 10px;
  }

  @media screen and (min-width: 1440px) {
    top: 30px;
    right: 16px;
    svg {
      width: 24px;
      height: 24px;
    }
  }
`;
export const Image = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  margin: 0 auto;
  object-fit: cover;
  object-position: top;

  @media screen and (min-width: 768px) {
    width: 75px;
    height: 75px;
  }
  @media screen and (min-width: 1440px) {
    width: 150px;
    height: 155px;
  }
`;

export const TitleTeam = styled.h3`
  display: grid;
  color: var(--primary-dark);
  font-size: 14px;
  font-style: bold;
  font-weight: 500;
  line-height: 1;

  margin-top: 5px;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    font-style: normal;
  }
  @media screen and (min-width: 1440px) {
    font-size: 18px;
    line-height: 1.1;
    margin-top: 10px;
  }
`;

export const SubtitleTeam = styled.p`
  display: grid;
  color: var(--primary-dark);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.3;
  justify-content: space-around;
  margin-bottom: 5px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.4;
    margin-bottom: 10px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 16px;
    line-height: 1.25;
  }
`;

export const IconList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 6px;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    gap: 10px;
  }
  @media screen and (min-width: 1440px) {
    gap: 24px;
  }
`;

export const IconTeam = styled.a`
  svg {
    width: 20px;
    height: 20px;
    stroke-width: 1;
    stroke: var(--primary-light);
    fill: var(--primary-focus);
  }

  &:focus {
    stroke: var(--secondary-second);
    fill: var(--secondary-second);
  }

  @media screen and (min-width: 1440px) {
    svg {
      width: 35px;
      height: 30px;
    }
  }
`;

export const IconTeamGithub = styled.a`
  svg {
    width: 20px;
    height: 20px;
    stroke-width: 1;
    stroke: var(--primary-dark);
    fill: var(--primary-dark);
  }

  @media screen and (min-width: 1440px) {
    svg {
      width: 35px;
      height: 30px;
    }
  }
`;
