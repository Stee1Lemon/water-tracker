import {
  WelcomePageWrapper,
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
  WelcomePageNavLink,
  ContainerTeam,
} from './Welcome.styled';

import icons from '../../assets/icons.svg';

import { useTranslation } from 'react-i18next';
import ModalTeam from 'components/ModalTeam/ModalTeam';

export const Welcome = () => {
  const { t } = useTranslation();
  return (
    <>
      <WelcomePageWrapper>
        <div>
          <WelcomePageTitle>{t('welcome.header')}</WelcomePageTitle>
          <WelcomePageSubtitle>{t('welcome.description')}</WelcomePageSubtitle>
          <WelcomePageTrackerTitle>
            {t('welcome.listBenef')}
          </WelcomePageTrackerTitle>

          <WelcomePageTrackerList>
            <WelcomePageTrackerItem>
              <svg>
                <use href={`${icons}#icon-calendar`}></use>
              </svg>
              {t('welcome.firstBenef')}
            </WelcomePageTrackerItem>
            <WelcomePageTrackerItem>
              <svg>
                <use href={`${icons}#icon-chart-bar`}></use>
              </svg>
              {t('welcome.secondBenef')}
            </WelcomePageTrackerItem>
            <WelcomePageTrackerItem>
              <svg>
                <use href={`${icons}#icon-wrench-screwdriver`}></use>
              </svg>
              {t('welcome.thirdBenef')}
            </WelcomePageTrackerItem>
          </WelcomePageTrackerList>
          <div>
            <WelcomePageButton>
              <WelcomePageNavLink to="/signup">
                {t('welcome.buttonTry')}
              </WelcomePageNavLink>
            </WelcomePageButton>
          </div>
        </div>

        <WelcomePageDescriptionWrapper>
          <WelcomePageDescriptionDiv>
            <WelcomePageDescriptionTitle>
              {t('welcome.listWhy')}
            </WelcomePageDescriptionTitle>
            <WelcomePageDescriptionList>
              <WelcomePageDescriptionItem>
                {t('welcome.firstWhy')}
              </WelcomePageDescriptionItem>
              <WelcomePageDescriptionItem>
                {t('welcome.secondWhy')}
              </WelcomePageDescriptionItem>
              <WelcomePageDescriptionItem>
                {t('welcome.thirdWhy')}
              </WelcomePageDescriptionItem>
              <WelcomePageDescriptionItem>
                {t('welcome.fourthWhy')}
              </WelcomePageDescriptionItem>
              <WelcomePageDescriptionItem>
                {t('welcome.fifthWhy')}
              </WelcomePageDescriptionItem>
              <WelcomePageDescriptionItem>
                {t('welcome.sixthWhy')}
              </WelcomePageDescriptionItem>
              <WelcomePageDescriptionItem>
                {t('welcome.seventhWhy')}
              </WelcomePageDescriptionItem>
            </WelcomePageDescriptionList>
          </WelcomePageDescriptionDiv>
        </WelcomePageDescriptionWrapper>
      </WelcomePageWrapper>
      <ContainerTeam>
        <ModalTeam />
      </ContainerTeam>
    </>
  );
};
