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

  .logoWrapper {
    width: 40px;
    height: 48px;
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

  .imgWrapper {
    width: 28px;
    height: 28px;
  }

  .menuButton {
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

  .dropDownElement {
    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: center;
    padding-left: 16px;
    padding-right: 16px;
  }

  .dropDownButton {
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
  }
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

  .logOutDiv1 {
    display: flex;
    flex-wrap: nowrap;
    width: 544px;
    height: 32px;
    align-items: center;
    justify-content: space-between;
  }

  .logOutDiv2 {
    display: flex;
    flex-wrap: nowrap;
    width: 544px;
    height: 32px;
    align-items: center;
    justify-content: space-between;
  }

  .logOutDiv3 {
    display: flex;
    flex-wrap: nowrap;
    width: 544px;
    height: 32px;
    align-items: center;
    gap: 24px;
    flex-direction: row-reverse;
  }

  .logOutP1 {
    margin: 0px;
    font:
      500 26px/1.5 'Roboto',
      sans-serif;
  }

  .logOutP2 {
    margin: 0px;
    font:
      500 18px/1.5 'Roboto',
      sans-serif;
  }

  .logOutButtonCancel {
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
  }

  .logOutButtonDelete {
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
  }

  .xMarkWrapper {
    width: 16px;
    height: 16px;
    cursor: pointer;
  }
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
  padding: 32px 24px 32px 24px;

  @media (max-width: 1439px) {
    width: 704px;
    height: 860px;
  }

  @media (max-width: 767px) {
    width: 280px;
    height: 852px;
  }

  .settingsFirst {
    display: flex;
    flex-wrap: nowrap;
    width: 960px;
    height: 32px;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;

    @media (max-width: 1439px) {
      width: 656px;
    }

    @media (max-width: 767px) {
      width: 256px;
    }
  }

  .xMarkWrapper {
    width: 16px;
    height: 16px;
    cursor: pointer;
  }

  .uploadPhotoButton {
    margin: 0px;
    font:
      500 14px/1.5 'Roboto',
      sans-serif;
    color: #407bff;
    padding: 0;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  .settingsSecond {
    display: flex;
    flex-direction: row;
    width: 222px;
    height: 108px;
    align-items: center;
    justify-content: start;
    flex-wrap: wrap;
    margin-bottom: 24px;
  }

  .uploadPhotoDiv {
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: center;
  }

  .genderIdentityDiv {
    display: flex;
    flex-direction: column;
    align-items: start;
  }

  .settingsRadioLabel {
    display: flex;
    align-items: start;
    font:
      500 18px/1.5 'Roboto',
      sans-serif;
  }

  .SettingsRadioForm {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 182px;
    row-gap: 4px;
    column-gap: 8px;
  }

  .radioLabelOption {
    margin: 0px;
    font:
      400 16px/1.5 'Roboto',
      sans-serif;
  }

  .radioOptionDiv {
    display: flex;
    gap: 8px;
  }

  .settingsThird {
    display: flex;
    flex-direction: row;
    width: 960px;
    height: 108px;
    align-items: start;
    justify-content: start;
    margin-bottom: 12px;
    column-gap: 254px;
  }

  .passwordLabel {
    margin: 0px;
    font:
      400 16px/1.5 'Roboto',
      sans-serif;
  }

  .passwordInput {
    width: 392px;
    height: 44px;
    padding: 12px 10px 12px 10px;
    border-radius: 6px;
    border: 1px solid #d7e3ff;
    color: #d7e3ff;

    &::placeholder {
      color: #d7e3ff;
    }

    &:active {
      color: #407bff;
    }
  }

  .passwordInputContainer {
    position: relative;
    width: 392px;
  }

  .passwordDiv {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 4px;
  }

  .settingsFourth {
    display: flex;
    flex-direction: row;
    width: 960px;
    height: 108px;
    align-items: center;
    justify-content: start;
    column-gap: 24px;
    margin-bottom: 12px;
  }

  .settingsFifth {
    display: flex;
    flex-direction: row;
    width: 960px;
    height: 108px;
    align-items: center;
    justify-content: start;
    column-gap: 24px;
    margin-bottom: 24px;
  }

  .settingsSixth {
    display: flex;
    flex-direction: row;
    width: 960px;
    height: 108px;
    align-items: center;
    justify-content: end;
    gap: 24px;
  }

  .saveButton {
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
    background: #407bff;
    border: 1px solid transparent;
    border-radius: 10px;
  }

  .settingsP1 {
    margin: 0px;
    font:
      500 26px/1.5 'Roboto',
      sans-serif;
  }

  .settingsP2 {
    margin: 0px;
    font:
      500 18px/1.5 'Roboto',
      sans-serif;
    width: 100%;
  }

  .settingsP3 {
    margin: 0px;
    font:
      500 18px/1.5 'Roboto',
      sans-serif;
    width: 100%;
  }

  .logOutButtonCancel {
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
  }

  .ShowPasswordWrapper {
    width: 24px;
    height: 24px;
    padding: 0px;
    border: 0px;
    background: #fff;
    padding-top: 4px;
    position: absolute;
    right: 10px;
    top: 20%;
    cursor: pointer;
  }

  .ShowPasswordWrapper2 {
    width: 24px;
    height: 24px;
    padding: 0px;
    border: 0px;
    background: #fff;
    padding-top: 4px;
    position: absolute;
    right: 10px;
    top: 50%;
    cursor: pointer;
  }

  .settingsImgWrapper {
    width: 80px;
    height: 80px;
  }

  .arrowUpWrapper {
    width: 16px;
    height: 16px;
  }
`;
