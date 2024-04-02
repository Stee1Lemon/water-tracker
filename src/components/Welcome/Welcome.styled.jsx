import styled from 'styled-components';

export const BackgroundImgWelcome = styled.div`
  background-repeat: no-repeat;
`;

export const WelcomePageImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const WelcomePageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: normal;

  margin: 0 auto;
  padding-top: 60px;
  padding-bottom: 294px;
  padding-left: 30px;
  padding-right: 210px;
`;

export const WelcomePageWrapperFirst = styled.div`
  position: relative;
`;

export const WelcomePageTextWrapper = styled.div``;

export const WelcomePageTitle = styled.h1`
  color: var(--primary-dark);
  font-family: Roboto;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.2;
`;
export const WelcomePageSubtitle = styled.p`
  color: var(--primary-dark);
  font-family: Roboto;
  font-size: 26px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  margin-top: 16px;
  margin-bottom: 0;
`;

export const WelcomePageTrackerTitle = styled.h2`
  color: var(--primary-dark);
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.1;
  margin-top: 24px;
`;
export const WelcomePageTrackerList = styled.ul`
  padding: 0;
  padding-bottom: 34px;
`;

export const WelcomePageTrackerItem = styled.li`
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
`;

export const WelcomePageButton = styled.button`
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
`;

export const WelcomePageDescriptionWrapper = styled.div`
  position: relative;

  flex-direction: column;
  align-items: flex-start;
`;

export const WelcomePageDescriptionDiv = styled.div`
  position: absolute;
  padding: 32px 21px;
  border-radius: 10px;
  background: var(--secondary-first);
  box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.3);
  margin-left: 81px;
  margin-top: 63px;
  width: 515px;
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
  list-style: initial;

  text-align: left;
  color: var(--primary-focus);
  padding-left: 24px;
`;

export const WelcomePageDescriptionItem = styled.li`
  color: var(--primary-dark);
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;

  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0;
  }

  &::marker {
    color: var(--primary-focus);
    font-size: 1.5em;
  }
`;
