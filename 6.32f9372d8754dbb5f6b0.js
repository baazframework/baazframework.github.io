(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{Kw9F:function(e,t,a){"use strict";(function(e){var r,o=a("q1tI"),l=a.n(o),n=(a("t4Cf"),a("55Ip")),i=a("Td6i");(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e)
"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature
const Overview=e=>l.a.createElement("div",null,l.a.createElement("div",{className:"overview-body"},l.a.createElement("div",{className:"container"},l.a.createElement("h1",null,"Installing Baaz"),l.a.createElement("p",null,"Baaz are created and developed primarily through the Baaz command-line utility. The Baaz CLI is the preferred method of installation, as it offers a wide range of dev tools and help options along the way. It is also the main tool through which to run the app and connect it to other services, such as Baaz Appflow."),l.a.createElement("h4",null,"Install the Baaz CLI"),l.a.createElement("p",null,"Before proceeding, make sure your computer has  ",l.a.createElement(n.c,{to:Object(i.a)("/environment-setup")},"Node.js and Yarn")," installed.",l.a.createElement(n.c,{to:Object(i.a)("/environment-setup")},"See these instructions")," to set up an environment for Baaz.",l.a.createElement("br",null),"Install the Baaz CLI with npm:",l.a.createElement("br",null)),l.a.createElement("p",null,l.a.createElement("pre",null,l.a.createElement("code",null,"$ npm install -g  @baaz/cli"))),l.a.createElement("p",null,"If there was a previous installation of the Baaz CLI, it will need to be uninstalled due to a change in package name."),l.a.createElement("p",null,l.a.createElement("pre",null,l.a.createElement("code",null,"$ npm uninstall -g  @baaz/cli")),l.a.createElement("pre",null,l.a.createElement("code",null,"$ npm install -g  @baaz/cli"))),l.a.createElement("h6",null,"Start an Project"),l.a.createElement("p",null,"Get started with the Baaz start command:"),l.a.createElement("p",null,l.a.createElement("pre",null,l.a.createElement("code",null,"$ baaz --init"))),l.a.createElement("h6",null,"Run the Project"),l.a.createElement("p",null,l.a.createElement("pre",null,l.a.createElement("code",null,"$ yarn run watch"))),l.a.createElement("h6",null,"Build the Project"),l.a.createElement("p",null,l.a.createElement("pre",null,l.a.createElement("code",null,"$ yarn run build")))))),c=Overview
var s,d
t.a=c,(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(s.register(Overview,"Overview","/home/dominic/projects/baazframeworkdoc/src/components/Cli/cli.js"),s.register(c,"default","/home/dominic/projects/baazframeworkdoc/src/components/Cli/cli.js")),(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&d(e)}).call(this,a("3UD+")(e))},NxDN:function(e,t,a){(t=a("JPst")(!1)).push([e.i,".overview-body{margin:1rem 0}",""]),e.exports=t},Td6i:function(e,t,a){"use strict";(function(e,a){var r
function _objectWithoutProperties(e,t){if(null==e)return{}
var a,r,o=function _objectWithoutPropertiesLoose(e,t){if(null==e)return{}
var a,r,o={},l=Object.keys(e)
for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(o[a]=e[a])
return o}(e,t)
if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e)
for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e)
"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature
const o=document.querySelector("html").dataset,{imageOptimizingOrigin:l}=o
let n=o.mediaBackend
n||(n="https://backend.test/media/")
const i="backend"===l,c=/^(data|http|https)?:/i,joinUrls=(e,t)=>(e.endsWith("/")?e.slice(0,-1):e)+"/"+(t.startsWith("/")?t.slice(1):t),s=(new Map).set("image-product","catalog/product/").set("image-category","catalog/category/"),makeOptimizedUrl=(e,t={})=>{let{type:r}=t,o=_objectWithoutProperties(t,["type"])
if(!r||!r.startsWith("image-"))return e
const{origin:l}=window.location,d=c.test(e),u=a.env.BACKEND_URL
let m=new URL(e,n)
if(!d&&s.has(r)){const t=s.get(r)
m.pathname.includes(t)||(m=new URL(joinUrls(t,e),n))}m.href.startsWith(u)&&!i&&(m=new URL(m.href.slice(u.length),l))
const p=new URLSearchParams(m.search)
return p.set("auto","webp"),p.set("format","pjpg"),Object.entries(o).forEach(([e,t])=>{null!=t&&p.set(e,t)}),m.search=p.toString(),m.origin===l?m.href.slice(m.origin.length):m.href},d=makeOptimizedUrl
var u,m
t.a=d,(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(u.register(o,"htmlDataset","/home/dominic/projects/baazframeworkdoc/src/util/makeUrl.js"),u.register(l,"imageOptimizingOrigin","/home/dominic/projects/baazframeworkdoc/src/util/makeUrl.js"),u.register(n,"mediaBackend","/home/dominic/projects/baazframeworkdoc/src/util/makeUrl.js"),u.register(i,"useBackendForImgs","/home/dominic/projects/baazframeworkdoc/src/util/makeUrl.js"),u.register(c,"absoluteUrl","/home/dominic/projects/baazframeworkdoc/src/util/makeUrl.js"),u.register(joinUrls,"joinUrls","/home/dominic/projects/baazframeworkdoc/src/util/makeUrl.js"),u.register(s,"mediaBases","/home/dominic/projects/baazframeworkdoc/src/util/makeUrl.js"),u.register(makeOptimizedUrl,"makeOptimizedUrl","/home/dominic/projects/baazframeworkdoc/src/util/makeUrl.js"),u.register(d,"default","/home/dominic/projects/baazframeworkdoc/src/util/makeUrl.js")),(m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&m(e)}).call(this,a("3UD+")(e),a("8oxB"))},lvPE:function(e,t,a){"use strict"
a.r(t)
var r=a("Kw9F")
a.d(t,"default",(function(){return r.a}))
"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature},t4Cf:function(e,t,a){var r=a("LboF"),o=a("NxDN")
"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]])
var l={insert:"head",singleton:!1}
r(o,l)
e.exports=o.locals||{}}}])

//# sourceMappingURL=6.32f9372d8754dbb5f6b0.js.map