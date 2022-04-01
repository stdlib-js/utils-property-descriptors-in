// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){if(r.__esModule)return r;var t=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach((function(e){var n=Object.getOwnPropertyDescriptor(r,e);Object.defineProperty(t,e,n.get?n:{enumerable:!0,get:function(){return r[e]}})})),t}var t=void 0!==Object.getOwnPropertyDescriptors,e=Object.getOwnPropertyDescriptors;var n=function(r){return e(Object(r))},o=void 0!==Object.getOwnPropertyNames,i=Object.getOwnPropertyNames;var u=function(r){return i(Object(r))};var c=function(r){return Object.keys(Object(r))},a=c;var f=function(){return function(){return 2!==(a(arguments)||"").length}(1,2)},l=void 0!==Object.keys;var v=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var p=function(){return v&&"symbol"==typeof Symbol.toStringTag},b=Object.prototype.toString,s=b;var y=function(r){return s.call(r)},g=Object.prototype.hasOwnProperty;var j=function(r,t){return null!=r&&g.call(r,t)},m="function"==typeof Symbol?Symbol.toStringTag:"",O=j,d=m,h=b;var w=y,_=function(r){var t,e,n;if(null==r)return h.call(r);e=r[d],t=O(r,d);try{r[d]=void 0}catch(t){return h.call(r)}return n=h.call(r),t?r[d]=e:delete r[d],n},P=p()?_:w,S=P;var E=function(r){return"[object Arguments]"===S(r)},I=E;var T=function(){return I(arguments)}(),A="function"==typeof Object.defineProperty?Object.defineProperty:null;var N=function(){try{return A({},"x",{}),!0}catch(r){return!1}},k=Object.defineProperty,B=Object.prototype,V=B.toString,x=B.__defineGetter__,D=B.__defineSetter__,F=B.__lookupGetter__,G=B.__lookupSetter__;var L=function(r,t,e){var n,o,i,u;if("object"!=typeof r||null===r||"[object Array]"===V.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===V.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((o="value"in e)&&(F.call(r,t)||G.call(r,t)?(n=r.__proto__,r.__proto__=B,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,u="set"in e,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&x&&x.call(r,t,e.get),u&&D&&D.call(r,t,e.set),r},M=k,X=L,Y=N()?M:X,C=Y;var H=function(r,t,e){C(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})},R=H;var W=function(r){return"string"==typeof r},z=String.prototype.valueOf;var U=P,q=function(r){try{return z.call(r),!0}catch(r){return!1}},J=p();var K=function(r){return"object"==typeof r&&(r instanceof String||(J?q(r):"[object String]"===U(r)))},Q=W,Z=K;var $=R,rr=function(r){return Q(r)||Z(r)},tr=K;$(rr,"isPrimitive",W),$(rr,"isObject",tr);var er=rr;var nr=function(r){return"number"==typeof r},or=Number,ir=or.prototype.toString;var ur=P,cr=or,ar=function(r){try{return ir.call(r),!0}catch(r){return!1}},fr=p();var lr=function(r){return"object"==typeof r&&(r instanceof cr||(fr?ar(r):"[object Number]"===ur(r)))},vr=nr,pr=lr;var br=R,sr=function(r){return vr(r)||pr(r)},yr=lr;br(sr,"isPrimitive",nr),br(sr,"isObject",yr);var gr=sr;var jr=function(r){return r!=r},mr=gr.isPrimitive,Or=jr;var dr=function(r){return mr(r)&&Or(r)},hr=gr.isObject,wr=jr;var _r=function(r){return hr(r)&&wr(r.valueOf())},Pr=dr,Sr=_r;var Er=R,Ir=function(r){return Pr(r)||Sr(r)},Tr=_r;Er(Ir,"isPrimitive",dr),Er(Ir,"isObject",Tr);var Ar=Ir,Nr=Number.POSITIVE_INFINITY,kr=or.NEGATIVE_INFINITY,Br=Math.floor;var Vr=function(r){return Br(r)===r},xr=Nr,Dr=kr,Fr=Vr;var Gr=function(r){return r<xr&&r>Dr&&Fr(r)},Lr=gr.isPrimitive,Mr=Gr;var Xr=function(r){return Lr(r)&&Mr(r)},Yr=gr.isObject,Cr=Gr;var Hr=function(r){return Yr(r)&&Cr(r.valueOf())},Rr=Xr,Wr=Hr;var zr=R,Ur=function(r){return Rr(r)||Wr(r)},qr=Hr;zr(Ur,"isPrimitive",Xr),zr(Ur,"isObject",qr);var Jr,Kr=Ur,Qr=Object.prototype.propertyIsEnumerable;Jr=!Qr.call("beep","0");var Zr=er,$r=Ar.isPrimitive,rt=Kr.isPrimitive,tt=Qr,et=Jr;var nt=function(r,t){var e;return null!=r&&(!(e=tt.call(r,t))&&et&&Zr(r)?!$r(t=+t)&&rt(t)&&t>=0&&t<r.length:e)},ot=nt,it=P;var ut=Array.isArray?Array.isArray:function(r){return"[object Array]"===it(r)},ct=j,at=ot,ft=ut,lt=Vr;var vt=T?E:function(r){return null!==r&&"object"==typeof r&&!ft(r)&&"number"==typeof r.length&&lt(r.length)&&r.length>=0&&r.length<=4294967295&&ct(r,"callee")&&!at(r,"callee")},pt=vt,bt=c,st=Array.prototype.slice;var yt=function(r){return pt(r)?bt(st.call(r)):bt(r)},gt=ut;var jt=function(r){return null!==r&&"object"==typeof r};R(jt,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var e,n;if(!gt(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(jt));var mt=jt;var Ot=ot((function(){}),"prototype"),dt=!ot({toString:null},"toString"),ht=Vr;var wt=Ar,_t=function(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&ht(r.length)&&r.length>=0&&r.length<=9007199254740991},Pt=er.isPrimitive,St=Kr.isPrimitive;var Et=function(r,t,e){var n,o;if(!_t(r)&&!Pt(r))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+r+"`.");if(0===(n=r.length))return-1;if(3===arguments.length){if(!St(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=n)return-1;o=e}else(o=n+e)<0&&(o=0)}else o=0;if(wt(t)){for(;o<n;o++)if(wt(r[o]))return o}else for(;o<n;o++)if(r[o]===t)return o;return-1},It=/./;var Tt=function(r){return"boolean"==typeof r},At=Boolean.prototype.toString;var Nt=P,kt=function(r){try{return At.call(r),!0}catch(r){return!1}},Bt=p();var Vt=function(r){return"object"==typeof r&&(r instanceof Boolean||(Bt?kt(r):"[object Boolean]"===Nt(r)))},xt=Tt,Dt=Vt;var Ft=R,Gt=function(r){return xt(r)||Dt(r)},Lt=Vt;Ft(Gt,"isPrimitive",Tt),Ft(Gt,"isObject",Lt);var Mt="object"==typeof self?self:null,Xt="object"==typeof window?window:null,Yt=Gt.isPrimitive,Ct=function(){return new Function("return this;")()},Ht=Mt,Rt=Xt,Wt=r(Object.freeze({__proto__:null}));var zt=function(r){if(arguments.length){if(!Yt(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return Ct()}if(Ht)return Ht;if(Rt)return Rt;if(Wt)return Wt;throw new Error("unexpected error. Unable to resolve global object.")},Ut=zt(),qt=Ut.document&&Ut.document.childNodes,Jt=Int8Array,Kt=It,Qt=qt,Zt=Jt;var $t=function(){return"function"==typeof Kt||"object"==typeof Zt||"function"==typeof Qt};var re=function(){return/^\s*function\s*([^(]*)/i},te=re;R(te,"REGEXP",re());var ee=mt;var ne=P,oe=te.REGEXP,ie=function(r){return ee(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var ue=function(r){var t,e,n;if(("Object"===(e=ne(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=oe.exec(n.toString()))return t[1]}return ie(r)?"Buffer":e},ce=ue;var ae=ue;var fe=function(r){var t;return null===r?"null":"object"===(t=typeof r)?ce(r).toLowerCase():t},le=function(r){return ae(r).toLowerCase()},ve=$t()?le:fe;var pe,be=function(r){return r.constructor&&r.constructor.prototype===r},se="undefined"==typeof window?void 0:window,ye=j,ge=Et,je=ve,me=be,Oe=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],de=se;pe=function(){var r;if("undefined"===je(de))return!1;for(r in de)try{-1===ge(Oe,r)&&ye(de,r)&&null!==de[r]&&"object"===je(de[r])&&me(de[r])}catch(r){return!0}return!1}();var he="undefined"!=typeof window,we=pe,_e=be,Pe=he;var Se=mt,Ee=j,Ie=vt,Te=Ot,Ae=dt,Ne=function(r){if(!1===Pe&&!we)return _e(r);try{return _e(r)}catch(r){return!1}},ke=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var Be=c,Ve=yt,xe=function(r){var t,e,n,o,i,u,c;if(o=[],Ie(r)){for(c=0;c<r.length;c++)o.push(c.toString());return o}if("string"==typeof r){if(r.length>0&&!Ee(r,"0"))for(c=0;c<r.length;c++)o.push(c.toString())}else{if(!1===(n="function"==typeof r)&&!Se(r))return o;e=Te&&n}for(i in r)e&&"prototype"===i||!Ee(r,i)||o.push(String(i));if(Ae)for(t=Ne(r),c=0;c<ke.length;c++)u=ke[c],t&&"constructor"===u||!Ee(r,u)||o.push(String(u));return o},De=l?f()?Ve:Be:xe,Fe=De;var Ge=o?u:function(r){return Fe(Object(r))},Le=void 0!==Object.getOwnPropertySymbols,Me=Object.getOwnPropertySymbols;var Xe=Le?function(r){return Me(Object(r))}:function(){return[]},Ye=void 0!==Object.getOwnPropertyDescriptor,Ce=Object.getOwnPropertyDescriptor;var He=j;var Re=Ge,We=Xe,ze=Ye?function(r,t){var e;return null==r||void 0===(e=Ce(r,t))?null:e}:function(r,t){return He(r,t)?{configurable:!0,enumerable:!0,writable:!0,value:r[t]}:null},Ue=Y;var qe=t?n:function(r){var t,e,n,o,i;for(o={},e=Re(r),i=0;i<e.length;i++)(n=ze(r,e[i]))&&Ue(o,e[i],{configurable:!0,enumerable:!0,writable:!0,value:n});for(t=We(r),i=0;i<t.length;i++)(n=ze(r,t[i]))&&Ue(o,t[i],{configurable:!0,enumerable:!0,writable:!0,value:n});return o},Je=ve;var Ke=function(r){return"function"===Je(r)},Qe=Object.getPrototypeOf;var Ze=function(r){return r.__proto__},$e=P,rn=Ze;var tn=function(r){var t=rn(r);return t||null===t?t:"[object Function]"===$e(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null},en=Qe,nn=tn,on=Ke(Object.getPrototypeOf)?en:nn;var un=qe,cn=Xe,an=function(r){return null==r?null:(r=Object(r),on(r))},fn=De,ln=Y,vn=j;var pn=function(r){var t,e,n,o,i;if(null==r)return{};n=Object(r),t={};do{for(o=un(n),e=fn(o),i=0;i<e.length;i++)vn(t,e[i])||ln(t,e[i],{configurable:!0,enumerable:!0,writable:!0,value:o[e[i]]});for(e=cn(o),i=0;i<e.length;i++)vn(t,e[i])||ln(t,e[i],{configurable:!0,enumerable:!0,writable:!0,value:o[e[i]]});n=an(n)}while(n);return t},bn=pn;export{bn as default};
//# sourceMappingURL=mod.js.map
