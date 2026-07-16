"use strict";var l=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var v=l(function(m,s){
var p=require('@stdlib/utils-property-descriptors/dist'),b=require('@stdlib/utils-property-symbols/dist'),c=require('@stdlib/utils-get-prototype-of/dist'),f=require('@stdlib/utils-keys/dist'),o=require('@stdlib/utils-define-property/dist'),n=require('@stdlib/assert-has-own-property/dist'),q=require('@stdlib/object-ctor/dist');function y(i){var r,e,u,a,t;if(i==null)return{};u=q(i),r={};do{for(a=p(u),e=f(a),t=0;t<e.length;t++)n(r,e[t])||o(r,e[t],{configurable:!0,enumerable:!0,writable:!0,value:a[e[t]]});for(e=b(a),t=0;t<e.length;t++)n(r,e[t])||o(r,e[t],{configurable:!0,enumerable:!0,writable:!0,value:a[e[t]]});u=c(u)}while(u);return r}s.exports=y
});var g=v();module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
