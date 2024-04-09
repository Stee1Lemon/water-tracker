import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ContainerTeam = styled.div`
  @media screen and (max-width: 767px) {
    margin-left: 20px;
    margin-top: 500px;
  }
  @media screen and (min-width: 768px) {
    margin-left: 25px;
    margin-top: 400px;
  }
  @media screen and (min-width: 1440px) {
    margin: 0 auto;
    margin-top: 70px;
  }
`;

export const WelcomePageWrapper = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: normal;

    margin: 0 auto;
    padding-top: 24px;
    padding-bottom: 0;
    padding-left: 20px;
    padding-right: 20px;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: normal;

    margin: 0 auto;
    padding-top: 40px;
    padding-bottom: 50px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row;
  }
`;

export const WelcomePageTextWrapper = styled.div``;

export const WelcomePageTitle = styled.h1`
  @media screen and (max-width: 767px) {
    color: var(--primary-dark);
    font-family: Roboto;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 1.1;
    max-width: 246px;
  }

  @media screen and (min-width: 768px) {
    color: var(--primary-dark);
    font-family: Roboto;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: 1.2;
  }

  @media screen and (min-width: 1440px) {
    color: var(--primary-dark);
    font-family: Roboto;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: 1.2;
    min-width: 439px;
  }
`;
export const WelcomePageSubtitle = styled.p`
  @media screen and (max-width: 767px) {
    max-width: 197px;

    color: var(--primary-dark);
    font-family: Roboto;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.2;
    margin-top: 16px;
    margin-bottom: 0;
  }

  @media screen and (min-width: 768px) {
    color: var(--primary-dark);
    font-family: Roboto;
    font-size: 26px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.2;
    margin-top: 16px;
    margin-bottom: 0;
  }

  @media screen and (min-width: 1440px) {
    // width: 660px;
    color: var(--primary-dark);
    font-family: Roboto;
    font-size: 26px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.2;
    margin-top: 16px;
    margin-bottom: 0;
  }
`;

export const WelcomePageTrackerTitle = styled.h2`
  color: var(--primary-dark);
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.1;
  margin-top: 24px;
  margin-bottom: 0;
`;

export const WelcomePageTrackerList = styled.ul`
  @media screen and (max-width: 767px) {
    padding: 0;
    padding-bottom: 24px;
  }
  @media screen and (min-width: 768px) {
    padding: 0;
    padding-bottom: 24px;
    display: flex;
    flex-direction: row;
    gap: 100px;
  }
  @media screen and (min-width: 1440px) {
    padding: 0;
    padding-bottom: 24px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
`;

export const WelcomePageTrackerItem = styled.li`
  @media screen and (max-width: 767px) {
    display: flex;

    align-items: center;
    margin-top: 12px;

    color: var(--primary-dark);
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.2;

    svg {
      width: 32px;
      height: 32px;
      stroke: var(--primary-focus);
      fill: none;
      margin-right: 8px;
    }
  }

  @media screen and (min-width: 768px) {
    display: flex;

    align-items: center;
    margin-top: 12px;

    color: var(--primary-dark);
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.2;
    svg {
      width: 40px;
      height: 40px;
      stroke: var(--primary-focus);
      fill: none;
      margin-right: 8px;
    }
  }

  @media screen and (min-width: 1440px) {
    display: flex;

    align-items: center;
    margin-top: 16px;
    color: var(--primary-dark);
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.25;
    svg {
      width: 40px;
      height: 40px;
      stroke: var(--primary-focus);
      fill: none;
      margin-right: 8px;
    }
  }
`;

export const WelcomePageButton = styled.button`
  @media screen and (max-width: 767px) {
    display: flex;
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
  }

  @media screen and (min-width: 768px) {
    display: flex;
    height: 44px;
    width: 336px;
    padding: 10px 30px;
    justify-content: center;
    align-items: center;

    border-radius: 10px;
    border: none;
    background: var(--primary-focus);
    box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);

    color: var(--primary-light);
    text-align: center;
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.3;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    height: 44px;
    width: 384px;
    padding: 10px 30px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 10px;
    border: none;
    background: var(--primary-focus);
    box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);

    color: var(--primary-light);
    text-align: center;
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.3;
  }
`;

export const WelcomePageNavLink = styled(NavLink)`
  color: var(--primary-light);

  
    
  }
`;

export const WelcomePageDescriptionWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const WelcomePageDescriptionDiv = styled.div`
  @media screen and (max-width: 767px) {
    position: absolute;
    padding: 24px 16px;
    border-radius: 10px;
    background: var(--secondary-first);
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.3);
    margin-left: 0px;
    margin-top: 40px;
    width: 280px;
  }

  @media screen and (min-width: 768px) {
    position: absolute;
    padding: 32px 24px;
    border-radius: 10px;
    background: var(--secondary-first);
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.3);

    margin-top: 60px;
    width: 500px;
  }

  @media screen and (min-width: 1440px) {
    position: relative;
    padding: 32px 21px;
    border-radius: 10px;
    background: var(--secondary-first);
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.3);
    margin-left: 81px;
    margin-top: 105px;
    width: 515px;
  }
`;

export const WelcomePageDescriptionTitle = styled.h2`
  color: var(--primary-dark);
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.1;
  margin-bottom: 12px;
`;
export const WelcomePageDescriptionList = styled.ul`
  @media screen and (max-width: 767px) {
    list-style: initial;

    text-align: left;
    color: var(--primary-focus);
    padding-left: 16px;
  }

  @media screen and (min-width: 768px) {
    list-style: initial;

    text-align: left;
    color: var(--primary-focus);
    padding-left: 24px;
  }

  @media screen and (min-width: 1440px) {
    list-style: initial;

    text-align: left;
    color: var(--primary-focus);
    padding-left: 24px;
  }
`;

export const WelcomePageDescriptionItem = styled.li`
  color: var(--primary-dark);
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.2;

  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0;
  }

  &::marker {
    color: var(--primary-focus);
    font-size: 1.5em;
  }
`;
