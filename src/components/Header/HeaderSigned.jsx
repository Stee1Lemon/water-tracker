import {
  Navigation,
  LogoLink,
  UserContext,
  DropdownMenu,
  ModalLogOutContainer,
  ModalSettingContainer,
} from './HeaderSigned.styled';
import { useState, useRef, useEffect } from 'react';
import { ReactComponent as LogoIcon } from './headerIcons/Logo.svg';
import { ReactComponent as UserMenu } from './headerIcons/UserMenu.svg';
import { ReactComponent as UserCog } from './headerIcons/UserCog.svg';
import { ReactComponent as UserLogOut } from './headerIcons/UserLogOut.svg';
import { ReactComponent as Xmark } from './headerIcons/Xmark.svg';
import { ReactComponent as ArrowUp } from './headerIcons/ArrowUp.svg';
import { ReactComponent as ShowPassword } from './headerIcons/ShowPassword.svg';
import TemplateImg from './headerIcons/Template.jpg';
import Modal from 'components/Modal/Modal';

export const HeaderSigned = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const menuRef = useRef(null);
  const [isSettingsModalOpen, setSettingsModalOpen] = useState(false);
  const [isLogoutModalOpen, setLogoutModalOpen] = useState(false);

  // Дропдаун
  const toggleMenu = () => {
    setMenuVisible((prevState) => !prevState);
  };
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuVisible(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]);

  // Модалка налаштувань
  const toggleSettingsModal = () => {
    setSettingsModalOpen(!isSettingsModalOpen);
  };

  // Модалка LogOut
  const toggleLogoutModal = () => {
    setLogoutModalOpen(!isLogoutModalOpen);
  };

  return (
    <header>
      <Navigation>
        <LogoLink to="/first">
          <svg className="logoWrapper">
            <LogoIcon />
          </svg>
          TRACKER
          <br />
          OF WATER
        </LogoLink>
        <UserContext>
          <button className="UserContextButton" onClick={toggleMenu}>
            Template
            <div className="imgWrapper">
              <img src={TemplateImg} alt="User Profile Picture" />
            </div>
            <div className="menuButton">
              <UserMenu />
            </div>
          </button>
          <DropdownMenu
            ref={menuRef}
            className={isMenuVisible ? 'visible' : ''}
          >
            <div className="dropDownElement">
              <UserCog />
              <button className="dropDownButton" onClick={toggleSettingsModal}>
                Setting
              </button>
            </div>
            <div className="dropDownElement" onClick={toggleLogoutModal}>
              <UserLogOut />
              <button className="dropDownButton">Log out</button>
            </div>
          </DropdownMenu>
        </UserContext>
      </Navigation>
      {/* Модальне вікно Settings */}
      <Modal isOpen={isSettingsModalOpen} onClose={toggleSettingsModal}>
        <ModalSettingContainer>
          <div className="settingsFirst">
            <p className="settingsP1">Settings</p>
            <svg className="xMarkWrapper" onClick={toggleSettingsModal}>
              <Xmark />
            </svg>
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
                <svg className="ShowPasswordWrapper">
                  <ShowPassword height="16px" width="16px" />
                </svg>
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
      {/* Модальне вікно LogOut */}
      <Modal isOpen={isLogoutModalOpen} onClose={toggleLogoutModal}>
        <ModalLogOutContainer>
          <div className="logOutDiv1">
            <p className="logOutP1">Delete Entry</p>
            <svg className="xMarkWrapper" onClick={toggleLogoutModal}>
              <Xmark />
            </svg>
          </div>
          <div className="logOutDiv2">
            <p className="logOutP2">
              Are you sure you want to delete the entry?
            </p>
          </div>
          <div className="logOutDiv3">
            <button className="logOutButtonDelete">Delete</button>
            <button className="logOutButtonCancel">Cancel</button>
          </div>
        </ModalLogOutContainer>
      </Modal>
    </header>
  );
};
