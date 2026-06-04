"use strict";var l=function(i,e){return function(){return e||i((e={exports:{}}).exports,e),e.exports}};var v=l(function(m,s){
var p=require('@stdlib/utils-property-descriptors/dist'),b=require('@stdlib/utils-property-symbols/dist'),c=require('@stdlib/utils-get-prototype-of/dist'),f=require('@stdlib/utils-keys/dist'),o=require('@stdlib/utils-define-property/dist'),n=require('@stdlib/assert-has-own-property/dist'),q=require('@stdlib/object-ctor/dist');function y(i){var e,t,u,a,r;if(i==null)return{};u=q(i),e={};do{for(a=p(u),t=f(a),r=0;r<t.length;r++)n(e,t[r])||o(e,t[r],{configurable:!0,enumerable:!0,writable:!0,value:a[t[r]]});for(t=b(a),r=0;r<t.length;r++)n(e,t[r])||o(e,t[r],{configurable:!0,enumerable:!0,writable:!0,value:a[t[r]]});u=c(u)}while(u);return e}s.exports=y
});var g=v();module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
