// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=void 0!==Object.getOwnPropertyDescriptors,e=Object,t=e.getOwnPropertyDescriptors;var n=void 0!==Object.getOwnPropertyNames,o=e.getOwnPropertyNames;function i(r){return Object.keys(Object(r))}var a=void 0!==Object.keys;var u="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function c(){return u&&"symbol"==typeof Symbol.toStringTag}var l=Object.prototype.toString;var f=Object.prototype.hasOwnProperty;function s(r,e){return null!=r&&f.call(r,e)}var p="function"==typeof Symbol?Symbol:void 0,g="function"==typeof p?p.toStringTag:"";var b=c()?function(r){var e,t,n;if(null==r)return l.call(r);t=r[g],e=s(r,g);try{r[g]=void 0}catch(e){return l.call(r)}return n=l.call(r),e?r[g]=t:delete r[g],n}:function(r){return l.call(r)};function y(r){return"[object Arguments]"===b(r)}var d=function(){return y(arguments)}(),v="function"==typeof Object.defineProperty?Object.defineProperty:null;var h=Object.defineProperty;function w(r){return"number"==typeof r}function m(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function j(r,e,t){var n=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+m(o):m(o)+r,n&&(r="-"+r)),r}var O=String.prototype.toLowerCase,S=String.prototype.toUpperCase;function _(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!w(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=j(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=j(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===S.call(r.specifier)?S.call(t):O.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function E(r){return"string"==typeof r}var P=Math.abs,k=String.prototype.toLowerCase,x=String.prototype.toUpperCase,I=String.prototype.replace,T=/e\+(\d)$/,A=/e-(\d)$/,V=/^(\d+)$/,F=/^(\d+)e/,N=/\.0$/,$=/\.0*e/,C=/(\..*[^0])0*e/;function B(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!w(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":P(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=I.call(t,C,"$1e"),t=I.call(t,$,"e"),t=I.call(t,N,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=I.call(t,T,"e+0$1"),t=I.call(t,A,"e-0$1"),r.alternate&&(t=I.call(t,V,"$1."),t=I.call(t,F,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===x.call(r.specifier)?x.call(t):k.call(t)}function L(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function R(r,e,t){var n=e-r.length;return n<0?r:r=t?r+L(n):L(n)+r}var G=String.fromCharCode,W=isNaN,D=Array.isArray;function X(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Z(r){var e,t,n,o,i,a,u,c,l;if(!D(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,c=0;c<r.length;c++)if(E(n=r[c]))a+=n;else{if(e=void 0!==n.precision,!(n=X(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(o=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,W(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,W(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=_(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!W(n.arg)){if((i=parseInt(n.arg,10))<0||i>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=W(i)?String(n.arg):G(i)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=B(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=j(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=R(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a}var M=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Y(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function U(r){var e,t,n,o;for(t=[],o=0,n=M.exec(r);n;)(e=r.slice(o,M.lastIndex-n[0].length)).length&&t.push(e),t.push(Y(n)),o=M.lastIndex,n=M.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function H(r){return"string"==typeof r}function z(r){var e,t,n;if(!H(r))throw new TypeError(z("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=U(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return Z.apply(null,t)}var q,J=Object.prototype,K=J.toString,Q=J.__defineGetter__,rr=J.__defineSetter__,er=J.__lookupGetter__,tr=J.__lookupSetter__;q=function(){try{return v({},"x",{}),!0}catch(r){return!1}}()?h:function(r,e,t){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===K.call(r))throw new TypeError(z("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===K.call(t))throw new TypeError(z("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(er.call(r,e)||tr.call(r,e)?(n=r.__proto__,r.__proto__=J,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&Q&&Q.call(r,e,t.get),a&&rr&&rr.call(r,e,t.set),r};var nr=q;function or(r,e,t){nr(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function ir(r){return"string"==typeof r}var ar=String.prototype.valueOf;var ur=c();function cr(r){return"object"==typeof r&&(r instanceof String||(ur?function(r){try{return ar.call(r),!0}catch(r){return!1}}(r):"[object String]"===b(r)))}function lr(r){return ir(r)||cr(r)}function fr(r){return"number"==typeof r}or(lr,"isPrimitive",ir),or(lr,"isObject",cr);var sr=Number,pr=sr.prototype.toString;var gr=c();function br(r){return"object"==typeof r&&(r instanceof sr||(gr?function(r){try{return pr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===b(r)))}function yr(r){return fr(r)||br(r)}function dr(r){return r!=r}function vr(r){return fr(r)&&dr(r)}function hr(r){return br(r)&&dr(r.valueOf())}function wr(r){return vr(r)||hr(r)}or(yr,"isPrimitive",fr),or(yr,"isObject",br),or(wr,"isPrimitive",vr),or(wr,"isObject",hr);var mr=Number.POSITIVE_INFINITY,jr=sr.NEGATIVE_INFINITY,Or=Math.floor;function Sr(r){return Or(r)===r}function _r(r){return r<mr&&r>jr&&Sr(r)}function Er(r){return fr(r)&&_r(r)}function Pr(r){return br(r)&&_r(r.valueOf())}function kr(r){return Er(r)||Pr(r)}or(kr,"isPrimitive",Er),or(kr,"isObject",Pr);var xr=Object.prototype.propertyIsEnumerable;var Ir,Tr=!xr.call("beep","0");function Ar(r,e){var t;return null!=r&&(!(t=xr.call(r,e))&&Tr&&lr(r)?!vr(e=+e)&&Er(e)&&e>=0&&e<r.length:t)}Ir=Array.isArray?Array.isArray:function(r){return"[object Array]"===b(r)};var Vr,Fr=Ir;Vr=d?y:function(r){return null!==r&&"object"==typeof r&&!Fr(r)&&"number"==typeof r.length&&Sr(r.length)&&r.length>=0&&r.length<=4294967295&&s(r,"callee")&&!Ar(r,"callee")};var Nr=Vr,$r=Array.prototype.slice;function Cr(r){return null!==r&&"object"==typeof r}var Br=function(r){if("function"!=typeof r)throw new TypeError(z("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!Fr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Cr);or(Cr,"isObjectLikeArray",Br);var Lr=Ar((function(){}),"prototype"),Rr=!Ar({toString:null},"toString");function Gr(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&Sr(r.length)&&r.length>=0&&r.length<=9007199254740991}function Wr(r,e,t){var n,o;if(!Gr(r)&&!ir(r))throw new TypeError(z("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(0===(n=r.length))return-1;if(3===arguments.length){if(!Er(t))throw new TypeError(z("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;o=t}else(o=n+t)<0&&(o=0)}else o=0;if(wr(e)){for(;o<n;o++)if(wr(r[o]))return o}else for(;o<n;o++)if(r[o]===e)return o;return-1}var Dr=/./;function Xr(r){return"boolean"==typeof r}var Zr=Boolean,Mr=Boolean.prototype.toString;var Yr=c();function Ur(r){return"object"==typeof r&&(r instanceof Zr||(Yr?function(r){try{return Mr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===b(r)))}function Hr(r){return Xr(r)||Ur(r)}function zr(){return new Function("return this;")()}or(Hr,"isPrimitive",Xr),or(Hr,"isObject",Ur);var qr="object"==typeof self?self:null,Jr="object"==typeof window?window:null,Kr="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Qr="object"==typeof Kr?Kr:null,re="object"==typeof globalThis?globalThis:null;var ee=function(r){if(arguments.length){if(!Xr(r))throw new TypeError(z("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return zr()}if(re)return re;if(qr)return qr;if(Jr)return Jr;if(Qr)return Qr;throw new Error("unexpected error. Unable to resolve global object.")}(),te=ee.document&&ee.document.childNodes,ne=Int8Array;function oe(){return/^\s*function\s*([^(]*)/i}var ie=/^\s*function\s*([^(]*)/i;function ae(r){var e,t,n,o;if(("Object"===(t=b(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=ie.exec(n.toString()))return e[1]}return Cr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}or(oe,"REGEXP",ie);var ue="function"==typeof Dr||"object"==typeof ne||"function"==typeof te?function(r){return ae(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?ae(r).toLowerCase():e};function ce(r){return r.constructor&&r.constructor.prototype===r}var le=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],fe="undefined"==typeof window?void 0:window;var se=function(){var r;if("undefined"===ue(fe))return!1;for(r in fe)try{-1===Wr(le,r)&&s(fe,r)&&null!==fe[r]&&"object"===ue(fe[r])&&ce(fe[r])}catch(r){return!0}return!1}(),pe="undefined"!=typeof window;var ge,be=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];ge=a?function(){return 2!==(i(arguments)||"").length}(1,2)?function(r){return Nr(r)?i($r.call(r)):i(r)}:i:function(r){var e,t,n,o,i,a,u;if(o=[],Nr(r)){for(u=0;u<r.length;u++)o.push(u.toString());return o}if("string"==typeof r){if(r.length>0&&!s(r,"0"))for(u=0;u<r.length;u++)o.push(u.toString())}else{if(!1==(n="function"==typeof r)&&!Cr(r))return o;t=Lr&&n}for(i in r)t&&"prototype"===i||!s(r,i)||o.push(String(i));if(Rr)for(e=function(r){if(!1===pe&&!se)return ce(r);try{return ce(r)}catch(r){return!1}}(r),u=0;u<be.length;u++)a=be[u],e&&"constructor"===a||!s(r,a)||o.push(String(a));return o};var ye,de=ge;ye=n?function(r){return o(e(r))}:function(r){return de(e(r))};var ve,he=ye,we=void 0!==Object.getOwnPropertySymbols,me=e.getOwnPropertySymbols;ve=we?function(r){return me(e(r))}:function(){return[]};var je,Oe=ve,Se=void 0!==Object.getOwnPropertyDescriptor,_e=Object.getOwnPropertyDescriptor;je=Se?function(r,e){var t;return null==r||void 0===(t=_e(r,e))?null:t}:function(r,e){return s(r,e)?{configurable:!0,enumerable:!0,writable:!0,value:r[e]}:null};var Ee,Pe=je;Ee=r?function(r){return t(e(r))}:function(r){var e,t,n,o,i;for(o={},t=he(r),i=0;i<t.length;i++)(n=Pe(r,t[i]))&&nr(o,t[i],{configurable:!0,enumerable:!0,writable:!0,value:n});for(e=Oe(r),i=0;i<e.length;i++)(n=Pe(r,e[i]))&&nr(o,e[i],{configurable:!0,enumerable:!0,writable:!0,value:n});return o};var ke=Ee;var xe,Ie,Te=Object.getPrototypeOf;Ie=Object.getPrototypeOf,xe="function"===ue(Ie)?Te:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===b(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Ae=xe;function Ve(r){return null==r?null:(r=e(r),Ae(r))}function Fe(r){var t,n,o,i,a;if(null==r)return{};o=e(r),t={};do{for(i=ke(o),n=de(i),a=0;a<n.length;a++)s(t,n[a])||nr(t,n[a],{configurable:!0,enumerable:!0,writable:!0,value:i[n[a]]});for(n=Oe(i),a=0;a<n.length;a++)s(t,n[a])||nr(t,n[a],{configurable:!0,enumerable:!0,writable:!0,value:i[n[a]]});o=Ve(o)}while(o);return t}export{Fe as default};
//# sourceMappingURL=mod.js.map
