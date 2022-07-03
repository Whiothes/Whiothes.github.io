"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4283],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=p(r),f=a,y=m["".concat(i,".").concat(f)]||m[f]||s[f]||o;return r?n.createElement(y,l(l({ref:t},u),{},{components:r})):n.createElement(y,l({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6369:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={title:"How to Clear Cache in Linux?",tags:["linux","memory","buff","cache"]},l=void 0,c={permalink:"/blog/2022/06/29/clean-buff-cache",source:"@site/blog/2022-06-29-clean-buff-cache.md",title:"How to Clear Cache in Linux?",description:"How to Clear Cache in Linux?",date:"2022-06-29T00:00:00.000Z",formattedDate:"June 29, 2022",tags:[{label:"linux",permalink:"/blog/tags/linux"},{label:"memory",permalink:"/blog/tags/memory"},{label:"buff",permalink:"/blog/tags/buff"},{label:"cache",permalink:"/blog/tags/cache"}],readingTime:.22,truncated:!1,authors:[],frontMatter:{title:"How to Clear Cache in Linux?",tags:["linux","memory","buff","cache"]},prevItem:{title:"memory leak",permalink:"/blog/2022/06/30/memory-leak"},nextItem:{title:"execute bash script remotely via curl",permalink:"/blog/2022/06/28/curl-exec"}},i={authorsImageUrls:[]},p=[{value:"How to Clear Cache in Linux?",id:"how-to-clear-cache-in-linux",level:2}],u={toc:p};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"how-to-clear-cache-in-linux"},(0,a.kt)("a",{parentName:"h2",href:"https://www.tecmint.com/clear-ram-memory-cache-buffer-and-swap-space-on-linux/"},"How to Clear Cache in Linux?")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Clear PageCache only.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sync; echo 1 > /proc/sys/vm/drop_caches\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Clear dentries and inodes.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sync; echo 2 > /proc/sys/vm/drop_caches\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Clear pagecache, dentries, and inodes.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sync; echo 3 > /proc/sys/vm/drop_caches \n")))}s.isMDXComponent=!0}}]);