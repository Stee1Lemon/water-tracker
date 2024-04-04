import {
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
  WelcomePageNavLink,
} from './Welcome.styled';

import icons from '../../assets/icons.svg';

export const Welcome = () => {
  return (
    <>
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

          <WelcomePageButton>
            <WelcomePageNavLink to="/signup">Try tracker</WelcomePageNavLink>
          </WelcomePageButton>
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
    </>
  );
};
