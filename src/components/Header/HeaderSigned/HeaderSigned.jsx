import { Navigation, LogoLink, UserContext, HeaderContainer } from './HeaderSigned.styled';
import { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ReactComponent as LogoIcon } from '../headerIcons/Logo.svg';
import { ReactComponent as UserMenu } from '../headerIcons/UserMenu.svg';
import SettingsModal from '../settingsModal/settingsModal';
import LogOutModal from '../logOutModal/logOutModal';
import TemplateImg from '../../../assets/Template.jpg';
import DropDownHeader from '../dropDownMenu/dropDownHeader';
import { selectAuthUser } from '../../../redux/auth/authSelectors.js';

export const HeaderSigned = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const menuRef = useRef(null);
  const menuButtonRef = useRef(null);
  const [isSettingsModalOpen, setSettingsModalOpen] = useState(false);
  const [isLogoutModalOpen, setLogoutModalOpen] = useState(false);
  const userInfo = useSelector(selectAuthUser);

  // Дропдаун
  const toggleMenu = () => {
    setMenuVisible((prevState) => !prevState);
  };
  useEffect(() => {
    function handleClickOutside(event) {
      const isModalOpen = isSettingsModalOpen || isLogoutModalOpen;

      if (
        !menuRef.current.contains(event.target) &&
        !menuButtonRef.current.contains(event.target) &&
        !isModalOpen
      ) {
        setMenuVisible(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef, menuButtonRef, isSettingsModalOpen, isLogoutModalOpen]);

  // Модалка налаштувань
  const toggleSettingsModal = () => {
    setSettingsModalOpen(!isSettingsModalOpen);
  };

  // Модалка LogOut
  const toggleLogoutModal = () => {
    setLogoutModalOpen(!isLogoutModalOpen);
  };

  // Закриття на esc
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSettingsModalOpen(false);
        setLogoutModalOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <HeaderContainer>
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
          <button
            className="UserContextButton"
            ref={menuButtonRef}
            onClick={toggleMenu}
          >
            {userInfo.name}
            <div className="imgWrapper">
              <img src={userInfo.avatarURL} alt="User Profile Picture" />
            </div>
            <div className={`menuButton ${isMenuVisible ? 'rotate' : ''}`}>
              <UserMenu />
            </div>
          </button>
          {/* Дропдаун */}
          <DropDownHeader
            menuRef={menuRef}
            isMenuVisible={isMenuVisible}
            toggleSettingsModal={toggleSettingsModal}
            toggleLogoutModal={toggleLogoutModal}
          />
        </UserContext>
      </Navigation>
      {/* Модальне вікно Settings */}
      <SettingsModal
        isSettingsModalOpen={isSettingsModalOpen}
        toggleSettingsModal={toggleSettingsModal}
      />
      {/* Модальне вікно LogOut */}
      <LogOutModal
        isLogoutModalOpen={isLogoutModalOpen}
        toggleLogoutModal={toggleLogoutModal}
      />
    </HeaderContainer>
  );
};
