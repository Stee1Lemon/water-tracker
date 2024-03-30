import styled from 'styled-components';

export const FormContainer = styled.div`
  max-width: 320px;
  margin: 0 auto;
  padding: 24px 20px;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 40px 32px;
    margin: 0;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1280px;
    margin: 0 auto;
    padding: 20px 112px;
    display: flex;
    justify-content: flex-end;
  }
`;
