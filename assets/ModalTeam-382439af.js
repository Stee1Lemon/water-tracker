import{r as h,H as V,I as U,u as d,j as e,i as s}from"./index-230f5467.js";function H(){if(console&&console.warn){for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];typeof n[0]=="string"&&(n[0]=`react-i18next:: ${n[0]}`),console.warn(...n)}}const M={};function $(){for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];typeof n[0]=="string"&&M[n[0]]||(typeof n[0]=="string"&&(M[n[0]]=new Date),H(...n))}const B=(i,n)=>()=>{if(i.isInitialized)n();else{const r=()=>{setTimeout(()=>{i.off("initialized",r)},0),n()};i.on("initialized",r)}};function E(i,n,r){i.loadNamespaces(n,B(i,r))}function K(i,n,r,o){typeof r=="string"&&(r=[r]),r.forEach(c=>{i.options.ns.indexOf(c)<0&&i.options.ns.push(c)}),i.loadLanguages(n,B(i,o))}function G(i,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const o=n.languages[0],c=n.options?n.options.fallbackLng:!1,t=n.languages[n.languages.length-1];if(o.toLowerCase()==="cimode")return!0;const y=(I,N)=>{const a=n.services.backendConnector.state[`${I}|${N}`];return a===-1||a===2};return r.bindI18n&&r.bindI18n.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!y(n.isLanguageChangingTo,i)?!1:!!(n.hasResourceBundle(o,i)||!n.services.backendConnector.backend||n.options.resources&&!n.options.partialBundledLanguages||y(o,i)&&(!c||y(t,i)))}function P(i,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return!n.languages||!n.languages.length?($("i18n.languages were undefined or empty",n.languages),!0):n.options.ignoreJSONStructure!==void 0?n.hasLoadedNamespace(i,{lng:r.lng,precheck:(c,t)=>{if(r.bindI18n&&r.bindI18n.indexOf("languageChanging")>-1&&c.services.backendConnector.backend&&c.isLanguageChangingTo&&!t(c.isLanguageChangingTo,i))return!1}}):G(i,n,r)}const J=h.createContext();class Z{constructor(){this.usedNamespaces={}}addUsedNamespaces(n){n.forEach(r=>{this.usedNamespaces[r]||(this.usedNamespaces[r]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}const D=(i,n)=>{const r=h.useRef();return h.useEffect(()=>{r.current=n?r.current:i},[i,n]),r.current};function Y(i,n,r,o){return i.getFixedT(n,r,o)}function W(i,n,r,o){return h.useCallback(Y(i,n,r,o),[i,n,r,o])}function ue(i){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{i18n:r}=n,{i18n:o,defaultNS:c}=h.useContext(J)||{},t=r||o||U();if(t&&!t.reportNamespaces&&(t.reportNamespaces=new Z),!t){$("You will need to pass in an i18next instance by using initReactI18next");const l=(b,x)=>typeof x=="string"?x:x&&typeof x=="object"&&typeof x.defaultValue=="string"?x.defaultValue:Array.isArray(b)?b[b.length-1]:b,v=[l,{},!1];return v.t=l,v.i18n={},v.ready=!1,v}t.options.react&&t.options.react.wait!==void 0&&$("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const y={...V(),...t.options.react,...n},{useSuspense:I,keyPrefix:N}=y;let a=i||c||t.options&&t.options.defaultNS;a=typeof a=="string"?[a]:a||["translation"],t.reportNamespaces.addUsedNamespaces&&t.reportNamespaces.addUsedNamespaces(a);const k=(t.isInitialized||t.initializedStoreOnce)&&a.every(l=>P(l,t,y)),F=W(t,n.lng||null,y.nsMode==="fallback"?a:a[0],N),C=()=>F,O=()=>Y(t,n.lng||null,y.nsMode==="fallback"?a:a[0],N),[R,L]=h.useState(C);let A=a.join();n.lng&&(A=`${n.lng}${A}`);const z=D(A),T=h.useRef(!0);h.useEffect(()=>{const{bindI18n:l,bindI18nStore:v}=y;T.current=!0,!k&&!I&&(n.lng?K(t,n.lng,a,()=>{T.current&&L(O)}):E(t,a,()=>{T.current&&L(O)})),k&&z&&z!==A&&T.current&&L(O);function b(){T.current&&L(O)}return l&&t&&t.on(l,b),v&&t&&t.store.on(v,b),()=>{T.current=!1,l&&t&&l.split(" ").forEach(x=>t.off(x,b)),v&&t&&v.split(" ").forEach(x=>t.store.off(x,b))}},[t,A]),h.useEffect(()=>{T.current&&k&&L(C)},[t,N,k]);const S=[R,t,k];if(S.t=R,S.i18n=t,S.ready=k,k||!k&&!I)return S;throw new Promise(l=>{n.lng?K(t,n.lng,a,()=>l()):E(t,a,()=>l())})}const q=d.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 50;
`,Q=d.div`
  background-color: white;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  z-index: 91;
  width: fit-content;
  height: fit-content;
  border-radius:10px;
`,X=({children:i,isOpen:n,onClose:r})=>{const o=({key:c})=>{switch(c){case"Escape":r();break}};return h.useEffect(()=>(n&&(document.body.style.overflow="hidden",document.addEventListener("keydown",o)),()=>{document.body.style.overflow="unset",document.removeEventListener("keydown",o)})),e.jsx(e.Fragment,{children:n?e.jsxs("div",{className:"overlay",children:[e.jsx(q,{onClick:r}),e.jsx(Q,{children:i})]}):null})},_="/water-tracker/assets/VLADYSLAV-GOLODNIUK-03a72dd5.jpg",ee="/water-tracker/assets/MARYNA-AKSAKOVA-0fc4c373.jpg",ne="/water-tracker/assets/ALINA-TANTSURA-2add3d35.jpg",ie="/water-tracker/assets/MAKSYM-VYSOTSKYI.jpeg-a0a8e91a.jpeg",re="/water-tracker/assets/Kamila Bohdanova-1bd3a4d4.png",te="/water-tracker/assets/IRYNA-TOLOLO-05fc4ca6.jpg",se="/water-tracker/assets/OLEH-KRIUCHKOV-f232b402.jpg",ae="/water-tracker/assets/OLHA-BUZAK-29c7c079.jpg",oe="/water-tracker/assets/VADYM-STARYNETS-min-1b98f991.png",de="/water-tracker/assets/YELYZAVETA SHATROVA-5678fc97.jpg",ce=d.button`
  @media screen and (max-width: 767px) {
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
    margin: 0 auto;
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
    margin: auto;

    height: 44px;
    width: 384px;
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
`,le=d.div`
  @media screen and (max-width: 767px) {
    background-color: var(--primary-light);
    position: relative;
    border-radius: 10px;
    padding: 12px 6px;
    width: 280px;
    max-height: 627px;
    color: var(--primary-dark);
    display: flex;
    flex-direction: column;
  }

  @media screen and (min-width: 768px) {
    background-color: var(--primary-light);
    position: relative;
    border-radius: 10px;
    padding: 24px 12px;
    width: 700px;
    height: 550px;
    color: var(--primary-dark);
    display: flex;
    flex-direction: column;
  }

  @media screen and (min-width: 1440px) {
    background-color: var(--primary-light);
    position: relative;
    border-radius: 10px;
    padding: 24px 12px;
    width: 1000px;
    height: 750px;
    color: var(--primary-dark);
    display: flex;
    flex-direction: column;
  }
`,he=d.button`
  @media screen and (max-width: 767px) {
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
  }

  @media screen and (min-width: 768px) {
    border: none;
    background-color: transparent;
    position: absolute;

    top: 20px;
    right: 10px;
    svg {
      width: 16px;
      height: 16px;
      stroke: var(--primary-focus);
    }
  }

  @media screen and (min-width: 1440px) {
    border: none;
    background-color: transparent;
    position: absolute;

    top: 30px;
    right: 16px;
    svg {
      width: 24px;
      height: 24px;
      stroke: var(--primary-focus);
    }
  }
`,p=d.img`
  @media screen and (max-width: 767px) {
    width: 25px;
    height: 25px;
    border-radius: 50%;
  }
  @media screen and (min-width: 768px) {
    width: 75px;
    height: 75px;
    border-radius: 50%;
    margin: 0 auto;
  }
  @media screen and (min-width: 1440px) {
    width: 150px;
    height: 155px;
    border-radius: 50%;
    margin: 0 auto;
  }
`,xe=d.div`
  @media screen and (max-width: 767px) {
    padding: 5px 10px;
  }

  @media screen and (min-width: 768px) {
    padding: 15px 15px;
  }

  @media screen and (min-width: 1440px) {
    padding: 50px 20px;
  }
`,g=d.li`
  @media screen and (max-width: 767px) {
    width: 100px;
    display: grid;
    justify-self: center;
  }

  @media screen and (min-width: 768px) {
    max-width: 165px;
    display: grid;
    justify-self: center;
  }
  @media screen and (min-width: 1440px) {
    max-width: 165px;
    display: grid;
    justify-self: center;
  }
`,pe=d.div`
  @media screen and (max-width: 767px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    gap: 10px 10px;
    list-style: none;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px 10px;
    list-style: none;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 50px 20px;
    list-style: none;
  }
`,u=d.h3`
  @media screen and (max-width: 767px) {
    display: grid;
    color: var(--primary-dark);
    font-family: Roboto;
    font-size: 14px;
    font-style: bold;
    font-weight: 500;
    line-height: 1;

    margin-top: 5px;
    margin-bottom: 5px;
  }

  @media screen and (min-width: 768px) {
    display: grid;
    color: var(--primary-dark);
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 1;
    justify-content: space-around;
    margin-top: 5px;
    margin-bottom: 5px;
  }
  @media screen and (min-width: 1440px) {
    display: grid;
    color: var(--primary-dark);
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.1;
    justify-content: space-around;
    margin-top: 10px;
  }
`,f=d.p`
  @media screen and (max-width: 767px) {
    display: grid;
    color: var(--primary-dark);
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.3;

    margin-bottom: 5px;
  }
  @media screen and (min-width: 768px) {
    display: grid;
    color: var(--primary-dark);
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.4;
    justify-content: space-around;
    margin-bottom: 10px;
  }
  @media screen and (min-width: 1440px) {
    display: grid;
    color: var(--primary-dark);
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.25;
    justify-content: space-around;
  }
`,m=d.ul`
  @media screen and (max-width: 767px) {
    display: flex;

    gap: 6px;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    gap: 10px;
  }
  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: center;
    gap: 24px;
  }
`,j=d.li`
  @media screen and (max-width: 767px) {
    svg {
      width: 15px;
      height: 15px;
      stroke-width: 1;
      stroke: var(--primary-light);
      fill: var(--primary-focus);
    }
  }
  @media screen and (min-width: 768px) {
    svg {
      width: 20px;
      height: 20px;
      stroke-width: 1;
      stroke: var(--primary-light);
      fill: var(--primary-focus);
    }
  }
  @media screen and (min-width: 1440px) {
    svg {
      width: 35px;
      height: 30px;
      stroke-width: 1;
      stroke: var(--primary-light);
      fill: var(--primary-focus);
    }
  }
`,w=d.li`
  @media screen and (max-width: 767px) {
    svg {
      width: 15px;
      height: 15px;

      stroke: var(--primary-dark);
      fill: var(--primary-dark);
    }
  }
  @media screen and (min-width: 768px) {
    svg {
      width: 20px;
      height: 20px;

      stroke: var(--primary-dark);
      fill: var(--primary-dark);
    }
  }

  @media screen and (min-width: 1440px) {
    svg {
      width: 35px;
      height: 30px;

      stroke: var(--primary-dark);
      fill: var(--primary-dark);
    }
  }
`,fe=()=>{const[i,n]=h.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(ce,{onClick:()=>n(!i),children:"Team members"}),e.jsx(X,{isOpen:i,onClose:()=>n(!i),children:e.jsx(le,{children:e.jsx(xe,{children:e.jsxs(pe,{children:[e.jsx(g,{children:e.jsxs("div",{children:[e.jsx(he,{onClick:()=>n(!i),children:e.jsx("svg",{children:e.jsx("use",{href:`${s}#icon-close`})})}),e.jsx(p,{src:_}),e.jsx(u,{children:"Vladyslav Golodnuik"}),e.jsx(f,{children:"Team Lead Frontend"}),e.jsxs(m,{children:[e.jsx(j,{children:e.jsx("a",{href:"https://www.linkedin.com/in/vladyslav-golodniuk-780902302/",children:e.jsx("svg",{children:e.jsx("use",{href:`${s}#icon-linkedin`})})})}),e.jsx(w,{children:e.jsx("a",{href:" https://github.com/Stee1Lemon",children:e.jsx("svg",{children:e.jsx("use",{href:`${s}#icon-github`})})})})]})]})}),e.jsxs(g,{children:[e.jsx(p,{src:ee}),e.jsxs("div",{children:[e.jsx(u,{children:"Maryna Aksakova"}),e.jsx(f,{children:"Team Lead Backend"}),e.jsxs(m,{children:[e.jsx(j,{children:e.jsx("a",{href:"https://www.linkedin.com/in/maryna-aksakova-3a0b9623b/",children:e.jsx("svg",{children:e.jsx("use",{href:`${s}#icon-linkedin`})})})}),e.jsx(w,{children:e.jsx("a",{href:" https://github.com/Marixa82",children:e.jsx("svg",{children:e.jsx("use",{href:`${s}#icon-github`})})})})]})]})]}),e.jsxs(g,{children:[e.jsx(p,{src:se}),e.jsxs("div",{children:[e.jsx(u,{children:"Oleh Kriuchkov"}),e.jsx(f,{children:"Scrum Master"}),e.jsxs(m,{children:[e.jsx(j,{children:e.jsx("a",{href:" https://www.linkedin.com/in/oleg-kryuchkov/",children:e.jsx("svg",{children:e.jsx("use",{href:`${s}#icon-linkedin`})})})}),e.jsx(w,{children:e.jsx("a",{href:"https://github.com/OlegKryuchkov",children:e.jsx("svg",{children:e.jsx("use",{href:`${s}#icon-github`})})})})]})]})]}),e.jsxs(g,{children:[e.jsx(p,{src:ne}),e.jsxs("div",{children:[e.jsx(u,{children:"Alina Tantsura"}),e.jsx(f,{children:"Backend developer"}),e.jsxs(m,{children:[e.jsx(j,{children:e.jsx("a",{href:" https://www.linkedin.com/in/alina-tantsura/",children:e.jsx("svg",{children:e.jsx("use",{href:`${s}#icon-linkedin`})})})}),e.jsx(w,{children:e.jsx("a",{href:" https://github.com/AlinaTantsura",children:e.jsx("svg",{children:e.jsx("use",{href:`${s}#icon-github`})})})})]})]})]}),e.jsxs(g,{children:[e.jsx(p,{src:ie}),e.jsxs("div",{children:[e.jsx(u,{children:"Maksym Vysotskyi"}),e.jsx(f,{children:"Backend developer"}),e.jsxs(m,{children:[e.jsx(j,{children:e.jsx("a",{href:" https://www.linkedin.com/in/maxim-vysotsky-74a570274/",children:e.jsx("svg",{children:e.jsx("use",{href:`${s}#icon-linkedin`})})})}),e.jsx(w,{children:e.jsx("a",{href:" https://github.com/Needlife1",children:e.jsx("svg",{children:e.jsx("use",{href:`${s}#icon-github`})})})})]})]})]}),e.jsxs(g,{children:[e.jsx(p,{src:oe}),e.jsxs("div",{children:[e.jsx(u,{children:"Vadym Starynets"}),e.jsx(f,{children:"Frontend developer"}),e.jsxs(m,{children:[e.jsx(j,{children:e.jsx("a",{href:" https://www.linkedin.com/in/vadymstarynets/",children:e.jsx("svg",{children:e.jsx("use",{href:`${s}#icon-linkedin`})})})}),e.jsx(w,{children:e.jsx("a",{href:" https://github.com/Debeluk",children:e.jsx("svg",{children:e.jsx("use",{href:`${s}#icon-github`})})})})]})]})]}),e.jsxs(g,{children:[e.jsx(p,{src:ae}),e.jsxs("div",{children:[e.jsx(u,{children:"Olha Buzak"}),e.jsx(f,{children:"Frontend developer"}),e.jsxs(m,{children:[e.jsx(j,{children:e.jsx("a",{href:" https://www.linkedin.com/in/olha-buzak/",children:e.jsx("svg",{children:e.jsx("use",{href:`${s}#icon-linkedin`})})})}),e.jsx(w,{children:e.jsx("a",{href:" https://github.com/Olha-buz",children:e.jsx("svg",{children:e.jsx("use",{href:`${s}#icon-github`})})})})]})]})]}),e.jsxs(g,{children:[e.jsx(p,{src:te}),e.jsxs("div",{children:[e.jsx(u,{children:"Iryna Tololo"}),e.jsx(f,{children:"Frontend developer"}),e.jsxs(m,{children:[e.jsx(j,{children:e.jsx("a",{href:" https://www.linkedin.com/in/iryna-tololo/",children:e.jsx("svg",{children:e.jsx("use",{href:`${s}#icon-linkedin`})})})}),e.jsx(w,{children:e.jsx("a",{href:" https://github.com/iratololo",children:e.jsx("svg",{children:e.jsx("use",{href:`${s}#icon-github`})})})})]})]})]}),e.jsxs(g,{children:[e.jsx(p,{src:de}),e.jsxs("div",{children:[e.jsx(u,{children:"Yelyzaveta Shatrova"}),e.jsx(f,{children:"Frontend developer"}),e.jsxs(m,{children:[e.jsx(j,{children:e.jsx("a",{href:" https://www.linkedin.com/in/yelyzaveta-shatrova/",children:e.jsx("svg",{children:e.jsx("use",{href:`${s}#icon-linkedin`})})})}),e.jsx(w,{children:e.jsx("a",{href:" https://github.com/shtrvv",children:e.jsx("svg",{children:e.jsx("use",{href:`${s}#icon-github`})})})})]})]})]}),e.jsxs(g,{children:[e.jsx(p,{src:re}),e.jsxs("div",{children:[e.jsx(u,{children:"Kamila Bohdanova"}),e.jsx(f,{children:"Frontend developer"}),e.jsxs(m,{children:[e.jsx(j,{children:e.jsx("a",{href:" https://www.linkedin.com/in/kamila-bohdanova/",children:e.jsx("svg",{children:e.jsx("use",{href:`${s}#icon-linkedin`})})})}),e.jsx(w,{children:e.jsx("a",{href:" https://github.com/Kamila0301",children:e.jsx("svg",{children:e.jsx("use",{href:`${s}#icon-github`})})})})]})]})]})]})})})})]})};export{fe as M,X as a,ue as u};
