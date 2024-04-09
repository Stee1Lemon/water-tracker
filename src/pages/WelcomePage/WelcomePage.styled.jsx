import styled from 'styled-components';

import DesktopBackground1 from '../../assets/WelcomePage/background-main-page.png';
import DesktopElement from '../../assets/WelcomePage/background-element-main-page1.png';
import TabletBackground1 from '../../assets/WelcomePage/tablet-background-main-page.png';
import TabletElement from '../../assets/WelcomePage/tablet-background-element-home-screen.png';
import MobileBackground1 from '../../assets/WelcomePage/mobile-background-main-page.png';

export const WelcomeSection = styled.section`
  @media only screen and (max-width: 767px) {
    background-image: url(${MobileBackground1});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }

  @media only screen and (min-width: 768px) {
    background-image: url(${TabletBackground1});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    &::after {
      content: '';
      position: absolute;
      background-image: url(${TabletElement});
      background-size: contain;
      background-repeat: no-repeat;
      z-index: -99;
      top: 50%;
      left: 50%;
      transform: translate(-48%, -48%);
    }
  }

  @media only screen and (min-width: 1440px) {
    background-image: url(${DesktopBackground1});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center bottom;
    height: 100%;
    &::after {
      content: '';
      position: absolute;
      background-image: url(${DesktopElement});
      background-size: contain;
      background-repeat: no-repeat;
      z-index: -99;
      top: 50%;
      left: 50%;
      transform: translate(-48%, -48%);
      width: 100%;
      height: 100%;
    }
  }
`;

export const WelcomeContainer = styled.div`
  @media screen and (max-width: 767px) {
    max-width: 320px;
    margin: 0 auto;
    padding: 15px 15px;
  }

  @media screen and (max-width: 360px) {
    margin: 0 auto;
    padding: 0;
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;

    padding: 16px 32px;
    margin: 0 auto;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1280px;
    margin: 0 auto;
    padding: 18px 80px;
  }
`;
