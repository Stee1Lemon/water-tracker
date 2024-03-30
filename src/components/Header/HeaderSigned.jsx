import {
  HeaderContainer,
  Navigation,
  LogoLink,
  UserContext,
  LogoWrapper,
  ImgWrapper,
  MenuButton,
  DropdownMenu,
  DropDownElement,
  DropDownButton,
  ModalLogOutContainer,
  ModalSettingContainer,
} from './HeaderSigned.styled';
import { useState, useRef, useEffect } from 'react';
import { ReactComponent as LogoIcon } from './headerIcons/Logo.svg';
import { ReactComponent as UserMenu } from './headerIcons/UserMenu.svg';
import { ReactComponent as UserCog } from './headerIcons/UserCog.svg';
import { ReactComponent as UserLogOut } from './headerIcons/UserLogOut.svg';
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
    <HeaderContainer>
      <Navigation>
        <LogoLink to="/first">
          <LogoWrapper>
            <LogoIcon />
          </LogoWrapper>
          TRACKER
          <br />
          OF WATER
        </LogoLink>
        <UserContext>
          Template
          <ImgWrapper>
            <img src={TemplateImg} alt="User Profile Picture" />
          </ImgWrapper>
          <MenuButton onClick={toggleMenu}>
            <UserMenu />
          </MenuButton>
          <DropdownMenu
            ref={menuRef}
            className={isMenuVisible ? 'visible' : ''}
          >
            <DropDownElement>
              <UserCog />
              <DropDownButton onClick={toggleSettingsModal}>
                Setting
              </DropDownButton>
            </DropDownElement>
            <DropDownElement onClick={toggleLogoutModal}>
              <UserLogOut />
              <DropDownButton>Log out</DropDownButton>
            </DropDownElement>
          </DropdownMenu>
        </UserContext>
      </Navigation>
      {/* Модальне вікно Settings */}
      <Modal isOpen={isSettingsModalOpen} onClose={toggleSettingsModal}>
        <ModalSettingContainer>
          <button onClick={toggleSettingsModal}>Close settings</button>
          <p>Settings</p>
        </ModalSettingContainer>
      </Modal>
      {/* Модальне вікно LogOut */}
      <Modal isOpen={isLogoutModalOpen} onClose={toggleLogoutModal}>
        <ModalLogOutContainer>
          <button onClick={toggleLogoutModal}>Close Log out</button>
          <p>Are you sure you want to log out?</p>
        </ModalLogOutContainer>
      </Modal>
    </HeaderContainer>
  );
};
