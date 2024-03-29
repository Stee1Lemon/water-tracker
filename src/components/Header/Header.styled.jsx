import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.div``;

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  padding-top: 12px;
  padding-left: 188px;
  padding-right: 188px;

  @media (max-width: 1439px) {
    padding-left: 32px;
    padding-right: 32px;
    background-color: red;
  }

  @media (max-width: 767px) {
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 8px;
  }
`;

export const LogoLink = styled(Link)`
  display: flex;
  max-height: 48px;
  font: 700 12px/1.5 'Roboto', sans-serif;
  gap: 4px;
  align-items: center;
  color: var(--primary-focus);

  &:hover {
    color: #356ac8;
  }

  &:link,
  &:visited,
  &:active {
    text-decoration: none;
  }

  @media (max-width: 1439px) {
    font-size: 12px;
  }

  @media (max-width: 767px) {
    font-size: 12px;
  }
`;

export const SignInLink = styled(Link)`
  width: 90px;
  display: flex;
  max-height: 48px;
  font: 400 18px/1.5 'Roboto', sans-serif;
  gap: 8px;
  align-items: center;
  color: var(--primary-focus);

  &:hover {
    color: #356ac8;
  }

  &:link,
  &:visited,
  &:active {
    text-decoration: none;
  }

  @media (max-width: 1439px) {
    width: auto;
    font-size: 18px;
  }

  @media (max-width: 767px) {
    font-size: 16px;
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
