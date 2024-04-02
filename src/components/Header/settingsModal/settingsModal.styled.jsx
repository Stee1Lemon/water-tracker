import styled from 'styled-components';

// SettingsStyles

export const ModalSettingContainer = styled.div`
  background-color: var(--primary-light);
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 1008px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: start;
  max-height: 80vh;
  overflow-y: auto;
  padding: 32px 24px 32px 24px;

  @media (max-width: 1439px) {
    width: 704px;
    padding: 32px 12px 32px 24px;
  }

  @media (max-width: 767px) {
    width: 280px;
    padding: 32px 12px 32px 12px;
  }

  .settingsGridContainer {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto auto;
    gap: 20px;
    margin-bottom: 24px;
    align-items: start;
    justify-items: start;
    grid-template-areas:
      'gender password'
      'name newPassword'
      'email repeatPassword';

    @media (max-width: 1439px) {
      grid-template-columns: 1fr;
      grid-template-areas:
        'gender'
        'name'
        'email'
        'password'
        'newPassword'
        'repeatPassword';
    }

    @media (max-width: 767px) {
      width: 256px;
      margin-bottom: 26px;
    }
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

  .xMarkWrapper:hover {
    border-bottom: 1px solid var(--primary-focus);
  }

  .uploadPhotoButton {
    margin: 0px;
    font:
      500 14px/1.5 'Roboto',
      sans-serif;
    color: var(--primary-focus);
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

    @media (max-width: 1439px) {
      width: 656px;
    }

    @media (max-width: 767px) {
      width: 256px;
    }
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
    grid-area: gender;

    @media (max-width: 767px) {
      width: 256px;
    }
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
    border: 1px solid var(--secondary-fifth);
    color: var(--secondary-fifth);

    &::placeholder {
      color: var(--secondary-fifth);
    }

    &:focus {
      color: var(--primary-focus);
      border: 1px solid var(--secondary-fifth);
      outline: none;
    }

    @media (max-width: 767px) {
      width: 256px;
    }
  }

  .passwordInput:not(:placeholder-shown) {
    color: var(--primary-focus);
  }

  .passwordInputContainer {
    position: relative;
    width: 392px;

    @media (max-width: 767px) {
      width: 256px;
    }
  }

  .passwordDiv {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 4px;
    grid-area: password;
  }

  .nameDiv {
    display: flex;
    flex-direction: column;
    grid-area: name;
    gap: 4px;

    @media (max-width: 767px) {
      width: 256px;
    }
  }

  .newPasswordDiv {
    grid-area: newPassword;
    width: 392px;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 4px;

    @media (max-width: 767px) {
      width: 256px;
    }
  }

  .emailDiv {
    display: flex;
    flex-direction: column;
    grid-area: email;
    gap: 4px;
  }

  .confirmNewPasswordDiv {
    grid-area: repeatPassword;
    width: 392px;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 4px;

    @media (max-width: 767px) {
      width: 256px;
    }
  }

  .settingsSixth {
    display: flex;
    flex-direction: row;
    width: 960px;
    height: 44px;
    align-items: center;
    justify-content: end;
    gap: 24px;

    @media (max-width: 1439px) {
      width: 656px;
    }

    @media (max-width: 767px) {
      width: 256px;
      flex-direction: column;
    }
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
    color: var(--primary-light);
    background: var(--primary-focus);
    border: 1px solid transparent;
    border-radius: 10px;

    @media (max-width: 767px) {
      width: 256px;
      height: 36px;
    }
  }

  .saveButton:hover {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
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

  .ShowPasswordWrapper {
    width: 16px;
    height: 16px;
    background: var(--primary-light);
    position: absolute;
    padding: 0;
    margin: 0;
    border: none;
    cursor: pointer;
    top: 14px;
    right: 16px;
  }

  .showPasswordSVG{
    position: relative;
  }

  .settingsImgWrapper {
    width: 80px;
    height: 80px;
  }

  .arrowUpWrapper {
    width: 16px;
    height: 16px;
  }

  .invalid {
    border: 1px solid var(--secondary-second);
    color: var(--secondary-second);

    &:focus, &:active {
      color: var(--secondary-second);
      border: 1px solid var(--secondary-second);
      outline: none;
    }
  }
`;
