import{u as i,N as c,j as e,i as a,r as l,M as h}from"./index-37320e23.js";import{u as m}from"./useTranslation-d6e07cc5.js";import{C as x}from"./Container-9b05b3b3.js";const g="/water-tracker/assets/background-main-page-9f8a621c.png",w="/water-tracker/assets/signup-background-desktop-88afa2b3.png",u="/water-tracker/assets/tablet-background-main-page-1f797613.png",f="/water-tracker/assets/tablet-background-element-home-screen-09058794.png",k="/water-tracker/assets/mobile-background-main-page-686385c1.png",b=i.section`
  @media only screen and (max-width: 767px) {
    background-image: url(${k});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }

  @media only screen and (min-width: 768px) {
    background-image: url(${u});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center bottom;

    &::after {
      content: '';
      position: absolute;
      background-image: url(${f});
      background-size: contain;
      background-repeat: no-repeat;
      z-index: -99;
      top: 50%;
      left: 50%;
      height: 100%;
      transform: translate(-48%, -48%);
    }
  }

  @media only screen and (min-width: 1440px) {
    background-image: url(${g});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center bottom;
    height: 100%;
    width: 100%;
    &::after {
      content: '';
      position: absolute;
      background-image: url(${w});
      background-size: contain;
      background-repeat: no-repeat;
      z-index: -99;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 100%;
    }
  }
`,y=i.div`
  @media screen and (max-width: 767px) {
  }

  @media screen and (max-width: 360px) {
    margin: 0 auto;
    padding: 0;
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;

    padding: 16px 32px;
    margin: 0 auto;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1280px;
    margin: 0 auto;
    padding: 18px 80px;
  }
`,v=i.div`
  margin-top: 500px;

  @media screen and (min-width: 768px) {
    margin-left: 25px;
    margin-top: 400px;
  }
  @media screen and (min-width: 1440px) {
    margin: 0 auto;
    margin-top: 70px;
  }
`,j=i.div`
  display: flex;
  flex-direction: column;
  align-items: normal;

  margin: 0 auto;
  padding-top: 24px;

  @media screen and (min-width: 768px) {
    padding-top: 40px;
    padding-bottom: 50px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
  }
`,T=i.h1`
  color: var(--primary-dark);
  font-family: Roboto;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.1;

  @media screen and (min-width: 768px) {
    font-size: 36px;
    line-height: 1.2;
  }

  @media screen and (min-width: 1440px) {
    font-size: 36px;
    min-width: 439px;
  }
`,z=i.p`
  color: var(--primary-dark);
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.2;
  margin-top: 16px;
  margin-bottom: 0;

  @media screen and (min-width: 768px) {
    font-size: 26px;
    line-height: 1.2;
    margin-top: 16px;
    margin-bottom: 0;
  }
`,A=i.h2`
  color: var(--primary-dark);
  font-size: 18px;
  font-weight: 500;
  line-height: 1.1;
  margin-top: 24px;
  margin-bottom: 0;
`,W=i.ul`
  padding: 0;
  padding-bottom: 24px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    gap: 16px;
  }
  @media screen and (min-width: 1440px) {
    flex-direction: column;
    gap: 16px;
  }
`,r=i.li`
    display: flex;
    align-items: center;
    margin-top: 12px;
    color: var(--primary-dark);
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.2;
    min-width: 224px;
  
    svg {
      width: 32px;
      height: 32px;
      stroke: var(--primary-focus);
      fill: none;
      margin-right: 8px;
    }
  }
  @media screen and (min-width: 768px) {
    svg {
      width: 40px;
      height: 40px;
    }
  }
  @media screen and (min-width: 1440px) {
    line-height: 1.25;
    svg {
      width: 40px;
      height: 40px;
    }
  }
`,O=i.button`
  display: flex;
  height: 36px;
  width: 280px;
  padding: 8px 30px;
  justify-content: center;
  align-items: center;

  border-radius: 10px;
  border: none;
  background: var(--primary-focus);
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);

  color: var(--primary-light);
  text-align: center;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.2;

  @media screen and (min-width: 768px) {
    height: 44px;
    width: 336px;
    padding: 10px 30px;

    font-size: 18px;
    line-height: 1.3;
  }

  @media screen and (min-width: 1440px) {
    width: 384px;
  }
`,B=i(c)`
  color: var(--primary-light);
`,S=i.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,M=i.div`
  position: absolute;
  padding: 24px 16px;
  border-radius: 10px;
  background: var(--secondary-first);
  box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.3);
  margin-left: 0px;
  margin-top: 40px;
  width: 280px;

  @media screen and (min-width: 768px) {
    padding: 32px 24px;
    margin-top: 60px;
    width: 500px;
  }

  @media screen and (min-width: 1440px) {
    position: relative;
    padding: 32px 21px;
    border-radius: 10px;
    margin-left: 81px;
    width: 515px;
  }
`,L=i.h2`
  color: var(--primary-dark);
  font-size: 18px;
  font-weight: 500;
  line-height: 1.1;
  margin-bottom: 12px;
`,K=i.ul`
  list-style: initial;
  text-align: left;
  color: var(--primary-focus);
  padding-left: 16px;

  @media screen and (min-width: 768px) {
    padding-left: 24px;
  }
`,n=i.li`
  color: var(--primary-dark);
  font-size: 16px;
  font-weight: 400;
  line-height: 1.2;
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0;
  }

  &::marker {
    color: var(--primary-focus);
    font-size: 1.5em;
  }
`,P=i.button`
  height: 36px;
  width: 280px;
  padding: 8px 30px;
  justify-content: center;
  align-items: center;

  border-radius: 10px;
  border: none;
  background: var(--primary-focus);
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);

  color: var(--primary-light);
  text-align: center;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.2;

  @media screen and (min-width: 768px) {
    margin: 0 auto;
    height: 44px;
    width: 336px;
    padding: 10px 30px;
    font-size: 18px;
    line-height: 1.3;
  }
  @media screen and (min-width: 1440px) {
    display: flex;
    margin: auto;
    height: 44px;
    width: 384px;
  }
`,I=i.div`
  display: flex;
  flex-wrap: wrap;
  width: 300px;
  height: 650px;
  justify-content: center;

  @media (min-width: 768px) {
    width: 650px;
    height: 550px;
  }

  @media (min-width: 1440px) {
    flex-direction: column;
    width: 1000px;
    height: 700px;
  }
`,V=i.div`
  background-color: var(--primary-light);
  position: relative;
  padding: 12px 8px;
  color: var(--primary-dark);
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: 768px) {
    padding: 0 10px;
  }

  @media screen and (min-width: 1440px) {
    padding: 24px 12px;
  }
`,D=i.div`
  position: relative;
`,R=i.button`
  border: none;
  background-color: transparent;
  position: absolute;

  top: 10px;
  right: 15px;

  svg {
    width: 16px;
    height: 16px;
    stroke: var(--primary-focus);
  }
  &:focus,
  &:active {
    stroke: var(--secondary-second);

    outline: none;
  }

  @media screen and (min-width: 768px) {
    top: 20px;
    right: 10px;
  }

  @media screen and (min-width: 1440px) {
    top: 30px;
    right: 16px;
    svg {
      width: 24px;
      height: 24px;
    }
  }
`,Y=i.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  margin: 0 auto;
  object-fit: cover;
  object-position: top;

  @media screen and (min-width: 768px) {
    width: 75px;
    height: 75px;
  }
  @media screen and (min-width: 1440px) {
    width: 150px;
    height: 155px;
  }
`,$=i.h3`
  display: grid;
  color: var(--primary-dark);
  font-size: 14px;
  font-style: bold;
  font-weight: 500;
  line-height: 1;

  margin-top: 5px;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    font-style: normal;
  }
  @media screen and (min-width: 1440px) {
    font-size: 18px;
    line-height: 1.1;
    margin-top: 10px;
  }
`,C=i.p`
  display: grid;
  color: var(--primary-dark);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.3;
  justify-content: space-around;
  margin-bottom: 5px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.4;
    margin-bottom: 10px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 16px;
    line-height: 1.25;
  }
`,N=i.ul`
  display: flex;
  justify-content: center;
  gap: 6px;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    gap: 10px;
  }
  @media screen and (min-width: 1440px) {
    gap: 24px;
  }
`,E=i.a`
  svg {
    width: 20px;
    height: 20px;
    stroke-width: 1;
    stroke: var(--primary-light);
    fill: var(--primary-focus);
  }

  &:focus {
    stroke: var(--secondary-second);
    fill: var(--secondary-second);
  }

  @media screen and (min-width: 1440px) {
    svg {
      width: 35px;
      height: 30px;
    }
  }
`,F=i.a`
  svg {
    width: 20px;
    height: 20px;
    stroke-width: 1;
    stroke: var(--primary-dark);
    fill: var(--primary-dark);
  }

  @media screen and (min-width: 1440px) {
    svg {
      width: 35px;
      height: 30px;
    }
  }
`;function G({data:t}){return e.jsxs(V,{children:[e.jsx(D,{children:e.jsx(Y,{src:t.photo})}),e.jsx($,{children:t.name}),e.jsx(C,{children:t.role}),e.jsxs(N,{children:[e.jsx(E,{href:t.linkedin,children:e.jsx("svg",{children:e.jsx("use",{href:`${a}#icon-linkedin`})})}),e.jsx(F,{href:t.github,children:e.jsx("svg",{children:e.jsx("use",{href:`${a}#icon-github`})})})]})]})}const H="/water-tracker/assets/VLADYSLAV-GOLODNIUK-03a72dd5.jpg",U="/water-tracker/assets/MARYNA-AKSAKOVA-0fc4c373.jpg",Z="/water-tracker/assets/ALINA-TANTSURA-2add3d35.jpg",q="/water-tracker/assets/MAKSYM-VYSOTSKYI.jpeg-a0a8e91a.jpeg",J="/water-tracker/assets/Kamila Bohdanova-1bd3a4d4.png",Q="/water-tracker/assets/IRYNA-TOLOLO-05fc4ca6.jpg",X="/water-tracker/assets/OLEH-KRIUCHKOV-f232b402.jpg",_="/water-tracker/assets/OLHA-BUZAK-29c7c079.jpg",ee="/water-tracker/assets/VADYM-STARYNETS-min-1b98f991.png",ie="/water-tracker/assets/YELYZAVETA SHATROVA-5678fc97.jpg",te=()=>{const[t,o]=l.useState(!1),s=[{id:1,name:"Vladyslav Golodnuik",role:"Team Lead Frontend",photo:H,linkedin:"https://www.linkedin.com/in/vladyslav-golodniuk-780902302/",github:"https://github.com/Stee1Lemon"},{id:2,name:"Maryna Aksakova",role:"Team Lead Backend",photo:U,linkedin:"https://www.linkedin.com/in/maryna-aksakova-3a0b9623b/",github:"https://github.com/Marixa82"},{id:3,name:"Oleh Kriuchkov",role:"Scrum Master",photo:X,linkedin:"https://www.linkedin.com/in/oleg-kryuchkov/",github:"https://github.com/OlegKryuchkov"},{id:4,name:"Maksym Vysotskyi",role:"Backend developer",photo:q,linkedin:"https://www.linkedin.com/in/maxim-vysotsky-74a570274/",github:"https://github.com/Needlife1"},{id:5,name:"Alina Tantsura",role:"Backend developer",photo:Z,linkedin:"https://www.linkedin.com/in/alina-tantsura/",github:"https://github.com/AlinaTantsura"},{id:6,name:"Vadym Starynets",role:"Frontend developer",photo:ee,linkedin:"https://www.linkedin.com/in/vadymstarynets/",github:"https://github.com/Debeluk"},{id:7,name:"Yelyzaveta Shatrova",role:"Frontend developer",photo:ie,linkedin:"https://www.linkedin.com/in/yelyzaveta-shatrova/",github:"https://github.com/shtrvv"},{id:8,name:"Iryna Tololo",role:"Frontend developer",photo:Q,linkedin:"https://www.linkedin.com/in/iryna-tololo/",github:"https://github.com/iratololo"},{id:9,name:"Kamila Bohdanova",role:"Frontend developer",photo:J,linkedin:"https://www.linkedin.com/in/kamila-bohdanova/",github:"https://github.com/Kamila0301"},{id:10,name:"Olha Buzak",role:"Frontend developer",photo:_,linkedin:"https://www.linkedin.com/in/olha-buzak/",github:"https://github.com/Olha-buz"}];return e.jsxs(e.Fragment,{children:[e.jsx(P,{onClick:()=>o(!t),children:"Team members"}),e.jsx(h,{isOpen:t,onClose:()=>o(!t),children:e.jsxs(I,{children:[s.map((d,p)=>e.jsx(G,{data:d},p)),e.jsx(R,{onClick:()=>o(!t),children:e.jsx("svg",{children:e.jsx("use",{href:`${a}#icon-close`})})})]})})]})},ne=()=>{const{t}=m();return e.jsxs(e.Fragment,{children:[e.jsxs(j,{children:[e.jsxs("div",{children:[e.jsx(T,{children:t("welcome.header")}),e.jsx(z,{children:t("welcome.description")}),e.jsx(A,{children:t("welcome.listBenef")}),e.jsxs(W,{children:[e.jsxs(r,{children:[e.jsx("svg",{children:e.jsx("use",{href:`${a}#icon-calendar`})}),t("welcome.firstBenef")]}),e.jsxs(r,{children:[e.jsx("svg",{children:e.jsx("use",{href:`${a}#icon-chart-bar`})}),t("welcome.secondBenef")]}),e.jsxs(r,{children:[e.jsx("svg",{children:e.jsx("use",{href:`${a}#icon-wrench-screwdriver`})}),t("welcome.thirdBenef")]})]}),e.jsx("div",{children:e.jsx(O,{children:e.jsx(B,{to:"/signup",children:t("welcome.buttonTry")})})})]}),e.jsx(S,{children:e.jsxs(M,{children:[e.jsx(L,{children:t("welcome.listWhy")}),e.jsxs(K,{children:[e.jsx(n,{children:t("welcome.firstWhy")}),e.jsx(n,{children:t("welcome.secondWhy")}),e.jsx(n,{children:t("welcome.thirdWhy")}),e.jsx(n,{children:t("welcome.fourthWhy")}),e.jsx(n,{children:t("welcome.fifthWhy")}),e.jsx(n,{children:t("welcome.sixthWhy")}),e.jsx(n,{children:t("welcome.seventhWhy")})]})]})})]}),e.jsx(v,{children:e.jsx(te,{})})]})},se=()=>e.jsx(b,{children:e.jsx(x,{children:e.jsx(y,{children:e.jsx(ne,{})})})});export{se as default};
