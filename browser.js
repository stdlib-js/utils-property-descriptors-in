// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e=void 0!==Object.getOwnPropertyDescriptors,r=Object,t=r.getOwnPropertyDescriptors,n=void 0!==Object.getOwnPropertyNames,o=r.getOwnPropertyNames;function i(e){return Object.keys(Object(e))}var a=void 0!==Object.keys,u="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function c(){return u&&"symbol"==typeof Symbol.toStringTag}var l=Object.prototype.toString,f=Object.prototype.hasOwnProperty;function s(e,r){return null!=e&&f.call(e,r)}var p,g="function"==typeof Symbol?Symbol:void 0,b="function"==typeof g?g.toStringTag:"",y=c()?function(e){var r,t,n;if(null==e)return l.call(e);t=e[b],r=s(e,b);try{e[b]=void 0}catch(r){return l.call(e)}return n=l.call(e),r?e[b]=t:delete e[b],n}:function(e){return l.call(e)};function d(e){return"[object Arguments]"===y(e)}p=function(){return d(arguments)}();var h=p,v="function"==typeof Object.defineProperty?Object.defineProperty:null,w=Object.defineProperty;function m(e){return"number"==typeof e}function j(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function O(e,r,t){var n=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+j(o):j(o)+e,n&&(e="-"+e)),e}var S=String.prototype.toLowerCase,_=String.prototype.toUpperCase;function E(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!m(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=O(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=O(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===_.call(e.specifier)?_.call(t):S.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function P(e){return"string"==typeof e}var k=Math.abs,T=String.prototype.toLowerCase,x=String.prototype.toUpperCase,I=String.prototype.replace,A=/e\+(\d)$/,V=/e-(\d)$/,F=/^(\d+)$/,N=/^(\d+)e/,$=/\.0$/,C=/\.0*e/,B=/(\..*[^0])0*e/;function L(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!m(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":k(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=I.call(t,B,"$1e"),t=I.call(t,C,"e"),t=I.call(t,$,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=I.call(t,A,"e+0$1"),t=I.call(t,V,"e-0$1"),e.alternate&&(t=I.call(t,F,"$1."),t=I.call(t,N,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===x.call(e.specifier)?x.call(t):T.call(t)}function R(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function D(e,r,t){var n=r-e.length;return n<0?e:e=t?e+R(n):R(n)+e}var G=String.fromCharCode,W=isNaN,X=Array.isArray;function Z(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function M(e){var r,t,n,o,i,a,u,c,l;if(!X(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(a="",u=1,c=0;c<e.length;c++)if(P(n=e[c]))a+=n;else{if(r=void 0!==n.precision,!(n=Z(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(o=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,W(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,W(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=E(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!W(n.arg)){if((i=parseInt(n.arg,10))<0||i>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=W(i)?String(n.arg):G(i)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=L(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=O(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=D(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a}var Y=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function U(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function H(e){var r,t,n,o;for(t=[],o=0,n=Y.exec(e);n;)(r=e.slice(o,Y.lastIndex-n[0].length)).length&&t.push(r),t.push(U(n)),o=Y.lastIndex,n=Y.exec(e);return(r=e.slice(o)).length&&t.push(r),t}function z(e){return"string"==typeof e}function q(e){var r,t,n;if(!z(e))throw new TypeError(q("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=H(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return M.apply(null,t)}var J,K=Object.prototype,Q=K.toString,ee=K.__defineGetter__,re=K.__defineSetter__,te=K.__lookupGetter__,ne=K.__lookupSetter__;J=function(){try{return v({},"x",{}),!0}catch(e){return!1}}()?w:function(e,r,t){var n,o,i,a;if("object"!=typeof e||null===e||"[object Array]"===Q.call(e))throw new TypeError(q("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===Q.call(t))throw new TypeError(q("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(te.call(e,r)||ne.call(e,r)?(n=e.__proto__,e.__proto__=K,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&ee&&ee.call(e,r,t.get),a&&re&&re.call(e,r,t.set),e};var oe=J;function ie(e,r,t){oe(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function ae(e){return"string"==typeof e}var ue=String.prototype.valueOf,ce=c();function le(e){return"object"==typeof e&&(e instanceof String||(ce?function(e){try{return ue.call(e),!0}catch(e){return!1}}(e):"[object String]"===y(e)))}function fe(e){return ae(e)||le(e)}function se(e){return"number"==typeof e}ie(fe,"isPrimitive",ae),ie(fe,"isObject",le);var pe=Number,ge=pe.prototype.toString,be=c();function ye(e){return"object"==typeof e&&(e instanceof pe||(be?function(e){try{return ge.call(e),!0}catch(e){return!1}}(e):"[object Number]"===y(e)))}function de(e){return se(e)||ye(e)}function he(e){return e!=e}function ve(e){return se(e)&&he(e)}function we(e){return ye(e)&&he(e.valueOf())}function me(e){return ve(e)||we(e)}ie(de,"isPrimitive",se),ie(de,"isObject",ye),ie(me,"isPrimitive",ve),ie(me,"isObject",we);var je=Number.POSITIVE_INFINITY,Oe=pe.NEGATIVE_INFINITY,Se=Math.floor;function _e(e){return Se(e)===e}function Ee(e){return e<je&&e>Oe&&_e(e)}function Pe(e){return se(e)&&Ee(e)}function ke(e){return ye(e)&&Ee(e.valueOf())}function Te(e){return Pe(e)||ke(e)}ie(Te,"isPrimitive",Pe),ie(Te,"isObject",ke);var xe,Ie=Object.prototype.propertyIsEnumerable,Ae=!Ie.call("beep","0");function Ve(e,r){var t;return null!=e&&(!(t=Ie.call(e,r))&&Ae&&fe(e)?!ve(r=+r)&&Pe(r)&&r>=0&&r<e.length:t)}xe=Array.isArray?Array.isArray:function(e){return"[object Array]"===y(e)};var Fe,Ne=xe;Fe=h?d:function(e){return null!==e&&"object"==typeof e&&!Ne(e)&&"number"==typeof e.length&&_e(e.length)&&e.length>=0&&e.length<=4294967295&&s(e,"callee")&&!Ve(e,"callee")};var $e=Fe,Ce=Array.prototype.slice;function Be(e){return null!==e&&"object"==typeof e}var Le=function(e){if("function"!=typeof e)throw new TypeError(q("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!Ne(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(Be);ie(Be,"isObjectLikeArray",Le);var Re=Ve((function(){}),"prototype"),De=!Ve({toString:null},"toString");function Ge(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&_e(e.length)&&e.length>=0&&e.length<=9007199254740991}function We(e,r,t){var n,o;if(!Ge(e)&&!ae(e))throw new TypeError(q("invalid argument. First argument must be an array-like object. Value: `%s`.",e));if(0===(n=e.length))return-1;if(3===arguments.length){if(!Pe(t))throw new TypeError(q("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;o=t}else(o=n+t)<0&&(o=0)}else o=0;if(me(r)){for(;o<n;o++)if(me(e[o]))return o}else for(;o<n;o++)if(e[o]===r)return o;return-1}var Xe=/./;function Ze(e){return"boolean"==typeof e}var Me=Boolean,Ye=Boolean.prototype.toString,Ue=c();function He(e){return"object"==typeof e&&(e instanceof Me||(Ue?function(e){try{return Ye.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===y(e)))}function ze(e){return Ze(e)||He(e)}function qe(){return new Function("return this;")()}ie(ze,"isPrimitive",Ze),ie(ze,"isObject",He);var Je="object"==typeof self?self:null,Ke="object"==typeof window?window:null,Qe="object"==typeof globalThis?globalThis:null,er=function(e){if(arguments.length){if(!Ze(e))throw new TypeError(q("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return qe()}if(Qe)return Qe;if(Je)return Je;if(Ke)return Ke;throw new Error("unexpected error. Unable to resolve global object.")}(),rr=er.document&&er.document.childNodes,tr=Int8Array;function nr(){return/^\s*function\s*([^(]*)/i}var or=/^\s*function\s*([^(]*)/i;function ir(e){var r,t,n,o;if(("Object"===(t=y(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=or.exec(n.toString()))return r[1]}return Be(o=e)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}ie(nr,"REGEXP",or);var ar="function"==typeof Xe||"object"==typeof tr||"function"==typeof rr?function(e){return ir(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"==(r=typeof e)?ir(e).toLowerCase():r};function ur(e){return e.constructor&&e.constructor.prototype===e}var cr,lr=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],fr="undefined"==typeof window?void 0:window,sr=function(){var e;if("undefined"===ar(fr))return!1;for(e in fr)try{-1===We(lr,e)&&s(fr,e)&&null!==fr[e]&&"object"===ar(fr[e])&&ur(fr[e])}catch(e){return!0}return!1}(),pr="undefined"!=typeof window,gr=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];cr=a?function(){return 2!==(i(arguments)||"").length}(1,2)?function(e){return $e(e)?i(Ce.call(e)):i(e)}:i:function(e){var r,t,n,o,i,a,u;if(o=[],$e(e)){for(u=0;u<e.length;u++)o.push(u.toString());return o}if("string"==typeof e){if(e.length>0&&!s(e,"0"))for(u=0;u<e.length;u++)o.push(u.toString())}else{if(0==(n="function"==typeof e)&&!Be(e))return o;t=Re&&n}for(i in e)t&&"prototype"===i||!s(e,i)||o.push(String(i));if(De)for(r=function(e){if(!1===pr&&!sr)return ur(e);try{return ur(e)}catch(e){return!1}}(e),u=0;u<gr.length;u++)a=gr[u],r&&"constructor"===a||!s(e,a)||o.push(String(a));return o};var br,yr=cr;br=n?function(e){return o(r(e))}:function(e){return yr(r(e))};var dr,hr=br,vr=void 0!==Object.getOwnPropertySymbols,wr=r.getOwnPropertySymbols;dr=vr?function(e){return wr(r(e))}:function(){return[]};var mr,jr=dr,Or=void 0!==Object.getOwnPropertyDescriptor,Sr=Object.getOwnPropertyDescriptor;mr=Or?function(e,r){var t;return null==e||void 0===(t=Sr(e,r))?null:t}:function(e,r){return s(e,r)?{configurable:!0,enumerable:!0,writable:!0,value:e[r]}:null};var _r,Er=mr;_r=e?function(e){return t(r(e))}:function(e){var r,t,n,o,i;for(o={},t=hr(e),i=0;i<t.length;i++)(n=Er(e,t[i]))&&oe(o,t[i],{configurable:!0,enumerable:!0,writable:!0,value:n});for(r=jr(e),i=0;i<r.length;i++)(n=Er(e,r[i]))&&oe(o,r[i],{configurable:!0,enumerable:!0,writable:!0,value:n});return o};var Pr,kr,Tr=_r,xr=Object.getPrototypeOf;kr=Object.getPrototypeOf,Pr="function"===ar(kr)?xr:function(e){var r=function(e){return e.__proto__}(e);return r||null===r?r:"[object Function]"===y(e.constructor)?e.constructor.prototype:e instanceof Object?Object.prototype:null};var Ir=Pr;function Ar(e){return null==e?null:(e=r(e),Ir(e))}return function(e){var t,n,o,i,a;if(null==e)return{};o=r(e),t={};do{for(i=Tr(o),n=yr(i),a=0;a<n.length;a++)s(t,n[a])||oe(t,n[a],{configurable:!0,enumerable:!0,writable:!0,value:i[n[a]]});for(n=jr(i),a=0;a<n.length;a++)s(t,n[a])||oe(t,n[a],{configurable:!0,enumerable:!0,writable:!0,value:i[n[a]]});o=Ar(o)}while(o);return t}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).propertyDescriptorsIn=r();
//# sourceMappingURL=browser.js.map
