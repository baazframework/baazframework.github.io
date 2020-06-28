/*! For license information please see vendors.0fa751298b82eaaca2c4.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"+wdc":function(n,r,o){"use strict"
var a,i,s,y,w
if("undefined"==typeof window||"function"!=typeof MessageChannel){var E=null,P=null,t=function(){if(null!==E)try{var n=r.unstable_now()
E(!0,n),E=null}catch(n){throw setTimeout(t,0),n}},j=Date.now()
r.unstable_now=function(){return Date.now()-j},a=function(n){null!==E?setTimeout(a,0,n):(E=n,setTimeout(t,0))},i=function(n,r){P=setTimeout(n,r)},s=function(){clearTimeout(P)},y=function(){return!1},w=r.unstable_forceFrameRate=function(){}}else{var _=window.performance,B=window.Date,q=window.setTimeout,$=window.clearTimeout
if("undefined"!=typeof console){window.cancelAnimationFrame
window.requestAnimationFrame}if("object"==typeof _&&"function"==typeof _.now)r.unstable_now=function(){return _.now()}
else{var ne=B.now()
r.unstable_now=function(){return B.now()-ne}}var oe=!1,ie=null,le=-1,se=5,pe=0
y=function(){return r.unstable_now()>=pe},w=function(){},r.unstable_forceFrameRate=function(n){0>n||125<n||(se=0<n?Math.floor(1e3/n):5)}
var he=new MessageChannel,me=he.port2
he.port1.onmessage=function(){if(null!==ie){var n=r.unstable_now()
pe=n+se
try{ie(!0,n)?me.postMessage(null):(oe=!1,ie=null)}catch(n){throw me.postMessage(null),n}}else oe=!1},a=function(n){ie=n,oe||(oe=!0,me.postMessage(null))},i=function(n,o){le=q((function(){n(r.unstable_now())}),o)},s=function(){$(le),le=-1}}function J(n,r){var o=n.length
n.push(r)
e:for(;;){var a=o-1>>>1,i=n[a]
if(!(void 0!==i&&0<K(i,r)))break e
n[a]=r,n[o]=i,o=a}}function L(n){return void 0===(n=n[0])?null:n}function M(n){var r=n[0]
if(void 0!==r){var o=n.pop()
if(o!==r){n[0]=o
e:for(var a=0,i=n.length;a<i;){var s=2*(a+1)-1,y=n[s],w=s+1,E=n[w]
if(void 0!==y&&0>K(y,o))void 0!==E&&0>K(E,y)?(n[a]=E,n[w]=o,a=w):(n[a]=y,n[s]=o,a=s)
else{if(!(void 0!==E&&0>K(E,o)))break e
n[a]=E,n[w]=o,a=w}}}return r}return null}function K(n,r){var o=n.sortIndex-r.sortIndex
return 0!==o?o:n.id-r.id}var ge=[],ve=[],ye=1,we=null,ke=3,Se=!1,Te=!1,Oe=!1
function V(n){for(var r=L(ve);null!==r;){if(null===r.callback)M(ve)
else{if(!(r.startTime<=n))break
M(ve),r.sortIndex=r.expirationTime,J(ge,r)}r=L(ve)}}function W(n){if(Oe=!1,V(n),!Te)if(null!==L(ge))Te=!0,a(X)
else{var r=L(ve)
null!==r&&i(W,r.startTime-n)}}function X(n,o){Te=!1,Oe&&(Oe=!1,s()),Se=!0
var a=ke
try{for(V(o),we=L(ge);null!==we&&(!(we.expirationTime>o)||n&&!y());){var w=we.callback
if(null!==w){we.callback=null,ke=we.priorityLevel
var E=w(we.expirationTime<=o)
o=r.unstable_now(),"function"==typeof E?we.callback=E:we===L(ge)&&M(ge),V(o)}else M(ge)
we=L(ge)}if(null!==we)var P=!0
else{var j=L(ve)
null!==j&&i(W,j.startTime-o),P=!1}return P}finally{we=null,ke=a,Se=!1}}function Y(n){switch(n){case 1:return-1
case 2:return 250
case 5:return 1073741823
case 4:return 1e4
default:return 5e3}}var je=w
r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(n){n.callback=null},r.unstable_continueExecution=function(){Te||Se||(Te=!0,a(X))},r.unstable_getCurrentPriorityLevel=function(){return ke},r.unstable_getFirstCallbackNode=function(){return L(ge)},r.unstable_next=function(n){switch(ke){case 1:case 2:case 3:var r=3
break
default:r=ke}var o=ke
ke=r
try{return n()}finally{ke=o}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=je,r.unstable_runWithPriority=function(n,r){switch(n){case 1:case 2:case 3:case 4:case 5:break
default:n=3}var o=ke
ke=n
try{return r()}finally{ke=o}},r.unstable_scheduleCallback=function(n,o,y){var w=r.unstable_now()
if("object"==typeof y&&null!==y){var E=y.delay
E="number"==typeof E&&0<E?w+E:w,y="number"==typeof y.timeout?y.timeout:Y(n)}else y=Y(n),E=w
return n={id:ye++,callback:o,priorityLevel:n,startTime:E,expirationTime:y=E+y,sortIndex:-1},E>w?(n.sortIndex=E,J(ve,n),null===L(ge)&&n===L(ve)&&(Oe?s():Oe=!0,i(W,E-w))):(n.sortIndex=y,J(ge,n),Te||Se||(Te=!0,a(X))),n},r.unstable_shouldYield=function(){var n=r.unstable_now()
V(n)
var o=L(ge)
return o!==we&&null!==we&&null!==o&&null!==o.callback&&o.startTime<=n&&o.expirationTime<we.expirationTime||y()},r.unstable_wrapCallback=function(n){var r=ke
return function(){var o=ke
ke=r
try{return n.apply(this,arguments)}finally{ke=o}}}},"/MKj":function(n,r,o){"use strict"
o.d(r,"a",(function(){return P})),o.d(r,"b",(function(){return he}))
var a=o("q1tI"),i=o.n(a),s=(o("17x9"),i.a.createContext(null))
var y=function defaultNoopBatch(n){n()},w={notify:function notify(){}}
function createListenerCollection(){var n=function getBatch(){return y}(),r=null,o=null
return{clear:function clear(){r=null,o=null},notify:function notify(){n((function(){for(var n=r;n;)n.callback(),n=n.next}))},get:function get(){for(var n=[],o=r;o;)n.push(o),o=o.next
return n},subscribe:function subscribe(n){var a=!0,i=o={callback:n,next:null,prev:o}
return i.prev?i.prev.next=i:r=i,function unsubscribe(){a&&null!==r&&(a=!1,i.next?i.next.prev=i.prev:o=i.prev,i.prev?i.prev.next=i.next:r=i.next)}}}}var E=function(){function Subscription(n,r){this.store=n,this.parentSub=r,this.unsubscribe=null,this.listeners=w,this.handleChangeWrapper=this.handleChangeWrapper.bind(this)}var n=Subscription.prototype
return n.addNestedSub=function addNestedSub(n){return this.trySubscribe(),this.listeners.subscribe(n)},n.notifyNestedSubs=function notifyNestedSubs(){this.listeners.notify()},n.handleChangeWrapper=function handleChangeWrapper(){this.onStateChange&&this.onStateChange()},n.isSubscribed=function isSubscribed(){return Boolean(this.unsubscribe)},n.trySubscribe=function trySubscribe(){this.unsubscribe||(this.unsubscribe=this.parentSub?this.parentSub.addNestedSub(this.handleChangeWrapper):this.store.subscribe(this.handleChangeWrapper),this.listeners=createListenerCollection())},n.tryUnsubscribe=function tryUnsubscribe(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null,this.listeners.clear(),this.listeners=w)},Subscription}()
var P=function Provider(n){var r=n.store,o=n.context,y=n.children,w=Object(a.useMemo)((function(){var n=new E(r)
return n.onStateChange=n.notifyNestedSubs,{store:r,subscription:n}}),[r]),P=Object(a.useMemo)((function(){return r.getState()}),[r])
Object(a.useEffect)((function(){var n=w.subscription
return n.trySubscribe(),P!==r.getState()&&n.notifyNestedSubs(),function(){n.tryUnsubscribe(),n.onStateChange=null}}),[w,P])
var j=o||s
return i.a.createElement(j.Provider,{value:w},y)}
function _extends(){return(_extends=Object.assign||function(n){for(var r=1;r<arguments.length;r++){var o=arguments[r]
for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(n[a]=o[a])}return n}).apply(this,arguments)}function _objectWithoutPropertiesLoose(n,r){if(null==n)return{}
var o,a,i={},s=Object.keys(n)
for(a=0;a<s.length;a++)o=s[a],r.indexOf(o)>=0||(i[o]=n[o])
return i}var j=o("2mql"),_=o.n(j),B=o("TOwV"),q="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?a.useLayoutEffect:a.useEffect,$=[],ne=[null,null]
function storeStateUpdatesReducer(n,r){var o=n[1]
return[r.payload,o+1]}function useIsomorphicLayoutEffectWithArgs(n,r,o){q((function(){return n.apply(void 0,r)}),o)}function captureWrapperProps(n,r,o,a,i,s,y){n.current=a,r.current=i,o.current=!1,s.current&&(s.current=null,y())}function subscribeUpdates(n,r,o,a,i,s,y,w,E,P){if(n){var j=!1,_=null,B=function checkForUpdates(){if(!j){var n,o,B=r.getState()
try{n=a(B,i.current)}catch(n){o=n,_=n}o||(_=null),n===s.current?y.current||E():(s.current=n,w.current=n,y.current=!0,P({type:"STORE_UPDATED",payload:{error:o}}))}}
o.onStateChange=B,o.trySubscribe(),B()
return function unsubscribeWrapper(){if(j=!0,o.tryUnsubscribe(),o.onStateChange=null,_)throw _}}}var oe=function initStateUpdates(){return[null,0]}
function connectAdvanced(n,r){void 0===r&&(r={})
var o=r,y=o.getDisplayName,w=void 0===y?function(n){return"ConnectAdvanced("+n+")"}:y,P=o.methodName,j=void 0===P?"connectAdvanced":P,q=o.renderCountProp,ie=void 0===q?void 0:q,le=o.shouldHandleStateChanges,se=void 0===le||le,pe=o.storeKey,he=void 0===pe?"store":pe,me=(o.withRef,o.forwardRef),ge=void 0!==me&&me,ve=o.context,ye=void 0===ve?s:ve,we=_objectWithoutPropertiesLoose(o,["getDisplayName","methodName","renderCountProp","shouldHandleStateChanges","storeKey","withRef","forwardRef","context"]),ke=ye
return function wrapWithConnect(r){var o=r.displayName||r.name||"Component",s=w(o),y=_extends({},we,{getDisplayName:w,methodName:j,renderCountProp:ie,shouldHandleStateChanges:se,storeKey:he,displayName:s,wrappedComponentName:o,WrappedComponent:r}),P=we.pure
var q=P?a.useMemo:function(n){return n()}
function ConnectFunction(o){var s=Object(a.useMemo)((function(){var n=o.forwardedRef,r=_objectWithoutPropertiesLoose(o,["forwardedRef"])
return[o.context,n,r]}),[o]),w=s[0],P=s[1],j=s[2],_=Object(a.useMemo)((function(){return w&&w.Consumer&&Object(B.isContextConsumer)(i.a.createElement(w.Consumer,null))?w:ke}),[w,ke]),ie=Object(a.useContext)(_),le=Boolean(o.store)&&Boolean(o.store.getState)&&Boolean(o.store.dispatch)
Boolean(ie)&&Boolean(ie.store)
var pe=le?o.store:ie.store,he=Object(a.useMemo)((function(){return function createChildSelector(r){return n(r.dispatch,y)}(pe)}),[pe]),me=Object(a.useMemo)((function(){if(!se)return ne
var n=new E(pe,le?null:ie.subscription),r=n.notifyNestedSubs.bind(n)
return[n,r]}),[pe,le,ie]),ge=me[0],ve=me[1],ye=Object(a.useMemo)((function(){return le?ie:_extends({},ie,{subscription:ge})}),[le,ie,ge]),we=Object(a.useReducer)(storeStateUpdatesReducer,$,oe),Se=we[0][0],Te=we[1]
if(Se&&Se.error)throw Se.error
var Oe=Object(a.useRef)(),je=Object(a.useRef)(j),_e=Object(a.useRef)(),Me=Object(a.useRef)(!1),Re=q((function(){return _e.current&&j===je.current?_e.current:he(pe.getState(),j)}),[pe,Se,j])
useIsomorphicLayoutEffectWithArgs(captureWrapperProps,[je,Oe,Me,j,Re,_e,ve]),useIsomorphicLayoutEffectWithArgs(subscribeUpdates,[se,pe,ge,he,je,Oe,Me,_e,ve,Te],[pe,ge,he])
var Ne=Object(a.useMemo)((function(){return i.a.createElement(r,_extends({},Re,{ref:P}))}),[P,r,Re])
return Object(a.useMemo)((function(){return se?i.a.createElement(_.Provider,{value:ye},Ne):Ne}),[_,Ne,ye])}var le=P?i.a.memo(ConnectFunction):ConnectFunction
if(le.WrappedComponent=r,le.displayName=s,ge){var pe=i.a.forwardRef((function forwardConnectRef(n,r){return i.a.createElement(le,_extends({},n,{forwardedRef:r}))}))
return pe.displayName=s,pe.WrappedComponent=r,_()(pe,r)}return _()(le,r)}}function is(n,r){return n===r?0!==n||0!==r||1/n==1/r:n!=n&&r!=r}function shallowEqual(n,r){if(is(n,r))return!0
if("object"!=typeof n||null===n||"object"!=typeof r||null===r)return!1
var o=Object.keys(n),a=Object.keys(r)
if(o.length!==a.length)return!1
for(var i=0;i<o.length;i++)if(!Object.prototype.hasOwnProperty.call(r,o[i])||!is(n[o[i]],r[o[i]]))return!1
return!0}var ie=o("ANjH")
function wrapMapToPropsConstant(n){return function initConstantSelector(r,o){var a=n(r,o)
function constantSelector(){return a}return constantSelector.dependsOnOwnProps=!1,constantSelector}}function getDependsOnOwnProps(n){return null!==n.dependsOnOwnProps&&void 0!==n.dependsOnOwnProps?Boolean(n.dependsOnOwnProps):1!==n.length}function wrapMapToPropsFunc(n,r){return function initProxySelector(r,o){o.displayName
var a=function mapToPropsProxy(n,r){return a.dependsOnOwnProps?a.mapToProps(n,r):a.mapToProps(n)}
return a.dependsOnOwnProps=!0,a.mapToProps=function detectFactoryAndVerify(r,o){a.mapToProps=n,a.dependsOnOwnProps=getDependsOnOwnProps(n)
var i=a(r,o)
return"function"==typeof i&&(a.mapToProps=i,a.dependsOnOwnProps=getDependsOnOwnProps(i),i=a(r,o)),i},a}}var le=[function whenMapDispatchToPropsIsFunction(n){return"function"==typeof n?wrapMapToPropsFunc(n):void 0},function whenMapDispatchToPropsIsMissing(n){return n?void 0:wrapMapToPropsConstant((function(n){return{dispatch:n}}))},function whenMapDispatchToPropsIsObject(n){return n&&"object"==typeof n?wrapMapToPropsConstant((function(r){return Object(ie.b)(n,r)})):void 0}]
var se=[function whenMapStateToPropsIsFunction(n){return"function"==typeof n?wrapMapToPropsFunc(n):void 0},function whenMapStateToPropsIsMissing(n){return n?void 0:wrapMapToPropsConstant((function(){return{}}))}]
function defaultMergeProps(n,r,o){return _extends({},o,{},n,{},r)}var pe=[function whenMergePropsIsFunction(n){return"function"==typeof n?function wrapMergePropsFunc(n){return function initMergePropsProxy(r,o){o.displayName
var a,i=o.pure,s=o.areMergedPropsEqual,y=!1
return function mergePropsProxy(r,o,w){var E=n(r,o,w)
return y?i&&s(E,a)||(a=E):(y=!0,a=E),a}}}(n):void 0},function whenMergePropsIsOmitted(n){return n?void 0:function(){return defaultMergeProps}}]
function impureFinalPropsSelectorFactory(n,r,o,a){return function impureFinalPropsSelector(i,s){return o(n(i,s),r(a,s),s)}}function pureFinalPropsSelectorFactory(n,r,o,a,i){var s,y,w,E,P,j=i.areStatesEqual,_=i.areOwnPropsEqual,B=i.areStatePropsEqual,q=!1
function handleSubsequentCalls(i,q){var $=!_(q,y),ne=!j(i,s)
return s=i,y=q,$&&ne?function handleNewPropsAndNewState(){return w=n(s,y),r.dependsOnOwnProps&&(E=r(a,y)),P=o(w,E,y)}():$?function handleNewProps(){return n.dependsOnOwnProps&&(w=n(s,y)),r.dependsOnOwnProps&&(E=r(a,y)),P=o(w,E,y)}():ne?function handleNewState(){var r=n(s,y),a=!B(r,w)
return w=r,a&&(P=o(w,E,y)),P}():P}return function pureFinalPropsSelector(i,j){return q?handleSubsequentCalls(i,j):function handleFirstCall(i,j){return w=n(s=i,y=j),E=r(a,y),P=o(w,E,y),q=!0,P}(i,j)}}function finalPropsSelectorFactory(n,r){var o=r.initMapStateToProps,a=r.initMapDispatchToProps,i=r.initMergeProps,s=_objectWithoutPropertiesLoose(r,["initMapStateToProps","initMapDispatchToProps","initMergeProps"]),y=o(n,s),w=a(n,s),E=i(n,s)
return(s.pure?pureFinalPropsSelectorFactory:impureFinalPropsSelectorFactory)(y,w,E,n,s)}function match(n,r,o){for(var a=r.length-1;a>=0;a--){var i=r[a](n)
if(i)return i}return function(r,a){throw new Error("Invalid value of type "+typeof n+" for "+o+" argument when connecting component "+a.wrappedComponentName+".")}}function strictEqual(n,r){return n===r}function createConnect(n){var r=void 0===n?{}:n,o=r.connectHOC,a=void 0===o?connectAdvanced:o,i=r.mapStateToPropsFactories,s=void 0===i?se:i,y=r.mapDispatchToPropsFactories,w=void 0===y?le:y,E=r.mergePropsFactories,P=void 0===E?pe:E,j=r.selectorFactory,_=void 0===j?finalPropsSelectorFactory:j
return function connect(n,r,o,i){void 0===i&&(i={})
var y=i,E=y.pure,j=void 0===E||E,B=y.areStatesEqual,q=void 0===B?strictEqual:B,$=y.areOwnPropsEqual,ne=void 0===$?shallowEqual:$,oe=y.areStatePropsEqual,ie=void 0===oe?shallowEqual:oe,le=y.areMergedPropsEqual,se=void 0===le?shallowEqual:le,pe=_objectWithoutPropertiesLoose(y,["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"]),he=match(n,s,"mapStateToProps"),me=match(r,w,"mapDispatchToProps"),ge=match(o,P,"mergeProps")
return a(_,_extends({methodName:"connect",getDisplayName:function getDisplayName(n){return"Connect("+n+")"},shouldHandleStateChanges:Boolean(n),initMapStateToProps:he,initMapDispatchToProps:me,initMergeProps:ge,pure:j,areStatesEqual:q,areOwnPropsEqual:ne,areStatePropsEqual:ie,areMergedPropsEqual:se},pe))}}var he=createConnect()
!function setBatch(n){y=n}(o("i8i4").unstable_batchedUpdates)},"/U6b":function(n,r,o){"use strict"
var a=o("q1tI"),i=o.n(a),s=o("17x9"),y=o.n(s)
function _extends(){return(_extends=Object.assign||function(n){for(var r=1;r<arguments.length;r++){var o=arguments[r]
for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(n[a]=o[a])}return n}).apply(this,arguments)}function _objectWithoutProperties(n,r){if(null==n)return{}
var o,a,i=function _objectWithoutPropertiesLoose(n,r){if(null==n)return{}
var o,a,i={},s=Object.keys(n)
for(a=0;a<s.length;a++)o=s[a],r.indexOf(o)>=0||(i[o]=n[o])
return i}(n,r)
if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n)
for(a=0;a<s.length;a++)o=s[a],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(n,o)&&(i[o]=n[o])}return i}var w=Object(a.forwardRef)((function(n,r){var o=n.color,a=void 0===o?"currentColor":o,s=n.size,y=void 0===s?24:s,w=_objectWithoutProperties(n,["color","size"])
return i.a.createElement("svg",_extends({ref:r,xmlns:"http://www.w3.org/2000/svg",width:y,height:y,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},w),i.a.createElement("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}),i.a.createElement("polyline",{points:"16 17 21 12 16 7"}),i.a.createElement("line",{x1:"21",y1:"12",x2:"9",y2:"12"}))}))
w.propTypes={color:y.a.string,size:y.a.oneOfType([y.a.string,y.a.number])},w.displayName="LogOut",r.a=w},"0Cei":function(n,r,o){"use strict";(function(n){var a,i=o("ANjH");(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(n)
"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature
const getBindFunction=n=>"function"==typeof n?i.b:bindActionCreatorsRecursively,bindActionCreatorsRecursively=(n,r)=>Object.entries(n).reduce((n,[o,a])=>{const i=getBindFunction(a)
return n[o]=i(a,r),n},{}),s=bindActionCreatorsRecursively
var y,w
r.a=s,(y="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(y.register(getBindFunction,"getBindFunction","/home/dominic/projects/baazframeworkdoc/node_modules/@baaz/adapter/util/bindActionCreators.js"),y.register(bindActionCreatorsRecursively,"bindActionCreatorsRecursively","/home/dominic/projects/baazframeworkdoc/node_modules/@baaz/adapter/util/bindActionCreators.js"),y.register(s,"default","/home/dominic/projects/baazframeworkdoc/node_modules/@baaz/adapter/util/bindActionCreators.js")),(w="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&w(n)}).call(this,o("3UD+")(n))},"16Al":function(n,r,o){"use strict"
var a=o("WbBG")
function emptyFunction(){}function emptyFunctionWithReset(){}emptyFunctionWithReset.resetWarningCache=emptyFunction,n.exports=function(){function shim(n,r,o,i,s,y){if(y!==a){var w=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")
throw w.name="Invariant Violation",w}}function getShim(){return shim}shim.isRequired=shim
var n={array:shim,bool:shim,func:shim,number:shim,object:shim,string:shim,symbol:shim,any:shim,arrayOf:getShim,element:shim,elementType:shim,instanceOf:getShim,node:shim,objectOf:getShim,oneOf:getShim,oneOfType:getShim,shape:getShim,exact:getShim,checkPropTypes:emptyFunctionWithReset,resetWarningCache:emptyFunction}
return n.PropTypes=n,n}},"17x9":function(n,r,o){n.exports=o("16Al")()},"1NAo":function(n,r,o){"use strict"
r.a=function(n){return"undefined"!=typeof Map&&n instanceof Map}},"1T5U":function(n,r,o){"use strict"
o.d(r,"b",(function(){return a})),o.d(r,"a",(function(){return i}))
var a="/",i="||"},"1zJl":function(n,r,o){"use strict"
function _extends(){return(_extends=Object.assign||function(n){for(var r=1;r<arguments.length;r++){var o=arguments[r]
for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(n[a]=o[a])}return n}).apply(this,arguments)}o.d(r,"a",(function(){return j})),o.d(r,"b",(function(){return _}))
var a=o("q1tI")
function _inheritsLoose(n,r){n.prototype=Object.create(r.prototype),n.prototype.constructor=n,n.__proto__=r}var i=o("i8i4")
function _assertThisInitialized(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return n}var s=Object(a.createContext)(null),y=s.Consumer,w=s.Provider,E=function(n){function HeadTag(){for(var r,o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i]
return(r=n.call.apply(n,[this].concat(a))||this).state={canUseDOM:!1},r.headTags=null,r.index=-1,r}_inheritsLoose(HeadTag,n)
var r=HeadTag.prototype
return r.componentDidMount=function componentDidMount(){var n=this.props,r=n.tag,o=n.name,a=n.property
this.setState({canUseDOM:!0}),this.index=this.headTags.addClientTag(r,o||a)},r.componentWillUnmount=function componentWillUnmount(){var n=this.props.tag
this.headTags.removeClientTag(n,this.index)},r.render=function render(){var n=this,r=this.props,o=r.tag,s=function _objectWithoutPropertiesLoose(n,r){if(null==n)return{}
var o,a,i={},s=Object.keys(n)
for(a=0;a<s.length;a++)o=s[a],r.indexOf(o)>=0||(i[o]=n[o])
return i}(r,["tag"]),w=this.state.canUseDOM
return Object(a.createElement)(y,null,(function(r){if(null==r)throw Error("<HeadProvider /> should be in the tree")
if(n.headTags=r,w){if(!r.shouldRenderTag(o,n.index))return null
var y=Object(a.createElement)(o,s)
return Object(i.createPortal)(y,document.head)}var E=Object(a.createElement)(o,_extends({"data-rh":""},s))
return r.addServerTag(E),null}))},HeadTag}(a.Component),P=["title","meta"],j=function(n){function HeadProvider(){for(var r,o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i]
return(r=n.call.apply(n,[this].concat(a))||this).indices=new Map,r.state={addClientTag:function addClientTag(n,o){if(-1!==P.indexOf(n)){r.setState((function(r){var a,i=r[n]||[]
return(a={})[n]=[].concat(i,[o]),a}))
var a=_assertThisInitialized(r).indices,i=a.has(n)?a.get(n)+1:0
return a.set(n,i),i}return-1},shouldRenderTag:function shouldRenderTag(n,o){if(-1!==P.indexOf(n)){var a=r.state[n]
return a&&a.lastIndexOf(a[o])===o}return!0},removeClientTag:function removeClientTag(n,o){r.setState((function(r){var a,i=r[n]
return i?(i[o]=null,(a={})[n]=i,a):null}))},addServerTag:function addServerTag(n){var o=r.props.headTags,a=void 0===o?[]:o
if(-1!==P.indexOf(n.type)){var i=a.findIndex((function(r){var o=r.props.name||r.props.property,a=n.props.name||n.props.property
return r.type===n.type&&o===a}));-1!==i&&a.splice(i,1)}a.push(n)}},r}_inheritsLoose(HeadProvider,n)
var r=HeadProvider.prototype
return r.componentDidMount=function componentDidMount(){var n=document.head.querySelectorAll('[data-rh=""]')
Array.prototype.forEach.call(n,(function(n){return n.parentNode.removeChild(n)}))},r.render=function render(){var n=this.props,r=n.headTags,o=n.children
if("undefined"==typeof window&&!1===Array.isArray(r))throw Error("headTags array should be passed to <HeadProvider /> in node")
return Object(a.createElement)(w,{value:this.state},o)},HeadProvider}(a.Component),_=function Title(n){return Object(a.createElement)(E,_extends({tag:"title"},n))}},"2mql":function(n,r,o){"use strict"
var a=o("TOwV"),i={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},s={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},y={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},w={}
function getStatics(n){return a.isMemo(n)?y:w[n.$$typeof]||i}w[a.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},w[a.Memo]=y
var E=Object.defineProperty,P=Object.getOwnPropertyNames,j=Object.getOwnPropertySymbols,_=Object.getOwnPropertyDescriptor,B=Object.getPrototypeOf,q=Object.prototype
n.exports=function hoistNonReactStatics(n,r,o){if("string"!=typeof r){if(q){var a=B(r)
a&&a!==q&&hoistNonReactStatics(n,a,o)}var i=P(r)
j&&(i=i.concat(j(r)))
for(var y=getStatics(n),w=getStatics(r),$=0;$<i.length;++$){var ne=i[$]
if(!(s[ne]||o&&o[ne]||w&&w[ne]||y&&y[ne])){var oe=_(r,ne)
try{E(n,ne,oe)}catch(n){}}}}return n}},"2tvP":function(n,r,o){"use strict";(function(n){o.d(r,"a",(function(){return useApp}))
var a,i=o("q1tI"),s=o("RI0Z"),y=o("7Zcw");(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(n)
var w="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(n){return n}
const E=new WeakMap,getErrorDismisser=(n,r)=>E.has(n)?E.get(n):E.set(n,()=>r(n)).get(n),useApp=n=>{const{handleError:r,handleIsOffline:o,handleIsOnline:a,handleHTMLUpdate:w,markErrorHandled:E,renderError:P,unhandledErrors:j}=n,[_,B]=Object(i.useState)(!1),q=Object(i.useCallback)(()=>B(!1),[B]),$=Object(i.useCallback)(()=>{window.location.reload()},[]),ne=Object(i.useMemo)(()=>P?[Object(s.a)(P,window,useApp,P.stack)]:[],[P]),oe=P?ne:j,ie=P?$:E
Object(i.useEffect)(()=>{for(const n of oe){const{error:o,id:a,loc:i}=n
r(o,a,i,getErrorDismisser(o,ie))}},[oe,ie,r])
const[le,se]=Object(y.b)(),{closeDrawer:pe}=se,{hasBeenOffline:he,isOnline:me,overlay:ge}=le
Object(i.useEffect)(()=>{he&&(me?a():o())},[a,o,he,me]),Object(i.useEffect)(()=>{_&&w(q)},[_,w,q])
return{hasOverlay:!!ge,handleCloseDrawer:Object(i.useCallback)(()=>{pe()},[pe]),setHTMLUpdateAvailable:B}}
var P,j
w(useApp,"useState{[isHTMLUpdateAvailable, setHTMLUpdateAvailable](false)}\nuseCallback{resetHTMLUpdateAvaialable}\nuseCallback{reload}\nuseMemo{renderErrors}\nuseEffect{}\nuseAppContext{[appState, appApi]}\nuseEffect{}\nuseEffect{}\nuseCallback{handleCloseDrawer}",()=>[y.b]),(P="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(P.register(E,"dismissers","/home/dominic/projects/baazframeworkdoc/node_modules/@baaz/adapter/talons/App/useApp.js"),P.register(getErrorDismisser,"getErrorDismisser","/home/dominic/projects/baazframeworkdoc/node_modules/@baaz/adapter/talons/App/useApp.js"),P.register(useApp,"useApp","/home/dominic/projects/baazframeworkdoc/node_modules/@baaz/adapter/talons/App/useApp.js")),(j="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&j(n)}).call(this,o("3UD+")(n))},"3IO0":function(n,r){n.exports=function toNoCase(n){return o.test(n)?n.toLowerCase():a.test(n)?(function unseparate(n){return n.replace(s,(function(n,r){return r?" "+r:""}))}(n)||n).toLowerCase():i.test(n)?function uncamelize(n){return n.replace(y,(function(n,r,o){return r+" "+o.toLowerCase().split("").join(" ")}))}(n).toLowerCase():n.toLowerCase()}
var o=/\s/,a=/(_|-|\.|:)/,i=/([a-z][A-Z]|[A-Z][a-z])/
var s=/[\W_]+(.|$)/g
var y=/(.)([A-Z]+)/g},"3UD+":function(n,r){n.exports=function(n){if(!n.webpackPolyfill){var r=Object.create(n)
r.children||(r.children=[]),Object.defineProperty(r,"loaded",{enumerable:!0,get:function(){return r.l}}),Object.defineProperty(r,"id",{enumerable:!0,get:function(){return r.i}}),Object.defineProperty(r,"exports",{enumerable:!0}),r.webpackPolyfill=1}return r}},"55Ip":function(n,r,o){"use strict"
o.d(r,"a",(function(){return E})),o.d(r,"b",(function(){return P})),o.d(r,"c",(function(){return ne})),o.d(r,"d",(function(){return le}))
var a=o("Ty5D")
function _inheritsLoose(n,r){n.prototype=Object.create(r.prototype),n.prototype.constructor=n,n.__proto__=r}var i=o("q1tI"),s=o.n(i),y=o("LhCv")
o("17x9")
function _extends(){return(_extends=Object.assign||function(n){for(var r=1;r<arguments.length;r++){var o=arguments[r]
for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(n[a]=o[a])}return n}).apply(this,arguments)}function _objectWithoutPropertiesLoose(n,r){if(null==n)return{}
var o,a,i={},s=Object.keys(n)
for(a=0;a<s.length;a++)o=s[a],r.indexOf(o)>=0||(i[o]=n[o])
return i}var w=o("9R94"),E=function(n){function BrowserRouter(){for(var r,o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i]
return(r=n.call.apply(n,[this].concat(a))||this).history=Object(y.a)(r.props),r}return _inheritsLoose(BrowserRouter,n),BrowserRouter.prototype.render=function render(){return s.a.createElement(a.b,{history:this.history,children:this.props.children})},BrowserRouter}(s.a.Component)
var P=function(n){function HashRouter(){for(var r,o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i]
return(r=n.call.apply(n,[this].concat(a))||this).history=Object(y.b)(r.props),r}return _inheritsLoose(HashRouter,n),HashRouter.prototype.render=function render(){return s.a.createElement(a.b,{history:this.history,children:this.props.children})},HashRouter}(s.a.Component)
var j=function resolveToLocation(n,r){return"function"==typeof n?n(r):n},_=function normalizeToLocation(n,r){return"string"==typeof n?Object(y.c)(n,null,null,r):n},B=function forwardRefShim(n){return n},q=s.a.forwardRef
void 0===q&&(q=B)
var $=q((function(n,r){var o=n.innerRef,a=n.navigate,i=n.onClick,y=_objectWithoutPropertiesLoose(n,["innerRef","navigate","onClick"]),w=y.target,E=_extends({},y,{onClick:function onClick(n){try{i&&i(n)}catch(r){throw n.preventDefault(),r}n.defaultPrevented||0!==n.button||w&&"_self"!==w||function isModifiedEvent(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}(n)||(n.preventDefault(),a())}})
return E.ref=B!==q&&r||o,s.a.createElement("a",E)}))
var ne=q((function(n,r){var o=n.component,i=void 0===o?$:o,y=n.replace,E=n.to,P=n.innerRef,ne=_objectWithoutPropertiesLoose(n,["component","replace","to","innerRef"])
return s.a.createElement(a.d.Consumer,null,(function(n){n||Object(w.a)(!1)
var o=n.history,a=_(j(E,n.location),n.location),$=a?o.createHref(a):"",oe=_extends({},ne,{href:$,navigate:function navigate(){var r=j(E,n.location);(y?o.replace:o.push)(r)}})
return B!==q?oe.ref=r||P:oe.innerRef=P,s.a.createElement(i,oe)}))})),oe=function forwardRefShim(n){return n},ie=s.a.forwardRef
void 0===ie&&(ie=oe)
var le=ie((function(n,r){var o=n["aria-current"],i=void 0===o?"page":o,y=n.activeClassName,E=void 0===y?"active":y,P=n.activeStyle,B=n.className,q=n.exact,$=n.isActive,le=n.location,se=n.sensitive,pe=n.strict,he=n.style,me=n.to,ge=n.innerRef,ve=_objectWithoutPropertiesLoose(n,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"])
return s.a.createElement(a.d.Consumer,null,(function(n){n||Object(w.a)(!1)
var o=le||n.location,y=_(j(me,o),o),ye=y.pathname,we=ye&&ye.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),ke=we?Object(a.e)(o.pathname,{path:we,exact:q,sensitive:se,strict:pe}):null,Se=!!($?$(ke,o):ke),Te=Se?function joinClassnames(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o]
return r.filter((function(n){return n})).join(" ")}(B,E):B,Oe=Se?_extends({},he,{},P):he,je=_extends({"aria-current":Se&&i||null,className:Te,style:Oe,to:y},ve)
return oe!==ie?je.ref=r||ge:je.innerRef=ge,s.a.createElement(ne,je)}))}))},"7Qc+":function(n,r){n.exports=Array.isArray||function(n){return"[object Array]"==Object.prototype.toString.call(n)}},"7Zcw":function(n,r,o){"use strict";(function(n){o.d(r,"b",(function(){return useAppContext}))
var a,i=o("q1tI"),s=o.n(i),y=o("/MKj"),w=o("A0B3"),E=o("NGYs"),P=o("0Cei")
function _defineProperty(n,r,o){return r in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,n}(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(n)
var j="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(n){return n}
const _=Object(i.createContext)(),AppContextProvider=n=>{const{actions:r,appState:o,asyncActions:a,children:y}=n,w=Object(i.useMemo)(()=>function _objectSpread(n){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?Object(arguments[r]):{},a=Object.keys(o)
"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(o).filter((function(n){return Object.getOwnPropertyDescriptor(o,n).enumerable})))),a.forEach((function(r){_defineProperty(n,r,o[r])}))}return n}({actions:r},a),[r,a]),E=Object(i.useMemo)(()=>[o,w],[w,o])
return s.a.createElement(_.Provider,{value:E},y)}
j(AppContextProvider,"useMemo{appApi}\nuseMemo{contextValue}")
const mapStateToProps=({app:n})=>({appState:n}),mapDispatchToProps=n=>({actions:Object(P.a)(w.a,n),asyncActions:Object(P.a)(E,n)}),B=Object(y.b)(mapStateToProps,mapDispatchToProps)(AppContextProvider)
r.a=B
const useAppContext=()=>Object(i.useContext)(_)
var q,$
j(useAppContext,"useContext{}"),(q="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(q.register(_,"AppContext","/home/dominic/projects/baazframeworkdoc/node_modules/@baaz/adapter/context/app.js"),q.register(AppContextProvider,"AppContextProvider","/home/dominic/projects/baazframeworkdoc/node_modules/@baaz/adapter/context/app.js"),q.register(mapStateToProps,"mapStateToProps","/home/dominic/projects/baazframeworkdoc/node_modules/@baaz/adapter/context/app.js"),q.register(mapDispatchToProps,"mapDispatchToProps","/home/dominic/projects/baazframeworkdoc/node_modules/@baaz/adapter/context/app.js"),q.register(useAppContext,"useAppContext","/home/dominic/projects/baazframeworkdoc/node_modules/@baaz/adapter/context/app.js"),q.register(B,"default","/home/dominic/projects/baazframeworkdoc/node_modules/@baaz/adapter/context/app.js")),($="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&$(n)}).call(this,o("3UD+")(n))},"8oxB":function(n,r){var o,a,i=n.exports={}
function defaultSetTimout(){throw new Error("setTimeout has not been defined")}function defaultClearTimeout(){throw new Error("clearTimeout has not been defined")}function runTimeout(n){if(o===setTimeout)return setTimeout(n,0)
if((o===defaultSetTimout||!o)&&setTimeout)return o=setTimeout,setTimeout(n,0)
try{return o(n,0)}catch(r){try{return o.call(null,n,0)}catch(r){return o.call(this,n,0)}}}!function(){try{o="function"==typeof setTimeout?setTimeout:defaultSetTimout}catch(n){o=defaultSetTimout}try{a="function"==typeof clearTimeout?clearTimeout:defaultClearTimeout}catch(n){a=defaultClearTimeout}}()
var s,y=[],w=!1,E=-1
function cleanUpNextTick(){w&&s&&(w=!1,s.length?y=s.concat(y):E=-1,y.length&&drainQueue())}function drainQueue(){if(!w){var n=runTimeout(cleanUpNextTick)
w=!0
for(var r=y.length;r;){for(s=y,y=[];++E<r;)s&&s[E].run()
E=-1,r=y.length}s=null,w=!1,function runClearTimeout(n){if(a===clearTimeout)return clearTimeout(n)
if((a===defaultClearTimeout||!a)&&clearTimeout)return a=clearTimeout,clearTimeout(n)
try{return a(n)}catch(r){try{return a.call(null,n)}catch(r){return a.call(this,n)}}}(n)}}function Item(n,r){this.fun=n,this.array=r}function noop(){}i.nextTick=function(n){var r=new Array(arguments.length-1)
if(arguments.length>1)for(var o=1;o<arguments.length;o++)r[o-1]=arguments[o]
y.push(new Item(n,r)),1!==y.length||w||runTimeout(drainQueue)},Item.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=noop,i.addListener=noop,i.once=noop,i.off=noop,i.removeListener=noop,i.removeAllListeners=noop,i.emit=noop,i.prependListener=noop,i.prependOnceListener=noop,i.listeners=function(n){return[]},i.binding=function(n){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(n){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},"8tgM":function(n,r,o){var a=o("7Qc+")
n.exports=pathToRegexp,n.exports.parse=parse,n.exports.compile=function compile(n,r){return tokensToFunction(parse(n,r),r)},n.exports.tokensToFunction=tokensToFunction,n.exports.tokensToRegExp=tokensToRegExp
var i=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")
function parse(n,r){for(var o,a=[],s=0,y=0,w="",E=r&&r.delimiter||"/";null!=(o=i.exec(n));){var P=o[0],j=o[1],_=o.index
if(w+=n.slice(y,_),y=_+P.length,j)w+=j[1]
else{var B=n[y],q=o[2],$=o[3],ne=o[4],oe=o[5],ie=o[6],le=o[7]
w&&(a.push(w),w="")
var se=null!=q&&null!=B&&B!==q,pe="+"===ie||"*"===ie,he="?"===ie||"*"===ie,me=o[2]||E,ge=ne||oe
a.push({name:$||s++,prefix:q||"",delimiter:me,optional:he,repeat:pe,partial:se,asterisk:!!le,pattern:ge?escapeGroup(ge):le?".*":"[^"+escapeString(me)+"]+?"})}}return y<n.length&&(w+=n.substr(y)),w&&a.push(w),a}function encodeURIComponentPretty(n){return encodeURI(n).replace(/[\/?#]/g,(function(n){return"%"+n.charCodeAt(0).toString(16).toUpperCase()}))}function tokensToFunction(n,r){for(var o=new Array(n.length),i=0;i<n.length;i++)"object"==typeof n[i]&&(o[i]=new RegExp("^(?:"+n[i].pattern+")$",flags(r)))
return function(r,i){for(var s="",y=r||{},w=(i||{}).pretty?encodeURIComponentPretty:encodeURIComponent,E=0;E<n.length;E++){var P=n[E]
if("string"!=typeof P){var j,_=y[P.name]
if(null==_){if(P.optional){P.partial&&(s+=P.prefix)
continue}throw new TypeError('Expected "'+P.name+'" to be defined')}if(a(_)){if(!P.repeat)throw new TypeError('Expected "'+P.name+'" to not repeat, but received `'+JSON.stringify(_)+"`")
if(0===_.length){if(P.optional)continue
throw new TypeError('Expected "'+P.name+'" to not be empty')}for(var B=0;B<_.length;B++){if(j=w(_[B]),!o[E].test(j))throw new TypeError('Expected all "'+P.name+'" to match "'+P.pattern+'", but received `'+JSON.stringify(j)+"`")
s+=(0===B?P.prefix:P.delimiter)+j}}else{if(j=P.asterisk?encodeURI(_).replace(/[?#]/g,(function(n){return"%"+n.charCodeAt(0).toString(16).toUpperCase()})):w(_),!o[E].test(j))throw new TypeError('Expected "'+P.name+'" to match "'+P.pattern+'", but received "'+j+'"')
s+=P.prefix+j}}else s+=P}return s}}function escapeString(n){return n.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function escapeGroup(n){return n.replace(/([=!:$\/()])/g,"\\$1")}function attachKeys(n,r){return n.keys=r,n}function flags(n){return n&&n.sensitive?"":"i"}function tokensToRegExp(n,r,o){a(r)||(o=r||o,r=[])
for(var i=(o=o||{}).strict,s=!1!==o.end,y="",w=0;w<n.length;w++){var E=n[w]
if("string"==typeof E)y+=escapeString(E)
else{var P=escapeString(E.prefix),j="(?:"+E.pattern+")"
r.push(E),E.repeat&&(j+="(?:"+P+j+")*"),y+=j=E.optional?E.partial?P+"("+j+")?":"(?:"+P+"("+j+"))?":P+"("+j+")"}}var _=escapeString(o.delimiter||"/"),B=y.slice(-_.length)===_
return i||(y=(B?y.slice(0,-_.length):y)+"(?:"+_+"(?=$))?"),y+=s?"$":i&&B?"":"(?="+_+"|$)",attachKeys(new RegExp("^"+y,flags(o)),r)}function pathToRegexp(n,r,o){return a(r)||(o=r||o,r=[]),o=o||{},n instanceof RegExp?function regexpToRegexp(n,r){var o=n.source.match(/\((?!\?)/g)
if(o)for(var a=0;a<o.length;a++)r.push({name:a,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null})
return attachKeys(n,r)}(n,r):a(n)?function arrayToRegexp(n,r,o){for(var a=[],i=0;i<n.length;i++)a.push(pathToRegexp(n[i],r,o).source)
return attachKeys(new RegExp("(?:"+a.join("|")+")",flags(o)),r)}(n,r,o):function stringToRegexp(n,r,o){return tokensToRegExp(parse(n,o),r,o)}(n,r,o)}},"9R94":function(n,r,o){"use strict"
r.a=function invariant(n,r){if(!n)throw new Error("Invariant failed")}},A0B3:function(n,r,o){"use strict";(function(n){var a,i=o("FH7K");(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(n)
"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature
const s=["TOGGLE_DRAWER","SET_ONLINE","SET_OFFLINE","TOGGLE_SEARCH","EXECUTE_SEARCH","MARK_ERROR_HANDLED"],y=Object(i.a)(...s,{prefix:"APP"})
var w,E
r.a=y,(w="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(w.register("APP","prefix","/home/dominic/projects/baazframeworkdoc/node_modules/@baaz/adapter/store/actions/app/actions.js"),w.register(s,"actionTypes","/home/dominic/projects/baazframeworkdoc/node_modules/@baaz/adapter/store/actions/app/actions.js"),w.register(y,"default","/home/dominic/projects/baazframeworkdoc/node_modules/@baaz/adapter/store/actions/app/actions.js")),(E="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&E(n)}).call(this,o("3UD+")(n))},ANjH:function(n,r,o){"use strict"
o.d(r,"a",(function(){return applyMiddleware})),o.d(r,"b",(function(){return bindActionCreators})),o.d(r,"c",(function(){return combineReducers})),o.d(r,"d",(function(){return compose})),o.d(r,"e",(function(){return createStore}))
var a=o("bCCX"),i=function randomString(){return Math.random().toString(36).substring(7).split("").join(".")},s={INIT:"@@redux/INIT"+i(),REPLACE:"@@redux/REPLACE"+i(),PROBE_UNKNOWN_ACTION:function PROBE_UNKNOWN_ACTION(){return"@@redux/PROBE_UNKNOWN_ACTION"+i()}}
function isPlainObject(n){if("object"!=typeof n||null===n)return!1
for(var r=n;null!==Object.getPrototypeOf(r);)r=Object.getPrototypeOf(r)
return Object.getPrototypeOf(n)===r}function createStore(n,r,o){var i
if("function"==typeof r&&"function"==typeof o||"function"==typeof o&&"function"==typeof arguments[3])throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.")
if("function"==typeof r&&void 0===o&&(o=r,r=void 0),void 0!==o){if("function"!=typeof o)throw new Error("Expected the enhancer to be a function.")
return o(createStore)(n,r)}if("function"!=typeof n)throw new Error("Expected the reducer to be a function.")
var y=n,w=r,E=[],P=E,j=!1
function ensureCanMutateNextListeners(){P===E&&(P=E.slice())}function getState(){if(j)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.")
return w}function subscribe(n){if("function"!=typeof n)throw new Error("Expected the listener to be a function.")
if(j)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribelistener for more details.")
var r=!0
return ensureCanMutateNextListeners(),P.push(n),function unsubscribe(){if(r){if(j)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribelistener for more details.")
r=!1,ensureCanMutateNextListeners()
var o=P.indexOf(n)
P.splice(o,1),E=null}}}function dispatch(n){if(!isPlainObject(n))throw new Error("Actions must be plain objects. Use custom middleware for async actions.")
if(void 0===n.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?')
if(j)throw new Error("Reducers may not dispatch actions.")
try{j=!0,w=y(w,n)}finally{j=!1}for(var r=E=P,o=0;o<r.length;o++){(0,r[o])()}return n}function replaceReducer(n){if("function"!=typeof n)throw new Error("Expected the nextReducer to be a function.")
y=n,dispatch({type:s.REPLACE})}function observable(){var n,r=subscribe
return(n={subscribe:function subscribe(n){if("object"!=typeof n||null===n)throw new TypeError("Expected the observer to be an object.")
function observeState(){n.next&&n.next(getState())}return observeState(),{unsubscribe:r(observeState)}}})[a.a]=function(){return this},n}return dispatch({type:s.INIT}),(i={dispatch,subscribe,getState,replaceReducer})[a.a]=observable,i}function getUndefinedStateErrorMessage(n,r){var o=r&&r.type
return"Given "+(o&&'action "'+String(o)+'"'||"an action")+', reducer "'+n+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}function combineReducers(n){for(var r=Object.keys(n),o={},a=0;a<r.length;a++){var i=r[a]
0,"function"==typeof n[i]&&(o[i]=n[i])}var y,w=Object.keys(o)
try{!function assertReducerShape(n){Object.keys(n).forEach((function(r){var o=n[r]
if(void 0===o(void 0,{type:s.INIT}))throw new Error('Reducer "'+r+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.")
if(void 0===o(void 0,{type:s.PROBE_UNKNOWN_ACTION()}))throw new Error('Reducer "'+r+"\" returned undefined when probed with a random type. Don't try to handle "+s.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')}))}(o)}catch(n){y=n}return function combination(n,r){if(void 0===n&&(n={}),y)throw y
for(var a=!1,i={},s=0;s<w.length;s++){var E=w[s],P=o[E],j=n[E],_=P(j,r)
if(void 0===_){var B=getUndefinedStateErrorMessage(E,r)
throw new Error(B)}i[E]=_,a=a||_!==j}return(a=a||w.length!==Object.keys(n).length)?i:n}}function bindActionCreator(n,r){return function(){return r(n.apply(this,arguments))}}function bindActionCreators(n,r){if("function"==typeof n)return bindActionCreator(n,r)
if("object"!=typeof n||null===n)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===n?"null":typeof n)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?')
var o={}
for(var a in n){var i=n[a]
"function"==typeof i&&(o[a]=bindActionCreator(i,r))}return o}function _defineProperty(n,r,o){return r in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,n}function ownKeys(n,r){var o=Object.keys(n)
return Object.getOwnPropertySymbols&&o.push.apply(o,Object.getOwnPropertySymbols(n)),r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable}))),o}function _objectSpread2(n){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{}
r%2?ownKeys(o,!0).forEach((function(r){_defineProperty(n,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):ownKeys(o).forEach((function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(o,r))}))}return n}function compose(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o]
return 0===r.length?function(n){return n}:1===r.length?r[0]:r.reduce((function(n,r){return function(){return n(r.apply(void 0,arguments))}}))}function applyMiddleware(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o]
return function(n){return function(){var o=n.apply(void 0,arguments),a=function dispatch(){throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")},i={getState:o.getState,dispatch:function dispatch(){return a.apply(void 0,arguments)}},s=r.map((function(n){return n(i)}))
return _objectSpread2({},o,{dispatch:a=compose.apply(void 0,s)(o.dispatch)})}}}},"AS+4":function(n,r,o){"use strict"
r.a=function(n){return n}},F39V:function(n,r,o){var a=o("NtLt")
n.exports=function toCamelCase(n){return a(n).replace(/\s(\w)/g,(function(n,r){return r.toUpperCase()}))}},FH7K:function(n,r,o){"use strict"
o.d(r,"a",(function(){return createActions}))
var a=o("QLaP"),i=o.n(a),s=o("w/wI"),y=o("UfUT"),w=o("AS+4"),isArray=function(n){return Array.isArray(n)},isString=function(n){return"string"==typeof n},E=o("xZ5c"),getLastElement=function(n){return n[n.length-1]},P=o("F39V"),j=o.n(P),camelCase=function(n){return-1===n.indexOf("/")?j()(n):n.split("/").map(j.a).join("/")},arrayToObject=function(n,r){return n.reduce((function(n,o){return r(n,o)}),{})},_=o("c0mm"),B=Object(_.a)(s.a),q=o("1T5U")
function unflattenActionCreators(n,r){var o=void 0===r?{}:r,a=o.namespace,i=void 0===a?q.b:a,s=o.prefix
var y={}
return Object.getOwnPropertyNames(n).forEach((function(r){var o=s?r.replace(""+s+i,""):r
return function unflatten(r,o,a){var i=camelCase(a.shift())
0===a.length?o[i]=n[r]:(o[i]||(o[i]={}),unflatten(r,o[i],a))}(r,y,o.split(i))})),y}var isNull=function(n){return null===n}
function createAction(n,r,o){void 0===r&&(r=w.a),i()(Object(y.a)(r)||isNull(r),"Expected payloadCreator to be a function, undefined or null")
var a=isNull(r)||r===w.a?w.a:function(n){for(var o=arguments.length,a=new Array(o>1?o-1:0),i=1;i<o;i++)a[i-1]=arguments[i]
return n instanceof Error?n:r.apply(void 0,[n].concat(a))},s=Object(y.a)(o),E=n.toString(),P=function actionCreator(){var r=a.apply(void 0,arguments),i={type:n}
return r instanceof Error&&(i.error=!0),void 0!==r&&(i.payload=r),s&&(i.meta=o.apply(void 0,arguments)),i}
return P.toString=function(){return E},P}function _objectSpread(n){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{},a=Object.keys(o)
"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(o).filter((function(n){return Object.getOwnPropertyDescriptor(o,n).enumerable})))),a.forEach((function(r){_defineProperty(n,r,o[r])}))}return n}function _defineProperty(n,r,o){return r in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,n}function createActions(n){for(var r=arguments.length,o=new Array(r>1?r-1:0),a=1;a<r;a++)o[a-1]=arguments[a]
var y=Object(s.a)(getLastElement(o))?o.pop():{}
return i()(o.every(isString)&&(isString(n)||Object(s.a)(n)),"Expected optional object followed by string action types"),isString(n)?actionCreatorsFromIdentityActions([n].concat(o),y):_objectSpread({},actionCreatorsFromActionMap(n,y),actionCreatorsFromIdentityActions(o,y))}function actionCreatorsFromActionMap(n,r){return unflattenActionCreators(actionMapToActionCreators(B(n,r)),r)}function actionMapToActionCreators(n,r){var o=void 0===r?{}:r,a=o.prefix,s=o.namespace,P=void 0===s?q.b:s
return arrayToObject(Object.keys(n),(function(r,o){var s,j=n[o]
i()(function isValidActionMapValue(n){if(Object(y.a)(n)||Object(E.a)(n))return!0
if(isArray(n)){var r=n[0],o=void 0===r?w.a:r,a=n[1]
return Object(y.a)(o)&&Object(y.a)(a)}return!1}(j),"Expected function, undefined, null, or array with payload and meta functions for "+o)
var _=a?""+a+P+o:o,B=isArray(j)?createAction.apply(void 0,[_].concat(j)):createAction(_,j)
return _objectSpread({},r,((s={})[o]=B,s))}))}function actionCreatorsFromIdentityActions(n,r){var o=actionMapToActionCreators(arrayToObject(n,(function(n,r){var o
return _objectSpread({},n,((o={})[r]=w.a,o))})),r)
return arrayToObject(Object.keys(o),(function(n,r){var a
return _objectSpread({},n,((a={})[camelCase(r)]=o[r],a))}))}},GZdO:function(n,r,o){"use strict";(function(n){var a,i=o("cedE");(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(n)
"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature
const s={app:i.a},y=s
var w,E
r.a=y,(w="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(w.register(s,"reducers","/home/dominic/projects/baazframeworkdoc/node_modules/@baaz/adapter/store/reducers/index.js"),w.register(y,"default","/home/dominic/projects/baazframeworkdoc/node_modules/@baaz/adapter/store/reducers/index.js")),(E="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&E(n)}).call(this,o("3UD+")(n))},INls:function(n,r,o){"use strict";(function(n){var a,i=o("ANjH"),s=o("sINF");(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(n)
"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature
const y=[s.a]
const w=Object(i.a)(...y)
var E,P
r.a=w,(E="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(E.register(y,"middleware","/home/dominic/projects/baazframeworkdoc/node_modules/@baaz/adapter/store/enhancers/middleware.js"),E.register(w,"default","/home/dominic/projects/baazframeworkdoc/node_modules/@baaz/adapter/store/enhancers/middleware.js")),(P="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&P(n)}).call(this,o("3UD+")(n))},JPst:function(n,r,o){"use strict"
n.exports=function(n){var r=[]
return r.toString=function toString(){return this.map((function(r){var o=function cssWithMappingToString(n,r){var o=n[1]||"",a=n[3]
if(!a)return o
if(r&&"function"==typeof btoa){var i=function toComment(n){var r=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r)
return"/*# ".concat(o," */")}(a),s=a.sources.map((function(n){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(n," */")}))
return[o].concat(s).concat([i]).join("\n")}return[o].join("\n")}(r,n)
return r[2]?"@media ".concat(r[2]," {").concat(o,"}"):o})).join("")},r.i=function(n,o,a){"string"==typeof n&&(n=[[null,n,""]])
var i={}
if(a)for(var s=0;s<this.length;s++){var y=this[s][0]
null!=y&&(i[y]=!0)}for(var w=0;w<n.length;w++){var E=[].concat(n[w])
a&&i[E[0]]||(o&&(E[2]?E[2]="".concat(o," and ").concat(E[2]):E[2]=o),r.push(E))}},r}},Jhtv:function(n,r,o){"use strict"
function _inheritsLoose(n,r){n.prototype=Object.create(r.prototype),n.prototype.constructor=n,n.__proto__=r}o.d(r,"a",(function(){return _inheritsLoose}))},KCp6:function(n,r,o){"use strict";(function(n){o.d(r,"a",(function(){return useScrollLock}))
var a,i=o("q1tI");(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(n)
var s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(n){return n}
const useScrollLock=n=>{Object(i.useLayoutEffect)(()=>{document.documentElement.dataset.scrollLock=n||""},[n])}
var y,w
s(useScrollLock,"useLayoutEffect{}"),(y="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&y.register(useScrollLock,"useScrollLock","/home/dominic/projects/baazframeworkdoc/node_modules/@baaz/adapter/hooks/useScrollLock.js"),(w="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&w(n)}).call(this,o("3UD+")(n))},LboF:function(n,r,o){"use strict"
var a=function isOldIE(){var n
return function memorize(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n}}(),i=function getTarget(){var n={}
return function memorize(r){if(void 0===n[r]){var o=document.querySelector(r)
if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(n){o=null}n[r]=o}return n[r]}}(),s=[]
function getIndexByIdentifier(n){for(var r=-1,o=0;o<s.length;o++)if(s[o].identifier===n){r=o
break}return r}function modulesToDom(n,r){for(var o={},a=[],i=0;i<n.length;i++){var y=n[i],w=r.base?y[0]+r.base:y[0],E=o[w]||0,P="".concat(w," ").concat(E)
o[w]=E+1
var j=getIndexByIdentifier(P),_={css:y[1],media:y[2],sourceMap:y[3]};-1!==j?(s[j].references++,s[j].updater(_)):s.push({identifier:P,updater:addStyle(_,r),references:1}),a.push(P)}return a}function insertStyleElement(n){var r=document.createElement("style"),a=n.attributes||{}
if(void 0===a.nonce){var s=o.nc
s&&(a.nonce=s)}if(Object.keys(a).forEach((function(n){r.setAttribute(n,a[n])})),"function"==typeof n.insert)n.insert(r)
else{var y=i(n.insert||"head")
if(!y)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.")
y.appendChild(r)}return r}var y=function replaceText(){var n=[]
return function replace(r,o){return n[r]=o,n.filter(Boolean).join("\n")}}()
function applyToSingletonTag(n,r,o,a){var i=o?"":a.media?"@media ".concat(a.media," {").concat(a.css,"}"):a.css
if(n.styleSheet)n.styleSheet.cssText=y(r,i)
else{var s=document.createTextNode(i),w=n.childNodes
w[r]&&n.removeChild(w[r]),w.length?n.insertBefore(s,w[r]):n.appendChild(s)}}function applyToTag(n,r,o){var a=o.css,i=o.media,s=o.sourceMap
if(i?n.setAttribute("media",i):n.removeAttribute("media"),s&&btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),n.styleSheet)n.styleSheet.cssText=a
else{for(;n.firstChild;)n.removeChild(n.firstChild)
n.appendChild(document.createTextNode(a))}}var w=null,E=0
function addStyle(n,r){var o,a,i
if(r.singleton){var s=E++
o=w||(w=insertStyleElement(r)),a=applyToSingletonTag.bind(null,o,s,!1),i=applyToSingletonTag.bind(null,o,s,!0)}else o=insertStyleElement(r),a=applyToTag.bind(null,o,r),i=function remove(){!function removeStyleElement(n){if(null===n.parentNode)return!1
n.parentNode.removeChild(n)}(o)}
return a(n),function updateStyle(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return
a(n=r)}else i()}}n.exports=function(n,r){(r=r||{}).singleton||"boolean"==typeof r.singleton||(r.singleton=a())
var o=modulesToDom(n=n||[],r)
return function update(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var a=0;a<o.length;a++){var i=getIndexByIdentifier(o[a])
s[i].references--}for(var y=modulesToDom(n,r),w=0;w<o.length;w++){var E=getIndexByIdentifier(o[w])
0===s[E].references&&(s[E].updater(),s.splice(E,1))}o=y}}}},LhCv:function(n,r,o){"use strict"
function _extends(){return(_extends=Object.assign||function(n){for(var r=1;r<arguments.length;r++){var o=arguments[r]
for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(n[a]=o[a])}return n}).apply(this,arguments)}function isAbsolute(n){return"/"===n.charAt(0)}function spliceOne(n,r){for(var o=r,a=o+1,i=n.length;a<i;o+=1,a+=1)n[o]=n[a]
n.pop()}o.d(r,"a",(function(){return createBrowserHistory})),o.d(r,"b",(function(){return createHashHistory})),o.d(r,"d",(function(){return createMemoryHistory})),o.d(r,"c",(function(){return createLocation})),o.d(r,"f",(function(){return locationsAreEqual})),o.d(r,"e",(function(){return createPath}))
var a=function resolvePathname(n,r){void 0===r&&(r="")
var o,a=n&&n.split("/")||[],i=r&&r.split("/")||[],s=n&&isAbsolute(n),y=r&&isAbsolute(r),w=s||y
if(n&&isAbsolute(n)?i=a:a.length&&(i.pop(),i=i.concat(a)),!i.length)return"/"
if(i.length){var E=i[i.length-1]
o="."===E||".."===E||""===E}else o=!1
for(var P=0,j=i.length;j>=0;j--){var _=i[j]
"."===_?spliceOne(i,j):".."===_?(spliceOne(i,j),P++):P&&(spliceOne(i,j),P--)}if(!w)for(;P--;P)i.unshift("..")
!w||""===i[0]||i[0]&&isAbsolute(i[0])||i.unshift("")
var B=i.join("/")
return o&&"/"!==B.substr(-1)&&(B+="/"),B}
function value_equal_valueOf(n){return n.valueOf?n.valueOf():Object.prototype.valueOf.call(n)}var i=function valueEqual(n,r){if(n===r)return!0
if(null==n||null==r)return!1
if(Array.isArray(n))return Array.isArray(r)&&n.length===r.length&&n.every((function(n,o){return valueEqual(n,r[o])}))
if("object"==typeof n||"object"==typeof r){var o=value_equal_valueOf(n),a=value_equal_valueOf(r)
return o!==n||a!==r?valueEqual(o,a):Object.keys(Object.assign({},n,r)).every((function(o){return valueEqual(n[o],r[o])}))}return!1},s=o("9R94")
function addLeadingSlash(n){return"/"===n.charAt(0)?n:"/"+n}function stripLeadingSlash(n){return"/"===n.charAt(0)?n.substr(1):n}function stripBasename(n,r){return function hasBasename(n,r){return 0===n.toLowerCase().indexOf(r.toLowerCase())&&-1!=="/?#".indexOf(n.charAt(r.length))}(n,r)?n.substr(r.length):n}function stripTrailingSlash(n){return"/"===n.charAt(n.length-1)?n.slice(0,-1):n}function createPath(n){var r=n.pathname,o=n.search,a=n.hash,i=r||"/"
return o&&"?"!==o&&(i+="?"===o.charAt(0)?o:"?"+o),a&&"#"!==a&&(i+="#"===a.charAt(0)?a:"#"+a),i}function createLocation(n,r,o,i){var s
"string"==typeof n?(s=function parsePath(n){var r=n||"/",o="",a="",i=r.indexOf("#");-1!==i&&(a=r.substr(i),r=r.substr(0,i))
var s=r.indexOf("?")
return-1!==s&&(o=r.substr(s),r=r.substr(0,s)),{pathname:r,search:"?"===o?"":o,hash:"#"===a?"":a}}(n)).state=r:(void 0===(s=_extends({},n)).pathname&&(s.pathname=""),s.search?"?"!==s.search.charAt(0)&&(s.search="?"+s.search):s.search="",s.hash?"#"!==s.hash.charAt(0)&&(s.hash="#"+s.hash):s.hash="",void 0!==r&&void 0===s.state&&(s.state=r))
try{s.pathname=decodeURI(s.pathname)}catch(n){throw n instanceof URIError?new URIError('Pathname "'+s.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):n}return o&&(s.key=o),i?s.pathname?"/"!==s.pathname.charAt(0)&&(s.pathname=a(s.pathname,i.pathname)):s.pathname=i.pathname:s.pathname||(s.pathname="/"),s}function locationsAreEqual(n,r){return n.pathname===r.pathname&&n.search===r.search&&n.hash===r.hash&&n.key===r.key&&i(n.state,r.state)}function createTransitionManager(){var n=null
var r=[]
return{setPrompt:function setPrompt(r){return n=r,function(){n===r&&(n=null)}},confirmTransitionTo:function confirmTransitionTo(r,o,a,i){if(null!=n){var s="function"==typeof n?n(r,o):n
"string"==typeof s?"function"==typeof a?a(s,i):i(!0):i(!1!==s)}else i(!0)},appendListener:function appendListener(n){var o=!0
function listener(){o&&n.apply(void 0,arguments)}return r.push(listener),function(){o=!1,r=r.filter((function(n){return n!==listener}))}},notifyListeners:function notifyListeners(){for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a]
r.forEach((function(n){return n.apply(void 0,o)}))}}}var y=!("undefined"==typeof window||!window.document||!window.document.createElement)
function getConfirmation(n,r){r(window.confirm(n))}function getHistoryState(){try{return window.history.state||{}}catch(n){return{}}}function createBrowserHistory(n){void 0===n&&(n={}),y||Object(s.a)(!1)
var r=window.history,o=function supportsHistory(){var n=window.navigator.userAgent
return(-1===n.indexOf("Android 2.")&&-1===n.indexOf("Android 4.0")||-1===n.indexOf("Mobile Safari")||-1!==n.indexOf("Chrome")||-1!==n.indexOf("Windows Phone"))&&(window.history&&"pushState"in window.history)}(),a=!function supportsPopStateOnHashChange(){return-1===window.navigator.userAgent.indexOf("Trident")}(),i=n,w=i.forceRefresh,E=void 0!==w&&w,P=i.getUserConfirmation,j=void 0===P?getConfirmation:P,_=i.keyLength,B=void 0===_?6:_,q=n.basename?stripTrailingSlash(addLeadingSlash(n.basename)):""
function getDOMLocation(n){var r=n||{},o=r.key,a=r.state,i=window.location,s=i.pathname+i.search+i.hash
return q&&(s=stripBasename(s,q)),createLocation(s,a,o)}function createKey(){return Math.random().toString(36).substr(2,B)}var $=createTransitionManager()
function setState(n){_extends(pe,n),pe.length=r.length,$.notifyListeners(pe.location,pe.action)}function handlePopState(n){(function isExtraneousPopstateEvent(n){return void 0===n.state&&-1===navigator.userAgent.indexOf("CriOS")})(n)||handlePop(getDOMLocation(n.state))}function handleHashChange(){handlePop(getDOMLocation(getHistoryState()))}var ne=!1
function handlePop(n){if(ne)ne=!1,setState()
else{$.confirmTransitionTo(n,"POP",j,(function(r){r?setState({action:"POP",location:n}):function revertPop(n){var r=pe.location,o=ie.indexOf(r.key);-1===o&&(o=0)
var a=ie.indexOf(n.key);-1===a&&(a=0)
var i=o-a
i&&(ne=!0,go(i))}(n)}))}}var oe=getDOMLocation(getHistoryState()),ie=[oe.key]
function createHref(n){return q+createPath(n)}function go(n){r.go(n)}var le=0
function checkDOMListeners(n){1===(le+=n)&&1===n?(window.addEventListener("popstate",handlePopState),a&&window.addEventListener("hashchange",handleHashChange)):0===le&&(window.removeEventListener("popstate",handlePopState),a&&window.removeEventListener("hashchange",handleHashChange))}var se=!1
var pe={length:r.length,action:"POP",location:oe,createHref,push:function push(n,a){var i=createLocation(n,a,createKey(),pe.location)
$.confirmTransitionTo(i,"PUSH",j,(function(n){if(n){var a=createHref(i),s=i.key,y=i.state
if(o)if(r.pushState({key:s,state:y},null,a),E)window.location.href=a
else{var w=ie.indexOf(pe.location.key),P=ie.slice(0,w+1)
P.push(i.key),ie=P,setState({action:"PUSH",location:i})}else window.location.href=a}}))},replace:function replace(n,a){var i=createLocation(n,a,createKey(),pe.location)
$.confirmTransitionTo(i,"REPLACE",j,(function(n){if(n){var a=createHref(i),s=i.key,y=i.state
if(o)if(r.replaceState({key:s,state:y},null,a),E)window.location.replace(a)
else{var w=ie.indexOf(pe.location.key);-1!==w&&(ie[w]=i.key),setState({action:"REPLACE",location:i})}else window.location.replace(a)}}))},go,goBack:function goBack(){go(-1)},goForward:function goForward(){go(1)},block:function block(n){void 0===n&&(n=!1)
var r=$.setPrompt(n)
return se||(checkDOMListeners(1),se=!0),function(){return se&&(se=!1,checkDOMListeners(-1)),r()}},listen:function listen(n){var r=$.appendListener(n)
return checkDOMListeners(1),function(){checkDOMListeners(-1),r()}}}
return pe}var w={hashbang:{encodePath:function encodePath(n){return"!"===n.charAt(0)?n:"!/"+stripLeadingSlash(n)},decodePath:function decodePath(n){return"!"===n.charAt(0)?n.substr(1):n}},noslash:{encodePath:stripLeadingSlash,decodePath:addLeadingSlash},slash:{encodePath:addLeadingSlash,decodePath:addLeadingSlash}}
function stripHash(n){var r=n.indexOf("#")
return-1===r?n:n.slice(0,r)}function getHashPath(){var n=window.location.href,r=n.indexOf("#")
return-1===r?"":n.substring(r+1)}function replaceHashPath(n){window.location.replace(stripHash(window.location.href)+"#"+n)}function createHashHistory(n){void 0===n&&(n={}),y||Object(s.a)(!1)
var r=window.history,o=(function supportsGoWithoutReloadUsingHash(){return-1===window.navigator.userAgent.indexOf("Firefox")}(),n),a=o.getUserConfirmation,i=void 0===a?getConfirmation:a,E=o.hashType,P=void 0===E?"slash":E,j=n.basename?stripTrailingSlash(addLeadingSlash(n.basename)):"",_=w[P],B=_.encodePath,q=_.decodePath
function getDOMLocation(){var n=q(getHashPath())
return j&&(n=stripBasename(n,j)),createLocation(n)}var $=createTransitionManager()
function setState(n){_extends(ge,n),ge.length=r.length,$.notifyListeners(ge.location,ge.action)}var ne=!1,oe=null
function handleHashChange(){var n=getHashPath(),r=B(n)
if(n!==r)replaceHashPath(r)
else{var o=getDOMLocation(),a=ge.location
if(!ne&&function locationsAreEqual$$1(n,r){return n.pathname===r.pathname&&n.search===r.search&&n.hash===r.hash}(a,o))return
if(oe===createPath(o))return
oe=null,function handlePop(n){if(ne)ne=!1,setState()
else{$.confirmTransitionTo(n,"POP",i,(function(r){r?setState({action:"POP",location:n}):function revertPop(n){var r=ge.location,o=pe.lastIndexOf(createPath(r));-1===o&&(o=0)
var a=pe.lastIndexOf(createPath(n));-1===a&&(a=0)
var i=o-a
i&&(ne=!0,go(i))}(n)}))}}(o)}}var ie=getHashPath(),le=B(ie)
ie!==le&&replaceHashPath(le)
var se=getDOMLocation(),pe=[createPath(se)]
function go(n){r.go(n)}var he=0
function checkDOMListeners(n){1===(he+=n)&&1===n?window.addEventListener("hashchange",handleHashChange):0===he&&window.removeEventListener("hashchange",handleHashChange)}var me=!1
var ge={length:r.length,action:"POP",location:se,createHref:function createHref(n){var r=document.querySelector("base"),o=""
return r&&r.getAttribute("href")&&(o=stripHash(window.location.href)),o+"#"+B(j+createPath(n))},push:function push(n,r){var o=createLocation(n,void 0,void 0,ge.location)
$.confirmTransitionTo(o,"PUSH",i,(function(n){if(n){var r=createPath(o),a=B(j+r)
if(getHashPath()!==a){oe=r,function pushHashPath(n){window.location.hash=n}(a)
var i=pe.lastIndexOf(createPath(ge.location)),s=pe.slice(0,i+1)
s.push(r),pe=s,setState({action:"PUSH",location:o})}else setState()}}))},replace:function replace(n,r){var o=createLocation(n,void 0,void 0,ge.location)
$.confirmTransitionTo(o,"REPLACE",i,(function(n){if(n){var r=createPath(o),a=B(j+r)
getHashPath()!==a&&(oe=r,replaceHashPath(a))
var i=pe.indexOf(createPath(ge.location));-1!==i&&(pe[i]=r),setState({action:"REPLACE",location:o})}}))},go,goBack:function goBack(){go(-1)},goForward:function goForward(){go(1)},block:function block(n){void 0===n&&(n=!1)
var r=$.setPrompt(n)
return me||(checkDOMListeners(1),me=!0),function(){return me&&(me=!1,checkDOMListeners(-1)),r()}},listen:function listen(n){var r=$.appendListener(n)
return checkDOMListeners(1),function(){checkDOMListeners(-1),r()}}}
return ge}function clamp(n,r,o){return Math.min(Math.max(n,r),o)}function createMemoryHistory(n){void 0===n&&(n={})
var r=n,o=r.getUserConfirmation,a=r.initialEntries,i=void 0===a?["/"]:a,s=r.initialIndex,y=void 0===s?0:s,w=r.keyLength,E=void 0===w?6:w,P=createTransitionManager()
function setState(n){_extends(q,n),q.length=q.entries.length,P.notifyListeners(q.location,q.action)}function createKey(){return Math.random().toString(36).substr(2,E)}var j=clamp(y,0,i.length-1),_=i.map((function(n){return createLocation(n,void 0,"string"==typeof n?createKey():n.key||createKey())})),B=createPath
function go(n){var r=clamp(q.index+n,0,q.entries.length-1),a=q.entries[r]
P.confirmTransitionTo(a,"POP",o,(function(n){n?setState({action:"POP",location:a,index:r}):setState()}))}var q={length:_.length,action:"POP",location:_[j],index:j,entries:_,createHref:B,push:function push(n,r){var a=createLocation(n,r,createKey(),q.location)
P.confirmTransitionTo(a,"PUSH",o,(function(n){if(n){var r=q.index+1,o=q.entries.slice(0)
o.length>r?o.splice(r,o.length-r,a):o.push(a),setState({action:"PUSH",location:a,index:r,entries:o})}}))},replace:function replace(n,r){var a=createLocation(n,r,createKey(),q.location)
P.confirmTransitionTo(a,"REPLACE",o,(function(n){n&&(q.entries[q.index]=a,setState({action:"REPLACE",location:a}))}))},go,goBack:function goBack(){go(-1)},goForward:function goForward(){go(1)},canGo:function canGo(n){var r=q.index+n
return r>=0&&r<q.entries.length},block:function block(n){return void 0===n&&(n=!1),P.setPrompt(n)},listen:function listen(n){return P.appendListener(n)}}
return q}},MgzW:function(n,r,o){"use strict"
var a=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable
function toObject(n){if(null==n)throw new TypeError("Object.assign cannot be called with null or undefined")
return Object(n)}n.exports=function shouldUseNative(){try{if(!Object.assign)return!1
var n=new String("abc")
if(n[5]="de","5"===Object.getOwnPropertyNames(n)[0])return!1
for(var r={},o=0;o<10;o++)r["_"+String.fromCharCode(o)]=o
if("0123456789"!==Object.getOwnPropertyNames(r).map((function(n){return r[n]})).join(""))return!1
var a={}
return"abcdefghijklmnopqrst".split("").forEach((function(n){a[n]=n})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},a)).join("")}catch(n){return!1}}()?Object.assign:function(n,r){for(var o,y,w=toObject(n),E=1;E<arguments.length;E++){for(var P in o=Object(arguments[E]))i.call(o,P)&&(w[P]=o[P])
if(a){y=a(o)
for(var j=0;j<y.length;j++)s.call(o,y[j])&&(w[y[j]]=o[y[j]])}}return w}},NGYs:function(n,r,o){"use strict"
o.r(r),function(n){o.d(r,"toggleDrawer",(function(){return toggleDrawer})),o.d(r,"closeDrawer",(function(){return closeDrawer})),o.d(r,"toggleSearch",(function(){return toggleSearch})),o.d(r,"executeSearch",(function(){return executeSearch}))
var a,i=o("A0B3");(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(n)
"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature
const toggleDrawer=n=>async r=>r(i.a.toggleDrawer(n)),closeDrawer=()=>async n=>n(i.a.toggleDrawer(null)),toggleSearch=()=>async n=>n(i.a.toggleSearch()),executeSearch=(n,r,o)=>async function thunk(a){let s="query="+n
o&&(s+="&category="+o),r.push("/search.html?"+s),a(i.a.executeSearch(n))}
var s,y;(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(s.register(toggleDrawer,"toggleDrawer","/home/dominic/projects/baazframeworkdoc/node_modules/@baaz/adapter/store/actions/app/asyncActions.js"),s.register(closeDrawer,"closeDrawer","/home/dominic/projects/baazframeworkdoc/node_modules/@baaz/adapter/store/actions/app/asyncActions.js"),s.register(toggleSearch,"toggleSearch","/home/dominic/projects/baazframeworkdoc/node_modules/@baaz/adapter/store/actions/app/asyncActions.js"),s.register(executeSearch,"executeSearch","/home/dominic/projects/baazframeworkdoc/node_modules/@baaz/adapter/store/actions/app/asyncActions.js")),(y="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&y(n)}.call(this,o("3UD+")(n))},NtLt:function(n,r,o){var a=o("3IO0")
n.exports=function toSpaceCase(n){return a(n).replace(/[\W_]+(.|$)/g,(function(n,r){return r?" "+r:""})).trim()}},QCnb:function(n,r,o){"use strict"
n.exports=o("+wdc")},QLaP:function(n,r,o){"use strict"
n.exports=function(n,r,o,a,i,s,y,w){if(!n){var E
if(void 0===r)E=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.")
else{var P=[o,a,i,s,y,w],j=0;(E=new Error(r.replace(/%s/g,(function(){return P[j++]})))).name="Invariant Violation"}throw E.framesToPop=1,E}}},RI0Z:function(n,r,o){"use strict";(function(n){var a
o.d(r,"a",(function(){return errorRecord})),(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(n)
"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature
const i=new WeakMap,{error:s}=console
function errorRecord(n,r,o,a){const{Date:y,Math:w}=r
let E=i.get(n)
if(E)return E
E={error:n,loc:""}
const{constructor:P,message:j,name:_}=n,B=(new y).getSeconds(),q=w.random().toString(36).slice(2,3).toUpperCase()
let $
E.id=(P&&P.name||_)+B+q,a?$=a:(Error.captureStackTrace&&Error.captureStackTrace(n,o),$=n.stack)
const ne=$.indexOf(j)
if(ne>-1){const n=ne+j.length
E.loc=$.slice(n).replace(r.location.origin,"").trim().split("\n")[0]}return i.set(n,E),s("%cUnhandled "+E.id,"background: #CC0000; color: white; padding: 0.1em 0.5em",$),E}var y,w;(y="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(y.register(i,"errorRecords","/home/dominic/projects/baazframeworkdoc/node_modules/@baaz/adapter/util/createErrorRecord.js"),y.register(s,"logError","/home/dominic/projects/baazframeworkdoc/node_modules/@baaz/adapter/util/createErrorRecord.js"),y.register(errorRecord,"errorRecord","/home/dominic/projects/baazframeworkdoc/node_modules/@baaz/adapter/util/createErrorRecord.js")),(w="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&w(n)}).call(this,o("3UD+")(n))},RhW5:function(n,r,o){"use strict"
var a=o("q1tI"),i=o.n(a),s=o("17x9"),y=o.n(s)
function _extends(){return(_extends=Object.assign||function(n){for(var r=1;r<arguments.length;r++){var o=arguments[r]
for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(n[a]=o[a])}return n}).apply(this,arguments)}function _objectWithoutProperties(n,r){if(null==n)return{}
var o,a,i=function _objectWithoutPropertiesLoose(n,r){if(null==n)return{}
var o,a,i={},s=Object.keys(n)
for(a=0;a<s.length;a++)o=s[a],r.indexOf(o)>=0||(i[o]=n[o])
return i}(n,r)
if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n)
for(a=0;a<s.length;a++)o=s[a],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(n,o)&&(i[o]=n[o])}return i}var w=Object(a.forwardRef)((function(n,r){var o=n.color,a=void 0===o?"currentColor":o,s=n.size,y=void 0===s?24:s,w=_objectWithoutProperties(n,["color","size"])
return i.a.createElement("svg",_extends({ref:r,xmlns:"http://www.w3.org/2000/svg",width:y,height:y,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},w),i.a.createElement("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),i.a.createElement("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),i.a.createElement("line",{x1:"3",y1:"18",x2:"21",y2:"18"}))}))
w.propTypes={color:y.a.string,size:y.a.oneOfType([y.a.string,y.a.number])},w.displayName="Menu",r.a=w},SLVX:function(n,r,o){"use strict"
function symbolObservablePonyfill(n){var r,o=n.Symbol
return"function"==typeof o?o.observable?r=o.observable:(r=o("observable"),o.observable=r):r="@@observable",r}o.d(r,"a",(function(){return symbolObservablePonyfill}))},TMfV:function(n,r,o){"use strict";(function(n){var a,i=o("q1tI"),s=o.n(i),y=o("7Zcw"),w=o("oeH4");(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(n)
"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature
const E=[w.a,y.a],AdapterContextProvider=({children:n})=>E.reduceRight((n,r)=>s.a.createElement(r,null,n),n),P=AdapterContextProvider
var j,_
r.a=P,(j="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(j.register(E,"contextProviders","/home/dominic/projects/baazframeworkdoc/node_modules/@baaz/adapter/AdapterContextProvider/adapterContextProvider.js"),j.register(AdapterContextProvider,"AdapterContextProvider","/home/dominic/projects/baazframeworkdoc/node_modules/@baaz/adapter/AdapterContextProvider/adapterContextProvider.js"),j.register(P,"default","/home/dominic/projects/baazframeworkdoc/node_modules/@baaz/adapter/AdapterContextProvider/adapterContextProvider.js")),(_="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&_(n)}).call(this,o("3UD+")(n))},TOwV:function(n,r,o){"use strict"
n.exports=o("qT12")},Ty5D:function(n,r,o){"use strict"
function _inheritsLoose(n,r){n.prototype=Object.create(r.prototype),n.prototype.constructor=n,n.__proto__=r}o.d(r,"a",(function(){return ne})),o.d(r,"b",(function(){return B})),o.d(r,"c",(function(){return oe})),o.d(r,"d",(function(){return _})),o.d(r,"e",(function(){return matchPath})),o.d(r,"f",(function(){return useHistory}))
var a=o("q1tI"),i=o.n(a),s=(o("17x9"),o("LhCv")),y=o("tEiQ"),w=o("9R94")
function _extends(){return(_extends=Object.assign||function(n){for(var r=1;r<arguments.length;r++){var o=arguments[r]
for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(n[a]=o[a])}return n}).apply(this,arguments)}var E=o("8tgM"),P=o.n(E)
o("TOwV")
function _objectWithoutPropertiesLoose(n,r){if(null==n)return{}
var o,a,i={},s=Object.keys(n)
for(a=0;a<s.length;a++)o=s[a],r.indexOf(o)>=0||(i[o]=n[o])
return i}o("2mql")
var j=function createNamedContext(n){var r=Object(y.a)()
return r.displayName=n,r}("Router-History"),_=function createNamedContext(n){var r=Object(y.a)()
return r.displayName=n,r}("Router"),B=function(n){function Router(r){var o
return(o=n.call(this,r)||this).state={location:r.history.location},o._isMounted=!1,o._pendingLocation=null,r.staticContext||(o.unlisten=r.history.listen((function(n){o._isMounted?o.setState({location:n}):o._pendingLocation=n}))),o}_inheritsLoose(Router,n),Router.computeRootMatch=function computeRootMatch(n){return{path:"/",url:"/",params:{},isExact:"/"===n}}
var r=Router.prototype
return r.componentDidMount=function componentDidMount(){this._isMounted=!0,this._pendingLocation&&this.setState({location:this._pendingLocation})},r.componentWillUnmount=function componentWillUnmount(){this.unlisten&&this.unlisten()},r.render=function render(){return i.a.createElement(_.Provider,{value:{history:this.props.history,location:this.state.location,match:Router.computeRootMatch(this.state.location.pathname),staticContext:this.props.staticContext}},i.a.createElement(j.Provider,{children:this.props.children||null,value:this.props.history}))},Router}(i.a.Component)
i.a.Component
i.a.Component
var q={},$=0
function matchPath(n,r){void 0===r&&(r={}),("string"==typeof r||Array.isArray(r))&&(r={path:r})
var o=r,a=o.path,i=o.exact,s=void 0!==i&&i,y=o.strict,w=void 0!==y&&y,E=o.sensitive,j=void 0!==E&&E
return[].concat(a).reduce((function(r,o){if(!o&&""!==o)return null
if(r)return r
var a=function compilePath$1(n,r){var o=""+r.end+r.strict+r.sensitive,a=q[o]||(q[o]={})
if(a[n])return a[n]
var i=[],s={regexp:P()(n,i,r),keys:i}
return $<1e4&&(a[n]=s,$++),s}(o,{end:s,strict:w,sensitive:j}),i=a.regexp,y=a.keys,E=i.exec(n)
if(!E)return null
var _=E[0],B=E.slice(1),ne=n===_
return s&&!ne?null:{path:o,url:"/"===o&&""===_?"/":_,isExact:ne,params:y.reduce((function(n,r,o){return n[r.name]=B[o],n}),{})}}),null)}var ne=function(n){function Route(){return n.apply(this,arguments)||this}return _inheritsLoose(Route,n),Route.prototype.render=function render(){var n=this
return i.a.createElement(_.Consumer,null,(function(r){r||Object(w.a)(!1)
var o=n.props.location||r.location,a=_extends({},r,{location:o,match:n.props.computedMatch?n.props.computedMatch:n.props.path?matchPath(o.pathname,n.props):r.match}),s=n.props,y=s.children,E=s.component,P=s.render
return Array.isArray(y)&&0===y.length&&(y=null),i.a.createElement(_.Provider,{value:a},a.match?y?"function"==typeof y?y(a):y:E?i.a.createElement(E,a):P?P(a):null:"function"==typeof y?y(a):null)}))},Route}(i.a.Component)
function addLeadingSlash(n){return"/"===n.charAt(0)?n:"/"+n}function stripBasename(n,r){if(!n)return r
var o=addLeadingSlash(n)
return 0!==r.pathname.indexOf(o)?r:_extends({},r,{pathname:r.pathname.substr(o.length)})}function createURL(n){return"string"==typeof n?n:Object(s.e)(n)}function staticHandler(n){return function(){Object(w.a)(!1)}}function noop(){}i.a.Component
var oe=function(n){function Switch(){return n.apply(this,arguments)||this}return _inheritsLoose(Switch,n),Switch.prototype.render=function render(){var n=this
return i.a.createElement(_.Consumer,null,(function(r){r||Object(w.a)(!1)
var o,a,s=n.props.location||r.location
return i.a.Children.forEach(n.props.children,(function(n){if(null==a&&i.a.isValidElement(n)){o=n
var y=n.props.path||n.props.from
a=y?matchPath(s.pathname,_extends({},n.props,{path:y})):r.match}})),a?i.a.cloneElement(o,{location:s,computedMatch:a}):null}))},Switch}(i.a.Component)
var ie=i.a.useContext
function useHistory(){return ie(j)}},UDJA:function(n,r,o){"use strict";(function(n){o.d(r,"a",(function(){return WindowSizeContextProvider}))
var a,i=o("q1tI"),s=o.n(i),y=o("m/Yu");(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(n)
var w="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(n){return n}
const E=Object(i.createContext)(),getSize=()=>({innerHeight:window.innerHeight,innerWidth:window.innerWidth,outerHeight:window.outerHeight,outerWidth:window.outerWidth}),useWindowSizeListener=()=>{const[n,r]=Object(i.useState)(getSize())
return Object(y.a)(window,"resize",()=>{r(getSize())}),n}
w(useWindowSizeListener,"useState{[windowSize, setWindowSize](getSize())}\nuseEventListener{}",()=>[y.a])
const WindowSizeContextProvider=n=>{const r=useWindowSizeListener()
return s.a.createElement(E.Provider,{value:r},n.children)}
w(WindowSizeContextProvider,"useWindowSizeListener{windowSize}",()=>[useWindowSizeListener])
const useWindowSize=()=>Object(i.useContext)(E)
var P,j
w(useWindowSize,"useContext{}"),(P="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(P.register(E,"WindowSizeContext","/home/dominic/projects/baazframeworkdoc/node_modules/@baaz/adapter/hooks/useWindowSize.js"),P.register(getSize,"getSize","/home/dominic/projects/baazframeworkdoc/node_modules/@baaz/adapter/hooks/useWindowSize.js"),P.register(useWindowSizeListener,"useWindowSizeListener","/home/dominic/projects/baazframeworkdoc/node_modules/@baaz/adapter/hooks/useWindowSize.js"),P.register(WindowSizeContextProvider,"WindowSizeContextProvider","/home/dominic/projects/baazframeworkdoc/node_modules/@baaz/adapter/hooks/useWindowSize.js"),P.register(useWindowSize,"useWindowSize","/home/dominic/projects/baazframeworkdoc/node_modules/@baaz/adapter/hooks/useWindowSize.js")),(j="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&j(n)}).call(this,o("3UD+")(n))},UfUT:function(n,r,o){"use strict"
r.a=function(n){return"function"==typeof n}},V55S:function(n,r,o){"use strict"
o.d(r,"a",(function(){return get}))
var a=o("1NAo")
function get(n,r){return Object(a.a)(r)?r.get(n):r[n]}},WbBG:function(n,r,o){"use strict"
n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},a5xO:function(n,r,o){"use strict";(function(n){var a,i=o("ANjH");(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(n)
"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature
const s=i.d,y=s
var w,E
r.a=y,(w="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(w.register(s,"composeEnhancers","/home/dominic/projects/baazframeworkdoc/node_modules/@baaz/adapter/util/composeEnhancers.js"),w.register(y,"default","/home/dominic/projects/baazframeworkdoc/node_modules/@baaz/adapter/util/composeEnhancers.js")),(E="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&E(n)}).call(this,o("3UD+")(n))},bCCX:function(n,r,o){"use strict";(function(n,a){var i,s=o("SLVX")
i="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==n?n:a
var y=Object(s.a)(i)
r.a=y}).call(this,o("yLpj"),o("3UD+")(n))},c0mm:function(n,r,o){"use strict"
var a=o("1T5U"),i=o("fUqf"),s=o("V55S")
r.a=function(n){return function flatten(r,o,y,w){var E=void 0===o?{}:o,P=E.namespace,j=void 0===P?a.b:P,_=E.prefix
return void 0===y&&(y={}),void 0===w&&(w=""),Object(i.a)(r).forEach((function(o){var i=function connectPrefix(n){return w||!_||_&&new RegExp("^"+_+j).test(n)?n:""+_+j+n}(function connectNamespace(n){var r
if(!w)return n
var o=n.toString().split(a.a),i=w.split(a.a)
return(r=[]).concat.apply(r,i.map((function(n){return o.map((function(r){return""+n+j+r}))}))).join(a.a)}(o)),E=Object(s.a)(o,r)
n(E)?flatten(E,{namespace:j,prefix:_},y,i):y[i]=E})),y}}},cedE:function(n,r,o){"use strict";(function(n){var a,i=o("e7SQ"),s=o("A0B3")
function _objectSpread(n){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?Object(arguments[r]):{},a=Object.keys(o)
"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(o).filter((function(n){return Object.getOwnPropertyDescriptor(o,n).enumerable})))),a.forEach((function(r){_defineProperty(n,r,o[r])}))}return n}function _defineProperty(n,r,o){return r in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,n}(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(n)
"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature
const y={drawer:null,hasBeenOffline:!navigator.onLine,isOnline:navigator.onLine,overlay:!1,searchOpen:!1,query:"",pending:{}},w={[s.a.toggleDrawer]:(n,{payload:r})=>_objectSpread({},n,{drawer:r,overlay:!!r}),[s.a.toggleSearch]:n=>_objectSpread({},n,{searchOpen:!n.searchOpen}),[s.a.executeSearch]:(n,{payload:r})=>_objectSpread({},n,{query:r}),[s.a.setOnline]:n=>_objectSpread({},n,{isOnline:!0}),[s.a.setOffline]:n=>_objectSpread({},n,{isOnline:!1,hasBeenOffline:!0})},E=Object(i.a)(w,y)
var P,j
r.a=E,(P="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(P.register("app","name","/home/dominic/projects/baazframeworkdoc/node_modules/@baaz/adapter/store/reducers/app.js"),P.register(y,"initialState","/home/dominic/projects/baazframeworkdoc/node_modules/@baaz/adapter/store/reducers/app.js"),P.register(w,"reducerMap","/home/dominic/projects/baazframeworkdoc/node_modules/@baaz/adapter/store/reducers/app.js"),P.register(E,"default","/home/dominic/projects/baazframeworkdoc/node_modules/@baaz/adapter/store/reducers/app.js")),(j="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&j(n)}).call(this,o("3UD+")(n))},e7SQ:function(n,r,o){"use strict"
o.d(r,"a",(function(){return handleActions}))
var es=function(){for(var n=arguments.length,r=Array(n),o=0;o<n;o++)r[o]=arguments[o]
var a="function"!=typeof r[r.length-1]&&r.pop(),i=r
if(void 0===a)throw new TypeError("The initial state may not be undefined. If you do not want to set a value for this reducer, you can use null instead of undefined.")
return function(n,r){for(var o=arguments.length,s=Array(o>2?o-2:0),y=2;y<o;y++)s[y-2]=arguments[y]
var w=void 0===n,E=void 0===r
return w&&E&&a?a:i.reduce((function(n,o){return o.apply(void 0,[n,r].concat(s))}),w&&!E&&a?a:n)}},a=o("QLaP"),i=o.n(a),s=o("w/wI"),y=o("1NAo"),w=o("fUqf")
var E=o("c0mm"),P=Object(E.a)((function(n){return(Object(s.a)(n)||Object(y.a)(n))&&!function hasGeneratorInterface(n){var r=Object(w.a)(n),o=r.every((function(n){return"next"===n||"throw"===n}))
return r.length&&r.length<=2&&o}(n)})),j=o("UfUT"),_=o("AS+4"),B=o("xZ5c"),utils_toString=function(n){return n.toString()},q=o("1T5U")
var $=o("V55S")
function handleActions(n,r,o){void 0===o&&(o={}),i()(Object(s.a)(n)||Object(y.a)(n),"Expected handlers to be a plain object.")
var a=P(n,o),E=Object(w.a)(a).map((function(n){return function handleAction(n,r,o){void 0===r&&(r=_.a)
var a=utils_toString(n).split(q.a)
i()(!(void 0===o),"defaultState for reducer handling "+a.join(", ")+" should be defined"),i()(Object(j.a)(r)||Object(s.a)(r),"Expected reducer to be a function or object with next and throw reducers")
var y=Object(j.a)(r)?[r,r]:[r.next,r.throw].map((function(n){return Object(B.a)(n)?_.a:n})),w=y[0],E=y[1]
return function(n,r){void 0===n&&(n=o)
var i=r.type
return i&&-1!==a.indexOf(utils_toString(i))?(!0===r.error?E:w)(n,r):n}}(n,Object($.a)(n,a),r)})),ne=es.apply(void 0,E.concat([r]))
return function(n,o){return void 0===n&&(n=r),ne(n,o)}}},fUqf:function(n,r,o){"use strict"
o.d(r,"a",(function(){return ownKeys}))
var a=o("1NAo")
function ownKeys(n){if(Object(a.a)(n))return Array.from(n.keys())
if("undefined"!=typeof Reflect&&"function"==typeof Reflect.ownKeys)return Reflect.ownKeys(n)
var r=Object.getOwnPropertyNames(n)
return"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n))),r}},i8i4:function(n,r,o){"use strict"
!function checkDCE(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE){0
try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE)}catch(n){}}}(),n.exports=o("yl30")},"m/Yu":function(n,r,o){"use strict";(function(n){o.d(r,"a",(function(){return useEventListener}))
var a,i=o("q1tI");(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(n)
var s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(n){return n}
const useEventListener=(n,r,o,...a)=>{Object(i.useEffect)(()=>(n.addEventListener(r,o,...a),()=>{n.removeEventListener(r,o,...a)}),[o,a,n,r])}
var y,w
s(useEventListener,"useEffect{}"),(y="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&y.register(useEventListener,"useEventListener","/home/dominic/projects/baazframeworkdoc/node_modules/@baaz/adapter/hooks/useEventListener.js"),(w="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&w(n)}).call(this,o("3UD+")(n))},mdnA:function(n,r,o){"use strict"
var a=o("q1tI"),i=o.n(a),s=o("17x9"),y=o.n(s)
function _extends(){return(_extends=Object.assign||function(n){for(var r=1;r<arguments.length;r++){var o=arguments[r]
for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(n[a]=o[a])}return n}).apply(this,arguments)}function _objectWithoutProperties(n,r){if(null==n)return{}
var o,a,i=function _objectWithoutPropertiesLoose(n,r){if(null==n)return{}
var o,a,i={},s=Object.keys(n)
for(a=0;a<s.length;a++)o=s[a],r.indexOf(o)>=0||(i[o]=n[o])
return i}(n,r)
if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n)
for(a=0;a<s.length;a++)o=s[a],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(n,o)&&(i[o]=n[o])}return i}var w=Object(a.forwardRef)((function(n,r){var o=n.color,a=void 0===o?"currentColor":o,s=n.size,y=void 0===s?24:s,w=_objectWithoutProperties(n,["color","size"])
return i.a.createElement("svg",_extends({ref:r,xmlns:"http://www.w3.org/2000/svg",width:y,height:y,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},w),i.a.createElement("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),i.a.createElement("polyline",{points:"22,6 12,13 2,6"}))}))
w.propTypes={color:y.a.string,size:y.a.oneOfType([y.a.string,y.a.number])},w.displayName="Mail",r.a=w},oeH4:function(n,r,o){"use strict";(function(n){o.d(r,"b",(function(){return useErrorContext}))
var a,i=o("q1tI"),s=o.n(i),y=o("/MKj"),w=o("A0B3");(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(n)
var E="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(n){return n}
const P=Object(i.createContext)(),ErrorContextProvider=n=>{const{children:r,markErrorHandled:o,unhandledErrors:a}=n,y=Object(i.useMemo)(()=>({markErrorHandled:o}),[o]),w=Object(i.useMemo)(()=>[a,y],[y,a])
return s.a.createElement(P.Provider,{value:w},r)}
E(ErrorContextProvider,"useMemo{errorApi}\nuseMemo{contextValue}")
const mapStateToProps=({unhandledErrors:n})=>({unhandledErrors:n}),j={markErrorHandled:w.a.markErrorHandled},_=Object(y.b)(mapStateToProps,j)(ErrorContextProvider)
r.a=_
const useErrorContext=()=>Object(i.useContext)(P)
var B,q
E(useErrorContext,"useContext{}"),(B="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(B.register(P,"ErrorContext","/home/dominic/projects/baazframeworkdoc/node_modules/@baaz/adapter/context/unhandledErrors.js"),B.register(ErrorContextProvider,"ErrorContextProvider","/home/dominic/projects/baazframeworkdoc/node_modules/@baaz/adapter/context/unhandledErrors.js"),B.register(mapStateToProps,"mapStateToProps","/home/dominic/projects/baazframeworkdoc/node_modules/@baaz/adapter/context/unhandledErrors.js"),B.register(j,"mapDispatchToProps","/home/dominic/projects/baazframeworkdoc/node_modules/@baaz/adapter/context/unhandledErrors.js"),B.register(useErrorContext,"useErrorContext","/home/dominic/projects/baazframeworkdoc/node_modules/@baaz/adapter/context/unhandledErrors.js"),B.register(_,"default","/home/dominic/projects/baazframeworkdoc/node_modules/@baaz/adapter/context/unhandledErrors.js")),(q="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&q(n)}).call(this,o("3UD+")(n))},q1tI:function(n,r,o){"use strict"
n.exports=o("viRO")},qT12:function(n,r,o){"use strict"
var a="function"==typeof Symbol&&Symbol.for,i=a?Symbol.for("react.element"):60103,s=a?Symbol.for("react.portal"):60106,y=a?Symbol.for("react.fragment"):60107,w=a?Symbol.for("react.strict_mode"):60108,E=a?Symbol.for("react.profiler"):60114,P=a?Symbol.for("react.provider"):60109,j=a?Symbol.for("react.context"):60110,_=a?Symbol.for("react.async_mode"):60111,B=a?Symbol.for("react.concurrent_mode"):60111,q=a?Symbol.for("react.forward_ref"):60112,$=a?Symbol.for("react.suspense"):60113,ne=a?Symbol.for("react.suspense_list"):60120,oe=a?Symbol.for("react.memo"):60115,ie=a?Symbol.for("react.lazy"):60116,le=a?Symbol.for("react.block"):60121,se=a?Symbol.for("react.fundamental"):60117,pe=a?Symbol.for("react.responder"):60118,he=a?Symbol.for("react.scope"):60119
function z(n){if("object"==typeof n&&null!==n){var r=n.$$typeof
switch(r){case i:switch(n=n.type){case _:case B:case y:case E:case w:case $:return n
default:switch(n=n&&n.$$typeof){case j:case q:case ie:case oe:case P:return n
default:return r}}case s:return r}}}function A(n){return z(n)===B}r.AsyncMode=_,r.ConcurrentMode=B,r.ContextConsumer=j,r.ContextProvider=P,r.Element=i,r.ForwardRef=q,r.Fragment=y,r.Lazy=ie,r.Memo=oe,r.Portal=s,r.Profiler=E,r.StrictMode=w,r.Suspense=$,r.isAsyncMode=function(n){return A(n)||z(n)===_},r.isConcurrentMode=A,r.isContextConsumer=function(n){return z(n)===j},r.isContextProvider=function(n){return z(n)===P},r.isElement=function(n){return"object"==typeof n&&null!==n&&n.$$typeof===i},r.isForwardRef=function(n){return z(n)===q},r.isFragment=function(n){return z(n)===y},r.isLazy=function(n){return z(n)===ie},r.isMemo=function(n){return z(n)===oe},r.isPortal=function(n){return z(n)===s},r.isProfiler=function(n){return z(n)===E},r.isStrictMode=function(n){return z(n)===w},r.isSuspense=function(n){return z(n)===$},r.isValidElementType=function(n){return"string"==typeof n||"function"==typeof n||n===y||n===B||n===E||n===w||n===$||n===ne||"object"==typeof n&&null!==n&&(n.$$typeof===ie||n.$$typeof===oe||n.$$typeof===P||n.$$typeof===j||n.$$typeof===q||n.$$typeof===se||n.$$typeof===pe||n.$$typeof===he||n.$$typeof===le)},r.typeOf=z},sINF:function(n,r,o){"use strict"
function createThunkMiddleware(n){return function(r){var o=r.dispatch,a=r.getState
return function(r){return function(i){return"function"==typeof i?i(o,a,n):r(i)}}}}var a=createThunkMiddleware()
a.withExtraArgument=createThunkMiddleware,r.a=a},sfF0:function(n,r,o){"use strict"
var a=o("q1tI"),i=o.n(a),s=o("17x9"),y=o.n(s)
function _extends(){return(_extends=Object.assign||function(n){for(var r=1;r<arguments.length;r++){var o=arguments[r]
for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(n[a]=o[a])}return n}).apply(this,arguments)}function _objectWithoutProperties(n,r){if(null==n)return{}
var o,a,i=function _objectWithoutPropertiesLoose(n,r){if(null==n)return{}
var o,a,i={},s=Object.keys(n)
for(a=0;a<s.length;a++)o=s[a],r.indexOf(o)>=0||(i[o]=n[o])
return i}(n,r)
if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n)
for(a=0;a<s.length;a++)o=s[a],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(n,o)&&(i[o]=n[o])}return i}var w=Object(a.forwardRef)((function(n,r){var o=n.color,a=void 0===o?"currentColor":o,s=n.size,y=void 0===s?24:s,w=_objectWithoutProperties(n,["color","size"])
return i.a.createElement("svg",_extends({ref:r,xmlns:"http://www.w3.org/2000/svg",width:y,height:y,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},w),i.a.createElement("path",{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"}),i.a.createElement("path",{d:"M13.73 21a2 2 0 0 1-3.46 0"}))}))
w.propTypes={color:y.a.string,size:y.a.oneOfType([y.a.string,y.a.number])},w.displayName="Bell",r.a=w},tEiQ:function(n,r,o){"use strict";(function(n){var a=o("q1tI"),i=o.n(a),s=o("Jhtv"),y=o("17x9"),w=o.n(y),E="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n?n:{}
function createEventEmitter(n){var r=[]
return{on:function on(n){r.push(n)},off:function off(n){r=r.filter((function(r){return r!==n}))},get:function get(){return n},set:function set(o,a){n=o,r.forEach((function(r){return r(n,a)}))}}}var P=i.a.createContext||function createReactContext(n,r){var o,i,y="__create-react-context-"+function getUniqueId(){var n="__global_unique_id__"
return E[n]=(E[n]||0)+1}()+"__",P=function(n){function Provider(){var r
return(r=n.apply(this,arguments)||this).emitter=createEventEmitter(r.props.value),r}Object(s.a)(Provider,n)
var o=Provider.prototype
return o.getChildContext=function getChildContext(){var n
return(n={})[y]=this.emitter,n},o.componentWillReceiveProps=function componentWillReceiveProps(n){if(this.props.value!==n.value){var o,a=this.props.value,i=n.value
!function objectIs(n,r){return n===r?0!==n||1/n==1/r:n!=n&&r!=r}(a,i)?(o="function"==typeof r?r(a,i):1073741823,0!==(o|=0)&&this.emitter.set(n.value,o)):o=0}},o.render=function render(){return this.props.children},Provider}(a.Component)
P.childContextTypes=((o={})[y]=w.a.object.isRequired,o)
var j=function(r){function Consumer(){var n
return(n=r.apply(this,arguments)||this).state={value:n.getValue()},n.onUpdate=function(r,o){0!=((0|n.observedBits)&o)&&n.setState({value:n.getValue()})},n}Object(s.a)(Consumer,r)
var o=Consumer.prototype
return o.componentWillReceiveProps=function componentWillReceiveProps(n){var r=n.observedBits
this.observedBits=null==r?1073741823:r},o.componentDidMount=function componentDidMount(){this.context[y]&&this.context[y].on(this.onUpdate)
var n=this.props.observedBits
this.observedBits=null==n?1073741823:n},o.componentWillUnmount=function componentWillUnmount(){this.context[y]&&this.context[y].off(this.onUpdate)},o.getValue=function getValue(){return this.context[y]?this.context[y].get():n},o.render=function render(){return function onlyChild(n){return Array.isArray(n)?n[0]:n}(this.props.children)(this.state.value)},Consumer}(a.Component)
return j.contextTypes=((i={})[y]=w.a.object,i),{Provider:P,Consumer:j}}
r.a=P}).call(this,o("yLpj"))},viRO:function(n,r,o){"use strict"
var a=o("MgzW"),i="function"==typeof Symbol&&Symbol.for,s=i?Symbol.for("react.element"):60103,y=i?Symbol.for("react.portal"):60106,w=i?Symbol.for("react.fragment"):60107,E=i?Symbol.for("react.strict_mode"):60108,P=i?Symbol.for("react.profiler"):60114,j=i?Symbol.for("react.provider"):60109,_=i?Symbol.for("react.context"):60110,B=i?Symbol.for("react.forward_ref"):60112,q=i?Symbol.for("react.suspense"):60113,$=i?Symbol.for("react.memo"):60115,ne=i?Symbol.for("react.lazy"):60116,oe="function"==typeof Symbol&&Symbol.iterator
function C(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o])
return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ie={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},le={}
function F(n,r,o){this.props=n,this.context=r,this.refs=le,this.updater=o||ie}function G(){}function H(n,r,o){this.props=n,this.context=r,this.refs=le,this.updater=o||ie}F.prototype.isReactComponent={},F.prototype.setState=function(n,r){if("object"!=typeof n&&"function"!=typeof n&&null!=n)throw Error(C(85))
this.updater.enqueueSetState(this,n,r,"setState")},F.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")},G.prototype=F.prototype
var se=H.prototype=new G
se.constructor=H,a(se,F.prototype),se.isPureReactComponent=!0
var pe={current:null},he=Object.prototype.hasOwnProperty,me={key:!0,ref:!0,__self:!0,__source:!0}
function M(n,r,o){var a,i={},y=null,w=null
if(null!=r)for(a in void 0!==r.ref&&(w=r.ref),void 0!==r.key&&(y=""+r.key),r)he.call(r,a)&&!me.hasOwnProperty(a)&&(i[a]=r[a])
var E=arguments.length-2
if(1===E)i.children=o
else if(1<E){for(var P=Array(E),j=0;j<E;j++)P[j]=arguments[j+2]
i.children=P}if(n&&n.defaultProps)for(a in E=n.defaultProps)void 0===i[a]&&(i[a]=E[a])
return{$$typeof:s,type:n,key:y,ref:w,props:i,_owner:pe.current}}function O(n){return"object"==typeof n&&null!==n&&n.$$typeof===s}var ge=/\/+/g,ve=[]
function R(n,r,o,a){if(ve.length){var i=ve.pop()
return i.result=n,i.keyPrefix=r,i.func=o,i.context=a,i.count=0,i}return{result:n,keyPrefix:r,func:o,context:a,count:0}}function S(n){n.result=null,n.keyPrefix=null,n.func=null,n.context=null,n.count=0,10>ve.length&&ve.push(n)}function V(n,r,o){return null==n?0:function T(n,r,o,a){var i=typeof n
"undefined"!==i&&"boolean"!==i||(n=null)
var w=!1
if(null===n)w=!0
else switch(i){case"string":case"number":w=!0
break
case"object":switch(n.$$typeof){case s:case y:w=!0}}if(w)return o(a,n,""===r?"."+U(n,0):r),1
if(w=0,r=""===r?".":r+":",Array.isArray(n))for(var E=0;E<n.length;E++){var P=r+U(i=n[E],E)
w+=T(i,P,o,a)}else if(null===n||"object"!=typeof n?P=null:P="function"==typeof(P=oe&&n[oe]||n["@@iterator"])?P:null,"function"==typeof P)for(n=P.call(n),E=0;!(i=n.next()).done;)w+=T(i=i.value,P=r+U(i,E++),o,a)
else if("object"===i)throw o=""+n,Error(C(31,"[object Object]"===o?"object with keys {"+Object.keys(n).join(", ")+"}":o,""))
return w}(n,"",r,o)}function U(n,r){return"object"==typeof n&&null!==n&&null!=n.key?function escape(n){var r={"=":"=0",":":"=2"}
return"$"+(""+n).replace(/[=:]/g,(function(n){return r[n]}))}(n.key):r.toString(36)}function W(n,r){n.func.call(n.context,r,n.count++)}function aa(n,r,o){var a=n.result,i=n.keyPrefix
n=n.func.call(n.context,r,n.count++),Array.isArray(n)?X(n,a,o,(function(n){return n})):null!=n&&(O(n)&&(n=function N(n,r){return{$$typeof:s,type:n.type,key:r,ref:n.ref,props:n.props,_owner:n._owner}}(n,i+(!n.key||r&&r.key===n.key?"":(""+n.key).replace(ge,"$&/")+"/")+o)),a.push(n))}function X(n,r,o,a,i){var s=""
null!=o&&(s=(""+o).replace(ge,"$&/")+"/"),V(n,aa,r=R(r,s,a,i)),S(r)}var ye={current:null}
function Z(){var n=ye.current
if(null===n)throw Error(C(321))
return n}var we={ReactCurrentDispatcher:ye,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:pe,IsSomeRendererActing:{current:!1},assign:a}
r.Children={map:function(n,r,o){if(null==n)return n
var a=[]
return X(n,a,null,r,o),a},forEach:function(n,r,o){if(null==n)return n
V(n,W,r=R(null,null,r,o)),S(r)},count:function(n){return V(n,(function(){return null}),null)},toArray:function(n){var r=[]
return X(n,r,null,(function(n){return n})),r},only:function(n){if(!O(n))throw Error(C(143))
return n}},r.Component=F,r.Fragment=w,r.Profiler=P,r.PureComponent=H,r.StrictMode=E,r.Suspense=q,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=we,r.cloneElement=function(n,r,o){if(null==n)throw Error(C(267,n))
var i=a({},n.props),y=n.key,w=n.ref,E=n._owner
if(null!=r){if(void 0!==r.ref&&(w=r.ref,E=pe.current),void 0!==r.key&&(y=""+r.key),n.type&&n.type.defaultProps)var P=n.type.defaultProps
for(j in r)he.call(r,j)&&!me.hasOwnProperty(j)&&(i[j]=void 0===r[j]&&void 0!==P?P[j]:r[j])}var j=arguments.length-2
if(1===j)i.children=o
else if(1<j){P=Array(j)
for(var _=0;_<j;_++)P[_]=arguments[_+2]
i.children=P}return{$$typeof:s,type:n.type,key:y,ref:w,props:i,_owner:E}},r.createContext=function(n,r){return void 0===r&&(r=null),(n={$$typeof:_,_calculateChangedBits:r,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:j,_context:n},n.Consumer=n},r.createElement=M,r.createFactory=function(n){var r=M.bind(null,n)
return r.type=n,r},r.createRef=function(){return{current:null}},r.forwardRef=function(n){return{$$typeof:B,render:n}},r.isValidElement=O,r.lazy=function(n){return{$$typeof:ne,_ctor:n,_status:-1,_result:null}},r.memo=function(n,r){return{$$typeof:$,type:n,compare:void 0===r?null:r}},r.useCallback=function(n,r){return Z().useCallback(n,r)},r.useContext=function(n,r){return Z().useContext(n,r)},r.useDebugValue=function(){},r.useEffect=function(n,r){return Z().useEffect(n,r)},r.useImperativeHandle=function(n,r,o){return Z().useImperativeHandle(n,r,o)},r.useLayoutEffect=function(n,r){return Z().useLayoutEffect(n,r)},r.useMemo=function(n,r){return Z().useMemo(n,r)},r.useReducer=function(n,r,o){return Z().useReducer(n,r,o)},r.useRef=function(n){return Z().useRef(n)},r.useState=function(n){return Z().useState(n)},r.version="16.13.1"},"w/wI":function(n,r,o){"use strict"
r.a=function(n){if("object"!=typeof n||null===n)return!1
for(var r=n;null!==Object.getPrototypeOf(r);)r=Object.getPrototypeOf(r)
return Object.getPrototypeOf(n)===r}},w3KC:function(n,r,o){"use strict";(function(n){o.d(r,"a",(function(){return createErrorHandlingStore}))
var a,i=o("A0B3"),s=o("RI0Z")
function _objectWithoutProperties(n,r){if(null==n)return{}
var o,a,i=function _objectWithoutPropertiesLoose(n,r){if(null==n)return{}
var o,a,i={},s=Object.keys(n)
for(a=0;a<s.length;a++)o=s[a],r.indexOf(o)>=0||(i[o]=n[o])
return i}(n,r)
if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n)
for(a=0;a<s.length;a++)o=s[a],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(n,o)&&(i[o]=n[o])}return i}function _objectSpread(n){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?Object(arguments[r]):{},a=Object.keys(o)
"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(o).filter((function(n){return Object.getOwnPropertyDescriptor(o,n).enumerable})))),a.forEach((function(r){_defineProperty(n,r,o[r])}))}return n}function _defineProperty(n,r,o){return r in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,n}(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(n)
"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature
const y=i.a.markErrorHandled.toString()
function sliceHandledError(n,r){const o=Object.entries(n).find(([,n])=>"object"==typeof n&&Object.values(n).includes(r))
if(o)return o[0]}function errorReducer(n,r){const{unhandledErrors:o}=n,{type:a,payload:i}=r
let w
if(r.error instanceof Error)w=r.error
else{if(!(i instanceof Error))return n
w=i}if(a===y){return _objectSpread({},n,{unhandledErrors:o.filter(n=>n.error!==w)})}if(!sliceHandledError(n,w)){return _objectSpread({},n,{unhandledErrors:[...new Set(o).add(Object(s.a)(w,window,this))]})}return n}function wrapReducerWithErrorHandling(n){return function errorHandlingRootReducer(r={},o){const{unhandledErrors:a=[]}=r,i=_objectWithoutProperties(r,["unhandledErrors"]),s=n(i,o)
return s.unhandledErrors=a,errorReducer.call(errorHandlingRootReducer,s,o)}}function createErrorHandlingStore(n){return(r,...o)=>n(wrapReducerWithErrorHandling(r),...o)}var w,E;(w="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(w.register(y,"APP_DISMISS_ERROR","/home/dominic/projects/baazframeworkdoc/node_modules/@baaz/adapter/store/enhancers/errorHandler.js"),w.register(sliceHandledError,"sliceHandledError","/home/dominic/projects/baazframeworkdoc/node_modules/@baaz/adapter/store/enhancers/errorHandler.js"),w.register(errorReducer,"errorReducer","/home/dominic/projects/baazframeworkdoc/node_modules/@baaz/adapter/store/enhancers/errorHandler.js"),w.register(wrapReducerWithErrorHandling,"wrapReducerWithErrorHandling","/home/dominic/projects/baazframeworkdoc/node_modules/@baaz/adapter/store/enhancers/errorHandler.js"),w.register(createErrorHandlingStore,"createErrorHandlingStore","/home/dominic/projects/baazframeworkdoc/node_modules/@baaz/adapter/store/enhancers/errorHandler.js")),(E="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&E(n)}).call(this,o("3UD+")(n))},wHH0:function(n,r,o){"use strict"
var a=o("q1tI"),i=o.n(a),s=o("17x9"),y=o.n(s)
function _extends(){return(_extends=Object.assign||function(n){for(var r=1;r<arguments.length;r++){var o=arguments[r]
for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(n[a]=o[a])}return n}).apply(this,arguments)}function _objectWithoutProperties(n,r){if(null==n)return{}
var o,a,i=function _objectWithoutPropertiesLoose(n,r){if(null==n)return{}
var o,a,i={},s=Object.keys(n)
for(a=0;a<s.length;a++)o=s[a],r.indexOf(o)>=0||(i[o]=n[o])
return i}(n,r)
if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n)
for(a=0;a<s.length;a++)o=s[a],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(n,o)&&(i[o]=n[o])}return i}var w=Object(a.forwardRef)((function(n,r){var o=n.color,a=void 0===o?"currentColor":o,s=n.size,y=void 0===s?24:s,w=_objectWithoutProperties(n,["color","size"])
return i.a.createElement("svg",_extends({ref:r,xmlns:"http://www.w3.org/2000/svg",width:y,height:y,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},w),i.a.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),i.a.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"}))}))
w.propTypes={color:y.a.string,size:y.a.oneOfType([y.a.string,y.a.number])},w.displayName="X",r.a=w},xEj4:function(n,r,o){"use strict";(function(n){var a,i=o("w3KC"),s=o("INls"),y=o("a5xO");(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(n)
"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature
const w=Object(y.a)(s.a,i.a),E=w
var P,j
r.a=E,(P="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(P.register(w,"enhancer","/home/dominic/projects/baazframeworkdoc/node_modules/@baaz/adapter/store/enhancers/index.js"),P.register(E,"default","/home/dominic/projects/baazframeworkdoc/node_modules/@baaz/adapter/store/enhancers/index.js")),(j="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&j(n)}).call(this,o("3UD+")(n))},xZ5c:function(n,r,o){"use strict"
r.a=function(n){return null==n}},yLpj:function(n,r){var o
o=function(){return this}()
try{o=o||new Function("return this")()}catch(n){"object"==typeof window&&(o=window)}n.exports=o},yl30:function(n,r,o){"use strict"
var a=o("q1tI"),i=o("MgzW"),s=o("QCnb")
function u(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o])
return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!a)throw Error(u(227))
function ba(n,r,o,a,i,s,y,w,E){var P=Array.prototype.slice.call(arguments,3)
try{r.apply(o,P)}catch(n){this.onError(n)}}var y=!1,w=null,E=!1,P=null,j={onError:function(n){y=!0,w=n}}
function ja(n,r,o,a,i,s,E,P,_){y=!1,w=null,ba.apply(j,arguments)}var _=null,B=null,q=null
function oa(n,r,o){var a=n.type||"unknown-event"
n.currentTarget=q(o),function ka(n,r,o,a,i,s,j,_,B){if(ja.apply(this,arguments),y){if(!y)throw Error(u(198))
var q=w
y=!1,w=null,E||(E=!0,P=q)}}(a,r,void 0,n),n.currentTarget=null}var $=null,ne={}
function ra(){if($)for(var n in ne){var r=ne[n],o=$.indexOf(n)
if(!(-1<o))throw Error(u(96,n))
if(!oe[o]){if(!r.extractEvents)throw Error(u(97,n))
for(var a in oe[o]=r,o=r.eventTypes){var i=void 0,s=o[a],y=r,w=a
if(ie.hasOwnProperty(w))throw Error(u(99,w))
ie[w]=s
var E=s.phasedRegistrationNames
if(E){for(i in E)E.hasOwnProperty(i)&&ua(E[i],y,w)
i=!0}else s.registrationName?(ua(s.registrationName,y,w),i=!0):i=!1
if(!i)throw Error(u(98,a,n))}}}}function ua(n,r,o){if(le[n])throw Error(u(100,n))
le[n]=r,se[n]=r.eventTypes[o].dependencies}var oe=[],ie={},le={},se={}
function xa(n){var r,o=!1
for(r in n)if(n.hasOwnProperty(r)){var a=n[r]
if(!ne.hasOwnProperty(r)||ne[r]!==a){if(ne[r])throw Error(u(102,r))
ne[r]=a,o=!0}}o&&ra()}var pe=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement),he=null,me=null,ge=null
function Ca(n){if(n=B(n)){if("function"!=typeof he)throw Error(u(280))
var r=n.stateNode
r&&(r=_(r),he(n.stateNode,n.type,r))}}function Da(n){me?ge?ge.push(n):ge=[n]:me=n}function Ea(){if(me){var n=me,r=ge
if(ge=me=null,Ca(n),r)for(n=0;n<r.length;n++)Ca(r[n])}}function Fa(n,r){return n(r)}function Ga(n,r,o,a,i){return n(r,o,a,i)}function Ha(){}var ve=Fa,ye=!1,we=!1
function La(){null===me&&null===ge||(Ha(),Ea())}function Ma(n,r,o){if(we)return n(r,o)
we=!0
try{return ve(n,r,o)}finally{we=!1,La()}}var ke=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Se=Object.prototype.hasOwnProperty,Te={},Oe={}
function v(n,r,o,a,i,s){this.acceptsBooleans=2===r||3===r||4===r,this.attributeName=a,this.attributeNamespace=i,this.mustUseProperty=o,this.propertyName=n,this.type=r,this.sanitizeURL=s}var je={}
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(n){je[n]=new v(n,0,!1,n,null,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(n){var r=n[0]
je[r]=new v(r,1,!1,n[1],null,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(n){je[n]=new v(n,2,!1,n.toLowerCase(),null,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(n){je[n]=new v(n,2,!1,n,null,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(n){je[n]=new v(n,3,!1,n.toLowerCase(),null,!1)})),["checked","multiple","muted","selected"].forEach((function(n){je[n]=new v(n,3,!0,n,null,!1)})),["capture","download"].forEach((function(n){je[n]=new v(n,4,!1,n,null,!1)})),["cols","rows","size","span"].forEach((function(n){je[n]=new v(n,6,!1,n,null,!1)})),["rowSpan","start"].forEach((function(n){je[n]=new v(n,5,!1,n.toLowerCase(),null,!1)}))
var _e=/[\-:]([a-z])/g
function Va(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(n){var r=n.replace(_e,Va)
je[r]=new v(r,1,!1,n,null,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(n){var r=n.replace(_e,Va)
je[r]=new v(r,1,!1,n,"http://www.w3.org/1999/xlink",!1)})),["xml:base","xml:lang","xml:space"].forEach((function(n){var r=n.replace(_e,Va)
je[r]=new v(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1)})),["tabIndex","crossOrigin"].forEach((function(n){je[n]=new v(n,1,!1,n.toLowerCase(),null,!1)})),je.xlinkHref=new v("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0),["src","href","action","formAction"].forEach((function(n){je[n]=new v(n,1,!1,n.toLowerCase(),null,!0)}))
var Me=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
function Xa(n,r,o,a){var i=je.hasOwnProperty(r)?je[r]:null;(null!==i?0===i.type:!a&&(2<r.length&&("o"===r[0]||"O"===r[0])&&("n"===r[1]||"N"===r[1])))||(function Ta(n,r,o,a){if(null==r||function Sa(n,r,o,a){if(null!==o&&0===o.type)return!1
switch(typeof r){case"function":case"symbol":return!0
case"boolean":return!a&&(null!==o?!o.acceptsBooleans:"data-"!==(n=n.toLowerCase().slice(0,5))&&"aria-"!==n)
default:return!1}}(n,r,o,a))return!0
if(a)return!1
if(null!==o)switch(o.type){case 3:return!r
case 4:return!1===r
case 5:return isNaN(r)
case 6:return isNaN(r)||1>r}return!1}(r,o,i,a)&&(o=null),a||null===i?function Ra(n){return!!Se.call(Oe,n)||!Se.call(Te,n)&&(ke.test(n)?Oe[n]=!0:(Te[n]=!0,!1))}(r)&&(null===o?n.removeAttribute(r):n.setAttribute(r,""+o)):i.mustUseProperty?n[i.propertyName]=null===o?3!==i.type&&"":o:(r=i.attributeName,a=i.attributeNamespace,null===o?n.removeAttribute(r):(o=3===(i=i.type)||4===i&&!0===o?"":""+o,a?n.setAttributeNS(a,r,o):n.setAttribute(r,o))))}Me.hasOwnProperty("ReactCurrentDispatcher")||(Me.ReactCurrentDispatcher={current:null}),Me.hasOwnProperty("ReactCurrentBatchConfig")||(Me.ReactCurrentBatchConfig={suspense:null})
var Re=/^(.*)[\\\/]/,Ne="function"==typeof Symbol&&Symbol.for,Ae=Ne?Symbol.for("react.element"):60103,Fe=Ne?Symbol.for("react.portal"):60106,Ue=Ne?Symbol.for("react.fragment"):60107,We=Ne?Symbol.for("react.strict_mode"):60108,Be=Ne?Symbol.for("react.profiler"):60114,Ve=Ne?Symbol.for("react.provider"):60109,$e=Ne?Symbol.for("react.context"):60110,Xe=Ne?Symbol.for("react.concurrent_mode"):60111,Ye=Ne?Symbol.for("react.forward_ref"):60112,et=Ne?Symbol.for("react.suspense"):60113,tt=Ne?Symbol.for("react.suspense_list"):60120,nt=Ne?Symbol.for("react.memo"):60115,rt=Ne?Symbol.for("react.lazy"):60116,ot=Ne?Symbol.for("react.block"):60121,at="function"==typeof Symbol&&Symbol.iterator
function nb(n){return null===n||"object"!=typeof n?null:"function"==typeof(n=at&&n[at]||n["@@iterator"])?n:null}function pb(n){if(null==n)return null
if("function"==typeof n)return n.displayName||n.name||null
if("string"==typeof n)return n
switch(n){case Ue:return"Fragment"
case Fe:return"Portal"
case Be:return"Profiler"
case We:return"StrictMode"
case et:return"Suspense"
case tt:return"SuspenseList"}if("object"==typeof n)switch(n.$$typeof){case $e:return"Context.Consumer"
case Ve:return"Context.Provider"
case Ye:var r=n.render
return r=r.displayName||r.name||"",n.displayName||(""!==r?"ForwardRef("+r+")":"ForwardRef")
case nt:return pb(n.type)
case ot:return pb(n.render)
case rt:if(n=1===n._status?n._result:null)return pb(n)}return null}function qb(n){var r=""
do{e:switch(n.tag){case 3:case 4:case 6:case 7:case 10:case 9:var o=""
break e
default:var a=n._debugOwner,i=n._debugSource,s=pb(n.type)
o=null,a&&(o=pb(a.type)),a=s,s="",i?s=" (at "+i.fileName.replace(Re,"")+":"+i.lineNumber+")":o&&(s=" (created by "+o+")"),o="\n    in "+(a||"Unknown")+s}r+=o,n=n.return}while(n)
return r}function rb(n){switch(typeof n){case"boolean":case"number":case"object":case"string":case"undefined":return n
default:return""}}function sb(n){var r=n.type
return(n=n.nodeName)&&"input"===n.toLowerCase()&&("checkbox"===r||"radio"===r)}function xb(n){n._valueTracker||(n._valueTracker=function tb(n){var r=sb(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),a=""+n[r]
if(!n.hasOwnProperty(r)&&void 0!==o&&"function"==typeof o.get&&"function"==typeof o.set){var i=o.get,s=o.set
return Object.defineProperty(n,r,{configurable:!0,get:function(){return i.call(this)},set:function(n){a=""+n,s.call(this,n)}}),Object.defineProperty(n,r,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(n){a=""+n},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}(n))}function yb(n){if(!n)return!1
var r=n._valueTracker
if(!r)return!0
var o=r.getValue(),a=""
return n&&(a=sb(n)?n.checked?"true":"false":n.value),(n=a)!==o&&(r.setValue(n),!0)}function zb(n,r){var o=r.checked
return i({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=o?o:n._wrapperState.initialChecked})}function Ab(n,r){var o=null==r.defaultValue?"":r.defaultValue,a=null!=r.checked?r.checked:r.defaultChecked
o=rb(null!=r.value?r.value:o),n._wrapperState={initialChecked:a,initialValue:o,controlled:"checkbox"===r.type||"radio"===r.type?null!=r.checked:null!=r.value}}function Bb(n,r){null!=(r=r.checked)&&Xa(n,"checked",r,!1)}function Cb(n,r){Bb(n,r)
var o=rb(r.value),a=r.type
if(null!=o)"number"===a?(0===o&&""===n.value||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o)
else if("submit"===a||"reset"===a)return void n.removeAttribute("value")
r.hasOwnProperty("value")?Db(n,r.type,o):r.hasOwnProperty("defaultValue")&&Db(n,r.type,rb(r.defaultValue)),null==r.checked&&null!=r.defaultChecked&&(n.defaultChecked=!!r.defaultChecked)}function Eb(n,r,o){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var a=r.type
if(!("submit"!==a&&"reset"!==a||void 0!==r.value&&null!==r.value))return
r=""+n._wrapperState.initialValue,o||r===n.value||(n.value=r),n.defaultValue=r}""!==(o=n.name)&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,""!==o&&(n.name=o)}function Db(n,r,o){"number"===r&&n.ownerDocument.activeElement===n||(null==o?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}function Gb(n,r){return n=i({children:void 0},r),(r=function Fb(n){var r=""
return a.Children.forEach(n,(function(n){null!=n&&(r+=n)})),r}(r.children))&&(n.children=r),n}function Hb(n,r,o,a){if(n=n.options,r){r={}
for(var i=0;i<o.length;i++)r["$"+o[i]]=!0
for(o=0;o<n.length;o++)i=r.hasOwnProperty("$"+n[o].value),n[o].selected!==i&&(n[o].selected=i),i&&a&&(n[o].defaultSelected=!0)}else{for(o=""+rb(o),r=null,i=0;i<n.length;i++){if(n[i].value===o)return n[i].selected=!0,void(a&&(n[i].defaultSelected=!0))
null!==r||n[i].disabled||(r=n[i])}null!==r&&(r.selected=!0)}}function Ib(n,r){if(null!=r.dangerouslySetInnerHTML)throw Error(u(91))
return i({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Jb(n,r){var o=r.value
if(null==o){if(o=r.children,r=r.defaultValue,null!=o){if(null!=r)throw Error(u(92))
if(Array.isArray(o)){if(!(1>=o.length))throw Error(u(93))
o=o[0]}r=o}null==r&&(r=""),o=r}n._wrapperState={initialValue:rb(o)}}function Kb(n,r){var o=rb(r.value),a=rb(r.defaultValue)
null!=o&&((o=""+o)!==n.value&&(n.value=o),null==r.defaultValue&&n.defaultValue!==o&&(n.defaultValue=o)),null!=a&&(n.defaultValue=""+a)}function Lb(n){var r=n.textContent
r===n._wrapperState.initialValue&&""!==r&&null!==r&&(n.value=r)}var it="http://www.w3.org/1999/xhtml",ut="http://www.w3.org/2000/svg"
function Nb(n){switch(n){case"svg":return"http://www.w3.org/2000/svg"
case"math":return"http://www.w3.org/1998/Math/MathML"
default:return"http://www.w3.org/1999/xhtml"}}function Ob(n,r){return null==n||"http://www.w3.org/1999/xhtml"===n?Nb(r):"http://www.w3.org/2000/svg"===n&&"foreignObject"===r?"http://www.w3.org/1999/xhtml":n}var lt,ct=function(n){return"undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction?function(r,o,a,i){MSApp.execUnsafeLocalFunction((function(){return n(r,o)}))}:n}((function(n,r){if(n.namespaceURI!==ut||"innerHTML"in n)n.innerHTML=r
else{for((lt=lt||document.createElement("div")).innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=lt.firstChild;n.firstChild;)n.removeChild(n.firstChild)
for(;r.firstChild;)n.appendChild(r.firstChild)}}))
function Rb(n,r){if(r){var o=n.firstChild
if(o&&o===n.lastChild&&3===o.nodeType)return void(o.nodeValue=r)}n.textContent=r}function Sb(n,r){var o={}
return o[n.toLowerCase()]=r.toLowerCase(),o["Webkit"+n]="webkit"+r,o["Moz"+n]="moz"+r,o}var st={animationend:Sb("Animation","AnimationEnd"),animationiteration:Sb("Animation","AnimationIteration"),animationstart:Sb("Animation","AnimationStart"),transitionend:Sb("Transition","TransitionEnd")},ft={},dt={}
function Wb(n){if(ft[n])return ft[n]
if(!st[n])return n
var r,o=st[n]
for(r in o)if(o.hasOwnProperty(r)&&r in dt)return ft[n]=o[r]
return n}pe&&(dt=document.createElement("div").style,"AnimationEvent"in window||(delete st.animationend.animation,delete st.animationiteration.animation,delete st.animationstart.animation),"TransitionEvent"in window||delete st.transitionend.transition)
var pt=Wb("animationend"),ht=Wb("animationiteration"),mt=Wb("animationstart"),gt=Wb("transitionend"),vt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bt=new("function"==typeof WeakMap?WeakMap:Map)
function cc(n){var r=bt.get(n)
return void 0===r&&(r=new Map,bt.set(n,r)),r}function dc(n){var r=n,o=n
if(n.alternate)for(;r.return;)r=r.return
else{n=r
do{0!=(1026&(r=n).effectTag)&&(o=r.return),n=r.return}while(n)}return 3===r.tag?o:null}function ec(n){if(13===n.tag){var r=n.memoizedState
if(null===r&&(null!==(n=n.alternate)&&(r=n.memoizedState)),null!==r)return r.dehydrated}return null}function fc(n){if(dc(n)!==n)throw Error(u(188))}function hc(n){if(!(n=function gc(n){var r=n.alternate
if(!r){if(null===(r=dc(n)))throw Error(u(188))
return r!==n?null:n}for(var o=n,a=r;;){var i=o.return
if(null===i)break
var s=i.alternate
if(null===s){if(null!==(a=i.return)){o=a
continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===o)return fc(i),n
if(s===a)return fc(i),r
s=s.sibling}throw Error(u(188))}if(o.return!==a.return)o=i,a=s
else{for(var y=!1,w=i.child;w;){if(w===o){y=!0,o=i,a=s
break}if(w===a){y=!0,a=i,o=s
break}w=w.sibling}if(!y){for(w=s.child;w;){if(w===o){y=!0,o=s,a=i
break}if(w===a){y=!0,a=s,o=i
break}w=w.sibling}if(!y)throw Error(u(189))}}if(o.alternate!==a)throw Error(u(190))}if(3!==o.tag)throw Error(u(188))
return o.stateNode.current===o?n:r}(n)))return null
for(var r=n;;){if(5===r.tag||6===r.tag)return r
if(r.child)r.child.return=r,r=r.child
else{if(r===n)break
for(;!r.sibling;){if(!r.return||r.return===n)return null
r=r.return}r.sibling.return=r.return,r=r.sibling}}return null}function ic(n,r){if(null==r)throw Error(u(30))
return null==n?r:Array.isArray(n)?Array.isArray(r)?(n.push.apply(n,r),n):(n.push(r),n):Array.isArray(r)?[n].concat(r):[n,r]}function jc(n,r,o){Array.isArray(n)?n.forEach(r,o):n&&r.call(o,n)}var yt=null
function lc(n){if(n){var r=n._dispatchListeners,o=n._dispatchInstances
if(Array.isArray(r))for(var a=0;a<r.length&&!n.isPropagationStopped();a++)oa(n,r[a],o[a])
else r&&oa(n,r,o)
n._dispatchListeners=null,n._dispatchInstances=null,n.isPersistent()||n.constructor.release(n)}}function mc(n){if(null!==n&&(yt=ic(yt,n)),n=yt,yt=null,n){if(jc(n,lc),yt)throw Error(u(95))
if(E)throw n=P,E=!1,P=null,n}}function nc(n){return(n=n.target||n.srcElement||window).correspondingUseElement&&(n=n.correspondingUseElement),3===n.nodeType?n.parentNode:n}function oc(n){if(!pe)return!1
var r=(n="on"+n)in document
return r||((r=document.createElement("div")).setAttribute(n,"return;"),r="function"==typeof r[n]),r}var wt=[]
function qc(n){n.topLevelType=null,n.nativeEvent=null,n.targetInst=null,n.ancestors.length=0,10>wt.length&&wt.push(n)}function rc(n,r,o,a){if(wt.length){var i=wt.pop()
return i.topLevelType=n,i.eventSystemFlags=a,i.nativeEvent=r,i.targetInst=o,i}return{topLevelType:n,eventSystemFlags:a,nativeEvent:r,targetInst:o,ancestors:[]}}function sc(n){var r=n.targetInst,o=r
do{if(!o){n.ancestors.push(o)
break}var a=o
if(3===a.tag)a=a.stateNode.containerInfo
else{for(;a.return;)a=a.return
a=3!==a.tag?null:a.stateNode.containerInfo}if(!a)break
5!==(r=o.tag)&&6!==r||n.ancestors.push(o),o=tc(a)}while(o)
for(o=0;o<n.ancestors.length;o++){r=n.ancestors[o]
var i=nc(n.nativeEvent)
a=n.topLevelType
var s=n.nativeEvent,y=n.eventSystemFlags
0===o&&(y|=64)
for(var w=null,E=0;E<oe.length;E++){var P=oe[E]
P&&(P=P.extractEvents(a,r,s,i,y))&&(w=ic(w,P))}mc(w)}}function uc(n,r,o){if(!o.has(n)){switch(n){case"scroll":vc(r,"scroll",!0)
break
case"focus":case"blur":vc(r,"focus",!0),vc(r,"blur",!0),o.set("blur",null),o.set("focus",null)
break
case"cancel":case"close":oc(n)&&vc(r,n,!0)
break
case"invalid":case"submit":case"reset":break
default:-1===vt.indexOf(n)&&F(n,r)}o.set(n,null)}}var xt,kt,Et,St=!1,Tt=[],Pt=null,Ot=null,jt=null,Ct=new Map,_t=new Map,Lt=[],Ht="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(" "),Mt="focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(" ")
function Kc(n,r,o,a,i){return{blockedOn:n,topLevelType:r,eventSystemFlags:32|o,nativeEvent:i,container:a}}function Lc(n,r){switch(n){case"focus":case"blur":Pt=null
break
case"dragenter":case"dragleave":Ot=null
break
case"mouseover":case"mouseout":jt=null
break
case"pointerover":case"pointerout":Ct.delete(r.pointerId)
break
case"gotpointercapture":case"lostpointercapture":_t.delete(r.pointerId)}}function Mc(n,r,o,a,i,s){return null===n||n.nativeEvent!==s?(n=Kc(r,o,a,i,s),null!==r&&(null!==(r=Nc(r))&&kt(r)),n):(n.eventSystemFlags|=a,n)}function Pc(n){var r=tc(n.target)
if(null!==r){var o=dc(r)
if(null!==o)if(13===(r=o.tag)){if(null!==(r=ec(o)))return n.blockedOn=r,void s.unstable_runWithPriority(n.priority,(function(){Et(o)}))}else if(3===r&&o.stateNode.hydrate)return void(n.blockedOn=3===o.tag?o.stateNode.containerInfo:null)}n.blockedOn=null}function Qc(n){if(null!==n.blockedOn)return!1
var r=Rc(n.topLevelType,n.eventSystemFlags,n.container,n.nativeEvent)
if(null!==r){var o=Nc(r)
return null!==o&&kt(o),n.blockedOn=r,!1}return!0}function Sc(n,r,o){Qc(n)&&o.delete(r)}function Tc(){for(St=!1;0<Tt.length;){var n=Tt[0]
if(null!==n.blockedOn){null!==(n=Nc(n.blockedOn))&&xt(n)
break}var r=Rc(n.topLevelType,n.eventSystemFlags,n.container,n.nativeEvent)
null!==r?n.blockedOn=r:Tt.shift()}null!==Pt&&Qc(Pt)&&(Pt=null),null!==Ot&&Qc(Ot)&&(Ot=null),null!==jt&&Qc(jt)&&(jt=null),Ct.forEach(Sc),_t.forEach(Sc)}function Uc(n,r){n.blockedOn===r&&(n.blockedOn=null,St||(St=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,Tc)))}function Vc(n){function b(r){return Uc(r,n)}if(0<Tt.length){Uc(Tt[0],n)
for(var r=1;r<Tt.length;r++){var o=Tt[r]
o.blockedOn===n&&(o.blockedOn=null)}}for(null!==Pt&&Uc(Pt,n),null!==Ot&&Uc(Ot,n),null!==jt&&Uc(jt,n),Ct.forEach(b),_t.forEach(b),r=0;r<Lt.length;r++)(o=Lt[r]).blockedOn===n&&(o.blockedOn=null)
for(;0<Lt.length&&null===(r=Lt[0]).blockedOn;)Pc(r),null===r.blockedOn&&Lt.shift()}var zt={},Rt=new Map,Nt=new Map,It=["abort","abort",pt,"animationEnd",ht,"animationIteration",mt,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",gt,"transitionEnd","waiting","waiting"]
function ad(n,r){for(var o=0;o<n.length;o+=2){var a=n[o],i=n[o+1],s="on"+(i[0].toUpperCase()+i.slice(1))
s={phasedRegistrationNames:{bubbled:s,captured:s+"Capture"},dependencies:[a],eventPriority:r},Nt.set(a,r),Rt.set(a,s),zt[i]=s}}ad("blur blur cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focus focus input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0),ad("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1),ad(It,2)
for(var At="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),Dt=0;Dt<At.length;Dt++)Nt.set(At[Dt],0)
var Ft=s.unstable_UserBlockingPriority,Ut=s.unstable_runWithPriority,Gt=!0
function F(n,r){vc(r,n,!1)}function vc(n,r,o){var a=Nt.get(r)
switch(void 0===a?2:a){case 0:a=gd.bind(null,r,1,n)
break
case 1:a=hd.bind(null,r,1,n)
break
default:a=id.bind(null,r,1,n)}o?n.addEventListener(r,a,!0):n.addEventListener(r,a,!1)}function gd(n,r,o,a){ye||Ha()
var i=id,s=ye
ye=!0
try{Ga(i,n,r,o,a)}finally{(ye=s)||La()}}function hd(n,r,o,a){Ut(Ft,id.bind(null,n,r,o,a))}function id(n,r,o,a){if(Gt)if(0<Tt.length&&-1<Ht.indexOf(n))n=Kc(null,n,r,o,a),Tt.push(n)
else{var i=Rc(n,r,o,a)
if(null===i)Lc(n,a)
else if(-1<Ht.indexOf(n))n=Kc(i,n,r,o,a),Tt.push(n)
else if(!function Oc(n,r,o,a,i){switch(r){case"focus":return Pt=Mc(Pt,n,r,o,a,i),!0
case"dragenter":return Ot=Mc(Ot,n,r,o,a,i),!0
case"mouseover":return jt=Mc(jt,n,r,o,a,i),!0
case"pointerover":var s=i.pointerId
return Ct.set(s,Mc(Ct.get(s)||null,n,r,o,a,i)),!0
case"gotpointercapture":return s=i.pointerId,_t.set(s,Mc(_t.get(s)||null,n,r,o,a,i)),!0}return!1}(i,n,r,o,a)){Lc(n,a),n=rc(n,a,null,r)
try{Ma(sc,n)}finally{qc(n)}}}}function Rc(n,r,o,a){if(null!==(o=tc(o=nc(a)))){var i=dc(o)
if(null===i)o=null
else{var s=i.tag
if(13===s){if(null!==(o=ec(i)))return o
o=null}else if(3===s){if(i.stateNode.hydrate)return 3===i.tag?i.stateNode.containerInfo:null
o=null}else i!==o&&(o=null)}}n=rc(n,a,o,r)
try{Ma(sc,n)}finally{qc(n)}return null}var Wt={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Bt=["Webkit","ms","Moz","O"]
function ld(n,r,o){return null==r||"boolean"==typeof r||""===r?"":o||"number"!=typeof r||0===r||Wt.hasOwnProperty(n)&&Wt[n]?(""+r).trim():r+"px"}function md(n,r){for(var o in n=n.style,r)if(r.hasOwnProperty(o)){var a=0===o.indexOf("--"),i=ld(o,r[o],a)
"float"===o&&(o="cssFloat"),a?n.setProperty(o,i):n[o]=i}}Object.keys(Wt).forEach((function(n){Bt.forEach((function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Wt[r]=Wt[n]}))}))
var Vt=i({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0})
function od(n,r){if(r){if(Vt[n]&&(null!=r.children||null!=r.dangerouslySetInnerHTML))throw Error(u(137,n,""))
if(null!=r.dangerouslySetInnerHTML){if(null!=r.children)throw Error(u(60))
if("object"!=typeof r.dangerouslySetInnerHTML||!("__html"in r.dangerouslySetInnerHTML))throw Error(u(61))}if(null!=r.style&&"object"!=typeof r.style)throw Error(u(62,""))}}function pd(n,r){if(-1===n.indexOf("-"))return"string"==typeof r.is
switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1
default:return!0}}var qt=it
function rd(n,r){var o=cc(n=9===n.nodeType||11===n.nodeType?n:n.ownerDocument)
r=se[r]
for(var a=0;a<r.length;a++)uc(r[a],n,o)}function sd(){}function td(n){if(void 0===(n=n||("undefined"!=typeof document?document:void 0)))return null
try{return n.activeElement||n.body}catch(r){return n.body}}function ud(n){for(;n&&n.firstChild;)n=n.firstChild
return n}function vd(n,r){var o,a=ud(n)
for(n=0;a;){if(3===a.nodeType){if(o=n+a.textContent.length,n<=r&&o>=r)return{node:a,offset:r-n}
n=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling
break e}a=a.parentNode}a=void 0}a=ud(a)}}function xd(){for(var n=window,r=td();r instanceof n.HTMLIFrameElement;){try{var o="string"==typeof r.contentWindow.location.href}catch(n){o=!1}if(!o)break
r=td((n=r.contentWindow).document)}return r}function yd(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase()
return r&&("input"===r&&("text"===n.type||"search"===n.type||"tel"===n.type||"url"===n.type||"password"===n.type)||"textarea"===r||"true"===n.contentEditable)}var $t=null,Qt=null
function Fd(n,r){switch(n){case"button":case"input":case"select":case"textarea":return!!r.autoFocus}return!1}function Gd(n,r){return"textarea"===n||"option"===n||"noscript"===n||"string"==typeof r.children||"number"==typeof r.children||"object"==typeof r.dangerouslySetInnerHTML&&null!==r.dangerouslySetInnerHTML&&null!=r.dangerouslySetInnerHTML.__html}var Kt="function"==typeof setTimeout?setTimeout:void 0,Xt="function"==typeof clearTimeout?clearTimeout:void 0
function Jd(n){for(;null!=n;n=n.nextSibling){var r=n.nodeType
if(1===r||3===r)break}return n}function Kd(n){n=n.previousSibling
for(var r=0;n;){if(8===n.nodeType){var o=n.data
if("$"===o||"$!"===o||"$?"===o){if(0===r)return n
r--}else"/$"===o&&r++}n=n.previousSibling}return null}var Zt=Math.random().toString(36).slice(2),Jt="__reactInternalInstance$"+Zt,Yt="__reactEventHandlers$"+Zt,en="__reactContainere$"+Zt
function tc(n){var r=n[Jt]
if(r)return r
for(var o=n.parentNode;o;){if(r=o[en]||o[Jt]){if(o=r.alternate,null!==r.child||null!==o&&null!==o.child)for(n=Kd(n);null!==n;){if(o=n[Jt])return o
n=Kd(n)}return r}o=(n=o).parentNode}return null}function Nc(n){return!(n=n[Jt]||n[en])||5!==n.tag&&6!==n.tag&&13!==n.tag&&3!==n.tag?null:n}function Pd(n){if(5===n.tag||6===n.tag)return n.stateNode
throw Error(u(33))}function Qd(n){return n[Yt]||null}function Rd(n){do{n=n.return}while(n&&5!==n.tag)
return n||null}function Sd(n,r){var o=n.stateNode
if(!o)return null
var a=_(o)
if(!a)return null
o=a[r]
e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(a=!("button"===(n=n.type)||"input"===n||"select"===n||"textarea"===n)),n=!a
break e
default:n=!1}if(n)return null
if(o&&"function"!=typeof o)throw Error(u(231,r,typeof o))
return o}function Td(n,r,o){(r=Sd(n,o.dispatchConfig.phasedRegistrationNames[r]))&&(o._dispatchListeners=ic(o._dispatchListeners,r),o._dispatchInstances=ic(o._dispatchInstances,n))}function Ud(n){if(n&&n.dispatchConfig.phasedRegistrationNames){for(var r=n._targetInst,o=[];r;)o.push(r),r=Rd(r)
for(r=o.length;0<r--;)Td(o[r],"captured",n)
for(r=0;r<o.length;r++)Td(o[r],"bubbled",n)}}function Vd(n,r,o){n&&o&&o.dispatchConfig.registrationName&&(r=Sd(n,o.dispatchConfig.registrationName))&&(o._dispatchListeners=ic(o._dispatchListeners,r),o._dispatchInstances=ic(o._dispatchInstances,n))}function Wd(n){n&&n.dispatchConfig.registrationName&&Vd(n._targetInst,null,n)}function Xd(n){jc(n,Ud)}var tn=null,nn=null,rn=null
function ae(){if(rn)return rn
var n,r,o=nn,a=o.length,i="value"in tn?tn.value:tn.textContent,s=i.length
for(n=0;n<a&&o[n]===i[n];n++);var y=a-n
for(r=1;r<=y&&o[a-r]===i[s-r];r++);return rn=i.slice(n,1<r?1-r:void 0)}function be(){return!0}function ce(){return!1}function G(n,r,o,a){for(var i in this.dispatchConfig=n,this._targetInst=r,this.nativeEvent=o,n=this.constructor.Interface)n.hasOwnProperty(i)&&((r=n[i])?this[i]=r(o):"target"===i?this.target=a:this[i]=o[i])
return this.isDefaultPrevented=(null!=o.defaultPrevented?o.defaultPrevented:!1===o.returnValue)?be:ce,this.isPropagationStopped=ce,this}function ee(n,r,o,a){if(this.eventPool.length){var i=this.eventPool.pop()
return this.call(i,n,r,o,a),i}return new this(n,r,o,a)}function fe(n){if(!(n instanceof this))throw Error(u(279))
n.destructor(),10>this.eventPool.length&&this.eventPool.push(n)}function de(n){n.eventPool=[],n.getPooled=ee,n.release=fe}i(G.prototype,{preventDefault:function(){this.defaultPrevented=!0
var n=this.nativeEvent
n&&(n.preventDefault?n.preventDefault():"unknown"!=typeof n.returnValue&&(n.returnValue=!1),this.isDefaultPrevented=be)},stopPropagation:function(){var n=this.nativeEvent
n&&(n.stopPropagation?n.stopPropagation():"unknown"!=typeof n.cancelBubble&&(n.cancelBubble=!0),this.isPropagationStopped=be)},persist:function(){this.isPersistent=be},isPersistent:ce,destructor:function(){var n,r=this.constructor.Interface
for(n in r)this[n]=null
this.nativeEvent=this._targetInst=this.dispatchConfig=null,this.isPropagationStopped=this.isDefaultPrevented=ce,this._dispatchInstances=this._dispatchListeners=null}}),G.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null},G.extend=function(n){function b(){}function c(){return r.apply(this,arguments)}var r=this
b.prototype=r.prototype
var o=new b
return i(o,c.prototype),c.prototype=o,c.prototype.constructor=c,c.Interface=i({},r.Interface,n),c.extend=r.extend,de(c),c},de(G)
var an=G.extend({data:null}),un=G.extend({data:null}),ln=[9,13,27,32],cn=pe&&"CompositionEvent"in window,sn=null
pe&&"documentMode"in document&&(sn=document.documentMode)
var fn=pe&&"TextEvent"in window&&!sn,dn=pe&&(!cn||sn&&8<sn&&11>=sn),pn=String.fromCharCode(32),hn={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},mn=!1
function qe(n,r){switch(n){case"keyup":return-1!==ln.indexOf(r.keyCode)
case"keydown":return 229!==r.keyCode
case"keypress":case"mousedown":case"blur":return!0
default:return!1}}function re(n){return"object"==typeof(n=n.detail)&&"data"in n?n.data:null}var gn=!1
var vn={eventTypes:hn,extractEvents:function(n,r,o,a){var i
if(cn)e:{switch(n){case"compositionstart":var s=hn.compositionStart
break e
case"compositionend":s=hn.compositionEnd
break e
case"compositionupdate":s=hn.compositionUpdate
break e}s=void 0}else gn?qe(n,o)&&(s=hn.compositionEnd):"keydown"===n&&229===o.keyCode&&(s=hn.compositionStart)
return s?(dn&&"ko"!==o.locale&&(gn||s!==hn.compositionStart?s===hn.compositionEnd&&gn&&(i=ae()):(nn="value"in(tn=a)?tn.value:tn.textContent,gn=!0)),s=an.getPooled(s,r,o,a),i?s.data=i:null!==(i=re(o))&&(s.data=i),Xd(s),i=s):i=null,(n=fn?function te(n,r){switch(n){case"compositionend":return re(r)
case"keypress":return 32!==r.which?null:(mn=!0,pn)
case"textInput":return(n=r.data)===pn&&mn?null:n
default:return null}}(n,o):function ue(n,r){if(gn)return"compositionend"===n||!cn&&qe(n,r)?(n=ae(),rn=nn=tn=null,gn=!1,n):null
switch(n){case"paste":return null
case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char
if(r.which)return String.fromCharCode(r.which)}return null
case"compositionend":return dn&&"ko"!==r.locale?null:r.data
default:return null}}(n,o))?((r=un.getPooled(hn.beforeInput,r,o,a)).data=n,Xd(r)):r=null,null===i?r:null===r?i:[i,r]}},bn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0}
function xe(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase()
return"input"===r?!!bn[n.type]:"textarea"===r}var yn={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}}
function ze(n,r,o){return(n=G.getPooled(yn.change,n,r,o)).type="change",Da(o),Xd(n),n}var wn=null,xn=null
function Ce(n){mc(n)}function De(n){if(yb(Pd(n)))return n}function Ee(n,r){if("change"===n)return r}var kn=!1
function Ge(){wn&&(wn.detachEvent("onpropertychange",He),xn=wn=null)}function He(n){if("value"===n.propertyName&&De(xn))if(n=ze(xn,n,nc(n)),ye)mc(n)
else{ye=!0
try{Fa(Ce,n)}finally{ye=!1,La()}}}function Ie(n,r,o){"focus"===n?(Ge(),xn=o,(wn=r).attachEvent("onpropertychange",He)):"blur"===n&&Ge()}function Je(n){if("selectionchange"===n||"keyup"===n||"keydown"===n)return De(xn)}function Ke(n,r){if("click"===n)return De(r)}function Le(n,r){if("input"===n||"change"===n)return De(r)}pe&&(kn=oc("input")&&(!document.documentMode||9<document.documentMode))
var En={eventTypes:yn,_isInputEventSupported:kn,extractEvents:function(n,r,o,a){var i=r?Pd(r):window,s=i.nodeName&&i.nodeName.toLowerCase()
if("select"===s||"input"===s&&"file"===i.type)var y=Ee
else if(xe(i))if(kn)y=Le
else{y=Je
var w=Ie}else(s=i.nodeName)&&"input"===s.toLowerCase()&&("checkbox"===i.type||"radio"===i.type)&&(y=Ke)
if(y&&(y=y(n,r)))return ze(y,o,a)
w&&w(n,i,r),"blur"===n&&(n=i._wrapperState)&&n.controlled&&"number"===i.type&&Db(i,"number",i.value)}},Sn=G.extend({view:null,detail:null}),Tn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"}
function Pe(n){var r=this.nativeEvent
return r.getModifierState?r.getModifierState(n):!!(n=Tn[n])&&!!r[n]}function Qe(){return Pe}var Pn=0,On=0,jn=!1,Cn=!1,_n=Sn.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:Qe,button:null,buttons:null,relatedTarget:function(n){return n.relatedTarget||(n.fromElement===n.srcElement?n.toElement:n.fromElement)},movementX:function(n){if("movementX"in n)return n.movementX
var r=Pn
return Pn=n.screenX,jn?"mousemove"===n.type?n.screenX-r:0:(jn=!0,0)},movementY:function(n){if("movementY"in n)return n.movementY
var r=On
return On=n.screenY,Cn?"mousemove"===n.type?n.screenY-r:0:(Cn=!0,0)}}),Ln=_n.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),Hn={mouseEnter:{registrationName:"onMouseEnter",dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",dependencies:["pointerout","pointerover"]}},Mn={eventTypes:Hn,extractEvents:function(n,r,o,a,i){var s="mouseover"===n||"pointerover"===n,y="mouseout"===n||"pointerout"===n
if(s&&0==(32&i)&&(o.relatedTarget||o.fromElement)||!y&&!s)return null;(s=a.window===a?a:(s=a.ownerDocument)?s.defaultView||s.parentWindow:window,y)?(y=r,null!==(r=(r=o.relatedTarget||o.toElement)?tc(r):null)&&(r!==dc(r)||5!==r.tag&&6!==r.tag)&&(r=null)):y=null
if(y===r)return null
if("mouseout"===n||"mouseover"===n)var w=_n,E=Hn.mouseLeave,P=Hn.mouseEnter,j="mouse"
else"pointerout"!==n&&"pointerover"!==n||(w=Ln,E=Hn.pointerLeave,P=Hn.pointerEnter,j="pointer")
if(n=null==y?s:Pd(y),s=null==r?s:Pd(r),(E=w.getPooled(E,y,o,a)).type=j+"leave",E.target=n,E.relatedTarget=s,(o=w.getPooled(P,r,o,a)).type=j+"enter",o.target=s,o.relatedTarget=n,j=r,(a=y)&&j)e:{for(P=j,y=0,n=w=a;n;n=Rd(n))y++
for(n=0,r=P;r;r=Rd(r))n++
for(;0<y-n;)w=Rd(w),y--
for(;0<n-y;)P=Rd(P),n--
for(;y--;){if(w===P||w===P.alternate)break e
w=Rd(w),P=Rd(P)}w=null}else w=null
for(P=w,w=[];a&&a!==P&&(null===(y=a.alternate)||y!==P);)w.push(a),a=Rd(a)
for(a=[];j&&j!==P&&(null===(y=j.alternate)||y!==P);)a.push(j),j=Rd(j)
for(j=0;j<w.length;j++)Vd(w[j],"bubbled",E)
for(j=a.length;0<j--;)Vd(a[j],"captured",o)
return 0==(64&i)?[E]:[E,o]}}
var zn="function"==typeof Object.is?Object.is:function Ze(n,r){return n===r&&(0!==n||1/n==1/r)||n!=n&&r!=r},Rn=Object.prototype.hasOwnProperty
function bf(n,r){if(zn(n,r))return!0
if("object"!=typeof n||null===n||"object"!=typeof r||null===r)return!1
var o=Object.keys(n),a=Object.keys(r)
if(o.length!==a.length)return!1
for(a=0;a<o.length;a++)if(!Rn.call(r,o[a])||!zn(n[o[a]],r[o[a]]))return!1
return!0}var Nn=pe&&"documentMode"in document&&11>=document.documentMode,In={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},An=null,Dn=null,Fn=null,Un=!1
function jf(n,r){var o=r.window===r?r.document:9===r.nodeType?r:r.ownerDocument
return Un||null==An||An!==td(o)?null:("selectionStart"in(o=An)&&yd(o)?o={start:o.selectionStart,end:o.selectionEnd}:o={anchorNode:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset},Fn&&bf(Fn,o)?null:(Fn=o,(n=G.getPooled(In.select,Dn,n,r)).type="select",n.target=An,Xd(n),n))}var Gn={eventTypes:In,extractEvents:function(n,r,o,a,i,s){if(!(s=!(i=s||(a.window===a?a.document:9===a.nodeType?a:a.ownerDocument)))){e:{i=cc(i),s=se.onSelect
for(var y=0;y<s.length;y++)if(!i.has(s[y])){i=!1
break e}i=!0}s=!i}if(s)return null
switch(i=r?Pd(r):window,n){case"focus":(xe(i)||"true"===i.contentEditable)&&(An=i,Dn=r,Fn=null)
break
case"blur":Fn=Dn=An=null
break
case"mousedown":Un=!0
break
case"contextmenu":case"mouseup":case"dragend":return Un=!1,jf(o,a)
case"selectionchange":if(Nn)break
case"keydown":case"keyup":return jf(o,a)}return null}},Wn=G.extend({animationName:null,elapsedTime:null,pseudoElement:null}),Bn=G.extend({clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Vn=Sn.extend({relatedTarget:null})
function of(n){var r=n.keyCode
return"charCode"in n?0===(n=n.charCode)&&13===r&&(n=13):n=r,10===n&&(n=13),32<=n||13===n?n:0}var qn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$n={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qn=Sn.extend({key:function(n){if(n.key){var r=qn[n.key]||n.key
if("Unidentified"!==r)return r}return"keypress"===n.type?13===(n=of(n))?"Enter":String.fromCharCode(n):"keydown"===n.type||"keyup"===n.type?$n[n.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:Qe,charCode:function(n){return"keypress"===n.type?of(n):0},keyCode:function(n){return"keydown"===n.type||"keyup"===n.type?n.keyCode:0},which:function(n){return"keypress"===n.type?of(n):"keydown"===n.type||"keyup"===n.type?n.keyCode:0}}),Kn=_n.extend({dataTransfer:null}),Xn=Sn.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:Qe}),Zn=G.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),Jn=_n.extend({deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:null,deltaMode:null}),Yn={eventTypes:zt,extractEvents:function(n,r,o,a){var i=Rt.get(n)
if(!i)return null
switch(n){case"keypress":if(0===of(o))return null
case"keydown":case"keyup":n=Qn
break
case"blur":case"focus":n=Vn
break
case"click":if(2===o.button)return null
case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":n=_n
break
case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":n=Kn
break
case"touchcancel":case"touchend":case"touchmove":case"touchstart":n=Xn
break
case pt:case ht:case mt:n=Wn
break
case gt:n=Zn
break
case"scroll":n=Sn
break
case"wheel":n=Jn
break
case"copy":case"cut":case"paste":n=Bn
break
case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":n=Ln
break
default:n=G}return Xd(r=n.getPooled(i,r,o,a)),r}}
if($)throw Error(u(101))
$=Array.prototype.slice.call("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" ")),ra(),_=Qd,B=Nc,q=Pd,xa({SimpleEventPlugin:Yn,EnterLeaveEventPlugin:Mn,ChangeEventPlugin:En,SelectEventPlugin:Gn,BeforeInputEventPlugin:vn})
var er=[],tr=-1
function H(n){0>tr||(n.current=er[tr],er[tr]=null,tr--)}function I(n,r){tr++,er[tr]=n.current,n.current=r}var nr={},rr={current:nr},or={current:!1},ar=nr
function Cf(n,r){var o=n.type.contextTypes
if(!o)return nr
var a=n.stateNode
if(a&&a.__reactInternalMemoizedUnmaskedChildContext===r)return a.__reactInternalMemoizedMaskedChildContext
var i,s={}
for(i in o)s[i]=r[i]
return a&&((n=n.stateNode).__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),s}function L(n){return null!=(n=n.childContextTypes)}function Df(){H(or),H(rr)}function Ef(n,r,o){if(rr.current!==nr)throw Error(u(168))
I(rr,r),I(or,o)}function Ff(n,r,o){var a=n.stateNode
if(n=r.childContextTypes,"function"!=typeof a.getChildContext)return o
for(var s in a=a.getChildContext())if(!(s in n))throw Error(u(108,pb(r)||"Unknown",s))
return i({},o,{},a)}function Gf(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||nr,ar=rr.current,I(rr,n),I(or,or.current),!0}function Hf(n,r,o){var a=n.stateNode
if(!a)throw Error(u(169))
o?(n=Ff(n,r,ar),a.__reactInternalMemoizedMergedChildContext=n,H(or),H(rr),I(rr,n)):H(or),I(or,o)}var ir=s.unstable_runWithPriority,ur=s.unstable_scheduleCallback,lr=s.unstable_cancelCallback,cr=s.unstable_requestPaint,sr=s.unstable_now,fr=s.unstable_getCurrentPriorityLevel,dr=s.unstable_ImmediatePriority,pr=s.unstable_UserBlockingPriority,hr=s.unstable_NormalPriority,mr=s.unstable_LowPriority,gr=s.unstable_IdlePriority,vr={},br=s.unstable_shouldYield,yr=void 0!==cr?cr:function(){},wr=null,xr=null,kr=!1,Er=sr(),Sr=1e4>Er?sr:function(){return sr()-Er}
function ag(){switch(fr()){case dr:return 99
case pr:return 98
case hr:return 97
case mr:return 96
case gr:return 95
default:throw Error(u(332))}}function bg(n){switch(n){case 99:return dr
case 98:return pr
case 97:return hr
case 96:return mr
case 95:return gr
default:throw Error(u(332))}}function cg(n,r){return n=bg(n),ir(n,r)}function dg(n,r,o){return n=bg(n),ur(n,r,o)}function eg(n){return null===wr?(wr=[n],xr=ur(dr,fg)):wr.push(n),vr}function gg(){if(null!==xr){var n=xr
xr=null,lr(n)}fg()}function fg(){if(!kr&&null!==wr){kr=!0
var n=0
try{var r=wr
cg(99,(function(){for(;n<r.length;n++){var o=r[n]
do{o=o(!0)}while(null!==o)}})),wr=null}catch(r){throw null!==wr&&(wr=wr.slice(n+1)),ur(dr,gg),r}finally{kr=!1}}}function hg(n,r,o){return 1073741821-(1+((1073741821-n+r/10)/(o/=10)|0))*o}function ig(n,r){if(n&&n.defaultProps)for(var o in r=i({},r),n=n.defaultProps)void 0===r[o]&&(r[o]=n[o])
return r}var Tr={current:null},Pr=null,Or=null,jr=null
function ng(){jr=Or=Pr=null}function og(n){var r=Tr.current
H(Tr),n.type._context._currentValue=r}function pg(n,r){for(;null!==n;){var o=n.alternate
if(n.childExpirationTime<r)n.childExpirationTime=r,null!==o&&o.childExpirationTime<r&&(o.childExpirationTime=r)
else{if(!(null!==o&&o.childExpirationTime<r))break
o.childExpirationTime=r}n=n.return}}function qg(n,r){Pr=n,jr=Or=null,null!==(n=n.dependencies)&&null!==n.firstContext&&(n.expirationTime>=r&&(no=!0),n.firstContext=null)}function sg(n,r){if(jr!==n&&!1!==r&&0!==r)if("number"==typeof r&&1073741823!==r||(jr=n,r=1073741823),r={context:n,observedBits:r,next:null},null===Or){if(null===Pr)throw Error(u(308))
Or=r,Pr.dependencies={expirationTime:0,firstContext:r,responders:null}}else Or=Or.next=r
return n._currentValue}var Cr=!1
function ug(n){n.updateQueue={baseState:n.memoizedState,baseQueue:null,shared:{pending:null},effects:null}}function vg(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,baseQueue:n.baseQueue,shared:n.shared,effects:n.effects})}function wg(n,r){return(n={expirationTime:n,suspenseConfig:r,tag:0,payload:null,callback:null,next:null}).next=n}function xg(n,r){if(null!==(n=n.updateQueue)){var o=(n=n.shared).pending
null===o?r.next=r:(r.next=o.next,o.next=r),n.pending=r}}function yg(n,r){var o=n.alternate
null!==o&&vg(o,n),null===(o=(n=n.updateQueue).baseQueue)?(n.baseQueue=r.next=r,r.next=r):(r.next=o.next,o.next=r)}function zg(n,r,o,a){var s=n.updateQueue
Cr=!1
var y=s.baseQueue,w=s.shared.pending
if(null!==w){if(null!==y){var E=y.next
y.next=w.next,w.next=E}y=w,s.shared.pending=null,null!==(E=n.alternate)&&(null!==(E=E.updateQueue)&&(E.baseQueue=w))}if(null!==y){E=y.next
var P=s.baseState,j=0,_=null,B=null,q=null
if(null!==E)for(var $=E;;){if((w=$.expirationTime)<a){var ne={expirationTime:$.expirationTime,suspenseConfig:$.suspenseConfig,tag:$.tag,payload:$.payload,callback:$.callback,next:null}
null===q?(B=q=ne,_=P):q=q.next=ne,w>j&&(j=w)}else{null!==q&&(q=q.next={expirationTime:1073741823,suspenseConfig:$.suspenseConfig,tag:$.tag,payload:$.payload,callback:$.callback,next:null}),Ag(w,$.suspenseConfig)
e:{var oe=n,ie=$
switch(w=r,ne=o,ie.tag){case 1:if("function"==typeof(oe=ie.payload)){P=oe.call(ne,P,w)
break e}P=oe
break e
case 3:oe.effectTag=-4097&oe.effectTag|64
case 0:if(null==(w="function"==typeof(oe=ie.payload)?oe.call(ne,P,w):oe))break e
P=i({},P,w)
break e
case 2:Cr=!0}}null!==$.callback&&(n.effectTag|=32,null===(w=s.effects)?s.effects=[$]:w.push($))}if(null===($=$.next)||$===E){if(null===(w=s.shared.pending))break
$=y.next=w.next,w.next=E,s.baseQueue=y=w,s.shared.pending=null}}null===q?_=P:q.next=B,s.baseState=_,s.baseQueue=q,Bg(j),n.expirationTime=j,n.memoizedState=P}}function Cg(n,r,o){if(n=r.effects,r.effects=null,null!==n)for(r=0;r<n.length;r++){var a=n[r],i=a.callback
if(null!==i){if(a.callback=null,a=i,i=o,"function"!=typeof a)throw Error(u(191,a))
a.call(i)}}}var _r=Me.ReactCurrentBatchConfig,Lr=(new a.Component).refs
function Fg(n,r,o,a){o=null==(o=o(a,r=n.memoizedState))?r:i({},r,o),n.memoizedState=o,0===n.expirationTime&&(n.updateQueue.baseState=o)}var Hr={isMounted:function(n){return!!(n=n._reactInternalFiber)&&dc(n)===n},enqueueSetState:function(n,r,o){n=n._reactInternalFiber
var a=Gg(),i=_r.suspense;(i=wg(a=Hg(a,n,i),i)).payload=r,null!=o&&(i.callback=o),xg(n,i),Ig(n,a)},enqueueReplaceState:function(n,r,o){n=n._reactInternalFiber
var a=Gg(),i=_r.suspense;(i=wg(a=Hg(a,n,i),i)).tag=1,i.payload=r,null!=o&&(i.callback=o),xg(n,i),Ig(n,a)},enqueueForceUpdate:function(n,r){n=n._reactInternalFiber
var o=Gg(),a=_r.suspense;(a=wg(o=Hg(o,n,a),a)).tag=2,null!=r&&(a.callback=r),xg(n,a),Ig(n,o)}}
function Kg(n,r,o,a,i,s,y){return"function"==typeof(n=n.stateNode).shouldComponentUpdate?n.shouldComponentUpdate(a,s,y):!r.prototype||!r.prototype.isPureReactComponent||(!bf(o,a)||!bf(i,s))}function Lg(n,r,o){var a=!1,i=nr,s=r.contextType
return"object"==typeof s&&null!==s?s=sg(s):(i=L(r)?ar:rr.current,s=(a=null!=(a=r.contextTypes))?Cf(n,i):nr),r=new r(o,s),n.memoizedState=null!==r.state&&void 0!==r.state?r.state:null,r.updater=Hr,n.stateNode=r,r._reactInternalFiber=n,a&&((n=n.stateNode).__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=s),r}function Mg(n,r,o,a){n=r.state,"function"==typeof r.componentWillReceiveProps&&r.componentWillReceiveProps(o,a),"function"==typeof r.UNSAFE_componentWillReceiveProps&&r.UNSAFE_componentWillReceiveProps(o,a),r.state!==n&&Hr.enqueueReplaceState(r,r.state,null)}function Ng(n,r,o,a){var i=n.stateNode
i.props=o,i.state=n.memoizedState,i.refs=Lr,ug(n)
var s=r.contextType
"object"==typeof s&&null!==s?i.context=sg(s):(s=L(r)?ar:rr.current,i.context=Cf(n,s)),zg(n,o,i,a),i.state=n.memoizedState,"function"==typeof(s=r.getDerivedStateFromProps)&&(Fg(n,r,s,o),i.state=n.memoizedState),"function"==typeof r.getDerivedStateFromProps||"function"==typeof i.getSnapshotBeforeUpdate||"function"!=typeof i.UNSAFE_componentWillMount&&"function"!=typeof i.componentWillMount||(r=i.state,"function"==typeof i.componentWillMount&&i.componentWillMount(),"function"==typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount(),r!==i.state&&Hr.enqueueReplaceState(i,i.state,null),zg(n,o,i,a),i.state=n.memoizedState),"function"==typeof i.componentDidMount&&(n.effectTag|=4)}var Mr=Array.isArray
function Pg(n,r,o){if(null!==(n=o.ref)&&"function"!=typeof n&&"object"!=typeof n){if(o._owner){if(o=o._owner){if(1!==o.tag)throw Error(u(309))
var a=o.stateNode}if(!a)throw Error(u(147,n))
var i=""+n
return null!==r&&null!==r.ref&&"function"==typeof r.ref&&r.ref._stringRef===i?r.ref:((r=function(n){var r=a.refs
r===Lr&&(r=a.refs={}),null===n?delete r[i]:r[i]=n})._stringRef=i,r)}if("string"!=typeof n)throw Error(u(284))
if(!o._owner)throw Error(u(290,n))}return n}function Qg(n,r){if("textarea"!==n.type)throw Error(u(31,"[object Object]"===Object.prototype.toString.call(r)?"object with keys {"+Object.keys(r).join(", ")+"}":r,""))}function Rg(n){function b(r,o){if(n){var a=r.lastEffect
null!==a?(a.nextEffect=o,r.lastEffect=o):r.firstEffect=r.lastEffect=o,o.nextEffect=null,o.effectTag=8}}function c(r,o){if(!n)return null
for(;null!==o;)b(r,o),o=o.sibling
return null}function d(n,r){for(n=new Map;null!==r;)null!==r.key?n.set(r.key,r):n.set(r.index,r),r=r.sibling
return n}function e(n,r){return(n=Sg(n,r)).index=0,n.sibling=null,n}function f(r,o,a){return r.index=a,n?null!==(a=r.alternate)?(a=a.index)<o?(r.effectTag=2,o):a:(r.effectTag=2,o):o}function g(r){return n&&null===r.alternate&&(r.effectTag=2),r}function h(n,r,o,a){return null===r||6!==r.tag?((r=Tg(o,n.mode,a)).return=n,r):((r=e(r,o)).return=n,r)}function k(n,r,o,a){return null!==r&&r.elementType===o.type?((a=e(r,o.props)).ref=Pg(n,r,o),a.return=n,a):((a=Ug(o.type,o.key,o.props,null,n.mode,a)).ref=Pg(n,r,o),a.return=n,a)}function l(n,r,o,a){return null===r||4!==r.tag||r.stateNode.containerInfo!==o.containerInfo||r.stateNode.implementation!==o.implementation?((r=Vg(o,n.mode,a)).return=n,r):((r=e(r,o.children||[])).return=n,r)}function m(n,r,o,a,i){return null===r||7!==r.tag?((r=Wg(o,n.mode,a,i)).return=n,r):((r=e(r,o)).return=n,r)}function p(n,r,o){if("string"==typeof r||"number"==typeof r)return(r=Tg(""+r,n.mode,o)).return=n,r
if("object"==typeof r&&null!==r){switch(r.$$typeof){case Ae:return(o=Ug(r.type,r.key,r.props,null,n.mode,o)).ref=Pg(n,null,r),o.return=n,o
case Fe:return(r=Vg(r,n.mode,o)).return=n,r}if(Mr(r)||nb(r))return(r=Wg(r,n.mode,o,null)).return=n,r
Qg(n,r)}return null}function x(n,r,o,a){var i=null!==r?r.key:null
if("string"==typeof o||"number"==typeof o)return null!==i?null:h(n,r,""+o,a)
if("object"==typeof o&&null!==o){switch(o.$$typeof){case Ae:return o.key===i?o.type===Ue?m(n,r,o.props.children,a,i):k(n,r,o,a):null
case Fe:return o.key===i?l(n,r,o,a):null}if(Mr(o)||nb(o))return null!==i?null:m(n,r,o,a,null)
Qg(n,o)}return null}function z(n,r,o,a,i){if("string"==typeof a||"number"==typeof a)return h(r,n=n.get(o)||null,""+a,i)
if("object"==typeof a&&null!==a){switch(a.$$typeof){case Ae:return n=n.get(null===a.key?o:a.key)||null,a.type===Ue?m(r,n,a.props.children,i,a.key):k(r,n,a,i)
case Fe:return l(r,n=n.get(null===a.key?o:a.key)||null,a,i)}if(Mr(a)||nb(a))return m(r,n=n.get(o)||null,a,i,null)
Qg(r,a)}return null}function ca(r,o,a,i){for(var s=null,y=null,w=o,E=o=0,P=null;null!==w&&E<a.length;E++){w.index>E?(P=w,w=null):P=w.sibling
var j=x(r,w,a[E],i)
if(null===j){null===w&&(w=P)
break}n&&w&&null===j.alternate&&b(r,w),o=f(j,o,E),null===y?s=j:y.sibling=j,y=j,w=P}if(E===a.length)return c(r,w),s
if(null===w){for(;E<a.length;E++)null!==(w=p(r,a[E],i))&&(o=f(w,o,E),null===y?s=w:y.sibling=w,y=w)
return s}for(w=d(r,w);E<a.length;E++)null!==(P=z(w,r,E,a[E],i))&&(n&&null!==P.alternate&&w.delete(null===P.key?E:P.key),o=f(P,o,E),null===y?s=P:y.sibling=P,y=P)
return n&&w.forEach((function(n){return b(r,n)})),s}function D(r,o,a,i){var s=nb(a)
if("function"!=typeof s)throw Error(u(150))
if(null==(a=s.call(a)))throw Error(u(151))
for(var y=s=null,w=o,E=o=0,P=null,j=a.next();null!==w&&!j.done;E++,j=a.next()){w.index>E?(P=w,w=null):P=w.sibling
var _=x(r,w,j.value,i)
if(null===_){null===w&&(w=P)
break}n&&w&&null===_.alternate&&b(r,w),o=f(_,o,E),null===y?s=_:y.sibling=_,y=_,w=P}if(j.done)return c(r,w),s
if(null===w){for(;!j.done;E++,j=a.next())null!==(j=p(r,j.value,i))&&(o=f(j,o,E),null===y?s=j:y.sibling=j,y=j)
return s}for(w=d(r,w);!j.done;E++,j=a.next())null!==(j=z(w,r,E,j.value,i))&&(n&&null!==j.alternate&&w.delete(null===j.key?E:j.key),o=f(j,o,E),null===y?s=j:y.sibling=j,y=j)
return n&&w.forEach((function(n){return b(r,n)})),s}return function(n,r,o,a){var i="object"==typeof o&&null!==o&&o.type===Ue&&null===o.key
i&&(o=o.props.children)
var s="object"==typeof o&&null!==o
if(s)switch(o.$$typeof){case Ae:e:{for(s=o.key,i=r;null!==i;){if(i.key===s){switch(i.tag){case 7:if(o.type===Ue){c(n,i.sibling),(r=e(i,o.props.children)).return=n,n=r
break e}break
default:if(i.elementType===o.type){c(n,i.sibling),(r=e(i,o.props)).ref=Pg(n,i,o),r.return=n,n=r
break e}}c(n,i)
break}b(n,i),i=i.sibling}o.type===Ue?((r=Wg(o.props.children,n.mode,a,o.key)).return=n,n=r):((a=Ug(o.type,o.key,o.props,null,n.mode,a)).ref=Pg(n,r,o),a.return=n,n=a)}return g(n)
case Fe:e:{for(i=o.key;null!==r;){if(r.key===i){if(4===r.tag&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){c(n,r.sibling),(r=e(r,o.children||[])).return=n,n=r
break e}c(n,r)
break}b(n,r),r=r.sibling}(r=Vg(o,n.mode,a)).return=n,n=r}return g(n)}if("string"==typeof o||"number"==typeof o)return o=""+o,null!==r&&6===r.tag?(c(n,r.sibling),(r=e(r,o)).return=n,n=r):(c(n,r),(r=Tg(o,n.mode,a)).return=n,n=r),g(n)
if(Mr(o))return ca(n,r,o,a)
if(nb(o))return D(n,r,o,a)
if(s&&Qg(n,o),void 0===o&&!i)switch(n.tag){case 1:case 0:throw n=n.type,Error(u(152,n.displayName||n.name||"Component"))}return c(n,r)}}var zr=Rg(!0),Rr=Rg(!1),Nr={},Ir={current:Nr},Ar={current:Nr},Dr={current:Nr}
function ch(n){if(n===Nr)throw Error(u(174))
return n}function dh(n,r){switch(I(Dr,r),I(Ar,n),I(Ir,Nr),n=r.nodeType){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:Ob(null,"")
break
default:r=Ob(r=(n=8===n?r.parentNode:r).namespaceURI||null,n=n.tagName)}H(Ir),I(Ir,r)}function eh(){H(Ir),H(Ar),H(Dr)}function fh(n){ch(Dr.current)
var r=ch(Ir.current),o=Ob(r,n.type)
r!==o&&(I(Ar,n),I(Ir,o))}function gh(n){Ar.current===n&&(H(Ir),H(Ar))}var Fr={current:0}
function hh(n){for(var r=n;null!==r;){if(13===r.tag){var o=r.memoizedState
if(null!==o&&(null===(o=o.dehydrated)||"$?"===o.data||"$!"===o.data))return r}else if(19===r.tag&&void 0!==r.memoizedProps.revealOrder){if(0!=(64&r.effectTag))return r}else if(null!==r.child){r.child.return=r,r=r.child
continue}if(r===n)break
for(;null===r.sibling;){if(null===r.return||r.return===n)return null
r=r.return}r.sibling.return=r.return,r=r.sibling}return null}function ih(n,r){return{responder:n,props:r}}var Ur=Me.ReactCurrentDispatcher,Gr=Me.ReactCurrentBatchConfig,Wr=0,Br=null,Vr=null,qr=null,$r=!1
function Q(){throw Error(u(321))}function nh(n,r){if(null===r)return!1
for(var o=0;o<r.length&&o<n.length;o++)if(!zn(n[o],r[o]))return!1
return!0}function oh(n,r,o,a,i,s){if(Wr=s,Br=r,r.memoizedState=null,r.updateQueue=null,r.expirationTime=0,Ur.current=null===n||null===n.memoizedState?Kr:Xr,n=o(a,i),r.expirationTime===Wr){s=0
do{if(r.expirationTime=0,!(25>s))throw Error(u(301))
s+=1,qr=Vr=null,r.updateQueue=null,Ur.current=Zr,n=o(a,i)}while(r.expirationTime===Wr)}if(Ur.current=Qr,r=null!==Vr&&null!==Vr.next,Wr=0,qr=Vr=Br=null,$r=!1,r)throw Error(u(300))
return n}function th(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null}
return null===qr?Br.memoizedState=qr=n:qr=qr.next=n,qr}function uh(){if(null===Vr){var n=Br.alternate
n=null!==n?n.memoizedState:null}else n=Vr.next
var r=null===qr?Br.memoizedState:qr.next
if(null!==r)qr=r,Vr=n
else{if(null===n)throw Error(u(310))
n={memoizedState:(Vr=n).memoizedState,baseState:Vr.baseState,baseQueue:Vr.baseQueue,queue:Vr.queue,next:null},null===qr?Br.memoizedState=qr=n:qr=qr.next=n}return qr}function vh(n,r){return"function"==typeof r?r(n):r}function wh(n){var r=uh(),o=r.queue
if(null===o)throw Error(u(311))
o.lastRenderedReducer=n
var a=Vr,i=a.baseQueue,s=o.pending
if(null!==s){if(null!==i){var y=i.next
i.next=s.next,s.next=y}a.baseQueue=i=s,o.pending=null}if(null!==i){i=i.next,a=a.baseState
var w=y=s=null,E=i
do{var P=E.expirationTime
if(P<Wr){var j={expirationTime:E.expirationTime,suspenseConfig:E.suspenseConfig,action:E.action,eagerReducer:E.eagerReducer,eagerState:E.eagerState,next:null}
null===w?(y=w=j,s=a):w=w.next=j,P>Br.expirationTime&&(Br.expirationTime=P,Bg(P))}else null!==w&&(w=w.next={expirationTime:1073741823,suspenseConfig:E.suspenseConfig,action:E.action,eagerReducer:E.eagerReducer,eagerState:E.eagerState,next:null}),Ag(P,E.suspenseConfig),a=E.eagerReducer===n?E.eagerState:n(a,E.action)
E=E.next}while(null!==E&&E!==i)
null===w?s=a:w.next=y,zn(a,r.memoizedState)||(no=!0),r.memoizedState=a,r.baseState=s,r.baseQueue=w,o.lastRenderedState=a}return[r.memoizedState,o.dispatch]}function xh(n){var r=uh(),o=r.queue
if(null===o)throw Error(u(311))
o.lastRenderedReducer=n
var a=o.dispatch,i=o.pending,s=r.memoizedState
if(null!==i){o.pending=null
var y=i=i.next
do{s=n(s,y.action),y=y.next}while(y!==i)
zn(s,r.memoizedState)||(no=!0),r.memoizedState=s,null===r.baseQueue&&(r.baseState=s),o.lastRenderedState=s}return[s,a]}function yh(n){var r=th()
return"function"==typeof n&&(n=n()),r.memoizedState=r.baseState=n,n=(n=r.queue={pending:null,dispatch:null,lastRenderedReducer:vh,lastRenderedState:n}).dispatch=zh.bind(null,Br,n),[r.memoizedState,n]}function Ah(n,r,o,a){return n={tag:n,create:r,destroy:o,deps:a,next:null},null===(r=Br.updateQueue)?(r={lastEffect:null},Br.updateQueue=r,r.lastEffect=n.next=n):null===(o=r.lastEffect)?r.lastEffect=n.next=n:(a=o.next,o.next=n,n.next=a,r.lastEffect=n),n}function Bh(){return uh().memoizedState}function Ch(n,r,o,a){var i=th()
Br.effectTag|=n,i.memoizedState=Ah(1|r,o,void 0,void 0===a?null:a)}function Dh(n,r,o,a){var i=uh()
a=void 0===a?null:a
var s=void 0
if(null!==Vr){var y=Vr.memoizedState
if(s=y.destroy,null!==a&&nh(a,y.deps))return void Ah(r,o,s,a)}Br.effectTag|=n,i.memoizedState=Ah(1|r,o,s,a)}function Eh(n,r){return Ch(516,4,n,r)}function Fh(n,r){return Dh(516,4,n,r)}function Gh(n,r){return Dh(4,2,n,r)}function Hh(n,r){return"function"==typeof r?(n=n(),r(n),function(){r(null)}):null!=r?(n=n(),r.current=n,function(){r.current=null}):void 0}function Ih(n,r,o){return o=null!=o?o.concat([n]):null,Dh(4,2,Hh.bind(null,r,n),o)}function Jh(){}function Kh(n,r){return th().memoizedState=[n,void 0===r?null:r],n}function Lh(n,r){var o=uh()
r=void 0===r?null:r
var a=o.memoizedState
return null!==a&&null!==r&&nh(r,a[1])?a[0]:(o.memoizedState=[n,r],n)}function Mh(n,r){var o=uh()
r=void 0===r?null:r
var a=o.memoizedState
return null!==a&&null!==r&&nh(r,a[1])?a[0]:(n=n(),o.memoizedState=[n,r],n)}function Nh(n,r,o){var a=ag()
cg(98>a?98:a,(function(){n(!0)})),cg(97<a?97:a,(function(){var a=Gr.suspense
Gr.suspense=void 0===r?null:r
try{n(!1),o()}finally{Gr.suspense=a}}))}function zh(n,r,o){var a=Gg(),i=_r.suspense
i={expirationTime:a=Hg(a,n,i),suspenseConfig:i,action:o,eagerReducer:null,eagerState:null,next:null}
var s=r.pending
if(null===s?i.next=i:(i.next=s.next,s.next=i),r.pending=i,s=n.alternate,n===Br||null!==s&&s===Br)$r=!0,i.expirationTime=Wr,Br.expirationTime=Wr
else{if(0===n.expirationTime&&(null===s||0===s.expirationTime)&&null!==(s=r.lastRenderedReducer))try{var y=r.lastRenderedState,w=s(y,o)
if(i.eagerReducer=s,i.eagerState=w,zn(w,y))return}catch(n){}Ig(n,a)}}var Qr={readContext:sg,useCallback:Q,useContext:Q,useEffect:Q,useImperativeHandle:Q,useLayoutEffect:Q,useMemo:Q,useReducer:Q,useRef:Q,useState:Q,useDebugValue:Q,useResponder:Q,useDeferredValue:Q,useTransition:Q},Kr={readContext:sg,useCallback:Kh,useContext:sg,useEffect:Eh,useImperativeHandle:function(n,r,o){return o=null!=o?o.concat([n]):null,Ch(4,2,Hh.bind(null,r,n),o)},useLayoutEffect:function(n,r){return Ch(4,2,n,r)},useMemo:function(n,r){var o=th()
return r=void 0===r?null:r,n=n(),o.memoizedState=[n,r],n},useReducer:function(n,r,o){var a=th()
return r=void 0!==o?o(r):r,a.memoizedState=a.baseState=r,n=(n=a.queue={pending:null,dispatch:null,lastRenderedReducer:n,lastRenderedState:r}).dispatch=zh.bind(null,Br,n),[a.memoizedState,n]},useRef:function(n){return n={current:n},th().memoizedState=n},useState:yh,useDebugValue:Jh,useResponder:ih,useDeferredValue:function(n,r){var o=yh(n),a=o[0],i=o[1]
return Eh((function(){var o=Gr.suspense
Gr.suspense=void 0===r?null:r
try{i(n)}finally{Gr.suspense=o}}),[n,r]),a},useTransition:function(n){var r=yh(!1),o=r[0]
return r=r[1],[Kh(Nh.bind(null,r,n),[r,n]),o]}},Xr={readContext:sg,useCallback:Lh,useContext:sg,useEffect:Fh,useImperativeHandle:Ih,useLayoutEffect:Gh,useMemo:Mh,useReducer:wh,useRef:Bh,useState:function(){return wh(vh)},useDebugValue:Jh,useResponder:ih,useDeferredValue:function(n,r){var o=wh(vh),a=o[0],i=o[1]
return Fh((function(){var o=Gr.suspense
Gr.suspense=void 0===r?null:r
try{i(n)}finally{Gr.suspense=o}}),[n,r]),a},useTransition:function(n){var r=wh(vh),o=r[0]
return r=r[1],[Lh(Nh.bind(null,r,n),[r,n]),o]}},Zr={readContext:sg,useCallback:Lh,useContext:sg,useEffect:Fh,useImperativeHandle:Ih,useLayoutEffect:Gh,useMemo:Mh,useReducer:xh,useRef:Bh,useState:function(){return xh(vh)},useDebugValue:Jh,useResponder:ih,useDeferredValue:function(n,r){var o=xh(vh),a=o[0],i=o[1]
return Fh((function(){var o=Gr.suspense
Gr.suspense=void 0===r?null:r
try{i(n)}finally{Gr.suspense=o}}),[n,r]),a},useTransition:function(n){var r=xh(vh),o=r[0]
return r=r[1],[Lh(Nh.bind(null,r,n),[r,n]),o]}},Jr=null,Yr=null,eo=!1
function Rh(n,r){var o=Sh(5,null,null,0)
o.elementType="DELETED",o.type="DELETED",o.stateNode=r,o.return=n,o.effectTag=8,null!==n.lastEffect?(n.lastEffect.nextEffect=o,n.lastEffect=o):n.firstEffect=n.lastEffect=o}function Th(n,r){switch(n.tag){case 5:var o=n.type
return null!==(r=1!==r.nodeType||o.toLowerCase()!==r.nodeName.toLowerCase()?null:r)&&(n.stateNode=r,!0)
case 6:return null!==(r=""===n.pendingProps||3!==r.nodeType?null:r)&&(n.stateNode=r,!0)
case 13:default:return!1}}function Uh(n){if(eo){var r=Yr
if(r){var o=r
if(!Th(n,r)){if(!(r=Jd(o.nextSibling))||!Th(n,r))return n.effectTag=-1025&n.effectTag|2,eo=!1,void(Jr=n)
Rh(Jr,o)}Jr=n,Yr=Jd(r.firstChild)}else n.effectTag=-1025&n.effectTag|2,eo=!1,Jr=n}}function Vh(n){for(n=n.return;null!==n&&5!==n.tag&&3!==n.tag&&13!==n.tag;)n=n.return
Jr=n}function Wh(n){if(n!==Jr)return!1
if(!eo)return Vh(n),eo=!0,!1
var r=n.type
if(5!==n.tag||"head"!==r&&"body"!==r&&!Gd(r,n.memoizedProps))for(r=Yr;r;)Rh(n,r),r=Jd(r.nextSibling)
if(Vh(n),13===n.tag){if(!(n=null!==(n=n.memoizedState)?n.dehydrated:null))throw Error(u(317))
e:{for(n=n.nextSibling,r=0;n;){if(8===n.nodeType){var o=n.data
if("/$"===o){if(0===r){Yr=Jd(n.nextSibling)
break e}r--}else"$"!==o&&"$!"!==o&&"$?"!==o||r++}n=n.nextSibling}Yr=null}}else Yr=Jr?Jd(n.stateNode.nextSibling):null
return!0}function Xh(){Yr=Jr=null,eo=!1}var to=Me.ReactCurrentOwner,no=!1
function R(n,r,o,a){r.child=null===n?Rr(r,null,o,a):zr(r,n.child,o,a)}function Zh(n,r,o,a,i){o=o.render
var s=r.ref
return qg(r,i),a=oh(n,r,o,a,s,i),null===n||no?(r.effectTag|=1,R(n,r,a,i),r.child):(r.updateQueue=n.updateQueue,r.effectTag&=-517,n.expirationTime<=i&&(n.expirationTime=0),$h(n,r,i))}function ai(n,r,o,a,i,s){if(null===n){var y=o.type
return"function"!=typeof y||bi(y)||void 0!==y.defaultProps||null!==o.compare||void 0!==o.defaultProps?((n=Ug(o.type,null,a,null,r.mode,s)).ref=r.ref,n.return=r,r.child=n):(r.tag=15,r.type=y,ci(n,r,y,a,i,s))}return y=n.child,i<s&&(i=y.memoizedProps,(o=null!==(o=o.compare)?o:bf)(i,a)&&n.ref===r.ref)?$h(n,r,s):(r.effectTag|=1,(n=Sg(y,a)).ref=r.ref,n.return=r,r.child=n)}function ci(n,r,o,a,i,s){return null!==n&&bf(n.memoizedProps,a)&&n.ref===r.ref&&(no=!1,i<s)?(r.expirationTime=n.expirationTime,$h(n,r,s)):di(n,r,o,a,s)}function ei(n,r){var o=r.ref;(null===n&&null!==o||null!==n&&n.ref!==o)&&(r.effectTag|=128)}function di(n,r,o,a,i){var s=L(o)?ar:rr.current
return s=Cf(r,s),qg(r,i),o=oh(n,r,o,a,s,i),null===n||no?(r.effectTag|=1,R(n,r,o,i),r.child):(r.updateQueue=n.updateQueue,r.effectTag&=-517,n.expirationTime<=i&&(n.expirationTime=0),$h(n,r,i))}function fi(n,r,o,a,i){if(L(o)){var s=!0
Gf(r)}else s=!1
if(qg(r,i),null===r.stateNode)null!==n&&(n.alternate=null,r.alternate=null,r.effectTag|=2),Lg(r,o,a),Ng(r,o,a,i),a=!0
else if(null===n){var y=r.stateNode,w=r.memoizedProps
y.props=w
var E=y.context,P=o.contextType
"object"==typeof P&&null!==P?P=sg(P):P=Cf(r,P=L(o)?ar:rr.current)
var j=o.getDerivedStateFromProps,_="function"==typeof j||"function"==typeof y.getSnapshotBeforeUpdate
_||"function"!=typeof y.UNSAFE_componentWillReceiveProps&&"function"!=typeof y.componentWillReceiveProps||(w!==a||E!==P)&&Mg(r,y,a,P),Cr=!1
var B=r.memoizedState
y.state=B,zg(r,a,y,i),E=r.memoizedState,w!==a||B!==E||or.current||Cr?("function"==typeof j&&(Fg(r,o,j,a),E=r.memoizedState),(w=Cr||Kg(r,o,w,a,B,E,P))?(_||"function"!=typeof y.UNSAFE_componentWillMount&&"function"!=typeof y.componentWillMount||("function"==typeof y.componentWillMount&&y.componentWillMount(),"function"==typeof y.UNSAFE_componentWillMount&&y.UNSAFE_componentWillMount()),"function"==typeof y.componentDidMount&&(r.effectTag|=4)):("function"==typeof y.componentDidMount&&(r.effectTag|=4),r.memoizedProps=a,r.memoizedState=E),y.props=a,y.state=E,y.context=P,a=w):("function"==typeof y.componentDidMount&&(r.effectTag|=4),a=!1)}else y=r.stateNode,vg(n,r),w=r.memoizedProps,y.props=r.type===r.elementType?w:ig(r.type,w),E=y.context,"object"==typeof(P=o.contextType)&&null!==P?P=sg(P):P=Cf(r,P=L(o)?ar:rr.current),(_="function"==typeof(j=o.getDerivedStateFromProps)||"function"==typeof y.getSnapshotBeforeUpdate)||"function"!=typeof y.UNSAFE_componentWillReceiveProps&&"function"!=typeof y.componentWillReceiveProps||(w!==a||E!==P)&&Mg(r,y,a,P),Cr=!1,E=r.memoizedState,y.state=E,zg(r,a,y,i),B=r.memoizedState,w!==a||E!==B||or.current||Cr?("function"==typeof j&&(Fg(r,o,j,a),B=r.memoizedState),(j=Cr||Kg(r,o,w,a,E,B,P))?(_||"function"!=typeof y.UNSAFE_componentWillUpdate&&"function"!=typeof y.componentWillUpdate||("function"==typeof y.componentWillUpdate&&y.componentWillUpdate(a,B,P),"function"==typeof y.UNSAFE_componentWillUpdate&&y.UNSAFE_componentWillUpdate(a,B,P)),"function"==typeof y.componentDidUpdate&&(r.effectTag|=4),"function"==typeof y.getSnapshotBeforeUpdate&&(r.effectTag|=256)):("function"!=typeof y.componentDidUpdate||w===n.memoizedProps&&E===n.memoizedState||(r.effectTag|=4),"function"!=typeof y.getSnapshotBeforeUpdate||w===n.memoizedProps&&E===n.memoizedState||(r.effectTag|=256),r.memoizedProps=a,r.memoizedState=B),y.props=a,y.state=B,y.context=P,a=j):("function"!=typeof y.componentDidUpdate||w===n.memoizedProps&&E===n.memoizedState||(r.effectTag|=4),"function"!=typeof y.getSnapshotBeforeUpdate||w===n.memoizedProps&&E===n.memoizedState||(r.effectTag|=256),a=!1)
return gi(n,r,o,a,s,i)}function gi(n,r,o,a,i,s){ei(n,r)
var y=0!=(64&r.effectTag)
if(!a&&!y)return i&&Hf(r,o,!1),$h(n,r,s)
a=r.stateNode,to.current=r
var w=y&&"function"!=typeof o.getDerivedStateFromError?null:a.render()
return r.effectTag|=1,null!==n&&y?(r.child=zr(r,n.child,null,s),r.child=zr(r,null,w,s)):R(n,r,w,s),r.memoizedState=a.state,i&&Hf(r,o,!0),r.child}function hi(n){var r=n.stateNode
r.pendingContext?Ef(0,r.pendingContext,r.pendingContext!==r.context):r.context&&Ef(0,r.context,!1),dh(n,r.containerInfo)}var ro,oo,ao,io={dehydrated:null,retryTime:0}
function ji(n,r,o){var a,i=r.mode,s=r.pendingProps,y=Fr.current,w=!1
if((a=0!=(64&r.effectTag))||(a=0!=(2&y)&&(null===n||null!==n.memoizedState)),a?(w=!0,r.effectTag&=-65):null!==n&&null===n.memoizedState||void 0===s.fallback||!0===s.unstable_avoidThisFallback||(y|=1),I(Fr,1&y),null===n){if(void 0!==s.fallback&&Uh(r),w){if(w=s.fallback,(s=Wg(null,i,0,null)).return=r,0==(2&r.mode))for(n=null!==r.memoizedState?r.child.child:r.child,s.child=n;null!==n;)n.return=s,n=n.sibling
return(o=Wg(w,i,o,null)).return=r,s.sibling=o,r.memoizedState=io,r.child=s,o}return i=s.children,r.memoizedState=null,r.child=Rr(r,null,i,o)}if(null!==n.memoizedState){if(i=(n=n.child).sibling,w){if(s=s.fallback,(o=Sg(n,n.pendingProps)).return=r,0==(2&r.mode)&&(w=null!==r.memoizedState?r.child.child:r.child)!==n.child)for(o.child=w;null!==w;)w.return=o,w=w.sibling
return(i=Sg(i,s)).return=r,o.sibling=i,o.childExpirationTime=0,r.memoizedState=io,r.child=o,i}return o=zr(r,n.child,s.children,o),r.memoizedState=null,r.child=o}if(n=n.child,w){if(w=s.fallback,(s=Wg(null,i,0,null)).return=r,s.child=n,null!==n&&(n.return=s),0==(2&r.mode))for(n=null!==r.memoizedState?r.child.child:r.child,s.child=n;null!==n;)n.return=s,n=n.sibling
return(o=Wg(w,i,o,null)).return=r,s.sibling=o,o.effectTag|=2,s.childExpirationTime=0,r.memoizedState=io,r.child=s,o}return r.memoizedState=null,r.child=zr(r,n,s.children,o)}function ki(n,r){n.expirationTime<r&&(n.expirationTime=r)
var o=n.alternate
null!==o&&o.expirationTime<r&&(o.expirationTime=r),pg(n.return,r)}function li(n,r,o,a,i,s){var y=n.memoizedState
null===y?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:a,tail:o,tailExpiration:0,tailMode:i,lastEffect:s}:(y.isBackwards=r,y.rendering=null,y.renderingStartTime=0,y.last=a,y.tail=o,y.tailExpiration=0,y.tailMode=i,y.lastEffect=s)}function mi(n,r,o){var a=r.pendingProps,i=a.revealOrder,s=a.tail
if(R(n,r,a.children,o),0!=(2&(a=Fr.current)))a=1&a|2,r.effectTag|=64
else{if(null!==n&&0!=(64&n.effectTag))e:for(n=r.child;null!==n;){if(13===n.tag)null!==n.memoizedState&&ki(n,o)
else if(19===n.tag)ki(n,o)
else if(null!==n.child){n.child.return=n,n=n.child
continue}if(n===r)break e
for(;null===n.sibling;){if(null===n.return||n.return===r)break e
n=n.return}n.sibling.return=n.return,n=n.sibling}a&=1}if(I(Fr,a),0==(2&r.mode))r.memoizedState=null
else switch(i){case"forwards":for(o=r.child,i=null;null!==o;)null!==(n=o.alternate)&&null===hh(n)&&(i=o),o=o.sibling
null===(o=i)?(i=r.child,r.child=null):(i=o.sibling,o.sibling=null),li(r,!1,i,o,s,r.lastEffect)
break
case"backwards":for(o=null,i=r.child,r.child=null;null!==i;){if(null!==(n=i.alternate)&&null===hh(n)){r.child=i
break}n=i.sibling,i.sibling=o,o=i,i=n}li(r,!0,o,null,s,r.lastEffect)
break
case"together":li(r,!1,null,null,void 0,r.lastEffect)
break
default:r.memoizedState=null}return r.child}function $h(n,r,o){null!==n&&(r.dependencies=n.dependencies)
var a=r.expirationTime
if(0!==a&&Bg(a),r.childExpirationTime<o)return null
if(null!==n&&r.child!==n.child)throw Error(u(153))
if(null!==r.child){for(o=Sg(n=r.child,n.pendingProps),r.child=o,o.return=r;null!==n.sibling;)n=n.sibling,(o=o.sibling=Sg(n,n.pendingProps)).return=r
o.sibling=null}return r.child}function ri(n,r){switch(n.tailMode){case"hidden":r=n.tail
for(var o=null;null!==r;)null!==r.alternate&&(o=r),r=r.sibling
null===o?n.tail=null:o.sibling=null
break
case"collapsed":o=n.tail
for(var a=null;null!==o;)null!==o.alternate&&(a=o),o=o.sibling
null===a?r||null===n.tail?n.tail=null:n.tail.sibling=null:a.sibling=null}}function si(n,r,o){var a=r.pendingProps
switch(r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null
case 1:return L(r.type)&&Df(),null
case 3:return eh(),H(or),H(rr),(o=r.stateNode).pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),null!==n&&null!==n.child||!Wh(r)||(r.effectTag|=4),null
case 5:gh(r),o=ch(Dr.current)
var s=r.type
if(null!==n&&null!=r.stateNode)oo(n,r,s,a,o),n.ref!==r.ref&&(r.effectTag|=128)
else{if(!a){if(null===r.stateNode)throw Error(u(166))
return null}if(n=ch(Ir.current),Wh(r)){a=r.stateNode,s=r.type
var y=r.memoizedProps
switch(a[Jt]=r,a[Yt]=y,s){case"iframe":case"object":case"embed":F("load",a)
break
case"video":case"audio":for(n=0;n<vt.length;n++)F(vt[n],a)
break
case"source":F("error",a)
break
case"img":case"image":case"link":F("error",a),F("load",a)
break
case"form":F("reset",a),F("submit",a)
break
case"details":F("toggle",a)
break
case"input":Ab(a,y),F("invalid",a),rd(o,"onChange")
break
case"select":a._wrapperState={wasMultiple:!!y.multiple},F("invalid",a),rd(o,"onChange")
break
case"textarea":Jb(a,y),F("invalid",a),rd(o,"onChange")}for(var w in od(s,y),n=null,y)if(y.hasOwnProperty(w)){var E=y[w]
"children"===w?"string"==typeof E?a.textContent!==E&&(n=["children",E]):"number"==typeof E&&a.textContent!==""+E&&(n=["children",""+E]):le.hasOwnProperty(w)&&null!=E&&rd(o,w)}switch(s){case"input":xb(a),Eb(a,y,!0)
break
case"textarea":xb(a),Lb(a)
break
case"select":case"option":break
default:"function"==typeof y.onClick&&(a.onclick=sd)}o=n,r.updateQueue=o,null!==o&&(r.effectTag|=4)}else{switch(w=9===o.nodeType?o:o.ownerDocument,n===qt&&(n=Nb(s)),n===qt?"script"===s?((n=w.createElement("div")).innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):"string"==typeof a.is?n=w.createElement(s,{is:a.is}):(n=w.createElement(s),"select"===s&&(w=n,a.multiple?w.multiple=!0:a.size&&(w.size=a.size))):n=w.createElementNS(n,s),n[Jt]=r,n[Yt]=a,ro(n,r),r.stateNode=n,w=pd(s,a),s){case"iframe":case"object":case"embed":F("load",n),E=a
break
case"video":case"audio":for(E=0;E<vt.length;E++)F(vt[E],n)
E=a
break
case"source":F("error",n),E=a
break
case"img":case"image":case"link":F("error",n),F("load",n),E=a
break
case"form":F("reset",n),F("submit",n),E=a
break
case"details":F("toggle",n),E=a
break
case"input":Ab(n,a),E=zb(n,a),F("invalid",n),rd(o,"onChange")
break
case"option":E=Gb(n,a)
break
case"select":n._wrapperState={wasMultiple:!!a.multiple},E=i({},a,{value:void 0}),F("invalid",n),rd(o,"onChange")
break
case"textarea":Jb(n,a),E=Ib(n,a),F("invalid",n),rd(o,"onChange")
break
default:E=a}od(s,E)
var P=E
for(y in P)if(P.hasOwnProperty(y)){var j=P[y]
"style"===y?md(n,j):"dangerouslySetInnerHTML"===y?null!=(j=j?j.__html:void 0)&&ct(n,j):"children"===y?"string"==typeof j?("textarea"!==s||""!==j)&&Rb(n,j):"number"==typeof j&&Rb(n,""+j):"suppressContentEditableWarning"!==y&&"suppressHydrationWarning"!==y&&"autoFocus"!==y&&(le.hasOwnProperty(y)?null!=j&&rd(o,y):null!=j&&Xa(n,y,j,w))}switch(s){case"input":xb(n),Eb(n,a,!1)
break
case"textarea":xb(n),Lb(n)
break
case"option":null!=a.value&&n.setAttribute("value",""+rb(a.value))
break
case"select":n.multiple=!!a.multiple,null!=(o=a.value)?Hb(n,!!a.multiple,o,!1):null!=a.defaultValue&&Hb(n,!!a.multiple,a.defaultValue,!0)
break
default:"function"==typeof E.onClick&&(n.onclick=sd)}Fd(s,a)&&(r.effectTag|=4)}null!==r.ref&&(r.effectTag|=128)}return null
case 6:if(n&&null!=r.stateNode)ao(0,r,n.memoizedProps,a)
else{if("string"!=typeof a&&null===r.stateNode)throw Error(u(166))
o=ch(Dr.current),ch(Ir.current),Wh(r)?(o=r.stateNode,a=r.memoizedProps,o[Jt]=r,o.nodeValue!==a&&(r.effectTag|=4)):((o=(9===o.nodeType?o:o.ownerDocument).createTextNode(a))[Jt]=r,r.stateNode=o)}return null
case 13:return H(Fr),a=r.memoizedState,0!=(64&r.effectTag)?(r.expirationTime=o,r):(o=null!==a,a=!1,null===n?void 0!==r.memoizedProps.fallback&&Wh(r):(a=null!==(s=n.memoizedState),o||null===s||null!==(s=n.child.sibling)&&(null!==(y=r.firstEffect)?(r.firstEffect=s,s.nextEffect=y):(r.firstEffect=r.lastEffect=s,s.nextEffect=null),s.effectTag=8)),o&&!a&&0!=(2&r.mode)&&(null===n&&!0!==r.memoizedProps.unstable_avoidThisFallback||0!=(1&Fr.current)?ko===ho&&(ko=mo):(ko!==ho&&ko!==mo||(ko=vo),0!==Oo&&null!==yo&&(xi(yo,xo),yi(yo,Oo)))),(o||a)&&(r.effectTag|=4),null)
case 4:return eh(),null
case 10:return og(r),null
case 17:return L(r.type)&&Df(),null
case 19:if(H(Fr),null===(a=r.memoizedState))return null
if(s=0!=(64&r.effectTag),null===(y=a.rendering)){if(s)ri(a,!1)
else if(ko!==ho||null!==n&&0!=(64&n.effectTag))for(y=r.child;null!==y;){if(null!==(n=hh(y))){for(r.effectTag|=64,ri(a,!1),null!==(s=n.updateQueue)&&(r.updateQueue=s,r.effectTag|=4),null===a.lastEffect&&(r.firstEffect=null),r.lastEffect=a.lastEffect,a=r.child;null!==a;)y=o,(s=a).effectTag&=2,s.nextEffect=null,s.firstEffect=null,s.lastEffect=null,null===(n=s.alternate)?(s.childExpirationTime=0,s.expirationTime=y,s.child=null,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null):(s.childExpirationTime=n.childExpirationTime,s.expirationTime=n.expirationTime,s.child=n.child,s.memoizedProps=n.memoizedProps,s.memoizedState=n.memoizedState,s.updateQueue=n.updateQueue,y=n.dependencies,s.dependencies=null===y?null:{expirationTime:y.expirationTime,firstContext:y.firstContext,responders:y.responders}),a=a.sibling
return I(Fr,1&Fr.current|2),r.child}y=y.sibling}}else{if(!s)if(null!==(n=hh(y))){if(r.effectTag|=64,s=!0,null!==(o=n.updateQueue)&&(r.updateQueue=o,r.effectTag|=4),ri(a,!0),null===a.tail&&"hidden"===a.tailMode&&!y.alternate)return null!==(r=r.lastEffect=a.lastEffect)&&(r.nextEffect=null),null}else 2*Sr()-a.renderingStartTime>a.tailExpiration&&1<o&&(r.effectTag|=64,s=!0,ri(a,!1),r.expirationTime=r.childExpirationTime=o-1)
a.isBackwards?(y.sibling=r.child,r.child=y):(null!==(o=a.last)?o.sibling=y:r.child=y,a.last=y)}return null!==a.tail?(0===a.tailExpiration&&(a.tailExpiration=Sr()+500),o=a.tail,a.rendering=o,a.tail=o.sibling,a.lastEffect=r.lastEffect,a.renderingStartTime=Sr(),o.sibling=null,r=Fr.current,I(Fr,s?1&r|2:1&r),o):null}throw Error(u(156,r.tag))}function zi(n){switch(n.tag){case 1:L(n.type)&&Df()
var r=n.effectTag
return 4096&r?(n.effectTag=-4097&r|64,n):null
case 3:if(eh(),H(or),H(rr),0!=(64&(r=n.effectTag)))throw Error(u(285))
return n.effectTag=-4097&r|64,n
case 5:return gh(n),null
case 13:return H(Fr),4096&(r=n.effectTag)?(n.effectTag=-4097&r|64,n):null
case 19:return H(Fr),null
case 4:return eh(),null
case 10:return og(n),null
default:return null}}function Ai(n,r){return{value:n,source:r,stack:qb(r)}}ro=function(n,r){for(var o=r.child;null!==o;){if(5===o.tag||6===o.tag)n.appendChild(o.stateNode)
else if(4!==o.tag&&null!==o.child){o.child.return=o,o=o.child
continue}if(o===r)break
for(;null===o.sibling;){if(null===o.return||o.return===r)return
o=o.return}o.sibling.return=o.return,o=o.sibling}},oo=function(n,r,o,a,s){var y=n.memoizedProps
if(y!==a){var w,E,P=r.stateNode
switch(ch(Ir.current),n=null,o){case"input":y=zb(P,y),a=zb(P,a),n=[]
break
case"option":y=Gb(P,y),a=Gb(P,a),n=[]
break
case"select":y=i({},y,{value:void 0}),a=i({},a,{value:void 0}),n=[]
break
case"textarea":y=Ib(P,y),a=Ib(P,a),n=[]
break
default:"function"!=typeof y.onClick&&"function"==typeof a.onClick&&(P.onclick=sd)}for(w in od(o,a),o=null,y)if(!a.hasOwnProperty(w)&&y.hasOwnProperty(w)&&null!=y[w])if("style"===w)for(E in P=y[w])P.hasOwnProperty(E)&&(o||(o={}),o[E]="")
else"dangerouslySetInnerHTML"!==w&&"children"!==w&&"suppressContentEditableWarning"!==w&&"suppressHydrationWarning"!==w&&"autoFocus"!==w&&(le.hasOwnProperty(w)?n||(n=[]):(n=n||[]).push(w,null))
for(w in a){var j=a[w]
if(P=null!=y?y[w]:void 0,a.hasOwnProperty(w)&&j!==P&&(null!=j||null!=P))if("style"===w)if(P){for(E in P)!P.hasOwnProperty(E)||j&&j.hasOwnProperty(E)||(o||(o={}),o[E]="")
for(E in j)j.hasOwnProperty(E)&&P[E]!==j[E]&&(o||(o={}),o[E]=j[E])}else o||(n||(n=[]),n.push(w,o)),o=j
else"dangerouslySetInnerHTML"===w?(j=j?j.__html:void 0,P=P?P.__html:void 0,null!=j&&P!==j&&(n=n||[]).push(w,j)):"children"===w?P===j||"string"!=typeof j&&"number"!=typeof j||(n=n||[]).push(w,""+j):"suppressContentEditableWarning"!==w&&"suppressHydrationWarning"!==w&&(le.hasOwnProperty(w)?(null!=j&&rd(s,w),n||P===j||(n=[])):(n=n||[]).push(w,j))}o&&(n=n||[]).push("style",o),s=n,(r.updateQueue=s)&&(r.effectTag|=4)}},ao=function(n,r,o,a){o!==a&&(r.effectTag|=4)}
var uo="function"==typeof WeakSet?WeakSet:Set
function Ci(n,r){var o=r.source,a=r.stack
null===a&&null!==o&&(a=qb(o)),null!==o&&pb(o.type),r=r.value,null!==n&&1===n.tag&&pb(n.type)}function Fi(n){var r=n.ref
if(null!==r)if("function"==typeof r)try{r(null)}catch(r){Ei(n,r)}else r.current=null}function Gi(n,r){switch(r.tag){case 0:case 11:case 15:case 22:return
case 1:if(256&r.effectTag&&null!==n){var o=n.memoizedProps,a=n.memoizedState
r=(n=r.stateNode).getSnapshotBeforeUpdate(r.elementType===r.type?o:ig(r.type,o),a),n.__reactInternalSnapshotBeforeUpdate=r}return
case 3:case 5:case 6:case 4:case 17:return}throw Error(u(163))}function Hi(n,r){if(null!==(r=null!==(r=r.updateQueue)?r.lastEffect:null)){var o=r=r.next
do{if((o.tag&n)===n){var a=o.destroy
o.destroy=void 0,void 0!==a&&a()}o=o.next}while(o!==r)}}function Ii(n,r){if(null!==(r=null!==(r=r.updateQueue)?r.lastEffect:null)){var o=r=r.next
do{if((o.tag&n)===n){var a=o.create
o.destroy=a()}o=o.next}while(o!==r)}}function Ji(n,r,o){switch(o.tag){case 0:case 11:case 15:case 22:return void Ii(3,o)
case 1:if(n=o.stateNode,4&o.effectTag)if(null===r)n.componentDidMount()
else{var a=o.elementType===o.type?r.memoizedProps:ig(o.type,r.memoizedProps)
n.componentDidUpdate(a,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}return void(null!==(r=o.updateQueue)&&Cg(o,r,n))
case 3:if(null!==(r=o.updateQueue)){if(n=null,null!==o.child)switch(o.child.tag){case 5:n=o.child.stateNode
break
case 1:n=o.child.stateNode}Cg(o,r,n)}return
case 5:return n=o.stateNode,void(null===r&&4&o.effectTag&&Fd(o.type,o.memoizedProps)&&n.focus())
case 6:case 4:case 12:return
case 13:return void(null===o.memoizedState&&(o=o.alternate,null!==o&&(o=o.memoizedState,null!==o&&(o=o.dehydrated,null!==o&&Vc(o)))))
case 19:case 17:case 20:case 21:return}throw Error(u(163))}function Ki(n,r,o){switch("function"==typeof Go&&Go(r),r.tag){case 0:case 11:case 14:case 15:case 22:if(null!==(n=r.updateQueue)&&null!==(n=n.lastEffect)){var a=n.next
cg(97<o?97:o,(function(){var n=a
do{var o=n.destroy
if(void 0!==o){var i=r
try{o()}catch(n){Ei(i,n)}}n=n.next}while(n!==a)}))}break
case 1:Fi(r),"function"==typeof(o=r.stateNode).componentWillUnmount&&function Di(n,r){try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(r){Ei(n,r)}}(r,o)
break
case 5:Fi(r)
break
case 4:Mi(n,r,o)}}function Ni(n){var r=n.alternate
n.return=null,n.child=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.alternate=null,n.firstEffect=null,n.lastEffect=null,n.pendingProps=null,n.memoizedProps=null,n.stateNode=null,null!==r&&Ni(r)}function Oi(n){return 5===n.tag||3===n.tag||4===n.tag}function Pi(n){e:{for(var r=n.return;null!==r;){if(Oi(r)){var o=r
break e}r=r.return}throw Error(u(160))}switch(r=o.stateNode,o.tag){case 5:var a=!1
break
case 3:case 4:r=r.containerInfo,a=!0
break
default:throw Error(u(161))}16&o.effectTag&&(Rb(r,""),o.effectTag&=-17)
e:t:for(o=n;;){for(;null===o.sibling;){if(null===o.return||Oi(o.return)){o=null
break e}o=o.return}for(o.sibling.return=o.return,o=o.sibling;5!==o.tag&&6!==o.tag&&18!==o.tag;){if(2&o.effectTag)continue t
if(null===o.child||4===o.tag)continue t
o.child.return=o,o=o.child}if(!(2&o.effectTag)){o=o.stateNode
break e}}a?function Qi(n,r,o){var a=n.tag,i=5===a||6===a
if(i)n=i?n.stateNode:n.stateNode.instance,r?8===o.nodeType?o.parentNode.insertBefore(n,r):o.insertBefore(n,r):(8===o.nodeType?(r=o.parentNode).insertBefore(n,o):(r=o).appendChild(n),null!==(o=o._reactRootContainer)&&void 0!==o||null!==r.onclick||(r.onclick=sd))
else if(4!==a&&null!==(n=n.child))for(Qi(n,r,o),n=n.sibling;null!==n;)Qi(n,r,o),n=n.sibling}(n,o,r):function Ri(n,r,o){var a=n.tag,i=5===a||6===a
if(i)n=i?n.stateNode:n.stateNode.instance,r?o.insertBefore(n,r):o.appendChild(n)
else if(4!==a&&null!==(n=n.child))for(Ri(n,r,o),n=n.sibling;null!==n;)Ri(n,r,o),n=n.sibling}(n,o,r)}function Mi(n,r,o){for(var a,i,s=r,y=!1;;){if(!y){y=s.return
e:for(;;){if(null===y)throw Error(u(160))
switch(a=y.stateNode,y.tag){case 5:i=!1
break e
case 3:case 4:a=a.containerInfo,i=!0
break e}y=y.return}y=!0}if(5===s.tag||6===s.tag){e:for(var w=n,E=s,P=o,j=E;;)if(Ki(w,j,P),null!==j.child&&4!==j.tag)j.child.return=j,j=j.child
else{if(j===E)break e
for(;null===j.sibling;){if(null===j.return||j.return===E)break e
j=j.return}j.sibling.return=j.return,j=j.sibling}i?(w=a,E=s.stateNode,8===w.nodeType?w.parentNode.removeChild(E):w.removeChild(E)):a.removeChild(s.stateNode)}else if(4===s.tag){if(null!==s.child){a=s.stateNode.containerInfo,i=!0,s.child.return=s,s=s.child
continue}}else if(Ki(n,s,o),null!==s.child){s.child.return=s,s=s.child
continue}if(s===r)break
for(;null===s.sibling;){if(null===s.return||s.return===r)return
4===(s=s.return).tag&&(y=!1)}s.sibling.return=s.return,s=s.sibling}}function Si(n,r){switch(r.tag){case 0:case 11:case 14:case 15:case 22:return void Hi(3,r)
case 1:return
case 5:var o=r.stateNode
if(null!=o){var a=r.memoizedProps,i=null!==n?n.memoizedProps:a
n=r.type
var s=r.updateQueue
if(r.updateQueue=null,null!==s){for(o[Yt]=a,"input"===n&&"radio"===a.type&&null!=a.name&&Bb(o,a),pd(n,i),r=pd(n,a),i=0;i<s.length;i+=2){var y=s[i],w=s[i+1]
"style"===y?md(o,w):"dangerouslySetInnerHTML"===y?ct(o,w):"children"===y?Rb(o,w):Xa(o,y,w,r)}switch(n){case"input":Cb(o,a)
break
case"textarea":Kb(o,a)
break
case"select":r=o._wrapperState.wasMultiple,o._wrapperState.wasMultiple=!!a.multiple,null!=(n=a.value)?Hb(o,!!a.multiple,n,!1):r!==!!a.multiple&&(null!=a.defaultValue?Hb(o,!!a.multiple,a.defaultValue,!0):Hb(o,!!a.multiple,a.multiple?[]:"",!1))}}}return
case 6:if(null===r.stateNode)throw Error(u(162))
return void(r.stateNode.nodeValue=r.memoizedProps)
case 3:return void((r=r.stateNode).hydrate&&(r.hydrate=!1,Vc(r.containerInfo)))
case 12:return
case 13:if(o=r,null===r.memoizedState?a=!1:(a=!0,o=r.child,Co=Sr()),null!==o)e:for(n=o;;){if(5===n.tag)s=n.stateNode,a?"function"==typeof(s=s.style).setProperty?s.setProperty("display","none","important"):s.display="none":(s=n.stateNode,i=null!=(i=n.memoizedProps.style)&&i.hasOwnProperty("display")?i.display:null,s.style.display=ld("display",i))
else if(6===n.tag)n.stateNode.nodeValue=a?"":n.memoizedProps
else{if(13===n.tag&&null!==n.memoizedState&&null===n.memoizedState.dehydrated){(s=n.child.sibling).return=n,n=s
continue}if(null!==n.child){n.child.return=n,n=n.child
continue}}if(n===o)break
for(;null===n.sibling;){if(null===n.return||n.return===o)break e
n=n.return}n.sibling.return=n.return,n=n.sibling}return void Ui(r)
case 19:return void Ui(r)
case 17:return}throw Error(u(163))}function Ui(n){var r=n.updateQueue
if(null!==r){n.updateQueue=null
var o=n.stateNode
null===o&&(o=n.stateNode=new uo),r.forEach((function(r){var a=Vi.bind(null,n,r)
o.has(r)||(o.add(r),r.then(a,a))}))}}var lo="function"==typeof WeakMap?WeakMap:Map
function Xi(n,r,o){(o=wg(o,null)).tag=3,o.payload={element:null}
var a=r.value
return o.callback=function(){Lo||(Lo=!0,Ho=a),Ci(n,r)},o}function $i(n,r,o){(o=wg(o,null)).tag=3
var a=n.type.getDerivedStateFromError
if("function"==typeof a){var i=r.value
o.payload=function(){return Ci(n,r),a(i)}}var s=n.stateNode
return null!==s&&"function"==typeof s.componentDidCatch&&(o.callback=function(){"function"!=typeof a&&(null===Mo?Mo=new Set([this]):Mo.add(this),Ci(n,r))
var o=r.stack
this.componentDidCatch(r.value,{componentStack:null!==o?o:""})}),o}var co,so=Math.ceil,fo=Me.ReactCurrentDispatcher,po=Me.ReactCurrentOwner,ho=0,mo=3,vo=4,bo=0,yo=null,wo=null,xo=0,ko=ho,Eo=null,So=1073741823,To=1073741823,Po=null,Oo=0,jo=!1,Co=0,_o=null,Lo=!1,Ho=null,Mo=null,zo=!1,Ro=null,No=90,Io=null,Ao=0,Do=null,Fo=0
function Gg(){return 0!=(48&bo)?1073741821-(Sr()/10|0):0!==Fo?Fo:Fo=1073741821-(Sr()/10|0)}function Hg(n,r,o){if(0==(2&(r=r.mode)))return 1073741823
var a=ag()
if(0==(4&r))return 99===a?1073741823:1073741822
if(0!=(16&bo))return xo
if(null!==o)n=hg(n,0|o.timeoutMs||5e3,250)
else switch(a){case 99:n=1073741823
break
case 98:n=hg(n,150,100)
break
case 97:case 96:n=hg(n,5e3,250)
break
case 95:n=2
break
default:throw Error(u(326))}return null!==yo&&n===xo&&--n,n}function Ig(n,r){if(50<Ao)throw Ao=0,Do=null,Error(u(185))
if(null!==(n=xj(n,r))){var o=ag()
1073741823===r?0!=(8&bo)&&0==(48&bo)?yj(n):(Z(n),0===bo&&gg()):Z(n),0==(4&bo)||98!==o&&99!==o||(null===Io?Io=new Map([[n,r]]):(void 0===(o=Io.get(n))||o>r)&&Io.set(n,r))}}function xj(n,r){n.expirationTime<r&&(n.expirationTime=r)
var o=n.alternate
null!==o&&o.expirationTime<r&&(o.expirationTime=r)
var a=n.return,i=null
if(null===a&&3===n.tag)i=n.stateNode
else for(;null!==a;){if(o=a.alternate,a.childExpirationTime<r&&(a.childExpirationTime=r),null!==o&&o.childExpirationTime<r&&(o.childExpirationTime=r),null===a.return&&3===a.tag){i=a.stateNode
break}a=a.return}return null!==i&&(yo===i&&(Bg(r),ko===vo&&xi(i,xo)),yi(i,r)),i}function zj(n){var r=n.lastExpiredTime
if(0!==r)return r
if(!Aj(n,r=n.firstPendingTime))return r
var o=n.lastPingedTime
return 2>=(n=o>(n=n.nextKnownPendingLevel)?o:n)&&r!==n?0:n}function Z(n){if(0!==n.lastExpiredTime)n.callbackExpirationTime=1073741823,n.callbackPriority=99,n.callbackNode=eg(yj.bind(null,n))
else{var r=zj(n),o=n.callbackNode
if(0===r)null!==o&&(n.callbackNode=null,n.callbackExpirationTime=0,n.callbackPriority=90)
else{var a=Gg()
if(1073741823===r?a=99:1===r||2===r?a=95:a=0>=(a=10*(1073741821-r)-10*(1073741821-a))?99:250>=a?98:5250>=a?97:95,null!==o){var i=n.callbackPriority
if(n.callbackExpirationTime===r&&i>=a)return
o!==vr&&lr(o)}n.callbackExpirationTime=r,n.callbackPriority=a,r=1073741823===r?eg(yj.bind(null,n)):dg(a,Bj.bind(null,n),{timeout:10*(1073741821-r)-Sr()}),n.callbackNode=r}}}function Bj(n,r){if(Fo=0,r)return Cj(n,r=Gg()),Z(n),null
var o=zj(n)
if(0!==o){if(r=n.callbackNode,0!=(48&bo))throw Error(u(327))
if(Dj(),n===yo&&o===xo||Ej(n,o),null!==wo){var a=bo
bo|=16
for(var i=Fj();;)try{Gj()
break}catch(r){Hj(n,r)}if(ng(),bo=a,fo.current=i,1===ko)throw r=Eo,Ej(n,o),xi(n,o),Z(n),r
if(null===wo)switch(i=n.finishedWork=n.current.alternate,n.finishedExpirationTime=o,a=ko,yo=null,a){case ho:case 1:throw Error(u(345))
case 2:Cj(n,2<o?2:o)
break
case mo:if(xi(n,o),o===(a=n.lastSuspendedTime)&&(n.nextKnownPendingLevel=Ij(i)),1073741823===So&&10<(i=Co+500-Sr())){if(jo){var s=n.lastPingedTime
if(0===s||s>=o){n.lastPingedTime=o,Ej(n,o)
break}}if(0!==(s=zj(n))&&s!==o)break
if(0!==a&&a!==o){n.lastPingedTime=a
break}n.timeoutHandle=Kt(Jj.bind(null,n),i)
break}Jj(n)
break
case vo:if(xi(n,o),o===(a=n.lastSuspendedTime)&&(n.nextKnownPendingLevel=Ij(i)),jo&&(0===(i=n.lastPingedTime)||i>=o)){n.lastPingedTime=o,Ej(n,o)
break}if(0!==(i=zj(n))&&i!==o)break
if(0!==a&&a!==o){n.lastPingedTime=a
break}if(1073741823!==To?a=10*(1073741821-To)-Sr():1073741823===So?a=0:(a=10*(1073741821-So)-5e3,0>(a=(i=Sr())-a)&&(a=0),(o=10*(1073741821-o)-i)<(a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*so(a/1960))-a)&&(a=o)),10<a){n.timeoutHandle=Kt(Jj.bind(null,n),a)
break}Jj(n)
break
case 5:if(1073741823!==So&&null!==Po){s=So
var y=Po
if(0>=(a=0|y.busyMinDurationMs)?a=0:(i=0|y.busyDelayMs,a=(s=Sr()-(10*(1073741821-s)-(0|y.timeoutMs||5e3)))<=i?0:i+a-s),10<a){xi(n,o),n.timeoutHandle=Kt(Jj.bind(null,n),a)
break}}Jj(n)
break
default:throw Error(u(329))}if(Z(n),n.callbackNode===r)return Bj.bind(null,n)}}return null}function yj(n){var r=n.lastExpiredTime
if(r=0!==r?r:1073741823,0!=(48&bo))throw Error(u(327))
if(Dj(),n===yo&&r===xo||Ej(n,r),null!==wo){var o=bo
bo|=16
for(var a=Fj();;)try{Kj()
break}catch(r){Hj(n,r)}if(ng(),bo=o,fo.current=a,1===ko)throw o=Eo,Ej(n,r),xi(n,r),Z(n),o
if(null!==wo)throw Error(u(261))
n.finishedWork=n.current.alternate,n.finishedExpirationTime=r,yo=null,Jj(n),Z(n)}return null}function Mj(n,r){var o=bo
bo|=1
try{return n(r)}finally{0===(bo=o)&&gg()}}function Nj(n,r){var o=bo
bo&=-2,bo|=8
try{return n(r)}finally{0===(bo=o)&&gg()}}function Ej(n,r){n.finishedWork=null,n.finishedExpirationTime=0
var o=n.timeoutHandle
if(-1!==o&&(n.timeoutHandle=-1,Xt(o)),null!==wo)for(o=wo.return;null!==o;){var a=o
switch(a.tag){case 1:null!=(a=a.type.childContextTypes)&&Df()
break
case 3:eh(),H(or),H(rr)
break
case 5:gh(a)
break
case 4:eh()
break
case 13:case 19:H(Fr)
break
case 10:og(a)}o=o.return}yo=n,wo=Sg(n.current,null),xo=r,ko=ho,Eo=null,To=So=1073741823,Po=null,Oo=0,jo=!1}function Hj(n,r){for(;;){try{if(ng(),Ur.current=Qr,$r)for(var o=Br.memoizedState;null!==o;){var a=o.queue
null!==a&&(a.pending=null),o=o.next}if(Wr=0,qr=Vr=Br=null,$r=!1,null===wo||null===wo.return)return ko=1,Eo=r,wo=null
e:{var i=n,s=wo.return,y=wo,w=r
if(r=xo,y.effectTag|=2048,y.firstEffect=y.lastEffect=null,null!==w&&"object"==typeof w&&"function"==typeof w.then){var E=w
if(0==(2&y.mode)){var P=y.alternate
P?(y.updateQueue=P.updateQueue,y.memoizedState=P.memoizedState,y.expirationTime=P.expirationTime):(y.updateQueue=null,y.memoizedState=null)}var j=0!=(1&Fr.current),_=s
do{var B
if(B=13===_.tag){var q=_.memoizedState
if(null!==q)B=null!==q.dehydrated
else{var $=_.memoizedProps
B=void 0!==$.fallback&&(!0!==$.unstable_avoidThisFallback||!j)}}if(B){var ne=_.updateQueue
if(null===ne){var oe=new Set
oe.add(E),_.updateQueue=oe}else ne.add(E)
if(0==(2&_.mode)){if(_.effectTag|=64,y.effectTag&=-2981,1===y.tag)if(null===y.alternate)y.tag=17
else{var ie=wg(1073741823,null)
ie.tag=2,xg(y,ie)}y.expirationTime=1073741823
break e}w=void 0,y=r
var le=i.pingCache
if(null===le?(le=i.pingCache=new lo,w=new Set,le.set(E,w)):void 0===(w=le.get(E))&&(w=new Set,le.set(E,w)),!w.has(y)){w.add(y)
var se=Oj.bind(null,i,E,y)
E.then(se,se)}_.effectTag|=4096,_.expirationTime=r
break e}_=_.return}while(null!==_)
w=Error((pb(y.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."+qb(y))}5!==ko&&(ko=2),w=Ai(w,y),_=s
do{switch(_.tag){case 3:E=w,_.effectTag|=4096,_.expirationTime=r,yg(_,Xi(_,E,r))
break e
case 1:E=w
var pe=_.type,he=_.stateNode
if(0==(64&_.effectTag)&&("function"==typeof pe.getDerivedStateFromError||null!==he&&"function"==typeof he.componentDidCatch&&(null===Mo||!Mo.has(he)))){_.effectTag|=4096,_.expirationTime=r,yg(_,$i(_,E,r))
break e}}_=_.return}while(null!==_)}wo=Pj(wo)}catch(n){r=n
continue}break}}function Fj(){var n=fo.current
return fo.current=Qr,null===n?Qr:n}function Ag(n,r){n<So&&2<n&&(So=n),null!==r&&n<To&&2<n&&(To=n,Po=r)}function Bg(n){n>Oo&&(Oo=n)}function Kj(){for(;null!==wo;)wo=Qj(wo)}function Gj(){for(;null!==wo&&!br();)wo=Qj(wo)}function Qj(n){var r=co(n.alternate,n,xo)
return n.memoizedProps=n.pendingProps,null===r&&(r=Pj(n)),po.current=null,r}function Pj(n){wo=n
do{var r=wo.alternate
if(n=wo.return,0==(2048&wo.effectTag)){if(r=si(r,wo,xo),1===xo||1!==wo.childExpirationTime){for(var o=0,a=wo.child;null!==a;){var i=a.expirationTime,s=a.childExpirationTime
i>o&&(o=i),s>o&&(o=s),a=a.sibling}wo.childExpirationTime=o}if(null!==r)return r
null!==n&&0==(2048&n.effectTag)&&(null===n.firstEffect&&(n.firstEffect=wo.firstEffect),null!==wo.lastEffect&&(null!==n.lastEffect&&(n.lastEffect.nextEffect=wo.firstEffect),n.lastEffect=wo.lastEffect),1<wo.effectTag&&(null!==n.lastEffect?n.lastEffect.nextEffect=wo:n.firstEffect=wo,n.lastEffect=wo))}else{if(null!==(r=zi(wo)))return r.effectTag&=2047,r
null!==n&&(n.firstEffect=n.lastEffect=null,n.effectTag|=2048)}if(null!==(r=wo.sibling))return r
wo=n}while(null!==wo)
return ko===ho&&(ko=5),null}function Ij(n){var r=n.expirationTime
return r>(n=n.childExpirationTime)?r:n}function Jj(n){var r=ag()
return cg(99,Sj.bind(null,n,r)),null}function Sj(n,r){do{Dj()}while(null!==Ro)
if(0!=(48&bo))throw Error(u(327))
var o=n.finishedWork,a=n.finishedExpirationTime
if(null===o)return null
if(n.finishedWork=null,n.finishedExpirationTime=0,o===n.current)throw Error(u(177))
n.callbackNode=null,n.callbackExpirationTime=0,n.callbackPriority=90,n.nextKnownPendingLevel=0
var i=Ij(o)
if(n.firstPendingTime=i,a<=n.lastSuspendedTime?n.firstSuspendedTime=n.lastSuspendedTime=n.nextKnownPendingLevel=0:a<=n.firstSuspendedTime&&(n.firstSuspendedTime=a-1),a<=n.lastPingedTime&&(n.lastPingedTime=0),a<=n.lastExpiredTime&&(n.lastExpiredTime=0),n===yo&&(wo=yo=null,xo=0),1<o.effectTag?null!==o.lastEffect?(o.lastEffect.nextEffect=o,i=o.firstEffect):i=o:i=o.firstEffect,null!==i){var s=bo
bo|=32,po.current=null,$t=Gt
var y=xd()
if(yd(y)){if("selectionStart"in y)var w={start:y.selectionStart,end:y.selectionEnd}
else e:{var E=(w=(w=y.ownerDocument)&&w.defaultView||window).getSelection&&w.getSelection()
if(E&&0!==E.rangeCount){w=E.anchorNode
var P=E.anchorOffset,j=E.focusNode
E=E.focusOffset
try{w.nodeType,j.nodeType}catch(n){w=null
break e}var _=0,B=-1,q=-1,$=0,ne=0,oe=y,ie=null
t:for(;;){for(var le;oe!==w||0!==P&&3!==oe.nodeType||(B=_+P),oe!==j||0!==E&&3!==oe.nodeType||(q=_+E),3===oe.nodeType&&(_+=oe.nodeValue.length),null!==(le=oe.firstChild);)ie=oe,oe=le
for(;;){if(oe===y)break t
if(ie===w&&++$===P&&(B=_),ie===j&&++ne===E&&(q=_),null!==(le=oe.nextSibling))break
ie=(oe=ie).parentNode}oe=le}w=-1===B||-1===q?null:{start:B,end:q}}else w=null}w=w||{start:0,end:0}}else w=null
Qt={activeElementDetached:null,focusedElem:y,selectionRange:w},Gt=!1,_o=i
do{try{Tj()}catch(n){if(null===_o)throw Error(u(330))
Ei(_o,n),_o=_o.nextEffect}}while(null!==_o)
_o=i
do{try{for(y=n,w=r;null!==_o;){var se=_o.effectTag
if(16&se&&Rb(_o.stateNode,""),128&se){var pe=_o.alternate
if(null!==pe){var he=pe.ref
null!==he&&("function"==typeof he?he(null):he.current=null)}}switch(1038&se){case 2:Pi(_o),_o.effectTag&=-3
break
case 6:Pi(_o),_o.effectTag&=-3,Si(_o.alternate,_o)
break
case 1024:_o.effectTag&=-1025
break
case 1028:_o.effectTag&=-1025,Si(_o.alternate,_o)
break
case 4:Si(_o.alternate,_o)
break
case 8:Mi(y,P=_o,w),Ni(P)}_o=_o.nextEffect}}catch(n){if(null===_o)throw Error(u(330))
Ei(_o,n),_o=_o.nextEffect}}while(null!==_o)
if(he=Qt,pe=xd(),se=he.focusedElem,w=he.selectionRange,pe!==se&&se&&se.ownerDocument&&function wd(n,r){return!(!n||!r)&&(n===r||(!n||3!==n.nodeType)&&(r&&3===r.nodeType?wd(n,r.parentNode):"contains"in n?n.contains(r):!!n.compareDocumentPosition&&!!(16&n.compareDocumentPosition(r))))}(se.ownerDocument.documentElement,se)){null!==w&&yd(se)&&(pe=w.start,void 0===(he=w.end)&&(he=pe),"selectionStart"in se?(se.selectionStart=pe,se.selectionEnd=Math.min(he,se.value.length)):(he=(pe=se.ownerDocument||document)&&pe.defaultView||window).getSelection&&(he=he.getSelection(),P=se.textContent.length,y=Math.min(w.start,P),w=void 0===w.end?y:Math.min(w.end,P),!he.extend&&y>w&&(P=w,w=y,y=P),P=vd(se,y),j=vd(se,w),P&&j&&(1!==he.rangeCount||he.anchorNode!==P.node||he.anchorOffset!==P.offset||he.focusNode!==j.node||he.focusOffset!==j.offset)&&((pe=pe.createRange()).setStart(P.node,P.offset),he.removeAllRanges(),y>w?(he.addRange(pe),he.extend(j.node,j.offset)):(pe.setEnd(j.node,j.offset),he.addRange(pe))))),pe=[]
for(he=se;he=he.parentNode;)1===he.nodeType&&pe.push({element:he,left:he.scrollLeft,top:he.scrollTop})
for("function"==typeof se.focus&&se.focus(),se=0;se<pe.length;se++)(he=pe[se]).element.scrollLeft=he.left,he.element.scrollTop=he.top}Gt=!!$t,Qt=$t=null,n.current=o,_o=i
do{try{for(se=n;null!==_o;){var me=_o.effectTag
if(36&me&&Ji(se,_o.alternate,_o),128&me){pe=void 0
var ge=_o.ref
if(null!==ge){var ve=_o.stateNode
switch(_o.tag){case 5:pe=ve
break
default:pe=ve}"function"==typeof ge?ge(pe):ge.current=pe}}_o=_o.nextEffect}}catch(n){if(null===_o)throw Error(u(330))
Ei(_o,n),_o=_o.nextEffect}}while(null!==_o)
_o=null,yr(),bo=s}else n.current=o
if(zo)zo=!1,Ro=n,No=r
else for(_o=i;null!==_o;)r=_o.nextEffect,_o.nextEffect=null,_o=r
if(0===(r=n.firstPendingTime)&&(Mo=null),1073741823===r?n===Do?Ao++:(Ao=0,Do=n):Ao=0,"function"==typeof Uo&&Uo(o.stateNode,a),Z(n),Lo)throw Lo=!1,n=Ho,Ho=null,n
return 0!=(8&bo)||gg(),null}function Tj(){for(;null!==_o;){var n=_o.effectTag
0!=(256&n)&&Gi(_o.alternate,_o),0==(512&n)||zo||(zo=!0,dg(97,(function(){return Dj(),null}))),_o=_o.nextEffect}}function Dj(){if(90!==No){var n=97<No?97:No
return No=90,cg(n,Vj)}}function Vj(){if(null===Ro)return!1
var n=Ro
if(Ro=null,0!=(48&bo))throw Error(u(331))
var r=bo
for(bo|=32,n=n.current.firstEffect;null!==n;){try{var o=n
if(0!=(512&o.effectTag))switch(o.tag){case 0:case 11:case 15:case 22:Hi(5,o),Ii(5,o)}}catch(r){if(null===n)throw Error(u(330))
Ei(n,r)}o=n.nextEffect,n.nextEffect=null,n=o}return bo=r,gg(),!0}function Wj(n,r,o){xg(n,r=Xi(n,r=Ai(o,r),1073741823)),null!==(n=xj(n,1073741823))&&Z(n)}function Ei(n,r){if(3===n.tag)Wj(n,n,r)
else for(var o=n.return;null!==o;){if(3===o.tag){Wj(o,n,r)
break}if(1===o.tag){var a=o.stateNode
if("function"==typeof o.type.getDerivedStateFromError||"function"==typeof a.componentDidCatch&&(null===Mo||!Mo.has(a))){xg(o,n=$i(o,n=Ai(r,n),1073741823)),null!==(o=xj(o,1073741823))&&Z(o)
break}}o=o.return}}function Oj(n,r,o){var a=n.pingCache
null!==a&&a.delete(r),yo===n&&xo===o?ko===vo||ko===mo&&1073741823===So&&Sr()-Co<500?Ej(n,xo):jo=!0:Aj(n,o)&&(0!==(r=n.lastPingedTime)&&r<o||(n.lastPingedTime=o,Z(n)))}function Vi(n,r){var o=n.stateNode
null!==o&&o.delete(r),0===(r=0)&&(r=Hg(r=Gg(),n,null)),null!==(n=xj(n,r))&&Z(n)}co=function(n,r,o){var a=r.expirationTime
if(null!==n){var i=r.pendingProps
if(n.memoizedProps!==i||or.current)no=!0
else{if(a<o){switch(no=!1,r.tag){case 3:hi(r),Xh()
break
case 5:if(fh(r),4&r.mode&&1!==o&&i.hidden)return r.expirationTime=r.childExpirationTime=1,null
break
case 1:L(r.type)&&Gf(r)
break
case 4:dh(r,r.stateNode.containerInfo)
break
case 10:a=r.memoizedProps.value,i=r.type._context,I(Tr,i._currentValue),i._currentValue=a
break
case 13:if(null!==r.memoizedState)return 0!==(a=r.child.childExpirationTime)&&a>=o?ji(n,r,o):(I(Fr,1&Fr.current),null!==(r=$h(n,r,o))?r.sibling:null)
I(Fr,1&Fr.current)
break
case 19:if(a=r.childExpirationTime>=o,0!=(64&n.effectTag)){if(a)return mi(n,r,o)
r.effectTag|=64}if(null!==(i=r.memoizedState)&&(i.rendering=null,i.tail=null),I(Fr,Fr.current),!a)return null}return $h(n,r,o)}no=!1}}else no=!1
switch(r.expirationTime=0,r.tag){case 2:if(a=r.type,null!==n&&(n.alternate=null,r.alternate=null,r.effectTag|=2),n=r.pendingProps,i=Cf(r,rr.current),qg(r,o),i=oh(null,r,a,n,i,o),r.effectTag|=1,"object"==typeof i&&null!==i&&"function"==typeof i.render&&void 0===i.$$typeof){if(r.tag=1,r.memoizedState=null,r.updateQueue=null,L(a)){var s=!0
Gf(r)}else s=!1
r.memoizedState=null!==i.state&&void 0!==i.state?i.state:null,ug(r)
var y=a.getDerivedStateFromProps
"function"==typeof y&&Fg(r,a,y,n),i.updater=Hr,r.stateNode=i,i._reactInternalFiber=r,Ng(r,a,n,o),r=gi(null,r,a,!0,s,o)}else r.tag=0,R(null,r,i,o),r=r.child
return r
case 16:e:{if(i=r.elementType,null!==n&&(n.alternate=null,r.alternate=null,r.effectTag|=2),n=r.pendingProps,function ob(n){if(-1===n._status){n._status=0
var r=n._ctor
r=r(),n._result=r,r.then((function(r){0===n._status&&(r=r.default,n._status=1,n._result=r)}),(function(r){0===n._status&&(n._status=2,n._result=r)}))}}(i),1!==i._status)throw i._result
switch(i=i._result,r.type=i,s=r.tag=function Xj(n){if("function"==typeof n)return bi(n)?1:0
if(null!=n){if((n=n.$$typeof)===Ye)return 11
if(n===nt)return 14}return 2}(i),n=ig(i,n),s){case 0:r=di(null,r,i,n,o)
break e
case 1:r=fi(null,r,i,n,o)
break e
case 11:r=Zh(null,r,i,n,o)
break e
case 14:r=ai(null,r,i,ig(i.type,n),a,o)
break e}throw Error(u(306,i,""))}return r
case 0:return a=r.type,i=r.pendingProps,di(n,r,a,i=r.elementType===a?i:ig(a,i),o)
case 1:return a=r.type,i=r.pendingProps,fi(n,r,a,i=r.elementType===a?i:ig(a,i),o)
case 3:if(hi(r),a=r.updateQueue,null===n||null===a)throw Error(u(282))
if(a=r.pendingProps,i=null!==(i=r.memoizedState)?i.element:null,vg(n,r),zg(r,a,null,o),(a=r.memoizedState.element)===i)Xh(),r=$h(n,r,o)
else{if((i=r.stateNode.hydrate)&&(Yr=Jd(r.stateNode.containerInfo.firstChild),Jr=r,i=eo=!0),i)for(o=Rr(r,null,a,o),r.child=o;o;)o.effectTag=-3&o.effectTag|1024,o=o.sibling
else R(n,r,a,o),Xh()
r=r.child}return r
case 5:return fh(r),null===n&&Uh(r),a=r.type,i=r.pendingProps,s=null!==n?n.memoizedProps:null,y=i.children,Gd(a,i)?y=null:null!==s&&Gd(a,s)&&(r.effectTag|=16),ei(n,r),4&r.mode&&1!==o&&i.hidden?(r.expirationTime=r.childExpirationTime=1,r=null):(R(n,r,y,o),r=r.child),r
case 6:return null===n&&Uh(r),null
case 13:return ji(n,r,o)
case 4:return dh(r,r.stateNode.containerInfo),a=r.pendingProps,null===n?r.child=zr(r,null,a,o):R(n,r,a,o),r.child
case 11:return a=r.type,i=r.pendingProps,Zh(n,r,a,i=r.elementType===a?i:ig(a,i),o)
case 7:return R(n,r,r.pendingProps,o),r.child
case 8:case 12:return R(n,r,r.pendingProps.children,o),r.child
case 10:e:{a=r.type._context,i=r.pendingProps,y=r.memoizedProps,s=i.value
var w=r.type._context
if(I(Tr,w._currentValue),w._currentValue=s,null!==y)if(w=y.value,0===(s=zn(w,s)?0:0|("function"==typeof a._calculateChangedBits?a._calculateChangedBits(w,s):1073741823))){if(y.children===i.children&&!or.current){r=$h(n,r,o)
break e}}else for(null!==(w=r.child)&&(w.return=r);null!==w;){var E=w.dependencies
if(null!==E){y=w.child
for(var P=E.firstContext;null!==P;){if(P.context===a&&0!=(P.observedBits&s)){1===w.tag&&((P=wg(o,null)).tag=2,xg(w,P)),w.expirationTime<o&&(w.expirationTime=o),null!==(P=w.alternate)&&P.expirationTime<o&&(P.expirationTime=o),pg(w.return,o),E.expirationTime<o&&(E.expirationTime=o)
break}P=P.next}}else y=10===w.tag&&w.type===r.type?null:w.child
if(null!==y)y.return=w
else for(y=w;null!==y;){if(y===r){y=null
break}if(null!==(w=y.sibling)){w.return=y.return,y=w
break}y=y.return}w=y}R(n,r,i.children,o),r=r.child}return r
case 9:return i=r.type,a=(s=r.pendingProps).children,qg(r,o),a=a(i=sg(i,s.unstable_observedBits)),r.effectTag|=1,R(n,r,a,o),r.child
case 14:return s=ig(i=r.type,r.pendingProps),ai(n,r,i,s=ig(i.type,s),a,o)
case 15:return ci(n,r,r.type,r.pendingProps,a,o)
case 17:return a=r.type,i=r.pendingProps,i=r.elementType===a?i:ig(a,i),null!==n&&(n.alternate=null,r.alternate=null,r.effectTag|=2),r.tag=1,L(a)?(n=!0,Gf(r)):n=!1,qg(r,o),Lg(r,a,i),Ng(r,a,i,o),gi(null,r,a,!0,n,o)
case 19:return mi(n,r,o)}throw Error(u(156,r.tag))}
var Uo=null,Go=null
function Zj(n,r,o,a){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.effectTag=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childExpirationTime=this.expirationTime=0,this.alternate=null}function Sh(n,r,o,a){return new Zj(n,r,o,a)}function bi(n){return!(!(n=n.prototype)||!n.isReactComponent)}function Sg(n,r){var o=n.alternate
return null===o?((o=Sh(n.tag,r,n.key,n.mode)).elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=r,o.effectTag=0,o.nextEffect=null,o.firstEffect=null,o.lastEffect=null),o.childExpirationTime=n.childExpirationTime,o.expirationTime=n.expirationTime,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,r=n.dependencies,o.dependencies=null===r?null:{expirationTime:r.expirationTime,firstContext:r.firstContext,responders:r.responders},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function Ug(n,r,o,a,i,s){var y=2
if(a=n,"function"==typeof n)bi(n)&&(y=1)
else if("string"==typeof n)y=5
else e:switch(n){case Ue:return Wg(o.children,i,s,r)
case Xe:y=8,i|=7
break
case We:y=8,i|=1
break
case Be:return(n=Sh(12,o,r,8|i)).elementType=Be,n.type=Be,n.expirationTime=s,n
case et:return(n=Sh(13,o,r,i)).type=et,n.elementType=et,n.expirationTime=s,n
case tt:return(n=Sh(19,o,r,i)).elementType=tt,n.expirationTime=s,n
default:if("object"==typeof n&&null!==n)switch(n.$$typeof){case Ve:y=10
break e
case $e:y=9
break e
case Ye:y=11
break e
case nt:y=14
break e
case rt:y=16,a=null
break e
case ot:y=22
break e}throw Error(u(130,null==n?n:typeof n,""))}return(r=Sh(y,o,r,i)).elementType=n,r.type=a,r.expirationTime=s,r}function Wg(n,r,o,a){return(n=Sh(7,n,a,r)).expirationTime=o,n}function Tg(n,r,o){return(n=Sh(6,n,null,r)).expirationTime=o,n}function Vg(n,r,o){return(r=Sh(4,null!==n.children?n.children:[],n.key,r)).expirationTime=o,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function ak(n,r,o){this.tag=r,this.current=null,this.containerInfo=n,this.pingCache=this.pendingChildren=null,this.finishedExpirationTime=0,this.finishedWork=null,this.timeoutHandle=-1,this.pendingContext=this.context=null,this.hydrate=o,this.callbackNode=null,this.callbackPriority=90,this.lastExpiredTime=this.lastPingedTime=this.nextKnownPendingLevel=this.lastSuspendedTime=this.firstSuspendedTime=this.firstPendingTime=0}function Aj(n,r){var o=n.firstSuspendedTime
return n=n.lastSuspendedTime,0!==o&&o>=r&&n<=r}function xi(n,r){var o=n.firstSuspendedTime,a=n.lastSuspendedTime
o<r&&(n.firstSuspendedTime=r),(a>r||0===o)&&(n.lastSuspendedTime=r),r<=n.lastPingedTime&&(n.lastPingedTime=0),r<=n.lastExpiredTime&&(n.lastExpiredTime=0)}function yi(n,r){r>n.firstPendingTime&&(n.firstPendingTime=r)
var o=n.firstSuspendedTime
0!==o&&(r>=o?n.firstSuspendedTime=n.lastSuspendedTime=n.nextKnownPendingLevel=0:r>=n.lastSuspendedTime&&(n.lastSuspendedTime=r+1),r>n.nextKnownPendingLevel&&(n.nextKnownPendingLevel=r))}function Cj(n,r){var o=n.lastExpiredTime;(0===o||o>r)&&(n.lastExpiredTime=r)}function bk(n,r,o,a){var i=r.current,s=Gg(),y=_r.suspense
s=Hg(s,i,y)
e:if(o){t:{if(dc(o=o._reactInternalFiber)!==o||1!==o.tag)throw Error(u(170))
var w=o
do{switch(w.tag){case 3:w=w.stateNode.context
break t
case 1:if(L(w.type)){w=w.stateNode.__reactInternalMemoizedMergedChildContext
break t}}w=w.return}while(null!==w)
throw Error(u(171))}if(1===o.tag){var E=o.type
if(L(E)){o=Ff(o,E,w)
break e}}o=w}else o=nr
return null===r.context?r.context=o:r.pendingContext=o,(r=wg(s,y)).payload={element:n},null!==(a=void 0===a?null:a)&&(r.callback=a),xg(i,r),Ig(i,s),s}function ck(n){if(!(n=n.current).child)return null
switch(n.child.tag){case 5:default:return n.child.stateNode}}function dk(n,r){null!==(n=n.memoizedState)&&null!==n.dehydrated&&n.retryTime<r&&(n.retryTime=r)}function ek(n,r){dk(n,r),(n=n.alternate)&&dk(n,r)}function fk(n,r,o){var a=new ak(n,r,o=null!=o&&!0===o.hydrate),i=Sh(3,null,null,2===r?7:1===r?3:0)
a.current=i,i.stateNode=a,ug(i),n[en]=a.current,o&&0!==r&&function Jc(n,r){var o=cc(r)
Ht.forEach((function(n){uc(n,r,o)})),Mt.forEach((function(n){uc(n,r,o)}))}(0,9===n.nodeType?n:n.ownerDocument),this._internalRoot=a}function gk(n){return!(!n||1!==n.nodeType&&9!==n.nodeType&&11!==n.nodeType&&(8!==n.nodeType||" react-mount-point-unstable "!==n.nodeValue))}function ik(n,r,o,a,i){var s=o._reactRootContainer
if(s){var y=s._internalRoot
if("function"==typeof i){var w=i
i=function(){var n=ck(y)
w.call(n)}}bk(r,y,n,i)}else{if(s=o._reactRootContainer=function hk(n,r){if(r||(r=!(!(r=n?9===n.nodeType?n.documentElement:n.firstChild:null)||1!==r.nodeType||!r.hasAttribute("data-reactroot"))),!r)for(var o;o=n.lastChild;)n.removeChild(o)
return new fk(n,0,r?{hydrate:!0}:void 0)}(o,a),y=s._internalRoot,"function"==typeof i){var E=i
i=function(){var n=ck(y)
E.call(n)}}Nj((function(){bk(r,y,n,i)}))}return ck(y)}function jk(n,r,o){var a=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null
return{$$typeof:Fe,key:null==a?null:""+a,children:n,containerInfo:r,implementation:o}}function kk(n,r){var o=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null
if(!gk(r))throw Error(u(200))
return jk(n,r,null,o)}fk.prototype.render=function(n){bk(n,this._internalRoot,null,null)},fk.prototype.unmount=function(){var n=this._internalRoot,r=n.containerInfo
bk(null,n,null,(function(){r[en]=null}))},xt=function(n){if(13===n.tag){var r=hg(Gg(),150,100)
Ig(n,r),ek(n,r)}},kt=function(n){13===n.tag&&(Ig(n,3),ek(n,3))},Et=function(n){if(13===n.tag){var r=Gg()
Ig(n,r=Hg(r,n,null)),ek(n,r)}},he=function(n,r,o){switch(r){case"input":if(Cb(n,o),r=o.name,"radio"===o.type&&null!=r){for(o=n;o.parentNode;)o=o.parentNode
for(o=o.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<o.length;r++){var a=o[r]
if(a!==n&&a.form===n.form){var i=Qd(a)
if(!i)throw Error(u(90))
yb(a),Cb(a,i)}}}break
case"textarea":Kb(n,o)
break
case"select":null!=(r=o.value)&&Hb(n,!!o.multiple,r,!1)}},Fa=Mj,Ga=function(n,r,o,a,i){var s=bo
bo|=4
try{return cg(98,n.bind(null,r,o,a,i))}finally{0===(bo=s)&&gg()}},Ha=function(){0==(49&bo)&&(function Lj(){if(null!==Io){var n=Io
Io=null,n.forEach((function(n,r){Cj(r,n),Z(r)})),gg()}}(),Dj())},ve=function(n,r){var o=bo
bo|=2
try{return n(r)}finally{0===(bo=o)&&gg()}}
var Wo,Bo,Vo={Events:[Nc,Pd,Qd,xa,ie,Xd,function(n){jc(n,Wd)},Da,Ea,id,mc,Dj,{current:!1}]}
Bo=(Wo={findFiberByHostInstance:tc,bundleType:0,version:"16.13.1",rendererPackageName:"react-dom"}).findFiberByHostInstance,function Yj(n){if("undefined"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return!1
var r=__REACT_DEVTOOLS_GLOBAL_HOOK__
if(r.isDisabled||!r.supportsFiber)return!0
try{var o=r.inject(n)
Uo=function(n){try{r.onCommitFiberRoot(o,n,void 0,64==(64&n.current.effectTag))}catch(n){}},Go=function(n){try{r.onCommitFiberUnmount(o,n)}catch(n){}}}catch(n){}return!0}(i({},Wo,{overrideHookState:null,overrideProps:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Me.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return null===(n=hc(n))?null:n.stateNode},findFiberByHostInstance:function(n){return Bo?Bo(n):null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null})),r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Vo,r.createPortal=kk,r.findDOMNode=function(n){if(null==n)return null
if(1===n.nodeType)return n
var r=n._reactInternalFiber
if(void 0===r){if("function"==typeof n.render)throw Error(u(188))
throw Error(u(268,Object.keys(n)))}return n=null===(n=hc(r))?null:n.stateNode},r.flushSync=function(n,r){if(0!=(48&bo))throw Error(u(187))
var o=bo
bo|=1
try{return cg(99,n.bind(null,r))}finally{bo=o,gg()}},r.hydrate=function(n,r,o){if(!gk(r))throw Error(u(200))
return ik(null,n,r,!0,o)},r.render=function(n,r,o){if(!gk(r))throw Error(u(200))
return ik(null,n,r,!1,o)},r.unmountComponentAtNode=function(n){if(!gk(n))throw Error(u(40))
return!!n._reactRootContainer&&(Nj((function(){ik(null,null,n,!1,(function(){n._reactRootContainer=null,n[en]=null}))})),!0)},r.unstable_batchedUpdates=Mj,r.unstable_createPortal=function(n,r){return kk(n,r,2<arguments.length&&void 0!==arguments[2]?arguments[2]:null)},r.unstable_renderSubtreeIntoContainer=function(n,r,o,a){if(!gk(o))throw Error(u(200))
if(null==n||void 0===n._reactInternalFiber)throw Error(u(38))
return ik(n,r,o,!1,a)},r.version="16.13.1"}}])

//# sourceMappingURL=vendors.0fa751298b82eaaca2c4.js.map