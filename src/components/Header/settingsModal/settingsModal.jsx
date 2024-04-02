import { useState, useEffect } from 'react';
import Modal from '../../Modal/Modal';
import { ReactComponent as Xmark } from '../headerIcons/Xmark.svg';
import { ReactComponent as ArrowUp } from '../headerIcons/ArrowUp.svg';
import { ReactComponent as ShowPassword } from '../headerIcons/ShowPassword.svg';
import { ReactComponent as ShowPasswordActive } from '../headerIcons/eye.svg';
import TemplateImg from '../../../assets/Template.jpg';
import { ModalSettingContainer } from './settingsModal.styled';

const SettingsModal = ({ isSettingsModalOpen, toggleSettingsModal }) => {
  const [formData, setFormData] = useState({
    userName: '',
    userEmail: '',
    oldPassword: '',
    newPassword: '',
    confirmNewPassword: '',
    gender: 'woman',
  });

  const [passwordVisible, setPasswordVisible] = useState({
    oldPassword: false,
    newPassword: false,
    confirmNewPassword: false,
  });

  const [errors, setErrors] = useState({});

  const togglePasswordVisibility = (field) => {
    setPasswordVisible({
      ...passwordVisible,
      [field]: !passwordVisible[field],
    });
  };

  useEffect(() => {
    if (!isSettingsModalOpen) {
      setFormData({
        userName: '',
        userEmail: '',
        oldPassword: '',
        newPassword: '',
        confirmNewPassword: '',
        gender: 'woman',
      });
      setPasswordVisible({
        oldPassword: false,
        newPassword: false,
        confirmNewPassword: false,
      });
      setErrors({});
    }
  }, [isSettingsModalOpen]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (
      !formData.userName ||
      formData.userName.length < 2 ||
      !/^[A-Za-z]+$/.test(formData.userName)
    ) {
      newErrors.userName =
        'Name must be at least 2 characters long and only contain letters.';
    }
    if (!formData.userEmail || !/\S+@\S+\.\S+/.test(formData.userEmail)) {
      newErrors.userEmail = 'Email is invalid.';
    }
    if (!formData.oldPassword || formData.oldPassword.length < 6) {
      newErrors.oldPassword =
        'Old Password must be at least 6 characters long.';
    }
    if (!formData.newPassword || formData.newPassword.length < 6) {
      newErrors.newPassword =
        'New Password must be at least 6 characters long.';
    }
    if (formData.newPassword !== formData.confirmNewPassword) {
      newErrors.confirmNewPassword =
        'New Password and Confirm New Password do not match.';
    }
    return newErrors;
  };

  const handleSave = () => {
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      const { confirmNewPassword, ...dataToSave } = formData;
      console.log(dataToSave);
    } else {
      console.error('Validation errors:', formErrors);
      setErrors(formErrors);
    }
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
                    checked={formData.gender === 'woman'}
                    onChange={handleInputChange}
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
                    checked={formData.gender === 'man'}
                    onChange={handleInputChange}
                  />
                  <div className="customRadioButton"></div>
                  <span className="radioLabelOption">Man</span>
                </label>
              </div>
            </form>
          </div>
          {/* Repeat similar structure for other fields, applying conditional className based on errors */}
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
                type="button"
                className="ShowPasswordWrapper"
                onClick={() => togglePasswordVisibility('oldPassword')}
              >
                {passwordVisible.oldPassword ? (
                  <ShowPasswordActive />
                ) : (
                  <ShowPassword />
                )}
              </button>
            </div>
          </div>
          <div className="nameDiv">
            <label className="passwordLabel" htmlFor="userName">
              Your name:
            </label>
            <input
              className={`passwordInput ${errors.userName ? 'invalid' : ''}`}
              type="text"
              id="userName"
              name="userName"
              placeholder="John"
              value={formData.userName}
              onChange={handleInputChange}
            />
            {errors.userName && (
              <div className="errorText">{errors.userName}</div>
            )}
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
                type="button"
                className="ShowPasswordWrapper"
                onClick={() => togglePasswordVisibility('newPassword')}
              >
                {passwordVisible.newPassword ? (
                  <ShowPasswordActive />
                ) : (
                  <ShowPassword />
                )}
              </button>
            </div>
          </div>
          <div className="emailDiv">
            <label className="passwordLabel" htmlFor="userEmail">
              E-mail:
            </label>
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
                type="button"
                className="ShowPasswordWrapper"
                onClick={() => togglePasswordVisibility('confirmNewPassword')}
              >
                {passwordVisible.confirmNewPassword ? (
                  <ShowPasswordActive />
                ) : (
                  <ShowPassword />
                )}
              </button>
            </div>
          </div>
        </div>
        <div className="settingsSixth">
          <button type="button" className="saveButton" onClick={handleSave}>
            Save
          </button>
        </div>
      </ModalSettingContainer>
    </Modal>
  );
};

export default SettingsModal;
