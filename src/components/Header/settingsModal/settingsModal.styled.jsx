import styled from 'styled-components';

export const ModalSettingContainer = styled.div`
  background-color: var(--primary-light);
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 1028px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: start;
  max-height: 80vh;
  padding: 32px 0 32px 32px;
  overflow-y: auto;
  overflow-x: hidden;

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
    margin: 0;
    font:
      500 16px/1.5 'Roboto',
      sans-serif;
    color: var(--primary-focus);
    padding: 0;
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    gap: 4px;
    min-width: 134px;
  }

  .uploadPhotoButton:hover .arrowUpWrapper {
    transform: rotateY(180deg);
    transition: transform 0.5s linear;
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
    gap: 16px;
    align-items: center;
  }

  .settingsImgWrapper {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    justify-content: center;
  }

  .settingsImgWrapper img {
    max-width: 100%;
    max-height: 100%;
    display: block;
    object-fit: fill;
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
    padding-bottom: 4px;
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
    margin: 0;
    font:
      400 16px/1.5 'Roboto',
      sans-serif;
    cursor: pointer;
  }

  .radioOptionsDiv {
    display: flex;
    flex-direction: column;
  }

  .radioOption {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    cursor: pointer;
  }

  .radioInput {
    opacity: 0;
    position: absolute;
  }

  .customRadioButton {
    width: 20px;
    height: 20px;
    border: 2px solid #007bff;
    border-radius: 50%;
    margin-right: 8px;
    cursor: pointer;
    position: relative;
  }

  .customRadioButton::after {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #007bff;
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .radioInput:checked + .customRadioButton::after {
    display: block;
  }

  .radioInput:checked + .customRadioButton + .radioLabelOption {
    font-weight: bold;
    color: #007bff;
  }

  .passwordLabel {
    margin: 0;
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
    width: 152px;
    height: 44px;
    margin: 0;
    padding: 0;
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
    transition: all 0.1s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

    @media (max-width: 767px) {
      width: 256px;
      height: 36px;
    }
  }

  .saveButton:hover {
    box-shadow: 0 4px 14px 0 rgba(64, 123, 255, 0.54);
  }

  .saveButton:active {
    background: #0c48cc;
    box-shadow: 0 2px 8px 0 rgba(64, 123, 255, 0.54);
    transform: translateY(2px);
  }

  .settingsP1 {
    margin: 0;
    font:
      500 26px/1.5 'Roboto',
      sans-serif;
  }

  .settingsP2 {
    margin: 0 0 4px;
    font:
      500 18px/1.5 'Roboto',
      sans-serif;
    width: 100%;
  }

  .settingsP3 {
    margin: 0;
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

  .showPasswordSVG {
    position: relative;
  }

  .imgWrapper {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;
  }

  .imgWrapper img {
    max-width: 100%;
    max-height: 100%;
    display: block;
  }

  .arrowUpWrapper {
    width: 16px;
    height: 16px;
    transition: transform 0.5s linear;
  }

  .invalid {
    border: 1px solid var(--secondary-second);
    color: var(--secondary-second);

    &:focus,
    &:active {
      color: var(--secondary-second);
      border: 1px solid var(--secondary-second);
      outline: none;
    }
  }

  .invalid.passwordInput:not(:placeholder-shown) {
    color: var(--secondary-second);
  }

  .errorText {
    color: var(--secondary-second);
  }

  .fileInputContainer input[type='file'] {
    display: none;
  }
`;
