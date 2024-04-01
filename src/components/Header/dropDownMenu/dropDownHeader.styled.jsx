import styled from "styled-components";
// DropDown styles

export const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: var(--primary-light);
  border: 1px solid var(--primary-light);
  border-radius: 12px;
  padding-top: 16px;
  padding-bottom: 16px;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.2);
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  row-gap: 16px;
  opacity: 0;
  transform: translateY(-10px);
  visibility: hidden;
  transition:
    opacity 0.3s ease,
    transform 0.3s ease,
    visibility 0.3s;
  &.visible {
    opacity: 1;
    transform: translateY(0);
    visibility: visible;
  }

  .dropDownElement {
    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  .dropDownButton {
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    color: var(--primary-focus);
    font-family: inherit;
    font-size: inherit;
    justify-content: space-evenly;
    align-items: center;
    display: flex;
    width: 100%;
    cursor: pointer;

    &:focus {
      outline: none;
    }

    &:active {
      outline: none;
    }
  }

  .svgCog,
  .svgLogOut {
    transition: transform 1s ease-in-out;
  }

  .dropDownButton:hover .svgCog {
    transform: rotate(180deg);
  }

  .dropDownButton:hover .svgLogOut {
    transform: rotateY(180deg);
  }
`;