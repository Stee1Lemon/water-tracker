import{t as ee,h as yt,k as wt,l as Rn,r as v,E as Bn,m as Wn,n as $n,o as He,p as pe,q as Hn,v as fe,w as F,a as ie,j as c,c as z,x as Te,y as _,i as Y,z as ze,u as $,A as Yt,B as zn,_ as Xt,C as I,D as Gn,F as _n,G as Un,b as Re,s as it,M as Be,L as ot,H as le,I as qn,e as Qe,J as Yn,S as Xn,d as Kn}from"./index-ba4dd61d.js";import{C as Qn}from"./Container-25426ea8.js";import{c as Kt,a as Jn,d as Me,u as Qt}from"./index.esm-b6dce713.js";function Jt(n,e){const i=ee(n);if(isNaN(e))return yt(n,NaN);if(!e)return i;const o=i.getDate(),t=yt(n,i.getTime());t.setMonth(i.getMonth()+e+1,0);const s=t.getDate();return o>=s?t:(i.setFullYear(t.getFullYear(),t.getMonth(),o),i)}function Zn(n,e){const i=ee(n.start),o=ee(n.end);let t=+i>+o;const s=t?+i:+o,a=t?o:i;a.setHours(0,0,0,0);let u=(e==null?void 0:e.step)??1;if(!u)return[];u<0&&(u=-u,t=!t);const r=[];for(;+a<=s;)r.push(ee(a)),a.setDate(a.getDate()+u),a.setHours(0,0,0,0);return t?r.reverse():r}function ei(n){const e=ee(n);return e.setDate(1),e.setHours(0,0,0,0),e}function ti(n){const e=ee(n),i=e.getMonth();return e.setFullYear(e.getFullYear(),i+1,0),e.setHours(0,0,0,0),e}function Zt(n,e,i){const o=wt(n,i),t=wt(e,i);return+o==+t}function Et(n,e){const i=ee(n),o=ee(e);return i.getFullYear()===o.getFullYear()&&i.getMonth()===o.getMonth()}function ni(n,e){return Jt(n,-e)}var D=function(e,i){var o=arguments;if(i==null||!Rn.call(i,"css"))return v.createElement.apply(void 0,o);var t=o.length,s=new Array(t);s[0]=Bn,s[1]=Wn(e,i);for(var a=2;a<t;a++)s[a]=o[a];return v.createElement.apply(null,s)};function at(){for(var n=arguments.length,e=new Array(n),i=0;i<n;i++)e[i]=arguments[i];return $n(e)}var ii=function(){var e=at.apply(void 0,arguments),i="animation-"+e.name;return{name:i,styles:"@keyframes "+i+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}};function me(n,e){if(n.one!==void 0&&e===1)return n.one;const i=e%10,o=e%100;return i===1&&o!==11?n.singularNominative.replace("{{count}}",String(e)):i>=2&&i<=4&&(o<10||o>20)?n.singularGenitive.replace("{{count}}",String(e)):n.pluralGenitive.replace("{{count}}",String(e))}function U(n){return(e,i)=>i&&i.addSuffix?i.comparison&&i.comparison>0?n.future?me(n.future,e):"за "+me(n.regular,e):n.past?me(n.past,e):me(n.regular,e)+" тому":me(n.regular,e)}const oi=(n,e)=>e&&e.addSuffix?e.comparison&&e.comparison>0?"за півхвилини":"півхвилини тому":"півхвилини",ai={lessThanXSeconds:U({regular:{one:"менше секунди",singularNominative:"менше {{count}} секунди",singularGenitive:"менше {{count}} секунд",pluralGenitive:"менше {{count}} секунд"},future:{one:"менше, ніж за секунду",singularNominative:"менше, ніж за {{count}} секунду",singularGenitive:"менше, ніж за {{count}} секунди",pluralGenitive:"менше, ніж за {{count}} секунд"}}),xSeconds:U({regular:{singularNominative:"{{count}} секунда",singularGenitive:"{{count}} секунди",pluralGenitive:"{{count}} секунд"},past:{singularNominative:"{{count}} секунду тому",singularGenitive:"{{count}} секунди тому",pluralGenitive:"{{count}} секунд тому"},future:{singularNominative:"за {{count}} секунду",singularGenitive:"за {{count}} секунди",pluralGenitive:"за {{count}} секунд"}}),halfAMinute:oi,lessThanXMinutes:U({regular:{one:"менше хвилини",singularNominative:"менше {{count}} хвилини",singularGenitive:"менше {{count}} хвилин",pluralGenitive:"менше {{count}} хвилин"},future:{one:"менше, ніж за хвилину",singularNominative:"менше, ніж за {{count}} хвилину",singularGenitive:"менше, ніж за {{count}} хвилини",pluralGenitive:"менше, ніж за {{count}} хвилин"}}),xMinutes:U({regular:{singularNominative:"{{count}} хвилина",singularGenitive:"{{count}} хвилини",pluralGenitive:"{{count}} хвилин"},past:{singularNominative:"{{count}} хвилину тому",singularGenitive:"{{count}} хвилини тому",pluralGenitive:"{{count}} хвилин тому"},future:{singularNominative:"за {{count}} хвилину",singularGenitive:"за {{count}} хвилини",pluralGenitive:"за {{count}} хвилин"}}),aboutXHours:U({regular:{singularNominative:"близько {{count}} години",singularGenitive:"близько {{count}} годин",pluralGenitive:"близько {{count}} годин"},future:{singularNominative:"приблизно за {{count}} годину",singularGenitive:"приблизно за {{count}} години",pluralGenitive:"приблизно за {{count}} годин"}}),xHours:U({regular:{singularNominative:"{{count}} годину",singularGenitive:"{{count}} години",pluralGenitive:"{{count}} годин"}}),xDays:U({regular:{singularNominative:"{{count}} день",singularGenitive:"{{count}} днi",pluralGenitive:"{{count}} днів"}}),aboutXWeeks:U({regular:{singularNominative:"близько {{count}} тижня",singularGenitive:"близько {{count}} тижнів",pluralGenitive:"близько {{count}} тижнів"},future:{singularNominative:"приблизно за {{count}} тиждень",singularGenitive:"приблизно за {{count}} тижні",pluralGenitive:"приблизно за {{count}} тижнів"}}),xWeeks:U({regular:{singularNominative:"{{count}} тиждень",singularGenitive:"{{count}} тижні",pluralGenitive:"{{count}} тижнів"}}),aboutXMonths:U({regular:{singularNominative:"близько {{count}} місяця",singularGenitive:"близько {{count}} місяців",pluralGenitive:"близько {{count}} місяців"},future:{singularNominative:"приблизно за {{count}} місяць",singularGenitive:"приблизно за {{count}} місяці",pluralGenitive:"приблизно за {{count}} місяців"}}),xMonths:U({regular:{singularNominative:"{{count}} місяць",singularGenitive:"{{count}} місяці",pluralGenitive:"{{count}} місяців"}}),aboutXYears:U({regular:{singularNominative:"близько {{count}} року",singularGenitive:"близько {{count}} років",pluralGenitive:"близько {{count}} років"},future:{singularNominative:"приблизно за {{count}} рік",singularGenitive:"приблизно за {{count}} роки",pluralGenitive:"приблизно за {{count}} років"}}),xYears:U({regular:{singularNominative:"{{count}} рік",singularGenitive:"{{count}} роки",pluralGenitive:"{{count}} років"}}),overXYears:U({regular:{singularNominative:"більше {{count}} року",singularGenitive:"більше {{count}} років",pluralGenitive:"більше {{count}} років"},future:{singularNominative:"більше, ніж за {{count}} рік",singularGenitive:"більше, ніж за {{count}} роки",pluralGenitive:"більше, ніж за {{count}} років"}}),almostXYears:U({regular:{singularNominative:"майже {{count}} рік",singularGenitive:"майже {{count}} роки",pluralGenitive:"майже {{count}} років"},future:{singularNominative:"майже за {{count}} рік",singularGenitive:"майже за {{count}} роки",pluralGenitive:"майже за {{count}} років"}})},ri=(n,e,i)=>(i=i||{},ai[n](e,i)),si={full:"EEEE, do MMMM y 'р.'",long:"do MMMM y 'р.'",medium:"d MMM y 'р.'",short:"dd.MM.y"},ui={full:"H:mm:ss zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},li={full:"{{date}} 'о' {{time}}",long:"{{date}} 'о' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},ci={date:He({formats:si,defaultWidth:"full"}),time:He({formats:ui,defaultWidth:"full"}),dateTime:He({formats:li,defaultWidth:"full"})},rt=["неділю","понеділок","вівторок","середу","четвер","п’ятницю","суботу"];function di(n){const e=rt[n];switch(n){case 0:case 3:case 5:case 6:return"'у минулу "+e+" о' p";case 1:case 2:case 4:return"'у минулий "+e+" о' p"}}function en(n){return"'у "+rt[n]+" о' p"}function pi(n){const e=rt[n];switch(n){case 0:case 3:case 5:case 6:return"'у наступну "+e+" о' p";case 1:case 2:case 4:return"'у наступний "+e+" о' p"}}const fi=(n,e,i)=>{const o=ee(n),t=o.getDay();return Zt(o,e,i)?en(t):di(t)},mi=(n,e,i)=>{const o=ee(n),t=o.getDay();return Zt(o,e,i)?en(t):pi(t)},hi={lastWeek:fi,yesterday:"'вчора о' p",today:"'сьогодні о' p",tomorrow:"'завтра о' p",nextWeek:mi,other:"P"},vi=(n,e,i,o)=>{const t=hi[n];return typeof t=="function"?t(e,i,o):t},gi={narrow:["до н.е.","н.е."],abbreviated:["до н. е.","н. е."],wide:["до нашої ери","нашої ери"]},xi={narrow:["1","2","3","4"],abbreviated:["1-й кв.","2-й кв.","3-й кв.","4-й кв."],wide:["1-й квартал","2-й квартал","3-й квартал","4-й квартал"]},bi={narrow:["С","Л","Б","К","Т","Ч","Л","С","В","Ж","Л","Г"],abbreviated:["січ.","лют.","берез.","квіт.","трав.","черв.","лип.","серп.","верес.","жовт.","листоп.","груд."],wide:["січень","лютий","березень","квітень","травень","червень","липень","серпень","вересень","жовтень","листопад","грудень"]},yi={narrow:["С","Л","Б","К","Т","Ч","Л","С","В","Ж","Л","Г"],abbreviated:["січ.","лют.","берез.","квіт.","трав.","черв.","лип.","серп.","верес.","жовт.","листоп.","груд."],wide:["січня","лютого","березня","квітня","травня","червня","липня","серпня","вересня","жовтня","листопада","грудня"]},wi={narrow:["Н","П","В","С","Ч","П","С"],short:["нд","пн","вт","ср","чт","пт","сб"],abbreviated:["нед","пон","вів","сер","чтв","птн","суб"],wide:["неділя","понеділок","вівторок","середа","четвер","п’ятниця","субота"]},Ei={narrow:{am:"ДП",pm:"ПП",midnight:"півн.",noon:"пол.",morning:"ранок",afternoon:"день",evening:"веч.",night:"ніч"},abbreviated:{am:"ДП",pm:"ПП",midnight:"півн.",noon:"пол.",morning:"ранок",afternoon:"день",evening:"веч.",night:"ніч"},wide:{am:"ДП",pm:"ПП",midnight:"північ",noon:"полудень",morning:"ранок",afternoon:"день",evening:"вечір",night:"ніч"}},Ci={narrow:{am:"ДП",pm:"ПП",midnight:"півн.",noon:"пол.",morning:"ранку",afternoon:"дня",evening:"веч.",night:"ночі"},abbreviated:{am:"ДП",pm:"ПП",midnight:"півн.",noon:"пол.",morning:"ранку",afternoon:"дня",evening:"веч.",night:"ночі"},wide:{am:"ДП",pm:"ПП",midnight:"північ",noon:"полудень",morning:"ранку",afternoon:"дня",evening:"веч.",night:"ночі"}},Si=(n,e)=>{const i=String(e==null?void 0:e.unit),o=Number(n);let t;return i==="date"?o===3||o===23?t="-є":t="-е":i==="minute"||i==="second"||i==="hour"?t="-а":t="-й",o+t},Mi={ordinalNumber:Si,era:pe({values:gi,defaultWidth:"wide"}),quarter:pe({values:xi,defaultWidth:"wide",argumentCallback:n=>n-1}),month:pe({values:bi,defaultWidth:"wide",formattingValues:yi,defaultFormattingWidth:"wide"}),day:pe({values:wi,defaultWidth:"wide"}),dayPeriod:pe({values:Ei,defaultWidth:"any",formattingValues:Ci,defaultFormattingWidth:"wide"})},Fi=/^(\d+)(-?(е|й|є|а|я))?/i,Di=/\d+/i,Oi={narrow:/^((до )?н\.?\s?е\.?)/i,abbreviated:/^((до )?н\.?\s?е\.?)/i,wide:/^(до нашої ери|нашої ери|наша ера)/i},ki={any:[/^д/i,/^н/i]},Ii={narrow:/^[1234]/i,abbreviated:/^[1234](-?[иі]?й?)? кв.?/i,wide:/^[1234](-?[иі]?й?)? квартал/i},Ai={any:[/1/i,/2/i,/3/i,/4/i]},Pi={narrow:/^[слбктчвжг]/i,abbreviated:/^(січ|лют|бер(ез)?|квіт|трав|черв|лип|серп|вер(ес)?|жовт|лис(топ)?|груд)\.?/i,wide:/^(січень|січня|лютий|лютого|березень|березня|квітень|квітня|травень|травня|червня|червень|липень|липня|серпень|серпня|вересень|вересня|жовтень|жовтня|листопад[а]?|грудень|грудня)/i},Vi={narrow:[/^с/i,/^л/i,/^б/i,/^к/i,/^т/i,/^ч/i,/^л/i,/^с/i,/^в/i,/^ж/i,/^л/i,/^г/i],any:[/^сі/i,/^лю/i,/^б/i,/^к/i,/^т/i,/^ч/i,/^лип/i,/^се/i,/^в/i,/^ж/i,/^лис/i,/^г/i]},Ni={narrow:/^[нпвсч]/i,short:/^(нд|пн|вт|ср|чт|пт|сб)\.?/i,abbreviated:/^(нед|пон|вів|сер|че?тв|птн?|суб)\.?/i,wide:/^(неділ[яі]|понеділ[ок][ка]|вівтор[ок][ка]|серед[аи]|четвер(га)?|п\W*?ятниц[яі]|субот[аи])/i},ji={narrow:[/^н/i,/^п/i,/^в/i,/^с/i,/^ч/i,/^п/i,/^с/i],any:[/^н/i,/^п[он]/i,/^в/i,/^с[ер]/i,/^ч/i,/^п\W*?[ят]/i,/^с[уб]/i]},Li={narrow:/^([дп]п|півн\.?|пол\.?|ранок|ранку|день|дня|веч\.?|ніч|ночі)/i,abbreviated:/^([дп]п|півн\.?|пол\.?|ранок|ранку|день|дня|веч\.?|ніч|ночі)/i,wide:/^([дп]п|північ|полудень|ранок|ранку|день|дня|вечір|вечора|ніч|ночі)/i},Ti={any:{am:/^дп/i,pm:/^пп/i,midnight:/^півн/i,noon:/^пол/i,morning:/^р/i,afternoon:/^д[ен]/i,evening:/^в/i,night:/^н/i}},Ri={ordinalNumber:Hn({matchPattern:Fi,parsePattern:Di,valueCallback:n=>parseInt(n,10)}),era:fe({matchPatterns:Oi,defaultMatchWidth:"wide",parsePatterns:ki,defaultParseWidth:"any"}),quarter:fe({matchPatterns:Ii,defaultMatchWidth:"wide",parsePatterns:Ai,defaultParseWidth:"any",valueCallback:n=>n+1}),month:fe({matchPatterns:Pi,defaultMatchWidth:"wide",parsePatterns:Vi,defaultParseWidth:"any"}),day:fe({matchPatterns:Ni,defaultMatchWidth:"wide",parsePatterns:ji,defaultParseWidth:"any"}),dayPeriod:fe({matchPatterns:Li,defaultMatchWidth:"wide",parsePatterns:Ti,defaultParseWidth:"any"})},tn={code:"uk",formatDistance:ri,formatLong:ci,formatRelative:vi,localize:Mi,match:Ri,options:{weekStartsOn:1,firstWeekContainsDate:1}},Bi=F("div")`
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
`,Wi=F("div")`
color: var(--primary-focus);
`,$i=({calendarRef:n,refData:e,waterData:i={}})=>{const{t:o}=ie(),{date:t,dailyNorm:s,totalWaterPortionsForDay:a,percentageWater:u}=i,r=e==null?void 0:e.current.getBoundingClientRect().left,l=n==null?void 0:n.current.getBoundingClientRect().left;let p=!0;const d=r-l;return d<250&&(p=!1),c.jsxs(Bi,{$delta:p,$deltaNum:d,children:[c.jsx(Wi,{children:t}),c.jsxs("p",{children:[o("daysGeneralStats.norma")," ",c.jsx("span",{children:s})]}),c.jsxs("p",{children:[o("daysGeneralStats.fulfillment")," ",c.jsxs("span",{children:[u,"%"]})]}),c.jsxs("p",{children:[o("daysGeneralStats.servings")," ",c.jsx("span",{children:a})]})]})},Hi=F("div")`
display: flex;
flex-direction:column;
row-gap:4px;
justify-content:center;
align-items:center;
position: relative;
`,zi=F("button")`
display: flex;
align-items: center;
justify-content: center;
width: 34px;
height: 34px;
background-color:var(--primary-light);
border: 1px solid;
border-radius: 50%;
 ${({isConsumed:n})=>n?"border-color: transparent;":"border-color: var(--secondary-fourth);"}
`,Gi=F("span")`
    font-size: 12px;
    text-align: center;
    color: var(--secondary-third);
`,We=n=>n.auth.user.waterRate,Oe=n=>n.water.today,_i=n=>n.water.month,Ui=({isConsumed:n,date:e,percentage:i,day:o,data:t,calendarRef:s,today:{todayWaterData:a,dailyNormaFullfilled:u}})=>{const r=z(Te),l=z(We),[p,d]=v.useState(null),[m,x]=v.useState(null),b=v.useRef(null),w=o===_(new Date,"d, MMMM"),h=y=>{b.current&&!b.current.contains(y.target)&&d(null)};v.useEffect(()=>(document.addEventListener("click",h),()=>{document.removeEventListener("click",h)}),[]);const f=y=>{if(d(S=>S===y?null:y),r==="uk"&&(y=_(y,"d, MMMM",{locale:tn})),y===_(new Date,"d, MMMM"))x({date:y,dailyNorm:(l/1e3).toFixed(1),totalWaterPortionsForDay:a.portionsOfWater?a.portionsOfWater.length:0,percentageWater:u});else{const S=t[y]||0;x({date:y,dailyNorm:S?S.dailyNorm:0,totalWaterPortionsForDay:S?S.totalWaterPortionsForDay:0,percentageWater:S?parseInt(S.percentageWater):0})}};return c.jsxs(Hi,{children:[c.jsx("div",{children:p&&c.jsx($i,{calendarRef:s,refData:b,waterData:m},o)}),c.jsx(zi,{ref:b,onClick:()=>f(o),isConsumed:n,children:e}),c.jsxs(Gi,{children:[w?u:i,"%"]})]})},qi=F("div")`
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
`,Yi=F("div")`
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
`,Xi=F("div")`
font-size: 24px;
font-weight: 500;
line-height: 1.2;
color: var(--primary-dark);
@media only screen and (min-width: 768px) {
font-size: 26px;  
}
`,Ki=F("div")`
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
`,Qi="yyyy",Ji="MMMM",Zi="d",eo=()=>{const{t:n}=ie(),e=z(Te),{waterForMonth:i=[]}=z(_i),o=z(Oe),t=z(We),{allAmountForDay:s=0}=z(Oe),[a,u]=v.useState(0),r=s/t*100,l=parseFloat(r).toFixed(0);v.useEffect(()=>{u(l)},[t,s,o,l]);const[p,d]=v.useState(new Date),[m,x]=v.useState(null),b=v.useRef(null),w=ei(p),h=ti(p),f=Zn({start:w,end:h});let y=[];i.length>0&&(y=i==null?void 0:i.reduce((M,g)=>(M[g.date]=g,M),{}));let E;e==="uk"?E=_(p,"LLLL",{locale:tn}):E=_(p,Ji);const S=_(p,Qi),A=()=>{const M=ni(p,1);d(M),Et(M,new Date)?x(null):x("prev")},k=()=>{const M=Jt(p,1);d(M),Et(M,new Date)?x(null):x("next")};return c.jsxs("div",{ref:b,children:[c.jsxs(qi,{children:[c.jsx(Xi,{children:n("month")}),c.jsxs(Yi,{children:[c.jsx(Ct,{onClick:A,active:m==="next",type:"button",children:c.jsx("svg",{children:c.jsx("use",{href:`${Y}#icon-pagination-arrow-prev`})})}),c.jsxs("span",{children:[E,", ",S]}),c.jsx(Ct,{onClick:k,active:m==="prev",type:"button",children:c.jsx("svg",{children:c.jsx("use",{href:`${Y}#icon-pagination-arrow-next`})})})]})]}),c.jsx(Ki,{children:f.map(M=>{const g=_(M,"d, MMMM"),C=y[g]||0,P=C?parseInt(C.percentageWater):0,V=C?C&&parseInt(C.percentageWater)>=100:!1;return c.jsx(Ui,{isConsumed:V,date:_(M,Zi),percentage:P,day:g,calendarRef:b,data:y,today:{todayWaterData:o,dailyNormaFullfilled:a}},g)})})]})},to=F("div")`
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
`,no=F("div")`
color: var(--primary-focus);
font-size: 18px;
line-height:140%;
`,io=F("div")`
color: var(--primary-dark);
font-size: 12px;
line-height: 200%;
`,nn=({data:{amount:n,time:e}})=>c.jsxs(to,{children:[c.jsx("svg",{children:c.jsx("use",{href:`${Y}#icon-glass`})}),c.jsxs(no,{children:[n," ml"]}),c.jsxs(io,{children:[e," AM"]})]});var on={exports:{}};(function(n){(function(e,i){n.exports=i(e)})(typeof ze<"u"?ze:typeof window<"u"?window:ze,function(e){if(typeof e>"u"&&typeof e.document>"u")return!1;var i="Notiflix",o=`

Visit documentation page to learn more: https://notiflix.github.io/documentation`,t='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',s={Success:"Success",Failure:"Failure",Warning:"Warning",Info:"Info"},a,u={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},r=function(f){return console.error("%c "+i+" Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549",`
`+f+o)},l=function(f){return f||(f="head"),e.document[f]===null?(r(`
Notiflix needs to be appended to the "<`+f+'>" element, but you called it before the "<'+f+'>" element has been created.'),!1):!0},p=function(f,y){if(!l("head"))return!1;if(f()!==null&&!e.document.getElementById(y)){var E=e.document.createElement("style");E.id=y,E.innerHTML=f(),e.document.head.appendChild(E)}},d=function(){var f={},y=!1,E=0;Object.prototype.toString.call(arguments[0])==="[object Boolean]"&&(y=arguments[0],E++);for(var S=function(A){for(var k in A)Object.prototype.hasOwnProperty.call(A,k)&&(y&&Object.prototype.toString.call(A[k])==="[object Object]"?f[k]=d(f[k],A[k]):f[k]=A[k])};E<arguments.length;E++)S(arguments[E]);return f},m=function(f){var y=e.document.createElement("div");return y.innerHTML=f,y.textContent||y.innerText||""},x=function(){var f='[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}';return f||null},b=0,w=function(f,y,E,S){if(!l("body"))return!1;a||h.Notify.init({});var A=d(!0,a,{});if(typeof E=="object"&&!Array.isArray(E)||typeof S=="object"&&!Array.isArray(S)){var k={};typeof E=="object"?k=E:typeof S=="object"&&(k=S),a=d(!0,a,k)}var M=a[f.toLocaleLowerCase("en")];b++,typeof y!="string"&&(y="Notiflix "+f),a.plainText&&(y=m(y)),!a.plainText&&y.length>a.messageMaxLength&&(a=d(!0,a,{closeButton:!0,messageMaxLength:150}),y='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),y.length>a.messageMaxLength&&(y=y.substring(0,a.messageMaxLength)+"..."),a.fontAwesomeIconStyle==="shadow"&&(M.fontAwesomeIconColor=M.background),a.cssAnimation||(a.cssAnimationDuration=0);var g=e.document.getElementById(u.wrapID)||e.document.createElement("div");if(g.id=u.wrapID,g.style.width=a.width,g.style.zIndex=a.zindex,g.style.opacity=a.opacity,a.position==="center-center"?(g.style.left=a.distance,g.style.top=a.distance,g.style.right=a.distance,g.style.bottom=a.distance,g.style.margin="auto",g.classList.add("nx-flex-center-center"),g.style.maxHeight="calc((100vh - "+a.distance+") - "+a.distance+")",g.style.display="flex",g.style.flexWrap="wrap",g.style.flexDirection="column",g.style.justifyContent="center",g.style.alignItems="center",g.style.pointerEvents="none"):a.position==="center-top"?(g.style.left=a.distance,g.style.right=a.distance,g.style.top=a.distance,g.style.bottom="auto",g.style.margin="auto"):a.position==="center-bottom"?(g.style.left=a.distance,g.style.right=a.distance,g.style.bottom=a.distance,g.style.top="auto",g.style.margin="auto"):a.position==="right-bottom"?(g.style.right=a.distance,g.style.bottom=a.distance,g.style.top="auto",g.style.left="auto"):a.position==="left-top"?(g.style.left=a.distance,g.style.top=a.distance,g.style.right="auto",g.style.bottom="auto"):a.position==="left-bottom"?(g.style.left=a.distance,g.style.bottom=a.distance,g.style.top="auto",g.style.right="auto"):(g.style.right=a.distance,g.style.top=a.distance,g.style.left="auto",g.style.bottom="auto"),a.backOverlay){var C=e.document.getElementById(u.overlayID)||e.document.createElement("div");C.id=u.overlayID,C.style.width="100%",C.style.height="100%",C.style.position="fixed",C.style.zIndex=a.zindex-1,C.style.left=0,C.style.top=0,C.style.right=0,C.style.bottom=0,C.style.background=M.backOverlayColor||a.backOverlayColor,C.className=a.cssAnimation?"nx-with-animation":"",C.style.animationDuration=a.cssAnimation?a.cssAnimationDuration+"ms":"",e.document.getElementById(u.overlayID)||e.document.body.appendChild(C)}e.document.getElementById(u.wrapID)||e.document.body.appendChild(g);var P=e.document.createElement("div");P.id=a.ID+"-"+b,P.className=a.className+" "+M.childClassName+" "+(a.cssAnimation?"nx-with-animation":"")+" "+(a.useIcon?"nx-with-icon":"")+" nx-"+a.cssAnimationStyle+" "+(a.closeButton&&typeof E!="function"?"nx-with-close-button":"")+" "+(typeof E=="function"?"nx-with-callback":"")+" "+(a.clickToClose?"nx-notify-click-to-close":""),P.style.fontSize=a.fontSize,P.style.color=M.textColor,P.style.background=M.background,P.style.borderRadius=a.borderRadius,P.style.pointerEvents="all",a.rtl&&(P.setAttribute("dir","rtl"),P.classList.add("nx-rtl-on")),P.style.fontFamily='"'+a.fontFamily+'", '+t,a.cssAnimation&&(P.style.animationDuration=a.cssAnimationDuration+"ms");var V="";if(a.closeButton&&typeof E!="function"&&(V='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+M.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),a.useIcon)if(a.useFontAwesome)P.innerHTML='<i style="color:'+M.fontAwesomeIconColor+"; font-size:"+a.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+M.fontAwesomeClassName+" "+(a.fontAwesomeIconStyle==="shadow"?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+y+"</span>"+(a.closeButton?V:"");else{var L="";f===s.Success?L='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+M.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':f===s.Failure?L='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+M.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':f===s.Warning?L='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+M.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':f===s.Info&&(L='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+M.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),P.innerHTML=L+'<span class="nx-message nx-with-icon">'+y+"</span>"+(a.closeButton?V:"")}else P.innerHTML='<span class="nx-message">'+y+"</span>"+(a.closeButton?V:"");if(a.position==="left-bottom"||a.position==="right-bottom"){var X=e.document.getElementById(u.wrapID);X.insertBefore(P,X.firstChild)}else e.document.getElementById(u.wrapID).appendChild(P);var B=e.document.getElementById(P.id);if(B){var T,N,q=function(){B.classList.add("nx-remove");var W=e.document.getElementById(u.overlayID);W&&g.childElementCount<=0&&W.classList.add("nx-remove"),clearTimeout(T)},G=function(){if(B&&B.parentNode!==null&&B.parentNode.removeChild(B),g.childElementCount<=0&&g.parentNode!==null){g.parentNode.removeChild(g);var W=e.document.getElementById(u.overlayID);W&&W.parentNode!==null&&W.parentNode.removeChild(W)}clearTimeout(N)};if(a.closeButton&&typeof E!="function"){var Z=e.document.getElementById(P.id).querySelector("span.nx-close-button");Z.addEventListener("click",function(){q();var W=setTimeout(function(){G(),clearTimeout(W)},a.cssAnimationDuration)})}if((typeof E=="function"||a.clickToClose)&&B.addEventListener("click",function(){typeof E=="function"&&E(),q();var W=setTimeout(function(){G(),clearTimeout(W)},a.cssAnimationDuration)}),!a.closeButton&&typeof E!="function"){var K=function(){T=setTimeout(function(){q()},a.timeout),N=setTimeout(function(){G()},a.timeout+a.cssAnimationDuration)};K(),a.pauseOnHover&&(B.addEventListener("mouseenter",function(){B.classList.add("nx-paused"),clearTimeout(T),clearTimeout(N)}),B.addEventListener("mouseleave",function(){B.classList.remove("nx-paused"),K()}))}}if(a.showOnlyTheLastOne&&b>0)for(var se=e.document.querySelectorAll("[id^="+a.ID+"-]:not([id="+a.ID+"-"+b+"])"),j=0;j<se.length;j++){var H=se[j];H.parentNode!==null&&H.parentNode.removeChild(H)}a=d(!0,a,A)},h={Notify:{init:function(f){a=d(!0,u,f),p(x,"NotiflixNotifyInternalCSS")},merge:function(f){if(a)a=d(!0,a,f);else return r("You have to initialize the Notify module before call Merge function."),!1},success:function(f,y,E){w(s.Success,f,y,E)},failure:function(f,y,E){w(s.Failure,f,y,E)},warning:function(f,y,E){w(s.Warning,f,y,E)},info:function(f,y,E){w(s.Info,f,y,E)}}};return typeof e.Notiflix=="object"?d(!0,e.Notiflix,{Notify:h.Notify}):{Notify:h.Notify}})})(on);var ce=on.exports;const oo=$("label")`
display: flex;
flex-direction: column;
row-gap: 8px;
position: relative;
`,ao=$("input")`
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
`,ro=$("p")`
position: absolute;
bottom:-30px;
left:5px;
  color: var(--secondary-second);
  font-size: 12px;
  line-height: 120%;
`,Fe=({label:n="",error:e,...i})=>c.jsxs(oo,{children:[n,c.jsx(ao,{...i}),e&&c.jsx(ro,{children:e})]}),xe=Yt`
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
`;const st=Yt`
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
`;function ge(n,e,i){return e=zn(e),e in n?Object.defineProperty(n,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[e]=i,n}function St(n,e){var i=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})),i.push.apply(i,o)}return i}function O(n){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?St(Object(i),!0).forEach(function(o){ge(n,o,i[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(i)):St(Object(i)).forEach(function(o){Object.defineProperty(n,o,Object.getOwnPropertyDescriptor(i,o))})}return n}function so(n){if(Array.isArray(n))return n}function uo(n,e){var i=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(i!=null){var o,t,s,a,u=[],r=!0,l=!1;try{if(s=(i=i.call(n)).next,e===0){if(Object(i)!==i)return;r=!1}else for(;!(r=(o=s.call(i)).done)&&(u.push(o.value),u.length!==e);r=!0);}catch(p){l=!0,t=p}finally{try{if(!r&&i.return!=null&&(a=i.return(),Object(a)!==a))return}finally{if(l)throw t}}return u}}function Je(n,e){(e==null||e>n.length)&&(e=n.length);for(var i=0,o=new Array(e);i<e;i++)o[i]=n[i];return o}function an(n,e){if(n){if(typeof n=="string")return Je(n,e);var i=Object.prototype.toString.call(n).slice(8,-1);if(i==="Object"&&n.constructor&&(i=n.constructor.name),i==="Map"||i==="Set")return Array.from(n);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return Je(n,e)}}function lo(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ne(n,e){return so(n)||uo(n,e)||an(n,e)||lo()}function co(n,e){if(n==null)return{};var i={},o=Object.keys(n),t,s;for(s=0;s<o.length;s++)t=o[s],!(e.indexOf(t)>=0)&&(i[t]=n[t]);return i}function oe(n,e){if(n==null)return{};var i=co(n,e),o,t;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(t=0;t<s.length;t++)o=s[t],!(e.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(n,o)&&(i[o]=n[o])}return i}var po=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function fo(n){var e=n.defaultInputValue,i=e===void 0?"":e,o=n.defaultMenuIsOpen,t=o===void 0?!1:o,s=n.defaultValue,a=s===void 0?null:s,u=n.inputValue,r=n.menuIsOpen,l=n.onChange,p=n.onInputChange,d=n.onMenuClose,m=n.onMenuOpen,x=n.value,b=oe(n,po),w=v.useState(u!==void 0?u:i),h=ne(w,2),f=h[0],y=h[1],E=v.useState(r!==void 0?r:t),S=ne(E,2),A=S[0],k=S[1],M=v.useState(x!==void 0?x:a),g=ne(M,2),C=g[0],P=g[1],V=v.useCallback(function(G,Z){typeof l=="function"&&l(G,Z),P(G)},[l]),L=v.useCallback(function(G,Z){var K;typeof p=="function"&&(K=p(G,Z)),y(K!==void 0?K:G)},[p]),X=v.useCallback(function(){typeof m=="function"&&m(),k(!0)},[m]),B=v.useCallback(function(){typeof d=="function"&&d(),k(!1)},[d]),T=u!==void 0?u:f,N=r!==void 0?r:A,q=x!==void 0?x:C;return O(O({},b),{},{inputValue:T,menuIsOpen:N,onChange:V,onInputChange:L,onMenuClose:B,onMenuOpen:X,value:q})}function Ze(n,e){return Ze=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,t){return o.__proto__=t,o},Ze(n,e)}function mo(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),e&&Ze(n,e)}function ke(n){return ke=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(i){return i.__proto__||Object.getPrototypeOf(i)},ke(n)}function rn(){try{var n=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(rn=function(){return!!n})()}function ho(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function vo(n,e){if(e&&(Xt(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return ho(n)}function go(n){var e=rn();return function(){var o=ke(n),t;if(e){var s=ke(this).constructor;t=Reflect.construct(o,arguments,s)}else t=o.apply(this,arguments);return vo(this,t)}}function xo(n){if(Array.isArray(n))return Je(n)}function bo(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function yo(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function dt(n){return xo(n)||bo(n)||an(n)||yo()}function wo(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}const Eo=Math.min,Co=Math.max,Ie=Math.round,ye=Math.floor,Ae=n=>({x:n,y:n});function So(n){return{...n,top:n.y,left:n.x,right:n.x+n.width,bottom:n.y+n.height}}function sn(n){return ln(n)?(n.nodeName||"").toLowerCase():"#document"}function J(n){var e;return(n==null||(e=n.ownerDocument)==null?void 0:e.defaultView)||window}function un(n){var e;return(e=(ln(n)?n.ownerDocument:n.document)||window.document)==null?void 0:e.documentElement}function ln(n){return n instanceof Node||n instanceof J(n).Node}function et(n){return n instanceof Element||n instanceof J(n).Element}function pt(n){return n instanceof HTMLElement||n instanceof J(n).HTMLElement}function Mt(n){return typeof ShadowRoot>"u"?!1:n instanceof ShadowRoot||n instanceof J(n).ShadowRoot}function cn(n){const{overflow:e,overflowX:i,overflowY:o,display:t}=ft(n);return/auto|scroll|overlay|hidden|clip/.test(e+o+i)&&!["inline","contents"].includes(t)}function Mo(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Fo(n){return["html","body","#document"].includes(sn(n))}function ft(n){return J(n).getComputedStyle(n)}function Do(n){if(sn(n)==="html")return n;const e=n.assignedSlot||n.parentNode||Mt(n)&&n.host||un(n);return Mt(e)?e.host:e}function dn(n){const e=Do(n);return Fo(e)?n.ownerDocument?n.ownerDocument.body:n.body:pt(e)&&cn(e)?e:dn(e)}function Pe(n,e,i){var o;e===void 0&&(e=[]),i===void 0&&(i=!0);const t=dn(n),s=t===((o=n.ownerDocument)==null?void 0:o.body),a=J(t);return s?e.concat(a,a.visualViewport||[],cn(t)?t:[],a.frameElement&&i?Pe(a.frameElement):[]):e.concat(t,Pe(t,[],i))}function Oo(n){const e=ft(n);let i=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const t=pt(n),s=t?n.offsetWidth:i,a=t?n.offsetHeight:o,u=Ie(i)!==s||Ie(o)!==a;return u&&(i=s,o=a),{width:i,height:o,$:u}}function mt(n){return et(n)?n:n.contextElement}function Ge(n){const e=mt(n);if(!pt(e))return Ae(1);const i=e.getBoundingClientRect(),{width:o,height:t,$:s}=Oo(e);let a=(s?Ie(i.width):i.width)/o,u=(s?Ie(i.height):i.height)/t;return(!a||!Number.isFinite(a))&&(a=1),(!u||!Number.isFinite(u))&&(u=1),{x:a,y:u}}const ko=Ae(0);function Io(n){const e=J(n);return!Mo()||!e.visualViewport?ko:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Ao(n,e,i){return e===void 0&&(e=!1),!i||e&&i!==J(n)?!1:e}function Ft(n,e,i,o){e===void 0&&(e=!1),i===void 0&&(i=!1);const t=n.getBoundingClientRect(),s=mt(n);let a=Ae(1);e&&(o?et(o)&&(a=Ge(o)):a=Ge(n));const u=Ao(s,i,o)?Io(s):Ae(0);let r=(t.left+u.x)/a.x,l=(t.top+u.y)/a.y,p=t.width/a.x,d=t.height/a.y;if(s){const m=J(s),x=o&&et(o)?J(o):o;let b=m,w=b.frameElement;for(;w&&o&&x!==b;){const h=Ge(w),f=w.getBoundingClientRect(),y=ft(w),E=f.left+(w.clientLeft+parseFloat(y.paddingLeft))*h.x,S=f.top+(w.clientTop+parseFloat(y.paddingTop))*h.y;r*=h.x,l*=h.y,p*=h.x,d*=h.y,r+=E,l+=S,b=J(w),w=b.frameElement}}return So({width:p,height:d,x:r,y:l})}function Po(n,e){let i=null,o;const t=un(n);function s(){var u;clearTimeout(o),(u=i)==null||u.disconnect(),i=null}function a(u,r){u===void 0&&(u=!1),r===void 0&&(r=1),s();const{left:l,top:p,width:d,height:m}=n.getBoundingClientRect();if(u||e(),!d||!m)return;const x=ye(p),b=ye(t.clientWidth-(l+d)),w=ye(t.clientHeight-(p+m)),h=ye(l),y={rootMargin:-x+"px "+-b+"px "+-w+"px "+-h+"px",threshold:Co(0,Eo(1,r))||1};let E=!0;function S(A){const k=A[0].intersectionRatio;if(k!==r){if(!E)return a();k?a(!1,k):o=setTimeout(()=>{a(!1,1e-7)},100)}E=!1}try{i=new IntersectionObserver(S,{...y,root:t.ownerDocument})}catch{i=new IntersectionObserver(S,y)}i.observe(n)}return a(!0),s}function Vo(n,e,i,o){o===void 0&&(o={});const{ancestorScroll:t=!0,ancestorResize:s=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:u=typeof IntersectionObserver=="function",animationFrame:r=!1}=o,l=mt(n),p=t||s?[...l?Pe(l):[],...Pe(e)]:[];p.forEach(f=>{t&&f.addEventListener("scroll",i,{passive:!0}),s&&f.addEventListener("resize",i)});const d=l&&u?Po(l,i):null;let m=-1,x=null;a&&(x=new ResizeObserver(f=>{let[y]=f;y&&y.target===l&&x&&(x.unobserve(e),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{var E;(E=x)==null||E.observe(e)})),i()}),l&&!r&&x.observe(l),x.observe(e));let b,w=r?Ft(n):null;r&&h();function h(){const f=Ft(n);w&&(f.x!==w.x||f.y!==w.y||f.width!==w.width||f.height!==w.height)&&i(),w=f,b=requestAnimationFrame(h)}return i(),()=>{var f;p.forEach(y=>{t&&y.removeEventListener("scroll",i),s&&y.removeEventListener("resize",i)}),d==null||d(),(f=x)==null||f.disconnect(),x=null,r&&cancelAnimationFrame(b)}}var tt=v.useLayoutEffect,No=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],Ve=function(){};function jo(n,e){return e?e[0]==="-"?n+e:n+"__"+e:n}function Lo(n,e){for(var i=arguments.length,o=new Array(i>2?i-2:0),t=2;t<i;t++)o[t-2]=arguments[t];var s=[].concat(o);if(e&&n)for(var a in e)e.hasOwnProperty(a)&&e[a]&&s.push("".concat(jo(n,a)));return s.filter(function(u){return u}).map(function(u){return String(u).trim()}).join(" ")}var Dt=function(e){return _o(e)?e.filter(Boolean):Xt(e)==="object"&&e!==null?[e]:[]},pn=function(e){e.className,e.clearValue,e.cx,e.getStyles,e.getClassNames,e.getValue,e.hasValue,e.isMulti,e.isRtl,e.options,e.selectOption,e.selectProps,e.setValue,e.theme;var i=oe(e,No);return O({},i)},R=function(e,i,o){var t=e.cx,s=e.getStyles,a=e.getClassNames,u=e.className;return{css:s(i,e),className:t(o??{},a(i,e),u)}};function $e(n){return[document.documentElement,document.body,window].indexOf(n)>-1}function To(n){return $e(n)?window.innerHeight:n.clientHeight}function fn(n){return $e(n)?window.pageYOffset:n.scrollTop}function Ne(n,e){if($e(n)){window.scrollTo(0,e);return}n.scrollTop=e}function Ro(n){var e=getComputedStyle(n),i=e.position==="absolute",o=/(auto|scroll)/;if(e.position==="fixed")return document.documentElement;for(var t=n;t=t.parentElement;)if(e=getComputedStyle(t),!(i&&e.position==="static")&&o.test(e.overflow+e.overflowY+e.overflowX))return t;return document.documentElement}function Bo(n,e,i,o){return i*((n=n/o-1)*n*n+1)+e}function we(n,e){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:Ve,t=fn(n),s=e-t,a=10,u=0;function r(){u+=a;var l=Bo(u,t,s,i);Ne(n,l),u<i?window.requestAnimationFrame(r):o(n)}r()}function Ot(n,e){var i=n.getBoundingClientRect(),o=e.getBoundingClientRect(),t=e.offsetHeight/3;o.bottom+t>i.bottom?Ne(n,Math.min(e.offsetTop+e.clientHeight-n.offsetHeight+t,n.scrollHeight)):o.top-t<i.top&&Ne(n,Math.max(e.offsetTop-t,0))}function Wo(n){var e=n.getBoundingClientRect();return{bottom:e.bottom,height:e.height,left:e.left,right:e.right,top:e.top,width:e.width}}function kt(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function $o(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var mn=!1,Ho={get passive(){return mn=!0}},Ee=typeof window<"u"?window:{};Ee.addEventListener&&Ee.removeEventListener&&(Ee.addEventListener("p",Ve,Ho),Ee.removeEventListener("p",Ve,!1));var zo=mn;function Go(n){return n!=null}function _o(n){return Array.isArray(n)}function Ce(n,e,i){return n?e:i}var Uo=function(e){for(var i=arguments.length,o=new Array(i>1?i-1:0),t=1;t<i;t++)o[t-1]=arguments[t];var s=Object.entries(e).filter(function(a){var u=ne(a,1),r=u[0];return!o.includes(r)});return s.reduce(function(a,u){var r=ne(u,2),l=r[0],p=r[1];return a[l]=p,a},{})},qo=["children","innerProps"],Yo=["children","innerProps"];function Xo(n){var e=n.maxHeight,i=n.menuEl,o=n.minHeight,t=n.placement,s=n.shouldScroll,a=n.isFixedPosition,u=n.controlHeight,r=Ro(i),l={placement:"bottom",maxHeight:e};if(!i||!i.offsetParent)return l;var p=r.getBoundingClientRect(),d=p.height,m=i.getBoundingClientRect(),x=m.bottom,b=m.height,w=m.top,h=i.offsetParent.getBoundingClientRect(),f=h.top,y=a?window.innerHeight:To(r),E=fn(r),S=parseInt(getComputedStyle(i).marginBottom,10),A=parseInt(getComputedStyle(i).marginTop,10),k=f-A,M=y-w,g=k+E,C=d-E-w,P=x-y+E+S,V=E+w-A,L=160;switch(t){case"auto":case"bottom":if(M>=b)return{placement:"bottom",maxHeight:e};if(C>=b&&!a)return s&&we(r,P,L),{placement:"bottom",maxHeight:e};if(!a&&C>=o||a&&M>=o){s&&we(r,P,L);var X=a?M-S:C-S;return{placement:"bottom",maxHeight:X}}if(t==="auto"||a){var B=e,T=a?k:g;return T>=o&&(B=Math.min(T-S-u,e)),{placement:"top",maxHeight:B}}if(t==="bottom")return s&&Ne(r,P),{placement:"bottom",maxHeight:e};break;case"top":if(k>=b)return{placement:"top",maxHeight:e};if(g>=b&&!a)return s&&we(r,V,L),{placement:"top",maxHeight:e};if(!a&&g>=o||a&&k>=o){var N=e;return(!a&&g>=o||a&&k>=o)&&(N=a?k-A:g-A),s&&we(r,V,L),{placement:"top",maxHeight:N}}return{placement:"bottom",maxHeight:e};default:throw new Error('Invalid placement provided "'.concat(t,'".'))}return l}function Ko(n){var e={bottom:"top",top:"bottom"};return n?e[n]:"bottom"}var hn=function(e){return e==="auto"?"bottom":e},Qo=function(e,i){var o,t=e.placement,s=e.theme,a=s.borderRadius,u=s.spacing,r=s.colors;return O((o={label:"menu"},ge(o,Ko(t),"100%"),ge(o,"position","absolute"),ge(o,"width","100%"),ge(o,"zIndex",1),o),i?{}:{backgroundColor:r.neutral0,borderRadius:a,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:u.menuGutter,marginTop:u.menuGutter})},vn=v.createContext(null),Jo=function(e){var i=e.children,o=e.minMenuHeight,t=e.maxMenuHeight,s=e.menuPlacement,a=e.menuPosition,u=e.menuShouldScrollIntoView,r=e.theme,l=v.useContext(vn)||{},p=l.setPortalPlacement,d=v.useRef(null),m=v.useState(t),x=ne(m,2),b=x[0],w=x[1],h=v.useState(null),f=ne(h,2),y=f[0],E=f[1],S=r.spacing.controlHeight;return tt(function(){var A=d.current;if(A){var k=a==="fixed",M=u&&!k,g=Xo({maxHeight:t,menuEl:A,minHeight:o,placement:s,shouldScroll:M,isFixedPosition:k,controlHeight:S});w(g.maxHeight),E(g.placement),p==null||p(g.placement)}},[t,s,a,u,o,p,S]),i({ref:d,placerProps:O(O({},e),{},{placement:y||hn(s),maxHeight:b})})},Zo=function(e){var i=e.children,o=e.innerRef,t=e.innerProps;return D("div",I({},R(e,"menu",{menu:!0}),{ref:o},t),i)},ea=Zo,ta=function(e,i){var o=e.maxHeight,t=e.theme.spacing.baseUnit;return O({maxHeight:o,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},i?{}:{paddingBottom:t,paddingTop:t})},na=function(e){var i=e.children,o=e.innerProps,t=e.innerRef,s=e.isMulti;return D("div",I({},R(e,"menuList",{"menu-list":!0,"menu-list--is-multi":s}),{ref:t},o),i)},gn=function(e,i){var o=e.theme,t=o.spacing.baseUnit,s=o.colors;return O({textAlign:"center"},i?{}:{color:s.neutral40,padding:"".concat(t*2,"px ").concat(t*3,"px")})},ia=gn,oa=gn,aa=function(e){var i=e.children,o=i===void 0?"No options":i,t=e.innerProps,s=oe(e,qo);return D("div",I({},R(O(O({},s),{},{children:o,innerProps:t}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),t),o)},ra=function(e){var i=e.children,o=i===void 0?"Loading...":i,t=e.innerProps,s=oe(e,Yo);return D("div",I({},R(O(O({},s),{},{children:o,innerProps:t}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),t),o)},sa=function(e){var i=e.rect,o=e.offset,t=e.position;return{left:i.left,position:t,top:o,width:i.width,zIndex:1}},ua=function(e){var i=e.appendTo,o=e.children,t=e.controlElement,s=e.innerProps,a=e.menuPlacement,u=e.menuPosition,r=v.useRef(null),l=v.useRef(null),p=v.useState(hn(a)),d=ne(p,2),m=d[0],x=d[1],b=v.useMemo(function(){return{setPortalPlacement:x}},[]),w=v.useState(null),h=ne(w,2),f=h[0],y=h[1],E=v.useCallback(function(){if(t){var M=Wo(t),g=u==="fixed"?0:window.pageYOffset,C=M[m]+g;(C!==(f==null?void 0:f.offset)||M.left!==(f==null?void 0:f.rect.left)||M.width!==(f==null?void 0:f.rect.width))&&y({offset:C,rect:M})}},[t,u,m,f==null?void 0:f.offset,f==null?void 0:f.rect.left,f==null?void 0:f.rect.width]);tt(function(){E()},[E]);var S=v.useCallback(function(){typeof l.current=="function"&&(l.current(),l.current=null),t&&r.current&&(l.current=Vo(t,r.current,E,{elementResize:"ResizeObserver"in window}))},[t,E]);tt(function(){S()},[S]);var A=v.useCallback(function(M){r.current=M,S()},[S]);if(!i&&u!=="fixed"||!f)return null;var k=D("div",I({ref:A},R(O(O({},e),{},{offset:f.offset,position:u,rect:f.rect}),"menuPortal",{"menu-portal":!0}),s),o);return D(vn.Provider,{value:b},i?Gn.createPortal(k,i):k)},la=function(e){var i=e.isDisabled,o=e.isRtl;return{label:"container",direction:o?"rtl":void 0,pointerEvents:i?"none":void 0,position:"relative"}},ca=function(e){var i=e.children,o=e.innerProps,t=e.isDisabled,s=e.isRtl;return D("div",I({},R(e,"container",{"--is-disabled":t,"--is-rtl":s}),o),i)},da=function(e,i){var o=e.theme.spacing,t=e.isMulti,s=e.hasValue,a=e.selectProps.controlShouldRenderValue;return O({alignItems:"center",display:t&&s&&a?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},i?{}:{padding:"".concat(o.baseUnit/2,"px ").concat(o.baseUnit*2,"px")})},pa=function(e){var i=e.children,o=e.innerProps,t=e.isMulti,s=e.hasValue;return D("div",I({},R(e,"valueContainer",{"value-container":!0,"value-container--is-multi":t,"value-container--has-value":s}),o),i)},fa=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},ma=function(e){var i=e.children,o=e.innerProps;return D("div",I({},R(e,"indicatorsContainer",{indicators:!0}),o),i)},It,ha=["size"],va=["innerProps","isRtl","size"],ga={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},xn=function(e){var i=e.size,o=oe(e,ha);return D("svg",I({height:i,width:i,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:ga},o))},ht=function(e){return D(xn,I({size:20},e),D("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},bn=function(e){return D(xn,I({size:20},e),D("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},yn=function(e,i){var o=e.isFocused,t=e.theme,s=t.spacing.baseUnit,a=t.colors;return O({label:"indicatorContainer",display:"flex",transition:"color 150ms"},i?{}:{color:o?a.neutral60:a.neutral20,padding:s*2,":hover":{color:o?a.neutral80:a.neutral40}})},xa=yn,ba=function(e){var i=e.children,o=e.innerProps;return D("div",I({},R(e,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),o),i||D(bn,null))},ya=yn,wa=function(e){var i=e.children,o=e.innerProps;return D("div",I({},R(e,"clearIndicator",{indicator:!0,"clear-indicator":!0}),o),i||D(ht,null))},Ea=function(e,i){var o=e.isDisabled,t=e.theme,s=t.spacing.baseUnit,a=t.colors;return O({label:"indicatorSeparator",alignSelf:"stretch",width:1},i?{}:{backgroundColor:o?a.neutral10:a.neutral20,marginBottom:s*2,marginTop:s*2})},Ca=function(e){var i=e.innerProps;return D("span",I({},i,R(e,"indicatorSeparator",{"indicator-separator":!0})))},Sa=ii(It||(It=wo([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),Ma=function(e,i){var o=e.isFocused,t=e.size,s=e.theme,a=s.colors,u=s.spacing.baseUnit;return O({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:t,lineHeight:1,marginRight:t,textAlign:"center",verticalAlign:"middle"},i?{}:{color:o?a.neutral60:a.neutral20,padding:u*2})},_e=function(e){var i=e.delay,o=e.offset;return D("span",{css:at({animation:"".concat(Sa," 1s ease-in-out ").concat(i,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:o?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},Fa=function(e){var i=e.innerProps,o=e.isRtl,t=e.size,s=t===void 0?4:t,a=oe(e,va);return D("div",I({},R(O(O({},a),{},{innerProps:i,isRtl:o,size:s}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),i),D(_e,{delay:0,offset:o}),D(_e,{delay:160,offset:!0}),D(_e,{delay:320,offset:!o}))},Da=function(e,i){var o=e.isDisabled,t=e.isFocused,s=e.theme,a=s.colors,u=s.borderRadius,r=s.spacing;return O({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:r.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},i?{}:{backgroundColor:o?a.neutral5:a.neutral0,borderColor:o?a.neutral10:t?a.primary:a.neutral20,borderRadius:u,borderStyle:"solid",borderWidth:1,boxShadow:t?"0 0 0 1px ".concat(a.primary):void 0,"&:hover":{borderColor:t?a.primary:a.neutral30}})},Oa=function(e){var i=e.children,o=e.isDisabled,t=e.isFocused,s=e.innerRef,a=e.innerProps,u=e.menuIsOpen;return D("div",I({ref:s},R(e,"control",{control:!0,"control--is-disabled":o,"control--is-focused":t,"control--menu-is-open":u}),a,{"aria-disabled":o||void 0}),i)},ka=Oa,Ia=["data"],Aa=function(e,i){var o=e.theme.spacing;return i?{}:{paddingBottom:o.baseUnit*2,paddingTop:o.baseUnit*2}},Pa=function(e){var i=e.children,o=e.cx,t=e.getStyles,s=e.getClassNames,a=e.Heading,u=e.headingProps,r=e.innerProps,l=e.label,p=e.theme,d=e.selectProps;return D("div",I({},R(e,"group",{group:!0}),r),D(a,I({},u,{selectProps:d,theme:p,getStyles:t,getClassNames:s,cx:o}),l),D("div",null,i))},Va=function(e,i){var o=e.theme,t=o.colors,s=o.spacing;return O({label:"group",cursor:"default",display:"block"},i?{}:{color:t.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:s.baseUnit*3,paddingRight:s.baseUnit*3,textTransform:"uppercase"})},Na=function(e){var i=pn(e);i.data;var o=oe(i,Ia);return D("div",I({},R(e,"groupHeading",{"group-heading":!0}),o))},ja=Pa,La=["innerRef","isDisabled","isHidden","inputClassName"],Ta=function(e,i){var o=e.isDisabled,t=e.value,s=e.theme,a=s.spacing,u=s.colors;return O(O({visibility:o?"hidden":"visible",transform:t?"translateZ(0)":""},Ra),i?{}:{margin:a.baseUnit/2,paddingBottom:a.baseUnit/2,paddingTop:a.baseUnit/2,color:u.neutral80})},wn={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},Ra={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":O({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},wn)},Ba=function(e){return O({label:"input",color:"inherit",background:0,opacity:e?0:1,width:"100%"},wn)},Wa=function(e){var i=e.cx,o=e.value,t=pn(e),s=t.innerRef,a=t.isDisabled,u=t.isHidden,r=t.inputClassName,l=oe(t,La);return D("div",I({},R(e,"input",{"input-container":!0}),{"data-value":o||""}),D("input",I({className:i({input:!0},r),ref:s,style:Ba(u),disabled:a},l)))},$a=Wa,Ha=function(e,i){var o=e.theme,t=o.spacing,s=o.borderRadius,a=o.colors;return O({label:"multiValue",display:"flex",minWidth:0},i?{}:{backgroundColor:a.neutral10,borderRadius:s/2,margin:t.baseUnit/2})},za=function(e,i){var o=e.theme,t=o.borderRadius,s=o.colors,a=e.cropWithEllipsis;return O({overflow:"hidden",textOverflow:a||a===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},i?{}:{borderRadius:t/2,color:s.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},Ga=function(e,i){var o=e.theme,t=o.spacing,s=o.borderRadius,a=o.colors,u=e.isFocused;return O({alignItems:"center",display:"flex"},i?{}:{borderRadius:s/2,backgroundColor:u?a.dangerLight:void 0,paddingLeft:t.baseUnit,paddingRight:t.baseUnit,":hover":{backgroundColor:a.dangerLight,color:a.danger}})},En=function(e){var i=e.children,o=e.innerProps;return D("div",o,i)},_a=En,Ua=En;function qa(n){var e=n.children,i=n.innerProps;return D("div",I({role:"button"},i),e||D(ht,{size:14}))}var Ya=function(e){var i=e.children,o=e.components,t=e.data,s=e.innerProps,a=e.isDisabled,u=e.removeProps,r=e.selectProps,l=o.Container,p=o.Label,d=o.Remove;return D(l,{data:t,innerProps:O(O({},R(e,"multiValue",{"multi-value":!0,"multi-value--is-disabled":a})),s),selectProps:r},D(p,{data:t,innerProps:O({},R(e,"multiValueLabel",{"multi-value__label":!0})),selectProps:r},i),D(d,{data:t,innerProps:O(O({},R(e,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(i||"option")},u),selectProps:r}))},Xa=Ya,Ka=function(e,i){var o=e.isDisabled,t=e.isFocused,s=e.isSelected,a=e.theme,u=a.spacing,r=a.colors;return O({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},i?{}:{backgroundColor:s?r.primary:t?r.primary25:"transparent",color:o?r.neutral20:s?r.neutral0:"inherit",padding:"".concat(u.baseUnit*2,"px ").concat(u.baseUnit*3,"px"),":active":{backgroundColor:o?void 0:s?r.primary:r.primary50}})},Qa=function(e){var i=e.children,o=e.isDisabled,t=e.isFocused,s=e.isSelected,a=e.innerRef,u=e.innerProps;return D("div",I({},R(e,"option",{option:!0,"option--is-disabled":o,"option--is-focused":t,"option--is-selected":s}),{ref:a,"aria-disabled":o},u),i)},Ja=Qa,Za=function(e,i){var o=e.theme,t=o.spacing,s=o.colors;return O({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},i?{}:{color:s.neutral50,marginLeft:t.baseUnit/2,marginRight:t.baseUnit/2})},er=function(e){var i=e.children,o=e.innerProps;return D("div",I({},R(e,"placeholder",{placeholder:!0}),o),i)},tr=er,nr=function(e,i){var o=e.isDisabled,t=e.theme,s=t.spacing,a=t.colors;return O({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},i?{}:{color:o?a.neutral40:a.neutral80,marginLeft:s.baseUnit/2,marginRight:s.baseUnit/2})},ir=function(e){var i=e.children,o=e.isDisabled,t=e.innerProps;return D("div",I({},R(e,"singleValue",{"single-value":!0,"single-value--is-disabled":o}),t),i)},or=ir,ar={ClearIndicator:wa,Control:ka,DropdownIndicator:ba,DownChevron:bn,CrossIcon:ht,Group:ja,GroupHeading:Na,IndicatorsContainer:ma,IndicatorSeparator:Ca,Input:$a,LoadingIndicator:Fa,Menu:ea,MenuList:na,MenuPortal:ua,LoadingMessage:ra,NoOptionsMessage:aa,MultiValue:Xa,MultiValueContainer:_a,MultiValueLabel:Ua,MultiValueRemove:qa,Option:Ja,Placeholder:tr,SelectContainer:ca,SingleValue:or,ValueContainer:pa},rr=function(e){return O(O({},ar),e.components)},At=Number.isNaN||function(e){return typeof e=="number"&&e!==e};function sr(n,e){return!!(n===e||At(n)&&At(e))}function ur(n,e){if(n.length!==e.length)return!1;for(var i=0;i<n.length;i++)if(!sr(n[i],e[i]))return!1;return!0}function lr(n,e){e===void 0&&(e=ur);var i=null;function o(){for(var t=[],s=0;s<arguments.length;s++)t[s]=arguments[s];if(i&&i.lastThis===this&&e(t,i.lastArgs))return i.lastResult;var a=n.apply(this,t);return i={lastResult:a,lastArgs:t,lastThis:this},a}return o.clear=function(){i=null},o}var cr={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},dr=function(e){return D("span",I({css:cr},e))},Pt=dr,pr={guidance:function(e){var i=e.isSearchable,o=e.isMulti,t=e.tabSelectsValue,s=e.context,a=e.isInitialFocus;switch(s){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(t?", press Tab to select the option and exit the menu":"",".");case"input":return a?"".concat(e["aria-label"]||"Select"," is focused ").concat(i?",type to refine list":"",", press Down to open the menu, ").concat(o?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(e){var i=e.action,o=e.label,t=o===void 0?"":o,s=e.labels,a=e.isDisabled;switch(i){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(t,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(s.length>1?"s":""," ").concat(s.join(","),", selected.");case"select-option":return a?"option ".concat(t," is disabled. Select another option."):"option ".concat(t,", selected.");default:return""}},onFocus:function(e){var i=e.context,o=e.focused,t=e.options,s=e.label,a=s===void 0?"":s,u=e.selectValue,r=e.isDisabled,l=e.isSelected,p=e.isAppleDevice,d=function(w,h){return w&&w.length?"".concat(w.indexOf(h)+1," of ").concat(w.length):""};if(i==="value"&&u)return"value ".concat(a," focused, ").concat(d(u,o),".");if(i==="menu"&&p){var m=r?" disabled":"",x="".concat(l?" selected":"").concat(m);return"".concat(a).concat(x,", ").concat(d(t,o),".")}return""},onFilter:function(e){var i=e.inputValue,o=e.resultsMessage;return"".concat(o).concat(i?" for search term "+i:"",".")}},fr=function(e){var i=e.ariaSelection,o=e.focusedOption,t=e.focusedValue,s=e.focusableOptions,a=e.isFocused,u=e.selectValue,r=e.selectProps,l=e.id,p=e.isAppleDevice,d=r.ariaLiveMessages,m=r.getOptionLabel,x=r.inputValue,b=r.isMulti,w=r.isOptionDisabled,h=r.isSearchable,f=r.menuIsOpen,y=r.options,E=r.screenReaderStatus,S=r.tabSelectsValue,A=r.isLoading,k=r["aria-label"],M=r["aria-live"],g=v.useMemo(function(){return O(O({},pr),d||{})},[d]),C=v.useMemo(function(){var T="";if(i&&g.onChange){var N=i.option,q=i.options,G=i.removedValue,Z=i.removedValues,K=i.value,se=function(te){return Array.isArray(te)?null:te},j=G||N||se(K),H=j?m(j):"",W=q||Z||void 0,ae=W?W.map(m):[],Q=O({isDisabled:j&&w(j,u),label:H,labels:ae},i);T=g.onChange(Q)}return T},[i,g,w,u,m]),P=v.useMemo(function(){var T="",N=o||t,q=!!(o&&u&&u.includes(o));if(N&&g.onFocus){var G={focused:N,label:m(N),isDisabled:w(N,u),isSelected:q,options:s,context:N===o?"menu":"value",selectValue:u,isAppleDevice:p};T=g.onFocus(G)}return T},[o,t,m,w,g,s,u,p]),V=v.useMemo(function(){var T="";if(f&&y.length&&!A&&g.onFilter){var N=E({count:s.length});T=g.onFilter({inputValue:x,resultsMessage:N})}return T},[s,x,f,g,y,E,A]),L=(i==null?void 0:i.action)==="initial-input-focus",X=v.useMemo(function(){var T="";if(g.guidance){var N=t?"value":f?"menu":"input";T=g.guidance({"aria-label":k,context:N,isDisabled:o&&w(o,u),isMulti:b,isSearchable:h,tabSelectsValue:S,isInitialFocus:L})}return T},[k,o,t,b,w,h,f,g,u,S,L]),B=D(v.Fragment,null,D("span",{id:"aria-selection"},C),D("span",{id:"aria-focused"},P),D("span",{id:"aria-results"},V),D("span",{id:"aria-guidance"},X));return D(v.Fragment,null,D(Pt,{id:l},L&&B),D(Pt,{"aria-live":M,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},a&&!L&&B))},mr=fr,nt=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],hr=new RegExp("["+nt.map(function(n){return n.letters}).join("")+"]","g"),Cn={};for(var Ue=0;Ue<nt.length;Ue++)for(var qe=nt[Ue],Ye=0;Ye<qe.letters.length;Ye++)Cn[qe.letters[Ye]]=qe.base;var Sn=function(e){return e.replace(hr,function(i){return Cn[i]})},vr=lr(Sn),Vt=function(e){return e.replace(/^\s+|\s+$/g,"")},gr=function(e){return"".concat(e.label," ").concat(e.value)},xr=function(e){return function(i,o){if(i.data.__isNew__)return!0;var t=O({ignoreCase:!0,ignoreAccents:!0,stringify:gr,trim:!0,matchFrom:"any"},e),s=t.ignoreCase,a=t.ignoreAccents,u=t.stringify,r=t.trim,l=t.matchFrom,p=r?Vt(o):o,d=r?Vt(u(i)):u(i);return s&&(p=p.toLowerCase(),d=d.toLowerCase()),a&&(p=vr(p),d=Sn(d)),l==="start"?d.substr(0,p.length)===p:d.indexOf(p)>-1}},br=["innerRef"];function yr(n){var e=n.innerRef,i=oe(n,br),o=Uo(i,"onExited","in","enter","exit","appear");return D("input",I({ref:e},o,{css:at({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var wr=function(e){e.cancelable&&e.preventDefault(),e.stopPropagation()};function Er(n){var e=n.isEnabled,i=n.onBottomArrive,o=n.onBottomLeave,t=n.onTopArrive,s=n.onTopLeave,a=v.useRef(!1),u=v.useRef(!1),r=v.useRef(0),l=v.useRef(null),p=v.useCallback(function(h,f){if(l.current!==null){var y=l.current,E=y.scrollTop,S=y.scrollHeight,A=y.clientHeight,k=l.current,M=f>0,g=S-A-E,C=!1;g>f&&a.current&&(o&&o(h),a.current=!1),M&&u.current&&(s&&s(h),u.current=!1),M&&f>g?(i&&!a.current&&i(h),k.scrollTop=S,C=!0,a.current=!0):!M&&-f>E&&(t&&!u.current&&t(h),k.scrollTop=0,C=!0,u.current=!0),C&&wr(h)}},[i,o,t,s]),d=v.useCallback(function(h){p(h,h.deltaY)},[p]),m=v.useCallback(function(h){r.current=h.changedTouches[0].clientY},[]),x=v.useCallback(function(h){var f=r.current-h.changedTouches[0].clientY;p(h,f)},[p]),b=v.useCallback(function(h){if(h){var f=zo?{passive:!1}:!1;h.addEventListener("wheel",d,f),h.addEventListener("touchstart",m,f),h.addEventListener("touchmove",x,f)}},[x,m,d]),w=v.useCallback(function(h){h&&(h.removeEventListener("wheel",d,!1),h.removeEventListener("touchstart",m,!1),h.removeEventListener("touchmove",x,!1))},[x,m,d]);return v.useEffect(function(){if(e){var h=l.current;return b(h),function(){w(h)}}},[e,b,w]),function(h){l.current=h}}var Nt=["boxSizing","height","overflow","paddingRight","position"],jt={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function Lt(n){n.preventDefault()}function Tt(n){n.stopPropagation()}function Rt(){var n=this.scrollTop,e=this.scrollHeight,i=n+this.offsetHeight;n===0?this.scrollTop=1:i===e&&(this.scrollTop=n-1)}function Bt(){return"ontouchstart"in window||navigator.maxTouchPoints}var Wt=!!(typeof window<"u"&&window.document&&window.document.createElement),he=0,ue={capture:!1,passive:!1};function Cr(n){var e=n.isEnabled,i=n.accountForScrollbars,o=i===void 0?!0:i,t=v.useRef({}),s=v.useRef(null),a=v.useCallback(function(r){if(Wt){var l=document.body,p=l&&l.style;if(o&&Nt.forEach(function(b){var w=p&&p[b];t.current[b]=w}),o&&he<1){var d=parseInt(t.current.paddingRight,10)||0,m=document.body?document.body.clientWidth:0,x=window.innerWidth-m+d||0;Object.keys(jt).forEach(function(b){var w=jt[b];p&&(p[b]=w)}),p&&(p.paddingRight="".concat(x,"px"))}l&&Bt()&&(l.addEventListener("touchmove",Lt,ue),r&&(r.addEventListener("touchstart",Rt,ue),r.addEventListener("touchmove",Tt,ue))),he+=1}},[o]),u=v.useCallback(function(r){if(Wt){var l=document.body,p=l&&l.style;he=Math.max(he-1,0),o&&he<1&&Nt.forEach(function(d){var m=t.current[d];p&&(p[d]=m)}),l&&Bt()&&(l.removeEventListener("touchmove",Lt,ue),r&&(r.removeEventListener("touchstart",Rt,ue),r.removeEventListener("touchmove",Tt,ue)))}},[o]);return v.useEffect(function(){if(e){var r=s.current;return a(r),function(){u(r)}}},[e,a,u]),function(r){s.current=r}}var Sr=function(e){var i=e.target;return i.ownerDocument.activeElement&&i.ownerDocument.activeElement.blur()},Mr={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function Fr(n){var e=n.children,i=n.lockEnabled,o=n.captureEnabled,t=o===void 0?!0:o,s=n.onBottomArrive,a=n.onBottomLeave,u=n.onTopArrive,r=n.onTopLeave,l=Er({isEnabled:t,onBottomArrive:s,onBottomLeave:a,onTopArrive:u,onTopLeave:r}),p=Cr({isEnabled:i}),d=function(x){l(x),p(x)};return D(v.Fragment,null,i&&D("div",{onClick:Sr,css:Mr}),e(d))}var Dr={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},Or=function(e){var i=e.name,o=e.onFocus;return D("input",{required:!0,name:i,tabIndex:-1,"aria-hidden":"true",onFocus:o,css:Dr,value:"",onChange:function(){}})},kr=Or;function vt(n){var e;return typeof window<"u"&&window.navigator!=null?n.test(((e=window.navigator.userAgentData)===null||e===void 0?void 0:e.platform)||window.navigator.platform):!1}function Ir(){return vt(/^iPhone/i)}function Mn(){return vt(/^Mac/i)}function Ar(){return vt(/^iPad/i)||Mn()&&navigator.maxTouchPoints>1}function Pr(){return Ir()||Ar()}function Vr(){return Mn()||Pr()}var Nr=function(e){return e.label},jr=function(e){return e.label},Lr=function(e){return e.value},Tr=function(e){return!!e.isDisabled},Rr={clearIndicator:ya,container:la,control:Da,dropdownIndicator:xa,group:Aa,groupHeading:Va,indicatorsContainer:fa,indicatorSeparator:Ea,input:Ta,loadingIndicator:Ma,loadingMessage:oa,menu:Qo,menuList:ta,menuPortal:sa,multiValue:Ha,multiValueLabel:za,multiValueRemove:Ga,noOptionsMessage:ia,option:Ka,placeholder:Za,singleValue:nr,valueContainer:da},Br={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},Wr=4,Fn=4,$r=38,Hr=Fn*2,zr={baseUnit:Fn,controlHeight:$r,menuGutter:Hr},Xe={borderRadius:Wr,colors:Br,spacing:zr},Gr={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:kt(),captureMenuScroll:!kt(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:xr(),formatGroupLabel:Nr,getOptionLabel:jr,getOptionValue:Lr,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:Tr,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!$o(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(e){var i=e.count;return"".concat(i," result").concat(i!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function $t(n,e,i,o){var t=kn(n,e,i),s=In(n,e,i),a=On(n,e),u=je(n,e);return{type:"option",data:e,isDisabled:t,isSelected:s,label:a,value:u,index:o}}function De(n,e){return n.options.map(function(i,o){if("options"in i){var t=i.options.map(function(a,u){return $t(n,a,e,u)}).filter(function(a){return zt(n,a)});return t.length>0?{type:"group",data:i,options:t,index:o}:void 0}var s=$t(n,i,e,o);return zt(n,s)?s:void 0}).filter(Go)}function Dn(n){return n.reduce(function(e,i){return i.type==="group"?e.push.apply(e,dt(i.options.map(function(o){return o.data}))):e.push(i.data),e},[])}function Ht(n,e){return n.reduce(function(i,o){return o.type==="group"?i.push.apply(i,dt(o.options.map(function(t){return{data:t.data,id:"".concat(e,"-").concat(o.index,"-").concat(t.index)}}))):i.push({data:o.data,id:"".concat(e,"-").concat(o.index)}),i},[])}function _r(n,e){return Dn(De(n,e))}function zt(n,e){var i=n.inputValue,o=i===void 0?"":i,t=e.data,s=e.isSelected,a=e.label,u=e.value;return(!Pn(n)||!s)&&An(n,{label:a,value:u,data:t},o)}function Ur(n,e){var i=n.focusedValue,o=n.selectValue,t=o.indexOf(i);if(t>-1){var s=e.indexOf(i);if(s>-1)return i;if(t<e.length)return e[t]}return null}function qr(n,e){var i=n.focusedOption;return i&&e.indexOf(i)>-1?i:e[0]}var Ke=function(e,i){var o,t=(o=e.find(function(s){return s.data===i}))===null||o===void 0?void 0:o.id;return t||null},On=function(e,i){return e.getOptionLabel(i)},je=function(e,i){return e.getOptionValue(i)};function kn(n,e,i){return typeof n.isOptionDisabled=="function"?n.isOptionDisabled(e,i):!1}function In(n,e,i){if(i.indexOf(e)>-1)return!0;if(typeof n.isOptionSelected=="function")return n.isOptionSelected(e,i);var o=je(n,e);return i.some(function(t){return je(n,t)===o})}function An(n,e,i){return n.filterOption?n.filterOption(e,i):!0}var Pn=function(e){var i=e.hideSelectedOptions,o=e.isMulti;return i===void 0?o:i},Yr=1,Vn=function(n){mo(i,n);var e=go(i);function i(o){var t;if(_n(this,i),t=e.call(this,o),t.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:""},t.blockOptionHover=!1,t.isComposing=!1,t.commonProps=void 0,t.initialTouchX=0,t.initialTouchY=0,t.openAfterFocus=!1,t.scrollToFocusedOptionOnUpdate=!1,t.userIsDragging=void 0,t.isAppleDevice=Vr(),t.controlRef=null,t.getControlRef=function(r){t.controlRef=r},t.focusedOptionRef=null,t.getFocusedOptionRef=function(r){t.focusedOptionRef=r},t.menuListRef=null,t.getMenuListRef=function(r){t.menuListRef=r},t.inputRef=null,t.getInputRef=function(r){t.inputRef=r},t.focus=t.focusInput,t.blur=t.blurInput,t.onChange=function(r,l){var p=t.props,d=p.onChange,m=p.name;l.name=m,t.ariaOnChange(r,l),d(r,l)},t.setValue=function(r,l,p){var d=t.props,m=d.closeMenuOnSelect,x=d.isMulti,b=d.inputValue;t.onInputChange("",{action:"set-value",prevInputValue:b}),m&&(t.setState({inputIsHiddenAfterUpdate:!x}),t.onMenuClose()),t.setState({clearFocusValueOnUpdate:!0}),t.onChange(r,{action:l,option:p})},t.selectOption=function(r){var l=t.props,p=l.blurInputOnSelect,d=l.isMulti,m=l.name,x=t.state.selectValue,b=d&&t.isOptionSelected(r,x),w=t.isOptionDisabled(r,x);if(b){var h=t.getOptionValue(r);t.setValue(x.filter(function(f){return t.getOptionValue(f)!==h}),"deselect-option",r)}else if(!w)d?t.setValue([].concat(dt(x),[r]),"select-option",r):t.setValue(r,"select-option");else{t.ariaOnChange(r,{action:"select-option",option:r,name:m});return}p&&t.blurInput()},t.removeValue=function(r){var l=t.props.isMulti,p=t.state.selectValue,d=t.getOptionValue(r),m=p.filter(function(b){return t.getOptionValue(b)!==d}),x=Ce(l,m,m[0]||null);t.onChange(x,{action:"remove-value",removedValue:r}),t.focusInput()},t.clearValue=function(){var r=t.state.selectValue;t.onChange(Ce(t.props.isMulti,[],null),{action:"clear",removedValues:r})},t.popValue=function(){var r=t.props.isMulti,l=t.state.selectValue,p=l[l.length-1],d=l.slice(0,l.length-1),m=Ce(r,d,d[0]||null);t.onChange(m,{action:"pop-value",removedValue:p})},t.getFocusedOptionId=function(r){return Ke(t.state.focusableOptionsWithIds,r)},t.getFocusableOptionsWithIds=function(){return Ht(De(t.props,t.state.selectValue),t.getElementId("option"))},t.getValue=function(){return t.state.selectValue},t.cx=function(){for(var r=arguments.length,l=new Array(r),p=0;p<r;p++)l[p]=arguments[p];return Lo.apply(void 0,[t.props.classNamePrefix].concat(l))},t.getOptionLabel=function(r){return On(t.props,r)},t.getOptionValue=function(r){return je(t.props,r)},t.getStyles=function(r,l){var p=t.props.unstyled,d=Rr[r](l,p);d.boxSizing="border-box";var m=t.props.styles[r];return m?m(d,l):d},t.getClassNames=function(r,l){var p,d;return(p=(d=t.props.classNames)[r])===null||p===void 0?void 0:p.call(d,l)},t.getElementId=function(r){return"".concat(t.state.instancePrefix,"-").concat(r)},t.getComponents=function(){return rr(t.props)},t.buildCategorizedOptions=function(){return De(t.props,t.state.selectValue)},t.getCategorizedOptions=function(){return t.props.menuIsOpen?t.buildCategorizedOptions():[]},t.buildFocusableOptions=function(){return Dn(t.buildCategorizedOptions())},t.getFocusableOptions=function(){return t.props.menuIsOpen?t.buildFocusableOptions():[]},t.ariaOnChange=function(r,l){t.setState({ariaSelection:O({value:r},l)})},t.onMenuMouseDown=function(r){r.button===0&&(r.stopPropagation(),r.preventDefault(),t.focusInput())},t.onMenuMouseMove=function(r){t.blockOptionHover=!1},t.onControlMouseDown=function(r){if(!r.defaultPrevented){var l=t.props.openMenuOnClick;t.state.isFocused?t.props.menuIsOpen?r.target.tagName!=="INPUT"&&r.target.tagName!=="TEXTAREA"&&t.onMenuClose():l&&t.openMenu("first"):(l&&(t.openAfterFocus=!0),t.focusInput()),r.target.tagName!=="INPUT"&&r.target.tagName!=="TEXTAREA"&&r.preventDefault()}},t.onDropdownIndicatorMouseDown=function(r){if(!(r&&r.type==="mousedown"&&r.button!==0)&&!t.props.isDisabled){var l=t.props,p=l.isMulti,d=l.menuIsOpen;t.focusInput(),d?(t.setState({inputIsHiddenAfterUpdate:!p}),t.onMenuClose()):t.openMenu("first"),r.preventDefault()}},t.onClearIndicatorMouseDown=function(r){r&&r.type==="mousedown"&&r.button!==0||(t.clearValue(),r.preventDefault(),t.openAfterFocus=!1,r.type==="touchend"?t.focusInput():setTimeout(function(){return t.focusInput()}))},t.onScroll=function(r){typeof t.props.closeMenuOnScroll=="boolean"?r.target instanceof HTMLElement&&$e(r.target)&&t.props.onMenuClose():typeof t.props.closeMenuOnScroll=="function"&&t.props.closeMenuOnScroll(r)&&t.props.onMenuClose()},t.onCompositionStart=function(){t.isComposing=!0},t.onCompositionEnd=function(){t.isComposing=!1},t.onTouchStart=function(r){var l=r.touches,p=l&&l.item(0);p&&(t.initialTouchX=p.clientX,t.initialTouchY=p.clientY,t.userIsDragging=!1)},t.onTouchMove=function(r){var l=r.touches,p=l&&l.item(0);if(p){var d=Math.abs(p.clientX-t.initialTouchX),m=Math.abs(p.clientY-t.initialTouchY),x=5;t.userIsDragging=d>x||m>x}},t.onTouchEnd=function(r){t.userIsDragging||(t.controlRef&&!t.controlRef.contains(r.target)&&t.menuListRef&&!t.menuListRef.contains(r.target)&&t.blurInput(),t.initialTouchX=0,t.initialTouchY=0)},t.onControlTouchEnd=function(r){t.userIsDragging||t.onControlMouseDown(r)},t.onClearIndicatorTouchEnd=function(r){t.userIsDragging||t.onClearIndicatorMouseDown(r)},t.onDropdownIndicatorTouchEnd=function(r){t.userIsDragging||t.onDropdownIndicatorMouseDown(r)},t.handleInputChange=function(r){var l=t.props.inputValue,p=r.currentTarget.value;t.setState({inputIsHiddenAfterUpdate:!1}),t.onInputChange(p,{action:"input-change",prevInputValue:l}),t.props.menuIsOpen||t.onMenuOpen()},t.onInputFocus=function(r){t.props.onFocus&&t.props.onFocus(r),t.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(t.openAfterFocus||t.props.openMenuOnFocus)&&t.openMenu("first"),t.openAfterFocus=!1},t.onInputBlur=function(r){var l=t.props.inputValue;if(t.menuListRef&&t.menuListRef.contains(document.activeElement)){t.inputRef.focus();return}t.props.onBlur&&t.props.onBlur(r),t.onInputChange("",{action:"input-blur",prevInputValue:l}),t.onMenuClose(),t.setState({focusedValue:null,isFocused:!1})},t.onOptionHover=function(r){if(!(t.blockOptionHover||t.state.focusedOption===r)){var l=t.getFocusableOptions(),p=l.indexOf(r);t.setState({focusedOption:r,focusedOptionId:p>-1?t.getFocusedOptionId(r):null})}},t.shouldHideSelectedOptions=function(){return Pn(t.props)},t.onValueInputFocus=function(r){r.preventDefault(),r.stopPropagation(),t.focus()},t.onKeyDown=function(r){var l=t.props,p=l.isMulti,d=l.backspaceRemovesValue,m=l.escapeClearsValue,x=l.inputValue,b=l.isClearable,w=l.isDisabled,h=l.menuIsOpen,f=l.onKeyDown,y=l.tabSelectsValue,E=l.openMenuOnFocus,S=t.state,A=S.focusedOption,k=S.focusedValue,M=S.selectValue;if(!w&&!(typeof f=="function"&&(f(r),r.defaultPrevented))){switch(t.blockOptionHover=!0,r.key){case"ArrowLeft":if(!p||x)return;t.focusValue("previous");break;case"ArrowRight":if(!p||x)return;t.focusValue("next");break;case"Delete":case"Backspace":if(x)return;if(k)t.removeValue(k);else{if(!d)return;p?t.popValue():b&&t.clearValue()}break;case"Tab":if(t.isComposing||r.shiftKey||!h||!y||!A||E&&t.isOptionSelected(A,M))return;t.selectOption(A);break;case"Enter":if(r.keyCode===229)break;if(h){if(!A||t.isComposing)return;t.selectOption(A);break}return;case"Escape":h?(t.setState({inputIsHiddenAfterUpdate:!1}),t.onInputChange("",{action:"menu-close",prevInputValue:x}),t.onMenuClose()):b&&m&&t.clearValue();break;case" ":if(x)return;if(!h){t.openMenu("first");break}if(!A)return;t.selectOption(A);break;case"ArrowUp":h?t.focusOption("up"):t.openMenu("last");break;case"ArrowDown":h?t.focusOption("down"):t.openMenu("first");break;case"PageUp":if(!h)return;t.focusOption("pageup");break;case"PageDown":if(!h)return;t.focusOption("pagedown");break;case"Home":if(!h)return;t.focusOption("first");break;case"End":if(!h)return;t.focusOption("last");break;default:return}r.preventDefault()}},t.state.instancePrefix="react-select-"+(t.props.instanceId||++Yr),t.state.selectValue=Dt(o.value),o.menuIsOpen&&t.state.selectValue.length){var s=t.getFocusableOptionsWithIds(),a=t.buildFocusableOptions(),u=a.indexOf(t.state.selectValue[0]);t.state.focusableOptionsWithIds=s,t.state.focusedOption=a[u],t.state.focusedOptionId=Ke(s,a[u])}return t}return Un(i,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&Ot(this.menuListRef,this.focusedOptionRef)}},{key:"componentDidUpdate",value:function(t){var s=this.props,a=s.isDisabled,u=s.menuIsOpen,r=this.state.isFocused;(r&&!a&&t.isDisabled||r&&u&&!t.menuIsOpen)&&this.focusInput(),r&&a&&!t.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!r&&!a&&t.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(Ot(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(t,s){this.props.onInputChange(t,s)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(t){var s=this,a=this.state,u=a.selectValue,r=a.isFocused,l=this.buildFocusableOptions(),p=t==="first"?0:l.length-1;if(!this.props.isMulti){var d=l.indexOf(u[0]);d>-1&&(p=d)}this.scrollToFocusedOptionOnUpdate=!(r&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:l[p],focusedOptionId:this.getFocusedOptionId(l[p])},function(){return s.onMenuOpen()})}},{key:"focusValue",value:function(t){var s=this.state,a=s.selectValue,u=s.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var r=a.indexOf(u);u||(r=-1);var l=a.length-1,p=-1;if(a.length){switch(t){case"previous":r===0?p=0:r===-1?p=l:p=r-1;break;case"next":r>-1&&r<l&&(p=r+1);break}this.setState({inputIsHidden:p!==-1,focusedValue:a[p]})}}}},{key:"focusOption",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",s=this.props.pageSize,a=this.state.focusedOption,u=this.getFocusableOptions();if(u.length){var r=0,l=u.indexOf(a);a||(l=-1),t==="up"?r=l>0?l-1:u.length-1:t==="down"?r=(l+1)%u.length:t==="pageup"?(r=l-s,r<0&&(r=0)):t==="pagedown"?(r=l+s,r>u.length-1&&(r=u.length-1)):t==="last"&&(r=u.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:u[r],focusedValue:null,focusedOptionId:this.getFocusedOptionId(u[r])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(Xe):O(O({},Xe),this.props.theme):Xe}},{key:"getCommonProps",value:function(){var t=this.clearValue,s=this.cx,a=this.getStyles,u=this.getClassNames,r=this.getValue,l=this.selectOption,p=this.setValue,d=this.props,m=d.isMulti,x=d.isRtl,b=d.options,w=this.hasValue();return{clearValue:t,cx:s,getStyles:a,getClassNames:u,getValue:r,hasValue:w,isMulti:m,isRtl:x,options:b,selectOption:l,selectProps:d,setValue:p,theme:this.getTheme()}}},{key:"hasValue",value:function(){var t=this.state.selectValue;return t.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var t=this.props,s=t.isClearable,a=t.isMulti;return s===void 0?a:s}},{key:"isOptionDisabled",value:function(t,s){return kn(this.props,t,s)}},{key:"isOptionSelected",value:function(t,s){return In(this.props,t,s)}},{key:"filterOption",value:function(t,s){return An(this.props,t,s)}},{key:"formatOptionLabel",value:function(t,s){if(typeof this.props.formatOptionLabel=="function"){var a=this.props.inputValue,u=this.state.selectValue;return this.props.formatOptionLabel(t,{context:s,inputValue:a,selectValue:u})}else return this.getOptionLabel(t)}},{key:"formatGroupLabel",value:function(t){return this.props.formatGroupLabel(t)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var t=this.props,s=t.isDisabled,a=t.isSearchable,u=t.inputId,r=t.inputValue,l=t.tabIndex,p=t.form,d=t.menuIsOpen,m=t.required,x=this.getComponents(),b=x.Input,w=this.state,h=w.inputIsHidden,f=w.ariaSelection,y=this.commonProps,E=u||this.getElementId("input"),S=O(O(O({"aria-autocomplete":"list","aria-expanded":d,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":m,role:"combobox","aria-activedescendant":this.isAppleDevice?void 0:this.state.focusedOptionId||""},d&&{"aria-controls":this.getElementId("listbox")}),!a&&{"aria-readonly":!0}),this.hasValue()?(f==null?void 0:f.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return a?v.createElement(b,I({},y,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:E,innerRef:this.getInputRef,isDisabled:s,isHidden:h,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:l,form:p,type:"text",value:r},S)):v.createElement(yr,I({id:E,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:Ve,onFocus:this.onInputFocus,disabled:s,tabIndex:l,inputMode:"none",form:p,value:""},S))}},{key:"renderPlaceholderOrValue",value:function(){var t=this,s=this.getComponents(),a=s.MultiValue,u=s.MultiValueContainer,r=s.MultiValueLabel,l=s.MultiValueRemove,p=s.SingleValue,d=s.Placeholder,m=this.commonProps,x=this.props,b=x.controlShouldRenderValue,w=x.isDisabled,h=x.isMulti,f=x.inputValue,y=x.placeholder,E=this.state,S=E.selectValue,A=E.focusedValue,k=E.isFocused;if(!this.hasValue()||!b)return f?null:v.createElement(d,I({},m,{key:"placeholder",isDisabled:w,isFocused:k,innerProps:{id:this.getElementId("placeholder")}}),y);if(h)return S.map(function(g,C){var P=g===A,V="".concat(t.getOptionLabel(g),"-").concat(t.getOptionValue(g));return v.createElement(a,I({},m,{components:{Container:u,Label:r,Remove:l},isFocused:P,isDisabled:w,key:V,index:C,removeProps:{onClick:function(){return t.removeValue(g)},onTouchEnd:function(){return t.removeValue(g)},onMouseDown:function(X){X.preventDefault()}},data:g}),t.formatOptionLabel(g,"value"))});if(f)return null;var M=S[0];return v.createElement(p,I({},m,{data:M,isDisabled:w}),this.formatOptionLabel(M,"value"))}},{key:"renderClearIndicator",value:function(){var t=this.getComponents(),s=t.ClearIndicator,a=this.commonProps,u=this.props,r=u.isDisabled,l=u.isLoading,p=this.state.isFocused;if(!this.isClearable()||!s||r||!this.hasValue()||l)return null;var d={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return v.createElement(s,I({},a,{innerProps:d,isFocused:p}))}},{key:"renderLoadingIndicator",value:function(){var t=this.getComponents(),s=t.LoadingIndicator,a=this.commonProps,u=this.props,r=u.isDisabled,l=u.isLoading,p=this.state.isFocused;if(!s||!l)return null;var d={"aria-hidden":"true"};return v.createElement(s,I({},a,{innerProps:d,isDisabled:r,isFocused:p}))}},{key:"renderIndicatorSeparator",value:function(){var t=this.getComponents(),s=t.DropdownIndicator,a=t.IndicatorSeparator;if(!s||!a)return null;var u=this.commonProps,r=this.props.isDisabled,l=this.state.isFocused;return v.createElement(a,I({},u,{isDisabled:r,isFocused:l}))}},{key:"renderDropdownIndicator",value:function(){var t=this.getComponents(),s=t.DropdownIndicator;if(!s)return null;var a=this.commonProps,u=this.props.isDisabled,r=this.state.isFocused,l={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return v.createElement(s,I({},a,{innerProps:l,isDisabled:u,isFocused:r}))}},{key:"renderMenu",value:function(){var t=this,s=this.getComponents(),a=s.Group,u=s.GroupHeading,r=s.Menu,l=s.MenuList,p=s.MenuPortal,d=s.LoadingMessage,m=s.NoOptionsMessage,x=s.Option,b=this.commonProps,w=this.state.focusedOption,h=this.props,f=h.captureMenuScroll,y=h.inputValue,E=h.isLoading,S=h.loadingMessage,A=h.minMenuHeight,k=h.maxMenuHeight,M=h.menuIsOpen,g=h.menuPlacement,C=h.menuPosition,P=h.menuPortalTarget,V=h.menuShouldBlockScroll,L=h.menuShouldScrollIntoView,X=h.noOptionsMessage,B=h.onMenuScrollToTop,T=h.onMenuScrollToBottom;if(!M)return null;var N=function(H,W){var ae=H.type,Q=H.data,re=H.isDisabled,te=H.isSelected,be=H.label,jn=H.value,gt=w===Q,xt=re?void 0:function(){return t.onOptionHover(Q)},Ln=re?void 0:function(){return t.selectOption(Q)},bt="".concat(t.getElementId("option"),"-").concat(W),Tn={id:bt,onClick:Ln,onMouseMove:xt,onMouseOver:xt,tabIndex:-1,role:"option","aria-selected":t.isAppleDevice?void 0:te};return v.createElement(x,I({},b,{innerProps:Tn,data:Q,isDisabled:re,isSelected:te,key:bt,label:be,type:ae,value:jn,isFocused:gt,innerRef:gt?t.getFocusedOptionRef:void 0}),t.formatOptionLabel(H.data,"menu"))},q;if(this.hasOptions())q=this.getCategorizedOptions().map(function(j){if(j.type==="group"){var H=j.data,W=j.options,ae=j.index,Q="".concat(t.getElementId("group"),"-").concat(ae),re="".concat(Q,"-heading");return v.createElement(a,I({},b,{key:Q,data:H,options:W,Heading:u,headingProps:{id:re,data:j.data},label:t.formatGroupLabel(j.data)}),j.options.map(function(te){return N(te,"".concat(ae,"-").concat(te.index))}))}else if(j.type==="option")return N(j,"".concat(j.index))});else if(E){var G=S({inputValue:y});if(G===null)return null;q=v.createElement(d,b,G)}else{var Z=X({inputValue:y});if(Z===null)return null;q=v.createElement(m,b,Z)}var K={minMenuHeight:A,maxMenuHeight:k,menuPlacement:g,menuPosition:C,menuShouldScrollIntoView:L},se=v.createElement(Jo,I({},b,K),function(j){var H=j.ref,W=j.placerProps,ae=W.placement,Q=W.maxHeight;return v.createElement(r,I({},b,K,{innerRef:H,innerProps:{onMouseDown:t.onMenuMouseDown,onMouseMove:t.onMenuMouseMove},isLoading:E,placement:ae}),v.createElement(Fr,{captureEnabled:f,onTopArrive:B,onBottomArrive:T,lockEnabled:V},function(re){return v.createElement(l,I({},b,{innerRef:function(be){t.getMenuListRef(be),re(be)},innerProps:{role:"listbox","aria-multiselectable":b.isMulti,id:t.getElementId("listbox")},isLoading:E,maxHeight:Q,focusedOption:w}),q)}))});return P||C==="fixed"?v.createElement(p,I({},b,{appendTo:P,controlElement:this.controlRef,menuPlacement:g,menuPosition:C}),se):se}},{key:"renderFormField",value:function(){var t=this,s=this.props,a=s.delimiter,u=s.isDisabled,r=s.isMulti,l=s.name,p=s.required,d=this.state.selectValue;if(p&&!this.hasValue()&&!u)return v.createElement(kr,{name:l,onFocus:this.onValueInputFocus});if(!(!l||u))if(r)if(a){var m=d.map(function(w){return t.getOptionValue(w)}).join(a);return v.createElement("input",{name:l,type:"hidden",value:m})}else{var x=d.length>0?d.map(function(w,h){return v.createElement("input",{key:"i-".concat(h),name:l,type:"hidden",value:t.getOptionValue(w)})}):v.createElement("input",{name:l,type:"hidden",value:""});return v.createElement("div",null,x)}else{var b=d[0]?this.getOptionValue(d[0]):"";return v.createElement("input",{name:l,type:"hidden",value:b})}}},{key:"renderLiveRegion",value:function(){var t=this.commonProps,s=this.state,a=s.ariaSelection,u=s.focusedOption,r=s.focusedValue,l=s.isFocused,p=s.selectValue,d=this.getFocusableOptions();return v.createElement(mr,I({},t,{id:this.getElementId("live-region"),ariaSelection:a,focusedOption:u,focusedValue:r,isFocused:l,selectValue:p,focusableOptions:d,isAppleDevice:this.isAppleDevice}))}},{key:"render",value:function(){var t=this.getComponents(),s=t.Control,a=t.IndicatorsContainer,u=t.SelectContainer,r=t.ValueContainer,l=this.props,p=l.className,d=l.id,m=l.isDisabled,x=l.menuIsOpen,b=this.state.isFocused,w=this.commonProps=this.getCommonProps();return v.createElement(u,I({},w,{className:p,innerProps:{id:d,onKeyDown:this.onKeyDown},isDisabled:m,isFocused:b}),this.renderLiveRegion(),v.createElement(s,I({},w,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:m,isFocused:b,menuIsOpen:x}),v.createElement(r,I({},w,{isDisabled:m}),this.renderPlaceholderOrValue(),this.renderInput()),v.createElement(a,I({},w,{isDisabled:m}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(t,s){var a=s.prevProps,u=s.clearFocusValueOnUpdate,r=s.inputIsHiddenAfterUpdate,l=s.ariaSelection,p=s.isFocused,d=s.prevWasFocused,m=s.instancePrefix,x=t.options,b=t.value,w=t.menuIsOpen,h=t.inputValue,f=t.isMulti,y=Dt(b),E={};if(a&&(b!==a.value||x!==a.options||w!==a.menuIsOpen||h!==a.inputValue)){var S=w?_r(t,y):[],A=w?Ht(De(t,y),"".concat(m,"-option")):[],k=u?Ur(s,y):null,M=qr(s,S),g=Ke(A,M);E={selectValue:y,focusedOption:M,focusedOptionId:g,focusableOptionsWithIds:A,focusedValue:k,clearFocusValueOnUpdate:!1}}var C=r!=null&&t!==a?{inputIsHidden:r,inputIsHiddenAfterUpdate:void 0}:{},P=l,V=p&&d;return p&&!V&&(P={value:Ce(f,y,y[0]||null),options:y,action:"initial-input-focus"},V=!d),(l==null?void 0:l.action)==="initial-input-focus"&&(P=null),O(O(O({},E),C),{},{prevProps:t,ariaSelection:P,prevWasFocused:V})}}]),i}(v.Component);Vn.defaultProps=Gr;var Xr=v.forwardRef(function(n,e){var i=fo(n);return v.createElement(Vn,I({ref:e},i))}),Kr=Xr;const Qr=F("div")`
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
`,Zr=F("div")`
display: flex;
align-items: center;
column-gap:7px;
`,es=F("span")`
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
`,ts=F("form")`
display: flex;
flex-direction:column;
row-gap:24px;
`,ns=F("div")`
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
`,is=F("div")`
    color: var(--primary-focus);
    font-weight: 700;
    font-size: 18px;
    line-height: 133%; 
`,os=F("button")`
    width: 100%;
    ${xe}
    @media only screen and (min-width: 768px) {
        width:160px;
    }
`,as=F(Kr)`
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
`,rs=()=>{const n=[];for(let e=0;e<24;e++)for(let i=0;i<60;i+=5){const o=e<10?`0${e}`:`${e}`,t=i<10?`0${i}`:`${i}`;n.push({value:`${o}:${t}`,label:`${o}:${t}`})}return n},Le=n=>{const e=new Date,[i,o]=n.split(":");return e.setHours(i,o,0),e},ss=n=>{const e=n?Le(n):new Date,i=e.getMinutes(),o=Math.ceil(i/5)*5;return e.setMinutes(o),_(e,"HH:mm")},us=Kt({gender:Jn().required("Gender is required"),weight:Me().required("Weight is required").min(0,"Weight must be a positive number"),activityTime:Me().required("Activity time is required").min(0,"Activity time must be a positive number"),dailyWaterGoal:Me().required("Amount water is required").min(0,"Amount water must be a positive number").max(15,"The amount of water should be no more than 15 liters").test("maxDigitsAfterDecimal","The amount of water must have 1 digits after decimal or less",n=>Number.isInteger(n*10**1))}),ls=Kt({portionOfWater:Me().required("Amount water is required").min(0,"Amount water must be a positive number").max(5e3,"The amount of water should be no more than 5000 milliliters").test("maxDigitsAfterDecimal","The amount of water must be an integer",n=>Number.isInteger(n*10**0))}),ve=5e3,_t=50,Se=50,Nn=({isOpen:n,onClose:e,isEditing:i,selectedItemId:o,amountWater:t=0,date:s})=>{const{t:a}=ie(),u=Re(),r=z(it),[l,p]=v.useState(t),[d,m]=v.useState(l),x=ss(s),b=s?_(Le(s),"HH:mm"):_(new Date,"HH:mm"),[w,h]=v.useState({value:x,label:b}),f=async C=>{C.preventDefault();const P=new Date,V=w.value;if(y.values.portionOfWater>ve){ce.Notify.failure("The amount of water should be no more than 5000 milliliters");return}else i||(await u(le.addWaterThunk({date:_(P,"dd/MM/uuuu"),time:V,waterAmount:l})),await u(le.getTodayWaterThunk({date:_(P,"dd/MM/uuuu")})),ce.Notify.success("Water portion successfully added"),e(),p(0),y.values.portionOfWater=0),i&&(await u(le.editWaterThunk({id:o,time:V,waterAmount:l})),await u(le.getTodayWaterThunk({date:_(P,"dd/MM/uuuu")})),e(),ce.Notify.success("Information was successfully edited"))},y=Qt({initialValues:{portionOfWater:d},validationSchema:ls,onSubmit:f});v.useEffect(()=>{p(t),m(t),h({value:x,label:b})},[t,b,x]);const E=C=>{h(C)},S=()=>{requestAnimationFrame(()=>{const C=document.querySelector(".Select__option--is-selected");C&&C.scrollIntoView({})})},A=()=>{l>=ve||(p(C=>parseFloat(C)+Se),m(d+Se))},k=()=>{l<=_t||(p(C=>parseFloat(C)-Se),m(d-Se))},M=C=>{if(C.target.value>=_t&&C.target.value<=ve){const P=parseFloat(C.target.value);p(P)}},g=C=>{if(!C.target.value){C.target.value="",m(null);return}C.target.value>ve&&(C.target.value=ve);const P=parseInt(C.target.value,10);m(P)};return c.jsx(Be,{isOpen:n,onClose:e,children:c.jsxs(Qr,{children:[c.jsx(ut,{children:a(i?"addEditWaterModal.headerEdit":"addEditWaterModal.headerAdd")}),c.jsx(lt,{onClick:e,children:c.jsx("svg",{children:c.jsx("use",{href:`${Y}#icon-close`})})}),i&&c.jsx(Jr,{children:c.jsx(nn,{data:{amount:t,time:s}})}),c.jsxs("div",{children:[c.jsx(de,{children:a(i?"addEditWaterModal.correctData":"addEditWaterModal.choose")}),c.jsx("p",{children:a("addEditWaterModal.amount")}),c.jsxs(Zr,{children:[c.jsx(Gt,{minus:!0,onClick:k,children:c.jsx("svg",{children:c.jsx("use",{href:`${Y}#icon-minus`})})}),c.jsx(es,{children:l}),c.jsx(Gt,{plus:!0,onClick:A,children:c.jsx("svg",{children:c.jsx("use",{href:`${Y}#icon-plus`})})})]})]}),c.jsxs(ts,{onSubmit:f,children:[c.jsxs("div",{children:[c.jsx("p",{children:a("addEditWaterModal.time")}),c.jsx(as,{classNamePrefix:"Select",options:rs(),value:w,defaultValue:w,onChange:E,onMenuOpen:S})]}),c.jsxs("div",{children:[c.jsx(de,{children:a("addEditWaterModal.waterUsed")}),c.jsx(Fe,{value:d,onBlur:C=>{y.handleBlur(C),M(C)},onChange:g,onFocus:C=>C.target.value="",type:"number",name:"portionOfWater",min:"0",step:"0.1",error:y.touched.portionOfWater&&y.errors.portionOfWater})]}),c.jsxs(ns,{children:[c.jsxs(is,{children:[l,"ml"]}),c.jsx(os,{disabled:r,type:"submit",children:r?c.jsx(ct,{children:c.jsx(ot,{})}):a("dailyNormaModal.buttonSave")})]})]})]})})},cs=F("div")`
${st}
display: flex;
flex-direction:column;
row-gap:24px;
`,ds=F("div")`
display: flex;
flex-direction:column;
gap:24px;
@media only screen and (min-width: 768px) {
    flex-direction:row;
    justify-content:flex-end;
}
`,ps=F("button")`
${xe}
color: var(--primary-focus);
background-color: var(--secondary-fifth);
box-shadow:none;
min-width:116px;
:hover {
  box-shadow:none;
  background-color: var(--secondary-third);  
}
`,fs=F("button")`
${xe}
background-color: var(--secondary-second);
box-shadow:none;
min-width:116px;
:hover {
  box-shadow:none;
  background-color: #ec1717;  
}
`;function ms({isOpen:n,onClose:e,selectedItemId:i}){const{t:o}=ie(),t=Re(),s=z(it),a=async()=>{const u=_(new Date,"dd/MM/yyyy");await t(le.deleteWaterThunk({id:i})),await t(le.getTodayWaterThunk({date:u})),ce.Notify.success("The portion is removed"),e()};return c.jsx(Be,{isOpen:n,onClose:e,children:c.jsxs(cs,{children:[c.jsx(ut,{children:o("deleteEntryModal.header")}),c.jsx(lt,{onClick:e,children:c.jsx("svg",{children:c.jsx("use",{href:`${Y}#icon-close`})})}),c.jsx(de,{children:o("deleteEntryModal.question")}),c.jsxs(ds,{children:[c.jsx(ps,{onClick:e,type:"button",children:o("deleteEntryModal.buttonCancel")}),c.jsx(fs,{disabled:s,onClick:a,type:"button",children:s?c.jsx(ct,{children:c.jsx(ot,{})}):o("deleteEntryModal.buttonDelete")})]})]})})}const hs=F("div")`
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
`,gs=F("ul")`
max-height:180px;
overflow: auto;
margin-bottom: 12px;
@media only screen and (min-width: 768px) {
max-height:170px;
}
`,xs=F("li")`
display: flex;
align-items: center;
justify-content: space-between;
column-gap:38px;
padding: 12px 10px 12px 4px;
border-bottom: 1px solid var(--secondary-fifth);
@media only screen and (min-width: 768px) {
padding: 12px 10px 12px 4px;
}
`,bs=F("div")`
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
`,ys=F("button")`
    :hover {
        border-bottom: 1px solid var(--secondary-third);
    }
    svg{
        stroke: var(--secondary-third);
        fill: transparent;
        width: 16px;
        height: 16px;
    }
`,ws=F("button")`
    :hover {
        border-bottom: 1px solid var(--secondary-second);
    }
    svg{
        stroke: var(--secondary-second);
        fill: transparent;
        width: 16px;
        height: 16px;
    }
`,Es=F("button")`
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
`,Cs=()=>{const{t:n}=ie(),{portionsOfWater:e}=z(Oe),[i,o]=v.useState(!1),[t,s]=v.useState(!1),[a,u]=v.useState(!1),[r,l]=v.useState(null),p=()=>{o(!0),s(!1),u(!1),l(null)},d=b=>{o(!0),s(!0),u(!1),l(b)},m=b=>{o(!0),u(!0),l(b)},x=()=>{o(!1)};return c.jsxs(hs,{children:[c.jsx(vs,{children:n("today")}),(e==null?void 0:e.length)>0&&c.jsx(gs,{children:e.slice().sort((b,w)=>Le(b.time).getTime()-Le(w.time).getTime()).map(b=>c.jsxs(xs,{children:[c.jsx(nn,{data:b}),c.jsxs(bs,{children:[c.jsx(ys,{type:"button",onClick:()=>d(b),children:c.jsx("svg",{children:c.jsx("use",{href:`${Y}#icon-icon-pencil`})})}),c.jsx(ws,{type:"button",onClick:()=>m(b),children:c.jsx("svg",{children:c.jsx("use",{href:`${Y}#icon-trash`})})})]})]},b.id))}),c.jsxs(Es,{onClick:p,type:"button",children:[c.jsx("span",{children:"+"}),n("addEditWaterModal.headerAdd")]}),a?c.jsx(ms,{isOpen:i,onClose:x,selectedItemId:r==null?void 0:r.id}):c.jsx(Nn,{isOpen:i,onClose:x,isEditing:t,selectedItemId:r==null?void 0:r.id,amountWater:r==null?void 0:r.amount,date:r==null?void 0:r.time})]})},Ss=F("div")`
  ${st}
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  position: relative;
  z-index: 2;
  max-height: 85vh;
  overflow-y: auto;
  overflow-x: hidden;
`,Ms=F("div")`
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
`,Fs=F("div")`
  color: #8f8f8f;
  font-size: 12px;
  line-height: 130%;
  padding: 10px;
  border: 1px solid var(--secondary-fifth);
  border-radius: 10px;
  span {
    color: var(--primary-focus);
  }
`,Ds=F("form")`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
`,Os=F("div")`
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
`,qt=F("div")`
  margin-bottom: 16px;
`,ks=F("div")`
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
`,Is=F("button")`
  width: 100%;
  ${xe}
  @media only screen and (min-width: 768px) {
    width: 160px;
    margin-left: auto;
  }
`,As=15e3,Ps=({isOpen:n,onClose:e})=>{const{t:i}=ie(),o=z(Te),t=Re(),{gender:s}=z(qn),a=z(it),[u,r]=v.useState(0),l=v.useCallback(m=>{if(!m.weight)return;const x=m.gender==="female"?.03:.04,b=m.gender==="female"?.4:.6,w=m.weight*x+m.activityTime*b;r(w)},[]),p=async m=>{m.preventDefault();const x=d.values.dailyWaterGoal*1e3;x>0&&x<=As?(await t(Qe.waterRateThunk({waterRate:x,date:_(new Date,"dd/MM/uuuu")})),ce.Notify.success("Daily norma successfully updated"),d.resetForm(),e()):ce.Notify.failure("The amount of water must be a positive and no more than 15 liters")},d=Qt({initialValues:{gender:s,weight:0,activityTime:0,dailyWaterGoal:0},validationSchema:us,onSubmit:p});return v.useEffect(()=>{l(d.values)},[l,d.values]),c.jsx(Be,{isOpen:n,onClose:e,children:c.jsxs(Ss,{children:[c.jsx(ut,{children:i("dailyNormaModal.header")}),c.jsx(lt,{onClick:e,children:c.jsx("svg",{children:c.jsx("use",{href:`${Y}#icon-close`})})}),c.jsxs("div",{children:[c.jsxs(Ms,{lang:o,children:[c.jsxs("p",{children:[i("dailyNormaModal.girl"),": ",c.jsx("span",{children:"V=(M*0,03) + (T*0,4)"})]}),c.jsxs("p",{children:[i("dailyNormaModal.man"),": ",c.jsx("span",{children:"V=(M*0,04) + (T*0,6)"})]})]}),c.jsxs(Fs,{children:[c.jsx("span",{children:"*"})," ",i("dailyNormaModal.description")]})]}),c.jsxs(Ds,{onSubmit:p,children:[c.jsxs("div",{children:[c.jsx(de,{children:i("dailyNormaModal.calculate")}),c.jsxs(Os,{children:[c.jsxs(Ut,{children:[c.jsx("input",{id:"gender-f",type:"radio",name:"gender",value:"female",checked:d.values.gender==="female",onChange:()=>d.setFieldValue("gender","female")}),c.jsx("label",{htmlFor:"gender-f",children:i("dailyNormaModal.girl")})]}),c.jsxs(Ut,{children:[c.jsx("input",{id:"gender-m",type:"radio",name:"gender",value:"male",checked:d.values.gender==="male",onChange:()=>d.setFieldValue("gender","male")}),c.jsx("label",{htmlFor:"gender-m",children:i("dailyNormaModal.man")})]})]}),c.jsx(qt,{children:c.jsx(Fe,{label:i("dailyNormaModal.weight"),value:d.values.weight,onBlur:d.handleBlur,onChange:d.handleChange,onFocus:m=>m.target.value="",type:"number",name:"weight",min:"0",step:"0.1",error:d.touched.weight&&d.errors.weight})}),c.jsx(qt,{children:c.jsx(Fe,{label:i("dailyNormaModal.time"),value:d.values.activityTime,onBlur:d.handleBlur,onChange:d.handleChange,onFocus:m=>m.target.value="",type:"number",name:"activityTime",min:"0",step:"0.1",error:d.touched.activityTime&&d.errors.activityTime})}),c.jsxs(ks,{children:[c.jsx("p",{children:i("dailyNormaModal.perDay")}),c.jsxs("span",{children:[parseFloat(u).toFixed(1)," L"]})]})]}),c.jsxs("div",{children:[c.jsx(de,{children:i("dailyNormaModal.willDrink")}),c.jsx(Fe,{value:d.values.dailyWaterGoal,onBlur:d.handleBlur,onChange:d.handleChange,onFocus:m=>m.target.value="",type:"number",name:"dailyWaterGoal",min:"0",step:"0.1",error:d.touched.dailyWaterGoal&&d.errors.dailyWaterGoal})]}),c.jsx(Is,{disabled:a,type:"submit",children:a?c.jsx(ct,{children:c.jsx(ot,{})}):i("dailyNormaModal.buttonSave")})]})]})})},Vs=F("div")`
background-color:var(--primary-light);
padding: 8px 20px;
border-radius: 10px;
box-shadow: 0px 4px 8px rgba(158, 187, 255,0.2);
 ${({lang:n})=>n==="uk"?"max-width: 210px;":"max-width: 164px;"}
position: relative;
z-index:1;
`,Ns=F("div")`
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
`,js=()=>{const{t:n}=ie(),e=z(Te),o=(z(We)/1e3).toFixed(1),[t,s]=v.useState(!1),a=()=>{s(!t)};return c.jsxs(Vs,{lang:e,children:[c.jsx(de,{children:n("dailyNormaModal.header")}),c.jsxs(Ns,{children:[c.jsxs("span",{children:[o," L"]}),c.jsx("button",{onClick:a,type:"button",children:n("dailyNormaModal.edit")})]}),c.jsx(Ps,{isOpen:t,onClose:a})]})},Ls=F("div")`
display: flex;
flex-direction:column;
row-gap:20px;
@media only screen and (min-width: 768px) {
flex-direction:row;
align-items: center;
column-gap:23px;
}
`,Ts=F("button")`
    display: flex;
    justify-content: center; 
    align-items: center;
    gap:12px;
    ${xe}
    svg{
        width: 20px;
        height: 20px;
        stroke:var(--primary-light);
        fill: transparent;
    }
`,Rs=F("div")`
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
`,Bs=F("div")`
position: relative;
color: var(--primary-focus);
`,Ws=F("input")`
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
`,$s=F("span")`
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
`,Hs=F("span")`
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
`,zs=F("span")`
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
`,Gs=()=>{const{t:n}=ie(),e=z(We),{allAmountForDay:i=0}=z(Oe),o=i/e*100,t=parseFloat(o).toFixed(0),[s,a]=v.useState(!1),u=()=>{a(!s)};return c.jsxs("div",{children:[c.jsxs(Ls,{children:[c.jsxs(Rs,{children:[c.jsx("p",{children:n("today")}),c.jsxs(Bs,{children:[c.jsx(Ws,{onChange:()=>{},name:"volume",type:"range",min:"0",max:"100",value:`${t}`,persent:t}),c.jsx($s,{children:"0%"}),c.jsxs(zs,{persent:t,children:[t,"%"]}),c.jsx(Hs,{children:"100%"})]})]}),c.jsxs(Ts,{onClick:u,children:[c.jsx("svg",{children:c.jsx("use",{href:`${Y}#icon-circle-plus`})}),n("addEditWaterModal.headerAdd")]})]}),c.jsx(Nn,{isOpen:s,onClose:u})]})},_s=$.div`
  display: flex;
  flex-wrap: wrap;

  p {
    @media (max-width: 767px) {
      padding: 0 12px;
    }
  }
`,Us=$.div`
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
`,Ys=$.button`
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
`,Xs=$.button`
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
`,Ks=()=>{const{t:n}=ie(),[e,i]=v.useState(!1),[o,t]=v.useState(!1),[s,a]=v.useState(""),u=Re(),r=()=>{t(!o)},l=d=>{a(d.target.value)},p=async()=>{const d=await u(Qe.verifyPasswordThunk({password:s}));if(d.error&&d.error)return Kn.Notify.failure(d.payload);d.payload.isCorrectPass&&await u(Qe.deleteUserThunk())};return c.jsxs(c.Fragment,{children:[c.jsx(Xs,{onClick:()=>i(!e),children:n("deleteUserModal.deleteUserbtn")}),c.jsx(Be,{isOpen:e,onClose:()=>i(!e),children:c.jsxs(Yn,{children:[c.jsxs("div",{className:"logOutDiv1",children:[c.jsx("p",{className:"logOutP1",children:n("deleteUserModal.deleteUserbtn")}),c.jsx(Xn,{className:"xMarkWrapper",onClick:()=>i(!e)})]}),c.jsxs(_s,{children:[c.jsx("p",{className:"logOutP2",children:n("deleteUserModal.question")}),c.jsxs(Us,{children:[c.jsx(qs,{type:o?"text":"password",name:"password",placeholder:n("authForm.placeholdPassword"),value:s,onChange:l,style:{color:"var(--primary-focus)",border:"1px solid var(--secondary-fifth)"}}),c.jsx(Ys,{type:"button",className:"icon-eye",onClick:r,style:{top:"30%"},children:c.jsx("svg",{width:"16",height:"16",className:"icon",children:c.jsx("use",{href:o?Y+"#icon-opened-eye":Y+"#icon-closed-eye"})})})]})]}),c.jsxs("div",{className:"logOutDiv3",children:[c.jsx("button",{className:"logOutButtonDelete",onClick:p,children:n("deleteEntryModal.buttonDelete")}),c.jsx("button",{className:"logOutButtonCancel",onClick:()=>i(!e),children:n("deleteEntryModal.buttonCancel")})]})]})})]})},Qs=$("div")`
  position: relative;
`;$("img")`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top left;
  z-index: -1;
`;const Js=$("div")`
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
`,Zs=$("div")`
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  @media only screen and (min-width: 1440px) {
    row-gap: 24px;
  }
`,eu=$("div")`
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
`,tu=$("div")`
padding-bottom: 20px;
`,nu=$("div")`
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
`,iu="/water-tracker/assets/bottle-b9ff448c.png",su=()=>c.jsx(c.Fragment,{children:c.jsx(Qs,{children:c.jsxs(Qn,{children:[c.jsxs(Js,{children:[c.jsxs(Zs,{children:[c.jsxs(eu,{children:[c.jsx(js,{}),c.jsx("img",{src:iu,alt:"bg"})]}),c.jsx(Gs,{})]}),c.jsxs(nu,{children:[c.jsx(Cs,{}),c.jsx(eo,{})]})]}),c.jsx(tu,{children:c.jsx(Ks,{children:"Delete user"})})]})})});export{su as default};
