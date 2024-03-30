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
} from './HeaderSigned.styled';
import { useState } from 'react';
import { ReactComponent as LogoIcon } from './headerIcons/Logo.svg';
import { ReactComponent as UserMenu } from './headerIcons/UserMenu.svg';
import { ReactComponent as UserCog } from './headerIcons/UserCog.svg';
import { ReactComponent as UserLogOut } from './headerIcons/UserLogOut.svg';
import TemplateImg from './headerIcons/Template.jpg';
import Modal from 'components/Modal/Modal';

const SettingStyle = {
  background: 'red',
}

export const HeaderSigned = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [isSettingsModalOpen, setSettingsModalOpen] = useState(false);
  const [isLogoutModalOpen, setLogoutModalOpen] = useState(false);

  const toggleMenu = () => {
    setMenuVisible((prevState) => !prevState);
  };

  const toggleSettingsModal = () => {
    setSettingsModalOpen(!isSettingsModalOpen);
  };

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
          <DropdownMenu className={isMenuVisible ? 'visible' : ''}>
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
      <Modal isOpen={isSettingsModalOpen} onClose={toggleSettingsModal} style={SettingStyle}>
        <button onClick={toggleSettingsModal}>Close settings</button>
        <p>Settings</p>
      </Modal>
      {/* Модальне вікно LogOut */}
      <Modal isOpen={isLogoutModalOpen} onClose={toggleLogoutModal} style={SettingStyle}>
        <button onClick={toggleLogoutModal}>Close Log out</button>
        <p>Are you sure you want to log out?</p>
      </Modal>
    </HeaderContainer>
  );
};
