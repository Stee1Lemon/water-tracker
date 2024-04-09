import{t as ee,e as vt,f as xt,h as Tn,r as g,E as Rn,g as Bn,k as Wn,l as Be,m as pe,n as $n,o as fe,p as S,j as c,b as q,q as Ne,v as U,i as Q,w as We,u as H,x as Gt,y as Hn,_ as Ut,z as k,A as zn,B as _n,C as Gn,a as je,s as et,L as tt,D as le,F as Un,d as Yt,M as Yn,S as qn}from"./index-fcfe6e91.js";import{C as Xn}from"./Container-42881259.js";import{u as re,a as Te,M as Kn}from"./ModalTeam-483f935c.js";import{c as qt,a as Qn,d as Se,u as Xt}from"./index.esm-924ac689.js";function Kt(n,e){const i=ee(n);if(isNaN(e))return vt(n,NaN);if(!e)return i;const o=i.getDate(),t=vt(n,i.getTime());t.setMonth(i.getMonth()+e+1,0);const s=t.getDate();return o>=s?t:(i.setFullYear(t.getFullYear(),t.getMonth(),o),i)}function Zn(n,e){const i=ee(n.start),o=ee(n.end);let t=+i>+o;const s=t?+i:+o,a=t?o:i;a.setHours(0,0,0,0);let l=(e==null?void 0:e.step)??1;if(!l)return[];l<0&&(l=-l,t=!t);const r=[];for(;+a<=s;)r.push(ee(a)),a.setDate(a.getDate()+l),a.setHours(0,0,0,0);return t?r.reverse():r}function Jn(n){const e=ee(n);return e.setDate(1),e.setHours(0,0,0,0),e}function ei(n){const e=ee(n),i=e.getMonth();return e.setFullYear(e.getFullYear(),i+1,0),e.setHours(0,0,0,0),e}function Qt(n,e,i){const o=xt(n,i),t=xt(e,i);return+o==+t}function bt(n,e){const i=ee(n),o=ee(e);return i.getFullYear()===o.getFullYear()&&i.getMonth()===o.getMonth()}function ti(n,e){return Kt(n,-e)}var F=function(e,i){var o=arguments;if(i==null||!Tn.call(i,"css"))return g.createElement.apply(void 0,o);var t=o.length,s=new Array(t);s[0]=Rn,s[1]=Bn(e,i);for(var a=2;a<t;a++)s[a]=o[a];return g.createElement.apply(null,s)};function nt(){for(var n=arguments.length,e=new Array(n),i=0;i<n;i++)e[i]=arguments[i];return Wn(e)}var ni=function(){var e=nt.apply(void 0,arguments),i="animation-"+e.name;return{name:i,styles:"@keyframes "+i+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}};function me(n,e){if(n.one!==void 0&&e===1)return n.one;const i=e%10,o=e%100;return i===1&&o!==11?n.singularNominative.replace("{{count}}",String(e)):i>=2&&i<=4&&(o<10||o>20)?n.singularGenitive.replace("{{count}}",String(e)):n.pluralGenitive.replace("{{count}}",String(e))}function _(n){return(e,i)=>i&&i.addSuffix?i.comparison&&i.comparison>0?n.future?me(n.future,e):"за "+me(n.regular,e):n.past?me(n.past,e):me(n.regular,e)+" тому":me(n.regular,e)}const ii=(n,e)=>e&&e.addSuffix?e.comparison&&e.comparison>0?"за півхвилини":"півхвилини тому":"півхвилини",oi={lessThanXSeconds:_({regular:{one:"менше секунди",singularNominative:"менше {{count}} секунди",singularGenitive:"менше {{count}} секунд",pluralGenitive:"менше {{count}} секунд"},future:{one:"менше, ніж за секунду",singularNominative:"менше, ніж за {{count}} секунду",singularGenitive:"менше, ніж за {{count}} секунди",pluralGenitive:"менше, ніж за {{count}} секунд"}}),xSeconds:_({regular:{singularNominative:"{{count}} секунда",singularGenitive:"{{count}} секунди",pluralGenitive:"{{count}} секунд"},past:{singularNominative:"{{count}} секунду тому",singularGenitive:"{{count}} секунди тому",pluralGenitive:"{{count}} секунд тому"},future:{singularNominative:"за {{count}} секунду",singularGenitive:"за {{count}} секунди",pluralGenitive:"за {{count}} секунд"}}),halfAMinute:ii,lessThanXMinutes:_({regular:{one:"менше хвилини",singularNominative:"менше {{count}} хвилини",singularGenitive:"менше {{count}} хвилин",pluralGenitive:"менше {{count}} хвилин"},future:{one:"менше, ніж за хвилину",singularNominative:"менше, ніж за {{count}} хвилину",singularGenitive:"менше, ніж за {{count}} хвилини",pluralGenitive:"менше, ніж за {{count}} хвилин"}}),xMinutes:_({regular:{singularNominative:"{{count}} хвилина",singularGenitive:"{{count}} хвилини",pluralGenitive:"{{count}} хвилин"},past:{singularNominative:"{{count}} хвилину тому",singularGenitive:"{{count}} хвилини тому",pluralGenitive:"{{count}} хвилин тому"},future:{singularNominative:"за {{count}} хвилину",singularGenitive:"за {{count}} хвилини",pluralGenitive:"за {{count}} хвилин"}}),aboutXHours:_({regular:{singularNominative:"близько {{count}} години",singularGenitive:"близько {{count}} годин",pluralGenitive:"близько {{count}} годин"},future:{singularNominative:"приблизно за {{count}} годину",singularGenitive:"приблизно за {{count}} години",pluralGenitive:"приблизно за {{count}} годин"}}),xHours:_({regular:{singularNominative:"{{count}} годину",singularGenitive:"{{count}} години",pluralGenitive:"{{count}} годин"}}),xDays:_({regular:{singularNominative:"{{count}} день",singularGenitive:"{{count}} днi",pluralGenitive:"{{count}} днів"}}),aboutXWeeks:_({regular:{singularNominative:"близько {{count}} тижня",singularGenitive:"близько {{count}} тижнів",pluralGenitive:"близько {{count}} тижнів"},future:{singularNominative:"приблизно за {{count}} тиждень",singularGenitive:"приблизно за {{count}} тижні",pluralGenitive:"приблизно за {{count}} тижнів"}}),xWeeks:_({regular:{singularNominative:"{{count}} тиждень",singularGenitive:"{{count}} тижні",pluralGenitive:"{{count}} тижнів"}}),aboutXMonths:_({regular:{singularNominative:"близько {{count}} місяця",singularGenitive:"близько {{count}} місяців",pluralGenitive:"близько {{count}} місяців"},future:{singularNominative:"приблизно за {{count}} місяць",singularGenitive:"приблизно за {{count}} місяці",pluralGenitive:"приблизно за {{count}} місяців"}}),xMonths:_({regular:{singularNominative:"{{count}} місяць",singularGenitive:"{{count}} місяці",pluralGenitive:"{{count}} місяців"}}),aboutXYears:_({regular:{singularNominative:"близько {{count}} року",singularGenitive:"близько {{count}} років",pluralGenitive:"близько {{count}} років"},future:{singularNominative:"приблизно за {{count}} рік",singularGenitive:"приблизно за {{count}} роки",pluralGenitive:"приблизно за {{count}} років"}}),xYears:_({regular:{singularNominative:"{{count}} рік",singularGenitive:"{{count}} роки",pluralGenitive:"{{count}} років"}}),overXYears:_({regular:{singularNominative:"більше {{count}} року",singularGenitive:"більше {{count}} років",pluralGenitive:"більше {{count}} років"},future:{singularNominative:"більше, ніж за {{count}} рік",singularGenitive:"більше, ніж за {{count}} роки",pluralGenitive:"більше, ніж за {{count}} років"}}),almostXYears:_({regular:{singularNominative:"майже {{count}} рік",singularGenitive:"майже {{count}} роки",pluralGenitive:"майже {{count}} років"},future:{singularNominative:"майже за {{count}} рік",singularGenitive:"майже за {{count}} роки",pluralGenitive:"майже за {{count}} років"}})},ai=(n,e,i)=>(i=i||{},oi[n](e,i)),ri={full:"EEEE, do MMMM y 'р.'",long:"do MMMM y 'р.'",medium:"d MMM y 'р.'",short:"dd.MM.y"},si={full:"H:mm:ss zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},ui={full:"{{date}} 'о' {{time}}",long:"{{date}} 'о' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},li={date:Be({formats:ri,defaultWidth:"full"}),time:Be({formats:si,defaultWidth:"full"}),dateTime:Be({formats:ui,defaultWidth:"full"})},it=["неділю","понеділок","вівторок","середу","четвер","п’ятницю","суботу"];function ci(n){const e=it[n];switch(n){case 0:case 3:case 5:case 6:return"'у минулу "+e+" о' p";case 1:case 2:case 4:return"'у минулий "+e+" о' p"}}function Zt(n){return"'у "+it[n]+" о' p"}function di(n){const e=it[n];switch(n){case 0:case 3:case 5:case 6:return"'у наступну "+e+" о' p";case 1:case 2:case 4:return"'у наступний "+e+" о' p"}}const pi=(n,e,i)=>{const o=ee(n),t=o.getDay();return Qt(o,e,i)?Zt(t):ci(t)},fi=(n,e,i)=>{const o=ee(n),t=o.getDay();return Qt(o,e,i)?Zt(t):di(t)},mi={lastWeek:pi,yesterday:"'вчора о' p",today:"'сьогодні о' p",tomorrow:"'завтра о' p",nextWeek:fi,other:"P"},hi=(n,e,i,o)=>{const t=mi[n];return typeof t=="function"?t(e,i,o):t},gi={narrow:["до н.е.","н.е."],abbreviated:["до н. е.","н. е."],wide:["до нашої ери","нашої ери"]},vi={narrow:["1","2","3","4"],abbreviated:["1-й кв.","2-й кв.","3-й кв.","4-й кв."],wide:["1-й квартал","2-й квартал","3-й квартал","4-й квартал"]},xi={narrow:["С","Л","Б","К","Т","Ч","Л","С","В","Ж","Л","Г"],abbreviated:["січ.","лют.","берез.","квіт.","трав.","черв.","лип.","серп.","верес.","жовт.","листоп.","груд."],wide:["січень","лютий","березень","квітень","травень","червень","липень","серпень","вересень","жовтень","листопад","грудень"]},bi={narrow:["С","Л","Б","К","Т","Ч","Л","С","В","Ж","Л","Г"],abbreviated:["січ.","лют.","берез.","квіт.","трав.","черв.","лип.","серп.","верес.","жовт.","листоп.","груд."],wide:["січня","лютого","березня","квітня","травня","червня","липня","серпня","вересня","жовтня","листопада","грудня"]},yi={narrow:["Н","П","В","С","Ч","П","С"],short:["нд","пн","вт","ср","чт","пт","сб"],abbreviated:["нед","пон","вів","сер","чтв","птн","суб"],wide:["неділя","понеділок","вівторок","середа","четвер","п’ятниця","субота"]},wi={narrow:{am:"ДП",pm:"ПП",midnight:"півн.",noon:"пол.",morning:"ранок",afternoon:"день",evening:"веч.",night:"ніч"},abbreviated:{am:"ДП",pm:"ПП",midnight:"півн.",noon:"пол.",morning:"ранок",afternoon:"день",evening:"веч.",night:"ніч"},wide:{am:"ДП",pm:"ПП",midnight:"північ",noon:"полудень",morning:"ранок",afternoon:"день",evening:"вечір",night:"ніч"}},Ei={narrow:{am:"ДП",pm:"ПП",midnight:"півн.",noon:"пол.",morning:"ранку",afternoon:"дня",evening:"веч.",night:"ночі"},abbreviated:{am:"ДП",pm:"ПП",midnight:"півн.",noon:"пол.",morning:"ранку",afternoon:"дня",evening:"веч.",night:"ночі"},wide:{am:"ДП",pm:"ПП",midnight:"північ",noon:"полудень",morning:"ранку",afternoon:"дня",evening:"веч.",night:"ночі"}},Ci=(n,e)=>{const i=String(e==null?void 0:e.unit),o=Number(n);let t;return i==="date"?o===3||o===23?t="-є":t="-е":i==="minute"||i==="second"||i==="hour"?t="-а":t="-й",o+t},Si={ordinalNumber:Ci,era:pe({values:gi,defaultWidth:"wide"}),quarter:pe({values:vi,defaultWidth:"wide",argumentCallback:n=>n-1}),month:pe({values:xi,defaultWidth:"wide",formattingValues:bi,defaultFormattingWidth:"wide"}),day:pe({values:yi,defaultWidth:"wide"}),dayPeriod:pe({values:wi,defaultWidth:"any",formattingValues:Ei,defaultFormattingWidth:"wide"})},Fi=/^(\d+)(-?(е|й|є|а|я))?/i,Mi=/\d+/i,Di={narrow:/^((до )?н\.?\s?е\.?)/i,abbreviated:/^((до )?н\.?\s?е\.?)/i,wide:/^(до нашої ери|нашої ери|наша ера)/i},Oi={any:[/^д/i,/^н/i]},ki={narrow:/^[1234]/i,abbreviated:/^[1234](-?[иі]?й?)? кв.?/i,wide:/^[1234](-?[иі]?й?)? квартал/i},Ii={any:[/1/i,/2/i,/3/i,/4/i]},Ai={narrow:/^[слбктчвжг]/i,abbreviated:/^(січ|лют|бер(ез)?|квіт|трав|черв|лип|серп|вер(ес)?|жовт|лис(топ)?|груд)\.?/i,wide:/^(січень|січня|лютий|лютого|березень|березня|квітень|квітня|травень|травня|червня|червень|липень|липня|серпень|серпня|вересень|вересня|жовтень|жовтня|листопад[а]?|грудень|грудня)/i},Pi={narrow:[/^с/i,/^л/i,/^б/i,/^к/i,/^т/i,/^ч/i,/^л/i,/^с/i,/^в/i,/^ж/i,/^л/i,/^г/i],any:[/^сі/i,/^лю/i,/^б/i,/^к/i,/^т/i,/^ч/i,/^лип/i,/^се/i,/^в/i,/^ж/i,/^лис/i,/^г/i]},Vi={narrow:/^[нпвсч]/i,short:/^(нд|пн|вт|ср|чт|пт|сб)\.?/i,abbreviated:/^(нед|пон|вів|сер|че?тв|птн?|суб)\.?/i,wide:/^(неділ[яі]|понеділ[ок][ка]|вівтор[ок][ка]|серед[аи]|четвер(га)?|п\W*?ятниц[яі]|субот[аи])/i},Li={narrow:[/^н/i,/^п/i,/^в/i,/^с/i,/^ч/i,/^п/i,/^с/i],any:[/^н/i,/^п[он]/i,/^в/i,/^с[ер]/i,/^ч/i,/^п\W*?[ят]/i,/^с[уб]/i]},Ni={narrow:/^([дп]п|півн\.?|пол\.?|ранок|ранку|день|дня|веч\.?|ніч|ночі)/i,abbreviated:/^([дп]п|півн\.?|пол\.?|ранок|ранку|день|дня|веч\.?|ніч|ночі)/i,wide:/^([дп]п|північ|полудень|ранок|ранку|день|дня|вечір|вечора|ніч|ночі)/i},ji={any:{am:/^дп/i,pm:/^пп/i,midnight:/^півн/i,noon:/^пол/i,morning:/^р/i,afternoon:/^д[ен]/i,evening:/^в/i,night:/^н/i}},Ti={ordinalNumber:$n({matchPattern:Fi,parsePattern:Mi,valueCallback:n=>parseInt(n,10)}),era:fe({matchPatterns:Di,defaultMatchWidth:"wide",parsePatterns:Oi,defaultParseWidth:"any"}),quarter:fe({matchPatterns:ki,defaultMatchWidth:"wide",parsePatterns:Ii,defaultParseWidth:"any",valueCallback:n=>n+1}),month:fe({matchPatterns:Ai,defaultMatchWidth:"wide",parsePatterns:Pi,defaultParseWidth:"any"}),day:fe({matchPatterns:Vi,defaultMatchWidth:"wide",parsePatterns:Li,defaultParseWidth:"any"}),dayPeriod:fe({matchPatterns:Ni,defaultMatchWidth:"wide",parsePatterns:ji,defaultParseWidth:"any"})},Jt={code:"uk",formatDistance:ai,formatLong:li,formatRelative:hi,localize:Si,match:Ti,options:{weekStartsOn:1,firstWeekContainsDate:1}},Ri=S("div")`
display: flex;
  flex-direction: column;
  gap: 16px;
  width: 280px;
  position: absolute;
  bottom: 54px;

  background-color: var(--primary-light);
  border-radius: 10px;
  box-shadow: 0px 4px 4px 0px rgba(64, 123, 255, 0.3);
  padding: 24px 13px;
  transform-origin: bottom;
  z-index: 2;
span{
    color: var(--primary-focus);
    font-weight: 500;
    font-size: 18px;
    line-height: 133%;
}
p{
    color: var(--primary-dark);
    line-height: 125%;
    margin:0;
}
@media screen and (max-width: 767px) {
    ${({$deltaNum:n})=>`left: ${-7-n}px;`}
  }
@media only screen and (min-width: 768px) {
     ${({$delta:n})=>n&&"right: 17px;"}
      ${({$delta:n})=>!n&&"left: 17px;"}
width:292px;
padding:24px 16px;
row-gap:18px;
}
 @media screen and (min-width: 1440px) {
    bottom: 56px;
  }
`,Bi=S("div")`
color: var(--primary-focus);
`,Wi=({calendarRef:n,refData:e,waterData:i={}})=>{const{t:o}=re(),{date:t,dailyNorm:s,totalWaterPortionsForDay:a,percentageWater:l}=i,r=e==null?void 0:e.current.getBoundingClientRect().left,u=n==null?void 0:n.current.getBoundingClientRect().left;let p=!0;const d=r-u;return d<250&&(p=!1),c.jsxs(Ri,{$delta:p,$deltaNum:d,children:[c.jsx(Bi,{children:t}),c.jsxs("p",{children:[o("daysGeneralStats.norma")," ",c.jsx("span",{children:s})]}),c.jsxs("p",{children:[o("daysGeneralStats.fulfillment")," ",c.jsxs("span",{children:[l,"%"]})]}),c.jsxs("p",{children:[o("daysGeneralStats.servings")," ",c.jsx("span",{children:a})]})]})},$i=S("div")`
display: flex;
flex-direction:column;
row-gap:4px;
justify-content:center;
align-items:center;
position: relative;
`,Hi=S("button")`
display: flex;
align-items: center;
justify-content: center;
width: 34px;
height: 34px;
background-color:var(--primary-light);
border: 1px solid;
border-radius: 50%;
 ${({isConsumed:n})=>n?"border-color: transparent;":"border-color: var(--secondary-fourth);"}
`,zi=S("span")`
    font-size: 12px;
    text-align: center;
    color: var(--secondary-third);
`,_i=({isConsumed:n,date:e,percentage:i,day:o,data:t,calendarRef:s})=>{const a=q(Ne),[l,r]=g.useState(null),[u,p]=g.useState(null),d=g.useRef(null),h=v=>{d.current&&!d.current.contains(v.target)&&r(null)};g.useEffect(()=>(document.addEventListener("click",h),()=>{document.removeEventListener("click",h)}),[]);const y=v=>{r(m=>m===v?null:v);const x=t[v]||0;a==="uk"&&(v=U(v,"d, MMMM",{locale:Jt})),p({date:v,dailyNorm:x?x.dailyNorm:0,totalWaterPortionsForDay:x?x.totalWaterPortionsForDay:0,percentageWater:x?parseInt(x.percentageWater):0})};return c.jsxs($i,{children:[c.jsx("div",{children:l&&c.jsx(Wi,{calendarRef:s,refData:d,waterData:u},o)}),c.jsx(Hi,{ref:d,onClick:()=>y(o),isConsumed:n,children:e}),c.jsxs(zi,{children:[i,"%"]})]})},Gi=S("div")`
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
`,Ui=S("div")`
    min-width:180px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap:2px;
    @media only screen and (min-width: 768px) {
    column-gap:5px;
    min-width:190px;
}
`,yt=S("button")`
padding:0;
width: 14px;
height: 14px;
svg {
    width: 14px;
    height: 14px;
    ${({active:n})=>n?"stroke: var(--secondary-third);":"stroke:var(--primary-focus);"}
}
`,Yi=S("div")`
font-size: 24px;
font-weight: 500;
line-height: 1.2;
color: var(--primary-dark);
@media only screen and (min-width: 768px) {
font-size: 26px;  
}
`,qi=S("div")`
position: relative;
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
`,Xi=n=>n.auth.user.waterRate,en=n=>n.water.today,Ki=n=>n.water.month,Qi="yyyy",Zi="MMMM",Ji="d",eo=()=>{const{t:n}=re(),e=q(Ne),{waterForMonth:i=[]}=q(Ki),[o,t]=g.useState(new Date),[s,a]=g.useState(null),l=g.useRef(null),r=Jn(o),u=ei(o),p=Zn({start:r,end:u});let d=[];i.length>0&&(d=i==null?void 0:i.reduce((m,f)=>(m[f.date]=f,m),{}));let h;e==="uk"?h=U(o,"LLLL",{locale:Jt}):h=U(o,Zi);const y=U(o,Qi),v=()=>{const m=ti(o,1);t(m),bt(m,new Date)?a(null):a("prev")},x=()=>{const m=Kt(o,1);t(m),bt(m,new Date)?a(null):a("next")};return c.jsxs("div",{ref:l,children:[c.jsxs(Gi,{children:[c.jsx(Yi,{children:n("month")}),c.jsxs(Ui,{children:[c.jsx(yt,{onClick:v,active:s==="next",type:"button",children:c.jsx("svg",{children:c.jsx("use",{href:`${Q}#icon-pagination-arrow-prev`})})}),c.jsxs("span",{children:[h,", ",y]}),c.jsx(yt,{onClick:x,active:s==="prev",type:"button",children:c.jsx("svg",{children:c.jsx("use",{href:`${Q}#icon-pagination-arrow-next`})})})]})]}),c.jsx(qi,{children:p.map(m=>{const f=U(m,"d, MMMM"),w=d[f]||0,E=w?parseInt(w.percentageWater):0,D=w?w&&parseInt(w.percentageWater)>=100:!1;return c.jsx(_i,{isConsumed:D,date:U(m,Ji),percentage:E,day:f,calendarRef:l,data:d},f)})})]})},to=S("div")`
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
`,no=S("div")`
color: var(--primary-focus);
font-size: 18px;
line-height:140%;
`,io=S("div")`
color: var(--primary-dark);
font-size: 12px;
line-height: 200%;
`,tn=({data:{amount:n,time:e}})=>c.jsxs(to,{children:[c.jsx("svg",{children:c.jsx("use",{href:`${Q}#icon-glass`})}),c.jsxs(no,{children:[n," ml"]}),c.jsxs(io,{children:[e," AM"]})]});var nn={exports:{}};(function(n){(function(e,i){n.exports=i(e)})(typeof We<"u"?We:typeof window<"u"?window:We,function(e){if(typeof e>"u"&&typeof e.document>"u")return!1;var i="Notiflix",o=`

Visit documentation page to learn more: https://notiflix.github.io/documentation`,t='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',s={Success:"Success",Failure:"Failure",Warning:"Warning",Info:"Info"},a,l={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},r=function(f){return console.error("%c "+i+" Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549",`
`+f+o)},u=function(f){return f||(f="head"),e.document[f]===null?(r(`
Notiflix needs to be appended to the "<`+f+'>" element, but you called it before the "<'+f+'>" element has been created.'),!1):!0},p=function(f,w){if(!u("head"))return!1;if(f()!==null&&!e.document.getElementById(w)){var E=e.document.createElement("style");E.id=w,E.innerHTML=f(),e.document.head.appendChild(E)}},d=function(){var f={},w=!1,E=0;Object.prototype.toString.call(arguments[0])==="[object Boolean]"&&(w=arguments[0],E++);for(var D=function(I){for(var C in I)Object.prototype.hasOwnProperty.call(I,C)&&(w&&Object.prototype.toString.call(I[C])==="[object Object]"?f[C]=d(f[C],I[C]):f[C]=I[C])};E<arguments.length;E++)D(arguments[E]);return f},h=function(f){var w=e.document.createElement("div");return w.innerHTML=f,w.textContent||w.innerText||""},y=function(){var f='[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}';return f||null},v=0,x=function(f,w,E,D){if(!u("body"))return!1;a||m.Notify.init({});var I=d(!0,a,{});if(typeof E=="object"&&!Array.isArray(E)||typeof D=="object"&&!Array.isArray(D)){var C={};typeof E=="object"?C=E:typeof D=="object"&&(C=D),a=d(!0,a,C)}var O=a[f.toLocaleLowerCase("en")];v++,typeof w!="string"&&(w="Notiflix "+f),a.plainText&&(w=h(w)),!a.plainText&&w.length>a.messageMaxLength&&(a=d(!0,a,{closeButton:!0,messageMaxLength:150}),w='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),w.length>a.messageMaxLength&&(w=w.substring(0,a.messageMaxLength)+"..."),a.fontAwesomeIconStyle==="shadow"&&(O.fontAwesomeIconColor=O.background),a.cssAnimation||(a.cssAnimationDuration=0);var b=e.document.getElementById(l.wrapID)||e.document.createElement("div");if(b.id=l.wrapID,b.style.width=a.width,b.style.zIndex=a.zindex,b.style.opacity=a.opacity,a.position==="center-center"?(b.style.left=a.distance,b.style.top=a.distance,b.style.right=a.distance,b.style.bottom=a.distance,b.style.margin="auto",b.classList.add("nx-flex-center-center"),b.style.maxHeight="calc((100vh - "+a.distance+") - "+a.distance+")",b.style.display="flex",b.style.flexWrap="wrap",b.style.flexDirection="column",b.style.justifyContent="center",b.style.alignItems="center",b.style.pointerEvents="none"):a.position==="center-top"?(b.style.left=a.distance,b.style.right=a.distance,b.style.top=a.distance,b.style.bottom="auto",b.style.margin="auto"):a.position==="center-bottom"?(b.style.left=a.distance,b.style.right=a.distance,b.style.bottom=a.distance,b.style.top="auto",b.style.margin="auto"):a.position==="right-bottom"?(b.style.right=a.distance,b.style.bottom=a.distance,b.style.top="auto",b.style.left="auto"):a.position==="left-top"?(b.style.left=a.distance,b.style.top=a.distance,b.style.right="auto",b.style.bottom="auto"):a.position==="left-bottom"?(b.style.left=a.distance,b.style.bottom=a.distance,b.style.top="auto",b.style.right="auto"):(b.style.right=a.distance,b.style.top=a.distance,b.style.left="auto",b.style.bottom="auto"),a.backOverlay){var A=e.document.getElementById(l.overlayID)||e.document.createElement("div");A.id=l.overlayID,A.style.width="100%",A.style.height="100%",A.style.position="fixed",A.style.zIndex=a.zindex-1,A.style.left=0,A.style.top=0,A.style.right=0,A.style.bottom=0,A.style.background=O.backOverlayColor||a.backOverlayColor,A.className=a.cssAnimation?"nx-with-animation":"",A.style.animationDuration=a.cssAnimation?a.cssAnimationDuration+"ms":"",e.document.getElementById(l.overlayID)||e.document.body.appendChild(A)}e.document.getElementById(l.wrapID)||e.document.body.appendChild(b);var P=e.document.createElement("div");P.id=a.ID+"-"+v,P.className=a.className+" "+O.childClassName+" "+(a.cssAnimation?"nx-with-animation":"")+" "+(a.useIcon?"nx-with-icon":"")+" nx-"+a.cssAnimationStyle+" "+(a.closeButton&&typeof E!="function"?"nx-with-close-button":"")+" "+(typeof E=="function"?"nx-with-callback":"")+" "+(a.clickToClose?"nx-notify-click-to-close":""),P.style.fontSize=a.fontSize,P.style.color=O.textColor,P.style.background=O.background,P.style.borderRadius=a.borderRadius,P.style.pointerEvents="all",a.rtl&&(P.setAttribute("dir","rtl"),P.classList.add("nx-rtl-on")),P.style.fontFamily='"'+a.fontFamily+'", '+t,a.cssAnimation&&(P.style.animationDuration=a.cssAnimationDuration+"ms");var W="";if(a.closeButton&&typeof E!="function"&&(W='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+O.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),a.useIcon)if(a.useFontAwesome)P.innerHTML='<i style="color:'+O.fontAwesomeIconColor+"; font-size:"+a.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+O.fontAwesomeClassName+" "+(a.fontAwesomeIconStyle==="shadow"?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+w+"</span>"+(a.closeButton?W:"");else{var N="";f===s.Success?N='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+O.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':f===s.Failure?N='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+O.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':f===s.Warning?N='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+O.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':f===s.Info&&(N='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+O.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),P.innerHTML=N+'<span class="nx-message nx-with-icon">'+w+"</span>"+(a.closeButton?W:"")}else P.innerHTML='<span class="nx-message">'+w+"</span>"+(a.closeButton?W:"");if(a.position==="left-bottom"||a.position==="right-bottom"){var Y=e.document.getElementById(l.wrapID);Y.insertBefore(P,Y.firstChild)}else e.document.getElementById(l.wrapID).appendChild(P);var R=e.document.getElementById(P.id);if(R){var j,V,G=function(){R.classList.add("nx-remove");var B=e.document.getElementById(l.overlayID);B&&b.childElementCount<=0&&B.classList.add("nx-remove"),clearTimeout(j)},z=function(){if(R&&R.parentNode!==null&&R.parentNode.removeChild(R),b.childElementCount<=0&&b.parentNode!==null){b.parentNode.removeChild(b);var B=e.document.getElementById(l.overlayID);B&&B.parentNode!==null&&B.parentNode.removeChild(B)}clearTimeout(V)};if(a.closeButton&&typeof E!="function"){var J=e.document.getElementById(P.id).querySelector("span.nx-close-button");J.addEventListener("click",function(){G();var B=setTimeout(function(){z(),clearTimeout(B)},a.cssAnimationDuration)})}if((typeof E=="function"||a.clickToClose)&&R.addEventListener("click",function(){typeof E=="function"&&E(),G();var B=setTimeout(function(){z(),clearTimeout(B)},a.cssAnimationDuration)}),!a.closeButton&&typeof E!="function"){var X=function(){j=setTimeout(function(){G()},a.timeout),V=setTimeout(function(){z()},a.timeout+a.cssAnimationDuration)};X(),a.pauseOnHover&&(R.addEventListener("mouseenter",function(){R.classList.add("nx-paused"),clearTimeout(j),clearTimeout(V)}),R.addEventListener("mouseleave",function(){R.classList.remove("nx-paused"),X()}))}}if(a.showOnlyTheLastOne&&v>0)for(var se=e.document.querySelectorAll("[id^="+a.ID+"-]:not([id="+a.ID+"-"+v+"])"),L=0;L<se.length;L++){var $=se[L];$.parentNode!==null&&$.parentNode.removeChild($)}a=d(!0,a,I)},m={Notify:{init:function(f){a=d(!0,l,f),p(y,"NotiflixNotifyInternalCSS")},merge:function(f){if(a)a=d(!0,a,f);else return r("You have to initialize the Notify module before call Merge function."),!1},success:function(f,w,E){x(s.Success,f,w,E)},failure:function(f,w,E){x(s.Failure,f,w,E)},warning:function(f,w,E){x(s.Warning,f,w,E)},info:function(f,w,E){x(s.Info,f,w,E)}}};return typeof e.Notiflix=="object"?d(!0,e.Notiflix,{Notify:m.Notify}):{Notify:m.Notify}})})(nn);var ce=nn.exports;const oo=H("label")`
display: flex;
flex-direction: column;
row-gap: 8px;
position: relative;
`,ao=H("input")`
background-color:transparent;
color: var(--primary-focus);
border-radius:6px;
padding: 12px 10px;
width: 100%;
line-height: 125%;
border: 1px solid var(--secondary-fifth);
&::-webkit-outer-spin-button,
&::-webkit-inner-spin-button {
    -webkit-appearance: none;
}
`,ro=H("p")`
position: absolute;
bottom:-30px;
left:5px;
  color: var(--secondary-second);
  font-size: 12px;
  line-height: 120%;
`,Fe=({label:n="",error:e,...i})=>c.jsxs(oo,{children:[n,c.jsx(ao,{...i}),e&&c.jsx(ro,{children:e})]}),ve=Gt`
  padding: 10px 30px;
  color: var(--primary-light);
  font-weight: 500;
  background-color: var(--primary-focus);
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(64, 123, 255, 0.3);
  transition: all 150ms linear;
  :hover {
    box-shadow: 0px 4px 14px rgba(64, 123, 255, 0.5);
  }
  :active {
    box-shadow: none;
  }
  @media only screen and (min-width: 768px) {
    font-size: 18px;
  }
  border: none;
`;H("input")`
  background-color: transparent;
  color: var(--primary-focus);
  border-radius: 6px;
  padding: 12px 10px;
  width: 100%;
  line-height: 125%;
  border: 1px solid var(--secondary-fifth);
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;const ot=Gt`
  background-color: var(--primary-light);
  position: relative;
  border-radius: 10px;
  padding: 24px 12px;
  width: 280px;
  color: var(--primary-dark);
  @media only screen and (min-width: 768px) {
    width: 704px;
    padding: 32px 24px;
  }
  @media only screen and (min-width: 1440px) {
    width: 592px;
  }
  h3,
  p {
    padding: 0;
    margin: 0;
  }
`,de=H("div")`
  font-size: 18px;
  font-weight: 500;
  line-height: 110%;
  margin-bottom: 16px;
`,at=H("h3")`
  max-width: 200px;
  font-size: 26px;
  font-weight: 500;
  line-height: 120%;
  color: var(--primary-dark);
  @media only screen and (min-width: 768px) {
    max-width: 600px;
  }
`,rt=H("button")`
  border: none;
  background-color: transparent;
  position: absolute;
  width: 0;
  height: 0;
  top: 30px;
  right: 18px;
  svg {
    width: 24px;
    height: 24px;
    stroke: var(--primary-focus);
  }
  @media only screen and (min-width: 768px) {
    top: 42px;
    right: 30px;
  }
`,st=H("span")`
  display: flex;
  align-items: center;
  justify-content:center;
  max-height:20px;
  width:auto;
`;function ge(n,e,i){return e=Hn(e),e in n?Object.defineProperty(n,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[e]=i,n}function wt(n,e){var i=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})),i.push.apply(i,o)}return i}function M(n){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?wt(Object(i),!0).forEach(function(o){ge(n,o,i[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(i)):wt(Object(i)).forEach(function(o){Object.defineProperty(n,o,Object.getOwnPropertyDescriptor(i,o))})}return n}function so(n){if(Array.isArray(n))return n}function uo(n,e){var i=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(i!=null){var o,t,s,a,l=[],r=!0,u=!1;try{if(s=(i=i.call(n)).next,e===0){if(Object(i)!==i)return;r=!1}else for(;!(r=(o=s.call(i)).done)&&(l.push(o.value),l.length!==e);r=!0);}catch(p){u=!0,t=p}finally{try{if(!r&&i.return!=null&&(a=i.return(),Object(a)!==a))return}finally{if(u)throw t}}return l}}function Xe(n,e){(e==null||e>n.length)&&(e=n.length);for(var i=0,o=new Array(e);i<e;i++)o[i]=n[i];return o}function on(n,e){if(n){if(typeof n=="string")return Xe(n,e);var i=Object.prototype.toString.call(n).slice(8,-1);if(i==="Object"&&n.constructor&&(i=n.constructor.name),i==="Map"||i==="Set")return Array.from(n);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return Xe(n,e)}}function lo(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ne(n,e){return so(n)||uo(n,e)||on(n,e)||lo()}function co(n,e){if(n==null)return{};var i={},o=Object.keys(n),t,s;for(s=0;s<o.length;s++)t=o[s],!(e.indexOf(t)>=0)&&(i[t]=n[t]);return i}function ie(n,e){if(n==null)return{};var i=co(n,e),o,t;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(t=0;t<s.length;t++)o=s[t],!(e.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(n,o)&&(i[o]=n[o])}return i}var po=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function fo(n){var e=n.defaultInputValue,i=e===void 0?"":e,o=n.defaultMenuIsOpen,t=o===void 0?!1:o,s=n.defaultValue,a=s===void 0?null:s,l=n.inputValue,r=n.menuIsOpen,u=n.onChange,p=n.onInputChange,d=n.onMenuClose,h=n.onMenuOpen,y=n.value,v=ie(n,po),x=g.useState(l!==void 0?l:i),m=ne(x,2),f=m[0],w=m[1],E=g.useState(r!==void 0?r:t),D=ne(E,2),I=D[0],C=D[1],O=g.useState(y!==void 0?y:a),b=ne(O,2),A=b[0],P=b[1],W=g.useCallback(function(z,J){typeof u=="function"&&u(z,J),P(z)},[u]),N=g.useCallback(function(z,J){var X;typeof p=="function"&&(X=p(z,J)),w(X!==void 0?X:z)},[p]),Y=g.useCallback(function(){typeof h=="function"&&h(),C(!0)},[h]),R=g.useCallback(function(){typeof d=="function"&&d(),C(!1)},[d]),j=l!==void 0?l:f,V=r!==void 0?r:I,G=y!==void 0?y:A;return M(M({},v),{},{inputValue:j,menuIsOpen:V,onChange:W,onInputChange:N,onMenuClose:R,onMenuOpen:Y,value:G})}function Ke(n,e){return Ke=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,t){return o.__proto__=t,o},Ke(n,e)}function mo(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),e&&Ke(n,e)}function De(n){return De=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(i){return i.__proto__||Object.getPrototypeOf(i)},De(n)}function an(){try{var n=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(an=function(){return!!n})()}function ho(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function go(n,e){if(e&&(Ut(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return ho(n)}function vo(n){var e=an();return function(){var o=De(n),t;if(e){var s=De(this).constructor;t=Reflect.construct(o,arguments,s)}else t=o.apply(this,arguments);return go(this,t)}}function xo(n){if(Array.isArray(n))return Xe(n)}function bo(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function yo(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ut(n){return xo(n)||bo(n)||on(n)||yo()}function wo(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}const Eo=Math.min,Co=Math.max,Oe=Math.round,be=Math.floor,ke=n=>({x:n,y:n});function So(n){return{...n,top:n.y,left:n.x,right:n.x+n.width,bottom:n.y+n.height}}function rn(n){return un(n)?(n.nodeName||"").toLowerCase():"#document"}function Z(n){var e;return(n==null||(e=n.ownerDocument)==null?void 0:e.defaultView)||window}function sn(n){var e;return(e=(un(n)?n.ownerDocument:n.document)||window.document)==null?void 0:e.documentElement}function un(n){return n instanceof Node||n instanceof Z(n).Node}function Qe(n){return n instanceof Element||n instanceof Z(n).Element}function lt(n){return n instanceof HTMLElement||n instanceof Z(n).HTMLElement}function Et(n){return typeof ShadowRoot>"u"?!1:n instanceof ShadowRoot||n instanceof Z(n).ShadowRoot}function ln(n){const{overflow:e,overflowX:i,overflowY:o,display:t}=ct(n);return/auto|scroll|overlay|hidden|clip/.test(e+o+i)&&!["inline","contents"].includes(t)}function Fo(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Mo(n){return["html","body","#document"].includes(rn(n))}function ct(n){return Z(n).getComputedStyle(n)}function Do(n){if(rn(n)==="html")return n;const e=n.assignedSlot||n.parentNode||Et(n)&&n.host||sn(n);return Et(e)?e.host:e}function cn(n){const e=Do(n);return Mo(e)?n.ownerDocument?n.ownerDocument.body:n.body:lt(e)&&ln(e)?e:cn(e)}function Ie(n,e,i){var o;e===void 0&&(e=[]),i===void 0&&(i=!0);const t=cn(n),s=t===((o=n.ownerDocument)==null?void 0:o.body),a=Z(t);return s?e.concat(a,a.visualViewport||[],ln(t)?t:[],a.frameElement&&i?Ie(a.frameElement):[]):e.concat(t,Ie(t,[],i))}function Oo(n){const e=ct(n);let i=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const t=lt(n),s=t?n.offsetWidth:i,a=t?n.offsetHeight:o,l=Oe(i)!==s||Oe(o)!==a;return l&&(i=s,o=a),{width:i,height:o,$:l}}function dt(n){return Qe(n)?n:n.contextElement}function $e(n){const e=dt(n);if(!lt(e))return ke(1);const i=e.getBoundingClientRect(),{width:o,height:t,$:s}=Oo(e);let a=(s?Oe(i.width):i.width)/o,l=(s?Oe(i.height):i.height)/t;return(!a||!Number.isFinite(a))&&(a=1),(!l||!Number.isFinite(l))&&(l=1),{x:a,y:l}}const ko=ke(0);function Io(n){const e=Z(n);return!Fo()||!e.visualViewport?ko:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Ao(n,e,i){return e===void 0&&(e=!1),!i||e&&i!==Z(n)?!1:e}function Ct(n,e,i,o){e===void 0&&(e=!1),i===void 0&&(i=!1);const t=n.getBoundingClientRect(),s=dt(n);let a=ke(1);e&&(o?Qe(o)&&(a=$e(o)):a=$e(n));const l=Ao(s,i,o)?Io(s):ke(0);let r=(t.left+l.x)/a.x,u=(t.top+l.y)/a.y,p=t.width/a.x,d=t.height/a.y;if(s){const h=Z(s),y=o&&Qe(o)?Z(o):o;let v=h,x=v.frameElement;for(;x&&o&&y!==v;){const m=$e(x),f=x.getBoundingClientRect(),w=ct(x),E=f.left+(x.clientLeft+parseFloat(w.paddingLeft))*m.x,D=f.top+(x.clientTop+parseFloat(w.paddingTop))*m.y;r*=m.x,u*=m.y,p*=m.x,d*=m.y,r+=E,u+=D,v=Z(x),x=v.frameElement}}return So({width:p,height:d,x:r,y:u})}function Po(n,e){let i=null,o;const t=sn(n);function s(){var l;clearTimeout(o),(l=i)==null||l.disconnect(),i=null}function a(l,r){l===void 0&&(l=!1),r===void 0&&(r=1),s();const{left:u,top:p,width:d,height:h}=n.getBoundingClientRect();if(l||e(),!d||!h)return;const y=be(p),v=be(t.clientWidth-(u+d)),x=be(t.clientHeight-(p+h)),m=be(u),w={rootMargin:-y+"px "+-v+"px "+-x+"px "+-m+"px",threshold:Co(0,Eo(1,r))||1};let E=!0;function D(I){const C=I[0].intersectionRatio;if(C!==r){if(!E)return a();C?a(!1,C):o=setTimeout(()=>{a(!1,1e-7)},100)}E=!1}try{i=new IntersectionObserver(D,{...w,root:t.ownerDocument})}catch{i=new IntersectionObserver(D,w)}i.observe(n)}return a(!0),s}function Vo(n,e,i,o){o===void 0&&(o={});const{ancestorScroll:t=!0,ancestorResize:s=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:r=!1}=o,u=dt(n),p=t||s?[...u?Ie(u):[],...Ie(e)]:[];p.forEach(f=>{t&&f.addEventListener("scroll",i,{passive:!0}),s&&f.addEventListener("resize",i)});const d=u&&l?Po(u,i):null;let h=-1,y=null;a&&(y=new ResizeObserver(f=>{let[w]=f;w&&w.target===u&&y&&(y.unobserve(e),cancelAnimationFrame(h),h=requestAnimationFrame(()=>{var E;(E=y)==null||E.observe(e)})),i()}),u&&!r&&y.observe(u),y.observe(e));let v,x=r?Ct(n):null;r&&m();function m(){const f=Ct(n);x&&(f.x!==x.x||f.y!==x.y||f.width!==x.width||f.height!==x.height)&&i(),x=f,v=requestAnimationFrame(m)}return i(),()=>{var f;p.forEach(w=>{t&&w.removeEventListener("scroll",i),s&&w.removeEventListener("resize",i)}),d==null||d(),(f=y)==null||f.disconnect(),y=null,r&&cancelAnimationFrame(v)}}var Ze=g.useLayoutEffect,Lo=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],Ae=function(){};function No(n,e){return e?e[0]==="-"?n+e:n+"__"+e:n}function jo(n,e){for(var i=arguments.length,o=new Array(i>2?i-2:0),t=2;t<i;t++)o[t-2]=arguments[t];var s=[].concat(o);if(e&&n)for(var a in e)e.hasOwnProperty(a)&&e[a]&&s.push("".concat(No(n,a)));return s.filter(function(l){return l}).map(function(l){return String(l).trim()}).join(" ")}var St=function(e){return Go(e)?e.filter(Boolean):Ut(e)==="object"&&e!==null?[e]:[]},dn=function(e){e.className,e.clearValue,e.cx,e.getStyles,e.getClassNames,e.getValue,e.hasValue,e.isMulti,e.isRtl,e.options,e.selectOption,e.selectProps,e.setValue,e.theme;var i=ie(e,Lo);return M({},i)},T=function(e,i,o){var t=e.cx,s=e.getStyles,a=e.getClassNames,l=e.className;return{css:s(i,e),className:t(o??{},a(i,e),l)}};function Re(n){return[document.documentElement,document.body,window].indexOf(n)>-1}function To(n){return Re(n)?window.innerHeight:n.clientHeight}function pn(n){return Re(n)?window.pageYOffset:n.scrollTop}function Pe(n,e){if(Re(n)){window.scrollTo(0,e);return}n.scrollTop=e}function Ro(n){var e=getComputedStyle(n),i=e.position==="absolute",o=/(auto|scroll)/;if(e.position==="fixed")return document.documentElement;for(var t=n;t=t.parentElement;)if(e=getComputedStyle(t),!(i&&e.position==="static")&&o.test(e.overflow+e.overflowY+e.overflowX))return t;return document.documentElement}function Bo(n,e,i,o){return i*((n=n/o-1)*n*n+1)+e}function ye(n,e){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:Ae,t=pn(n),s=e-t,a=10,l=0;function r(){l+=a;var u=Bo(l,t,s,i);Pe(n,u),l<i?window.requestAnimationFrame(r):o(n)}r()}function Ft(n,e){var i=n.getBoundingClientRect(),o=e.getBoundingClientRect(),t=e.offsetHeight/3;o.bottom+t>i.bottom?Pe(n,Math.min(e.offsetTop+e.clientHeight-n.offsetHeight+t,n.scrollHeight)):o.top-t<i.top&&Pe(n,Math.max(e.offsetTop-t,0))}function Wo(n){var e=n.getBoundingClientRect();return{bottom:e.bottom,height:e.height,left:e.left,right:e.right,top:e.top,width:e.width}}function Mt(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function $o(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var fn=!1,Ho={get passive(){return fn=!0}},we=typeof window<"u"?window:{};we.addEventListener&&we.removeEventListener&&(we.addEventListener("p",Ae,Ho),we.removeEventListener("p",Ae,!1));var zo=fn;function _o(n){return n!=null}function Go(n){return Array.isArray(n)}function Ee(n,e,i){return n?e:i}var Uo=function(e){for(var i=arguments.length,o=new Array(i>1?i-1:0),t=1;t<i;t++)o[t-1]=arguments[t];var s=Object.entries(e).filter(function(a){var l=ne(a,1),r=l[0];return!o.includes(r)});return s.reduce(function(a,l){var r=ne(l,2),u=r[0],p=r[1];return a[u]=p,a},{})},Yo=["children","innerProps"],qo=["children","innerProps"];function Xo(n){var e=n.maxHeight,i=n.menuEl,o=n.minHeight,t=n.placement,s=n.shouldScroll,a=n.isFixedPosition,l=n.controlHeight,r=Ro(i),u={placement:"bottom",maxHeight:e};if(!i||!i.offsetParent)return u;var p=r.getBoundingClientRect(),d=p.height,h=i.getBoundingClientRect(),y=h.bottom,v=h.height,x=h.top,m=i.offsetParent.getBoundingClientRect(),f=m.top,w=a?window.innerHeight:To(r),E=pn(r),D=parseInt(getComputedStyle(i).marginBottom,10),I=parseInt(getComputedStyle(i).marginTop,10),C=f-I,O=w-x,b=C+E,A=d-E-x,P=y-w+E+D,W=E+x-I,N=160;switch(t){case"auto":case"bottom":if(O>=v)return{placement:"bottom",maxHeight:e};if(A>=v&&!a)return s&&ye(r,P,N),{placement:"bottom",maxHeight:e};if(!a&&A>=o||a&&O>=o){s&&ye(r,P,N);var Y=a?O-D:A-D;return{placement:"bottom",maxHeight:Y}}if(t==="auto"||a){var R=e,j=a?C:b;return j>=o&&(R=Math.min(j-D-l,e)),{placement:"top",maxHeight:R}}if(t==="bottom")return s&&Pe(r,P),{placement:"bottom",maxHeight:e};break;case"top":if(C>=v)return{placement:"top",maxHeight:e};if(b>=v&&!a)return s&&ye(r,W,N),{placement:"top",maxHeight:e};if(!a&&b>=o||a&&C>=o){var V=e;return(!a&&b>=o||a&&C>=o)&&(V=a?C-I:b-I),s&&ye(r,W,N),{placement:"top",maxHeight:V}}return{placement:"bottom",maxHeight:e};default:throw new Error('Invalid placement provided "'.concat(t,'".'))}return u}function Ko(n){var e={bottom:"top",top:"bottom"};return n?e[n]:"bottom"}var mn=function(e){return e==="auto"?"bottom":e},Qo=function(e,i){var o,t=e.placement,s=e.theme,a=s.borderRadius,l=s.spacing,r=s.colors;return M((o={label:"menu"},ge(o,Ko(t),"100%"),ge(o,"position","absolute"),ge(o,"width","100%"),ge(o,"zIndex",1),o),i?{}:{backgroundColor:r.neutral0,borderRadius:a,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:l.menuGutter,marginTop:l.menuGutter})},hn=g.createContext(null),Zo=function(e){var i=e.children,o=e.minMenuHeight,t=e.maxMenuHeight,s=e.menuPlacement,a=e.menuPosition,l=e.menuShouldScrollIntoView,r=e.theme,u=g.useContext(hn)||{},p=u.setPortalPlacement,d=g.useRef(null),h=g.useState(t),y=ne(h,2),v=y[0],x=y[1],m=g.useState(null),f=ne(m,2),w=f[0],E=f[1],D=r.spacing.controlHeight;return Ze(function(){var I=d.current;if(I){var C=a==="fixed",O=l&&!C,b=Xo({maxHeight:t,menuEl:I,minHeight:o,placement:s,shouldScroll:O,isFixedPosition:C,controlHeight:D});x(b.maxHeight),E(b.placement),p==null||p(b.placement)}},[t,s,a,l,o,p,D]),i({ref:d,placerProps:M(M({},e),{},{placement:w||mn(s),maxHeight:v})})},Jo=function(e){var i=e.children,o=e.innerRef,t=e.innerProps;return F("div",k({},T(e,"menu",{menu:!0}),{ref:o},t),i)},ea=Jo,ta=function(e,i){var o=e.maxHeight,t=e.theme.spacing.baseUnit;return M({maxHeight:o,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},i?{}:{paddingBottom:t,paddingTop:t})},na=function(e){var i=e.children,o=e.innerProps,t=e.innerRef,s=e.isMulti;return F("div",k({},T(e,"menuList",{"menu-list":!0,"menu-list--is-multi":s}),{ref:t},o),i)},gn=function(e,i){var o=e.theme,t=o.spacing.baseUnit,s=o.colors;return M({textAlign:"center"},i?{}:{color:s.neutral40,padding:"".concat(t*2,"px ").concat(t*3,"px")})},ia=gn,oa=gn,aa=function(e){var i=e.children,o=i===void 0?"No options":i,t=e.innerProps,s=ie(e,Yo);return F("div",k({},T(M(M({},s),{},{children:o,innerProps:t}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),t),o)},ra=function(e){var i=e.children,o=i===void 0?"Loading...":i,t=e.innerProps,s=ie(e,qo);return F("div",k({},T(M(M({},s),{},{children:o,innerProps:t}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),t),o)},sa=function(e){var i=e.rect,o=e.offset,t=e.position;return{left:i.left,position:t,top:o,width:i.width,zIndex:1}},ua=function(e){var i=e.appendTo,o=e.children,t=e.controlElement,s=e.innerProps,a=e.menuPlacement,l=e.menuPosition,r=g.useRef(null),u=g.useRef(null),p=g.useState(mn(a)),d=ne(p,2),h=d[0],y=d[1],v=g.useMemo(function(){return{setPortalPlacement:y}},[]),x=g.useState(null),m=ne(x,2),f=m[0],w=m[1],E=g.useCallback(function(){if(t){var O=Wo(t),b=l==="fixed"?0:window.pageYOffset,A=O[h]+b;(A!==(f==null?void 0:f.offset)||O.left!==(f==null?void 0:f.rect.left)||O.width!==(f==null?void 0:f.rect.width))&&w({offset:A,rect:O})}},[t,l,h,f==null?void 0:f.offset,f==null?void 0:f.rect.left,f==null?void 0:f.rect.width]);Ze(function(){E()},[E]);var D=g.useCallback(function(){typeof u.current=="function"&&(u.current(),u.current=null),t&&r.current&&(u.current=Vo(t,r.current,E,{elementResize:"ResizeObserver"in window}))},[t,E]);Ze(function(){D()},[D]);var I=g.useCallback(function(O){r.current=O,D()},[D]);if(!i&&l!=="fixed"||!f)return null;var C=F("div",k({ref:I},T(M(M({},e),{},{offset:f.offset,position:l,rect:f.rect}),"menuPortal",{"menu-portal":!0}),s),o);return F(hn.Provider,{value:v},i?zn.createPortal(C,i):C)},la=function(e){var i=e.isDisabled,o=e.isRtl;return{label:"container",direction:o?"rtl":void 0,pointerEvents:i?"none":void 0,position:"relative"}},ca=function(e){var i=e.children,o=e.innerProps,t=e.isDisabled,s=e.isRtl;return F("div",k({},T(e,"container",{"--is-disabled":t,"--is-rtl":s}),o),i)},da=function(e,i){var o=e.theme.spacing,t=e.isMulti,s=e.hasValue,a=e.selectProps.controlShouldRenderValue;return M({alignItems:"center",display:t&&s&&a?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},i?{}:{padding:"".concat(o.baseUnit/2,"px ").concat(o.baseUnit*2,"px")})},pa=function(e){var i=e.children,o=e.innerProps,t=e.isMulti,s=e.hasValue;return F("div",k({},T(e,"valueContainer",{"value-container":!0,"value-container--is-multi":t,"value-container--has-value":s}),o),i)},fa=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},ma=function(e){var i=e.children,o=e.innerProps;return F("div",k({},T(e,"indicatorsContainer",{indicators:!0}),o),i)},Dt,ha=["size"],ga=["innerProps","isRtl","size"],va={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},vn=function(e){var i=e.size,o=ie(e,ha);return F("svg",k({height:i,width:i,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:va},o))},pt=function(e){return F(vn,k({size:20},e),F("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},xn=function(e){return F(vn,k({size:20},e),F("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},bn=function(e,i){var o=e.isFocused,t=e.theme,s=t.spacing.baseUnit,a=t.colors;return M({label:"indicatorContainer",display:"flex",transition:"color 150ms"},i?{}:{color:o?a.neutral60:a.neutral20,padding:s*2,":hover":{color:o?a.neutral80:a.neutral40}})},xa=bn,ba=function(e){var i=e.children,o=e.innerProps;return F("div",k({},T(e,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),o),i||F(xn,null))},ya=bn,wa=function(e){var i=e.children,o=e.innerProps;return F("div",k({},T(e,"clearIndicator",{indicator:!0,"clear-indicator":!0}),o),i||F(pt,null))},Ea=function(e,i){var o=e.isDisabled,t=e.theme,s=t.spacing.baseUnit,a=t.colors;return M({label:"indicatorSeparator",alignSelf:"stretch",width:1},i?{}:{backgroundColor:o?a.neutral10:a.neutral20,marginBottom:s*2,marginTop:s*2})},Ca=function(e){var i=e.innerProps;return F("span",k({},i,T(e,"indicatorSeparator",{"indicator-separator":!0})))},Sa=ni(Dt||(Dt=wo([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),Fa=function(e,i){var o=e.isFocused,t=e.size,s=e.theme,a=s.colors,l=s.spacing.baseUnit;return M({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:t,lineHeight:1,marginRight:t,textAlign:"center",verticalAlign:"middle"},i?{}:{color:o?a.neutral60:a.neutral20,padding:l*2})},He=function(e){var i=e.delay,o=e.offset;return F("span",{css:nt({animation:"".concat(Sa," 1s ease-in-out ").concat(i,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:o?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},Ma=function(e){var i=e.innerProps,o=e.isRtl,t=e.size,s=t===void 0?4:t,a=ie(e,ga);return F("div",k({},T(M(M({},a),{},{innerProps:i,isRtl:o,size:s}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),i),F(He,{delay:0,offset:o}),F(He,{delay:160,offset:!0}),F(He,{delay:320,offset:!o}))},Da=function(e,i){var o=e.isDisabled,t=e.isFocused,s=e.theme,a=s.colors,l=s.borderRadius,r=s.spacing;return M({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:r.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},i?{}:{backgroundColor:o?a.neutral5:a.neutral0,borderColor:o?a.neutral10:t?a.primary:a.neutral20,borderRadius:l,borderStyle:"solid",borderWidth:1,boxShadow:t?"0 0 0 1px ".concat(a.primary):void 0,"&:hover":{borderColor:t?a.primary:a.neutral30}})},Oa=function(e){var i=e.children,o=e.isDisabled,t=e.isFocused,s=e.innerRef,a=e.innerProps,l=e.menuIsOpen;return F("div",k({ref:s},T(e,"control",{control:!0,"control--is-disabled":o,"control--is-focused":t,"control--menu-is-open":l}),a,{"aria-disabled":o||void 0}),i)},ka=Oa,Ia=["data"],Aa=function(e,i){var o=e.theme.spacing;return i?{}:{paddingBottom:o.baseUnit*2,paddingTop:o.baseUnit*2}},Pa=function(e){var i=e.children,o=e.cx,t=e.getStyles,s=e.getClassNames,a=e.Heading,l=e.headingProps,r=e.innerProps,u=e.label,p=e.theme,d=e.selectProps;return F("div",k({},T(e,"group",{group:!0}),r),F(a,k({},l,{selectProps:d,theme:p,getStyles:t,getClassNames:s,cx:o}),u),F("div",null,i))},Va=function(e,i){var o=e.theme,t=o.colors,s=o.spacing;return M({label:"group",cursor:"default",display:"block"},i?{}:{color:t.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:s.baseUnit*3,paddingRight:s.baseUnit*3,textTransform:"uppercase"})},La=function(e){var i=dn(e);i.data;var o=ie(i,Ia);return F("div",k({},T(e,"groupHeading",{"group-heading":!0}),o))},Na=Pa,ja=["innerRef","isDisabled","isHidden","inputClassName"],Ta=function(e,i){var o=e.isDisabled,t=e.value,s=e.theme,a=s.spacing,l=s.colors;return M(M({visibility:o?"hidden":"visible",transform:t?"translateZ(0)":""},Ra),i?{}:{margin:a.baseUnit/2,paddingBottom:a.baseUnit/2,paddingTop:a.baseUnit/2,color:l.neutral80})},yn={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},Ra={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":M({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},yn)},Ba=function(e){return M({label:"input",color:"inherit",background:0,opacity:e?0:1,width:"100%"},yn)},Wa=function(e){var i=e.cx,o=e.value,t=dn(e),s=t.innerRef,a=t.isDisabled,l=t.isHidden,r=t.inputClassName,u=ie(t,ja);return F("div",k({},T(e,"input",{"input-container":!0}),{"data-value":o||""}),F("input",k({className:i({input:!0},r),ref:s,style:Ba(l),disabled:a},u)))},$a=Wa,Ha=function(e,i){var o=e.theme,t=o.spacing,s=o.borderRadius,a=o.colors;return M({label:"multiValue",display:"flex",minWidth:0},i?{}:{backgroundColor:a.neutral10,borderRadius:s/2,margin:t.baseUnit/2})},za=function(e,i){var o=e.theme,t=o.borderRadius,s=o.colors,a=e.cropWithEllipsis;return M({overflow:"hidden",textOverflow:a||a===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},i?{}:{borderRadius:t/2,color:s.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},_a=function(e,i){var o=e.theme,t=o.spacing,s=o.borderRadius,a=o.colors,l=e.isFocused;return M({alignItems:"center",display:"flex"},i?{}:{borderRadius:s/2,backgroundColor:l?a.dangerLight:void 0,paddingLeft:t.baseUnit,paddingRight:t.baseUnit,":hover":{backgroundColor:a.dangerLight,color:a.danger}})},wn=function(e){var i=e.children,o=e.innerProps;return F("div",o,i)},Ga=wn,Ua=wn;function Ya(n){var e=n.children,i=n.innerProps;return F("div",k({role:"button"},i),e||F(pt,{size:14}))}var qa=function(e){var i=e.children,o=e.components,t=e.data,s=e.innerProps,a=e.isDisabled,l=e.removeProps,r=e.selectProps,u=o.Container,p=o.Label,d=o.Remove;return F(u,{data:t,innerProps:M(M({},T(e,"multiValue",{"multi-value":!0,"multi-value--is-disabled":a})),s),selectProps:r},F(p,{data:t,innerProps:M({},T(e,"multiValueLabel",{"multi-value__label":!0})),selectProps:r},i),F(d,{data:t,innerProps:M(M({},T(e,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(i||"option")},l),selectProps:r}))},Xa=qa,Ka=function(e,i){var o=e.isDisabled,t=e.isFocused,s=e.isSelected,a=e.theme,l=a.spacing,r=a.colors;return M({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},i?{}:{backgroundColor:s?r.primary:t?r.primary25:"transparent",color:o?r.neutral20:s?r.neutral0:"inherit",padding:"".concat(l.baseUnit*2,"px ").concat(l.baseUnit*3,"px"),":active":{backgroundColor:o?void 0:s?r.primary:r.primary50}})},Qa=function(e){var i=e.children,o=e.isDisabled,t=e.isFocused,s=e.isSelected,a=e.innerRef,l=e.innerProps;return F("div",k({},T(e,"option",{option:!0,"option--is-disabled":o,"option--is-focused":t,"option--is-selected":s}),{ref:a,"aria-disabled":o},l),i)},Za=Qa,Ja=function(e,i){var o=e.theme,t=o.spacing,s=o.colors;return M({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},i?{}:{color:s.neutral50,marginLeft:t.baseUnit/2,marginRight:t.baseUnit/2})},er=function(e){var i=e.children,o=e.innerProps;return F("div",k({},T(e,"placeholder",{placeholder:!0}),o),i)},tr=er,nr=function(e,i){var o=e.isDisabled,t=e.theme,s=t.spacing,a=t.colors;return M({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},i?{}:{color:o?a.neutral40:a.neutral80,marginLeft:s.baseUnit/2,marginRight:s.baseUnit/2})},ir=function(e){var i=e.children,o=e.isDisabled,t=e.innerProps;return F("div",k({},T(e,"singleValue",{"single-value":!0,"single-value--is-disabled":o}),t),i)},or=ir,ar={ClearIndicator:wa,Control:ka,DropdownIndicator:ba,DownChevron:xn,CrossIcon:pt,Group:Na,GroupHeading:La,IndicatorsContainer:ma,IndicatorSeparator:Ca,Input:$a,LoadingIndicator:Ma,Menu:ea,MenuList:na,MenuPortal:ua,LoadingMessage:ra,NoOptionsMessage:aa,MultiValue:Xa,MultiValueContainer:Ga,MultiValueLabel:Ua,MultiValueRemove:Ya,Option:Za,Placeholder:tr,SelectContainer:ca,SingleValue:or,ValueContainer:pa},rr=function(e){return M(M({},ar),e.components)},Ot=Number.isNaN||function(e){return typeof e=="number"&&e!==e};function sr(n,e){return!!(n===e||Ot(n)&&Ot(e))}function ur(n,e){if(n.length!==e.length)return!1;for(var i=0;i<n.length;i++)if(!sr(n[i],e[i]))return!1;return!0}function lr(n,e){e===void 0&&(e=ur);var i=null;function o(){for(var t=[],s=0;s<arguments.length;s++)t[s]=arguments[s];if(i&&i.lastThis===this&&e(t,i.lastArgs))return i.lastResult;var a=n.apply(this,t);return i={lastResult:a,lastArgs:t,lastThis:this},a}return o.clear=function(){i=null},o}var cr={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},dr=function(e){return F("span",k({css:cr},e))},kt=dr,pr={guidance:function(e){var i=e.isSearchable,o=e.isMulti,t=e.tabSelectsValue,s=e.context,a=e.isInitialFocus;switch(s){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(t?", press Tab to select the option and exit the menu":"",".");case"input":return a?"".concat(e["aria-label"]||"Select"," is focused ").concat(i?",type to refine list":"",", press Down to open the menu, ").concat(o?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(e){var i=e.action,o=e.label,t=o===void 0?"":o,s=e.labels,a=e.isDisabled;switch(i){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(t,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(s.length>1?"s":""," ").concat(s.join(","),", selected.");case"select-option":return a?"option ".concat(t," is disabled. Select another option."):"option ".concat(t,", selected.");default:return""}},onFocus:function(e){var i=e.context,o=e.focused,t=e.options,s=e.label,a=s===void 0?"":s,l=e.selectValue,r=e.isDisabled,u=e.isSelected,p=e.isAppleDevice,d=function(x,m){return x&&x.length?"".concat(x.indexOf(m)+1," of ").concat(x.length):""};if(i==="value"&&l)return"value ".concat(a," focused, ").concat(d(l,o),".");if(i==="menu"&&p){var h=r?" disabled":"",y="".concat(u?" selected":"").concat(h);return"".concat(a).concat(y,", ").concat(d(t,o),".")}return""},onFilter:function(e){var i=e.inputValue,o=e.resultsMessage;return"".concat(o).concat(i?" for search term "+i:"",".")}},fr=function(e){var i=e.ariaSelection,o=e.focusedOption,t=e.focusedValue,s=e.focusableOptions,a=e.isFocused,l=e.selectValue,r=e.selectProps,u=e.id,p=e.isAppleDevice,d=r.ariaLiveMessages,h=r.getOptionLabel,y=r.inputValue,v=r.isMulti,x=r.isOptionDisabled,m=r.isSearchable,f=r.menuIsOpen,w=r.options,E=r.screenReaderStatus,D=r.tabSelectsValue,I=r.isLoading,C=r["aria-label"],O=r["aria-live"],b=g.useMemo(function(){return M(M({},pr),d||{})},[d]),A=g.useMemo(function(){var j="";if(i&&b.onChange){var V=i.option,G=i.options,z=i.removedValue,J=i.removedValues,X=i.value,se=function(te){return Array.isArray(te)?null:te},L=z||V||se(X),$=L?h(L):"",B=G||J||void 0,oe=B?B.map(h):[],K=M({isDisabled:L&&x(L,l),label:$,labels:oe},i);j=b.onChange(K)}return j},[i,b,x,l,h]),P=g.useMemo(function(){var j="",V=o||t,G=!!(o&&l&&l.includes(o));if(V&&b.onFocus){var z={focused:V,label:h(V),isDisabled:x(V,l),isSelected:G,options:s,context:V===o?"menu":"value",selectValue:l,isAppleDevice:p};j=b.onFocus(z)}return j},[o,t,h,x,b,s,l,p]),W=g.useMemo(function(){var j="";if(f&&w.length&&!I&&b.onFilter){var V=E({count:s.length});j=b.onFilter({inputValue:y,resultsMessage:V})}return j},[s,y,f,b,w,E,I]),N=(i==null?void 0:i.action)==="initial-input-focus",Y=g.useMemo(function(){var j="";if(b.guidance){var V=t?"value":f?"menu":"input";j=b.guidance({"aria-label":C,context:V,isDisabled:o&&x(o,l),isMulti:v,isSearchable:m,tabSelectsValue:D,isInitialFocus:N})}return j},[C,o,t,v,x,m,f,b,l,D,N]),R=F(g.Fragment,null,F("span",{id:"aria-selection"},A),F("span",{id:"aria-focused"},P),F("span",{id:"aria-results"},W),F("span",{id:"aria-guidance"},Y));return F(g.Fragment,null,F(kt,{id:u},N&&R),F(kt,{"aria-live":O,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},a&&!N&&R))},mr=fr,Je=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],hr=new RegExp("["+Je.map(function(n){return n.letters}).join("")+"]","g"),En={};for(var ze=0;ze<Je.length;ze++)for(var _e=Je[ze],Ge=0;Ge<_e.letters.length;Ge++)En[_e.letters[Ge]]=_e.base;var Cn=function(e){return e.replace(hr,function(i){return En[i]})},gr=lr(Cn),It=function(e){return e.replace(/^\s+|\s+$/g,"")},vr=function(e){return"".concat(e.label," ").concat(e.value)},xr=function(e){return function(i,o){if(i.data.__isNew__)return!0;var t=M({ignoreCase:!0,ignoreAccents:!0,stringify:vr,trim:!0,matchFrom:"any"},e),s=t.ignoreCase,a=t.ignoreAccents,l=t.stringify,r=t.trim,u=t.matchFrom,p=r?It(o):o,d=r?It(l(i)):l(i);return s&&(p=p.toLowerCase(),d=d.toLowerCase()),a&&(p=gr(p),d=Cn(d)),u==="start"?d.substr(0,p.length)===p:d.indexOf(p)>-1}},br=["innerRef"];function yr(n){var e=n.innerRef,i=ie(n,br),o=Uo(i,"onExited","in","enter","exit","appear");return F("input",k({ref:e},o,{css:nt({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var wr=function(e){e.cancelable&&e.preventDefault(),e.stopPropagation()};function Er(n){var e=n.isEnabled,i=n.onBottomArrive,o=n.onBottomLeave,t=n.onTopArrive,s=n.onTopLeave,a=g.useRef(!1),l=g.useRef(!1),r=g.useRef(0),u=g.useRef(null),p=g.useCallback(function(m,f){if(u.current!==null){var w=u.current,E=w.scrollTop,D=w.scrollHeight,I=w.clientHeight,C=u.current,O=f>0,b=D-I-E,A=!1;b>f&&a.current&&(o&&o(m),a.current=!1),O&&l.current&&(s&&s(m),l.current=!1),O&&f>b?(i&&!a.current&&i(m),C.scrollTop=D,A=!0,a.current=!0):!O&&-f>E&&(t&&!l.current&&t(m),C.scrollTop=0,A=!0,l.current=!0),A&&wr(m)}},[i,o,t,s]),d=g.useCallback(function(m){p(m,m.deltaY)},[p]),h=g.useCallback(function(m){r.current=m.changedTouches[0].clientY},[]),y=g.useCallback(function(m){var f=r.current-m.changedTouches[0].clientY;p(m,f)},[p]),v=g.useCallback(function(m){if(m){var f=zo?{passive:!1}:!1;m.addEventListener("wheel",d,f),m.addEventListener("touchstart",h,f),m.addEventListener("touchmove",y,f)}},[y,h,d]),x=g.useCallback(function(m){m&&(m.removeEventListener("wheel",d,!1),m.removeEventListener("touchstart",h,!1),m.removeEventListener("touchmove",y,!1))},[y,h,d]);return g.useEffect(function(){if(e){var m=u.current;return v(m),function(){x(m)}}},[e,v,x]),function(m){u.current=m}}var At=["boxSizing","height","overflow","paddingRight","position"],Pt={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function Vt(n){n.preventDefault()}function Lt(n){n.stopPropagation()}function Nt(){var n=this.scrollTop,e=this.scrollHeight,i=n+this.offsetHeight;n===0?this.scrollTop=1:i===e&&(this.scrollTop=n-1)}function jt(){return"ontouchstart"in window||navigator.maxTouchPoints}var Tt=!!(typeof window<"u"&&window.document&&window.document.createElement),he=0,ue={capture:!1,passive:!1};function Cr(n){var e=n.isEnabled,i=n.accountForScrollbars,o=i===void 0?!0:i,t=g.useRef({}),s=g.useRef(null),a=g.useCallback(function(r){if(Tt){var u=document.body,p=u&&u.style;if(o&&At.forEach(function(v){var x=p&&p[v];t.current[v]=x}),o&&he<1){var d=parseInt(t.current.paddingRight,10)||0,h=document.body?document.body.clientWidth:0,y=window.innerWidth-h+d||0;Object.keys(Pt).forEach(function(v){var x=Pt[v];p&&(p[v]=x)}),p&&(p.paddingRight="".concat(y,"px"))}u&&jt()&&(u.addEventListener("touchmove",Vt,ue),r&&(r.addEventListener("touchstart",Nt,ue),r.addEventListener("touchmove",Lt,ue))),he+=1}},[o]),l=g.useCallback(function(r){if(Tt){var u=document.body,p=u&&u.style;he=Math.max(he-1,0),o&&he<1&&At.forEach(function(d){var h=t.current[d];p&&(p[d]=h)}),u&&jt()&&(u.removeEventListener("touchmove",Vt,ue),r&&(r.removeEventListener("touchstart",Nt,ue),r.removeEventListener("touchmove",Lt,ue)))}},[o]);return g.useEffect(function(){if(e){var r=s.current;return a(r),function(){l(r)}}},[e,a,l]),function(r){s.current=r}}var Sr=function(e){var i=e.target;return i.ownerDocument.activeElement&&i.ownerDocument.activeElement.blur()},Fr={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function Mr(n){var e=n.children,i=n.lockEnabled,o=n.captureEnabled,t=o===void 0?!0:o,s=n.onBottomArrive,a=n.onBottomLeave,l=n.onTopArrive,r=n.onTopLeave,u=Er({isEnabled:t,onBottomArrive:s,onBottomLeave:a,onTopArrive:l,onTopLeave:r}),p=Cr({isEnabled:i}),d=function(y){u(y),p(y)};return F(g.Fragment,null,i&&F("div",{onClick:Sr,css:Fr}),e(d))}var Dr={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},Or=function(e){var i=e.name,o=e.onFocus;return F("input",{required:!0,name:i,tabIndex:-1,"aria-hidden":"true",onFocus:o,css:Dr,value:"",onChange:function(){}})},kr=Or;function ft(n){var e;return typeof window<"u"&&window.navigator!=null?n.test(((e=window.navigator.userAgentData)===null||e===void 0?void 0:e.platform)||window.navigator.platform):!1}function Ir(){return ft(/^iPhone/i)}function Sn(){return ft(/^Mac/i)}function Ar(){return ft(/^iPad/i)||Sn()&&navigator.maxTouchPoints>1}function Pr(){return Ir()||Ar()}function Vr(){return Sn()||Pr()}var Lr=function(e){return e.label},Nr=function(e){return e.label},jr=function(e){return e.value},Tr=function(e){return!!e.isDisabled},Rr={clearIndicator:ya,container:la,control:Da,dropdownIndicator:xa,group:Aa,groupHeading:Va,indicatorsContainer:fa,indicatorSeparator:Ea,input:Ta,loadingIndicator:Fa,loadingMessage:oa,menu:Qo,menuList:ta,menuPortal:sa,multiValue:Ha,multiValueLabel:za,multiValueRemove:_a,noOptionsMessage:ia,option:Ka,placeholder:Ja,singleValue:nr,valueContainer:da},Br={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},Wr=4,Fn=4,$r=38,Hr=Fn*2,zr={baseUnit:Fn,controlHeight:$r,menuGutter:Hr},Ue={borderRadius:Wr,colors:Br,spacing:zr},_r={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:Mt(),captureMenuScroll:!Mt(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:xr(),formatGroupLabel:Lr,getOptionLabel:Nr,getOptionValue:jr,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:Tr,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!$o(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(e){var i=e.count;return"".concat(i," result").concat(i!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function Rt(n,e,i,o){var t=On(n,e,i),s=kn(n,e,i),a=Dn(n,e),l=Ve(n,e);return{type:"option",data:e,isDisabled:t,isSelected:s,label:a,value:l,index:o}}function Me(n,e){return n.options.map(function(i,o){if("options"in i){var t=i.options.map(function(a,l){return Rt(n,a,e,l)}).filter(function(a){return Wt(n,a)});return t.length>0?{type:"group",data:i,options:t,index:o}:void 0}var s=Rt(n,i,e,o);return Wt(n,s)?s:void 0}).filter(_o)}function Mn(n){return n.reduce(function(e,i){return i.type==="group"?e.push.apply(e,ut(i.options.map(function(o){return o.data}))):e.push(i.data),e},[])}function Bt(n,e){return n.reduce(function(i,o){return o.type==="group"?i.push.apply(i,ut(o.options.map(function(t){return{data:t.data,id:"".concat(e,"-").concat(o.index,"-").concat(t.index)}}))):i.push({data:o.data,id:"".concat(e,"-").concat(o.index)}),i},[])}function Gr(n,e){return Mn(Me(n,e))}function Wt(n,e){var i=n.inputValue,o=i===void 0?"":i,t=e.data,s=e.isSelected,a=e.label,l=e.value;return(!An(n)||!s)&&In(n,{label:a,value:l,data:t},o)}function Ur(n,e){var i=n.focusedValue,o=n.selectValue,t=o.indexOf(i);if(t>-1){var s=e.indexOf(i);if(s>-1)return i;if(t<e.length)return e[t]}return null}function Yr(n,e){var i=n.focusedOption;return i&&e.indexOf(i)>-1?i:e[0]}var Ye=function(e,i){var o,t=(o=e.find(function(s){return s.data===i}))===null||o===void 0?void 0:o.id;return t||null},Dn=function(e,i){return e.getOptionLabel(i)},Ve=function(e,i){return e.getOptionValue(i)};function On(n,e,i){return typeof n.isOptionDisabled=="function"?n.isOptionDisabled(e,i):!1}function kn(n,e,i){if(i.indexOf(e)>-1)return!0;if(typeof n.isOptionSelected=="function")return n.isOptionSelected(e,i);var o=Ve(n,e);return i.some(function(t){return Ve(n,t)===o})}function In(n,e,i){return n.filterOption?n.filterOption(e,i):!0}var An=function(e){var i=e.hideSelectedOptions,o=e.isMulti;return i===void 0?o:i},qr=1,Pn=function(n){mo(i,n);var e=vo(i);function i(o){var t;if(_n(this,i),t=e.call(this,o),t.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:""},t.blockOptionHover=!1,t.isComposing=!1,t.commonProps=void 0,t.initialTouchX=0,t.initialTouchY=0,t.openAfterFocus=!1,t.scrollToFocusedOptionOnUpdate=!1,t.userIsDragging=void 0,t.isAppleDevice=Vr(),t.controlRef=null,t.getControlRef=function(r){t.controlRef=r},t.focusedOptionRef=null,t.getFocusedOptionRef=function(r){t.focusedOptionRef=r},t.menuListRef=null,t.getMenuListRef=function(r){t.menuListRef=r},t.inputRef=null,t.getInputRef=function(r){t.inputRef=r},t.focus=t.focusInput,t.blur=t.blurInput,t.onChange=function(r,u){var p=t.props,d=p.onChange,h=p.name;u.name=h,t.ariaOnChange(r,u),d(r,u)},t.setValue=function(r,u,p){var d=t.props,h=d.closeMenuOnSelect,y=d.isMulti,v=d.inputValue;t.onInputChange("",{action:"set-value",prevInputValue:v}),h&&(t.setState({inputIsHiddenAfterUpdate:!y}),t.onMenuClose()),t.setState({clearFocusValueOnUpdate:!0}),t.onChange(r,{action:u,option:p})},t.selectOption=function(r){var u=t.props,p=u.blurInputOnSelect,d=u.isMulti,h=u.name,y=t.state.selectValue,v=d&&t.isOptionSelected(r,y),x=t.isOptionDisabled(r,y);if(v){var m=t.getOptionValue(r);t.setValue(y.filter(function(f){return t.getOptionValue(f)!==m}),"deselect-option",r)}else if(!x)d?t.setValue([].concat(ut(y),[r]),"select-option",r):t.setValue(r,"select-option");else{t.ariaOnChange(r,{action:"select-option",option:r,name:h});return}p&&t.blurInput()},t.removeValue=function(r){var u=t.props.isMulti,p=t.state.selectValue,d=t.getOptionValue(r),h=p.filter(function(v){return t.getOptionValue(v)!==d}),y=Ee(u,h,h[0]||null);t.onChange(y,{action:"remove-value",removedValue:r}),t.focusInput()},t.clearValue=function(){var r=t.state.selectValue;t.onChange(Ee(t.props.isMulti,[],null),{action:"clear",removedValues:r})},t.popValue=function(){var r=t.props.isMulti,u=t.state.selectValue,p=u[u.length-1],d=u.slice(0,u.length-1),h=Ee(r,d,d[0]||null);t.onChange(h,{action:"pop-value",removedValue:p})},t.getFocusedOptionId=function(r){return Ye(t.state.focusableOptionsWithIds,r)},t.getFocusableOptionsWithIds=function(){return Bt(Me(t.props,t.state.selectValue),t.getElementId("option"))},t.getValue=function(){return t.state.selectValue},t.cx=function(){for(var r=arguments.length,u=new Array(r),p=0;p<r;p++)u[p]=arguments[p];return jo.apply(void 0,[t.props.classNamePrefix].concat(u))},t.getOptionLabel=function(r){return Dn(t.props,r)},t.getOptionValue=function(r){return Ve(t.props,r)},t.getStyles=function(r,u){var p=t.props.unstyled,d=Rr[r](u,p);d.boxSizing="border-box";var h=t.props.styles[r];return h?h(d,u):d},t.getClassNames=function(r,u){var p,d;return(p=(d=t.props.classNames)[r])===null||p===void 0?void 0:p.call(d,u)},t.getElementId=function(r){return"".concat(t.state.instancePrefix,"-").concat(r)},t.getComponents=function(){return rr(t.props)},t.buildCategorizedOptions=function(){return Me(t.props,t.state.selectValue)},t.getCategorizedOptions=function(){return t.props.menuIsOpen?t.buildCategorizedOptions():[]},t.buildFocusableOptions=function(){return Mn(t.buildCategorizedOptions())},t.getFocusableOptions=function(){return t.props.menuIsOpen?t.buildFocusableOptions():[]},t.ariaOnChange=function(r,u){t.setState({ariaSelection:M({value:r},u)})},t.onMenuMouseDown=function(r){r.button===0&&(r.stopPropagation(),r.preventDefault(),t.focusInput())},t.onMenuMouseMove=function(r){t.blockOptionHover=!1},t.onControlMouseDown=function(r){if(!r.defaultPrevented){var u=t.props.openMenuOnClick;t.state.isFocused?t.props.menuIsOpen?r.target.tagName!=="INPUT"&&r.target.tagName!=="TEXTAREA"&&t.onMenuClose():u&&t.openMenu("first"):(u&&(t.openAfterFocus=!0),t.focusInput()),r.target.tagName!=="INPUT"&&r.target.tagName!=="TEXTAREA"&&r.preventDefault()}},t.onDropdownIndicatorMouseDown=function(r){if(!(r&&r.type==="mousedown"&&r.button!==0)&&!t.props.isDisabled){var u=t.props,p=u.isMulti,d=u.menuIsOpen;t.focusInput(),d?(t.setState({inputIsHiddenAfterUpdate:!p}),t.onMenuClose()):t.openMenu("first"),r.preventDefault()}},t.onClearIndicatorMouseDown=function(r){r&&r.type==="mousedown"&&r.button!==0||(t.clearValue(),r.preventDefault(),t.openAfterFocus=!1,r.type==="touchend"?t.focusInput():setTimeout(function(){return t.focusInput()}))},t.onScroll=function(r){typeof t.props.closeMenuOnScroll=="boolean"?r.target instanceof HTMLElement&&Re(r.target)&&t.props.onMenuClose():typeof t.props.closeMenuOnScroll=="function"&&t.props.closeMenuOnScroll(r)&&t.props.onMenuClose()},t.onCompositionStart=function(){t.isComposing=!0},t.onCompositionEnd=function(){t.isComposing=!1},t.onTouchStart=function(r){var u=r.touches,p=u&&u.item(0);p&&(t.initialTouchX=p.clientX,t.initialTouchY=p.clientY,t.userIsDragging=!1)},t.onTouchMove=function(r){var u=r.touches,p=u&&u.item(0);if(p){var d=Math.abs(p.clientX-t.initialTouchX),h=Math.abs(p.clientY-t.initialTouchY),y=5;t.userIsDragging=d>y||h>y}},t.onTouchEnd=function(r){t.userIsDragging||(t.controlRef&&!t.controlRef.contains(r.target)&&t.menuListRef&&!t.menuListRef.contains(r.target)&&t.blurInput(),t.initialTouchX=0,t.initialTouchY=0)},t.onControlTouchEnd=function(r){t.userIsDragging||t.onControlMouseDown(r)},t.onClearIndicatorTouchEnd=function(r){t.userIsDragging||t.onClearIndicatorMouseDown(r)},t.onDropdownIndicatorTouchEnd=function(r){t.userIsDragging||t.onDropdownIndicatorMouseDown(r)},t.handleInputChange=function(r){var u=t.props.inputValue,p=r.currentTarget.value;t.setState({inputIsHiddenAfterUpdate:!1}),t.onInputChange(p,{action:"input-change",prevInputValue:u}),t.props.menuIsOpen||t.onMenuOpen()},t.onInputFocus=function(r){t.props.onFocus&&t.props.onFocus(r),t.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(t.openAfterFocus||t.props.openMenuOnFocus)&&t.openMenu("first"),t.openAfterFocus=!1},t.onInputBlur=function(r){var u=t.props.inputValue;if(t.menuListRef&&t.menuListRef.contains(document.activeElement)){t.inputRef.focus();return}t.props.onBlur&&t.props.onBlur(r),t.onInputChange("",{action:"input-blur",prevInputValue:u}),t.onMenuClose(),t.setState({focusedValue:null,isFocused:!1})},t.onOptionHover=function(r){if(!(t.blockOptionHover||t.state.focusedOption===r)){var u=t.getFocusableOptions(),p=u.indexOf(r);t.setState({focusedOption:r,focusedOptionId:p>-1?t.getFocusedOptionId(r):null})}},t.shouldHideSelectedOptions=function(){return An(t.props)},t.onValueInputFocus=function(r){r.preventDefault(),r.stopPropagation(),t.focus()},t.onKeyDown=function(r){var u=t.props,p=u.isMulti,d=u.backspaceRemovesValue,h=u.escapeClearsValue,y=u.inputValue,v=u.isClearable,x=u.isDisabled,m=u.menuIsOpen,f=u.onKeyDown,w=u.tabSelectsValue,E=u.openMenuOnFocus,D=t.state,I=D.focusedOption,C=D.focusedValue,O=D.selectValue;if(!x&&!(typeof f=="function"&&(f(r),r.defaultPrevented))){switch(t.blockOptionHover=!0,r.key){case"ArrowLeft":if(!p||y)return;t.focusValue("previous");break;case"ArrowRight":if(!p||y)return;t.focusValue("next");break;case"Delete":case"Backspace":if(y)return;if(C)t.removeValue(C);else{if(!d)return;p?t.popValue():v&&t.clearValue()}break;case"Tab":if(t.isComposing||r.shiftKey||!m||!w||!I||E&&t.isOptionSelected(I,O))return;t.selectOption(I);break;case"Enter":if(r.keyCode===229)break;if(m){if(!I||t.isComposing)return;t.selectOption(I);break}return;case"Escape":m?(t.setState({inputIsHiddenAfterUpdate:!1}),t.onInputChange("",{action:"menu-close",prevInputValue:y}),t.onMenuClose()):v&&h&&t.clearValue();break;case" ":if(y)return;if(!m){t.openMenu("first");break}if(!I)return;t.selectOption(I);break;case"ArrowUp":m?t.focusOption("up"):t.openMenu("last");break;case"ArrowDown":m?t.focusOption("down"):t.openMenu("first");break;case"PageUp":if(!m)return;t.focusOption("pageup");break;case"PageDown":if(!m)return;t.focusOption("pagedown");break;case"Home":if(!m)return;t.focusOption("first");break;case"End":if(!m)return;t.focusOption("last");break;default:return}r.preventDefault()}},t.state.instancePrefix="react-select-"+(t.props.instanceId||++qr),t.state.selectValue=St(o.value),o.menuIsOpen&&t.state.selectValue.length){var s=t.getFocusableOptionsWithIds(),a=t.buildFocusableOptions(),l=a.indexOf(t.state.selectValue[0]);t.state.focusableOptionsWithIds=s,t.state.focusedOption=a[l],t.state.focusedOptionId=Ye(s,a[l])}return t}return Gn(i,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&Ft(this.menuListRef,this.focusedOptionRef)}},{key:"componentDidUpdate",value:function(t){var s=this.props,a=s.isDisabled,l=s.menuIsOpen,r=this.state.isFocused;(r&&!a&&t.isDisabled||r&&l&&!t.menuIsOpen)&&this.focusInput(),r&&a&&!t.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!r&&!a&&t.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(Ft(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(t,s){this.props.onInputChange(t,s)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(t){var s=this,a=this.state,l=a.selectValue,r=a.isFocused,u=this.buildFocusableOptions(),p=t==="first"?0:u.length-1;if(!this.props.isMulti){var d=u.indexOf(l[0]);d>-1&&(p=d)}this.scrollToFocusedOptionOnUpdate=!(r&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:u[p],focusedOptionId:this.getFocusedOptionId(u[p])},function(){return s.onMenuOpen()})}},{key:"focusValue",value:function(t){var s=this.state,a=s.selectValue,l=s.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var r=a.indexOf(l);l||(r=-1);var u=a.length-1,p=-1;if(a.length){switch(t){case"previous":r===0?p=0:r===-1?p=u:p=r-1;break;case"next":r>-1&&r<u&&(p=r+1);break}this.setState({inputIsHidden:p!==-1,focusedValue:a[p]})}}}},{key:"focusOption",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",s=this.props.pageSize,a=this.state.focusedOption,l=this.getFocusableOptions();if(l.length){var r=0,u=l.indexOf(a);a||(u=-1),t==="up"?r=u>0?u-1:l.length-1:t==="down"?r=(u+1)%l.length:t==="pageup"?(r=u-s,r<0&&(r=0)):t==="pagedown"?(r=u+s,r>l.length-1&&(r=l.length-1)):t==="last"&&(r=l.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:l[r],focusedValue:null,focusedOptionId:this.getFocusedOptionId(l[r])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(Ue):M(M({},Ue),this.props.theme):Ue}},{key:"getCommonProps",value:function(){var t=this.clearValue,s=this.cx,a=this.getStyles,l=this.getClassNames,r=this.getValue,u=this.selectOption,p=this.setValue,d=this.props,h=d.isMulti,y=d.isRtl,v=d.options,x=this.hasValue();return{clearValue:t,cx:s,getStyles:a,getClassNames:l,getValue:r,hasValue:x,isMulti:h,isRtl:y,options:v,selectOption:u,selectProps:d,setValue:p,theme:this.getTheme()}}},{key:"hasValue",value:function(){var t=this.state.selectValue;return t.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var t=this.props,s=t.isClearable,a=t.isMulti;return s===void 0?a:s}},{key:"isOptionDisabled",value:function(t,s){return On(this.props,t,s)}},{key:"isOptionSelected",value:function(t,s){return kn(this.props,t,s)}},{key:"filterOption",value:function(t,s){return In(this.props,t,s)}},{key:"formatOptionLabel",value:function(t,s){if(typeof this.props.formatOptionLabel=="function"){var a=this.props.inputValue,l=this.state.selectValue;return this.props.formatOptionLabel(t,{context:s,inputValue:a,selectValue:l})}else return this.getOptionLabel(t)}},{key:"formatGroupLabel",value:function(t){return this.props.formatGroupLabel(t)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var t=this.props,s=t.isDisabled,a=t.isSearchable,l=t.inputId,r=t.inputValue,u=t.tabIndex,p=t.form,d=t.menuIsOpen,h=t.required,y=this.getComponents(),v=y.Input,x=this.state,m=x.inputIsHidden,f=x.ariaSelection,w=this.commonProps,E=l||this.getElementId("input"),D=M(M(M({"aria-autocomplete":"list","aria-expanded":d,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":h,role:"combobox","aria-activedescendant":this.isAppleDevice?void 0:this.state.focusedOptionId||""},d&&{"aria-controls":this.getElementId("listbox")}),!a&&{"aria-readonly":!0}),this.hasValue()?(f==null?void 0:f.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return a?g.createElement(v,k({},w,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:E,innerRef:this.getInputRef,isDisabled:s,isHidden:m,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:u,form:p,type:"text",value:r},D)):g.createElement(yr,k({id:E,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:Ae,onFocus:this.onInputFocus,disabled:s,tabIndex:u,inputMode:"none",form:p,value:""},D))}},{key:"renderPlaceholderOrValue",value:function(){var t=this,s=this.getComponents(),a=s.MultiValue,l=s.MultiValueContainer,r=s.MultiValueLabel,u=s.MultiValueRemove,p=s.SingleValue,d=s.Placeholder,h=this.commonProps,y=this.props,v=y.controlShouldRenderValue,x=y.isDisabled,m=y.isMulti,f=y.inputValue,w=y.placeholder,E=this.state,D=E.selectValue,I=E.focusedValue,C=E.isFocused;if(!this.hasValue()||!v)return f?null:g.createElement(d,k({},h,{key:"placeholder",isDisabled:x,isFocused:C,innerProps:{id:this.getElementId("placeholder")}}),w);if(m)return D.map(function(b,A){var P=b===I,W="".concat(t.getOptionLabel(b),"-").concat(t.getOptionValue(b));return g.createElement(a,k({},h,{components:{Container:l,Label:r,Remove:u},isFocused:P,isDisabled:x,key:W,index:A,removeProps:{onClick:function(){return t.removeValue(b)},onTouchEnd:function(){return t.removeValue(b)},onMouseDown:function(Y){Y.preventDefault()}},data:b}),t.formatOptionLabel(b,"value"))});if(f)return null;var O=D[0];return g.createElement(p,k({},h,{data:O,isDisabled:x}),this.formatOptionLabel(O,"value"))}},{key:"renderClearIndicator",value:function(){var t=this.getComponents(),s=t.ClearIndicator,a=this.commonProps,l=this.props,r=l.isDisabled,u=l.isLoading,p=this.state.isFocused;if(!this.isClearable()||!s||r||!this.hasValue()||u)return null;var d={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return g.createElement(s,k({},a,{innerProps:d,isFocused:p}))}},{key:"renderLoadingIndicator",value:function(){var t=this.getComponents(),s=t.LoadingIndicator,a=this.commonProps,l=this.props,r=l.isDisabled,u=l.isLoading,p=this.state.isFocused;if(!s||!u)return null;var d={"aria-hidden":"true"};return g.createElement(s,k({},a,{innerProps:d,isDisabled:r,isFocused:p}))}},{key:"renderIndicatorSeparator",value:function(){var t=this.getComponents(),s=t.DropdownIndicator,a=t.IndicatorSeparator;if(!s||!a)return null;var l=this.commonProps,r=this.props.isDisabled,u=this.state.isFocused;return g.createElement(a,k({},l,{isDisabled:r,isFocused:u}))}},{key:"renderDropdownIndicator",value:function(){var t=this.getComponents(),s=t.DropdownIndicator;if(!s)return null;var a=this.commonProps,l=this.props.isDisabled,r=this.state.isFocused,u={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return g.createElement(s,k({},a,{innerProps:u,isDisabled:l,isFocused:r}))}},{key:"renderMenu",value:function(){var t=this,s=this.getComponents(),a=s.Group,l=s.GroupHeading,r=s.Menu,u=s.MenuList,p=s.MenuPortal,d=s.LoadingMessage,h=s.NoOptionsMessage,y=s.Option,v=this.commonProps,x=this.state.focusedOption,m=this.props,f=m.captureMenuScroll,w=m.inputValue,E=m.isLoading,D=m.loadingMessage,I=m.minMenuHeight,C=m.maxMenuHeight,O=m.menuIsOpen,b=m.menuPlacement,A=m.menuPosition,P=m.menuPortalTarget,W=m.menuShouldBlockScroll,N=m.menuShouldScrollIntoView,Y=m.noOptionsMessage,R=m.onMenuScrollToTop,j=m.onMenuScrollToBottom;if(!O)return null;var V=function($,B){var oe=$.type,K=$.data,ae=$.isDisabled,te=$.isSelected,xe=$.label,Ln=$.value,mt=x===K,ht=ae?void 0:function(){return t.onOptionHover(K)},Nn=ae?void 0:function(){return t.selectOption(K)},gt="".concat(t.getElementId("option"),"-").concat(B),jn={id:gt,onClick:Nn,onMouseMove:ht,onMouseOver:ht,tabIndex:-1,role:"option","aria-selected":t.isAppleDevice?void 0:te};return g.createElement(y,k({},v,{innerProps:jn,data:K,isDisabled:ae,isSelected:te,key:gt,label:xe,type:oe,value:Ln,isFocused:mt,innerRef:mt?t.getFocusedOptionRef:void 0}),t.formatOptionLabel($.data,"menu"))},G;if(this.hasOptions())G=this.getCategorizedOptions().map(function(L){if(L.type==="group"){var $=L.data,B=L.options,oe=L.index,K="".concat(t.getElementId("group"),"-").concat(oe),ae="".concat(K,"-heading");return g.createElement(a,k({},v,{key:K,data:$,options:B,Heading:l,headingProps:{id:ae,data:L.data},label:t.formatGroupLabel(L.data)}),L.options.map(function(te){return V(te,"".concat(oe,"-").concat(te.index))}))}else if(L.type==="option")return V(L,"".concat(L.index))});else if(E){var z=D({inputValue:w});if(z===null)return null;G=g.createElement(d,v,z)}else{var J=Y({inputValue:w});if(J===null)return null;G=g.createElement(h,v,J)}var X={minMenuHeight:I,maxMenuHeight:C,menuPlacement:b,menuPosition:A,menuShouldScrollIntoView:N},se=g.createElement(Zo,k({},v,X),function(L){var $=L.ref,B=L.placerProps,oe=B.placement,K=B.maxHeight;return g.createElement(r,k({},v,X,{innerRef:$,innerProps:{onMouseDown:t.onMenuMouseDown,onMouseMove:t.onMenuMouseMove},isLoading:E,placement:oe}),g.createElement(Mr,{captureEnabled:f,onTopArrive:R,onBottomArrive:j,lockEnabled:W},function(ae){return g.createElement(u,k({},v,{innerRef:function(xe){t.getMenuListRef(xe),ae(xe)},innerProps:{role:"listbox","aria-multiselectable":v.isMulti,id:t.getElementId("listbox")},isLoading:E,maxHeight:K,focusedOption:x}),G)}))});return P||A==="fixed"?g.createElement(p,k({},v,{appendTo:P,controlElement:this.controlRef,menuPlacement:b,menuPosition:A}),se):se}},{key:"renderFormField",value:function(){var t=this,s=this.props,a=s.delimiter,l=s.isDisabled,r=s.isMulti,u=s.name,p=s.required,d=this.state.selectValue;if(p&&!this.hasValue()&&!l)return g.createElement(kr,{name:u,onFocus:this.onValueInputFocus});if(!(!u||l))if(r)if(a){var h=d.map(function(x){return t.getOptionValue(x)}).join(a);return g.createElement("input",{name:u,type:"hidden",value:h})}else{var y=d.length>0?d.map(function(x,m){return g.createElement("input",{key:"i-".concat(m),name:u,type:"hidden",value:t.getOptionValue(x)})}):g.createElement("input",{name:u,type:"hidden",value:""});return g.createElement("div",null,y)}else{var v=d[0]?this.getOptionValue(d[0]):"";return g.createElement("input",{name:u,type:"hidden",value:v})}}},{key:"renderLiveRegion",value:function(){var t=this.commonProps,s=this.state,a=s.ariaSelection,l=s.focusedOption,r=s.focusedValue,u=s.isFocused,p=s.selectValue,d=this.getFocusableOptions();return g.createElement(mr,k({},t,{id:this.getElementId("live-region"),ariaSelection:a,focusedOption:l,focusedValue:r,isFocused:u,selectValue:p,focusableOptions:d,isAppleDevice:this.isAppleDevice}))}},{key:"render",value:function(){var t=this.getComponents(),s=t.Control,a=t.IndicatorsContainer,l=t.SelectContainer,r=t.ValueContainer,u=this.props,p=u.className,d=u.id,h=u.isDisabled,y=u.menuIsOpen,v=this.state.isFocused,x=this.commonProps=this.getCommonProps();return g.createElement(l,k({},x,{className:p,innerProps:{id:d,onKeyDown:this.onKeyDown},isDisabled:h,isFocused:v}),this.renderLiveRegion(),g.createElement(s,k({},x,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:h,isFocused:v,menuIsOpen:y}),g.createElement(r,k({},x,{isDisabled:h}),this.renderPlaceholderOrValue(),this.renderInput()),g.createElement(a,k({},x,{isDisabled:h}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(t,s){var a=s.prevProps,l=s.clearFocusValueOnUpdate,r=s.inputIsHiddenAfterUpdate,u=s.ariaSelection,p=s.isFocused,d=s.prevWasFocused,h=s.instancePrefix,y=t.options,v=t.value,x=t.menuIsOpen,m=t.inputValue,f=t.isMulti,w=St(v),E={};if(a&&(v!==a.value||y!==a.options||x!==a.menuIsOpen||m!==a.inputValue)){var D=x?Gr(t,w):[],I=x?Bt(Me(t,w),"".concat(h,"-option")):[],C=l?Ur(s,w):null,O=Yr(s,D),b=Ye(I,O);E={selectValue:w,focusedOption:O,focusedOptionId:b,focusableOptionsWithIds:I,focusedValue:C,clearFocusValueOnUpdate:!1}}var A=r!=null&&t!==a?{inputIsHidden:r,inputIsHiddenAfterUpdate:void 0}:{},P=u,W=p&&d;return p&&!W&&(P={value:Ee(f,w,w[0]||null),options:w,action:"initial-input-focus"},W=!d),(u==null?void 0:u.action)==="initial-input-focus"&&(P=null),M(M(M({},E),A),{},{prevProps:t,ariaSelection:P,prevWasFocused:W})}}]),i}(g.Component);Pn.defaultProps=_r;var Xr=g.forwardRef(function(n,e){var i=fo(n);return g.createElement(Pn,k({ref:e},i))}),Kr=Xr;const Qr=S("div")`
${ot}
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
`,Zr=S("div")`
background-color: var(--secondary-first);
border-radius:10px;
padding: 8px 24px;
max-width:254px;
`,Jr=S("div")`
display: flex;
align-items: center;
column-gap:7px;
`,es=S("span")`
background-color: var(--secondary-fifth);
color: var(--primary-focus);
font-size: 18px;
font-weight: 700;
line-height: 130%;
padding: 6px 10px;
border-radius:40px;
min-width:92px;
text-align: center;
`,$t=S("button")`
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
${({plus:n})=>n&&"svg {stroke: var(--primary-focus);}"}
${({minus:n})=>n&&"svg {fill: var(--primary-focus);}"}
:hover{
    box-shadow: 0px 2px 6px rgba(64, 123, 255, 0.5);
}
`,ts=S("form")`
display: flex;
flex-direction:column;
row-gap:24px;
`,ns=S("div")`
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
`,is=S("div")`
    color: var(--primary-focus);
    font-weight: 700;
    font-size: 18px;
    line-height: 133%; 
`,os=S("button")`
    width: 100%;
    ${ve}
    @media only screen and (min-width: 768px) {
        width:160px;
    }
`,as=S(Kr)`
background-color:transparent;
color: var(--primary-focus);
border-radius:6px;
height: 44px;
width: 100%;
line-height: 125%;
margin: 0;
.Select__control {
    height: 44px;
    border: 1px solid var(--secondary-fifth);
    cursor: pointer;
  }

  .Select__control:hover {
    border: 1px solid blue;
  }

  .Select__indicators {
    display: none;
  }

  .Select__value-container {
    padding: 0px 10px;
  }

  .Select__single-value {
    color: var(--primary-focus);
    line-height: 1.25;
  }

  .Select__menu {
    width: 100px;
    color: var(--primary-focus);
    text-align: center;
    font-size: 18px;
  }

  @media screen and (min-width: 768px) {
    width: 100%;
  }
`,rs=()=>{const n=[];for(let e=0;e<24;e++)for(let i=0;i<60;i+=5){const o=e<10?`0${e}`:`${e}`,t=i<10?`0${i}`:`${i}`;n.push({value:`${o}:${t}`,label:`${o}:${t}`})}return n},Le=n=>{const e=new Date,[i,o]=n.split(":");return e.setHours(i,o,0),e},ss=n=>{const e=n?Le(n):new Date,i=e.getMinutes(),o=Math.ceil(i/5)*5;return e.setMinutes(o),U(e,"HH:mm")},us=qt({gender:Qn().required("Gender is required"),weight:Se().required("Weight is required").min(0,"Weight must be a positive number"),activityTime:Se().required("Activity time is required").min(0,"Activity time must be a positive number"),dailyWaterGoal:Se().required("Amount water is required").min(0,"Amount water must be a positive number").max(15,"The amount of water should be no more than 15000 liters").test("maxDigitsAfterDecimal","The amount of water must have 1 digits after decimal or less",n=>Number.isInteger(n*10**1))}),ls=qt({portionOfWater:Se().required("Amount water is required").min(0,"Amount water must be a positive number").max(5e3,"The amount of water should be no more than 5000 milliliters").test("maxDigitsAfterDecimal","The amount of water must be an integer",n=>Number.isInteger(n*10**0))}),qe=5e3,Ht=50,Ce=50,Vn=({isOpen:n,onClose:e,isEditing:i,selectedItemId:o,amountWater:t=0,date:s})=>{const{t:a}=re(),l=je(),r=q(et),[u,p]=g.useState(t),d=ss(s),h=s?U(Le(s),"HH:mm"):U(new Date,"HH:mm"),[y,v]=g.useState({value:d,label:h}),x=async C=>{C.preventDefault();const O=new Date,b=y.value;if(m.values.portionOfWater>qe){ce.Notify.failure("The amount of water should be no more than 5000 milliliters");return}else i||(await l(le.addWaterThunk({date:U(O,"dd/MM/uuuu"),time:b,waterAmount:u})),await l(le.getTodayWaterThunk({date:U(O,"dd/MM/uuuu")})),ce.Notify.success("Water portion successfully added"),e(),p(0),m.values.portionOfWater=0),i&&(await l(le.editWaterThunk({id:o,time:b,waterAmount:u})),await l(le.getTodayWaterThunk({date:U(O,"dd/MM/uuuu")})),e(),ce.Notify.success("Information was successfully edited"))},m=Xt({initialValues:{portionOfWater:u},validationSchema:ls,onSubmit:x});g.useEffect(()=>{p(t),v({value:d,label:h}),m.initialValues.portionOfWater=t},[t,h,d,m.initialValues]);const f=C=>{v(C)},w=()=>{requestAnimationFrame(()=>{const C=document.querySelector(".Select__option--is-selected");C&&C.scrollIntoView({})})},E=()=>{u>=qe||(p(C=>parseFloat(C)+Ce),m.values.portionOfWater=m.values.portionOfWater+Ce)},D=()=>{u<=Ht||(p(C=>parseFloat(C)-Ce),m.values.portionOfWater=m.values.portionOfWater-Ce)},I=C=>{if(C.target.value>=Ht&&C.target.value<=qe){const O=parseFloat(C.target.value);p(O)}};return c.jsx(Te,{isOpen:n,onClose:e,children:c.jsxs(Qr,{children:[c.jsx(at,{children:a(i?"addEditWaterModal.headerEdit":"addEditWaterModal.headerAdd")}),c.jsx(rt,{onClick:e,children:c.jsx("svg",{children:c.jsx("use",{href:`${Q}#icon-close`})})}),i&&c.jsx(Zr,{children:c.jsx(tn,{data:{amount:t,time:s}})}),c.jsxs("div",{children:[c.jsx(de,{children:a(i?"addEditWaterModal.correctData":"addEditWaterModal.choose")}),c.jsx("p",{children:a("addEditWaterModal.amount")}),c.jsxs(Jr,{children:[c.jsx($t,{minus:!0,onClick:D,children:c.jsx("svg",{children:c.jsx("use",{href:`${Q}#icon-minus`})})}),c.jsx(es,{children:u}),c.jsx($t,{plus:!0,onClick:E,children:c.jsx("svg",{children:c.jsx("use",{href:`${Q}#icon-plus`})})})]})]}),c.jsxs(ts,{onSubmit:x,children:[c.jsxs("div",{children:[c.jsx("p",{children:a("addEditWaterModal.time")}),c.jsx(as,{classNamePrefix:"Select",options:rs(),value:y,defaultValue:y,onChange:f,onMenuOpen:w})]}),c.jsxs("div",{children:[c.jsx(de,{children:a("addEditWaterModal.waterUsed")}),c.jsx(Fe,{value:m.values.portionOfWater,onBlur:C=>{m.handleBlur(C),I(C)},onChange:m.handleChange,onFocus:C=>C.target.value="",type:"number",name:"portionOfWater",min:"0",step:"0.1",error:m.touched.portionOfWater&&m.errors.portionOfWater})]}),c.jsxs(ns,{children:[c.jsxs(is,{children:[u,"ml"]}),c.jsx(os,{disabled:r,type:"submit",children:r?c.jsx(st,{children:c.jsx(tt,{})}):a("dailyNormaModal.buttonSave")})]})]})]})})},cs=S("div")`
${ot}
display: flex;
flex-direction:column;
row-gap:24px;
`,ds=S("div")`
display: flex;
flex-direction:column;
gap:24px;
@media only screen and (min-width: 768px) {
    flex-direction:row;
    justify-content:flex-end;
}
`,ps=S("button")`
${ve}
color: var(--primary-focus);
background-color: var(--secondary-fifth);
box-shadow:none;
:hover {
  box-shadow:none;
  background-color: var(--secondary-third);  
}
`,fs=S("button")`
${ve}
background-color: var(--secondary-second);
box-shadow:none;
:hover {
  box-shadow:none;
  background-color: #ec1717;  
}
`;function ms({isOpen:n,onClose:e,selectedItemId:i}){const{t:o}=re(),t=je(),s=q(et),a=async()=>{const l=U(new Date,"dd/MM/yyyy");await t(le.deleteWaterThunk({id:i})),await t(le.getTodayWaterThunk({date:l})),ce.Notify.success("The portion is removed"),e()};return c.jsx(Te,{isOpen:n,onClose:e,children:c.jsxs(cs,{children:[c.jsx(at,{children:o("deleteEntryModal.header")}),c.jsx(rt,{onClick:e,children:c.jsx("svg",{children:c.jsx("use",{href:`${Q}#icon-close`})})}),c.jsx(de,{children:o("deleteEntryModal.question")}),c.jsxs(ds,{children:[c.jsx(ps,{onClick:e,type:"button",children:o("deleteEntryModal.buttonCancel")}),c.jsx(fs,{disabled:s,onClick:a,type:"button",children:s?c.jsx(st,{children:c.jsx(tt,{})}):o("deleteEntryModal.buttonDelete")})]})]})})}const hs=S("div")`
margin-bottom: 24px;
flex:1 0 auto;
`,gs=S("div")`
font-size: 24px;
font-weight: 500;
line-height: 1.2;
margin-bottom: 16px;
color: var(--primary-dark);
@media only screen and (min-width: 768px) {
font-size: 26px;  
}
`,vs=S("ul")`
max-height:180px;
overflow: auto;
margin-bottom: 12px;
@media only screen and (min-width: 768px) {
max-height:170px;
}
`,xs=S("li")`
display: flex;
align-items: center;
justify-content: space-between;
column-gap:38px;
padding: 12px 10px 12px 4px;
border-bottom: 1px solid var(--secondary-fifth);
@media only screen and (min-width: 768px) {
padding: 12px 10px 12px 4px;
}
`,bs=S("div")`
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
`,ys=S("button")`
    :hover {
        border-bottom: 1px solid var(--secondary-third);
    }
    svg{
        stroke: var(--secondary-third);
        fill: transparent;
        width: 16px;
        height: 16px;
    }
`,ws=S("button")`
    :hover {
        border-bottom: 1px solid var(--secondary-second);
    }
    svg{
        stroke: var(--secondary-second);
        fill: transparent;
        width: 16px;
        height: 16px;
    }
`,Es=S("button")`
width: 115px;
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
width: 135px;
font-size: 18px;
svg {
    width: 12px;
    height: 12px;
}
}
`,Cs=()=>{const{t:n}=re(),{portionsOfWater:e}=q(en),[i,o]=g.useState(!1),[t,s]=g.useState(!1),[a,l]=g.useState(!1),[r,u]=g.useState(null),p=()=>{o(!0),s(!1),l(!1),u(null)},d=v=>{o(!0),s(!0),l(!1),u(v)},h=v=>{o(!0),l(!0),u(v)},y=()=>{o(!1)};return c.jsxs(hs,{children:[c.jsx(gs,{children:n("today")}),(e==null?void 0:e.length)>0&&c.jsx(vs,{children:e.slice().sort((v,x)=>Le(v.time).getTime()-Le(x.time).getTime()).map(v=>c.jsxs(xs,{children:[c.jsx(tn,{data:v}),c.jsxs(bs,{children:[c.jsx(ys,{type:"button",onClick:()=>d(v),children:c.jsx("svg",{children:c.jsx("use",{href:`${Q}#icon-icon-pencil`})})}),c.jsx(ws,{type:"button",onClick:()=>h(v),children:c.jsx("svg",{children:c.jsx("use",{href:`${Q}#icon-trash`})})})]})]},v.id))}),c.jsxs(Es,{onClick:p,type:"button",children:[c.jsx("span",{children:"+"}),n("addEditWaterModal.headerAdd")]}),a?c.jsx(ms,{isOpen:i,onClose:y,selectedItemId:r==null?void 0:r.id}):c.jsx(Vn,{isOpen:i,onClose:y,isEditing:t,selectedItemId:r==null?void 0:r.id,amountWater:r==null?void 0:r.amount,date:r==null?void 0:r.time})]})},Ss=S("div")`
${ot}
display: flex;
flex-direction:column;
row-gap:24px;
 position: relative;
 z-index:2;
/* max-height: 648px; */
/* @media only screen and (min-width: 768px) {
    max-height: 580px;
} */
`,Fs=S("div")`
    display: flex;
    flex-direction:column;
    row-gap:16px;
    margin-bottom: 12px;
    span {
        color: var(--primary-focus);
         ${({lang:n})=>n==="uk"?"font-size: 16px;":"font-size: 18px;"}
    }
    @media only screen and (min-width: 768px) {
        flex-direction:row;
         ${({lang:n})=>n==="uk"?"column-gap:15px;":"column-gap:24px;"}
    }
`,Ms=S("div")`
    color: #8F8F8F;
    font-size: 12px;
    line-height: 130%;
    padding:10px;
    border:1px solid var(--secondary-fifth);
    border-radius:10px;
    span {
        color: var(--primary-focus);
    }
`,Ds=S("form")`
    display: flex;
    flex-direction:column;
    row-gap:24px;
`,Os=S("div")`
    display: flex;
    column-gap:24px;
    margin-bottom: 16px;
`,zt=S("div")`
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
`,_t=S("div")`
    margin-bottom: 16px;
`,ks=S("div")`
    display: flex;
    align-items: center;
    p{
        max-width:180px;
    }
    span {
        color: var(--primary-focus);
        font-weight:700;
        font-size: 18px;
        width: 57px;
        text-align: end;
    }
    @media only screen and (min-width: 768px) {
        column-gap:6px;
        p{
        max-width:100%;
    }
    }
`,Is=S("button")`
    width: 100%;
    ${ve}
    @media only screen and (min-width: 768px) {
        width:160px;
        margin-left:auto;
    }
`,As=15e3,Ps=({isOpen:n,onClose:e})=>{const{t:i}=re(),o=q(Ne),t=je(),{gender:s}=q(Un),a=q(et),[l,r]=g.useState(0),u=g.useCallback(h=>{if(!h.weight)return;const y=h.gender==="female"?.03:.04,v=h.gender==="female"?.4:.6,x=h.weight*y+h.activityTime*v;r(x)},[]),p=async h=>{h.preventDefault();const y=d.values.dailyWaterGoal*1e3;y>0&&y<=As?(await t(Yt.waterRateThunk({waterRate:y,date:U(new Date,"dd/MM/uuuu")})),ce.Notify.success("Daily norma successfully updated"),d.resetForm(),e()):ce.Notify.failure("The amount of water must be a positive and no more than 15000 liters")},d=Xt({initialValues:{gender:s,weight:0,activityTime:0,dailyWaterGoal:0},validationSchema:us,onSubmit:p});return g.useEffect(()=>{u(d.values)},[u,d.values]),c.jsx(Te,{isOpen:n,onClose:e,children:c.jsxs(Ss,{children:[c.jsx(at,{children:i("dailyNormaModal.header")}),c.jsx(rt,{onClick:e,children:c.jsx("svg",{children:c.jsx("use",{href:`${Q}#icon-close`})})}),c.jsxs("div",{children:[c.jsxs(Fs,{lang:o,children:[c.jsxs("p",{children:[i("dailyNormaModal.girl"),": ",c.jsx("span",{children:"V=(M*0,03) + (T*0,4)"})]}),c.jsxs("p",{children:[i("dailyNormaModal.man"),": ",c.jsx("span",{children:"V=(M*0,04) + (T*0,6)"})]})]}),c.jsxs(Ms,{children:[c.jsx("span",{children:"*"})," ",i("dailyNormaModal.description")]})]}),c.jsxs(Ds,{onSubmit:p,children:[c.jsxs("div",{children:[c.jsx(de,{children:i("dailyNormaModal.calculate")}),c.jsxs(Os,{children:[c.jsxs(zt,{children:[c.jsx("input",{id:"gender-f",type:"radio",name:"gender",value:"female",checked:d.values.gender==="female",onChange:()=>d.setFieldValue("gender","female")}),c.jsx("label",{htmlFor:"gender-f",children:i("dailyNormaModal.girl")})]}),c.jsxs(zt,{children:[c.jsx("input",{id:"gender-m",type:"radio",name:"gender",value:"male",checked:d.values.gender==="male",onChange:()=>d.setFieldValue("gender","male")}),c.jsx("label",{htmlFor:"gender-m",children:i("dailyNormaModal.man")})]})]}),c.jsx(_t,{children:c.jsx(Fe,{label:i("dailyNormaModal.weight"),value:d.values.weight,onBlur:d.handleBlur,onChange:d.handleChange,onFocus:h=>h.target.value="",type:"number",name:"weight",min:"0",step:"0.1",error:d.touched.weight&&d.errors.weight})}),c.jsx(_t,{children:c.jsx(Fe,{label:i("dailyNormaModal.time"),value:d.values.activityTime,onBlur:d.handleBlur,onChange:d.handleChange,onFocus:h=>h.target.value="",type:"number",name:"activityTime",min:"0",step:"0.1",error:d.touched.activityTime&&d.errors.activityTime})}),c.jsxs(ks,{children:[c.jsx("p",{children:i("dailyNormaModal.perDay")}),c.jsxs("span",{children:[parseFloat(l).toFixed(1)," L"]})]})]}),c.jsxs("div",{children:[c.jsx(de,{children:i("dailyNormaModal.willDrink")}),c.jsx(Fe,{value:d.values.dailyWaterGoal,onBlur:d.handleBlur,onChange:d.handleChange,onFocus:h=>h.target.value="",type:"number",name:"dailyWaterGoal",min:"0",step:"0.1",error:d.touched.dailyWaterGoal&&d.errors.dailyWaterGoal})]}),c.jsx(Is,{disabled:a,type:"submit",children:a?c.jsx(st,{children:c.jsx(tt,{})}):i("dailyNormaModal.buttonSave")})]})]})})},Vs=S("div")`
background-color:var(--primary-light);
padding: 8px 20px;
border-radius: 10px;
box-shadow: 0px 4px 8px rgba(158, 187, 255,0.2);
 ${({lang:n})=>n==="uk"?"max-width: 210px;":"max-width: 164px;"}
position: relative;
z-index:1;
`,Ls=S("div")`
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
`,Ns=()=>{const{t:n}=re(),e=q(Ne),o=(q(Xi)/1e3).toFixed(1),[t,s]=g.useState(!1),a=()=>{s(!t)};return c.jsxs(Vs,{lang:e,children:[c.jsx(de,{children:n("dailyNormaModal.header")}),c.jsxs(Ls,{children:[c.jsxs("span",{children:[o," L"]}),c.jsx("button",{onClick:a,type:"button",children:n("dailyNormaModal.edit")})]}),c.jsx(Ps,{isOpen:t,onClose:a})]})},js=S("div")`
display: flex;
flex-direction:column;
row-gap:20px;
@media only screen and (min-width: 768px) {
flex-direction:row;
align-items: center;
column-gap:23px;
}
`,Ts=S("button")`
    display: flex;
    justify-content: center; 
    align-items: center;
    gap:12px;
    ${ve}
    svg{
        width: 20px;
        height: 20px;
        stroke:var(--primary-light);
        fill: transparent;
    }
`,Rs=S("div")`
flex: 1 0 auto;
height: 82px;
@media only screen and (min-width: 768px) {
height: 90px;
}
p{
    font-size: 18px;
    line-height: 130%;
    color: var(--primary-focus);
    margin-bottom: 8px;
    @media only screen and (min-width: 768px) {
    margin-bottom: 16px;
}
 }
`,Bs=S("div")`
position: relative;
color: var(--primary-focus);
`,Ws=S("input")`
&[type="range"] {
  -webkit-appearance: none;
  appearance: none;
  cursor: pointer;
  width: 100%;
   background: var(--secondary-third);
   ${({persent:n})=>`background-image: linear-gradient(
      to right, var(--secondary-third) 0%, var(--secondary-third) ${n}%, var(--secondary-fifth) ${n}%, var(--secondary-fifth) 100%);`}
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
`,$s=S("span")`
 font-size: 12px;
 line-height: 133%;
 position: absolute;
 top:27px;
 left:0;
 ::before{
        content:"";
        position: absolute;
        width: 1px;
        height: 8px;
        background: var(--secondary-fifth);
        top:-55%;
        left: 10%;
    }
`,Hs=S("span")`
 font-size: 12px;
 line-height: 133%;
 position: absolute;
 top:27px;
 right:0;
 ::before{
        content:"";
        position: absolute;
        width: 1px;
        height: 8px;
        background: var(--secondary-fifth);
        top:-55%;
        right: 5%;
    }
`,zs=S("span")`
background-color: rgba(255, 255, 255, 0.9);
display: block;
padding:3px;
border-radius:5px;
color: var(--primary-focus);
text-align:center;
 font-size: 16px;
 font-weight: 500;
 position: absolute;
 top:40px;
 ${({persent:n})=>n<=100?`left: ${n}%;`:"left: 99%;"}
 transform:translate(-50%,0);
 ::before{
        content:"";
        position: absolute;
        width: 1px;
        height: 8px;
        background: var(--secondary-fifth);
        top:-50%;
        left: 50%;
    }
`,_s=()=>{const{t:n}=re(),{percentageWater:e=0}=q(en),i=parseFloat(e).toFixed(1),[o,t]=g.useState(!1),s=()=>{t(!o)};return c.jsxs("div",{children:[c.jsxs(js,{children:[c.jsxs(Rs,{children:[c.jsx("p",{children:n("today")}),c.jsxs(Bs,{children:[c.jsx(Ws,{onChange:()=>{},name:"volume",type:"range",min:"0",max:"100",value:`${i}`,persent:i}),c.jsx($s,{children:"0%"}),c.jsxs(zs,{persent:i,children:[i,"%"]}),c.jsx(Hs,{children:"100%"})]})]}),c.jsxs(Ts,{onClick:s,children:[c.jsx("svg",{children:c.jsx("use",{href:`${Q}#icon-circle-plus`})}),n("addEditWaterModal.headerAdd")]})]}),c.jsx(Vn,{isOpen:o,onClose:s})]})},Gs=H.button`
  display: flex;
  padding: 8px 8px;
  justify-content: center;
  align-items: center;
  margin-left:auto;

  border-radius: 10px;
  border: none;
  background: var(--secondary-second);
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);

  color: var(--primary-light);
`,Us=()=>{const[n,e]=g.useState(!1),i=je();return c.jsxs(c.Fragment,{children:[c.jsx(Gs,{onClick:()=>e(!n),children:"Delete user"}),c.jsx(Te,{isOpen:n,onClose:()=>e(!n),children:c.jsxs(Yn,{children:[c.jsxs("div",{className:"logOutDiv1",children:[c.jsx("p",{className:"logOutP1",children:"DELETE user"}),c.jsx(qn,{className:"xMarkWrapper",onClick:()=>e(!n)})]}),c.jsx("div",{className:"logOutDiv2",children:c.jsx("p",{className:"logOutP2",children:"Do you really want to delete your prefill?"})}),c.jsxs("div",{className:"logOutDiv3",children:[c.jsx("button",{className:"logOutButtonDelete",onClick:()=>i(Yt.deleteUserThunk()),children:"DELETE"}),c.jsx("button",{className:"logOutButtonCancel",onClick:()=>e(!n),children:"Cancel"})]})]})})]})},Ys=H("div")`
  position: relative;
`,qs=H("img")`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top left;
  z-index: -1;
`,Xs=H("div")`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 24px 0 20px 0;
  @media only screen and (min-width: 768px) {
    padding: 40px 0 20px 0;
  }
  @media only screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 32px;
    padding: 20px 0 20px 0;
  }
`,Ks=H("div")`
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  @media only screen and (min-width: 1440px) {
    row-gap: 24px;
  }
`,Qs=H("div")`
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: 290px;
  position: relative;
  img {
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
    min-height: 386px;
    object-position: center;
  }
  @media only screen and (min-width: 1440px) {
    flex: 1 0 auto;
    img {
      object-fit: cover;
    }
  }
`,Zs=H("div")`
padding-bottom: 20px;
`,Js=H("div")`
  display: flex;
  flex-direction: column;
  background-color: var(--secondary-first);
  max-width: 280px;
  max-height: 830px;
  padding: 24px 8px;
  border-radius: 10px;
  box-shadow: 0px 4px 14px rgba(64, 123, 255, 0.3);
  @media only screen and (min-width: 768px) {
    max-width: 704px;
    height: 680px;
    padding: 32px 24px;
  }
  @media only screen and (min-width: 1440px) {
    max-width: 592px;
    height: 680px;
  }
`,eu=H.div`
  @media screen and (max-width: 767px) {
    display: flex;
    justify-content: center;
    padding-bottom: 20px;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    margin: 0 auto;
    padding-bottom: 20px;
  }
  @media screen and (min-width: 1440px) {
    margin: 0 auto;
    margin-top: 10px;
  }
`,tu="/water-tracker/assets/bg-56863a63.png",nu="/water-tracker/assets/bottle-b9ff448c.png",su=()=>c.jsx(c.Fragment,{children:c.jsxs(Ys,{children:[c.jsxs(Xn,{children:[c.jsxs(Xs,{children:[c.jsxs(Ks,{children:[c.jsxs(Qs,{children:[c.jsx(Ns,{}),c.jsx("img",{src:nu,alt:"bg"})]}),c.jsx(_s,{})]}),c.jsxs(Js,{children:[c.jsx(Cs,{}),c.jsx(eo,{})]})]}),c.jsx(Zs,{children:c.jsx(Us,{children:"Delete user"})}),c.jsx(eu,{children:c.jsx(Kn,{})})]}),c.jsx(qs,{src:tu,alt:"bg"})]})});export{su as default};
