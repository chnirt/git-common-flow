(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3454:function(e,t,r){"use strict";var n,i;e.exports=(null==(n=r.g.process)?void 0:n.env)&&"object"==typeof(null==(i=r.g.process)?void 0:i.env)?r.g.process:r(7663)},5557:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(6029)}])},6541:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return x}});let n=r(8754),i=r(1757),o=r(5893),s=i._(r(7294)),a=n._(r(3935)),l=n._(r(7828)),c=r(7367),u=r(7903),d=r(4938);r(1997);let f=r(9953),p=n._(r(6663)),m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function h(e,t,r,n,i,o,s){let a=null==e?void 0:e.src;e&&e["data-loaded-src"]!==a&&(e["data-loaded-src"]=a,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&i(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,i=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==n?void 0:n.current)&&n.current(e)}}))}function g(e){let[t,r]=s.version.split(".",2),n=parseInt(t,10),i=parseInt(r,10);return n>18||18===n&&i>=3?{fetchPriority:e}:{fetchpriority:e}}let _=(0,s.forwardRef)((e,t)=>{let{src:r,srcSet:n,sizes:i,height:a,width:l,decoding:c,className:u,style:d,fetchPriority:f,placeholder:p,loading:m,unoptimized:_,fill:v,onLoadRef:x,onLoadingCompleteRef:j,setBlurComplete:b,setShowAltText:y,sizesInput:w,onLoad:S,onError:E,...N}=e;return(0,o.jsx)("img",{...N,...g(f),loading:m,width:l,height:a,decoding:c,"data-nimg":v?"fill":"1",className:u,style:d,sizes:i,srcSet:n,src:r,ref:(0,s.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(E&&(e.src=e.src),e.complete&&h(e,p,x,j,b,_,w))},[r,p,x,j,b,E,_,w,t]),onLoad:e=>{h(e.currentTarget,p,x,j,b,_,w)},onError:e=>{y(!0),"empty"!==p&&b(!0),E&&E(e)}})});function v(e){let{isAppRouter:t,imgAttributes:r}=e,n={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...g(r.fetchPriority)};return t&&a.default.preload?(a.default.preload(r.src,n),null):(0,o.jsx)(l.default,{children:(0,o.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...n},"__nimg-"+r.src+r.srcSet+r.sizes)})}let x=(0,s.forwardRef)((e,t)=>{let r=(0,s.useContext)(f.RouterContext),n=(0,s.useContext)(d.ImageConfigContext),i=(0,s.useMemo)(()=>{let e=m||n||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[n]),{onLoad:a,onLoadingComplete:l}=e,h=(0,s.useRef)(a);(0,s.useEffect)(()=>{h.current=a},[a]);let g=(0,s.useRef)(l);(0,s.useEffect)(()=>{g.current=l},[l]);let[x,j]=(0,s.useState)(!1),[b,y]=(0,s.useState)(!1),{props:w,meta:S}=(0,c.getImgProps)(e,{defaultLoader:p.default,imgConf:i,blurComplete:x,showAltText:b});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(_,{...w,unoptimized:S.unoptimized,placeholder:S.placeholder,fill:S.fill,onLoadRef:h,onLoadingCompleteRef:g,setBlurComplete:j,setShowAltText:y,sizesInput:e.sizes,ref:t}),S.priority?(0,o.jsx)(v,{isAppRouter:!r,imgAttributes:w}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7367:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return a}}),r(1997);let n=r(9919),i=r(7903);function o(e){return void 0!==e.default}function s(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function a(e,t){var r;let a,l,c,{src:u,sizes:d,unoptimized:f=!1,priority:p=!1,loading:m,className:h,quality:g,width:_,height:v,fill:x=!1,style:j,overrideSrc:b,onLoad:y,onLoadingComplete:w,placeholder:S="empty",blurDataURL:E,fetchPriority:N,layout:C,objectFit:P,objectPosition:z,lazyBoundary:I,lazyRoot:T,...k}=e,{imgConf:L,showAltText:O,blurComplete:R,defaultLoader:A}=t,M=L||i.imageConfigDefault;if("allSizes"in M)a=M;else{let e=[...M.deviceSizes,...M.imageSizes].sort((e,t)=>e-t),t=M.deviceSizes.sort((e,t)=>e-t);a={...M,allSizes:e,deviceSizes:t}}if(void 0===A)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let D=k.loader||A;delete k.loader,delete k.srcSet;let B="__next_img_default"in D;if(B){if("custom"===a.loader)throw Error('Image with src "'+u+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=D;D=t=>{let{config:r,...n}=t;return e(n)}}if(C){"fill"===C&&(x=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[C];e&&(j={...j,...e});let t={responsive:"100vw",fill:"100vw"}[C];t&&!d&&(d=t)}let F="",H=s(_),V=s(v);if("object"==typeof(r=u)&&(o(r)||void 0!==r.src)){let e=o(u)?u.default:u;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(l=e.blurWidth,c=e.blurHeight,E=E||e.blurDataURL,F=e.src,!x){if(H||V){if(H&&!V){let t=H/e.width;V=Math.round(e.height*t)}else if(!H&&V){let t=V/e.height;H=Math.round(e.width*t)}}else H=e.width,V=e.height}}let G=!p&&("lazy"===m||void 0===m);(!(u="string"==typeof u?u:F)||u.startsWith("data:")||u.startsWith("blob:"))&&(f=!0,G=!1),a.unoptimized&&(f=!0),B&&u.endsWith(".svg")&&!a.dangerouslyAllowSVG&&(f=!0),p&&(N="high");let U=s(g),X=Object.assign(x?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:P,objectPosition:z}:{},O?{}:{color:"transparent"},j),W=R||"empty"===S?null:"blur"===S?'url("data:image/svg+xml;charset=utf-8,'+(0,n.getImageBlurSvg)({widthInt:H,heightInt:V,blurWidth:l,blurHeight:c,blurDataURL:E||"",objectFit:X.objectFit})+'")':'url("'+S+'")',q=W?{backgroundSize:X.objectFit||"cover",backgroundPosition:X.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:W}:{},Y=function(e){let{config:t,src:r,unoptimized:n,width:i,quality:o,sizes:s,loader:a}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:l,kind:c}=function(e,t,r){let{deviceSizes:n,allSizes:i}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:i,kind:"w"}}return"number"!=typeof t?{widths:n,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))],kind:"x"}}(t,i,s),u=l.length-1;return{sizes:s||"w"!==c?s:"100vw",srcSet:l.map((e,n)=>a({config:t,src:r,quality:o,width:e})+" "+("w"===c?e:n+1)+c).join(", "),src:a({config:t,src:r,quality:o,width:l[u]})}}({config:a,src:u,unoptimized:f,width:H,quality:U,sizes:d,loader:D});return{props:{...k,loading:G?"lazy":m,fetchPriority:N,width:H,height:V,decoding:"async",className:h,style:{...X,...q},sizes:Y.sizes,srcSet:Y.srcSet,src:b||Y.src},meta:{unoptimized:f,priority:p,placeholder:S,fill:x}}}},9919:function(e,t){"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:i,blurDataURL:o,objectFit:s}=e,a=n?40*n:t,l=i?40*i:r,c=a&&l?"viewBox='0 0 "+a+" "+l+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+c+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(c?"none":"contain"===s?"xMidYMid":"cover"===s?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},5666:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return l},getImageProps:function(){return a}});let n=r(8754),i=r(7367),o=r(6541),s=n._(r(6663));function a(e){let{props:t}=(0,i.getImgProps)(e,{defaultLoader:s.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let l=o.Image},6663:function(e,t){"use strict";function r(e){let{config:t,src:r,width:n,quality:i}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+n+"&q="+(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},6029:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return m}});var n=r(5893),i=r(8961),o=r.n(i),s=r(9008),a=r.n(s),l=r(5675),c=r.n(l),u=r(5291),d=r.n(u),f=r(3454);let{version:p}={version:"1.0.9"};function m(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a(),{children:[(0,n.jsxs)("title",{children:["Create Next App ",p||null," ",f.env.NEXT_PUBLIC_API_URL]}),(0,n.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsxs)("main",{className:"".concat(d().main," ").concat(o().className),children:[(0,n.jsxs)("div",{className:d().description,children:[(0,n.jsxs)("p",{children:["Get started by editing\xa0",(0,n.jsx)("code",{className:d().code,children:"pages/index.js"})," ",f.env.NEXT_PUBLIC_SECRET_KEY,"fix bug"]}),(0,n.jsx)("div",{children:(0,n.jsxs)("a",{href:"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",children:["By"," ",(0,n.jsx)(c(),{src:"/vercel.svg",alt:"Vercel Logo",className:d().vercelLogo,width:100,height:24,priority:!0})]})})]}),(0,n.jsx)("div",{className:d().center,children:(0,n.jsx)(c(),{className:d().logo,src:"/next.svg",alt:"Next.js Logo",width:180,height:37,priority:!0})}),(0,n.jsxs)("div",{className:d().grid,children:[(0,n.jsxs)("a",{href:"https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",className:d().card,target:"_blank",rel:"noopener noreferrer",children:[(0,n.jsxs)("h2",{children:["Docs ",(0,n.jsx)("span",{children:"->"})]}),(0,n.jsx)("p",{children:"Find in-depth information about Next.js features and\xa0API."})]}),(0,n.jsxs)("a",{href:"https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",className:d().card,target:"_blank",rel:"noopener noreferrer",children:[(0,n.jsxs)("h2",{children:["Learn ",(0,n.jsx)("span",{children:"->"})]}),(0,n.jsx)("p",{children:"Learn about Next.js in an interactive course with\xa0quizzes!"})]}),(0,n.jsxs)("a",{href:"https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",className:d().card,target:"_blank",rel:"noopener noreferrer",children:[(0,n.jsxs)("h2",{children:["Templates ",(0,n.jsx)("span",{children:"->"})]}),(0,n.jsx)("p",{children:"Discover and deploy boilerplate example Next.js\xa0projects."})]}),(0,n.jsxs)("a",{href:"https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",className:d().card,target:"_blank",rel:"noopener noreferrer",children:[(0,n.jsxs)("h2",{children:["Deploy ",(0,n.jsx)("span",{children:"->"})]}),(0,n.jsx)("p",{children:"Instantly deploy your Next.js site to a shareable URL with\xa0Vercel."})]})]})]})]})}},8961:function(e){e.exports={style:{fontFamily:"'__Inter_aaf875', '__Inter_Fallback_aaf875'",fontStyle:"normal"},className:"__className_aaf875"}},5291:function(e){e.exports={main:"Home_main__VkIEL",description:"Home_description__uXNdx",code:"Home_code__VVrIr",grid:"Home_grid__AVljO",card:"Home_card__E5spL",center:"Home_center__O_TIN",logo:"Home_logo__IOQAX",content:"Home_content__tkQPU",vercelLogo:"Home_vercelLogo___BVuc",rotate:"Home_rotate__c5eru"}},7663:function(e){!function(){var t={229:function(e){var t,r,n,i=e.exports={};function o(){throw Error("setTimeout has not been defined")}function s(){throw Error("clearTimeout has not been defined")}function a(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:o}catch(e){t=o}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(e){r=s}}();var l=[],c=!1,u=-1;function d(){c&&n&&(c=!1,n.length?l=n.concat(l):u=-1,l.length&&f())}function f(){if(!c){var e=a(d);c=!0;for(var t=l.length;t;){for(n=l,l=[];++u<t;)n&&n[u].run();u=-1,t=l.length}n=null,c=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function m(){}i.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];l.push(new p(e,t)),1!==l.length||c||a(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=m,i.addListener=m,i.once=m,i.off=m,i.removeListener=m,i.removeAllListeners=m,i.emit=m,i.prependListener=m,i.prependOnceListener=m,i.listeners=function(e){return[]},i.binding=function(e){throw Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw Error("process.chdir is not supported")},i.umask=function(){return 0}}},r={};function n(e){var i=r[e];if(void 0!==i)return i.exports;var o=r[e]={exports:{}},s=!0;try{t[e](o,o.exports,n),s=!1}finally{s&&delete r[e]}return o.exports}n.ab="//";var i=n(229);e.exports=i}()},9008:function(e,t,r){e.exports=r(7828)},5675:function(e,t,r){e.exports=r(5666)}},function(e){e.O(0,[888,774,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);