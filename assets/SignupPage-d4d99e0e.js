import{u as r,a as f,r as y,b as v,s as k,c as t,d as b,j as o,i as n,L as j,N as P}from"./index-572adb69.js";import{u as z,c as F,a as i,b as S}from"./index.esm-e35841c6.js";import{u as I,M as N}from"./ModalTeam-d6ae7741.js";import{m as $,a as B,t as C,b as q,d as A,c as E}from"./signup-bottle-desktop-c5b3fade.js";const L=r.form`
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
`,d=r.div`
  margin-bottom: 16px;
  position: relative;
`,p=r.span`
  color: var(--secondary-second);
  font-size: 14px;
`,T=r.div`
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
`,M=()=>{const{t:a}=I(),c=f(),[s,w]=y.useState(!1),l=v(k),e=z({initialValues:{email:"",password:"",repeatedPassword:""},validationSchema:F({email:i().required("Email is required").matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,"Invalid email"),password:i().required("Password is required").min(8,"Password must contain at least 8 characters").max(64,"Password must contain no more than 64 characters"),repeatedPassword:i().required("Password is required").oneOf([S("password"),null],"Passwords must match")}),onSubmit:async({email:u,password:m})=>{t.Notify.info("Please, consider that we use free API resources. Initial load may take some time.");const x=await c(b.signupThunk({email:u,password:m}));if(x.error)return t.Notify.failure(x.payload);const g=await c(b.signinThunk({email:u,password:m}));if(g.error)return t.Notify.failure(g.payload);e.resetForm()}}),h=()=>{w(!s)};return o.jsxs(L,{onSubmit:e.handleSubmit,children:[o.jsx("h2",{children:a("authForm.headerSignup")}),o.jsx("label",{children:a("authForm.labelEmail")}),o.jsxs(d,{children:[o.jsx("input",{type:"email",name:"email",placeholder:a("authForm.placeholdEmail"),onChange:e.handleChange,onBlur:e.handleBlur,value:e.values.email,style:{color:e.errors.email&&e.touched.email?"var(--secondary-second)":"var(--primary-focus)",border:e.errors.email&&e.touched.email?"1px solid var(--secondary-second)":"1px solid var(--secondary-fifth)"}}),e.errors.email&&e.touched.email?o.jsx(p,{children:e.errors.email}):null]}),o.jsx("label",{children:a("authForm.labelPassword")}),o.jsxs(d,{children:[o.jsx("input",{type:s?"text":"password",name:"password",placeholder:a("authForm.placeholdPassword"),onChange:e.handleChange,onBlur:e.handleBlur,value:e.values.password,style:{color:e.errors.password&&e.touched.password?"var(--secondary-second)":"var(--primary-focus)",border:e.errors.password&&e.touched.password?"1px solid var(--secondary-second)":"1px solid var(--secondary-fifth)"}}),o.jsx("button",{type:"button",className:"icon-eye",onClick:h,style:{top:e.errors.password&&e.touched.password?"23%":"30%"},children:o.jsx("svg",{width:"16",height:"16",className:"icon",children:o.jsx("use",{href:s?n+"#icon-opened-eye":n+"#icon-closed-eye"})})}),e.errors.password&&e.touched.password?o.jsx(p,{children:e.errors.password}):null]}),o.jsx("label",{children:a("authForm.labelRepeatPassword")}),o.jsxs(d,{children:[o.jsx("input",{type:s?"text":"password",name:"repeatedPassword",placeholder:a("authForm.labelRepeatPassword"),onChange:e.handleChange,onBlur:e.handleBlur,value:e.values.repeatedPassword,style:{color:e.errors.repeatedPassword&&e.touched.repeatedPassword?"var(--secondary-second)":"var(--primary-focus)",border:e.errors.repeatedPassword&&e.touched.repeatedPassword?"1px solid var(--secondary-second)":"1px solid var(--secondary-fifth)"}}),o.jsx("button",{type:"button",className:"icon-eye",onClick:h,style:{top:e.errors.repeatedPassword&&e.touched.repeatedPassword?"23%":"30%"},children:o.jsx("svg",{width:"16",height:"16",className:"icon",children:o.jsx("use",{href:s?n+"#icon-opened-eye":n+"#icon-closed-eye"})})}),e.errors.repeatedPassword&&e.touched.repeatedPassword?o.jsx(p,{children:e.errors.repeatedPassword}):null]}),o.jsx("button",{type:"submit",disabled:l,children:l?o.jsx(j,{}):a("authForm.buttonSignup")}),o.jsx(P,{to:"/signin",children:a("authForm.linkSignin")}),o.jsx(T,{children:o.jsx(N,{})})]})},R=r.section`
  @media only screen and (max-width: 767px) {
    background-image: url(${$});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center top 50px;
    &::before {
      content: '';
      position: absolute;
      background-image: url(${B});
      background-size: contain;
      background-repeat: no-repeat;
      z-index: -99;
      top: 50%;
      left: 50%;
      transform: translate(-50%, 98%);
      width: 280px;
      height: 210px;
    }
  }

  @media only screen and (min-width: 768px) {
    background-image: url(${C});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center top 15px;
    &::before {
      content: '';
      position: absolute;
      background-image: url(${q});
      background-size: contain;
      background-repeat: no-repeat;
      z-index: -99;
      top: 50%;
      left: 50%;
      transform: translate(-37%, -55%);
      width: 570px;
      height: 500px;
    }
  }

  @media only screen and (min-width: 1440px) {
    height: 100%;
    background-image: url(${A});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center top;
    &::before {
      content: '';
      position: absolute;
      background-image: url(${E});
      background-size: contain;
      background-repeat: no-repeat;
      z-index: -99;
      top: 50%;
      left: 50%;
      transform: translate(-85%, -45%);
      width: 916px;
      height: 680px;
    }
  }
`,Z=r.div`
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
`,G=()=>o.jsx(R,{children:o.jsx(Z,{children:o.jsx(M,{})})});export{G as default};
