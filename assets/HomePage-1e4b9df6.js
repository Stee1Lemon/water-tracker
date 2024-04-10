import{t as ee,e as yt,f as wt,h as Rn,r as g,E as Bn,g as Wn,k as $n,l as $e,m as pe,n as Hn,o as fe,p as F,j as c,b as z,q as Le,v as _,i as q,w as He,u as $,x as qt,y as zn,_ as Xt,z as k,A as Gn,B as _n,C as Un,a as Te,s as it,M as Re,L as ot,D as le,F as Yn,d as Qe,G as qn,S as Xn,c as Kn}from"./index-0d28448a.js";import{C as Qn}from"./Container-40570d18.js";import{u as re,M as Zn}from"./ModalTeam-86068eab.js";import{c as Kt,a as Jn,d as Se,u as Qt}from"./index.esm-19025759.js";function Zt(n,e){const i=ee(n);if(isNaN(e))return yt(n,NaN);if(!e)return i;const o=i.getDate(),t=yt(n,i.getTime());t.setMonth(i.getMonth()+e+1,0);const s=t.getDate();return o>=s?t:(i.setFullYear(t.getFullYear(),t.getMonth(),o),i)}function ei(n,e){const i=ee(n.start),o=ee(n.end);let t=+i>+o;const s=t?+i:+o,a=t?o:i;a.setHours(0,0,0,0);let u=(e==null?void 0:e.step)??1;if(!u)return[];u<0&&(u=-u,t=!t);const r=[];for(;+a<=s;)r.push(ee(a)),a.setDate(a.getDate()+u),a.setHours(0,0,0,0);return t?r.reverse():r}function ti(n){const e=ee(n);return e.setDate(1),e.setHours(0,0,0,0),e}function ni(n){const e=ee(n),i=e.getMonth();return e.setFullYear(e.getFullYear(),i+1,0),e.setHours(0,0,0,0),e}function Jt(n,e,i){const o=wt(n,i),t=wt(e,i);return+o==+t}function Et(n,e){const i=ee(n),o=ee(e);return i.getFullYear()===o.getFullYear()&&i.getMonth()===o.getMonth()}function ii(n,e){return Zt(n,-e)}var D=function(e,i){var o=arguments;if(i==null||!Rn.call(i,"css"))return g.createElement.apply(void 0,o);var t=o.length,s=new Array(t);s[0]=Bn,s[1]=Wn(e,i);for(var a=2;a<t;a++)s[a]=o[a];return g.createElement.apply(null,s)};function at(){for(var n=arguments.length,e=new Array(n),i=0;i<n;i++)e[i]=arguments[i];return $n(e)}var oi=function(){var e=at.apply(void 0,arguments),i="animation-"+e.name;return{name:i,styles:"@keyframes "+i+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}};function me(n,e){if(n.one!==void 0&&e===1)return n.one;const i=e%10,o=e%100;return i===1&&o!==11?n.singularNominative.replace("{{count}}",String(e)):i>=2&&i<=4&&(o<10||o>20)?n.singularGenitive.replace("{{count}}",String(e)):n.pluralGenitive.replace("{{count}}",String(e))}function U(n){return(e,i)=>i&&i.addSuffix?i.comparison&&i.comparison>0?n.future?me(n.future,e):"за "+me(n.regular,e):n.past?me(n.past,e):me(n.regular,e)+" тому":me(n.regular,e)}const ai=(n,e)=>e&&e.addSuffix?e.comparison&&e.comparison>0?"за півхвилини":"півхвилини тому":"півхвилини",ri={lessThanXSeconds:U({regular:{one:"менше секунди",singularNominative:"менше {{count}} секунди",singularGenitive:"менше {{count}} секунд",pluralGenitive:"менше {{count}} секунд"},future:{one:"менше, ніж за секунду",singularNominative:"менше, ніж за {{count}} секунду",singularGenitive:"менше, ніж за {{count}} секунди",pluralGenitive:"менше, ніж за {{count}} секунд"}}),xSeconds:U({regular:{singularNominative:"{{count}} секунда",singularGenitive:"{{count}} секунди",pluralGenitive:"{{count}} секунд"},past:{singularNominative:"{{count}} секунду тому",singularGenitive:"{{count}} секунди тому",pluralGenitive:"{{count}} секунд тому"},future:{singularNominative:"за {{count}} секунду",singularGenitive:"за {{count}} секунди",pluralGenitive:"за {{count}} секунд"}}),halfAMinute:ai,lessThanXMinutes:U({regular:{one:"менше хвилини",singularNominative:"менше {{count}} хвилини",singularGenitive:"менше {{count}} хвилин",pluralGenitive:"менше {{count}} хвилин"},future:{one:"менше, ніж за хвилину",singularNominative:"менше, ніж за {{count}} хвилину",singularGenitive:"менше, ніж за {{count}} хвилини",pluralGenitive:"менше, ніж за {{count}} хвилин"}}),xMinutes:U({regular:{singularNominative:"{{count}} хвилина",singularGenitive:"{{count}} хвилини",pluralGenitive:"{{count}} хвилин"},past:{singularNominative:"{{count}} хвилину тому",singularGenitive:"{{count}} хвилини тому",pluralGenitive:"{{count}} хвилин тому"},future:{singularNominative:"за {{count}} хвилину",singularGenitive:"за {{count}} хвилини",pluralGenitive:"за {{count}} хвилин"}}),aboutXHours:U({regular:{singularNominative:"близько {{count}} години",singularGenitive:"близько {{count}} годин",pluralGenitive:"близько {{count}} годин"},future:{singularNominative:"приблизно за {{count}} годину",singularGenitive:"приблизно за {{count}} години",pluralGenitive:"приблизно за {{count}} годин"}}),xHours:U({regular:{singularNominative:"{{count}} годину",singularGenitive:"{{count}} години",pluralGenitive:"{{count}} годин"}}),xDays:U({regular:{singularNominative:"{{count}} день",singularGenitive:"{{count}} днi",pluralGenitive:"{{count}} днів"}}),aboutXWeeks:U({regular:{singularNominative:"близько {{count}} тижня",singularGenitive:"близько {{count}} тижнів",pluralGenitive:"близько {{count}} тижнів"},future:{singularNominative:"приблизно за {{count}} тиждень",singularGenitive:"приблизно за {{count}} тижні",pluralGenitive:"приблизно за {{count}} тижнів"}}),xWeeks:U({regular:{singularNominative:"{{count}} тиждень",singularGenitive:"{{count}} тижні",pluralGenitive:"{{count}} тижнів"}}),aboutXMonths:U({regular:{singularNominative:"близько {{count}} місяця",singularGenitive:"близько {{count}} місяців",pluralGenitive:"близько {{count}} місяців"},future:{singularNominative:"приблизно за {{count}} місяць",singularGenitive:"приблизно за {{count}} місяці",pluralGenitive:"приблизно за {{count}} місяців"}}),xMonths:U({regular:{singularNominative:"{{count}} місяць",singularGenitive:"{{count}} місяці",pluralGenitive:"{{count}} місяців"}}),aboutXYears:U({regular:{singularNominative:"близько {{count}} року",singularGenitive:"близько {{count}} років",pluralGenitive:"близько {{count}} років"},future:{singularNominative:"приблизно за {{count}} рік",singularGenitive:"приблизно за {{count}} роки",pluralGenitive:"приблизно за {{count}} років"}}),xYears:U({regular:{singularNominative:"{{count}} рік",singularGenitive:"{{count}} роки",pluralGenitive:"{{count}} років"}}),overXYears:U({regular:{singularNominative:"більше {{count}} року",singularGenitive:"більше {{count}} років",pluralGenitive:"більше {{count}} років"},future:{singularNominative:"більше, ніж за {{count}} рік",singularGenitive:"більше, ніж за {{count}} роки",pluralGenitive:"більше, ніж за {{count}} років"}}),almostXYears:U({regular:{singularNominative:"майже {{count}} рік",singularGenitive:"майже {{count}} роки",pluralGenitive:"майже {{count}} років"},future:{singularNominative:"майже за {{count}} рік",singularGenitive:"майже за {{count}} роки",pluralGenitive:"майже за {{count}} років"}})},si=(n,e,i)=>(i=i||{},ri[n](e,i)),ui={full:"EEEE, do MMMM y 'р.'",long:"do MMMM y 'р.'",medium:"d MMM y 'р.'",short:"dd.MM.y"},li={full:"H:mm:ss zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},ci={full:"{{date}} 'о' {{time}}",long:"{{date}} 'о' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},di={date:$e({formats:ui,defaultWidth:"full"}),time:$e({formats:li,defaultWidth:"full"}),dateTime:$e({formats:ci,defaultWidth:"full"})},rt=["неділю","понеділок","вівторок","середу","четвер","п’ятницю","суботу"];function pi(n){const e=rt[n];switch(n){case 0:case 3:case 5:case 6:return"'у минулу "+e+" о' p";case 1:case 2:case 4:return"'у минулий "+e+" о' p"}}function en(n){return"'у "+rt[n]+" о' p"}function fi(n){const e=rt[n];switch(n){case 0:case 3:case 5:case 6:return"'у наступну "+e+" о' p";case 1:case 2:case 4:return"'у наступний "+e+" о' p"}}const mi=(n,e,i)=>{const o=ee(n),t=o.getDay();return Jt(o,e,i)?en(t):pi(t)},hi=(n,e,i)=>{const o=ee(n),t=o.getDay();return Jt(o,e,i)?en(t):fi(t)},gi={lastWeek:mi,yesterday:"'вчора о' p",today:"'сьогодні о' p",tomorrow:"'завтра о' p",nextWeek:hi,other:"P"},vi=(n,e,i,o)=>{const t=gi[n];return typeof t=="function"?t(e,i,o):t},xi={narrow:["до н.е.","н.е."],abbreviated:["до н. е.","н. е."],wide:["до нашої ери","нашої ери"]},bi={narrow:["1","2","3","4"],abbreviated:["1-й кв.","2-й кв.","3-й кв.","4-й кв."],wide:["1-й квартал","2-й квартал","3-й квартал","4-й квартал"]},yi={narrow:["С","Л","Б","К","Т","Ч","Л","С","В","Ж","Л","Г"],abbreviated:["січ.","лют.","берез.","квіт.","трав.","черв.","лип.","серп.","верес.","жовт.","листоп.","груд."],wide:["січень","лютий","березень","квітень","травень","червень","липень","серпень","вересень","жовтень","листопад","грудень"]},wi={narrow:["С","Л","Б","К","Т","Ч","Л","С","В","Ж","Л","Г"],abbreviated:["січ.","лют.","берез.","квіт.","трав.","черв.","лип.","серп.","верес.","жовт.","листоп.","груд."],wide:["січня","лютого","березня","квітня","травня","червня","липня","серпня","вересня","жовтня","листопада","грудня"]},Ei={narrow:["Н","П","В","С","Ч","П","С"],short:["нд","пн","вт","ср","чт","пт","сб"],abbreviated:["нед","пон","вів","сер","чтв","птн","суб"],wide:["неділя","понеділок","вівторок","середа","четвер","п’ятниця","субота"]},Ci={narrow:{am:"ДП",pm:"ПП",midnight:"півн.",noon:"пол.",morning:"ранок",afternoon:"день",evening:"веч.",night:"ніч"},abbreviated:{am:"ДП",pm:"ПП",midnight:"півн.",noon:"пол.",morning:"ранок",afternoon:"день",evening:"веч.",night:"ніч"},wide:{am:"ДП",pm:"ПП",midnight:"північ",noon:"полудень",morning:"ранок",afternoon:"день",evening:"вечір",night:"ніч"}},Si={narrow:{am:"ДП",pm:"ПП",midnight:"півн.",noon:"пол.",morning:"ранку",afternoon:"дня",evening:"веч.",night:"ночі"},abbreviated:{am:"ДП",pm:"ПП",midnight:"півн.",noon:"пол.",morning:"ранку",afternoon:"дня",evening:"веч.",night:"ночі"},wide:{am:"ДП",pm:"ПП",midnight:"північ",noon:"полудень",morning:"ранку",afternoon:"дня",evening:"веч.",night:"ночі"}},Mi=(n,e)=>{const i=String(e==null?void 0:e.unit),o=Number(n);let t;return i==="date"?o===3||o===23?t="-є":t="-е":i==="minute"||i==="second"||i==="hour"?t="-а":t="-й",o+t},Fi={ordinalNumber:Mi,era:pe({values:xi,defaultWidth:"wide"}),quarter:pe({values:bi,defaultWidth:"wide",argumentCallback:n=>n-1}),month:pe({values:yi,defaultWidth:"wide",formattingValues:wi,defaultFormattingWidth:"wide"}),day:pe({values:Ei,defaultWidth:"wide"}),dayPeriod:pe({values:Ci,defaultWidth:"any",formattingValues:Si,defaultFormattingWidth:"wide"})},Di=/^(\d+)(-?(е|й|є|а|я))?/i,Oi=/\d+/i,ki={narrow:/^((до )?н\.?\s?е\.?)/i,abbreviated:/^((до )?н\.?\s?е\.?)/i,wide:/^(до нашої ери|нашої ери|наша ера)/i},Ii={any:[/^д/i,/^н/i]},Ai={narrow:/^[1234]/i,abbreviated:/^[1234](-?[иі]?й?)? кв.?/i,wide:/^[1234](-?[иі]?й?)? квартал/i},Pi={any:[/1/i,/2/i,/3/i,/4/i]},Vi={narrow:/^[слбктчвжг]/i,abbreviated:/^(січ|лют|бер(ез)?|квіт|трав|черв|лип|серп|вер(ес)?|жовт|лис(топ)?|груд)\.?/i,wide:/^(січень|січня|лютий|лютого|березень|березня|квітень|квітня|травень|травня|червня|червень|липень|липня|серпень|серпня|вересень|вересня|жовтень|жовтня|листопад[а]?|грудень|грудня)/i},Ni={narrow:[/^с/i,/^л/i,/^б/i,/^к/i,/^т/i,/^ч/i,/^л/i,/^с/i,/^в/i,/^ж/i,/^л/i,/^г/i],any:[/^сі/i,/^лю/i,/^б/i,/^к/i,/^т/i,/^ч/i,/^лип/i,/^се/i,/^в/i,/^ж/i,/^лис/i,/^г/i]},ji={narrow:/^[нпвсч]/i,short:/^(нд|пн|вт|ср|чт|пт|сб)\.?/i,abbreviated:/^(нед|пон|вів|сер|че?тв|птн?|суб)\.?/i,wide:/^(неділ[яі]|понеділ[ок][ка]|вівтор[ок][ка]|серед[аи]|четвер(га)?|п\W*?ятниц[яі]|субот[аи])/i},Li={narrow:[/^н/i,/^п/i,/^в/i,/^с/i,/^ч/i,/^п/i,/^с/i],any:[/^н/i,/^п[он]/i,/^в/i,/^с[ер]/i,/^ч/i,/^п\W*?[ят]/i,/^с[уб]/i]},Ti={narrow:/^([дп]п|півн\.?|пол\.?|ранок|ранку|день|дня|веч\.?|ніч|ночі)/i,abbreviated:/^([дп]п|півн\.?|пол\.?|ранок|ранку|день|дня|веч\.?|ніч|ночі)/i,wide:/^([дп]п|північ|полудень|ранок|ранку|день|дня|вечір|вечора|ніч|ночі)/i},Ri={any:{am:/^дп/i,pm:/^пп/i,midnight:/^півн/i,noon:/^пол/i,morning:/^р/i,afternoon:/^д[ен]/i,evening:/^в/i,night:/^н/i}},Bi={ordinalNumber:Hn({matchPattern:Di,parsePattern:Oi,valueCallback:n=>parseInt(n,10)}),era:fe({matchPatterns:ki,defaultMatchWidth:"wide",parsePatterns:Ii,defaultParseWidth:"any"}),quarter:fe({matchPatterns:Ai,defaultMatchWidth:"wide",parsePatterns:Pi,defaultParseWidth:"any",valueCallback:n=>n+1}),month:fe({matchPatterns:Vi,defaultMatchWidth:"wide",parsePatterns:Ni,defaultParseWidth:"any"}),day:fe({matchPatterns:ji,defaultMatchWidth:"wide",parsePatterns:Li,defaultParseWidth:"any"}),dayPeriod:fe({matchPatterns:Ti,defaultMatchWidth:"wide",parsePatterns:Ri,defaultParseWidth:"any"})},tn={code:"uk",formatDistance:si,formatLong:di,formatRelative:vi,localize:Fi,match:Bi,options:{weekStartsOn:1,firstWeekContainsDate:1}},Wi=F("div")`
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
`,$i=F("div")`
color: var(--primary-focus);
`,Hi=({calendarRef:n,refData:e,waterData:i={}})=>{const{t:o}=re(),{date:t,dailyNorm:s,totalWaterPortionsForDay:a,percentageWater:u}=i,r=e==null?void 0:e.current.getBoundingClientRect().left,l=n==null?void 0:n.current.getBoundingClientRect().left;let d=!0;const p=r-l;return p<250&&(d=!1),c.jsxs(Wi,{$delta:d,$deltaNum:p,children:[c.jsx($i,{children:t}),c.jsxs("p",{children:[o("daysGeneralStats.norma")," ",c.jsx("span",{children:s})]}),c.jsxs("p",{children:[o("daysGeneralStats.fulfillment")," ",c.jsxs("span",{children:[u,"%"]})]}),c.jsxs("p",{children:[o("daysGeneralStats.servings")," ",c.jsx("span",{children:a})]})]})},zi=F("div")`
display: flex;
flex-direction:column;
row-gap:4px;
justify-content:center;
align-items:center;
position: relative;
`,Gi=F("button")`
display: flex;
align-items: center;
justify-content: center;
width: 34px;
height: 34px;
background-color:var(--primary-light);
border: 1px solid;
border-radius: 50%;
 ${({isConsumed:n})=>n?"border-color: transparent;":"border-color: var(--secondary-fourth);"}
`,_i=F("span")`
    font-size: 12px;
    text-align: center;
    color: var(--secondary-third);
`,Be=n=>n.auth.user.waterRate,De=n=>n.water.today,Ui=n=>n.water.month,Yi=({isConsumed:n,date:e,percentage:i,day:o,data:t,calendarRef:s,today:{todayWaterData:a,dailyNormaFullfilled:u}})=>{const r=z(Le),l=z(Be),[d,p]=g.useState(null),[v,x]=g.useState(null),b=g.useRef(null),w=o===_(new Date,"d, MMMM"),m=y=>{b.current&&!b.current.contains(y.target)&&p(null)};g.useEffect(()=>(document.addEventListener("click",m),()=>{document.removeEventListener("click",m)}),[]);const f=y=>{if(p(M=>M===y?null:y),r==="uk"&&(y=_(y,"d, MMMM",{locale:tn})),y===_(new Date,"d, MMMM"))x({date:y,dailyNorm:(l/1e3).toFixed(1),totalWaterPortionsForDay:a.portionsOfWater?a.portionsOfWater.length:0,percentageWater:u});else{const M=t[y]||0;x({date:y,dailyNorm:M?M.dailyNorm:0,totalWaterPortionsForDay:M?M.totalWaterPortionsForDay:0,percentageWater:M?parseInt(M.percentageWater):0})}};return c.jsxs(zi,{children:[c.jsx("div",{children:d&&c.jsx(Hi,{calendarRef:s,refData:b,waterData:v},o)}),c.jsx(Gi,{ref:b,onClick:()=>f(o),isConsumed:n,children:e}),c.jsxs(_i,{children:[w?u:i,"%"]})]})},qi=F("div")`
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
`,Xi=F("div")`
    min-width:180px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap:2px;
    @media only screen and (min-width: 768px) {
    column-gap:5px;
    min-width:190px;
}
`,Ct=F("button")`
padding:0;
width: 14px;
height: 14px;
svg {
    width: 14px;
    height: 14px;
    ${({active:n})=>n?"stroke: var(--secondary-third);":"stroke:var(--primary-focus);"}
}
`,Ki=F("div")`
font-size: 24px;
font-weight: 500;
line-height: 1.2;
color: var(--primary-dark);
@media only screen and (min-width: 768px) {
font-size: 26px;  
}
`,Qi=F("div")`
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
`,Zi="yyyy",Ji="MMMM",eo="d",to=()=>{const{t:n}=re(),e=z(Le),{waterForMonth:i=[]}=z(Ui),o=z(De),t=z(Be),{allAmountForDay:s=0}=z(De),[a,u]=g.useState(0),r=s/t*100,l=parseFloat(r).toFixed(0);g.useEffect(()=>{u(l)},[t,s,o,l]);const[d,p]=g.useState(new Date),[v,x]=g.useState(null),b=g.useRef(null),w=ti(d),m=ni(d),f=ei({start:w,end:m});let y=[];i.length>0&&(y=i==null?void 0:i.reduce((S,h)=>(S[h.date]=h,S),{}));let E;e==="uk"?E=_(d,"LLLL",{locale:tn}):E=_(d,Ji);const M=_(d,Zi),I=()=>{const S=ii(d,1);p(S),Et(S,new Date)?x(null):x("prev")},C=()=>{const S=Zt(d,1);p(S),Et(S,new Date)?x(null):x("next")};return c.jsxs("div",{ref:b,children:[c.jsxs(qi,{children:[c.jsx(Ki,{children:n("month")}),c.jsxs(Xi,{children:[c.jsx(Ct,{onClick:I,active:v==="next",type:"button",children:c.jsx("svg",{children:c.jsx("use",{href:`${q}#icon-pagination-arrow-prev`})})}),c.jsxs("span",{children:[E,", ",M]}),c.jsx(Ct,{onClick:C,active:v==="prev",type:"button",children:c.jsx("svg",{children:c.jsx("use",{href:`${q}#icon-pagination-arrow-next`})})})]})]}),c.jsx(Qi,{children:f.map(S=>{const h=_(S,"d, MMMM"),A=y[h]||0,P=A?parseInt(A.percentageWater):0,R=A?A&&parseInt(A.percentageWater)>=100:!1;return c.jsx(Yi,{isConsumed:R,date:_(S,eo),percentage:P,day:h,calendarRef:b,data:y,today:{todayWaterData:o,dailyNormaFullfilled:a}},h)})})]})},no=F("div")`
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
`,io=F("div")`
color: var(--primary-focus);
font-size: 18px;
line-height:140%;
`,oo=F("div")`
color: var(--primary-dark);
font-size: 12px;
line-height: 200%;
`,nn=({data:{amount:n,time:e}})=>c.jsxs(no,{children:[c.jsx("svg",{children:c.jsx("use",{href:`${q}#icon-glass`})}),c.jsxs(io,{children:[n," ml"]}),c.jsxs(oo,{children:[e," AM"]})]});var on={exports:{}};(function(n){(function(e,i){n.exports=i(e)})(typeof He<"u"?He:typeof window<"u"?window:He,function(e){if(typeof e>"u"&&typeof e.document>"u")return!1;var i="Notiflix",o=`

Visit documentation page to learn more: https://notiflix.github.io/documentation`,t='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',s={Success:"Success",Failure:"Failure",Warning:"Warning",Info:"Info"},a,u={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},r=function(f){return console.error("%c "+i+" Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549",`
`+f+o)},l=function(f){return f||(f="head"),e.document[f]===null?(r(`
Notiflix needs to be appended to the "<`+f+'>" element, but you called it before the "<'+f+'>" element has been created.'),!1):!0},d=function(f,y){if(!l("head"))return!1;if(f()!==null&&!e.document.getElementById(y)){var E=e.document.createElement("style");E.id=y,E.innerHTML=f(),e.document.head.appendChild(E)}},p=function(){var f={},y=!1,E=0;Object.prototype.toString.call(arguments[0])==="[object Boolean]"&&(y=arguments[0],E++);for(var M=function(I){for(var C in I)Object.prototype.hasOwnProperty.call(I,C)&&(y&&Object.prototype.toString.call(I[C])==="[object Object]"?f[C]=p(f[C],I[C]):f[C]=I[C])};E<arguments.length;E++)M(arguments[E]);return f},v=function(f){var y=e.document.createElement("div");return y.innerHTML=f,y.textContent||y.innerText||""},x=function(){var f='[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}';return f||null},b=0,w=function(f,y,E,M){if(!l("body"))return!1;a||m.Notify.init({});var I=p(!0,a,{});if(typeof E=="object"&&!Array.isArray(E)||typeof M=="object"&&!Array.isArray(M)){var C={};typeof E=="object"?C=E:typeof M=="object"&&(C=M),a=p(!0,a,C)}var S=a[f.toLocaleLowerCase("en")];b++,typeof y!="string"&&(y="Notiflix "+f),a.plainText&&(y=v(y)),!a.plainText&&y.length>a.messageMaxLength&&(a=p(!0,a,{closeButton:!0,messageMaxLength:150}),y='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),y.length>a.messageMaxLength&&(y=y.substring(0,a.messageMaxLength)+"..."),a.fontAwesomeIconStyle==="shadow"&&(S.fontAwesomeIconColor=S.background),a.cssAnimation||(a.cssAnimationDuration=0);var h=e.document.getElementById(u.wrapID)||e.document.createElement("div");if(h.id=u.wrapID,h.style.width=a.width,h.style.zIndex=a.zindex,h.style.opacity=a.opacity,a.position==="center-center"?(h.style.left=a.distance,h.style.top=a.distance,h.style.right=a.distance,h.style.bottom=a.distance,h.style.margin="auto",h.classList.add("nx-flex-center-center"),h.style.maxHeight="calc((100vh - "+a.distance+") - "+a.distance+")",h.style.display="flex",h.style.flexWrap="wrap",h.style.flexDirection="column",h.style.justifyContent="center",h.style.alignItems="center",h.style.pointerEvents="none"):a.position==="center-top"?(h.style.left=a.distance,h.style.right=a.distance,h.style.top=a.distance,h.style.bottom="auto",h.style.margin="auto"):a.position==="center-bottom"?(h.style.left=a.distance,h.style.right=a.distance,h.style.bottom=a.distance,h.style.top="auto",h.style.margin="auto"):a.position==="right-bottom"?(h.style.right=a.distance,h.style.bottom=a.distance,h.style.top="auto",h.style.left="auto"):a.position==="left-top"?(h.style.left=a.distance,h.style.top=a.distance,h.style.right="auto",h.style.bottom="auto"):a.position==="left-bottom"?(h.style.left=a.distance,h.style.bottom=a.distance,h.style.top="auto",h.style.right="auto"):(h.style.right=a.distance,h.style.top=a.distance,h.style.left="auto",h.style.bottom="auto"),a.backOverlay){var A=e.document.getElementById(u.overlayID)||e.document.createElement("div");A.id=u.overlayID,A.style.width="100%",A.style.height="100%",A.style.position="fixed",A.style.zIndex=a.zindex-1,A.style.left=0,A.style.top=0,A.style.right=0,A.style.bottom=0,A.style.background=S.backOverlayColor||a.backOverlayColor,A.className=a.cssAnimation?"nx-with-animation":"",A.style.animationDuration=a.cssAnimation?a.cssAnimationDuration+"ms":"",e.document.getElementById(u.overlayID)||e.document.body.appendChild(A)}e.document.getElementById(u.wrapID)||e.document.body.appendChild(h);var P=e.document.createElement("div");P.id=a.ID+"-"+b,P.className=a.className+" "+S.childClassName+" "+(a.cssAnimation?"nx-with-animation":"")+" "+(a.useIcon?"nx-with-icon":"")+" nx-"+a.cssAnimationStyle+" "+(a.closeButton&&typeof E!="function"?"nx-with-close-button":"")+" "+(typeof E=="function"?"nx-with-callback":"")+" "+(a.clickToClose?"nx-notify-click-to-close":""),P.style.fontSize=a.fontSize,P.style.color=S.textColor,P.style.background=S.background,P.style.borderRadius=a.borderRadius,P.style.pointerEvents="all",a.rtl&&(P.setAttribute("dir","rtl"),P.classList.add("nx-rtl-on")),P.style.fontFamily='"'+a.fontFamily+'", '+t,a.cssAnimation&&(P.style.animationDuration=a.cssAnimationDuration+"ms");var R="";if(a.closeButton&&typeof E!="function"&&(R='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+S.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),a.useIcon)if(a.useFontAwesome)P.innerHTML='<i style="color:'+S.fontAwesomeIconColor+"; font-size:"+a.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+S.fontAwesomeClassName+" "+(a.fontAwesomeIconStyle==="shadow"?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+y+"</span>"+(a.closeButton?R:"");else{var j="";f===s.Success?j='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+S.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':f===s.Failure?j='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+S.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':f===s.Warning?j='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+S.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':f===s.Info&&(j='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+S.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),P.innerHTML=j+'<span class="nx-message nx-with-icon">'+y+"</span>"+(a.closeButton?R:"")}else P.innerHTML='<span class="nx-message">'+y+"</span>"+(a.closeButton?R:"");if(a.position==="left-bottom"||a.position==="right-bottom"){var X=e.document.getElementById(u.wrapID);X.insertBefore(P,X.firstChild)}else e.document.getElementById(u.wrapID).appendChild(P);var B=e.document.getElementById(P.id);if(B){var L,V,Y=function(){B.classList.add("nx-remove");var W=e.document.getElementById(u.overlayID);W&&h.childElementCount<=0&&W.classList.add("nx-remove"),clearTimeout(L)},G=function(){if(B&&B.parentNode!==null&&B.parentNode.removeChild(B),h.childElementCount<=0&&h.parentNode!==null){h.parentNode.removeChild(h);var W=e.document.getElementById(u.overlayID);W&&W.parentNode!==null&&W.parentNode.removeChild(W)}clearTimeout(V)};if(a.closeButton&&typeof E!="function"){var J=e.document.getElementById(P.id).querySelector("span.nx-close-button");J.addEventListener("click",function(){Y();var W=setTimeout(function(){G(),clearTimeout(W)},a.cssAnimationDuration)})}if((typeof E=="function"||a.clickToClose)&&B.addEventListener("click",function(){typeof E=="function"&&E(),Y();var W=setTimeout(function(){G(),clearTimeout(W)},a.cssAnimationDuration)}),!a.closeButton&&typeof E!="function"){var K=function(){L=setTimeout(function(){Y()},a.timeout),V=setTimeout(function(){G()},a.timeout+a.cssAnimationDuration)};K(),a.pauseOnHover&&(B.addEventListener("mouseenter",function(){B.classList.add("nx-paused"),clearTimeout(L),clearTimeout(V)}),B.addEventListener("mouseleave",function(){B.classList.remove("nx-paused"),K()}))}}if(a.showOnlyTheLastOne&&b>0)for(var se=e.document.querySelectorAll("[id^="+a.ID+"-]:not([id="+a.ID+"-"+b+"])"),N=0;N<se.length;N++){var H=se[N];H.parentNode!==null&&H.parentNode.removeChild(H)}a=p(!0,a,I)},m={Notify:{init:function(f){a=p(!0,u,f),d(x,"NotiflixNotifyInternalCSS")},merge:function(f){if(a)a=p(!0,a,f);else return r("You have to initialize the Notify module before call Merge function."),!1},success:function(f,y,E){w(s.Success,f,y,E)},failure:function(f,y,E){w(s.Failure,f,y,E)},warning:function(f,y,E){w(s.Warning,f,y,E)},info:function(f,y,E){w(s.Info,f,y,E)}}};return typeof e.Notiflix=="object"?p(!0,e.Notiflix,{Notify:m.Notify}):{Notify:m.Notify}})})(on);var ce=on.exports;const ao=$("label")`
display: flex;
flex-direction: column;
row-gap: 8px;
position: relative;
`,ro=$("input")`
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
`,so=$("p")`
position: absolute;
bottom:-30px;
left:5px;
  color: var(--secondary-second);
  font-size: 12px;
  line-height: 120%;
`,Me=({label:n="",error:e,...i})=>c.jsxs(ao,{children:[n,c.jsx(ro,{...i}),e&&c.jsx(so,{children:e})]}),ve=qt`
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
`;$("input")`
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
`;const st=qt`
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
`,de=$("div")`
  font-size: 18px;
  font-weight: 500;
  line-height: 110%;
  margin-bottom: 16px;
`,ut=$("h3")`
  max-width: 200px;
  font-size: 26px;
  font-weight: 500;
  line-height: 120%;
  color: var(--primary-dark);
  @media only screen and (min-width: 768px) {
    max-width: 600px;
  }
`,lt=$("button")`
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
`,ct=$("span")`
  display: flex;
  align-items: center;
  justify-content:center;
  max-height:20px;
  width:auto;
`;function ge(n,e,i){return e=zn(e),e in n?Object.defineProperty(n,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[e]=i,n}function St(n,e){var i=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})),i.push.apply(i,o)}return i}function O(n){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?St(Object(i),!0).forEach(function(o){ge(n,o,i[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(i)):St(Object(i)).forEach(function(o){Object.defineProperty(n,o,Object.getOwnPropertyDescriptor(i,o))})}return n}function uo(n){if(Array.isArray(n))return n}function lo(n,e){var i=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(i!=null){var o,t,s,a,u=[],r=!0,l=!1;try{if(s=(i=i.call(n)).next,e===0){if(Object(i)!==i)return;r=!1}else for(;!(r=(o=s.call(i)).done)&&(u.push(o.value),u.length!==e);r=!0);}catch(d){l=!0,t=d}finally{try{if(!r&&i.return!=null&&(a=i.return(),Object(a)!==a))return}finally{if(l)throw t}}return u}}function Ze(n,e){(e==null||e>n.length)&&(e=n.length);for(var i=0,o=new Array(e);i<e;i++)o[i]=n[i];return o}function an(n,e){if(n){if(typeof n=="string")return Ze(n,e);var i=Object.prototype.toString.call(n).slice(8,-1);if(i==="Object"&&n.constructor&&(i=n.constructor.name),i==="Map"||i==="Set")return Array.from(n);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return Ze(n,e)}}function co(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ne(n,e){return uo(n)||lo(n,e)||an(n,e)||co()}function po(n,e){if(n==null)return{};var i={},o=Object.keys(n),t,s;for(s=0;s<o.length;s++)t=o[s],!(e.indexOf(t)>=0)&&(i[t]=n[t]);return i}function ie(n,e){if(n==null)return{};var i=po(n,e),o,t;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(t=0;t<s.length;t++)o=s[t],!(e.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(n,o)&&(i[o]=n[o])}return i}var fo=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function mo(n){var e=n.defaultInputValue,i=e===void 0?"":e,o=n.defaultMenuIsOpen,t=o===void 0?!1:o,s=n.defaultValue,a=s===void 0?null:s,u=n.inputValue,r=n.menuIsOpen,l=n.onChange,d=n.onInputChange,p=n.onMenuClose,v=n.onMenuOpen,x=n.value,b=ie(n,fo),w=g.useState(u!==void 0?u:i),m=ne(w,2),f=m[0],y=m[1],E=g.useState(r!==void 0?r:t),M=ne(E,2),I=M[0],C=M[1],S=g.useState(x!==void 0?x:a),h=ne(S,2),A=h[0],P=h[1],R=g.useCallback(function(G,J){typeof l=="function"&&l(G,J),P(G)},[l]),j=g.useCallback(function(G,J){var K;typeof d=="function"&&(K=d(G,J)),y(K!==void 0?K:G)},[d]),X=g.useCallback(function(){typeof v=="function"&&v(),C(!0)},[v]),B=g.useCallback(function(){typeof p=="function"&&p(),C(!1)},[p]),L=u!==void 0?u:f,V=r!==void 0?r:I,Y=x!==void 0?x:A;return O(O({},b),{},{inputValue:L,menuIsOpen:V,onChange:R,onInputChange:j,onMenuClose:B,onMenuOpen:X,value:Y})}function Je(n,e){return Je=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,t){return o.__proto__=t,o},Je(n,e)}function ho(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),e&&Je(n,e)}function Oe(n){return Oe=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(i){return i.__proto__||Object.getPrototypeOf(i)},Oe(n)}function rn(){try{var n=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(rn=function(){return!!n})()}function go(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function vo(n,e){if(e&&(Xt(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return go(n)}function xo(n){var e=rn();return function(){var o=Oe(n),t;if(e){var s=Oe(this).constructor;t=Reflect.construct(o,arguments,s)}else t=o.apply(this,arguments);return vo(this,t)}}function bo(n){if(Array.isArray(n))return Ze(n)}function yo(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function wo(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function dt(n){return bo(n)||yo(n)||an(n)||wo()}function Eo(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}const Co=Math.min,So=Math.max,ke=Math.round,be=Math.floor,Ie=n=>({x:n,y:n});function Mo(n){return{...n,top:n.y,left:n.x,right:n.x+n.width,bottom:n.y+n.height}}function sn(n){return ln(n)?(n.nodeName||"").toLowerCase():"#document"}function Z(n){var e;return(n==null||(e=n.ownerDocument)==null?void 0:e.defaultView)||window}function un(n){var e;return(e=(ln(n)?n.ownerDocument:n.document)||window.document)==null?void 0:e.documentElement}function ln(n){return n instanceof Node||n instanceof Z(n).Node}function et(n){return n instanceof Element||n instanceof Z(n).Element}function pt(n){return n instanceof HTMLElement||n instanceof Z(n).HTMLElement}function Mt(n){return typeof ShadowRoot>"u"?!1:n instanceof ShadowRoot||n instanceof Z(n).ShadowRoot}function cn(n){const{overflow:e,overflowX:i,overflowY:o,display:t}=ft(n);return/auto|scroll|overlay|hidden|clip/.test(e+o+i)&&!["inline","contents"].includes(t)}function Fo(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Do(n){return["html","body","#document"].includes(sn(n))}function ft(n){return Z(n).getComputedStyle(n)}function Oo(n){if(sn(n)==="html")return n;const e=n.assignedSlot||n.parentNode||Mt(n)&&n.host||un(n);return Mt(e)?e.host:e}function dn(n){const e=Oo(n);return Do(e)?n.ownerDocument?n.ownerDocument.body:n.body:pt(e)&&cn(e)?e:dn(e)}function Ae(n,e,i){var o;e===void 0&&(e=[]),i===void 0&&(i=!0);const t=dn(n),s=t===((o=n.ownerDocument)==null?void 0:o.body),a=Z(t);return s?e.concat(a,a.visualViewport||[],cn(t)?t:[],a.frameElement&&i?Ae(a.frameElement):[]):e.concat(t,Ae(t,[],i))}function ko(n){const e=ft(n);let i=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const t=pt(n),s=t?n.offsetWidth:i,a=t?n.offsetHeight:o,u=ke(i)!==s||ke(o)!==a;return u&&(i=s,o=a),{width:i,height:o,$:u}}function mt(n){return et(n)?n:n.contextElement}function ze(n){const e=mt(n);if(!pt(e))return Ie(1);const i=e.getBoundingClientRect(),{width:o,height:t,$:s}=ko(e);let a=(s?ke(i.width):i.width)/o,u=(s?ke(i.height):i.height)/t;return(!a||!Number.isFinite(a))&&(a=1),(!u||!Number.isFinite(u))&&(u=1),{x:a,y:u}}const Io=Ie(0);function Ao(n){const e=Z(n);return!Fo()||!e.visualViewport?Io:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Po(n,e,i){return e===void 0&&(e=!1),!i||e&&i!==Z(n)?!1:e}function Ft(n,e,i,o){e===void 0&&(e=!1),i===void 0&&(i=!1);const t=n.getBoundingClientRect(),s=mt(n);let a=Ie(1);e&&(o?et(o)&&(a=ze(o)):a=ze(n));const u=Po(s,i,o)?Ao(s):Ie(0);let r=(t.left+u.x)/a.x,l=(t.top+u.y)/a.y,d=t.width/a.x,p=t.height/a.y;if(s){const v=Z(s),x=o&&et(o)?Z(o):o;let b=v,w=b.frameElement;for(;w&&o&&x!==b;){const m=ze(w),f=w.getBoundingClientRect(),y=ft(w),E=f.left+(w.clientLeft+parseFloat(y.paddingLeft))*m.x,M=f.top+(w.clientTop+parseFloat(y.paddingTop))*m.y;r*=m.x,l*=m.y,d*=m.x,p*=m.y,r+=E,l+=M,b=Z(w),w=b.frameElement}}return Mo({width:d,height:p,x:r,y:l})}function Vo(n,e){let i=null,o;const t=un(n);function s(){var u;clearTimeout(o),(u=i)==null||u.disconnect(),i=null}function a(u,r){u===void 0&&(u=!1),r===void 0&&(r=1),s();const{left:l,top:d,width:p,height:v}=n.getBoundingClientRect();if(u||e(),!p||!v)return;const x=be(d),b=be(t.clientWidth-(l+p)),w=be(t.clientHeight-(d+v)),m=be(l),y={rootMargin:-x+"px "+-b+"px "+-w+"px "+-m+"px",threshold:So(0,Co(1,r))||1};let E=!0;function M(I){const C=I[0].intersectionRatio;if(C!==r){if(!E)return a();C?a(!1,C):o=setTimeout(()=>{a(!1,1e-7)},100)}E=!1}try{i=new IntersectionObserver(M,{...y,root:t.ownerDocument})}catch{i=new IntersectionObserver(M,y)}i.observe(n)}return a(!0),s}function No(n,e,i,o){o===void 0&&(o={});const{ancestorScroll:t=!0,ancestorResize:s=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:u=typeof IntersectionObserver=="function",animationFrame:r=!1}=o,l=mt(n),d=t||s?[...l?Ae(l):[],...Ae(e)]:[];d.forEach(f=>{t&&f.addEventListener("scroll",i,{passive:!0}),s&&f.addEventListener("resize",i)});const p=l&&u?Vo(l,i):null;let v=-1,x=null;a&&(x=new ResizeObserver(f=>{let[y]=f;y&&y.target===l&&x&&(x.unobserve(e),cancelAnimationFrame(v),v=requestAnimationFrame(()=>{var E;(E=x)==null||E.observe(e)})),i()}),l&&!r&&x.observe(l),x.observe(e));let b,w=r?Ft(n):null;r&&m();function m(){const f=Ft(n);w&&(f.x!==w.x||f.y!==w.y||f.width!==w.width||f.height!==w.height)&&i(),w=f,b=requestAnimationFrame(m)}return i(),()=>{var f;d.forEach(y=>{t&&y.removeEventListener("scroll",i),s&&y.removeEventListener("resize",i)}),p==null||p(),(f=x)==null||f.disconnect(),x=null,r&&cancelAnimationFrame(b)}}var tt=g.useLayoutEffect,jo=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],Pe=function(){};function Lo(n,e){return e?e[0]==="-"?n+e:n+"__"+e:n}function To(n,e){for(var i=arguments.length,o=new Array(i>2?i-2:0),t=2;t<i;t++)o[t-2]=arguments[t];var s=[].concat(o);if(e&&n)for(var a in e)e.hasOwnProperty(a)&&e[a]&&s.push("".concat(Lo(n,a)));return s.filter(function(u){return u}).map(function(u){return String(u).trim()}).join(" ")}var Dt=function(e){return Uo(e)?e.filter(Boolean):Xt(e)==="object"&&e!==null?[e]:[]},pn=function(e){e.className,e.clearValue,e.cx,e.getStyles,e.getClassNames,e.getValue,e.hasValue,e.isMulti,e.isRtl,e.options,e.selectOption,e.selectProps,e.setValue,e.theme;var i=ie(e,jo);return O({},i)},T=function(e,i,o){var t=e.cx,s=e.getStyles,a=e.getClassNames,u=e.className;return{css:s(i,e),className:t(o??{},a(i,e),u)}};function We(n){return[document.documentElement,document.body,window].indexOf(n)>-1}function Ro(n){return We(n)?window.innerHeight:n.clientHeight}function fn(n){return We(n)?window.pageYOffset:n.scrollTop}function Ve(n,e){if(We(n)){window.scrollTo(0,e);return}n.scrollTop=e}function Bo(n){var e=getComputedStyle(n),i=e.position==="absolute",o=/(auto|scroll)/;if(e.position==="fixed")return document.documentElement;for(var t=n;t=t.parentElement;)if(e=getComputedStyle(t),!(i&&e.position==="static")&&o.test(e.overflow+e.overflowY+e.overflowX))return t;return document.documentElement}function Wo(n,e,i,o){return i*((n=n/o-1)*n*n+1)+e}function ye(n,e){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:Pe,t=fn(n),s=e-t,a=10,u=0;function r(){u+=a;var l=Wo(u,t,s,i);Ve(n,l),u<i?window.requestAnimationFrame(r):o(n)}r()}function Ot(n,e){var i=n.getBoundingClientRect(),o=e.getBoundingClientRect(),t=e.offsetHeight/3;o.bottom+t>i.bottom?Ve(n,Math.min(e.offsetTop+e.clientHeight-n.offsetHeight+t,n.scrollHeight)):o.top-t<i.top&&Ve(n,Math.max(e.offsetTop-t,0))}function $o(n){var e=n.getBoundingClientRect();return{bottom:e.bottom,height:e.height,left:e.left,right:e.right,top:e.top,width:e.width}}function kt(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function Ho(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var mn=!1,zo={get passive(){return mn=!0}},we=typeof window<"u"?window:{};we.addEventListener&&we.removeEventListener&&(we.addEventListener("p",Pe,zo),we.removeEventListener("p",Pe,!1));var Go=mn;function _o(n){return n!=null}function Uo(n){return Array.isArray(n)}function Ee(n,e,i){return n?e:i}var Yo=function(e){for(var i=arguments.length,o=new Array(i>1?i-1:0),t=1;t<i;t++)o[t-1]=arguments[t];var s=Object.entries(e).filter(function(a){var u=ne(a,1),r=u[0];return!o.includes(r)});return s.reduce(function(a,u){var r=ne(u,2),l=r[0],d=r[1];return a[l]=d,a},{})},qo=["children","innerProps"],Xo=["children","innerProps"];function Ko(n){var e=n.maxHeight,i=n.menuEl,o=n.minHeight,t=n.placement,s=n.shouldScroll,a=n.isFixedPosition,u=n.controlHeight,r=Bo(i),l={placement:"bottom",maxHeight:e};if(!i||!i.offsetParent)return l;var d=r.getBoundingClientRect(),p=d.height,v=i.getBoundingClientRect(),x=v.bottom,b=v.height,w=v.top,m=i.offsetParent.getBoundingClientRect(),f=m.top,y=a?window.innerHeight:Ro(r),E=fn(r),M=parseInt(getComputedStyle(i).marginBottom,10),I=parseInt(getComputedStyle(i).marginTop,10),C=f-I,S=y-w,h=C+E,A=p-E-w,P=x-y+E+M,R=E+w-I,j=160;switch(t){case"auto":case"bottom":if(S>=b)return{placement:"bottom",maxHeight:e};if(A>=b&&!a)return s&&ye(r,P,j),{placement:"bottom",maxHeight:e};if(!a&&A>=o||a&&S>=o){s&&ye(r,P,j);var X=a?S-M:A-M;return{placement:"bottom",maxHeight:X}}if(t==="auto"||a){var B=e,L=a?C:h;return L>=o&&(B=Math.min(L-M-u,e)),{placement:"top",maxHeight:B}}if(t==="bottom")return s&&Ve(r,P),{placement:"bottom",maxHeight:e};break;case"top":if(C>=b)return{placement:"top",maxHeight:e};if(h>=b&&!a)return s&&ye(r,R,j),{placement:"top",maxHeight:e};if(!a&&h>=o||a&&C>=o){var V=e;return(!a&&h>=o||a&&C>=o)&&(V=a?C-I:h-I),s&&ye(r,R,j),{placement:"top",maxHeight:V}}return{placement:"bottom",maxHeight:e};default:throw new Error('Invalid placement provided "'.concat(t,'".'))}return l}function Qo(n){var e={bottom:"top",top:"bottom"};return n?e[n]:"bottom"}var hn=function(e){return e==="auto"?"bottom":e},Zo=function(e,i){var o,t=e.placement,s=e.theme,a=s.borderRadius,u=s.spacing,r=s.colors;return O((o={label:"menu"},ge(o,Qo(t),"100%"),ge(o,"position","absolute"),ge(o,"width","100%"),ge(o,"zIndex",1),o),i?{}:{backgroundColor:r.neutral0,borderRadius:a,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:u.menuGutter,marginTop:u.menuGutter})},gn=g.createContext(null),Jo=function(e){var i=e.children,o=e.minMenuHeight,t=e.maxMenuHeight,s=e.menuPlacement,a=e.menuPosition,u=e.menuShouldScrollIntoView,r=e.theme,l=g.useContext(gn)||{},d=l.setPortalPlacement,p=g.useRef(null),v=g.useState(t),x=ne(v,2),b=x[0],w=x[1],m=g.useState(null),f=ne(m,2),y=f[0],E=f[1],M=r.spacing.controlHeight;return tt(function(){var I=p.current;if(I){var C=a==="fixed",S=u&&!C,h=Ko({maxHeight:t,menuEl:I,minHeight:o,placement:s,shouldScroll:S,isFixedPosition:C,controlHeight:M});w(h.maxHeight),E(h.placement),d==null||d(h.placement)}},[t,s,a,u,o,d,M]),i({ref:p,placerProps:O(O({},e),{},{placement:y||hn(s),maxHeight:b})})},ea=function(e){var i=e.children,o=e.innerRef,t=e.innerProps;return D("div",k({},T(e,"menu",{menu:!0}),{ref:o},t),i)},ta=ea,na=function(e,i){var o=e.maxHeight,t=e.theme.spacing.baseUnit;return O({maxHeight:o,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},i?{}:{paddingBottom:t,paddingTop:t})},ia=function(e){var i=e.children,o=e.innerProps,t=e.innerRef,s=e.isMulti;return D("div",k({},T(e,"menuList",{"menu-list":!0,"menu-list--is-multi":s}),{ref:t},o),i)},vn=function(e,i){var o=e.theme,t=o.spacing.baseUnit,s=o.colors;return O({textAlign:"center"},i?{}:{color:s.neutral40,padding:"".concat(t*2,"px ").concat(t*3,"px")})},oa=vn,aa=vn,ra=function(e){var i=e.children,o=i===void 0?"No options":i,t=e.innerProps,s=ie(e,qo);return D("div",k({},T(O(O({},s),{},{children:o,innerProps:t}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),t),o)},sa=function(e){var i=e.children,o=i===void 0?"Loading...":i,t=e.innerProps,s=ie(e,Xo);return D("div",k({},T(O(O({},s),{},{children:o,innerProps:t}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),t),o)},ua=function(e){var i=e.rect,o=e.offset,t=e.position;return{left:i.left,position:t,top:o,width:i.width,zIndex:1}},la=function(e){var i=e.appendTo,o=e.children,t=e.controlElement,s=e.innerProps,a=e.menuPlacement,u=e.menuPosition,r=g.useRef(null),l=g.useRef(null),d=g.useState(hn(a)),p=ne(d,2),v=p[0],x=p[1],b=g.useMemo(function(){return{setPortalPlacement:x}},[]),w=g.useState(null),m=ne(w,2),f=m[0],y=m[1],E=g.useCallback(function(){if(t){var S=$o(t),h=u==="fixed"?0:window.pageYOffset,A=S[v]+h;(A!==(f==null?void 0:f.offset)||S.left!==(f==null?void 0:f.rect.left)||S.width!==(f==null?void 0:f.rect.width))&&y({offset:A,rect:S})}},[t,u,v,f==null?void 0:f.offset,f==null?void 0:f.rect.left,f==null?void 0:f.rect.width]);tt(function(){E()},[E]);var M=g.useCallback(function(){typeof l.current=="function"&&(l.current(),l.current=null),t&&r.current&&(l.current=No(t,r.current,E,{elementResize:"ResizeObserver"in window}))},[t,E]);tt(function(){M()},[M]);var I=g.useCallback(function(S){r.current=S,M()},[M]);if(!i&&u!=="fixed"||!f)return null;var C=D("div",k({ref:I},T(O(O({},e),{},{offset:f.offset,position:u,rect:f.rect}),"menuPortal",{"menu-portal":!0}),s),o);return D(gn.Provider,{value:b},i?Gn.createPortal(C,i):C)},ca=function(e){var i=e.isDisabled,o=e.isRtl;return{label:"container",direction:o?"rtl":void 0,pointerEvents:i?"none":void 0,position:"relative"}},da=function(e){var i=e.children,o=e.innerProps,t=e.isDisabled,s=e.isRtl;return D("div",k({},T(e,"container",{"--is-disabled":t,"--is-rtl":s}),o),i)},pa=function(e,i){var o=e.theme.spacing,t=e.isMulti,s=e.hasValue,a=e.selectProps.controlShouldRenderValue;return O({alignItems:"center",display:t&&s&&a?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},i?{}:{padding:"".concat(o.baseUnit/2,"px ").concat(o.baseUnit*2,"px")})},fa=function(e){var i=e.children,o=e.innerProps,t=e.isMulti,s=e.hasValue;return D("div",k({},T(e,"valueContainer",{"value-container":!0,"value-container--is-multi":t,"value-container--has-value":s}),o),i)},ma=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},ha=function(e){var i=e.children,o=e.innerProps;return D("div",k({},T(e,"indicatorsContainer",{indicators:!0}),o),i)},It,ga=["size"],va=["innerProps","isRtl","size"],xa={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},xn=function(e){var i=e.size,o=ie(e,ga);return D("svg",k({height:i,width:i,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:xa},o))},ht=function(e){return D(xn,k({size:20},e),D("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},bn=function(e){return D(xn,k({size:20},e),D("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},yn=function(e,i){var o=e.isFocused,t=e.theme,s=t.spacing.baseUnit,a=t.colors;return O({label:"indicatorContainer",display:"flex",transition:"color 150ms"},i?{}:{color:o?a.neutral60:a.neutral20,padding:s*2,":hover":{color:o?a.neutral80:a.neutral40}})},ba=yn,ya=function(e){var i=e.children,o=e.innerProps;return D("div",k({},T(e,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),o),i||D(bn,null))},wa=yn,Ea=function(e){var i=e.children,o=e.innerProps;return D("div",k({},T(e,"clearIndicator",{indicator:!0,"clear-indicator":!0}),o),i||D(ht,null))},Ca=function(e,i){var o=e.isDisabled,t=e.theme,s=t.spacing.baseUnit,a=t.colors;return O({label:"indicatorSeparator",alignSelf:"stretch",width:1},i?{}:{backgroundColor:o?a.neutral10:a.neutral20,marginBottom:s*2,marginTop:s*2})},Sa=function(e){var i=e.innerProps;return D("span",k({},i,T(e,"indicatorSeparator",{"indicator-separator":!0})))},Ma=oi(It||(It=Eo([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),Fa=function(e,i){var o=e.isFocused,t=e.size,s=e.theme,a=s.colors,u=s.spacing.baseUnit;return O({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:t,lineHeight:1,marginRight:t,textAlign:"center",verticalAlign:"middle"},i?{}:{color:o?a.neutral60:a.neutral20,padding:u*2})},Ge=function(e){var i=e.delay,o=e.offset;return D("span",{css:at({animation:"".concat(Ma," 1s ease-in-out ").concat(i,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:o?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},Da=function(e){var i=e.innerProps,o=e.isRtl,t=e.size,s=t===void 0?4:t,a=ie(e,va);return D("div",k({},T(O(O({},a),{},{innerProps:i,isRtl:o,size:s}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),i),D(Ge,{delay:0,offset:o}),D(Ge,{delay:160,offset:!0}),D(Ge,{delay:320,offset:!o}))},Oa=function(e,i){var o=e.isDisabled,t=e.isFocused,s=e.theme,a=s.colors,u=s.borderRadius,r=s.spacing;return O({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:r.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},i?{}:{backgroundColor:o?a.neutral5:a.neutral0,borderColor:o?a.neutral10:t?a.primary:a.neutral20,borderRadius:u,borderStyle:"solid",borderWidth:1,boxShadow:t?"0 0 0 1px ".concat(a.primary):void 0,"&:hover":{borderColor:t?a.primary:a.neutral30}})},ka=function(e){var i=e.children,o=e.isDisabled,t=e.isFocused,s=e.innerRef,a=e.innerProps,u=e.menuIsOpen;return D("div",k({ref:s},T(e,"control",{control:!0,"control--is-disabled":o,"control--is-focused":t,"control--menu-is-open":u}),a,{"aria-disabled":o||void 0}),i)},Ia=ka,Aa=["data"],Pa=function(e,i){var o=e.theme.spacing;return i?{}:{paddingBottom:o.baseUnit*2,paddingTop:o.baseUnit*2}},Va=function(e){var i=e.children,o=e.cx,t=e.getStyles,s=e.getClassNames,a=e.Heading,u=e.headingProps,r=e.innerProps,l=e.label,d=e.theme,p=e.selectProps;return D("div",k({},T(e,"group",{group:!0}),r),D(a,k({},u,{selectProps:p,theme:d,getStyles:t,getClassNames:s,cx:o}),l),D("div",null,i))},Na=function(e,i){var o=e.theme,t=o.colors,s=o.spacing;return O({label:"group",cursor:"default",display:"block"},i?{}:{color:t.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:s.baseUnit*3,paddingRight:s.baseUnit*3,textTransform:"uppercase"})},ja=function(e){var i=pn(e);i.data;var o=ie(i,Aa);return D("div",k({},T(e,"groupHeading",{"group-heading":!0}),o))},La=Va,Ta=["innerRef","isDisabled","isHidden","inputClassName"],Ra=function(e,i){var o=e.isDisabled,t=e.value,s=e.theme,a=s.spacing,u=s.colors;return O(O({visibility:o?"hidden":"visible",transform:t?"translateZ(0)":""},Ba),i?{}:{margin:a.baseUnit/2,paddingBottom:a.baseUnit/2,paddingTop:a.baseUnit/2,color:u.neutral80})},wn={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},Ba={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":O({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},wn)},Wa=function(e){return O({label:"input",color:"inherit",background:0,opacity:e?0:1,width:"100%"},wn)},$a=function(e){var i=e.cx,o=e.value,t=pn(e),s=t.innerRef,a=t.isDisabled,u=t.isHidden,r=t.inputClassName,l=ie(t,Ta);return D("div",k({},T(e,"input",{"input-container":!0}),{"data-value":o||""}),D("input",k({className:i({input:!0},r),ref:s,style:Wa(u),disabled:a},l)))},Ha=$a,za=function(e,i){var o=e.theme,t=o.spacing,s=o.borderRadius,a=o.colors;return O({label:"multiValue",display:"flex",minWidth:0},i?{}:{backgroundColor:a.neutral10,borderRadius:s/2,margin:t.baseUnit/2})},Ga=function(e,i){var o=e.theme,t=o.borderRadius,s=o.colors,a=e.cropWithEllipsis;return O({overflow:"hidden",textOverflow:a||a===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},i?{}:{borderRadius:t/2,color:s.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},_a=function(e,i){var o=e.theme,t=o.spacing,s=o.borderRadius,a=o.colors,u=e.isFocused;return O({alignItems:"center",display:"flex"},i?{}:{borderRadius:s/2,backgroundColor:u?a.dangerLight:void 0,paddingLeft:t.baseUnit,paddingRight:t.baseUnit,":hover":{backgroundColor:a.dangerLight,color:a.danger}})},En=function(e){var i=e.children,o=e.innerProps;return D("div",o,i)},Ua=En,Ya=En;function qa(n){var e=n.children,i=n.innerProps;return D("div",k({role:"button"},i),e||D(ht,{size:14}))}var Xa=function(e){var i=e.children,o=e.components,t=e.data,s=e.innerProps,a=e.isDisabled,u=e.removeProps,r=e.selectProps,l=o.Container,d=o.Label,p=o.Remove;return D(l,{data:t,innerProps:O(O({},T(e,"multiValue",{"multi-value":!0,"multi-value--is-disabled":a})),s),selectProps:r},D(d,{data:t,innerProps:O({},T(e,"multiValueLabel",{"multi-value__label":!0})),selectProps:r},i),D(p,{data:t,innerProps:O(O({},T(e,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(i||"option")},u),selectProps:r}))},Ka=Xa,Qa=function(e,i){var o=e.isDisabled,t=e.isFocused,s=e.isSelected,a=e.theme,u=a.spacing,r=a.colors;return O({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},i?{}:{backgroundColor:s?r.primary:t?r.primary25:"transparent",color:o?r.neutral20:s?r.neutral0:"inherit",padding:"".concat(u.baseUnit*2,"px ").concat(u.baseUnit*3,"px"),":active":{backgroundColor:o?void 0:s?r.primary:r.primary50}})},Za=function(e){var i=e.children,o=e.isDisabled,t=e.isFocused,s=e.isSelected,a=e.innerRef,u=e.innerProps;return D("div",k({},T(e,"option",{option:!0,"option--is-disabled":o,"option--is-focused":t,"option--is-selected":s}),{ref:a,"aria-disabled":o},u),i)},Ja=Za,er=function(e,i){var o=e.theme,t=o.spacing,s=o.colors;return O({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},i?{}:{color:s.neutral50,marginLeft:t.baseUnit/2,marginRight:t.baseUnit/2})},tr=function(e){var i=e.children,o=e.innerProps;return D("div",k({},T(e,"placeholder",{placeholder:!0}),o),i)},nr=tr,ir=function(e,i){var o=e.isDisabled,t=e.theme,s=t.spacing,a=t.colors;return O({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},i?{}:{color:o?a.neutral40:a.neutral80,marginLeft:s.baseUnit/2,marginRight:s.baseUnit/2})},or=function(e){var i=e.children,o=e.isDisabled,t=e.innerProps;return D("div",k({},T(e,"singleValue",{"single-value":!0,"single-value--is-disabled":o}),t),i)},ar=or,rr={ClearIndicator:Ea,Control:Ia,DropdownIndicator:ya,DownChevron:bn,CrossIcon:ht,Group:La,GroupHeading:ja,IndicatorsContainer:ha,IndicatorSeparator:Sa,Input:Ha,LoadingIndicator:Da,Menu:ta,MenuList:ia,MenuPortal:la,LoadingMessage:sa,NoOptionsMessage:ra,MultiValue:Ka,MultiValueContainer:Ua,MultiValueLabel:Ya,MultiValueRemove:qa,Option:Ja,Placeholder:nr,SelectContainer:da,SingleValue:ar,ValueContainer:fa},sr=function(e){return O(O({},rr),e.components)},At=Number.isNaN||function(e){return typeof e=="number"&&e!==e};function ur(n,e){return!!(n===e||At(n)&&At(e))}function lr(n,e){if(n.length!==e.length)return!1;for(var i=0;i<n.length;i++)if(!ur(n[i],e[i]))return!1;return!0}function cr(n,e){e===void 0&&(e=lr);var i=null;function o(){for(var t=[],s=0;s<arguments.length;s++)t[s]=arguments[s];if(i&&i.lastThis===this&&e(t,i.lastArgs))return i.lastResult;var a=n.apply(this,t);return i={lastResult:a,lastArgs:t,lastThis:this},a}return o.clear=function(){i=null},o}var dr={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},pr=function(e){return D("span",k({css:dr},e))},Pt=pr,fr={guidance:function(e){var i=e.isSearchable,o=e.isMulti,t=e.tabSelectsValue,s=e.context,a=e.isInitialFocus;switch(s){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(t?", press Tab to select the option and exit the menu":"",".");case"input":return a?"".concat(e["aria-label"]||"Select"," is focused ").concat(i?",type to refine list":"",", press Down to open the menu, ").concat(o?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(e){var i=e.action,o=e.label,t=o===void 0?"":o,s=e.labels,a=e.isDisabled;switch(i){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(t,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(s.length>1?"s":""," ").concat(s.join(","),", selected.");case"select-option":return a?"option ".concat(t," is disabled. Select another option."):"option ".concat(t,", selected.");default:return""}},onFocus:function(e){var i=e.context,o=e.focused,t=e.options,s=e.label,a=s===void 0?"":s,u=e.selectValue,r=e.isDisabled,l=e.isSelected,d=e.isAppleDevice,p=function(w,m){return w&&w.length?"".concat(w.indexOf(m)+1," of ").concat(w.length):""};if(i==="value"&&u)return"value ".concat(a," focused, ").concat(p(u,o),".");if(i==="menu"&&d){var v=r?" disabled":"",x="".concat(l?" selected":"").concat(v);return"".concat(a).concat(x,", ").concat(p(t,o),".")}return""},onFilter:function(e){var i=e.inputValue,o=e.resultsMessage;return"".concat(o).concat(i?" for search term "+i:"",".")}},mr=function(e){var i=e.ariaSelection,o=e.focusedOption,t=e.focusedValue,s=e.focusableOptions,a=e.isFocused,u=e.selectValue,r=e.selectProps,l=e.id,d=e.isAppleDevice,p=r.ariaLiveMessages,v=r.getOptionLabel,x=r.inputValue,b=r.isMulti,w=r.isOptionDisabled,m=r.isSearchable,f=r.menuIsOpen,y=r.options,E=r.screenReaderStatus,M=r.tabSelectsValue,I=r.isLoading,C=r["aria-label"],S=r["aria-live"],h=g.useMemo(function(){return O(O({},fr),p||{})},[p]),A=g.useMemo(function(){var L="";if(i&&h.onChange){var V=i.option,Y=i.options,G=i.removedValue,J=i.removedValues,K=i.value,se=function(te){return Array.isArray(te)?null:te},N=G||V||se(K),H=N?v(N):"",W=Y||J||void 0,oe=W?W.map(v):[],Q=O({isDisabled:N&&w(N,u),label:H,labels:oe},i);L=h.onChange(Q)}return L},[i,h,w,u,v]),P=g.useMemo(function(){var L="",V=o||t,Y=!!(o&&u&&u.includes(o));if(V&&h.onFocus){var G={focused:V,label:v(V),isDisabled:w(V,u),isSelected:Y,options:s,context:V===o?"menu":"value",selectValue:u,isAppleDevice:d};L=h.onFocus(G)}return L},[o,t,v,w,h,s,u,d]),R=g.useMemo(function(){var L="";if(f&&y.length&&!I&&h.onFilter){var V=E({count:s.length});L=h.onFilter({inputValue:x,resultsMessage:V})}return L},[s,x,f,h,y,E,I]),j=(i==null?void 0:i.action)==="initial-input-focus",X=g.useMemo(function(){var L="";if(h.guidance){var V=t?"value":f?"menu":"input";L=h.guidance({"aria-label":C,context:V,isDisabled:o&&w(o,u),isMulti:b,isSearchable:m,tabSelectsValue:M,isInitialFocus:j})}return L},[C,o,t,b,w,m,f,h,u,M,j]),B=D(g.Fragment,null,D("span",{id:"aria-selection"},A),D("span",{id:"aria-focused"},P),D("span",{id:"aria-results"},R),D("span",{id:"aria-guidance"},X));return D(g.Fragment,null,D(Pt,{id:l},j&&B),D(Pt,{"aria-live":S,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},a&&!j&&B))},hr=mr,nt=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],gr=new RegExp("["+nt.map(function(n){return n.letters}).join("")+"]","g"),Cn={};for(var _e=0;_e<nt.length;_e++)for(var Ue=nt[_e],Ye=0;Ye<Ue.letters.length;Ye++)Cn[Ue.letters[Ye]]=Ue.base;var Sn=function(e){return e.replace(gr,function(i){return Cn[i]})},vr=cr(Sn),Vt=function(e){return e.replace(/^\s+|\s+$/g,"")},xr=function(e){return"".concat(e.label," ").concat(e.value)},br=function(e){return function(i,o){if(i.data.__isNew__)return!0;var t=O({ignoreCase:!0,ignoreAccents:!0,stringify:xr,trim:!0,matchFrom:"any"},e),s=t.ignoreCase,a=t.ignoreAccents,u=t.stringify,r=t.trim,l=t.matchFrom,d=r?Vt(o):o,p=r?Vt(u(i)):u(i);return s&&(d=d.toLowerCase(),p=p.toLowerCase()),a&&(d=vr(d),p=Sn(p)),l==="start"?p.substr(0,d.length)===d:p.indexOf(d)>-1}},yr=["innerRef"];function wr(n){var e=n.innerRef,i=ie(n,yr),o=Yo(i,"onExited","in","enter","exit","appear");return D("input",k({ref:e},o,{css:at({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var Er=function(e){e.cancelable&&e.preventDefault(),e.stopPropagation()};function Cr(n){var e=n.isEnabled,i=n.onBottomArrive,o=n.onBottomLeave,t=n.onTopArrive,s=n.onTopLeave,a=g.useRef(!1),u=g.useRef(!1),r=g.useRef(0),l=g.useRef(null),d=g.useCallback(function(m,f){if(l.current!==null){var y=l.current,E=y.scrollTop,M=y.scrollHeight,I=y.clientHeight,C=l.current,S=f>0,h=M-I-E,A=!1;h>f&&a.current&&(o&&o(m),a.current=!1),S&&u.current&&(s&&s(m),u.current=!1),S&&f>h?(i&&!a.current&&i(m),C.scrollTop=M,A=!0,a.current=!0):!S&&-f>E&&(t&&!u.current&&t(m),C.scrollTop=0,A=!0,u.current=!0),A&&Er(m)}},[i,o,t,s]),p=g.useCallback(function(m){d(m,m.deltaY)},[d]),v=g.useCallback(function(m){r.current=m.changedTouches[0].clientY},[]),x=g.useCallback(function(m){var f=r.current-m.changedTouches[0].clientY;d(m,f)},[d]),b=g.useCallback(function(m){if(m){var f=Go?{passive:!1}:!1;m.addEventListener("wheel",p,f),m.addEventListener("touchstart",v,f),m.addEventListener("touchmove",x,f)}},[x,v,p]),w=g.useCallback(function(m){m&&(m.removeEventListener("wheel",p,!1),m.removeEventListener("touchstart",v,!1),m.removeEventListener("touchmove",x,!1))},[x,v,p]);return g.useEffect(function(){if(e){var m=l.current;return b(m),function(){w(m)}}},[e,b,w]),function(m){l.current=m}}var Nt=["boxSizing","height","overflow","paddingRight","position"],jt={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function Lt(n){n.preventDefault()}function Tt(n){n.stopPropagation()}function Rt(){var n=this.scrollTop,e=this.scrollHeight,i=n+this.offsetHeight;n===0?this.scrollTop=1:i===e&&(this.scrollTop=n-1)}function Bt(){return"ontouchstart"in window||navigator.maxTouchPoints}var Wt=!!(typeof window<"u"&&window.document&&window.document.createElement),he=0,ue={capture:!1,passive:!1};function Sr(n){var e=n.isEnabled,i=n.accountForScrollbars,o=i===void 0?!0:i,t=g.useRef({}),s=g.useRef(null),a=g.useCallback(function(r){if(Wt){var l=document.body,d=l&&l.style;if(o&&Nt.forEach(function(b){var w=d&&d[b];t.current[b]=w}),o&&he<1){var p=parseInt(t.current.paddingRight,10)||0,v=document.body?document.body.clientWidth:0,x=window.innerWidth-v+p||0;Object.keys(jt).forEach(function(b){var w=jt[b];d&&(d[b]=w)}),d&&(d.paddingRight="".concat(x,"px"))}l&&Bt()&&(l.addEventListener("touchmove",Lt,ue),r&&(r.addEventListener("touchstart",Rt,ue),r.addEventListener("touchmove",Tt,ue))),he+=1}},[o]),u=g.useCallback(function(r){if(Wt){var l=document.body,d=l&&l.style;he=Math.max(he-1,0),o&&he<1&&Nt.forEach(function(p){var v=t.current[p];d&&(d[p]=v)}),l&&Bt()&&(l.removeEventListener("touchmove",Lt,ue),r&&(r.removeEventListener("touchstart",Rt,ue),r.removeEventListener("touchmove",Tt,ue)))}},[o]);return g.useEffect(function(){if(e){var r=s.current;return a(r),function(){u(r)}}},[e,a,u]),function(r){s.current=r}}var Mr=function(e){var i=e.target;return i.ownerDocument.activeElement&&i.ownerDocument.activeElement.blur()},Fr={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function Dr(n){var e=n.children,i=n.lockEnabled,o=n.captureEnabled,t=o===void 0?!0:o,s=n.onBottomArrive,a=n.onBottomLeave,u=n.onTopArrive,r=n.onTopLeave,l=Cr({isEnabled:t,onBottomArrive:s,onBottomLeave:a,onTopArrive:u,onTopLeave:r}),d=Sr({isEnabled:i}),p=function(x){l(x),d(x)};return D(g.Fragment,null,i&&D("div",{onClick:Mr,css:Fr}),e(p))}var Or={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},kr=function(e){var i=e.name,o=e.onFocus;return D("input",{required:!0,name:i,tabIndex:-1,"aria-hidden":"true",onFocus:o,css:Or,value:"",onChange:function(){}})},Ir=kr;function gt(n){var e;return typeof window<"u"&&window.navigator!=null?n.test(((e=window.navigator.userAgentData)===null||e===void 0?void 0:e.platform)||window.navigator.platform):!1}function Ar(){return gt(/^iPhone/i)}function Mn(){return gt(/^Mac/i)}function Pr(){return gt(/^iPad/i)||Mn()&&navigator.maxTouchPoints>1}function Vr(){return Ar()||Pr()}function Nr(){return Mn()||Vr()}var jr=function(e){return e.label},Lr=function(e){return e.label},Tr=function(e){return e.value},Rr=function(e){return!!e.isDisabled},Br={clearIndicator:wa,container:ca,control:Oa,dropdownIndicator:ba,group:Pa,groupHeading:Na,indicatorsContainer:ma,indicatorSeparator:Ca,input:Ra,loadingIndicator:Fa,loadingMessage:aa,menu:Zo,menuList:na,menuPortal:ua,multiValue:za,multiValueLabel:Ga,multiValueRemove:_a,noOptionsMessage:oa,option:Qa,placeholder:er,singleValue:ir,valueContainer:pa},Wr={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},$r=4,Fn=4,Hr=38,zr=Fn*2,Gr={baseUnit:Fn,controlHeight:Hr,menuGutter:zr},qe={borderRadius:$r,colors:Wr,spacing:Gr},_r={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:kt(),captureMenuScroll:!kt(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:br(),formatGroupLabel:jr,getOptionLabel:Lr,getOptionValue:Tr,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:Rr,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!Ho(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(e){var i=e.count;return"".concat(i," result").concat(i!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function $t(n,e,i,o){var t=kn(n,e,i),s=In(n,e,i),a=On(n,e),u=Ne(n,e);return{type:"option",data:e,isDisabled:t,isSelected:s,label:a,value:u,index:o}}function Fe(n,e){return n.options.map(function(i,o){if("options"in i){var t=i.options.map(function(a,u){return $t(n,a,e,u)}).filter(function(a){return zt(n,a)});return t.length>0?{type:"group",data:i,options:t,index:o}:void 0}var s=$t(n,i,e,o);return zt(n,s)?s:void 0}).filter(_o)}function Dn(n){return n.reduce(function(e,i){return i.type==="group"?e.push.apply(e,dt(i.options.map(function(o){return o.data}))):e.push(i.data),e},[])}function Ht(n,e){return n.reduce(function(i,o){return o.type==="group"?i.push.apply(i,dt(o.options.map(function(t){return{data:t.data,id:"".concat(e,"-").concat(o.index,"-").concat(t.index)}}))):i.push({data:o.data,id:"".concat(e,"-").concat(o.index)}),i},[])}function Ur(n,e){return Dn(Fe(n,e))}function zt(n,e){var i=n.inputValue,o=i===void 0?"":i,t=e.data,s=e.isSelected,a=e.label,u=e.value;return(!Pn(n)||!s)&&An(n,{label:a,value:u,data:t},o)}function Yr(n,e){var i=n.focusedValue,o=n.selectValue,t=o.indexOf(i);if(t>-1){var s=e.indexOf(i);if(s>-1)return i;if(t<e.length)return e[t]}return null}function qr(n,e){var i=n.focusedOption;return i&&e.indexOf(i)>-1?i:e[0]}var Xe=function(e,i){var o,t=(o=e.find(function(s){return s.data===i}))===null||o===void 0?void 0:o.id;return t||null},On=function(e,i){return e.getOptionLabel(i)},Ne=function(e,i){return e.getOptionValue(i)};function kn(n,e,i){return typeof n.isOptionDisabled=="function"?n.isOptionDisabled(e,i):!1}function In(n,e,i){if(i.indexOf(e)>-1)return!0;if(typeof n.isOptionSelected=="function")return n.isOptionSelected(e,i);var o=Ne(n,e);return i.some(function(t){return Ne(n,t)===o})}function An(n,e,i){return n.filterOption?n.filterOption(e,i):!0}var Pn=function(e){var i=e.hideSelectedOptions,o=e.isMulti;return i===void 0?o:i},Xr=1,Vn=function(n){ho(i,n);var e=xo(i);function i(o){var t;if(_n(this,i),t=e.call(this,o),t.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:""},t.blockOptionHover=!1,t.isComposing=!1,t.commonProps=void 0,t.initialTouchX=0,t.initialTouchY=0,t.openAfterFocus=!1,t.scrollToFocusedOptionOnUpdate=!1,t.userIsDragging=void 0,t.isAppleDevice=Nr(),t.controlRef=null,t.getControlRef=function(r){t.controlRef=r},t.focusedOptionRef=null,t.getFocusedOptionRef=function(r){t.focusedOptionRef=r},t.menuListRef=null,t.getMenuListRef=function(r){t.menuListRef=r},t.inputRef=null,t.getInputRef=function(r){t.inputRef=r},t.focus=t.focusInput,t.blur=t.blurInput,t.onChange=function(r,l){var d=t.props,p=d.onChange,v=d.name;l.name=v,t.ariaOnChange(r,l),p(r,l)},t.setValue=function(r,l,d){var p=t.props,v=p.closeMenuOnSelect,x=p.isMulti,b=p.inputValue;t.onInputChange("",{action:"set-value",prevInputValue:b}),v&&(t.setState({inputIsHiddenAfterUpdate:!x}),t.onMenuClose()),t.setState({clearFocusValueOnUpdate:!0}),t.onChange(r,{action:l,option:d})},t.selectOption=function(r){var l=t.props,d=l.blurInputOnSelect,p=l.isMulti,v=l.name,x=t.state.selectValue,b=p&&t.isOptionSelected(r,x),w=t.isOptionDisabled(r,x);if(b){var m=t.getOptionValue(r);t.setValue(x.filter(function(f){return t.getOptionValue(f)!==m}),"deselect-option",r)}else if(!w)p?t.setValue([].concat(dt(x),[r]),"select-option",r):t.setValue(r,"select-option");else{t.ariaOnChange(r,{action:"select-option",option:r,name:v});return}d&&t.blurInput()},t.removeValue=function(r){var l=t.props.isMulti,d=t.state.selectValue,p=t.getOptionValue(r),v=d.filter(function(b){return t.getOptionValue(b)!==p}),x=Ee(l,v,v[0]||null);t.onChange(x,{action:"remove-value",removedValue:r}),t.focusInput()},t.clearValue=function(){var r=t.state.selectValue;t.onChange(Ee(t.props.isMulti,[],null),{action:"clear",removedValues:r})},t.popValue=function(){var r=t.props.isMulti,l=t.state.selectValue,d=l[l.length-1],p=l.slice(0,l.length-1),v=Ee(r,p,p[0]||null);t.onChange(v,{action:"pop-value",removedValue:d})},t.getFocusedOptionId=function(r){return Xe(t.state.focusableOptionsWithIds,r)},t.getFocusableOptionsWithIds=function(){return Ht(Fe(t.props,t.state.selectValue),t.getElementId("option"))},t.getValue=function(){return t.state.selectValue},t.cx=function(){for(var r=arguments.length,l=new Array(r),d=0;d<r;d++)l[d]=arguments[d];return To.apply(void 0,[t.props.classNamePrefix].concat(l))},t.getOptionLabel=function(r){return On(t.props,r)},t.getOptionValue=function(r){return Ne(t.props,r)},t.getStyles=function(r,l){var d=t.props.unstyled,p=Br[r](l,d);p.boxSizing="border-box";var v=t.props.styles[r];return v?v(p,l):p},t.getClassNames=function(r,l){var d,p;return(d=(p=t.props.classNames)[r])===null||d===void 0?void 0:d.call(p,l)},t.getElementId=function(r){return"".concat(t.state.instancePrefix,"-").concat(r)},t.getComponents=function(){return sr(t.props)},t.buildCategorizedOptions=function(){return Fe(t.props,t.state.selectValue)},t.getCategorizedOptions=function(){return t.props.menuIsOpen?t.buildCategorizedOptions():[]},t.buildFocusableOptions=function(){return Dn(t.buildCategorizedOptions())},t.getFocusableOptions=function(){return t.props.menuIsOpen?t.buildFocusableOptions():[]},t.ariaOnChange=function(r,l){t.setState({ariaSelection:O({value:r},l)})},t.onMenuMouseDown=function(r){r.button===0&&(r.stopPropagation(),r.preventDefault(),t.focusInput())},t.onMenuMouseMove=function(r){t.blockOptionHover=!1},t.onControlMouseDown=function(r){if(!r.defaultPrevented){var l=t.props.openMenuOnClick;t.state.isFocused?t.props.menuIsOpen?r.target.tagName!=="INPUT"&&r.target.tagName!=="TEXTAREA"&&t.onMenuClose():l&&t.openMenu("first"):(l&&(t.openAfterFocus=!0),t.focusInput()),r.target.tagName!=="INPUT"&&r.target.tagName!=="TEXTAREA"&&r.preventDefault()}},t.onDropdownIndicatorMouseDown=function(r){if(!(r&&r.type==="mousedown"&&r.button!==0)&&!t.props.isDisabled){var l=t.props,d=l.isMulti,p=l.menuIsOpen;t.focusInput(),p?(t.setState({inputIsHiddenAfterUpdate:!d}),t.onMenuClose()):t.openMenu("first"),r.preventDefault()}},t.onClearIndicatorMouseDown=function(r){r&&r.type==="mousedown"&&r.button!==0||(t.clearValue(),r.preventDefault(),t.openAfterFocus=!1,r.type==="touchend"?t.focusInput():setTimeout(function(){return t.focusInput()}))},t.onScroll=function(r){typeof t.props.closeMenuOnScroll=="boolean"?r.target instanceof HTMLElement&&We(r.target)&&t.props.onMenuClose():typeof t.props.closeMenuOnScroll=="function"&&t.props.closeMenuOnScroll(r)&&t.props.onMenuClose()},t.onCompositionStart=function(){t.isComposing=!0},t.onCompositionEnd=function(){t.isComposing=!1},t.onTouchStart=function(r){var l=r.touches,d=l&&l.item(0);d&&(t.initialTouchX=d.clientX,t.initialTouchY=d.clientY,t.userIsDragging=!1)},t.onTouchMove=function(r){var l=r.touches,d=l&&l.item(0);if(d){var p=Math.abs(d.clientX-t.initialTouchX),v=Math.abs(d.clientY-t.initialTouchY),x=5;t.userIsDragging=p>x||v>x}},t.onTouchEnd=function(r){t.userIsDragging||(t.controlRef&&!t.controlRef.contains(r.target)&&t.menuListRef&&!t.menuListRef.contains(r.target)&&t.blurInput(),t.initialTouchX=0,t.initialTouchY=0)},t.onControlTouchEnd=function(r){t.userIsDragging||t.onControlMouseDown(r)},t.onClearIndicatorTouchEnd=function(r){t.userIsDragging||t.onClearIndicatorMouseDown(r)},t.onDropdownIndicatorTouchEnd=function(r){t.userIsDragging||t.onDropdownIndicatorMouseDown(r)},t.handleInputChange=function(r){var l=t.props.inputValue,d=r.currentTarget.value;t.setState({inputIsHiddenAfterUpdate:!1}),t.onInputChange(d,{action:"input-change",prevInputValue:l}),t.props.menuIsOpen||t.onMenuOpen()},t.onInputFocus=function(r){t.props.onFocus&&t.props.onFocus(r),t.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(t.openAfterFocus||t.props.openMenuOnFocus)&&t.openMenu("first"),t.openAfterFocus=!1},t.onInputBlur=function(r){var l=t.props.inputValue;if(t.menuListRef&&t.menuListRef.contains(document.activeElement)){t.inputRef.focus();return}t.props.onBlur&&t.props.onBlur(r),t.onInputChange("",{action:"input-blur",prevInputValue:l}),t.onMenuClose(),t.setState({focusedValue:null,isFocused:!1})},t.onOptionHover=function(r){if(!(t.blockOptionHover||t.state.focusedOption===r)){var l=t.getFocusableOptions(),d=l.indexOf(r);t.setState({focusedOption:r,focusedOptionId:d>-1?t.getFocusedOptionId(r):null})}},t.shouldHideSelectedOptions=function(){return Pn(t.props)},t.onValueInputFocus=function(r){r.preventDefault(),r.stopPropagation(),t.focus()},t.onKeyDown=function(r){var l=t.props,d=l.isMulti,p=l.backspaceRemovesValue,v=l.escapeClearsValue,x=l.inputValue,b=l.isClearable,w=l.isDisabled,m=l.menuIsOpen,f=l.onKeyDown,y=l.tabSelectsValue,E=l.openMenuOnFocus,M=t.state,I=M.focusedOption,C=M.focusedValue,S=M.selectValue;if(!w&&!(typeof f=="function"&&(f(r),r.defaultPrevented))){switch(t.blockOptionHover=!0,r.key){case"ArrowLeft":if(!d||x)return;t.focusValue("previous");break;case"ArrowRight":if(!d||x)return;t.focusValue("next");break;case"Delete":case"Backspace":if(x)return;if(C)t.removeValue(C);else{if(!p)return;d?t.popValue():b&&t.clearValue()}break;case"Tab":if(t.isComposing||r.shiftKey||!m||!y||!I||E&&t.isOptionSelected(I,S))return;t.selectOption(I);break;case"Enter":if(r.keyCode===229)break;if(m){if(!I||t.isComposing)return;t.selectOption(I);break}return;case"Escape":m?(t.setState({inputIsHiddenAfterUpdate:!1}),t.onInputChange("",{action:"menu-close",prevInputValue:x}),t.onMenuClose()):b&&v&&t.clearValue();break;case" ":if(x)return;if(!m){t.openMenu("first");break}if(!I)return;t.selectOption(I);break;case"ArrowUp":m?t.focusOption("up"):t.openMenu("last");break;case"ArrowDown":m?t.focusOption("down"):t.openMenu("first");break;case"PageUp":if(!m)return;t.focusOption("pageup");break;case"PageDown":if(!m)return;t.focusOption("pagedown");break;case"Home":if(!m)return;t.focusOption("first");break;case"End":if(!m)return;t.focusOption("last");break;default:return}r.preventDefault()}},t.state.instancePrefix="react-select-"+(t.props.instanceId||++Xr),t.state.selectValue=Dt(o.value),o.menuIsOpen&&t.state.selectValue.length){var s=t.getFocusableOptionsWithIds(),a=t.buildFocusableOptions(),u=a.indexOf(t.state.selectValue[0]);t.state.focusableOptionsWithIds=s,t.state.focusedOption=a[u],t.state.focusedOptionId=Xe(s,a[u])}return t}return Un(i,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&Ot(this.menuListRef,this.focusedOptionRef)}},{key:"componentDidUpdate",value:function(t){var s=this.props,a=s.isDisabled,u=s.menuIsOpen,r=this.state.isFocused;(r&&!a&&t.isDisabled||r&&u&&!t.menuIsOpen)&&this.focusInput(),r&&a&&!t.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!r&&!a&&t.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(Ot(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(t,s){this.props.onInputChange(t,s)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(t){var s=this,a=this.state,u=a.selectValue,r=a.isFocused,l=this.buildFocusableOptions(),d=t==="first"?0:l.length-1;if(!this.props.isMulti){var p=l.indexOf(u[0]);p>-1&&(d=p)}this.scrollToFocusedOptionOnUpdate=!(r&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:l[d],focusedOptionId:this.getFocusedOptionId(l[d])},function(){return s.onMenuOpen()})}},{key:"focusValue",value:function(t){var s=this.state,a=s.selectValue,u=s.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var r=a.indexOf(u);u||(r=-1);var l=a.length-1,d=-1;if(a.length){switch(t){case"previous":r===0?d=0:r===-1?d=l:d=r-1;break;case"next":r>-1&&r<l&&(d=r+1);break}this.setState({inputIsHidden:d!==-1,focusedValue:a[d]})}}}},{key:"focusOption",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",s=this.props.pageSize,a=this.state.focusedOption,u=this.getFocusableOptions();if(u.length){var r=0,l=u.indexOf(a);a||(l=-1),t==="up"?r=l>0?l-1:u.length-1:t==="down"?r=(l+1)%u.length:t==="pageup"?(r=l-s,r<0&&(r=0)):t==="pagedown"?(r=l+s,r>u.length-1&&(r=u.length-1)):t==="last"&&(r=u.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:u[r],focusedValue:null,focusedOptionId:this.getFocusedOptionId(u[r])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(qe):O(O({},qe),this.props.theme):qe}},{key:"getCommonProps",value:function(){var t=this.clearValue,s=this.cx,a=this.getStyles,u=this.getClassNames,r=this.getValue,l=this.selectOption,d=this.setValue,p=this.props,v=p.isMulti,x=p.isRtl,b=p.options,w=this.hasValue();return{clearValue:t,cx:s,getStyles:a,getClassNames:u,getValue:r,hasValue:w,isMulti:v,isRtl:x,options:b,selectOption:l,selectProps:p,setValue:d,theme:this.getTheme()}}},{key:"hasValue",value:function(){var t=this.state.selectValue;return t.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var t=this.props,s=t.isClearable,a=t.isMulti;return s===void 0?a:s}},{key:"isOptionDisabled",value:function(t,s){return kn(this.props,t,s)}},{key:"isOptionSelected",value:function(t,s){return In(this.props,t,s)}},{key:"filterOption",value:function(t,s){return An(this.props,t,s)}},{key:"formatOptionLabel",value:function(t,s){if(typeof this.props.formatOptionLabel=="function"){var a=this.props.inputValue,u=this.state.selectValue;return this.props.formatOptionLabel(t,{context:s,inputValue:a,selectValue:u})}else return this.getOptionLabel(t)}},{key:"formatGroupLabel",value:function(t){return this.props.formatGroupLabel(t)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var t=this.props,s=t.isDisabled,a=t.isSearchable,u=t.inputId,r=t.inputValue,l=t.tabIndex,d=t.form,p=t.menuIsOpen,v=t.required,x=this.getComponents(),b=x.Input,w=this.state,m=w.inputIsHidden,f=w.ariaSelection,y=this.commonProps,E=u||this.getElementId("input"),M=O(O(O({"aria-autocomplete":"list","aria-expanded":p,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":v,role:"combobox","aria-activedescendant":this.isAppleDevice?void 0:this.state.focusedOptionId||""},p&&{"aria-controls":this.getElementId("listbox")}),!a&&{"aria-readonly":!0}),this.hasValue()?(f==null?void 0:f.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return a?g.createElement(b,k({},y,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:E,innerRef:this.getInputRef,isDisabled:s,isHidden:m,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:l,form:d,type:"text",value:r},M)):g.createElement(wr,k({id:E,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:Pe,onFocus:this.onInputFocus,disabled:s,tabIndex:l,inputMode:"none",form:d,value:""},M))}},{key:"renderPlaceholderOrValue",value:function(){var t=this,s=this.getComponents(),a=s.MultiValue,u=s.MultiValueContainer,r=s.MultiValueLabel,l=s.MultiValueRemove,d=s.SingleValue,p=s.Placeholder,v=this.commonProps,x=this.props,b=x.controlShouldRenderValue,w=x.isDisabled,m=x.isMulti,f=x.inputValue,y=x.placeholder,E=this.state,M=E.selectValue,I=E.focusedValue,C=E.isFocused;if(!this.hasValue()||!b)return f?null:g.createElement(p,k({},v,{key:"placeholder",isDisabled:w,isFocused:C,innerProps:{id:this.getElementId("placeholder")}}),y);if(m)return M.map(function(h,A){var P=h===I,R="".concat(t.getOptionLabel(h),"-").concat(t.getOptionValue(h));return g.createElement(a,k({},v,{components:{Container:u,Label:r,Remove:l},isFocused:P,isDisabled:w,key:R,index:A,removeProps:{onClick:function(){return t.removeValue(h)},onTouchEnd:function(){return t.removeValue(h)},onMouseDown:function(X){X.preventDefault()}},data:h}),t.formatOptionLabel(h,"value"))});if(f)return null;var S=M[0];return g.createElement(d,k({},v,{data:S,isDisabled:w}),this.formatOptionLabel(S,"value"))}},{key:"renderClearIndicator",value:function(){var t=this.getComponents(),s=t.ClearIndicator,a=this.commonProps,u=this.props,r=u.isDisabled,l=u.isLoading,d=this.state.isFocused;if(!this.isClearable()||!s||r||!this.hasValue()||l)return null;var p={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return g.createElement(s,k({},a,{innerProps:p,isFocused:d}))}},{key:"renderLoadingIndicator",value:function(){var t=this.getComponents(),s=t.LoadingIndicator,a=this.commonProps,u=this.props,r=u.isDisabled,l=u.isLoading,d=this.state.isFocused;if(!s||!l)return null;var p={"aria-hidden":"true"};return g.createElement(s,k({},a,{innerProps:p,isDisabled:r,isFocused:d}))}},{key:"renderIndicatorSeparator",value:function(){var t=this.getComponents(),s=t.DropdownIndicator,a=t.IndicatorSeparator;if(!s||!a)return null;var u=this.commonProps,r=this.props.isDisabled,l=this.state.isFocused;return g.createElement(a,k({},u,{isDisabled:r,isFocused:l}))}},{key:"renderDropdownIndicator",value:function(){var t=this.getComponents(),s=t.DropdownIndicator;if(!s)return null;var a=this.commonProps,u=this.props.isDisabled,r=this.state.isFocused,l={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return g.createElement(s,k({},a,{innerProps:l,isDisabled:u,isFocused:r}))}},{key:"renderMenu",value:function(){var t=this,s=this.getComponents(),a=s.Group,u=s.GroupHeading,r=s.Menu,l=s.MenuList,d=s.MenuPortal,p=s.LoadingMessage,v=s.NoOptionsMessage,x=s.Option,b=this.commonProps,w=this.state.focusedOption,m=this.props,f=m.captureMenuScroll,y=m.inputValue,E=m.isLoading,M=m.loadingMessage,I=m.minMenuHeight,C=m.maxMenuHeight,S=m.menuIsOpen,h=m.menuPlacement,A=m.menuPosition,P=m.menuPortalTarget,R=m.menuShouldBlockScroll,j=m.menuShouldScrollIntoView,X=m.noOptionsMessage,B=m.onMenuScrollToTop,L=m.onMenuScrollToBottom;if(!S)return null;var V=function(H,W){var oe=H.type,Q=H.data,ae=H.isDisabled,te=H.isSelected,xe=H.label,jn=H.value,vt=w===Q,xt=ae?void 0:function(){return t.onOptionHover(Q)},Ln=ae?void 0:function(){return t.selectOption(Q)},bt="".concat(t.getElementId("option"),"-").concat(W),Tn={id:bt,onClick:Ln,onMouseMove:xt,onMouseOver:xt,tabIndex:-1,role:"option","aria-selected":t.isAppleDevice?void 0:te};return g.createElement(x,k({},b,{innerProps:Tn,data:Q,isDisabled:ae,isSelected:te,key:bt,label:xe,type:oe,value:jn,isFocused:vt,innerRef:vt?t.getFocusedOptionRef:void 0}),t.formatOptionLabel(H.data,"menu"))},Y;if(this.hasOptions())Y=this.getCategorizedOptions().map(function(N){if(N.type==="group"){var H=N.data,W=N.options,oe=N.index,Q="".concat(t.getElementId("group"),"-").concat(oe),ae="".concat(Q,"-heading");return g.createElement(a,k({},b,{key:Q,data:H,options:W,Heading:u,headingProps:{id:ae,data:N.data},label:t.formatGroupLabel(N.data)}),N.options.map(function(te){return V(te,"".concat(oe,"-").concat(te.index))}))}else if(N.type==="option")return V(N,"".concat(N.index))});else if(E){var G=M({inputValue:y});if(G===null)return null;Y=g.createElement(p,b,G)}else{var J=X({inputValue:y});if(J===null)return null;Y=g.createElement(v,b,J)}var K={minMenuHeight:I,maxMenuHeight:C,menuPlacement:h,menuPosition:A,menuShouldScrollIntoView:j},se=g.createElement(Jo,k({},b,K),function(N){var H=N.ref,W=N.placerProps,oe=W.placement,Q=W.maxHeight;return g.createElement(r,k({},b,K,{innerRef:H,innerProps:{onMouseDown:t.onMenuMouseDown,onMouseMove:t.onMenuMouseMove},isLoading:E,placement:oe}),g.createElement(Dr,{captureEnabled:f,onTopArrive:B,onBottomArrive:L,lockEnabled:R},function(ae){return g.createElement(l,k({},b,{innerRef:function(xe){t.getMenuListRef(xe),ae(xe)},innerProps:{role:"listbox","aria-multiselectable":b.isMulti,id:t.getElementId("listbox")},isLoading:E,maxHeight:Q,focusedOption:w}),Y)}))});return P||A==="fixed"?g.createElement(d,k({},b,{appendTo:P,controlElement:this.controlRef,menuPlacement:h,menuPosition:A}),se):se}},{key:"renderFormField",value:function(){var t=this,s=this.props,a=s.delimiter,u=s.isDisabled,r=s.isMulti,l=s.name,d=s.required,p=this.state.selectValue;if(d&&!this.hasValue()&&!u)return g.createElement(Ir,{name:l,onFocus:this.onValueInputFocus});if(!(!l||u))if(r)if(a){var v=p.map(function(w){return t.getOptionValue(w)}).join(a);return g.createElement("input",{name:l,type:"hidden",value:v})}else{var x=p.length>0?p.map(function(w,m){return g.createElement("input",{key:"i-".concat(m),name:l,type:"hidden",value:t.getOptionValue(w)})}):g.createElement("input",{name:l,type:"hidden",value:""});return g.createElement("div",null,x)}else{var b=p[0]?this.getOptionValue(p[0]):"";return g.createElement("input",{name:l,type:"hidden",value:b})}}},{key:"renderLiveRegion",value:function(){var t=this.commonProps,s=this.state,a=s.ariaSelection,u=s.focusedOption,r=s.focusedValue,l=s.isFocused,d=s.selectValue,p=this.getFocusableOptions();return g.createElement(hr,k({},t,{id:this.getElementId("live-region"),ariaSelection:a,focusedOption:u,focusedValue:r,isFocused:l,selectValue:d,focusableOptions:p,isAppleDevice:this.isAppleDevice}))}},{key:"render",value:function(){var t=this.getComponents(),s=t.Control,a=t.IndicatorsContainer,u=t.SelectContainer,r=t.ValueContainer,l=this.props,d=l.className,p=l.id,v=l.isDisabled,x=l.menuIsOpen,b=this.state.isFocused,w=this.commonProps=this.getCommonProps();return g.createElement(u,k({},w,{className:d,innerProps:{id:p,onKeyDown:this.onKeyDown},isDisabled:v,isFocused:b}),this.renderLiveRegion(),g.createElement(s,k({},w,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:v,isFocused:b,menuIsOpen:x}),g.createElement(r,k({},w,{isDisabled:v}),this.renderPlaceholderOrValue(),this.renderInput()),g.createElement(a,k({},w,{isDisabled:v}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(t,s){var a=s.prevProps,u=s.clearFocusValueOnUpdate,r=s.inputIsHiddenAfterUpdate,l=s.ariaSelection,d=s.isFocused,p=s.prevWasFocused,v=s.instancePrefix,x=t.options,b=t.value,w=t.menuIsOpen,m=t.inputValue,f=t.isMulti,y=Dt(b),E={};if(a&&(b!==a.value||x!==a.options||w!==a.menuIsOpen||m!==a.inputValue)){var M=w?Ur(t,y):[],I=w?Ht(Fe(t,y),"".concat(v,"-option")):[],C=u?Yr(s,y):null,S=qr(s,M),h=Xe(I,S);E={selectValue:y,focusedOption:S,focusedOptionId:h,focusableOptionsWithIds:I,focusedValue:C,clearFocusValueOnUpdate:!1}}var A=r!=null&&t!==a?{inputIsHidden:r,inputIsHiddenAfterUpdate:void 0}:{},P=l,R=d&&p;return d&&!R&&(P={value:Ee(f,y,y[0]||null),options:y,action:"initial-input-focus"},R=!p),(l==null?void 0:l.action)==="initial-input-focus"&&(P=null),O(O(O({},E),A),{},{prevProps:t,ariaSelection:P,prevWasFocused:R})}}]),i}(g.Component);Vn.defaultProps=_r;var Kr=g.forwardRef(function(n,e){var i=mo(n);return g.createElement(Vn,k({ref:e},i))}),Qr=Kr;const Zr=F("div")`
${st}
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
`,Jr=F("div")`
background-color: var(--secondary-first);
border-radius:10px;
padding: 8px 24px;
max-width:254px;
`,es=F("div")`
display: flex;
align-items: center;
column-gap:7px;
`,ts=F("span")`
background-color: var(--secondary-fifth);
color: var(--primary-focus);
font-size: 18px;
font-weight: 700;
line-height: 130%;
padding: 6px 10px;
border-radius:40px;
min-width:92px;
text-align: center;
`,Gt=F("button")`
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
`,ns=F("form")`
display: flex;
flex-direction:column;
row-gap:24px;
`,is=F("div")`
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
`,os=F("div")`
    color: var(--primary-focus);
    font-weight: 700;
    font-size: 18px;
    line-height: 133%; 
`,as=F("button")`
    width: 100%;
    ${ve}
    @media only screen and (min-width: 768px) {
        width:160px;
    }
`,rs=F(Qr)`
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
`,ss=()=>{const n=[];for(let e=0;e<24;e++)for(let i=0;i<60;i+=5){const o=e<10?`0${e}`:`${e}`,t=i<10?`0${i}`:`${i}`;n.push({value:`${o}:${t}`,label:`${o}:${t}`})}return n},je=n=>{const e=new Date,[i,o]=n.split(":");return e.setHours(i,o,0),e},us=n=>{const e=n?je(n):new Date,i=e.getMinutes(),o=Math.ceil(i/5)*5;return e.setMinutes(o),_(e,"HH:mm")},ls=Kt({gender:Jn().required("Gender is required"),weight:Se().required("Weight is required").min(0,"Weight must be a positive number"),activityTime:Se().required("Activity time is required").min(0,"Activity time must be a positive number"),dailyWaterGoal:Se().required("Amount water is required").min(0,"Amount water must be a positive number").max(15,"The amount of water should be no more than 15000 liters").test("maxDigitsAfterDecimal","The amount of water must have 1 digits after decimal or less",n=>Number.isInteger(n*10**1))}),cs=Kt({portionOfWater:Se().required("Amount water is required").min(0,"Amount water must be a positive number").max(5e3,"The amount of water should be no more than 5000 milliliters").test("maxDigitsAfterDecimal","The amount of water must be an integer",n=>Number.isInteger(n*10**0))}),Ke=5e3,_t=50,Ce=50,Nn=({isOpen:n,onClose:e,isEditing:i,selectedItemId:o,amountWater:t=0,date:s})=>{const{t:a}=re(),u=Te(),r=z(it),[l,d]=g.useState(t),p=us(s),v=s?_(je(s),"HH:mm"):_(new Date,"HH:mm"),[x,b]=g.useState({value:p,label:v}),w=async C=>{C.preventDefault();const S=new Date,h=x.value;if(m.values.portionOfWater>Ke){ce.Notify.failure("The amount of water should be no more than 5000 milliliters");return}else i||(await u(le.addWaterThunk({date:_(S,"dd/MM/uuuu"),time:h,waterAmount:l})),await u(le.getTodayWaterThunk({date:_(S,"dd/MM/uuuu")})),ce.Notify.success("Water portion successfully added"),e(),d(0),m.values.portionOfWater=0),i&&(await u(le.editWaterThunk({id:o,time:h,waterAmount:l})),await u(le.getTodayWaterThunk({date:_(S,"dd/MM/uuuu")})),e(),ce.Notify.success("Information was successfully edited"))},m=Qt({initialValues:{portionOfWater:l},validationSchema:cs,onSubmit:w});g.useEffect(()=>{d(t),b({value:p,label:v}),m.initialValues.portionOfWater=t},[t,v,p,m.initialValues]);const f=C=>{b(C)},y=()=>{requestAnimationFrame(()=>{const C=document.querySelector(".Select__option--is-selected");C&&C.scrollIntoView({})})},E=()=>{l>=Ke||(d(C=>parseFloat(C)+Ce),m.values.portionOfWater=m.values.portionOfWater+Ce)},M=()=>{l<=_t||(d(C=>parseFloat(C)-Ce),m.values.portionOfWater=m.values.portionOfWater-Ce)},I=C=>{if(C.target.value>=_t&&C.target.value<=Ke){const S=parseFloat(C.target.value);d(S)}};return c.jsx(Re,{isOpen:n,onClose:e,children:c.jsxs(Zr,{children:[c.jsx(ut,{children:a(i?"addEditWaterModal.headerEdit":"addEditWaterModal.headerAdd")}),c.jsx(lt,{onClick:e,children:c.jsx("svg",{children:c.jsx("use",{href:`${q}#icon-close`})})}),i&&c.jsx(Jr,{children:c.jsx(nn,{data:{amount:t,time:s}})}),c.jsxs("div",{children:[c.jsx(de,{children:a(i?"addEditWaterModal.correctData":"addEditWaterModal.choose")}),c.jsx("p",{children:a("addEditWaterModal.amount")}),c.jsxs(es,{children:[c.jsx(Gt,{minus:!0,onClick:M,children:c.jsx("svg",{children:c.jsx("use",{href:`${q}#icon-minus`})})}),c.jsx(ts,{children:l}),c.jsx(Gt,{plus:!0,onClick:E,children:c.jsx("svg",{children:c.jsx("use",{href:`${q}#icon-plus`})})})]})]}),c.jsxs(ns,{onSubmit:w,children:[c.jsxs("div",{children:[c.jsx("p",{children:a("addEditWaterModal.time")}),c.jsx(rs,{classNamePrefix:"Select",options:ss(),value:x,defaultValue:x,onChange:f,onMenuOpen:y})]}),c.jsxs("div",{children:[c.jsx(de,{children:a("addEditWaterModal.waterUsed")}),c.jsx(Me,{value:m.values.portionOfWater,onBlur:C=>{m.handleBlur(C),I(C)},onChange:m.handleChange,onFocus:C=>C.target.value="",type:"number",name:"portionOfWater",min:"0",step:"0.1",error:m.touched.portionOfWater&&m.errors.portionOfWater})]}),c.jsxs(is,{children:[c.jsxs(os,{children:[l,"ml"]}),c.jsx(as,{disabled:r,type:"submit",children:r?c.jsx(ct,{children:c.jsx(ot,{})}):a("dailyNormaModal.buttonSave")})]})]})]})})},ds=F("div")`
${st}
display: flex;
flex-direction:column;
row-gap:24px;
`,ps=F("div")`
display: flex;
flex-direction:column;
gap:24px;
@media only screen and (min-width: 768px) {
    flex-direction:row;
    justify-content:flex-end;
}
`,fs=F("button")`
${ve}
color: var(--primary-focus);
background-color: var(--secondary-fifth);
box-shadow:none;
min-width:116px;
:hover {
  box-shadow:none;
  background-color: var(--secondary-third);  
}
`,ms=F("button")`
${ve}
background-color: var(--secondary-second);
box-shadow:none;
min-width:116px;
:hover {
  box-shadow:none;
  background-color: #ec1717;  
}
`;function hs({isOpen:n,onClose:e,selectedItemId:i}){const{t:o}=re(),t=Te(),s=z(it),a=async()=>{const u=_(new Date,"dd/MM/yyyy");await t(le.deleteWaterThunk({id:i})),await t(le.getTodayWaterThunk({date:u})),ce.Notify.success("The portion is removed"),e()};return c.jsx(Re,{isOpen:n,onClose:e,children:c.jsxs(ds,{children:[c.jsx(ut,{children:o("deleteEntryModal.header")}),c.jsx(lt,{onClick:e,children:c.jsx("svg",{children:c.jsx("use",{href:`${q}#icon-close`})})}),c.jsx(de,{children:o("deleteEntryModal.question")}),c.jsxs(ps,{children:[c.jsx(fs,{onClick:e,type:"button",children:o("deleteEntryModal.buttonCancel")}),c.jsx(ms,{disabled:s,onClick:a,type:"button",children:s?c.jsx(ct,{children:c.jsx(ot,{})}):o("deleteEntryModal.buttonDelete")})]})]})})}const gs=F("div")`
margin-bottom: 24px;
flex:1 0 auto;
`,vs=F("div")`
font-size: 24px;
font-weight: 500;
line-height: 1.2;
margin-bottom: 16px;
color: var(--primary-dark);
@media only screen and (min-width: 768px) {
font-size: 26px;  
}
`,xs=F("ul")`
max-height:180px;
overflow: auto;
margin-bottom: 12px;
@media only screen and (min-width: 768px) {
max-height:170px;
}
`,bs=F("li")`
display: flex;
align-items: center;
justify-content: space-between;
column-gap:38px;
padding: 12px 10px 12px 4px;
border-bottom: 1px solid var(--secondary-fifth);
@media only screen and (min-width: 768px) {
padding: 12px 10px 12px 4px;
}
`,ys=F("div")`
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
`,ws=F("button")`
    :hover {
        border-bottom: 1px solid var(--secondary-third);
    }
    svg{
        stroke: var(--secondary-third);
        fill: transparent;
        width: 16px;
        height: 16px;
    }
`,Es=F("button")`
    :hover {
        border-bottom: 1px solid var(--secondary-second);
    }
    svg{
        stroke: var(--secondary-second);
        fill: transparent;
        width: 16px;
        height: 16px;
    }
`,Cs=F("button")`
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
`,Ss=()=>{const{t:n}=re(),{portionsOfWater:e}=z(De),[i,o]=g.useState(!1),[t,s]=g.useState(!1),[a,u]=g.useState(!1),[r,l]=g.useState(null),d=()=>{o(!0),s(!1),u(!1),l(null)},p=b=>{o(!0),s(!0),u(!1),l(b)},v=b=>{o(!0),u(!0),l(b)},x=()=>{o(!1)};return c.jsxs(gs,{children:[c.jsx(vs,{children:n("today")}),(e==null?void 0:e.length)>0&&c.jsx(xs,{children:e.slice().sort((b,w)=>je(b.time).getTime()-je(w.time).getTime()).map(b=>c.jsxs(bs,{children:[c.jsx(nn,{data:b}),c.jsxs(ys,{children:[c.jsx(ws,{type:"button",onClick:()=>p(b),children:c.jsx("svg",{children:c.jsx("use",{href:`${q}#icon-icon-pencil`})})}),c.jsx(Es,{type:"button",onClick:()=>v(b),children:c.jsx("svg",{children:c.jsx("use",{href:`${q}#icon-trash`})})})]})]},b.id))}),c.jsxs(Cs,{onClick:d,type:"button",children:[c.jsx("span",{children:"+"}),n("addEditWaterModal.headerAdd")]}),a?c.jsx(hs,{isOpen:i,onClose:x,selectedItemId:r==null?void 0:r.id}):c.jsx(Nn,{isOpen:i,onClose:x,isEditing:t,selectedItemId:r==null?void 0:r.id,amountWater:r==null?void 0:r.amount,date:r==null?void 0:r.time})]})},Ms=F("div")`
  ${st}
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  position: relative;
  z-index: 2;
  max-height: 85vh;
  overflow-y: auto;
  overflow-x: hidden;
`,Fs=F("div")`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  margin-bottom: 12px;
  span {
    color: var(--primary-focus);
    ${({lang:n})=>n==="uk"?"font-size: 16px;":"font-size: 18px;"}
  }
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    ${({lang:n})=>n==="uk"?"column-gap:15px;":"column-gap:24px;"}
  }
`,Ds=F("div")`
  color: #8f8f8f;
  font-size: 12px;
  line-height: 130%;
  padding: 10px;
  border: 1px solid var(--secondary-fifth);
  border-radius: 10px;
  span {
    color: var(--primary-focus);
  }
`,Os=F("form")`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
`,ks=F("div")`
  display: flex;
  column-gap: 24px;
  margin-bottom: 16px;
`,Ut=F("div")`
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  input {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
  }
  label {
    line-height: 125%;
    position: relative;
    padding-left: 22px;
    cursor: pointer;
  }
  label::before {
    content: '';
    width: 14px;
    height: 14px;
    border-radius: 50%;
    border: 2px solid #0156ff;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(0%, -51%);
  }
  label::after {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #0156ff;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(65%, -52%);
    opacity: 0;
    transition-duration: 0.3s;
  }
  input:checked + label::after {
    opacity: 1;
  }
`,Yt=F("div")`
  margin-bottom: 16px;
`,Is=F("div")`
  display: flex;
  align-items: center;
  p {
    max-width: 180px;
  }
  span {
    color: var(--primary-focus);
    font-weight: 700;
    font-size: 18px;
    width: 57px;
    text-align: end;
  }
  @media only screen and (min-width: 768px) {
    column-gap: 6px;
    p {
      max-width: 100%;
    }
  }
`,As=F("button")`
  width: 100%;
  ${ve}
  @media only screen and (min-width: 768px) {
    width: 160px;
    margin-left: auto;
  }
`,Ps=15e3,Vs=({isOpen:n,onClose:e})=>{const{t:i}=re(),o=z(Le),t=Te(),{gender:s}=z(Yn),a=z(it),[u,r]=g.useState(0),l=g.useCallback(v=>{if(!v.weight)return;const x=v.gender==="female"?.03:.04,b=v.gender==="female"?.4:.6,w=v.weight*x+v.activityTime*b;r(w)},[]),d=async v=>{v.preventDefault();const x=p.values.dailyWaterGoal*1e3;x>0&&x<=Ps?(await t(Qe.waterRateThunk({waterRate:x,date:_(new Date,"dd/MM/uuuu")})),ce.Notify.success("Daily norma successfully updated"),p.resetForm(),e()):ce.Notify.failure("The amount of water must be a positive and no more than 15 liters")},p=Qt({initialValues:{gender:s,weight:0,activityTime:0,dailyWaterGoal:0},validationSchema:ls,onSubmit:d});return g.useEffect(()=>{l(p.values)},[l,p.values]),c.jsx(Re,{isOpen:n,onClose:e,children:c.jsxs(Ms,{children:[c.jsx(ut,{children:i("dailyNormaModal.header")}),c.jsx(lt,{onClick:e,children:c.jsx("svg",{children:c.jsx("use",{href:`${q}#icon-close`})})}),c.jsxs("div",{children:[c.jsxs(Fs,{lang:o,children:[c.jsxs("p",{children:[i("dailyNormaModal.girl"),": ",c.jsx("span",{children:"V=(M*0,03) + (T*0,4)"})]}),c.jsxs("p",{children:[i("dailyNormaModal.man"),": ",c.jsx("span",{children:"V=(M*0,04) + (T*0,6)"})]})]}),c.jsxs(Ds,{children:[c.jsx("span",{children:"*"})," ",i("dailyNormaModal.description")]})]}),c.jsxs(Os,{onSubmit:d,children:[c.jsxs("div",{children:[c.jsx(de,{children:i("dailyNormaModal.calculate")}),c.jsxs(ks,{children:[c.jsxs(Ut,{children:[c.jsx("input",{id:"gender-f",type:"radio",name:"gender",value:"female",checked:p.values.gender==="female",onChange:()=>p.setFieldValue("gender","female")}),c.jsx("label",{htmlFor:"gender-f",children:i("dailyNormaModal.girl")})]}),c.jsxs(Ut,{children:[c.jsx("input",{id:"gender-m",type:"radio",name:"gender",value:"male",checked:p.values.gender==="male",onChange:()=>p.setFieldValue("gender","male")}),c.jsx("label",{htmlFor:"gender-m",children:i("dailyNormaModal.man")})]})]}),c.jsx(Yt,{children:c.jsx(Me,{label:i("dailyNormaModal.weight"),value:p.values.weight,onBlur:p.handleBlur,onChange:p.handleChange,onFocus:v=>v.target.value="",type:"number",name:"weight",min:"0",step:"0.1",error:p.touched.weight&&p.errors.weight})}),c.jsx(Yt,{children:c.jsx(Me,{label:i("dailyNormaModal.time"),value:p.values.activityTime,onBlur:p.handleBlur,onChange:p.handleChange,onFocus:v=>v.target.value="",type:"number",name:"activityTime",min:"0",step:"0.1",error:p.touched.activityTime&&p.errors.activityTime})}),c.jsxs(Is,{children:[c.jsx("p",{children:i("dailyNormaModal.perDay")}),c.jsxs("span",{children:[parseFloat(u).toFixed(1)," L"]})]})]}),c.jsxs("div",{children:[c.jsx(de,{children:i("dailyNormaModal.willDrink")}),c.jsx(Me,{value:p.values.dailyWaterGoal,onBlur:p.handleBlur,onChange:p.handleChange,onFocus:v=>v.target.value="",type:"number",name:"dailyWaterGoal",min:"0",step:"0.1",error:p.touched.dailyWaterGoal&&p.errors.dailyWaterGoal})]}),c.jsx(As,{disabled:a,type:"submit",children:a?c.jsx(ct,{children:c.jsx(ot,{})}):i("dailyNormaModal.buttonSave")})]})]})})},Ns=F("div")`
background-color:var(--primary-light);
padding: 8px 20px;
border-radius: 10px;
box-shadow: 0px 4px 8px rgba(158, 187, 255,0.2);
 ${({lang:n})=>n==="uk"?"max-width: 210px;":"max-width: 164px;"}
position: relative;
z-index:1;
`,js=F("div")`
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
`,Ls=()=>{const{t:n}=re(),e=z(Le),o=(z(Be)/1e3).toFixed(1),[t,s]=g.useState(!1),a=()=>{s(!t)};return c.jsxs(Ns,{lang:e,children:[c.jsx(de,{children:n("dailyNormaModal.header")}),c.jsxs(js,{children:[c.jsxs("span",{children:[o," L"]}),c.jsx("button",{onClick:a,type:"button",children:n("dailyNormaModal.edit")})]}),c.jsx(Vs,{isOpen:t,onClose:a})]})},Ts=F("div")`
display: flex;
flex-direction:column;
row-gap:20px;
@media only screen and (min-width: 768px) {
flex-direction:row;
align-items: center;
column-gap:23px;
}
`,Rs=F("button")`
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
`,Bs=F("div")`
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
`,Ws=F("div")`
position: relative;
color: var(--primary-focus);
`,$s=F("input")`
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
`,Hs=F("span")`
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
`,zs=F("span")`
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
`,Gs=F("span")`
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
`,_s=()=>{const{t:n}=re(),e=z(Be),{allAmountForDay:i=0}=z(De),o=i/e*100,t=parseFloat(o).toFixed(0),[s,a]=g.useState(!1),u=()=>{a(!s)};return c.jsxs("div",{children:[c.jsxs(Ts,{children:[c.jsxs(Bs,{children:[c.jsx("p",{children:n("today")}),c.jsxs(Ws,{children:[c.jsx($s,{onChange:()=>{},name:"volume",type:"range",min:"0",max:"100",value:`${t}`,persent:t}),c.jsx(Hs,{children:"0%"}),c.jsxs(Gs,{persent:t,children:[t,"%"]}),c.jsx(zs,{children:"100%"})]})]}),c.jsxs(Rs,{onClick:u,children:[c.jsx("svg",{children:c.jsx("use",{href:`${q}#icon-circle-plus`})}),n("addEditWaterModal.headerAdd")]})]}),c.jsx(Nn,{isOpen:s,onClose:u})]})},Us=$.div`
  display: flex;
  flex-wrap: wrap;

  p {
    @media (max-width: 767px) {
      padding: 0 12px;
    }
  }
`,Ys=$.div`
  position: relative;
  @media (max-width: 767px) {
    padding: 0 12px;
  }
`,qs=$.input`
  border-radius: 6px;
  padding: 12px 10px;
  margin-bottom: 4px;
  line-height: 1.25;
  width: 280px;

  &:focus {
    outline: none;
    font-size: 16px;
    line-height: 1.25;
  }

  &::placeholder {
    font-size: 16px;
    line-height: 1.25;
    color: var(--secondary-third);
  }
`,Xs=$.button`
  padding: 0;
  margin: 0;
  border: none;
  box-shadow: none;
  background-color: transparent;
  width: 16px;
  height: 16px;
  position: absolute;
  left: 90%;

  &:focus {
    border: none;
    box-shadow: none;
  }
  .icon {
    stroke: var(--primary-focus);
    fill: none;
  }
`,Ks=$.button`
  display: flex;
  padding: 8px 8px;
  justify-content: center;
  align-items: center;
  margin-left: auto;

  border-radius: 10px;
  border: none;
  background: var(--secondary-second);
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);

  color: var(--primary-light);
`,Qs=()=>{const[n,e]=g.useState(!1),[i,o]=g.useState(!1),[t,s]=g.useState(""),a=Te(),u=()=>{o(!i)},r=d=>{s(d.target.value)},l=async()=>{const d=await a(Qe.verifyPasswordThunk({password:t}));if(d.error&&d.error)return Kn.Notify.failure(d.payload);d.payload.isCorrectPass&&await a(Qe.deleteUserThunk())};return c.jsxs(c.Fragment,{children:[c.jsx(Ks,{onClick:()=>e(!n),children:"Delete user"}),c.jsx(Re,{isOpen:n,onClose:()=>e(!n),children:c.jsxs(qn,{children:[c.jsxs("div",{className:"logOutDiv1",children:[c.jsx("p",{className:"logOutP1",children:"DELETE user"}),c.jsx(Xn,{className:"xMarkWrapper",onClick:()=>e(!n)})]}),c.jsxs(Us,{children:[c.jsx("p",{className:"logOutP2",children:"Do you really want to delete your profile?"}),c.jsxs(Ys,{children:[c.jsx(qs,{type:i?"text":"password",name:"password",placeholder:"Password",value:t,onChange:r,style:{color:"var(--primary-focus)",border:"1px solid var(--secondary-fifth)"}}),c.jsx(Xs,{type:"button",className:"icon-eye",onClick:u,style:{top:"30%"},children:c.jsx("svg",{width:"16",height:"16",className:"icon",children:c.jsx("use",{href:i?q+"#icon-opened-eye":q+"#icon-closed-eye"})})})]})]}),c.jsxs("div",{className:"logOutDiv3",children:[c.jsx("button",{className:"logOutButtonDelete",onClick:l,children:"DELETE"}),c.jsx("button",{className:"logOutButtonCancel",onClick:()=>e(!n),children:"Cancel"})]})]})})]})},Zs=$("div")`
  position: relative;
`,Js=$("img")`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top left;
  z-index: -1;
`,eu=$("div")`
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
`,tu=$("div")`
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  @media only screen and (min-width: 1440px) {
    row-gap: 24px;
  }
`,nu=$("div")`
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
`,iu=$("div")`
padding-bottom: 20px;
`,ou=$("div")`
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
`,au=$.div`
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
`,ru="/water-tracker/assets/bg-56863a63.png",su="/water-tracker/assets/bottle-b9ff448c.png",pu=()=>c.jsx(c.Fragment,{children:c.jsxs(Zs,{children:[c.jsxs(Qn,{children:[c.jsxs(eu,{children:[c.jsxs(tu,{children:[c.jsxs(nu,{children:[c.jsx(Ls,{}),c.jsx("img",{src:su,alt:"bg"})]}),c.jsx(_s,{})]}),c.jsxs(ou,{children:[c.jsx(Ss,{}),c.jsx(to,{})]})]}),c.jsx(iu,{children:c.jsx(Qs,{children:"Delete user"})}),c.jsx(au,{children:c.jsx(Zn,{})})]}),c.jsx(Js,{src:ru,alt:"bg"})]})});export{pu as default};
