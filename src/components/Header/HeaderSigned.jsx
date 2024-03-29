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
  DropDownButton
} from './HeaderSigned.styled';
import { useState } from 'react';
import { ReactComponent as LogoIcon } from './headerIcons/Logo.svg';
import { ReactComponent as UserMenu } from './headerIcons/UserMenu.svg';
import { ReactComponent as UserCog } from './headerIcons/UserCog.svg';
import { ReactComponent as UserLogOut } from './headerIcons/UserLogOut.svg';

import TemplateImg from './headerIcons/Template.jpg';

export const HeaderSigned = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible((prevState) => !prevState);
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
          {isMenuVisible && (
            <DropdownMenu>
              <DropDownElement>
                <UserCog />
                <DropDownButton>Setting</DropDownButton>
              </DropDownElement>
              <DropDownElement>
                <UserLogOut />
                <DropDownButton>Log out</DropDownButton>
              </DropDownElement>
            </DropdownMenu>
          )}
        </UserContext>
      </Navigation>
    </HeaderContainer>
  );
};
