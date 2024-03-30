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
    border: 1px solid var(--secondary-fifth);
    border-radius: 6px;
    padding: 12px 10px;
    margin-bottom: 16px;
    line-height: 1.25;
  }

  input:focus {
    color: var(--primary-focus);
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

    button {
      padding: 10px 30px;
      font-size: 18px;
      line-height: 1.3;
    }
  }

  @media only screen and (min-width: 1440px) {
    max-width: 384px;
    margin: 140px 0 0;

    input {
      width: 384px;
    }
  }
`;
