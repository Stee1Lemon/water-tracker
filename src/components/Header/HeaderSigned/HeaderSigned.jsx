import {
  Navigation,
  LogoLink,
  UserContext,
  HeaderContainer,
  UserContextButton,
} from './HeaderSigned.styled';
import { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { ReactComponent as LogoIcon } from '../headerIcons/Logo.svg';
import { ReactComponent as UserMenu } from '../headerIcons/UserMenu.svg';
import DropDownHeader from '../dropDownMenu/dropDownHeader';
import { selectAuthUser } from '../../../redux/auth/authSelectors.js';
import { LanguageSwitcher } from '../../LanguageSwitcher/LanguageSwitcher.jsx';

export const HeaderSigned = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const menuRef = useRef(null);
  const menuButtonRef = useRef(null);
  const userInfo = useSelector(selectAuthUser);

  // Дропдаун
  const toggleMenu = () => {
    setMenuVisible((prevState) => !prevState);
  };

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
        <LanguageSwitcher />

        <UserContext>
          <UserContextButton
            className="UserContextButton"
            ref={menuButtonRef}
            onClick={toggleMenu}
            $verify={userInfo.verify}
          >
            {userInfo.verify ? null : (
              <p className="auth-warning">
                Please, verify your email or profile will be deleted at 7 days
                after registration.
              </p>
            )}
            {userInfo.name}
            <div className="imgWrapper">
              <img src={userInfo.avatarURL} alt="User Profile Picture" />
            </div>
            <div className={`menuButton ${isMenuVisible ? 'rotate' : ''}`}>
              <UserMenu />
            </div>
          </UserContextButton>
          {/* Дропдаун */}
          <DropDownHeader
            menuRef={menuRef}
            isMenuVisible={isMenuVisible}
            toggleDropDown={toggleMenu}
          />
        </UserContext>
      </Navigation>
    </HeaderContainer>
  );
};
