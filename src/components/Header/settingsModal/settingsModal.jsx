import { useState, useEffect } from 'react';
import Notiflix from 'notiflix';
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
import ModalOverlay from 'components/ModalOverlay/ModalOverlay';

const SettingsModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const userInfo = useSelector(selectAuthUser);
  const isLoading = useSelector(selectIsLoading);
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(userInfo.avatarURL);

  const [passwordVisible, setPasswordVisible] = useState({
    outdatedPassword: false,
    newPassword: false,
    confirmPassword: false,
  });

  const [formData, setFormData] = useState({
    gender: '',
    name: '',
    email: '',
    outdatedPassword: '',
    newPassword: '',
    repeatPassword: '',
  });

  const [errors, setErrors] = useState({});

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
    validateField(name, value);
  };

  const handleRadioChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const validateField = (name, value, isSave) => {
    let fieldErrors = { ...errors };

    if (value === '') {
      delete fieldErrors[name];
    } else if (
      name === 'name' &&
      (value.length < 2 || !/^[A-Za-z ]+$/.test(value))
    ) {
      fieldErrors[name] = 'Name must be at least 2 characters long.';
    } else if (name === 'email' && (!value || !/\S+@\S+\.\S+/.test(value))) {
      fieldErrors[name] = 'Invalid email format.';
    } else if (
      (name === 'outdatedPassword' ||
        name === 'newPassword' ||
        name === 'repeatPassword') &&
      (!value || value.length < 8)
    ) {
      fieldErrors[name] = 'Password must be at least 8 characters long.';
    } else if (
      (name === 'newPassword' || name === 'repeatPassword') &&
      isSave &&
      formData.newPassword !== formData.repeatPassword
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

  const validatePasswords = () => {
    const passwordFields = [
      'outdatedPassword',
      'newPassword',
      'repeatPassword',
    ];
    let isValid = true;
    const currentErrors = { ...errors };

    passwordFields.forEach((field) => {
      const value = formData[field];
      if (value !== '' && value.length < 8) {
        currentErrors[field] = 'Password must be at least 8 characters long.';
        isValid = false;
      }
    });

    if (formData.newPassword !== formData.repeatPassword) {
      currentErrors['repeatPassword'] = "Passwords don't match.";
      isValid = false;
    }

    if (!isValid) {
      setErrors(currentErrors);
      Notiflix.Notify.failure('Please correct the errors before saving.');
    }

    return isValid;
  };

  const prepareDataToSave = () => {
    const dataToSave = { ...formData };
    delete dataToSave.repeatPassword;

    const keysWithValues = Object.keys(dataToSave).filter(
      (key) => dataToSave[key] && key !== 'repeatPassword'
    );

    if (keysWithValues.length === 0) {
      return null;
    }

    return keysWithValues.reduce((acc, key) => {
      acc[key] = dataToSave[key];
      return acc;
    }, {});
  };

  const handleSave = async () => {
    const isPasswordValid = validatePasswords();
    if (!isPasswordValid) return;

    const dataToSave = prepareDataToSave();

    if (!file && !dataToSave)
      return Notiflix.Notify.failure('Must be at least one field to change.');
    if (file) {
      const result = await dispatch(authApi.updateAvatarThunk(file));
      if (result.error) return Notiflix.Notify.failure(result.payload);
    }
    if (dataToSave) {
      const result = await dispatch(authApi.editUserInfoThunk(dataToSave));
      if (result.error) return Notiflix.Notify.failure(result.payload);
    }

    Notiflix.Notify.success('Your changes have been saved successfully!');
    onClose();
  };

  const handleSendEmailVerification = async () => {
    const result = await dispatch(
      authApi.sendEmailVerifyThunk({ email: userInfo.email })
    );
    Notiflix.Notify.success(result.payload.message);
  };

  useEffect(() => {
    setPreviewUrl(userInfo.avatarURL);
  }, [isOpen, userInfo]);

  return (
    <ModalOverlay isOpen={isOpen} onClose={onClose}>
      <ModalSettingContainer>
        <div className="settingsFirst">
          <p className="settingsP1">Settings</p>
          {userInfo.verify ? null : (
            <button
              className="uploadPhotoButton"
              onClick={handleSendEmailVerification}
              disabled={isLoading}
            >
              <div className="arrowUpWrapper">
                <ArrowUp />
              </div>
              Send email verification
            </button>
          )}
          <Xmark className="xMarkWrapper" onClick={onClose} />
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
    </ModalOverlay>
  );
};

export default SettingsModal;
