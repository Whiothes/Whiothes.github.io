"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3847],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=c(r),f=a,k=u["".concat(p,".").concat(f)]||u[f]||s[f]||o;return r?n.createElement(k,l(l({ref:t},m),{},{components:r})):n.createElement(k,l({ref:t},m))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5163:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={title:"memory leak",tags:["memory","pstack","watch"],sidebar_position:1},l=void 0,i={permalink:"/blog/2022/06/30/memory-leak",source:"@site/blog/2022-06-30-memory-leak.md",title:"memory leak",description:"find memory leak of a running process",date:"2022-06-30T00:00:00.000Z",formattedDate:"June 30, 2022",tags:[{label:"memory",permalink:"/blog/tags/memory"},{label:"pstack",permalink:"/blog/tags/pstack"},{label:"watch",permalink:"/blog/tags/watch"}],readingTime:.6,truncated:!1,authors:[],frontMatter:{title:"memory leak",tags:["memory","pstack","watch"],sidebar_position:1},prevItem:{title:"ideas of memory pool",permalink:"/blog/2022/07/03/mem-pool"},nextItem:{title:"execute bash script remotely via curl",permalink:"/blog/2022/06/28/curl-exec"}},p={authorsImageUrls:[]},c=[{value:"find memory leak of a running process",id:"find-memory-leak-of-a-running-process",level:2}],m={toc:c};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"find-memory-leak-of-a-running-process"},(0,a.kt)("a",{parentName:"h2",href:"https://unix.stackexchange.com/questions/36450/how-can-i-find-a-memory-leak-of-a-running-process"},"find memory leak of a running process")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"cat /proc/$pid/smaps\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"find out the ",(0,a.kt)("inlineCode",{parentName:"li"},"PID")," of the process")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"ps -aux\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"capture ",(0,a.kt)("inlineCode",{parentName:"li"},"/proc/PID/smaps")," and save into some file like ",(0,a.kt)("inlineCode",{parentName:"li"},"before_meminc.txt")),(0,a.kt)("li",{parentName:"ol"},"wait till memory gets increased"),(0,a.kt)("li",{parentName:"ol"},"try again step 2"),(0,a.kt)("li",{parentName:"ol"},"find the difference between first ",(0,a.kt)("inlineCode",{parentName:"li"},"smaps")," and 2nd ",(0,a.kt)("inlineCode",{parentName:"li"},"smaps"),", e.g. with")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"diff -u before_meminc.txt after_meminc.txt\n")),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"note down the address range where memory got increased")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"use ",(0,a.kt)("inlineCode",{parentName:"p"},"pstack")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"watch")," command to get the right call stack"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"watch -n 1 'pstack $PID | tee -a $PID.stack'\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"C-c")," when we caputred right stack"),(0,a.kt)("ol",{start:8},(0,a.kt)("li",{parentName:"ol"},"check our stack file, find the functions between address range which we got from step 6.")))}s.isMDXComponent=!0}}]);