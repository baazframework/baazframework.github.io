(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"0QOw":function(e,t,r){(t=r("JPst")(!1)).push([e.i,".banner{width:100%;height:400px;-o-object-fit:cover;object-fit:cover}.banner-outer{background-color:#fff7fb}.overview-body{margin:1rem 0}",""]),e.exports=t},"0i1e":function(e,t,r){"use strict"
r.r(t),t.default=r.p+"banner.png"},"8oxB":function(e,t){var r,o,a=e.exports={}
function defaultSetTimout(){throw new Error("setTimeout has not been defined")}function defaultClearTimeout(){throw new Error("clearTimeout has not been defined")}function runTimeout(e){if(r===setTimeout)return setTimeout(e,0)
if((r===defaultSetTimout||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0)
try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:defaultSetTimout}catch(e){r=defaultSetTimout}try{o="function"==typeof clearTimeout?clearTimeout:defaultClearTimeout}catch(e){o=defaultClearTimeout}}()
var n,i=[],c=!1,l=-1
function cleanUpNextTick(){c&&n&&(c=!1,n.length?i=n.concat(i):l=-1,i.length&&drainQueue())}function drainQueue(){if(!c){var e=runTimeout(cleanUpNextTick)
c=!0
for(var t=i.length;t;){for(n=i,i=[];++l<t;)n&&n[l].run()
l=-1,t=i.length}n=null,c=!1,function runClearTimeout(e){if(o===clearTimeout)return clearTimeout(e)
if((o===defaultClearTimeout||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(e)
try{return o(e)}catch(t){try{return o.call(null,e)}catch(t){return o.call(this,e)}}}(e)}}function Item(e,t){this.fun=e,this.array=t}function noop(){}a.nextTick=function(e){var t=new Array(arguments.length-1)
if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r]
i.push(new Item(e,t)),1!==i.length||c||runTimeout(drainQueue)},Item.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=noop,a.addListener=noop,a.once=noop,a.off=noop,a.removeListener=noop,a.removeAllListeners=noop,a.emit=noop,a.prependListener=noop,a.prependOnceListener=noop,a.listeners=function(e){return[]},a.binding=function(e){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},GlEP:function(e,t,r){var o=r("LboF"),a=r("0QOw")
"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]])
var n={insert:"head",singleton:!1}
o(a,n)
e.exports=a.locals||{}},TA72:function(e,t,r){"use strict"
r.r(t)
var o=r("tOpc")
r.d(t,"default",(function(){return o.a}))
"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature},Td6i:function(e,t,r){"use strict";(function(e,r){var o
function _objectWithoutProperties(e,t){if(null==e)return{}
var r,o,a=function _objectWithoutPropertiesLoose(e,t){if(null==e)return{}
var r,o,a={},n=Object.keys(e)
for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r])
return a}(e,t)
if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e)
for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e)
"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature
const a=document.querySelector("html").dataset,{imageOptimizingOrigin:n}=a
let i=a.mediaBackend
i||(i="https://backend.test/media/")
const c="backend"===n,l=/^(data|http|https)?:/i,joinUrls=(e,t)=>(e.endsWith("/")?e.slice(0,-1):e)+"/"+(t.startsWith("/")?t.slice(1):t),s=(new Map).set("image-product","catalog/product/").set("image-category","catalog/category/"),makeOptimizedUrl=(e,t={})=>{let{type:o}=t,a=_objectWithoutProperties(t,["type"])
if(!o||!o.startsWith("image-"))return e
const{origin:n}=window.location,u=l.test(e),d=r.env.BACKEND_URL
let m=new URL(e,i)
if(!u&&s.has(o)){const t=s.get(o)
m.pathname.includes(t)||(m=new URL(joinUrls(t,e),i))}m.href.startsWith(d)&&!c&&(m=new URL(m.href.slice(d.length),n))
const f=new URLSearchParams(m.search)
return f.set("auto","webp"),f.set("format","pjpg"),Object.entries(a).forEach(([e,t])=>{null!=t&&f.set(e,t)}),m.search=f.toString(),m.origin===n?m.href.slice(m.origin.length):m.href},u=makeOptimizedUrl
var d,m
t.a=u,(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(d.register(a,"htmlDataset","/home/dominic/projects/baazframeworkdoc/src/util/makeUrl.js"),d.register(n,"imageOptimizingOrigin","/home/dominic/projects/baazframeworkdoc/src/util/makeUrl.js"),d.register(i,"mediaBackend","/home/dominic/projects/baazframeworkdoc/src/util/makeUrl.js"),d.register(c,"useBackendForImgs","/home/dominic/projects/baazframeworkdoc/src/util/makeUrl.js"),d.register(l,"absoluteUrl","/home/dominic/projects/baazframeworkdoc/src/util/makeUrl.js"),d.register(joinUrls,"joinUrls","/home/dominic/projects/baazframeworkdoc/src/util/makeUrl.js"),d.register(s,"mediaBases","/home/dominic/projects/baazframeworkdoc/src/util/makeUrl.js"),d.register(makeOptimizedUrl,"makeOptimizedUrl","/home/dominic/projects/baazframeworkdoc/src/util/makeUrl.js"),d.register(u,"default","/home/dominic/projects/baazframeworkdoc/src/util/makeUrl.js")),(m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&m(e)}).call(this,r("3UD+")(e),r("8oxB"))},tOpc:function(e,t,r){"use strict";(function(e){var o,a=r("q1tI"),n=r.n(a),i=(r("GlEP"),r("55Ip")),c=r("Td6i");(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e)
"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature
const l=r("0i1e").default,Overview=e=>n.a.createElement("div",null,n.a.createElement("div",{className:"banner-outer"},n.a.createElement("div",{className:"container"},n.a.createElement("img",{className:"banner",src:l}))),n.a.createElement("div",{className:"overview-body"},n.a.createElement("div",{className:"container"},n.a.createElement("h1",null,"Overview"),n.a.createElement("p",null,"Baaz Framework is an open source UI toolkit for building performant, high-quality Web apps  — HTML, CSS, and JavaScript — with integrations for popular frameworks like React."),n.a.createElement("p",null,"Get started building by ",n.a.createElement(i.c,{to:Object(c.a)("/cli")},"installing Baaz")," or following our First App Tutorial to learn the main concepts.")))),s=Overview
var u,d
t.a=s,(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(u.register(l,"BANNER","/home/dominic/projects/baazframeworkdoc/src/components/Overview/overview.js"),u.register(Overview,"Overview","/home/dominic/projects/baazframeworkdoc/src/components/Overview/overview.js"),u.register(s,"default","/home/dominic/projects/baazframeworkdoc/src/components/Overview/overview.js")),(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&d(e)}).call(this,r("3UD+")(e))}}])
