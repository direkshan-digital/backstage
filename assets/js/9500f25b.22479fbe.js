/*! For license information please see 9500f25b.22479fbe.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[383030],{75937:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=t(824246),o=t(511151);const a={id:"heroku",title:"Deploying with Heroku",sidebar_label:"Heroku",description:"How to deploy Backstage to Heroku"},i=void 0,c={unversionedId:"deployment/heroku",id:"deployment/heroku",title:"Deploying with Heroku",description:"How to deploy Backstage to Heroku",source:"@site/../docs/deployment/heroku.md",sourceDirName:"deployment",slug:"/deployment/heroku",permalink:"/docs/deployment/heroku",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/deployment/heroku.md",tags:[],version:"current",frontMatter:{id:"heroku",title:"Deploying with Heroku",sidebar_label:"Heroku",description:"How to deploy Backstage to Heroku"},sidebar:"docs",previous:{title:"Kubernetes",permalink:"/docs/deployment/k8s"},next:{title:"AWS Lightsail",permalink:"/docs/deployment/backstage-deploy/aws-lightsail"}},u={},s=[{value:"Configuring the CLI",id:"configuring-the-cli",level:2},{value:"Push and deploy a Docker image",id:"push-and-deploy-a-docker-image",level:2}];function l(e){const r=Object.assign({p:"p",h2:"h2",a:"a",pre:"pre",code:"code",em:"em",blockquote:"blockquote"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Heroku is a Platform as a Service (PaaS) designed to handle application\ndeployment in a hands-off way. Heroku supports container deployment of Docker\nimages, a natural fit for Backstage."}),"\n",(0,n.jsx)(r.h2,{id:"configuring-the-cli",children:"Configuring the CLI"}),"\n",(0,n.jsxs)(r.p,{children:["First, install the\n",(0,n.jsx)(r.a,{href:"https://devcenter.heroku.com/articles/heroku-cli",children:"heroku-cli"})," and login:"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-shell",children:"$ heroku login\n"})}),"\n",(0,n.jsx)(r.p,{children:"If you have not yet created a project through the Heroku interface, you can create it through the CLI."}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-shell",children:"$ heroku create <your-app>\n"})}),"\n",(0,n.jsxs)(r.p,{children:["You ",(0,n.jsx)(r.em,{children:"might"})," also need to set your Heroku app's stack to ",(0,n.jsx)(r.code,{children:"container"}),":"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"$ heroku stack:set container -a <your-app>\n"})}),"\n",(0,n.jsxs)(r.p,{children:["Configuring your ",(0,n.jsx)(r.code,{children:"app-config.yaml"}),":"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-yaml",children:"app:\n  # Should be the same as backend.baseUrl when using the `app-backend` plugin\n  baseUrl: https://<your-app>.herokuapp.com\n\nbackend:\n  baseUrl: https://<your-app>.herokuapp.com\n  listen:\n    port:\n      $env: PORT\n      # The $PORT environment variable is a feature of Heroku\n      # https://devcenter.heroku.com/articles/dynos#web-dynos\n"})}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:["Make sure your file is being copied into your container in the ",(0,n.jsx)(r.code,{children:"Dockerfile"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["Before building the Docker image, run the ",(0,n.jsx)(r.a,{href:"https://backstage.io/docs/deployment/docker#host-build",children:"backstage host build commands"}),". They must be run whenever you are going to publish a new image."]}),"\n",(0,n.jsxs)(r.p,{children:["Heroku runs a container registry on ",(0,n.jsx)(r.code,{children:"registry.heroku.com"}),". To push Backstage\nDocker images, log in to the container registry also:"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-shell",children:"$ heroku container:login\n"})}),"\n",(0,n.jsx)(r.h2,{id:"push-and-deploy-a-docker-image",children:"Push and deploy a Docker image"}),"\n",(0,n.jsxs)(r.p,{children:["Now we can push a Backstage ",(0,n.jsx)(r.a,{href:"/docs/deployment/docker",children:"Docker image"})," to Heroku's container\nregistry and release it to the ",(0,n.jsx)(r.code,{children:"web"})," worker:"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"$ docker image build . -f packages/backend/Dockerfile --tag registry.heroku.com/<your-app>/web\n\n$ docker push registry.heroku.com/<your-app>/web\n\n$ heroku container:release web -a <your-app>\n"})}),"\n",(0,n.jsx)(r.p,{children:"Now you should have Backstage up and running! \ud83c\udf89"})]})}const p=function(e={}){const{wrapper:r}=Object.assign({},(0,o.ah)(),e.components);return r?(0,n.jsx)(r,Object.assign({},e,{children:(0,n.jsx)(l,e)})):l(e)}},862525:e=>{var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var a,i,c=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),u=1;u<arguments.length;u++){for(var s in a=Object(arguments[u]))t.call(a,s)&&(c[s]=a[s]);if(r){i=r(a);for(var l=0;l<i.length;l++)n.call(a,i[l])&&(c[i[l]]=a[i[l]])}}return c}},371426:(e,r,t)=>{t(862525);var n=t(827378),o=60103;if(r.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var a=Symbol.for;o=a("react.element"),r.Fragment=a("react.fragment")}var i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c=Object.prototype.hasOwnProperty,u={key:!0,ref:!0,__self:!0,__source:!0};function s(e,r,t){var n,a={},s=null,l=null;for(n in void 0!==t&&(s=""+t),void 0!==r.key&&(s=""+r.key),void 0!==r.ref&&(l=r.ref),r)c.call(r,n)&&!u.hasOwnProperty(n)&&(a[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===a[n]&&(a[n]=r[n]);return{$$typeof:o,type:e,key:s,ref:l,props:a,_owner:i.current}}r.jsx=s,r.jsxs=s},541535:(e,r,t)=>{var n=t(862525),o=60103,a=60106;r.Fragment=60107,r.StrictMode=60108,r.Profiler=60114;var i=60109,c=60110,u=60112;r.Suspense=60113;var s=60115,l=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;o=p("react.element"),a=p("react.portal"),r.Fragment=p("react.fragment"),r.StrictMode=p("react.strict_mode"),r.Profiler=p("react.profiler"),i=p("react.provider"),c=p("react.context"),u=p("react.forward_ref"),r.Suspense=p("react.suspense"),s=p("react.memo"),l=p("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function g(e,r,t){this.props=e,this.context=r,this.refs=y,this.updater=t||h}function m(){}function k(e,r,t){this.props=e,this.context=r,this.refs=y,this.updater=t||h}g.prototype.isReactComponent={},g.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,r,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=g.prototype;var b=k.prototype=new m;b.constructor=k,n(b,g.prototype),b.isPureReactComponent=!0;var v={current:null},j=Object.prototype.hasOwnProperty,_={key:!0,ref:!0,__self:!0,__source:!0};function w(e,r,t){var n,a={},i=null,c=null;if(null!=r)for(n in void 0!==r.ref&&(c=r.ref),void 0!==r.key&&(i=""+r.key),r)j.call(r,n)&&!_.hasOwnProperty(n)&&(a[n]=r[n]);var u=arguments.length-2;if(1===u)a.children=t;else if(1<u){for(var s=Array(u),l=0;l<u;l++)s[l]=arguments[l+2];a.children=s}if(e&&e.defaultProps)for(n in u=e.defaultProps)void 0===a[n]&&(a[n]=u[n]);return{$$typeof:o,type:e,key:i,ref:c,props:a,_owner:v.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var O=/\/+/g;function S(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function C(e,r,t,n,i){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var u=!1;if(null===e)u=!0;else switch(c){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case o:case a:u=!0}}if(u)return i=i(u=e),e=""===n?"."+S(u,0):n,Array.isArray(i)?(t="",null!=e&&(t=e.replace(O,"$&/")+"/"),C(i,r,t,"",(function(e){return e}))):null!=i&&(x(i)&&(i=function(e,r){return{$$typeof:o,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(i,t+(!i.key||u&&u.key===i.key?"":(""+i.key).replace(O,"$&/")+"/")+e)),r.push(i)),1;if(u=0,n=""===n?".":n+":",Array.isArray(e))for(var s=0;s<e.length;s++){var l=n+S(c=e[s],s);u+=C(c,r,t,l,i)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),s=0;!(c=e.next()).done;)u+=C(c=c.value,r,t,l=n+S(c,s++),i);else if("object"===c)throw r=""+e,Error(d(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return u}function $(e,r,t){if(null==e)return e;var n=[],o=0;return C(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function E(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var P={current:null};function R(){var e=P.current;if(null===e)throw Error(d(321));return e}var H={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:v,IsSomeRendererActing:{current:!1},assign:n};r.Children={map:$,forEach:function(e,r,t){$(e,(function(){r.apply(this,arguments)}),t)},count:function(e){var r=0;return $(e,(function(){r++})),r},toArray:function(e){return $(e,(function(e){return e}))||[]},only:function(e){if(!x(e))throw Error(d(143));return e}},r.Component=g,r.PureComponent=k,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=H,r.cloneElement=function(e,r,t){if(null==e)throw Error(d(267,e));var a=n({},e.props),i=e.key,c=e.ref,u=e._owner;if(null!=r){if(void 0!==r.ref&&(c=r.ref,u=v.current),void 0!==r.key&&(i=""+r.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in r)j.call(r,l)&&!_.hasOwnProperty(l)&&(a[l]=void 0===r[l]&&void 0!==s?s[l]:r[l])}var l=arguments.length-2;if(1===l)a.children=t;else if(1<l){s=Array(l);for(var p=0;p<l;p++)s[p]=arguments[p+2];a.children=s}return{$$typeof:o,type:e.type,key:i,ref:c,props:a,_owner:u}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:c,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},r.createElement=w,r.createFactory=function(e){var r=w.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:u,render:e}},r.isValidElement=x,r.lazy=function(e){return{$$typeof:l,_payload:{_status:-1,_result:e},_init:E}},r.memo=function(e,r){return{$$typeof:s,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return R().useCallback(e,r)},r.useContext=function(e,r){return R().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return R().useEffect(e,r)},r.useImperativeHandle=function(e,r,t){return R().useImperativeHandle(e,r,t)},r.useLayoutEffect=function(e,r){return R().useLayoutEffect(e,r)},r.useMemo=function(e,r){return R().useMemo(e,r)},r.useReducer=function(e,r,t){return R().useReducer(e,r,t)},r.useRef=function(e){return R().useRef(e)},r.useState=function(e){return R().useState(e)},r.version="17.0.2"},827378:(e,r,t)=>{e.exports=t(541535)},824246:(e,r,t)=>{e.exports=t(371426)},511151:(e,r,t)=>{t.d(r,{Zo:()=>c,ah:()=>a});var n=t(667294);const o=n.createContext({});function a(e){const r=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const i={};function c({components:e,children:r,disableParentContext:t}){let c;return c=t?"function"==typeof e?e({}):e||i:a(e),n.createElement(o.Provider,{value:c},r)}}}]);