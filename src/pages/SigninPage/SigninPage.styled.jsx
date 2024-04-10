import styled from 'styled-components';
// import mobImg from '../../assets/signup-background-mobile.png';
// import tabImg from '../../assets/signup-background-tablet.png';
// import deskImg from '../../assets/signup-background-desktop.png';
// import mobBottleImg from '../../assets/signup-bottle-mobile.png';
// import tabBottleImg from '../../assets/signup-bottle-tablet.png';
// import deskBottleImg from '../../assets/signup-bottle-desktop.png';

// export const FormSection = styled.section`
//   @media only screen and (max-width: 767px) {
//     background-image: url(${mobImg});
//     background-size: cover;
//     background-repeat: no-repeat;
//     background-position: center top 50px;
//     &::before {
//       content: '';
//       position: absolute;
//       background-image: url(${mobBottleImg});
//       background-size: contain;
//       background-repeat: no-repeat;
//       z-index: -99;
//       top: 50%;
//       left: 50%;
//       transform: translate(-50%, 98%);
//       width: 280px;
//       height: 210px;
//     }
//   }

  // @media only screen and (min-width: 768px) {
  //   background-image: url(${tabImg});
  //   background-size: cover;
  //   background-repeat: no-repeat;
  //   background-position: center top 15px;
  //   &::before {
  //     content: '';
  //     position: absolute;
  //     background-image: url(${tabBottleImg});
  //     background-size: contain;
  //     background-repeat: no-repeat;
  //     z-index: -99;
  //     top: 50%;
  //     left: 50%;
  //     transform: translate(-37%, -55%);
  //     width: 570px;
  //     height: 500px;
  //   }
  // }

  // @media only screen and (min-width: 1440px) {
  //   height: 100%;
  //   background-image: url(${deskImg});
  //   background-size: contain;
  //   background-repeat: no-repeat;
  //   background-position: center top;
  //   &::before {
  //     content: '';
  //     position: absolute;
  //     background-image: url(${deskBottleImg});
  //     background-size: contain;
  //     background-repeat: no-repeat;
  //     z-index: -99;
  //     top: 50%;
  //     left: 50%;
  //     transform: translate(-85%, -45%);
  //     width: 916px;
  //     height: 680px;
  //   }
  // }
// `;

export const FormContainer = styled.div`
  max-width: 320px;
  margin: 0 auto;
  padding: 24px 20px;
  height: 600px;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 40px 32px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1280px;
    padding: 20px 112px;
    display: flex;
    justify-content: flex-end;
  }
`;
