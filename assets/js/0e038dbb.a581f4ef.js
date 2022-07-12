"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5619],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7577:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={},o="Chapter 13. TCP Connection Management",c={unversionedId:"TOC/network/tcpip/ch13",id:"TOC/network/tcpip/ch13",title:"Chapter 13. TCP Connection Management",description:"13.1 Introduction",source:"@site/docs/TOC/network/tcpip/ch13.md",sourceDirName:"TOC/network/tcpip",slug:"/TOC/network/tcpip/ch13",permalink:"/docs/TOC/network/tcpip/ch13",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Chapter 12. TCP: The Transmission Control Protocol (Preliminaries)",permalink:"/docs/TOC/network/tcpip/ch12"},next:{title:"Computer System",permalink:"/docs/category/computer-system"}},l={},p=[{value:"13.1 Introduction",id:"131-introduction",level:2},{value:"13.2 TCP Connection Establishment and Termination",id:"132-tcp-connection-establishment-and-termination",level:2},{value:"13.2.1 TCP Half-Close",id:"1321-tcp-half-close",level:3},{value:"13.5 TCP State Transitions",id:"135-tcp-state-transitions",level:2},{value:"13.5.2 TIME_WAIT (2MSL Wait) State",id:"1352-time_wait-2msl-wait-state",level:3}],s={toc:p};function u(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"chapter-13-tcp-connection-management"},"Chapter 13. TCP Connection Management"),(0,a.kt)("h2",{id:"131-introduction"},"13.1 Introduction"),(0,a.kt)("h2",{id:"132-tcp-connection-establishment-and-termination"},"13.2 TCP Connection Establishment and Termination"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"4-tuple: source ip, destination ip, source port, destination port.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"half-close"),": close only a single direction of the data flow.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"reason for prefer to use UDP:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"  because of its ability to send and receive data without establishing connnections.\n")))),(0,a.kt)("h3",{id:"1321-tcp-half-close"},"13.2.1 TCP Half-Close"),(0,a.kt)("h2",{id:"135-tcp-state-transitions"},"13.5 TCP State Transitions"),(0,a.kt)("h3",{id:"1352-time_wait-2msl-wait-state"},"13.5.2 TIME_WAIT (2MSL Wait) State"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"MSL: ",(0,a.kt)("em",{parentName:"li"},"Maximum Segment Lifetime"))),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(9618).Z,width:"639",height:"623"})))}u.isMDXComponent=!0},9618:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/fig13-9-863abdbf366ec12c8bcab8bcdcce699a.svg"}}]);