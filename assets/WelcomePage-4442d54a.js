import{u as i,N as r,j as e,i as a}from"./index-368e7e1c.js";import{u as d,M as p}from"./ModalTeam-d41bd8fc.js";import{C as s}from"./Container-43f289b4.js";const l="/water-tracker/assets/background-main-page-9f8a621c.png",c="/water-tracker/assets/signup-background-desktop-88afa2b3.png",m="/water-tracker/assets/tablet-background-main-page-1f797613.png",x="/water-tracker/assets/tablet-background-element-home-screen-09058794.png",g="/water-tracker/assets/mobile-background-main-page-686385c1.png",h=i.section`
  @media only screen and (max-width: 767px) {
    background-image: url(${g});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }

  @media only screen and (min-width: 768px) {
    background-image: url(${m});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center bottom;
    height: 100%;

    &::after {
      content: '';
      position: absolute;
      background-image: url(${x});
      background-size: contain;
      background-repeat: no-repeat;
      z-index: -99;
      top: 50%;
      left: 50%;
      transform: translate(-48%, -48%);
    }
  }

  @media only screen and (min-width: 1440px) {
    background-image: url(${l});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center bottom;
    height: 100%;
    width: 100%;
    &::after {
      content: '';
      position: absolute;
      background-image: url(${c});
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
`,f=i.div`
  @media screen and (max-width: 767px) {
    padding: 15px 5px;
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
`,w=i.div`
  @media screen and (max-width: 767px) {
    margin-left: 20px;
    margin-top: 500px;
  }
  @media screen and (min-width: 768px) {
    margin-left: 25px;
    margin-top: 400px;
  }
  @media screen and (min-width: 1440px) {
    margin: 0 auto;
    margin-top: 70px;
  }
`,b=i.div`
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: normal;

    margin: 0 auto;
    padding-top: 24px;
    padding-bottom: 0;
    padding-left: 20px;
    padding-right: 20px;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: normal;

    margin: 0 auto;
    padding-top: 40px;
    padding-bottom: 50px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row;
  }
`,u=i.div``,y=i.h1`
  @media screen and (max-width: 767px) {
    color: var(--primary-dark);
    font-family: Roboto;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 1.1;
    max-width: 246px;
  }

  @media screen and (min-width: 768px) {
    color: var(--primary-dark);
    font-family: Roboto;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: 1.2;
  }

  @media screen and (min-width: 1440px) {
    color: var(--primary-dark);
    font-family: Roboto;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: 1.2;
    min-width: 439px;
  }
`,k=i.p`
  @media screen and (max-width: 767px) {
    max-width: 197px;

    color: var(--primary-dark);
    font-family: Roboto;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.2;
    margin-top: 16px;
    margin-bottom: 0;
  }

  @media screen and (min-width: 768px) {
    color: var(--primary-dark);
    font-family: Roboto;
    font-size: 26px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.2;
    margin-top: 16px;
    margin-bottom: 0;
  }

  @media screen and (min-width: 1440px) {
    // width: 660px;
    color: var(--primary-dark);
    font-family: Roboto;
    font-size: 26px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.2;
    margin-top: 16px;
    margin-bottom: 0;
  }
`,v=i.h2`
  color: var(--primary-dark);
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.1;
  margin-top: 24px;
  margin-bottom: 0;
`,j=i.ul`
  @media screen and (max-width: 767px) {
    padding: 0;
    padding-bottom: 24px;
  }
  @media screen and (min-width: 768px) {
    padding: 0;
    padding-bottom: 24px;
    display: flex;
    flex-direction: row;
    gap: 100px;
  }
  @media screen and (min-width: 1440px) {
    padding: 0;
    padding-bottom: 24px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
`,o=i.li`
  @media screen and (max-width: 767px) {
    display: flex;

    align-items: center;
    margin-top: 12px;

    color: var(--primary-dark);
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.2;

    svg {
      width: 32px;
      height: 32px;
      stroke: var(--primary-focus);
      fill: none;
      margin-right: 8px;
    }
  }

  @media screen and (min-width: 768px) {
    display: flex;

    align-items: center;
    margin-top: 12px;

    color: var(--primary-dark);
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.2;
    svg {
      width: 40px;
      height: 40px;
      stroke: var(--primary-focus);
      fill: none;
      margin-right: 8px;
    }
  }

  @media screen and (min-width: 1440px) {
    display: flex;

    align-items: center;
    margin-top: 16px;
    color: var(--primary-dark);
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.25;
    svg {
      width: 40px;
      height: 40px;
      stroke: var(--primary-focus);
      fill: none;
      margin-right: 8px;
    }
  }
`,W=i.button`
  @media screen and (max-width: 767px) {
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
  }

  @media screen and (min-width: 768px) {
    display: flex;
    height: 44px;
    width: 336px;
    padding: 10px 30px;
    justify-content: center;
    align-items: center;

    border-radius: 10px;
    border: none;
    background: var(--primary-focus);
    box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);

    color: var(--primary-light);
    text-align: center;
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.3;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    height: 44px;
    width: 384px;
    padding: 10px 30px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 10px;
    border: none;
    background: var(--primary-focus);
    box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);

    color: var(--primary-light);
    text-align: center;
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.3;
  }
`,z=i(r)`
  color: var(--primary-light);

  
    
  }
`,R=i.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,P=i.div`
  @media screen and (max-width: 767px) {
    position: absolute;
    padding: 24px 16px;
    border-radius: 10px;
    background: var(--secondary-first);
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.3);
    margin-left: 0px;
    margin-top: 40px;
    width: 280px;
  }

  @media screen and (min-width: 768px) {
    position: absolute;
    padding: 32px 24px;
    border-radius: 10px;
    background: var(--secondary-first);
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.3);

    margin-top: 60px;
    width: 500px;
  }

  @media screen and (min-width: 1440px) {
    position: relative;
    padding: 32px 21px;
    border-radius: 10px;
    background: var(--secondary-first);
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.3);
    margin-left: 81px;
    margin-top: 105px;
    width: 515px;
  }
`,T=i.h2`
  color: var(--primary-dark);
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.1;
  margin-bottom: 12px;
`,B=i.ul`
  @media screen and (max-width: 767px) {
    list-style: initial;

    text-align: left;
    color: var(--primary-focus);
    padding-left: 16px;
  }

  @media screen and (min-width: 768px) {
    list-style: initial;

    text-align: left;
    color: var(--primary-focus);
    padding-left: 24px;
  }

  @media screen and (min-width: 1440px) {
    list-style: initial;

    text-align: left;
    color: var(--primary-focus);
    padding-left: 24px;
  }
`,t=i.li`
  color: var(--primary-dark);
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
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
`,D=()=>{const{t:n}=d();return e.jsxs(e.Fragment,{children:[e.jsxs(b,{children:[e.jsxs(u,{children:[e.jsx(y,{children:n("welcome.header")}),e.jsx(k,{children:n("welcome.description")}),e.jsx(v,{children:n("welcome.listBenef")}),e.jsxs(j,{children:[e.jsxs(o,{children:[e.jsx("svg",{children:e.jsx("use",{href:`${a}#icon-calendar`})}),n("welcome.firstBenef")]}),e.jsxs(o,{children:[e.jsx("svg",{children:e.jsx("use",{href:`${a}#icon-chart-bar`})}),n("welcome.secondBenef")]}),e.jsxs(o,{children:[e.jsx("svg",{children:e.jsx("use",{href:`${a}#icon-wrench-screwdriver`})}),n("welcome.thirdBenef")]})]}),e.jsx("div",{children:e.jsx(W,{children:e.jsx(z,{to:"/signup",children:n("welcome.buttonTry")})})})]}),e.jsx(R,{children:e.jsxs(P,{children:[e.jsx(T,{children:n("welcome.listWhy")}),e.jsxs(B,{children:[e.jsx(t,{children:n("welcome.firstWhy")}),e.jsx(t,{children:n("welcome.secondWhy")}),e.jsx(t,{children:n("welcome.thirdWhy")}),e.jsx(t,{children:n("welcome.fourthWhy")}),e.jsx(t,{children:n("welcome.fifthWhy")}),e.jsx(t,{children:n("welcome.sixthWhy")}),e.jsx(t,{children:n("welcome.seventhWhy")})]})]})})]}),e.jsx(w,{children:e.jsx(p,{})})]})},E=()=>e.jsx(h,{children:e.jsx(s,{children:e.jsx(f,{children:e.jsx(D,{})})})});export{E as default};
