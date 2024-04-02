import { useState, useEffect } from 'react';
import Modal from '../../Modal/Modal';
import { ReactComponent as Xmark } from '../headerIcons/Xmark.svg';
import { ReactComponent as ArrowUp } from '../headerIcons/ArrowUp.svg';
import { ReactComponent as ShowPassword } from '../headerIcons/ShowPassword.svg';
import { ReactComponent as ShowPasswordActive } from '../headerIcons/eye.svg';
import TemplateImg from '../../../assets/Template.jpg';
import { ModalSettingContainer } from './settingsModal.styled';

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

  const [nameValid, setNameValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState({
    oldPassword: true,
    newPassword: true,
    confirmNewPassword: true,
  });

  const [nameTouched, setNameTouched] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState({
    oldPassword: false,
    newPassword: false,
    confirmNewPassword: false,
  });

  useEffect(() => {
    if (!isSettingsModalOpen) {
      setNameValid(true);
      setEmailValid(true);
      setPasswordValid({
        oldPassword: true,
        newPassword: true,
        confirmNewPassword: true,
      });
      setNameTouched(false);
      setEmailTouched(false);
      setPasswordTouched({
        oldPassword: false,
        newPassword: false,
        confirmNewPassword: false,
      });
    }
  }, [isSettingsModalOpen]);

  const handleNameChange = (event) => {
    setNameTouched(true);
    const name = event.target.value;
    setNameValid(!name || (name.length >= 2 && /^[A-Za-z]+$/.test(name)));
  };

  const handleEmailChange = (event) => {
    setEmailTouched(true);
    const email = event.target.value;
    setEmailValid(!email || /\S+@\S+\.\S+/.test(email));
  };

  const handlePasswordChange = (event, field) => {
    setPasswordTouched({
      ...passwordTouched,
      [field]: true,
    });

    const password = event.target.value;
    setPasswordValid({
      ...passwordValid,
      [field]: !password || password.length >= 6,
    });
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
            <button className="uploadPhotoButton">
              <div className="arrowUpWrapper">
                <ArrowUp />
              </div>
              Upload a photo
            </button>
          </div>
        </div>
        <div className="settingsGridContainer">
          <div className="genderIdentityDiv">
            <form className="settingsRadioForm">
              <label className="settingsRadioLabel" htmlFor="genderIdentity">
                Your gender identity
              </label>
              <div className="radioOptionsDiv">
                <label className="radioOption">
                  <input
                    className="radioInput"
                    type="radio"
                    id="woman"
                    name="gender"
                    value="woman"
                    checked
                  />
                  <div className="customRadioButton"></div>
                  <span className="radioLabelOption">Woman</span>
                </label>
                <label className="radioOption">
                  <input
                    className="radioInput"
                    type="radio"
                    id="man"
                    name="gender"
                    value="man"
                  />
                  <div className="customRadioButton"></div>
                  <span className="radioLabelOption">Man</span>
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
                className={`passwordInput ${
                  !passwordValid.oldPassword && passwordTouched.oldPassword
                    ? 'invalid'
                    : ''
                }`}
                type={passwordVisible.oldPassword ? 'text' : 'password'}
                id="oldPassword"
                placeholder="Password"
                onChange={(event) => handlePasswordChange(event, 'oldPassword')}
              />
              <button
                className="ShowPasswordWrapper"
                onClick={() => {
                  togglePasswordVisibility('oldPassword');
                  togglePasswordTextVisibility('oldPassword');
                }}
              >
                {passwordVisible.oldPassword ? (
                  <ShowPasswordActive className="showPasswordSVG" />
                ) : (
                  <ShowPassword className="showPasswordSVG" />
                )}
              </button>
            </div>
          </div>
          <div className="nameDiv">
            <label className="passwordLabel" htmlFor="userName">
              Your name:
            </label>
            <div className="passwordInputContainer">
              <input
                className={`passwordInput ${
                  !nameValid && nameTouched ? 'invalid' : ''
                }`}
                type="text"
                id="userName"
                placeholder="John"
                onChange={handleNameChange}
              />
            </div>
          </div>

          <div className="newPasswordDiv">
            <label className="passwordLabel" htmlFor="newPassword">
              New password:
            </label>
            <div className="passwordInputContainer">
              <input
                className={`passwordInput ${
                  !passwordValid.newPassword && passwordTouched.newPassword
                    ? 'invalid'
                    : ''
                }`}
                type={passwordVisible.newPassword ? 'text' : 'password'}
                id="newPassword"
                placeholder="Password"
                onChange={(event) => handlePasswordChange(event, 'newPassword')}
              />
              <button
                className="ShowPasswordWrapper"
                onClick={() => {
                  togglePasswordVisibility('newPassword');
                  togglePasswordTextVisibility('newPassword');
                }}
              >
                {passwordVisible.newPassword ? (
                  <ShowPasswordActive className="showPasswordSVG" />
                ) : (
                  <ShowPassword className="showPasswordSVG" />
                )}
              </button>
            </div>
          </div>
          <div className="emailDiv">
            <label className="passwordLabel" htmlFor="userEmail">
              E-mail:
            </label>
            <div className="passwordInputContainer">
              <input
                className={`passwordInput ${
                  !emailValid && emailTouched ? 'invalid' : ''
                }`}
                type="email"
                id="userEmail"
                placeholder="E-mail"
                onChange={handleEmailChange}
              />
            </div>
          </div>
          <div className="confirmNewPasswordDiv">
            <label className="passwordLabel" htmlFor="confirmNewPassword">
              Repeat New password:
            </label>
            <div className="passwordInputContainer">
              <input
                className={`passwordInput ${
                  !passwordValid.confirmNewPassword &&
                  passwordTouched.confirmNewPassword
                    ? 'invalid'
                    : ''
                }`}
                type={passwordVisible.confirmNewPassword ? 'text' : 'password'}
                id="confirmNewPassword"
                placeholder="Password"
                onChange={(event) =>
                  handlePasswordChange(event, 'confirmNewPassword')
                }
              />
              <button
                className="ShowPasswordWrapper"
                onClick={() => {
                  togglePasswordVisibility('confirmNewPassword');
                  togglePasswordTextVisibility('confirmNewPassword');
                }}
              >
                {passwordVisible.confirmNewPassword ? (
                  <ShowPasswordActive className="showPasswordSVG" />
                ) : (
                  <ShowPassword className="showPasswordSVG" />
                )}
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
