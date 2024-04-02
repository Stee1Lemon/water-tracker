import styled from 'styled-components';

import DesktopBackground1 from '../../assets/WelcomePage/background-main-page.png';
import DesktopElement from '../../assets/WelcomePage/background-element-main-page1.png';
// import TabletBackground1 from '../../assets/WelcomePage/tablet-background-main-page.png';
// import TabletElement from '../../assets/WelcomePage/tablet-background-element-home-screen.png';
// import MobileBackground1 from '../../assets/WelcomePage/mobile-background-main-page.png';

export const WelcomeSection = styled.section`
  height: 100%;
  background-image: url(${DesktopBackground1});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center bottom;
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
    width: 1404px;
    height: 582px;
  }
`;

export const WelcomeContainer = styled.div`

 
  
  height: 600px;

  

    max-width: 1280px;
    margin: 0 auto;
    padding: 20px 112px;
   
    
  }
`;
