import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.div``;

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  padding-top: 12px;
  padding-left: 188px;
  padding-right: 188px;

  @media (max-width: 1439px) {
    padding-left: 32px;
    padding-right: 32px;
  }

  @media (max-width: 767px) {
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 8px;
  }
`;

export const LogoLink = styled(Link)`
  display: flex;
  max-height: 48px;
  font:
    700 12px/1.5 'Roboto',
    sans-serif;
  gap: 4px;
  align-items: center;
  color: var(--primary-focus);

  &:hover {
    color: #356ac8;
  }

  &:link,
  &:visited,
  &:active {
    text-decoration: none;
  }

  @media (max-width: 1439px) {
    font-size: 12px;
  }

  @media (max-width: 767px) {
    font-size: 12px;
  }
`;

export const UserContext = styled.div`
  position: relative;
  display: flex;
  max-height: 48px;
  font:
    400 18px/1.5 'Roboto',
    sans-serif;
  gap: 8px;
  align-items: center;
  color: var(--primary-focus);
  cursor: default;

  &:link,
  &:hover,
  &:visited,
  &:active {
    text-decoration: none;
  }

  @media (max-width: 1439px) {
    font-size: 18px;
  }

  @media (max-width: 767px) {
    font-size: 16px;
  }
`;

export const MenuButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  svg {
    width: 16px;
    height: 16px;
  }

  @media (max-width: 1439px) {
    svg {
      width: 14px;
      height: 14px;
    }
  }

  @media (max-width: 767px) {
    svg {
      width: 12px;
      height: 12px;
    }
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 12px;
  padding-top: 16px;
  padding-bottom: 16px;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.2);
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  row-gap: 16px;
  opacity: 0;
  transform: translateY(-10px);
  visibility: hidden;
  transition:
    opacity 0.3s ease,
    transform 0.3s ease,
    visibility 0.3s;
  &.visible {
    opacity: 1;
    transform: translateY(0);
    visibility: visible;
  }
`;

export const DropDownElement = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  padding-left: 16px;
  padding-right: 16px;
`;

export const DropDownButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  color: #407bff;
  font-family: inherit;
  font-size: inherit;
  cursor: pointer;

  &:hover {
    color: #356ac8;
  }

  &:focus {
    outline: none;
  }

  &:active {
    outline: none;
  }
`;

export const ImgWrapper = styled.div`
  width: 28px;
  height: 28px;
`;

export const LogoWrapper = styled.svg`
  width: 40px;
  height: 48px;
`;

export const XmarkWrapper = styled.svg`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;
export const ArrowUpWrapper = styled.svg`
  width: 16px;
  height: 16px;
`;

export const SettingsImgWrapper = styled.div`
  width: 80px;
  height: 80px;
`;

// LogOutStyles

export const ModalLogOutContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 592px;
  height: 208px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 80vh;
  overflow-y: auto;
  gap: 24px;
  padding: 32px 24px 32px 24px;
`;

export const LogOutDiv1 = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: 544px;
  height: 32px;
  align-items: center;
  justify-content: space-between;
`;

export const LogOutDiv2 = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: 544px;
  height: 32px;
  align-items: center;
  justify-content: space-between;
`;

export const LogOutDiv3 = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: 544px;
  height: 32px;
  align-items: center;
  gap: 24px;
  flex-direction: row-reverse;
`;

export const LogOutP1 = styled.p`
  margin: 0px;
  font:
    500 26px/1.5 'Roboto',
    sans-serif;
`;

export const LogOutP2 = styled.p`
  margin: 0px;
  font:
    500 18px/1.5 'Roboto',
    sans-serif;
`;

export const LogOutButtonCancel = styled.button`
  width: 160px;
  height: 44px;
  margin: 0px;
  padding: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  font:
    500 18px/1.5 'Roboto',
    sans-serif;
  color: #407bff;
  background: #d7e3ff;
  border: 1px solid transparent;
  border-radius: 10px;
`;

export const LogOutButtonDelete = styled.button`
  width: 160px;
  height: 44px;
  margin: 0px;
  padding: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  font:
    500 18px/1.5 'Roboto',
    sans-serif;
  color: #fff;
  background: #ef5050;
  border: 1px solid transparent;
  border-radius: 10px;
`;

// SettingsStyles

export const ModalSettingContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 1008px;
  height: 592px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: start;
  max-height: 80vh;
  overflow-y: auto;
`;

export const SettingsDiv1 = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: 960px;
  height: 32px;
  align-items: center;
  justify-content: space-between;
`;

export const SettingsDiv2 = styled.div`
  display: flex;
  flex-direction: row;
  width: 222px;
  height: 108px;
  align-items: center;
  justify-content: start;
  flex-wrap: wrap;
`;

export const SettingsDiv3 = styled.div`
  display: flex;
  flex-direction: column;
  width: 960px;
  height: 108px;
  align-items: center;
  justify-content: start;
`;

export const SettingsDiv4 = styled.div`
  display: flex;
  flex-direction: column;
  width: 960px;
  height: 108px;
  align-items: center;
  justify-content: start;
`;

export const SettingsDiv5 = styled.div`
  display: flex;
  flex-direction: column;
  width: 960px;
  height: 108px;
  align-items: center;
  justify-content: start;
`;

export const SettingsDiv6 = styled.div`
  display: flex;
  flex-direction: column;
  width: 960px;
  height: 108px;
  align-items: center;
  justify-content: start;
`;

export const UploadPhotoDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
`;

export const SettingsP1 = styled.div`
  margin: 0px;
  font:
    500 26px/1.5 'Roboto',
    sans-serif;
`;

export const SettingsP2 = styled.div`
  margin: 0px;
  font:
    500 18px/1.5 'Roboto',
    sans-serif;
  width: 100%;
`;

export const SettingsButton1 = styled.button`
  margin: 0px;
  font:
    500 14px/1.5 'Roboto',
    sans-serif;
  color: #407bff;
  padding: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
