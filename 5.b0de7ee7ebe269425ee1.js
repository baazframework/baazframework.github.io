(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"0QOw":function(e,t,r){(t=r("JPst")(!1)).push([e.i,".banner{width:100%;height:400px;-o-object-fit:cover;object-fit:cover}.banner-outer{background-color:#fff7fb}.overview-body{margin:1rem 0}",""]),e.exports=t},"0i1e":function(e,t,r){"use strict"
r.r(t),t.default=r.p+"banner.png"},GlEP:function(e,t,r){var o=r("LboF"),a=r("0QOw")
"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]])
var i={insert:"head",singleton:!1}
o(a,i)
e.exports=a.locals||{}},TA72:function(e,t,r){"use strict"
r.r(t)
var o=r("tOpc")
r.d(t,"default",(function(){return o.a}))
"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature},Td6i:function(e,t,r){"use strict";(function(e,r){var o
function _objectWithoutProperties(e,t){if(null==e)return{}
var r,o,a=function _objectWithoutPropertiesLoose(e,t){if(null==e)return{}
var r,o,a={},i=Object.keys(e)
for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(a[r]=e[r])
return a}(e,t)
if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e)
for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e)
"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature
const a=document.querySelector("html").dataset,{imageOptimizingOrigin:i}=a
let n=a.mediaBackend
n||(n="https://backend.test/media/")
const c="backend"===i,l=/^(data|http|https)?:/i,joinUrls=(e,t)=>(e.endsWith("/")?e.slice(0,-1):e)+"/"+(t.startsWith("/")?t.slice(1):t),s=(new Map).set("image-product","catalog/product/").set("image-category","catalog/category/"),makeOptimizedUrl=(e,t={})=>{let{type:o}=t,a=_objectWithoutProperties(t,["type"])
if(!o||!o.startsWith("image-"))return e
const{origin:i}=window.location,d=l.test(e),m=r.env.BACKEND_URL
let u=new URL(e,n)
if(!d&&s.has(o)){const t=s.get(o)
u.pathname.includes(t)||(u=new URL(joinUrls(t,e),n))}u.href.startsWith(m)&&!c&&(u=new URL(u.href.slice(m.length),i))
const f=new URLSearchParams(u.search)
return f.set("auto","webp"),f.set("format","pjpg"),Object.entries(a).forEach(([e,t])=>{null!=t&&f.set(e,t)}),u.search=f.toString(),u.origin===i?u.href.slice(u.origin.length):u.href},d=makeOptimizedUrl
var m,u
t.a=d,(m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(m.register(a,"htmlDataset","/home/dominic/projects/baazframeworkdoc/src/util/makeUrl.js"),m.register(i,"imageOptimizingOrigin","/home/dominic/projects/baazframeworkdoc/src/util/makeUrl.js"),m.register(n,"mediaBackend","/home/dominic/projects/baazframeworkdoc/src/util/makeUrl.js"),m.register(c,"useBackendForImgs","/home/dominic/projects/baazframeworkdoc/src/util/makeUrl.js"),m.register(l,"absoluteUrl","/home/dominic/projects/baazframeworkdoc/src/util/makeUrl.js"),m.register(joinUrls,"joinUrls","/home/dominic/projects/baazframeworkdoc/src/util/makeUrl.js"),m.register(s,"mediaBases","/home/dominic/projects/baazframeworkdoc/src/util/makeUrl.js"),m.register(makeOptimizedUrl,"makeOptimizedUrl","/home/dominic/projects/baazframeworkdoc/src/util/makeUrl.js"),m.register(d,"default","/home/dominic/projects/baazframeworkdoc/src/util/makeUrl.js")),(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&u(e)}).call(this,r("3UD+")(e),r("8oxB"))},tOpc:function(e,t,r){"use strict";(function(e){var o,a=r("q1tI"),i=r.n(a),n=(r("GlEP"),r("55Ip")),c=r("Td6i");(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e)
"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature
const l=r("0i1e").default,Overview=e=>i.a.createElement("div",null,i.a.createElement("div",{className:"banner-outer"},i.a.createElement("div",{className:"container"},i.a.createElement("img",{className:"banner",src:l}))),i.a.createElement("div",{className:"overview-body"},i.a.createElement("div",{className:"container"},i.a.createElement("h1",null,"Overview"),i.a.createElement("p",null,"Baaz Framework is an open source UI toolkit for building performant, high-quality mobile and desktop apps using web technologies — HTML, CSS, and JavaScript — with integrations for popular frameworks like React."),i.a.createElement("p",null,"Get started building by ",i.a.createElement(n.b,{to:Object(c.a)("/cli")},"installing Baaz")," or following our First App Tutorial to learn the main concepts.")))),s=Overview
var d,m
t.a=s,(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(d.register(l,"BANNER","/home/dominic/projects/baazframeworkdoc/src/components/Overview/overview.js"),d.register(Overview,"Overview","/home/dominic/projects/baazframeworkdoc/src/components/Overview/overview.js"),d.register(s,"default","/home/dominic/projects/baazframeworkdoc/src/components/Overview/overview.js")),(m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&m(e)}).call(this,r("3UD+")(e))}}])

//# sourceMappingURL=5.b0de7ee7ebe269425ee1.js.map