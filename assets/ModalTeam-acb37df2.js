import{r as w,I as V,J as U,u as c,j as e,M as G,i as t}from"./index-7f0ae187.js";function H(){if(console&&console.warn){for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];typeof n[0]=="string"&&(n[0]=`react-i18next:: ${n[0]}`),console.warn(...n)}}const M={};function $(){for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];typeof n[0]=="string"&&M[n[0]]||(typeof n[0]=="string"&&(M[n[0]]=new Date),H(...n))}const E=(i,n)=>()=>{if(i.isInitialized)n();else{const r=()=>{setTimeout(()=>{i.off("initialized",r)},0),n()};i.on("initialized",r)}};function K(i,n,r){i.loadNamespaces(n,E(i,r))}function B(i,n,r,o){typeof r=="string"&&(r=[r]),r.forEach(l=>{i.options.ns.indexOf(l)<0&&i.options.ns.push(l)}),i.loadLanguages(n,E(i,o))}function P(i,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const o=n.languages[0],l=n.options?n.options.fallbackLng:!1,s=n.languages[n.languages.length-1];if(o.toLowerCase()==="cimode")return!0;const y=(I,N)=>{const a=n.services.backendConnector.state[`${I}|${N}`];return a===-1||a===2};return r.bindI18n&&r.bindI18n.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!y(n.isLanguageChangingTo,i)?!1:!!(n.hasResourceBundle(o,i)||!n.services.backendConnector.backend||n.options.resources&&!n.options.partialBundledLanguages||y(o,i)&&(!l||y(s,i)))}function J(i,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return!n.languages||!n.languages.length?($("i18n.languages were undefined or empty",n.languages),!0):n.options.ignoreJSONStructure!==void 0?n.hasLoadedNamespace(i,{lng:r.lng,precheck:(l,s)=>{if(r.bindI18n&&r.bindI18n.indexOf("languageChanging")>-1&&l.services.backendConnector.backend&&l.isLanguageChangingTo&&!s(l.isLanguageChangingTo,i))return!1}}):P(i,n,r)}const Z=w.createContext();class D{constructor(){this.usedNamespaces={}}addUsedNamespaces(n){n.forEach(r=>{this.usedNamespaces[r]||(this.usedNamespaces[r]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}const W=(i,n)=>{const r=w.useRef();return w.useEffect(()=>{r.current=n?r.current:i},[i,n]),r.current};function Y(i,n,r,o){return i.getFixedT(n,r,o)}function q(i,n,r,o){return w.useCallback(Y(i,n,r,o),[i,n,r,o])}function pe(i){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{i18n:r}=n,{i18n:o,defaultNS:l}=w.useContext(Z)||{},s=r||o||U();if(s&&!s.reportNamespaces&&(s.reportNamespaces=new D),!s){$("You will need to pass in an i18next instance by using initReactI18next");const d=(b,h)=>typeof h=="string"?h:h&&typeof h=="object"&&typeof h.defaultValue=="string"?h.defaultValue:Array.isArray(b)?b[b.length-1]:b,v=[d,{},!1];return v.t=d,v.i18n={},v.ready=!1,v}s.options.react&&s.options.react.wait!==void 0&&$("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const y={...V(),...s.options.react,...n},{useSuspense:I,keyPrefix:N}=y;let a=i||l||s.options&&s.options.defaultNS;a=typeof a=="string"?[a]:a||["translation"],s.reportNamespaces.addUsedNamespaces&&s.reportNamespaces.addUsedNamespaces(a);const k=(s.isInitialized||s.initializedStoreOnce)&&a.every(d=>J(d,s,y)),F=q(s,n.lng||null,y.nsMode==="fallback"?a:a[0],N),C=()=>F,O=()=>Y(s,n.lng||null,y.nsMode==="fallback"?a:a[0],N),[R,A]=w.useState(C);let S=a.join();n.lng&&(S=`${n.lng}${S}`);const z=W(S),T=w.useRef(!0);w.useEffect(()=>{const{bindI18n:d,bindI18nStore:v}=y;T.current=!0,!k&&!I&&(n.lng?B(s,n.lng,a,()=>{T.current&&A(O)}):K(s,a,()=>{T.current&&A(O)})),k&&z&&z!==S&&T.current&&A(O);function b(){T.current&&A(O)}return d&&s&&s.on(d,b),v&&s&&s.store.on(v,b),()=>{T.current=!1,d&&s&&d.split(" ").forEach(h=>s.off(h,b)),v&&s&&v.split(" ").forEach(h=>s.store.off(h,b))}},[s,S]),w.useEffect(()=>{T.current&&k&&A(C)},[s,N,k]);const L=[R,s,k];if(L.t=R,L.i18n=s,L.ready=k,k||!k&&!I)return L;throw new Promise(d=>{n.lng?B(s,n.lng,a,()=>d()):K(s,a,()=>d())})}const Q="/water-tracker/assets/VLADYSLAV-GOLODNIUK-03a72dd5.jpg",X="/water-tracker/assets/MARYNA-AKSAKOVA-0fc4c373.jpg",_="/water-tracker/assets/ALINA-TANTSURA-2add3d35.jpg",ee="/water-tracker/assets/MAKSYM-VYSOTSKYI.jpeg-a0a8e91a.jpeg",ne="/water-tracker/assets/Kamila Bohdanova-1bd3a4d4.png",ie="/water-tracker/assets/IRYNA-TOLOLO-05fc4ca6.jpg",re="/water-tracker/assets/OLEH-KRIUCHKOV-f232b402.jpg",se="/water-tracker/assets/OLHA-BUZAK-29c7c079.jpg",te="/water-tracker/assets/VADYM-STARYNETS-min-1b98f991.png",ae="/water-tracker/assets/YELYZAVETA SHATROVA-5678fc97.jpg",oe=c.button`
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
`,de=c.div`
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
`,ce=c.button`
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
`,x=c.img`
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
`,le=c.div`
  @media screen and (max-width: 767px) {
    padding: 5px 10px;
  }

  @media screen and (min-width: 768px) {
    padding: 15px 15px;
  }

  @media screen and (min-width: 1440px) {
    padding: 50px 20px;
  }
`,p=c.li`
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
`,he=c.div`
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
`,g=c.h3`
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
`,u=c.p`
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
`,m=c.ul`
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
`,f=c.li`
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
`,j=c.li`
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
`,ge=()=>{const[i,n]=w.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(oe,{onClick:()=>n(!i),children:"Team members"}),e.jsx(G,{isOpen:i,onClose:()=>n(!i),children:e.jsx(de,{children:e.jsx(le,{children:e.jsxs(he,{children:[e.jsx(p,{children:e.jsxs("div",{children:[e.jsx(ce,{onClick:()=>n(!i),children:e.jsx("svg",{children:e.jsx("use",{href:`${t}#icon-close`})})}),e.jsx(x,{src:Q}),e.jsx(g,{children:"Vladyslav Golodnuik"}),e.jsx(u,{children:"Team Lead Frontend"}),e.jsxs(m,{children:[e.jsx(f,{children:e.jsx("a",{href:"https://www.linkedin.com/in/vladyslav-golodniuk-780902302/",children:e.jsx("svg",{children:e.jsx("use",{href:`${t}#icon-linkedin`})})})}),e.jsx(j,{children:e.jsx("a",{href:" https://github.com/Stee1Lemon",children:e.jsx("svg",{children:e.jsx("use",{href:`${t}#icon-github`})})})})]})]})}),e.jsxs(p,{children:[e.jsx(x,{src:X}),e.jsxs("div",{children:[e.jsx(g,{children:"Maryna Aksakova"}),e.jsx(u,{children:"Team Lead Backend"}),e.jsxs(m,{children:[e.jsx(f,{children:e.jsx("a",{href:"https://www.linkedin.com/in/maryna-aksakova-3a0b9623b/",children:e.jsx("svg",{children:e.jsx("use",{href:`${t}#icon-linkedin`})})})}),e.jsx(j,{children:e.jsx("a",{href:" https://github.com/Marixa82",children:e.jsx("svg",{children:e.jsx("use",{href:`${t}#icon-github`})})})})]})]})]}),e.jsxs(p,{children:[e.jsx(x,{src:re}),e.jsxs("div",{children:[e.jsx(g,{children:"Oleh Kriuchkov"}),e.jsx(u,{children:"Scrum Master"}),e.jsxs(m,{children:[e.jsx(f,{children:e.jsx("a",{href:" https://www.linkedin.com/in/oleg-kryuchkov/",children:e.jsx("svg",{children:e.jsx("use",{href:`${t}#icon-linkedin`})})})}),e.jsx(j,{children:e.jsx("a",{href:"https://github.com/OlegKryuchkov",children:e.jsx("svg",{children:e.jsx("use",{href:`${t}#icon-github`})})})})]})]})]}),e.jsxs(p,{children:[e.jsx(x,{src:_}),e.jsxs("div",{children:[e.jsx(g,{children:"Alina Tantsura"}),e.jsx(u,{children:"Backend developer"}),e.jsxs(m,{children:[e.jsx(f,{children:e.jsx("a",{href:" https://www.linkedin.com/in/alina-tantsura/",children:e.jsx("svg",{children:e.jsx("use",{href:`${t}#icon-linkedin`})})})}),e.jsx(j,{children:e.jsx("a",{href:" https://github.com/AlinaTantsura",children:e.jsx("svg",{children:e.jsx("use",{href:`${t}#icon-github`})})})})]})]})]}),e.jsxs(p,{children:[e.jsx(x,{src:ee}),e.jsxs("div",{children:[e.jsx(g,{children:"Maksym Vysotskyi"}),e.jsx(u,{children:"Backend developer"}),e.jsxs(m,{children:[e.jsx(f,{children:e.jsx("a",{href:" https://www.linkedin.com/in/maxim-vysotsky-74a570274/",children:e.jsx("svg",{children:e.jsx("use",{href:`${t}#icon-linkedin`})})})}),e.jsx(j,{children:e.jsx("a",{href:" https://github.com/Needlife1",children:e.jsx("svg",{children:e.jsx("use",{href:`${t}#icon-github`})})})})]})]})]}),e.jsxs(p,{children:[e.jsx(x,{src:te}),e.jsxs("div",{children:[e.jsx(g,{children:"Vadym Starynets"}),e.jsx(u,{children:"Frontend developer"}),e.jsxs(m,{children:[e.jsx(f,{children:e.jsx("a",{href:" https://www.linkedin.com/in/vadymstarynets/",children:e.jsx("svg",{children:e.jsx("use",{href:`${t}#icon-linkedin`})})})}),e.jsx(j,{children:e.jsx("a",{href:" https://github.com/Debeluk",children:e.jsx("svg",{children:e.jsx("use",{href:`${t}#icon-github`})})})})]})]})]}),e.jsxs(p,{children:[e.jsx(x,{src:se}),e.jsxs("div",{children:[e.jsx(g,{children:"Olha Buzak"}),e.jsx(u,{children:"Frontend developer"}),e.jsxs(m,{children:[e.jsx(f,{children:e.jsx("a",{href:" https://www.linkedin.com/in/olha-buzak/",children:e.jsx("svg",{children:e.jsx("use",{href:`${t}#icon-linkedin`})})})}),e.jsx(j,{children:e.jsx("a",{href:" https://github.com/Olha-buz",children:e.jsx("svg",{children:e.jsx("use",{href:`${t}#icon-github`})})})})]})]})]}),e.jsxs(p,{children:[e.jsx(x,{src:ie}),e.jsxs("div",{children:[e.jsx(g,{children:"Iryna Tololo"}),e.jsx(u,{children:"Frontend developer"}),e.jsxs(m,{children:[e.jsx(f,{children:e.jsx("a",{href:" https://www.linkedin.com/in/iryna-tololo/",children:e.jsx("svg",{children:e.jsx("use",{href:`${t}#icon-linkedin`})})})}),e.jsx(j,{children:e.jsx("a",{href:" https://github.com/iratololo",children:e.jsx("svg",{children:e.jsx("use",{href:`${t}#icon-github`})})})})]})]})]}),e.jsxs(p,{children:[e.jsx(x,{src:ae}),e.jsxs("div",{children:[e.jsx(g,{children:"Yelyzaveta Shatrova"}),e.jsx(u,{children:"Frontend developer"}),e.jsxs(m,{children:[e.jsx(f,{children:e.jsx("a",{href:" https://www.linkedin.com/in/yelyzaveta-shatrova/",children:e.jsx("svg",{children:e.jsx("use",{href:`${t}#icon-linkedin`})})})}),e.jsx(j,{children:e.jsx("a",{href:" https://github.com/shtrvv",children:e.jsx("svg",{children:e.jsx("use",{href:`${t}#icon-github`})})})})]})]})]}),e.jsxs(p,{children:[e.jsx(x,{src:ne}),e.jsxs("div",{children:[e.jsx(g,{children:"Kamila Bohdanova"}),e.jsx(u,{children:"Frontend developer"}),e.jsxs(m,{children:[e.jsx(f,{children:e.jsx("a",{href:" https://www.linkedin.com/in/kamila-bohdanova/",children:e.jsx("svg",{children:e.jsx("use",{href:`${t}#icon-linkedin`})})})}),e.jsx(j,{children:e.jsx("a",{href:" https://github.com/Kamila0301",children:e.jsx("svg",{children:e.jsx("use",{href:`${t}#icon-github`})})})})]})]})]})]})})})})]})};export{ge as M,pe as u};
