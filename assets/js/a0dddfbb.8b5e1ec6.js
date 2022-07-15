"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9757],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1134:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const i={},a="Chapter 10. Signals",s={unversionedId:"TOC/computer/system/apue/ch10",id:"TOC/computer/system/apue/ch10",title:"Chapter 10. Signals",description:"10.1 Introduction",source:"@site/docs/TOC/computer/system/apue/ch10.md",sourceDirName:"TOC/computer/system/apue",slug:"/TOC/computer/system/apue/ch10",permalink:"/docs/TOC/computer/system/apue/ch10",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Chapter 9. Process Relationships",permalink:"/docs/TOC/computer/system/apue/ch09"},next:{title:"The Linux Programming Interface",permalink:"/docs/category/the-linux-programming-interface"}},l={},c=[{value:"10.1 Introduction",id:"101-introduction",level:2},{value:"10.2 Signal Concepts",id:"102-signal-concepts",level:2},{value:"10.3 <code>signal</code> Function",id:"103-signal-function",level:2},{value:"Process Creation",id:"process-creation",level:3}],p={toc:c};function u(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"chapter-10-signals"},"Chapter 10. Signals"),(0,o.kt)("h2",{id:"101-introduction"},"10.1 Introduction"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Signals provde a way of handling asynchronous events")," "),(0,o.kt)("h2",{id:"102-signal-concepts"},"10.2 Signal Concepts"),(0,o.kt)("p",null,"No signal has a signal number of 0."),(0,o.kt)("p",null,"Signals are classic examples of asynchronous events."),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(8610).Z,width:"829",height:"557"})),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Figure 10.1 UNIX System signals"))),(0,o.kt)("p",null,"The core file will not be generated if :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the process was set-user-ID and the current user is not the owner of the program file,"),(0,o.kt)("li",{parentName:"ul"},"the process was set-group-ID and the current user is not the group owner of the file,"),(0,o.kt)("li",{parentName:"ul"},"the user does not have permission to write in the current working directory,"),(0,o.kt)("li",{parentName:"ul"},"the file already exists and the user does not have permission to write to it,"),(0,o.kt)("li",{parentName:"ul"},"the file is too big (RLIMIT_CORE).")),(0,o.kt)("h2",{id:"103-signal-function"},"10.3 ",(0,o.kt)("inlineCode",{parentName:"h2"},"signal")," Function"),(0,o.kt)("p",null,"we are not able to determine the current disposition of a signal without changing the disposition."),(0,o.kt)("h3",{id:"process-creation"},"Process Creation"),(0,o.kt)("p",null,"When a process calls ",(0,o.kt)("inlineCode",{parentName:"p"},"fork"),", the child inherits the parent's signal dispositions."))}u.isMDXComponent=!0},8610:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/10fig01-4c6514ea8b87ace5ea53f5b3b1ab6a12.jpg"}}]);