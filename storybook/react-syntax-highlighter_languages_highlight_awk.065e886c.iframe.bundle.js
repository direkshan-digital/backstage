(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"../node_modules/highlight.js/lib/languages/awk.js":function(module,exports){module.exports=function awk(hljs){return{name:"Awk",keywords:{keyword:"BEGIN END if else while do for in break continue delete next nextfile function func exit|10"},contains:[{className:"variable",variants:[{begin:/\$[\w\d#@][\w\d_]*/},{begin:/\$\{(.*?)\}/}]},{className:"string",contains:[hljs.BACKSLASH_ESCAPE],variants:[{begin:/(u|b)?r?'''/,end:/'''/,relevance:10},{begin:/(u|b)?r?"""/,end:/"""/,relevance:10},{begin:/(u|r|ur)'/,end:/'/,relevance:10},{begin:/(u|r|ur)"/,end:/"/,relevance:10},{begin:/(b|br)'/,end:/'/},{begin:/(b|br)"/,end:/"/},hljs.APOS_STRING_MODE,hljs.QUOTE_STRING_MODE]},hljs.REGEXP_MODE,hljs.HASH_COMMENT_MODE,hljs.NUMBER_MODE]}}}}]);