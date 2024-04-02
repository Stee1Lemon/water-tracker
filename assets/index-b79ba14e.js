var wg=Object.defineProperty;var Sg=(e,t,n)=>t in e?wg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var $s=(e,t,n)=>(Sg(e,typeof t!="symbol"?t+"":t,n),n);function kg(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function bg(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var r0={exports:{}},Ya={},i0={exports:{}},I={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xi=Symbol.for("react.element"),Eg=Symbol.for("react.portal"),Cg=Symbol.for("react.fragment"),Pg=Symbol.for("react.strict_mode"),jg=Symbol.for("react.profiler"),Og=Symbol.for("react.provider"),Ng=Symbol.for("react.context"),Tg=Symbol.for("react.forward_ref"),_g=Symbol.for("react.suspense"),Rg=Symbol.for("react.memo"),Mg=Symbol.for("react.lazy"),_d=Symbol.iterator;function Ag(e){return e===null||typeof e!="object"?null:(e=_d&&e[_d]||e["@@iterator"],typeof e=="function"?e:null)}var o0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},a0=Object.assign,s0={};function $r(e,t,n){this.props=e,this.context=t,this.refs=s0,this.updater=n||o0}$r.prototype.isReactComponent={};$r.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};$r.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function l0(){}l0.prototype=$r.prototype;function Gu(e,t,n){this.props=e,this.context=t,this.refs=s0,this.updater=n||o0}var qu=Gu.prototype=new l0;qu.constructor=Gu;a0(qu,$r.prototype);qu.isPureReactComponent=!0;var Rd=Array.isArray,u0=Object.prototype.hasOwnProperty,Xu={current:null},c0={key:!0,ref:!0,__self:!0,__source:!0};function d0(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)u0.call(t,r)&&!c0.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:Xi,type:e,key:o,ref:a,props:i,_owner:Xu.current}}function Dg(e,t){return{$$typeof:Xi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Zu(e){return typeof e=="object"&&e!==null&&e.$$typeof===Xi}function $g(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Md=/\/+/g;function Ls(e,t){return typeof e=="object"&&e!==null&&e.key!=null?$g(""+e.key):t.toString(36)}function Mo(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Xi:case Eg:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Ls(a,0):r,Rd(i)?(n="",e!=null&&(n=e.replace(Md,"$&/")+"/"),Mo(i,t,n,"",function(u){return u})):i!=null&&(Zu(i)&&(i=Dg(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Md,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Rd(e))for(var s=0;s<e.length;s++){o=e[s];var l=r+Ls(o,s);a+=Mo(o,t,n,l,i)}else if(l=Ag(e),typeof l=="function")for(e=l.call(e),s=0;!(o=e.next()).done;)o=o.value,l=r+Ls(o,s++),a+=Mo(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function co(e,t,n){if(e==null)return e;var r=[],i=0;return Mo(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Lg(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Oe={current:null},Ao={transition:null},Ig={ReactCurrentDispatcher:Oe,ReactCurrentBatchConfig:Ao,ReactCurrentOwner:Xu};I.Children={map:co,forEach:function(e,t,n){co(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return co(e,function(){t++}),t},toArray:function(e){return co(e,function(t){return t})||[]},only:function(e){if(!Zu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};I.Component=$r;I.Fragment=Cg;I.Profiler=jg;I.PureComponent=Gu;I.StrictMode=Pg;I.Suspense=_g;I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ig;I.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=a0({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Xu.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)u0.call(t,l)&&!c0.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:Xi,type:e.type,key:i,ref:o,props:r,_owner:a}};I.createContext=function(e){return e={$$typeof:Ng,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Og,_context:e},e.Consumer=e};I.createElement=d0;I.createFactory=function(e){var t=d0.bind(null,e);return t.type=e,t};I.createRef=function(){return{current:null}};I.forwardRef=function(e){return{$$typeof:Tg,render:e}};I.isValidElement=Zu;I.lazy=function(e){return{$$typeof:Mg,_payload:{_status:-1,_result:e},_init:Lg}};I.memo=function(e,t){return{$$typeof:Rg,type:e,compare:t===void 0?null:t}};I.startTransition=function(e){var t=Ao.transition;Ao.transition={};try{e()}finally{Ao.transition=t}};I.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};I.useCallback=function(e,t){return Oe.current.useCallback(e,t)};I.useContext=function(e){return Oe.current.useContext(e)};I.useDebugValue=function(){};I.useDeferredValue=function(e){return Oe.current.useDeferredValue(e)};I.useEffect=function(e,t){return Oe.current.useEffect(e,t)};I.useId=function(){return Oe.current.useId()};I.useImperativeHandle=function(e,t,n){return Oe.current.useImperativeHandle(e,t,n)};I.useInsertionEffect=function(e,t){return Oe.current.useInsertionEffect(e,t)};I.useLayoutEffect=function(e,t){return Oe.current.useLayoutEffect(e,t)};I.useMemo=function(e,t){return Oe.current.useMemo(e,t)};I.useReducer=function(e,t,n){return Oe.current.useReducer(e,t,n)};I.useRef=function(e){return Oe.current.useRef(e)};I.useState=function(e){return Oe.current.useState(e)};I.useSyncExternalStore=function(e,t,n){return Oe.current.useSyncExternalStore(e,t,n)};I.useTransition=function(){return Oe.current.useTransition()};I.version="18.2.0";i0.exports=I;var k=i0.exports;const gn=bg(k),bi=kg({__proto__:null,default:gn},[k]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fg=k,zg=Symbol.for("react.element"),Bg=Symbol.for("react.fragment"),Wg=Object.prototype.hasOwnProperty,Ug=Fg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Vg={key:!0,ref:!0,__self:!0,__source:!0};function f0(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Wg.call(t,r)&&!Vg.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:zg,type:e,key:o,ref:a,props:i,_owner:Ug.current}}Ya.Fragment=Bg;Ya.jsx=f0;Ya.jsxs=f0;r0.exports=Ya;var c=r0.exports;/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ei(){return Ei=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ei.apply(this,arguments)}var rn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(rn||(rn={}));const Ad="popstate";function Hg(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:a,hash:s}=r.location;return Nl("",{pathname:o,search:a,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:la(i)}return Yg(t,n,null,e)}function ie(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Ju(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Qg(){return Math.random().toString(36).substr(2,8)}function Dd(e,t){return{usr:e.state,key:e.key,idx:t}}function Nl(e,t,n,r){return n===void 0&&(n=null),Ei({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Lr(t):t,{state:n,key:t&&t.key||r||Qg()})}function la(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Lr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Yg(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,s=rn.Pop,l=null,u=f();u==null&&(u=0,a.replaceState(Ei({},a.state,{idx:u}),""));function f(){return(a.state||{idx:null}).idx}function d(){s=rn.Pop;let S=f(),h=S==null?null:S-u;u=S,l&&l({action:s,location:y.location,delta:h})}function g(S,h){s=rn.Push;let p=Nl(y.location,S,h);n&&n(p,S),u=f()+1;let m=Dd(p,u),w=y.createHref(p);try{a.pushState(m,"",w)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;i.location.assign(w)}o&&l&&l({action:s,location:y.location,delta:1})}function x(S,h){s=rn.Replace;let p=Nl(y.location,S,h);n&&n(p,S),u=f();let m=Dd(p,u),w=y.createHref(p);a.replaceState(m,"",w),o&&l&&l({action:s,location:y.location,delta:0})}function v(S){let h=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof S=="string"?S:la(S);return ie(h,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,h)}let y={get action(){return s},get location(){return e(i,a)},listen(S){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Ad,d),l=S,()=>{i.removeEventListener(Ad,d),l=null}},createHref(S){return t(i,S)},createURL:v,encodeLocation(S){let h=v(S);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:g,replace:x,go(S){return a.go(S)}};return y}var $d;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})($d||($d={}));function Kg(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Lr(t):t,i=ec(r.pathname||"/",n);if(i==null)return null;let o=p0(e);Gg(o);let a=null;for(let s=0;a==null&&s<o.length;++s)a=iy(o[s],sy(i));return a}function p0(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,s)=>{let l={relativePath:s===void 0?o.path||"":s,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};l.relativePath.startsWith("/")&&(ie(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=sn([r,l.relativePath]),f=n.concat(l);o.children&&o.children.length>0&&(ie(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),p0(o.children,t,f,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:ny(u,o.index),routesMeta:f})};return e.forEach((o,a)=>{var s;if(o.path===""||!((s=o.path)!=null&&s.includes("?")))i(o,a);else for(let l of h0(o.path))i(o,a,l)}),t}function h0(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=h0(r.join("/")),s=[];return s.push(...a.map(l=>l===""?o:[o,l].join("/"))),i&&s.push(...a),s.map(l=>e.startsWith("/")&&l===""?"/":l)}function Gg(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:ry(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const qg=/^:\w+$/,Xg=3,Zg=2,Jg=1,ey=10,ty=-2,Ld=e=>e==="*";function ny(e,t){let n=e.split("/"),r=n.length;return n.some(Ld)&&(r+=ty),t&&(r+=Zg),n.filter(i=>!Ld(i)).reduce((i,o)=>i+(qg.test(o)?Xg:o===""?Jg:ey),r)}function ry(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function iy(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let a=0;a<n.length;++a){let s=n[a],l=a===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",f=oy({path:s.relativePath,caseSensitive:s.caseSensitive,end:l},u);if(!f)return null;Object.assign(r,f.params);let d=s.route;o.push({params:r,pathname:sn([i,f.pathname]),pathnameBase:dy(sn([i,f.pathnameBase])),route:d}),f.pathnameBase!=="/"&&(i=sn([i,f.pathnameBase]))}return o}function oy(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=ay(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((u,f,d)=>{if(f==="*"){let g=s[d]||"";a=o.slice(0,o.length-g.length).replace(/(.)\/+$/,"$1")}return u[f]=ly(s[d]||"",f),u},{}),pathname:o,pathnameBase:a,pattern:e}}function ay(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Ju(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(a,s)=>(r.push(s),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function sy(e){try{return decodeURI(e)}catch(t){return Ju(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function ly(e,t){try{return decodeURIComponent(e)}catch(n){return Ju(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function ec(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function uy(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Lr(e):e;return{pathname:n?n.startsWith("/")?n:cy(n,t):t,search:fy(r),hash:py(i)}}function cy(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Is(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function tc(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function nc(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Lr(e):(i=Ei({},e),ie(!i.pathname||!i.pathname.includes("?"),Is("?","pathname","search",i)),ie(!i.pathname||!i.pathname.includes("#"),Is("#","pathname","hash",i)),ie(!i.search||!i.search.includes("#"),Is("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,s;if(r||a==null)s=n;else{let d=t.length-1;if(a.startsWith("..")){let g=a.split("/");for(;g[0]==="..";)g.shift(),d-=1;i.pathname=g.join("/")}s=d>=0?t[d]:"/"}let l=uy(i,s),u=a&&a!=="/"&&a.endsWith("/"),f=(o||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||f)&&(l.pathname+="/"),l}const sn=e=>e.join("/").replace(/\/\/+/g,"/"),dy=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),fy=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,py=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function hy(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const m0=["post","put","patch","delete"];new Set(m0);const my=["get",...m0];new Set(my);/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ua(){return ua=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ua.apply(this,arguments)}const rc=k.createContext(null),g0=k.createContext(null),Kn=k.createContext(null),Ka=k.createContext(null),Ht=k.createContext({outlet:null,matches:[],isDataRoute:!1}),y0=k.createContext(null);function gy(e,t){let{relative:n}=t===void 0?{}:t;Ir()||ie(!1);let{basename:r,navigator:i}=k.useContext(Kn),{hash:o,pathname:a,search:s}=ic(e,{relative:n}),l=a;return r!=="/"&&(l=a==="/"?r:sn([r,a])),i.createHref({pathname:l,search:s,hash:o})}function Ir(){return k.useContext(Ka)!=null}function Fr(){return Ir()||ie(!1),k.useContext(Ka).location}function v0(e){k.useContext(Kn).static||k.useLayoutEffect(e)}function x0(){let{isDataRoute:e}=k.useContext(Ht);return e?_y():yy()}function yy(){Ir()||ie(!1);let e=k.useContext(rc),{basename:t,navigator:n}=k.useContext(Kn),{matches:r}=k.useContext(Ht),{pathname:i}=Fr(),o=JSON.stringify(tc(r).map(l=>l.pathnameBase)),a=k.useRef(!1);return v0(()=>{a.current=!0}),k.useCallback(function(l,u){if(u===void 0&&(u={}),!a.current)return;if(typeof l=="number"){n.go(l);return}let f=nc(l,JSON.parse(o),i,u.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:sn([t,f.pathname])),(u.replace?n.replace:n.push)(f,u.state,u)},[t,n,o,i,e])}const vy=k.createContext(null);function xy(e){let t=k.useContext(Ht).outlet;return t&&k.createElement(vy.Provider,{value:e},t)}function ic(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=k.useContext(Ht),{pathname:i}=Fr(),o=JSON.stringify(tc(r).map(a=>a.pathnameBase));return k.useMemo(()=>nc(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function wy(e,t){return Sy(e,t)}function Sy(e,t,n){Ir()||ie(!1);let{navigator:r}=k.useContext(Kn),{matches:i}=k.useContext(Ht),o=i[i.length-1],a=o?o.params:{};o&&o.pathname;let s=o?o.pathnameBase:"/";o&&o.route;let l=Fr(),u;if(t){var f;let y=typeof t=="string"?Lr(t):t;s==="/"||(f=y.pathname)!=null&&f.startsWith(s)||ie(!1),u=y}else u=l;let d=u.pathname||"/",g=s==="/"?d:d.slice(s.length)||"/",x=Kg(e,{pathname:g}),v=Py(x&&x.map(y=>Object.assign({},y,{params:Object.assign({},a,y.params),pathname:sn([s,r.encodeLocation?r.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?s:sn([s,r.encodeLocation?r.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),i,n);return t&&v?k.createElement(Ka.Provider,{value:{location:ua({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:rn.Pop}},v):v}function ky(){let e=Ty(),t=hy(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},t),n?k.createElement("pre",{style:i},n):null,o)}const by=k.createElement(ky,null);class Ey extends k.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?k.createElement(Ht.Provider,{value:this.props.routeContext},k.createElement(y0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Cy(e){let{routeContext:t,match:n,children:r}=e,i=k.useContext(rc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),k.createElement(Ht.Provider,{value:t},r)}function Py(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let o=e,a=(r=n)==null?void 0:r.errors;if(a!=null){let s=o.findIndex(l=>l.route.id&&(a==null?void 0:a[l.route.id]));s>=0||ie(!1),o=o.slice(0,Math.min(o.length,s+1))}return o.reduceRight((s,l,u)=>{let f=l.route.id?a==null?void 0:a[l.route.id]:null,d=null;n&&(d=l.route.errorElement||by);let g=t.concat(o.slice(0,u+1)),x=()=>{let v;return f?v=d:l.route.Component?v=k.createElement(l.route.Component,null):l.route.element?v=l.route.element:v=s,k.createElement(Cy,{match:l,routeContext:{outlet:s,matches:g,isDataRoute:n!=null},children:v})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?k.createElement(Ey,{location:n.location,revalidation:n.revalidation,component:d,error:f,children:x(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):x()},null)}var w0=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(w0||{}),ca=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ca||{});function jy(e){let t=k.useContext(rc);return t||ie(!1),t}function Oy(e){let t=k.useContext(g0);return t||ie(!1),t}function Ny(e){let t=k.useContext(Ht);return t||ie(!1),t}function S0(e){let t=Ny(),n=t.matches[t.matches.length-1];return n.route.id||ie(!1),n.route.id}function Ty(){var e;let t=k.useContext(y0),n=Oy(ca.UseRouteError),r=S0(ca.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function _y(){let{router:e}=jy(w0.UseNavigateStable),t=S0(ca.UseNavigateStable),n=k.useRef(!1);return v0(()=>{n.current=!0}),k.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,ua({fromRouteId:t},o)))},[e,t])}function da(e){let{to:t,replace:n,state:r,relative:i}=e;Ir()||ie(!1);let{matches:o}=k.useContext(Ht),{pathname:a}=Fr(),s=x0(),l=nc(t,tc(o).map(f=>f.pathnameBase),a,i==="path"),u=JSON.stringify(l);return k.useEffect(()=>s(JSON.parse(u),{replace:n,state:r,relative:i}),[s,u,i,n,r]),null}function k0(e){return xy(e.context)}function Tt(e){ie(!1)}function Ry(e){let{basename:t="/",children:n=null,location:r,navigationType:i=rn.Pop,navigator:o,static:a=!1}=e;Ir()&&ie(!1);let s=t.replace(/^\/*/,"/"),l=k.useMemo(()=>({basename:s,navigator:o,static:a}),[s,o,a]);typeof r=="string"&&(r=Lr(r));let{pathname:u="/",search:f="",hash:d="",state:g=null,key:x="default"}=r,v=k.useMemo(()=>{let y=ec(u,s);return y==null?null:{location:{pathname:y,search:f,hash:d,state:g,key:x},navigationType:i}},[s,u,f,d,g,x,i]);return v==null?null:k.createElement(Kn.Provider,{value:l},k.createElement(Ka.Provider,{children:n,value:v}))}function My(e){let{children:t,location:n}=e;return wy(Tl(t),n)}new Promise(()=>{});function Tl(e,t){t===void 0&&(t=[]);let n=[];return k.Children.forEach(e,(r,i)=>{if(!k.isValidElement(r))return;let o=[...t,i];if(r.type===k.Fragment){n.push.apply(n,Tl(r.props.children,o));return}r.type!==Tt&&ie(!1),!r.props.index||!r.props.children||ie(!1);let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Tl(r.props.children,o)),n.push(a)}),n}/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fa(){return fa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},fa.apply(this,arguments)}function b0(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Ay(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Dy(e,t){return e.button===0&&(!t||t==="_self")&&!Ay(e)}const $y=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],Ly=["aria-current","caseSensitive","className","end","style","to","children"],Iy="startTransition",Id=bi[Iy];function Fy(e){let{basename:t,children:n,future:r,window:i}=e,o=k.useRef();o.current==null&&(o.current=Hg({window:i,v5Compat:!0}));let a=o.current,[s,l]=k.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},f=k.useCallback(d=>{u&&Id?Id(()=>l(d)):l(d)},[l,u]);return k.useLayoutEffect(()=>a.listen(f),[a,f]),k.createElement(Ry,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:a})}const zy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",By=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ga=k.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:a,state:s,target:l,to:u,preventScrollReset:f}=t,d=b0(t,$y),{basename:g}=k.useContext(Kn),x,v=!1;if(typeof u=="string"&&By.test(u)&&(x=u,zy))try{let p=new URL(window.location.href),m=u.startsWith("//")?new URL(p.protocol+u):new URL(u),w=ec(m.pathname,g);m.origin===p.origin&&w!=null?u=w+m.search+m.hash:v=!0}catch{}let y=gy(u,{relative:i}),S=Wy(u,{replace:a,state:s,target:l,preventScrollReset:f,relative:i});function h(p){r&&r(p),p.defaultPrevented||S(p)}return k.createElement("a",fa({},d,{href:x||y,onClick:v||o?r:h,ref:n,target:l}))}),E0=k.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:o="",end:a=!1,style:s,to:l,children:u}=t,f=b0(t,Ly),d=ic(l,{relative:f.relative}),g=Fr(),x=k.useContext(g0),{navigator:v}=k.useContext(Kn),y=v.encodeLocation?v.encodeLocation(d).pathname:d.pathname,S=g.pathname,h=x&&x.navigation&&x.navigation.location?x.navigation.location.pathname:null;i||(S=S.toLowerCase(),h=h?h.toLowerCase():null,y=y.toLowerCase());let p=S===y||!a&&S.startsWith(y)&&S.charAt(y.length)==="/",m=h!=null&&(h===y||!a&&h.startsWith(y)&&h.charAt(y.length)==="/"),w=p?r:void 0,b;typeof o=="function"?b=o({isActive:p,isPending:m}):b=[o,p?"active":null,m?"pending":null].filter(Boolean).join(" ");let E=typeof s=="function"?s({isActive:p,isPending:m}):s;return k.createElement(Ga,fa({},f,{"aria-current":w,className:b,ref:n,style:E,to:l}),typeof u=="function"?u({isActive:p,isPending:m}):u)});var Fd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(Fd||(Fd={}));var zd;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(zd||(zd={}));function Wy(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:a}=t===void 0?{}:t,s=x0(),l=Fr(),u=ic(e,{relative:a});return k.useCallback(f=>{if(Dy(f,n)){f.preventDefault();let d=r!==void 0?r:la(l)===la(u);s(e,{replace:d,state:i,preventScrollReset:o,relative:a})}},[l,s,u,r,i,n,e,o,a])}var _l={},C0={exports:{}},Ge={},P0={exports:{}},j0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,M){var $=N.length;N.push(M);e:for(;0<$;){var Q=$-1>>>1,Y=N[Q];if(0<i(Y,M))N[Q]=M,N[$]=Y,$=Q;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var M=N[0],$=N.pop();if($!==M){N[0]=$;e:for(var Q=0,Y=N.length,jn=Y>>>1;Q<jn;){var ot=2*(Q+1)-1,Yt=N[ot],ze=ot+1,Ot=N[ze];if(0>i(Yt,$))ze<Y&&0>i(Ot,Yt)?(N[Q]=Ot,N[ze]=$,Q=ze):(N[Q]=Yt,N[ot]=$,Q=ot);else if(ze<Y&&0>i(Ot,$))N[Q]=Ot,N[ze]=$,Q=ze;else break e}}return M}function i(N,M){var $=N.sortIndex-M.sortIndex;return $!==0?$:N.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var l=[],u=[],f=1,d=null,g=3,x=!1,v=!1,y=!1,S=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(N){for(var M=n(u);M!==null;){if(M.callback===null)r(u);else if(M.startTime<=N)r(u),M.sortIndex=M.expirationTime,t(l,M);else break;M=n(u)}}function w(N){if(y=!1,m(N),!v)if(n(l)!==null)v=!0,Qr(b);else{var M=n(u);M!==null&&Pn(w,M.startTime-N)}}function b(N,M){v=!1,y&&(y=!1,h(O),O=-1),x=!0;var $=g;try{for(m(M),d=n(l);d!==null&&(!(d.expirationTime>M)||N&&!Ce());){var Q=d.callback;if(typeof Q=="function"){d.callback=null,g=d.priorityLevel;var Y=Q(d.expirationTime<=M);M=e.unstable_now(),typeof Y=="function"?d.callback=Y:d===n(l)&&r(l),m(M)}else r(l);d=n(l)}if(d!==null)var jn=!0;else{var ot=n(u);ot!==null&&Pn(w,ot.startTime-M),jn=!1}return jn}finally{d=null,g=$,x=!1}}var E=!1,C=null,O=-1,A=5,D=-1;function Ce(){return!(e.unstable_now()-D<A)}function En(){if(C!==null){var N=e.unstable_now();D=N;var M=!0;try{M=C(!0,N)}finally{M?Cn():(E=!1,C=null)}}else E=!1}var Cn;if(typeof p=="function")Cn=function(){p(En)};else if(typeof MessageChannel<"u"){var lo=new MessageChannel,As=lo.port2;lo.port1.onmessage=En,Cn=function(){As.postMessage(null)}}else Cn=function(){S(En,0)};function Qr(N){C=N,E||(E=!0,Cn())}function Pn(N,M){O=S(function(){N(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){v||x||(v=!0,Qr(b))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(N){switch(g){case 1:case 2:case 3:var M=3;break;default:M=g}var $=g;g=M;try{return N()}finally{g=$}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,M){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var $=g;g=N;try{return M()}finally{g=$}},e.unstable_scheduleCallback=function(N,M,$){var Q=e.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?Q+$:Q):$=Q,N){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=$+Y,N={id:f++,callback:M,priorityLevel:N,startTime:$,expirationTime:Y,sortIndex:-1},$>Q?(N.sortIndex=$,t(u,N),n(l)===null&&N===n(u)&&(y?(h(O),O=-1):y=!0,Pn(w,$-Q))):(N.sortIndex=Y,t(l,N),v||x||(v=!0,Qr(b))),N},e.unstable_shouldYield=Ce,e.unstable_wrapCallback=function(N){var M=g;return function(){var $=g;g=M;try{return N.apply(this,arguments)}finally{g=$}}}})(j0);P0.exports=j0;var Uy=P0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O0=k,Qe=Uy;function j(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var N0=new Set,Ci={};function Gn(e,t){wr(e,t),wr(e+"Capture",t)}function wr(e,t){for(Ci[e]=t,e=0;e<t.length;e++)N0.add(t[e])}var Ft=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Rl=Object.prototype.hasOwnProperty,Vy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Bd={},Wd={};function Hy(e){return Rl.call(Wd,e)?!0:Rl.call(Bd,e)?!1:Vy.test(e)?Wd[e]=!0:(Bd[e]=!0,!1)}function Qy(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Yy(e,t,n,r){if(t===null||typeof t>"u"||Qy(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ne(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var xe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){xe[e]=new Ne(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];xe[t]=new Ne(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){xe[e]=new Ne(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){xe[e]=new Ne(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){xe[e]=new Ne(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){xe[e]=new Ne(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){xe[e]=new Ne(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){xe[e]=new Ne(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){xe[e]=new Ne(e,5,!1,e.toLowerCase(),null,!1,!1)});var oc=/[\-:]([a-z])/g;function ac(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(oc,ac);xe[t]=new Ne(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(oc,ac);xe[t]=new Ne(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(oc,ac);xe[t]=new Ne(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){xe[e]=new Ne(e,1,!1,e.toLowerCase(),null,!1,!1)});xe.xlinkHref=new Ne("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){xe[e]=new Ne(e,1,!1,e.toLowerCase(),null,!0,!0)});function sc(e,t,n,r){var i=xe.hasOwnProperty(t)?xe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Yy(t,n,i,r)&&(n=null),r||i===null?Hy(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Qt=O0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,fo=Symbol.for("react.element"),er=Symbol.for("react.portal"),tr=Symbol.for("react.fragment"),lc=Symbol.for("react.strict_mode"),Ml=Symbol.for("react.profiler"),T0=Symbol.for("react.provider"),_0=Symbol.for("react.context"),uc=Symbol.for("react.forward_ref"),Al=Symbol.for("react.suspense"),Dl=Symbol.for("react.suspense_list"),cc=Symbol.for("react.memo"),Jt=Symbol.for("react.lazy"),R0=Symbol.for("react.offscreen"),Ud=Symbol.iterator;function Kr(e){return e===null||typeof e!="object"?null:(e=Ud&&e[Ud]||e["@@iterator"],typeof e=="function"?e:null)}var te=Object.assign,Fs;function ai(e){if(Fs===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Fs=t&&t[1]||""}return`
`+Fs+e}var zs=!1;function Bs(e,t){if(!e||zs)return"";zs=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,s=o.length-1;1<=a&&0<=s&&i[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(i[a]!==o[s]){if(a!==1||s!==1)do if(a--,s--,0>s||i[a]!==o[s]){var l=`
`+i[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=s);break}}}finally{zs=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ai(e):""}function Ky(e){switch(e.tag){case 5:return ai(e.type);case 16:return ai("Lazy");case 13:return ai("Suspense");case 19:return ai("SuspenseList");case 0:case 2:case 15:return e=Bs(e.type,!1),e;case 11:return e=Bs(e.type.render,!1),e;case 1:return e=Bs(e.type,!0),e;default:return""}}function $l(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case tr:return"Fragment";case er:return"Portal";case Ml:return"Profiler";case lc:return"StrictMode";case Al:return"Suspense";case Dl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case _0:return(e.displayName||"Context")+".Consumer";case T0:return(e._context.displayName||"Context")+".Provider";case uc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case cc:return t=e.displayName||null,t!==null?t:$l(e.type)||"Memo";case Jt:t=e._payload,e=e._init;try{return $l(e(t))}catch{}}return null}function Gy(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return $l(t);case 8:return t===lc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function yn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function M0(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function qy(e){var t=M0(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function po(e){e._valueTracker||(e._valueTracker=qy(e))}function A0(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=M0(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function pa(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ll(e,t){var n=t.checked;return te({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Vd(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=yn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function D0(e,t){t=t.checked,t!=null&&sc(e,"checked",t,!1)}function Il(e,t){D0(e,t);var n=yn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Fl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Fl(e,t.type,yn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Hd(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Fl(e,t,n){(t!=="number"||pa(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var si=Array.isArray;function pr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+yn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function zl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(j(91));return te({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Qd(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(j(92));if(si(n)){if(1<n.length)throw Error(j(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:yn(n)}}function $0(e,t){var n=yn(t.value),r=yn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Yd(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function L0(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Bl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?L0(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ho,I0=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ho=ho||document.createElement("div"),ho.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ho.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Pi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var fi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Xy=["Webkit","ms","Moz","O"];Object.keys(fi).forEach(function(e){Xy.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),fi[t]=fi[e]})});function F0(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||fi.hasOwnProperty(e)&&fi[e]?(""+t).trim():t+"px"}function z0(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=F0(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Zy=te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Wl(e,t){if(t){if(Zy[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(j(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(j(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(j(61))}if(t.style!=null&&typeof t.style!="object")throw Error(j(62))}}function Ul(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vl=null;function dc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Hl=null,hr=null,mr=null;function Kd(e){if(e=eo(e)){if(typeof Hl!="function")throw Error(j(280));var t=e.stateNode;t&&(t=es(t),Hl(e.stateNode,e.type,t))}}function B0(e){hr?mr?mr.push(e):mr=[e]:hr=e}function W0(){if(hr){var e=hr,t=mr;if(mr=hr=null,Kd(e),t)for(e=0;e<t.length;e++)Kd(t[e])}}function U0(e,t){return e(t)}function V0(){}var Ws=!1;function H0(e,t,n){if(Ws)return e(t,n);Ws=!0;try{return U0(e,t,n)}finally{Ws=!1,(hr!==null||mr!==null)&&(V0(),W0())}}function ji(e,t){var n=e.stateNode;if(n===null)return null;var r=es(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(j(231,t,typeof n));return n}var Ql=!1;if(Ft)try{var Gr={};Object.defineProperty(Gr,"passive",{get:function(){Ql=!0}}),window.addEventListener("test",Gr,Gr),window.removeEventListener("test",Gr,Gr)}catch{Ql=!1}function Jy(e,t,n,r,i,o,a,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var pi=!1,ha=null,ma=!1,Yl=null,e2={onError:function(e){pi=!0,ha=e}};function t2(e,t,n,r,i,o,a,s,l){pi=!1,ha=null,Jy.apply(e2,arguments)}function n2(e,t,n,r,i,o,a,s,l){if(t2.apply(this,arguments),pi){if(pi){var u=ha;pi=!1,ha=null}else throw Error(j(198));ma||(ma=!0,Yl=u)}}function qn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Q0(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Gd(e){if(qn(e)!==e)throw Error(j(188))}function r2(e){var t=e.alternate;if(!t){if(t=qn(e),t===null)throw Error(j(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Gd(i),e;if(o===r)return Gd(i),t;o=o.sibling}throw Error(j(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a){for(s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?e:t}function Y0(e){return e=r2(e),e!==null?K0(e):null}function K0(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=K0(e);if(t!==null)return t;e=e.sibling}return null}var G0=Qe.unstable_scheduleCallback,qd=Qe.unstable_cancelCallback,i2=Qe.unstable_shouldYield,o2=Qe.unstable_requestPaint,re=Qe.unstable_now,a2=Qe.unstable_getCurrentPriorityLevel,fc=Qe.unstable_ImmediatePriority,q0=Qe.unstable_UserBlockingPriority,ga=Qe.unstable_NormalPriority,s2=Qe.unstable_LowPriority,X0=Qe.unstable_IdlePriority,qa=null,Et=null;function l2(e){if(Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(qa,e,void 0,(e.current.flags&128)===128)}catch{}}var ft=Math.clz32?Math.clz32:d2,u2=Math.log,c2=Math.LN2;function d2(e){return e>>>=0,e===0?32:31-(u2(e)/c2|0)|0}var mo=64,go=4194304;function li(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ya(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~i;s!==0?r=li(s):(o&=a,o!==0&&(r=li(o)))}else a=n&~i,a!==0?r=li(a):o!==0&&(r=li(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ft(t),i=1<<n,r|=e[n],t&=~i;return r}function f2(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function p2(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-ft(o),s=1<<a,l=i[a];l===-1?(!(s&n)||s&r)&&(i[a]=f2(s,t)):l<=t&&(e.expiredLanes|=s),o&=~s}}function Kl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Z0(){var e=mo;return mo<<=1,!(mo&4194240)&&(mo=64),e}function Us(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Zi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ft(t),e[t]=n}function h2(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-ft(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function pc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ft(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var H=0;function J0(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var eh,hc,th,nh,rh,Gl=!1,yo=[],ln=null,un=null,cn=null,Oi=new Map,Ni=new Map,tn=[],m2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xd(e,t){switch(e){case"focusin":case"focusout":ln=null;break;case"dragenter":case"dragleave":un=null;break;case"mouseover":case"mouseout":cn=null;break;case"pointerover":case"pointerout":Oi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ni.delete(t.pointerId)}}function qr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=eo(t),t!==null&&hc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function g2(e,t,n,r,i){switch(t){case"focusin":return ln=qr(ln,e,t,n,r,i),!0;case"dragenter":return un=qr(un,e,t,n,r,i),!0;case"mouseover":return cn=qr(cn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Oi.set(o,qr(Oi.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Ni.set(o,qr(Ni.get(o)||null,e,t,n,r,i)),!0}return!1}function ih(e){var t=An(e.target);if(t!==null){var n=qn(t);if(n!==null){if(t=n.tag,t===13){if(t=Q0(n),t!==null){e.blockedOn=t,rh(e.priority,function(){th(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Do(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ql(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Vl=r,n.target.dispatchEvent(r),Vl=null}else return t=eo(n),t!==null&&hc(t),e.blockedOn=n,!1;t.shift()}return!0}function Zd(e,t,n){Do(e)&&n.delete(t)}function y2(){Gl=!1,ln!==null&&Do(ln)&&(ln=null),un!==null&&Do(un)&&(un=null),cn!==null&&Do(cn)&&(cn=null),Oi.forEach(Zd),Ni.forEach(Zd)}function Xr(e,t){e.blockedOn===t&&(e.blockedOn=null,Gl||(Gl=!0,Qe.unstable_scheduleCallback(Qe.unstable_NormalPriority,y2)))}function Ti(e){function t(i){return Xr(i,e)}if(0<yo.length){Xr(yo[0],e);for(var n=1;n<yo.length;n++){var r=yo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ln!==null&&Xr(ln,e),un!==null&&Xr(un,e),cn!==null&&Xr(cn,e),Oi.forEach(t),Ni.forEach(t),n=0;n<tn.length;n++)r=tn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<tn.length&&(n=tn[0],n.blockedOn===null);)ih(n),n.blockedOn===null&&tn.shift()}var gr=Qt.ReactCurrentBatchConfig,va=!0;function v2(e,t,n,r){var i=H,o=gr.transition;gr.transition=null;try{H=1,mc(e,t,n,r)}finally{H=i,gr.transition=o}}function x2(e,t,n,r){var i=H,o=gr.transition;gr.transition=null;try{H=4,mc(e,t,n,r)}finally{H=i,gr.transition=o}}function mc(e,t,n,r){if(va){var i=ql(e,t,n,r);if(i===null)Js(e,t,r,xa,n),Xd(e,r);else if(g2(i,e,t,n,r))r.stopPropagation();else if(Xd(e,r),t&4&&-1<m2.indexOf(e)){for(;i!==null;){var o=eo(i);if(o!==null&&eh(o),o=ql(e,t,n,r),o===null&&Js(e,t,r,xa,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Js(e,t,r,null,n)}}var xa=null;function ql(e,t,n,r){if(xa=null,e=dc(r),e=An(e),e!==null)if(t=qn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Q0(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return xa=e,null}function oh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(a2()){case fc:return 1;case q0:return 4;case ga:case s2:return 16;case X0:return 536870912;default:return 16}default:return 16}}var on=null,gc=null,$o=null;function ah(){if($o)return $o;var e,t=gc,n=t.length,r,i="value"in on?on.value:on.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return $o=i.slice(e,1<r?1-r:void 0)}function Lo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function vo(){return!0}function Jd(){return!1}function qe(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?vo:Jd,this.isPropagationStopped=Jd,this}return te(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=vo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=vo)},persist:function(){},isPersistent:vo}),t}var zr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yc=qe(zr),Ji=te({},zr,{view:0,detail:0}),w2=qe(Ji),Vs,Hs,Zr,Xa=te({},Ji,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Zr&&(Zr&&e.type==="mousemove"?(Vs=e.screenX-Zr.screenX,Hs=e.screenY-Zr.screenY):Hs=Vs=0,Zr=e),Vs)},movementY:function(e){return"movementY"in e?e.movementY:Hs}}),ef=qe(Xa),S2=te({},Xa,{dataTransfer:0}),k2=qe(S2),b2=te({},Ji,{relatedTarget:0}),Qs=qe(b2),E2=te({},zr,{animationName:0,elapsedTime:0,pseudoElement:0}),C2=qe(E2),P2=te({},zr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),j2=qe(P2),O2=te({},zr,{data:0}),tf=qe(O2),N2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},T2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function R2(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=_2[e])?!!t[e]:!1}function vc(){return R2}var M2=te({},Ji,{key:function(e){if(e.key){var t=N2[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Lo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?T2[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vc,charCode:function(e){return e.type==="keypress"?Lo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Lo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),A2=qe(M2),D2=te({},Xa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),nf=qe(D2),$2=te({},Ji,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vc}),L2=qe($2),I2=te({},zr,{propertyName:0,elapsedTime:0,pseudoElement:0}),F2=qe(I2),z2=te({},Xa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),B2=qe(z2),W2=[9,13,27,32],xc=Ft&&"CompositionEvent"in window,hi=null;Ft&&"documentMode"in document&&(hi=document.documentMode);var U2=Ft&&"TextEvent"in window&&!hi,sh=Ft&&(!xc||hi&&8<hi&&11>=hi),rf=String.fromCharCode(32),of=!1;function lh(e,t){switch(e){case"keyup":return W2.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function uh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var nr=!1;function V2(e,t){switch(e){case"compositionend":return uh(t);case"keypress":return t.which!==32?null:(of=!0,rf);case"textInput":return e=t.data,e===rf&&of?null:e;default:return null}}function H2(e,t){if(nr)return e==="compositionend"||!xc&&lh(e,t)?(e=ah(),$o=gc=on=null,nr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return sh&&t.locale!=="ko"?null:t.data;default:return null}}var Q2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function af(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Q2[e.type]:t==="textarea"}function ch(e,t,n,r){B0(r),t=wa(t,"onChange"),0<t.length&&(n=new yc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var mi=null,_i=null;function Y2(e){Sh(e,0)}function Za(e){var t=or(e);if(A0(t))return e}function K2(e,t){if(e==="change")return t}var dh=!1;if(Ft){var Ys;if(Ft){var Ks="oninput"in document;if(!Ks){var sf=document.createElement("div");sf.setAttribute("oninput","return;"),Ks=typeof sf.oninput=="function"}Ys=Ks}else Ys=!1;dh=Ys&&(!document.documentMode||9<document.documentMode)}function lf(){mi&&(mi.detachEvent("onpropertychange",fh),_i=mi=null)}function fh(e){if(e.propertyName==="value"&&Za(_i)){var t=[];ch(t,_i,e,dc(e)),H0(Y2,t)}}function G2(e,t,n){e==="focusin"?(lf(),mi=t,_i=n,mi.attachEvent("onpropertychange",fh)):e==="focusout"&&lf()}function q2(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Za(_i)}function X2(e,t){if(e==="click")return Za(t)}function Z2(e,t){if(e==="input"||e==="change")return Za(t)}function J2(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var mt=typeof Object.is=="function"?Object.is:J2;function Ri(e,t){if(mt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Rl.call(t,i)||!mt(e[i],t[i]))return!1}return!0}function uf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function cf(e,t){var n=uf(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=uf(n)}}function ph(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ph(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function hh(){for(var e=window,t=pa();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=pa(e.document)}return t}function wc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function ev(e){var t=hh(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ph(n.ownerDocument.documentElement,n)){if(r!==null&&wc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=cf(n,o);var a=cf(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var tv=Ft&&"documentMode"in document&&11>=document.documentMode,rr=null,Xl=null,gi=null,Zl=!1;function df(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Zl||rr==null||rr!==pa(r)||(r=rr,"selectionStart"in r&&wc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),gi&&Ri(gi,r)||(gi=r,r=wa(Xl,"onSelect"),0<r.length&&(t=new yc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=rr)))}function xo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ir={animationend:xo("Animation","AnimationEnd"),animationiteration:xo("Animation","AnimationIteration"),animationstart:xo("Animation","AnimationStart"),transitionend:xo("Transition","TransitionEnd")},Gs={},mh={};Ft&&(mh=document.createElement("div").style,"AnimationEvent"in window||(delete ir.animationend.animation,delete ir.animationiteration.animation,delete ir.animationstart.animation),"TransitionEvent"in window||delete ir.transitionend.transition);function Ja(e){if(Gs[e])return Gs[e];if(!ir[e])return e;var t=ir[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in mh)return Gs[e]=t[n];return e}var gh=Ja("animationend"),yh=Ja("animationiteration"),vh=Ja("animationstart"),xh=Ja("transitionend"),wh=new Map,ff="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Sn(e,t){wh.set(e,t),Gn(t,[e])}for(var qs=0;qs<ff.length;qs++){var Xs=ff[qs],nv=Xs.toLowerCase(),rv=Xs[0].toUpperCase()+Xs.slice(1);Sn(nv,"on"+rv)}Sn(gh,"onAnimationEnd");Sn(yh,"onAnimationIteration");Sn(vh,"onAnimationStart");Sn("dblclick","onDoubleClick");Sn("focusin","onFocus");Sn("focusout","onBlur");Sn(xh,"onTransitionEnd");wr("onMouseEnter",["mouseout","mouseover"]);wr("onMouseLeave",["mouseout","mouseover"]);wr("onPointerEnter",["pointerout","pointerover"]);wr("onPointerLeave",["pointerout","pointerover"]);Gn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Gn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Gn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Gn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Gn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Gn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ui="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),iv=new Set("cancel close invalid load scroll toggle".split(" ").concat(ui));function pf(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,n2(r,t,void 0,e),e.currentTarget=null}function Sh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==o&&i.isPropagationStopped())break e;pf(i,s,u),o=l}else for(a=0;a<r.length;a++){if(s=r[a],l=s.instance,u=s.currentTarget,s=s.listener,l!==o&&i.isPropagationStopped())break e;pf(i,s,u),o=l}}}if(ma)throw e=Yl,ma=!1,Yl=null,e}function G(e,t){var n=t[ru];n===void 0&&(n=t[ru]=new Set);var r=e+"__bubble";n.has(r)||(kh(t,e,2,!1),n.add(r))}function Zs(e,t,n){var r=0;t&&(r|=4),kh(n,e,r,t)}var wo="_reactListening"+Math.random().toString(36).slice(2);function Mi(e){if(!e[wo]){e[wo]=!0,N0.forEach(function(n){n!=="selectionchange"&&(iv.has(n)||Zs(n,!1,e),Zs(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[wo]||(t[wo]=!0,Zs("selectionchange",!1,t))}}function kh(e,t,n,r){switch(oh(t)){case 1:var i=v2;break;case 4:i=x2;break;default:i=mc}n=i.bind(null,t,n,e),i=void 0,!Ql||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Js(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;a=a.return}for(;s!==null;){if(a=An(s),a===null)return;if(l=a.tag,l===5||l===6){r=o=a;continue e}s=s.parentNode}}r=r.return}H0(function(){var u=o,f=dc(n),d=[];e:{var g=wh.get(e);if(g!==void 0){var x=yc,v=e;switch(e){case"keypress":if(Lo(n)===0)break e;case"keydown":case"keyup":x=A2;break;case"focusin":v="focus",x=Qs;break;case"focusout":v="blur",x=Qs;break;case"beforeblur":case"afterblur":x=Qs;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=ef;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=k2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=L2;break;case gh:case yh:case vh:x=C2;break;case xh:x=F2;break;case"scroll":x=w2;break;case"wheel":x=B2;break;case"copy":case"cut":case"paste":x=j2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=nf}var y=(t&4)!==0,S=!y&&e==="scroll",h=y?g!==null?g+"Capture":null:g;y=[];for(var p=u,m;p!==null;){m=p;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,h!==null&&(w=ji(p,h),w!=null&&y.push(Ai(p,w,m)))),S)break;p=p.return}0<y.length&&(g=new x(g,v,null,n,f),d.push({event:g,listeners:y}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",g&&n!==Vl&&(v=n.relatedTarget||n.fromElement)&&(An(v)||v[zt]))break e;if((x||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,x?(v=n.relatedTarget||n.toElement,x=u,v=v?An(v):null,v!==null&&(S=qn(v),v!==S||v.tag!==5&&v.tag!==6)&&(v=null)):(x=null,v=u),x!==v)){if(y=ef,w="onMouseLeave",h="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(y=nf,w="onPointerLeave",h="onPointerEnter",p="pointer"),S=x==null?g:or(x),m=v==null?g:or(v),g=new y(w,p+"leave",x,n,f),g.target=S,g.relatedTarget=m,w=null,An(f)===u&&(y=new y(h,p+"enter",v,n,f),y.target=m,y.relatedTarget=S,w=y),S=w,x&&v)t:{for(y=x,h=v,p=0,m=y;m;m=Xn(m))p++;for(m=0,w=h;w;w=Xn(w))m++;for(;0<p-m;)y=Xn(y),p--;for(;0<m-p;)h=Xn(h),m--;for(;p--;){if(y===h||h!==null&&y===h.alternate)break t;y=Xn(y),h=Xn(h)}y=null}else y=null;x!==null&&hf(d,g,x,y,!1),v!==null&&S!==null&&hf(d,S,v,y,!0)}}e:{if(g=u?or(u):window,x=g.nodeName&&g.nodeName.toLowerCase(),x==="select"||x==="input"&&g.type==="file")var b=K2;else if(af(g))if(dh)b=Z2;else{b=q2;var E=G2}else(x=g.nodeName)&&x.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(b=X2);if(b&&(b=b(e,u))){ch(d,b,n,f);break e}E&&E(e,g,u),e==="focusout"&&(E=g._wrapperState)&&E.controlled&&g.type==="number"&&Fl(g,"number",g.value)}switch(E=u?or(u):window,e){case"focusin":(af(E)||E.contentEditable==="true")&&(rr=E,Xl=u,gi=null);break;case"focusout":gi=Xl=rr=null;break;case"mousedown":Zl=!0;break;case"contextmenu":case"mouseup":case"dragend":Zl=!1,df(d,n,f);break;case"selectionchange":if(tv)break;case"keydown":case"keyup":df(d,n,f)}var C;if(xc)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else nr?lh(e,n)&&(O="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(sh&&n.locale!=="ko"&&(nr||O!=="onCompositionStart"?O==="onCompositionEnd"&&nr&&(C=ah()):(on=f,gc="value"in on?on.value:on.textContent,nr=!0)),E=wa(u,O),0<E.length&&(O=new tf(O,e,null,n,f),d.push({event:O,listeners:E}),C?O.data=C:(C=uh(n),C!==null&&(O.data=C)))),(C=U2?V2(e,n):H2(e,n))&&(u=wa(u,"onBeforeInput"),0<u.length&&(f=new tf("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:u}),f.data=C))}Sh(d,t)})}function Ai(e,t,n){return{instance:e,listener:t,currentTarget:n}}function wa(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=ji(e,n),o!=null&&r.unshift(Ai(e,o,i)),o=ji(e,t),o!=null&&r.push(Ai(e,o,i))),e=e.return}return r}function Xn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function hf(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&u!==null&&(s=u,i?(l=ji(n,o),l!=null&&a.unshift(Ai(n,l,s))):i||(l=ji(n,o),l!=null&&a.push(Ai(n,l,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var ov=/\r\n?/g,av=/\u0000|\uFFFD/g;function mf(e){return(typeof e=="string"?e:""+e).replace(ov,`
`).replace(av,"")}function So(e,t,n){if(t=mf(t),mf(e)!==t&&n)throw Error(j(425))}function Sa(){}var Jl=null,eu=null;function tu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var nu=typeof setTimeout=="function"?setTimeout:void 0,sv=typeof clearTimeout=="function"?clearTimeout:void 0,gf=typeof Promise=="function"?Promise:void 0,lv=typeof queueMicrotask=="function"?queueMicrotask:typeof gf<"u"?function(e){return gf.resolve(null).then(e).catch(uv)}:nu;function uv(e){setTimeout(function(){throw e})}function el(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Ti(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ti(t)}function dn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function yf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Br=Math.random().toString(36).slice(2),kt="__reactFiber$"+Br,Di="__reactProps$"+Br,zt="__reactContainer$"+Br,ru="__reactEvents$"+Br,cv="__reactListeners$"+Br,dv="__reactHandles$"+Br;function An(e){var t=e[kt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[zt]||n[kt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=yf(e);e!==null;){if(n=e[kt])return n;e=yf(e)}return t}e=n,n=e.parentNode}return null}function eo(e){return e=e[kt]||e[zt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function or(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(j(33))}function es(e){return e[Di]||null}var iu=[],ar=-1;function kn(e){return{current:e}}function X(e){0>ar||(e.current=iu[ar],iu[ar]=null,ar--)}function K(e,t){ar++,iu[ar]=e.current,e.current=t}var vn={},Ee=kn(vn),Me=kn(!1),Wn=vn;function Sr(e,t){var n=e.type.contextTypes;if(!n)return vn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ae(e){return e=e.childContextTypes,e!=null}function ka(){X(Me),X(Ee)}function vf(e,t,n){if(Ee.current!==vn)throw Error(j(168));K(Ee,t),K(Me,n)}function bh(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(j(108,Gy(e)||"Unknown",i));return te({},n,r)}function ba(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||vn,Wn=Ee.current,K(Ee,e),K(Me,Me.current),!0}function xf(e,t,n){var r=e.stateNode;if(!r)throw Error(j(169));n?(e=bh(e,t,Wn),r.__reactInternalMemoizedMergedChildContext=e,X(Me),X(Ee),K(Ee,e)):X(Me),K(Me,n)}var Mt=null,ts=!1,tl=!1;function Eh(e){Mt===null?Mt=[e]:Mt.push(e)}function fv(e){ts=!0,Eh(e)}function bn(){if(!tl&&Mt!==null){tl=!0;var e=0,t=H;try{var n=Mt;for(H=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Mt=null,ts=!1}catch(i){throw Mt!==null&&(Mt=Mt.slice(e+1)),G0(fc,bn),i}finally{H=t,tl=!1}}return null}var sr=[],lr=0,Ea=null,Ca=0,Xe=[],Ze=0,Un=null,At=1,Dt="";function Tn(e,t){sr[lr++]=Ca,sr[lr++]=Ea,Ea=e,Ca=t}function Ch(e,t,n){Xe[Ze++]=At,Xe[Ze++]=Dt,Xe[Ze++]=Un,Un=e;var r=At;e=Dt;var i=32-ft(r)-1;r&=~(1<<i),n+=1;var o=32-ft(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,At=1<<32-ft(t)+i|n<<i|r,Dt=o+e}else At=1<<o|n<<i|r,Dt=e}function Sc(e){e.return!==null&&(Tn(e,1),Ch(e,1,0))}function kc(e){for(;e===Ea;)Ea=sr[--lr],sr[lr]=null,Ca=sr[--lr],sr[lr]=null;for(;e===Un;)Un=Xe[--Ze],Xe[Ze]=null,Dt=Xe[--Ze],Xe[Ze]=null,At=Xe[--Ze],Xe[Ze]=null}var Ve=null,We=null,Z=!1,ct=null;function Ph(e,t){var n=Je(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function wf(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ve=e,We=dn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ve=e,We=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Un!==null?{id:At,overflow:Dt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Je(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ve=e,We=null,!0):!1;default:return!1}}function ou(e){return(e.mode&1)!==0&&(e.flags&128)===0}function au(e){if(Z){var t=We;if(t){var n=t;if(!wf(e,t)){if(ou(e))throw Error(j(418));t=dn(n.nextSibling);var r=Ve;t&&wf(e,t)?Ph(r,n):(e.flags=e.flags&-4097|2,Z=!1,Ve=e)}}else{if(ou(e))throw Error(j(418));e.flags=e.flags&-4097|2,Z=!1,Ve=e}}}function Sf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ve=e}function ko(e){if(e!==Ve)return!1;if(!Z)return Sf(e),Z=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!tu(e.type,e.memoizedProps)),t&&(t=We)){if(ou(e))throw jh(),Error(j(418));for(;t;)Ph(e,t),t=dn(t.nextSibling)}if(Sf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){We=dn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}We=null}}else We=Ve?dn(e.stateNode.nextSibling):null;return!0}function jh(){for(var e=We;e;)e=dn(e.nextSibling)}function kr(){We=Ve=null,Z=!1}function bc(e){ct===null?ct=[e]:ct.push(e)}var pv=Qt.ReactCurrentBatchConfig;function lt(e,t){if(e&&e.defaultProps){t=te({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Pa=kn(null),ja=null,ur=null,Ec=null;function Cc(){Ec=ur=ja=null}function Pc(e){var t=Pa.current;X(Pa),e._currentValue=t}function su(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function yr(e,t){ja=e,Ec=ur=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(_e=!0),e.firstContext=null)}function nt(e){var t=e._currentValue;if(Ec!==e)if(e={context:e,memoizedValue:t,next:null},ur===null){if(ja===null)throw Error(j(308));ur=e,ja.dependencies={lanes:0,firstContext:e}}else ur=ur.next=e;return t}var Dn=null;function jc(e){Dn===null?Dn=[e]:Dn.push(e)}function Oh(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,jc(t)):(n.next=i.next,i.next=n),t.interleaved=n,Bt(e,r)}function Bt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var en=!1;function Oc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Nh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function $t(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function fn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,z&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Bt(e,n)}return i=r.interleaved,i===null?(t.next=t,jc(r)):(t.next=i.next,i.next=t),r.interleaved=t,Bt(e,n)}function Io(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,pc(e,n)}}function kf(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Oa(e,t,n,r){var i=e.updateQueue;en=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,u=l.next;l.next=null,a===null?o=u:a.next=u,a=l;var f=e.alternate;f!==null&&(f=f.updateQueue,s=f.lastBaseUpdate,s!==a&&(s===null?f.firstBaseUpdate=u:s.next=u,f.lastBaseUpdate=l))}if(o!==null){var d=i.baseState;a=0,f=u=l=null,s=o;do{var g=s.lane,x=s.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:x,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var v=e,y=s;switch(g=t,x=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){d=v.call(x,d,g);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,g=typeof v=="function"?v.call(x,d,g):v,g==null)break e;d=te({},d,g);break e;case 2:en=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[s]:g.push(s))}else x={eventTime:x,lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},f===null?(u=f=x,l=d):f=f.next=x,a|=g;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;g=s,s=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(1);if(f===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=f,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Hn|=a,e.lanes=a,e.memoizedState=d}}function bf(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(j(191,i));i.call(r)}}}var Th=new O0.Component().refs;function lu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:te({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ns={isMounted:function(e){return(e=e._reactInternals)?qn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=je(),i=hn(e),o=$t(r,i);o.payload=t,n!=null&&(o.callback=n),t=fn(e,o,i),t!==null&&(pt(t,e,i,r),Io(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=je(),i=hn(e),o=$t(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=fn(e,o,i),t!==null&&(pt(t,e,i,r),Io(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=je(),r=hn(e),i=$t(n,r);i.tag=2,t!=null&&(i.callback=t),t=fn(e,i,r),t!==null&&(pt(t,e,r,n),Io(t,e,r))}};function Ef(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!Ri(n,r)||!Ri(i,o):!0}function _h(e,t,n){var r=!1,i=vn,o=t.contextType;return typeof o=="object"&&o!==null?o=nt(o):(i=Ae(t)?Wn:Ee.current,r=t.contextTypes,o=(r=r!=null)?Sr(e,i):vn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ns,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Cf(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ns.enqueueReplaceState(t,t.state,null)}function uu(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Th,Oc(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=nt(o):(o=Ae(t)?Wn:Ee.current,i.context=Sr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(lu(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ns.enqueueReplaceState(i,i.state,null),Oa(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Jr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var s=i.refs;s===Th&&(s=i.refs={}),a===null?delete s[o]:s[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,e))}return e}function bo(e,t){throw e=Object.prototype.toString.call(t),Error(j(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Pf(e){var t=e._init;return t(e._payload)}function Rh(e){function t(h,p){if(e){var m=h.deletions;m===null?(h.deletions=[p],h.flags|=16):m.push(p)}}function n(h,p){if(!e)return null;for(;p!==null;)t(h,p),p=p.sibling;return null}function r(h,p){for(h=new Map;p!==null;)p.key!==null?h.set(p.key,p):h.set(p.index,p),p=p.sibling;return h}function i(h,p){return h=mn(h,p),h.index=0,h.sibling=null,h}function o(h,p,m){return h.index=m,e?(m=h.alternate,m!==null?(m=m.index,m<p?(h.flags|=2,p):m):(h.flags|=2,p)):(h.flags|=1048576,p)}function a(h){return e&&h.alternate===null&&(h.flags|=2),h}function s(h,p,m,w){return p===null||p.tag!==6?(p=ll(m,h.mode,w),p.return=h,p):(p=i(p,m),p.return=h,p)}function l(h,p,m,w){var b=m.type;return b===tr?f(h,p,m.props.children,w,m.key):p!==null&&(p.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Jt&&Pf(b)===p.type)?(w=i(p,m.props),w.ref=Jr(h,p,m),w.return=h,w):(w=Vo(m.type,m.key,m.props,null,h.mode,w),w.ref=Jr(h,p,m),w.return=h,w)}function u(h,p,m,w){return p===null||p.tag!==4||p.stateNode.containerInfo!==m.containerInfo||p.stateNode.implementation!==m.implementation?(p=ul(m,h.mode,w),p.return=h,p):(p=i(p,m.children||[]),p.return=h,p)}function f(h,p,m,w,b){return p===null||p.tag!==7?(p=Fn(m,h.mode,w,b),p.return=h,p):(p=i(p,m),p.return=h,p)}function d(h,p,m){if(typeof p=="string"&&p!==""||typeof p=="number")return p=ll(""+p,h.mode,m),p.return=h,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case fo:return m=Vo(p.type,p.key,p.props,null,h.mode,m),m.ref=Jr(h,null,p),m.return=h,m;case er:return p=ul(p,h.mode,m),p.return=h,p;case Jt:var w=p._init;return d(h,w(p._payload),m)}if(si(p)||Kr(p))return p=Fn(p,h.mode,m,null),p.return=h,p;bo(h,p)}return null}function g(h,p,m,w){var b=p!==null?p.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return b!==null?null:s(h,p,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case fo:return m.key===b?l(h,p,m,w):null;case er:return m.key===b?u(h,p,m,w):null;case Jt:return b=m._init,g(h,p,b(m._payload),w)}if(si(m)||Kr(m))return b!==null?null:f(h,p,m,w,null);bo(h,m)}return null}function x(h,p,m,w,b){if(typeof w=="string"&&w!==""||typeof w=="number")return h=h.get(m)||null,s(p,h,""+w,b);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case fo:return h=h.get(w.key===null?m:w.key)||null,l(p,h,w,b);case er:return h=h.get(w.key===null?m:w.key)||null,u(p,h,w,b);case Jt:var E=w._init;return x(h,p,m,E(w._payload),b)}if(si(w)||Kr(w))return h=h.get(m)||null,f(p,h,w,b,null);bo(p,w)}return null}function v(h,p,m,w){for(var b=null,E=null,C=p,O=p=0,A=null;C!==null&&O<m.length;O++){C.index>O?(A=C,C=null):A=C.sibling;var D=g(h,C,m[O],w);if(D===null){C===null&&(C=A);break}e&&C&&D.alternate===null&&t(h,C),p=o(D,p,O),E===null?b=D:E.sibling=D,E=D,C=A}if(O===m.length)return n(h,C),Z&&Tn(h,O),b;if(C===null){for(;O<m.length;O++)C=d(h,m[O],w),C!==null&&(p=o(C,p,O),E===null?b=C:E.sibling=C,E=C);return Z&&Tn(h,O),b}for(C=r(h,C);O<m.length;O++)A=x(C,h,O,m[O],w),A!==null&&(e&&A.alternate!==null&&C.delete(A.key===null?O:A.key),p=o(A,p,O),E===null?b=A:E.sibling=A,E=A);return e&&C.forEach(function(Ce){return t(h,Ce)}),Z&&Tn(h,O),b}function y(h,p,m,w){var b=Kr(m);if(typeof b!="function")throw Error(j(150));if(m=b.call(m),m==null)throw Error(j(151));for(var E=b=null,C=p,O=p=0,A=null,D=m.next();C!==null&&!D.done;O++,D=m.next()){C.index>O?(A=C,C=null):A=C.sibling;var Ce=g(h,C,D.value,w);if(Ce===null){C===null&&(C=A);break}e&&C&&Ce.alternate===null&&t(h,C),p=o(Ce,p,O),E===null?b=Ce:E.sibling=Ce,E=Ce,C=A}if(D.done)return n(h,C),Z&&Tn(h,O),b;if(C===null){for(;!D.done;O++,D=m.next())D=d(h,D.value,w),D!==null&&(p=o(D,p,O),E===null?b=D:E.sibling=D,E=D);return Z&&Tn(h,O),b}for(C=r(h,C);!D.done;O++,D=m.next())D=x(C,h,O,D.value,w),D!==null&&(e&&D.alternate!==null&&C.delete(D.key===null?O:D.key),p=o(D,p,O),E===null?b=D:E.sibling=D,E=D);return e&&C.forEach(function(En){return t(h,En)}),Z&&Tn(h,O),b}function S(h,p,m,w){if(typeof m=="object"&&m!==null&&m.type===tr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case fo:e:{for(var b=m.key,E=p;E!==null;){if(E.key===b){if(b=m.type,b===tr){if(E.tag===7){n(h,E.sibling),p=i(E,m.props.children),p.return=h,h=p;break e}}else if(E.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Jt&&Pf(b)===E.type){n(h,E.sibling),p=i(E,m.props),p.ref=Jr(h,E,m),p.return=h,h=p;break e}n(h,E);break}else t(h,E);E=E.sibling}m.type===tr?(p=Fn(m.props.children,h.mode,w,m.key),p.return=h,h=p):(w=Vo(m.type,m.key,m.props,null,h.mode,w),w.ref=Jr(h,p,m),w.return=h,h=w)}return a(h);case er:e:{for(E=m.key;p!==null;){if(p.key===E)if(p.tag===4&&p.stateNode.containerInfo===m.containerInfo&&p.stateNode.implementation===m.implementation){n(h,p.sibling),p=i(p,m.children||[]),p.return=h,h=p;break e}else{n(h,p);break}else t(h,p);p=p.sibling}p=ul(m,h.mode,w),p.return=h,h=p}return a(h);case Jt:return E=m._init,S(h,p,E(m._payload),w)}if(si(m))return v(h,p,m,w);if(Kr(m))return y(h,p,m,w);bo(h,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,p!==null&&p.tag===6?(n(h,p.sibling),p=i(p,m),p.return=h,h=p):(n(h,p),p=ll(m,h.mode,w),p.return=h,h=p),a(h)):n(h,p)}return S}var br=Rh(!0),Mh=Rh(!1),to={},Ct=kn(to),$i=kn(to),Li=kn(to);function $n(e){if(e===to)throw Error(j(174));return e}function Nc(e,t){switch(K(Li,t),K($i,e),K(Ct,to),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Bl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Bl(t,e)}X(Ct),K(Ct,t)}function Er(){X(Ct),X($i),X(Li)}function Ah(e){$n(Li.current);var t=$n(Ct.current),n=Bl(t,e.type);t!==n&&(K($i,e),K(Ct,n))}function Tc(e){$i.current===e&&(X(Ct),X($i))}var J=kn(0);function Na(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var nl=[];function _c(){for(var e=0;e<nl.length;e++)nl[e]._workInProgressVersionPrimary=null;nl.length=0}var Fo=Qt.ReactCurrentDispatcher,rl=Qt.ReactCurrentBatchConfig,Vn=0,ee=null,ue=null,fe=null,Ta=!1,yi=!1,Ii=0,hv=0;function we(){throw Error(j(321))}function Rc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!mt(e[n],t[n]))return!1;return!0}function Mc(e,t,n,r,i,o){if(Vn=o,ee=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Fo.current=e===null||e.memoizedState===null?vv:xv,e=n(r,i),yi){o=0;do{if(yi=!1,Ii=0,25<=o)throw Error(j(301));o+=1,fe=ue=null,t.updateQueue=null,Fo.current=wv,e=n(r,i)}while(yi)}if(Fo.current=_a,t=ue!==null&&ue.next!==null,Vn=0,fe=ue=ee=null,Ta=!1,t)throw Error(j(300));return e}function Ac(){var e=Ii!==0;return Ii=0,e}function vt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fe===null?ee.memoizedState=fe=e:fe=fe.next=e,fe}function rt(){if(ue===null){var e=ee.alternate;e=e!==null?e.memoizedState:null}else e=ue.next;var t=fe===null?ee.memoizedState:fe.next;if(t!==null)fe=t,ue=e;else{if(e===null)throw Error(j(310));ue=e,e={memoizedState:ue.memoizedState,baseState:ue.baseState,baseQueue:ue.baseQueue,queue:ue.queue,next:null},fe===null?ee.memoizedState=fe=e:fe=fe.next=e}return fe}function Fi(e,t){return typeof t=="function"?t(e):t}function il(e){var t=rt(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=ue,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=a=null,l=null,u=o;do{var f=u.lane;if((Vn&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=d,a=r):l=l.next=d,ee.lanes|=f,Hn|=f}u=u.next}while(u!==null&&u!==o);l===null?a=r:l.next=s,mt(r,t.memoizedState)||(_e=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ee.lanes|=o,Hn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ol(e){var t=rt(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);mt(o,t.memoizedState)||(_e=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Dh(){}function $h(e,t){var n=ee,r=rt(),i=t(),o=!mt(r.memoizedState,i);if(o&&(r.memoizedState=i,_e=!0),r=r.queue,Dc(Fh.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||fe!==null&&fe.memoizedState.tag&1){if(n.flags|=2048,zi(9,Ih.bind(null,n,r,i,t),void 0,null),he===null)throw Error(j(349));Vn&30||Lh(n,t,i)}return i}function Lh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ee.updateQueue,t===null?(t={lastEffect:null,stores:null},ee.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ih(e,t,n,r){t.value=n,t.getSnapshot=r,zh(t)&&Bh(e)}function Fh(e,t,n){return n(function(){zh(t)&&Bh(e)})}function zh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!mt(e,n)}catch{return!0}}function Bh(e){var t=Bt(e,1);t!==null&&pt(t,e,1,-1)}function jf(e){var t=vt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:e},t.queue=e,e=e.dispatch=yv.bind(null,ee,e),[t.memoizedState,e]}function zi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ee.updateQueue,t===null?(t={lastEffect:null,stores:null},ee.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Wh(){return rt().memoizedState}function zo(e,t,n,r){var i=vt();ee.flags|=e,i.memoizedState=zi(1|t,n,void 0,r===void 0?null:r)}function rs(e,t,n,r){var i=rt();r=r===void 0?null:r;var o=void 0;if(ue!==null){var a=ue.memoizedState;if(o=a.destroy,r!==null&&Rc(r,a.deps)){i.memoizedState=zi(t,n,o,r);return}}ee.flags|=e,i.memoizedState=zi(1|t,n,o,r)}function Of(e,t){return zo(8390656,8,e,t)}function Dc(e,t){return rs(2048,8,e,t)}function Uh(e,t){return rs(4,2,e,t)}function Vh(e,t){return rs(4,4,e,t)}function Hh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Qh(e,t,n){return n=n!=null?n.concat([e]):null,rs(4,4,Hh.bind(null,t,e),n)}function $c(){}function Yh(e,t){var n=rt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Rc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Kh(e,t){var n=rt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Rc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Gh(e,t,n){return Vn&21?(mt(n,t)||(n=Z0(),ee.lanes|=n,Hn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,_e=!0),e.memoizedState=n)}function mv(e,t){var n=H;H=n!==0&&4>n?n:4,e(!0);var r=rl.transition;rl.transition={};try{e(!1),t()}finally{H=n,rl.transition=r}}function qh(){return rt().memoizedState}function gv(e,t,n){var r=hn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Xh(e))Zh(t,n);else if(n=Oh(e,t,n,r),n!==null){var i=je();pt(n,e,r,i),Jh(n,t,r)}}function yv(e,t,n){var r=hn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Xh(e))Zh(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,s=o(a,n);if(i.hasEagerState=!0,i.eagerState=s,mt(s,a)){var l=t.interleaved;l===null?(i.next=i,jc(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=Oh(e,t,i,r),n!==null&&(i=je(),pt(n,e,r,i),Jh(n,t,r))}}function Xh(e){var t=e.alternate;return e===ee||t!==null&&t===ee}function Zh(e,t){yi=Ta=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Jh(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,pc(e,n)}}var _a={readContext:nt,useCallback:we,useContext:we,useEffect:we,useImperativeHandle:we,useInsertionEffect:we,useLayoutEffect:we,useMemo:we,useReducer:we,useRef:we,useState:we,useDebugValue:we,useDeferredValue:we,useTransition:we,useMutableSource:we,useSyncExternalStore:we,useId:we,unstable_isNewReconciler:!1},vv={readContext:nt,useCallback:function(e,t){return vt().memoizedState=[e,t===void 0?null:t],e},useContext:nt,useEffect:Of,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,zo(4194308,4,Hh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return zo(4194308,4,e,t)},useInsertionEffect:function(e,t){return zo(4,2,e,t)},useMemo:function(e,t){var n=vt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=vt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=gv.bind(null,ee,e),[r.memoizedState,e]},useRef:function(e){var t=vt();return e={current:e},t.memoizedState=e},useState:jf,useDebugValue:$c,useDeferredValue:function(e){return vt().memoizedState=e},useTransition:function(){var e=jf(!1),t=e[0];return e=mv.bind(null,e[1]),vt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ee,i=vt();if(Z){if(n===void 0)throw Error(j(407));n=n()}else{if(n=t(),he===null)throw Error(j(349));Vn&30||Lh(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Of(Fh.bind(null,r,o,e),[e]),r.flags|=2048,zi(9,Ih.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=vt(),t=he.identifierPrefix;if(Z){var n=Dt,r=At;n=(r&~(1<<32-ft(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ii++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=hv++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},xv={readContext:nt,useCallback:Yh,useContext:nt,useEffect:Dc,useImperativeHandle:Qh,useInsertionEffect:Uh,useLayoutEffect:Vh,useMemo:Kh,useReducer:il,useRef:Wh,useState:function(){return il(Fi)},useDebugValue:$c,useDeferredValue:function(e){var t=rt();return Gh(t,ue.memoizedState,e)},useTransition:function(){var e=il(Fi)[0],t=rt().memoizedState;return[e,t]},useMutableSource:Dh,useSyncExternalStore:$h,useId:qh,unstable_isNewReconciler:!1},wv={readContext:nt,useCallback:Yh,useContext:nt,useEffect:Dc,useImperativeHandle:Qh,useInsertionEffect:Uh,useLayoutEffect:Vh,useMemo:Kh,useReducer:ol,useRef:Wh,useState:function(){return ol(Fi)},useDebugValue:$c,useDeferredValue:function(e){var t=rt();return ue===null?t.memoizedState=e:Gh(t,ue.memoizedState,e)},useTransition:function(){var e=ol(Fi)[0],t=rt().memoizedState;return[e,t]},useMutableSource:Dh,useSyncExternalStore:$h,useId:qh,unstable_isNewReconciler:!1};function Cr(e,t){try{var n="",r=t;do n+=Ky(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function al(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function cu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Sv=typeof WeakMap=="function"?WeakMap:Map;function e1(e,t,n){n=$t(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ma||(Ma=!0,wu=r),cu(e,t)},n}function t1(e,t,n){n=$t(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){cu(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){cu(e,t),typeof r!="function"&&(pn===null?pn=new Set([this]):pn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Nf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Sv;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Dv.bind(null,e,t,n),t.then(e,e))}function Tf(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function _f(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=$t(-1,1),t.tag=2,fn(n,t,1))),n.lanes|=1),e)}var kv=Qt.ReactCurrentOwner,_e=!1;function Pe(e,t,n,r){t.child=e===null?Mh(t,null,n,r):br(t,e.child,n,r)}function Rf(e,t,n,r,i){n=n.render;var o=t.ref;return yr(t,i),r=Mc(e,t,n,r,o,i),n=Ac(),e!==null&&!_e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Wt(e,t,i)):(Z&&n&&Sc(t),t.flags|=1,Pe(e,t,r,i),t.child)}function Mf(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Vc(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,n1(e,t,o,r,i)):(e=Vo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:Ri,n(a,r)&&e.ref===t.ref)return Wt(e,t,i)}return t.flags|=1,e=mn(o,r),e.ref=t.ref,e.return=t,t.child=e}function n1(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Ri(o,r)&&e.ref===t.ref)if(_e=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(_e=!0);else return t.lanes=e.lanes,Wt(e,t,i)}return du(e,t,n,r,i)}function r1(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},K(dr,Be),Be|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,K(dr,Be),Be|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,K(dr,Be),Be|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,K(dr,Be),Be|=r;return Pe(e,t,i,n),t.child}function i1(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function du(e,t,n,r,i){var o=Ae(n)?Wn:Ee.current;return o=Sr(t,o),yr(t,i),n=Mc(e,t,n,r,o,i),r=Ac(),e!==null&&!_e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Wt(e,t,i)):(Z&&r&&Sc(t),t.flags|=1,Pe(e,t,n,i),t.child)}function Af(e,t,n,r,i){if(Ae(n)){var o=!0;ba(t)}else o=!1;if(yr(t,i),t.stateNode===null)Bo(e,t),_h(t,n,r),uu(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=nt(u):(u=Ae(n)?Wn:Ee.current,u=Sr(t,u));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||l!==u)&&Cf(t,a,r,u),en=!1;var g=t.memoizedState;a.state=g,Oa(t,r,a,i),l=t.memoizedState,s!==r||g!==l||Me.current||en?(typeof f=="function"&&(lu(t,n,f,r),l=t.memoizedState),(s=en||Ef(t,n,s,r,g,l,u))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=u,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Nh(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:lt(t.type,s),a.props=u,d=t.pendingProps,g=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=nt(l):(l=Ae(n)?Wn:Ee.current,l=Sr(t,l));var x=n.getDerivedStateFromProps;(f=typeof x=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==d||g!==l)&&Cf(t,a,r,l),en=!1,g=t.memoizedState,a.state=g,Oa(t,r,a,i);var v=t.memoizedState;s!==d||g!==v||Me.current||en?(typeof x=="function"&&(lu(t,n,x,r),v=t.memoizedState),(u=en||Ef(t,n,u,r,g,v,l)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,v,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,v,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),a.props=r,a.state=v,a.context=l,r=u):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return fu(e,t,n,r,o,i)}function fu(e,t,n,r,i,o){i1(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&xf(t,n,!1),Wt(e,t,o);r=t.stateNode,kv.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=br(t,e.child,null,o),t.child=br(t,null,s,o)):Pe(e,t,s,o),t.memoizedState=r.state,i&&xf(t,n,!0),t.child}function o1(e){var t=e.stateNode;t.pendingContext?vf(e,t.pendingContext,t.pendingContext!==t.context):t.context&&vf(e,t.context,!1),Nc(e,t.containerInfo)}function Df(e,t,n,r,i){return kr(),bc(i),t.flags|=256,Pe(e,t,n,r),t.child}var pu={dehydrated:null,treeContext:null,retryLane:0};function hu(e){return{baseLanes:e,cachePool:null,transitions:null}}function a1(e,t,n){var r=t.pendingProps,i=J.current,o=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),K(J,i&1),e===null)return au(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=as(a,r,0,null),e=Fn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=hu(n),t.memoizedState=pu,e):Lc(t,a));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return bv(e,t,a,r,s,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,s=i.sibling;var l={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=mn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=mn(s,o):(o=Fn(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?hu(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=pu,r}return o=e.child,e=o.sibling,r=mn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Lc(e,t){return t=as({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Eo(e,t,n,r){return r!==null&&bc(r),br(t,e.child,null,n),e=Lc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function bv(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=al(Error(j(422))),Eo(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=as({mode:"visible",children:r.children},i,0,null),o=Fn(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&br(t,e.child,null,a),t.child.memoizedState=hu(a),t.memoizedState=pu,o);if(!(t.mode&1))return Eo(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(j(419)),r=al(o,r,void 0),Eo(e,t,a,r)}if(s=(a&e.childLanes)!==0,_e||s){if(r=he,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Bt(e,i),pt(r,e,i,-1))}return Uc(),r=al(Error(j(421))),Eo(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=$v.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,We=dn(i.nextSibling),Ve=t,Z=!0,ct=null,e!==null&&(Xe[Ze++]=At,Xe[Ze++]=Dt,Xe[Ze++]=Un,At=e.id,Dt=e.overflow,Un=t),t=Lc(t,r.children),t.flags|=4096,t)}function $f(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),su(e.return,t,n)}function sl(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function s1(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Pe(e,t,r.children,n),r=J.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&$f(e,n,t);else if(e.tag===19)$f(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(K(J,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Na(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),sl(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Na(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}sl(t,!0,n,null,o);break;case"together":sl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Bo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Wt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Hn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(j(153));if(t.child!==null){for(e=t.child,n=mn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=mn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ev(e,t,n){switch(t.tag){case 3:o1(t),kr();break;case 5:Ah(t);break;case 1:Ae(t.type)&&ba(t);break;case 4:Nc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;K(Pa,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(K(J,J.current&1),t.flags|=128,null):n&t.child.childLanes?a1(e,t,n):(K(J,J.current&1),e=Wt(e,t,n),e!==null?e.sibling:null);K(J,J.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return s1(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),K(J,J.current),r)break;return null;case 22:case 23:return t.lanes=0,r1(e,t,n)}return Wt(e,t,n)}var l1,mu,u1,c1;l1=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};mu=function(){};u1=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,$n(Ct.current);var o=null;switch(n){case"input":i=Ll(e,i),r=Ll(e,r),o=[];break;case"select":i=te({},i,{value:void 0}),r=te({},r,{value:void 0}),o=[];break;case"textarea":i=zl(e,i),r=zl(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Sa)}Wl(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ci.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(s=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(a in s)!s.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&s[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ci.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&G("scroll",e),o||s===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};c1=function(e,t,n,r){n!==r&&(t.flags|=4)};function ei(e,t){if(!Z)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Se(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Cv(e,t,n){var r=t.pendingProps;switch(kc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Se(t),null;case 1:return Ae(t.type)&&ka(),Se(t),null;case 3:return r=t.stateNode,Er(),X(Me),X(Ee),_c(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ko(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ct!==null&&(bu(ct),ct=null))),mu(e,t),Se(t),null;case 5:Tc(t);var i=$n(Li.current);if(n=t.type,e!==null&&t.stateNode!=null)u1(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(j(166));return Se(t),null}if(e=$n(Ct.current),ko(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[kt]=t,r[Di]=o,e=(t.mode&1)!==0,n){case"dialog":G("cancel",r),G("close",r);break;case"iframe":case"object":case"embed":G("load",r);break;case"video":case"audio":for(i=0;i<ui.length;i++)G(ui[i],r);break;case"source":G("error",r);break;case"img":case"image":case"link":G("error",r),G("load",r);break;case"details":G("toggle",r);break;case"input":Vd(r,o),G("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},G("invalid",r);break;case"textarea":Qd(r,o),G("invalid",r)}Wl(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var s=o[a];a==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&So(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&So(r.textContent,s,e),i=["children",""+s]):Ci.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&G("scroll",r)}switch(n){case"input":po(r),Hd(r,o,!0);break;case"textarea":po(r),Yd(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Sa)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=L0(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[kt]=t,e[Di]=r,l1(e,t,!1,!1),t.stateNode=e;e:{switch(a=Ul(n,r),n){case"dialog":G("cancel",e),G("close",e),i=r;break;case"iframe":case"object":case"embed":G("load",e),i=r;break;case"video":case"audio":for(i=0;i<ui.length;i++)G(ui[i],e);i=r;break;case"source":G("error",e),i=r;break;case"img":case"image":case"link":G("error",e),G("load",e),i=r;break;case"details":G("toggle",e),i=r;break;case"input":Vd(e,r),i=Ll(e,r),G("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=te({},r,{value:void 0}),G("invalid",e);break;case"textarea":Qd(e,r),i=zl(e,r),G("invalid",e);break;default:i=r}Wl(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="style"?z0(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&I0(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Pi(e,l):typeof l=="number"&&Pi(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ci.hasOwnProperty(o)?l!=null&&o==="onScroll"&&G("scroll",e):l!=null&&sc(e,o,l,a))}switch(n){case"input":po(e),Hd(e,r,!1);break;case"textarea":po(e),Yd(e);break;case"option":r.value!=null&&e.setAttribute("value",""+yn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?pr(e,!!r.multiple,o,!1):r.defaultValue!=null&&pr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Sa)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Se(t),null;case 6:if(e&&t.stateNode!=null)c1(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(j(166));if(n=$n(Li.current),$n(Ct.current),ko(t)){if(r=t.stateNode,n=t.memoizedProps,r[kt]=t,(o=r.nodeValue!==n)&&(e=Ve,e!==null))switch(e.tag){case 3:So(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&So(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[kt]=t,t.stateNode=r}return Se(t),null;case 13:if(X(J),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Z&&We!==null&&t.mode&1&&!(t.flags&128))jh(),kr(),t.flags|=98560,o=!1;else if(o=ko(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(j(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(j(317));o[kt]=t}else kr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Se(t),o=!1}else ct!==null&&(bu(ct),ct=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||J.current&1?ce===0&&(ce=3):Uc())),t.updateQueue!==null&&(t.flags|=4),Se(t),null);case 4:return Er(),mu(e,t),e===null&&Mi(t.stateNode.containerInfo),Se(t),null;case 10:return Pc(t.type._context),Se(t),null;case 17:return Ae(t.type)&&ka(),Se(t),null;case 19:if(X(J),o=t.memoizedState,o===null)return Se(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)ei(o,!1);else{if(ce!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Na(e),a!==null){for(t.flags|=128,ei(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return K(J,J.current&1|2),t.child}e=e.sibling}o.tail!==null&&re()>Pr&&(t.flags|=128,r=!0,ei(o,!1),t.lanes=4194304)}else{if(!r)if(e=Na(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ei(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!Z)return Se(t),null}else 2*re()-o.renderingStartTime>Pr&&n!==1073741824&&(t.flags|=128,r=!0,ei(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=re(),t.sibling=null,n=J.current,K(J,r?n&1|2:n&1),t):(Se(t),null);case 22:case 23:return Wc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Be&1073741824&&(Se(t),t.subtreeFlags&6&&(t.flags|=8192)):Se(t),null;case 24:return null;case 25:return null}throw Error(j(156,t.tag))}function Pv(e,t){switch(kc(t),t.tag){case 1:return Ae(t.type)&&ka(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Er(),X(Me),X(Ee),_c(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Tc(t),null;case 13:if(X(J),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(j(340));kr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return X(J),null;case 4:return Er(),null;case 10:return Pc(t.type._context),null;case 22:case 23:return Wc(),null;case 24:return null;default:return null}}var Co=!1,be=!1,jv=typeof WeakSet=="function"?WeakSet:Set,T=null;function cr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ne(e,t,r)}else n.current=null}function gu(e,t,n){try{n()}catch(r){ne(e,t,r)}}var Lf=!1;function Ov(e,t){if(Jl=va,e=hh(),wc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,s=-1,l=-1,u=0,f=0,d=e,g=null;t:for(;;){for(var x;d!==n||i!==0&&d.nodeType!==3||(s=a+i),d!==o||r!==0&&d.nodeType!==3||(l=a+r),d.nodeType===3&&(a+=d.nodeValue.length),(x=d.firstChild)!==null;)g=d,d=x;for(;;){if(d===e)break t;if(g===n&&++u===i&&(s=a),g===o&&++f===r&&(l=a),(x=d.nextSibling)!==null)break;d=g,g=d.parentNode}d=x}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(eu={focusedElem:e,selectionRange:n},va=!1,T=t;T!==null;)if(t=T,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,T=e;else for(;T!==null;){t=T;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,S=v.memoizedState,h=t.stateNode,p=h.getSnapshotBeforeUpdate(t.elementType===t.type?y:lt(t.type,y),S);h.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(w){ne(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,T=e;break}T=t.return}return v=Lf,Lf=!1,v}function vi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&gu(t,n,o)}i=i.next}while(i!==r)}}function is(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function yu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function d1(e){var t=e.alternate;t!==null&&(e.alternate=null,d1(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[kt],delete t[Di],delete t[ru],delete t[cv],delete t[dv])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function f1(e){return e.tag===5||e.tag===3||e.tag===4}function If(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||f1(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function vu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Sa));else if(r!==4&&(e=e.child,e!==null))for(vu(e,t,n),e=e.sibling;e!==null;)vu(e,t,n),e=e.sibling}function xu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(xu(e,t,n),e=e.sibling;e!==null;)xu(e,t,n),e=e.sibling}var ge=null,ut=!1;function Gt(e,t,n){for(n=n.child;n!==null;)p1(e,t,n),n=n.sibling}function p1(e,t,n){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(qa,n)}catch{}switch(n.tag){case 5:be||cr(n,t);case 6:var r=ge,i=ut;ge=null,Gt(e,t,n),ge=r,ut=i,ge!==null&&(ut?(e=ge,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ge.removeChild(n.stateNode));break;case 18:ge!==null&&(ut?(e=ge,n=n.stateNode,e.nodeType===8?el(e.parentNode,n):e.nodeType===1&&el(e,n),Ti(e)):el(ge,n.stateNode));break;case 4:r=ge,i=ut,ge=n.stateNode.containerInfo,ut=!0,Gt(e,t,n),ge=r,ut=i;break;case 0:case 11:case 14:case 15:if(!be&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&gu(n,t,a),i=i.next}while(i!==r)}Gt(e,t,n);break;case 1:if(!be&&(cr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){ne(n,t,s)}Gt(e,t,n);break;case 21:Gt(e,t,n);break;case 22:n.mode&1?(be=(r=be)||n.memoizedState!==null,Gt(e,t,n),be=r):Gt(e,t,n);break;default:Gt(e,t,n)}}function Ff(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new jv),t.forEach(function(r){var i=Lv.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function at(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:ge=s.stateNode,ut=!1;break e;case 3:ge=s.stateNode.containerInfo,ut=!0;break e;case 4:ge=s.stateNode.containerInfo,ut=!0;break e}s=s.return}if(ge===null)throw Error(j(160));p1(o,a,i),ge=null,ut=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ne(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)h1(t,e),t=t.sibling}function h1(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(at(t,e),yt(e),r&4){try{vi(3,e,e.return),is(3,e)}catch(y){ne(e,e.return,y)}try{vi(5,e,e.return)}catch(y){ne(e,e.return,y)}}break;case 1:at(t,e),yt(e),r&512&&n!==null&&cr(n,n.return);break;case 5:if(at(t,e),yt(e),r&512&&n!==null&&cr(n,n.return),e.flags&32){var i=e.stateNode;try{Pi(i,"")}catch(y){ne(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&D0(i,o),Ul(s,a);var u=Ul(s,o);for(a=0;a<l.length;a+=2){var f=l[a],d=l[a+1];f==="style"?z0(i,d):f==="dangerouslySetInnerHTML"?I0(i,d):f==="children"?Pi(i,d):sc(i,f,d,u)}switch(s){case"input":Il(i,o);break;case"textarea":$0(i,o);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var x=o.value;x!=null?pr(i,!!o.multiple,x,!1):g!==!!o.multiple&&(o.defaultValue!=null?pr(i,!!o.multiple,o.defaultValue,!0):pr(i,!!o.multiple,o.multiple?[]:"",!1))}i[Di]=o}catch(y){ne(e,e.return,y)}}break;case 6:if(at(t,e),yt(e),r&4){if(e.stateNode===null)throw Error(j(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(y){ne(e,e.return,y)}}break;case 3:if(at(t,e),yt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ti(t.containerInfo)}catch(y){ne(e,e.return,y)}break;case 4:at(t,e),yt(e);break;case 13:at(t,e),yt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(zc=re())),r&4&&Ff(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(be=(u=be)||f,at(t,e),be=u):at(t,e),yt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(T=e,f=e.child;f!==null;){for(d=T=f;T!==null;){switch(g=T,x=g.child,g.tag){case 0:case 11:case 14:case 15:vi(4,g,g.return);break;case 1:cr(g,g.return);var v=g.stateNode;if(typeof v.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(y){ne(r,n,y)}}break;case 5:cr(g,g.return);break;case 22:if(g.memoizedState!==null){Bf(d);continue}}x!==null?(x.return=g,T=x):Bf(d)}f=f.sibling}e:for(f=null,d=e;;){if(d.tag===5){if(f===null){f=d;try{i=d.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=d.stateNode,l=d.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=F0("display",a))}catch(y){ne(e,e.return,y)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(y){ne(e,e.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:at(t,e),yt(e),r&4&&Ff(e);break;case 21:break;default:at(t,e),yt(e)}}function yt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(f1(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Pi(i,""),r.flags&=-33);var o=If(e);xu(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,s=If(e);vu(e,s,a);break;default:throw Error(j(161))}}catch(l){ne(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Nv(e,t,n){T=e,m1(e)}function m1(e,t,n){for(var r=(e.mode&1)!==0;T!==null;){var i=T,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||Co;if(!a){var s=i.alternate,l=s!==null&&s.memoizedState!==null||be;s=Co;var u=be;if(Co=a,(be=l)&&!u)for(T=i;T!==null;)a=T,l=a.child,a.tag===22&&a.memoizedState!==null?Wf(i):l!==null?(l.return=a,T=l):Wf(i);for(;o!==null;)T=o,m1(o),o=o.sibling;T=i,Co=s,be=u}zf(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,T=o):zf(e)}}function zf(e){for(;T!==null;){var t=T;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:be||is(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!be)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:lt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&bf(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}bf(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&Ti(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}be||t.flags&512&&yu(t)}catch(g){ne(t,t.return,g)}}if(t===e){T=null;break}if(n=t.sibling,n!==null){n.return=t.return,T=n;break}T=t.return}}function Bf(e){for(;T!==null;){var t=T;if(t===e){T=null;break}var n=t.sibling;if(n!==null){n.return=t.return,T=n;break}T=t.return}}function Wf(e){for(;T!==null;){var t=T;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{is(4,t)}catch(l){ne(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){ne(t,i,l)}}var o=t.return;try{yu(t)}catch(l){ne(t,o,l)}break;case 5:var a=t.return;try{yu(t)}catch(l){ne(t,a,l)}}}catch(l){ne(t,t.return,l)}if(t===e){T=null;break}var s=t.sibling;if(s!==null){s.return=t.return,T=s;break}T=t.return}}var Tv=Math.ceil,Ra=Qt.ReactCurrentDispatcher,Ic=Qt.ReactCurrentOwner,et=Qt.ReactCurrentBatchConfig,z=0,he=null,se=null,ve=0,Be=0,dr=kn(0),ce=0,Bi=null,Hn=0,os=0,Fc=0,xi=null,Te=null,zc=0,Pr=1/0,_t=null,Ma=!1,wu=null,pn=null,Po=!1,an=null,Aa=0,wi=0,Su=null,Wo=-1,Uo=0;function je(){return z&6?re():Wo!==-1?Wo:Wo=re()}function hn(e){return e.mode&1?z&2&&ve!==0?ve&-ve:pv.transition!==null?(Uo===0&&(Uo=Z0()),Uo):(e=H,e!==0||(e=window.event,e=e===void 0?16:oh(e.type)),e):1}function pt(e,t,n,r){if(50<wi)throw wi=0,Su=null,Error(j(185));Zi(e,n,r),(!(z&2)||e!==he)&&(e===he&&(!(z&2)&&(os|=n),ce===4&&nn(e,ve)),De(e,r),n===1&&z===0&&!(t.mode&1)&&(Pr=re()+500,ts&&bn()))}function De(e,t){var n=e.callbackNode;p2(e,t);var r=ya(e,e===he?ve:0);if(r===0)n!==null&&qd(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&qd(n),t===1)e.tag===0?fv(Uf.bind(null,e)):Eh(Uf.bind(null,e)),lv(function(){!(z&6)&&bn()}),n=null;else{switch(J0(r)){case 1:n=fc;break;case 4:n=q0;break;case 16:n=ga;break;case 536870912:n=X0;break;default:n=ga}n=b1(n,g1.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function g1(e,t){if(Wo=-1,Uo=0,z&6)throw Error(j(327));var n=e.callbackNode;if(vr()&&e.callbackNode!==n)return null;var r=ya(e,e===he?ve:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Da(e,r);else{t=r;var i=z;z|=2;var o=v1();(he!==e||ve!==t)&&(_t=null,Pr=re()+500,In(e,t));do try{Mv();break}catch(s){y1(e,s)}while(1);Cc(),Ra.current=o,z=i,se!==null?t=0:(he=null,ve=0,t=ce)}if(t!==0){if(t===2&&(i=Kl(e),i!==0&&(r=i,t=ku(e,i))),t===1)throw n=Bi,In(e,0),nn(e,r),De(e,re()),n;if(t===6)nn(e,r);else{if(i=e.current.alternate,!(r&30)&&!_v(i)&&(t=Da(e,r),t===2&&(o=Kl(e),o!==0&&(r=o,t=ku(e,o))),t===1))throw n=Bi,In(e,0),nn(e,r),De(e,re()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(j(345));case 2:_n(e,Te,_t);break;case 3:if(nn(e,r),(r&130023424)===r&&(t=zc+500-re(),10<t)){if(ya(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){je(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=nu(_n.bind(null,e,Te,_t),t);break}_n(e,Te,_t);break;case 4:if(nn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-ft(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Tv(r/1960))-r,10<r){e.timeoutHandle=nu(_n.bind(null,e,Te,_t),r);break}_n(e,Te,_t);break;case 5:_n(e,Te,_t);break;default:throw Error(j(329))}}}return De(e,re()),e.callbackNode===n?g1.bind(null,e):null}function ku(e,t){var n=xi;return e.current.memoizedState.isDehydrated&&(In(e,t).flags|=256),e=Da(e,t),e!==2&&(t=Te,Te=n,t!==null&&bu(t)),e}function bu(e){Te===null?Te=e:Te.push.apply(Te,e)}function _v(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!mt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function nn(e,t){for(t&=~Fc,t&=~os,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ft(t),r=1<<n;e[n]=-1,t&=~r}}function Uf(e){if(z&6)throw Error(j(327));vr();var t=ya(e,0);if(!(t&1))return De(e,re()),null;var n=Da(e,t);if(e.tag!==0&&n===2){var r=Kl(e);r!==0&&(t=r,n=ku(e,r))}if(n===1)throw n=Bi,In(e,0),nn(e,t),De(e,re()),n;if(n===6)throw Error(j(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,_n(e,Te,_t),De(e,re()),null}function Bc(e,t){var n=z;z|=1;try{return e(t)}finally{z=n,z===0&&(Pr=re()+500,ts&&bn())}}function Qn(e){an!==null&&an.tag===0&&!(z&6)&&vr();var t=z;z|=1;var n=et.transition,r=H;try{if(et.transition=null,H=1,e)return e()}finally{H=r,et.transition=n,z=t,!(z&6)&&bn()}}function Wc(){Be=dr.current,X(dr)}function In(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,sv(n)),se!==null)for(n=se.return;n!==null;){var r=n;switch(kc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ka();break;case 3:Er(),X(Me),X(Ee),_c();break;case 5:Tc(r);break;case 4:Er();break;case 13:X(J);break;case 19:X(J);break;case 10:Pc(r.type._context);break;case 22:case 23:Wc()}n=n.return}if(he=e,se=e=mn(e.current,null),ve=Be=t,ce=0,Bi=null,Fc=os=Hn=0,Te=xi=null,Dn!==null){for(t=0;t<Dn.length;t++)if(n=Dn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}Dn=null}return e}function y1(e,t){do{var n=se;try{if(Cc(),Fo.current=_a,Ta){for(var r=ee.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ta=!1}if(Vn=0,fe=ue=ee=null,yi=!1,Ii=0,Ic.current=null,n===null||n.return===null){ce=1,Bi=t,se=null;break}e:{var o=e,a=n.return,s=n,l=t;if(t=ve,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=s,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var x=Tf(a);if(x!==null){x.flags&=-257,_f(x,a,s,o,t),x.mode&1&&Nf(o,u,t),t=x,l=u;var v=t.updateQueue;if(v===null){var y=new Set;y.add(l),t.updateQueue=y}else v.add(l);break e}else{if(!(t&1)){Nf(o,u,t),Uc();break e}l=Error(j(426))}}else if(Z&&s.mode&1){var S=Tf(a);if(S!==null){!(S.flags&65536)&&(S.flags|=256),_f(S,a,s,o,t),bc(Cr(l,s));break e}}o=l=Cr(l,s),ce!==4&&(ce=2),xi===null?xi=[o]:xi.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var h=e1(o,l,t);kf(o,h);break e;case 1:s=l;var p=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof p.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(pn===null||!pn.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=t1(o,s,t);kf(o,w);break e}}o=o.return}while(o!==null)}w1(n)}catch(b){t=b,se===n&&n!==null&&(se=n=n.return);continue}break}while(1)}function v1(){var e=Ra.current;return Ra.current=_a,e===null?_a:e}function Uc(){(ce===0||ce===3||ce===2)&&(ce=4),he===null||!(Hn&268435455)&&!(os&268435455)||nn(he,ve)}function Da(e,t){var n=z;z|=2;var r=v1();(he!==e||ve!==t)&&(_t=null,In(e,t));do try{Rv();break}catch(i){y1(e,i)}while(1);if(Cc(),z=n,Ra.current=r,se!==null)throw Error(j(261));return he=null,ve=0,ce}function Rv(){for(;se!==null;)x1(se)}function Mv(){for(;se!==null&&!i2();)x1(se)}function x1(e){var t=k1(e.alternate,e,Be);e.memoizedProps=e.pendingProps,t===null?w1(e):se=t,Ic.current=null}function w1(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Pv(n,t),n!==null){n.flags&=32767,se=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ce=6,se=null;return}}else if(n=Cv(n,t,Be),n!==null){se=n;return}if(t=t.sibling,t!==null){se=t;return}se=t=e}while(t!==null);ce===0&&(ce=5)}function _n(e,t,n){var r=H,i=et.transition;try{et.transition=null,H=1,Av(e,t,n,r)}finally{et.transition=i,H=r}return null}function Av(e,t,n,r){do vr();while(an!==null);if(z&6)throw Error(j(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(j(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(h2(e,o),e===he&&(se=he=null,ve=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Po||(Po=!0,b1(ga,function(){return vr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=et.transition,et.transition=null;var a=H;H=1;var s=z;z|=4,Ic.current=null,Ov(e,n),h1(n,e),ev(eu),va=!!Jl,eu=Jl=null,e.current=n,Nv(n),o2(),z=s,H=a,et.transition=o}else e.current=n;if(Po&&(Po=!1,an=e,Aa=i),o=e.pendingLanes,o===0&&(pn=null),l2(n.stateNode),De(e,re()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ma)throw Ma=!1,e=wu,wu=null,e;return Aa&1&&e.tag!==0&&vr(),o=e.pendingLanes,o&1?e===Su?wi++:(wi=0,Su=e):wi=0,bn(),null}function vr(){if(an!==null){var e=J0(Aa),t=et.transition,n=H;try{if(et.transition=null,H=16>e?16:e,an===null)var r=!1;else{if(e=an,an=null,Aa=0,z&6)throw Error(j(331));var i=z;for(z|=4,T=e.current;T!==null;){var o=T,a=o.child;if(T.flags&16){var s=o.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(T=u;T!==null;){var f=T;switch(f.tag){case 0:case 11:case 15:vi(8,f,o)}var d=f.child;if(d!==null)d.return=f,T=d;else for(;T!==null;){f=T;var g=f.sibling,x=f.return;if(d1(f),f===u){T=null;break}if(g!==null){g.return=x,T=g;break}T=x}}}var v=o.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var S=y.sibling;y.sibling=null,y=S}while(y!==null)}}T=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,T=a;else e:for(;T!==null;){if(o=T,o.flags&2048)switch(o.tag){case 0:case 11:case 15:vi(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,T=h;break e}T=o.return}}var p=e.current;for(T=p;T!==null;){a=T;var m=a.child;if(a.subtreeFlags&2064&&m!==null)m.return=a,T=m;else e:for(a=p;T!==null;){if(s=T,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:is(9,s)}}catch(b){ne(s,s.return,b)}if(s===a){T=null;break e}var w=s.sibling;if(w!==null){w.return=s.return,T=w;break e}T=s.return}}if(z=i,bn(),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(qa,e)}catch{}r=!0}return r}finally{H=n,et.transition=t}}return!1}function Vf(e,t,n){t=Cr(n,t),t=e1(e,t,1),e=fn(e,t,1),t=je(),e!==null&&(Zi(e,1,t),De(e,t))}function ne(e,t,n){if(e.tag===3)Vf(e,e,n);else for(;t!==null;){if(t.tag===3){Vf(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(pn===null||!pn.has(r))){e=Cr(n,e),e=t1(t,e,1),t=fn(t,e,1),e=je(),t!==null&&(Zi(t,1,e),De(t,e));break}}t=t.return}}function Dv(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=je(),e.pingedLanes|=e.suspendedLanes&n,he===e&&(ve&n)===n&&(ce===4||ce===3&&(ve&130023424)===ve&&500>re()-zc?In(e,0):Fc|=n),De(e,t)}function S1(e,t){t===0&&(e.mode&1?(t=go,go<<=1,!(go&130023424)&&(go=4194304)):t=1);var n=je();e=Bt(e,t),e!==null&&(Zi(e,t,n),De(e,n))}function $v(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),S1(e,n)}function Lv(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(t),S1(e,n)}var k1;k1=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Me.current)_e=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return _e=!1,Ev(e,t,n);_e=!!(e.flags&131072)}else _e=!1,Z&&t.flags&1048576&&Ch(t,Ca,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Bo(e,t),e=t.pendingProps;var i=Sr(t,Ee.current);yr(t,n),i=Mc(null,t,r,e,i,n);var o=Ac();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ae(r)?(o=!0,ba(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Oc(t),i.updater=ns,t.stateNode=i,i._reactInternals=t,uu(t,r,e,n),t=fu(null,t,r,!0,o,n)):(t.tag=0,Z&&o&&Sc(t),Pe(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Bo(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Fv(r),e=lt(r,e),i){case 0:t=du(null,t,r,e,n);break e;case 1:t=Af(null,t,r,e,n);break e;case 11:t=Rf(null,t,r,e,n);break e;case 14:t=Mf(null,t,r,lt(r.type,e),n);break e}throw Error(j(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:lt(r,i),du(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:lt(r,i),Af(e,t,r,i,n);case 3:e:{if(o1(t),e===null)throw Error(j(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Nh(e,t),Oa(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Cr(Error(j(423)),t),t=Df(e,t,r,n,i);break e}else if(r!==i){i=Cr(Error(j(424)),t),t=Df(e,t,r,n,i);break e}else for(We=dn(t.stateNode.containerInfo.firstChild),Ve=t,Z=!0,ct=null,n=Mh(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(kr(),r===i){t=Wt(e,t,n);break e}Pe(e,t,r,n)}t=t.child}return t;case 5:return Ah(t),e===null&&au(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,tu(r,i)?a=null:o!==null&&tu(r,o)&&(t.flags|=32),i1(e,t),Pe(e,t,a,n),t.child;case 6:return e===null&&au(t),null;case 13:return a1(e,t,n);case 4:return Nc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=br(t,null,r,n):Pe(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:lt(r,i),Rf(e,t,r,i,n);case 7:return Pe(e,t,t.pendingProps,n),t.child;case 8:return Pe(e,t,t.pendingProps.children,n),t.child;case 12:return Pe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,K(Pa,r._currentValue),r._currentValue=a,o!==null)if(mt(o.value,a)){if(o.children===i.children&&!Me.current){t=Wt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){a=o.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=$t(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),su(o.return,n,t),s.lanes|=n;break}l=l.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(j(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),su(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}Pe(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,yr(t,n),i=nt(i),r=r(i),t.flags|=1,Pe(e,t,r,n),t.child;case 14:return r=t.type,i=lt(r,t.pendingProps),i=lt(r.type,i),Mf(e,t,r,i,n);case 15:return n1(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:lt(r,i),Bo(e,t),t.tag=1,Ae(r)?(e=!0,ba(t)):e=!1,yr(t,n),_h(t,r,i),uu(t,r,i,n),fu(null,t,r,!0,e,n);case 19:return s1(e,t,n);case 22:return r1(e,t,n)}throw Error(j(156,t.tag))};function b1(e,t){return G0(e,t)}function Iv(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Je(e,t,n,r){return new Iv(e,t,n,r)}function Vc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Fv(e){if(typeof e=="function")return Vc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===uc)return 11;if(e===cc)return 14}return 2}function mn(e,t){var n=e.alternate;return n===null?(n=Je(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Vo(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")Vc(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case tr:return Fn(n.children,i,o,t);case lc:a=8,i|=8;break;case Ml:return e=Je(12,n,t,i|2),e.elementType=Ml,e.lanes=o,e;case Al:return e=Je(13,n,t,i),e.elementType=Al,e.lanes=o,e;case Dl:return e=Je(19,n,t,i),e.elementType=Dl,e.lanes=o,e;case R0:return as(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case T0:a=10;break e;case _0:a=9;break e;case uc:a=11;break e;case cc:a=14;break e;case Jt:a=16,r=null;break e}throw Error(j(130,e==null?e:typeof e,""))}return t=Je(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Fn(e,t,n,r){return e=Je(7,e,r,t),e.lanes=n,e}function as(e,t,n,r){return e=Je(22,e,r,t),e.elementType=R0,e.lanes=n,e.stateNode={isHidden:!1},e}function ll(e,t,n){return e=Je(6,e,null,t),e.lanes=n,e}function ul(e,t,n){return t=Je(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function zv(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Us(0),this.expirationTimes=Us(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Us(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Hc(e,t,n,r,i,o,a,s,l){return e=new zv(e,t,n,s,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Je(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Oc(o),e}function Bv(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:er,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function E1(e){if(!e)return vn;e=e._reactInternals;e:{if(qn(e)!==e||e.tag!==1)throw Error(j(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ae(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(j(171))}if(e.tag===1){var n=e.type;if(Ae(n))return bh(e,n,t)}return t}function C1(e,t,n,r,i,o,a,s,l){return e=Hc(n,r,!0,e,i,o,a,s,l),e.context=E1(null),n=e.current,r=je(),i=hn(n),o=$t(r,i),o.callback=t??null,fn(n,o,i),e.current.lanes=i,Zi(e,i,r),De(e,r),e}function ss(e,t,n,r){var i=t.current,o=je(),a=hn(i);return n=E1(n),t.context===null?t.context=n:t.pendingContext=n,t=$t(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=fn(i,t,a),e!==null&&(pt(e,i,a,o),Io(e,i,a)),a}function $a(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Hf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Qc(e,t){Hf(e,t),(e=e.alternate)&&Hf(e,t)}function Wv(){return null}var P1=typeof reportError=="function"?reportError:function(e){console.error(e)};function Yc(e){this._internalRoot=e}ls.prototype.render=Yc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(j(409));ss(e,t,null,null)};ls.prototype.unmount=Yc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Qn(function(){ss(null,e,null,null)}),t[zt]=null}};function ls(e){this._internalRoot=e}ls.prototype.unstable_scheduleHydration=function(e){if(e){var t=nh();e={blockedOn:null,target:e,priority:t};for(var n=0;n<tn.length&&t!==0&&t<tn[n].priority;n++);tn.splice(n,0,e),n===0&&ih(e)}};function Kc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function us(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Qf(){}function Uv(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=$a(a);o.call(u)}}var a=C1(t,r,e,0,null,!1,!1,"",Qf);return e._reactRootContainer=a,e[zt]=a.current,Mi(e.nodeType===8?e.parentNode:e),Qn(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var u=$a(l);s.call(u)}}var l=Hc(e,0,!1,null,null,!1,!1,"",Qf);return e._reactRootContainer=l,e[zt]=l.current,Mi(e.nodeType===8?e.parentNode:e),Qn(function(){ss(t,l,n,r)}),l}function cs(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var s=i;i=function(){var l=$a(a);s.call(l)}}ss(t,a,e,i)}else a=Uv(n,t,e,i,r);return $a(a)}eh=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=li(t.pendingLanes);n!==0&&(pc(t,n|1),De(t,re()),!(z&6)&&(Pr=re()+500,bn()))}break;case 13:Qn(function(){var r=Bt(e,1);if(r!==null){var i=je();pt(r,e,1,i)}}),Qc(e,1)}};hc=function(e){if(e.tag===13){var t=Bt(e,134217728);if(t!==null){var n=je();pt(t,e,134217728,n)}Qc(e,134217728)}};th=function(e){if(e.tag===13){var t=hn(e),n=Bt(e,t);if(n!==null){var r=je();pt(n,e,t,r)}Qc(e,t)}};nh=function(){return H};rh=function(e,t){var n=H;try{return H=e,t()}finally{H=n}};Hl=function(e,t,n){switch(t){case"input":if(Il(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=es(r);if(!i)throw Error(j(90));A0(r),Il(r,i)}}}break;case"textarea":$0(e,n);break;case"select":t=n.value,t!=null&&pr(e,!!n.multiple,t,!1)}};U0=Bc;V0=Qn;var Vv={usingClientEntryPoint:!1,Events:[eo,or,es,B0,W0,Bc]},ti={findFiberByHostInstance:An,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Hv={bundleType:ti.bundleType,version:ti.version,rendererPackageName:ti.rendererPackageName,rendererConfig:ti.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Qt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Y0(e),e===null?null:e.stateNode},findFiberByHostInstance:ti.findFiberByHostInstance||Wv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var jo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!jo.isDisabled&&jo.supportsFiber)try{qa=jo.inject(Hv),Et=jo}catch{}}Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Vv;Ge.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Kc(t))throw Error(j(200));return Bv(e,t,null,n)};Ge.createRoot=function(e,t){if(!Kc(e))throw Error(j(299));var n=!1,r="",i=P1;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Hc(e,1,!1,null,null,n,!1,r,i),e[zt]=t.current,Mi(e.nodeType===8?e.parentNode:e),new Yc(t)};Ge.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(j(188)):(e=Object.keys(e).join(","),Error(j(268,e)));return e=Y0(t),e=e===null?null:e.stateNode,e};Ge.flushSync=function(e){return Qn(e)};Ge.hydrate=function(e,t,n){if(!us(t))throw Error(j(200));return cs(null,e,t,!0,n)};Ge.hydrateRoot=function(e,t,n){if(!Kc(e))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=P1;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=C1(t,null,e,1,n??null,i,!1,o,a),e[zt]=t.current,Mi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new ls(t)};Ge.render=function(e,t,n){if(!us(t))throw Error(j(200));return cs(null,e,t,!1,n)};Ge.unmountComponentAtNode=function(e){if(!us(e))throw Error(j(40));return e._reactRootContainer?(Qn(function(){cs(null,null,e,!1,function(){e._reactRootContainer=null,e[zt]=null})}),!0):!1};Ge.unstable_batchedUpdates=Bc;Ge.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!us(n))throw Error(j(200));if(e==null||e._reactInternals===void 0)throw Error(j(38));return cs(e,t,n,!1,r)};Ge.version="18.2.0-next-9e3b772b8-20220608";function j1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(j1)}catch(e){console.error(e)}}j1(),C0.exports=Ge;var Qv=C0.exports,Yf=Qv;_l.createRoot=Yf.createRoot,_l.hydrateRoot=Yf.hydrateRoot;var O1={exports:{}},N1={};/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var no=k;function Yv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Kv=typeof Object.is=="function"?Object.is:Yv,Gv=no.useSyncExternalStore,qv=no.useRef,Xv=no.useEffect,Zv=no.useMemo,Jv=no.useDebugValue;N1.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var o=qv(null);if(o.current===null){var a={hasValue:!1,value:null};o.current=a}else a=o.current;o=Zv(function(){function l(x){if(!u){if(u=!0,f=x,x=r(x),i!==void 0&&a.hasValue){var v=a.value;if(i(v,x))return d=v}return d=x}if(v=d,Kv(f,x))return v;var y=r(x);return i!==void 0&&i(v,y)?v:(f=x,d=y)}var u=!1,f,d,g=n===void 0?null:n;return[function(){return l(t())},g===null?void 0:function(){return l(g())}]},[t,n,r,i]);var s=Gv(e,o[0],o[1]);return Xv(function(){a.hasValue=!0,a.value=s},[s]),Jv(s),s};O1.exports=N1;var ex=O1.exports,Ue="default"in bi?gn:bi,Kf=Symbol.for("react-redux-context"),Gf=typeof globalThis<"u"?globalThis:{};function tx(){if(!Ue.createContext)return{};const e=Gf[Kf]??(Gf[Kf]=new Map);let t=e.get(Ue.createContext);return t||(t=Ue.createContext(null),e.set(Ue.createContext,t)),t}var xn=tx(),nx=()=>{throw new Error("uSES not initialized!")};function Gc(e=xn){return function(){return Ue.useContext(e)}}var T1=Gc(),_1=nx,rx=e=>{_1=e},ix=(e,t)=>e===t;function ox(e=xn){const t=e===xn?T1:Gc(e),n=(r,i={})=>{const{equalityFn:o=ix,devModeChecks:a={}}=typeof i=="function"?{equalityFn:i}:i,{store:s,subscription:l,getServerState:u,stabilityCheck:f,identityFunctionCheck:d}=t();Ue.useRef(!0);const g=Ue.useCallback({[r.name](v){return r(v)}}[r.name],[r,f,a.stabilityCheck]),x=_1(l.addNestedSub,s.getState,u||s.getState,g,o);return Ue.useDebugValue(x),x};return Object.assign(n,{withTypes:()=>n}),n}var Wr=ox();function ax(e){e()}function sx(){let e=null,t=null;return{clear(){e=null,t=null},notify(){ax(()=>{let n=e;for(;n;)n.callback(),n=n.next})},get(){const n=[];let r=e;for(;r;)n.push(r),r=r.next;return n},subscribe(n){let r=!0;const i=t={callback:n,next:null,prev:t};return i.prev?i.prev.next=i:e=i,function(){!r||e===null||(r=!1,i.next?i.next.prev=i.prev:t=i.prev,i.prev?i.prev.next=i.next:e=i.next)}}}}var qf={notify(){},get:()=>[]};function lx(e,t){let n,r=qf,i=0,o=!1;function a(y){f();const S=r.subscribe(y);let h=!1;return()=>{h||(h=!0,S(),d())}}function s(){r.notify()}function l(){v.onStateChange&&v.onStateChange()}function u(){return o}function f(){i++,n||(n=t?t.addNestedSub(l):e.subscribe(l),r=sx())}function d(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=qf)}function g(){o||(o=!0,f())}function x(){o&&(o=!1,d())}const v={addNestedSub:a,notifyNestedSubs:s,handleChangeWrapper:l,isSubscribed:u,trySubscribe:g,tryUnsubscribe:x,getListeners:()=>r};return v}var ux=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",cx=ux?Ue.useLayoutEffect:Ue.useEffect;function dx({store:e,context:t,children:n,serverState:r,stabilityCheck:i="once",identityFunctionCheck:o="once"}){const a=Ue.useMemo(()=>{const u=lx(e);return{store:e,subscription:u,getServerState:r?()=>r:void 0,stabilityCheck:i,identityFunctionCheck:o}},[e,r,i,o]),s=Ue.useMemo(()=>e.getState(),[e]);cx(()=>{const{subscription:u}=a;return u.onStateChange=u.notifyNestedSubs,u.trySubscribe(),s!==e.getState()&&u.notifyNestedSubs(),()=>{u.tryUnsubscribe(),u.onStateChange=void 0}},[a,s]);const l=t||xn;return Ue.createElement(l.Provider,{value:a},n)}var fx=dx;function R1(e=xn){const t=e===xn?T1:Gc(e),n=()=>{const{store:r}=t();return r};return Object.assign(n,{withTypes:()=>n}),n}var px=R1();function hx(e=xn){const t=e===xn?px:R1(e),n=()=>t().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var mx=hx();rx(ex.useSyncExternalStoreWithSelector);var Re=function(){return Re=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},Re.apply(this,arguments)};function Wi(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}function M1(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var gx=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,yx=M1(function(e){return gx.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),q="-ms-",Si="-moz-",U="-webkit-",A1="comm",ds="rule",qc="decl",vx="@import",D1="@keyframes",xx="@layer",$1=Math.abs,Xc=String.fromCharCode,Eu=Object.assign;function wx(e,t){return pe(e,0)^45?(((t<<2^pe(e,0))<<2^pe(e,1))<<2^pe(e,2))<<2^pe(e,3):0}function L1(e){return e.trim()}function Rt(e,t){return(e=t.exec(e))?e[0]:e}function L(e,t,n){return e.replace(t,n)}function Ho(e,t,n){return e.indexOf(t,n)}function pe(e,t){return e.charCodeAt(t)|0}function jr(e,t,n){return e.slice(t,n)}function xt(e){return e.length}function I1(e){return e.length}function ci(e,t){return t.push(e),e}function Sx(e,t){return e.map(t).join("")}function Xf(e,t){return e.filter(function(n){return!Rt(n,t)})}var fs=1,Or=1,F1=0,it=0,oe=0,Ur="";function ps(e,t,n,r,i,o,a,s){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:fs,column:Or,length:a,return:"",siblings:s}}function Zt(e,t){return Eu(ps("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Zn(e){for(;e.root;)e=Zt(e.root,{children:[e]});ci(e,e.siblings)}function kx(){return oe}function bx(){return oe=it>0?pe(Ur,--it):0,Or--,oe===10&&(Or=1,fs--),oe}function ht(){return oe=it<F1?pe(Ur,it++):0,Or++,oe===10&&(Or=1,fs++),oe}function zn(){return pe(Ur,it)}function Qo(){return it}function hs(e,t){return jr(Ur,e,t)}function Cu(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Ex(e){return fs=Or=1,F1=xt(Ur=e),it=0,[]}function Cx(e){return Ur="",e}function cl(e){return L1(hs(it-1,Pu(e===91?e+2:e===40?e+1:e)))}function Px(e){for(;(oe=zn())&&oe<33;)ht();return Cu(e)>2||Cu(oe)>3?"":" "}function jx(e,t){for(;--t&&ht()&&!(oe<48||oe>102||oe>57&&oe<65||oe>70&&oe<97););return hs(e,Qo()+(t<6&&zn()==32&&ht()==32))}function Pu(e){for(;ht();)switch(oe){case e:return it;case 34:case 39:e!==34&&e!==39&&Pu(oe);break;case 40:e===41&&Pu(e);break;case 92:ht();break}return it}function Ox(e,t){for(;ht()&&e+oe!==47+10;)if(e+oe===42+42&&zn()===47)break;return"/*"+hs(t,it-1)+"*"+Xc(e===47?e:ht())}function Nx(e){for(;!Cu(zn());)ht();return hs(e,it)}function Tx(e){return Cx(Yo("",null,null,null,[""],e=Ex(e),0,[0],e))}function Yo(e,t,n,r,i,o,a,s,l){for(var u=0,f=0,d=a,g=0,x=0,v=0,y=1,S=1,h=1,p=0,m="",w=i,b=o,E=r,C=m;S;)switch(v=p,p=ht()){case 40:if(v!=108&&pe(C,d-1)==58){Ho(C+=L(cl(p),"&","&\f"),"&\f",$1(u?s[u-1]:0))!=-1&&(h=-1);break}case 34:case 39:case 91:C+=cl(p);break;case 9:case 10:case 13:case 32:C+=Px(v);break;case 92:C+=jx(Qo()-1,7);continue;case 47:switch(zn()){case 42:case 47:ci(_x(Ox(ht(),Qo()),t,n,l),l);break;default:C+="/"}break;case 123*y:s[u++]=xt(C)*h;case 125*y:case 59:case 0:switch(p){case 0:case 125:S=0;case 59+f:h==-1&&(C=L(C,/\f/g,"")),x>0&&xt(C)-d&&ci(x>32?Jf(C+";",r,n,d-1,l):Jf(L(C," ","")+";",r,n,d-2,l),l);break;case 59:C+=";";default:if(ci(E=Zf(C,t,n,u,f,i,s,m,w=[],b=[],d,o),o),p===123)if(f===0)Yo(C,t,E,E,w,o,d,s,b);else switch(g===99&&pe(C,3)===110?100:g){case 100:case 108:case 109:case 115:Yo(e,E,E,r&&ci(Zf(e,E,E,0,0,i,s,m,i,w=[],d,b),b),i,b,d,s,r?w:b);break;default:Yo(C,E,E,E,[""],b,0,s,b)}}u=f=x=0,y=h=1,m=C="",d=a;break;case 58:d=1+xt(C),x=v;default:if(y<1){if(p==123)--y;else if(p==125&&y++==0&&bx()==125)continue}switch(C+=Xc(p),p*y){case 38:h=f>0?1:(C+="\f",-1);break;case 44:s[u++]=(xt(C)-1)*h,h=1;break;case 64:zn()===45&&(C+=cl(ht())),g=zn(),f=d=xt(m=C+=Nx(Qo())),p++;break;case 45:v===45&&xt(C)==2&&(y=0)}}return o}function Zf(e,t,n,r,i,o,a,s,l,u,f,d){for(var g=i-1,x=i===0?o:[""],v=I1(x),y=0,S=0,h=0;y<r;++y)for(var p=0,m=jr(e,g+1,g=$1(S=a[y])),w=e;p<v;++p)(w=L1(S>0?x[p]+" "+m:L(m,/&\f/g,x[p])))&&(l[h++]=w);return ps(e,t,n,i===0?ds:s,l,u,f,d)}function _x(e,t,n,r){return ps(e,t,n,A1,Xc(kx()),jr(e,2,-2),0,r)}function Jf(e,t,n,r,i){return ps(e,t,n,qc,jr(e,0,r),jr(e,r+1,-1),r,i)}function z1(e,t,n){switch(wx(e,t)){case 5103:return U+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return U+e+e;case 4789:return Si+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return U+e+Si+e+q+e+e;case 5936:switch(pe(e,t+11)){case 114:return U+e+q+L(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return U+e+q+L(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return U+e+q+L(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return U+e+q+e+e;case 6165:return U+e+q+"flex-"+e+e;case 5187:return U+e+L(e,/(\w+).+(:[^]+)/,U+"box-$1$2"+q+"flex-$1$2")+e;case 5443:return U+e+q+"flex-item-"+L(e,/flex-|-self/g,"")+(Rt(e,/flex-|baseline/)?"":q+"grid-row-"+L(e,/flex-|-self/g,""))+e;case 4675:return U+e+q+"flex-line-pack"+L(e,/align-content|flex-|-self/g,"")+e;case 5548:return U+e+q+L(e,"shrink","negative")+e;case 5292:return U+e+q+L(e,"basis","preferred-size")+e;case 6060:return U+"box-"+L(e,"-grow","")+U+e+q+L(e,"grow","positive")+e;case 4554:return U+L(e,/([^-])(transform)/g,"$1"+U+"$2")+e;case 6187:return L(L(L(e,/(zoom-|grab)/,U+"$1"),/(image-set)/,U+"$1"),e,"")+e;case 5495:case 3959:return L(e,/(image-set\([^]*)/,U+"$1$`$1");case 4968:return L(L(e,/(.+:)(flex-)?(.*)/,U+"box-pack:$3"+q+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+U+e+e;case 4200:if(!Rt(e,/flex-|baseline/))return q+"grid-column-align"+jr(e,t)+e;break;case 2592:case 3360:return q+L(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,Rt(r.props,/grid-\w+-end/)})?~Ho(e+(n=n[t].value),"span",0)?e:q+L(e,"-start","")+e+q+"grid-row-span:"+(~Ho(n,"span",0)?Rt(n,/\d+/):+Rt(n,/\d+/)-+Rt(e,/\d+/))+";":q+L(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Rt(r.props,/grid-\w+-start/)})?e:q+L(L(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return L(e,/(.+)-inline(.+)/,U+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(xt(e)-1-t>6)switch(pe(e,t+1)){case 109:if(pe(e,t+4)!==45)break;case 102:return L(e,/(.+:)(.+)-([^]+)/,"$1"+U+"$2-$3$1"+Si+(pe(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Ho(e,"stretch",0)?z1(L(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return L(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,a,s,l,u){return q+i+":"+o+u+(a?q+i+"-span:"+(s?l:+l-+o)+u:"")+e});case 4949:if(pe(e,t+6)===121)return L(e,":",":"+U)+e;break;case 6444:switch(pe(e,pe(e,14)===45?18:11)){case 120:return L(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+U+(pe(e,14)===45?"inline-":"")+"box$3$1"+U+"$2$3$1"+q+"$2box$3")+e;case 100:return L(e,":",":"+q)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return L(e,"scroll-","scroll-snap-")+e}return e}function La(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Rx(e,t,n,r){switch(e.type){case xx:if(e.children.length)break;case vx:case qc:return e.return=e.return||e.value;case A1:return"";case D1:return e.return=e.value+"{"+La(e.children,r)+"}";case ds:if(!xt(e.value=e.props.join(",")))return""}return xt(n=La(e.children,r))?e.return=e.value+"{"+n+"}":""}function Mx(e){var t=I1(e);return function(n,r,i,o){for(var a="",s=0;s<t;s++)a+=e[s](n,r,i,o)||"";return a}}function Ax(e){return function(t){t.root||(t=t.return)&&e(t)}}function Dx(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case qc:e.return=z1(e.value,e.length,n);return;case D1:return La([Zt(e,{value:L(e.value,"@","@"+U)})],r);case ds:if(e.length)return Sx(n=e.props,function(i){switch(Rt(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Zn(Zt(e,{props:[L(i,/:(read-\w+)/,":"+Si+"$1")]})),Zn(Zt(e,{props:[i]})),Eu(e,{props:Xf(n,r)});break;case"::placeholder":Zn(Zt(e,{props:[L(i,/:(plac\w+)/,":"+U+"input-$1")]})),Zn(Zt(e,{props:[L(i,/:(plac\w+)/,":"+Si+"$1")]})),Zn(Zt(e,{props:[L(i,/:(plac\w+)/,q+"input-$1")]})),Zn(Zt(e,{props:[i]})),Eu(e,{props:Xf(n,r)});break}return""})}}var $x={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Nr=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",B1="active",W1="data-styled-version",ms="6.1.8",Zc=`/*!sc*/
`,Jc=typeof window<"u"&&"HTMLElement"in window,Lx=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),gs=Object.freeze([]),Tr=Object.freeze({});function Ix(e,t,n){return n===void 0&&(n=Tr),e.theme!==n.theme&&e.theme||t||n.theme}var U1=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Fx=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,zx=/(^-|-$)/g;function ep(e){return e.replace(Fx,"-").replace(zx,"")}var Bx=/(a)(d)/gi,Oo=52,tp=function(e){return String.fromCharCode(e+(e>25?39:97))};function ju(e){var t,n="";for(t=Math.abs(e);t>Oo;t=t/Oo|0)n=tp(t%Oo)+n;return(tp(t%Oo)+n).replace(Bx,"$1-$2")}var dl,V1=5381,fr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},H1=function(e){return fr(V1,e)};function Q1(e){return ju(H1(e)>>>0)}function Wx(e){return e.displayName||e.name||"Component"}function fl(e){return typeof e=="string"&&!0}var Y1=typeof Symbol=="function"&&Symbol.for,K1=Y1?Symbol.for("react.memo"):60115,Ux=Y1?Symbol.for("react.forward_ref"):60112,Vx={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Hx={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},G1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Qx=((dl={})[Ux]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},dl[K1]=G1,dl);function np(e){return("type"in(t=e)&&t.type.$$typeof)===K1?G1:"$$typeof"in e?Qx[e.$$typeof]:Vx;var t}var Yx=Object.defineProperty,Kx=Object.getOwnPropertyNames,rp=Object.getOwnPropertySymbols,Gx=Object.getOwnPropertyDescriptor,qx=Object.getPrototypeOf,ip=Object.prototype;function q1(e,t,n){if(typeof t!="string"){if(ip){var r=qx(t);r&&r!==ip&&q1(e,r,n)}var i=Kx(t);rp&&(i=i.concat(rp(t)));for(var o=np(e),a=np(t),s=0;s<i.length;++s){var l=i[s];if(!(l in Hx||n&&n[l]||a&&l in a||o&&l in o)){var u=Gx(t,l);try{Yx(e,l,u)}catch{}}}}return e}function _r(e){return typeof e=="function"}function ed(e){return typeof e=="object"&&"styledComponentId"in e}function Ln(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Ou(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Ui(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Nu(e,t,n){if(n===void 0&&(n=!1),!n&&!Ui(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Nu(e[r],t[r]);else if(Ui(t))for(var r in t)e[r]=Nu(e[r],t[r]);return e}function td(e,t){Object.defineProperty(e,"toString",{value:t})}function ro(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Xx=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw ro(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var a=i;a<o;a++)this.groupSizes[a]=0}for(var s=this.indexOfGroup(t+1),l=(a=0,n.length);a<l;a++)this.tag.insertRule(s,n[a])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,a=i;a<o;a++)n+="".concat(this.tag.getRule(a)).concat(Zc);return n},e}(),Ko=new Map,Ia=new Map,Go=1,No=function(e){if(Ko.has(e))return Ko.get(e);for(;Ia.has(Go);)Go++;var t=Go++;return Ko.set(e,t),Ia.set(t,e),t},Zx=function(e,t){Go=t+1,Ko.set(e,t),Ia.set(t,e)},Jx="style[".concat(Nr,"][").concat(W1,'="').concat(ms,'"]'),ew=new RegExp("^".concat(Nr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),tw=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},nw=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Zc),i=[],o=0,a=r.length;o<a;o++){var s=r[o].trim();if(s){var l=s.match(ew);if(l){var u=0|parseInt(l[1],10),f=l[2];u!==0&&(Zx(f,u),tw(e,f,l[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(s)}}};function rw(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var X1=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(s){var l=Array.from(s.querySelectorAll("style[".concat(Nr,"]")));return l[l.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Nr,B1),r.setAttribute(W1,ms);var a=rw();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},iw=function(){function e(t){this.element=X1(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var a=r[i];if(a.ownerNode===n)return a}throw ro(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),ow=function(){function e(t){this.element=X1(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),aw=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),op=Jc,sw={isServer:!Jc,useCSSOMInjection:!Lx},Z1=function(){function e(t,n,r){t===void 0&&(t=Tr),n===void 0&&(n={});var i=this;this.options=Re(Re({},sw),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Jc&&op&&(op=!1,function(o){for(var a=document.querySelectorAll(Jx),s=0,l=a.length;s<l;s++){var u=a[s];u&&u.getAttribute(Nr)!==B1&&(nw(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),td(this,function(){return function(o){for(var a=o.getTag(),s=a.length,l="",u=function(d){var g=function(h){return Ia.get(h)}(d);if(g===void 0)return"continue";var x=o.names.get(g),v=a.getGroup(d);if(x===void 0||v.length===0)return"continue";var y="".concat(Nr,".g").concat(d,'[id="').concat(g,'"]'),S="";x!==void 0&&x.forEach(function(h){h.length>0&&(S+="".concat(h,","))}),l+="".concat(v).concat(y,'{content:"').concat(S,'"}').concat(Zc)},f=0;f<s;f++)u(f);return l}(i)})}return e.registerId=function(t){return No(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Re(Re({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new aw(i):r?new iw(i):new ow(i)}(this.options),new Xx(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(No(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(No(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(No(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),lw=/&/g,uw=/^\s*\/\/.*$/gm;function J1(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=J1(n.children,t)),n})}function cw(e){var t,n,r,i=e===void 0?Tr:e,o=i.options,a=o===void 0?Tr:o,s=i.plugins,l=s===void 0?gs:s,u=function(g,x,v){return v.startsWith(n)&&v.endsWith(n)&&v.replaceAll(n,"").length>0?".".concat(t):g},f=l.slice();f.push(function(g){g.type===ds&&g.value.includes("&")&&(g.props[0]=g.props[0].replace(lw,n).replace(r,u))}),a.prefix&&f.push(Dx),f.push(Rx);var d=function(g,x,v,y){x===void 0&&(x=""),v===void 0&&(v=""),y===void 0&&(y="&"),t=y,n=x,r=new RegExp("\\".concat(n,"\\b"),"g");var S=g.replace(uw,""),h=Tx(v||x?"".concat(v," ").concat(x," { ").concat(S," }"):S);a.namespace&&(h=J1(h,a.namespace));var p=[];return La(h,Mx(f.concat(Ax(function(m){return p.push(m)})))),p};return d.hash=l.length?l.reduce(function(g,x){return x.name||ro(15),fr(g,x.name)},V1).toString():"",d}var dw=new Z1,Tu=cw(),em=gn.createContext({shouldForwardProp:void 0,styleSheet:dw,stylis:Tu});em.Consumer;gn.createContext(void 0);function ap(){return k.useContext(em)}var tm=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Tu);var a=r.name+o.hash;i.hasNameForId(r.id,a)||i.insertRules(r.id,a,o(r.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,td(this,function(){throw ro(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Tu),this.name+t.hash},e}(),fw=function(e){return e>="A"&&e<="Z"};function sp(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;fw(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var nm=function(e){return e==null||e===!1||e===""},rm=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!nm(o)&&(Array.isArray(o)&&o.isCss||_r(o)?r.push("".concat(sp(i),":"),o,";"):Ui(o)?r.push.apply(r,Wi(Wi(["".concat(i," {")],rm(o),!1),["}"],!1)):r.push("".concat(sp(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in $x||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Bn(e,t,n,r){if(nm(e))return[];if(ed(e))return[".".concat(e.styledComponentId)];if(_r(e)){if(!_r(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return Bn(i,t,n,r)}var o;return e instanceof tm?n?(e.inject(n,r),[e.getName(r)]):[e]:Ui(e)?rm(e):Array.isArray(e)?Array.prototype.concat.apply(gs,e.map(function(a){return Bn(a,t,n,r)})):[e.toString()]}function pw(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(_r(n)&&!ed(n))return!1}return!0}var hw=H1(ms),mw=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&pw(t),this.componentId=n,this.baseHash=fr(hw,n),this.baseStyle=r,Z1.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Ln(i,this.staticRulesId);else{var o=Ou(Bn(this.rules,t,n,r)),a=ju(fr(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,a)){var s=r(o,".".concat(a),void 0,this.componentId);n.insertRules(this.componentId,a,s)}i=Ln(i,a),this.staticRulesId=a}else{for(var l=fr(this.baseHash,r.hash),u="",f=0;f<this.rules.length;f++){var d=this.rules[f];if(typeof d=="string")u+=d;else if(d){var g=Ou(Bn(d,t,n,r));l=fr(l,g+f),u+=g}}if(u){var x=ju(l>>>0);n.hasNameForId(this.componentId,x)||n.insertRules(this.componentId,x,r(u,".".concat(x),void 0,this.componentId)),i=Ln(i,x)}}return i},e}(),im=gn.createContext(void 0);im.Consumer;var pl={};function gw(e,t,n){var r=ed(e),i=e,o=!fl(e),a=t.attrs,s=a===void 0?gs:a,l=t.componentId,u=l===void 0?function(w,b){var E=typeof w!="string"?"sc":ep(w);pl[E]=(pl[E]||0)+1;var C="".concat(E,"-").concat(Q1(ms+E+pl[E]));return b?"".concat(b,"-").concat(C):C}(t.displayName,t.parentComponentId):l,f=t.displayName,d=f===void 0?function(w){return fl(w)?"styled.".concat(w):"Styled(".concat(Wx(w),")")}(e):f,g=t.displayName&&t.componentId?"".concat(ep(t.displayName),"-").concat(t.componentId):t.componentId||u,x=r&&i.attrs?i.attrs.concat(s).filter(Boolean):s,v=t.shouldForwardProp;if(r&&i.shouldForwardProp){var y=i.shouldForwardProp;if(t.shouldForwardProp){var S=t.shouldForwardProp;v=function(w,b){return y(w,b)&&S(w,b)}}else v=y}var h=new mw(n,g,r?i.componentStyle:void 0);function p(w,b){return function(E,C,O){var A=E.attrs,D=E.componentStyle,Ce=E.defaultProps,En=E.foldedComponentIds,Cn=E.styledComponentId,lo=E.target,As=gn.useContext(im),Qr=ap(),Pn=E.shouldForwardProp||Qr.shouldForwardProp,N=Ix(C,As,Ce)||Tr,M=function(Yt,ze,Ot){for(var Yr,On=Re(Re({},ze),{className:void 0,theme:Ot}),Ds=0;Ds<Yt.length;Ds+=1){var uo=_r(Yr=Yt[Ds])?Yr(On):Yr;for(var Kt in uo)On[Kt]=Kt==="className"?Ln(On[Kt],uo[Kt]):Kt==="style"?Re(Re({},On[Kt]),uo[Kt]):uo[Kt]}return ze.className&&(On.className=Ln(On.className,ze.className)),On}(A,C,N),$=M.as||lo,Q={};for(var Y in M)M[Y]===void 0||Y[0]==="$"||Y==="as"||Y==="theme"&&M.theme===N||(Y==="forwardedAs"?Q.as=M.forwardedAs:Pn&&!Pn(Y,$)||(Q[Y]=M[Y]));var jn=function(Yt,ze){var Ot=ap(),Yr=Yt.generateAndInjectStyles(ze,Ot.styleSheet,Ot.stylis);return Yr}(D,M),ot=Ln(En,Cn);return jn&&(ot+=" "+jn),M.className&&(ot+=" "+M.className),Q[fl($)&&!U1.has($)?"class":"className"]=ot,Q.ref=O,k.createElement($,Q)}(m,w,b)}p.displayName=d;var m=gn.forwardRef(p);return m.attrs=x,m.componentStyle=h,m.displayName=d,m.shouldForwardProp=v,m.foldedComponentIds=r?Ln(i.foldedComponentIds,i.styledComponentId):"",m.styledComponentId=g,m.target=r?i.target:e,Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(w){this._foldedDefaultProps=r?function(b){for(var E=[],C=1;C<arguments.length;C++)E[C-1]=arguments[C];for(var O=0,A=E;O<A.length;O++)Nu(b,A[O],!0);return b}({},i.defaultProps,w):w}}),td(m,function(){return".".concat(m.styledComponentId)}),o&&q1(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}function lp(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var up=function(e){return Object.assign(e,{isCss:!0})};function ys(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(_r(e)||Ui(e))return up(Bn(lp(gs,Wi([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Bn(r):up(Bn(lp(r,t)))}function _u(e,t,n){if(n===void 0&&(n=Tr),!t)throw ro(1,t);var r=function(i){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];return e(t,n,ys.apply(void 0,Wi([i],o,!1)))};return r.attrs=function(i){return _u(e,t,Re(Re({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return _u(e,t,Re(Re({},n),i))},r}var om=function(e){return _u(gw,e)},_=om;U1.forEach(function(e){_[e]=om(e)});function nd(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Ou(ys.apply(void 0,Wi([e],t,!1))),i=Q1(r);return new tm(i,r)}_.div``;const yw=_.nav`
  display: flex;
  justify-content: space-between;
  padding-top: 12px;
  padding-left: 188px;
  padding-right: 188px;

  @media (max-width: 1439px) {
    padding-left: 32px;
    padding-right: 32px;
  }

  @media (max-width: 767px) {
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 8px;
  }
`,vw=_(Ga)`
  display: flex;
  max-height: 48px;
  font:
    700 12px/1.5 'Roboto',
    sans-serif;
  gap: 4px;
  align-items: center;
  color: var(--primary-focus);
  transition: font-size 0.2s linear;

  &:link,
  &:visited,
  &:active {
    text-decoration: none;
  }

  @media (max-width: 1439px) {
    font-size: 12px;
  }

  @media (max-width: 767px) {
    font-size: 12px;
  }

  .logoWrapper {
    width: 40px;
    height: 48px;
  }
`,xw=_.div`
  position: relative;
  display: flex;
  max-height: 48px;
  font:
    400 18px/1.5 'Roboto',
    sans-serif;
  gap: 8px;
  align-items: center;
  color: var(--primary-focus);
  cursor: default;

  &:link,
  &:hover,
  &:visited,
  &:active {
    text-decoration: none;
  }

  @media (max-width: 1439px) {
    font-size: 18px;
  }

  @media (max-width: 767px) {
    font-size: 16px;
  }

  .imgWrapper {
    width: 28px;
    height: 28px;
  }

  .UserContextButton {
    min-width: 138px;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    transition: font-size 0.2s linear;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 4px;
    color: var(--primary-focus);

    &:focus {
      outline: none;
    }
  }

  .menuButton {
    transform: rotateX(0deg);
    transition: transform 0.3s ease-in-out;
    height: 100%;
    display: flex;
    align-items: center;
  }

  .menuButton.rotate {
    transform: rotateX(180deg);
    transition: transform 0.3s ease-in-out;
    height: 100%;
    display: flex;
    align-items: center;
  }
`,am=e=>k.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:40,height:48,fill:"none",...e},k.createElement("g",{clipPath:"url(#a)"},k.createElement("path",{fill:"#9EBBFF",d:"M15.82 7.318c.673-.53 1.524.618 1.614 1.677.09 1.06-.852 3.444-3.497 4.061-2.644.618-2.958 2.252-2.868 3.223.09.97-.359 2.03-1.3 1.81-.942-.22-1.031-1.678-.18-3.047.852-1.37 3.003-2.604 3.362-3.355.36-.75.09-1.633.807-1.942.717-.309 1.659.486 1.569 1.237 0 0 .717-.706.627-1.766-.058-.695-.472-1.632-.134-1.898ZM33.212 13.763c.25-.707 2.017-.309 2.42.662.404.971.27 1.722.673 2.384.403.662-.717 1.765-1.547 1.633-.83-.132-.516-1.633-.516-2.295 0-.662-1.433-1.237-1.03-2.384ZM27.609 5.428c.613-.54 1.927.39 2.286 1.14.358.75.044 2.736-1.054 2.692-1.098-.044-.661-1.597-1.053-1.92-.694-.574-.672-1.479-.18-1.912ZM20.042.83c.435.673.111 1.588-.995 1.795-1.105.206-1.314-.707-1.912-.5-.598.206-1.256.352-1.524-.119-.269-.47.03-1.177 1.225-1.177s2.407-1.236 3.206 0ZM13.086 7.264c.52 0 .94-.447.94-.999 0-.551-.42-.998-.94-.998s-.942.447-.942.998c0 .552.422.999.942.999ZM9.003 10.57c-.335-.166-1.431 1.559-.684 1.765.747.207 1.218-1.5.684-1.765ZM6.078 15.69s1.464.795.926 2.428c-.538 1.633-1.703 1.427-2.062.927-.358-.5-.358-1.177.24-1.649.597-.472.896-1.706.896-1.706ZM37.157 24.489s.448.663.224 1.854c-.224 1.19-.582 3.53.672 4.193 1.255.663 1.749-1.677 1.256-2.383-.492-.706.269-3.135-2.152-3.664ZM38.748 35.127c.533 0 .964-.514.964-1.148 0-.634-.431-1.148-.964-1.148-.532 0-.964.514-.964 1.148 0 .634.432 1.148.964 1.148ZM.938 35.568c.83-.424 1.524.265 1.614 1.545.09 1.28 1.3 2.384.672 3.046-.628.662-1.357-2.075-1.928-2.329-.875-.39-1.569-1.644-.358-2.262Z"}),k.createElement("path",{fill:"#9EBBFF",d:"M36.235 36.848c-.783.795.259 1.618-1.588 3.708-.77.87.567 3.473-3.138 3.443 0 0-2.152 1.942-4.304 2.207-2.152.266-3.048-.088-5.11 1.06-2.062 1.148-6.634-.795-8.517-1.634-1.883-.838-2.6-.927-4.213-.927s-.986-2.472-2.152-3.532c-1.166-1.059-2.51-1.5-2.6-2.47-.09-.971-.986-1.413-.896-2.914.09-1.502-1.435-1.942-1.614-3.797-.178-1.854.806-2.206.448-3.266-.359-1.06-.448-1.941.09-3.001.064-.128.138-.252.222-.368.46-.647.902-.596 1.212-1.662.359-1.237-.627-1.766.449-2.296 1.076-.529 1.434 1.059.806 2.649-.628 1.59-1.435 3.09-.358 3.354 1.076.265.807-3.001 2.242-4.503 1.434-1.5.807-1.853 2.689-3.354 1.882-1.501 2.062-.882 2.69-2.472.626-1.59 2.398-3.266 4.203-4.061 1.805-.795 2.611-1.147 2.342-2.472-.27-1.325 1.235-1.324 1.29-2.737.055-1.413-1.201-2.383-2.276-2.03-1.076.353-2.152.353-1.794-.794.36-1.147 2.617-1.06 3.684-.53 1.067.529 1.965-.794 3.4.53 1.434 1.324 3.316 1.766 3.047 4.856-.268 3.091-.537 4.149.628 4.326 1.164.177.18-1.413.18-2.648 0-1.236 2.061-1.148 2.599-.177.537.97-.179 2.648.358 3.267.538.618 1.525.529 1.794 1.411.268.883-.179 4.503 1.076 5.298 1.254.794.986-1.942 2.062-1.104 1.075.839 1.344 2.34.717 3.84-.419 1.004-.462 3.509-.219 5.665.119 1.067.307 2.05.553 2.722.74 2.03.78 3.618-.002 4.413Z"}),k.createElement("path",{fill:"#C6D7FF",d:"M21.374 14.347c2.354-.732 4.33 3.318 3.51 5.058-.818 1.74-1.169 7.109 1.873 6.441 3.043-.667.82-5.83 2.457-5.726 1.638.104.936 4.828 1.99 6.326 1.053 1.498 4.686 11.754-1.168 15.326-5.853 3.572-14.137 3.457-17.31.806a13.853 13.853 0 0 1-2.88-3.263 6.837 6.837 0 0 1-.65-1.278c-.285-.768-.235-1.039-.523-1.809a7.295 7.295 0 0 0-.722-1.416c-.633-.957-.92-.845-1.51-1.679-.198-.278-.825-1.218-.883-2.485-.015-.332-.057-1.258.343-1.424.453-.186 1.04.78 1.642.58.315-.106.453-.47.539-.7.255-.676 0-1.095-.123-2.098-.094-.776-.207-1.71.255-2.497.076-.129.294-.55 1.018-.943 2.547-1.383 4.834-.115 6.498-2.65 1.666-2.536 1.698-2.702 3.261-3.368 1.564-.666.16-2.51 2.383-3.201Z"}),k.createElement("path",{fill:"#407BFF",d:"M20.44 48c-1.663 0-3.984-.671-7.02-2.023-1.85-.825-2.506-.894-4.055-.894-1.225 0-1.486-1.1-1.696-1.984-.149-.625-.302-1.271-.716-1.648-.386-.35-.79-.627-1.179-.896-.788-.542-1.469-1.01-1.543-1.819-.03-.32-.178-.585-.35-.892-.27-.484-.607-1.085-.548-2.078.037-.616-.26-1.016-.635-1.523-.411-.556-.878-1.186-.977-2.215-.102-1.054.141-1.666.337-2.159.16-.402.257-.645.129-1.024-.324-.957-.535-2.018.11-3.29.272-.535.559-.786.79-.988.261-.23.45-.395.618-.977.125-.43.055-.747-.014-1.054-.102-.462-.23-1.038.66-1.476.447-.22.884-.183 1.2.1.57.51.627 1.782.137 3.024-.086.218-.176.434-.263.645-.34.825-.726 1.756-.558 2.083.013.025.043.085.198.123.009.003.018.004.028.003.173-.06.382-.884.507-1.377.25-.985.562-2.214 1.333-3.021a5.627 5.627 0 0 0 1.015-1.408c.3-.556.584-1.082 1.713-1.981.718-.574 1.197-.847 1.547-1.048.535-.306.68-.389 1.027-1.268.655-1.66 2.466-3.415 4.404-4.269l.008-.003c1.879-.828 2.315-1.06 2.114-2.05-.18-.886.291-1.347.67-1.717.318-.31.592-.578.613-1.108.022-.579-.226-1.118-.664-1.442-.345-.254-.748-.333-1.107-.215-.69.227-1.613.398-2.098-.069-.195-.188-.386-.548-.184-1.195.13-.415.45-.74.925-.94.98-.412 2.475-.224 3.299.184.295.146.574.095 1.005-.001.66-.148 1.482-.331 2.483.592.304.28.64.528.964.766 1.195.878 2.432 1.787 2.204 4.398-.033.386-.067.741-.098 1.067-.232 2.444-.186 2.764.402 2.853a.64.64 0 0 0 .125.009c.025-.16-.082-.587-.154-.879-.11-.438-.234-.934-.234-1.406 0-.613.382-1.075 1.021-1.235.766-.192 1.863.09 2.3.878.325.588.271 1.335.223 1.994-.034.478-.074 1.02.09 1.208.167.191.416.304.68.424.438.197.98.443 1.189 1.125.097.32.112.855.131 1.531.035 1.24.087 3.115.785 3.557.127.08.2.091.223.085.103-.03.248-.343.336-.53.167-.358.356-.765.762-.861.246-.058.506.018.771.224 1.201.937 1.529 2.617.834 4.28-.576 1.38-.376 6.157.34 8.115.823 2.25.793 3.912-.086 4.805-.203.207-.225.395-.256.797-.05.649-.117 1.537-1.318 2.896-.15.17-.186.536-.224.923-.103 1.047-.258 2.619-3.058 2.65-.486.414-2.416 1.96-4.401 2.204-.61.075-1.126.102-1.58.126-1.148.06-1.977.102-3.389.888-.486.27-1.1.406-1.846.406ZM4.913 21.674a.508.508 0 0 0-.218.063c-.356.175-.346.219-.253.638.076.342.18.81.002 1.423-.23.793-.544 1.068-.847 1.334-.21.183-.407.356-.613.762-.493.971-.392 1.758-.069 2.713.216.638.034 1.096-.142 1.538-.175.44-.373.937-.288 1.812.08.822.463 1.34.834 1.841.41.554.833 1.126.78 2.013-.046.775.197 1.209.455 1.669.196.349.398.71.442 1.188.042.459.561.816 1.218 1.268.392.269.836.575 1.26.96.587.534.776 1.33.942 2.03.237.996.388 1.401.949 1.401 1.608 0 2.402.083 4.372.96 5.11 2.277 7.263 2.154 8.17 1.65 1.568-.874 2.52-.923 3.726-.985.442-.023.942-.049 1.525-.12 2.007-.248 4.07-2.093 4.091-2.111.071-.064.164-.1.26-.1h.003c2.24.018 2.331-.902 2.436-1.967.05-.51.098-.993.41-1.346 1.033-1.17 1.087-1.883 1.13-2.456.033-.42.066-.854.472-1.267.641-.652.61-2.118-.086-4.023-.792-2.165-.978-7.101-.328-8.658.562-1.344.326-2.678-.6-3.4a.52.52 0 0 0-.118-.074c-.071.068-.176.294-.241.433-.178.381-.38.814-.818.94-.264.076-.552.018-.854-.174-1.04-.658-1.094-2.607-1.137-4.172-.016-.571-.031-1.111-.1-1.335-.102-.338-.348-.463-.772-.655-.313-.142-.668-.302-.944-.62-.369-.423-.322-1.07-.272-1.753.042-.582.086-1.185-.132-1.577-.242-.436-.958-.628-1.436-.508-.443.112-.443.406-.443.503 0 .38.112.829.211 1.225.165.661.308 1.231-.021 1.586-.18.194-.454.265-.812.211-1.377-.208-1.268-1.365-1.05-3.67.032-.323.065-.677.099-1.062.19-2.192-.732-2.87-1.9-3.727-.34-.251-.693-.51-1.029-.82-.703-.65-1.183-.542-1.788-.407-.452.1-.964.215-1.52-.06-.66-.328-1.911-.475-2.653-.164-.264.111-.43.268-.491.466-.066.211-.071.376-.014.432.102.098.536.15 1.319-.108.601-.197 1.261-.077 1.81.328.64.473 1.003 1.249.97 2.076-.031.827-.479 1.265-.838 1.616-.377.367-.553.565-.458 1.032.327 1.618-.756 2.097-2.554 2.888l-.008.003c-1.74.766-3.422 2.387-4.002 3.853-.427 1.082-.707 1.276-1.356 1.648-.328.188-.777.445-1.45.981-1.007.803-1.243 1.241-1.517 1.749a6.355 6.355 0 0 1-1.134 1.571c-.634.663-.919 1.785-1.146 2.686-.134.528-.25.984-.417 1.324-.33.666-.8.663-1.05.6-.408-.1-.604-.335-.697-.514-.326-.634.072-1.595.532-2.71.086-.208.174-.42.259-.634.422-1.069.305-1.974.062-2.192a.164.164 0 0 0-.123-.045Z"}),k.createElement("path",{fill:"#407BFF",d:"M10.014 18.402c-.105 0-.21-.013-.312-.038a1.207 1.207 0 0 1-.847-.735c-.302-.716-.115-1.765.489-2.735.491-.788 1.356-1.505 2.12-2.138.56-.466 1.091-.905 1.226-1.189.117-.245.16-.52.2-.787.075-.487.16-1.039.753-1.294.405-.175.897-.097 1.316.208.211.153.384.352.505.582.13-.266.239-.622.204-1.037a5.495 5.495 0 0 0-.13-.704c-.136-.591-.263-1.15.102-1.439a.86.86 0 0 1 .902-.119c.587.249 1.105 1.125 1.179 1.994.098 1.157-.92 3.707-3.717 4.36-2.486.582-2.726 2.08-2.649 2.922.071.768-.163 1.503-.595 1.872-.206.18-.472.278-.746.277Zm4.083-8.441a.563.563 0 0 0-.224.044c-.288.124-.34.38-.413.86-.045.292-.096.623-.248.943-.19.396-.714.831-1.378 1.382-.73.605-1.558 1.291-2 2.001-.493.793-.673 1.686-.447 2.222.091.217.242.352.448.4.217.051.396.013.547-.116.293-.25.454-.809.4-1.392-.076-.824.073-2.819 3.089-3.524 2.46-.575 3.36-2.769 3.276-3.761-.06-.714-.488-1.375-.833-1.521a.28.28 0 0 0-.314.04c-.079.094.037.6.099.873.06.26.12.53.142.781.1 1.177-.678 1.957-.71 1.99a.29.29 0 0 1-.49-.233c.032-.27-.139-.59-.425-.8a.894.894 0 0 0-.519-.189ZM34.904 18.736c-.064 0-.128-.005-.191-.015-.928-.148-.84-1.34-.782-2.13.013-.168.024-.326.024-.445 0-.152-.199-.374-.391-.59-.39-.435-.924-1.032-.624-1.886.119-.337.453-.538.919-.55.734-.018 1.723.433 2.04 1.198.204.49.279.925.344 1.308.067.394.125.734.31 1.036.205.337.157.77-.131 1.19-.318.463-.92.884-1.518.884Zm-.997-5.05h-.032c-.1.004-.34.025-.39.169-.178.504.087.853.51 1.326.276.308.536.598.536.964 0 .14-.012.308-.026.487-.043.583-.109 1.464.3 1.53.352.055.863-.226 1.14-.628.075-.108.235-.382.113-.581-.24-.394-.309-.802-.383-1.234-.063-.372-.129-.756-.31-1.188-.209-.504-.927-.844-1.458-.844ZM28.879 9.545l-.049-.001c-.946-.038-1.052-.932-1.115-1.465-.021-.175-.055-.466-.113-.523-.398-.328-.63-.792-.638-1.27-.007-.42.158-.81.453-1.07.237-.208.556-.278.923-.205.747.15 1.542.864 1.816 1.436.279.584.225 1.78-.266 2.509-.26.386-.609.589-1.011.589Zm-.81-3.995a.39.39 0 0 0-.268.09.823.823 0 0 0-.262.638c.005.318.16.618.434.845.23.19.27.53.314.89.076.643.157.948.567.965.217.009.399-.101.556-.336.364-.54.429-1.526.225-1.953-.21-.438-.856-1.01-1.41-1.121a.798.798 0 0 0-.156-.018ZM18.731 2.939c-.51 0-.833-.22-1.081-.39-.234-.16-.308-.196-.42-.157-.432.149-1.445.498-1.87-.246a.945.945 0 0 1 .006-.96c.14-.24.52-.64 1.47-.64.364 0 .754-.14 1.131-.274.745-.265 1.672-.595 2.318.405.261.405.304.878.119 1.3-.208.473-.683.81-1.303.926a2.012 2.012 0 0 1-.37.036ZM17.307 1.81c.273 0 .489.148.671.273.267.183.52.355 1.016.263.436-.081.749-.292.881-.594a.803.803 0 0 0-.076-.77c-.38-.59-.823-.466-1.636-.176-.424.152-.863.308-1.327.308-.483 0-.838.13-.973.358a.385.385 0 0 0 0 .396c.13.228.493.225 1.178-.01a.814.814 0 0 1 .266-.048ZM13.086 7.547c-.678 0-1.23-.575-1.23-1.282 0-.707.552-1.282 1.23-1.282.678 0 1.229.575 1.229 1.282 0 .707-.552 1.282-1.23 1.282Zm0-1.997c-.36 0-.654.32-.654.715 0 .394.293.715.654.715.36 0 .653-.32.653-.715 0-.394-.293-.715-.653-.715ZM8.448 12.637c-.07 0-.14-.01-.206-.029a.61.61 0 0 1-.452-.488c-.106-.555.419-1.42.812-1.711.237-.176.419-.148.53-.092.46.228.471.93.244 1.507-.203.518-.548.813-.928.813Zm.466-1.752c-.211.178-.58.758-.562 1.095.004.072.018.075.045.082.166.047.346-.197.443-.443.128-.328.118-.611.074-.734ZM5.694 19.689c-.391 0-.772-.181-.987-.48-.486-.678-.364-1.514.295-2.033.425-.336.719-1.234.796-1.552a.281.281 0 0 1 .163-.193.293.293 0 0 1 .255.01c.579.315 1.545 1.296 1.062 2.764-.38 1.154-1.04 1.416-1.4 1.47-.06.009-.122.014-.184.014Zm.544-3.531c-.149.436-.437 1.113-.877 1.46-.514.405-.42.933-.183 1.263a.655.655 0 0 0 .615.233c.394-.059.727-.444.937-1.084.314-.95-.153-1.568-.492-1.872ZM38.478 30.936a1.2 1.2 0 0 1-.56-.15c-1.358-.717-1.118-2.908-.82-4.495.198-1.05-.176-1.64-.18-1.645a.28.28 0 0 1 .002-.317.287.287 0 0 1 .3-.117c1.905.417 2.054 1.925 2.152 2.922.036.364.07.708.175.858.424.607.267 1.958-.3 2.581-.218.24-.484.363-.769.363Zm-.835-5.99c.087.348.136.836.021 1.448-.41 2.183-.234 3.492.525 3.892.255.135.45.108.63-.09.41-.453.502-1.524.252-1.882-.188-.27-.227-.666-.273-1.124-.083-.846-.176-1.789-1.155-2.244ZM38.748 35.41c-.69 0-1.251-.642-1.251-1.43 0-.79.561-1.432 1.251-1.432.69 0 1.252.642 1.252 1.431 0 .79-.562 1.431-1.252 1.431Zm0-2.295c-.372 0-.675.388-.675.864 0 .477.303.864.675.864.373 0 .676-.387.676-.864 0-.476-.303-.864-.676-.864ZM3.02 40.545a.57.57 0 0 1-.076-.005c-.455-.065-.779-.706-1.153-1.448-.176-.349-.471-.933-.614-1.003C.513 37.792.02 37.129 0 36.513c-.013-.5.273-.925.805-1.197.396-.202.805-.208 1.152-.016.5.276.82.93.881 1.794.035.491.255.96.468 1.415.306.65.621 1.323.128 1.843a.558.558 0 0 1-.414.193Zm-1.605-4.818a.763.763 0 0 0-.345.093c-.335.171-.501.399-.494.677.011.398.38.87.84 1.075.307.138.539.572.89 1.268.185.364.52 1.029.704 1.13l.004-.004c.218-.23.055-.613-.23-1.219-.223-.477-.477-1.019-.519-1.614-.046-.66-.266-1.16-.59-1.339a.53.53 0 0 0-.26-.067ZM22.771 32.5c.23 1.128-.505 2.314-1.568 2.76-1.488.668-3.356-.118-3.805-1.681a2.27 2.27 0 0 1-.055-1.079.165.165 0 0 1 .058-.095.17.17 0 0 1 .272.091c.244 1.147 1.212 2.005 2.368 1.993 1.148-.008 2.089-.855 2.336-1.989.041-.21.353-.207.393 0h.001Z"}),k.createElement("path",{fill:"#fff",d:"M9.889 34.226c1.037-.196 1.673-1.414 1.419-2.72-.254-1.308-1.301-2.209-2.339-2.014-1.037.196-1.673 1.414-1.419 2.72.254 1.308 1.301 2.209 2.339 2.014ZM9.945 28.198c1.073.33 2.15-3.13 4.051-3.912 1.9-.783 3.153-3.245 3.736-4.837.583-1.592 2.976-2.632 2.47-3.746-.505-1.113-2.694-.217-3.984 1.479-1.29 1.695-.714 3.464-2.66 4.213-1.944.748-5.833 6.123-3.613 6.803Z",opacity:.5}),k.createElement("path",{fill:"#407BFF",d:"M35.257 36.728c-.735.717.243 1.46-1.493 3.347-.723.785.534 3.136-2.948 3.109 0 0-2.022 1.753-4.045 1.993-2.022.24-2.864-.08-4.802.956-1.938 1.037-6.236-.717-8.005-1.474-1.77-.758-2.443-.837-3.96-.837-1.516 0-.926-2.233-2.022-3.189-1.096-.956-2.36-1.355-2.444-2.231-.085-.877-.927-1.275-.842-2.63.084-1.356-1.349-1.754-1.517-3.428-.168-1.674.758-1.992.42-2.949-.336-.957-.42-1.753.086-2.71.06-.116.13-.227.208-.332.022.542.052 1.085.24 1.42.195.349.453.67.572 1.046.305.968-.378 1.952-.478 2.957-.185 1.86 1.56 3.3 2.754 4.788 1.062 1.324 1.824 2.953 3.324 3.82 1.669.965 3.834.717 5.662.06 1.828-.657 3.497-1.685 5.36-2.25 2.154-.657 4.466-.668 6.727-.556 1.628.08 3.487.143 4.62-.965.651-.638.912-1.54 1.09-2.411.342-1.672.47-3.379.383-5.082l.591 1.105c.111.963.288 1.85.52 2.457.696 1.834.733 3.268-.001 3.986Z",opacity:.2}),k.createElement("path",{fill:"#407BFF",d:"M25.413 24.93c1.23-.124 2.367 1.203 2.538 2.963.171 1.76-.688 3.288-1.919 3.412-1.23.123-2.367-1.204-2.538-2.964-.171-1.76.688-3.287 1.919-3.411Z"}),k.createElement("path",{fill:"#fff",d:"M25.5 25.667c.391.162.56.76.376 1.338-.184.578-.65.916-1.043.755-.392-.162-.56-.76-.377-1.338.184-.578.65-.916 1.043-.755Z"}),k.createElement("path",{fill:"#8BAEFF",d:"M26.82 29.451c.185.136.207.466.05.738-.158.272-.437.384-.622.248-.185-.135-.209-.466-.05-.738.157-.272.436-.383.621-.248Z"}),k.createElement("path",{fill:"#407BFF",d:"M14.857 24.93c-1.23-.124-2.367 1.203-2.538 2.963-.171 1.76.688 3.288 1.919 3.412 1.23.123 2.367-1.204 2.538-2.964.172-1.76-.688-3.287-1.918-3.411Z"}),k.createElement("path",{fill:"#fff",d:"M14.771 25.667c-.392.162-.561.76-.377 1.338.184.578.65.916 1.043.755.392-.162.561-.76.377-1.338-.184-.578-.65-.916-1.043-.755Z"}),k.createElement("path",{fill:"#8BAEFF",d:"M13.451 29.451c-.186.136-.208.466-.05.738.158.272.437.384.622.248.185-.135.208-.466.05-.738-.158-.272-.436-.383-.622-.248Z"})),k.createElement("defs",null,k.createElement("clipPath",{id:"a"},k.createElement("path",{fill:"#fff",d:"M0 0h40v48H0z"})))),ww=e=>k.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",...e},k.createElement("path",{fill:"#407BFF",fillRule:"evenodd",d:"M8.353 10.853a.5.5 0 0 1-.706 0l-5-5a.5.5 0 0 1 .706-.706L8 9.793l4.647-4.646a.5.5 0 1 1 .706.706l-5 5Z",clipRule:"evenodd"})),Sw=_.div`
position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background-color: rgba(0, 0, 0, 0.5);
z-index: 100;
overflow-y: hidden;
`,sm=({children:e,isOpen:t})=>t?c.jsx(Sw,{children:e}):null,lm=e=>k.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",...e},k.createElement("path",{stroke:"#407BFF",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M1 13 13 1M1 1l12 12"})),kw=e=>k.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:14,height:14,fill:"none",...e},k.createElement("path",{stroke:"#407BFF",strokeLinecap:"round",strokeLinejoin:"round",d:"M1 10v1.5A1.5 1.5 0 0 0 2.5 13h9a1.5 1.5 0 0 0 1.5-1.5V10M4 4l3-3m0 0 3 3M7 1v9"})),hl=e=>k.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",...e},k.createElement("path",{stroke:"#407BFF",strokeLinecap:"round",strokeLinejoin:"round",d:"M2.654 5.482A6.985 6.985 0 0 0 1.29 8a7.004 7.004 0 0 0 8.619 4.737M4.152 4.152A7.004 7.004 0 0 1 14.71 7.999a7.015 7.015 0 0 1-2.862 3.849M4.152 4.152 2 2m2.152 2.152 2.434 2.433m5.262 5.263L14 14m-2.152-2.152L9.415 9.415a2 2 0 1 0-2.829-2.829m2.828 2.828L6.587 6.587"})),ml=e=>k.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",...e},k.createElement("path",{stroke:"#407BFF",strokeLinecap:"round",strokeLinejoin:"round",d:"M1.357 8.215a.675.675 0 0 1 0-.426 7.001 7.001 0 0 1 13.285-.004.665.665 0 0 1 0 .426 7.003 7.003 0 0 1-13.285.003Z"}),k.createElement("path",{stroke:"#407BFF",strokeLinecap:"round",strokeLinejoin:"round",d:"M10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"})),um="data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEASABIAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAcABwDAREAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD+4j4j/EyXR7x/Dug3EEV+ir/aeoMUdrIyKrrbW0b/ACG5MTB5ZmDrAHEaL9o3NBMuZbf18hpLrY/ID9sD/gpN8EP2TfE+jeHPiXL4w8XeJdYSK5ms/Dz6VfanbQzosscdrZatrFpqet6i0UsFz9h0i1uY7ezmWe6u7Y7I3nkcoSqNxjGGkuaSild7tuyjG73k0tNNrHRSpTq2jBNuV1FKMm5NbqKjdt97JtaXWtz71+E3x307xD4S8I/EXwF4tj8UeAvGeg6T4n0CSZ7lrDVdB1qzjv7G5hiu41u9Nlltp45Cojt54Zh5V3A3lvARe47Sumt09V+Bi136btf1/mfcHh7XtP8AEukWes6ZKJbW8jJxkF4ZkYpPbygfdlglVo3HQ4DoSjKx0TvsQ9D8zvid8U/B/wAOPDnir4o/E7xLp3hTwrpP2vWNf17V5WS3tVmneRl2xq9xcXMsjCK3tbaGW4nkIjghdiq04QnUkoU1eTvb0W7fRJb3Y0nJpJXb6L7z+bz9uX9u74QeLXT4q/Bj40fF3wZ/bWrT+C9Cl0X4UfCLxBoer+IbKDwaur+ONHtviRp6+MdU1SDwjHD4am0Hw3fW9zNbar4f1K7gtBaR2mqeBnWBqTxLoVcJRxcYwp4iSq1cTQhGHv01TnWw7tCEpRlUVSrHl5oNKVlK36Fw5Up4TBOdXE1MFVftIU5UI4fETrOTjP3KGIhKNSrG8afJRk58k23CTcLfqD/wT2/bN/ZX+PPwc+Hfwu+CvxJi1Pxb8O/h94e0TVvBXiPTR4W8YKNC0m0stQ1S20Ty4tMvtOe5R7jPhia80/TYJooJIrBFW2j92WFxFCnD2tpKMYpzp3cObl+H3veVtk56vq27s+ExNSFWvWqU4uMKlSUoxbu1FttczWnM92lZJtqKUbJfp14a+JHiPwjYz6bpU0iW017JesqZK+dLDbwt3OMrbpkfj3qI3S02v2/4KMD8lP8Ag4N+GXxXm/ZO1jwn8MvBvifxhFqPxI0DxHe2PhTR73XL6TwjaQazLOpsNOSe9mXTtTuLCO6MVtMsQiiuJ1iimhlPTRxmEwLlUxmJo4aEouEKmIqRpwc20+Xnm1CLcU7Xkm9ldnVhMLisXOUMJQq4iooXdOjTlUnbmSuoQvJ+dlp5bn8P+j/G/wAaeGPB2oeCvDPiqWLSvEVrLb6rpV1p+n6tY2kj6Rc6FJq9pLqdndXPhy9TR9X1TTJtR0fZqE9vcG3tkWfy7henH5bgMxq4XE4mm6lXC8rpOM6kFJQnGpGNZQkoVaUasIVIwnFpSV18TO7B5tj8voV8LhqqjDEQlCpz0oVJw5oSpznQnUi5UKkqc505zg05Qst4pr9Mf+CNXwn+LOkftw/AH4pab4A8Y3/whgT4rx3HxMs9IvbbwRqsTfDfxv4Uu518RXsFppUzWHibUIrSTRYp/wC1opoQqWWciTCrmOEqw+rurChiqkG/qVadNYtcjjOXNRhOfuqNpc8XKGsddTHG5ZXwjrShKGNwdGcY/wBpYSNeWArObtGVKtXo0KicpXh7OpTp1FKE1KC5Wf6IHwr+E1gfCFre+KtPkGp6rcS6kltIfLms7GaOCOzgnX5sTSRw/a2RtskIuhbyoksTqOdbL9TzD0n4pfCnwN8ZvBmr+AviFow1nw9rNs9vOkV1dadqFqz7StzpuqWE1vf2FyjIh3286pOga2u47i0lmt5OTHYDCZlh5YbGUVWpNxkk24yjOLvGcJxalGSfZ2avGSlFuL7suzLGZViYYvA1nRrRTjfljOM4SVpQnCalCcWujV4u0ouM4xkv81n/AIKu/sFfB79lH9sLVvhV8MvEXxJu/Cmv69c6hPH4o1rw3f3lm97LbXHk2U2k+EdDgMNqL+WC1a+tb65EKp59xPMZZpemtmFelRnJKnKVOTinKL97u5KMoq73fKorRWSsdFDDwxNSHPKcfarmkoNJJt9OaMtru3NzH9n3/BKD9gT9nX4a/sjfs5asuh6z441Dw1Ya14n0Cb4gajZ63BpWv+JvEGo+IL/VIdNsdL0jSbi6t72/lGlvf2N3/ZixW1xaCPUYhfHx8FhKOJxss9q8zx9SlPDJqTVGnR/dRcadNa3kqUOaU5Te9mk2jrzPH4ijg1kNNwWApVoYl3jetVrJ1XGVWo3a0faztGnGnF+7zJ8qt+1le2fPAP/Z",bw=_.div`
  background-color: var(--primary-light);
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 1008px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: start;
  max-height: 80vh;
  overflow-y: auto;
  padding: 32px 24px 32px 24px;

  @media (max-width: 1439px) {
    width: 704px;
    padding: 32px 12px 32px 24px;
  }

  @media (max-width: 767px) {
    width: 280px;
    padding: 32px 12px 32px 12px;
  }

  .settingsGridContainer {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto auto;
    gap: 20px;
    margin-bottom: 24px;
    align-items: start;
    justify-items: start;
    grid-template-areas:
      'gender password'
      'name newPassword'
      'email repeatPassword';

    @media (max-width: 1439px) {
      grid-template-columns: 1fr;
      grid-template-areas:
        'gender'
        'name'
        'email'
        'password'
        'newPassword'
        'repeatPassword';
    }

    @media (max-width: 767px) {
      width: 256px;
      margin-bottom: 26px;
    }
  }

  .settingsFirst {
    display: flex;
    flex-wrap: nowrap;
    width: 960px;
    height: 32px;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;

    @media (max-width: 1439px) {
      width: 656px;
    }

    @media (max-width: 767px) {
      width: 256px;
    }
  }

  .xMarkWrapper {
    width: 16px;
    height: 16px;
    cursor: pointer;
  }

  .xMarkWrapper:hover {
    border-bottom: 1px solid var(--primary-focus);
  }

  .uploadPhotoButton {
    margin: 0px;
    font:
      500 16px/1.5 'Roboto',
      sans-serif;
    color: var(--primary-focus);
    padding: 0;
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    gap: 4px;
  }

  .uploadPhotoButton:hover .arrowUpWrapper {
    transform: rotateY(180deg);
    transition: transform 0.5s linear;
  }

  .settingsSecond {
    display: flex;
    flex-direction: row;
    width: 222px;
    height: 108px;
    align-items: center;
    justify-content: start;
    flex-wrap: wrap;
    margin-bottom: 24px;

    @media (max-width: 1439px) {
      width: 656px;
    }

    @media (max-width: 767px) {
      width: 256px;
    }
  }

  .uploadPhotoDiv {
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: center;
  }

  .genderIdentityDiv {
    display: flex;
    flex-direction: column;
    align-items: start;
    grid-area: gender;

    @media (max-width: 767px) {
      width: 256px;
    }
  }

  .settingsRadioLabel {
    display: flex;
    padding-bottom: 4px;
    align-items: start;
    font:
      500 18px/1.5 'Roboto',
      sans-serif;
  }

  .SettingsRadioForm {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 182px;
    row-gap: 4px;
    column-gap: 8px;
  }

  .radioLabelOption {
    margin: 0px;
    font:
      400 16px/1.5 'Roboto',
      sans-serif;
    cursor: pointer;
  }

  .radioOptionsDiv {
    display: flex;
    flex-direction: column;
  }

  .radioOption {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
  }

  .radioInput {
    opacity: 0;
    position: absolute;
  }

  .customRadioButton {
    width: 20px;
    height: 20px;
    border: 2px solid #007bff;
    border-radius: 50%;
    margin-right: 8px;
    cursor: pointer;
    position: relative;
  }

  .customRadioButton::after {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #007bff;
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .radioInput:checked + .customRadioButton::after {
    display: block;
  }

  .radioInput:checked + .customRadioButton + .radioLabelOption {
    font-weight: bold;
    color: #007bff;
  }

  .passwordLabel {
    margin: 0px;
    font:
      400 16px/1.5 'Roboto',
      sans-serif;
  }

  .passwordInput {
    width: 392px;
    height: 44px;
    padding: 12px 10px 12px 10px;
    border-radius: 6px;
    border: 1px solid var(--secondary-fifth);
    color: var(--secondary-fifth);

    &::placeholder {
      color: var(--secondary-fifth);
    }

    &:focus {
      color: var(--primary-focus);
      border: 1px solid var(--secondary-fifth);
      outline: none;
    }

    @media (max-width: 767px) {
      width: 256px;
    }
  }

  .passwordInput:not(:placeholder-shown) {
    color: var(--primary-focus);
  }

  .passwordInputContainer {
    position: relative;
    width: 392px;

    @media (max-width: 767px) {
      width: 256px;
    }
  }

  .passwordDiv {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 4px;
    grid-area: password;
  }

  .nameDiv {
    display: flex;
    flex-direction: column;
    grid-area: name;
    gap: 4px;

    @media (max-width: 767px) {
      width: 256px;
    }
  }

  .newPasswordDiv {
    grid-area: newPassword;
    width: 392px;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 4px;

    @media (max-width: 767px) {
      width: 256px;
    }
  }

  .emailDiv {
    display: flex;
    flex-direction: column;
    grid-area: email;
    gap: 4px;
  }

  .confirmNewPasswordDiv {
    grid-area: repeatPassword;
    width: 392px;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 4px;

    @media (max-width: 767px) {
      width: 256px;
    }
  }

  .settingsSixth {
    display: flex;
    flex-direction: row;
    width: 960px;
    height: 44px;
    align-items: center;
    justify-content: end;
    gap: 24px;

    @media (max-width: 1439px) {
      width: 656px;
    }

    @media (max-width: 767px) {
      width: 256px;
      flex-direction: column;
    }
  }

  .saveButton {
    width: 160px;
    height: 44px;
    margin: 0px;
    padding: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    font:
      500 18px/1.5 'Roboto',
      sans-serif;
    color: var(--primary-light);
    background: var(--primary-focus);
    border: 1px solid transparent;
    border-radius: 10px;

    @media (max-width: 767px) {
      width: 256px;
      height: 36px;
    }
  }

  .saveButton:hover {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }

  .settingsP1 {
    margin: 0px;
    font:
      500 26px/1.5 'Roboto',
      sans-serif;
  }

  .settingsP2 {
    margin: 0px;
    margin-bottom: 4px;
    font:
      500 18px/1.5 'Roboto',
      sans-serif;
    width: 100%;
  }

  .settingsP3 {
    margin: 0px;
    font:
      500 18px/1.5 'Roboto',
      sans-serif;
    width: 100%;
  }

  .ShowPasswordWrapper {
    width: 16px;
    height: 16px;
    background: var(--primary-light);
    position: absolute;
    padding: 0;
    margin: 0;
    border: none;
    cursor: pointer;
    top: 14px;
    right: 16px;
  }

  .showPasswordSVG {
    position: relative;
  }

  .settingsImgWrapper {
    width: 80px;
    height: 80px;
  }

  .arrowUpWrapper {
    width: 16px;
    height: 16px;
    transition: transform 0.5s linear;
  }

  .invalid {
    border: 1px solid var(--secondary-second);
    color: var(--secondary-second);

    &:focus,
    &:active {
      color: var(--secondary-second);
      border: 1px solid var(--secondary-second);
      outline: none;
    }
  }

  .invalid.passwordInput:not(:placeholder-shown) {
    color: var(--secondary-second);
  }
`,Ew=({isSettingsModalOpen:e,toggleSettingsModal:t})=>{const[n,r]=k.useState({oldPassword:!1,newPassword:!1,confirmNewPassword:!1}),i=b=>{r({...n,[b]:!n[b]})},o=b=>{const E=document.getElementById(b);E.type=n[b]?"password":"text"},[a,s]=k.useState(!0),[l,u]=k.useState(!0),[f,d]=k.useState({oldPassword:!0,newPassword:!0,confirmNewPassword:!0}),[g,x]=k.useState(!1),[v,y]=k.useState(!1),[S,h]=k.useState({oldPassword:!1,newPassword:!1,confirmNewPassword:!1}),p=b=>{x(!0);const E=b.target.value;s(!E||E.length>=2&&/^[A-Za-z]+$/.test(E))},m=b=>{y(!0);const E=b.target.value;u(!E||/\S+@\S+\.\S+/.test(E))},w=(b,E)=>{h({...S,[E]:!0});const C=b.target.value;d({...f,[E]:!C||C.length>=6})};return c.jsx(sm,{isOpen:e,onClose:t,children:c.jsxs(bw,{children:[c.jsxs("div",{className:"settingsFirst",children:[c.jsx("p",{className:"settingsP1",children:"Settings"}),c.jsx(lm,{className:"xMarkWrapper",onClick:t})]}),c.jsxs("div",{className:"settingsSecond",children:[c.jsx("p",{className:"settingsP2",children:"Your Photo"}),c.jsxs("div",{className:"uploadPhotoDiv",children:[c.jsx("div",{className:"settingsImgWrapper",children:c.jsx("img",{src:um,alt:"User Profile Picture",width:80,height:80})}),c.jsxs("button",{className:"uploadPhotoButton",children:[c.jsx("div",{className:"arrowUpWrapper",children:c.jsx(kw,{})}),"Upload a photo"]})]})]}),c.jsxs("div",{className:"settingsGridContainer",children:[c.jsx("div",{className:"genderIdentityDiv",children:c.jsxs("form",{className:"settingsRadioForm",children:[c.jsx("label",{className:"settingsRadioLabel",htmlFor:"genderIdentity",children:"Your gender identity"}),c.jsxs("div",{className:"radioOptionsDiv",children:[c.jsxs("label",{className:"radioOption",children:[c.jsx("input",{className:"radioInput",type:"radio",id:"woman",name:"gender",value:"woman",checked:!0}),c.jsx("div",{className:"customRadioButton"}),c.jsx("span",{className:"radioLabelOption",children:"Woman"})]}),c.jsxs("label",{className:"radioOption",children:[c.jsx("input",{className:"radioInput",type:"radio",id:"man",name:"gender",value:"man"}),c.jsx("div",{className:"customRadioButton"}),c.jsx("span",{className:"radioLabelOption",children:"Man"})]})]})]})}),c.jsxs("div",{className:"passwordDiv",children:[c.jsx("p",{className:"settingsP3",children:"Password"}),c.jsx("label",{className:"passwordLabel",htmlFor:"oldPassword",children:"Outdated password:"}),c.jsxs("div",{className:"passwordInputContainer",children:[c.jsx("input",{className:`passwordInput ${!f.oldPassword&&S.oldPassword?"invalid":""}`,type:n.oldPassword?"text":"password",id:"oldPassword",placeholder:"Password",onChange:b=>w(b,"oldPassword")}),c.jsx("button",{className:"ShowPasswordWrapper",onClick:()=>{i("oldPassword"),o("oldPassword")},children:n.oldPassword?c.jsx(ml,{className:"showPasswordSVG"}):c.jsx(hl,{className:"showPasswordSVG"})})]})]}),c.jsxs("div",{className:"nameDiv",children:[c.jsx("label",{className:"passwordLabel",htmlFor:"userName",children:"Your name:"}),c.jsx("div",{className:"passwordInputContainer",children:c.jsx("input",{className:`passwordInput ${!a&&g?"invalid":""}`,type:"text",id:"userName",placeholder:"John",onChange:p})})]}),c.jsxs("div",{className:"newPasswordDiv",children:[c.jsx("label",{className:"passwordLabel",htmlFor:"newPassword",children:"New password:"}),c.jsxs("div",{className:"passwordInputContainer",children:[c.jsx("input",{className:`passwordInput ${!f.newPassword&&S.newPassword?"invalid":""}`,type:n.newPassword?"text":"password",id:"newPassword",placeholder:"Password",onChange:b=>w(b,"newPassword")}),c.jsx("button",{className:"ShowPasswordWrapper",onClick:()=>{i("newPassword"),o("newPassword")},children:n.newPassword?c.jsx(ml,{className:"showPasswordSVG"}):c.jsx(hl,{className:"showPasswordSVG"})})]})]}),c.jsxs("div",{className:"emailDiv",children:[c.jsx("label",{className:"passwordLabel",htmlFor:"userEmail",children:"E-mail:"}),c.jsx("div",{className:"passwordInputContainer",children:c.jsx("input",{className:`passwordInput ${!l&&v?"invalid":""}`,type:"email",id:"userEmail",placeholder:"E-mail",onChange:m})})]}),c.jsxs("div",{className:"confirmNewPasswordDiv",children:[c.jsx("label",{className:"passwordLabel",htmlFor:"confirmNewPassword",children:"Repeat New password:"}),c.jsxs("div",{className:"passwordInputContainer",children:[c.jsx("input",{className:`passwordInput ${!f.confirmNewPassword&&S.confirmNewPassword?"invalid":""}`,type:n.confirmNewPassword?"text":"password",id:"confirmNewPassword",placeholder:"Password",onChange:b=>w(b,"confirmNewPassword")}),c.jsx("button",{className:"ShowPasswordWrapper",onClick:()=>{i("confirmNewPassword"),o("confirmNewPassword")},children:n.confirmNewPassword?c.jsx(ml,{className:"showPasswordSVG"}):c.jsx(hl,{className:"showPasswordSVG"})})]})]})]}),c.jsx("div",{className:"settingsSixth",children:c.jsx("button",{className:"saveButton",children:"Save"})})]})})},Cw=_.div`
  background-color: var(--primary-light);
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 592px;
  min-height: 216px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 80vh;
  overflow-y: auto;
  gap: 24px;
  padding: 32px 24px 32px 24px;

  @media (max-width: 1439px) {
    max-width: 592px;
  }

  @media (max-width: 767px) {
    max-width: 280px;
    min-height: 280px;
  }

  .logOutDiv1 {
    display: flex;
    flex-wrap: nowrap;
    width: 544px;
    height: 32px;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 767px) {
      max-width: 232px;
    }
  }

  .logOutDiv2 {
    display: flex;
    flex-wrap: nowrap;
    width: 544px;
    height: 32px;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 767px) {
      max-width: 232px;
    }
  }

  .logOutDiv3 {
    display: flex;
    flex-wrap: nowrap;
    width: 544px;
    align-items: center;
    gap: 24px;
    flex-direction: row-reverse;

    @media (max-width: 767px) {
      max-width: 232px;
      flex-direction: column-reverse;
    }
  }

  .logOutP1 {
    margin: 0px;
    font:
      500 26px/1.5 'Roboto',
      sans-serif;
  }

  .logOutP2 {
    margin: 0px;
    font:
      500 18px/1.5 'Roboto',
      sans-serif;
  }

  .logOutButtonCancel {
    width: 160px;
    height: 44px;
    margin: 0px;
    padding: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    font:
      500 18px/1.5 'Roboto',
      sans-serif;
    color: var(--primary-light);
    background: var(--secondary-fifth);
    border: 1px solid transparent;
    border-radius: 10px;

    @media (max-width: 767px) {
      max-width: 232px;
      max-height: 36px;
    }
  }

  .logOutButtonCancel:hover {
    box-shadow: 0px 4px 14px 0px rgba(215, 227, 255, 0.54);
  }

  .logOutButtonDelete {
    width: 160px;
    height: 44px;
    margin: 0px;
    padding: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    font:
      500 18px/1.5 'Roboto',
      sans-serif;
    color: var(--primary-light);
    background: var(--secondary-second);
    border: 1px solid transparent;
    border-radius: 10px;

    @media (max-width: 767px) {
      max-width: 232px;
      max-height: 36px;
    }
  }

  .logOutButtonDelete:hover {
    box-shadow: 0px 4px 14px 0px rgba(239, 80, 80, 0.54);
  }

  .xMarkWrapper {
    width: 16px;
    height: 16px;
    cursor: pointer;
  }

  .xMarkWrapper:hover {
    border-bottom: 1px solid var(--primary-focus);
  }
`,Pw=({isLogoutModalOpen:e,toggleLogoutModal:t})=>c.jsx(sm,{isOpen:e,onClose:t,children:c.jsxs(Cw,{children:[c.jsxs("div",{className:"logOutDiv1",children:[c.jsx("p",{className:"logOutP1",children:"Delete Entry"}),c.jsx(lm,{className:"xMarkWrapper",onClick:t})]}),c.jsx("div",{className:"logOutDiv2",children:c.jsx("p",{className:"logOutP2",children:"Are you sure you want to delete the entry?"})}),c.jsxs("div",{className:"logOutDiv3",children:[c.jsx("button",{className:"logOutButtonDelete",children:"Delete"}),c.jsx("button",{className:"logOutButtonCancel",onClick:t,children:"Cancel"})]})]})}),jw=_.div`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: var(--primary-light);
  border: 1px solid var(--primary-light);
  border-radius: 12px;
  padding-top: 16px;
  padding-bottom: 16px;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.2);
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  row-gap: 16px;
  opacity: 0;
  transform: translateY(-10px);
  visibility: hidden;
  transition:
    opacity 0.3s ease,
    transform 0.3s ease,
    visibility 0.3s;
  &.visible {
    opacity: 1;
    transform: translateY(0);
    visibility: visible;
  }

  .dropDownElement {
    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  .dropDownButton {
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    color: var(--primary-focus);
    font-family: inherit;
    font-size: inherit;
    justify-content: space-evenly;
    align-items: center;
    display: flex;
    width: 100%;
    cursor: pointer;

    &:focus {
      outline: none;
    }

    &:active {
      outline: none;
    }
  }

  .svgCog,
  .svgLogOut {
    transition: transform 1s ease-in-out;
  }

  .dropDownButton:hover .svgCog {
    transform: rotate(180deg);
  }

  .dropDownButton:hover .svgLogOut {
    transform: rotateY(180deg);
  }
`,Ow=e=>k.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",...e},k.createElement("path",{stroke:"#407BFF",strokeLinecap:"round",strokeLinejoin:"round",d:"M6.396 2.627A.75.75 0 0 1 7.136 2h1.729a.75.75 0 0 1 .74.627l.142.854c.042.249.208.457.43.58.049.026.098.055.146.084.216.131.48.172.717.083l.811-.304a.75.75 0 0 1 .914.327l.864 1.498a.75.75 0 0 1-.174.954l-.668.551a.828.828 0 0 0-.288.661 4.38 4.38 0 0 1 0 .17c-.004.252.092.5.287.66l.67.552a.75.75 0 0 1 .173.954l-.865 1.498a.75.75 0 0 1-.913.327l-.811-.304a.83.83 0 0 0-.717.083c-.049.03-.098.057-.147.085a.831.831 0 0 0-.43.58l-.141.853a.75.75 0 0 1-.74.627h-1.73a.75.75 0 0 1-.74-.627l-.142-.854a.83.83 0 0 0-.429-.58 4.353 4.353 0 0 1-.147-.084.83.83 0 0 0-.717-.083l-.811.304a.75.75 0 0 1-.913-.327l-.865-1.498a.75.75 0 0 1 .174-.954l.669-.551a.83.83 0 0 0 .287-.661 4.632 4.632 0 0 1 0-.17.827.827 0 0 0-.287-.66l-.67-.552a.75.75 0 0 1-.173-.954l.865-1.498a.75.75 0 0 1 .913-.327l.811.304a.83.83 0 0 0 .717-.083c.048-.029.098-.058.147-.085a.828.828 0 0 0 .43-.58l.142-.853Z"}),k.createElement("path",{stroke:"#407BFF",strokeLinecap:"round",strokeLinejoin:"round",d:"M10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"})),Nw=e=>k.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",...e},k.createElement("path",{stroke:"#407BFF",strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 6V3.5A1.5 1.5 0 0 0 9 2H5a1.5 1.5 0 0 0-1.5 1.5v9A1.5 1.5 0 0 0 5 14h4a1.5 1.5 0 0 0 1.5-1.5V10m2 0 2-2m0 0-2-2m2 2H6"})),Tw=({menuRef:e,isMenuVisible:t,toggleSettingsModal:n,toggleLogoutModal:r})=>c.jsxs(jw,{ref:e,className:t?"visible":"",children:[c.jsx("div",{className:"dropDownElement",children:c.jsxs("button",{className:"dropDownButton",onClick:n,children:[c.jsx(Ow,{className:"svgCog"}),"Setting"]})}),c.jsx("div",{className:"dropDownElement",onClick:r,children:c.jsxs("button",{className:"dropDownButton",children:[c.jsx(Nw,{className:"svgLogOut"}),"Log out"]})})]}),_w=()=>{const[e,t]=k.useState(!1),n=k.useRef(null),r=k.useRef(null),[i,o]=k.useState(!1),[a,s]=k.useState(!1),l=()=>{t(d=>!d)};k.useEffect(()=>{function d(g){const x=i||a;!n.current.contains(g.target)&&!r.current.contains(g.target)&&!x&&t(!1)}return document.addEventListener("mousedown",d),()=>{document.removeEventListener("mousedown",d)}},[n,r,i,a]);const u=()=>{o(!i)},f=()=>{s(!a)};return k.useEffect(()=>{const d=g=>{g.key==="Escape"&&(o(!1),s(!1))};return window.addEventListener("keydown",d),()=>{window.removeEventListener("keydown",d)}},[]),c.jsxs("header",{children:[c.jsxs(yw,{children:[c.jsxs(vw,{to:"/first",children:[c.jsx("svg",{className:"logoWrapper",children:c.jsx(am,{})}),"TRACKER",c.jsx("br",{}),"OF WATER"]}),c.jsxs(xw,{children:[c.jsxs("button",{className:"UserContextButton",ref:r,onClick:l,children:["Template",c.jsx("div",{className:"imgWrapper",children:c.jsx("img",{src:um,alt:"User Profile Picture"})}),c.jsx("div",{className:`menuButton ${e?"rotate":""}`,children:c.jsx(ww,{})})]}),c.jsx(Tw,{menuRef:n,isMenuVisible:e,toggleSettingsModal:u,toggleLogoutModal:f})]})]}),c.jsx(Ew,{isSettingsModalOpen:i,toggleSettingsModal:u}),c.jsx(Pw,{isLogoutModalOpen:a,toggleLogoutModal:f})]})},Rw=_.div``,Mw=_.nav`
  display: flex;
  justify-content: space-between;
  padding-top: 12px;
  padding-left: 188px;
  padding-right: 188px;

  @media (max-width: 1439px) {
    padding-left: 32px;
    padding-right: 32px;
  }

  @media (max-width: 767px) {
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 8px;
  }
`,Aw=_(Ga)`
  display: flex;
  max-height: 48px;
  font:
    700 12px/1.5 'Roboto',
    sans-serif;
  gap: 4px;
  align-items: center;
  color: var(--primary-focus);
  transition: font-size 0.2s linear;

  &:link,
  &:visited,
  &:active {
    text-decoration: none;
  }

  @media (max-width: 1439px) {
    font-size: 12px;
  }

  @media (max-width: 767px) {
    font-size: 12px;
  }
`,Dw=_(Ga)`
  display: flex;
  max-height: 48px;
  font:
    400 18px/1.5 'Roboto',
    sans-serif;
  gap: 8px;
  align-items: center;
  color: var(--primary-focus);
  transition: font-size 0.2s linear;

  &:link,
  &:visited,
  &:active {
    text-decoration: none;
  }

  @media (max-width: 1439px) {
    width: auto;
    font-size: 18px;
  }

  @media (max-width: 767px) {
    font-size: 16px;
  }
`,$w=_.svg`
  width: 28px;
  height: 28px;
`,Lw=_.svg`
  width: 40px;
  height: 48px;
`,Iw=e=>k.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:28,height:28,fill:"none",...e},k.createElement("g",{stroke:"#2F2F2F",clipPath:"url(#a)"},k.createElement("circle",{cx:14,cy:14,r:13.5}),k.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.5 8.256c0 .952-.368 1.865-1.025 2.539A3.457 3.457 0 0 1 14 11.846a3.457 3.457 0 0 1-2.475-1.051 3.637 3.637 0 0 1-1.026-2.539c0-.952.37-1.865 1.026-2.538A3.457 3.457 0 0 1 14 4.667c.928 0 1.819.378 2.475 1.051A3.637 3.637 0 0 1 17.5 8.256ZM7 21.771a7.27 7.27 0 0 1 2.09-5A6.912 6.912 0 0 1 14 14.708c1.837 0 3.6.74 4.91 2.061A7.27 7.27 0 0 1 21 21.771a16.39 16.39 0 0 1-7 1.562c-2.498 0-4.869-.559-7-1.562Z"})),k.createElement("defs",null,k.createElement("clipPath",{id:"a"},k.createElement("path",{fill:"#fff",d:"M0 0h28v28H0z"})))),Fw=()=>c.jsx(Rw,{children:c.jsxs(Mw,{children:[c.jsxs(Aw,{to:"/welcome",children:[c.jsx(Lw,{children:c.jsx(am,{})}),"TRACKER",c.jsx("br",{}),"OF WATER"]}),c.jsxs(Dw,{to:"/signin",children:["Sign in",c.jsx($w,{children:c.jsx(Iw,{})})]})]})}),zw=()=>{const e=Wr(t=>t.authTest.auth);return c.jsx(c.Fragment,{children:e?c.jsx(_w,{}):c.jsx(Fw,{})})};function me(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var Bw=(()=>typeof Symbol=="function"&&Symbol.observable||"@@observable")(),cp=Bw,gl=()=>Math.random().toString(36).substring(7).split("").join("."),Ww={INIT:`@@redux/INIT${gl()}`,REPLACE:`@@redux/REPLACE${gl()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${gl()}`},Fa=Ww;function rd(e){if(typeof e!="object"||e===null)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function id(e,t,n){if(typeof e!="function")throw new Error(me(2));if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(me(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(me(1));return n(id)(e,t)}let r=e,i=t,o=new Map,a=o,s=0,l=!1;function u(){a===o&&(a=new Map,o.forEach((S,h)=>{a.set(h,S)}))}function f(){if(l)throw new Error(me(3));return i}function d(S){if(typeof S!="function")throw new Error(me(4));if(l)throw new Error(me(5));let h=!0;u();const p=s++;return a.set(p,S),function(){if(h){if(l)throw new Error(me(6));h=!1,u(),a.delete(p),o=null}}}function g(S){if(!rd(S))throw new Error(me(7));if(typeof S.type>"u")throw new Error(me(8));if(typeof S.type!="string")throw new Error(me(17));if(l)throw new Error(me(9));try{l=!0,i=r(i,S)}finally{l=!1}return(o=a).forEach(p=>{p()}),S}function x(S){if(typeof S!="function")throw new Error(me(10));r=S,g({type:Fa.REPLACE})}function v(){const S=d;return{subscribe(h){if(typeof h!="object"||h===null)throw new Error(me(11));function p(){const w=h;w.next&&w.next(f())}return p(),{unsubscribe:S(p)}},[cp](){return this}}}return g({type:Fa.INIT}),{dispatch:g,subscribe:d,getState:f,replaceReducer:x,[cp]:v}}function Uw(e){Object.keys(e).forEach(t=>{const n=e[t];if(typeof n(void 0,{type:Fa.INIT})>"u")throw new Error(me(12));if(typeof n(void 0,{type:Fa.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(me(13))})}function Vw(e){const t=Object.keys(e),n={};for(let o=0;o<t.length;o++){const a=t[o];typeof e[a]=="function"&&(n[a]=e[a])}const r=Object.keys(n);let i;try{Uw(n)}catch(o){i=o}return function(a={},s){if(i)throw i;let l=!1;const u={};for(let f=0;f<r.length;f++){const d=r[f],g=n[d],x=a[d],v=g(x,s);if(typeof v>"u")throw s&&s.type,new Error(me(14));u[d]=v,l=l||v!==x}return l=l||r.length!==Object.keys(a).length,l?u:a}}function za(...e){return e.length===0?t=>t:e.length===1?e[0]:e.reduce((t,n)=>(...r)=>t(n(...r)))}function Hw(...e){return t=>(n,r)=>{const i=t(n,r);let o=()=>{throw new Error(me(15))};const a={getState:i.getState,dispatch:(l,...u)=>o(l,...u)},s=e.map(l=>l(a));return o=za(...s)(i.dispatch),{...i,dispatch:o}}}function Qw(e){return rd(e)&&"type"in e&&typeof e.type=="string"}var cm=Symbol.for("immer-nothing"),dp=Symbol.for("immer-draftable"),Ye=Symbol.for("immer-state");function dt(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var Rr=Object.getPrototypeOf;function wn(e){return!!e&&!!e[Ye]}function Ut(e){var t;return e?dm(e)||Array.isArray(e)||!!e[dp]||!!((t=e.constructor)!=null&&t[dp])||xs(e)||ws(e):!1}var Yw=Object.prototype.constructor.toString();function dm(e){if(!e||typeof e!="object")return!1;const t=Rr(e);if(t===null)return!0;const n=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return n===Object?!0:typeof n=="function"&&Function.toString.call(n)===Yw}function Ba(e,t){vs(e)===0?Reflect.ownKeys(e).forEach(n=>{t(n,e[n],e)}):e.forEach((n,r)=>t(r,n,e))}function vs(e){const t=e[Ye];return t?t.type_:Array.isArray(e)?1:xs(e)?2:ws(e)?3:0}function Ru(e,t){return vs(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function fm(e,t,n){const r=vs(e);r===2?e.set(t,n):r===3?e.add(n):e[t]=n}function Kw(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}function xs(e){return e instanceof Map}function ws(e){return e instanceof Set}function Rn(e){return e.copy_||e.base_}function Mu(e,t){if(xs(e))return new Map(e);if(ws(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);if(!t&&dm(e))return Rr(e)?{...e}:Object.assign(Object.create(null),e);const n=Object.getOwnPropertyDescriptors(e);delete n[Ye];let r=Reflect.ownKeys(n);for(let i=0;i<r.length;i++){const o=r[i],a=n[o];a.writable===!1&&(a.writable=!0,a.configurable=!0),(a.get||a.set)&&(n[o]={configurable:!0,writable:!0,enumerable:a.enumerable,value:e[o]})}return Object.create(Rr(e),n)}function od(e,t=!1){return Ss(e)||wn(e)||!Ut(e)||(vs(e)>1&&(e.set=e.add=e.clear=e.delete=Gw),Object.freeze(e),t&&Object.entries(e).forEach(([n,r])=>od(r,!0))),e}function Gw(){dt(2)}function Ss(e){return Object.isFrozen(e)}var qw={};function Yn(e){const t=qw[e];return t||dt(0,e),t}var Vi;function pm(){return Vi}function Xw(e,t){return{drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function fp(e,t){t&&(Yn("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function Au(e){Du(e),e.drafts_.forEach(Zw),e.drafts_=null}function Du(e){e===Vi&&(Vi=e.parent_)}function pp(e){return Vi=Xw(Vi,e)}function Zw(e){const t=e[Ye];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function hp(e,t){t.unfinalizedDrafts_=t.drafts_.length;const n=t.drafts_[0];return e!==void 0&&e!==n?(n[Ye].modified_&&(Au(t),dt(4)),Ut(e)&&(e=Wa(t,e),t.parent_||Ua(t,e)),t.patches_&&Yn("Patches").generateReplacementPatches_(n[Ye].base_,e,t.patches_,t.inversePatches_)):e=Wa(t,n,[]),Au(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==cm?e:void 0}function Wa(e,t,n){if(Ss(t))return t;const r=t[Ye];if(!r)return Ba(t,(i,o)=>mp(e,r,t,i,o,n)),t;if(r.scope_!==e)return t;if(!r.modified_)return Ua(e,r.base_,!0),r.base_;if(!r.finalized_){r.finalized_=!0,r.scope_.unfinalizedDrafts_--;const i=r.copy_;let o=i,a=!1;r.type_===3&&(o=new Set(i),i.clear(),a=!0),Ba(o,(s,l)=>mp(e,r,i,s,l,n,a)),Ua(e,i,!1),n&&e.patches_&&Yn("Patches").generatePatches_(r,n,e.patches_,e.inversePatches_)}return r.copy_}function mp(e,t,n,r,i,o,a){if(wn(i)){const s=o&&t&&t.type_!==3&&!Ru(t.assigned_,r)?o.concat(r):void 0,l=Wa(e,i,s);if(fm(n,r,l),wn(l))e.canAutoFreeze_=!1;else return}else a&&n.add(i);if(Ut(i)&&!Ss(i)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;Wa(e,i),(!t||!t.scope_.parent_)&&typeof r!="symbol"&&Object.prototype.propertyIsEnumerable.call(n,r)&&Ua(e,i)}}function Ua(e,t,n=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&od(t,n)}function Jw(e,t){const n=Array.isArray(e),r={type_:n?1:0,scope_:t?t.scope_:pm(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=r,o=ad;n&&(i=[r],o=Hi);const{revoke:a,proxy:s}=Proxy.revocable(i,o);return r.draft_=s,r.revoke_=a,s}var ad={get(e,t){if(t===Ye)return e;const n=Rn(e);if(!Ru(n,t))return e3(e,n,t);const r=n[t];return e.finalized_||!Ut(r)?r:r===yl(e.base_,t)?(vl(e),e.copy_[t]=Lu(r,e)):r},has(e,t){return t in Rn(e)},ownKeys(e){return Reflect.ownKeys(Rn(e))},set(e,t,n){const r=hm(Rn(e),t);if(r!=null&&r.set)return r.set.call(e.draft_,n),!0;if(!e.modified_){const i=yl(Rn(e),t),o=i==null?void 0:i[Ye];if(o&&o.base_===n)return e.copy_[t]=n,e.assigned_[t]=!1,!0;if(Kw(n,i)&&(n!==void 0||Ru(e.base_,t)))return!0;vl(e),$u(e)}return e.copy_[t]===n&&(n!==void 0||t in e.copy_)||Number.isNaN(n)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=n,e.assigned_[t]=!0),!0},deleteProperty(e,t){return yl(e.base_,t)!==void 0||t in e.base_?(e.assigned_[t]=!1,vl(e),$u(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){const n=Rn(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{writable:!0,configurable:e.type_!==1||t!=="length",enumerable:r.enumerable,value:n[t]}},defineProperty(){dt(11)},getPrototypeOf(e){return Rr(e.base_)},setPrototypeOf(){dt(12)}},Hi={};Ba(ad,(e,t)=>{Hi[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}});Hi.deleteProperty=function(e,t){return Hi.set.call(this,e,t,void 0)};Hi.set=function(e,t,n){return ad.set.call(this,e[0],t,n,e[0])};function yl(e,t){const n=e[Ye];return(n?Rn(n):e)[t]}function e3(e,t,n){var i;const r=hm(t,n);return r?"value"in r?r.value:(i=r.get)==null?void 0:i.call(e.draft_):void 0}function hm(e,t){if(!(t in e))return;let n=Rr(e);for(;n;){const r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Rr(n)}}function $u(e){e.modified_||(e.modified_=!0,e.parent_&&$u(e.parent_))}function vl(e){e.copy_||(e.copy_=Mu(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var t3=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(t,n,r)=>{if(typeof t=="function"&&typeof n!="function"){const o=n;n=t;const a=this;return function(l=o,...u){return a.produce(l,f=>n.call(this,f,...u))}}typeof n!="function"&&dt(6),r!==void 0&&typeof r!="function"&&dt(7);let i;if(Ut(t)){const o=pp(this),a=Lu(t,void 0);let s=!0;try{i=n(a),s=!1}finally{s?Au(o):Du(o)}return fp(o,r),hp(i,o)}else if(!t||typeof t!="object"){if(i=n(t),i===void 0&&(i=t),i===cm&&(i=void 0),this.autoFreeze_&&od(i,!0),r){const o=[],a=[];Yn("Patches").generateReplacementPatches_(t,i,o,a),r(o,a)}return i}else dt(1,t)},this.produceWithPatches=(t,n)=>{if(typeof t=="function")return(a,...s)=>this.produceWithPatches(a,l=>t(l,...s));let r,i;return[this.produce(t,n,(a,s)=>{r=a,i=s}),r,i]},typeof(e==null?void 0:e.autoFreeze)=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof(e==null?void 0:e.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){Ut(e)||dt(8),wn(e)&&(e=mm(e));const t=pp(this),n=Lu(e,void 0);return n[Ye].isManual_=!0,Du(t),n}finishDraft(e,t){const n=e&&e[Ye];(!n||!n.isManual_)&&dt(9);const{scope_:r}=n;return fp(r,t),hp(void 0,r)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let n;for(n=t.length-1;n>=0;n--){const i=t[n];if(i.path.length===0&&i.op==="replace"){e=i.value;break}}n>-1&&(t=t.slice(n+1));const r=Yn("Patches").applyPatches_;return wn(e)?r(e,t):this.produce(e,i=>r(i,t))}};function Lu(e,t){const n=xs(e)?Yn("MapSet").proxyMap_(e,t):ws(e)?Yn("MapSet").proxySet_(e,t):Jw(e,t);return(t?t.scope_:pm()).drafts_.push(n),n}function mm(e){return wn(e)||dt(10,e),gm(e)}function gm(e){if(!Ut(e)||Ss(e))return e;const t=e[Ye];let n;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,n=Mu(e,t.scope_.immer_.useStrictShallowCopy_)}else n=Mu(e,!0);return Ba(n,(r,i)=>{fm(n,r,gm(i))}),t&&(t.finalized_=!1),n}var Ke=new t3,ym=Ke.produce;Ke.produceWithPatches.bind(Ke);Ke.setAutoFreeze.bind(Ke);Ke.setUseStrictShallowCopy.bind(Ke);Ke.applyPatches.bind(Ke);Ke.createDraft.bind(Ke);Ke.finishDraft.bind(Ke);function n3(e,t=`expected a function, instead received ${typeof e}`){if(typeof e!="function")throw new TypeError(t)}function r3(e,t=`expected an object, instead received ${typeof e}`){if(typeof e!="object")throw new TypeError(t)}function i3(e,t="expected all items to be functions, instead received the following types: "){if(!e.every(n=>typeof n=="function")){const n=e.map(r=>typeof r=="function"?`function ${r.name||"unnamed"}()`:typeof r).join(", ");throw new TypeError(`${t}[${n}]`)}}var gp=e=>Array.isArray(e)?e:[e];function o3(e){const t=Array.isArray(e[0])?e[0]:e;return i3(t,"createSelector expects all input-selectors to be functions, but received the following types: "),t}function a3(e,t){const n=[],{length:r}=e;for(let i=0;i<r;i++)n.push(e[i].apply(null,t));return n}var s3=class{constructor(e){this.value=e}deref(){return this.value}},l3=typeof WeakRef<"u"?WeakRef:s3,u3=0,yp=1;function To(){return{s:u3,v:void 0,o:null,p:null}}function sd(e,t={}){let n=To();const{resultEqualityCheck:r}=t;let i,o=0;function a(){var d;let s=n;const{length:l}=arguments;for(let g=0,x=l;g<x;g++){const v=arguments[g];if(typeof v=="function"||typeof v=="object"&&v!==null){let y=s.o;y===null&&(s.o=y=new WeakMap);const S=y.get(v);S===void 0?(s=To(),y.set(v,s)):s=S}else{let y=s.p;y===null&&(s.p=y=new Map);const S=y.get(v);S===void 0?(s=To(),y.set(v,s)):s=S}}const u=s;let f;if(s.s===yp?f=s.v:(f=e.apply(null,arguments),o++),u.s=yp,r){const g=((d=i==null?void 0:i.deref)==null?void 0:d.call(i))??i;g!=null&&r(g,f)&&(f=g,o!==0&&o--),i=typeof f=="object"&&f!==null||typeof f=="function"?new l3(f):f}return u.v=f,f}return a.clearCache=()=>{n=To(),a.resetResultsCount()},a.resultsCount=()=>o,a.resetResultsCount=()=>{o=0},a}function vm(e,...t){const n=typeof e=="function"?{memoize:e,memoizeOptions:t}:e,r=(...i)=>{let o=0,a=0,s,l={},u=i.pop();typeof u=="object"&&(l=u,u=i.pop()),n3(u,`createSelector expects an output function after the inputs, but received: [${typeof u}]`);const f={...n,...l},{memoize:d,memoizeOptions:g=[],argsMemoize:x=sd,argsMemoizeOptions:v=[],devModeChecks:y={}}=f,S=gp(g),h=gp(v),p=o3(i),m=d(function(){return o++,u.apply(null,arguments)},...S),w=x(function(){a++;const E=a3(p,arguments);return s=m.apply(null,E),s},...h);return Object.assign(w,{resultFunc:u,memoizedResultFunc:m,dependencies:p,dependencyRecomputations:()=>a,resetDependencyRecomputations:()=>{a=0},lastResult:()=>s,recomputations:()=>o,resetRecomputations:()=>{o=0},memoize:d,argsMemoize:x})};return Object.assign(r,{withTypes:()=>r}),r}var c3=vm(sd),d3=Object.assign((e,t=c3)=>{r3(e,`createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`);const n=Object.keys(e),r=n.map(o=>e[o]);return t(r,(...o)=>o.reduce((a,s,l)=>(a[n[l]]=s,a),{}))},{withTypes:()=>d3});function xm(e){return({dispatch:n,getState:r})=>i=>o=>typeof o=="function"?o(n,r,e):i(o)}var f3=xm(),p3=xm,h3=(...e)=>{const t=vm(...e),n=Object.assign((...r)=>{const i=t(...r),o=(a,...s)=>i(wn(a)?mm(a):a,...s);return Object.assign(o,i),o},{withTypes:()=>n});return n};h3(sd);var m3=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?za:za.apply(null,arguments)},g3=e=>e&&typeof e.match=="function";function Lt(e,t){function n(...r){if(t){let i=t(...r);if(!i)throw new Error($e(0));return{type:e,payload:i.payload,..."meta"in i&&{meta:i.meta},..."error"in i&&{error:i.error}}}return{type:e,payload:r[0]}}return n.toString=()=>`${e}`,n.type=e,n.match=r=>Qw(r)&&r.type===e,n}var wm=class di extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,di.prototype)}static get[Symbol.species](){return di}concat(...t){return super.concat.apply(this,t)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new di(...t[0].concat(this)):new di(...t.concat(this))}};function vp(e){return Ut(e)?ym(e,()=>{}):e}function xp(e,t,n){if(e.has(t)){let i=e.get(t);return n.update&&(i=n.update(i,t,e),e.set(t,i)),i}if(!n.insert)throw new Error($e(10));const r=n.insert(t,e);return e.set(t,r),r}function y3(e){return typeof e=="boolean"}var v3=()=>function(t){const{thunk:n=!0,immutableCheck:r=!0,serializableCheck:i=!0,actionCreatorCheck:o=!0}=t??{};let a=new wm;return n&&(y3(n)?a.push(f3):a.push(p3(n.extraArgument))),a},x3="RTK_autoBatch",Sm=e=>t=>{setTimeout(t,e)},w3=typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:Sm(10),S3=(e={type:"raf"})=>t=>(...n)=>{const r=t(...n);let i=!0,o=!1,a=!1;const s=new Set,l=e.type==="tick"?queueMicrotask:e.type==="raf"?w3:e.type==="callback"?e.queueNotification:Sm(e.timeout),u=()=>{a=!1,o&&(o=!1,s.forEach(f=>f()))};return Object.assign({},r,{subscribe(f){const d=()=>i&&f(),g=r.subscribe(d);return s.add(f),()=>{g(),s.delete(f)}},dispatch(f){var d;try{return i=!((d=f==null?void 0:f.meta)!=null&&d[x3]),o=!i,o&&(a||(a=!0,l(u))),r.dispatch(f)}finally{i=!0}}})},k3=e=>function(n){const{autoBatch:r=!0}=n??{};let i=new wm(e);return r&&i.push(S3(typeof r=="object"?r:void 0)),i},b3=!0;function E3(e){const t=v3(),{reducer:n=void 0,middleware:r,devTools:i=!0,preloadedState:o=void 0,enhancers:a=void 0}=e||{};let s;if(typeof n=="function")s=n;else if(rd(n))s=Vw(n);else throw new Error($e(1));let l;typeof r=="function"?l=r(t):l=t();let u=za;i&&(u=m3({trace:!b3,...typeof i=="object"&&i}));const f=Hw(...l),d=k3(f);let g=typeof a=="function"?a(d):d();const x=u(...g);return id(s,o,x)}function km(e){const t={},n=[];let r;const i={addCase(o,a){const s=typeof o=="string"?o:o.type;if(!s)throw new Error($e(28));if(s in t)throw new Error($e(29));return t[s]=a,i},addMatcher(o,a){return n.push({matcher:o,reducer:a}),i},addDefaultCase(o){return r=o,i}};return e(i),[t,n,r]}function C3(e){return typeof e=="function"}function P3(e,t){let[n,r,i]=km(t),o;if(C3(e))o=()=>vp(e());else{const s=vp(e);o=()=>s}function a(s=o(),l){let u=[n[l.type],...r.filter(({matcher:f})=>f(l)).map(({reducer:f})=>f)];return u.filter(f=>!!f).length===0&&(u=[i]),u.reduce((f,d)=>{if(d)if(wn(f)){const x=d(f,l);return x===void 0?f:x}else{if(Ut(f))return ym(f,g=>d(g,l));{const g=d(f,l);if(g===void 0){if(f===null)return f;throw new Error($e(9))}return g}}return f},s)}return a.getInitialState=o,a}var j3="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",bm=(e=21)=>{let t="",n=e;for(;n--;)t+=j3[Math.random()*64|0];return t},O3=(e,t)=>g3(e)?e.match(t):e(t);function N3(...e){return t=>e.some(n=>O3(n,t))}var T3=["name","message","stack","code"],xl=class{constructor(e,t){$s(this,"_type");this.payload=e,this.meta=t}},wp=class{constructor(e,t){$s(this,"_type");this.payload=e,this.meta=t}},_3=e=>{if(typeof e=="object"&&e!==null){const t={};for(const n of T3)typeof e[n]=="string"&&(t[n]=e[n]);return t}return{message:String(e)}},gt=(()=>{function e(t,n,r){const i=Lt(t+"/fulfilled",(l,u,f,d)=>({payload:l,meta:{...d||{},arg:f,requestId:u,requestStatus:"fulfilled"}})),o=Lt(t+"/pending",(l,u,f)=>({payload:void 0,meta:{...f||{},arg:u,requestId:l,requestStatus:"pending"}})),a=Lt(t+"/rejected",(l,u,f,d,g)=>({payload:d,error:(r&&r.serializeError||_3)(l||"Rejected"),meta:{...g||{},arg:f,requestId:u,rejectedWithValue:!!d,requestStatus:"rejected",aborted:(l==null?void 0:l.name)==="AbortError",condition:(l==null?void 0:l.name)==="ConditionError"}}));function s(l){return(u,f,d)=>{const g=r!=null&&r.idGenerator?r.idGenerator(l):bm(),x=new AbortController;let v,y;function S(p){y=p,x.abort()}const h=async function(){var w,b;let p;try{let E=(w=r==null?void 0:r.condition)==null?void 0:w.call(r,l,{getState:f,extra:d});if(M3(E)&&(E=await E),E===!1||x.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};const C=new Promise((O,A)=>{v=()=>{A({name:"AbortError",message:y||"Aborted"})},x.signal.addEventListener("abort",v)});u(o(g,l,(b=r==null?void 0:r.getPendingMeta)==null?void 0:b.call(r,{requestId:g,arg:l},{getState:f,extra:d}))),p=await Promise.race([C,Promise.resolve(n(l,{dispatch:u,getState:f,extra:d,requestId:g,signal:x.signal,abort:S,rejectWithValue:(O,A)=>new xl(O,A),fulfillWithValue:(O,A)=>new wp(O,A)})).then(O=>{if(O instanceof xl)throw O;return O instanceof wp?i(O.payload,g,l,O.meta):i(O,g,l)})])}catch(E){p=E instanceof xl?a(null,g,l,E.payload,E.meta):a(E,g,l)}finally{v&&x.signal.removeEventListener("abort",v)}return r&&!r.dispatchConditionRejection&&a.match(p)&&p.meta.condition||u(p),p}();return Object.assign(h,{abort:S,requestId:g,arg:l,unwrap(){return h.then(R3)}})}}return Object.assign(s,{pending:o,rejected:a,fulfilled:i,settled:N3(a,i),typePrefix:t})}return e.withTypes=()=>e,e})();function R3(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function M3(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var A3=Symbol.for("rtk-slice-createasyncthunk");function D3(e,t){return`${e}/${t}`}function $3({creators:e}={}){var n;const t=(n=e==null?void 0:e.asyncThunk)==null?void 0:n[A3];return function(i){const{name:o,reducerPath:a=o}=i;if(!o)throw new Error($e(11));typeof process<"u";const s=(typeof i.reducers=="function"?i.reducers(I3()):i.reducers)||{},l=Object.keys(s),u={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},f={addCase(m,w){const b=typeof m=="string"?m:m.type;if(!b)throw new Error($e(12));if(b in u.sliceCaseReducersByType)throw new Error($e(13));return u.sliceCaseReducersByType[b]=w,f},addMatcher(m,w){return u.sliceMatchers.push({matcher:m,reducer:w}),f},exposeAction(m,w){return u.actionCreators[m]=w,f},exposeCaseReducer(m,w){return u.sliceCaseReducersByName[m]=w,f}};l.forEach(m=>{const w=s[m],b={reducerName:m,type:D3(o,m),createNotation:typeof i.reducers=="function"};z3(w)?W3(b,w,f,t):F3(b,w,f)});function d(){const[m={},w=[],b=void 0]=typeof i.extraReducers=="function"?km(i.extraReducers):[i.extraReducers],E={...m,...u.sliceCaseReducersByType};return P3(i.initialState,C=>{for(let O in E)C.addCase(O,E[O]);for(let O of u.sliceMatchers)C.addMatcher(O.matcher,O.reducer);for(let O of w)C.addMatcher(O.matcher,O.reducer);b&&C.addDefaultCase(b)})}const g=m=>m,x=new Map;let v;function y(m,w){return v||(v=d()),v(m,w)}function S(){return v||(v=d()),v.getInitialState()}function h(m,w=!1){function b(C){let O=C[m];return typeof O>"u"&&w&&(O=S()),O}function E(C=g){const O=xp(x,w,{insert:()=>new WeakMap});return xp(O,C,{insert:()=>{const A={};for(const[D,Ce]of Object.entries(i.selectors??{}))A[D]=L3(Ce,C,S,w);return A}})}return{reducerPath:m,getSelectors:E,get selectors(){return E(b)},selectSlice:b}}const p={name:o,reducer:y,actions:u.actionCreators,caseReducers:u.sliceCaseReducersByName,getInitialState:S,...h(a),injectInto(m,{reducerPath:w,...b}={}){const E=w??a;return m.inject({reducerPath:E,reducer:y},b),{...p,...h(E,!0)}}};return p}}function L3(e,t,n,r){function i(o,...a){let s=t(o);return typeof s>"u"&&r&&(s=n()),e(s,...a)}return i.unwrapped=e,i}var ks=$3();function I3(){function e(t,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:t,...n}}return e.withTypes=()=>e,{reducer(t){return Object.assign({[t.name](...n){return t(...n)}}[t.name],{_reducerDefinitionType:"reducer"})},preparedReducer(t,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:t,reducer:n}},asyncThunk:e}}function F3({type:e,reducerName:t,createNotation:n},r,i){let o,a;if("reducer"in r){if(n&&!B3(r))throw new Error($e(17));o=r.reducer,a=r.prepare}else o=r;i.addCase(e,o).exposeCaseReducer(t,o).exposeAction(t,a?Lt(e,a):Lt(e))}function z3(e){return e._reducerDefinitionType==="asyncThunk"}function B3(e){return e._reducerDefinitionType==="reducerWithPrepare"}function W3({type:e,reducerName:t},n,r,i){if(!i)throw new Error($e(18));const{payloadCreator:o,fulfilled:a,pending:s,rejected:l,settled:u,options:f}=n,d=i(e,o,f);r.exposeAction(t,d),a&&r.addCase(d.fulfilled,a),s&&r.addCase(d.pending,s),l&&r.addCase(d.rejected,l),u&&r.addMatcher(d.settled,u),r.exposeCaseReducer(t,{fulfilled:a||_o,pending:s||_o,rejected:l||_o,settled:u||_o})}function _o(){}var U3=(e,t)=>{if(typeof e!="function")throw new Error($e(32))},ld="listenerMiddleware",V3=e=>{let{type:t,actionCreator:n,matcher:r,predicate:i,effect:o}=e;if(t)i=Lt(t).match;else if(n)t=n.type,i=n.match;else if(r)i=r;else if(!i)throw new Error($e(21));return U3(o),{predicate:i,type:t,effect:o}},H3=Object.assign(e=>{const{type:t,predicate:n,effect:r}=V3(e);return{id:bm(),effect:r,type:t,predicate:n,pending:new Set,unsubscribe:()=>{throw new Error($e(22))}}},{withTypes:()=>H3}),Q3=Object.assign(Lt(`${ld}/add`),{withTypes:()=>Q3});Lt(`${ld}/removeAll`);var Y3=Object.assign(Lt(`${ld}/remove`),{withTypes:()=>Y3});function $e(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}const K3={auth:!1},Em=ks({name:"authTest",initialState:K3,reducers:{toggleAuth:e=>{e.auth=!e.auth}}}),{toggleAuth:G3}=Em.actions,q3=Em.reducer,X3=()=>{const e=Wr(n=>n.authTest.auth),t=mx();return c.jsx(c.Fragment,{children:c.jsx("div",{children:c.jsx("button",{onClick:()=>t(G3()),children:e?"Log out":"Sign In"})})})},Z3=_.div`
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
  overflow-y: hidden;
`,J3=_.div`
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
`,bs=({children:e,isOpen:t,onClose:n})=>{const r=({key:i})=>{switch(i){case"Escape":n();break}};return k.useEffect(()=>(t&&document.addEventListener("keydown",r),()=>document.removeEventListener("keydown",r))),c.jsx(c.Fragment,{children:t?c.jsxs("div",{className:"overlay",children:[c.jsx(Z3,{onClick:n}),c.jsx(J3,{children:e})]}):null})},e4=_.div`
  width: 500px;
  padding: 30px;
`,t4={"aria-busy":!0,role:"progressbar"};_.div`
  display: ${e=>e.$visible?"flex":"none"};
`;const n4="http://www.w3.org/2000/svg",st=242.776657104492,r4=1.6,i4=nd`
12.5% {
  stroke-dasharray: ${st*.14}px, ${st}px;
  stroke-dashoffset: -${st*.11}px;
}
43.75% {
  stroke-dasharray: ${st*.35}px, ${st}px;
  stroke-dashoffset: -${st*.35}px;
}
100% {
  stroke-dasharray: ${st*.01}px, ${st}px;
  stroke-dashoffset: -${st*.99}px;
}
`;_.path`
  stroke-dasharray: ${st*.01}px, ${st};
  stroke-dashoffset: 0;
  animation: ${i4} ${r4}s linear infinite;
`;const o4=nd`
to {
   transform: rotate(360deg);
 }
`;_.svg`
  animation: ${o4} 0.75s steps(12, end) infinite;
  animation-duration: 0.75s;
`;_.polyline`
  stroke-width: ${e=>e.width}px;
  stroke-linecap: round;

  &:nth-child(12n + 0) {
    stroke-opacity: 0.08;
  }

  &:nth-child(12n + 1) {
    stroke-opacity: 0.17;
  }

  &:nth-child(12n + 2) {
    stroke-opacity: 0.25;
  }

  &:nth-child(12n + 3) {
    stroke-opacity: 0.33;
  }

  &:nth-child(12n + 4) {
    stroke-opacity: 0.42;
  }

  &:nth-child(12n + 5) {
    stroke-opacity: 0.5;
  }

  &:nth-child(12n + 6) {
    stroke-opacity: 0.58;
  }

  &:nth-child(12n + 7) {
    stroke-opacity: 0.66;
  }

  &:nth-child(12n + 8) {
    stroke-opacity: 0.75;
  }

  &:nth-child(12n + 9) {
    stroke-opacity: 0.83;
  }

  &:nth-child(12n + 11) {
    stroke-opacity: 0.92;
  }
`;const a4=nd`
to {
   stroke-dashoffset: 136;
 }
`;_.polygon`
  stroke-dasharray: 17;
  animation: ${a4} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;_.svg`
  transform-origin: 50% 65%;
`;const s4=({visible:e=!0,width:t="80",height:n="80",wrapperClass:r="",wrapperStyle:i={},ariaLabel:o="dna-loading"})=>e?c.jsxs("svg",{xmlns:n4,width:t,height:n,viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",className:r,style:i,"aria-label":o,"data-testid":"dna-svg",...t4,children:[c.jsxs("circle",{cx:"6.451612903225806",cy:"60.6229",r:"3.41988",fill:"rgba(233, 12, 89, 0.5125806451612902)",children:[c.jsx("animate",{attributeName:"r",keyTimes:"0;0.5;1",values:"2.4000000000000004;3.5999999999999996;2.4000000000000004",dur:"2s",repeatCount:"indefinite",begin:"-0.5s"}),c.jsx("animate",{attributeName:"cy",keyTimes:"0;0.5;1",values:"30.5;69.5;30.5",dur:"2s",repeatCount:"indefinite",begin:"0s",keySplines:"0.5 0 0.5 1;0.5 0 0.5 1",calcMode:"spline"}),c.jsx("animate",{attributeName:"fill",keyTimes:"0;0.5;1",values:"rgba(233, 12, 89, 0.5125806451612902);#ff0033;rgba(233, 12, 89, 0.5125806451612902)",dur:"2s",repeatCount:"indefinite",begin:"-0.5s"})]}),c.jsxs("circle",{cx:"6.451612903225806",cy:"39.3771",r:"2.58012",fill:"#46dff0",children:[c.jsx("animate",{attributeName:"r",keyTimes:"0;0.5;1",values:"2.4000000000000004;3.5999999999999996;2.4000000000000004",dur:"2s",repeatCount:"indefinite",begin:"-1.5s"}),c.jsx("animate",{attributeName:"cy",keyTimes:"0;0.5;1",values:"30.5;69.5;30.5",dur:"2s",repeatCount:"indefinite",begin:"-1s",keySplines:"0.5 0 0.5 1;0.5 0 0.5 1",calcMode:"spline"}),c.jsx("animate",{attributeName:"fill",keyTimes:"0;0.5;1",values:"#46dff0;rgba(53, 58, 57, 0.1435483870967742);#46dff0",dur:"2s",repeatCount:"indefinite",begin:"-0.5s"})]}),c.jsxs("circle",{cx:"16.129032258064512",cy:"68.1552",r:"3.17988",fill:"rgba(233, 12, 89, 0.5125806451612902)",children:[c.jsx("animate",{attributeName:"r",keyTimes:"0;0.5;1",values:"2.4000000000000004;3.5999999999999996;2.4000000000000004",dur:"2s",repeatCount:"indefinite",begin:"-0.7s"}),c.jsx("animate",{attributeName:"cy",keyTimes:"0;0.5;1",values:"30.5;69.5;30.5",dur:"2s",repeatCount:"indefinite",begin:"-0.2s",keySplines:"0.5 0 0.5 1;0.5 0 0.5 1",calcMode:"spline"}),c.jsx("animate",{attributeName:"fill",keyTimes:"0;0.5;1",values:"rgba(233, 12, 89, 0.5125806451612902);#ff0033;rgba(233, 12, 89, 0.5125806451612902)",dur:"2s",repeatCount:"indefinite",begin:"-0.7s"})]}),c.jsxs("circle",{cx:"16.129032258064512",cy:"31.8448",r:"2.82012",fill:"#46dff0",children:[c.jsx("animate",{attributeName:"r",keyTimes:"0;0.5;1",values:"2.4000000000000004;3.5999999999999996;2.4000000000000004",dur:"2s",repeatCount:"indefinite",begin:"-1.7s"}),c.jsx("animate",{attributeName:"cy",keyTimes:"0;0.5;1",values:"30.5;69.5;30.5",dur:"2s",repeatCount:"indefinite",begin:"-1.2s",keySplines:"0.5 0 0.5 1;0.5 0 0.5 1",calcMode:"spline"}),c.jsx("animate",{attributeName:"fill",keyTimes:"0;0.5;1",values:"#46dff0;rgba(53, 58, 57, 0.1435483870967742);#46dff0",dur:"2s",repeatCount:"indefinite",begin:"-0.7s"})]}),c.jsxs("circle",{cx:"25.806451612903224",cy:"69.3634",r:"2.93988",fill:"rgba(233, 12, 89, 0.5125806451612902)",children:[c.jsx("animate",{attributeName:"r",keyTimes:"0;0.5;1",values:"2.4000000000000004;3.5999999999999996;2.4000000000000004",dur:"2s",repeatCount:"indefinite",begin:"-0.9s"}),c.jsx("animate",{attributeName:"cy",keyTimes:"0;0.5;1",values:"30.5;69.5;30.5",dur:"2s",repeatCount:"indefinite",begin:"-0.4s",keySplines:"0.5 0 0.5 1;0.5 0 0.5 1",calcMode:"spline"}),c.jsx("animate",{attributeName:"fill",keyTimes:"0;0.5;1",values:"rgba(233, 12, 89, 0.5125806451612902);#ff0033;rgba(233, 12, 89, 0.5125806451612902)",dur:"2s",repeatCount:"indefinite",begin:"-0.9s"})]}),c.jsxs("circle",{cx:"25.806451612903224",cy:"30.6366",r:"3.06012",fill:"#46dff0",children:[c.jsx("animate",{attributeName:"r",keyTimes:"0;0.5;1",values:"2.4000000000000004;3.5999999999999996;2.4000000000000004",dur:"2s",repeatCount:"indefinite",begin:"-1.9s"}),c.jsx("animate",{attributeName:"cy",keyTimes:"0;0.5;1",values:"30.5;69.5;30.5",dur:"2s",repeatCount:"indefinite",begin:"-1.4s",keySplines:"0.5 0 0.5 1;0.5 0 0.5 1",calcMode:"spline"}),c.jsx("animate",{attributeName:"fill",keyTimes:"0;0.5;1",values:"#46dff0;rgba(53, 58, 57, 0.1435483870967742);#46dff0",dur:"2s",repeatCount:"indefinite",begin:"-0.9s"})]}),c.jsxs("circle",{cx:"35.48387096774193",cy:"65.3666",r:"2.69988",fill:"rgba(233, 12, 89, 0.5125806451612902)",children:[c.jsx("animate",{attributeName:"r",keyTimes:"0;0.5;1",values:"2.4000000000000004;3.5999999999999996;2.4000000000000004",dur:"2s",repeatCount:"indefinite",begin:"-1.1s"}),c.jsx("animate",{attributeName:"cy",keyTimes:"0;0.5;1",values:"30.5;69.5;30.5",dur:"2s",repeatCount:"indefinite",begin:"-0.6s",keySplines:"0.5 0 0.5 1;0.5 0 0.5 1",calcMode:"spline"}),c.jsx("animate",{attributeName:"fill",keyTimes:"0;0.5;1",values:"rgba(233, 12, 89, 0.5125806451612902);#ff0033;rgba(233, 12, 89, 0.5125806451612902)",dur:"2s",repeatCount:"indefinite",begin:"-1.1s"})]}),c.jsxs("circle",{cx:"35.48387096774193",cy:"34.6334",r:"3.30012",fill:"#46dff0",children:[c.jsx("animate",{attributeName:"r",keyTimes:"0;0.5;1",values:"2.4000000000000004;3.5999999999999996;2.4000000000000004",dur:"2s",repeatCount:"indefinite",begin:"-2.1s"}),c.jsx("animate",{attributeName:"cy",keyTimes:"0;0.5;1",values:"30.5;69.5;30.5",dur:"2s",repeatCount:"indefinite",begin:"-1.6s",keySplines:"0.5 0 0.5 1;0.5 0 0.5 1",calcMode:"spline"}),c.jsx("animate",{attributeName:"fill",keyTimes:"0;0.5;1",values:"#46dff0;rgba(53, 58, 57, 0.1435483870967742);#46dff0",dur:"2s",repeatCount:"indefinite",begin:"-1.1s"})]}),c.jsxs("circle",{cx:"45.16129032258064",cy:"53.8474",r:"2.45988",fill:"rgba(233, 12, 89, 0.5125806451612902)",children:[c.jsx("animate",{attributeName:"r",keyTimes:"0;0.5;1",values:"2.4000000000000004;3.5999999999999996;2.4000000000000004",dur:"2s",repeatCount:"indefinite",begin:"-1.3s"}),c.jsx("animate",{attributeName:"cy",keyTimes:"0;0.5;1",values:"30.5;69.5;30.5",dur:"2s",repeatCount:"indefinite",begin:"-0.8s",keySplines:"0.5 0 0.5 1;0.5 0 0.5 1",calcMode:"spline"}),c.jsx("animate",{attributeName:"fill",keyTimes:"0;0.5;1",values:"rgba(233, 12, 89, 0.5125806451612902);#ff0033;rgba(233, 12, 89, 0.5125806451612902)",dur:"2s",repeatCount:"indefinite",begin:"-1.3s"})]}),c.jsxs("circle",{cx:"45.16129032258064",cy:"46.1526",r:"3.54012",fill:"#46dff0",children:[c.jsx("animate",{attributeName:"r",keyTimes:"0;0.5;1",values:"2.4000000000000004;3.5999999999999996;2.4000000000000004",dur:"2s",repeatCount:"indefinite",begin:"-2.3s"}),c.jsx("animate",{attributeName:"cy",keyTimes:"0;0.5;1",values:"30.5;69.5;30.5",dur:"2s",repeatCount:"indefinite",begin:"-1.8s",keySplines:"0.5 0 0.5 1;0.5 0 0.5 1",calcMode:"spline"}),c.jsx("animate",{attributeName:"fill",keyTimes:"0;0.5;1",values:"#46dff0;rgba(53, 58, 57, 0.1435483870967742);#46dff0",dur:"2s",repeatCount:"indefinite",begin:"-1.3s"})]}),c.jsxs("circle",{cx:"54.838709677419345",cy:"39.3771",r:"2.58012",fill:"rgba(233, 12, 89, 0.5125806451612902)",children:[c.jsx("animate",{attributeName:"r",keyTimes:"0;0.5;1",values:"2.4000000000000004;3.5999999999999996;2.4000000000000004",dur:"2s",repeatCount:"indefinite",begin:"-1.5s"}),c.jsx("animate",{attributeName:"cy",keyTimes:"0;0.5;1",values:"30.5;69.5;30.5",dur:"2s",repeatCount:"indefinite",begin:"-1s",keySplines:"0.5 0 0.5 1;0.5 0 0.5 1",calcMode:"spline"}),c.jsx("animate",{attributeName:"fill",keyTimes:"0;0.5;1",values:"rgba(233, 12, 89, 0.5125806451612902);#ff0033;rgba(233, 12, 89, 0.5125806451612902)",dur:"2s",repeatCount:"indefinite",begin:"-1.5s"})]}),c.jsxs("circle",{cx:"54.838709677419345",cy:"60.6229",r:"3.41988",fill:"#46dff0",children:[c.jsx("animate",{attributeName:"r",keyTimes:"0;0.5;1",values:"2.4000000000000004;3.5999999999999996;2.4000000000000004",dur:"2s",repeatCount:"indefinite",begin:"-2.5s"}),c.jsx("animate",{attributeName:"cy",keyTimes:"0;0.5;1",values:"30.5;69.5;30.5",dur:"2s",repeatCount:"indefinite",begin:"-2s",keySplines:"0.5 0 0.5 1;0.5 0 0.5 1",calcMode:"spline"}),c.jsx("animate",{attributeName:"fill",keyTimes:"0;0.5;1",values:"#46dff0;rgba(53, 58, 57, 0.1435483870967742);#46dff0",dur:"2s",repeatCount:"indefinite",begin:"-1.5s"})]}),c.jsxs("circle",{cx:"64.51612903225805",cy:"31.8448",r:"2.82012",fill:"rgba(233, 12, 89, 0.5125806451612902)",children:[c.jsx("animate",{attributeName:"r",keyTimes:"0;0.5;1",values:"2.4000000000000004;3.5999999999999996;2.4000000000000004",dur:"2s",repeatCount:"indefinite",begin:"-1.7s"}),c.jsx("animate",{attributeName:"cy",keyTimes:"0;0.5;1",values:"30.5;69.5;30.5",dur:"2s",repeatCount:"indefinite",begin:"-1.2s",keySplines:"0.5 0 0.5 1;0.5 0 0.5 1",calcMode:"spline"}),c.jsx("animate",{attributeName:"fill",keyTimes:"0;0.5;1",values:"rgba(233, 12, 89, 0.5125806451612902);#ff0033;rgba(233, 12, 89, 0.5125806451612902)",dur:"2s",repeatCount:"indefinite",begin:"-1.7s"})]}),c.jsxs("circle",{cx:"64.51612903225805",cy:"68.1552",r:"3.17988",fill:"#46dff0",children:[c.jsx("animate",{attributeName:"r",keyTimes:"0;0.5;1",values:"2.4000000000000004;3.5999999999999996;2.4000000000000004",dur:"2s",repeatCount:"indefinite",begin:"-2.7s"}),c.jsx("animate",{attributeName:"cy",keyTimes:"0;0.5;1",values:"30.5;69.5;30.5",dur:"2s",repeatCount:"indefinite",begin:"-2.2s",keySplines:"0.5 0 0.5 1;0.5 0 0.5 1",calcMode:"spline"}),c.jsx("animate",{attributeName:"fill",keyTimes:"0;0.5;1",values:"#46dff0;rgba(53, 58, 57, 0.1435483870967742);#46dff0",dur:"2s",repeatCount:"indefinite",begin:"-1.7s"})]}),c.jsxs("circle",{cx:"74.19354838709677",cy:"30.6366",r:"3.06012",fill:"rgba(233, 12, 89, 0.5125806451612902)",children:[c.jsx("animate",{attributeName:"r",keyTimes:"0;0.5;1",values:"2.4000000000000004;3.5999999999999996;2.4000000000000004",dur:"2s",repeatCount:"indefinite",begin:"-1.9s"}),c.jsx("animate",{attributeName:"cy",keyTimes:"0;0.5;1",values:"30.5;69.5;30.5",dur:"2s",repeatCount:"indefinite",begin:"-1.4s",keySplines:"0.5 0 0.5 1;0.5 0 0.5 1",calcMode:"spline"}),c.jsx("animate",{attributeName:"fill",keyTimes:"0;0.5;1",values:"rgba(233, 12, 89, 0.5125806451612902);#ff0033;rgba(233, 12, 89, 0.5125806451612902)",dur:"2s",repeatCount:"indefinite",begin:"-1.9s"})]}),c.jsxs("circle",{cx:"74.19354838709677",cy:"69.3634",r:"2.93988",fill:"#46dff0",children:[c.jsx("animate",{attributeName:"r",keyTimes:"0;0.5;1",values:"2.4000000000000004;3.5999999999999996;2.4000000000000004",dur:"2s",repeatCount:"indefinite",begin:"-2.9s"}),c.jsx("animate",{attributeName:"cy",keyTimes:"0;0.5;1",values:"30.5;69.5;30.5",dur:"2s",repeatCount:"indefinite",begin:"-2.4s",keySplines:"0.5 0 0.5 1;0.5 0 0.5 1",calcMode:"spline"}),c.jsx("animate",{attributeName:"fill",keyTimes:"0;0.5;1",values:"#46dff0;rgba(53, 58, 57, 0.1435483870967742);#46dff0",dur:"2s",repeatCount:"indefinite",begin:"-1.9s"})]}),c.jsxs("circle",{cx:"83.87096774193547",cy:"34.6334",r:"3.30012",fill:"rgba(233, 12, 89, 0.5125806451612902)",children:[c.jsx("animate",{attributeName:"r",keyTimes:"0;0.5;1",values:"2.4000000000000004;3.5999999999999996;2.4000000000000004",dur:"2s",repeatCount:"indefinite",begin:"-2.1s"}),c.jsx("animate",{attributeName:"cy",keyTimes:"0;0.5;1",values:"30.5;69.5;30.5",dur:"2s",repeatCount:"indefinite",begin:"-1.6s",keySplines:"0.5 0 0.5 1;0.5 0 0.5 1",calcMode:"spline"}),c.jsx("animate",{attributeName:"fill",keyTimes:"0;0.5;1",values:"rgba(233, 12, 89, 0.5125806451612902);#ff0033;rgba(233, 12, 89, 0.5125806451612902)",dur:"2s",repeatCount:"indefinite",begin:"-2.1s"})]}),c.jsxs("circle",{cx:"83.87096774193547",cy:"65.3666",r:"2.69988",fill:"#46dff0",children:[c.jsx("animate",{attributeName:"r",keyTimes:"0;0.5;1",values:"2.4000000000000004;3.5999999999999996;2.4000000000000004",dur:"2s",repeatCount:"indefinite",begin:"-3.1s"}),c.jsx("animate",{attributeName:"cy",keyTimes:"0;0.5;1",values:"30.5;69.5;30.5",dur:"2s",repeatCount:"indefinite",begin:"-2.6s",keySplines:"0.5 0 0.5 1;0.5 0 0.5 1",calcMode:"spline"}),c.jsx("animate",{attributeName:"fill",keyTimes:"0;0.5;1",values:"#46dff0;rgba(53, 58, 57, 0.1435483870967742);#46dff0",dur:"2s",repeatCount:"indefinite",begin:"-2.1s"})]}),c.jsxs("circle",{cx:"93.54838709677418",cy:"46.1526",r:"3.54012",fill:"rgba(233, 12, 89, 0.5125806451612902)",children:[c.jsx("animate",{attributeName:"r",keyTimes:"0;0.5;1",values:"2.4000000000000004;3.5999999999999996;2.4000000000000004",dur:"2s",repeatCount:"indefinite",begin:"-2.3s"}),c.jsx("animate",{attributeName:"cy",keyTimes:"0;0.5;1",values:"30.5;69.5;30.5",dur:"2s",repeatCount:"indefinite",begin:"-1.8s",keySplines:"0.5 0 0.5 1;0.5 0 0.5 1",calcMode:"spline"}),c.jsx("animate",{attributeName:"fill",keyTimes:"0;0.5;1",values:"rgba(233, 12, 89, 0.5125806451612902);#ff0033;rgba(233, 12, 89, 0.5125806451612902)",dur:"2s",repeatCount:"indefinite",begin:"-2.3s"})]}),c.jsxs("circle",{cx:"93.54838709677418",cy:"53.8474",r:"2.45988",fill:"#46dff0",children:[c.jsx("animate",{attributeName:"r",keyTimes:"0;0.5;1",values:"2.4000000000000004;3.5999999999999996;2.4000000000000004",dur:"2s",repeatCount:"indefinite",begin:"-3.3s"}),c.jsx("animate",{attributeName:"cy",keyTimes:"0;0.5;1",values:"30.5;69.5;30.5",dur:"2s",repeatCount:"indefinite",begin:"-2.8s",keySplines:"0.5 0 0.5 1;0.5 0 0.5 1",calcMode:"spline"}),c.jsx("animate",{attributeName:"fill",keyTimes:"0;0.5;1",values:"#46dff0;rgba(53, 58, 57, 0.1435483870967742);#46dff0",dur:"2s",repeatCount:"indefinite",begin:"-2.3s"})]})]}):null,l4=()=>c.jsx("div",{children:c.jsx(s4,{visible:!0,height:"80",width:"80",ariaLabel:"dna-loading",wrapperStyle:{},wrapperClass:"dna-wrapper"})}),u4=()=>{const[e,t]=k.useState(!1),[n,r]=k.useState(""),[i,o]=k.useState(!0),a=()=>{o(!0),r(""),setTimeout(()=>{r(Math.floor(Math.random()*10)),o(!1)},2e3)};return c.jsxs(c.Fragment,{children:[c.jsx("button",{onClick:()=>t(!e),children:"Open Modal"}),c.jsx(bs,{isOpen:e,onClose:()=>t(!e),children:c.jsxs(e4,{children:[c.jsx("button",{onClick:()=>t(!e),children:"Close"}),c.jsx("h2",{children:"Modal Test"}),i?c.jsx(l4,{}):c.jsx("p",{children:n}),c.jsx("button",{onClick:a,children:"Generate number"})]})})]})},c4=()=>c.jsxs(c.Fragment,{children:[c.jsx(X3,{}),c.jsx(u4,{}),c.jsx(zw,{}),c.jsx(k.Suspense,{fallback:null,children:c.jsx(k0,{})})]});function Iu(){return Iu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Iu.apply(this,arguments)}function d4(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function f4(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var p4=function(){function e(n){var r=this;this._insertTag=function(i){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,o),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(f4(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=d4(i);try{o.insertRule(r,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),ke="-ms-",Va="-moz-",B="-webkit-",Cm="comm",ud="rule",cd="decl",h4="@import",Pm="@keyframes",m4="@layer",g4=Math.abs,Es=String.fromCharCode,y4=Object.assign;function v4(e,t){return ye(e,0)^45?(((t<<2^ye(e,0))<<2^ye(e,1))<<2^ye(e,2))<<2^ye(e,3):0}function jm(e){return e.trim()}function x4(e,t){return(e=t.exec(e))?e[0]:e}function W(e,t,n){return e.replace(t,n)}function Fu(e,t){return e.indexOf(t)}function ye(e,t){return e.charCodeAt(t)|0}function Qi(e,t,n){return e.slice(t,n)}function wt(e){return e.length}function dd(e){return e.length}function Ro(e,t){return t.push(e),e}function w4(e,t){return e.map(t).join("")}var Cs=1,Mr=1,Om=0,Ie=0,ae=0,Vr="";function Ps(e,t,n,r,i,o,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Cs,column:Mr,length:a,return:""}}function ni(e,t){return y4(Ps("",null,null,"",null,null,0),e,{length:-e.length},t)}function S4(){return ae}function k4(){return ae=Ie>0?ye(Vr,--Ie):0,Mr--,ae===10&&(Mr=1,Cs--),ae}function He(){return ae=Ie<Om?ye(Vr,Ie++):0,Mr++,ae===10&&(Mr=1,Cs++),ae}function Pt(){return ye(Vr,Ie)}function qo(){return Ie}function io(e,t){return Qi(Vr,e,t)}function Yi(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Nm(e){return Cs=Mr=1,Om=wt(Vr=e),Ie=0,[]}function Tm(e){return Vr="",e}function Xo(e){return jm(io(Ie-1,zu(e===91?e+2:e===40?e+1:e)))}function b4(e){for(;(ae=Pt())&&ae<33;)He();return Yi(e)>2||Yi(ae)>3?"":" "}function E4(e,t){for(;--t&&He()&&!(ae<48||ae>102||ae>57&&ae<65||ae>70&&ae<97););return io(e,qo()+(t<6&&Pt()==32&&He()==32))}function zu(e){for(;He();)switch(ae){case e:return Ie;case 34:case 39:e!==34&&e!==39&&zu(ae);break;case 40:e===41&&zu(e);break;case 92:He();break}return Ie}function C4(e,t){for(;He()&&e+ae!==47+10;)if(e+ae===42+42&&Pt()===47)break;return"/*"+io(t,Ie-1)+"*"+Es(e===47?e:He())}function P4(e){for(;!Yi(Pt());)He();return io(e,Ie)}function j4(e){return Tm(Zo("",null,null,null,[""],e=Nm(e),0,[0],e))}function Zo(e,t,n,r,i,o,a,s,l){for(var u=0,f=0,d=a,g=0,x=0,v=0,y=1,S=1,h=1,p=0,m="",w=i,b=o,E=r,C=m;S;)switch(v=p,p=He()){case 40:if(v!=108&&ye(C,d-1)==58){Fu(C+=W(Xo(p),"&","&\f"),"&\f")!=-1&&(h=-1);break}case 34:case 39:case 91:C+=Xo(p);break;case 9:case 10:case 13:case 32:C+=b4(v);break;case 92:C+=E4(qo()-1,7);continue;case 47:switch(Pt()){case 42:case 47:Ro(O4(C4(He(),qo()),t,n),l);break;default:C+="/"}break;case 123*y:s[u++]=wt(C)*h;case 125*y:case 59:case 0:switch(p){case 0:case 125:S=0;case 59+f:h==-1&&(C=W(C,/\f/g,"")),x>0&&wt(C)-d&&Ro(x>32?kp(C+";",r,n,d-1):kp(W(C," ","")+";",r,n,d-2),l);break;case 59:C+=";";default:if(Ro(E=Sp(C,t,n,u,f,i,s,m,w=[],b=[],d),o),p===123)if(f===0)Zo(C,t,E,E,w,o,d,s,b);else switch(g===99&&ye(C,3)===110?100:g){case 100:case 108:case 109:case 115:Zo(e,E,E,r&&Ro(Sp(e,E,E,0,0,i,s,m,i,w=[],d),b),i,b,d,s,r?w:b);break;default:Zo(C,E,E,E,[""],b,0,s,b)}}u=f=x=0,y=h=1,m=C="",d=a;break;case 58:d=1+wt(C),x=v;default:if(y<1){if(p==123)--y;else if(p==125&&y++==0&&k4()==125)continue}switch(C+=Es(p),p*y){case 38:h=f>0?1:(C+="\f",-1);break;case 44:s[u++]=(wt(C)-1)*h,h=1;break;case 64:Pt()===45&&(C+=Xo(He())),g=Pt(),f=d=wt(m=C+=P4(qo())),p++;break;case 45:v===45&&wt(C)==2&&(y=0)}}return o}function Sp(e,t,n,r,i,o,a,s,l,u,f){for(var d=i-1,g=i===0?o:[""],x=dd(g),v=0,y=0,S=0;v<r;++v)for(var h=0,p=Qi(e,d+1,d=g4(y=a[v])),m=e;h<x;++h)(m=jm(y>0?g[h]+" "+p:W(p,/&\f/g,g[h])))&&(l[S++]=m);return Ps(e,t,n,i===0?ud:s,l,u,f)}function O4(e,t,n){return Ps(e,t,n,Cm,Es(S4()),Qi(e,2,-2),0)}function kp(e,t,n,r){return Ps(e,t,n,cd,Qi(e,0,r),Qi(e,r+1,-1),r)}function xr(e,t){for(var n="",r=dd(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function N4(e,t,n,r){switch(e.type){case m4:if(e.children.length)break;case h4:case cd:return e.return=e.return||e.value;case Cm:return"";case Pm:return e.return=e.value+"{"+xr(e.children,r)+"}";case ud:e.value=e.props.join(",")}return wt(n=xr(e.children,r))?e.return=e.value+"{"+n+"}":""}function T4(e){var t=dd(e);return function(n,r,i,o){for(var a="",s=0;s<t;s++)a+=e[s](n,r,i,o)||"";return a}}function _4(e){return function(t){t.root||(t=t.return)&&e(t)}}var R4=function(t,n,r){for(var i=0,o=0;i=o,o=Pt(),i===38&&o===12&&(n[r]=1),!Yi(o);)He();return io(t,Ie)},M4=function(t,n){var r=-1,i=44;do switch(Yi(i)){case 0:i===38&&Pt()===12&&(n[r]=1),t[r]+=R4(Ie-1,n,r);break;case 2:t[r]+=Xo(i);break;case 4:if(i===44){t[++r]=Pt()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=Es(i)}while(i=He());return t},A4=function(t,n){return Tm(M4(Nm(t),n))},bp=new WeakMap,D4=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!bp.get(r))&&!i){bp.set(t,!0);for(var o=[],a=A4(n,o),s=r.props,l=0,u=0;l<a.length;l++)for(var f=0;f<s.length;f++,u++)t.props[u]=o[l]?a[l].replace(/&\f/g,s[f]):s[f]+" "+a[l]}}},$4=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function _m(e,t){switch(v4(e,t)){case 5103:return B+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return B+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return B+e+Va+e+ke+e+e;case 6828:case 4268:return B+e+ke+e+e;case 6165:return B+e+ke+"flex-"+e+e;case 5187:return B+e+W(e,/(\w+).+(:[^]+)/,B+"box-$1$2"+ke+"flex-$1$2")+e;case 5443:return B+e+ke+"flex-item-"+W(e,/flex-|-self/,"")+e;case 4675:return B+e+ke+"flex-line-pack"+W(e,/align-content|flex-|-self/,"")+e;case 5548:return B+e+ke+W(e,"shrink","negative")+e;case 5292:return B+e+ke+W(e,"basis","preferred-size")+e;case 6060:return B+"box-"+W(e,"-grow","")+B+e+ke+W(e,"grow","positive")+e;case 4554:return B+W(e,/([^-])(transform)/g,"$1"+B+"$2")+e;case 6187:return W(W(W(e,/(zoom-|grab)/,B+"$1"),/(image-set)/,B+"$1"),e,"")+e;case 5495:case 3959:return W(e,/(image-set\([^]*)/,B+"$1$`$1");case 4968:return W(W(e,/(.+:)(flex-)?(.*)/,B+"box-pack:$3"+ke+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+B+e+e;case 4095:case 3583:case 4068:case 2532:return W(e,/(.+)-inline(.+)/,B+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(wt(e)-1-t>6)switch(ye(e,t+1)){case 109:if(ye(e,t+4)!==45)break;case 102:return W(e,/(.+:)(.+)-([^]+)/,"$1"+B+"$2-$3$1"+Va+(ye(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Fu(e,"stretch")?_m(W(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(ye(e,t+1)!==115)break;case 6444:switch(ye(e,wt(e)-3-(~Fu(e,"!important")&&10))){case 107:return W(e,":",":"+B)+e;case 101:return W(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+B+(ye(e,14)===45?"inline-":"")+"box$3$1"+B+"$2$3$1"+ke+"$2box$3")+e}break;case 5936:switch(ye(e,t+11)){case 114:return B+e+ke+W(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return B+e+ke+W(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return B+e+ke+W(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return B+e+ke+e+e}return e}var L4=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case cd:t.return=_m(t.value,t.length);break;case Pm:return xr([ni(t,{value:W(t.value,"@","@"+B)})],i);case ud:if(t.length)return w4(t.props,function(o){switch(x4(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return xr([ni(t,{props:[W(o,/:(read-\w+)/,":"+Va+"$1")]})],i);case"::placeholder":return xr([ni(t,{props:[W(o,/:(plac\w+)/,":"+B+"input-$1")]}),ni(t,{props:[W(o,/:(plac\w+)/,":"+Va+"$1")]}),ni(t,{props:[W(o,/:(plac\w+)/,ke+"input-$1")]})],i)}return""})}},I4=[L4],F4=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(y){var S=y.getAttribute("data-emotion");S.indexOf(" ")!==-1&&(document.head.appendChild(y),y.setAttribute("data-s",""))})}var i=t.stylisPlugins||I4,o={},a,s=[];a=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(y){for(var S=y.getAttribute("data-emotion").split(" "),h=1;h<S.length;h++)o[S[h]]=!0;s.push(y)});var l,u=[D4,$4];{var f,d=[N4,_4(function(y){f.insert(y)})],g=T4(u.concat(i,d)),x=function(S){return xr(j4(S),g)};l=function(S,h,p,m){f=p,x(S?S+"{"+h.styles+"}":h.styles),m&&(v.inserted[h.name]=!0)}}var v={key:n,sheet:new p4({key:n,container:a,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:l};return v.sheet.hydrate(s),v},z4=!0;function B4(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):r+=i+" "}),r}var Rm=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||z4===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},W4=function(t,n,r){Rm(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var o=n;do t.insert(n===o?"."+i:"",o,t.sheet,!0),o=o.next;while(o!==void 0)}};function U4(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var V4={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},H4=/[A-Z]|^ms/g,Q4=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Mm=function(t){return t.charCodeAt(1)===45},Ep=function(t){return t!=null&&typeof t!="boolean"},wl=M1(function(e){return Mm(e)?e:e.replace(H4,"-$&").toLowerCase()}),Cp=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(Q4,function(r,i,o){return St={name:i,styles:o,next:St},i})}return V4[t]!==1&&!Mm(t)&&typeof n=="number"&&n!==0?n+"px":n};function Ki(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return St={name:n.name,styles:n.styles,next:St},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)St={name:r.name,styles:r.styles,next:St},r=r.next;var i=n.styles+";";return i}return Y4(e,t,n)}case"function":{if(e!==void 0){var o=St,a=n(e);return St=o,Ki(e,t,a)}break}}if(t==null)return n;var s=t[n];return s!==void 0?s:n}function Y4(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=Ki(e,t,n[i])+";";else for(var o in n){var a=n[o];if(typeof a!="object")t!=null&&t[a]!==void 0?r+=o+"{"+t[a]+"}":Ep(a)&&(r+=wl(o)+":"+Cp(o,a)+";");else if(Array.isArray(a)&&typeof a[0]=="string"&&(t==null||t[a[0]]===void 0))for(var s=0;s<a.length;s++)Ep(a[s])&&(r+=wl(o)+":"+Cp(o,a[s])+";");else{var l=Ki(e,t,a);switch(o){case"animation":case"animationName":{r+=wl(o)+":"+l+";";break}default:r+=o+"{"+l+"}"}}}return r}var Pp=/label:\s*([^\s;\n{]+)\s*(;|$)/g,St,K4=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,o="";St=void 0;var a=t[0];a==null||a.raw===void 0?(i=!1,o+=Ki(r,n,a)):o+=a[0];for(var s=1;s<t.length;s++)o+=Ki(r,n,t[s]),i&&(o+=a[s]);Pp.lastIndex=0;for(var l="",u;(u=Pp.exec(o))!==null;)l+="-"+u[1];var f=U4(o)+l;return{name:f,styles:o,next:St}},G4=function(t){return t()},q4=bi["useInsertionEffect"]?bi["useInsertionEffect"]:!1,X4=q4||G4,Am=k.createContext(typeof HTMLElement<"u"?F4({key:"css"}):null);Am.Provider;var Z4=function(t){return k.forwardRef(function(n,r){var i=k.useContext(Am);return t(n,i,r)})},J4=k.createContext({}),e5=yx,t5=function(t){return t!=="theme"},jp=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?e5:t5},Op=function(t,n,r){var i;if(n){var o=n.shouldForwardProp;i=t.__emotion_forwardProp&&o?function(a){return t.__emotion_forwardProp(a)&&o(a)}:o}return typeof i!="function"&&r&&(i=t.__emotion_forwardProp),i},n5=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return Rm(n,r,i),X4(function(){return W4(n,r,i)}),null},r5=function e(t,n){var r=t.__emotion_real===t,i=r&&t.__emotion_base||t,o,a;n!==void 0&&(o=n.label,a=n.target);var s=Op(t,n,r),l=s||jp(i),u=!l("as");return function(){var f=arguments,d=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(o!==void 0&&d.push("label:"+o+";"),f[0]==null||f[0].raw===void 0)d.push.apply(d,f);else{d.push(f[0][0]);for(var g=f.length,x=1;x<g;x++)d.push(f[x],f[0][x])}var v=Z4(function(y,S,h){var p=u&&y.as||i,m="",w=[],b=y;if(y.theme==null){b={};for(var E in y)b[E]=y[E];b.theme=k.useContext(J4)}typeof y.className=="string"?m=B4(S.registered,w,y.className):y.className!=null&&(m=y.className+" ");var C=K4(d.concat(w),S.registered,b);m+=S.key+"-"+C.name,a!==void 0&&(m+=" "+a);var O=u&&s===void 0?jp(p):l,A={};for(var D in y)u&&D==="as"||O(D)&&(A[D]=y[D]);return A.className=m,A.ref=h,k.createElement(k.Fragment,null,k.createElement(n5,{cache:S,serialized:C,isStringTag:typeof p=="string"}),k.createElement(p,A))});return v.displayName=o!==void 0?o:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",v.defaultProps=t.defaultProps,v.__emotion_real=v,v.__emotion_base=i,v.__emotion_styles=d,v.__emotion_forwardProp=s,Object.defineProperty(v,"toString",{value:function(){return"."+a}}),v.withComponent=function(y,S){return e(y,Iu({},n,S,{shouldForwardProp:Op(v,S,!0)})).apply(void 0,d)},v}},i5=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],R=r5.bind();i5.forEach(function(e){R[e]=R(e)});const o5=R.div`
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-position: left top;
  background-size: 100% 100%;
`,a5="/water-tracker/assets/background-main-page-9f8a621c.png",s5="/water-tracker/assets/signup-background-desktop-88afa2b3.png",l5=_.section`
  height: 100%;
  background-image: url(${a5});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center bottom;
  &::after {
    content: '';
    position: absolute;
    background-image: url(${s5});
    background-size: contain;
    background-repeat: no-repeat;
    z-index: -99;
    top: 50%;
    left: 50%;
    transform: translate(-48%, -48%);
    width: 1404px;
    height: 582px;
  }
`,u5=_.div`

 
  
  height: 600px;

  

    max-width: 1280px;
    margin: 0 auto;
    padding: 20px 112px;
   
    
  }
`;_.div`
  background-repeat: no-repeat;
`;_.img`
  width: 100%;
  height: 100%;
`;const c5=_.div`
  display: flex;
  flex-direction: row;
  align-items: normal;

  margin: 0 auto;
  padding-top: 60px;
  padding-bottom: 294px;
  padding-left: 30px;
  padding-right: 210px;
`,d5=_.div`
  position: relative;
`,f5=_.div``,p5=_.h1`
  color: var(--primary-dark);
  font-family: Roboto;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.2;
`,h5=_.p`
  color: var(--primary-dark);
  font-family: Roboto;
  font-size: 26px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  margin-top: 16px;
  margin-bottom: 0;
`,m5=_.h2`
  color: var(--primary-dark);
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.1;
  margin-top: 24px;
`,g5=_.ul`
  padding: 0;
  padding-bottom: 34px;
`,Sl=_.li`
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
`,y5=_.button`
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
`,v5=_.div`
  position: relative;

  flex-direction: column;
  align-items: flex-start;
`,x5=_.div`
  position: absolute;
  padding: 32px 21px;
  border-radius: 10px;
  background: var(--secondary-first);
  box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.3);
  margin-left: 81px;
  margin-top: 63px;
  width: 515px;
`,w5=_.h2`
  color: var(--primary-dark);
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.1;
  margin-bottom: 12px;
`,S5=_.ul`
  list-style: initial;

  text-align: left;
  color: var(--primary-focus);
  padding-left: 24px;
`,Nn=_.li`
  color: var(--primary-dark);
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;

  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0;
  }

  &::marker {
    color: var(--primary-focus);
    font-size: 1.5em;
  }
`,Le="/water-tracker/assets/icons-60577806.svg",k5=()=>c.jsx(c.Fragment,{children:c.jsxs(c5,{children:[c.jsxs(d5,{children:[c.jsxs(f5,{children:[c.jsx(p5,{children:"Water consumption tracker"}),c.jsx(h5,{children:"Record daily water intake and track"})]}),c.jsx(m5,{children:"Tracker Benefits"}),c.jsxs(g5,{children:[c.jsxs(Sl,{children:[c.jsx("svg",{children:c.jsx("use",{href:`${Le}#icon-calendar`})}),"Habit drive"]}),c.jsxs(Sl,{children:[c.jsx("svg",{children:c.jsx("use",{href:`${Le}#icon-chart-bar`})}),"View statistics"]}),c.jsxs(Sl,{children:[c.jsx("svg",{children:c.jsx("use",{href:`${Le}#icon-wrench-screwdriver`})}),"Personal rate setting"]})]}),c.jsx(y5,{children:"Try tracker"})]}),c.jsx(v5,{children:c.jsxs(x5,{children:[c.jsx(w5,{children:"Why drink water"}),c.jsxs(S5,{children:[c.jsx(Nn,{children:"Supply of nutrients to all organs"}),c.jsx(Nn,{children:"Providing oxygen to the lungs"}),c.jsx(Nn,{children:"Maintaining the work of the heart"}),c.jsx(Nn,{children:"Release of processed substances"}),c.jsx(Nn,{children:"Ensuring the stability of the internal environment"}),c.jsx(Nn,{children:"Maintaining within the normal temperature"}),c.jsx(Nn,{children:"Maintaining an immune system capable of resisting disease"})]})]})})]})}),b5=()=>c.jsx(l5,{children:c.jsx(u5,{children:c.jsx(k5,{})})}),E5=_.form`
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
    padding-top: 130px;

    input {
      width: 384px;
    }
  }
`,C5=()=>c.jsxs(E5,{children:[c.jsx("h2",{children:"Sign Up"}),c.jsx("label",{children:"Enter your email"}),c.jsx("input",{type:"email",name:"email",placeholder:"E-mail"}),c.jsx("label",{children:"Enter your password"}),c.jsx("input",{type:"text",name:"password",placeholder:"Password"}),c.jsx("label",{children:"Repeat password"}),c.jsx("input",{type:"text",name:"password",placeholder:"Repeat password"}),c.jsx("button",{type:"submit",children:"Submit"}),c.jsx(E0,{to:"/signin",children:"Sign in"})]}),Dm="/water-tracker/assets/signup-background-mobile-a9885346.png",$m="/water-tracker/assets/signup-background-tablet-8fa3f76f.png",Lm="/water-tracker/assets/signup-background-desktop-88afa2b3.png",Im="/water-tracker/assets/signup-bottle-mobile-95e79bed.png",Fm="/water-tracker/assets/signup-bottle-tablet-801c7b8e.png",zm="/water-tracker/assets/signup-bottle-desktop-050d83d0.png",P5=_.section`
  @media only screen and (max-width: 767px) {
    background-image: url(${Dm});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center top 50px;
    &::before {
      content: '';
      position: absolute;
      background-image: url(${Im});
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
    background-image: url(${$m});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center top 15px;
    &::before {
      content: '';
      position: absolute;
      background-image: url(${Fm});
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
    background-image: url(${Lm});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center top;
    &::before {
      content: '';
      position: absolute;
      background-image: url(${zm});
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
`,j5=_.div`
  max-width: 320px;
  margin: 0 auto;
  padding: 24px 20px;
  height: 600px;

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
`,O5=()=>c.jsx(P5,{children:c.jsx(j5,{children:c.jsx(C5,{})})}),N5=_.form`
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
    padding-top: 130px;

    input {
      width: 384px;
    }
  }
`,T5=()=>c.jsxs(N5,{children:[c.jsx("h2",{children:"Sign In"}),c.jsx("label",{children:"Enter your email"}),c.jsx("input",{type:"email",name:"email",placeholder:"E-mail"}),c.jsx("label",{children:"Enter your password"}),c.jsx("input",{type:"text",name:"password",placeholder:"Password"}),c.jsx("button",{type:"submit",children:"Sign In"}),c.jsx(E0,{to:"/signin",children:"Sign up"})]}),_5=_.section`
  @media only screen and (max-width: 767px) {
    background-image: url(${Dm});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center top 50px;
    &::before {
      content: '';
      position: absolute;
      background-image: url(${Im});
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
    background-image: url(${$m});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center top 15px;
    &::before {
      content: '';
      position: absolute;
      background-image: url(${Fm});
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
    background-image: url(${Lm});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center top;
    &::before {
      content: '';
      position: absolute;
      background-image: url(${zm});
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
`,R5=_.div`
  max-width: 320px;
  margin: 0 auto;
  padding: 24px 20px;
  height: 600px;

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
`,M5=()=>c.jsx(_5,{children:c.jsx(R5,{children:c.jsx(T5,{})})}),A5=_.div`
  width: 100%;
  max-width: 320px;
  margin: 0 auto;
  padding: 0 20px;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0 32px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding: 0 112px;
  }
`,D5=({children:e})=>c.jsx(A5,{children:e});function de(e){const t=Object.prototype.toString.call(e);return e instanceof Date||typeof e=="object"&&t==="[object Date]"?new e.constructor(+e):typeof e=="number"||t==="[object Number]"||typeof e=="string"||t==="[object String]"?new Date(e):new Date(NaN)}function Vt(e,t){return e instanceof Date?new e.constructor(t):new Date(t)}function Bm(e,t){const n=de(e);if(isNaN(t))return Vt(e,NaN);if(!t)return n;const r=n.getDate(),i=Vt(e,n.getTime());i.setMonth(n.getMonth()+t+1,0);const o=i.getDate();return r>=o?i:(n.setFullYear(i.getFullYear(),i.getMonth(),r),n)}const Wm=6048e5,$5=864e5;let L5={};function js(){return L5}function Gi(e,t){var s,l,u,f;const n=js(),r=(t==null?void 0:t.weekStartsOn)??((l=(s=t==null?void 0:t.locale)==null?void 0:s.options)==null?void 0:l.weekStartsOn)??n.weekStartsOn??((f=(u=n.locale)==null?void 0:u.options)==null?void 0:f.weekStartsOn)??0,i=de(e),o=i.getDay(),a=(o<r?7:0)+o-r;return i.setDate(i.getDate()-a),i.setHours(0,0,0,0),i}function Ha(e){return Gi(e,{weekStartsOn:1})}function Um(e){const t=de(e),n=t.getFullYear(),r=Vt(e,0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);const i=Ha(r),o=Vt(e,0);o.setFullYear(n,0,4),o.setHours(0,0,0,0);const a=Ha(o);return t.getTime()>=i.getTime()?n+1:t.getTime()>=a.getTime()?n:n-1}function Np(e){const t=de(e);return t.setHours(0,0,0,0),t}function Tp(e){const t=de(e),n=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return n.setUTCFullYear(t.getFullYear()),+e-+n}function I5(e,t){const n=Np(e),r=Np(t),i=+n-Tp(n),o=+r-Tp(r);return Math.round((i-o)/$5)}function F5(e){const t=Um(e),n=Vt(e,0);return n.setFullYear(t,0,4),n.setHours(0,0,0,0),Ha(n)}function z5(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function B5(e){if(!z5(e)&&typeof e!="number")return!1;const t=de(e);return!isNaN(Number(t))}function W5(e,t){const n=de(e.start),r=de(e.end);let i=+n>+r;const o=i?+n:+r,a=i?r:n;a.setHours(0,0,0,0);let s=(t==null?void 0:t.step)??1;if(!s)return[];s<0&&(s=-s,i=!i);const l=[];for(;+a<=o;)l.push(de(a)),a.setDate(a.getDate()+s),a.setHours(0,0,0,0);return i?l.reverse():l}function U5(e){const t=de(e);return t.setDate(1),t.setHours(0,0,0,0),t}function V5(e){const t=de(e),n=Vt(e,0);return n.setFullYear(t.getFullYear(),0,1),n.setHours(0,0,0,0),n}const H5={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Q5=(e,t,n)=>{let r;const i=H5[e];return typeof i=="string"?r=i:t===1?r=i.one:r=i.other.replace("{{count}}",t.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};function kl(e){return(t={})=>{const n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}const Y5={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},K5={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},G5={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},q5={date:kl({formats:Y5,defaultWidth:"full"}),time:kl({formats:K5,defaultWidth:"full"}),dateTime:kl({formats:G5,defaultWidth:"full"})},X5={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Z5=(e,t,n,r)=>X5[e];function ri(e){return(t,n)=>{const r=n!=null&&n.context?String(n.context):"standalone";let i;if(r==="formatting"&&e.formattingValues){const a=e.defaultFormattingWidth||e.defaultWidth,s=n!=null&&n.width?String(n.width):a;i=e.formattingValues[s]||e.formattingValues[a]}else{const a=e.defaultWidth,s=n!=null&&n.width?String(n.width):e.defaultWidth;i=e.values[s]||e.values[a]}const o=e.argumentCallback?e.argumentCallback(t):t;return i[o]}}const J5={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},e6={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},t6={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},n6={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},r6={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},i6={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},o6=(e,t)=>{const n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},a6={ordinalNumber:o6,era:ri({values:J5,defaultWidth:"wide"}),quarter:ri({values:e6,defaultWidth:"wide",argumentCallback:e=>e-1}),month:ri({values:t6,defaultWidth:"wide"}),day:ri({values:n6,defaultWidth:"wide"}),dayPeriod:ri({values:r6,defaultWidth:"wide",formattingValues:i6,defaultFormattingWidth:"wide"})};function ii(e){return(t,n={})=>{const r=n.width,i=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],o=t.match(i);if(!o)return null;const a=o[0],s=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],l=Array.isArray(s)?l6(s,d=>d.test(a)):s6(s,d=>d.test(a));let u;u=e.valueCallback?e.valueCallback(l):l,u=n.valueCallback?n.valueCallback(u):u;const f=t.slice(a.length);return{value:u,rest:f}}}function s6(e,t){for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&t(e[n]))return n}function l6(e,t){for(let n=0;n<e.length;n++)if(t(e[n]))return n}function u6(e){return(t,n={})=>{const r=t.match(e.matchPattern);if(!r)return null;const i=r[0],o=t.match(e.parsePattern);if(!o)return null;let a=e.valueCallback?e.valueCallback(o[0]):o[0];a=n.valueCallback?n.valueCallback(a):a;const s=t.slice(i.length);return{value:a,rest:s}}}const c6=/^(\d+)(th|st|nd|rd)?/i,d6=/\d+/i,f6={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},p6={any:[/^b/i,/^(a|c)/i]},h6={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},m6={any:[/1/i,/2/i,/3/i,/4/i]},g6={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},y6={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},v6={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},x6={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},w6={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},S6={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},k6={ordinalNumber:u6({matchPattern:c6,parsePattern:d6,valueCallback:e=>parseInt(e,10)}),era:ii({matchPatterns:f6,defaultMatchWidth:"wide",parsePatterns:p6,defaultParseWidth:"any"}),quarter:ii({matchPatterns:h6,defaultMatchWidth:"wide",parsePatterns:m6,defaultParseWidth:"any",valueCallback:e=>e+1}),month:ii({matchPatterns:g6,defaultMatchWidth:"wide",parsePatterns:y6,defaultParseWidth:"any"}),day:ii({matchPatterns:v6,defaultMatchWidth:"wide",parsePatterns:x6,defaultParseWidth:"any"}),dayPeriod:ii({matchPatterns:w6,defaultMatchWidth:"any",parsePatterns:S6,defaultParseWidth:"any"})},b6={code:"en-US",formatDistance:Q5,formatLong:q5,formatRelative:Z5,localize:a6,match:k6,options:{weekStartsOn:0,firstWeekContainsDate:1}};function E6(e){const t=de(e);return I5(t,V5(t))+1}function C6(e){const t=de(e),n=+Ha(t)-+F5(t);return Math.round(n/Wm)+1}function Vm(e,t){var f,d,g,x;const n=de(e),r=n.getFullYear(),i=js(),o=(t==null?void 0:t.firstWeekContainsDate)??((d=(f=t==null?void 0:t.locale)==null?void 0:f.options)==null?void 0:d.firstWeekContainsDate)??i.firstWeekContainsDate??((x=(g=i.locale)==null?void 0:g.options)==null?void 0:x.firstWeekContainsDate)??1,a=Vt(e,0);a.setFullYear(r+1,0,o),a.setHours(0,0,0,0);const s=Gi(a,t),l=Vt(e,0);l.setFullYear(r,0,o),l.setHours(0,0,0,0);const u=Gi(l,t);return n.getTime()>=s.getTime()?r+1:n.getTime()>=u.getTime()?r:r-1}function P6(e,t){var s,l,u,f;const n=js(),r=(t==null?void 0:t.firstWeekContainsDate)??((l=(s=t==null?void 0:t.locale)==null?void 0:s.options)==null?void 0:l.firstWeekContainsDate)??n.firstWeekContainsDate??((f=(u=n.locale)==null?void 0:u.options)==null?void 0:f.firstWeekContainsDate)??1,i=Vm(e,t),o=Vt(e,0);return o.setFullYear(i,0,r),o.setHours(0,0,0,0),Gi(o,t)}function j6(e,t){const n=de(e),r=+Gi(n,t)-+P6(n,t);return Math.round(r/Wm)+1}function V(e,t){const n=e<0?"-":"",r=Math.abs(e).toString().padStart(t,"0");return n+r}const qt={y(e,t){const n=e.getFullYear(),r=n>0?n:1-n;return V(t==="yy"?r%100:r,t.length)},M(e,t){const n=e.getMonth();return t==="M"?String(n+1):V(n+1,2)},d(e,t){return V(e.getDate(),t.length)},a(e,t){const n=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(e,t){return V(e.getHours()%12||12,t.length)},H(e,t){return V(e.getHours(),t.length)},m(e,t){return V(e.getMinutes(),t.length)},s(e,t){return V(e.getSeconds(),t.length)},S(e,t){const n=t.length,r=e.getMilliseconds(),i=Math.trunc(r*Math.pow(10,n-3));return V(i,t.length)}},Jn={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},_p={G:function(e,t,n){const r=e.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if(t==="yo"){const r=e.getFullYear(),i=r>0?r:1-r;return n.ordinalNumber(i,{unit:"year"})}return qt.y(e,t)},Y:function(e,t,n,r){const i=Vm(e,r),o=i>0?i:1-i;if(t==="YY"){const a=o%100;return V(a,2)}return t==="Yo"?n.ordinalNumber(o,{unit:"year"}):V(o,t.length)},R:function(e,t){const n=Um(e);return V(n,t.length)},u:function(e,t){const n=e.getFullYear();return V(n,t.length)},Q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return V(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return V(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){const r=e.getMonth();switch(t){case"M":case"MM":return qt.M(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){const r=e.getMonth();switch(t){case"L":return String(r+1);case"LL":return V(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){const i=j6(e,r);return t==="wo"?n.ordinalNumber(i,{unit:"week"}):V(i,t.length)},I:function(e,t,n){const r=C6(e);return t==="Io"?n.ordinalNumber(r,{unit:"week"}):V(r,t.length)},d:function(e,t,n){return t==="do"?n.ordinalNumber(e.getDate(),{unit:"date"}):qt.d(e,t)},D:function(e,t,n){const r=E6(e);return t==="Do"?n.ordinalNumber(r,{unit:"dayOfYear"}):V(r,t.length)},E:function(e,t,n){const r=e.getDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){const i=e.getDay(),o=(i-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(o);case"ee":return V(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(i,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(i,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(i,{width:"short",context:"formatting"});case"eeee":default:return n.day(i,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){const i=e.getDay(),o=(i-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(o);case"cc":return V(o,t.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(i,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(i,{width:"narrow",context:"standalone"});case"cccccc":return n.day(i,{width:"short",context:"standalone"});case"cccc":default:return n.day(i,{width:"wide",context:"standalone"})}},i:function(e,t,n){const r=e.getDay(),i=r===0?7:r;switch(t){case"i":return String(i);case"ii":return V(i,t.length);case"io":return n.ordinalNumber(i,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){const i=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(i,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(i,{width:"wide",context:"formatting"})}},b:function(e,t,n){const r=e.getHours();let i;switch(r===12?i=Jn.noon:r===0?i=Jn.midnight:i=r/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(i,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(i,{width:"wide",context:"formatting"})}},B:function(e,t,n){const r=e.getHours();let i;switch(r>=17?i=Jn.evening:r>=12?i=Jn.afternoon:r>=4?i=Jn.morning:i=Jn.night,t){case"B":case"BB":case"BBB":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(i,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(i,{width:"wide",context:"formatting"})}},h:function(e,t,n){if(t==="ho"){let r=e.getHours()%12;return r===0&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return qt.h(e,t)},H:function(e,t,n){return t==="Ho"?n.ordinalNumber(e.getHours(),{unit:"hour"}):qt.H(e,t)},K:function(e,t,n){const r=e.getHours()%12;return t==="Ko"?n.ordinalNumber(r,{unit:"hour"}):V(r,t.length)},k:function(e,t,n){let r=e.getHours();return r===0&&(r=24),t==="ko"?n.ordinalNumber(r,{unit:"hour"}):V(r,t.length)},m:function(e,t,n){return t==="mo"?n.ordinalNumber(e.getMinutes(),{unit:"minute"}):qt.m(e,t)},s:function(e,t,n){return t==="so"?n.ordinalNumber(e.getSeconds(),{unit:"second"}):qt.s(e,t)},S:function(e,t){return qt.S(e,t)},X:function(e,t,n){const r=e.getTimezoneOffset();if(r===0)return"Z";switch(t){case"X":return Mp(r);case"XXXX":case"XX":return Mn(r);case"XXXXX":case"XXX":default:return Mn(r,":")}},x:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"x":return Mp(r);case"xxxx":case"xx":return Mn(r);case"xxxxx":case"xxx":default:return Mn(r,":")}},O:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+Rp(r,":");case"OOOO":default:return"GMT"+Mn(r,":")}},z:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+Rp(r,":");case"zzzz":default:return"GMT"+Mn(r,":")}},t:function(e,t,n){const r=Math.trunc(e.getTime()/1e3);return V(r,t.length)},T:function(e,t,n){const r=e.getTime();return V(r,t.length)}};function Rp(e,t=""){const n=e>0?"-":"+",r=Math.abs(e),i=Math.trunc(r/60),o=r%60;return o===0?n+String(i):n+String(i)+t+V(o,2)}function Mp(e,t){return e%60===0?(e>0?"-":"+")+V(Math.abs(e)/60,2):Mn(e,t)}function Mn(e,t=""){const n=e>0?"-":"+",r=Math.abs(e),i=V(Math.trunc(r/60),2),o=V(r%60,2);return n+i+t+o}const Ap=(e,t)=>{switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}},Hm=(e,t)=>{switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}},O6=(e,t)=>{const n=e.match(/(P+)(p+)?/)||[],r=n[1],i=n[2];if(!i)return Ap(e,t);let o;switch(r){case"P":o=t.dateTime({width:"short"});break;case"PP":o=t.dateTime({width:"medium"});break;case"PPP":o=t.dateTime({width:"long"});break;case"PPPP":default:o=t.dateTime({width:"full"});break}return o.replace("{{date}}",Ap(r,t)).replace("{{time}}",Hm(i,t))},N6={p:Hm,P:O6},T6=/^D+$/,_6=/^Y+$/,R6=["D","DD","YY","YYYY"];function M6(e){return T6.test(e)}function A6(e){return _6.test(e)}function D6(e,t,n){const r=$6(e,t,n);if(console.warn(r),R6.includes(e))throw new RangeError(r)}function $6(e,t,n){const r=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const L6=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,I6=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,F6=/^'([^]*?)'?$/,z6=/''/g,B6=/[a-zA-Z]/;function Jo(e,t,n){var f,d,g,x,v,y,S,h;const r=js(),i=(n==null?void 0:n.locale)??r.locale??b6,o=(n==null?void 0:n.firstWeekContainsDate)??((d=(f=n==null?void 0:n.locale)==null?void 0:f.options)==null?void 0:d.firstWeekContainsDate)??r.firstWeekContainsDate??((x=(g=r.locale)==null?void 0:g.options)==null?void 0:x.firstWeekContainsDate)??1,a=(n==null?void 0:n.weekStartsOn)??((y=(v=n==null?void 0:n.locale)==null?void 0:v.options)==null?void 0:y.weekStartsOn)??r.weekStartsOn??((h=(S=r.locale)==null?void 0:S.options)==null?void 0:h.weekStartsOn)??0,s=de(e);if(!B5(s))throw new RangeError("Invalid time value");let l=t.match(I6).map(p=>{const m=p[0];if(m==="p"||m==="P"){const w=N6[m];return w(p,i.formatLong)}return p}).join("").match(L6).map(p=>{if(p==="''")return{isToken:!1,value:"'"};const m=p[0];if(m==="'")return{isToken:!1,value:W6(p)};if(_p[m])return{isToken:!0,value:p};if(m.match(B6))throw new RangeError("Format string contains an unescaped latin alphabet character `"+m+"`");return{isToken:!1,value:p}});i.localize.preprocessor&&(l=i.localize.preprocessor(s,l));const u={firstWeekContainsDate:o,weekStartsOn:a,locale:i};return l.map(p=>{if(!p.isToken)return p.value;const m=p.value;(!(n!=null&&n.useAdditionalWeekYearTokens)&&A6(m)||!(n!=null&&n.useAdditionalDayOfYearTokens)&&M6(m))&&D6(m,t,String(e));const w=_p[m[0]];return w(s,m,i.localize,u)}).join("")}function W6(e){const t=e.match(F6);return t?t[1].replace(z6,"'"):e}function U6(e){const t=de(e),n=t.getMonth();return t.setFullYear(t.getFullYear(),n+1,0),t.setHours(0,0,0,0),t}function Dp(e,t){const n=de(e),r=de(t);return n.getFullYear()===r.getFullYear()&&n.getMonth()===r.getMonth()}function V6(e,t){return Bm(e,-t)}const H6=R("div")`
margin-bottom: 16px;
display: flex;
justify-content: space-between;
align-items: center;
column-gap:10px;
button {
    border:none;
    background-color:transparent;
}
span {
    line-height: 1.25;
    color: var(--primary-focus);
}
@media only screen and (min-width: 768px) {
    column-gap:20px;
}
`,Q6=R("div")`
    min-width:180px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap:3px;
    @media only screen and (min-width: 768px) {
    column-gap:5px;
    min-width:190px;
}
`,$p=R("button")`
padding:0;
width: 14px;
height: 14px;
svg {
    width: 14px;
    height: 14px;
    ${({active:e})=>e?"stroke: var(--secondary-third);":"stroke:var(--primary-focus);"}
}
`,Y6=R("div")`
font-size: 24px;
font-weight: 500;
line-height: 1.2;
color: var(--primary-dark);
@media only screen and (min-width: 768px) {
font-size: 26px;  
}
`,K6=R("div")`
display: grid;
grid-template-columns: repeat(5, 1fr);
grid-template-rows: repeat(6, 52px);
gap: 16px;
justify-content: space-between;
@media only screen and (min-width: 768px) {
grid-template-columns: repeat(10, 1fr);
grid-template-rows: repeat(4, 56px);
gap: 20px;
}
`,G6=R("div")`
display: flex;
flex-direction:column;
row-gap:4px;
span {
    font-size: 12px;
    width: 100%;
    text-align: center;
    color: var(--secondary-third);
}
`,q6=R("button")`
display: flex;
align-items: center;
justify-content: center;
width: 34px;
height: 34px;
background-color:var(--primary-light);
border: 1px solid;
border-radius: 50%;
 ${({isConsumed:e})=>e?"border-color: transparent;":"border-color: var(--secondary-fourth);"}
`,X6="yyyy",Z6="MMMM",J6="d",e8=()=>{const[e,t]=k.useState(new Date),[n,r]=k.useState(null),i=U5(e),o=U6(e),a=0,s=a>=100;console.log("isConsumed :>> ",s);const l=W5({start:i,end:o}),u=Jo(e,Z6),f=Jo(e,X6),d=()=>{const x=V6(e,1);t(x),Dp(x,new Date)?r(null):r("prev")},g=()=>{const x=Bm(e,1);t(x),Dp(x,new Date)?r(null):r("next")};return c.jsxs("div",{children:[c.jsxs(H6,{children:[c.jsx(Y6,{children:"Month"}),c.jsxs(Q6,{children:[c.jsx($p,{onClick:d,active:n==="next",type:"button",children:c.jsx("svg",{children:c.jsx("use",{href:`${Le}#icon-pagination-arrow-prev`})})}),c.jsxs("span",{children:[u,", ",f]}),c.jsx($p,{onClick:g,active:n==="prev",type:"button",children:c.jsx("svg",{children:c.jsx("use",{href:`${Le}#icon-pagination-arrow-next`})})})]})]}),c.jsx(K6,{children:l.map((x,v)=>c.jsxs(G6,{children:[c.jsx(q6,{isConsumed:s,type:"button",children:Jo(x,J6)}),c.jsxs("span",{children:[a,"%"]})]},v))})]})},t8=R("div")`
margin-bottom: 24px;
flex:1 0 auto;
`,n8=R("div")`
font-size: 24px;
font-weight: 500;
line-height: 1.2;
margin-bottom: 16px;
color: var(--primary-dark);
@media only screen and (min-width: 768px) {
font-size: 26px;  
}
`,r8=R("ul")`
max-height:180px;
overflow: auto;
margin-bottom: 12px;
@media only screen and (min-width: 768px) {
max-height:170px;
}
`,i8=R("li")`
display: flex;
align-items: center;
justify-content: space-between;
column-gap:38px;
padding: 12px 4px;
border-bottom: 1px solid var(--secondary-fifth);
@media only screen and (min-width: 768px) {
padding: 12px 6px; 
}
`,o8=R("div")`
display: flex;
column-gap:20px;
button {
    border: none;
    background-color:transparent;
    padding:0;
    transition: all 150ms linear;
    border-bottom: 1px solid transparent;
}
svg {
    width: 16px;
    height: 16px;
}
`,a8=R("button")`
    :hover {
        border-bottom: 1px solid var(--secondary-third);
    }
    svg{
        stroke: var(--secondary-third);
        fill: transparent;
        width: 16px;
        height: 16px;
    }
`,s8=R("button")`
    :hover {
        border-bottom: 1px solid var(--secondary-second);
    }
    svg{
        stroke: var(--secondary-second);
        fill: transparent;
        width: 16px;
        height: 16px;
    }
`,l8=R("button")`
width: 100px;
padding: 0;
font-weight: 500;
border:none;
background-color:transparent;
color: var(--primary-focus);
display: flex;
column-gap:6px;
align-items: center;
transition: all 150ms linear;
:hover {
color: var(--secondary-fourth);}
span{
    font-size: 24px;
}
@media only screen and (min-width: 768px) {
width: 115px;
font-size: 18px;
svg {
    width: 12px;
    height: 12px;
}
}
`,u8=R("div")`
display: flex;
align-items: center;
column-gap:12px;
svg {
    width: 26px;
    height: 26px;
    fill: var(--primary-focus);
}
@media only screen and (min-width: 768px) {
svg {
    width: 36px;
    height: 36px;
}
}
`,c8=R("div")`
color: var(--primary-focus);
font-size: 18px;
line-height:140%;
`,d8=R("div")`
color: var(--primary-dark);
font-size: 12px;
line-height: 200%;
`,Qm=()=>c.jsxs(u8,{children:[c.jsx("svg",{children:c.jsx("use",{href:`${Le}#icon-glass`})}),c.jsx(c8,{children:"250 ml"}),c.jsx(d8,{children:"7:00 AM"})]}),oo=ys`
    padding:10px 30px;
    color: var(--primary-light);
    font-weight: 500;
    background-color: var(--primary-focus);
    border-radius:10px;
    box-shadow: 0px 4px 8px rgba(64, 123, 255, 0.3);
    transition: all 150ms linear;
    :hover{
    box-shadow: 0px 4px 14px rgba(64, 123, 255, 0.5);
    }
    :active{
    box-shadow: none;
    }
    @media only screen and (min-width: 768px) {
    font-size: 18px;
    }
    border:none;
`,ki=_("input")`
background-color:transparent;
color: var(--primary-focus);
border-radius:6px;
padding: 12px 10px;
width: 100%;
line-height: 125%;
border: 1px solid var(--secondary-fifth);
/* &[type="time"]::-webkit-calendar-picker-indicator {
    background: none;
} */
&::-webkit-outer-spin-button,
&::-webkit-inner-spin-button {
    -webkit-appearance: none;
}
`,fd=ys`
background-color: var(--primary-light);
position: relative;
border-radius:10px;
padding:24px 12px;
width:280px;
color: var(--primary-dark);
@media only screen and (min-width: 768px) {
    width: 704px;
    padding:32px 24px;
}
@media only screen and (min-width: 1440px) {
    width: 592px;
}
h3, p {
    padding: 0;
    margin: 0;
}
`,Ar=_("div")`
font-size: 18px;
font-weight: 500;
line-height: 110%;
margin-bottom: 16px;
`,pd=_("h3")`
max-width: 200px;
font-size: 26px;
font-weight: 500;
line-height: 120%;
color: var(--primary-dark);
@media only screen and (min-width: 768px) {
    max-width: 600px;
}
`,hd=_("button")`
border:none;
background-color: transparent;
position: absolute;
width: 0;
height: 0;
top:30px;
right:18px;
svg{
    width: 24px;
    height: 24px;
    stroke:var(--primary-focus);
}
@media only screen and (min-width: 768px) {
    top:42px;
    right:30px;
}
`,f8=R("div")`
${fd}
display: flex;
flex-direction:column;
row-gap:24px;
max-height: 648px;
@media only screen and (min-width: 768px) {
    max-height: 580px;
}
p {
    margin-bottom: 12px;
}
`,p8=R("div")`
background-color: var(--secondary-first);
border-radius:10px;
padding: 8px 24px;
max-width:254px;
`,h8=R("div")`
display: flex;
align-items: center;
column-gap:7px;
`,m8=R("span")`
background-color: var(--secondary-fifth);
color: var(--primary-focus);
font-size: 18px;
font-weight: 700;
line-height: 130%;
padding: 6px 10px;
border-radius:40px;
min-width:92px;
text-align: center;
`,Lp=R("button")`
background-color: transparent;
border: 1px solid var(--secondary-third);
width: 44px;
height: 44px;
border-radius:30px;
box-shadow: 0px 2px 4px rgba(64, 123, 255, 0.2);
display: flex;
align-items: center;
justify-content:center;
transition: all 150ms linear;
svg {
    width: 24px;
    height: 24px;
}
${({plus:e})=>e&&"svg {stroke: var(--primary-focus);}"}
${({minus:e})=>e&&"svg {fill: var(--primary-focus);}"}
:hover{
    box-shadow: 0px 2px 6px rgba(64, 123, 255, 0.5);
}
`,g8=R("div")`
     display: flex;
     flex-direction:column;
     gap:16px;
     justify-content: center;
     text-align: center;
@media only screen and (min-width: 768px) {
    display: flex;
    flex-direction:row;
    justify-content:flex-end;
    align-items: center;
    gap:24px;
}
`,y8=R("div")`
    color: var(--primary-focus);
    font-weight: 700;
    font-size: 18px;
    line-height: 133%; 
`,v8=R("button")`
    width: 100%;
    ${oo}
    @media only screen and (min-width: 768px) {
        width:160px;
    }
`,Ym=({isOpen:e,onClose:t,type:n})=>c.jsx(bs,{isOpen:e,onClose:t,children:c.jsxs(f8,{children:[c.jsx(pd,{children:n?"Edit the entered amount of water":"Add water"}),c.jsx(hd,{onClick:t,children:c.jsx("svg",{children:c.jsx("use",{href:`${Le}#icon-close`})})}),n&&c.jsx(p8,{children:c.jsx(Qm,{})}),c.jsxs("div",{children:[c.jsx(Ar,{children:n?"Correct entered data:":"Choose a value:"}),c.jsx("p",{children:"Amount of water:"}),c.jsxs(h8,{children:[c.jsx(Lp,{minus:!0,children:c.jsx("svg",{children:c.jsx("use",{href:`${Le}#icon-minus`})})}),c.jsx(m8,{children:"200 ml"}),c.jsx(Lp,{plus:!0,children:c.jsx("svg",{children:c.jsx("use",{href:`${Le}#icon-plus`})})})]})]}),c.jsxs("div",{children:[c.jsx("p",{children:"Recording time:"}),c.jsx(ki,{type:"time",name:"time"})]}),c.jsxs("div",{children:[c.jsx(Ar,{children:"Enter the value of the water used:"}),c.jsx(ki,{type:"number",name:"volume",min:"0"})]}),c.jsxs(g8,{children:[c.jsx(y8,{children:"200 ml"}),c.jsx(v8,{children:"Save"})]})]})}),x8=R("div")`
${fd}
display: flex;
flex-direction:column;
row-gap:24px;
`,w8=R("div")`
display: flex;
flex-direction:column;
gap:24px;
@media only screen and (min-width: 768px) {
    flex-direction:row;
    justify-content:flex-end;
}
`,S8=R("button")`
${oo}
color: var(--primary-focus);
background-color: var(--secondary-fifth);
box-shadow:none;
:hover {
  box-shadow:none;
  background-color: var(--secondary-third);  
}
`,k8=R("button")`
${oo}
background-color: var(--secondary-second);
box-shadow:none;
:hover {
  box-shadow:none;
  background-color: #ec1717;  
}
`;function b8({isOpen:e,onClose:t}){return c.jsx(bs,{isOpen:e,onClose:t,children:c.jsxs(x8,{children:[c.jsx(pd,{children:"Delete entry"}),c.jsx(hd,{onClick:t,children:c.jsx("svg",{children:c.jsx("use",{href:`${Le}#icon-close`})})}),c.jsx(Ar,{children:"Are you sure you want to delete the entry?"}),c.jsxs(w8,{children:[c.jsx(S8,{onClick:t,type:"button",children:"Cancel"}),c.jsx(k8,{type:"button",children:"Delete"})]})]})})}const E8=()=>{const[e,t]=k.useState(!1),[n,r]=k.useState(null),[i,o]=k.useState(!1),a=()=>{t(!0),r(null),o(!1)},s=()=>{t(!0),r("edit"),o(!1)},l=()=>{t(!0),o(!0)},u=()=>{t(!1)};return c.jsxs(t8,{children:[c.jsx(n8,{children:"Today"}),c.jsx(r8,{children:c.jsxs(i8,{children:[c.jsx(Qm,{}),c.jsxs(o8,{children:[c.jsx(a8,{type:"button",onClick:s,children:c.jsx("svg",{children:c.jsx("use",{href:`${Le}#icon-icon-pencil`})})}),c.jsx(s8,{type:"button",onClick:l,children:c.jsx("svg",{children:c.jsx("use",{href:`${Le}#icon-trash`})})})]})]})}),c.jsxs(l8,{onClick:a,type:"button",children:[c.jsx("span",{children:"+"}),"Add water"]}),i?c.jsx(b8,{isOpen:e,onClose:u}):c.jsx(Ym,{isOpen:e,onClose:u,type:n})]})},C8=R("div")`
background-color:var(--primary-light);
padding: 8px 20px;
border-radius: 10px;
box-shadow: 0px 4px 8px rgba(158, 187, 255,0.2);
width: 164px;
position: relative;
z-index:1;
`,P8=R("div")`
display: flex;
align-items: center;
column-gap:12px;
span {
    color:var(--primary-focus);
    font-weight: 700;
    font-size: 24px;
}
button {
    background-color: transparent;
    border:none;
    color:var(--primary-focus);
    transition: all 150ms linear;
    :hover {
    color: var(--secondary-fourth);}
    }
`,j8=R("div")`
${fd}
display: flex;
flex-direction:column;
row-gap:24px;
/* max-height: 648px; */
/* @media only screen and (min-width: 768px) {
    max-height: 580px;
} */
`,O8=R("div")`
    display: flex;
    flex-direction:column;
    row-gap:16px;
    margin-bottom: 12px;
    span {
        color: var(--primary-focus);
        font-size: 18px;
    }
    @media only screen and (min-width: 768px) {
        flex-direction:row;
        column-gap:24px;
    }
`,N8=R("div")`
    color: #8F8F8F;
    font-size: 12px;
    line-height: 130%;
    padding:10px;
    border:1px solid var(--secondary-fifth);
    border-radius:10px;
    span {
        color: var(--primary-focus);
    }
`,T8=R("form")`
    display: flex;
    flex-direction:column;
    row-gap:24px;
`,_8=R("div")`
    display: flex;
    column-gap:24px;
    margin-bottom: 16px;
`,Ip=R("div")`
    position: relative;
	display: flex;
	flex-direction: column;
	row-gap: 8px;
    input{
    position: absolute;
	top: 0;
	left: 0;
	opacity: 0;
    }
    label{
	line-height: 125%;
	position: relative;
	padding-left: 22px;
	cursor: pointer;
    }
    label::before {
	content: "";
	width: 14px;
	height: 14px;
	border-radius: 50%;
	border: 2px solid #0156ff;
	position: absolute;
	top: 50%;
	left: 0;
    transform:translate(0%,-51%);
}
label::after {
	content: "";
	width: 6px;
	height: 6px;
	border-radius: 50%;
	background-color: #0156ff;
	position: absolute;
	top: 50%;
	left: 0;
    transform:translate(65%,-52%);
	opacity: 0;
	transition-duration: 0.3s;
}
    input:checked + label::after {
	opacity: 1;
}
`,Fp=R("div")`
    margin-bottom: 16px;
    p {
    margin-bottom: 8px;
    }
`,R8=R("div")`
    display: flex;
    align-items: center;
    p{
        max-width:190px;
    }
    span {
        color: var(--primary-focus);
        font-weight:700;
        font-size: 18px;
        width: 57px;
    }
    @media only screen and (min-width: 768px) {
        column-gap:6px;
        p{
        max-width:100%;
    }
    }
`,M8=R("button")`
    width: 100%;
    ${oo}
    @media only screen and (min-width: 768px) {
        width:160px;
        margin-left:auto;
    }
`,Km=e=>e.auth.user,A8=({isOpen:e,onClose:t})=>{const{gender:n,dailyNorma:r}=Wr(Km),[i,o]=k.useState(n),[a,s]=k.useState(""),[l,u]=k.useState(""),[f,d]=k.useState("0"),[g,x]=k.useState(""),v=k.useCallback(()=>{if(!a||!l)return;const y=i==="female"?.03:.04,S=i==="female"?.4:.6,h=a*y+l*S;d(h)},[i,a,l]);return k.useEffect(()=>{v()},[v]),c.jsx(bs,{isOpen:e,onClose:t,children:c.jsxs(j8,{children:[c.jsx(pd,{children:"My daily norma"}),c.jsx(hd,{onClick:t,children:c.jsx("svg",{children:c.jsx("use",{href:`${Le}#icon-close`})})}),c.jsxs("div",{children:[c.jsxs(O8,{children:[c.jsxs("p",{children:["For girl: ",c.jsx("span",{children:"V=(M*0,03) + (T*0,4)"})]}),c.jsxs("p",{children:["For man: ",c.jsx("span",{children:"V=(M*0,04) + (T*0,6)"})]})]}),c.jsxs(N8,{children:[c.jsx("span",{children:"*"})," V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)"]})]}),c.jsxs(T8,{children:[c.jsxs("div",{children:[c.jsx(Ar,{children:"Calculate your rate:"}),c.jsxs(_8,{children:[c.jsxs(Ip,{children:[c.jsx("input",{id:"gender-f",type:"radio",name:"gender",value:"female",checked:i==="female",onChange:()=>o("female")}),c.jsx("label",{htmlFor:"gender-f",children:"For girl"})]}),c.jsxs(Ip,{children:[c.jsx("input",{id:"gender-m",type:"radio",name:"gender",value:"male",checked:i==="male",onChange:()=>o("male")}),c.jsx("label",{htmlFor:"gender-m",children:"For man"})]})]}),c.jsxs(Fp,{children:[c.jsx("p",{children:"Your weight in kilograms:"}),c.jsx(ki,{type:"number",name:"weight",min:"0",placeholder:"0",value:a,onChange:y=>s(y.target.value)})]}),c.jsxs(Fp,{children:[c.jsx("p",{children:"The time of active participation in sports or other activities with a high physical. load in hours:"}),c.jsx(ki,{type:"number",name:"activity",min:"0",placeholder:"0",value:l,onChange:y=>u(y.target.value)})]}),c.jsxs(R8,{children:[c.jsx("p",{children:"The required amount of water in liters per day:"}),c.jsxs("span",{children:[parseFloat(f).toFixed(1)," L"]})]})]}),c.jsxs("div",{children:[c.jsx(Ar,{children:"Write down how much water you will drink:"}),c.jsx(ki,{type:"number",name:"volume",min:"0",placeholder:"0",value:g,onChange:y=>x(y.target.value)})]}),c.jsx(M8,{type:"submit",children:"Save"})]})]})})},D8=()=>{const{dailyNorma:e}=Wr(Km),[t,n]=k.useState(!1),r=()=>{n(!t)};return c.jsxs(C8,{children:[c.jsx(Ar,{children:"My daily norma"}),c.jsxs(P8,{children:[c.jsxs("span",{children:[e," L"]}),c.jsx("button",{onClick:r,type:"button",children:"Edit"})]}),c.jsx(A8,{isOpen:t,onClose:r})]})},$8=R("div")`
display: flex;
flex-direction:column;
row-gap:35px;
@media only screen and (min-width: 768px) {
flex-direction:row;
column-gap:23px;
}
`,L8=R("button")`
    display: flex;
    justify-content: center; 
    align-items: center;
    gap:12px;
    ${oo}
    svg{
        width: 20px;
        height: 20px;
        stroke:var(--primary-light);
        fill: transparent;
    }
    @media only screen and (min-width: 768px) {
        align-self:flex-end;
    }
`,I8=R("div")`
 flex: 1 0 auto;
 p{
    font-size: 18px;
    line-height: 130%;
    color: var(--primary-focus);
    margin-bottom: 8px;
    @media only screen and (min-width: 768px) {
    margin-bottom: 16px;
}
 }
`,F8=R("input")`
&[type="range"] {
  -webkit-appearance: none;
  appearance: none;
  cursor: pointer;
  width: 100%;
   background: var(--secondary-third);
   ${({persent:e})=>`background-image: linear-gradient(
      to right, var(--secondary-third) 0%, var(--secondary-third) ${e}%, var(--secondary-fifth) ${e}%, var(--secondary-fifth) 100%);`}
    background-repeat: no-repeat;
    border-radius:10px;
}
&[type='range']:focus {
    outline: none;
  }
  &[type='range']::-webkit-slider-runnable-track {
    width: 100%;
    height: 8px;
    animation: 0.2s;
    border-radius: 10px;
    -webkit-appearance: none;
    box-shadow: none;
    border: none;
    background: transparent;
  }
  &[type='range']::-webkit-slider-thumb {
    height: 14px;
    width: 14px;
    border-radius: 50%;
    background: var(--primary-light);
    border: solid 1px var(--primary-focus);
    -webkit-appearance: none;
    margin-top: -3px;
  }
`,z8=R("div")`
margin-top: 13px;
 width: 100%;
 color: var(--primary-focus);
 position: relative;
`,B8=R("span")`
 font-size: 12px;
 line-height: 133%;
 position: absolute;
 top:0;
 left:0;
 ::before{
        content:"";
        position: absolute;
        width: 1px;
        height: 8px;
        background: var(--secondary-fifth);
        top:-80%;
        left: 10%;
    }
`,W8=R("span")`
 font-size: 12px;
 line-height: 133%;
 position: absolute;
 top:0;
 right:0;
 ::before{
        content:"";
        position: absolute;
        width: 1px;
        height: 8px;
        background: var(--secondary-fifth);
        top:-80%;
        right: 5%;
    }
`,U8=R("span")`
 font-size: 16px;
 font-weight: 500;
 position: absolute;
 top:0;
 left:50%;
 ::before{
        content:"";
        position: absolute;
        width: 1px;
        height: 8px;
        background: var(--secondary-fifth);
        top:-60%;
        left: 35%;
    }
`,V8=()=>{const[e,t]=k.useState(!1),[n,r]=k.useState(50),i=()=>{t(!e)},o=a=>{r(a.target.value)};return c.jsxs("div",{children:[c.jsxs($8,{children:[c.jsxs(I8,{children:[c.jsx("p",{children:"Today"}),c.jsxs("div",{children:[c.jsx(F8,{onChange:o,name:"volume",type:"range",min:"0",max:"100",value:n,persent:n}),c.jsxs(z8,{children:[c.jsx(B8,{children:"0%"}),c.jsx(U8,{children:"50%"}),c.jsx(W8,{children:"100%"})]})]})]}),c.jsxs(L8,{onClick:i,children:[c.jsx("svg",{children:c.jsx("use",{href:`${Le}#icon-circle-plus`})}),"Add Water"]})]}),c.jsx(Ym,{isOpen:e,onClose:i})]})},H8=_("div")`
    position: relative;
`,Q8=_("img")`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top left;
    z-index:-1;
`,Y8=_("div")`
  display: flex;
  flex-direction:column;
  gap:40px;
   padding: 24px 0 40px 0;
   @media only screen and (min-width: 768px) {
    padding: 40px 0 40px 0;
   }
   @media only screen and (min-width: 1440px) {
    flex-direction:row;
    gap:32px;
    padding: 20px 0 40px 0;
   }
`,K8=_("div")`
  flex: 1 0 auto;
  display: flex;
  flex-direction:column;
  row-gap:16px;
  @media only screen and (min-width: 1440px) {
    row-gap:24px;
   }
`,G8=_("div")`
    flex-grow: 0;
    flex-shrink: 1;
    flex-basis: 290px;
    position: relative;
    img{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.8;
    object-fit: contain;
    object-position: bottom;
    }
    @media only screen and (min-width: 768px) {
    min-height:386px;
    object-position: center;
    }
    @media only screen and (min-width: 1440px) {
    flex: 1 0 auto;
    img{
    object-fit: cover;
    }
   }
`;_("div")`

`;const q8=_("div")`
display: flex;
flex-direction:column;
background-color:var(--secondary-first);
max-width:280px;
max-height:830px;
padding: 24px 8px;
border-radius: 10px;
box-shadow: 0px 4px 14px rgba(64, 123, 255, 0.3);
@media only screen and (min-width: 768px) {
max-width:704px;
height:680px;
padding: 32px 24px;
}
@media only screen and (min-width: 1440px) {
max-width:592px;
height:680px;
}
`,X8="/water-tracker/assets/bg-56863a63.png",Z8="/water-tracker/assets/bottle-b9ff448c.png",J8=()=>c.jsx(c.Fragment,{children:c.jsxs(H8,{children:[c.jsx(D5,{children:c.jsxs(Y8,{children:[c.jsxs(K8,{children:[c.jsxs(G8,{children:[c.jsx(D8,{}),c.jsx("img",{src:Z8,alt:"bg"})]}),c.jsx(V8,{})]}),c.jsxs(q8,{children:[c.jsx(E8,{}),c.jsx(e8,{})]})]})}),c.jsx(Q8,{src:X8,alt:"bg"})]})}),e9=({Component:e})=>Wr(n=>n.authTest.auth)?c.jsx(e,{}):c.jsx(da,{to:"/singin"}),t9=({restricted:e=!1,redirectTo:t="/"})=>Wr(i=>i.authTest.auth)&&e?c.jsx(da,{to:t}):c.jsx(k0,{});function n9(){return c.jsx(o5,{children:c.jsx(My,{children:c.jsxs(Tt,{path:"/",element:c.jsx(c4,{}),children:[c.jsxs(Tt,{element:c.jsx(t9,{restricted:!0,redirectTo:"/home"}),children:[c.jsx(Tt,{path:"/welcome",element:c.jsx(b5,{})}),c.jsx(Tt,{path:"/signup",element:c.jsx(O5,{})}),c.jsx(Tt,{path:"/signin",element:c.jsx(M5,{})})]}),c.jsx(Tt,{path:"/home",element:c.jsx(e9,{Component:J8})}),c.jsx(Tt,{path:"/",element:c.jsx(da,{to:"/welcome"})}),c.jsx(Tt,{path:"*",element:c.jsx(da,{to:"/welcome"})})]})})})}var md="persist:",gd="persist/FLUSH",Os="persist/REHYDRATE",yd="persist/PAUSE",vd="persist/PERSIST",xd="persist/PURGE",wd="persist/REGISTER",r9=-1;function ea(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ea=function(n){return typeof n}:ea=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},ea(e)}function zp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function i9(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?zp(n,!0).forEach(function(r){o9(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):zp(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function o9(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a9(e,t,n,r){r.debug;var i=i9({},n);return e&&ea(e)==="object"&&Object.keys(e).forEach(function(o){o!=="_persist"&&t[o]===n[o]&&(i[o]=e[o])}),i}function s9(e){var t=e.blacklist||null,n=e.whitelist||null,r=e.transforms||[],i=e.throttle||0,o="".concat(e.keyPrefix!==void 0?e.keyPrefix:md).concat(e.key),a=e.storage,s;e.serialize===!1?s=function(b){return b}:typeof e.serialize=="function"?s=e.serialize:s=l9;var l=e.writeFailHandler||null,u={},f={},d=[],g=null,x=null,v=function(b){Object.keys(b).forEach(function(E){h(E)&&u[E]!==b[E]&&d.indexOf(E)===-1&&d.push(E)}),Object.keys(u).forEach(function(E){b[E]===void 0&&h(E)&&d.indexOf(E)===-1&&u[E]!==void 0&&d.push(E)}),g===null&&(g=setInterval(y,i)),u=b};function y(){if(d.length===0){g&&clearInterval(g),g=null;return}var w=d.shift(),b=r.reduce(function(E,C){return C.in(E,w,u)},u[w]);if(b!==void 0)try{f[w]=s(b)}catch(E){console.error("redux-persist/createPersistoid: error serializing state",E)}else delete f[w];d.length===0&&S()}function S(){Object.keys(f).forEach(function(w){u[w]===void 0&&delete f[w]}),x=a.setItem(o,s(f)).catch(p)}function h(w){return!(n&&n.indexOf(w)===-1&&w!=="_persist"||t&&t.indexOf(w)!==-1)}function p(w){l&&l(w)}var m=function(){for(;d.length!==0;)y();return x||Promise.resolve()};return{update:v,flush:m}}function l9(e){return JSON.stringify(e)}function u9(e){var t=e.transforms||[],n="".concat(e.keyPrefix!==void 0?e.keyPrefix:md).concat(e.key),r=e.storage;e.debug;var i;return e.deserialize===!1?i=function(a){return a}:typeof e.deserialize=="function"?i=e.deserialize:i=c9,r.getItem(n).then(function(o){if(o)try{var a={},s=i(o);return Object.keys(s).forEach(function(l){a[l]=t.reduceRight(function(u,f){return f.out(u,l,s)},i(s[l]))}),a}catch(l){throw l}else return})}function c9(e){return JSON.parse(e)}function d9(e){var t=e.storage,n="".concat(e.keyPrefix!==void 0?e.keyPrefix:md).concat(e.key);return t.removeItem(n,f9)}function f9(e){}function Bp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Nt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Bp(n,!0).forEach(function(r){p9(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Bp(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function p9(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h9(e,t){if(e==null)return{};var n=m9(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function m9(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}var g9=5e3;function bl(e,t){var n=e.version!==void 0?e.version:r9;e.debug;var r=e.stateReconciler===void 0?a9:e.stateReconciler,i=e.getStoredState||u9,o=e.timeout!==void 0?e.timeout:g9,a=null,s=!1,l=!0,u=function(d){return d._persist.rehydrated&&a&&!l&&a.update(d),d};return function(f,d){var g=f||{},x=g._persist,v=h9(g,["_persist"]),y=v;if(d.type===vd){var S=!1,h=function(O,A){S||(d.rehydrate(e.key,O,A),S=!0)};if(o&&setTimeout(function(){!S&&h(void 0,new Error('redux-persist: persist timed out for persist key "'.concat(e.key,'"')))},o),l=!1,a||(a=s9(e)),x)return Nt({},t(y,d),{_persist:x});if(typeof d.rehydrate!="function"||typeof d.register!="function")throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");return d.register(e.key),i(e).then(function(C){var O=e.migrate||function(A,D){return Promise.resolve(A)};O(C,n).then(function(A){h(A)},function(A){h(void 0,A)})},function(C){h(void 0,C)}),Nt({},t(y,d),{_persist:{version:n,rehydrated:!1}})}else{if(d.type===xd)return s=!0,d.result(d9(e)),Nt({},t(y,d),{_persist:x});if(d.type===gd)return d.result(a&&a.flush()),Nt({},t(y,d),{_persist:x});if(d.type===yd)l=!0;else if(d.type===Os){if(s)return Nt({},y,{_persist:Nt({},x,{rehydrated:!0})});if(d.key===e.key){var p=t(y,d),m=d.payload,w=r!==!1&&m!==void 0?r(m,f,p,e):p,b=Nt({},w,{_persist:Nt({},x,{rehydrated:!0})});return u(b)}}}if(!x)return t(f,d);var E=t(y,d);return E===y?f:u(Nt({},E,{_persist:x}))}}function Wp(e){return x9(e)||v9(e)||y9()}function y9(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function v9(e){if(Symbol.iterator in Object(e)||Object.prototype.toString.call(e)==="[object Arguments]")return Array.from(e)}function x9(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function Up(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Bu(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Up(n,!0).forEach(function(r){w9(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Up(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function w9(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Gm={registry:[],bootstrapped:!1},S9=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Gm,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case wd:return Bu({},t,{registry:[].concat(Wp(t.registry),[n.key])});case Os:var r=t.registry.indexOf(n.key),i=Wp(t.registry);return i.splice(r,1),Bu({},t,{registry:i,bootstrapped:i.length===0});default:return t}};function k9(e,t,n){var r=n||!1,i=id(S9,Gm,t&&t.enhancer?t.enhancer:void 0),o=function(u){i.dispatch({type:wd,key:u})},a=function(u,f,d){var g={type:Os,payload:f,err:d,key:u};e.dispatch(g),i.dispatch(g),r&&s.getState().bootstrapped&&(r(),r=!1)},s=Bu({},i,{purge:function(){var u=[];return e.dispatch({type:xd,result:function(d){u.push(d)}}),Promise.all(u)},flush:function(){var u=[];return e.dispatch({type:gd,result:function(d){u.push(d)}}),Promise.all(u)},pause:function(){e.dispatch({type:yd})},persist:function(){e.dispatch({type:vd,register:o,rehydrate:a})}});return t&&t.manualPersist||s.persist(),s}var Sd={},kd={};kd.__esModule=!0;kd.default=C9;function ta(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ta=function(n){return typeof n}:ta=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},ta(e)}function El(){}var b9={getItem:El,setItem:El,removeItem:El};function E9(e){if((typeof self>"u"?"undefined":ta(self))!=="object"||!(e in self))return!1;try{var t=self[e],n="redux-persist ".concat(e," test");t.setItem(n,"test"),t.getItem(n),t.removeItem(n)}catch{return!1}return!0}function C9(e){var t="".concat(e,"Storage");return E9(t)?self[t]:b9}Sd.__esModule=!0;Sd.default=O9;var P9=j9(kd);function j9(e){return e&&e.__esModule?e:{default:e}}function O9(e){var t=(0,P9.default)(e);return{getItem:function(r){return new Promise(function(i,o){i(t.getItem(r))})},setItem:function(r,i){return new Promise(function(o,a){o(t.setItem(r,i))})},removeItem:function(r){return new Promise(function(i,o){i(t.removeItem(r))})}}}var bd=void 0,N9=T9(Sd);function T9(e){return e&&e.__esModule?e:{default:e}}var _9=(0,N9.default)("local");bd=_9;const R9={isLoading:!1,error:""},M9=ks({name:"root",initialState:R9,extraReducers:e=>{e.addMatcher(t=>t.type.endsWith("/pending"),t=>{t.isLoading=!0,t.error=null}).addMatcher(t=>t.type.endsWith("/rejected"),(t,{payload:n})=>{t.isLoading=!1,t.error=n}).addMatcher(t=>t.type.endsWith("/fulfilled"),t=>{t.isLoading=!1})}}),A9=M9.reducer;function qm(e,t){return function(){return e.apply(t,arguments)}}const{toString:D9}=Object.prototype,{getPrototypeOf:Ed}=Object,Ns=(e=>t=>{const n=D9.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),jt=e=>(e=e.toLowerCase(),t=>Ns(t)===e),Ts=e=>t=>typeof t===e,{isArray:Hr}=Array,qi=Ts("undefined");function $9(e){return e!==null&&!qi(e)&&e.constructor!==null&&!qi(e.constructor)&&tt(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Xm=jt("ArrayBuffer");function L9(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Xm(e.buffer),t}const I9=Ts("string"),tt=Ts("function"),Zm=Ts("number"),_s=e=>e!==null&&typeof e=="object",F9=e=>e===!0||e===!1,na=e=>{if(Ns(e)!=="object")return!1;const t=Ed(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},z9=jt("Date"),B9=jt("File"),W9=jt("Blob"),U9=jt("FileList"),V9=e=>_s(e)&&tt(e.pipe),H9=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||tt(e.append)&&((t=Ns(e))==="formdata"||t==="object"&&tt(e.toString)&&e.toString()==="[object FormData]"))},Q9=jt("URLSearchParams"),Y9=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function ao(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),Hr(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),a=o.length;let s;for(r=0;r<a;r++)s=o[r],t.call(null,e[s],s,e)}}function Jm(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const eg=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),tg=e=>!qi(e)&&e!==eg;function Wu(){const{caseless:e}=tg(this)&&this||{},t={},n=(r,i)=>{const o=e&&Jm(t,i)||i;na(t[o])&&na(r)?t[o]=Wu(t[o],r):na(r)?t[o]=Wu({},r):Hr(r)?t[o]=r.slice():t[o]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&ao(arguments[r],n);return t}const K9=(e,t,n,{allOwnKeys:r}={})=>(ao(t,(i,o)=>{n&&tt(i)?e[o]=qm(i,n):e[o]=i},{allOwnKeys:r}),e),G9=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),q9=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},X9=(e,t,n,r)=>{let i,o,a;const s={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),o=i.length;o-- >0;)a=i[o],(!r||r(a,e,t))&&!s[a]&&(t[a]=e[a],s[a]=!0);e=n!==!1&&Ed(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Z9=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},J9=e=>{if(!e)return null;if(Hr(e))return e;let t=e.length;if(!Zm(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},e7=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Ed(Uint8Array)),t7=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=r.next())&&!i.done;){const o=i.value;t.call(e,o[0],o[1])}},n7=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},r7=jt("HTMLFormElement"),i7=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),Vp=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),o7=jt("RegExp"),ng=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};ao(n,(i,o)=>{let a;(a=t(i,o,e))!==!1&&(r[o]=a||i)}),Object.defineProperties(e,r)},a7=e=>{ng(e,(t,n)=>{if(tt(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(tt(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},s7=(e,t)=>{const n={},r=i=>{i.forEach(o=>{n[o]=!0})};return Hr(e)?r(e):r(String(e).split(t)),n},l7=()=>{},u7=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Cl="abcdefghijklmnopqrstuvwxyz",Hp="0123456789",rg={DIGIT:Hp,ALPHA:Cl,ALPHA_DIGIT:Cl+Cl.toUpperCase()+Hp},c7=(e=16,t=rg.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function d7(e){return!!(e&&tt(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const f7=e=>{const t=new Array(10),n=(r,i)=>{if(_s(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[i]=r;const o=Hr(r)?[]:{};return ao(r,(a,s)=>{const l=n(a,i+1);!qi(l)&&(o[s]=l)}),t[i]=void 0,o}}return r};return n(e,0)},p7=jt("AsyncFunction"),h7=e=>e&&(_s(e)||tt(e))&&tt(e.then)&&tt(e.catch),P={isArray:Hr,isArrayBuffer:Xm,isBuffer:$9,isFormData:H9,isArrayBufferView:L9,isString:I9,isNumber:Zm,isBoolean:F9,isObject:_s,isPlainObject:na,isUndefined:qi,isDate:z9,isFile:B9,isBlob:W9,isRegExp:o7,isFunction:tt,isStream:V9,isURLSearchParams:Q9,isTypedArray:e7,isFileList:U9,forEach:ao,merge:Wu,extend:K9,trim:Y9,stripBOM:G9,inherits:q9,toFlatObject:X9,kindOf:Ns,kindOfTest:jt,endsWith:Z9,toArray:J9,forEachEntry:t7,matchAll:n7,isHTMLForm:r7,hasOwnProperty:Vp,hasOwnProp:Vp,reduceDescriptors:ng,freezeMethods:a7,toObjectSet:s7,toCamelCase:i7,noop:l7,toFiniteNumber:u7,findKey:Jm,global:eg,isContextDefined:tg,ALPHABET:rg,generateString:c7,isSpecCompliantForm:d7,toJSONObject:f7,isAsyncFn:p7,isThenable:h7};function F(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}P.inherits(F,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:P.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const ig=F.prototype,og={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{og[e]={value:e}});Object.defineProperties(F,og);Object.defineProperty(ig,"isAxiosError",{value:!0});F.from=(e,t,n,r,i,o)=>{const a=Object.create(ig);return P.toFlatObject(e,a,function(l){return l!==Error.prototype},s=>s!=="isAxiosError"),F.call(a,e.message,t,n,r,i),a.cause=e,a.name=e.name,o&&Object.assign(a,o),a};const m7=null;function Uu(e){return P.isPlainObject(e)||P.isArray(e)}function ag(e){return P.endsWith(e,"[]")?e.slice(0,-2):e}function Qp(e,t,n){return e?e.concat(t).map(function(i,o){return i=ag(i),!n&&o?"["+i+"]":i}).join(n?".":""):t}function g7(e){return P.isArray(e)&&!e.some(Uu)}const y7=P.toFlatObject(P,{},null,function(t){return/^is[A-Z]/.test(t)});function Rs(e,t,n){if(!P.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=P.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,S){return!P.isUndefined(S[y])});const r=n.metaTokens,i=n.visitor||f,o=n.dots,a=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&P.isSpecCompliantForm(t);if(!P.isFunction(i))throw new TypeError("visitor must be a function");function u(v){if(v===null)return"";if(P.isDate(v))return v.toISOString();if(!l&&P.isBlob(v))throw new F("Blob is not supported. Use a Buffer instead.");return P.isArrayBuffer(v)||P.isTypedArray(v)?l&&typeof Blob=="function"?new Blob([v]):Buffer.from(v):v}function f(v,y,S){let h=v;if(v&&!S&&typeof v=="object"){if(P.endsWith(y,"{}"))y=r?y:y.slice(0,-2),v=JSON.stringify(v);else if(P.isArray(v)&&g7(v)||(P.isFileList(v)||P.endsWith(y,"[]"))&&(h=P.toArray(v)))return y=ag(y),h.forEach(function(m,w){!(P.isUndefined(m)||m===null)&&t.append(a===!0?Qp([y],w,o):a===null?y:y+"[]",u(m))}),!1}return Uu(v)?!0:(t.append(Qp(S,y,o),u(v)),!1)}const d=[],g=Object.assign(y7,{defaultVisitor:f,convertValue:u,isVisitable:Uu});function x(v,y){if(!P.isUndefined(v)){if(d.indexOf(v)!==-1)throw Error("Circular reference detected in "+y.join("."));d.push(v),P.forEach(v,function(h,p){(!(P.isUndefined(h)||h===null)&&i.call(t,h,P.isString(p)?p.trim():p,y,g))===!0&&x(h,y?y.concat(p):[p])}),d.pop()}}if(!P.isObject(e))throw new TypeError("data must be an object");return x(e),t}function Yp(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Cd(e,t){this._pairs=[],e&&Rs(e,this,t)}const sg=Cd.prototype;sg.append=function(t,n){this._pairs.push([t,n])};sg.toString=function(t){const n=t?function(r){return t.call(this,r,Yp)}:Yp;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function v7(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function lg(e,t,n){if(!t)return e;const r=n&&n.encode||v7,i=n&&n.serialize;let o;if(i?o=i(t,n):o=P.isURLSearchParams(t)?t.toString():new Cd(t,n).toString(r),o){const a=e.indexOf("#");a!==-1&&(e=e.slice(0,a)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class x7{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){P.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Kp=x7,ug={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},w7=typeof URLSearchParams<"u"?URLSearchParams:Cd,S7=typeof FormData<"u"?FormData:null,k7=typeof Blob<"u"?Blob:null,b7={isBrowser:!0,classes:{URLSearchParams:w7,FormData:S7,Blob:k7},protocols:["http","https","file","blob","url","data"]},cg=typeof window<"u"&&typeof document<"u",E7=(e=>cg&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),C7=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),P7=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:cg,hasStandardBrowserEnv:E7,hasStandardBrowserWebWorkerEnv:C7},Symbol.toStringTag,{value:"Module"})),bt={...P7,...b7};function j7(e,t){return Rs(e,new bt.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,o){return bt.isNode&&P.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function O7(e){return P.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function N7(e){const t={},n=Object.keys(e);let r;const i=n.length;let o;for(r=0;r<i;r++)o=n[r],t[o]=e[o];return t}function dg(e){function t(n,r,i,o){let a=n[o++];if(a==="__proto__")return!0;const s=Number.isFinite(+a),l=o>=n.length;return a=!a&&P.isArray(i)?i.length:a,l?(P.hasOwnProp(i,a)?i[a]=[i[a],r]:i[a]=r,!s):((!i[a]||!P.isObject(i[a]))&&(i[a]=[]),t(n,r,i[a],o)&&P.isArray(i[a])&&(i[a]=N7(i[a])),!s)}if(P.isFormData(e)&&P.isFunction(e.entries)){const n={};return P.forEachEntry(e,(r,i)=>{t(O7(r),i,n,0)}),n}return null}function T7(e,t,n){if(P.isString(e))try{return(t||JSON.parse)(e),P.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const Pd={transitional:ug,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,o=P.isObject(t);if(o&&P.isHTMLForm(t)&&(t=new FormData(t)),P.isFormData(t))return i?JSON.stringify(dg(t)):t;if(P.isArrayBuffer(t)||P.isBuffer(t)||P.isStream(t)||P.isFile(t)||P.isBlob(t))return t;if(P.isArrayBufferView(t))return t.buffer;if(P.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let s;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return j7(t,this.formSerializer).toString();if((s=P.isFileList(t))||r.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return Rs(s?{"files[]":t}:t,l&&new l,this.formSerializer)}}return o||i?(n.setContentType("application/json",!1),T7(t)):t}],transformResponse:[function(t){const n=this.transitional||Pd.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(t&&P.isString(t)&&(r&&!this.responseType||i)){const a=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(s){if(a)throw s.name==="SyntaxError"?F.from(s,F.ERR_BAD_RESPONSE,this,null,this.response):s}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:bt.classes.FormData,Blob:bt.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};P.forEach(["delete","get","head","post","put","patch"],e=>{Pd.headers[e]={}});const jd=Pd,_7=P.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),R7=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(a){i=a.indexOf(":"),n=a.substring(0,i).trim().toLowerCase(),r=a.substring(i+1).trim(),!(!n||t[n]&&_7[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Gp=Symbol("internals");function oi(e){return e&&String(e).trim().toLowerCase()}function ra(e){return e===!1||e==null?e:P.isArray(e)?e.map(ra):String(e)}function M7(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const A7=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Pl(e,t,n,r,i){if(P.isFunction(r))return r.call(this,t,n);if(i&&(t=n),!!P.isString(t)){if(P.isString(r))return t.indexOf(r)!==-1;if(P.isRegExp(r))return r.test(t)}}function D7(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function $7(e,t){const n=P.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,o,a){return this[r].call(this,t,i,o,a)},configurable:!0})})}class Ms{constructor(t){t&&this.set(t)}set(t,n,r){const i=this;function o(s,l,u){const f=oi(l);if(!f)throw new Error("header name must be a non-empty string");const d=P.findKey(i,f);(!d||i[d]===void 0||u===!0||u===void 0&&i[d]!==!1)&&(i[d||l]=ra(s))}const a=(s,l)=>P.forEach(s,(u,f)=>o(u,f,l));return P.isPlainObject(t)||t instanceof this.constructor?a(t,n):P.isString(t)&&(t=t.trim())&&!A7(t)?a(R7(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=oi(t),t){const r=P.findKey(this,t);if(r){const i=this[r];if(!n)return i;if(n===!0)return M7(i);if(P.isFunction(n))return n.call(this,i,r);if(P.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=oi(t),t){const r=P.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Pl(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let i=!1;function o(a){if(a=oi(a),a){const s=P.findKey(r,a);s&&(!n||Pl(r,r[s],s,n))&&(delete r[s],i=!0)}}return P.isArray(t)?t.forEach(o):o(t),i}clear(t){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const o=n[r];(!t||Pl(this,this[o],o,t,!0))&&(delete this[o],i=!0)}return i}normalize(t){const n=this,r={};return P.forEach(this,(i,o)=>{const a=P.findKey(r,o);if(a){n[a]=ra(i),delete n[o];return}const s=t?D7(o):String(o).trim();s!==o&&delete n[o],n[s]=ra(i),r[s]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return P.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=t&&P.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(i=>r.set(i)),r}static accessor(t){const r=(this[Gp]=this[Gp]={accessors:{}}).accessors,i=this.prototype;function o(a){const s=oi(a);r[s]||($7(i,a),r[s]=!0)}return P.isArray(t)?t.forEach(o):o(t),this}}Ms.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);P.reduceDescriptors(Ms.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});P.freezeMethods(Ms);const It=Ms;function jl(e,t){const n=this||jd,r=t||n,i=It.from(r.headers);let o=r.data;return P.forEach(e,function(s){o=s.call(n,o,i.normalize(),t?t.status:void 0)}),i.normalize(),o}function fg(e){return!!(e&&e.__CANCEL__)}function so(e,t,n){F.call(this,e??"canceled",F.ERR_CANCELED,t,n),this.name="CanceledError"}P.inherits(so,F,{__CANCEL__:!0});function L7(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new F("Request failed with status code "+n.status,[F.ERR_BAD_REQUEST,F.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const I7=bt.hasStandardBrowserEnv?{write(e,t,n,r,i,o){const a=[e+"="+encodeURIComponent(t)];P.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),P.isString(r)&&a.push("path="+r),P.isString(i)&&a.push("domain="+i),o===!0&&a.push("secure"),document.cookie=a.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function F7(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function z7(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function pg(e,t){return e&&!F7(t)?z7(e,t):t}const B7=bt.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(o){let a=o;return t&&(n.setAttribute("href",a),a=n.href),n.setAttribute("href",a),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(a){const s=P.isString(a)?i(a):a;return s.protocol===r.protocol&&s.host===r.host}}():function(){return function(){return!0}}();function W7(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function U7(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,o=0,a;return t=t!==void 0?t:1e3,function(l){const u=Date.now(),f=r[o];a||(a=u),n[i]=l,r[i]=u;let d=o,g=0;for(;d!==i;)g+=n[d++],d=d%e;if(i=(i+1)%e,i===o&&(o=(o+1)%e),u-a<t)return;const x=f&&u-f;return x?Math.round(g*1e3/x):void 0}}function qp(e,t){let n=0;const r=U7(50,250);return i=>{const o=i.loaded,a=i.lengthComputable?i.total:void 0,s=o-n,l=r(s),u=o<=a;n=o;const f={loaded:o,total:a,progress:a?o/a:void 0,bytes:s,rate:l||void 0,estimated:l&&a&&u?(a-o)/l:void 0,event:i};f[t?"download":"upload"]=!0,e(f)}}const V7=typeof XMLHttpRequest<"u",H7=V7&&function(e){return new Promise(function(n,r){let i=e.data;const o=It.from(e.headers).normalize();let{responseType:a,withXSRFToken:s}=e,l;function u(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}let f;if(P.isFormData(i)){if(bt.hasStandardBrowserEnv||bt.hasStandardBrowserWebWorkerEnv)o.setContentType(!1);else if((f=o.getContentType())!==!1){const[y,...S]=f?f.split(";").map(h=>h.trim()).filter(Boolean):[];o.setContentType([y||"multipart/form-data",...S].join("; "))}}let d=new XMLHttpRequest;if(e.auth){const y=e.auth.username||"",S=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(y+":"+S))}const g=pg(e.baseURL,e.url);d.open(e.method.toUpperCase(),lg(g,e.params,e.paramsSerializer),!0),d.timeout=e.timeout;function x(){if(!d)return;const y=It.from("getAllResponseHeaders"in d&&d.getAllResponseHeaders()),h={data:!a||a==="text"||a==="json"?d.responseText:d.response,status:d.status,statusText:d.statusText,headers:y,config:e,request:d};L7(function(m){n(m),u()},function(m){r(m),u()},h),d=null}if("onloadend"in d?d.onloadend=x:d.onreadystatechange=function(){!d||d.readyState!==4||d.status===0&&!(d.responseURL&&d.responseURL.indexOf("file:")===0)||setTimeout(x)},d.onabort=function(){d&&(r(new F("Request aborted",F.ECONNABORTED,e,d)),d=null)},d.onerror=function(){r(new F("Network Error",F.ERR_NETWORK,e,d)),d=null},d.ontimeout=function(){let S=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const h=e.transitional||ug;e.timeoutErrorMessage&&(S=e.timeoutErrorMessage),r(new F(S,h.clarifyTimeoutError?F.ETIMEDOUT:F.ECONNABORTED,e,d)),d=null},bt.hasStandardBrowserEnv&&(s&&P.isFunction(s)&&(s=s(e)),s||s!==!1&&B7(g))){const y=e.xsrfHeaderName&&e.xsrfCookieName&&I7.read(e.xsrfCookieName);y&&o.set(e.xsrfHeaderName,y)}i===void 0&&o.setContentType(null),"setRequestHeader"in d&&P.forEach(o.toJSON(),function(S,h){d.setRequestHeader(h,S)}),P.isUndefined(e.withCredentials)||(d.withCredentials=!!e.withCredentials),a&&a!=="json"&&(d.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&d.addEventListener("progress",qp(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&d.upload&&d.upload.addEventListener("progress",qp(e.onUploadProgress)),(e.cancelToken||e.signal)&&(l=y=>{d&&(r(!y||y.type?new so(null,e,d):y),d.abort(),d=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l)));const v=W7(g);if(v&&bt.protocols.indexOf(v)===-1){r(new F("Unsupported protocol "+v+":",F.ERR_BAD_REQUEST,e));return}d.send(i||null)})},Vu={http:m7,xhr:H7};P.forEach(Vu,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Xp=e=>`- ${e}`,Q7=e=>P.isFunction(e)||e===null||e===!1,hg={getAdapter:e=>{e=P.isArray(e)?e:[e];const{length:t}=e;let n,r;const i={};for(let o=0;o<t;o++){n=e[o];let a;if(r=n,!Q7(n)&&(r=Vu[(a=String(n)).toLowerCase()],r===void 0))throw new F(`Unknown adapter '${a}'`);if(r)break;i[a||"#"+o]=r}if(!r){const o=Object.entries(i).map(([s,l])=>`adapter ${s} `+(l===!1?"is not supported by the environment":"is not available in the build"));let a=t?o.length>1?`since :
`+o.map(Xp).join(`
`):" "+Xp(o[0]):"as no adapter specified";throw new F("There is no suitable adapter to dispatch the request "+a,"ERR_NOT_SUPPORT")}return r},adapters:Vu};function Ol(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new so(null,e)}function Zp(e){return Ol(e),e.headers=It.from(e.headers),e.data=jl.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),hg.getAdapter(e.adapter||jd.adapter)(e).then(function(r){return Ol(e),r.data=jl.call(e,e.transformResponse,r),r.headers=It.from(r.headers),r},function(r){return fg(r)||(Ol(e),r&&r.response&&(r.response.data=jl.call(e,e.transformResponse,r.response),r.response.headers=It.from(r.response.headers))),Promise.reject(r)})}const Jp=e=>e instanceof It?{...e}:e;function Dr(e,t){t=t||{};const n={};function r(u,f,d){return P.isPlainObject(u)&&P.isPlainObject(f)?P.merge.call({caseless:d},u,f):P.isPlainObject(f)?P.merge({},f):P.isArray(f)?f.slice():f}function i(u,f,d){if(P.isUndefined(f)){if(!P.isUndefined(u))return r(void 0,u,d)}else return r(u,f,d)}function o(u,f){if(!P.isUndefined(f))return r(void 0,f)}function a(u,f){if(P.isUndefined(f)){if(!P.isUndefined(u))return r(void 0,u)}else return r(void 0,f)}function s(u,f,d){if(d in t)return r(u,f);if(d in e)return r(void 0,u)}const l={url:o,method:o,data:o,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:s,headers:(u,f)=>i(Jp(u),Jp(f),!0)};return P.forEach(Object.keys(Object.assign({},e,t)),function(f){const d=l[f]||i,g=d(e[f],t[f],f);P.isUndefined(g)&&d!==s||(n[f]=g)}),n}const mg="1.6.8",Od={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Od[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const e0={};Od.transitional=function(t,n,r){function i(o,a){return"[Axios v"+mg+"] Transitional option '"+o+"'"+a+(r?". "+r:"")}return(o,a,s)=>{if(t===!1)throw new F(i(a," has been removed"+(n?" in "+n:"")),F.ERR_DEPRECATED);return n&&!e0[a]&&(e0[a]=!0,console.warn(i(a," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,a,s):!0}};function Y7(e,t,n){if(typeof e!="object")throw new F("options must be an object",F.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const o=r[i],a=t[o];if(a){const s=e[o],l=s===void 0||a(s,o,e);if(l!==!0)throw new F("option "+o+" must be "+l,F.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new F("Unknown option "+o,F.ERR_BAD_OPTION)}}const Hu={assertOptions:Y7,validators:Od},Xt=Hu.validators;class Qa{constructor(t){this.defaults=t,this.interceptors={request:new Kp,response:new Kp}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let i;Error.captureStackTrace?Error.captureStackTrace(i={}):i=new Error;const o=i.stack?i.stack.replace(/^.+\n/,""):"";r.stack?o&&!String(r.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+o):r.stack=o}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Dr(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:o}=n;r!==void 0&&Hu.assertOptions(r,{silentJSONParsing:Xt.transitional(Xt.boolean),forcedJSONParsing:Xt.transitional(Xt.boolean),clarifyTimeoutError:Xt.transitional(Xt.boolean)},!1),i!=null&&(P.isFunction(i)?n.paramsSerializer={serialize:i}:Hu.assertOptions(i,{encode:Xt.function,serialize:Xt.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let a=o&&P.merge(o.common,o[n.method]);o&&P.forEach(["delete","get","head","post","put","patch","common"],v=>{delete o[v]}),n.headers=It.concat(a,o);const s=[];let l=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(n)===!1||(l=l&&y.synchronous,s.unshift(y.fulfilled,y.rejected))});const u=[];this.interceptors.response.forEach(function(y){u.push(y.fulfilled,y.rejected)});let f,d=0,g;if(!l){const v=[Zp.bind(this),void 0];for(v.unshift.apply(v,s),v.push.apply(v,u),g=v.length,f=Promise.resolve(n);d<g;)f=f.then(v[d++],v[d++]);return f}g=s.length;let x=n;for(d=0;d<g;){const v=s[d++],y=s[d++];try{x=v(x)}catch(S){y.call(this,S);break}}try{f=Zp.call(this,x)}catch(v){return Promise.reject(v)}for(d=0,g=u.length;d<g;)f=f.then(u[d++],u[d++]);return f}getUri(t){t=Dr(this.defaults,t);const n=pg(t.baseURL,t.url);return lg(n,t.params,t.paramsSerializer)}}P.forEach(["delete","get","head","options"],function(t){Qa.prototype[t]=function(n,r){return this.request(Dr(r||{},{method:t,url:n,data:(r||{}).data}))}});P.forEach(["post","put","patch"],function(t){function n(r){return function(o,a,s){return this.request(Dr(s||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:a}))}}Qa.prototype[t]=n(),Qa.prototype[t+"Form"]=n(!0)});const ia=Qa;class Nd{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(i=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](i);r._listeners=null}),this.promise.then=i=>{let o;const a=new Promise(s=>{r.subscribe(s),o=s}).then(i);return a.cancel=function(){r.unsubscribe(o)},a},t(function(o,a,s){r.reason||(r.reason=new so(o,a,s),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new Nd(function(i){t=i}),cancel:t}}}const K7=Nd;function G7(e){return function(n){return e.apply(null,n)}}function q7(e){return P.isObject(e)&&e.isAxiosError===!0}const Qu={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Qu).forEach(([e,t])=>{Qu[t]=e});const X7=Qu;function gg(e){const t=new ia(e),n=qm(ia.prototype.request,t);return P.extend(n,ia.prototype,t,{allOwnKeys:!0}),P.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return gg(Dr(e,i))},n}const le=gg(jd);le.Axios=ia;le.CanceledError=so;le.CancelToken=K7;le.isCancel=fg;le.VERSION=mg;le.toFormData=Rs;le.AxiosError=F;le.Cancel=le.CanceledError;le.all=function(t){return Promise.all(t)};le.spread=G7;le.isAxiosError=q7;le.mergeConfig=Dr;le.AxiosHeaders=It;le.formToJSON=e=>dg(P.isHTMLForm(e)?new FormData(e):e);le.getAdapter=hg.getAdapter;le.HttpStatusCode=X7;le.default=le;const Fe=le;Fe.defaults.baseURL="https://watertracker-t8-backend.onrender.com/";const Td=e=>{Fe.defaults.headers.common.Authorization=`Bearer ${e}`},Z7=()=>{Fe.defaults.headers.common.Authorization=""},J7=async e=>{const{data:t}=await Fe.post("api/auth/signup",e);return Td(t.token),t},eS=async e=>{const{data:t}=await Fe.post("api/auth/signin",e);return Td(t.token),t},tS=async()=>{await Fe.post("api/auth/logout"),Z7()},nS=async e=>{Td(e);const{data:t}=await Fe.get("api/user/current");return t},rS=async e=>{const{data:t}=await Fe.patch("api/user/avatar",e);return t.avatarURL},iS=async e=>{const{data:t}=await Fe.patch("api/user/edit",e);return t},oS=async e=>{const{data:t}=await Fe.patch("api/user/norm",{dailyNorm:e});return t},aS=async e=>{const{data:t}=await Fe.post("water",e);return t},sS=async({newWater:e,id:t})=>{const{data:n}=await Fe.patch(`water/${t}`,e);return n},lS=async e=>{await Fe.delete(`water/${e}`)},uS=async()=>{const e=Jo(new Date,"dd-MM-yyyy");return await Fe.get(`water?date=${e}`)},cS=gt("auth/signup",async(e,t)=>{try{return await J7(e)}catch(n){return t.rejectWithValue(n.message)}}),dS=gt("auth/signin",async(e,t)=>{try{return await eS(e)}catch(n){return t.rejectWithValue(n.message)}}),fS=gt("auth/logout",async(e,t)=>{try{await tS();return}catch(n){return t.rejectWithValue(n.message)}});gt("auth/refresh",async(e,t)=>{const{auth:n}=t.getState();if(!n.token)return t.rejectWithValue("Something wrong");try{return await nS(n.token)}catch(r){return t.rejectWithValue(r.message)}});gt("user/avatar",async(e,t)=>{try{return await rS(e)}catch(n){return t.rejectWithValue(n.message)}});gt("user/edit",async(e,t)=>{try{return await iS(e)}catch(n){return t.rejectWithValue(n.message)}});gt("auth/dailynorm",async(e,t)=>{try{const n=Number(e)*1e3;return await oS(n),n}catch(n){return t.rejectWithValue(n.message)}});const pS=(e,{payload:t})=>{e.user=t.user,e.token-t.token,e.isLoggedIn=!0},hS=(e,{payload:t})=>{e.user=t.user,e.token=t.token,e.isLoggedIn=!0},mS=()=>yg,yg={user:{email:"",name:"",gender:"",avatarURL:"",dailyNorma:""},token:null,isLoggedIn:!1,isRefreshing:!1},gS=ks({name:"auth",initialState:yg,reducers:{},extraReducers:e=>{e.addCase(cS.fulfilled,pS).addCase(dS.fulfilled,hS).addCase(fS.fulfilled,mS)}}),yS=gS.reducer,vS=gt("water/addWater",async(e,t)=>{try{return await aS(e)}catch(n){return t.rejectWithValue(n.message)}}),xS=gt("water/edit",async({id:e,waterVolume:t,date:n},r)=>{try{return await sS({newWater:{waterVolume:t,date:n},id:e})}catch(i){return r.rejectWithValue(i.message)}}),wS=gt("water/delete",async(e,t)=>{try{return await lS(e),e}catch(n){return t.rejectWithValue(n.message)}}),SS=gt("water/getTodayWAter",async(e,t)=>{try{const{data:n}=await uS();return n[0]}catch(n){return t.rejectWithValue(n.message)}}),kS={month:[],today:{dailyWaterList:[]}},bS=ks({name:"water",initialState:kS,extraReducers:e=>{e.addCase(vS.fulfilled).addCase(xS.fulfilled).addCase(wS.fulfilled).addCase(SS.fulfilled)}}),ES=bS.reducer,CS={key:"authTest",storage:bd},t0={key:"root",storage:bd},vg=E3({reducer:{root:A9,auth:bl(t0,yS),waterData:bl(t0,ES),authTest:bl(CS,q3)},middleware:e=>e({serializableCheck:{ignoredActions:[gd,Os,yd,vd,xd,wd]}})}),PS=k9(vg);function oa(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?oa=function(n){return typeof n}:oa=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},oa(e)}function jS(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n0(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function OS(e,t,n){return t&&n0(e.prototype,t),n&&n0(e,n),e}function NS(e,t){return t&&(oa(t)==="object"||typeof t=="function")?t:aa(e)}function Yu(e){return Yu=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Yu(e)}function aa(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function TS(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ku(e,t)}function Ku(e,t){return Ku=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Ku(e,t)}function sa(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var xg=function(e){TS(t,e);function t(){var n,r;jS(this,t);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return r=NS(this,(n=Yu(t)).call.apply(n,[this].concat(o))),sa(aa(r),"state",{bootstrapped:!1}),sa(aa(r),"_unsubscribe",void 0),sa(aa(r),"handlePersistorState",function(){var s=r.props.persistor,l=s.getState(),u=l.bootstrapped;u&&(r.props.onBeforeLift?Promise.resolve(r.props.onBeforeLift()).finally(function(){return r.setState({bootstrapped:!0})}):r.setState({bootstrapped:!0}),r._unsubscribe&&r._unsubscribe())}),r}return OS(t,[{key:"componentDidMount",value:function(){this._unsubscribe=this.props.persistor.subscribe(this.handlePersistorState),this.handlePersistorState()}},{key:"componentWillUnmount",value:function(){this._unsubscribe&&this._unsubscribe()}},{key:"render",value:function(){return typeof this.props.children=="function"?this.props.children(this.state.bootstrapped):this.state.bootstrapped?this.props.children:this.props.loading}}]),t}(k.PureComponent);sa(xg,"defaultProps",{children:null,loading:null});_l.createRoot(document.getElementById("root")).render(c.jsx(gn.StrictMode,{children:c.jsx(fx,{store:vg,children:c.jsx(xg,{loading:null,persistor:PS,children:c.jsx(Fy,{basename:"/water-tracker",children:c.jsx(n9,{})})})})}));
