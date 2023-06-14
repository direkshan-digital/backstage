/*! For license information please see 2dde732e.f8c83c4b.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[994963],{639413:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=t(824246),o=t(511151);const i={id:"plugin-periskop.periskopapioptions",title:"PeriskopApiOptions",description:"API reference for PeriskopApiOptions"},s=void 0,c={unversionedId:"reference/plugin-periskop.periskopapioptions",id:"reference/plugin-periskop.periskopapioptions",title:"PeriskopApiOptions",description:"API reference for PeriskopApiOptions",source:"@site/../docs/reference/plugin-periskop.periskopapioptions.md",sourceDirName:"reference",slug:"/reference/plugin-periskop.periskopapioptions",permalink:"/docs/reference/plugin-periskop.periskopapioptions",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-periskop.periskopapioptions.md",tags:[],version:"current",frontMatter:{id:"plugin-periskop.periskopapioptions",title:"PeriskopApiOptions",description:"API reference for PeriskopApiOptions"}},u={},p=[];function a(e){const r=Object.assign({p:"p",a:"a",code:"code",b:"b",pre:"pre"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-periskop",children:(0,n.jsx)(r.code,{children:"@backstage/plugin-periskop"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-periskop.periskopapioptions",children:(0,n.jsx)(r.code,{children:"PeriskopApiOptions"})})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.b,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"export type PeriskopApiOptions = {\n    discoveryApi: DiscoveryApi;\n    configApi: ConfigApi;\n};\n"})}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.b,{children:"References:"})," ",(0,n.jsx)(r.a,{href:"/docs/reference/core-plugin-api.discoveryapi",children:"DiscoveryApi"}),", ",(0,n.jsx)(r.a,{href:"/docs/reference/core-plugin-api.configapi",children:"ConfigApi"})]})]})}const f=function(e={}){const{wrapper:r}=Object.assign({},(0,o.ah)(),e.components);return r?(0,n.jsx)(r,Object.assign({},e,{children:(0,n.jsx)(a,e)})):a(e)}},862525:e=>{var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var i,s,c=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),u=1;u<arguments.length;u++){for(var p in i=Object(arguments[u]))t.call(i,p)&&(c[p]=i[p]);if(r){s=r(i);for(var a=0;a<s.length;a++)n.call(i,s[a])&&(c[s[a]]=i[s[a]])}}return c}},371426:(e,r,t)=>{t(862525);var n=t(827378),o=60103;if(r.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var i=Symbol.for;o=i("react.element"),r.Fragment=i("react.fragment")}var s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c=Object.prototype.hasOwnProperty,u={key:!0,ref:!0,__self:!0,__source:!0};function p(e,r,t){var n,i={},p=null,a=null;for(n in void 0!==t&&(p=""+t),void 0!==r.key&&(p=""+r.key),void 0!==r.ref&&(a=r.ref),r)c.call(r,n)&&!u.hasOwnProperty(n)&&(i[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===i[n]&&(i[n]=r[n]);return{$$typeof:o,type:e,key:p,ref:a,props:i,_owner:s.current}}r.jsx=p,r.jsxs=p},541535:(e,r,t)=>{var n=t(862525),o=60103,i=60106;r.Fragment=60107,r.StrictMode=60108,r.Profiler=60114;var s=60109,c=60110,u=60112;r.Suspense=60113;var p=60115,a=60116;if("function"==typeof Symbol&&Symbol.for){var f=Symbol.for;o=f("react.element"),i=f("react.portal"),r.Fragment=f("react.fragment"),r.StrictMode=f("react.strict_mode"),r.Profiler=f("react.profiler"),s=f("react.provider"),c=f("react.context"),u=f("react.forward_ref"),r.Suspense=f("react.suspense"),p=f("react.memo"),a=f("react.lazy")}var l="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function v(e,r,t){this.props=e,this.context=r,this.refs=h,this.updater=t||y}function g(){}function m(e,r,t){this.props=e,this.context=r,this.refs=h,this.updater=t||y}v.prototype.isReactComponent={},v.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,r,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=v.prototype;var k=m.prototype=new g;k.constructor=m,n(k,v.prototype),k.isPureReactComponent=!0;var _={current:null},b=Object.prototype.hasOwnProperty,j={key:!0,ref:!0,__self:!0,__source:!0};function O(e,r,t){var n,i={},s=null,c=null;if(null!=r)for(n in void 0!==r.ref&&(c=r.ref),void 0!==r.key&&(s=""+r.key),r)b.call(r,n)&&!j.hasOwnProperty(n)&&(i[n]=r[n]);var u=arguments.length-2;if(1===u)i.children=t;else if(1<u){for(var p=Array(u),a=0;a<u;a++)p[a]=arguments[a+2];i.children=p}if(e&&e.defaultProps)for(n in u=e.defaultProps)void 0===i[n]&&(i[n]=u[n]);return{$$typeof:o,type:e,key:s,ref:c,props:i,_owner:_.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var x=/\/+/g;function P(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function S(e,r,t,n,s){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var u=!1;if(null===e)u=!0;else switch(c){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case o:case i:u=!0}}if(u)return s=s(u=e),e=""===n?"."+P(u,0):n,Array.isArray(s)?(t="",null!=e&&(t=e.replace(x,"$&/")+"/"),S(s,r,t,"",(function(e){return e}))):null!=s&&(w(s)&&(s=function(e,r){return{$$typeof:o,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(s,t+(!s.key||u&&u.key===s.key?"":(""+s.key).replace(x,"$&/")+"/")+e)),r.push(s)),1;if(u=0,n=""===n?".":n+":",Array.isArray(e))for(var p=0;p<e.length;p++){var a=n+P(c=e[p],p);u+=S(c,r,t,a,s)}else if(a=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=l&&e[l]||e["@@iterator"])?e:null}(e),"function"==typeof a)for(e=a.call(e),p=0;!(c=e.next()).done;)u+=S(c=c.value,r,t,a=n+P(c,p++),s);else if("object"===c)throw r=""+e,Error(d(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return u}function C(e,r,t){if(null==e)return e;var n=[],o=0;return S(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function E(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var A={current:null};function R(){var e=A.current;if(null===e)throw Error(d(321));return e}var $={ReactCurrentDispatcher:A,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:_,IsSomeRendererActing:{current:!1},assign:n};r.Children={map:C,forEach:function(e,r,t){C(e,(function(){r.apply(this,arguments)}),t)},count:function(e){var r=0;return C(e,(function(){r++})),r},toArray:function(e){return C(e,(function(e){return e}))||[]},only:function(e){if(!w(e))throw Error(d(143));return e}},r.Component=v,r.PureComponent=m,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,r.cloneElement=function(e,r,t){if(null==e)throw Error(d(267,e));var i=n({},e.props),s=e.key,c=e.ref,u=e._owner;if(null!=r){if(void 0!==r.ref&&(c=r.ref,u=_.current),void 0!==r.key&&(s=""+r.key),e.type&&e.type.defaultProps)var p=e.type.defaultProps;for(a in r)b.call(r,a)&&!j.hasOwnProperty(a)&&(i[a]=void 0===r[a]&&void 0!==p?p[a]:r[a])}var a=arguments.length-2;if(1===a)i.children=t;else if(1<a){p=Array(a);for(var f=0;f<a;f++)p[f]=arguments[f+2];i.children=p}return{$$typeof:o,type:e.type,key:s,ref:c,props:i,_owner:u}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:c,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},r.createElement=O,r.createFactory=function(e){var r=O.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:u,render:e}},r.isValidElement=w,r.lazy=function(e){return{$$typeof:a,_payload:{_status:-1,_result:e},_init:E}},r.memo=function(e,r){return{$$typeof:p,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return R().useCallback(e,r)},r.useContext=function(e,r){return R().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return R().useEffect(e,r)},r.useImperativeHandle=function(e,r,t){return R().useImperativeHandle(e,r,t)},r.useLayoutEffect=function(e,r){return R().useLayoutEffect(e,r)},r.useMemo=function(e,r){return R().useMemo(e,r)},r.useReducer=function(e,r,t){return R().useReducer(e,r,t)},r.useRef=function(e){return R().useRef(e)},r.useState=function(e){return R().useState(e)},r.version="17.0.2"},827378:(e,r,t)=>{e.exports=t(541535)},824246:(e,r,t)=>{e.exports=t(371426)},511151:(e,r,t)=>{t.d(r,{Zo:()=>c,ah:()=>i});var n=t(667294);const o=n.createContext({});function i(e){const r=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const s={};function c({components:e,children:r,disableParentContext:t}){let c;return c=t?"function"==typeof e?e({}):e||s:i(e),n.createElement(o.Provider,{value:c},r)}}}]);