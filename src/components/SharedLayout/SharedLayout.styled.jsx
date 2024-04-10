import styled from 'styled-components';
// Welcome
import DesktopBackground1 from 'assets/WelcomePage/background-main-page.png';
import DesktopElement from 'assets/WelcomePage/background-element-main-page1.png';
import TabletBackground1 from 'assets/WelcomePage/tablet-background-main-page.png';
import TabletElement from 'assets/WelcomePage/tablet-background-element-home-screen.png';
import MobileBackground1 from 'assets/WelcomePage/mobile-background-main-page.png';
// Sign in/Sign up
import mobImg from '../../assets/signup-background-mobile.png';
import tabImg from '../../assets/signup-background-tablet.png';
import deskImg from '../../assets/signup-background-desktop.png';
import mobBottleImg from '../../assets/signup-bottle-mobile.png';
import tabBottleImg from '../../assets/signup-bottle-tablet.png';
import deskBottleImg from '../../assets/signup-bottle-desktop.png';
// Home
import bg from '../../assets/bg.png';

//  background-image: url(${MobileBackground1});
export const BackGround = styled.div`
  background-image: ${(props) =>
    props.$page === 'welcome'
      ? `url(${MobileBackground1})`
      : props.$page === 'sign'
      ? `url(${mobImg})`
      : props.$page === 'home'
      ? `url(${bg})`
      : 'none'};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center bottom;

  @media only screen and (max-width: 768px) {
    ${(props) =>
      props.$page === 'sign'
        ? `
      &::before {
        content: '';
        position: absolute;
        background-image: url(${mobBottleImg});
        background-size: contain;
        background-repeat: no-repeat;
        z-index: -99;
        top: 50%;
        left: 50%;
        transform: translate(-50%, 98%);
        width: 280px;
        height: 210px;
      }`
        : 'none'};
  }
  @media only screen and (min-width: 768px) {
    background-image: ${(props) =>
      props.$page === 'welcome'
        ? `url(${TabletBackground1})`
        : props.$page === 'sign'
        ? `url(${tabImg})`
        : props.$page === 'home'
        ? `url(${bg})`
        : 'none'};

    &::after {
      content: '';
      position: absolute;
      background-image: ${(props) =>
        props.$page === 'welcome'
          ? `url(${TabletElement})`
          : props.$page === 'sign'
          ? `url(${tabBottleImg})`
          : 'none'};
      background-size: contain;
      background-repeat: no-repeat;
      z-index: -99;
      top: 50%;
      left: 50%;
      transform: translate(-37%, -55%);
      width: 570px;
      height: 500px;
    }
  }
  /* background-image: url(${DesktopBackground1}); */
  @media only screen and (min-width: 1440px) {
    background-image: ${(props) =>
      props.$page === 'welcome'
        ? `url(${DesktopBackground1})`
        : props.$page === 'sign'
        ? `url(${deskImg})`
        : props.$page === 'home'
        ? `url(${bg})`
        : 'none'};
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center bottom;
    height: 100%;
    width: 100%;
    &::after {
      content: '';
      position: absolute;
      /* background-image: url(${DesktopElement}); */
      background-image: ${(props) =>
        props.$page === 'welcome'
          ? `url(${DesktopElement})`
          : props.$page === 'sign'
          ? `url(${deskBottleImg})`
          : 'none'};
      background-size: contain;
      background-repeat: no-repeat;
      z-index: -99;
      top: 50%;
      left: 50%;
      transform: translate(-85%, -45%);
      width: 916px;
      height: 680px;
    }
  }
`;
