"use strict";(self.webpackChunkSmartFlix=self.webpackChunkSmartFlix||[]).push([[56],{56:(e,t,s)=>{s.r(t),s.d(t,{default:()=>n});var a=s(43),l=s(326),c=s(381),r=s(579);const n=()=>{const[e,t]=(0,a.useState)(1),[s,n]=(0,a.useState)([]),{data:d,isFetching:i}=(0,l.Ii)(e);return(0,a.useEffect)((()=>{d&&n([...s,...d.results])}),[d]),(0,r.jsxs)("div",{className:"bg-black  p-2",children:[(0,r.jsx)("div",{className:"text-red-600 font-bold text-3xl md:text-5xl my-2",children:"Top Rated Movie Posters"}),(0,r.jsx)(c.A,{data:s,setPage:t,isFetching:i})]})}},381:(e,t,s)=>{s.d(t,{A:()=>r});var a=s(43),l=s(927),c=s(579);const r=e=>{let{data:t,isFetching:s,setPage:r}=e;const n=()=>{const e=document.documentElement.scrollHeight;document.documentElement.scrollTop+window.innerHeight+4>=e&&r((e=>e+1))};return(0,a.useEffect)((()=>{window.addEventListener("scroll",n)}),[]),(0,c.jsxs)("div",{className:"flex gap-4 flex-wrap p-4 justify-evenly scrollbar scrollbar-thumb-red-600 scrollbar-track-black",children:[t&&t.map((e=>(0,c.jsx)("div",{children:(0,c.jsx)("img",{className:"max-w-[50px] md:max-w-[100px] lg:max-w-[150px]  xl:max-w-[200px]",src:`https://image.tmdb.org/t/p/w300${e.poster_path}`,alt:"movie poster"})}))),s&&(0,c.jsx)(l.A,{})]})}}}]);
//# sourceMappingURL=56.ffb19111.chunk.js.map