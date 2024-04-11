import{u as i,a as y,r as b,b as v,s as j,c as t,d as g,j as o,i as s,L as P,N as k}from"./index-376479bf.js";import{u as F,c as S,a as n,b as N}from"./index.esm-633fa1d3.js";import{u as C}from"./useTranslation-e78d2aa3.js";const z=i.form`
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
`,d=i.div`
  margin-bottom: 16px;
  position: relative;
`,l=i.span`
  color: var(--secondary-second);
  font-size: 14px;
`,q=()=>{const{t:r}=C(),p=y(),[a,f]=b.useState(!1),c=v(j),e=F({initialValues:{email:"",password:"",repeatedPassword:""},validationSchema:S({email:n().required("Email is required").matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,"Invalid email"),password:n().required("Password is required").min(8,"Password must contain at least 8 characters").max(64,"Password must contain no more than 64 characters"),repeatedPassword:n().required("Password is required").oneOf([N("password"),null],"Passwords must match")}),onSubmit:async({email:u,password:x})=>{t.Notify.info("Please, consider that we use free API resources. Initial load may take some time.");const m=await p(g.signupThunk({email:u,password:x}));if(m.error)return t.Notify.failure(m.payload);const w=await p(g.signinThunk({email:u,password:x}));if(w.error)return t.Notify.failure(w.payload);e.resetForm()}}),h=()=>{f(!a)};return o.jsxs(z,{onSubmit:e.handleSubmit,children:[o.jsx("h2",{children:r("authForm.headerSignup")}),o.jsx("label",{children:r("authForm.labelEmail")}),o.jsxs(d,{children:[o.jsx("input",{type:"email",name:"email",placeholder:r("authForm.placeholdEmail"),onChange:e.handleChange,onBlur:e.handleBlur,value:e.values.email,style:{color:e.errors.email&&e.touched.email?"var(--secondary-second)":"var(--primary-focus)",border:e.errors.email&&e.touched.email?"1px solid var(--secondary-second)":"1px solid var(--secondary-fifth)"}}),e.errors.email&&e.touched.email?o.jsx(l,{children:e.errors.email}):null]}),o.jsx("label",{children:r("authForm.labelPassword")}),o.jsxs(d,{children:[o.jsx("input",{type:a?"text":"password",name:"password",placeholder:r("authForm.placeholdPassword"),onChange:e.handleChange,onBlur:e.handleBlur,value:e.values.password,style:{color:e.errors.password&&e.touched.password?"var(--secondary-second)":"var(--primary-focus)",border:e.errors.password&&e.touched.password?"1px solid var(--secondary-second)":"1px solid var(--secondary-fifth)"}}),o.jsx("button",{type:"button",className:"icon-eye",onClick:h,style:{top:e.errors.password&&e.touched.password?"23%":"30%"},children:o.jsx("svg",{width:"16",height:"16",className:"icon",children:o.jsx("use",{href:a?s+"#icon-opened-eye":s+"#icon-closed-eye"})})}),e.errors.password&&e.touched.password?o.jsx(l,{children:e.errors.password}):null]}),o.jsx("label",{children:r("authForm.labelRepeatPassword")}),o.jsxs(d,{children:[o.jsx("input",{type:a?"text":"password",name:"repeatedPassword",placeholder:r("authForm.labelRepeatPassword"),onChange:e.handleChange,onBlur:e.handleBlur,value:e.values.repeatedPassword,style:{color:e.errors.repeatedPassword&&e.touched.repeatedPassword?"var(--secondary-second)":"var(--primary-focus)",border:e.errors.repeatedPassword&&e.touched.repeatedPassword?"1px solid var(--secondary-second)":"1px solid var(--secondary-fifth)"}}),o.jsx("button",{type:"button",className:"icon-eye",onClick:h,style:{top:e.errors.repeatedPassword&&e.touched.repeatedPassword?"23%":"30%"},children:o.jsx("svg",{width:"16",height:"16",className:"icon",children:o.jsx("use",{href:a?s+"#icon-opened-eye":s+"#icon-closed-eye"})})}),e.errors.repeatedPassword&&e.touched.repeatedPassword?o.jsx(l,{children:e.errors.repeatedPassword}):null]}),o.jsx("button",{type:"submit",disabled:c,children:c?o.jsx(P,{}):r("authForm.buttonSignup")}),o.jsx(k,{to:"/signin",children:r("authForm.linkSignin")})]})},B=i.div`
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
`,L=()=>o.jsx("section",{children:o.jsx(B,{children:o.jsx(q,{})})});export{L as default};
