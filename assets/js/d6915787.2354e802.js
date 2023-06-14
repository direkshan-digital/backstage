/*! For license information please see d6915787.2354e802.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[467591],{916543:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>a,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var t=r(824246),s=r(511151);const o={id:"plugin-kubernetes-common",title:"@backstage/plugin-kubernetes-common",description:"API Reference for @backstage/plugin-kubernetes-common"},c=void 0,i={unversionedId:"reference/plugin-kubernetes-common",id:"reference/plugin-kubernetes-common",title:"@backstage/plugin-kubernetes-common",description:"API Reference for @backstage/plugin-kubernetes-common",source:"@site/../docs/reference/plugin-kubernetes-common.md",sourceDirName:"reference",slug:"/reference/plugin-kubernetes-common",permalink:"/docs/reference/plugin-kubernetes-common",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-kubernetes-common.md",tags:[],version:"current",frontMatter:{id:"plugin-kubernetes-common",title:"@backstage/plugin-kubernetes-common",description:"API Reference for @backstage/plugin-kubernetes-common"}},u={},l=[{value:"Interfaces",id:"interfaces",level:2},{value:"Variables",id:"variables",level:2},{value:"Type Aliases",id:"type-aliases",level:2}];function d(e){const n=Object.assign({p:"p",a:"a",code:"code",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,s.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common",children:(0,t.jsx)(n.code,{children:"@backstage/plugin-kubernetes-common"})})]}),"\n",(0,t.jsxs)(n.p,{children:["Common functionalities for Kubernetes, to be shared between the ",(0,t.jsx)(n.code,{children:"kubernetes"})," and ",(0,t.jsx)(n.code,{children:"kubernetes-backend"})," plugins"]}),"\n",(0,t.jsx)(n.h2,{id:"interfaces",children:"Interfaces"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Interface"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.clientcontainerstatus",children:"ClientContainerStatus"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.clientcurrentresourceusage",children:"ClientCurrentResourceUsage"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.clientpodstatus",children:"ClientPodStatus"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.clusterattributes",children:"ClusterAttributes"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.clusterobjects",children:"ClusterObjects"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.configmapfetchresponse",children:"ConfigMapFetchResponse"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.cronjobsfetchresponse",children:"CronJobsFetchResponse"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.customobjectsbyentityrequest",children:"CustomObjectsByEntityRequest"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.customresourcefetchresponse",children:"CustomResourceFetchResponse"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.customresourcematcher",children:"CustomResourceMatcher"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.daemonsetsfetchresponse",children:"DaemonSetsFetchResponse"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.deploymentfetchresponse",children:"DeploymentFetchResponse"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.horizontalpodautoscalersfetchresponse",children:"HorizontalPodAutoscalersFetchResponse"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.ingressesfetchresponse",children:"IngressesFetchResponse"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.jobsfetchresponse",children:"JobsFetchResponse"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.kubernetesrequestauth",children:"KubernetesRequestAuth"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.kubernetesrequestbody",children:"KubernetesRequestBody"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.limitrangefetchresponse",children:"LimitRangeFetchResponse"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.objectsbyentityresponse",children:"ObjectsByEntityResponse"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.podfetchresponse",children:"PodFetchResponse"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.podstatusfetchresponse",children:"PodStatusFetchResponse"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.rawfetcherror",children:"RawFetchError"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.replicasetsfetchresponse",children:"ReplicaSetsFetchResponse"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.servicefetchresponse",children:"ServiceFetchResponse"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.statefulsetsfetchresponse",children:"StatefulSetsFetchResponse"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.statuserror",children:"StatusError"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.workloadsbyentityrequest",children:"WorkloadsByEntityRequest"})}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"variables",children:"Variables"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Variable"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.annotation_kubernetes_api_server_ca",children:"ANNOTATION_KUBERNETES_API_SERVER_CA"})}),(0,t.jsx)(n.td,{children:"Annotation for specifying the Certificate Authority of an API server for a Kubernetes cluster"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.annotation_kubernetes_api_server",children:"ANNOTATION_KUBERNETES_API_SERVER"})}),(0,t.jsx)(n.td,{children:"Annotation for specifying the API server of a Kubernetes cluster"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.annotation_kubernetes_auth_provider",children:"ANNOTATION_KUBERNETES_AUTH_PROVIDER"})}),(0,t.jsx)(n.td,{children:"Annotation for specifying the auth provider for a Kubernetes cluster"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.annotation_kubernetes_dashboard_app",children:"ANNOTATION_KUBERNETES_DASHBOARD_APP"})}),(0,t.jsx)(n.td,{children:"Annotation for specifying the dashboard app for a Kubernetes cluster."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.annotation_kubernetes_dashboard_url",children:"ANNOTATION_KUBERNETES_DASHBOARD_URL"})}),(0,t.jsx)(n.td,{children:"Annotation for specifying the dashboard url for a Kubernetes cluster."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.annotation_kubernetes_oidc_token_provider",children:"ANNOTATION_KUBERNETES_OIDC_TOKEN_PROVIDER"})}),(0,t.jsx)(n.td,{children:"Annotation for specifying the oidc provider used to get id tokens for a Kubernetes cluster"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.annotation_kubernetes_skip_metrics_lookup",children:"ANNOTATION_KUBERNETES_SKIP_METRICS_LOOKUP"})}),(0,t.jsx)(n.td,{children:"Annotation for specifying boolean value for skip metric lookup."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.annotation_kubernetes_skip_tls_verify",children:"ANNOTATION_KUBERNETES_SKIP_TLS_VERIFY"})}),(0,t.jsx)(n.td,{children:"Annotation for specifying boolean value for skip tls verify."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.kubernetespermissions",children:"kubernetesPermissions"})}),(0,t.jsx)(n.td,{children:"List of all Kubernetes permissions."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.kubernetesproxypermission",children:"kubernetesProxyPermission"})}),(0,t.jsx)(n.td,{children:"This permission is used to check access to the proxy endpoint"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"type-aliases",children:"Type Aliases"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Type Alias"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.authprovidertype",children:"AuthProviderType"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.fetchresponse",children:"FetchResponse"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.kuberneteserrortypes",children:"KubernetesErrorTypes"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.kubernetesfetcherror",children:"KubernetesFetchError"})}),(0,t.jsx)(n.td,{})]})]})]})]})}const a=function(e={}){const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},862525:e=>{var n=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},r=0;r<10;r++)n["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(n).map((function(e){return n[e]})).join(""))return!1;var t={};return"abcdefghijklmnopqrst".split("").forEach((function(e){t[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},t)).join("")}catch(s){return!1}}()?Object.assign:function(e,s){for(var o,c,i=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),u=1;u<arguments.length;u++){for(var l in o=Object(arguments[u]))r.call(o,l)&&(i[l]=o[l]);if(n){c=n(o);for(var d=0;d<c.length;d++)t.call(o,c[d])&&(i[c[d]]=o[c[d]])}}return i}},371426:(e,n,r)=>{r(862525);var t=r(827378),s=60103;if(n.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var o=Symbol.for;s=o("react.element"),n.Fragment=o("react.fragment")}var c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,u={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,r){var t,o={},l=null,d=null;for(t in void 0!==r&&(l=""+r),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(d=n.ref),n)i.call(n,t)&&!u.hasOwnProperty(t)&&(o[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===o[t]&&(o[t]=n[t]);return{$$typeof:s,type:e,key:l,ref:d,props:o,_owner:c.current}}n.jsx=l,n.jsxs=l},541535:(e,n,r)=>{var t=r(862525),s=60103,o=60106;n.Fragment=60107,n.StrictMode=60108,n.Profiler=60114;var c=60109,i=60110,u=60112;n.Suspense=60113;var l=60115,d=60116;if("function"==typeof Symbol&&Symbol.for){var a=Symbol.for;s=a("react.element"),o=a("react.portal"),n.Fragment=a("react.fragment"),n.StrictMode=a("react.strict_mode"),n.Profiler=a("react.profiler"),c=a("react.provider"),i=a("react.context"),u=a("react.forward_ref"),n.Suspense=a("react.suspense"),l=a("react.memo"),d=a("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j={};function x(e,n,r){this.props=e,this.context=n,this.refs=j,this.updater=r||p}function m(){}function b(e,n,r){this.props=e,this.context=n,this.refs=j,this.updater=r||p}x.prototype.isReactComponent={},x.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,n,"setState")},x.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=x.prototype;var y=b.prototype=new m;y.constructor=b,t(y,x.prototype),y.isPureReactComponent=!0;var k={current:null},g=Object.prototype.hasOwnProperty,_={key:!0,ref:!0,__self:!0,__source:!0};function v(e,n,r){var t,o={},c=null,i=null;if(null!=n)for(t in void 0!==n.ref&&(i=n.ref),void 0!==n.key&&(c=""+n.key),n)g.call(n,t)&&!_.hasOwnProperty(t)&&(o[t]=n[t]);var u=arguments.length-2;if(1===u)o.children=r;else if(1<u){for(var l=Array(u),d=0;d<u;d++)l[d]=arguments[d+2];o.children=l}if(e&&e.defaultProps)for(t in u=e.defaultProps)void 0===o[t]&&(o[t]=u[t]);return{$$typeof:s,type:e,key:c,ref:i,props:o,_owner:k.current}}function R(e){return"object"==typeof e&&null!==e&&e.$$typeof===s}var E=/\/+/g;function O(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function S(e,n,r,t,c){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var u=!1;if(null===e)u=!0;else switch(i){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case s:case o:u=!0}}if(u)return c=c(u=e),e=""===t?"."+O(u,0):t,Array.isArray(c)?(r="",null!=e&&(r=e.replace(E,"$&/")+"/"),S(c,n,r,"",(function(e){return e}))):null!=c&&(R(c)&&(c=function(e,n){return{$$typeof:s,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(c,r+(!c.key||u&&u.key===c.key?"":(""+c.key).replace(E,"$&/")+"/")+e)),n.push(c)),1;if(u=0,t=""===t?".":t+":",Array.isArray(e))for(var l=0;l<e.length;l++){var d=t+O(i=e[l],l);u+=S(i,n,r,d,c)}else if(d=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof d)for(e=d.call(e),l=0;!(i=e.next()).done;)u+=S(i=i.value,n,r,d=t+O(i,l++),c);else if("object"===i)throw n=""+e,Error(h(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n));return u}function A(e,n,r){if(null==e)return e;var t=[],s=0;return S(e,t,"","",(function(e){return n.call(r,e,s++)})),t}function C(e){if(-1===e._status){var n=e._result;n=n(),e._status=0,e._result=n,n.then((function(n){0===e._status&&(n=n.default,e._status=1,e._result=n)}),(function(n){0===e._status&&(e._status=2,e._result=n)}))}if(1===e._status)return e._result;throw e._result}var P={current:null};function N(){var e=P.current;if(null===e)throw Error(h(321));return e}var T={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:k,IsSomeRendererActing:{current:!1},assign:t};n.Children={map:A,forEach:function(e,n,r){A(e,(function(){n.apply(this,arguments)}),r)},count:function(e){var n=0;return A(e,(function(){n++})),n},toArray:function(e){return A(e,(function(e){return e}))||[]},only:function(e){if(!R(e))throw Error(h(143));return e}},n.Component=x,n.PureComponent=b,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,n.cloneElement=function(e,n,r){if(null==e)throw Error(h(267,e));var o=t({},e.props),c=e.key,i=e.ref,u=e._owner;if(null!=n){if(void 0!==n.ref&&(i=n.ref,u=k.current),void 0!==n.key&&(c=""+n.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(d in n)g.call(n,d)&&!_.hasOwnProperty(d)&&(o[d]=void 0===n[d]&&void 0!==l?l[d]:n[d])}var d=arguments.length-2;if(1===d)o.children=r;else if(1<d){l=Array(d);for(var a=0;a<d;a++)l[a]=arguments[a+2];o.children=l}return{$$typeof:s,type:e.type,key:c,ref:i,props:o,_owner:u}},n.createContext=function(e,n){return void 0===n&&(n=null),(e={$$typeof:i,_calculateChangedBits:n,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},n.createElement=v,n.createFactory=function(e){var n=v.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:u,render:e}},n.isValidElement=R,n.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:C}},n.memo=function(e,n){return{$$typeof:l,type:e,compare:void 0===n?null:n}},n.useCallback=function(e,n){return N().useCallback(e,n)},n.useContext=function(e,n){return N().useContext(e,n)},n.useDebugValue=function(){},n.useEffect=function(e,n){return N().useEffect(e,n)},n.useImperativeHandle=function(e,n,r){return N().useImperativeHandle(e,n,r)},n.useLayoutEffect=function(e,n){return N().useLayoutEffect(e,n)},n.useMemo=function(e,n){return N().useMemo(e,n)},n.useReducer=function(e,n,r){return N().useReducer(e,n,r)},n.useRef=function(e){return N().useRef(e)},n.useState=function(e){return N().useState(e)},n.version="17.0.2"},827378:(e,n,r)=>{e.exports=r(541535)},824246:(e,n,r)=>{e.exports=r(371426)},511151:(e,n,r)=>{r.d(n,{Zo:()=>i,ah:()=>o});var t=r(667294);const s=t.createContext({});function o(e){const n=t.useContext(s);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function i({components:e,children:n,disableParentContext:r}){let i;return i=r?"function"==typeof e?e({}):e||c:o(e),t.createElement(s.Provider,{value:i},n)}}}]);