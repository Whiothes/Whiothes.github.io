"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8037],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(r),f=a,y=m["".concat(i,".").concat(f)]||m[f]||p[f]||c;return r?n.createElement(y,o(o({ref:t},s),{},{components:r})):n.createElement(y,o({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<c;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},466:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const c={title:"execute bash script remotely via curl",tags:["curl","sh"]},o=void 0,l={permalink:"/blog/2022/06/28/curl-exec",source:"@site/blog/2022-06-28-curl-exec.md",title:"execute bash script remotely via curl",description:"linux - Execute Bash script remotely via cURL - Stack Overflow",date:"2022-06-28T00:00:00.000Z",formattedDate:"June 28, 2022",tags:[{label:"curl",permalink:"/blog/tags/curl"},{label:"sh",permalink:"/blog/tags/sh"}],readingTime:.09,truncated:!1,authors:[],frontMatter:{title:"execute bash script remotely via curl",tags:["curl","sh"]},prevItem:{title:"How to Clear Cache in Linux?",permalink:"/blog/2022/06/29/clean-buff-cache"},nextItem:{title:"gcc error when inline without static",permalink:"/blog/2022/06/28/gcc"}},i={authorsImageUrls:[]},u=[{value:"linux - Execute Bash script remotely via cURL - Stack Overflow",id:"linux---execute-bash-script-remotely-via-curl---stack-overflow",level:2}],s={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"linux---execute-bash-script-remotely-via-curl---stack-overflow"},(0,a.kt)("a",{parentName:"h2",href:"https://stackoverflow.com/questions/49679676/execute-bash-script-remotely-via-curl#49679914"},"linux - Execute Bash script remotely via cURL - Stack Overflow")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"curl https://xxxx.sh | bash\n")))}p.isMDXComponent=!0}}]);