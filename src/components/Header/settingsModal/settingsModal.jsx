import { useState, useEffect } from 'react';
import Notiflix from 'notiflix';
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

  const [formData, setFormData] = useState({
    gender: 'woman',
    userName: '',
    userEmail: '',
    oldPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  });

  const [errors, setErrors] = useState({});
  const [changedFields, setChangedFields] = useState({});

  useEffect(() => {
    if (!isSettingsModalOpen) {
      setFormData({
        gender: 'woman',
        userName: '',
        userEmail: '',
        oldPassword: '',
        newPassword: '',
        confirmNewPassword: '',
      });
      setPasswordVisible({
        oldPassword: false,
        newPassword: false,
        confirmNewPassword: false,
      });
      setErrors({});
      setChangedFields({});
    }
  }, [isSettingsModalOpen]);

  const togglePasswordVisibility = (field) => {
    setPasswordVisible((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };

  const togglePasswordTextVisibility = (field) => {
    const passwordInput = document.getElementById(field);
    passwordInput.type = passwordVisible[field] ? 'text' : 'password';
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
    setChangedFields((prevState) => ({ ...prevState, [name]: true }));
    validateField(name, value);
  };

  const handleRadioChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
    setChangedFields((prevState) => ({ ...prevState, [name]: true }));
  };

  const validateField = (name, value) => {
    let fieldErrors = { ...errors };

    if (
      name === 'userName' &&
      (!value || value.length < 2 || !/^[A-Za-z ]+$/.test(value))
    ) {
      fieldErrors[name] = 'Name must be at least 2 characters long.';
    } else if (
      name === 'userEmail' &&
      (!value || !/\S+@\S+\.\S+/.test(value))
    ) {
      fieldErrors[name] = 'Invalid email format.';
    } else if (
      (name === 'oldPassword' ||
        name === 'newPassword' ||
        name === 'confirmNewPassword') &&
      (!value || value.length < 8)
    ) {
      fieldErrors[name] = 'Password must be at least 8 characters long.';
    } else {
      delete fieldErrors[name];
    }

    // Update the password match check to be executed only if newPassword or confirmNewPassword fields are changed
    if (
      formData.newPassword &&
      formData.confirmNewPassword &&
      formData.newPassword !== formData.confirmNewPassword
    ) {
      fieldErrors['confirmNewPassword'] = "Passwords don't match.";
    } else if (name === 'newPassword' || name === 'confirmNewPassword') {
      delete fieldErrors['confirmNewPassword']; // Remove the error if conditions are met
    }

    setErrors(fieldErrors);
  };

  const handleSave = () => {
    const fieldsToValidate = [
      'oldPassword',
      'newPassword',
      'confirmNewPassword',
    ];
    let isValid = true;
    const currentErrors = { ...errors };

    // Validate password fields only if any of them has been changed
    const passwordFieldsChanged = fieldsToValidate.some(
      (field) => changedFields[field]
    );
    if (passwordFieldsChanged) {
      fieldsToValidate.forEach((field) => {
        if (!formData[field] || formData[field].length < 8) {
          currentErrors[field] = 'Password must be at least 8 characters long.';
          isValid = false;
        }
      });
      if (formData.newPassword !== formData.confirmNewPassword) {
        currentErrors['confirmNewPassword'] = "Passwords don't match.";
        isValid = false;
      }
    }

    if (!isValid) {
      setErrors(currentErrors);
      Notiflix.Notify.failure('Please correct the errors before saving.');
      return;
    }

    const dataToSave = Object.keys(formData).reduce((acc, key) => {
      if (
        key !== 'confirmNewPassword' &&
        (formData[key] ||
          (!fieldsToValidate.includes(key) && changedFields[key]))
      ) {
        acc[key] = formData[key];
      }
      return acc;
    }, {});

    console.log(dataToSave);
    Notiflix.Notify.success('Your changes have been saved successfully!');
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
                    onChange={handleRadioChange}
                    checked={formData.gender === 'woman'}
                  />
                  <div className="customRadioButton"></div>
                  Woman
                </label>
                <label className="radioOption">
                  <input
                    className="radioInput"
                    type="radio"
                    id="man"
                    name="gender"
                    value="man"
                    onChange={handleRadioChange}
                    checked={formData.gender === 'man'}
                  />
                  <div className="customRadioButton"></div>
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
                className={`passwordInput ${
                  errors.oldPassword ? 'invalid' : ''
                }`}
                type={passwordVisible.oldPassword ? 'text' : 'password'}
                id="oldPassword"
                name="oldPassword"
                placeholder="Password"
                value={formData.oldPassword}
                onChange={handleInputChange}
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
              {errors.oldPassword && (
                <div className="errorText">{errors.oldPassword}</div>
              )}
            </div>
          </div>
          <div className="nameDiv">
            <label className="passwordLabel" htmlFor="userName">
              Your name:
            </label>
            <div className="passwordInputContainer">
              <input
                className={`passwordInput ${errors.userName ? 'invalid' : ''}`}
                type="text"
                id="userName"
                name="userName"
                placeholder="Your name"
                value={formData.userName}
                onChange={handleInputChange}
              />
              {errors.userName && (
                <div className="errorText">{errors.userName}</div>
              )}
            </div>
          </div>
          <div className="newPasswordDiv">
            <label className="passwordLabel" htmlFor="newPassword">
              New password:
            </label>
            <div className="passwordInputContainer">
              <input
                className={`passwordInput ${
                  errors.newPassword ? 'invalid' : ''
                }`}
                type={passwordVisible.newPassword ? 'text' : 'password'}
                id="newPassword"
                name="newPassword"
                placeholder="Password"
                value={formData.newPassword}
                onChange={handleInputChange}
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
              {errors.newPassword && (
                <div className="errorText">{errors.newPassword}</div>
              )}
            </div>
          </div>
          <div className="emailDiv">
            <label className="passwordLabel" htmlFor="userEmail">
              E-mail:
            </label>
            <div className="passwordInputContainer">
              <input
                className={`passwordInput ${errors.userEmail ? 'invalid' : ''}`}
                type="email"
                id="userEmail"
                name="userEmail"
                placeholder="E-mail"
                value={formData.userEmail}
                onChange={handleInputChange}
              />
              {errors.userEmail && (
                <div className="errorText">{errors.userEmail}</div>
              )}
            </div>
          </div>
          <div className="confirmNewPasswordDiv">
            <label className="passwordLabel" htmlFor="confirmNewPassword">
              Repeat New password:
            </label>
            <div className="passwordInputContainer">
              <input
                className={`passwordInput ${
                  errors.confirmNewPassword ? 'invalid' : ''
                }`}
                type={passwordVisible.confirmNewPassword ? 'text' : 'password'}
                id="confirmNewPassword"
                name="confirmNewPassword"
                placeholder="Password"
                value={formData.confirmNewPassword}
                onChange={handleInputChange}
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
              {errors.confirmNewPassword && (
                <div className="errorText">{errors.confirmNewPassword}</div>
              )}
            </div>
          </div>
        </div>
        <div className="settingsSixth">
          <button className="saveButton" onClick={handleSave}>
            Save
          </button>
        </div>
      </ModalSettingContainer>
    </Modal>
  );
};

export default SettingsModal;
