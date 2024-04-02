import Modal from '../../Modal/Modal';
import { ReactComponent as Xmark } from '../headerIcons/Xmark.svg';
import { ReactComponent as ArrowUp } from '../headerIcons/ArrowUp.svg';
import { ReactComponent as ShowPassword } from '../headerIcons/ShowPassword.svg';
import { ReactComponent as ShowPasswordActive } from '../headerIcons/eye.svg';
import TemplateImg from '../../../assets/Template.jpg';
import { ModalSettingContainer } from './settingsModal.styled';
import { useState } from 'react';

const SettingsModal = ({ isSettingsModalOpen, toggleSettingsModal }) => {
  const [passwordVisible, setPasswordVisible] = useState({
    oldPassword: false,
    newPassword: false,
    confirmNewPassword: false,
  });

  const togglePasswordVisibility = (field) => {
    setPasswordVisible({
      ...passwordVisible,
      [field]: !passwordVisible[field],
    });
  };

  const togglePasswordTextVisibility = (field) => {
    const passwordInput = document.getElementById(field);
    passwordInput.type = passwordVisible[field] ? 'password' : 'text';
  };

  return (
    <Modal isOpen={isSettingsModalOpen} onClose={toggleSettingsModal}>
      <ModalSettingContainer>
        <div className="settingsFirst">
          <p className="settingsP1">Settings</p>
          <Xmark className="xMarkWrapper" onClick={toggleSettingsModal} />
        </div>
        <div className="settingsSecond">
          <p className="settingsP2">Your Photo</p>
          <div className="uploadPhotoDiv">
            <div className="settingsImgWrapper">
              <img
                src={TemplateImg}
                alt="User Profile Picture"
                width={80}
                height={80}
              />
            </div>
            <div className="arrowUpWrapper">
              <ArrowUp />
            </div>
            <button className="uploadPhotoButton">Upload a photo</button>
          </div>
        </div>
        <div className="settingsGridContainer">
          <div className="genderIdentityDiv">
            <form className="settingsRadioForm">
              <label className="settingsRadioLabel" htmlFor="genderIdentity">
                Your gender identity
              </label>
              <div className="radioOptionDiv">
                <input
                  className="radioInput"
                  type="radio"
                  id="woman"
                  name="gender"
                  value="woman"
                ></input>
                <label className="radioLabelOption" htmlFor="woman">
                  Woman
                </label>
                <input
                  className="radioInput"
                  type="radio"
                  id="man"
                  name="gender"
                  value="man"
                ></input>
                <label className="radioLabelOption" htmlFor="man">
                  Man
                </label>
              </div>
            </form>
          </div>
          <div className="passwordDiv">
            <p className="settingsP3">Password</p>
            <label className="passwordLabel" htmlFor="oldPassword">
              Outdated password:
            </label>
            <div className="passwordInputContainer">
              <input
                className="passwordInput"
                type={passwordVisible.oldPassword ? 'text' : 'password'}
                id="oldPassword"
                placeholder="Password"
              />
              <button className="ShowPasswordWrapper" onClick={() => { togglePasswordVisibility('oldPassword'); togglePasswordTextVisibility('oldPassword'); }}>
                {passwordVisible.oldPassword ? <ShowPasswordActive className="showPasswordSVG" /> : <ShowPassword className="showPasswordSVG" />}
              </button>
            </div>
          </div>
          <div className="nameDiv">
            <label className="passwordLabel" htmlFor="userName">
              Your name:
            </label>
            <div className="passwordInputContainer">
              <input
                className="passwordInput"
                type="name"
                id="userName"
                placeholder="John"
              />
            </div>
          </div>

          <div className="newPasswordDiv">
            <label className="passwordLabel" htmlFor="newPassword">
              New password:
            </label>
            <div className="passwordInputContainer">
              <input
                className="passwordInput"
                type={passwordVisible.newPassword ? 'text' : 'password'}
                id="newPassword"
                placeholder="Password"
              />
              <button className="ShowPasswordWrapper" onClick={() => { togglePasswordVisibility('newPassword'); togglePasswordTextVisibility('newPassword'); }}>
                {passwordVisible.newPassword ? <ShowPasswordActive className="showPasswordSVG" /> : <ShowPassword className="showPasswordSVG" />}
              </button>
            </div>
          </div>
          <div className="emailDiv">
            <label className="passwordLabel" htmlFor="userEmail">
              E-mail:
            </label>
            <div className="passwordInputContainer">
              <input
                className="passwordInput"
                type="email"
                id="userEmail"
                placeholder="E-mail"
              />
            </div>
          </div>
          <div className="confirmNewPasswordDiv">
            <label className="passwordLabel" htmlFor="confirmNewPassword">
              Repeat New password:
            </label>
            <div className="passwordInputContainer">
              <input
                className="passwordInput"
                type={passwordVisible.confirmNewPassword ? 'text' : 'password'}
                id="confirmNewPassword"
                placeholder="Password"
              />
              <button className="ShowPasswordWrapper" onClick={() => { togglePasswordVisibility('confirmNewPassword'); togglePasswordTextVisibility('confirmNewPassword'); }}>
                {passwordVisible.confirmNewPassword ? <ShowPasswordActive className="showPasswordSVG" /> : <ShowPassword className="showPasswordSVG" />}
              </button>
            </div>
          </div>
        </div>
        <div className="settingsSixth">
          <button className="saveButton">Save</button>
        </div>
      </ModalSettingContainer>
    </Modal>
  );
};

export default SettingsModal;
