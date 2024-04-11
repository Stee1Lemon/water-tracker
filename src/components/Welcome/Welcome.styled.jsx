import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

// export const ContainerTeam = styled.div`
//   margin-top: 500px;

//   @media screen and (min-width: 768px) {
//     margin-left: 25px;
//     margin-top: 400px;
//   }
//   @media screen and (min-width: 1440px) {
//     margin: 0 auto;
//     margin-top: 70px;
//   }
// `;

export const WelcomePageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: normal;

  margin: 0 auto;
  padding-top: 24px;

  @media screen and (min-width: 768px) {
    padding-top: 40px;
    padding-bottom: 50px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    padding-left: 100px;
  }
`;

export const WelcomePageTitle = styled.h1`
  color: var(--primary-dark);
  font-family: Roboto;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.1;

  @media screen and (min-width: 768px) {
    font-size: 36px;
    line-height: 1.2;
  }

  @media screen and (min-width: 1440px) {
    font-size: 36px;
    min-width: 439px;
  }
`;
export const WelcomePageSubtitle = styled.p`
  color: var(--primary-dark);
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.2;
  margin-top: 16px;
  margin-bottom: 0;

  @media screen and (min-width: 768px) {
    font-size: 26px;
    line-height: 1.2;
    margin-top: 16px;
    margin-bottom: 0;
  }
`;

export const WelcomePageTrackerTitle = styled.h2`
  color: var(--primary-dark);
  font-size: 18px;
  font-weight: 500;
  line-height: 1.1;
  margin-top: 24px;
  margin-bottom: 0;
`;

export const WelcomePageTrackerList = styled.ul`
  padding: 0;
  padding-bottom: 24px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    gap: 16px;
  }
  @media screen and (min-width: 1440px) {
    flex-direction: column;
    gap: 16px;
  }
`;

export const WelcomePageTrackerItem = styled.li`
  display: flex;
  align-items: center;
  margin-top: 12px;
  color: var(--primary-dark);
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.2;
  min-width: 224px;

  svg {
    width: 32px;
    height: 32px;
    stroke: var(--primary-focus);
    fill: none;
    margin-right: 8px;
  }

  @media screen and (min-width: 768px) {
    svg {
      width: 40px;
      height: 40px;
    }
  }
  @media screen and (min-width: 1440px) {
    line-height: 1.25;
    svg {
      width: 40px;
      height: 40px;
    }
  }
`;

export const WelcomePageButton = styled.button`
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

  &:hover,
  &:focus {
    box-shadow: 0 4px 14px 0 rgba(64, 123, 255, 0.54);
  }

  @media screen and (min-width: 768px) {
    height: 44px;
    width: 336px;
    padding: 10px 30px;

    font-size: 18px;
    line-height: 1.3;
  }

  @media screen and (min-width: 1440px) {
    width: 384px;
  }
`;

export const WelcomePageNavLink = styled(NavLink)`
  color: var(--primary-light);
`;

export const WelcomePageDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const WelcomePageDescriptionDiv = styled.div`
  padding: 24px 16px;
  border-radius: 10px;
  background: var(--secondary-first);
  box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.3);
  margin-left: 0px;
  margin-top: 40px;
  margin-bottom: 40px;
  width: 280px;

  @media screen and (min-width: 768px) {
    padding: 32px 24px;
    margin-top: 60px;
    width: 500px;
  }

  @media screen and (min-width: 1440px) {
    padding: 32px 21px;
    border-radius: 10px;
    margin-left: 81px;
    margin-right: 0;
    padding-right: 0;
    margin-top: 85px;
    width: 515px;
  }
`;

export const WelcomePageDescriptionTitle = styled.h2`
  color: var(--primary-dark);
  font-size: 18px;
  font-weight: 500;
  line-height: 1.1;
  margin-bottom: 12px;
`;
export const WelcomePageDescriptionList = styled.ul`
  list-style: initial;
  text-align: left;
  color: var(--primary-focus);
  padding-left: 16px;

  @media screen and (min-width: 768px) {
    padding-left: 24px;
  }
`;

export const WelcomePageDescriptionItem = styled.li`
  color: var(--primary-dark);
  font-size: 16px;
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
