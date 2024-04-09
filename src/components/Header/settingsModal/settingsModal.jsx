import { useState, useEffect } from 'react';
import Notiflix from 'notiflix';
import Modal from '../../Modal/Modal';
import { ReactComponent as Xmark } from '../headerIcons/Xmark.svg';
import { ReactComponent as ArrowUp } from '../headerIcons/ArrowUp.svg';
import { ReactComponent as ShowPassword } from '../headerIcons/ShowPassword.svg';
import { ReactComponent as ShowPasswordActive } from '../headerIcons/eye.svg';
import { ModalSettingContainer } from './settingsModal.styled';
import { useDispatch, useSelector } from 'react-redux';
import authApi from '../../../redux/auth/authOperations.js';
import { selectAuthUser } from '../../../redux/auth/authSelectors.js';
import { selectIsLoading } from '../../../redux/root/rootSelectors.js';
import Loader from '../../Loader/Loader.jsx';

const SettingsModal = ({ isSettingsModalOpen, toggleSettingsModal }) => {
  const dispatch = useDispatch();
  const userInfo = useSelector(selectAuthUser);
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(userInfo.avatarURL);
  const isLoading = useSelector(selectIsLoading);

  const [passwordVisible, setPasswordVisible] = useState({
    outdatedPassword: false,
    password: false,
    confirmPassword: false,
  });

  const [formData, setFormData] = useState({
    gender: '',
    name: '',
    email: '',
    outdatedPassword: '',
    password: '',
    repeatPassword: '',
  });

  const [errors, setErrors] = useState({});
  const [changedFields, setChangedFields] = useState({});

  useEffect(() => {
    if (isSettingsModalOpen) {
      setFile(null);
      setPreviewUrl(userInfo.avatarURL);
    } else {
      setFormData({
        gender: '',
        name: '',
        email: '',
        outdatedPassword: '',
        password: '',
        repeatPassword: '',
      });
      setPasswordVisible({
        outdatedPassword: false,
        password: false,
        repeatPassword: false,
      });
      setErrors({});
      setChangedFields({});
    }
  }, [isSettingsModalOpen, userInfo]);

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

  const validateField = (name, value, isSave) => {
    let fieldErrors = { ...errors };

    if (
      name === 'name' &&
      (!value || value.length < 2 || !/^[A-Za-z ]+$/.test(value))
    ) {
      fieldErrors[name] = 'Name must be at least 2 characters long.';
    } else if (name === 'email' && (!value || !/\S+@\S+\.\S+/.test(value))) {
      fieldErrors[name] = 'Invalid email format.';
    } else if (
      (name === 'outdatedPassword' ||
        name === 'password' ||
        name === 'repeatPassword') &&
      (!value || value.length < 8)
    ) {
      fieldErrors[name] = 'Password must be at least 8 characters long.';
    } else if (
      (name === 'password' || name === 'repeatPassword') &&
      isSave &&
      formData.password !== formData.repeatPassword
    ) {
      fieldErrors['repeatPassword'] = "Passwords don't match.";
    } else {
      delete fieldErrors[name];
    }

    setErrors(fieldErrors);
  };

  //Photo upload
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setPreviewUrl(fileUrl);
    }
    setFile(file);
  };
  const handleUploadPhoto = () => {
    const photoData = new FormData();
    photoData.append('file', file);

    dispatch(authApi.updateAvatarThunk(file));
  };

  const handleSave = async () => {
    const fieldsToValidate = ['outdatedPassword', 'password', 'repeatPassword'];
    let isValid = true;
    const currentErrors = { ...errors };

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
      if (formData.password !== formData.repeatPassword) {
        currentErrors['repeatPassword'] = "Passwords don't match.";
        isValid = false;
      }
    }

    const passwordProvided = Object.keys(formData).some(
      (key) => fieldsToValidate.includes(key) && formData[key]
    );

    if (!isValid) {
      setErrors(currentErrors);
      Notiflix.Notify.failure('Please correct the errors before saving.');
      return;
    }

    // Prepare dataToSave
    const dataToSave = Object.keys(formData).reduce((acc, key) => {
      if (
        key !== 'repeatPassword' &&
        (formData[key] || (key === 'repeatPassword' && passwordProvided))
      ) {
        acc[key] = formData[key];
      }
      return acc;
    }, {});

    if (file) {
      await handleUploadPhoto();
    }

    console.log(dataToSave);
    await dispatch(authApi.editUserInfoThunk(dataToSave));
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
              <img src={previewUrl} alt="User Profile Picture" />
            </div>
            <div>
              <input
                type="file"
                id="fileInput"
                accept="image/*"
                onChange={handleFileChange}
                style={{ display: 'none' }}
              />
              <label htmlFor="fileInput" className="uploadPhotoButton">
                <div className="arrowUpWrapper">
                  <ArrowUp />
                </div>
                Upload a photo
              </label>
            </div>
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
                    id="female"
                    name="gender"
                    value="female"
                    onChange={handleRadioChange}
                    checked={
                      formData.gender === 'female' ||
                      (!formData.gender && userInfo.gender === 'female')
                    }
                  />
                  <div className="customRadioButton"></div>
                  Woman
                </label>
                <label className="radioOption">
                  <input
                    className="radioInput"
                    type="radio"
                    id="male"
                    name="gender"
                    value="male"
                    onChange={handleRadioChange}
                    checked={
                      formData.gender === 'male' ||
                      (!formData.gender && userInfo.gender === 'male')
                    }
                  />
                  <div className="customRadioButton"></div>
                  Man
                </label>
              </div>
            </form>
          </div>
          <div className="passwordDiv">
            <p className="settingsP3">Password</p>
            <label className="passwordLabel" htmlFor="outdatedPassword">
              Outdated password:
            </label>
            <div className="passwordInputContainer">
              <input
                className={`passwordInput ${
                  errors.outdatedPassword ? 'invalid' : ''
                }`}
                type={passwordVisible.outdatedPassword ? 'text' : 'password'}
                id="outdatedPassword"
                name="outdatedPassword"
                placeholder="Password"
                value={formData.outdatedPassword}
                onChange={handleInputChange}
              />
              <button
                className="ShowPasswordWrapper"
                onClick={() => {
                  togglePasswordVisibility('outdatedPassword');
                  togglePasswordTextVisibility('outdatedPassword');
                }}
              >
                {passwordVisible.outdatedPassword ? (
                  <ShowPasswordActive className="showPasswordSVG" />
                ) : (
                  <ShowPassword className="showPasswordSVG" />
                )}
              </button>
              {errors.outdatedPassword && (
                <div className="errorText">{errors.outdatedPassword}</div>
              )}
            </div>
          </div>
          <div className="nameDiv">
            <label className="passwordLabel" htmlFor="name">
              Your name:
            </label>
            <div className="passwordInputContainer">
              <input
                className={`passwordInput ${errors.name ? 'invalid' : ''}`}
                type="text"
                id="name"
                name="name"
                placeholder={userInfo.name}
                onChange={handleInputChange}
              />
              {errors.name && <div className="errorText">{errors.name}</div>}
            </div>
          </div>
          <div className="newPasswordDiv">
            <label className="passwordLabel" htmlFor="password">
              New password:
            </label>
            <div className="passwordInputContainer">
              <input
                className={`passwordInput ${errors.password ? 'invalid' : ''}`}
                type={passwordVisible.password ? 'text' : 'password'}
                id="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
              />
              <button
                className="ShowPasswordWrapper"
                onClick={() => {
                  togglePasswordVisibility('password');
                  togglePasswordTextVisibility('password');
                }}
              >
                {passwordVisible.password ? (
                  <ShowPasswordActive className="showPasswordSVG" />
                ) : (
                  <ShowPassword className="showPasswordSVG" />
                )}
              </button>
              {errors.password && (
                <div className="errorText">{errors.password}</div>
              )}
            </div>
          </div>
          <div className="emailDiv">
            <label className="passwordLabel" htmlFor="email">
              E-mail:
            </label>
            <div className="passwordInputContainer">
              <input
                className={`passwordInput ${errors.email ? 'invalid' : ''}`}
                type="email"
                id="email"
                name="email"
                placeholder={userInfo.email}
                onChange={handleInputChange}
              />
              {errors.email && <div className="errorText">{errors.email}</div>}
            </div>
          </div>
          <div className="confirmNewPasswordDiv">
            <label className="passwordLabel" htmlFor="repeatPassword">
              Repeat New password:
            </label>
            <div className="passwordInputContainer">
              <input
                className={`passwordInput ${
                  errors.repeatPassword ? 'invalid' : ''
                }`}
                type={passwordVisible.repeatPassword ? 'text' : 'password'}
                id="repeatPassword"
                name="repeatPassword"
                placeholder="Password"
                value={formData.repeatPassword}
                onChange={handleInputChange}
              />
              <button
                className="ShowPasswordWrapper"
                onClick={() => {
                  togglePasswordVisibility('repeatPassword');
                  togglePasswordTextVisibility('repeatPassword');
                }}
              >
                {passwordVisible.repeatPassword ? (
                  <ShowPasswordActive className="showPasswordSVG" />
                ) : (
                  <ShowPassword className="showPasswordSVG" />
                )}
              </button>
              {errors.repeatPassword && (
                <div className="errorText">{errors.repeatPassword}</div>
              )}
            </div>
          </div>
        </div>
        <div className="settingsSixth">
          <button
            className="saveButton"
            onClick={handleSave}
            disabled={isLoading}
          >
            {isLoading ? <Loader /> : 'Save'}
          </button>
        </div>
      </ModalSettingContainer>
    </Modal>
  );
};

export default SettingsModal;
