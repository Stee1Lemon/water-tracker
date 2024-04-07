import styled, { css } from 'styled-components';

export const CommonStyleBtn = css`
  padding: 10px 30px;
  color: var(--primary-light);
  font-weight: 500;
  background-color: var(--primary-focus);
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(64, 123, 255, 0.3);
  transition: all 150ms linear;
  :hover {
    box-shadow: 0px 4px 14px rgba(64, 123, 255, 0.5);
  }
  :active {
    box-shadow: none;
  }
  @media only screen and (min-width: 768px) {
    font-size: 18px;
  }
  border: none;
`;

export const Input = styled('input')`
  background-color: transparent;
  color: var(--primary-focus);
  border-radius: 6px;
  padding: 12px 10px;
  width: 100%;
  line-height: 125%;
  border: 1px solid var(--secondary-fifth);
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

export const ModalWrap = css`
  background-color: var(--primary-light);
  position: relative;
  border-radius: 10px;
  padding: 24px 12px;
  width: 280px;
  color: var(--primary-dark);
  @media only screen and (min-width: 768px) {
    width: 704px;
    padding: 32px 24px;
  }
  @media only screen and (min-width: 1440px) {
    width: 592px;
  }
  h3,
  p {
    padding: 0;
    margin: 0;
  }
`;

export const ModalSubtitle = styled('div')`
  font-size: 18px;
  font-weight: 500;
  line-height: 110%;
  margin-bottom: 16px;
`;

export const ModalTitle = styled('h3')`
  max-width: 200px;
  font-size: 26px;
  font-weight: 500;
  line-height: 120%;
  color: var(--primary-dark);
  @media only screen and (min-width: 768px) {
    max-width: 600px;
  }
`;

export const ModalCloseButton = styled('button')`
  border: none;
  background-color: transparent;
  position: absolute;
  width: 0;
  height: 0;
  top: 30px;
  right: 18px;
  svg {
    width: 24px;
    height: 24px;
    stroke: var(--primary-focus);
  }
  @media only screen and (min-width: 768px) {
    top: 42px;
    right: 30px;
  }
`;
