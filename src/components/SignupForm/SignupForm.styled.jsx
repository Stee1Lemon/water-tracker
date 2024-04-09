import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 280px;

  h2 {
    font-weight: 500;
    font-size: 26px;
    line-height: 1.2;
    color: var(--primary-dark);
    margin-bottom: 16px;
  }

  label {
    font-weight: 400;
    font-size: 18px;
    line-height: 1.3;
    color: var(--primary-dark);
    margin-bottom: 8px;
  }

  input {
    border-radius: 6px;
    padding: 12px 10px;
    margin-bottom: 4px;
    line-height: 1.25;
    width: 280px;
  }

  input:focus {
    outline: none;
    font-size: 16px;
    line-height: 1.25;
  }

  input::placeholder {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.25;
    color: var(--secondary-third);
  }

  .icon-eye,
  .icon-eye:hover,
  .icon-eye:focus {
    padding: 0;
    margin: 0;
    box-shadow: none;
    background-color: transparent;
    width: 16px;
    height: 16px;
    position: absolute;
    left: 90%;
  }

  .icon {
    stroke: var(--primary-focus);
    fill: none;
  }

  button {
    border-radius: 10px;
    border: none;
    padding: 8px 30px;
    box-shadow: 0 4px 8px 0 rgba(64, 123, 255, 0.34);
    background: var(--primary-focus);
    font-weight: 500;
    font-size: 16px;
    line-height: 1.25;
    color: var(--primary-light);
    margin-bottom: 16px;
  }

  button:hover,
  button:focus {
    box-shadow: 0 4px 14px 0 rgba(64, 123, 255, 0.54);
  }

  button:active {
    box-shadow: none;
  }

  a {
    font-weight: 400;
    line-height: 1.25;
    color: var(--primary-focus);
  }

  a:hover,
  a:focus {
    color: var(--secondary-fourth);
  }

  @media only screen and (min-width: 768px) {
    max-width: 336px;

    input {
      width: 336px;
    }

    .icon-eye,
    .icon-eye:hover,
    .icon-eye:focus {
      top: 27%;
      left: 92%;
    }

    button {
      padding: 10px 30px;
      font-size: 18px;
      line-height: 1.3;
    }
  }

  @media only screen and (min-width: 1440px) {
    max-width: 384px;
    padding-top: 130px;

    input {
      width: 384px;
    }
  }
`;

export const InputDiv = styled.div`
  margin-bottom: 16px;
  position: relative;
`;

export const Message = styled.span`
  color: var(--secondary-second);
  font-size: 14px;
`;

export const SignupTeam = styled.div`
  @media screen and (max-width: 767px) {
    margin-left: 0;
    margin-top: 100px;
  }
  @media screen and (min-width: 768px) {
    margin-top: 20px;
  }
  @media screen and (min-width: 1440px) {
    margin: 0 auto;
    margin-top: 70px;
  }
`;
