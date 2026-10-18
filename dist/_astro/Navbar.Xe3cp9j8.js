import{j as e}from"./jsx-runtime.D_zvdyIk.js";import{r as s}from"./index.C5BVv2q5.js";/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),j=(...o)=>o.filter((r,n,l)=>!!r&&l.indexOf(r)===n).join(" ");/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var A={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=s.forwardRef(({color:o="currentColor",size:r=24,strokeWidth:n=2,absoluteStrokeWidth:l,className:a="",children:i,iconNode:m,...u},c)=>s.createElement("svg",{ref:c,...A,width:r,height:r,stroke:o,strokeWidth:l?Number(n)*24/Number(r):n,className:j("lucide",a),...u},[...m.map(([d,h])=>s.createElement(d,h)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=(o,r)=>{const n=s.forwardRef(({className:l,...a},i)=>s.createElement(E,{ref:i,iconNode:r,className:j(`lucide-${L(o)}`,l),...a}));return n.displayName=`${o}`,n};/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=x("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=x("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=x("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=x("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),y="/agenda-tu-cita",v=[{href:"/padecimientos",label:"Padecimientos"},{href:"/quien-soy",label:"¿Quién soy?"},{href:"/#clinica",label:"La Clínica"},{href:"/#proceso",label:"Proceso"},{href:"/#faq",label:"FAQ"},{href:"/#contacto",label:"Contacto"}];function I(){const[o,r]=s.useState(!1),[n,l]=s.useState(!1),[a,i]=s.useState(!1),[m,u]=s.useState("");s.useEffect(()=>{u(window.location.pathname.replace(/\/$/,"")||"/")},[]);const c=t=>!t.includes("#")&&(m===t||m.startsWith(`${t}/`));s.useEffect(()=>{const t=()=>l(window.scrollY>50);return window.addEventListener("scroll",t,{passive:!0}),()=>window.removeEventListener("scroll",t)},[]),s.useEffect(()=>{i(document.documentElement.classList.contains("light"))},[]),s.useEffect(()=>(document.body.style.overflow=o?"hidden":"",()=>{document.body.style.overflow=""}),[o]);const d=()=>r(!1),h=()=>{const t=document.documentElement;t.classList.add("theme-transitioning"),setTimeout(()=>t.classList.remove("theme-transitioning"),350),a?(t.classList.remove("light"),localStorage.setItem("theme","dark"),i(!1)):(t.classList.add("light"),localStorage.setItem("theme","light"),i(!0))},k=n?a?"bg-white/95 backdrop-blur-md border-b border-[#4b528a]/20 py-3":"bg-[#272538]/95 backdrop-blur-md border-b border-[#4b528a]/40 py-3":"bg-transparent",w=n&&a?"text-[#4b528a] hover:text-[#272538]":"text-[#7d84b2] hover:text-white",N=n&&a?"text-[#272538]":"text-white",C=n&&a?"border-[#4b528a]/30 text-[#4b528a] hover:border-[#67c5d4] hover:text-[#67c5d4]":"border-[#4b528a]/50 text-[#7d84b2] hover:border-[#67c5d4] hover:text-[#67c5d4]";return e.jsxs(e.Fragment,{children:[e.jsx("header",{className:`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${k}`,children:e.jsxs("nav",{className:"max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between",children:[e.jsx("a",{href:"/",className:"shrink-0 flex items-center gap-3",children:e.jsx("img",{src:"/images/logo.png",alt:"Clínica Flor — Dra. Flor Moreno",className:"h-24 w-auto",width:"120",height:"32"})}),e.jsx("ul",{className:"hidden md:flex items-center gap-7 list-none m-0 p-0",children:v.map(({href:t,label:b})=>e.jsx("li",{children:e.jsx("a",{href:t,"aria-current":c(t)?"page":void 0,className:`text-sm font-medium tracking-wide transition-colors duration-200 ${c(t)?"text-[#67c5d4]":w}`,children:b})},t))}),e.jsxs("div",{className:"hidden md:flex items-center gap-3",children:[e.jsx("button",{onClick:h,"aria-label":a?"Activar modo oscuro":"Activar modo claro",className:`w-9 h-9 rounded-full border flex items-center justify-center
                         transition-all duration-200 ${C}`,children:a?e.jsx(p,{size:16}):e.jsx(f,{size:16})}),e.jsx("a",{href:y,className:`bg-[#67c5d4] text-[#272538] font-bold
                         px-6 py-2.5 rounded-full text-sm
                         hover:bg-[#67c5d4]/90 transition-all duration-200 whitespace-nowrap`,children:"Agenda tu cita →"})]}),e.jsx("button",{onClick:()=>r(t=>!t),"aria-label":o?"Cerrar menú":"Abrir menú","aria-expanded":o,className:`md:hidden p-2 -mr-2 ${N} transition-colors duration-300`,children:o?e.jsx(g,{size:24}):e.jsx(M,{size:24})})]})}),e.jsxs("div",{"aria-hidden":!o,className:`fixed inset-0 z-40 flex flex-col justify-center items-center
                    transition-opacity duration-400 md:hidden
                    ${a?"bg-[#f2f0fc]":"bg-[#272538]"}
                    ${o?"opacity-100 pointer-events-auto":"opacity-0 pointer-events-none"}`,children:[e.jsx("button",{onClick:d,"aria-label":"Cerrar menú",className:`absolute top-5 right-6 p-2 ${a?"text-[#272538]":"text-white"}`,children:e.jsx(g,{size:28})}),e.jsxs("nav",{className:"flex flex-col items-center gap-8 px-8",children:[v.map(({href:t,label:b},$)=>e.jsx("a",{href:t,onClick:d,"aria-current":c(t)?"page":void 0,style:{transitionDelay:o?`${$*55}ms`:"0ms"},className:`font-heading text-3xl font-bold hover:text-[#67c5d4] transition-colors duration-200
                         ${a?"text-[#1a1830]":"text-white"}`,children:b},t)),e.jsxs("button",{onClick:h,className:`flex items-center gap-2.5 text-sm font-medium px-5 py-2.5 rounded-full border
                       transition-all duration-200
                       ${a?"border-[#4b528a]/30 text-[#4b528a] hover:border-[#67c5d4] hover:text-[#67c5d4]":"border-[#4b528a]/50 text-[#7d84b2] hover:border-[#67c5d4] hover:text-[#67c5d4]"}`,children:[a?e.jsx(p,{size:15}):e.jsx(f,{size:15}),a?"Modo oscuro":"Modo claro"]}),e.jsx("a",{href:y,onClick:d,className:`mt-2 bg-[#67c5d4] text-[#272538] font-bold
                       px-10 py-4 rounded-full text-lg
                       hover:bg-[#67c5d4]/90 transition-all duration-200`,children:"Agenda tu cita →"})]})]})]})}export{I as default};
