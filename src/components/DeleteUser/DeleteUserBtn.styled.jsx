import styled from 'styled-components';

export const DeleteContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const InputDiv = styled.div`
  position: relative;
`;
export const DeleteInput = styled.input`
  border-radius: 6px;
  padding: 12px 10px;
  margin-bottom: 4px;
  line-height: 1.25;
  width: 280px;

  &:focus {
    outline: none;
    font-size: 16px;
    line-height: 1.25;
  }

  &::placeholder {
    font-size: 16px;
    line-height: 1.25;
    color: var(--secondary-third);
  }
`;

export const IconBtn = styled.button`
  padding: 0;
  margin: 0;
  border: none;
  box-shadow: none;
  background-color: transparent;
  width: 16px;
  height: 16px;
  position: absolute;
  left: 90%;

  &:focus {
    border: none;
    box-shadow: none;
  }
  .icon {
    stroke: var(--primary-focus);
    fill: none;
  }
`;

export const DeleteUserButton = styled.button`
  display: flex;
  padding: 8px 8px;
  justify-content: center;
  align-items: center;
  margin-left: auto;

  border-radius: 10px;
  border: none;
  background: var(--secondary-second);
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);

  color: var(--primary-light);
`;
