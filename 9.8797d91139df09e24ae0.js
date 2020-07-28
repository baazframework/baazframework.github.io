(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"8oxB":function(e,t){var r,a,n=e.exports={}
function defaultSetTimout(){throw new Error("setTimeout has not been defined")}function defaultClearTimeout(){throw new Error("clearTimeout has not been defined")}function runTimeout(e){if(r===setTimeout)return setTimeout(e,0)
if((r===defaultSetTimout||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0)
try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:defaultSetTimout}catch(e){r=defaultSetTimout}try{a="function"==typeof clearTimeout?clearTimeout:defaultClearTimeout}catch(e){a=defaultClearTimeout}}()
var o,l=[],i=!1,c=-1
function cleanUpNextTick(){i&&o&&(i=!1,o.length?l=o.concat(l):c=-1,l.length&&drainQueue())}function drainQueue(){if(!i){var e=runTimeout(cleanUpNextTick)
i=!0
for(var t=l.length;t;){for(o=l,l=[];++c<t;)o&&o[c].run()
c=-1,t=l.length}o=null,i=!1,function runClearTimeout(e){if(a===clearTimeout)return clearTimeout(e)
if((a===defaultClearTimeout||!a)&&clearTimeout)return a=clearTimeout,clearTimeout(e)
try{return a(e)}catch(t){try{return a.call(null,e)}catch(t){return a.call(this,e)}}}(e)}}function Item(e,t){this.fun=e,this.array=t}function noop(){}n.nextTick=function(e){var t=new Array(arguments.length-1)
if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r]
l.push(new Item(e,t)),1!==l.length||i||runTimeout(drainQueue)},Item.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=noop,n.addListener=noop,n.once=noop,n.off=noop,n.removeListener=noop,n.removeAllListeners=noop,n.emit=noop,n.prependListener=noop,n.prependOnceListener=noop,n.listeners=function(e){return[]},n.binding=function(e){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(e){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}},Kw9F:function(e,t,r){"use strict";(function(e){var a,n=r("q1tI"),o=r.n(n),l=(r("t4Cf"),r("Td6i"));(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e)
"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature
const Overview=e=>o.a.createElement("div",null,o.a.createElement("div",{className:"overview-body"},o.a.createElement("div",{className:"container"},o.a.createElement("h1",null,"Installing Baaz"),o.a.createElement("p",null,"Baaz are created and developed primarily through the Baaz command-line utility. The Baaz CLI is the preferred method of installation, as it offers a wide range of dev tools and help options along the way. It is also the main tool through which to run the app and connect it to other services, such as Baaz Appflow."),o.a.createElement("h4",null,"Install the Baaz CLI"),o.a.createElement("p",null,"Before proceeding, make sure your computer has  ",o.a.createElement("a",{href:Object(l.a)("/environment-setup")},"Node.js and Yarn")," installed.",o.a.createElement("a",{href:Object(l.a)("/environment-setup")},"See these instructions")," to set up an environment for Baaz.",o.a.createElement("br",null),"Install the Baaz CLI with npm:",o.a.createElement("br",null)),o.a.createElement("p",null,o.a.createElement("pre",null,o.a.createElement("code",null,"$ npm install -g  @baaz/cli"))),o.a.createElement("p",null,"If there was a previous installation of the Baaz CLI, it will need to be uninstalled due to a change in package name."),o.a.createElement("p",null,o.a.createElement("pre",null,o.a.createElement("code",null,"$ npm uninstall -g  @baaz/cli")),o.a.createElement("pre",null,o.a.createElement("code",null,"$ npm install -g  @baaz/cli"))),o.a.createElement("h6",null,"Start an Project"),o.a.createElement("p",null,"Get started with the Baaz start command:"),o.a.createElement("p",null,o.a.createElement("pre",null,o.a.createElement("code",null,"$ baaz --init"))),o.a.createElement("h6",null,"Run the Project"),o.a.createElement("p",null,o.a.createElement("pre",null,o.a.createElement("code",null,"$ yarn run watch"))),o.a.createElement("h6",null,"Build the Project"),o.a.createElement("p",null,o.a.createElement("pre",null,o.a.createElement("code",null,"$ yarn run build")))))),i=Overview
var c,u
t.a=i,(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(c.register(Overview,"Overview","/home/dominic/projects/baazframeworkdoc/src/components/Cli/cli.js"),c.register(i,"default","/home/dominic/projects/baazframeworkdoc/src/components/Cli/cli.js")),(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&u(e)}).call(this,r("3UD+")(e))},NxDN:function(e,t,r){(t=r("JPst")(!1)).push([e.i,".overview-body{margin:1rem 0}",""]),e.exports=t},Td6i:function(e,t,r){"use strict";(function(e,r){var a
function _objectWithoutProperties(e,t){if(null==e)return{}
var r,a,n=function _objectWithoutPropertiesLoose(e,t){if(null==e)return{}
var r,a,n={},o=Object.keys(e)
for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r])
return n}(e,t)
if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e)
for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e)
"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature
const n=document.querySelector("html").dataset,{imageOptimizingOrigin:o}=n
let l=n.mediaBackend
l||(l="https://backend.test/media/")
const i="backend"===o,c=/^(data|http|https)?:/i,joinUrls=(e,t)=>(e.endsWith("/")?e.slice(0,-1):e)+"/"+(t.startsWith("/")?t.slice(1):t),u=(new Map).set("image-product","catalog/product/").set("image-category","catalog/category/"),makeOptimizedUrl=(e,t={})=>{let{type:a}=t,n=_objectWithoutProperties(t,["type"])
if(!a||!a.startsWith("image-"))return e
const{origin:o}=window.location,s=c.test(e),d=r.env.BACKEND_URL
let m=new URL(e,l)
if(!s&&u.has(a)){const t=u.get(a)
m.pathname.includes(t)||(m=new URL(joinUrls(t,e),l))}m.href.startsWith(d)&&!i&&(m=new URL(m.href.slice(d.length),o))
const f=new URLSearchParams(m.search)
return f.set("auto","webp"),f.set("format","pjpg"),Object.entries(n).forEach(([e,t])=>{null!=t&&f.set(e,t)}),m.search=f.toString(),m.origin===o?m.href.slice(m.origin.length):m.href},s=makeOptimizedUrl
var d,m
t.a=s,(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(d.register(n,"htmlDataset","/home/dominic/projects/baazframeworkdoc/src/util/makeUrl.js"),d.register(o,"imageOptimizingOrigin","/home/dominic/projects/baazframeworkdoc/src/util/makeUrl.js"),d.register(l,"mediaBackend","/home/dominic/projects/baazframeworkdoc/src/util/makeUrl.js"),d.register(i,"useBackendForImgs","/home/dominic/projects/baazframeworkdoc/src/util/makeUrl.js"),d.register(c,"absoluteUrl","/home/dominic/projects/baazframeworkdoc/src/util/makeUrl.js"),d.register(joinUrls,"joinUrls","/home/dominic/projects/baazframeworkdoc/src/util/makeUrl.js"),d.register(u,"mediaBases","/home/dominic/projects/baazframeworkdoc/src/util/makeUrl.js"),d.register(makeOptimizedUrl,"makeOptimizedUrl","/home/dominic/projects/baazframeworkdoc/src/util/makeUrl.js"),d.register(s,"default","/home/dominic/projects/baazframeworkdoc/src/util/makeUrl.js")),(m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&m(e)}).call(this,r("3UD+")(e),r("8oxB"))},lvPE:function(e,t,r){"use strict"
r.r(t)
var a=r("Kw9F")
r.d(t,"default",(function(){return a.a}))
"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature},t4Cf:function(e,t,r){var a=r("LboF"),n=r("NxDN")
"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]])
var o={insert:"head",singleton:!1}
a(n,o)
e.exports=n.locals||{}}}])
