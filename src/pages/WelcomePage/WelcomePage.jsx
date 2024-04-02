import { Container } from 'components/Container/Container';
import {
  BackgroundImgWelcome,
  WelcomePageWrapper,
  WelcomePageTextWrapper,
  WelcomePageTitle,
  WelcomePageSubtitle,
  WelcomePageTrackerTitle,
  WelcomePageTrackerList,
  WelcomePageTrackerItem,
  WelcomePageButton,
  WelcomePageDescriptionWrapper,
  WelcomePageDescriptionTitle,
  WelcomePageDescriptionList,
  WelcomePageDescriptionItem,
  WelcomePageDescriptionDiv,
  WelcomePageWrapperFirst,
} from './WelcomePage.styled';

import DesktopBackground1 from '../../assets/WelcomePage/background-main-page.png';
import DesktopBackground2 from '../../assets/WelcomePage/background-main-page@2x.png';
import TabletBackground1 from '../../assets/WelcomePage/tablet-background-main-page.png';
import TabletBackground2 from '../../assets/WelcomePage/tablet-background-main-page@2x.png';
import MobileBackground1 from '../../assets/WelcomePage/mobile-background-main-page.png';
import MobileBackground2 from '../../assets/WelcomePage/mobile-background-main-page@2x.png';

import icons from '../../assets/icons.svg';

const WelcomePage = () => {
  return (
    <>
      <Container>
        <WelcomePageWrapper>
          <WelcomePageWrapperFirst>
            <WelcomePageTextWrapper>
              <WelcomePageTitle>Water consumption tracker</WelcomePageTitle>
              <WelcomePageSubtitle>
                Record daily water intake and track
              </WelcomePageSubtitle>
            </WelcomePageTextWrapper>

            <WelcomePageTrackerTitle>Tracker Benefits</WelcomePageTrackerTitle>

            <WelcomePageTrackerList>
              <WelcomePageTrackerItem>
                <svg>
                  <use href={`${icons}#icon-calendar`}></use>
                </svg>
                Habit drive
              </WelcomePageTrackerItem>
              <WelcomePageTrackerItem>
                <svg>
                  <use href={`${icons}#icon-chart-bar`}></use>
                </svg>
                View statistics
              </WelcomePageTrackerItem>
              <WelcomePageTrackerItem>
                <svg>
                  <use href={`${icons}#icon-wrench-screwdriver`}></use>
                </svg>
                Personal rate setting
              </WelcomePageTrackerItem>
            </WelcomePageTrackerList>

            <WelcomePageButton href="">Try tracker</WelcomePageButton>
          </WelcomePageWrapperFirst>

          <WelcomePageDescriptionWrapper>
            <WelcomePageDescriptionDiv>
              <WelcomePageDescriptionTitle>
                Why drink water
              </WelcomePageDescriptionTitle>
              <WelcomePageDescriptionList>
                <WelcomePageDescriptionItem>
                  Supply of nutrients to all organs
                </WelcomePageDescriptionItem>
                <WelcomePageDescriptionItem>
                  Providing oxygen to the lungs
                </WelcomePageDescriptionItem>
                <WelcomePageDescriptionItem>
                  Maintaining the work of the heart
                </WelcomePageDescriptionItem>
                <WelcomePageDescriptionItem>
                  Release of processed substances
                </WelcomePageDescriptionItem>
                <WelcomePageDescriptionItem>
                  Ensuring the stability of the internal environment
                </WelcomePageDescriptionItem>
                <WelcomePageDescriptionItem>
                  Maintaining within the normal temperature
                </WelcomePageDescriptionItem>
                <WelcomePageDescriptionItem>
                  Maintaining an immune system capable of resisting disease
                </WelcomePageDescriptionItem>
              </WelcomePageDescriptionList>
            </WelcomePageDescriptionDiv>
          </WelcomePageDescriptionWrapper>
        </WelcomePageWrapper>
      </Container>
      <BackgroundImgWelcome>
        <picture>
          <source
            media="(min-width: 1440px)"
            srcSet={`${DesktopBackground1} 1x, ${DesktopBackground2} 2x`}
            type="image"
          />
          <source
            media="(min-width: 768px)"
            srcSet={`${TabletBackground1} 1x, ${TabletBackground2} 2x`}
            type="image"
          />
          <source
            media="(max-width: 767px)"
            srcSet={`${MobileBackground1} 1x, ${MobileBackground2} 2x`}
            type="image"
          />
        </picture>
      </BackgroundImgWelcome>
    </>
  );
};

export default WelcomePage;
