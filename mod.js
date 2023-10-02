// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=void 0!==Object.getOwnPropertyDescriptors,e=Object,t=e.getOwnPropertyDescriptors;var n=void 0!==Object.getOwnPropertyNames,i=e.getOwnPropertyNames;function o(r){return Object.keys(Object(r))}var a=void 0!==Object.keys;var u="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function c(){return u&&"symbol"==typeof Symbol.toStringTag}var l=Object.prototype.toString;var f=Object.prototype.hasOwnProperty;function s(r,e){return null!=r&&f.call(r,e)}var p="function"==typeof Symbol?Symbol:void 0,g="function"==typeof p?p.toStringTag:"";var b=c()?function(r){var e,t,n;if(null==r)return l.call(r);t=r[g],e=s(r,g);try{r[g]=void 0}catch(e){return l.call(r)}return n=l.call(r),e?r[g]=t:delete r[g],n}:function(r){return l.call(r)};function y(r){return"[object Arguments]"===b(r)}var v=function(){return y(arguments)}(),d="function"==typeof Object.defineProperty?Object.defineProperty:null;var h=Object.defineProperty;function w(r){return"number"==typeof r}function m(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function j(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+m(i):m(i)+r,n&&(r="-"+r)),r}var O=String.prototype.toLowerCase,S=String.prototype.toUpperCase;function _(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!w(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=j(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=j(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===S.call(r.specifier)?S.call(t):O.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function E(r){return"string"==typeof r}var P=Math.abs,k=String.prototype.toLowerCase,x=String.prototype.toUpperCase,I=String.prototype.replace,T=/e\+(\d)$/,A=/e-(\d)$/,V=/^(\d+)$/,F=/^(\d+)e/,N=/\.0$/,$=/\.0*e/,C=/(\..*[^0])0*e/;function B(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!w(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":P(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=I.call(t,C,"$1e"),t=I.call(t,$,"e"),t=I.call(t,N,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=I.call(t,T,"e+0$1"),t=I.call(t,A,"e-0$1"),r.alternate&&(t=I.call(t,V,"$1."),t=I.call(t,F,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===x.call(r.specifier)?x.call(t):k.call(t)}function L(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function R(r,e,t){var n=e-r.length;return n<0?r:r=t?r+L(n):L(n)+r}var G=String.fromCharCode,W=isNaN,D=Array.isArray;function X(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Z(r){var e,t,n,i,o,a,u,c,l;if(!D(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,c=0;c<r.length;c++)if(E(n=r[c]))a+=n;else{if(e=void 0!==n.precision,!(n=X(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(i=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,W(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,W(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=_(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!W(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=W(o)?String(n.arg):G(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=B(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=j(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=R(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a}var M=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Y(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function U(r){var e,t,n,i;for(t=[],i=0,n=M.exec(r);n;)(e=r.slice(i,M.lastIndex-n[0].length)).length&&t.push(e),t.push(Y(n)),i=M.lastIndex,n=M.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function H(r){return"string"==typeof r}function z(r){var e,t,n;if(!H(r))throw new TypeError(z("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=U(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return Z.apply(null,t)}var q,J=Object.prototype,K=J.toString,Q=J.__defineGetter__,rr=J.__defineSetter__,er=J.__lookupGetter__,tr=J.__lookupSetter__;q=function(){try{return d({},"x",{}),!0}catch(r){return!1}}()?h:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===K.call(r))throw new TypeError(z("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===K.call(t))throw new TypeError(z("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(er.call(r,e)||tr.call(r,e)?(n=r.__proto__,r.__proto__=J,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&Q&&Q.call(r,e,t.get),a&&rr&&rr.call(r,e,t.set),r};var nr=q;function ir(r,e,t){nr(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function or(r){return"string"==typeof r}var ar=String.prototype.valueOf;var ur=c();function cr(r){return"object"==typeof r&&(r instanceof String||(ur?function(r){try{return ar.call(r),!0}catch(r){return!1}}(r):"[object String]"===b(r)))}function lr(r){return or(r)||cr(r)}function fr(r){return"number"==typeof r}ir(lr,"isPrimitive",or),ir(lr,"isObject",cr);var sr=Number,pr=sr.prototype.toString;var gr=c();function br(r){return"object"==typeof r&&(r instanceof sr||(gr?function(r){try{return pr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===b(r)))}function yr(r){return fr(r)||br(r)}function vr(r){return r!=r}function dr(r){return fr(r)&&vr(r)}function hr(r){return br(r)&&vr(r.valueOf())}function wr(r){return dr(r)||hr(r)}ir(yr,"isPrimitive",fr),ir(yr,"isObject",br),ir(wr,"isPrimitive",dr),ir(wr,"isObject",hr);var mr=Number.POSITIVE_INFINITY,jr=sr.NEGATIVE_INFINITY,Or=Math.floor;function Sr(r){return Or(r)===r}function _r(r){return r<mr&&r>jr&&Sr(r)}function Er(r){return fr(r)&&_r(r)}function Pr(r){return br(r)&&_r(r.valueOf())}function kr(r){return Er(r)||Pr(r)}ir(kr,"isPrimitive",Er),ir(kr,"isObject",Pr);var xr=Object.prototype.propertyIsEnumerable;var Ir,Tr=!xr.call("beep","0");function Ar(r,e){var t;return null!=r&&(!(t=xr.call(r,e))&&Tr&&lr(r)?!dr(e=+e)&&Er(e)&&e>=0&&e<r.length:t)}Ir=Array.isArray?Array.isArray:function(r){return"[object Array]"===b(r)};var Vr,Fr=Ir;Vr=v?y:function(r){return null!==r&&"object"==typeof r&&!Fr(r)&&"number"==typeof r.length&&Sr(r.length)&&r.length>=0&&r.length<=4294967295&&s(r,"callee")&&!Ar(r,"callee")};var Nr=Vr,$r=Array.prototype.slice;function Cr(r){return null!==r&&"object"==typeof r}var Br=function(r){if("function"!=typeof r)throw new TypeError(z("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!Fr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Cr);ir(Cr,"isObjectLikeArray",Br);var Lr=Ar((function(){}),"prototype"),Rr=!Ar({toString:null},"toString");function Gr(r){return r!=r}function Wr(r){return fr(r)&&Gr(r)}function Dr(r){return br(r)&&Gr(r.valueOf())}function Xr(r){return Wr(r)||Dr(r)}ir(Xr,"isPrimitive",Wr),ir(Xr,"isObject",Dr);function Zr(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&Sr(r.length)&&r.length>=0&&r.length<=9007199254740991}function Mr(r){return"string"==typeof r}var Yr=String.prototype.valueOf;var Ur=c();function Hr(r){return"object"==typeof r&&(r instanceof String||(Ur?function(r){try{return Yr.call(r),!0}catch(r){return!1}}(r):"[object String]"===b(r)))}function zr(r){return Mr(r)||Hr(r)}function qr(r,e,t){var n,i;if(!Zr(r)&&!Mr(r))throw new TypeError(z("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(0===(n=r.length))return-1;if(3===arguments.length){if(!Er(t))throw new TypeError(z("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;i=t}else(i=n+t)<0&&(i=0)}else i=0;if(Xr(e)){for(;i<n;i++)if(Xr(r[i]))return i}else for(;i<n;i++)if(r[i]===e)return i;return-1}ir(zr,"isPrimitive",Mr),ir(zr,"isObject",Hr);var Jr=/./;function Kr(r){return"boolean"==typeof r}var Qr=Boolean,re=Boolean.prototype.toString;var ee=c();function te(r){return"object"==typeof r&&(r instanceof Qr||(ee?function(r){try{return re.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===b(r)))}function ne(r){return Kr(r)||te(r)}function ie(){return new Function("return this;")()}ir(ne,"isPrimitive",Kr),ir(ne,"isObject",te);var oe="object"==typeof self?self:null,ae="object"==typeof window?window:null,ue="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},ce="object"==typeof ue?ue:null,le="object"==typeof globalThis?globalThis:null;var fe=function(r){if(arguments.length){if(!Kr(r))throw new TypeError(z("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return ie()}if(le)return le;if(oe)return oe;if(ae)return ae;if(ce)return ce;throw new Error("unexpected error. Unable to resolve global object.")}(),se=fe.document&&fe.document.childNodes,pe=Int8Array;function ge(){return/^\s*function\s*([^(]*)/i}var be=/^\s*function\s*([^(]*)/i;function ye(r){var e,t,n,i;if(("Object"===(t=b(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=be.exec(n.toString()))return e[1]}return Cr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}ir(ge,"REGEXP",be);var ve="function"==typeof Jr||"object"==typeof pe||"function"==typeof se?function(r){return ye(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?ye(r).toLowerCase():e};function de(r){return r.constructor&&r.constructor.prototype===r}var he=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],we="undefined"==typeof window?void 0:window;var me=function(){var r;if("undefined"===ve(we))return!1;for(r in we)try{-1===qr(he,r)&&s(we,r)&&null!==we[r]&&"object"===ve(we[r])&&de(we[r])}catch(r){return!0}return!1}(),je="undefined"!=typeof window;var Oe,Se=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];Oe=a?function(){return 2!==(o(arguments)||"").length}(1,2)?function(r){return Nr(r)?o($r.call(r)):o(r)}:o:function(r){var e,t,n,i,o,a,u;if(i=[],Nr(r)){for(u=0;u<r.length;u++)i.push(u.toString());return i}if("string"==typeof r){if(r.length>0&&!s(r,"0"))for(u=0;u<r.length;u++)i.push(u.toString())}else{if(!1==(n="function"==typeof r)&&!Cr(r))return i;t=Lr&&n}for(o in r)t&&"prototype"===o||!s(r,o)||i.push(String(o));if(Rr)for(e=function(r){if(!1===je&&!me)return de(r);try{return de(r)}catch(r){return!1}}(r),u=0;u<Se.length;u++)a=Se[u],e&&"constructor"===a||!s(r,a)||i.push(String(a));return i};var _e,Ee=Oe;_e=n?function(r){return i(e(r))}:function(r){return Ee(e(r))};var Pe,ke=_e,xe=void 0!==Object.getOwnPropertySymbols,Ie=e.getOwnPropertySymbols;Pe=xe?function(r){return Ie(e(r))}:function(){return[]};var Te,Ae=Pe,Ve=void 0!==Object.getOwnPropertyDescriptor,Fe=Object.getOwnPropertyDescriptor;Te=Ve?function(r,e){var t;return null==r||void 0===(t=Fe(r,e))?null:t}:function(r,e){return s(r,e)?{configurable:!0,enumerable:!0,writable:!0,value:r[e]}:null};var Ne,$e=Te;Ne=r?function(r){return t(e(r))}:function(r){var e,t,n,i,o;for(i={},t=ke(r),o=0;o<t.length;o++)(n=$e(r,t[o]))&&nr(i,t[o],{configurable:!0,enumerable:!0,writable:!0,value:n});for(e=Ae(r),o=0;o<e.length;o++)(n=$e(r,e[o]))&&nr(i,e[o],{configurable:!0,enumerable:!0,writable:!0,value:n});return i};var Ce=Ne;var Be,Le,Re=Object.getPrototypeOf;Le=Object.getPrototypeOf,Be="function"===ve(Le)?Re:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===b(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Ge=Be;function We(r){return null==r?null:(r=e(r),Ge(r))}function De(r){var t,n,i,o,a;if(null==r)return{};i=e(r),t={};do{for(o=Ce(i),n=Ee(o),a=0;a<n.length;a++)s(t,n[a])||nr(t,n[a],{configurable:!0,enumerable:!0,writable:!0,value:o[n[a]]});for(n=Ae(o),a=0;a<n.length;a++)s(t,n[a])||nr(t,n[a],{configurable:!0,enumerable:!0,writable:!0,value:o[n[a]]});i=We(i)}while(i);return t}export{De as default};
//# sourceMappingURL=mod.js.map
