// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).propertyDescriptorsIn=e()}(this,(function(){"use strict";var t=void 0!==Object.getOwnPropertyDescriptors,e=Object,r=e.getOwnPropertyDescriptors;var n=void 0!==Object.getOwnPropertyNames,o=Object.getOwnPropertyNames;function u(t){return Object.keys(Object(t))}var i=void 0!==Object.keys;var c="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function f(){return c&&"symbol"==typeof Symbol.toStringTag}var l=Object.prototype.toString;var a=Object.prototype.hasOwnProperty;function p(t,e){return null!=t&&a.call(t,e)}var b="function"==typeof Symbol?Symbol.toStringTag:"";var s,y=f()?function(t){var e,r,n;if(null==t)return l.call(t);r=t[b],e=p(t,b);try{t[b]=void 0}catch(e){return l.call(t)}return n=l.call(t),e?t[b]=r:delete t[b],n}:function(t){return l.call(t)};function v(t){return"[object Arguments]"===y(t)}s=function(){return v(arguments)}();var g=s,d="function"==typeof Object.defineProperty?Object.defineProperty:null;var j,m=Object.defineProperty,h=Object.prototype,w=h.toString,O=h.__defineGetter__,_=h.__defineSetter__,S=h.__lookupGetter__,P=h.__lookupSetter__;j=function(){try{return d({},"x",{}),!0}catch(t){return!1}}()?m:function(t,e,r){var n,o,u,i;if("object"!=typeof t||null===t||"[object Array]"===w.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===w.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((o="value"in r)&&(S.call(t,e)||P.call(t,e)?(n=t.__proto__,t.__proto__=h,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),u="get"in r,i="set"in r,o&&(u||i))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return u&&O&&O.call(t,e,r.get),i&&_&&_.call(t,e,r.set),t};var E=j;function I(t,e,r){E(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function T(t){return"string"==typeof t}var A=String.prototype.valueOf;var N=f();function k(t){return"object"==typeof t&&(t instanceof String||(N?function(t){try{return A.call(t),!0}catch(t){return!1}}(t):"[object String]"===y(t)))}function x(t){return T(t)||k(t)}function B(t){return"number"==typeof t}I(x,"isPrimitive",T),I(x,"isObject",k);var V=Number,D=V.prototype.toString;var F=f();function L(t){return"object"==typeof t&&(t instanceof V||(F?function(t){try{return D.call(t),!0}catch(t){return!1}}(t):"[object Number]"===y(t)))}function G(t){return B(t)||L(t)}function Y(t){return t!=t}function C(t){return B(t)&&Y(t)}function M(t){return L(t)&&Y(t.valueOf())}function X(t){return C(t)||M(t)}I(G,"isPrimitive",B),I(G,"isObject",L),I(X,"isPrimitive",C),I(X,"isObject",M);var H=Number.POSITIVE_INFINITY,W=V.NEGATIVE_INFINITY,R=Math.floor;function U(t){return R(t)===t}function q(t){return t<H&&t>W&&U(t)}function z(t){return B(t)&&q(t)}function J(t){return L(t)&&q(t.valueOf())}function K(t){return z(t)||J(t)}I(K,"isPrimitive",z),I(K,"isObject",J);var Q=Object.prototype.propertyIsEnumerable;var Z,$=!Q.call("beep","0");function tt(t,e){var r;return null!=t&&(!(r=Q.call(t,e))&&$&&x(t)?!C(e=+e)&&z(e)&&e>=0&&e<t.length:r)}Z=Array.isArray?Array.isArray:function(t){return"[object Array]"===y(t)};var et,rt=Z;et=g?v:function(t){return null!==t&&"object"==typeof t&&!rt(t)&&"number"==typeof t.length&&U(t.length)&&t.length>=0&&t.length<=4294967295&&p(t,"callee")&&!tt(t,"callee")};var nt=et,ot=Array.prototype.slice;function ut(t){return null!==t&&"object"==typeof t}var it=function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!rt(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(ut);I(ut,"isObjectLikeArray",it);var ct=tt((function(){}),"prototype"),ft=!tt({toString:null},"toString");function lt(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&U(t.length)&&t.length>=0&&t.length<=9007199254740991}function at(t,e,r){var n,o;if(!lt(t)&&!T(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(n=t.length))return-1;if(3===arguments.length){if(!z(r))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+r+"`.");if(r>=0){if(r>=n)return-1;o=r}else(o=n+r)<0&&(o=0)}else o=0;if(X(e)){for(;o<n;o++)if(X(t[o]))return o}else for(;o<n;o++)if(t[o]===e)return o;return-1}var pt=/./;function bt(t){return"boolean"==typeof t}var st=Boolean.prototype.toString;var yt=f();function vt(t){return"object"==typeof t&&(t instanceof Boolean||(yt?function(t){try{return st.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===y(t)))}function gt(t){return bt(t)||vt(t)}function dt(){return new Function("return this;")()}I(gt,"isPrimitive",bt),I(gt,"isObject",vt);var jt="object"==typeof self?self:null,mt="object"==typeof window?window:null,ht="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},wt="object"==typeof ht?ht:null;var Ot=function(t){if(arguments.length){if(!bt(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return dt()}if(jt)return jt;if(mt)return mt;if(wt)return wt;throw new Error("unexpected error. Unable to resolve global object.")}(),_t=Ot.document&&Ot.document.childNodes,St=Int8Array;function Pt(){return/^\s*function\s*([^(]*)/i}var Et=/^\s*function\s*([^(]*)/i;function It(t){var e,r,n,o;if(("Object"===(r=y(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=Et.exec(n.toString()))return e[1]}return ut(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}I(Pt,"REGEXP",Et);var Tt="function"==typeof pt||"object"==typeof St||"function"==typeof _t?function(t){return It(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?It(t).toLowerCase():e};function At(t){return t.constructor&&t.constructor.prototype===t}var Nt=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],kt="undefined"==typeof window?void 0:window;var xt=function(){var t;if("undefined"===Tt(kt))return!1;for(t in kt)try{-1===at(Nt,t)&&p(kt,t)&&null!==kt[t]&&"object"===Tt(kt[t])&&At(kt[t])}catch(t){return!0}return!1}(),Bt="undefined"!=typeof window;var Vt,Dt=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];Vt=i?function(){return 2!==(u(arguments)||"").length}(1,2)?function(t){return nt(t)?u(ot.call(t)):u(t)}:u:function(t){var e,r,n,o,u,i,c;if(o=[],nt(t)){for(c=0;c<t.length;c++)o.push(c.toString());return o}if("string"==typeof t){if(t.length>0&&!p(t,"0"))for(c=0;c<t.length;c++)o.push(c.toString())}else{if(!1==(n="function"==typeof t)&&!ut(t))return o;r=ct&&n}for(u in t)r&&"prototype"===u||!p(t,u)||o.push(String(u));if(ft)for(e=function(t){if(!1===Bt&&!xt)return At(t);try{return At(t)}catch(t){return!1}}(t),c=0;c<Dt.length;c++)i=Dt[c],e&&"constructor"===i||!p(t,i)||o.push(String(i));return o};var Ft,Lt=Vt;Ft=n?function(t){return o(Object(t))}:function(t){return Lt(Object(t))};var Gt,Yt=Ft,Ct=void 0!==Object.getOwnPropertySymbols,Mt=Object.getOwnPropertySymbols;Gt=Ct?function(t){return Mt(Object(t))}:function(){return[]};var Xt,Ht=Gt,Wt=void 0!==Object.getOwnPropertyDescriptor,Rt=Object.getOwnPropertyDescriptor;Xt=Wt?function(t,e){var r;return null==t||void 0===(r=Rt(t,e))?null:r}:function(t,e){return p(t,e)?{configurable:!0,enumerable:!0,writable:!0,value:t[e]}:null};var Ut,qt=Xt;Ut=t?function(t){return r(e(t))}:function(t){var e,r,n,o,u;for(o={},r=Yt(t),u=0;u<r.length;u++)(n=qt(t,r[u]))&&E(o,r[u],{configurable:!0,enumerable:!0,writable:!0,value:n});for(e=Ht(t),u=0;u<e.length;u++)(n=qt(t,e[u]))&&E(o,e[u],{configurable:!0,enumerable:!0,writable:!0,value:n});return o};var zt=Ut;var Jt,Kt,Qt=Object.getPrototypeOf;Kt=Object.getPrototypeOf,Jt="function"===Tt(Kt)?Qt:function(t){var e=function(t){return t.__proto__}(t);return e||null===e?e:"[object Function]"===y(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var Zt=Jt;function $t(t){return null==t?null:(t=Object(t),Zt(t))}return function(t){var r,n,o,u,i;if(null==t)return{};o=e(t),r={};do{for(u=zt(o),n=Lt(u),i=0;i<n.length;i++)p(r,n[i])||E(r,n[i],{configurable:!0,enumerable:!0,writable:!0,value:u[n[i]]});for(n=Ht(u),i=0;i<n.length;i++)p(r,n[i])||E(r,n[i],{configurable:!0,enumerable:!0,writable:!0,value:u[n[i]]});o=$t(o)}while(o);return r}}));
//# sourceMappingURL=browser.js.map
