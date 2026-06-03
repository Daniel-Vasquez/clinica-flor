import{j as e}from"./jsx-runtime.D_zvdyIk.js";import{r as a}from"./index.C5BVv2q5.js";import{c as s}from"./createLucideIcon.k_lyLjpa.js";/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=s("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=s("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=s("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=s("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),b="https://www.doctoralia.com.mx/flor-gisela-moreno-flores/cirujano-general-proctologo/benito-juarez?utm_id=59944&utm_source=widget-doctor-59944&utm_medium=big_with_calendar&utm_campaign=&utm_content=#highlight-calendar",p=[{href:"#padecimientos",label:"Padecimientos"},{href:"#clinica",label:"La Clínica"},{href:"#doctora",label:"La Doctora"},{href:"#proceso",label:"Proceso"},{href:"#faq",label:"FAQ"},{href:"#contacto",label:"Contacto"}];function M(){const[r,d]=a.useState(!1),[n,f]=a.useState(!1),[o,l]=a.useState(!1);a.useEffect(()=>{const t=()=>f(window.scrollY>50);return window.addEventListener("scroll",t,{passive:!0}),()=>window.removeEventListener("scroll",t)},[]),a.useEffect(()=>{l(document.documentElement.classList.contains("light"))},[]),a.useEffect(()=>(document.body.style.overflow=r?"hidden":"",()=>{document.body.style.overflow=""}),[r]);const i=()=>d(!1),m=()=>{const t=document.documentElement;t.classList.add("theme-transitioning"),setTimeout(()=>t.classList.remove("theme-transitioning"),350),o?(t.classList.remove("light"),localStorage.setItem("theme","dark"),l(!1)):(t.classList.add("light"),localStorage.setItem("theme","light"),l(!0))},g=n?o?"bg-white/95 backdrop-blur-md border-b border-[#4b528a]/20 py-3":"bg-[#272538]/95 backdrop-blur-md border-b border-[#4b528a]/40 py-3":"bg-transparent py-6",y=n&&o?"text-[#4b528a] hover:text-[#272538]":"text-[#7d84b2] hover:text-white",j=n&&o?"text-[#272538]":"text-white",v=n&&o?"border-[#4b528a]/30 text-[#4b528a] hover:border-[#67c5d4] hover:text-[#67c5d4]":"border-[#4b528a]/50 text-[#7d84b2] hover:border-[#67c5d4] hover:text-[#67c5d4]";return e.jsxs(e.Fragment,{children:[e.jsx("header",{className:`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${g}`,children:e.jsxs("nav",{className:"max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between",children:[e.jsx("a",{href:"/",className:"shrink-0 flex items-center gap-3",children:e.jsx("img",{src:"/images/logo.png",alt:"Clínica Flor — Dra. Flor Moreno",className:"h-8 w-auto",width:120,height:32})}),e.jsx("ul",{className:"hidden md:flex items-center gap-7 list-none m-0 p-0",children:p.map(({href:t,label:c})=>e.jsx("li",{children:e.jsx("a",{href:t,className:`text-sm font-medium tracking-wide transition-colors duration-200 ${y}`,children:c})},t))}),e.jsxs("div",{className:"hidden md:flex items-center gap-3",children:[e.jsx("button",{onClick:m,"aria-label":o?"Activar modo oscuro":"Activar modo claro",className:`w-9 h-9 rounded-full border flex items-center justify-center
                         transition-all duration-200 ${v}`,children:o?e.jsx(h,{size:16}):e.jsx(x,{size:16})}),e.jsx("a",{href:b,target:"_blank",rel:"noopener noreferrer",className:`bg-[#67c5d4] text-[#272538] font-bold
                         px-6 py-2.5 rounded-full text-sm
                         hover:bg-[#67c5d4]/90 transition-all duration-200 whitespace-nowrap`,children:"Agenda tu cita →"})]}),e.jsx("button",{onClick:()=>d(t=>!t),"aria-label":r?"Cerrar menú":"Abrir menú","aria-expanded":r,className:`md:hidden p-2 -mr-2 ${j} transition-colors duration-300`,children:r?e.jsx(u,{size:24}):e.jsx(w,{size:24})})]})}),e.jsxs("div",{"aria-hidden":!r,className:`fixed inset-0 z-40 flex flex-col justify-center items-center
                    transition-opacity duration-400 md:hidden
                    ${o?"bg-[#f2f0fc]":"bg-[#272538]"}
                    ${r?"opacity-100 pointer-events-auto":"opacity-0 pointer-events-none"}`,children:[e.jsx("button",{onClick:i,"aria-label":"Cerrar menú",className:`absolute top-5 right-6 p-2 ${o?"text-[#272538]":"text-white"}`,children:e.jsx(u,{size:28})}),e.jsxs("nav",{className:"flex flex-col items-center gap-8 px-8",children:[p.map(({href:t,label:c},k)=>e.jsx("a",{href:t,onClick:i,style:{transitionDelay:r?`${k*55}ms`:"0ms"},className:`font-heading text-3xl font-bold hover:text-[#67c5d4] transition-colors duration-200
                         ${o?"text-[#1a1830]":"text-white"}`,children:c},t)),e.jsxs("button",{onClick:m,className:`flex items-center gap-2.5 text-sm font-medium px-5 py-2.5 rounded-full border
                       transition-all duration-200
                       ${o?"border-[#4b528a]/30 text-[#4b528a] hover:border-[#67c5d4] hover:text-[#67c5d4]":"border-[#4b528a]/50 text-[#7d84b2] hover:border-[#67c5d4] hover:text-[#67c5d4]"}`,children:[o?e.jsx(h,{size:15}):e.jsx(x,{size:15}),o?"Modo oscuro":"Modo claro"]}),e.jsx("a",{href:b,target:"_blank",rel:"noopener noreferrer",onClick:i,className:`mt-2 bg-[#67c5d4] text-[#272538] font-bold
                       px-10 py-4 rounded-full text-lg
                       hover:bg-[#67c5d4]/90 transition-all duration-200`,children:"Agenda tu cita →"})]})]})]})}export{M as default};
