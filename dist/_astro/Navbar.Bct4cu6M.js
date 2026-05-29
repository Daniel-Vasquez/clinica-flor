import{r as l}from"./index.C5BVv2q5.js";var u={exports:{}},d={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x;function k(){if(x)return d;x=1;var t=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function a(s,n,e){var i=null;if(e!==void 0&&(i=""+e),n.key!==void 0&&(i=""+n.key),"key"in n){e={};for(var c in n)c!=="key"&&(e[c]=n[c])}else e=n;return n=e.ref,{$$typeof:t,type:s,key:i,ref:n!==void 0?n:null,props:e}}return d.Fragment=o,d.jsx=a,d.jsxs=a,d}var m;function y(){return m||(m=1,u.exports=k()),u.exports}var r=y();/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),b=(...t)=>t.filter((o,a,s)=>!!o&&s.indexOf(o)===a).join(" ");/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var C={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=l.forwardRef(({color:t="currentColor",size:o=24,strokeWidth:a=2,absoluteStrokeWidth:s,className:n="",children:e,iconNode:i,...c},g)=>l.createElement("svg",{ref:g,...C,width:o,height:o,stroke:t,strokeWidth:s?Number(a)*24/Number(o):a,className:b("lucide",n),...c},[...i.map(([v,j])=>l.createElement(v,j)),...Array.isArray(e)?e:[e]]));/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=(t,o)=>{const a=l.forwardRef(({className:s,...n},e)=>l.createElement(E,{ref:e,iconNode:o,className:b(`lucide-${N(t)}`,s),...n}));return a.displayName=`${t}`,a};/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=w("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=w("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),p="https://www.doctoralia.com.mx/flor-gisela-moreno-flores/cirujano-general-proctologo/benito-juarez?utm_id=59944&utm_source=widget-doctor-59944&utm_medium=big_with_calendar&utm_campaign=&utm_content=#highlight-calendar",f=[{href:"#padecimientos",label:"Padecimientos"},{href:"#clinica",label:"La Clínica"},{href:"#doctora",label:"La Doctora"},{href:"#proceso",label:"Proceso"},{href:"#faq",label:"FAQ"},{href:"#contacto",label:"Contacto"}];function A(){const[t,o]=l.useState(!1),[a,s]=l.useState(!1);l.useEffect(()=>{const e=()=>s(window.scrollY>50);return window.addEventListener("scroll",e,{passive:!0}),()=>window.removeEventListener("scroll",e)},[]),l.useEffect(()=>(document.body.style.overflow=t?"hidden":"",()=>{document.body.style.overflow=""}),[t]);const n=()=>o(!1);return r.jsxs(r.Fragment,{children:[r.jsx("header",{className:`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${a?"bg-[#272538]/95 backdrop-blur-md border-b border-[#4b528a]/40 py-3":"bg-transparent py-6"}`,children:r.jsxs("nav",{className:"max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between",children:[r.jsx("a",{href:"/",className:"shrink-0 flex items-center gap-3",children:r.jsx("img",{src:"/images/logo.png",alt:"Clínica Flor — Dra. Flor Moreno",className:"h-8 w-auto",width:120,height:32})}),r.jsx("ul",{className:"hidden md:flex items-center gap-7 list-none m-0 p-0",children:f.map(({href:e,label:i})=>r.jsx("li",{children:r.jsx("a",{href:e,className:"text-[#7d84b2] hover:text-white text-sm font-medium tracking-wide transition-colors duration-200",children:i})},e))}),r.jsx("a",{href:p,target:"_blank",rel:"noopener noreferrer",className:`hidden md:inline-block bg-[#67c5d4] text-[#272538] font-bold
                       px-6 py-2.5 rounded-full text-sm
                       hover:bg-[#67c5d4]/90 transition-all duration-200 whitespace-nowrap`,children:"Agenda tu cita →"}),r.jsx("button",{onClick:()=>o(e=>!e),"aria-label":t?"Cerrar menú":"Abrir menú","aria-expanded":t,className:"md:hidden text-white p-2 -mr-2",children:t?r.jsx(h,{size:24}):r.jsx(R,{size:24})})]})}),r.jsxs("div",{"aria-hidden":!t,className:`fixed inset-0 z-40 bg-[#272538] flex flex-col justify-center items-center
                    transition-opacity duration-400 md:hidden
                    ${t?"opacity-100 pointer-events-auto":"opacity-0 pointer-events-none"}`,children:[r.jsx("button",{onClick:n,"aria-label":"Cerrar menú",className:"absolute top-5 right-6 text-white p-2",children:r.jsx(h,{size:28})}),r.jsxs("nav",{className:"flex flex-col items-center gap-8 px-8",children:[f.map(({href:e,label:i},c)=>r.jsx("a",{href:e,onClick:n,style:{transitionDelay:t?`${c*55}ms`:"0ms"},className:"font-heading text-3xl font-bold text-white hover:text-[#67c5d4] transition-colors duration-200",children:i},e)),r.jsx("a",{href:p,target:"_blank",rel:"noopener noreferrer",onClick:n,className:`mt-4 bg-[#67c5d4] text-[#272538] font-bold
                       px-10 py-4 rounded-full text-lg
                       hover:bg-[#67c5d4]/90 transition-all duration-200`,children:"Agenda tu cita →"})]})]})]})}export{A as default};
