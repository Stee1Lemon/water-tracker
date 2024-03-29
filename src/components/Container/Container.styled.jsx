import styled from 'styled-components';

export const ContainerRef = styled.div`
  margin: 0 auto;
  padding: 0 15px;

  @media screen and(min - width: 320px) {
    max-width: 320px;
    padding: 0 20px;
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0 32px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding: 0 100px;
  }
`;
