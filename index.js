// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).dtypeChar=e()}(this,(function(){"use strict";function t(t){return Object.keys(Object(t))}var e=void 0!==Object.keys;function r(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var n=r();function o(){return n&&"symbol"==typeof Symbol.toStringTag}var i=Object.prototype.toString;var u=Object.prototype.hasOwnProperty;function a(t,e){return null!=t&&u.call(t,e)}var c="function"==typeof Symbol?Symbol.toStringTag:"";var l,f=o()?function(t){var e,r,n;if(null==t)return i.call(t);r=t[c],e=a(t,c);try{t[c]=void 0}catch(e){return i.call(t)}return n=i.call(t),e?t[c]=r:delete t[c],n}:function(t){return i.call(t)};function p(t){return"[object Arguments]"===f(t)}l=function(){return p(arguments)}();var s=l,y="function"==typeof Object.defineProperty?Object.defineProperty:null;var g,b=Object.defineProperty,v=Object.prototype,d=v.toString,h=v.__defineGetter__,m=v.__defineSetter__,w=v.__lookupGetter__,j=v.__lookupSetter__;g=function(){try{return y({},"x",{}),!0}catch(t){return!1}}()?b:function(t,e,r){var n,o,i,u;if("object"!=typeof t||null===t||"[object Array]"===d.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===d.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((o="value"in r)&&(w.call(t,e)||j.call(t,e)?(n=t.__proto__,t.__proto__=v,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),i="get"in r,u="set"in r,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&h&&h.call(t,e,r.get),u&&m&&m.call(t,e,r.set),t};var _=g;function O(t,e,r){_(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function S(t){return"string"==typeof t}var E=String.prototype.valueOf;var x=o();function T(t){return"object"==typeof t&&(t instanceof String||(x?function(t){try{return E.call(t),!0}catch(t){return!1}}(t):"[object String]"===f(t)))}function I(t){return S(t)||T(t)}function P(t){return"number"==typeof t}O(I,"isPrimitive",S),O(I,"isObject",T);var k=Number,A=k.prototype.toString;var V=o();function N(t){return"object"==typeof t&&(t instanceof k||(V?function(t){try{return A.call(t),!0}catch(t){return!1}}(t):"[object Number]"===f(t)))}function F(t){return P(t)||N(t)}function B(t){return t!=t}function L(t){return P(t)&&B(t)}function C(t){return N(t)&&B(t.valueOf())}function G(t){return L(t)||C(t)}O(F,"isPrimitive",P),O(F,"isObject",N),O(G,"isPrimitive",L),O(G,"isObject",C);var Y=Number.POSITIVE_INFINITY,X=k.NEGATIVE_INFINITY,M=Math.floor;function W(t){return M(t)===t}function $(t){return t<Y&&t>X&&W(t)}function R(t){return P(t)&&$(t)}function H(t){return N(t)&&$(t.valueOf())}function U(t){return R(t)||H(t)}O(U,"isPrimitive",R),O(U,"isObject",H);var Z=Object.prototype.propertyIsEnumerable;var z=!Z.call("beep","0");function D(t,e){var r;return null!=t&&(!(r=Z.call(t,e))&&z&&I(t)?!L(e=+e)&&R(e)&&e>=0&&e<t.length:r)}var q=Array.isArray?Array.isArray:function(t){return"[object Array]"===f(t)};var J=s?p:function(t){return null!==t&&"object"==typeof t&&!q(t)&&"number"==typeof t.length&&W(t.length)&&t.length>=0&&t.length<=4294967295&&a(t,"callee")&&!D(t,"callee")},K=Array.prototype.slice;function Q(t){return null!==t&&"object"==typeof t}O(Q,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!q(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(Q));var tt=D((function(){}),"prototype"),et=!D({toString:null},"toString");function rt(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&W(t.length)&&t.length>=0&&t.length<=9007199254740991}function nt(t,e,r){var n,o;if(!rt(t)&&!S(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(n=t.length))return-1;if(3===arguments.length){if(!R(r))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+r+"`.");if(r>=0){if(r>=n)return-1;o=r}else(o=n+r)<0&&(o=0)}else o=0;if(G(e)){for(;o<n;o++)if(G(t[o]))return o}else for(;o<n;o++)if(t[o]===e)return o;return-1}var ot=/./,it="function"==typeof Object.defineProperty?Object.defineProperty:null;var ut,at=Object.defineProperty,ct=Object.prototype,lt=ct.toString,ft=ct.__defineGetter__,pt=ct.__defineSetter__,st=ct.__lookupGetter__,yt=ct.__lookupSetter__;ut=function(){try{return it({},"x",{}),!0}catch(t){return!1}}()?at:function(t,e,r){var n,o,i,u;if("object"!=typeof t||null===t||"[object Array]"===lt.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===lt.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((o="value"in r)&&(st.call(t,e)||yt.call(t,e)?(n=t.__proto__,t.__proto__=ct,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),i="get"in r,u="set"in r,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&ft&&ft.call(t,e,r.get),u&&pt&&pt.call(t,e,r.set),t};var gt=ut;function bt(t,e,r){gt(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function vt(t){return"boolean"==typeof t}var dt=r();function ht(){return dt&&"symbol"==typeof Symbol.toStringTag}var mt=Object.prototype.toString;var wt=Object.prototype.hasOwnProperty;var jt="function"==typeof Symbol?Symbol.toStringTag:"";var _t=ht()?function(t){var e,r,n,o,i;if(null==t)return mt.call(t);r=t[jt],i=jt,e=null!=(o=t)&&wt.call(o,i);try{t[jt]=void 0}catch(e){return mt.call(t)}return n=mt.call(t),e?t[jt]=r:delete t[jt],n}:function(t){return mt.call(t)},Ot=Boolean.prototype.toString;var St=ht();function Et(t){return"object"==typeof t&&(t instanceof Boolean||(St?function(t){try{return Ot.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===_t(t)))}function xt(t){return vt(t)||Et(t)}function Tt(){return new Function("return this;")()}bt(xt,"isPrimitive",vt),bt(xt,"isObject",Et);var It="object"==typeof self?self:null,Pt="object"==typeof window?window:null,kt="object"==typeof global?global:null;var At=function(t){if(arguments.length){if(!vt(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return Tt()}if(It)return It;if(Pt)return Pt;if(kt)return kt;throw new Error("unexpected error. Unable to resolve global object.")}(),Vt=At.document&&At.document.childNodes,Nt=Int8Array;function Ft(){return/^\s*function\s*([^(]*)/i}var Bt=/^\s*function\s*([^(]*)/i;function Lt(t){var e,r,n,o;if(("Object"===(r=f(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=Bt.exec(n.toString()))return e[1]}return Q(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}O(Ft,"REGEXP",Bt);var Ct="function"==typeof ot||"object"==typeof Nt||"function"==typeof Vt?function(t){return Lt(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?Lt(t).toLowerCase():e};function Gt(t){return t.constructor&&t.constructor.prototype===t}var Yt=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Xt="undefined"==typeof window?void 0:window;var Mt=function(){var t;if("undefined"===Ct(Xt))return!1;for(t in Xt)try{-1===nt(Yt,t)&&a(Xt,t)&&null!==Xt[t]&&"object"===Ct(Xt[t])&&Gt(Xt[t])}catch(t){return!0}return!1}(),Wt="undefined"!=typeof window;var $t,Rt=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];$t=e?function(){return 2!==(t(arguments)||"").length}(1,2)?function(e){return J(e)?t(K.call(e)):t(e)}:t:function(t){var e,r,n,o,i,u,c;if(o=[],J(t)){for(c=0;c<t.length;c++)o.push(c.toString());return o}if("string"==typeof t){if(t.length>0&&!a(t,"0"))for(c=0;c<t.length;c++)o.push(c.toString())}else{if(!1==(n="function"==typeof t)&&!Q(t))return o;r=tt&&n}for(i in t)r&&"prototype"===i||!a(t,i)||o.push(String(i));if(et)for(e=function(t){if(!1===Wt&&!Mt)return Gt(t);try{return Gt(t)}catch(t){return!1}}(t),c=0;c<Rt.length;c++)u=Rt[c],e&&"constructor"===u||!a(t,u)||o.push(String(u));return o};var Ht=$t;function Ut(t){return"function"===Ct(t)}var Zt,zt=Object.getPrototypeOf;Zt=Ut(Object.getPrototypeOf)?zt:function(t){var e=function(t){return t.__proto__}(t);return e||null===e?e:"[object Function]"===f(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var Dt=Zt;var qt=Object.prototype;function Jt(t){var e;return!!function(t){return"object"==typeof t&&null!==t&&!q(t)}(t)&&(e=function(t){return null==t?null:(t=Object(t),Dt(t))}(t),!e||!a(t,"constructor")&&a(e,"constructor")&&Ut(e.constructor)&&"[object Function]"===f(e.constructor)&&a(e,"isPrototypeOf")&&Ut(e.isPrototypeOf)&&(e===qt||function(t){var e;for(e in t)if(!a(t,e))return!1;return!0}(t)))}var Kt="function"==typeof Object.defineProperty?Object.defineProperty:null;var Qt,te=Object.defineProperty,ee=Object.prototype,re=ee.toString,ne=ee.__defineGetter__,oe=ee.__defineSetter__,ie=ee.__lookupGetter__,ue=ee.__lookupSetter__;Qt=function(){try{return Kt({},"x",{}),!0}catch(t){return!1}}()?te:function(t,e,r){var n,o,i,u;if("object"!=typeof t||null===t||"[object Array]"===re.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===re.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((o="value"in r)&&(ie.call(t,e)||ue.call(t,e)?(n=t.__proto__,t.__proto__=ee,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),i="get"in r,u="set"in r,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&ne&&ne.call(t,e,r.get),u&&oe&&oe.call(t,e,r.set),t};var ae=Qt;function ce(t,e,r){ae(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}var le=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function fe(){return le.slice()}var pe=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function se(){return pe.slice()}function ye(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function ge(t,e,r){ae(t,e,{configurable:!1,enumerable:!0,writable:!1,value:r})}function be(t){return Object.keys(Object(t))}var ve=void 0!==Object.keys,de=r();function he(){return de&&"symbol"==typeof Symbol.toStringTag}var me=Object.prototype.toString;var we=Object.prototype.hasOwnProperty;function je(t,e){return null!=t&&we.call(t,e)}var _e="function"==typeof Symbol?Symbol.toStringTag:"";var Oe,Se=he()?function(t){var e,r,n;if(null==t)return me.call(t);r=t[_e],e=je(t,_e);try{t[_e]=void 0}catch(e){return me.call(t)}return n=me.call(t),e?t[_e]=r:delete t[_e],n}:function(t){return me.call(t)};function Ee(t){return"[object Arguments]"===Se(t)}Oe=function(){return Ee(arguments)}();var xe=Oe;function Te(t){return"string"==typeof t}var Ie=String.prototype.valueOf;var Pe=he();function ke(t){return"object"==typeof t&&(t instanceof String||(Pe?function(t){try{return Ie.call(t),!0}catch(t){return!1}}(t):"[object String]"===Se(t)))}function Ae(t){return Te(t)||ke(t)}function Ve(t){return"number"==typeof t}ce(Ae,"isPrimitive",Te),ce(Ae,"isObject",ke);var Ne=Number,Fe=Ne.prototype.toString;var Be=he();function Le(t){return"object"==typeof t&&(t instanceof Ne||(Be?function(t){try{return Fe.call(t),!0}catch(t){return!1}}(t):"[object Number]"===Se(t)))}function Ce(t){return Ve(t)||Le(t)}function Ge(t){return t!=t}function Ye(t){return Ve(t)&&Ge(t)}function Xe(t){return Le(t)&&Ge(t.valueOf())}function Me(t){return Ye(t)||Xe(t)}ce(Ce,"isPrimitive",Ve),ce(Ce,"isObject",Le),ce(Me,"isPrimitive",Ye),ce(Me,"isObject",Xe);var We=Number.POSITIVE_INFINITY,$e=Ne.NEGATIVE_INFINITY,Re=Math.floor;function He(t){return Re(t)===t}function Ue(t){return t<We&&t>$e&&He(t)}function Ze(t){return Ve(t)&&Ue(t)}function ze(t){return Le(t)&&Ue(t.valueOf())}function De(t){return Ze(t)||ze(t)}ce(De,"isPrimitive",Ze),ce(De,"isObject",ze);var qe=Object.prototype.propertyIsEnumerable;var Je=!qe.call("beep","0");function Ke(t,e){var r;return null!=t&&(!(r=qe.call(t,e))&&Je&&Ae(t)?!Ye(e=+e)&&Ze(e)&&e>=0&&e<t.length:r)}var Qe=Array.isArray?Array.isArray:function(t){return"[object Array]"===Se(t)};var tr=xe?Ee:function(t){return null!==t&&"object"==typeof t&&!Qe(t)&&"number"==typeof t.length&&He(t.length)&&t.length>=0&&t.length<=4294967295&&je(t,"callee")&&!Ke(t,"callee")},er=Array.prototype.slice;function rr(t){return null!==t&&"object"==typeof t}ce(rr,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!Qe(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(rr));var nr=Ke((function(){}),"prototype"),or=!Ke({toString:null},"toString");function ir(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&He(t.length)&&t.length>=0&&t.length<=9007199254740991}function ur(t,e,r){var n,o;if(!ir(t)&&!Te(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(n=t.length))return-1;if(3===arguments.length){if(!Ze(r))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+r+"`.");if(r>=0){if(r>=n)return-1;o=r}else(o=n+r)<0&&(o=0)}else o=0;if(Me(e)){for(;o<n;o++)if(Me(t[o]))return o}else for(;o<n;o++)if(t[o]===e)return o;return-1}var ar=/./;function cr(){return new Function("return this;")()}var lr="object"==typeof self?self:null,fr="object"==typeof window?window:null,pr="object"==typeof global?global:null;var sr=function(t){if(arguments.length){if(!vt(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return cr()}if(lr)return lr;if(fr)return fr;if(pr)return pr;throw new Error("unexpected error. Unable to resolve global object.")}(),yr=sr.document&&sr.document.childNodes,gr=Int8Array;function br(){return/^\s*function\s*([^(]*)/i}var vr=/^\s*function\s*([^(]*)/i;function dr(t){var e,r,n,o;if(("Object"===(r=Se(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=vr.exec(n.toString()))return e[1]}return rr(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}ce(br,"REGEXP",vr);var hr="function"==typeof ar||"object"==typeof gr||"function"==typeof yr?function(t){return dr(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?dr(t).toLowerCase():e};function mr(t){return t.constructor&&t.constructor.prototype===t}var wr=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],jr="undefined"==typeof window?void 0:window;var _r=function(){var t;if("undefined"===hr(jr))return!1;for(t in jr)try{-1===ur(wr,t)&&je(jr,t)&&null!==jr[t]&&"object"===hr(jr[t])&&mr(jr[t])}catch(t){return!0}return!1}(),Or="undefined"!=typeof window;var Sr,Er=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];Sr=ve?function(){return 2!==(be(arguments)||"").length}(1,2)?function(t){return tr(t)?be(er.call(t)):be(t)}:be:function(t){var e,r,n,o,i,u,a;if(o=[],tr(t)){for(a=0;a<t.length;a++)o.push(a.toString());return o}if("string"==typeof t){if(t.length>0&&!je(t,"0"))for(a=0;a<t.length;a++)o.push(a.toString())}else{if(!1==(n="function"==typeof t)&&!rr(t))return o;r=nr&&n}for(i in t)r&&"prototype"===i||!je(t,i)||o.push(String(i));if(or)for(e=function(t){if(!1===Or&&!_r)return mr(t);try{return mr(t)}catch(t){return!1}}(t),a=0;a<Er.length;a++)u=Er[a],e&&"constructor"===u||!je(t,u)||o.push(String(u));return o};var xr=Sr;ce(se,"enum",ye),function(t,e){var r,n,o;for(r=xr(e),o=0;o<r.length;o++)ge(t,n=r[o],e[n])}(se,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var Tr={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function Ir(){return{bool:Tr.bool,int8:Tr.int8,uint8:Tr.uint8,uint8c:Tr.uint8c,int16:Tr.int16,uint16:Tr.uint16,int32:Tr.int32,uint32:Tr.uint32,int64:Tr.int64,uint64:Tr.uint64,float32:Tr.float32,float64:Tr.float64,complex64:Tr.complex64,complex128:Tr.complex128,binary:Tr.binary,generic:Tr.generic,notype:Tr.notype,userdefined_type:Tr.userdefined_type}}ce(fe,"enum",Ir),function(t,e){var r,n,o;for(r=xr(e),o=0;o<r.length;o++)ge(t,n=r[o],e[n])}(fe,Ir());var Pr=function(t,e){var r,n,o,i,u,c,l,f=!0;if(!Q(t))throw new TypeError("invalid argument. First argument must be object-like. Value: `"+t+"`.");if(arguments.length>1){if(!Jt(e))throw new TypeError("invalid argument. Options arguments must be an object. Value: `"+e+"`.");if(a(e,"duplicates")&&!vt(f=e.duplicates))throw new TypeError("invalid argument. `duplicates` option must be a boolean primitive. Option: `"+f+"`.")}if(n=(r=Ht(t)).length,u={},f)for(l=0;l<n;l++)a(u,i=t[o=r[l]])?(c=u[i],q(c)?u[i].push(o):u[i]=[c,o]):u[i]=o;else for(l=0;l<n;l++)u[t[o=r[l]]]=o;return u}(Ir(),{duplicates:!1});var kr="function"==typeof Object.defineProperty?Object.defineProperty:null;var Ar=Object.defineProperty;function Vr(t){return"number"==typeof t}function Nr(t){var e,r="";for(e=0;e<t;e++)r+="0";return r}function Fr(t,e,r){var n=!1,o=e-t.length;return o<0||(function(t){return"-"===t[0]}(t)&&(n=!0,t=t.substr(1)),t=r?t+Nr(o):Nr(o)+t,n&&(t="-"+t)),t}var Br=String.prototype.toLowerCase,Lr=String.prototype.toUpperCase;function Cr(t){var e,r,n;switch(t.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(r=t.arg,n=parseInt(r,10),!isFinite(n)){if(!Vr(r))throw new Error("invalid integer. Value: "+r);n=0}return n<0&&("u"===t.specifier||10!==e)&&(n=4294967295+n+1),n<0?(r=(-n).toString(e),t.precision&&(r=Fr(r,t.precision,t.padRight)),r="-"+r):(r=n.toString(e),n||t.precision?t.precision&&(r=Fr(r,t.precision,t.padRight)):r="",t.sign&&(r=t.sign+r)),16===e&&(t.alternate&&(r="0x"+r),r=t.specifier===Lr.call(t.specifier)?Lr.call(r):Br.call(r)),8===e&&t.alternate&&"0"!==r.charAt(0)&&(r="0"+r),r}function Gr(t){return"string"==typeof t}var Yr=Math.abs,Xr=String.prototype.toLowerCase,Mr=String.prototype.toUpperCase,Wr=String.prototype.replace,$r=/e\+(\d)$/,Rr=/e-(\d)$/,Hr=/^(\d+)$/,Ur=/^(\d+)e/,Zr=/\.0$/,zr=/\.0*e/,Dr=/(\..*[^0])0*e/;function qr(t){var e,r,n=parseFloat(t.arg);if(!isFinite(n)){if(!Vr(t.arg))throw new Error("invalid floating-point number. Value: "+r);n=t.arg}switch(t.specifier){case"e":case"E":r=n.toExponential(t.precision);break;case"f":case"F":r=n.toFixed(t.precision);break;case"g":case"G":Yr(n)<1e-4?((e=t.precision)>0&&(e-=1),r=n.toExponential(e)):r=n.toPrecision(t.precision),t.alternate||(r=Wr.call(r,Dr,"$1e"),r=Wr.call(r,zr,"e"),r=Wr.call(r,Zr,""));break;default:throw new Error("invalid double notation. Value: "+t.specifier)}return r=Wr.call(r,$r,"e+0$1"),r=Wr.call(r,Rr,"e-0$1"),t.alternate&&(r=Wr.call(r,Hr,"$1."),r=Wr.call(r,Ur,"$1.e")),n>=0&&t.sign&&(r=t.sign+r),r=t.specifier===Mr.call(t.specifier)?Mr.call(r):Xr.call(r)}function Jr(t){var e,r="";for(e=0;e<t;e++)r+=" ";return r}function Kr(t,e,r){var n=e-t.length;return n<0?t:t=r?t+Jr(n):Jr(n)+t}var Qr=String.fromCharCode,tn=isNaN,en=Array.isArray;function rn(t){var e={};return e.specifier=t.specifier,e.precision=void 0===t.precision?1:t.precision,e.width=t.width,e.flags=t.flags||"",e.mapping=t.mapping,e}function nn(t){var e,r,n,o,i,u,a,c,l;if(!en(t))throw new TypeError("invalid argument. First argument must be an array. Value: `"+t+"`.");for(u="",a=1,c=0;c<t.length;c++)if(Gr(n=t[c]))u+=n;else{if(e=void 0!==n.precision,!(n=rn(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(a=n.mapping),r=n.flags,l=0;l<r.length;l++)switch(o=r.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=r.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[a],10),a+=1,tn(n.width))throw new TypeError("the argument for * width at position "+a+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[a],10),a+=1,tn(n.precision))throw new TypeError("the argument for * precision at position "+a+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[a],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=Cr(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!tn(n.arg)){if((i=parseInt(n.arg,10))<0||i>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=tn(i)?String(n.arg):Qr(i)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=qr(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=Fr(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=Kr(n.arg,n.width,n.padRight)),u+=n.arg||"",a+=1}return u}var on=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function un(t){var e={mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],precision:t[5],specifier:t[6]};return"."===t[4]&&void 0===t[5]&&(e.precision="1"),e}function an(t){var e,r,n,o;for(r=[],o=0,n=on.exec(t);n;)(e=t.slice(o,on.lastIndex-n[0].length)).length&&r.push(e),r.push(un(n)),o=on.lastIndex,n=on.exec(t);return(e=t.slice(o)).length&&r.push(e),r}function cn(t){return"string"==typeof t}function ln(t){var e,r,n;if(!cn(t))throw new TypeError(ln("invalid argument. First argument must be a string. Value: `%s`.",t));for(e=an(t),(r=new Array(arguments.length))[0]=e,n=1;n<r.length;n++)r[n]=arguments[n];return nn.apply(null,r)}var fn,pn=Object.prototype,sn=pn.toString,yn=pn.__defineGetter__,gn=pn.__defineSetter__,bn=pn.__lookupGetter__,vn=pn.__lookupSetter__;fn=function(){try{return kr({},"x",{}),!0}catch(t){return!1}}()?Ar:function(t,e,r){var n,o,i,u;if("object"!=typeof t||null===t||"[object Array]"===sn.call(t))throw new TypeError(ln("invalid argument. First argument must be an object. Value: `%s`.",t));if("object"!=typeof r||null===r||"[object Array]"===sn.call(r))throw new TypeError(ln("invalid argument. Property descriptor must be an object. Value: `%s`.",r));if((o="value"in r)&&(bn.call(t,e)||vn.call(t,e)?(n=t.__proto__,t.__proto__=pn,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),i="get"in r,u="set"in r,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&yn&&yn.call(t,e,r.get),u&&gn&&gn.call(t,e,r.set),t};var dn=fn;function hn(t,e,r){dn(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}var mn={all:["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"],floating_point:["complex64","complex128","float32","float64"],real_floating_point:["float32","float64"],complex_floating_point:["complex64","complex128"],integer:["int16","int32","int8","uint16","uint32","uint8","uint8c"],signed_integer:["int16","int32","int8"],unsigned_integer:["uint16","uint32","uint8","uint8c"],real:["float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],numeric:["complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"]};function wn(){var t;return 0===arguments.length?mn.all.slice():(t=mn[arguments[0]])?t.slice():[]}function jn(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function _n(t,e,r){dn(t,e,{configurable:!1,enumerable:!0,writable:!1,value:r})}function On(t){return Object.keys(Object(t))}var Sn=void 0!==Object.keys,En=r();function xn(){return En&&"symbol"==typeof Symbol.toStringTag}var Tn=Object.prototype.toString;var In=Object.prototype.hasOwnProperty;function Pn(t,e){return null!=t&&In.call(t,e)}var kn="function"==typeof Symbol?Symbol:void 0,An="function"==typeof kn?kn.toStringTag:"";var Vn,Nn=xn()?function(t){var e,r,n;if(null==t)return Tn.call(t);r=t[An],e=Pn(t,An);try{t[An]=void 0}catch(e){return Tn.call(t)}return n=Tn.call(t),e?t[An]=r:delete t[An],n}:function(t){return Tn.call(t)};function Fn(t){return"[object Arguments]"===Nn(t)}Vn=function(){return Fn(arguments)}();var Bn=Vn;function Ln(t){return"string"==typeof t}var Cn=String.prototype.valueOf;var Gn=xn();function Yn(t){return"object"==typeof t&&(t instanceof String||(Gn?function(t){try{return Cn.call(t),!0}catch(t){return!1}}(t):"[object String]"===Nn(t)))}function Xn(t){return Ln(t)||Yn(t)}function Mn(t){return"number"==typeof t}hn(Xn,"isPrimitive",Ln),hn(Xn,"isObject",Yn);var Wn=Number,$n=Wn.prototype.toString;var Rn=xn();function Hn(t){return"object"==typeof t&&(t instanceof Wn||(Rn?function(t){try{return $n.call(t),!0}catch(t){return!1}}(t):"[object Number]"===Nn(t)))}function Un(t){return Mn(t)||Hn(t)}function Zn(t){return t!=t}function zn(t){return Mn(t)&&Zn(t)}function Dn(t){return Hn(t)&&Zn(t.valueOf())}function qn(t){return zn(t)||Dn(t)}hn(Un,"isPrimitive",Mn),hn(Un,"isObject",Hn),hn(qn,"isPrimitive",zn),hn(qn,"isObject",Dn);var Jn=Number.POSITIVE_INFINITY,Kn=Wn.NEGATIVE_INFINITY,Qn=Math.floor;function to(t){return Qn(t)===t}function eo(t){return t<Jn&&t>Kn&&to(t)}function ro(t){return Mn(t)&&eo(t)}function no(t){return Hn(t)&&eo(t.valueOf())}function oo(t){return ro(t)||no(t)}hn(oo,"isPrimitive",ro),hn(oo,"isObject",no);var io=Object.prototype.propertyIsEnumerable;var uo=!io.call("beep","0");function ao(t,e){var r;return null!=t&&(!(r=io.call(t,e))&&uo&&Xn(t)?!zn(e=+e)&&ro(e)&&e>=0&&e<t.length:r)}var co=Array.isArray?Array.isArray:function(t){return"[object Array]"===Nn(t)};var lo=Bn?Fn:function(t){return null!==t&&"object"==typeof t&&!co(t)&&"number"==typeof t.length&&to(t.length)&&t.length>=0&&t.length<=4294967295&&Pn(t,"callee")&&!ao(t,"callee")},fo=Array.prototype.slice;function po(t){return null!==t&&"object"==typeof t}hn(po,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError(ln("invalid argument. Must provide a function. Value: `%s`.",t));return function(e){var r,n;if(!co(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(po));var so=ao((function(){}),"prototype"),yo=!ao({toString:null},"toString");function go(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&to(t.length)&&t.length>=0&&t.length<=9007199254740991}function bo(t,e,r){var n,o;if(!go(t)&&!Ln(t))throw new TypeError(ln("invalid argument. First argument must be an array-like object. Value: `%s`.",t));if(0===(n=t.length))return-1;if(3===arguments.length){if(!ro(r))throw new TypeError(ln("invalid argument. Third argument must be an integer. Value: `%s`.",r));if(r>=0){if(r>=n)return-1;o=r}else(o=n+r)<0&&(o=0)}else o=0;if(qn(e)){for(;o<n;o++)if(qn(t[o]))return o}else for(;o<n;o++)if(t[o]===e)return o;return-1}var vo=/./;function ho(t){return"boolean"==typeof t}var mo=Boolean,wo=Boolean.prototype.toString;var jo=xn();function _o(t){return"object"==typeof t&&(t instanceof mo||(jo?function(t){try{return wo.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===Nn(t)))}function Oo(t){return ho(t)||_o(t)}function So(){return new Function("return this;")()}hn(Oo,"isPrimitive",ho),hn(Oo,"isObject",_o);var Eo="object"==typeof self?self:null,xo="object"==typeof window?window:null,To="object"==typeof global?global:null,Io="object"==typeof globalThis?globalThis:null;var Po=function(t){if(arguments.length){if(!ho(t))throw new TypeError(ln("invalid argument. Must provide a boolean. Value: `%s`.",t));if(t)return So()}if(Io)return Io;if(Eo)return Eo;if(xo)return xo;if(To)return To;throw new Error("unexpected error. Unable to resolve global object.")}(),ko=Po.document&&Po.document.childNodes,Ao=Int8Array;function Vo(){return/^\s*function\s*([^(]*)/i}var No=/^\s*function\s*([^(]*)/i;function Fo(t){var e,r,n,o;if(("Object"===(r=Nn(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=No.exec(n.toString()))return e[1]}return po(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}hn(Vo,"REGEXP",No);var Bo="function"==typeof vo||"object"==typeof Ao||"function"==typeof ko?function(t){return Fo(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?Fo(t).toLowerCase():e};function Lo(t){return t.constructor&&t.constructor.prototype===t}var Co=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Go="undefined"==typeof window?void 0:window;var Yo=function(){var t;if("undefined"===Bo(Go))return!1;for(t in Go)try{-1===bo(Co,t)&&Pn(Go,t)&&null!==Go[t]&&"object"===Bo(Go[t])&&Lo(Go[t])}catch(t){return!0}return!1}(),Xo="undefined"!=typeof window;var Mo,Wo=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];Mo=Sn?function(){return 2!==(On(arguments)||"").length}(1,2)?function(t){return lo(t)?On(fo.call(t)):On(t)}:On:function(t){var e,r,n,o,i,u,a;if(o=[],lo(t)){for(a=0;a<t.length;a++)o.push(a.toString());return o}if("string"==typeof t){if(t.length>0&&!Pn(t,"0"))for(a=0;a<t.length;a++)o.push(a.toString())}else{if(!1==(n="function"==typeof t)&&!po(t))return o;r=so&&n}for(i in t)r&&"prototype"===i||!Pn(t,i)||o.push(String(i));if(yo)for(e=function(t){if(!1===Xo&&!Yo)return Lo(t);try{return Lo(t)}catch(t){return!1}}(t),a=0;a<Wo.length;a++)u=Wo[a],e&&"constructor"===u||!Pn(t,u)||o.push(String(u));return o};var $o=Mo;hn(wn,"enum",jn),function(t,e){var r,n,o;for(r=$o(e),o=0;o<r.length;o++)_n(t,n=r[o],e[n])}(wn,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var Ro,Ho={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function Uo(t){var e=typeof t;return"string"===e?null===function(t){var e=Ho[t];return"number"==typeof e?e:null}(t)?null:t:"number"===e?function(t){var e=Pr[t];return"string"==typeof e?e:null}(t):null}return function(t){return 0===arguments.length?{binary:"r",bool:"x",complex64:"c",complex128:"z",float16:"h",bfloat16:"e",float32:"f",float64:"d",float128:"g",generic:"o",int8:"s",int16:"k",int32:"i",int64:"l",int128:"m",int256:"n",uint8:"b",uint8c:"a",uint16:"t",uint32:"u",uint64:"v",uint128:"w",uint256:"y"}:(void 0===Ro&&(Ro={binary:"r",bool:"x",complex64:"c",complex128:"z",float16:"h",bfloat16:"e",float32:"f",float64:"d",float128:"g",generic:"o",int8:"s",int16:"k",int32:"i",int64:"l",int128:"m",int256:"n",uint8:"b",uint8c:"a",uint16:"t",uint32:"u",uint64:"v",uint128:"w",uint256:"y"}),Ro[Uo(t)]||null)}}));
//# sourceMappingURL=index.js.map
