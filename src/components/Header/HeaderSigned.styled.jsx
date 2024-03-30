import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.div`

`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  padding-top: 12px;
  padding-left: 188px;
  padding-right: 188px;

  @media (max-width: 1439px) {
    padding-left: 32px;
    padding-right: 32px;
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

export const UserContext = styled.div`
  position: relative;
  display: flex;
  max-height: 48px;
  font: 400 18px/1.5 'Roboto', sans-serif;
  gap: 8px;
  align-items: center;
  color: var(--primary-focus);
  cursor: default;

  &:link,
  &:hover,
  &:visited,
  &:active {
    text-decoration: none;
  }

  @media (max-width: 1439px) {
    font-size: 18px;
  }

  @media (max-width: 767px) {
    font-size: 16px;
  }
`;

export const MenuButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  svg {
    width: 16px;
    height: 16px;
  }

  @media (max-width: 1439px) {
    svg {
      width: 14px;
      height: 14px;
    }
  }

  @media (max-width: 767px) {
    svg {
      width: 12px;
      height: 12px;
    }
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 12px;
  padding-top: 16px;
  padding-bottom: 16px;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.2);
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  row-gap: 16px;
  opacity: 0;
  transform: translateY(-10px);
  visibility: hidden;
  transition: opacity 0.3s ease, transform 0.3s ease, visibility 0.3s;
  &.visible {
    opacity: 1;
    transform: translateY(0);
    visibility: visible;
  }
`;

export const DropDownElement = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  padding-left: 16px;
  padding-right: 16px;
`;

export const DropDownButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  color: #407BFF;
  font-family: inherit;
  font-size: inherit;
  cursor: pointer;

  &:hover {
    color: #356ac8;
  }

  &:focus {
    outline: none;
  }

  &:active {
    outline: none;
  }
`;

export const ImgWrapper = styled.div`
  width: 28px;
  height: 28px;
`;

export const LogoWrapper = styled.svg`
  width: 40px;
  height: 48px;
`;