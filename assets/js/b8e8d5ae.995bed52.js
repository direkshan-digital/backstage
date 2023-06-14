/*! For license information please see b8e8d5ae.995bed52.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[706823],{200900:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(824246),a=n(511151);const o={id:"backends",title:"Backend Instances",sidebar_label:"Backend",description:"Backend instances"},c=void 0,s={unversionedId:"backend-system/architecture/backends",id:"backend-system/architecture/backends",title:"Backend Instances",description:"Backend instances",source:"@site/../docs/backend-system/architecture/02-backends.md",sourceDirName:"backend-system/architecture",slug:"/backend-system/architecture/backends",permalink:"/docs/backend-system/architecture/backends",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/backend-system/architecture/02-backends.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"backends",title:"Backend Instances",sidebar_label:"Backend",description:"Backend instances"}},i={},u=[{value:"The Backend Instance",id:"the-backend-instance",level:2}];function l(e){const t=Object.assign({blockquote:"blockquote",p:"p",strong:"strong",h2:"h2",pre:"pre",code:"code",a:"a"},(0,a.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"DISCLAIMER: The new backend system is in alpha, and still under active development. While we have reviewed the interfaces carefully, they may still be iterated on before the stable release."})}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"the-backend-instance",children:"The Backend Instance"}),"\n",(0,r.jsx)(t.p,{children:"This is the main entry point for creating a backend. It does not have any functionality in and of itself, but is simply responsible for wiring things together.\nIt is up to you to decide how many different backends you want to deploy. You can have all features in a single one, or split things out into multiple smaller deployments."}),"\n",(0,r.jsx)(t.p,{children:"Below is a simple example of a backend that installs only the catalog plugin and starts it up."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"import { createBackend } from '@backstage/backend-defaults';\nimport { catalogPlugin } from '@backstage/plugin-catalog-backend';\n\n// Create your backend instance\nconst backend = createBackend();\n\n// Install all desired features\nbackend.add(catalogPlugin());\n\n// Start up the backend\nawait backend.start();\n"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"createBackend"})," is responsible for creating your backend instance, and wiring up all the services that you have provided. It deals with creating default implementations of all the ",(0,r.jsx)(t.a,{href:"/docs/backend-system/core-services/index",children:"core services"})," that are used by the plugins, and also provides a way to override the default implementations with your own. You can read more about creating services and overriding them in the ",(0,r.jsx)(t.a,{href:"/docs/backend-system/building-backends/index",children:"building backends docs"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["The backend instance has the ability to add features to the backend which are done using the ",(0,r.jsx)(t.code,{children:".add"})," method. Features are either plugins or modules, and you can read more about them in the ",(0,r.jsx)(t.a,{href:"/docs/backend-system/building-plugins-and-modules/index",children:"building plugins and modules docs"}),". By default, a backend instance has no default features, and the services are responsible for wiring everything together."]}),"\n",(0,r.jsxs)(t.p,{children:["At a high level, when you call ",(0,r.jsx)(t.code,{children:"createBackend"}),", it will create a new backend instance, which has a registry of all the services that are currently registered, and by adding features to the backend instance and calling the ",(0,r.jsx)(t.code,{children:".start()"})," method it will ensure that all the dependencies are wired up correctly and the ",(0,r.jsx)(t.code,{children:"registerInit"})," methods are called in the correct order."]}),"\n",(0,r.jsxs)(t.p,{children:["Underneath the hood, ",(0,r.jsx)(t.code,{children:"createBackend"})," calls ",(0,r.jsx)(t.code,{children:"createSpecializedBackend"})," from ",(0,r.jsx)(t.code,{children:"@backstage/backend-app-api"})," which is responsible for actually creating the backend instance, but with no services or no features. You can think of ",(0,r.jsx)(t.code,{children:"createBackend"})," more of a 'batteries included' approach, and ",(0,r.jsx)(t.code,{children:"createSpecializedBackend"})," a little more low level."]}),"\n",(0,r.jsxs)(t.p,{children:["As mentioned previously there's also the ability to create multiple of these backends in your project so that you can split apart your backend and deploy different backends that can scale independently of each other. For instance you might choose to deploy a backend with only the catalog plugin enabled, and one with just the scaffolder plugin enabled. We've provided some tools to be able to share services and defaults across your backend system, and you can find out more about that in the ",(0,r.jsx)(t.a,{href:"/docs/backend-system/building-backends/index#shared-environments",children:"shared environments docs"}),"."]})]})}const d=function(e={}){const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}()?Object.assign:function(e,a){for(var o,c,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),i=1;i<arguments.length;i++){for(var u in o=Object(arguments[i]))n.call(o,u)&&(s[u]=o[u]);if(t){c=t(o);for(var l=0;l<c.length;l++)r.call(o,c[l])&&(s[c[l]]=o[c[l]])}}return s}},371426:(e,t,n)=>{n(862525);var r=n(827378),a=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var o=Symbol.for;a=o("react.element"),t.Fragment=o("react.fragment")}var c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,i={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var r,o={},u=null,l=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(l=t.ref),t)s.call(t,r)&&!i.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:a,type:e,key:u,ref:l,props:o,_owner:c.current}}t.jsx=u,t.jsxs=u},541535:(e,t,n)=>{var r=n(862525),a=60103,o=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var c=60109,s=60110,i=60112;t.Suspense=60113;var u=60115,l=60116;if("function"==typeof Symbol&&Symbol.for){var d=Symbol.for;a=d("react.element"),o=d("react.portal"),t.Fragment=d("react.fragment"),t.StrictMode=d("react.strict_mode"),t.Profiler=d("react.profiler"),c=d("react.provider"),s=d("react.context"),i=d("react.forward_ref"),t.Suspense=d("react.suspense"),u=d("react.memo"),l=d("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function p(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function b(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||h}function m(){}function k(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||h}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(p(85));this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=b.prototype;var v=k.prototype=new m;v.constructor=k,r(v,b.prototype),v.isPureReactComponent=!0;var g={current:null},j=Object.prototype.hasOwnProperty,_={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,n){var r,o={},c=null,s=null;if(null!=t)for(r in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(c=""+t.key),t)j.call(t,r)&&!_.hasOwnProperty(r)&&(o[r]=t[r]);var i=arguments.length-2;if(1===i)o.children=n;else if(1<i){for(var u=Array(i),l=0;l<i;l++)u[l]=arguments[l+2];o.children=u}if(e&&e.defaultProps)for(r in i=e.defaultProps)void 0===o[r]&&(o[r]=i[r]);return{$$typeof:a,type:e,key:c,ref:s,props:o,_owner:g.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var O=/\/+/g;function S(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function C(e,t,n,r,c){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var i=!1;if(null===e)i=!0;else switch(s){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case a:case o:i=!0}}if(i)return c=c(i=e),e=""===r?"."+S(i,0):r,Array.isArray(c)?(n="",null!=e&&(n=e.replace(O,"$&/")+"/"),C(c,t,n,"",(function(e){return e}))):null!=c&&(x(c)&&(c=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(c,n+(!c.key||i&&i.key===c.key?"":(""+c.key).replace(O,"$&/")+"/")+e)),t.push(c)),1;if(i=0,r=""===r?".":r+":",Array.isArray(e))for(var u=0;u<e.length;u++){var l=r+S(s=e[u],u);i+=C(s,t,n,l,c)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),u=0;!(s=e.next()).done;)i+=C(s=s.value,t,n,l=r+S(s,u++),c);else if("object"===s)throw t=""+e,Error(p(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return i}function E(e,t,n){if(null==e)return e;var r=[],a=0;return C(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function P(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var R={current:null};function $(){var e=R.current;if(null===e)throw Error(p(321));return e}var B={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:g,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:E,forEach:function(e,t,n){E(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return E(e,(function(){t++})),t},toArray:function(e){return E(e,(function(e){return e}))||[]},only:function(e){if(!x(e))throw Error(p(143));return e}},t.Component=b,t.PureComponent=k,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=B,t.cloneElement=function(e,t,n){if(null==e)throw Error(p(267,e));var o=r({},e.props),c=e.key,s=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,i=g.current),void 0!==t.key&&(c=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(l in t)j.call(t,l)&&!_.hasOwnProperty(l)&&(o[l]=void 0===t[l]&&void 0!==u?u[l]:t[l])}var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){u=Array(l);for(var d=0;d<l;d++)u[d]=arguments[d+2];o.children=u}return{$$typeof:a,type:e.type,key:c,ref:s,props:o,_owner:i}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},t.createElement=w,t.createFactory=function(e){var t=w.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:i,render:e}},t.isValidElement=x,t.lazy=function(e){return{$$typeof:l,_payload:{_status:-1,_result:e},_init:P}},t.memo=function(e,t){return{$$typeof:u,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return $().useCallback(e,t)},t.useContext=function(e,t){return $().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return $().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return $().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return $().useLayoutEffect(e,t)},t.useMemo=function(e,t){return $().useMemo(e,t)},t.useReducer=function(e,t,n){return $().useReducer(e,t,n)},t.useRef=function(e){return $().useRef(e)},t.useState=function(e){return $().useState(e)},t.version="17.0.2"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Zo:()=>s,ah:()=>o});var r=n(667294);const a=r.createContext({});function o(e){const t=r.useContext(a);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const c={};function s({components:e,children:t,disableParentContext:n}){let s;return s=n?"function"==typeof e?e({}):e||c:o(e),r.createElement(a.Provider,{value:s},t)}}}]);