import Modal from '../../Modal/Modal';
import { ReactComponent as Xmark } from '../headerIcons/Xmark.svg';
import { ReactComponent as ArrowUp } from '../headerIcons/ArrowUp.svg';
import { ReactComponent as ShowPassword } from '../headerIcons/ShowPassword.svg';
import TemplateImg from '../../../assets/Template.jpg';
import { ModalSettingContainer } from './settingsModal.styled';

const SettingsModal = ({ isSettingsModalOpen, toggleSettingsModal }) => {
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
                type="password"
                id="oldPassword"
                placeholder="Password"
              />
              <button className="ShowPasswordWrapper">
                <svg height="16px" width="16px">
                  <ShowPassword />
                </svg>
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
                type="password"
                id="newPassword"
                placeholder="Password"
              />
              <svg className="ShowPasswordWrapper">
                <ShowPassword height="16px" width="16px" />
              </svg>
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
                type="password"
                id="confirmNewPassword"
                placeholder="Password"
              />
              <svg className="ShowPasswordWrapper">
                <ShowPassword height="16px" width="16px" />
              </svg>
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
