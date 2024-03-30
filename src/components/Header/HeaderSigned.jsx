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
  XmarkWrapper,
  SettingsImgWrapper,
  LogOutDiv1,
  LogOutDiv2,
  LogOutDiv3,
  LogOutP1,
  LogOutP2,
  LogOutButtonCancel,
  LogOutButtonDelete,
  SettingsDiv1,
  SettingsDiv2,
  SettingsDiv3,
  SettingsDiv4,
  SettingsDiv5,
  SettingsDiv6,
  ArrowUpWrapper,
  SettingsP1,
  SettingsP2,
  SettingsButton1,
  UploadPhotoDiv,
} from './HeaderSigned.styled';
import { useState, useRef, useEffect } from 'react';
import { ReactComponent as LogoIcon } from './headerIcons/Logo.svg';
import { ReactComponent as UserMenu } from './headerIcons/UserMenu.svg';
import { ReactComponent as UserCog } from './headerIcons/UserCog.svg';
import { ReactComponent as UserLogOut } from './headerIcons/UserLogOut.svg';
import { ReactComponent as Xmark } from './headerIcons/Xmark.svg';
import { ReactComponent as ArrowUp } from './headerIcons/ArrowUp.svg';
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
          <SettingsDiv1>
            <SettingsP1>Settings</SettingsP1>
            <XmarkWrapper onClick={toggleSettingsModal}>
              <Xmark />
            </XmarkWrapper>
          </SettingsDiv1>
          <SettingsDiv2>
            <SettingsP2>Your Photo</SettingsP2>
            <UploadPhotoDiv>
              <SettingsImgWrapper>
                <img src={TemplateImg} alt="User Profile Picture" width={80} height={80}/>
              </SettingsImgWrapper>
              <ArrowUpWrapper>
                <ArrowUp />
              </ArrowUpWrapper>
              <SettingsButton1>Upload a photo</SettingsButton1>
            </UploadPhotoDiv>
          </SettingsDiv2>
          <SettingsDiv3></SettingsDiv3>
          <SettingsDiv4></SettingsDiv4>
          <SettingsDiv5></SettingsDiv5>
          <SettingsDiv6></SettingsDiv6>
        </ModalSettingContainer>
      </Modal>
      {/* Модальне вікно LogOut */}
      <Modal isOpen={isLogoutModalOpen} onClose={toggleLogoutModal}>
        <ModalLogOutContainer>
          <LogOutDiv1>
            <LogOutP1>Delete Entry</LogOutP1>
            <XmarkWrapper onClick={toggleLogoutModal}>
              <Xmark />
            </XmarkWrapper>
          </LogOutDiv1>
          <LogOutDiv2>
            <LogOutP2>Are you sure you want to delete the entry?</LogOutP2>
          </LogOutDiv2>
          <LogOutDiv3>
            <LogOutButtonDelete>Delete</LogOutButtonDelete>
            <LogOutButtonCancel>Cancel</LogOutButtonCancel>
          </LogOutDiv3>
        </ModalLogOutContainer>
      </Modal>
    </HeaderContainer>
  );
};
