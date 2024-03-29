import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.div``;

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  padding-top: 12px;
  padding-left: 188px;
  padding-right: 188px;
`;

export const LogoLink = styled(Link)`
  display: flex;
  max-height: 48px;
  font:
    700 12px/1.5 'Roboto',
    sans-serif;
  gap: 4px;
  align-items: center;
  color: #407BFF; // Основной цвет текста

  &:hover {
    color: #356ac8; // Цвет текста при наведении
  }

  &:link,
  &:visited,
  &:active {
    text-decoration: none;
  }
`;

export const SignInLink = styled(Link)`
  width: 90px;
  display: flex;
  max-height: 48px;
  font:
    400 18px/1.5 'Roboto',
    sans-serif;
  gap: 8px;
  align-items: center;
  color: #407BFF;

  &:hover {
    color: #356ac8;
  }

  &:link,
  &:visited,
  &:active {
    text-decoration: none;
  }
`;

export const SignWrapper = styled.svg`
  width: 28px;
  height: 28px;
`;

export const LogoWrapper = styled.svg`
  width: 40px;
  height: 48px;
`;
