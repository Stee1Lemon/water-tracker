import styled from 'styled-components';

export const TeamButton = styled.button`
  display: flex;
  margin: 0 auto;
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
  font-size: 16px;
  font-weight: 500;
  line-height: 1.2;

  &:hover,
  &:focus {
    box-shadow: 0 4px 14px 0 rgba(64, 123, 255, 0.54);
  }

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
    margin: 0 auto;
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
    &:hover,
    &:focus {
      stroke: var(--primary-dark);
    }
  }
  &:hover,
  &:focus {
    border-color: var(--primary-dark);
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
  background: transparent;
  border-radius: 20px;
  box-sizing: border-box;
  width: 20px;
  height: 20px;
  svg {
    width: 20px;
    height: 20px;
    stroke-width: 1;
    stroke: var(--primary-light);
    fill: var(--primary-focus);
    &:hover,
    &:focus {
      stroke: var(--secondary-fifth);
    }
  }
  &:hover,
  &:focus {
    box-shadow: 0 4px 14px 0 rgba(64, 123, 255, 0.54);
  }

  @media screen and (min-width: 1440px) {
    border-radius: 30px;

    width: 31px;
    height: 30px;
    svg {
      width: 31px;
      height: 30px;
    }
  }
`;

export const IconTeamGithub = styled.a`
  background: transparent;
  border-radius: 18px;
  box-sizing: border-box;
  width: 19px;
  height: 18px;
  svg {
    width: 19px;
    height: 18px;
    stroke-width: 1;
    stroke: var(--primary-dark);
    fill: var(--primary-dark);
    &:hover,
    &:focus {
      stroke: var(--primary-dark);
    }
  }

  &:hover,
  &:focus {
    box-shadow: 0 4px 14px 0 rgba(0, 0, 15, 0.54);
  }

  @media screen and (min-width: 1440px) {
    border-radius: 29px;

    width: 30px;
    height: 29px;
    svg {
      width: 30px;
      height: 29px;
    }
  }
`;
