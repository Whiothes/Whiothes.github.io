"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1137],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=a,f=d["".concat(c,".").concat(h)]||d[h]||u[h]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8109:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const i={},o="Chapter 8. Process Control",s={unversionedId:"TOC/system/apue/ch08",id:"TOC/system/apue/ch08",title:"Chapter 8. Process Control",description:"8.1 Introduction",source:"@site/docs/TOC/system/apue/ch08.md",sourceDirName:"TOC/system/apue",slug:"/TOC/system/apue/ch08",permalink:"/docs/TOC/system/apue/ch08",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Chapter 7. Process Environment",permalink:"/docs/TOC/system/apue/ch07"},next:{title:"Chapter 9. Process Relationships",permalink:"/docs/TOC/system/apue/ch09"}},c={},l=[{value:"8.1 Introduction",id:"81-introduction",level:2},{value:"8.2 Process Identifiers",id:"82-process-identifiers",level:2},{value:"8.3 <code>fork</code> Function",id:"83-fork-function",level:2},{value:"File Sharing",id:"file-sharing",level:3},{value:"8.4 <code>vfork</code> Function",id:"84-vfork-function",level:2},{value:"8.10 <code>exec</code> Functions",id:"810-exec-functions",level:2},{value:"8.11 Changing User IDs and Group IDs",id:"811-changing-user-ids-and-group-ids",level:2},{value:"8.16 Process Scheduling",id:"816-process-scheduling",level:2}],p={toc:l};function u(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"chapter-8-process-control"},"Chapter 8. Process Control"),(0,a.kt)("h2",{id:"81-introduction"},"8.1 Introduction"),(0,a.kt)("h2",{id:"82-process-identifiers"},"8.2 Process Identifiers"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"PID 0: the scheduler process, is often known as the ",(0,a.kt)("em",{parentName:"li"},"swapper"),". no program on disk corresponds to this process, is part of the kernel and is known as a system process,"),(0,a.kt)("li",{parentName:"ul"},"PID 1: ",(0,a.kt)("em",{parentName:"li"},"init"),", is invoked by the kernel at the end of the bootstrap procedure. be responsible for bringing up a UNIX system after the kernel has been bootstraped.")),(0,a.kt)("h2",{id:"83-fork-function"},"8.3 ",(0,a.kt)("inlineCode",{parentName:"h2"},"fork")," Function"),(0,a.kt)("h3",{id:"file-sharing"},"File Sharing"),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("p",null,(0,a.kt)("img",{src:n(1270).Z,width:"314",height:"91"}))),(0,a.kt)("h2",{id:"84-vfork-function"},"8.4 ",(0,a.kt)("inlineCode",{parentName:"h2"},"vfork")," Function"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"vfork")," guarantees that the child runs first, until the child calls ",(0,a.kt)("inlineCode",{parentName:"strong"},"exec")," or ",(0,a.kt)("inlineCode",{parentName:"strong"},"exit"),".")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"_exit")," does not perform any flushing of standard I/O buffers."),(0,a.kt)("h2",{id:"810-exec-functions"},"8.10 ",(0,a.kt)("inlineCode",{parentName:"h2"},"exec")," Functions"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"\n#include <unistd.h>\n\nextern char **environ;\n\nint execl(const char *path, const char *arg0, ..., /*, (char *)0, */);\n\nint execle(const char *path, const char *arg0, ..., /* (char *)0 char *const envp[] */);\n\nint execlp(const char *file, const char *arg0, ..., /*, (char *)0, */);\n\nint execv(const char *path, char *const argv[]);\n\nint execvp(const char *file, char *const argv[]);\n\nint execvP(const char *file, const char *search_path, char *const argv[]);\n")),(0,a.kt)("p",null,"The first difference in these functions is that the first four take a pathname argument,\nthe next two take a filename argument, and the last one takes a file descriptor argument.\nWhen a ",(0,a.kt)("em",{parentName:"p"},"filename")," argument is specified,"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If ",(0,a.kt)("em",{parentName:"li"},"filename")," contains a slah, it is taken as a pathname,"),(0,a.kt)("li",{parentName:"ul"},"Otherwise, the executable file is searched for in the directories specified by the PATH environment virable.")),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:n(8669).Z}),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Figure 8.15 Relationship of the seven ",(0,a.kt)("inlineCode",{parentName:"em"},"exec")," functions"))),(0,a.kt)("h2",{id:"811-changing-user-ids-and-group-ids"},"8.11 Changing User IDs and Group IDs"),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:n(3183).Z}),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Figure 8.19 Summary of all the functions that set the various user IDs"))),(0,a.kt)("h2",{id:"816-process-scheduling"},"8.16 Process Scheduling"),(0,a.kt)("p",null,"Lower nice have higher scheduling priority."))}u.isMDXComponent=!0},8669:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/08fig15-ca9f510d00a0c8b25cfb94e432746154.jpg"},3183:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/08fig19-30104da02f4eb416f7a0524a850ac7f6.jpg"},1270:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/04fig02-490a91163cc244ef5b494adc300941a6.jpg"}}]);