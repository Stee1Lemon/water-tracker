import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
    margin: 0 auto;
    max-width: 1216px;
    
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  padding-top: 12px;

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
  font:
    700 12px/1.5 'Roboto',
    sans-serif;
  gap: 4px;
  align-items: center;
  color: var(--primary-focus);
  transition: font-size 0.2s linear;

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

  .logoWrapper {
    width: 40px;
    height: 48px;
  }
`;

export const UserContext = styled.div`
    position: relative;
    display: flex;
    max-height: 48px;
    font: 400 18px/1.5 'Roboto',
    sans-serif;
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

    .imgWrapper {
        width: 28px;
        height: 28px;
        border-radius: 50%;
        overflow: hidden;
        display: flex;
        justify-content: center;
    }

    .imgWrapper img {
        max-width: 100%;
        max-height: 100%;
        display: block;
    }

    .UserContextButton {
        background: none;
        border: none;
        padding: 0;
        cursor: pointer;
        transition: font-size 0.2s linear;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 4px;
        color: var(--primary-focus);

        &:focus {
            outline: none;
        }
    }

    .menuButton {
        transform: rotateX(0deg);
        transition: transform 0.3s ease-in-out;
        height: 100%;
        display: flex;
        align-items: center;
    }

    .menuButton.rotate {
        transform: rotateX(180deg);
        transition: transform 0.3s ease-in-out;
        height: 100%;
        display: flex;
        align-items: center;
    }
`;
