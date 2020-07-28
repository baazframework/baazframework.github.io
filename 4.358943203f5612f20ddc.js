(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"+Tkx":function(e,t,o){(t=o("JPst")(!1)).push([e.i,".trigger_root{align-items:center;cursor:pointer;display:inline-flex;justify-content:center;line-height:1;pointer-events:auto;text-align:center;white-space:nowrap;background-color:transparent}",""]),e.exports=t},"04CE":function(e,t,o){"use strict"
var r=o("q1tI"),n=o.n(r),a=o("17x9"),i=o.n(a)
function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t]
for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e}).apply(this,arguments)}function _objectWithoutProperties(e,t){if(null==e)return{}
var o,r,n=function _objectWithoutPropertiesLoose(e,t){if(null==e)return{}
var o,r,n={},a=Object.keys(e)
for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o])
return n}(e,t)
if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e)
for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=Object(r.forwardRef)((function(e,t){var o=e.color,r=void 0===o?"currentColor":o,a=e.size,i=void 0===a?24:a,s=_objectWithoutProperties(e,["color","size"])
return n.a.createElement("svg",_extends({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),n.a.createElement("polyline",{points:"18 15 12 9 6 15"}))}))
s.propTypes={color:i.a.string,size:i.a.oneOfType([i.a.string,i.a.number])},s.displayName="ChevronUp",t.a=s},"1EXf":function(e,t,o){(t=o("JPst")(!1)).push([e.i,".navigation_enter,.navigation_modal_open,.navigation_body_masked,.navigation_root_open{transition-duration:384ms;transition-timing-function:var(--venia-anim-in)}.navigation_exit,.navigation_modal,.navigation_modal_open,.navigation_body,.navigation_body_masked{transition-duration:192ms;transition-timing-function:var(--venia-anim-out)}.navigation_hidden,.navigation_modal,.navigation_modal_open,.navigation_body_masked,.navigation_root,.navigation_root_open{opacity:0;visibility:hidden}.navigation_visible,.navigation_modal_open,.navigation_body,.navigation_body_masked,.navigation_root_open{opacity:1;visibility:visible}.navigation_root,.navigation_root_open{background-color:#fff;bottom:0;display:grid;grid-template-rows:auto 1fr auto;left:0;max-width:322px;overflow:hidden;position:fixed;top:0;transform:translate3d(-100%, 0, 0);transition-property:opacity,transform,visibility;width:100%;z-index:3}.navigation_root_open{box-shadow:1px 0 rgb(var(--venia-border));transform:translate3d(0, 0, 0)}.navigation_header,.navigation_isRoot{align-content:center;background-color:rgb(var(--venia-grey));box-shadow:0 1px rgb(var(--venia-border));display:flex;position:relative;z-index:1;padding:12px 0px;min-height:100px}.navigation_body,.navigation_body_masked{min-height:0;overflow:auto;transition-property:opacity,visibility}.navigation_body_masked{z-index:4;margin-top:6rem}.navigation_footer{box-shadow:0 -1px rgb(var(--venia-border))}.navigation_modal,.navigation_modal_open{background-color:#fff;bottom:0;left:0;overflow:auto;position:absolute;right:0;top:0rem;transform:translate3d(-100%, 0, 0);transition-property:opacity,transform,visibility}.navigation_modal_open{transform:translate3d(0, 0, 0)}.navigation_isRoot{grid-template-columns:1fr 3.5rem;padding-left:1rem}.navigation_site_HeaderLinks li a,.navigation_site_HeaderLinks li button{padding:20px;display:block;font-size:16px}.nav-item a{padding:.4rem 1rem;width:100% !important;display:block;text-decoration:none;color:#000}.nav-item a.active{color:#7a0088}.nav-item:first-child a{padding-top:1rem}",""]),e.exports=t},"8oxB":function(e,t){var o,r,n=e.exports={}
function defaultSetTimout(){throw new Error("setTimeout has not been defined")}function defaultClearTimeout(){throw new Error("clearTimeout has not been defined")}function runTimeout(e){if(o===setTimeout)return setTimeout(e,0)
if((o===defaultSetTimout||!o)&&setTimeout)return o=setTimeout,setTimeout(e,0)
try{return o(e,0)}catch(t){try{return o.call(null,e,0)}catch(t){return o.call(this,e,0)}}}!function(){try{o="function"==typeof setTimeout?setTimeout:defaultSetTimout}catch(e){o=defaultSetTimout}try{r="function"==typeof clearTimeout?clearTimeout:defaultClearTimeout}catch(e){r=defaultClearTimeout}}()
var a,i=[],s=!1,l=-1
function cleanUpNextTick(){s&&a&&(s=!1,a.length?i=a.concat(i):l=-1,i.length&&drainQueue())}function drainQueue(){if(!s){var e=runTimeout(cleanUpNextTick)
s=!0
for(var t=i.length;t;){for(a=i,i=[];++l<t;)a&&a[l].run()
l=-1,t=i.length}a=null,s=!1,function runClearTimeout(e){if(r===clearTimeout)return clearTimeout(e)
if((r===defaultClearTimeout||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e)
try{return r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function Item(e,t){this.fun=e,this.array=t}function noop(){}n.nextTick=function(e){var t=new Array(arguments.length-1)
if(arguments.length>1)for(var o=1;o<arguments.length;o++)t[o-1]=arguments[o]
i.push(new Item(e,t)),1!==i.length||s||runTimeout(drainQueue)},Item.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=noop,n.addListener=noop,n.once=noop,n.off=noop,n.removeListener=noop,n.removeAllListeners=noop,n.emit=noop,n.prependListener=noop,n.prependOnceListener=noop,n.listeners=function(e){return[]},n.binding=function(e){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(e){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}},"9Oxb":function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("q1tI"),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("17x9"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__),_icon_scss__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("fanr"),_icon_scss__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_icon_scss__WEBPACK_IMPORTED_MODULE_2__),enterModule
function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t]
for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e}).apply(this,arguments)}function _objectWithoutProperties(e,t){if(null==e)return{}
var o,r,n=_objectWithoutPropertiesLoose(e,t)
if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e)
for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}function _objectWithoutPropertiesLoose(e,t){if(null==e)return{}
var o,r,n={},a=Object.keys(e)
for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o])
return n}function _defineProperty(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module)
var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e}
class Icon extends react__WEBPACK_IMPORTED_MODULE_0__.Component{render(){const e=this.props,{attrs:{width:t}={},size:o,classes:r,src:n}=e,a=_objectWithoutProperties(e.attrs,["width"])
return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"icon_root"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(n,_extends({size:o||t},a)))}__reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}_defineProperty(Icon,"propTypes",{classes:Object(prop_types__WEBPACK_IMPORTED_MODULE_1__.shape)({root:prop_types__WEBPACK_IMPORTED_MODULE_1__.string}),size:prop_types__WEBPACK_IMPORTED_MODULE_1__.number,attrs:prop_types__WEBPACK_IMPORTED_MODULE_1__.object,src:Object(prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOfType)([prop_types__WEBPACK_IMPORTED_MODULE_1__.func,Object(prop_types__WEBPACK_IMPORTED_MODULE_1__.shape)({render:prop_types__WEBPACK_IMPORTED_MODULE_1__.func.isRequired})]).isRequired})
const _default=Icon
var reactHotLoader,leaveModule
__webpack_exports__.a=_default,reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&(reactHotLoader.register(Icon,"Icon","/home/dominic/projects/baazframeworkdoc/node_modules/buikit/lib/Icon/icon.js"),reactHotLoader.register(_default,"default","/home/dominic/projects/baazframeworkdoc/node_modules/buikit/lib/Icon/icon.js")),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)}).call(this,__webpack_require__("3UD+")(module))},DNTo:function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("q1tI"),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("17x9"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__),_icon_scss__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("Y2Zk"),_icon_scss__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_icon_scss__WEBPACK_IMPORTED_MODULE_2__),enterModule
function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t]
for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e}).apply(this,arguments)}function _objectWithoutProperties(e,t){if(null==e)return{}
var o,r,n=_objectWithoutPropertiesLoose(e,t)
if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e)
for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}function _objectWithoutPropertiesLoose(e,t){if(null==e)return{}
var o,r,n={},a=Object.keys(e)
for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o])
return n}function _defineProperty(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module)
var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e}
class Icon extends react__WEBPACK_IMPORTED_MODULE_0__.Component{render(){const e=this.props,{attrs:{width:t}={},size:o,classes:r,src:n}=e,a=_objectWithoutProperties(e.attrs,["width"])
return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"icon_root"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(n,_extends({size:o||t},a)))}__reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}_defineProperty(Icon,"propTypes",{classes:Object(prop_types__WEBPACK_IMPORTED_MODULE_1__.shape)({root:prop_types__WEBPACK_IMPORTED_MODULE_1__.string}),size:prop_types__WEBPACK_IMPORTED_MODULE_1__.number,attrs:prop_types__WEBPACK_IMPORTED_MODULE_1__.object,src:Object(prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOfType)([prop_types__WEBPACK_IMPORTED_MODULE_1__.func,Object(prop_types__WEBPACK_IMPORTED_MODULE_1__.shape)({render:prop_types__WEBPACK_IMPORTED_MODULE_1__.func.isRequired})]).isRequired})
const _default=Icon
var reactHotLoader,leaveModule
__webpack_exports__.a=_default,reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&(reactHotLoader.register(Icon,"Icon","/home/dominic/projects/baazframeworkdoc/src/components/Icon/icon.js"),reactHotLoader.register(_default,"default","/home/dominic/projects/baazframeworkdoc/src/components/Icon/icon.js")),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)}).call(this,__webpack_require__("3UD+")(module))},EbVH:function(e,t,o){"use strict";(function(e){o.d(t,"a",(function(){return useNavigationHeader}))
var r,n=o("q1tI");(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e)
var a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e}
const useNavigationHeader=e=>{const{onClose:t}=e
return{handleClose:Object(n.useCallback)(()=>{t()},[t])}}
var i,s
a(useNavigationHeader,"useCallback{handleClose}"),(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&i.register(useNavigationHeader,"useNavigationHeader","/home/dominic/projects/baazframeworkdoc/src/Hooks/Navigation/useNavigationHeader.js"),(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&s(e)}).call(this,o("3UD+")(e))},GlIX:function(e,t,o){"use strict";(function(e){var r,n=o("q1tI"),a=o.n(n),i=o("17x9"),s=o("gz3K"),l=o("ILQ6"),c=o("Ty5D"),d=o("Td6i"),_=o("55Ip"),u=o("VMJa"),p=(o("mB6c"),o("9Oxb")),f=o("04CE"),m=o("j7o3"),b=o("v9mV");(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e)
var g="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e}
const ChildNavigationItem=({item:e,onClose:t})=>{const o=Object(c.f)(),r=e&&e.children||[],i=Object(n.useMemo)(()=>(e.children||[]).map((e,o)=>a.a.createElement(ChildNavigationItem,{key:o,item:e,type:"child",onClose:t})),[e]),{elementRef:s,expanded:l,setExpanded:b}=Object(u.a)(),g=l?f.a:m.a,v=a.a.createElement(p.a,{src:g}),h="mobile_menuLinks "+(r.length>0?"activeChildren":"")
return a.a.createElement("li",{className:"nav-item",ref:s},a.a.createElement(_.c,{className:h,onClick:n=>(n=>{if(r.length>0)b(!l)
else{const r=Object(d.a)(""+e.link)
o.push(r),t()}n.preventDefault(),n.stopPropagation()})(n)},e.link_name," ",r.length>0?v:null),l?a.a.createElement("ul",{className:"navbar-nav"},i):null)}
g(ChildNavigationItem,"useHistory{history}\nuseMemo{nestedCategoryItem}\nuseDropdown{{ elementRef, expanded, setExpanded }}",()=>[c.f,u.a])
const Navigation=e=>{const{hasModal:t,isOpen:o,handleClose:r}=Object(s.a)({}),n=o?"navigation_root_open":"navigation_root",i=t?"navigation_modal_open":"navigation_modal",c=t?"navigation_body_masked":"navigation_body"
return a.a.createElement("aside",{className:n},a.a.createElement("header",{className:i},a.a.createElement(l.a,{onClose:r})),a.a.createElement("div",{className:c},a.a.createElement(_.b,{basename:"/"},a.a.createElement("ul",{className:" navbar-nav"},b.navigation.map((e,t)=>a.a.createElement(ChildNavigationItem,{key:t,item:e,onClose:r}))))))}
g(Navigation,"useNavigation{{\n        hasModal,\n        isOpen,\n        handleClose\n    }}",()=>[s.a])
const v=Object(n.memo)(Navigation)
var h,y
t.a=v,Navigation.propTypes={classes:Object(i.shape)({body:i.string,footer:i.string,header:i.string,root:i.string,root_open:i.string,isRoot:i.string})},(h="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(h.register(ChildNavigationItem,"ChildNavigationItem","/home/dominic/projects/baazframeworkdoc/src/components/Navigation/navigation.js"),h.register(Navigation,"Navigation","/home/dominic/projects/baazframeworkdoc/src/components/Navigation/navigation.js"),h.register(v,"default","/home/dominic/projects/baazframeworkdoc/src/components/Navigation/navigation.js")),(y="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&y(e)}).call(this,o("3UD+")(e))},HrbC:function(e,t,o){"use strict";(function(e){var r,n=o("q1tI"),a=o.n(n),i=o("17x9")
o("cQRr");(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e)
"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature
const Trigger=e=>{const{action:t,children:o,classes:r}=e
return a.a.createElement("button",{className:"trigger_root btn btn-primary-outline "+r,type:"button",onClick:t},o)}
Trigger.propTypes={action:i.func.isRequired,children:i.node,classes:Object(i.shape)({root:i.string})}
const s=Trigger
var l,c
t.a=s,(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(l.register(Trigger,"Trigger","/home/dominic/projects/baazframeworkdoc/src/components/Trigger/trigger.js"),l.register(s,"default","/home/dominic/projects/baazframeworkdoc/src/components/Trigger/trigger.js")),(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&c(e)}).call(this,o("3UD+")(e))},ILQ6:function(e,t,o){"use strict";(function(e){var r,n=o("q1tI"),a=o.n(n),i=o("17x9"),s=o("wHH0"),l=o("DNTo"),c=o("HrbC"),d=(o("o9jR"),o("EbVH"));(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e)
var _="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e}
const u=o("T/0B").default,NavHeader=e=>{const{onClose:t}=e,o=Object(d.a)({onClose:t}),{handleClose:r}=o
return a.a.createElement(n.Fragment,null,a.a.createElement("div",{className:"d-flex justify-content-between sidebar-header"},a.a.createElement("img",{className:"sidebar-logo",src:u}),a.a.createElement(c.a,{key:"closeButton",action:r,classes:"close_button"},a.a.createElement(l.a,{src:s.a,size:20}))))}
_(NavHeader,"useNavigationHeader{talonProps}",()=>[d.a])
const p=NavHeader
var f,m
t.a=p,NavHeader.propTypes={classes:Object(i.shape)({title:i.string}),onClose:i.func.isRequired},(f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(f.register(u,"LOGO_IMG","/home/dominic/projects/baazframeworkdoc/src/components/Navigation/navHeader.js"),f.register(NavHeader,"NavHeader","/home/dominic/projects/baazframeworkdoc/src/components/Navigation/navHeader.js"),f.register(p,"default","/home/dominic/projects/baazframeworkdoc/src/components/Navigation/navHeader.js")),(m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&m(e)}).call(this,o("3UD+")(e))},PWp3:function(e,t,o){(t=o("JPst")(!1)).push([e.i,".icon_root{align-items:center;display:inline-flex;justify-content:center;touch-action:manipulation}",""]),e.exports=t},"Q/Mu":function(e,t,o){"use strict"
o.r(t)
var r=o("GlIX")
o.d(t,"default",(function(){return r.a}))
"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature},"T/0B":function(e,t,o){"use strict"
o.r(t),t.default=o.p+"logo.png"},Td6i:function(e,t,o){"use strict";(function(e,o){var r
function _objectWithoutProperties(e,t){if(null==e)return{}
var o,r,n=function _objectWithoutPropertiesLoose(e,t){if(null==e)return{}
var o,r,n={},a=Object.keys(e)
for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o])
return n}(e,t)
if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e)
for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e)
"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature
const n=document.querySelector("html").dataset,{imageOptimizingOrigin:a}=n
let i=n.mediaBackend
i||(i="https://backend.test/media/")
const s="backend"===a,l=/^(data|http|https)?:/i,joinUrls=(e,t)=>(e.endsWith("/")?e.slice(0,-1):e)+"/"+(t.startsWith("/")?t.slice(1):t),c=(new Map).set("image-product","catalog/product/").set("image-category","catalog/category/"),makeOptimizedUrl=(e,t={})=>{let{type:r}=t,n=_objectWithoutProperties(t,["type"])
if(!r||!r.startsWith("image-"))return e
const{origin:a}=window.location,d=l.test(e),_=o.env.BACKEND_URL
let u=new URL(e,i)
if(!d&&c.has(r)){const t=c.get(r)
u.pathname.includes(t)||(u=new URL(joinUrls(t,e),i))}u.href.startsWith(_)&&!s&&(u=new URL(u.href.slice(_.length),a))
const p=new URLSearchParams(u.search)
return p.set("auto","webp"),p.set("format","pjpg"),Object.entries(n).forEach(([e,t])=>{null!=t&&p.set(e,t)}),u.search=p.toString(),u.origin===a?u.href.slice(u.origin.length):u.href},d=makeOptimizedUrl
var _,u
t.a=d,(_="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(_.register(n,"htmlDataset","/home/dominic/projects/baazframeworkdoc/src/util/makeUrl.js"),_.register(a,"imageOptimizingOrigin","/home/dominic/projects/baazframeworkdoc/src/util/makeUrl.js"),_.register(i,"mediaBackend","/home/dominic/projects/baazframeworkdoc/src/util/makeUrl.js"),_.register(s,"useBackendForImgs","/home/dominic/projects/baazframeworkdoc/src/util/makeUrl.js"),_.register(l,"absoluteUrl","/home/dominic/projects/baazframeworkdoc/src/util/makeUrl.js"),_.register(joinUrls,"joinUrls","/home/dominic/projects/baazframeworkdoc/src/util/makeUrl.js"),_.register(c,"mediaBases","/home/dominic/projects/baazframeworkdoc/src/util/makeUrl.js"),_.register(makeOptimizedUrl,"makeOptimizedUrl","/home/dominic/projects/baazframeworkdoc/src/util/makeUrl.js"),_.register(d,"default","/home/dominic/projects/baazframeworkdoc/src/util/makeUrl.js")),(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&u(e)}).call(this,o("3UD+")(e),o("8oxB"))},VIIL:function(e,t,o){(t=o("JPst")(!1)).push([e.i,".icon_root{align-items:center;display:inline-flex;justify-content:center;touch-action:manipulation}",""]),e.exports=t},VMJa:function(e,t,o){"use strict";(function(e){o.d(t,"a",(function(){return useDropdown}))
var r,n=o("q1tI"),a=o("m/Yu");(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e)
var i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e}
const useDropdown=()=>{const e=Object(n.useRef)(null),[t,o]=Object(n.useState)(!1),r=Object(n.useCallback)(({target:t})=>{e.current.contains(t)||o(!1)},[])
return Object(a.a)(document,"mousedown",r),{elementRef:e,expanded:t,setExpanded:o}}
var s,l
i(useDropdown,"useRef{elementRef}\nuseState{[expanded, setExpanded](false)}\nuseCallback{maybeCollapse}\nuseEventListener{}",()=>[a.a]),(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&s.register(useDropdown,"useDropdown","/home/dominic/projects/baazframeworkdoc/node_modules/@baaz/adapter/hooks/useDropdown.js"),(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&l(e)}).call(this,o("3UD+")(e))},Y2Zk:function(e,t,o){var r=o("LboF"),n=o("PWp3")
"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]])
var a={insert:"head",singleton:!1}
r(n,a)
e.exports=n.locals||{}},cFHh:function(e,t,o){(t=o("JPst")(!1)).push([e.i,".sidebar-header{background-color:#e4e1ec}.title{align-items:center;display:inline-flex;font-size:1rem;font-weight:400;padding:0 .5rem;text-transform:uppercase}.btn_root{padding:0px 20px;position:relative}.btn_root svg{width:30px;height:30px;stroke:#7d808b}.btn_root span{position:absolute;right:15px;top:15px}.sidebar-logo{height:6rem;-o-object-fit:cover;object-fit:cover;width:10rem}.close_button{padding:1rem;align-self:flex-start}.mobile_menuLinks{display:flex !important;flex-direction:row;justify-content:space-between}.mobile_menuLinks span{align-self:end;align-content:end}.mobile_menuLinks+ul{margin-left:1rem}",""]),e.exports=t},cQRr:function(e,t,o){var r=o("LboF"),n=o("+Tkx")
"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]])
var a={insert:"head",singleton:!1}
r(n,a)
e.exports=n.locals||{}},fanr:function(e,t,o){var r=o("LboF"),n=o("VIIL")
"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]])
var a={insert:"head",singleton:!1}
r(n,a)
e.exports=n.locals||{}},gz3K:function(e,t,o){"use strict";(function(e){o.d(t,"a",(function(){return useNavigation}))
var r,n=o("q1tI"),a=o("7Zcw"),i=o("Ty5D");(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e)
var s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e}
const useNavigation=e=>{const[t,{closeDrawer:o}]=Object(a.b)(),{drawer:r}=t,s="nav"===r,[l,c]=(Object(i.f)(),Object(n.useState)("MENU"))
return{hasModal:"MENU"===l,isOpen:s,handleClose:Object(n.useCallback)(()=>{o()},[o])}}
var l,c
s(useNavigation,"useAppContext{[appState, { closeDrawer }]}\nuseHistory{history}\nuseState{[view, setView]('MENU')}\nuseCallback{handleClose}",()=>[a.b,i.f]),(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&l.register(useNavigation,"useNavigation","/home/dominic/projects/baazframeworkdoc/src/Hooks/Navigation/useNavigation.js"),(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&c(e)}).call(this,o("3UD+")(e))},j7o3:function(e,t,o){"use strict"
var r=o("q1tI"),n=o.n(r),a=o("17x9"),i=o.n(a)
function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t]
for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e}).apply(this,arguments)}function _objectWithoutProperties(e,t){if(null==e)return{}
var o,r,n=function _objectWithoutPropertiesLoose(e,t){if(null==e)return{}
var o,r,n={},a=Object.keys(e)
for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o])
return n}(e,t)
if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e)
for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=Object(r.forwardRef)((function(e,t){var o=e.color,r=void 0===o?"currentColor":o,a=e.size,i=void 0===a?24:a,s=_objectWithoutProperties(e,["color","size"])
return n.a.createElement("svg",_extends({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),n.a.createElement("polyline",{points:"6 9 12 15 18 9"}))}))
s.propTypes={color:i.a.string,size:i.a.oneOfType([i.a.string,i.a.number])},s.displayName="ChevronDown",t.a=s},mB6c:function(e,t,o){var r=o("LboF"),n=o("1EXf")
"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]])
var a={insert:"head",singleton:!1}
r(n,a)
e.exports=n.locals||{}},o9jR:function(e,t,o){var r=o("LboF"),n=o("cFHh")
"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]])
var a={insert:"head",singleton:!1}
r(n,a)
e.exports=n.locals||{}},v9mV:function(e){e.exports=JSON.parse('{"navigation":[{"link_name":"Overview","link":"/"},{"link_name":"Environment Setup","link":"/environment-setup"},{"link_name":"CLI Installation","link":"/cli"},{"link_name":"BUI kit","link":null,"children":[{"link_name":"Overview","link":"/buikit"},{"link_name":"Accordion","link":"/buikit/accordion"},{"link_name":"Modal","link":"/buikit/modal"}]}]}')},wHH0:function(e,t,o){"use strict"
var r=o("q1tI"),n=o.n(r),a=o("17x9"),i=o.n(a)
function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t]
for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e}).apply(this,arguments)}function _objectWithoutProperties(e,t){if(null==e)return{}
var o,r,n=function _objectWithoutPropertiesLoose(e,t){if(null==e)return{}
var o,r,n={},a=Object.keys(e)
for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o])
return n}(e,t)
if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e)
for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=Object(r.forwardRef)((function(e,t){var o=e.color,r=void 0===o?"currentColor":o,a=e.size,i=void 0===a?24:a,s=_objectWithoutProperties(e,["color","size"])
return n.a.createElement("svg",_extends({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),n.a.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),n.a.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"}))}))
s.propTypes={color:i.a.string,size:i.a.oneOfType([i.a.string,i.a.number])},s.displayName="X",t.a=s}}])
