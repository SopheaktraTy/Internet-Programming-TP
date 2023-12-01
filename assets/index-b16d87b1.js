(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function e(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(s){if(s.ep)return;s.ep=!0;const n=e(s);fetch(s.href,n)}})();function e0(c,a){const e=Object.create(null),r=c.split(",");for(let s=0;s<r.length;s++)e[r[s]]=!0;return a?s=>!!e[s.toLowerCase()]:s=>!!e[s]}const o2={},Y1=[],q2=()=>{},bt=()=>!1,Nt=/^on[^a-z]/,S4=c=>Nt.test(c),r0=c=>c.startsWith("onUpdate:"),M2=Object.assign,s0=(c,a)=>{const e=c.indexOf(a);e>-1&&c.splice(e,1)},wt=Object.prototype.hasOwnProperty,Y=(c,a)=>wt.call(c,a),U=Array.isArray,Q1=c=>y4(c)==="[object Map]",t7=c=>y4(c)==="[object Set]",$=c=>typeof c=="function",z2=c=>typeof c=="string",n0=c=>typeof c=="symbol",m2=c=>c!==null&&typeof c=="object",o7=c=>(m2(c)||$(c))&&$(c.then)&&$(c.catch),l7=Object.prototype.toString,y4=c=>l7.call(c),St=c=>y4(c).slice(8,-1),f7=c=>y4(c)==="[object Object]",i0=c=>z2(c)&&c!=="NaN"&&c[0]!=="-"&&""+parseInt(c,10)===c,f4=e0(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),k4=c=>{const a=Object.create(null);return e=>a[e]||(a[e]=c(e))},yt=/-(\w)/g,c1=k4(c=>c.replace(yt,(a,e)=>e?e.toUpperCase():"")),kt=/\B([A-Z])/g,t3=k4(c=>c.replace(kt,"-$1").toLowerCase()),A4=k4(c=>c.charAt(0).toUpperCase()+c.slice(1)),f6=k4(c=>c?`on${A4(c)}`:""),B1=(c,a)=>!Object.is(c,a),m4=(c,a)=>{for(let e=0;e<c.length;e++)c[e](a)},d4=(c,a,e)=>{Object.defineProperty(c,a,{configurable:!0,enumerable:!1,value:e})},N6=c=>{const a=parseFloat(c);return isNaN(a)?c:a};let R8;const w6=()=>R8||(R8=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function D1(c){if(U(c)){const a={};for(let e=0;e<c.length;e++){const r=c[e],s=z2(r)?Tt(r):D1(r);if(s)for(const n in s)a[n]=s[n]}return a}else if(z2(c)||m2(c))return c}const At=/;(?![^(]*\))/g,_t=/:([^]+)/,Pt=/\/\*[^]*?\*\//g;function Tt(c){const a={};return c.replace(Pt,"").split(At).forEach(e=>{if(e){const r=e.split(_t);r.length>1&&(a[r[0].trim()]=r[1].trim())}}),a}function t0(c){let a="";if(z2(c))a=c;else if(U(c))for(let e=0;e<c.length;e++){const r=t0(c[e]);r&&(a+=r+" ")}else if(m2(c))for(const e in c)c[e]&&(a+=e+" ");return a.trim()}const Bt="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Rt=e0(Bt);function m7(c){return!!c||c===""}const b2=c=>z2(c)?c:c==null?"":U(c)||m2(c)&&(c.toString===l7||!$(c.toString))?JSON.stringify(c,u7,2):String(c),u7=(c,a)=>a&&a.__v_isRef?u7(c,a.value):Q1(a)?{[`Map(${a.size})`]:[...a.entries()].reduce((e,[r,s])=>(e[`${r} =>`]=s,e),{})}:t7(a)?{[`Set(${a.size})`]:[...a.values()]}:m2(a)&&!U(a)&&!f7(a)?String(a):a;let P2;class v7{constructor(a=!1){this.detached=a,this._active=!0,this.effects=[],this.cleanups=[],this.parent=P2,!a&&P2&&(this.index=(P2.scopes||(P2.scopes=[])).push(this)-1)}get active(){return this._active}run(a){if(this._active){const e=P2;try{return P2=this,a()}finally{P2=e}}}on(){P2=this}off(){P2=this.parent}stop(a){if(this._active){let e,r;for(e=0,r=this.effects.length;e<r;e++)this.effects[e].stop();for(e=0,r=this.cleanups.length;e<r;e++)this.cleanups[e]();if(this.scopes)for(e=0,r=this.scopes.length;e<r;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!a){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function h7(c){return new v7(c)}function Ft(c,a=P2){a&&a.active&&a.effects.push(c)}function H7(){return P2}function Et(c){P2&&P2.cleanups.push(c)}const o0=c=>{const a=new Set(c);return a.w=0,a.n=0,a},z7=c=>(c.w&C1)>0,p7=c=>(c.n&C1)>0,Dt=({deps:c})=>{if(c.length)for(let a=0;a<c.length;a++)c[a].w|=C1},It=c=>{const{deps:a}=c;if(a.length){let e=0;for(let r=0;r<a.length;r++){const s=a[r];z7(s)&&!p7(s)?s.delete(c):a[e++]=s,s.w&=~C1,s.n&=~C1}a.length=e}},M4=new WeakMap;let z3=0,C1=1;const S6=30;let I2;const P1=Symbol(""),y6=Symbol("");class l0{constructor(a,e=null,r){this.fn=a,this.scheduler=e,this.active=!0,this.deps=[],this.parent=void 0,Ft(this,r)}run(){if(!this.active)return this.fn();let a=I2,e=V1;for(;a;){if(a===this)return;a=a.parent}try{return this.parent=I2,I2=this,V1=!0,C1=1<<++z3,z3<=S6?Dt(this):F8(this),this.fn()}finally{z3<=S6&&It(this),C1=1<<--z3,I2=this.parent,V1=e,this.parent=void 0,this.deferStop&&this.stop()}}stop(){I2===this?this.deferStop=!0:this.active&&(F8(this),this.onStop&&this.onStop(),this.active=!1)}}function F8(c){const{deps:a}=c;if(a.length){for(let e=0;e<a.length;e++)a[e].delete(c);a.length=0}}let V1=!0;const V7=[];function o3(){V7.push(V1),V1=!1}function l3(){const c=V7.pop();V1=c===void 0?!0:c}function k2(c,a,e){if(V1&&I2){let r=M4.get(c);r||M4.set(c,r=new Map);let s=r.get(e);s||r.set(e,s=o0()),d7(s)}}function d7(c,a){let e=!1;z3<=S6?p7(c)||(c.n|=C1,e=!z7(c)):e=!c.has(I2),e&&(c.add(I2),I2.deps.push(c))}function s1(c,a,e,r,s,n){const i=M4.get(c);if(!i)return;let t=[];if(a==="clear")t=[...i.values()];else if(e==="length"&&U(c)){const o=Number(r);i.forEach((l,f)=>{(f==="length"||f>=o)&&t.push(l)})}else switch(e!==void 0&&t.push(i.get(e)),a){case"add":U(c)?i0(e)&&t.push(i.get("length")):(t.push(i.get(P1)),Q1(c)&&t.push(i.get(y6)));break;case"delete":U(c)||(t.push(i.get(P1)),Q1(c)&&t.push(i.get(y6)));break;case"set":Q1(c)&&t.push(i.get(P1));break}if(t.length===1)t[0]&&k6(t[0]);else{const o=[];for(const l of t)l&&o.push(...l);k6(o0(o))}}function k6(c,a){const e=U(c)?c:[...c];for(const r of e)r.computed&&E8(r);for(const r of e)r.computed||E8(r)}function E8(c,a){(c!==I2||c.allowRecurse)&&(c.scheduler?c.scheduler():c.run())}function Ot(c,a){var e;return(e=M4.get(c))==null?void 0:e.get(a)}const Ut=e0("__proto__,__v_isRef,__isVue"),M7=new Set(Object.getOwnPropertyNames(Symbol).filter(c=>c!=="arguments"&&c!=="caller").map(c=>Symbol[c]).filter(n0)),D8=qt();function qt(){const c={};return["includes","indexOf","lastIndexOf"].forEach(a=>{c[a]=function(...e){const r=X(this);for(let n=0,i=this.length;n<i;n++)k2(r,"get",n+"");const s=r[a](...e);return s===-1||s===!1?r[a](...e.map(X)):s}}),["push","pop","shift","unshift","splice"].forEach(a=>{c[a]=function(...e){o3();const r=X(this)[a].apply(this,e);return l3(),r}}),c}function Wt(c){const a=X(this);return k2(a,"has",c),a.hasOwnProperty(c)}class C7{constructor(a=!1,e=!1){this._isReadonly=a,this._shallow=e}get(a,e,r){const s=this._isReadonly,n=this._shallow;if(e==="__v_isReactive")return!s;if(e==="__v_isReadonly")return s;if(e==="__v_isShallow")return n;if(e==="__v_raw"&&r===(s?n?ro:b7:n?x7:L7).get(a))return a;const i=U(a);if(!s){if(i&&Y(D8,e))return Reflect.get(D8,e,r);if(e==="hasOwnProperty")return Wt}const t=Reflect.get(a,e,r);return(n0(e)?M7.has(e):Ut(e))||(s||k2(a,"get",e),n)?t:h2(t)?i&&i0(e)?t:t.value:m2(t)?s?w7(t):D3(t):t}}class g7 extends C7{constructor(a=!1){super(!1,a)}set(a,e,r,s){let n=a[e];if(a3(n)&&h2(n)&&!h2(r))return!1;if(!this._shallow&&(!C4(r)&&!a3(r)&&(n=X(n),r=X(r)),!U(a)&&h2(n)&&!h2(r)))return n.value=r,!0;const i=U(a)&&i0(e)?Number(e)<a.length:Y(a,e),t=Reflect.set(a,e,r,s);return a===X(s)&&(i?B1(r,n)&&s1(a,"set",e,r):s1(a,"add",e,r)),t}deleteProperty(a,e){const r=Y(a,e);a[e];const s=Reflect.deleteProperty(a,e);return s&&r&&s1(a,"delete",e,void 0),s}has(a,e){const r=Reflect.has(a,e);return(!n0(e)||!M7.has(e))&&k2(a,"has",e),r}ownKeys(a){return k2(a,"iterate",U(a)?"length":P1),Reflect.ownKeys(a)}}class $t extends C7{constructor(a=!1){super(!0,a)}set(a,e){return!0}deleteProperty(a,e){return!0}}const Gt=new g7,jt=new $t,Kt=new g7(!0),f0=c=>c,_4=c=>Reflect.getPrototypeOf(c);function Y3(c,a,e=!1,r=!1){c=c.__v_raw;const s=X(c),n=X(a);e||(B1(a,n)&&k2(s,"get",a),k2(s,"get",n));const{has:i}=_4(s),t=r?f0:e?v0:w3;if(i.call(s,a))return t(c.get(a));if(i.call(s,n))return t(c.get(n));c!==s&&c.get(a)}function Q3(c,a=!1){const e=this.__v_raw,r=X(e),s=X(c);return a||(B1(c,s)&&k2(r,"has",c),k2(r,"has",s)),c===s?e.has(c):e.has(c)||e.has(s)}function X3(c,a=!1){return c=c.__v_raw,!a&&k2(X(c),"iterate",P1),Reflect.get(c,"size",c)}function I8(c){c=X(c);const a=X(this);return _4(a).has.call(a,c)||(a.add(c),s1(a,"add",c,c)),this}function O8(c,a){a=X(a);const e=X(this),{has:r,get:s}=_4(e);let n=r.call(e,c);n||(c=X(c),n=r.call(e,c));const i=s.call(e,c);return e.set(c,a),n?B1(a,i)&&s1(e,"set",c,a):s1(e,"add",c,a),this}function U8(c){const a=X(this),{has:e,get:r}=_4(a);let s=e.call(a,c);s||(c=X(c),s=e.call(a,c)),r&&r.call(a,c);const n=a.delete(c);return s&&s1(a,"delete",c,void 0),n}function q8(){const c=X(this),a=c.size!==0,e=c.clear();return a&&s1(c,"clear",void 0,void 0),e}function Z3(c,a){return function(r,s){const n=this,i=n.__v_raw,t=X(i),o=a?f0:c?v0:w3;return!c&&k2(t,"iterate",P1),i.forEach((l,f)=>r.call(s,o(l),o(f),n))}}function J3(c,a,e){return function(...r){const s=this.__v_raw,n=X(s),i=Q1(n),t=c==="entries"||c===Symbol.iterator&&i,o=c==="keys"&&i,l=s[c](...r),f=e?f0:a?v0:w3;return!a&&k2(n,"iterate",o?y6:P1),{next(){const{value:u,done:h}=l.next();return h?{value:u,done:h}:{value:t?[f(u[0]),f(u[1])]:f(u),done:h}},[Symbol.iterator](){return this}}}}function m1(c){return function(...a){return c==="delete"?!1:this}}function Yt(){const c={get(n){return Y3(this,n)},get size(){return X3(this)},has:Q3,add:I8,set:O8,delete:U8,clear:q8,forEach:Z3(!1,!1)},a={get(n){return Y3(this,n,!1,!0)},get size(){return X3(this)},has:Q3,add:I8,set:O8,delete:U8,clear:q8,forEach:Z3(!1,!0)},e={get(n){return Y3(this,n,!0)},get size(){return X3(this,!0)},has(n){return Q3.call(this,n,!0)},add:m1("add"),set:m1("set"),delete:m1("delete"),clear:m1("clear"),forEach:Z3(!0,!1)},r={get(n){return Y3(this,n,!0,!0)},get size(){return X3(this,!0)},has(n){return Q3.call(this,n,!0)},add:m1("add"),set:m1("set"),delete:m1("delete"),clear:m1("clear"),forEach:Z3(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(n=>{c[n]=J3(n,!1,!1),e[n]=J3(n,!0,!1),a[n]=J3(n,!1,!0),r[n]=J3(n,!0,!0)}),[c,e,a,r]}const[Qt,Xt,Zt,Jt]=Yt();function m0(c,a){const e=a?c?Jt:Zt:c?Xt:Qt;return(r,s,n)=>s==="__v_isReactive"?!c:s==="__v_isReadonly"?c:s==="__v_raw"?r:Reflect.get(Y(e,s)&&s in r?e:r,s,n)}const co={get:m0(!1,!1)},ao={get:m0(!1,!0)},eo={get:m0(!0,!1)},L7=new WeakMap,x7=new WeakMap,b7=new WeakMap,ro=new WeakMap;function so(c){switch(c){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function no(c){return c.__v_skip||!Object.isExtensible(c)?0:so(St(c))}function D3(c){return a3(c)?c:u0(c,!1,Gt,co,L7)}function N7(c){return u0(c,!1,Kt,ao,x7)}function w7(c){return u0(c,!0,jt,eo,b7)}function u0(c,a,e,r,s){if(!m2(c)||c.__v_raw&&!(a&&c.__v_isReactive))return c;const n=s.get(c);if(n)return n;const i=no(c);if(i===0)return c;const t=new Proxy(c,i===2?r:e);return s.set(c,t),t}function d1(c){return a3(c)?d1(c.__v_raw):!!(c&&c.__v_isReactive)}function a3(c){return!!(c&&c.__v_isReadonly)}function C4(c){return!!(c&&c.__v_isShallow)}function S7(c){return d1(c)||a3(c)}function X(c){const a=c&&c.__v_raw;return a?X(a):c}function P4(c){return d4(c,"__v_skip",!0),c}const w3=c=>m2(c)?D3(c):c,v0=c=>m2(c)?w7(c):c;function y7(c){V1&&I2&&(c=X(c),d7(c.dep||(c.dep=o0())))}function k7(c,a){c=X(c);const e=c.dep;e&&k6(e)}function h2(c){return!!(c&&c.__v_isRef===!0)}function h0(c){return A7(c,!1)}function io(c){return A7(c,!0)}function A7(c,a){return h2(c)?c:new to(c,a)}class to{constructor(a,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?a:X(a),this._value=e?a:w3(a)}get value(){return y7(this),this._value}set value(a){const e=this.__v_isShallow||C4(a)||a3(a);a=e?a:X(a),B1(a,this._rawValue)&&(this._rawValue=a,this._value=e?a:w3(a),k7(this))}}function X1(c){return h2(c)?c.value:c}const oo={get:(c,a,e)=>X1(Reflect.get(c,a,e)),set:(c,a,e,r)=>{const s=c[a];return h2(s)&&!h2(e)?(s.value=e,!0):Reflect.set(c,a,e,r)}};function _7(c){return d1(c)?c:new Proxy(c,oo)}function lo(c){const a=U(c)?new Array(c.length):{};for(const e in c)a[e]=mo(c,e);return a}class fo{constructor(a,e,r){this._object=a,this._key=e,this._defaultValue=r,this.__v_isRef=!0}get value(){const a=this._object[this._key];return a===void 0?this._defaultValue:a}set value(a){this._object[this._key]=a}get dep(){return Ot(X(this._object),this._key)}}function mo(c,a,e){const r=c[a];return h2(r)?r:new fo(c,a,e)}class uo{constructor(a,e,r,s){this._setter=e,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new l0(a,()=>{this._dirty||(this._dirty=!0,k7(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const a=X(this);return y7(a),(a._dirty||!a._cacheable)&&(a._dirty=!1,a._value=a.effect.run()),a._value}set value(a){this._setter(a)}}function vo(c,a,e=!1){let r,s;const n=$(c);return n?(r=c,s=q2):(r=c.get,s=c.set),new uo(r,s,n||!s,e)}function M1(c,a,e,r){let s;try{s=r?c(...r):c()}catch(n){T4(n,a,e)}return s}function W2(c,a,e,r){if($(c)){const n=M1(c,a,e,r);return n&&o7(n)&&n.catch(i=>{T4(i,a,e)}),n}const s=[];for(let n=0;n<c.length;n++)s.push(W2(c[n],a,e,r));return s}function T4(c,a,e,r=!0){const s=a?a.vnode:null;if(a){let n=a.parent;const i=a.proxy,t=e;for(;n;){const l=n.ec;if(l){for(let f=0;f<l.length;f++)if(l[f](c,i,t)===!1)return}n=n.parent}const o=a.appContext.config.errorHandler;if(o){M1(o,null,10,[c,i,t]);return}}ho(c,e,s,r)}function ho(c,a,e,r=!0){console.error(c)}let S3=!1,A6=!1;const L2=[];let X2=0;const Z1=[];let r1=null,S1=0;const P7=Promise.resolve();let H0=null;function z0(c){const a=H0||P7;return c?a.then(this?c.bind(this):c):a}function Ho(c){let a=X2+1,e=L2.length;for(;a<e;){const r=a+e>>>1;y3(L2[r])<c?a=r+1:e=r}return a}function p0(c){(!L2.length||!L2.includes(c,S3&&c.allowRecurse?X2+1:X2))&&(c.id==null?L2.push(c):L2.splice(Ho(c.id),0,c),T7())}function T7(){!S3&&!A6&&(A6=!0,H0=P7.then(R7))}function zo(c){const a=L2.indexOf(c);a>X2&&L2.splice(a,1)}function po(c){U(c)?Z1.push(...c):(!r1||!r1.includes(c,c.allowRecurse?S1+1:S1))&&Z1.push(c),T7()}function W8(c,a=S3?X2+1:0){for(;a<L2.length;a++){const e=L2[a];e&&e.pre&&(L2.splice(a,1),a--,e())}}function B7(c){if(Z1.length){const a=[...new Set(Z1)];if(Z1.length=0,r1){r1.push(...a);return}for(r1=a,r1.sort((e,r)=>y3(e)-y3(r)),S1=0;S1<r1.length;S1++)r1[S1]();r1=null,S1=0}}const y3=c=>c.id==null?1/0:c.id,Vo=(c,a)=>{const e=y3(c)-y3(a);if(e===0){if(c.pre&&!a.pre)return-1;if(a.pre&&!c.pre)return 1}return e};function R7(c){A6=!1,S3=!0,L2.sort(Vo);const a=q2;try{for(X2=0;X2<L2.length;X2++){const e=L2[X2];e&&e.active!==!1&&M1(e,null,14)}}finally{X2=0,L2.length=0,B7(),S3=!1,H0=null,(L2.length||Z1.length)&&R7()}}function Mo(c,a,...e){if(c.isUnmounted)return;const r=c.vnode.props||o2;let s=e;const n=a.startsWith("update:"),i=n&&a.slice(7);if(i&&i in r){const f=`${i==="modelValue"?"model":i}Modifiers`,{number:u,trim:h}=r[f]||o2;h&&(s=e.map(z=>z2(z)?z.trim():z)),u&&(s=e.map(N6))}let t,o=r[t=f6(a)]||r[t=f6(c1(a))];!o&&n&&(o=r[t=f6(t3(a))]),o&&W2(o,c,6,s);const l=r[t+"Once"];if(l){if(!c.emitted)c.emitted={};else if(c.emitted[t])return;c.emitted[t]=!0,W2(l,c,6,s)}}function F7(c,a,e=!1){const r=a.emitsCache,s=r.get(c);if(s!==void 0)return s;const n=c.emits;let i={},t=!1;if(!$(c)){const o=l=>{const f=F7(l,a,!0);f&&(t=!0,M2(i,f))};!e&&a.mixins.length&&a.mixins.forEach(o),c.extends&&o(c.extends),c.mixins&&c.mixins.forEach(o)}return!n&&!t?(m2(c)&&r.set(c,null),null):(U(n)?n.forEach(o=>i[o]=null):M2(i,n),m2(c)&&r.set(c,i),i)}function B4(c,a){return!c||!S4(a)?!1:(a=a.slice(2).replace(/Once$/,""),Y(c,a[0].toLowerCase()+a.slice(1))||Y(c,t3(a))||Y(c,a))}let T2=null,R4=null;function g4(c){const a=T2;return T2=c,R4=c&&c.type.__scopeId||null,a}function f3(c){R4=c}function m3(){R4=null}function E7(c,a=T2,e){if(!a||c._n)return c;const r=(...s)=>{r._d&&a5(-1);const n=g4(a);let i;try{i=c(...s)}finally{g4(n),r._d&&a5(1)}return i};return r._n=!0,r._c=!0,r._d=!0,r}function m6(c){const{type:a,vnode:e,proxy:r,withProxy:s,props:n,propsOptions:[i],slots:t,attrs:o,emit:l,render:f,renderCache:u,data:h,setupState:z,ctx:N,inheritAttrs:g}=c;let T,d;const C=g4(c);try{if(e.shapeFlag&4){const k=s||r;T=Q2(f.call(k,k,u,n,z,h,N)),d=o}else{const k=a;T=Q2(k.length>1?k(n,{attrs:o,slots:t,emit:l}):k(n,null)),d=a.props?o:Co(o)}}catch(k){C3.length=0,T4(k,c,1),T=e2(R1)}let B=T;if(d&&g!==!1){const k=Object.keys(d),{shapeFlag:O}=B;k.length&&O&7&&(i&&k.some(r0)&&(d=go(d,i)),B=e3(B,d))}return e.dirs&&(B=e3(B),B.dirs=B.dirs?B.dirs.concat(e.dirs):e.dirs),e.transition&&(B.transition=e.transition),T=B,g4(C),T}const Co=c=>{let a;for(const e in c)(e==="class"||e==="style"||S4(e))&&((a||(a={}))[e]=c[e]);return a},go=(c,a)=>{const e={};for(const r in c)(!r0(r)||!(r.slice(9)in a))&&(e[r]=c[r]);return e};function Lo(c,a,e){const{props:r,children:s,component:n}=c,{props:i,children:t,patchFlag:o}=a,l=n.emitsOptions;if(a.dirs||a.transition)return!0;if(e&&o>=0){if(o&1024)return!0;if(o&16)return r?$8(r,i,l):!!i;if(o&8){const f=a.dynamicProps;for(let u=0;u<f.length;u++){const h=f[u];if(i[h]!==r[h]&&!B4(l,h))return!0}}}else return(s||t)&&(!t||!t.$stable)?!0:r===i?!1:r?i?$8(r,i,l):!0:!!i;return!1}function $8(c,a,e){const r=Object.keys(a);if(r.length!==Object.keys(c).length)return!0;for(let s=0;s<r.length;s++){const n=r[s];if(a[n]!==c[n]&&!B4(e,n))return!0}return!1}function xo({vnode:c,parent:a},e){for(;a&&a.subTree===c;)(c=a.vnode).el=e,a=a.parent}const bo=c=>c.__isSuspense;function No(c,a){a&&a.pendingBranch?U(c)?a.effects.push(...c):a.effects.push(c):po(c)}const c4={};function J1(c,a,e){return D7(c,a,e)}function D7(c,a,{immediate:e,deep:r,flush:s,onTrack:n,onTrigger:i}=o2){var t;const o=H7()===((t=d2)==null?void 0:t.scope)?d2:null;let l,f=!1,u=!1;if(h2(c)?(l=()=>c.value,f=C4(c)):d1(c)?(l=()=>c,r=!0):U(c)?(u=!0,f=c.some(k=>d1(k)||C4(k)),l=()=>c.map(k=>{if(h2(k))return k.value;if(d1(k))return k1(k);if($(k))return M1(k,o,2)})):$(c)?a?l=()=>M1(c,o,2):l=()=>{if(!(o&&o.isUnmounted))return h&&h(),W2(c,o,3,[z])}:l=q2,a&&r){const k=l;l=()=>k1(k())}let h,z=k=>{h=C.onStop=()=>{M1(k,o,4)}},N;if(_3)if(z=q2,a?e&&W2(a,o,3,[l(),u?[]:void 0,z]):l(),s==="sync"){const k=gl();N=k.__watcherHandles||(k.__watcherHandles=[])}else return q2;let g=u?new Array(c.length).fill(c4):c4;const T=()=>{if(C.active)if(a){const k=C.run();(r||f||(u?k.some((O,n2)=>B1(O,g[n2])):B1(k,g)))&&(h&&h(),W2(a,o,3,[k,g===c4?void 0:u&&g[0]===c4?[]:g,z]),g=k)}else C.run()};T.allowRecurse=!!a;let d;s==="sync"?d=T:s==="post"?d=()=>w2(T,o&&o.suspense):(T.pre=!0,o&&(T.id=o.uid),d=()=>p0(T));const C=new l0(l,d);a?e?T():g=C.run():s==="post"?w2(C.run.bind(C),o&&o.suspense):C.run();const B=()=>{C.stop(),o&&o.scope&&s0(o.scope.effects,C)};return N&&N.push(B),B}function wo(c,a,e){const r=this.proxy,s=z2(c)?c.includes(".")?I7(r,c):()=>r[c]:c.bind(r,r);let n;$(a)?n=a:(n=a.handler,e=a);const i=d2;r3(this);const t=D7(s,n.bind(r),e);return i?r3(i):T1(),t}function I7(c,a){const e=a.split(".");return()=>{let r=c;for(let s=0;s<e.length&&r;s++)r=r[e[s]];return r}}function k1(c,a){if(!m2(c)||c.__v_skip||(a=a||new Set,a.has(c)))return c;if(a.add(c),h2(c))k1(c.value,a);else if(U(c))for(let e=0;e<c.length;e++)k1(c[e],a);else if(t7(c)||Q1(c))c.forEach(e=>{k1(e,a)});else if(f7(c))for(const e in c)k1(c[e],a);return c}function So(c,a){const e=T2;if(e===null)return c;const r=I4(e)||e.proxy,s=c.dirs||(c.dirs=[]);for(let n=0;n<a.length;n++){let[i,t,o,l=o2]=a[n];i&&($(i)&&(i={mounted:i,updated:i}),i.deep&&k1(t),s.push({dir:i,instance:r,value:t,oldValue:void 0,arg:o,modifiers:l}))}return c}function N1(c,a,e,r){const s=c.dirs,n=a&&a.dirs;for(let i=0;i<s.length;i++){const t=s[i];n&&(t.oldValue=n[i].value);let o=t.dir[r];o&&(o3(),W2(o,e,8,[c.el,t,c,a]),l3())}}/*! #__NO_SIDE_EFFECTS__ */function V0(c,a){return $(c)?(()=>M2({name:c.name},a,{setup:c}))():c}const u4=c=>!!c.type.__asyncLoader,O7=c=>c.type.__isKeepAlive;function yo(c,a){U7(c,"a",a)}function ko(c,a){U7(c,"da",a)}function U7(c,a,e=d2){const r=c.__wdc||(c.__wdc=()=>{let s=e;for(;s;){if(s.isDeactivated)return;s=s.parent}return c()});if(F4(a,r,e),e){let s=e.parent;for(;s&&s.parent;)O7(s.parent.vnode)&&Ao(r,a,e,s),s=s.parent}}function Ao(c,a,e,r){const s=F4(a,c,r,!0);q7(()=>{s0(r[a],s)},e)}function F4(c,a,e=d2,r=!1){if(e){const s=e[c]||(e[c]=[]),n=a.__weh||(a.__weh=(...i)=>{if(e.isUnmounted)return;o3(),r3(e);const t=W2(a,e,c,i);return T1(),l3(),t});return r?s.unshift(n):s.push(n),n}}const o1=c=>(a,e=d2)=>(!_3||c==="sp")&&F4(c,(...r)=>a(...r),e),_o=o1("bm"),Po=o1("m"),To=o1("bu"),Bo=o1("u"),Ro=o1("bum"),q7=o1("um"),Fo=o1("sp"),Eo=o1("rtg"),Do=o1("rtc");function Io(c,a=d2){F4("ec",c,a)}const W7="components";function S2(c,a){return Uo(W7,c,!0,a)||c}const Oo=Symbol.for("v-ndc");function Uo(c,a,e=!0,r=!1){const s=T2||d2;if(s){const n=s.type;if(c===W7){const t=dl(n,!1);if(t&&(t===a||t===c1(a)||t===A4(c1(a))))return n}const i=G8(s[c]||n[c],a)||G8(s.appContext[c],a);return!i&&r?n:i}}function G8(c,a){return c&&(c[a]||c[c1(a)]||c[A4(c1(a))])}function v4(c,a,e,r){let s;const n=e&&e[r];if(U(c)||z2(c)){s=new Array(c.length);for(let i=0,t=c.length;i<t;i++)s[i]=a(c[i],i,void 0,n&&n[i])}else if(typeof c=="number"){s=new Array(c);for(let i=0;i<c;i++)s[i]=a(i+1,i,void 0,n&&n[i])}else if(m2(c))if(c[Symbol.iterator])s=Array.from(c,(i,t)=>a(i,t,void 0,n&&n[t]));else{const i=Object.keys(c);s=new Array(i.length);for(let t=0,o=i.length;t<o;t++){const l=i[t];s[t]=a(c[l],l,t,n&&n[t])}}else s=[];return e&&(e[r]=s),s}const _6=c=>c?ec(c)?I4(c)||c.proxy:_6(c.parent):null,M3=M2(Object.create(null),{$:c=>c,$el:c=>c.vnode.el,$data:c=>c.data,$props:c=>c.props,$attrs:c=>c.attrs,$slots:c=>c.slots,$refs:c=>c.refs,$parent:c=>_6(c.parent),$root:c=>_6(c.root),$emit:c=>c.emit,$options:c=>d0(c),$forceUpdate:c=>c.f||(c.f=()=>p0(c.update)),$nextTick:c=>c.n||(c.n=z0.bind(c.proxy)),$watch:c=>wo.bind(c)}),u6=(c,a)=>c!==o2&&!c.__isScriptSetup&&Y(c,a),qo={get({_:c},a){const{ctx:e,setupState:r,data:s,props:n,accessCache:i,type:t,appContext:o}=c;let l;if(a[0]!=="$"){const z=i[a];if(z!==void 0)switch(z){case 1:return r[a];case 2:return s[a];case 4:return e[a];case 3:return n[a]}else{if(u6(r,a))return i[a]=1,r[a];if(s!==o2&&Y(s,a))return i[a]=2,s[a];if((l=c.propsOptions[0])&&Y(l,a))return i[a]=3,n[a];if(e!==o2&&Y(e,a))return i[a]=4,e[a];P6&&(i[a]=0)}}const f=M3[a];let u,h;if(f)return a==="$attrs"&&k2(c,"get",a),f(c);if((u=t.__cssModules)&&(u=u[a]))return u;if(e!==o2&&Y(e,a))return i[a]=4,e[a];if(h=o.config.globalProperties,Y(h,a))return h[a]},set({_:c},a,e){const{data:r,setupState:s,ctx:n}=c;return u6(s,a)?(s[a]=e,!0):r!==o2&&Y(r,a)?(r[a]=e,!0):Y(c.props,a)||a[0]==="$"&&a.slice(1)in c?!1:(n[a]=e,!0)},has({_:{data:c,setupState:a,accessCache:e,ctx:r,appContext:s,propsOptions:n}},i){let t;return!!e[i]||c!==o2&&Y(c,i)||u6(a,i)||(t=n[0])&&Y(t,i)||Y(r,i)||Y(M3,i)||Y(s.config.globalProperties,i)},defineProperty(c,a,e){return e.get!=null?c._.accessCache[a]=0:Y(e,"value")&&this.set(c,a,e.value,null),Reflect.defineProperty(c,a,e)}};function j8(c){return U(c)?c.reduce((a,e)=>(a[e]=null,a),{}):c}let P6=!0;function Wo(c){const a=d0(c),e=c.proxy,r=c.ctx;P6=!1,a.beforeCreate&&K8(a.beforeCreate,c,"bc");const{data:s,computed:n,methods:i,watch:t,provide:o,inject:l,created:f,beforeMount:u,mounted:h,beforeUpdate:z,updated:N,activated:g,deactivated:T,beforeDestroy:d,beforeUnmount:C,destroyed:B,unmounted:k,render:O,renderTracked:n2,renderTriggered:r2,errorCaptured:G,serverPrefetch:W,expose:u2,inheritAttrs:C2,components:A2,directives:F2,filters:b1}=a;if(l&&$o(l,r,null),i)for(const i2 in i){const J=i[i2];$(J)&&(r[i2]=J.bind(e))}if(s){const i2=s.call(e,e);m2(i2)&&(c.data=D3(i2))}if(P6=!0,n)for(const i2 in n){const J=n[i2],a1=$(J)?J.bind(e,e):$(J.get)?J.get.bind(e,e):q2,f1=!$(J)&&$(J.set)?J.set.bind(e):q2,j2=V2({get:a1,set:f1});Object.defineProperty(r,i2,{enumerable:!0,configurable:!0,get:()=>j2.value,set:N2=>j2.value=N2})}if(t)for(const i2 in t)$7(t[i2],r,e,i2);if(o){const i2=$(o)?o.call(e):o;Reflect.ownKeys(i2).forEach(J=>{h4(J,i2[J])})}f&&K8(f,c,"c");function Z(i2,J){U(J)?J.forEach(a1=>i2(a1.bind(e))):J&&i2(J.bind(e))}if(Z(_o,u),Z(Po,h),Z(To,z),Z(Bo,N),Z(yo,g),Z(ko,T),Z(Io,G),Z(Do,n2),Z(Eo,r2),Z(Ro,C),Z(q7,k),Z(Fo,W),U(u2))if(u2.length){const i2=c.exposed||(c.exposed={});u2.forEach(J=>{Object.defineProperty(i2,J,{get:()=>e[J],set:a1=>e[J]=a1})})}else c.exposed||(c.exposed={});O&&c.render===q2&&(c.render=O),C2!=null&&(c.inheritAttrs=C2),A2&&(c.components=A2),F2&&(c.directives=F2)}function $o(c,a,e=q2){U(c)&&(c=T6(c));for(const r in c){const s=c[r];let n;m2(s)?"default"in s?n=J2(s.from||r,s.default,!0):n=J2(s.from||r):n=J2(s),h2(n)?Object.defineProperty(a,r,{enumerable:!0,configurable:!0,get:()=>n.value,set:i=>n.value=i}):a[r]=n}}function K8(c,a,e){W2(U(c)?c.map(r=>r.bind(a.proxy)):c.bind(a.proxy),a,e)}function $7(c,a,e,r){const s=r.includes(".")?I7(e,r):()=>e[r];if(z2(c)){const n=a[c];$(n)&&J1(s,n)}else if($(c))J1(s,c.bind(e));else if(m2(c))if(U(c))c.forEach(n=>$7(n,a,e,r));else{const n=$(c.handler)?c.handler.bind(e):a[c.handler];$(n)&&J1(s,n,c)}}function d0(c){const a=c.type,{mixins:e,extends:r}=a,{mixins:s,optionsCache:n,config:{optionMergeStrategies:i}}=c.appContext,t=n.get(a);let o;return t?o=t:!s.length&&!e&&!r?o=a:(o={},s.length&&s.forEach(l=>L4(o,l,i,!0)),L4(o,a,i)),m2(a)&&n.set(a,o),o}function L4(c,a,e,r=!1){const{mixins:s,extends:n}=a;n&&L4(c,n,e,!0),s&&s.forEach(i=>L4(c,i,e,!0));for(const i in a)if(!(r&&i==="expose")){const t=Go[i]||e&&e[i];c[i]=t?t(c[i],a[i]):a[i]}return c}const Go={data:Y8,props:Q8,emits:Q8,methods:p3,computed:p3,beforeCreate:x2,created:x2,beforeMount:x2,mounted:x2,beforeUpdate:x2,updated:x2,beforeDestroy:x2,beforeUnmount:x2,destroyed:x2,unmounted:x2,activated:x2,deactivated:x2,errorCaptured:x2,serverPrefetch:x2,components:p3,directives:p3,watch:Ko,provide:Y8,inject:jo};function Y8(c,a){return a?c?function(){return M2($(c)?c.call(this,this):c,$(a)?a.call(this,this):a)}:a:c}function jo(c,a){return p3(T6(c),T6(a))}function T6(c){if(U(c)){const a={};for(let e=0;e<c.length;e++)a[c[e]]=c[e];return a}return c}function x2(c,a){return c?[...new Set([].concat(c,a))]:a}function p3(c,a){return c?M2(Object.create(null),c,a):a}function Q8(c,a){return c?U(c)&&U(a)?[...new Set([...c,...a])]:M2(Object.create(null),j8(c),j8(a??{})):a}function Ko(c,a){if(!c)return a;if(!a)return c;const e=M2(Object.create(null),c);for(const r in a)e[r]=x2(c[r],a[r]);return e}function G7(){return{app:null,config:{isNativeTag:bt,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Yo=0;function Qo(c,a){return function(r,s=null){$(r)||(r=M2({},r)),s!=null&&!m2(s)&&(s=null);const n=G7(),i=new WeakSet;let t=!1;const o=n.app={_uid:Yo++,_component:r,_props:s,_container:null,_context:n,_instance:null,version:Ll,get config(){return n.config},set config(l){},use(l,...f){return i.has(l)||(l&&$(l.install)?(i.add(l),l.install(o,...f)):$(l)&&(i.add(l),l(o,...f))),o},mixin(l){return n.mixins.includes(l)||n.mixins.push(l),o},component(l,f){return f?(n.components[l]=f,o):n.components[l]},directive(l,f){return f?(n.directives[l]=f,o):n.directives[l]},mount(l,f,u){if(!t){const h=e2(r,s);return h.appContext=n,f&&a?a(h,l):c(h,l,u),t=!0,o._container=l,l.__vue_app__=o,I4(h.component)||h.component.proxy}},unmount(){t&&(c(null,o._container),delete o._container.__vue_app__)},provide(l,f){return n.provides[l]=f,o},runWithContext(l){k3=o;try{return l()}finally{k3=null}}};return o}}let k3=null;function h4(c,a){if(d2){let e=d2.provides;const r=d2.parent&&d2.parent.provides;r===e&&(e=d2.provides=Object.create(r)),e[c]=a}}function J2(c,a,e=!1){const r=d2||T2;if(r||k3){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:k3._context.provides;if(s&&c in s)return s[c];if(arguments.length>1)return e&&$(a)?a.call(r&&r.proxy):a}}function Xo(){return!!(d2||T2||k3)}function Zo(c,a,e,r=!1){const s={},n={};d4(n,D4,1),c.propsDefaults=Object.create(null),j7(c,a,s,n);for(const i in c.propsOptions[0])i in s||(s[i]=void 0);e?c.props=r?s:N7(s):c.type.props?c.props=s:c.props=n,c.attrs=n}function Jo(c,a,e,r){const{props:s,attrs:n,vnode:{patchFlag:i}}=c,t=X(s),[o]=c.propsOptions;let l=!1;if((r||i>0)&&!(i&16)){if(i&8){const f=c.vnode.dynamicProps;for(let u=0;u<f.length;u++){let h=f[u];if(B4(c.emitsOptions,h))continue;const z=a[h];if(o)if(Y(n,h))z!==n[h]&&(n[h]=z,l=!0);else{const N=c1(h);s[N]=B6(o,t,N,z,c,!1)}else z!==n[h]&&(n[h]=z,l=!0)}}}else{j7(c,a,s,n)&&(l=!0);let f;for(const u in t)(!a||!Y(a,u)&&((f=t3(u))===u||!Y(a,f)))&&(o?e&&(e[u]!==void 0||e[f]!==void 0)&&(s[u]=B6(o,t,u,void 0,c,!0)):delete s[u]);if(n!==t)for(const u in n)(!a||!Y(a,u))&&(delete n[u],l=!0)}l&&s1(c,"set","$attrs")}function j7(c,a,e,r){const[s,n]=c.propsOptions;let i=!1,t;if(a)for(let o in a){if(f4(o))continue;const l=a[o];let f;s&&Y(s,f=c1(o))?!n||!n.includes(f)?e[f]=l:(t||(t={}))[f]=l:B4(c.emitsOptions,o)||(!(o in r)||l!==r[o])&&(r[o]=l,i=!0)}if(n){const o=X(e),l=t||o2;for(let f=0;f<n.length;f++){const u=n[f];e[u]=B6(s,o,u,l[u],c,!Y(l,u))}}return i}function B6(c,a,e,r,s,n){const i=c[e];if(i!=null){const t=Y(i,"default");if(t&&r===void 0){const o=i.default;if(i.type!==Function&&!i.skipFactory&&$(o)){const{propsDefaults:l}=s;e in l?r=l[e]:(r3(s),r=l[e]=o.call(null,a),T1())}else r=o}i[0]&&(n&&!t?r=!1:i[1]&&(r===""||r===t3(e))&&(r=!0))}return r}function K7(c,a,e=!1){const r=a.propsCache,s=r.get(c);if(s)return s;const n=c.props,i={},t=[];let o=!1;if(!$(c)){const f=u=>{o=!0;const[h,z]=K7(u,a,!0);M2(i,h),z&&t.push(...z)};!e&&a.mixins.length&&a.mixins.forEach(f),c.extends&&f(c.extends),c.mixins&&c.mixins.forEach(f)}if(!n&&!o)return m2(c)&&r.set(c,Y1),Y1;if(U(n))for(let f=0;f<n.length;f++){const u=c1(n[f]);X8(u)&&(i[u]=o2)}else if(n)for(const f in n){const u=c1(f);if(X8(u)){const h=n[f],z=i[u]=U(h)||$(h)?{type:h}:M2({},h);if(z){const N=c5(Boolean,z.type),g=c5(String,z.type);z[0]=N>-1,z[1]=g<0||N<g,(N>-1||Y(z,"default"))&&t.push(u)}}}const l=[i,t];return m2(c)&&r.set(c,l),l}function X8(c){return c[0]!=="$"}function Z8(c){const a=c&&c.toString().match(/^\s*(function|class) (\w+)/);return a?a[2]:c===null?"null":""}function J8(c,a){return Z8(c)===Z8(a)}function c5(c,a){return U(a)?a.findIndex(e=>J8(e,c)):$(a)&&J8(a,c)?0:-1}const Y7=c=>c[0]==="_"||c==="$stable",M0=c=>U(c)?c.map(Q2):[Q2(c)],cl=(c,a,e)=>{if(a._n)return a;const r=E7((...s)=>M0(a(...s)),e);return r._c=!1,r},Q7=(c,a,e)=>{const r=c._ctx;for(const s in c){if(Y7(s))continue;const n=c[s];if($(n))a[s]=cl(s,n,r);else if(n!=null){const i=M0(n);a[s]=()=>i}}},X7=(c,a)=>{const e=M0(a);c.slots.default=()=>e},al=(c,a)=>{if(c.vnode.shapeFlag&32){const e=a._;e?(c.slots=X(a),d4(a,"_",e)):Q7(a,c.slots={})}else c.slots={},a&&X7(c,a);d4(c.slots,D4,1)},el=(c,a,e)=>{const{vnode:r,slots:s}=c;let n=!0,i=o2;if(r.shapeFlag&32){const t=a._;t?e&&t===1?n=!1:(M2(s,a),!e&&t===1&&delete s._):(n=!a.$stable,Q7(a,s)),i=a}else a&&(X7(c,a),i={default:1});if(n)for(const t in s)!Y7(t)&&i[t]==null&&delete s[t]};function R6(c,a,e,r,s=!1){if(U(c)){c.forEach((h,z)=>R6(h,a&&(U(a)?a[z]:a),e,r,s));return}if(u4(r)&&!s)return;const n=r.shapeFlag&4?I4(r.component)||r.component.proxy:r.el,i=s?null:n,{i:t,r:o}=c,l=a&&a.r,f=t.refs===o2?t.refs={}:t.refs,u=t.setupState;if(l!=null&&l!==o&&(z2(l)?(f[l]=null,Y(u,l)&&(u[l]=null)):h2(l)&&(l.value=null)),$(o))M1(o,t,12,[i,f]);else{const h=z2(o),z=h2(o);if(h||z){const N=()=>{if(c.f){const g=h?Y(u,o)?u[o]:f[o]:o.value;s?U(g)&&s0(g,n):U(g)?g.includes(n)||g.push(n):h?(f[o]=[n],Y(u,o)&&(u[o]=f[o])):(o.value=[n],c.k&&(f[c.k]=o.value))}else h?(f[o]=i,Y(u,o)&&(u[o]=i)):z&&(o.value=i,c.k&&(f[c.k]=i))};i?(N.id=-1,w2(N,e)):N()}}}const w2=No;function rl(c){return sl(c)}function sl(c,a){const e=w6();e.__VUE__=!0;const{insert:r,remove:s,patchProp:n,createElement:i,createText:t,createComment:o,setText:l,setElementText:f,parentNode:u,nextSibling:h,setScopeId:z=q2,insertStaticContent:N}=c,g=(m,v,H,p=null,M=null,L=null,A=!1,w=null,S=!!v.dynamicChildren)=>{if(m===v)return;m&&!h3(m,v)&&(p=V(m),N2(m,M,L,!0),m=null),v.patchFlag===-2&&(S=!1,v.dynamicChildren=null);const{type:x,ref:D,shapeFlag:R}=v;switch(x){case E4:T(m,v,H,p);break;case R1:d(m,v,H,p);break;case H4:m==null&&C(v,H,p,A);break;case y2:A2(m,v,H,p,M,L,A,w,S);break;default:R&1?O(m,v,H,p,M,L,A,w,S):R&6?F2(m,v,H,p,M,L,A,w,S):(R&64||R&128)&&x.process(m,v,H,p,M,L,A,w,S,y)}D!=null&&M&&R6(D,m&&m.ref,L,v||m,!v)},T=(m,v,H,p)=>{if(m==null)r(v.el=t(v.children),H,p);else{const M=v.el=m.el;v.children!==m.children&&l(M,v.children)}},d=(m,v,H,p)=>{m==null?r(v.el=o(v.children||""),H,p):v.el=m.el},C=(m,v,H,p)=>{[m.el,m.anchor]=N(m.children,v,H,p,m.el,m.anchor)},B=({el:m,anchor:v},H,p)=>{let M;for(;m&&m!==v;)M=h(m),r(m,H,p),m=M;r(v,H,p)},k=({el:m,anchor:v})=>{let H;for(;m&&m!==v;)H=h(m),s(m),m=H;s(v)},O=(m,v,H,p,M,L,A,w,S)=>{A=A||v.type==="svg",m==null?n2(v,H,p,M,L,A,w,S):W(m,v,M,L,A,w,S)},n2=(m,v,H,p,M,L,A,w)=>{let S,x;const{type:D,props:R,shapeFlag:I,transition:q,dirs:j}=m;if(S=m.el=i(m.type,L,R&&R.is,R),I&8?f(S,m.children):I&16&&G(m.children,S,null,p,M,L&&D!=="foreignObject",A,w),j&&N1(m,null,p,"created"),r2(S,m,m.scopeId,A,p),R){for(const s2 in R)s2!=="value"&&!f4(s2)&&n(S,s2,null,R[s2],L,m.children,p,M,g2);"value"in R&&n(S,"value",null,R.value),(x=R.onVnodeBeforeMount)&&Y2(x,p,m)}j&&N1(m,null,p,"beforeMount");const t2=(!M||M&&!M.pendingBranch)&&q&&!q.persisted;t2&&q.beforeEnter(S),r(S,v,H),((x=R&&R.onVnodeMounted)||t2||j)&&w2(()=>{x&&Y2(x,p,m),t2&&q.enter(S),j&&N1(m,null,p,"mounted")},M)},r2=(m,v,H,p,M)=>{if(H&&z(m,H),p)for(let L=0;L<p.length;L++)z(m,p[L]);if(M){let L=M.subTree;if(v===L){const A=M.vnode;r2(m,A,A.scopeId,A.slotScopeIds,M.parent)}}},G=(m,v,H,p,M,L,A,w,S=0)=>{for(let x=S;x<m.length;x++){const D=m[x]=w?H1(m[x]):Q2(m[x]);g(null,D,v,H,p,M,L,A,w)}},W=(m,v,H,p,M,L,A)=>{const w=v.el=m.el;let{patchFlag:S,dynamicChildren:x,dirs:D}=v;S|=m.patchFlag&16;const R=m.props||o2,I=v.props||o2;let q;H&&w1(H,!1),(q=I.onVnodeBeforeUpdate)&&Y2(q,H,v,m),D&&N1(v,m,H,"beforeUpdate"),H&&w1(H,!0);const j=M&&v.type!=="foreignObject";if(x?u2(m.dynamicChildren,x,w,H,p,j,L):A||J(m,v,w,null,H,p,j,L,!1),S>0){if(S&16)C2(w,v,R,I,H,p,M);else if(S&2&&R.class!==I.class&&n(w,"class",null,I.class,M),S&4&&n(w,"style",R.style,I.style,M),S&8){const t2=v.dynamicProps;for(let s2=0;s2<t2.length;s2++){const H2=t2[s2],D2=R[H2],U1=I[H2];(U1!==D2||H2==="value")&&n(w,H2,D2,U1,M,m.children,H,p,g2)}}S&1&&m.children!==v.children&&f(w,v.children)}else!A&&x==null&&C2(w,v,R,I,H,p,M);((q=I.onVnodeUpdated)||D)&&w2(()=>{q&&Y2(q,H,v,m),D&&N1(v,m,H,"updated")},p)},u2=(m,v,H,p,M,L,A)=>{for(let w=0;w<v.length;w++){const S=m[w],x=v[w],D=S.el&&(S.type===y2||!h3(S,x)||S.shapeFlag&70)?u(S.el):H;g(S,x,D,null,p,M,L,A,!0)}},C2=(m,v,H,p,M,L,A)=>{if(H!==p){if(H!==o2)for(const w in H)!f4(w)&&!(w in p)&&n(m,w,H[w],null,A,v.children,M,L,g2);for(const w in p){if(f4(w))continue;const S=p[w],x=H[w];S!==x&&w!=="value"&&n(m,w,x,S,A,v.children,M,L,g2)}"value"in p&&n(m,"value",H.value,p.value)}},A2=(m,v,H,p,M,L,A,w,S)=>{const x=v.el=m?m.el:t(""),D=v.anchor=m?m.anchor:t("");let{patchFlag:R,dynamicChildren:I,slotScopeIds:q}=v;q&&(w=w?w.concat(q):q),m==null?(r(x,H,p),r(D,H,p),G(v.children,H,D,M,L,A,w,S)):R>0&&R&64&&I&&m.dynamicChildren?(u2(m.dynamicChildren,I,H,M,L,A,w),(v.key!=null||M&&v===M.subTree)&&Z7(m,v,!0)):J(m,v,H,D,M,L,A,w,S)},F2=(m,v,H,p,M,L,A,w,S)=>{v.slotScopeIds=w,m==null?v.shapeFlag&512?M.ctx.activate(v,H,p,A,S):b1(v,H,p,M,L,A,S):E2(m,v,S)},b1=(m,v,H,p,M,L,A)=>{const w=m.component=hl(m,p,M);if(O7(m)&&(w.ctx.renderer=y),Hl(w),w.asyncDep){if(M&&M.registerDep(w,Z),!m.el){const S=w.subTree=e2(R1);d(null,S,v,H)}return}Z(w,m,v,H,M,L,A)},E2=(m,v,H)=>{const p=v.component=m.component;if(Lo(m,v,H))if(p.asyncDep&&!p.asyncResolved){i2(p,v,H);return}else p.next=v,zo(p.update),p.update();else v.el=m.el,p.vnode=v},Z=(m,v,H,p,M,L,A)=>{const w=()=>{if(m.isMounted){let{next:D,bu:R,u:I,parent:q,vnode:j}=m,t2=D,s2;w1(m,!1),D?(D.el=j.el,i2(m,D,A)):D=j,R&&m4(R),(s2=D.props&&D.props.onVnodeBeforeUpdate)&&Y2(s2,q,D,j),w1(m,!0);const H2=m6(m),D2=m.subTree;m.subTree=H2,g(D2,H2,u(D2.el),V(D2),m,M,L),D.el=H2.el,t2===null&&xo(m,H2.el),I&&w2(I,M),(s2=D.props&&D.props.onVnodeUpdated)&&w2(()=>Y2(s2,q,D,j),M)}else{let D;const{el:R,props:I}=v,{bm:q,m:j,parent:t2}=m,s2=u4(v);if(w1(m,!1),q&&m4(q),!s2&&(D=I&&I.onVnodeBeforeMount)&&Y2(D,t2,v),w1(m,!0),R&&c2){const H2=()=>{m.subTree=m6(m),c2(R,m.subTree,m,M,null)};s2?v.type.__asyncLoader().then(()=>!m.isUnmounted&&H2()):H2()}else{const H2=m.subTree=m6(m);g(null,H2,H,p,m,M,L),v.el=H2.el}if(j&&w2(j,M),!s2&&(D=I&&I.onVnodeMounted)){const H2=v;w2(()=>Y2(D,t2,H2),M)}(v.shapeFlag&256||t2&&u4(t2.vnode)&&t2.vnode.shapeFlag&256)&&m.a&&w2(m.a,M),m.isMounted=!0,v=H=p=null}},S=m.effect=new l0(w,()=>p0(x),m.scope),x=m.update=()=>S.run();x.id=m.uid,w1(m,!0),x()},i2=(m,v,H)=>{v.component=m;const p=m.vnode.props;m.vnode=v,m.next=null,Jo(m,v.props,p,H),el(m,v.children,H),o3(),W8(),l3()},J=(m,v,H,p,M,L,A,w,S=!1)=>{const x=m&&m.children,D=m?m.shapeFlag:0,R=v.children,{patchFlag:I,shapeFlag:q}=v;if(I>0){if(I&128){f1(x,R,H,p,M,L,A,w,S);return}else if(I&256){a1(x,R,H,p,M,L,A,w,S);return}}q&8?(D&16&&g2(x,M,L),R!==x&&f(H,R)):D&16?q&16?f1(x,R,H,p,M,L,A,w,S):g2(x,M,L,!0):(D&8&&f(H,""),q&16&&G(R,H,p,M,L,A,w,S))},a1=(m,v,H,p,M,L,A,w,S)=>{m=m||Y1,v=v||Y1;const x=m.length,D=v.length,R=Math.min(x,D);let I;for(I=0;I<R;I++){const q=v[I]=S?H1(v[I]):Q2(v[I]);g(m[I],q,H,null,M,L,A,w,S)}x>D?g2(m,M,L,!0,!1,R):G(v,H,p,M,L,A,w,S,R)},f1=(m,v,H,p,M,L,A,w,S)=>{let x=0;const D=v.length;let R=m.length-1,I=D-1;for(;x<=R&&x<=I;){const q=m[x],j=v[x]=S?H1(v[x]):Q2(v[x]);if(h3(q,j))g(q,j,H,null,M,L,A,w,S);else break;x++}for(;x<=R&&x<=I;){const q=m[R],j=v[I]=S?H1(v[I]):Q2(v[I]);if(h3(q,j))g(q,j,H,null,M,L,A,w,S);else break;R--,I--}if(x>R){if(x<=I){const q=I+1,j=q<D?v[q].el:p;for(;x<=I;)g(null,v[x]=S?H1(v[x]):Q2(v[x]),H,j,M,L,A,w,S),x++}}else if(x>I)for(;x<=R;)N2(m[x],M,L,!0),x++;else{const q=x,j=x,t2=new Map;for(x=j;x<=I;x++){const _2=v[x]=S?H1(v[x]):Q2(v[x]);_2.key!=null&&t2.set(_2.key,x)}let s2,H2=0;const D2=I-j+1;let U1=!1,P8=0;const v3=new Array(D2);for(x=0;x<D2;x++)v3[x]=0;for(x=q;x<=R;x++){const _2=m[x];if(H2>=D2){N2(_2,M,L,!0);continue}let K2;if(_2.key!=null)K2=t2.get(_2.key);else for(s2=j;s2<=I;s2++)if(v3[s2-j]===0&&h3(_2,v[s2])){K2=s2;break}K2===void 0?N2(_2,M,L,!0):(v3[K2-j]=x+1,K2>=P8?P8=K2:U1=!0,g(_2,v[K2],H,null,M,L,A,w,S),H2++)}const T8=U1?nl(v3):Y1;for(s2=T8.length-1,x=D2-1;x>=0;x--){const _2=j+x,K2=v[_2],B8=_2+1<D?v[_2+1].el:p;v3[x]===0?g(null,K2,H,B8,M,L,A,w,S):U1&&(s2<0||x!==T8[s2]?j2(K2,H,B8,2):s2--)}}},j2=(m,v,H,p,M=null)=>{const{el:L,type:A,transition:w,children:S,shapeFlag:x}=m;if(x&6){j2(m.component.subTree,v,H,p);return}if(x&128){m.suspense.move(v,H,p);return}if(x&64){A.move(m,v,H,y);return}if(A===y2){r(L,v,H);for(let R=0;R<S.length;R++)j2(S[R],v,H,p);r(m.anchor,v,H);return}if(A===H4){B(m,v,H);return}if(p!==2&&x&1&&w)if(p===0)w.beforeEnter(L),r(L,v,H),w2(()=>w.enter(L),M);else{const{leave:R,delayLeave:I,afterLeave:q}=w,j=()=>r(L,v,H),t2=()=>{R(L,()=>{j(),q&&q()})};I?I(L,j,t2):t2()}else r(L,v,H)},N2=(m,v,H,p=!1,M=!1)=>{const{type:L,props:A,ref:w,children:S,dynamicChildren:x,shapeFlag:D,patchFlag:R,dirs:I}=m;if(w!=null&&R6(w,null,H,m,!0),D&256){v.ctx.deactivate(m);return}const q=D&1&&I,j=!u4(m);let t2;if(j&&(t2=A&&A.onVnodeBeforeUnmount)&&Y2(t2,v,m),D&6)K3(m.component,H,p);else{if(D&128){m.suspense.unmount(H,p);return}q&&N1(m,null,v,"beforeUnmount"),D&64?m.type.remove(m,v,H,M,y,p):x&&(L!==y2||R>0&&R&64)?g2(x,v,H,!1,!0):(L===y2&&R&384||!M&&D&16)&&g2(S,v,H),p&&I1(m)}(j&&(t2=A&&A.onVnodeUnmounted)||q)&&w2(()=>{t2&&Y2(t2,v,m),q&&N1(m,null,v,"unmounted")},H)},I1=m=>{const{type:v,el:H,anchor:p,transition:M}=m;if(v===y2){O1(H,p);return}if(v===H4){k(m);return}const L=()=>{s(H),M&&!M.persisted&&M.afterLeave&&M.afterLeave()};if(m.shapeFlag&1&&M&&!M.persisted){const{leave:A,delayLeave:w}=M,S=()=>A(H,L);w?w(m.el,L,S):S()}else L()},O1=(m,v)=>{let H;for(;m!==v;)H=h(m),s(m),m=H;s(v)},K3=(m,v,H)=>{const{bum:p,scope:M,update:L,subTree:A,um:w}=m;p&&m4(p),M.stop(),L&&(L.active=!1,N2(A,m,v,H)),w&&w2(w,v),w2(()=>{m.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},g2=(m,v,H,p=!1,M=!1,L=0)=>{for(let A=L;A<m.length;A++)N2(m[A],v,H,p,M)},V=m=>m.shapeFlag&6?V(m.component.subTree):m.shapeFlag&128?m.suspense.next():h(m.anchor||m.el),P=(m,v,H)=>{m==null?v._vnode&&N2(v._vnode,null,null,!0):g(v._vnode||null,m,v,null,null,null,H),W8(),B7(),v._vnode=m},y={p:g,um:N2,m:j2,r:I1,mt:b1,mc:G,pc:J,pbc:u2,n:V,o:c};let E,c2;return a&&([E,c2]=a(y)),{render:P,hydrate:E,createApp:Qo(P,E)}}function w1({effect:c,update:a},e){c.allowRecurse=a.allowRecurse=e}function Z7(c,a,e=!1){const r=c.children,s=a.children;if(U(r)&&U(s))for(let n=0;n<r.length;n++){const i=r[n];let t=s[n];t.shapeFlag&1&&!t.dynamicChildren&&((t.patchFlag<=0||t.patchFlag===32)&&(t=s[n]=H1(s[n]),t.el=i.el),e||Z7(i,t)),t.type===E4&&(t.el=i.el)}}function nl(c){const a=c.slice(),e=[0];let r,s,n,i,t;const o=c.length;for(r=0;r<o;r++){const l=c[r];if(l!==0){if(s=e[e.length-1],c[s]<l){a[r]=s,e.push(r);continue}for(n=0,i=e.length-1;n<i;)t=n+i>>1,c[e[t]]<l?n=t+1:i=t;l<c[e[n]]&&(n>0&&(a[r]=e[n-1]),e[n]=r)}}for(n=e.length,i=e[n-1];n-- >0;)e[n]=i,i=a[i];return e}const il=c=>c.__isTeleport,y2=Symbol.for("v-fgt"),E4=Symbol.for("v-txt"),R1=Symbol.for("v-cmt"),H4=Symbol.for("v-stc"),C3=[];let O2=null;function K(c=!1){C3.push(O2=c?null:[])}function tl(){C3.pop(),O2=C3[C3.length-1]||null}let A3=1;function a5(c){A3+=c}function J7(c){return c.dynamicChildren=A3>0?O2||Y1:null,tl(),A3>0&&O2&&O2.push(c),c}function Q(c,a,e,r,s,n){return J7(b(c,a,e,r,s,n,!0))}function ol(c,a,e,r,s){return J7(e2(c,a,e,r,s,!0))}function F6(c){return c?c.__v_isVNode===!0:!1}function h3(c,a){return c.type===a.type&&c.key===a.key}const D4="__vInternal",cc=({key:c})=>c??null,z4=({ref:c,ref_key:a,ref_for:e})=>(typeof c=="number"&&(c=""+c),c!=null?z2(c)||h2(c)||$(c)?{i:T2,r:c,k:a,f:!!e}:c:null);function b(c,a=null,e=null,r=0,s=null,n=c===y2?0:1,i=!1,t=!1){const o={__v_isVNode:!0,__v_skip:!0,type:c,props:a,key:a&&cc(a),ref:a&&z4(a),scopeId:R4,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:n,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:T2};return t?(C0(o,e),n&128&&c.normalize(o)):e&&(o.shapeFlag|=z2(e)?8:16),A3>0&&!i&&O2&&(o.patchFlag>0||n&6)&&o.patchFlag!==32&&O2.push(o),o}const e2=ll;function ll(c,a=null,e=null,r=0,s=null,n=!1){if((!c||c===Oo)&&(c=R1),F6(c)){const t=e3(c,a,!0);return e&&C0(t,e),A3>0&&!n&&O2&&(t.shapeFlag&6?O2[O2.indexOf(c)]=t:O2.push(t)),t.patchFlag|=-2,t}if(Ml(c)&&(c=c.__vccOpts),a){a=fl(a);let{class:t,style:o}=a;t&&!z2(t)&&(a.class=t0(t)),m2(o)&&(S7(o)&&!U(o)&&(o=M2({},o)),a.style=D1(o))}const i=z2(c)?1:bo(c)?128:il(c)?64:m2(c)?4:$(c)?2:0;return b(c,a,e,r,s,i,n,!0)}function fl(c){return c?S7(c)||D4 in c?M2({},c):c:null}function e3(c,a,e=!1){const{props:r,ref:s,patchFlag:n,children:i}=c,t=a?ml(r||{},a):r;return{__v_isVNode:!0,__v_skip:!0,type:c.type,props:t,key:t&&cc(t),ref:a&&a.ref?e&&s?U(s)?s.concat(z4(a)):[s,z4(a)]:z4(a):s,scopeId:c.scopeId,slotScopeIds:c.slotScopeIds,children:i,target:c.target,targetAnchor:c.targetAnchor,staticCount:c.staticCount,shapeFlag:c.shapeFlag,patchFlag:a&&c.type!==y2?n===-1?16:n|16:n,dynamicProps:c.dynamicProps,dynamicChildren:c.dynamicChildren,appContext:c.appContext,dirs:c.dirs,transition:c.transition,component:c.component,suspense:c.suspense,ssContent:c.ssContent&&e3(c.ssContent),ssFallback:c.ssFallback&&e3(c.ssFallback),el:c.el,anchor:c.anchor,ctx:c.ctx,ce:c.ce}}function p1(c=" ",a=0){return e2(E4,null,c,a)}function ac(c,a){const e=e2(H4,null,c);return e.staticCount=a,e}function e5(c="",a=!1){return a?(K(),ol(R1,null,c)):e2(R1,null,c)}function Q2(c){return c==null||typeof c=="boolean"?e2(R1):U(c)?e2(y2,null,c.slice()):typeof c=="object"?H1(c):e2(E4,null,String(c))}function H1(c){return c.el===null&&c.patchFlag!==-1||c.memo?c:e3(c)}function C0(c,a){let e=0;const{shapeFlag:r}=c;if(a==null)a=null;else if(U(a))e=16;else if(typeof a=="object")if(r&65){const s=a.default;s&&(s._c&&(s._d=!1),C0(c,s()),s._c&&(s._d=!0));return}else{e=32;const s=a._;!s&&!(D4 in a)?a._ctx=T2:s===3&&T2&&(T2.slots._===1?a._=1:(a._=2,c.patchFlag|=1024))}else $(a)?(a={default:a,_ctx:T2},e=32):(a=String(a),r&64?(e=16,a=[p1(a)]):e=8);c.children=a,c.shapeFlag|=e}function ml(...c){const a={};for(let e=0;e<c.length;e++){const r=c[e];for(const s in r)if(s==="class")a.class!==r.class&&(a.class=t0([a.class,r.class]));else if(s==="style")a.style=D1([a.style,r.style]);else if(S4(s)){const n=a[s],i=r[s];i&&n!==i&&!(U(n)&&n.includes(i))&&(a[s]=n?[].concat(n,i):i)}else s!==""&&(a[s]=r[s])}return a}function Y2(c,a,e,r=null){W2(c,a,7,[e,r])}const ul=G7();let vl=0;function hl(c,a,e){const r=c.type,s=(a?a.appContext:c.appContext)||ul,n={uid:vl++,vnode:c,type:r,parent:a,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new v7(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:a?a.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:K7(r,s),emitsOptions:F7(r,s),emit:null,emitted:null,propsDefaults:o2,inheritAttrs:r.inheritAttrs,ctx:o2,data:o2,props:o2,attrs:o2,slots:o2,refs:o2,setupState:o2,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return n.ctx={_:n},n.root=a?a.root:n,n.emit=Mo.bind(null,n),c.ce&&c.ce(n),n}let d2=null,g0,q1,r5="__VUE_INSTANCE_SETTERS__";(q1=w6()[r5])||(q1=w6()[r5]=[]),q1.push(c=>d2=c),g0=c=>{q1.length>1?q1.forEach(a=>a(c)):q1[0](c)};const r3=c=>{g0(c),c.scope.on()},T1=()=>{d2&&d2.scope.off(),g0(null)};function ec(c){return c.vnode.shapeFlag&4}let _3=!1;function Hl(c,a=!1){_3=a;const{props:e,children:r}=c.vnode,s=ec(c);Zo(c,e,s,a),al(c,r);const n=s?zl(c,a):void 0;return _3=!1,n}function zl(c,a){const e=c.type;c.accessCache=Object.create(null),c.proxy=P4(new Proxy(c.ctx,qo));const{setup:r}=e;if(r){const s=c.setupContext=r.length>1?Vl(c):null;r3(c),o3();const n=M1(r,c,0,[c.props,s]);if(l3(),T1(),o7(n)){if(n.then(T1,T1),a)return n.then(i=>{s5(c,i,a)}).catch(i=>{T4(i,c,0)});c.asyncDep=n}else s5(c,n,a)}else rc(c,a)}function s5(c,a,e){$(a)?c.type.__ssrInlineRender?c.ssrRender=a:c.render=a:m2(a)&&(c.setupState=_7(a)),rc(c,e)}let n5;function rc(c,a,e){const r=c.type;if(!c.render){if(!a&&n5&&!r.render){const s=r.template||d0(c).template;if(s){const{isCustomElement:n,compilerOptions:i}=c.appContext.config,{delimiters:t,compilerOptions:o}=r,l=M2(M2({isCustomElement:n,delimiters:t},i),o);r.render=n5(s,l)}}c.render=r.render||q2}{r3(c),o3();try{Wo(c)}finally{l3(),T1()}}}function pl(c){return c.attrsProxy||(c.attrsProxy=new Proxy(c.attrs,{get(a,e){return k2(c,"get","$attrs"),a[e]}}))}function Vl(c){const a=e=>{c.exposed=e||{}};return{get attrs(){return pl(c)},slots:c.slots,emit:c.emit,expose:a}}function I4(c){if(c.exposed)return c.exposeProxy||(c.exposeProxy=new Proxy(_7(P4(c.exposed)),{get(a,e){if(e in a)return a[e];if(e in M3)return M3[e](c)},has(a,e){return e in a||e in M3}}))}function dl(c,a=!0){return $(c)?c.displayName||c.name:c.name||a&&c.__name}function Ml(c){return $(c)&&"__vccOpts"in c}const V2=(c,a)=>vo(c,a,_3);function L0(c,a,e){const r=arguments.length;return r===2?m2(a)&&!U(a)?F6(a)?e2(c,null,[a]):e2(c,a):e2(c,null,a):(r>3?e=Array.prototype.slice.call(arguments,2):r===3&&F6(e)&&(e=[e]),e2(c,a,e))}const Cl=Symbol.for("v-scx"),gl=()=>J2(Cl),Ll="3.3.6",xl="http://www.w3.org/2000/svg",y1=typeof document<"u"?document:null,i5=y1&&y1.createElement("template"),bl={insert:(c,a,e)=>{a.insertBefore(c,e||null)},remove:c=>{const a=c.parentNode;a&&a.removeChild(c)},createElement:(c,a,e,r)=>{const s=a?y1.createElementNS(xl,c):y1.createElement(c,e?{is:e}:void 0);return c==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:c=>y1.createTextNode(c),createComment:c=>y1.createComment(c),setText:(c,a)=>{c.nodeValue=a},setElementText:(c,a)=>{c.textContent=a},parentNode:c=>c.parentNode,nextSibling:c=>c.nextSibling,querySelector:c=>y1.querySelector(c),setScopeId(c,a){c.setAttribute(a,"")},insertStaticContent(c,a,e,r,s,n){const i=e?e.previousSibling:a.lastChild;if(s&&(s===n||s.nextSibling))for(;a.insertBefore(s.cloneNode(!0),e),!(s===n||!(s=s.nextSibling)););else{i5.innerHTML=r?`<svg>${c}</svg>`:c;const t=i5.content;if(r){const o=t.firstChild;for(;o.firstChild;)t.appendChild(o.firstChild);t.removeChild(o)}a.insertBefore(t,e)}return[i?i.nextSibling:a.firstChild,e?e.previousSibling:a.lastChild]}},Nl=Symbol("_vtc");function wl(c,a,e){const r=c[Nl];r&&(a=(a?[a,...r]:[...r]).join(" ")),a==null?c.removeAttribute("class"):e?c.setAttribute("class",a):c.className=a}const Sl=Symbol("_vod");function yl(c,a,e){const r=c.style,s=z2(e);if(e&&!s){if(a&&!z2(a))for(const n in a)e[n]==null&&E6(r,n,"");for(const n in e)E6(r,n,e[n])}else{const n=r.display;s?a!==e&&(r.cssText=e):a&&c.removeAttribute("style"),Sl in c&&(r.display=n)}}const t5=/\s*!important$/;function E6(c,a,e){if(U(e))e.forEach(r=>E6(c,a,r));else if(e==null&&(e=""),a.startsWith("--"))c.setProperty(a,e);else{const r=kl(c,a);t5.test(e)?c.setProperty(t3(r),e.replace(t5,""),"important"):c[r]=e}}const o5=["Webkit","Moz","ms"],v6={};function kl(c,a){const e=v6[a];if(e)return e;let r=c1(a);if(r!=="filter"&&r in c)return v6[a]=r;r=A4(r);for(let s=0;s<o5.length;s++){const n=o5[s]+r;if(n in c)return v6[a]=n}return a}const l5="http://www.w3.org/1999/xlink";function Al(c,a,e,r,s){if(r&&a.startsWith("xlink:"))e==null?c.removeAttributeNS(l5,a.slice(6,a.length)):c.setAttributeNS(l5,a,e);else{const n=Rt(a);e==null||n&&!m7(e)?c.removeAttribute(a):c.setAttribute(a,n?"":e)}}function _l(c,a,e,r,s,n,i){if(a==="innerHTML"||a==="textContent"){r&&i(r,s,n),c[a]=e??"";return}const t=c.tagName;if(a==="value"&&t!=="PROGRESS"&&!t.includes("-")){c._value=e;const l=t==="OPTION"?c.getAttribute("value"):c.value,f=e??"";l!==f&&(c.value=f),e==null&&c.removeAttribute(a);return}let o=!1;if(e===""||e==null){const l=typeof c[a];l==="boolean"?e=m7(e):e==null&&l==="string"?(e="",o=!0):l==="number"&&(e=0,o=!0)}try{c[a]=e}catch{}o&&c.removeAttribute(a)}function $1(c,a,e,r){c.addEventListener(a,e,r)}function Pl(c,a,e,r){c.removeEventListener(a,e,r)}const f5=Symbol("_vei");function Tl(c,a,e,r,s=null){const n=c[f5]||(c[f5]={}),i=n[a];if(r&&i)i.value=r;else{const[t,o]=Bl(a);if(r){const l=n[a]=El(r,s);$1(c,t,l,o)}else i&&(Pl(c,t,i,o),n[a]=void 0)}}const m5=/(?:Once|Passive|Capture)$/;function Bl(c){let a;if(m5.test(c)){a={};let r;for(;r=c.match(m5);)c=c.slice(0,c.length-r[0].length),a[r[0].toLowerCase()]=!0}return[c[2]===":"?c.slice(3):t3(c.slice(2)),a]}let h6=0;const Rl=Promise.resolve(),Fl=()=>h6||(Rl.then(()=>h6=0),h6=Date.now());function El(c,a){const e=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=e.attached)return;W2(Dl(r,e.value),a,5,[r])};return e.value=c,e.attached=Fl(),e}function Dl(c,a){if(U(a)){const e=c.stopImmediatePropagation;return c.stopImmediatePropagation=()=>{e.call(c),c._stopped=!0},a.map(r=>s=>!s._stopped&&r&&r(s))}else return a}const u5=/^on[a-z]/,Il=(c,a,e,r,s=!1,n,i,t,o)=>{a==="class"?wl(c,r,s):a==="style"?yl(c,e,r):S4(a)?r0(a)||Tl(c,a,e,r,i):(a[0]==="."?(a=a.slice(1),!0):a[0]==="^"?(a=a.slice(1),!1):Ol(c,a,r,s))?_l(c,a,r,n,i,t,o):(a==="true-value"?c._trueValue=r:a==="false-value"&&(c._falseValue=r),Al(c,a,r,s))};function Ol(c,a,e,r){return r?!!(a==="innerHTML"||a==="textContent"||a in c&&u5.test(a)&&$(e)):a==="spellcheck"||a==="draggable"||a==="translate"||a==="form"||a==="list"&&c.tagName==="INPUT"||a==="type"&&c.tagName==="TEXTAREA"||u5.test(a)&&z2(e)?!1:a in c}const v5=c=>{const a=c.props["onUpdate:modelValue"]||!1;return U(a)?e=>m4(a,e):a};function Ul(c){c.target.composing=!0}function h5(c){const a=c.target;a.composing&&(a.composing=!1,a.dispatchEvent(new Event("input")))}const H6=Symbol("_assign"),ql={created(c,{modifiers:{lazy:a,trim:e,number:r}},s){c[H6]=v5(s);const n=r||s.props&&s.props.type==="number";$1(c,a?"change":"input",i=>{if(i.target.composing)return;let t=c.value;e&&(t=t.trim()),n&&(t=N6(t)),c[H6](t)}),e&&$1(c,"change",()=>{c.value=c.value.trim()}),a||($1(c,"compositionstart",Ul),$1(c,"compositionend",h5),$1(c,"change",h5))},mounted(c,{value:a}){c.value=a??""},beforeUpdate(c,{value:a,modifiers:{lazy:e,trim:r,number:s}},n){if(c[H6]=v5(n),c.composing||document.activeElement===c&&c.type!=="range"&&(e||r&&c.value.trim()===a||(s||c.type==="number")&&N6(c.value)===a))return;const i=a??"";c.value!==i&&(c.value=i)}},Wl=M2({patchProp:Il},bl);let H5;function $l(){return H5||(H5=rl(Wl))}const Gl=(...c)=>{const a=$l().createApp(...c),{mount:e}=a;return a.mount=r=>{const s=jl(r);if(!s)return;const n=a._component;!$(n)&&!n.render&&!n.template&&(n.template=s.innerHTML),s.innerHTML="";const i=e(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),i},a};function jl(c){return z2(c)?document.querySelector(c):c}var Kl=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let sc;const O4=c=>sc=c,nc=Symbol();function D6(c){return c&&typeof c=="object"&&Object.prototype.toString.call(c)==="[object Object]"&&typeof c.toJSON!="function"}var g3;(function(c){c.direct="direct",c.patchObject="patch object",c.patchFunction="patch function"})(g3||(g3={}));function Yl(){const c=h7(!0),a=c.run(()=>h0({}));let e=[],r=[];const s=P4({install(n){O4(s),s._a=n,n.provide(nc,s),n.config.globalProperties.$pinia=s,r.forEach(i=>e.push(i)),r=[]},use(n){return!this._a&&!Kl?r.push(n):e.push(n),this},_p:e,_a:null,_e:c,_s:new Map,state:a});return s}const ic=()=>{};function z5(c,a,e,r=ic){c.push(a);const s=()=>{const n=c.indexOf(a);n>-1&&(c.splice(n,1),r())};return!e&&H7()&&Et(s),s}function W1(c,...a){c.slice().forEach(e=>{e(...a)})}const Ql=c=>c();function I6(c,a){c instanceof Map&&a instanceof Map&&a.forEach((e,r)=>c.set(r,e)),c instanceof Set&&a instanceof Set&&a.forEach(c.add,c);for(const e in a){if(!a.hasOwnProperty(e))continue;const r=a[e],s=c[e];D6(s)&&D6(r)&&c.hasOwnProperty(e)&&!h2(r)&&!d1(r)?c[e]=I6(s,r):c[e]=r}return c}const Xl=Symbol();function Zl(c){return!D6(c)||!c.hasOwnProperty(Xl)}const{assign:h1}=Object;function Jl(c){return!!(h2(c)&&c.effect)}function cf(c,a,e,r){const{state:s,actions:n,getters:i}=a,t=e.state.value[c];let o;function l(){t||(e.state.value[c]=s?s():{});const f=lo(e.state.value[c]);return h1(f,n,Object.keys(i||{}).reduce((u,h)=>(u[h]=P4(V2(()=>{O4(e);const z=e._s.get(c);return i[h].call(z,z)})),u),{}))}return o=tc(c,l,a,e,r,!0),o}function tc(c,a,e={},r,s,n){let i;const t=h1({actions:{}},e),o={deep:!0};let l,f,u=[],h=[],z;const N=r.state.value[c];!n&&!N&&(r.state.value[c]={}),h0({});let g;function T(G){let W;l=f=!1,typeof G=="function"?(G(r.state.value[c]),W={type:g3.patchFunction,storeId:c,events:z}):(I6(r.state.value[c],G),W={type:g3.patchObject,payload:G,storeId:c,events:z});const u2=g=Symbol();z0().then(()=>{g===u2&&(l=!0)}),f=!0,W1(u,W,r.state.value[c])}const d=n?function(){const{state:W}=e,u2=W?W():{};this.$patch(C2=>{h1(C2,u2)})}:ic;function C(){i.stop(),u=[],h=[],r._s.delete(c)}function B(G,W){return function(){O4(r);const u2=Array.from(arguments),C2=[],A2=[];function F2(Z){C2.push(Z)}function b1(Z){A2.push(Z)}W1(h,{args:u2,name:G,store:O,after:F2,onError:b1});let E2;try{E2=W.apply(this&&this.$id===c?this:O,u2)}catch(Z){throw W1(A2,Z),Z}return E2 instanceof Promise?E2.then(Z=>(W1(C2,Z),Z)).catch(Z=>(W1(A2,Z),Promise.reject(Z))):(W1(C2,E2),E2)}}const k={_p:r,$id:c,$onAction:z5.bind(null,h),$patch:T,$reset:d,$subscribe(G,W={}){const u2=z5(u,G,W.detached,()=>C2()),C2=i.run(()=>J1(()=>r.state.value[c],A2=>{(W.flush==="sync"?f:l)&&G({storeId:c,type:g3.direct,events:z},A2)},h1({},o,W)));return u2},$dispose:C},O=D3(k);r._s.set(c,O);const r2=(r._a&&r._a.runWithContext||Ql)(()=>r._e.run(()=>(i=h7()).run(a)));for(const G in r2){const W=r2[G];if(h2(W)&&!Jl(W)||d1(W))n||(N&&Zl(W)&&(h2(W)?W.value=N[G]:I6(W,N[G])),r.state.value[c][G]=W);else if(typeof W=="function"){const u2=B(G,W);r2[G]=u2,t.actions[G]=W}}return h1(O,r2),h1(X(O),r2),Object.defineProperty(O,"$state",{get:()=>r.state.value[c],set:G=>{T(W=>{h1(W,G)})}}),r._p.forEach(G=>{h1(O,i.run(()=>G({store:O,app:r._a,pinia:r,options:t})))}),N&&n&&e.hydrate&&e.hydrate(O.$state,N),l=!0,f=!0,O}function af(c,a,e){let r,s;const n=typeof a=="function";typeof c=="string"?(r=c,s=n?e:a):(s=c,r=c.id);function i(t,o){const l=Xo();return t=t||(l?J2(nc,null):null),t&&O4(t),t=sc,t._s.has(r)||(n?tc(r,a,s,t):cf(r,s,t)),t._s.get(r)}return i.$id=r,i}function z6(c,a){return Array.isArray(a)?a.reduce((e,r)=>(e[r]=function(){return c(this.$pinia)[r]},e),{}):Object.keys(a).reduce((e,r)=>(e[r]=function(){const s=c(this.$pinia),n=a[r];return typeof n=="function"?n.call(this,s):s[n]},e),{})}/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const G1=typeof window<"u";function ef(c){return c.__esModule||c[Symbol.toStringTag]==="Module"}const a2=Object.assign;function p6(c,a){const e={};for(const r in a){const s=a[r];e[r]=$2(s)?s.map(c):c(s)}return e}const L3=()=>{},$2=Array.isArray,rf=/\/$/,sf=c=>c.replace(rf,"");function V6(c,a,e="/"){let r,s={},n="",i="";const t=a.indexOf("#");let o=a.indexOf("?");return t<o&&t>=0&&(o=-1),o>-1&&(r=a.slice(0,o),n=a.slice(o+1,t>-1?t:a.length),s=c(n)),t>-1&&(r=r||a.slice(0,t),i=a.slice(t,a.length)),r=lf(r??a,e),{fullPath:r+(n&&"?")+n+i,path:r,query:s,hash:i}}function nf(c,a){const e=a.query?c(a.query):"";return a.path+(e&&"?")+e+(a.hash||"")}function p5(c,a){return!a||!c.toLowerCase().startsWith(a.toLowerCase())?c:c.slice(a.length)||"/"}function tf(c,a,e){const r=a.matched.length-1,s=e.matched.length-1;return r>-1&&r===s&&s3(a.matched[r],e.matched[s])&&oc(a.params,e.params)&&c(a.query)===c(e.query)&&a.hash===e.hash}function s3(c,a){return(c.aliasOf||c)===(a.aliasOf||a)}function oc(c,a){if(Object.keys(c).length!==Object.keys(a).length)return!1;for(const e in c)if(!of(c[e],a[e]))return!1;return!0}function of(c,a){return $2(c)?V5(c,a):$2(a)?V5(a,c):c===a}function V5(c,a){return $2(a)?c.length===a.length&&c.every((e,r)=>e===a[r]):c.length===1&&c[0]===a}function lf(c,a){if(c.startsWith("/"))return c;if(!c)return a;const e=a.split("/"),r=c.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let n=e.length-1,i,t;for(i=0;i<r.length;i++)if(t=r[i],t!==".")if(t==="..")n>1&&n--;else break;return e.slice(0,n).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var P3;(function(c){c.pop="pop",c.push="push"})(P3||(P3={}));var x3;(function(c){c.back="back",c.forward="forward",c.unknown=""})(x3||(x3={}));function ff(c){if(!c)if(G1){const a=document.querySelector("base");c=a&&a.getAttribute("href")||"/",c=c.replace(/^\w+:\/\/[^\/]+/,"")}else c="/";return c[0]!=="/"&&c[0]!=="#"&&(c="/"+c),sf(c)}const mf=/^[^#]+#/;function uf(c,a){return c.replace(mf,"#")+a}function vf(c,a){const e=document.documentElement.getBoundingClientRect(),r=c.getBoundingClientRect();return{behavior:a.behavior,left:r.left-e.left-(a.left||0),top:r.top-e.top-(a.top||0)}}const U4=()=>({left:window.pageXOffset,top:window.pageYOffset});function hf(c){let a;if("el"in c){const e=c.el,r=typeof e=="string"&&e.startsWith("#"),s=typeof e=="string"?r?document.getElementById(e.slice(1)):document.querySelector(e):e;if(!s)return;a=vf(s,c)}else a=c;"scrollBehavior"in document.documentElement.style?window.scrollTo(a):window.scrollTo(a.left!=null?a.left:window.pageXOffset,a.top!=null?a.top:window.pageYOffset)}function d5(c,a){return(history.state?history.state.position-a:-1)+c}const O6=new Map;function Hf(c,a){O6.set(c,a)}function zf(c){const a=O6.get(c);return O6.delete(c),a}let pf=()=>location.protocol+"//"+location.host;function lc(c,a){const{pathname:e,search:r,hash:s}=a,n=c.indexOf("#");if(n>-1){let t=s.includes(c.slice(n))?c.slice(n).length:1,o=s.slice(t);return o[0]!=="/"&&(o="/"+o),p5(o,"")}return p5(e,c)+r+s}function Vf(c,a,e,r){let s=[],n=[],i=null;const t=({state:h})=>{const z=lc(c,location),N=e.value,g=a.value;let T=0;if(h){if(e.value=z,a.value=h,i&&i===N){i=null;return}T=g?h.position-g.position:0}else r(z);s.forEach(d=>{d(e.value,N,{delta:T,type:P3.pop,direction:T?T>0?x3.forward:x3.back:x3.unknown})})};function o(){i=e.value}function l(h){s.push(h);const z=()=>{const N=s.indexOf(h);N>-1&&s.splice(N,1)};return n.push(z),z}function f(){const{history:h}=window;h.state&&h.replaceState(a2({},h.state,{scroll:U4()}),"")}function u(){for(const h of n)h();n=[],window.removeEventListener("popstate",t),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",t),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:o,listen:l,destroy:u}}function M5(c,a,e,r=!1,s=!1){return{back:c,current:a,forward:e,replaced:r,position:window.history.length,scroll:s?U4():null}}function df(c){const{history:a,location:e}=window,r={value:lc(c,e)},s={value:a.state};s.value||n(r.value,{back:null,current:r.value,forward:null,position:a.length-1,replaced:!0,scroll:null},!0);function n(o,l,f){const u=c.indexOf("#"),h=u>-1?(e.host&&document.querySelector("base")?c:c.slice(u))+o:pf()+c+o;try{a[f?"replaceState":"pushState"](l,"",h),s.value=l}catch(z){console.error(z),e[f?"replace":"assign"](h)}}function i(o,l){const f=a2({},a.state,M5(s.value.back,o,s.value.forward,!0),l,{position:s.value.position});n(o,f,!0),r.value=o}function t(o,l){const f=a2({},s.value,a.state,{forward:o,scroll:U4()});n(f.current,f,!0);const u=a2({},M5(r.value,o,null),{position:f.position+1},l);n(o,u,!1),r.value=o}return{location:r,state:s,push:t,replace:i}}function Mf(c){c=ff(c);const a=df(c),e=Vf(c,a.state,a.location,a.replace);function r(n,i=!0){i||e.pauseListeners(),history.go(n)}const s=a2({location:"",base:c,go:r,createHref:uf.bind(null,c)},a,e);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>a.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>a.state.value}),s}function Cf(c){return typeof c=="string"||c&&typeof c=="object"}function fc(c){return typeof c=="string"||typeof c=="symbol"}const u1={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},mc=Symbol("");var C5;(function(c){c[c.aborted=4]="aborted",c[c.cancelled=8]="cancelled",c[c.duplicated=16]="duplicated"})(C5||(C5={}));function n3(c,a){return a2(new Error,{type:c,[mc]:!0},a)}function e1(c,a){return c instanceof Error&&mc in c&&(a==null||!!(c.type&a))}const g5="[^/]+?",gf={sensitive:!1,strict:!1,start:!0,end:!0},Lf=/[.+*?^${}()[\]/\\]/g;function xf(c,a){const e=a2({},gf,a),r=[];let s=e.start?"^":"";const n=[];for(const l of c){const f=l.length?[]:[90];e.strict&&!l.length&&(s+="/");for(let u=0;u<l.length;u++){const h=l[u];let z=40+(e.sensitive?.25:0);if(h.type===0)u||(s+="/"),s+=h.value.replace(Lf,"\\$&"),z+=40;else if(h.type===1){const{value:N,repeatable:g,optional:T,regexp:d}=h;n.push({name:N,repeatable:g,optional:T});const C=d||g5;if(C!==g5){z+=10;try{new RegExp(`(${C})`)}catch(k){throw new Error(`Invalid custom RegExp for param "${N}" (${C}): `+k.message)}}let B=g?`((?:${C})(?:/(?:${C}))*)`:`(${C})`;u||(B=T&&l.length<2?`(?:/${B})`:"/"+B),T&&(B+="?"),s+=B,z+=20,T&&(z+=-8),g&&(z+=-20),C===".*"&&(z+=-50)}f.push(z)}r.push(f)}if(e.strict&&e.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}e.strict||(s+="/?"),e.end?s+="$":e.strict&&(s+="(?:/|$)");const i=new RegExp(s,e.sensitive?"":"i");function t(l){const f=l.match(i),u={};if(!f)return null;for(let h=1;h<f.length;h++){const z=f[h]||"",N=n[h-1];u[N.name]=z&&N.repeatable?z.split("/"):z}return u}function o(l){let f="",u=!1;for(const h of c){(!u||!f.endsWith("/"))&&(f+="/"),u=!1;for(const z of h)if(z.type===0)f+=z.value;else if(z.type===1){const{value:N,repeatable:g,optional:T}=z,d=N in l?l[N]:"";if($2(d)&&!g)throw new Error(`Provided param "${N}" is an array but it is not repeatable (* or + modifiers)`);const C=$2(d)?d.join("/"):d;if(!C)if(T)h.length<2&&(f.endsWith("/")?f=f.slice(0,-1):u=!0);else throw new Error(`Missing required param "${N}"`);f+=C}}return f||"/"}return{re:i,score:r,keys:n,parse:t,stringify:o}}function bf(c,a){let e=0;for(;e<c.length&&e<a.length;){const r=a[e]-c[e];if(r)return r;e++}return c.length<a.length?c.length===1&&c[0]===40+40?-1:1:c.length>a.length?a.length===1&&a[0]===40+40?1:-1:0}function Nf(c,a){let e=0;const r=c.score,s=a.score;for(;e<r.length&&e<s.length;){const n=bf(r[e],s[e]);if(n)return n;e++}if(Math.abs(s.length-r.length)===1){if(L5(r))return 1;if(L5(s))return-1}return s.length-r.length}function L5(c){const a=c[c.length-1];return c.length>0&&a[a.length-1]<0}const wf={type:0,value:""},Sf=/[a-zA-Z0-9_]/;function yf(c){if(!c)return[[]];if(c==="/")return[[wf]];if(!c.startsWith("/"))throw new Error(`Invalid path "${c}"`);function a(z){throw new Error(`ERR (${e})/"${l}": ${z}`)}let e=0,r=e;const s=[];let n;function i(){n&&s.push(n),n=[]}let t=0,o,l="",f="";function u(){l&&(e===0?n.push({type:0,value:l}):e===1||e===2||e===3?(n.length>1&&(o==="*"||o==="+")&&a(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),n.push({type:1,value:l,regexp:f,repeatable:o==="*"||o==="+",optional:o==="*"||o==="?"})):a("Invalid state to consume buffer"),l="")}function h(){l+=o}for(;t<c.length;){if(o=c[t++],o==="\\"&&e!==2){r=e,e=4;continue}switch(e){case 0:o==="/"?(l&&u(),i()):o===":"?(u(),e=1):h();break;case 4:h(),e=r;break;case 1:o==="("?e=2:Sf.test(o)?h():(u(),e=0,o!=="*"&&o!=="?"&&o!=="+"&&t--);break;case 2:o===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+o:e=3:f+=o;break;case 3:u(),e=0,o!=="*"&&o!=="?"&&o!=="+"&&t--,f="";break;default:a("Unknown state");break}}return e===2&&a(`Unfinished custom RegExp for param "${l}"`),u(),i(),s}function kf(c,a,e){const r=xf(yf(c.path),e),s=a2(r,{record:c,parent:a,children:[],alias:[]});return a&&!s.record.aliasOf==!a.record.aliasOf&&a.children.push(s),s}function Af(c,a){const e=[],r=new Map;a=N5({strict:!1,end:!0,sensitive:!1},a);function s(f){return r.get(f)}function n(f,u,h){const z=!h,N=_f(f);N.aliasOf=h&&h.record;const g=N5(a,f),T=[N];if("alias"in f){const B=typeof f.alias=="string"?[f.alias]:f.alias;for(const k of B)T.push(a2({},N,{components:h?h.record.components:N.components,path:k,aliasOf:h?h.record:N}))}let d,C;for(const B of T){const{path:k}=B;if(u&&k[0]!=="/"){const O=u.record.path,n2=O[O.length-1]==="/"?"":"/";B.path=u.record.path+(k&&n2+k)}if(d=kf(B,u,g),h?h.alias.push(d):(C=C||d,C!==d&&C.alias.push(d),z&&f.name&&!b5(d)&&i(f.name)),N.children){const O=N.children;for(let n2=0;n2<O.length;n2++)n(O[n2],d,h&&h.children[n2])}h=h||d,(d.record.components&&Object.keys(d.record.components).length||d.record.name||d.record.redirect)&&o(d)}return C?()=>{i(C)}:L3}function i(f){if(fc(f)){const u=r.get(f);u&&(r.delete(f),e.splice(e.indexOf(u),1),u.children.forEach(i),u.alias.forEach(i))}else{const u=e.indexOf(f);u>-1&&(e.splice(u,1),f.record.name&&r.delete(f.record.name),f.children.forEach(i),f.alias.forEach(i))}}function t(){return e}function o(f){let u=0;for(;u<e.length&&Nf(f,e[u])>=0&&(f.record.path!==e[u].record.path||!uc(f,e[u]));)u++;e.splice(u,0,f),f.record.name&&!b5(f)&&r.set(f.record.name,f)}function l(f,u){let h,z={},N,g;if("name"in f&&f.name){if(h=r.get(f.name),!h)throw n3(1,{location:f});g=h.record.name,z=a2(x5(u.params,h.keys.filter(C=>!C.optional).map(C=>C.name)),f.params&&x5(f.params,h.keys.map(C=>C.name))),N=h.stringify(z)}else if("path"in f)N=f.path,h=e.find(C=>C.re.test(N)),h&&(z=h.parse(N),g=h.record.name);else{if(h=u.name?r.get(u.name):e.find(C=>C.re.test(u.path)),!h)throw n3(1,{location:f,currentLocation:u});g=h.record.name,z=a2({},u.params,f.params),N=h.stringify(z)}const T=[];let d=h;for(;d;)T.unshift(d.record),d=d.parent;return{name:g,path:N,params:z,matched:T,meta:Tf(T)}}return c.forEach(f=>n(f)),{addRoute:n,resolve:l,removeRoute:i,getRoutes:t,getRecordMatcher:s}}function x5(c,a){const e={};for(const r of a)r in c&&(e[r]=c[r]);return e}function _f(c){return{path:c.path,redirect:c.redirect,name:c.name,meta:c.meta||{},aliasOf:void 0,beforeEnter:c.beforeEnter,props:Pf(c),children:c.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in c?c.components||null:c.component&&{default:c.component}}}function Pf(c){const a={},e=c.props||!1;if("component"in c)a.default=e;else for(const r in c.components)a[r]=typeof e=="object"?e[r]:e;return a}function b5(c){for(;c;){if(c.record.aliasOf)return!0;c=c.parent}return!1}function Tf(c){return c.reduce((a,e)=>a2(a,e.meta),{})}function N5(c,a){const e={};for(const r in c)e[r]=r in a?a[r]:c[r];return e}function uc(c,a){return a.children.some(e=>e===c||uc(c,e))}const vc=/#/g,Bf=/&/g,Rf=/\//g,Ff=/=/g,Ef=/\?/g,hc=/\+/g,Df=/%5B/g,If=/%5D/g,Hc=/%5E/g,Of=/%60/g,zc=/%7B/g,Uf=/%7C/g,pc=/%7D/g,qf=/%20/g;function x0(c){return encodeURI(""+c).replace(Uf,"|").replace(Df,"[").replace(If,"]")}function Wf(c){return x0(c).replace(zc,"{").replace(pc,"}").replace(Hc,"^")}function U6(c){return x0(c).replace(hc,"%2B").replace(qf,"+").replace(vc,"%23").replace(Bf,"%26").replace(Of,"`").replace(zc,"{").replace(pc,"}").replace(Hc,"^")}function $f(c){return U6(c).replace(Ff,"%3D")}function Gf(c){return x0(c).replace(vc,"%23").replace(Ef,"%3F")}function jf(c){return c==null?"":Gf(c).replace(Rf,"%2F")}function x4(c){try{return decodeURIComponent(""+c)}catch{}return""+c}function Kf(c){const a={};if(c===""||c==="?")return a;const r=(c[0]==="?"?c.slice(1):c).split("&");for(let s=0;s<r.length;++s){const n=r[s].replace(hc," "),i=n.indexOf("="),t=x4(i<0?n:n.slice(0,i)),o=i<0?null:x4(n.slice(i+1));if(t in a){let l=a[t];$2(l)||(l=a[t]=[l]),l.push(o)}else a[t]=o}return a}function w5(c){let a="";for(let e in c){const r=c[e];if(e=$f(e),r==null){r!==void 0&&(a+=(a.length?"&":"")+e);continue}($2(r)?r.map(n=>n&&U6(n)):[r&&U6(r)]).forEach(n=>{n!==void 0&&(a+=(a.length?"&":"")+e,n!=null&&(a+="="+n))})}return a}function Yf(c){const a={};for(const e in c){const r=c[e];r!==void 0&&(a[e]=$2(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return a}const Qf=Symbol(""),S5=Symbol(""),b0=Symbol(""),Vc=Symbol(""),q6=Symbol("");function H3(){let c=[];function a(r){return c.push(r),()=>{const s=c.indexOf(r);s>-1&&c.splice(s,1)}}function e(){c=[]}return{add:a,list:()=>c.slice(),reset:e}}function z1(c,a,e,r,s){const n=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((i,t)=>{const o=u=>{u===!1?t(n3(4,{from:e,to:a})):u instanceof Error?t(u):Cf(u)?t(n3(2,{from:a,to:u})):(n&&r.enterCallbacks[s]===n&&typeof u=="function"&&n.push(u),i())},l=c.call(r&&r.instances[s],a,e,o);let f=Promise.resolve(l);c.length<3&&(f=f.then(o)),f.catch(u=>t(u))})}function d6(c,a,e,r){const s=[];for(const n of c)for(const i in n.components){let t=n.components[i];if(!(a!=="beforeRouteEnter"&&!n.instances[i]))if(Xf(t)){const l=(t.__vccOpts||t)[a];l&&s.push(z1(l,e,r,n,i))}else{let o=t();s.push(()=>o.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${i}" at "${n.path}"`));const f=ef(l)?l.default:l;n.components[i]=f;const h=(f.__vccOpts||f)[a];return h&&z1(h,e,r,n,i)()}))}}return s}function Xf(c){return typeof c=="object"||"displayName"in c||"props"in c||"__vccOpts"in c}function y5(c){const a=J2(b0),e=J2(Vc),r=V2(()=>a.resolve(X1(c.to))),s=V2(()=>{const{matched:o}=r.value,{length:l}=o,f=o[l-1],u=e.matched;if(!f||!u.length)return-1;const h=u.findIndex(s3.bind(null,f));if(h>-1)return h;const z=k5(o[l-2]);return l>1&&k5(f)===z&&u[u.length-1].path!==z?u.findIndex(s3.bind(null,o[l-2])):h}),n=V2(()=>s.value>-1&&am(e.params,r.value.params)),i=V2(()=>s.value>-1&&s.value===e.matched.length-1&&oc(e.params,r.value.params));function t(o={}){return cm(o)?a[X1(c.replace)?"replace":"push"](X1(c.to)).catch(L3):Promise.resolve()}return{route:r,href:V2(()=>r.value.href),isActive:n,isExactActive:i,navigate:t}}const Zf=V0({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:y5,setup(c,{slots:a}){const e=D3(y5(c)),{options:r}=J2(b0),s=V2(()=>({[A5(c.activeClass,r.linkActiveClass,"router-link-active")]:e.isActive,[A5(c.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:e.isExactActive}));return()=>{const n=a.default&&a.default(e);return c.custom?n:L0("a",{"aria-current":e.isExactActive?c.ariaCurrentValue:null,href:e.href,onClick:e.navigate,class:s.value},n)}}}),Jf=Zf;function cm(c){if(!(c.metaKey||c.altKey||c.ctrlKey||c.shiftKey)&&!c.defaultPrevented&&!(c.button!==void 0&&c.button!==0)){if(c.currentTarget&&c.currentTarget.getAttribute){const a=c.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(a))return}return c.preventDefault&&c.preventDefault(),!0}}function am(c,a){for(const e in a){const r=a[e],s=c[e];if(typeof r=="string"){if(r!==s)return!1}else if(!$2(s)||s.length!==r.length||r.some((n,i)=>n!==s[i]))return!1}return!0}function k5(c){return c?c.aliasOf?c.aliasOf.path:c.path:""}const A5=(c,a,e)=>c??a??e,em=V0({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(c,{attrs:a,slots:e}){const r=J2(q6),s=V2(()=>c.route||r.value),n=J2(S5,0),i=V2(()=>{let l=X1(n);const{matched:f}=s.value;let u;for(;(u=f[l])&&!u.components;)l++;return l}),t=V2(()=>s.value.matched[i.value]);h4(S5,V2(()=>i.value+1)),h4(Qf,t),h4(q6,s);const o=h0();return J1(()=>[o.value,t.value,c.name],([l,f,u],[h,z,N])=>{f&&(f.instances[u]=l,z&&z!==f&&l&&l===h&&(f.leaveGuards.size||(f.leaveGuards=z.leaveGuards),f.updateGuards.size||(f.updateGuards=z.updateGuards))),l&&f&&(!z||!s3(f,z)||!h)&&(f.enterCallbacks[u]||[]).forEach(g=>g(l))},{flush:"post"}),()=>{const l=s.value,f=c.name,u=t.value,h=u&&u.components[f];if(!h)return _5(e.default,{Component:h,route:l});const z=u.props[f],N=z?z===!0?l.params:typeof z=="function"?z(l):z:null,T=L0(h,a2({},N,a,{onVnodeUnmounted:d=>{d.component.isUnmounted&&(u.instances[f]=null)},ref:o}));return _5(e.default,{Component:T,route:l})||T}}});function _5(c,a){if(!c)return null;const e=c(a);return e.length===1?e[0]:e}const dc=em;function rm(c){const a=Af(c.routes,c),e=c.parseQuery||Kf,r=c.stringifyQuery||w5,s=c.history,n=H3(),i=H3(),t=H3(),o=io(u1);let l=u1;G1&&c.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=p6.bind(null,V=>""+V),u=p6.bind(null,jf),h=p6.bind(null,x4);function z(V,P){let y,E;return fc(V)?(y=a.getRecordMatcher(V),E=P):E=V,a.addRoute(E,y)}function N(V){const P=a.getRecordMatcher(V);P&&a.removeRoute(P)}function g(){return a.getRoutes().map(V=>V.record)}function T(V){return!!a.getRecordMatcher(V)}function d(V,P){if(P=a2({},P||o.value),typeof V=="string"){const H=V6(e,V,P.path),p=a.resolve({path:H.path},P),M=s.createHref(H.fullPath);return a2(H,p,{params:h(p.params),hash:x4(H.hash),redirectedFrom:void 0,href:M})}let y;if("path"in V)y=a2({},V,{path:V6(e,V.path,P.path).path});else{const H=a2({},V.params);for(const p in H)H[p]==null&&delete H[p];y=a2({},V,{params:u(H)}),P.params=u(P.params)}const E=a.resolve(y,P),c2=V.hash||"";E.params=f(h(E.params));const m=nf(r,a2({},V,{hash:Wf(c2),path:E.path})),v=s.createHref(m);return a2({fullPath:m,hash:c2,query:r===w5?Yf(V.query):V.query||{}},E,{redirectedFrom:void 0,href:v})}function C(V){return typeof V=="string"?V6(e,V,o.value.path):a2({},V)}function B(V,P){if(l!==V)return n3(8,{from:P,to:V})}function k(V){return r2(V)}function O(V){return k(a2(C(V),{replace:!0}))}function n2(V){const P=V.matched[V.matched.length-1];if(P&&P.redirect){const{redirect:y}=P;let E=typeof y=="function"?y(V):y;return typeof E=="string"&&(E=E.includes("?")||E.includes("#")?E=C(E):{path:E},E.params={}),a2({query:V.query,hash:V.hash,params:"path"in E?{}:V.params},E)}}function r2(V,P){const y=l=d(V),E=o.value,c2=V.state,m=V.force,v=V.replace===!0,H=n2(y);if(H)return r2(a2(C(H),{state:typeof H=="object"?a2({},c2,H.state):c2,force:m,replace:v}),P||y);const p=y;p.redirectedFrom=P;let M;return!m&&tf(r,E,y)&&(M=n3(16,{to:p,from:E}),j2(E,E,!0,!1)),(M?Promise.resolve(M):u2(p,E)).catch(L=>e1(L)?e1(L,2)?L:f1(L):J(L,p,E)).then(L=>{if(L){if(e1(L,2))return r2(a2({replace:v},C(L.to),{state:typeof L.to=="object"?a2({},c2,L.to.state):c2,force:m}),P||p)}else L=A2(p,E,!0,v,c2);return C2(p,E,L),L})}function G(V,P){const y=B(V,P);return y?Promise.reject(y):Promise.resolve()}function W(V){const P=O1.values().next().value;return P&&typeof P.runWithContext=="function"?P.runWithContext(V):V()}function u2(V,P){let y;const[E,c2,m]=sm(V,P);y=d6(E.reverse(),"beforeRouteLeave",V,P);for(const H of E)H.leaveGuards.forEach(p=>{y.push(z1(p,V,P))});const v=G.bind(null,V,P);return y.push(v),g2(y).then(()=>{y=[];for(const H of n.list())y.push(z1(H,V,P));return y.push(v),g2(y)}).then(()=>{y=d6(c2,"beforeRouteUpdate",V,P);for(const H of c2)H.updateGuards.forEach(p=>{y.push(z1(p,V,P))});return y.push(v),g2(y)}).then(()=>{y=[];for(const H of m)if(H.beforeEnter)if($2(H.beforeEnter))for(const p of H.beforeEnter)y.push(z1(p,V,P));else y.push(z1(H.beforeEnter,V,P));return y.push(v),g2(y)}).then(()=>(V.matched.forEach(H=>H.enterCallbacks={}),y=d6(m,"beforeRouteEnter",V,P),y.push(v),g2(y))).then(()=>{y=[];for(const H of i.list())y.push(z1(H,V,P));return y.push(v),g2(y)}).catch(H=>e1(H,8)?H:Promise.reject(H))}function C2(V,P,y){t.list().forEach(E=>W(()=>E(V,P,y)))}function A2(V,P,y,E,c2){const m=B(V,P);if(m)return m;const v=P===u1,H=G1?history.state:{};y&&(E||v?s.replace(V.fullPath,a2({scroll:v&&H&&H.scroll},c2)):s.push(V.fullPath,c2)),o.value=V,j2(V,P,y,v),f1()}let F2;function b1(){F2||(F2=s.listen((V,P,y)=>{if(!K3.listening)return;const E=d(V),c2=n2(E);if(c2){r2(a2(c2,{replace:!0}),E).catch(L3);return}l=E;const m=o.value;G1&&Hf(d5(m.fullPath,y.delta),U4()),u2(E,m).catch(v=>e1(v,12)?v:e1(v,2)?(r2(v.to,E).then(H=>{e1(H,20)&&!y.delta&&y.type===P3.pop&&s.go(-1,!1)}).catch(L3),Promise.reject()):(y.delta&&s.go(-y.delta,!1),J(v,E,m))).then(v=>{v=v||A2(E,m,!1),v&&(y.delta&&!e1(v,8)?s.go(-y.delta,!1):y.type===P3.pop&&e1(v,20)&&s.go(-1,!1)),C2(E,m,v)}).catch(L3)}))}let E2=H3(),Z=H3(),i2;function J(V,P,y){f1(V);const E=Z.list();return E.length?E.forEach(c2=>c2(V,P,y)):console.error(V),Promise.reject(V)}function a1(){return i2&&o.value!==u1?Promise.resolve():new Promise((V,P)=>{E2.add([V,P])})}function f1(V){return i2||(i2=!V,b1(),E2.list().forEach(([P,y])=>V?y(V):P()),E2.reset()),V}function j2(V,P,y,E){const{scrollBehavior:c2}=c;if(!G1||!c2)return Promise.resolve();const m=!y&&zf(d5(V.fullPath,0))||(E||!y)&&history.state&&history.state.scroll||null;return z0().then(()=>c2(V,P,m)).then(v=>v&&hf(v)).catch(v=>J(v,V,P))}const N2=V=>s.go(V);let I1;const O1=new Set,K3={currentRoute:o,listening:!0,addRoute:z,removeRoute:N,hasRoute:T,getRoutes:g,resolve:d,options:c,push:k,replace:O,go:N2,back:()=>N2(-1),forward:()=>N2(1),beforeEach:n.add,beforeResolve:i.add,afterEach:t.add,onError:Z.add,isReady:a1,install(V){const P=this;V.component("RouterLink",Jf),V.component("RouterView",dc),V.config.globalProperties.$router=P,Object.defineProperty(V.config.globalProperties,"$route",{enumerable:!0,get:()=>X1(o)}),G1&&!I1&&o.value===u1&&(I1=!0,k(s.location).catch(c2=>{}));const y={};for(const c2 in u1)Object.defineProperty(y,c2,{get:()=>o.value[c2],enumerable:!0});V.provide(b0,P),V.provide(Vc,N7(y)),V.provide(q6,o);const E=V.unmount;O1.add(V),V.unmount=function(){O1.delete(V),O1.size<1&&(l=u1,F2&&F2(),F2=null,o.value=u1,I1=!1,i2=!1),E()}}};function g2(V){return V.reduce((P,y)=>P.then(()=>W(y)),Promise.resolve())}return K3}function sm(c,a){const e=[],r=[],s=[],n=Math.max(a.matched.length,c.matched.length);for(let i=0;i<n;i++){const t=a.matched[i];t&&(c.matched.find(l=>s3(l,t))?r.push(t):e.push(t));const o=c.matched[i];o&&(a.matched.find(l=>s3(l,o))||s.push(o))}return[e,r,s]}const B2=(c,a)=>{const e=c.__vccOpts||c;for(const[r,s]of a)e[r]=s;return e},nm={name:"App",components:{RouterView:dc}},im={id:"app"};function tm(c,a,e,r,s,n){const i=S2("RouterView");return K(),Q("div",im,[e2(i)])}const om=B2(nm,[["render",tm]]),lm="modulepreload",fm=function(c){return"/Internet_programming_1_TP03/"+c},P5={},T5=function(a,e,r){if(!e||e.length===0)return a();const s=document.getElementsByTagName("link");return Promise.all(e.map(n=>{if(n=fm(n),n in P5)return;P5[n]=!0;const i=n.endsWith(".css"),t=i?'[rel="stylesheet"]':"";if(!!r)for(let f=s.length-1;f>=0;f--){const u=s[f];if(u.href===n&&(!i||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${n}"]${t}`))return;const l=document.createElement("link");if(l.rel=i?"stylesheet":lm,i||(l.as="script",l.crossOrigin=""),l.href=n,document.head.appendChild(l),i)return new Promise((f,u)=>{l.addEventListener("load",f),l.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>a()).catch(n=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=n,window.dispatchEvent(i),!i.defaultPrevented)throw n})};function B5(c,a){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(c);a&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(c,s).enumerable})),e.push.apply(e,r)}return e}function _(c){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?B5(Object(e),!0).forEach(function(r){p2(c,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):B5(Object(e)).forEach(function(r){Object.defineProperty(c,r,Object.getOwnPropertyDescriptor(e,r))})}return c}function b4(c){"@babel/helpers - typeof";return b4=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},b4(c)}function mm(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function R5(c,a){for(var e=0;e<a.length;e++){var r=a[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(c,r.key,r)}}function um(c,a,e){return a&&R5(c.prototype,a),e&&R5(c,e),Object.defineProperty(c,"prototype",{writable:!1}),c}function p2(c,a,e){return a in c?Object.defineProperty(c,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[a]=e,c}function N0(c,a){return hm(c)||zm(c,a)||Mc(c,a)||Vm()}function I3(c){return vm(c)||Hm(c)||Mc(c)||pm()}function vm(c){if(Array.isArray(c))return W6(c)}function hm(c){if(Array.isArray(c))return c}function Hm(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function zm(c,a){var e=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(e!=null){var r=[],s=!0,n=!1,i,t;try{for(e=e.call(c);!(s=(i=e.next()).done)&&(r.push(i.value),!(a&&r.length===a));s=!0);}catch(o){n=!0,t=o}finally{try{!s&&e.return!=null&&e.return()}finally{if(n)throw t}}return r}}function Mc(c,a){if(c){if(typeof c=="string")return W6(c,a);var e=Object.prototype.toString.call(c).slice(8,-1);if(e==="Object"&&c.constructor&&(e=c.constructor.name),e==="Map"||e==="Set")return Array.from(c);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return W6(c,a)}}function W6(c,a){(a==null||a>c.length)&&(a=c.length);for(var e=0,r=new Array(a);e<a;e++)r[e]=c[e];return r}function pm(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Vm(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var F5=function(){},w0={},Cc={},gc=null,Lc={mark:F5,measure:F5};try{typeof window<"u"&&(w0=window),typeof document<"u"&&(Cc=document),typeof MutationObserver<"u"&&(gc=MutationObserver),typeof performance<"u"&&(Lc=performance)}catch{}var dm=w0.navigator||{},E5=dm.userAgent,D5=E5===void 0?"":E5,g1=w0,f2=Cc,I5=gc,a4=Lc;g1.document;var l1=!!f2.documentElement&&!!f2.head&&typeof f2.addEventListener=="function"&&typeof f2.createElement=="function",xc=~D5.indexOf("MSIE")||~D5.indexOf("Trident/"),e4,r4,s4,n4,i4,n1="___FONT_AWESOME___",$6=16,bc="fa",Nc="svg-inline--fa",F1="data-fa-i2svg",G6="data-fa-pseudo-element",Mm="data-fa-pseudo-element-pending",S0="data-prefix",y0="data-icon",O5="fontawesome-i2svg",Cm="async",gm=["HTML","HEAD","STYLE","SCRIPT"],wc=function(){try{return!0}catch{return!1}}(),l2="classic",v2="sharp",k0=[l2,v2];function O3(c){return new Proxy(c,{get:function(e,r){return r in e?e[r]:e[l2]}})}var T3=O3((e4={},p2(e4,l2,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),p2(e4,v2,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),e4)),B3=O3((r4={},p2(r4,l2,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),p2(r4,v2,{solid:"fass",regular:"fasr",light:"fasl"}),r4)),R3=O3((s4={},p2(s4,l2,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),p2(s4,v2,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),s4)),Lm=O3((n4={},p2(n4,l2,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),p2(n4,v2,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),n4)),xm=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Sc="fa-layers-text",bm=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Nm=O3((i4={},p2(i4,l2,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),p2(i4,v2,{900:"fass",400:"fasr",300:"fasl"}),i4)),yc=[1,2,3,4,5,6,7,8,9,10],wm=yc.concat([11,12,13,14,15,16,17,18,19,20]),Sm=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],A1={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},F3=new Set;Object.keys(B3[l2]).map(F3.add.bind(F3));Object.keys(B3[v2]).map(F3.add.bind(F3));var ym=[].concat(k0,I3(F3),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",A1.GROUP,A1.SWAP_OPACITY,A1.PRIMARY,A1.SECONDARY]).concat(yc.map(function(c){return"".concat(c,"x")})).concat(wm.map(function(c){return"w-".concat(c)})),b3=g1.FontAwesomeConfig||{};function km(c){var a=f2.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function Am(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}if(f2&&typeof f2.querySelector=="function"){var _m=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];_m.forEach(function(c){var a=N0(c,2),e=a[0],r=a[1],s=Am(km(e));s!=null&&(b3[r]=s)})}var kc={styleDefault:"solid",familyDefault:"classic",cssPrefix:bc,replacementClass:Nc,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};b3.familyPrefix&&(b3.cssPrefix=b3.familyPrefix);var i3=_(_({},kc),b3);i3.autoReplaceSvg||(i3.observeMutations=!1);var F={};Object.keys(kc).forEach(function(c){Object.defineProperty(F,c,{enumerable:!0,set:function(e){i3[c]=e,N3.forEach(function(r){return r(F)})},get:function(){return i3[c]}})});Object.defineProperty(F,"familyPrefix",{enumerable:!0,set:function(a){i3.cssPrefix=a,N3.forEach(function(e){return e(F)})},get:function(){return i3.cssPrefix}});g1.FontAwesomeConfig=F;var N3=[];function Pm(c){return N3.push(c),function(){N3.splice(N3.indexOf(c),1)}}var v1=$6,Z2={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Tm(c){if(!(!c||!l1)){var a=f2.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var e=f2.head.childNodes,r=null,s=e.length-1;s>-1;s--){var n=e[s],i=(n.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(r=n)}return f2.head.insertBefore(a,r),c}}var Bm="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function E3(){for(var c=12,a="";c-- >0;)a+=Bm[Math.random()*62|0];return a}function u3(c){for(var a=[],e=(c||[]).length>>>0;e--;)a[e]=c[e];return a}function A0(c){return c.classList?u3(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function Ac(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Rm(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,'="').concat(Ac(c[e]),'" ')},"").trim()}function q4(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,": ").concat(c[e].trim(),";")},"")}function _0(c){return c.size!==Z2.size||c.x!==Z2.x||c.y!==Z2.y||c.rotate!==Z2.rotate||c.flipX||c.flipY}function Fm(c){var a=c.transform,e=c.containerWidth,r=c.iconWidth,s={transform:"translate(".concat(e/2," 256)")},n="translate(".concat(a.x*32,", ").concat(a.y*32,") "),i="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),t="rotate(".concat(a.rotate," 0 0)"),o={transform:"".concat(n," ").concat(i," ").concat(t)},l={transform:"translate(".concat(r/2*-1," -256)")};return{outer:s,inner:o,path:l}}function Em(c){var a=c.transform,e=c.width,r=e===void 0?$6:e,s=c.height,n=s===void 0?$6:s,i=c.startCentered,t=i===void 0?!1:i,o="";return t&&xc?o+="translate(".concat(a.x/v1-r/2,"em, ").concat(a.y/v1-n/2,"em) "):t?o+="translate(calc(-50% + ".concat(a.x/v1,"em), calc(-50% + ").concat(a.y/v1,"em)) "):o+="translate(".concat(a.x/v1,"em, ").concat(a.y/v1,"em) "),o+="scale(".concat(a.size/v1*(a.flipX?-1:1),", ").concat(a.size/v1*(a.flipY?-1:1),") "),o+="rotate(".concat(a.rotate,"deg) "),o}var Dm=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function _c(){var c=bc,a=Nc,e=F.cssPrefix,r=F.replacementClass,s=Dm;if(e!==c||r!==a){var n=new RegExp("\\.".concat(c,"\\-"),"g"),i=new RegExp("\\--".concat(c,"\\-"),"g"),t=new RegExp("\\.".concat(a),"g");s=s.replace(n,".".concat(e,"-")).replace(i,"--".concat(e,"-")).replace(t,".".concat(r))}return s}var U5=!1;function M6(){F.autoAddCss&&!U5&&(Tm(_c()),U5=!0)}var Im={mixout:function(){return{dom:{css:_c,insertCss:M6}}},hooks:function(){return{beforeDOMElementCreation:function(){M6()},beforeI2svg:function(){M6()}}}},i1=g1||{};i1[n1]||(i1[n1]={});i1[n1].styles||(i1[n1].styles={});i1[n1].hooks||(i1[n1].hooks={});i1[n1].shims||(i1[n1].shims=[]);var U2=i1[n1],Pc=[],Om=function c(){f2.removeEventListener("DOMContentLoaded",c),N4=1,Pc.map(function(a){return a()})},N4=!1;l1&&(N4=(f2.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(f2.readyState),N4||f2.addEventListener("DOMContentLoaded",Om));function Um(c){l1&&(N4?setTimeout(c,0):Pc.push(c))}function U3(c){var a=c.tag,e=c.attributes,r=e===void 0?{}:e,s=c.children,n=s===void 0?[]:s;return typeof c=="string"?Ac(c):"<".concat(a," ").concat(Rm(r),">").concat(n.map(U3).join(""),"</").concat(a,">")}function q5(c,a,e){if(c&&c[a]&&c[a][e])return{prefix:a,iconName:e,icon:c[a][e]}}var qm=function(a,e){return function(r,s,n,i){return a.call(e,r,s,n,i)}},C6=function(a,e,r,s){var n=Object.keys(a),i=n.length,t=s!==void 0?qm(e,s):e,o,l,f;for(r===void 0?(o=1,f=a[n[0]]):(o=0,f=r);o<i;o++)l=n[o],f=t(f,a[l],l,a);return f};function Wm(c){for(var a=[],e=0,r=c.length;e<r;){var s=c.charCodeAt(e++);if(s>=55296&&s<=56319&&e<r){var n=c.charCodeAt(e++);(n&64512)==56320?a.push(((s&1023)<<10)+(n&1023)+65536):(a.push(s),e--)}else a.push(s)}return a}function j6(c){var a=Wm(c);return a.length===1?a[0].toString(16):null}function $m(c,a){var e=c.length,r=c.charCodeAt(a),s;return r>=55296&&r<=56319&&e>a+1&&(s=c.charCodeAt(a+1),s>=56320&&s<=57343)?(r-55296)*1024+s-56320+65536:r}function W5(c){return Object.keys(c).reduce(function(a,e){var r=c[e],s=!!r.icon;return s?a[r.iconName]=r.icon:a[e]=r,a},{})}function K6(c,a){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=e.skipHooks,s=r===void 0?!1:r,n=W5(a);typeof U2.hooks.addPack=="function"&&!s?U2.hooks.addPack(c,W5(a)):U2.styles[c]=_(_({},U2.styles[c]||{}),n),c==="fas"&&K6("fa",a)}var t4,o4,l4,j1=U2.styles,Gm=U2.shims,jm=(t4={},p2(t4,l2,Object.values(R3[l2])),p2(t4,v2,Object.values(R3[v2])),t4),P0=null,Tc={},Bc={},Rc={},Fc={},Ec={},Km=(o4={},p2(o4,l2,Object.keys(T3[l2])),p2(o4,v2,Object.keys(T3[v2])),o4);function Ym(c){return~ym.indexOf(c)}function Qm(c,a){var e=a.split("-"),r=e[0],s=e.slice(1).join("-");return r===c&&s!==""&&!Ym(s)?s:null}var Dc=function(){var a=function(n){return C6(j1,function(i,t,o){return i[o]=C6(t,n,{}),i},{})};Tc=a(function(s,n,i){if(n[3]&&(s[n[3]]=i),n[2]){var t=n[2].filter(function(o){return typeof o=="number"});t.forEach(function(o){s[o.toString(16)]=i})}return s}),Bc=a(function(s,n,i){if(s[i]=i,n[2]){var t=n[2].filter(function(o){return typeof o=="string"});t.forEach(function(o){s[o]=i})}return s}),Ec=a(function(s,n,i){var t=n[2];return s[i]=i,t.forEach(function(o){s[o]=i}),s});var e="far"in j1||F.autoFetchSvg,r=C6(Gm,function(s,n){var i=n[0],t=n[1],o=n[2];return t==="far"&&!e&&(t="fas"),typeof i=="string"&&(s.names[i]={prefix:t,iconName:o}),typeof i=="number"&&(s.unicodes[i.toString(16)]={prefix:t,iconName:o}),s},{names:{},unicodes:{}});Rc=r.names,Fc=r.unicodes,P0=W4(F.styleDefault,{family:F.familyDefault})};Pm(function(c){P0=W4(c.styleDefault,{family:F.familyDefault})});Dc();function T0(c,a){return(Tc[c]||{})[a]}function Xm(c,a){return(Bc[c]||{})[a]}function _1(c,a){return(Ec[c]||{})[a]}function Ic(c){return Rc[c]||{prefix:null,iconName:null}}function Zm(c){var a=Fc[c],e=T0("fas",c);return a||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function L1(){return P0}var B0=function(){return{prefix:null,iconName:null,rest:[]}};function W4(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.family,r=e===void 0?l2:e,s=T3[r][c],n=B3[r][c]||B3[r][s],i=c in U2.styles?c:null;return n||i||null}var $5=(l4={},p2(l4,l2,Object.keys(R3[l2])),p2(l4,v2,Object.keys(R3[v2])),l4);function $4(c){var a,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.skipLookups,s=r===void 0?!1:r,n=(a={},p2(a,l2,"".concat(F.cssPrefix,"-").concat(l2)),p2(a,v2,"".concat(F.cssPrefix,"-").concat(v2)),a),i=null,t=l2;(c.includes(n[l2])||c.some(function(l){return $5[l2].includes(l)}))&&(t=l2),(c.includes(n[v2])||c.some(function(l){return $5[v2].includes(l)}))&&(t=v2);var o=c.reduce(function(l,f){var u=Qm(F.cssPrefix,f);if(j1[f]?(f=jm[t].includes(f)?Lm[t][f]:f,i=f,l.prefix=f):Km[t].indexOf(f)>-1?(i=f,l.prefix=W4(f,{family:t})):u?l.iconName=u:f!==F.replacementClass&&f!==n[l2]&&f!==n[v2]&&l.rest.push(f),!s&&l.prefix&&l.iconName){var h=i==="fa"?Ic(l.iconName):{},z=_1(l.prefix,l.iconName);h.prefix&&(i=null),l.iconName=h.iconName||z||l.iconName,l.prefix=h.prefix||l.prefix,l.prefix==="far"&&!j1.far&&j1.fas&&!F.autoFetchSvg&&(l.prefix="fas")}return l},B0());return(c.includes("fa-brands")||c.includes("fab"))&&(o.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(o.prefix="fad"),!o.prefix&&t===v2&&(j1.fass||F.autoFetchSvg)&&(o.prefix="fass",o.iconName=_1(o.prefix,o.iconName)||o.iconName),(o.prefix==="fa"||i==="fa")&&(o.prefix=L1()||"fas"),o}var Jm=function(){function c(){mm(this,c),this.definitions={}}return um(c,[{key:"add",value:function(){for(var e=this,r=arguments.length,s=new Array(r),n=0;n<r;n++)s[n]=arguments[n];var i=s.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(t){e.definitions[t]=_(_({},e.definitions[t]||{}),i[t]),K6(t,i[t]);var o=R3[l2][t];o&&K6(o,i[t]),Dc()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,r){var s=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(s).map(function(n){var i=s[n],t=i.prefix,o=i.iconName,l=i.icon,f=l[2];e[t]||(e[t]={}),f.length>0&&f.forEach(function(u){typeof u=="string"&&(e[t][u]=l)}),e[t][o]=l}),e}}]),c}(),G5=[],K1={},c3={},cu=Object.keys(c3);function au(c,a){var e=a.mixoutsTo;return G5=c,K1={},Object.keys(c3).forEach(function(r){cu.indexOf(r)===-1&&delete c3[r]}),G5.forEach(function(r){var s=r.mixout?r.mixout():{};if(Object.keys(s).forEach(function(i){typeof s[i]=="function"&&(e[i]=s[i]),b4(s[i])==="object"&&Object.keys(s[i]).forEach(function(t){e[i]||(e[i]={}),e[i][t]=s[i][t]})}),r.hooks){var n=r.hooks();Object.keys(n).forEach(function(i){K1[i]||(K1[i]=[]),K1[i].push(n[i])})}r.provides&&r.provides(c3)}),e}function Y6(c,a){for(var e=arguments.length,r=new Array(e>2?e-2:0),s=2;s<e;s++)r[s-2]=arguments[s];var n=K1[c]||[];return n.forEach(function(i){a=i.apply(null,[a].concat(r))}),a}function E1(c){for(var a=arguments.length,e=new Array(a>1?a-1:0),r=1;r<a;r++)e[r-1]=arguments[r];var s=K1[c]||[];s.forEach(function(n){n.apply(null,e)})}function t1(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return c3[c]?c3[c].apply(null,a):void 0}function Q6(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,e=c.prefix||L1();if(a)return a=_1(e,a)||a,q5(Oc.definitions,e,a)||q5(U2.styles,e,a)}var Oc=new Jm,eu=function(){F.autoReplaceSvg=!1,F.observeMutations=!1,E1("noAuto")},ru={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return l1?(E1("beforeI2svg",a),t1("pseudoElements2svg",a),t1("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot;F.autoReplaceSvg===!1&&(F.autoReplaceSvg=!0),F.observeMutations=!0,Um(function(){nu({autoReplaceSvgRoot:e}),E1("watch",a)})}},su={icon:function(a){if(a===null)return null;if(b4(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:_1(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var e=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],r=W4(a[0]);return{prefix:r,iconName:_1(r,e)||e}}if(typeof a=="string"&&(a.indexOf("".concat(F.cssPrefix,"-"))>-1||a.match(xm))){var s=$4(a.split(" "),{skipLookups:!0});return{prefix:s.prefix||L1(),iconName:_1(s.prefix,s.iconName)||s.iconName}}if(typeof a=="string"){var n=L1();return{prefix:n,iconName:_1(n,a)||a}}}},R2={noAuto:eu,config:F,dom:ru,parse:su,library:Oc,findIconDefinition:Q6,toHtml:U3},nu=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot,r=e===void 0?f2:e;(Object.keys(U2.styles).length>0||F.autoFetchSvg)&&l1&&F.autoReplaceSvg&&R2.dom.i2svg({node:r})};function G4(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(r){return U3(r)})}}),Object.defineProperty(c,"node",{get:function(){if(l1){var r=f2.createElement("div");return r.innerHTML=c.html,r.children}}}),c}function iu(c){var a=c.children,e=c.main,r=c.mask,s=c.attributes,n=c.styles,i=c.transform;if(_0(i)&&e.found&&!r.found){var t=e.width,o=e.height,l={x:t/o/2,y:.5};s.style=q4(_(_({},n),{},{"transform-origin":"".concat(l.x+i.x/16,"em ").concat(l.y+i.y/16,"em")}))}return[{tag:"svg",attributes:s,children:a}]}function tu(c){var a=c.prefix,e=c.iconName,r=c.children,s=c.attributes,n=c.symbol,i=n===!0?"".concat(a,"-").concat(F.cssPrefix,"-").concat(e):n;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:_(_({},s),{},{id:i}),children:r}]}]}function R0(c){var a=c.icons,e=a.main,r=a.mask,s=c.prefix,n=c.iconName,i=c.transform,t=c.symbol,o=c.title,l=c.maskId,f=c.titleId,u=c.extra,h=c.watchable,z=h===void 0?!1:h,N=r.found?r:e,g=N.width,T=N.height,d=s==="fak",C=[F.replacementClass,n?"".concat(F.cssPrefix,"-").concat(n):""].filter(function(W){return u.classes.indexOf(W)===-1}).filter(function(W){return W!==""||!!W}).concat(u.classes).join(" "),B={children:[],attributes:_(_({},u.attributes),{},{"data-prefix":s,"data-icon":n,class:C,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(g," ").concat(T)})},k=d&&!~u.classes.indexOf("fa-fw")?{width:"".concat(g/T*16*.0625,"em")}:{};z&&(B.attributes[F1]=""),o&&(B.children.push({tag:"title",attributes:{id:B.attributes["aria-labelledby"]||"title-".concat(f||E3())},children:[o]}),delete B.attributes.title);var O=_(_({},B),{},{prefix:s,iconName:n,main:e,mask:r,maskId:l,transform:i,symbol:t,styles:_(_({},k),u.styles)}),n2=r.found&&e.found?t1("generateAbstractMask",O)||{children:[],attributes:{}}:t1("generateAbstractIcon",O)||{children:[],attributes:{}},r2=n2.children,G=n2.attributes;return O.children=r2,O.attributes=G,t?tu(O):iu(O)}function j5(c){var a=c.content,e=c.width,r=c.height,s=c.transform,n=c.title,i=c.extra,t=c.watchable,o=t===void 0?!1:t,l=_(_(_({},i.attributes),n?{title:n}:{}),{},{class:i.classes.join(" ")});o&&(l[F1]="");var f=_({},i.styles);_0(s)&&(f.transform=Em({transform:s,startCentered:!0,width:e,height:r}),f["-webkit-transform"]=f.transform);var u=q4(f);u.length>0&&(l.style=u);var h=[];return h.push({tag:"span",attributes:l,children:[a]}),n&&h.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),h}function ou(c){var a=c.content,e=c.title,r=c.extra,s=_(_(_({},r.attributes),e?{title:e}:{}),{},{class:r.classes.join(" ")}),n=q4(r.styles);n.length>0&&(s.style=n);var i=[];return i.push({tag:"span",attributes:s,children:[a]}),e&&i.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),i}var g6=U2.styles;function X6(c){var a=c[0],e=c[1],r=c.slice(4),s=N0(r,1),n=s[0],i=null;return Array.isArray(n)?i={tag:"g",attributes:{class:"".concat(F.cssPrefix,"-").concat(A1.GROUP)},children:[{tag:"path",attributes:{class:"".concat(F.cssPrefix,"-").concat(A1.SECONDARY),fill:"currentColor",d:n[0]}},{tag:"path",attributes:{class:"".concat(F.cssPrefix,"-").concat(A1.PRIMARY),fill:"currentColor",d:n[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:n}},{found:!0,width:a,height:e,icon:i}}var lu={found:!1,width:512,height:512};function fu(c,a){!wc&&!F.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function Z6(c,a){var e=a;return a==="fa"&&F.styleDefault!==null&&(a=L1()),new Promise(function(r,s){if(t1("missingIconAbstract"),e==="fa"){var n=Ic(c)||{};c=n.iconName||c,a=n.prefix||a}if(c&&a&&g6[a]&&g6[a][c]){var i=g6[a][c];return r(X6(i))}fu(c,a),r(_(_({},lu),{},{icon:F.showMissingIcons&&c?t1("missingIconAbstract")||{}:{}}))})}var K5=function(){},J6=F.measurePerformance&&a4&&a4.mark&&a4.measure?a4:{mark:K5,measure:K5},V3='FA "6.4.2"',mu=function(a){return J6.mark("".concat(V3," ").concat(a," begins")),function(){return Uc(a)}},Uc=function(a){J6.mark("".concat(V3," ").concat(a," ends")),J6.measure("".concat(V3," ").concat(a),"".concat(V3," ").concat(a," begins"),"".concat(V3," ").concat(a," ends"))},F0={begin:mu,end:Uc},p4=function(){};function Y5(c){var a=c.getAttribute?c.getAttribute(F1):null;return typeof a=="string"}function uu(c){var a=c.getAttribute?c.getAttribute(S0):null,e=c.getAttribute?c.getAttribute(y0):null;return a&&e}function vu(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(F.replacementClass)}function hu(){if(F.autoReplaceSvg===!0)return V4.replace;var c=V4[F.autoReplaceSvg];return c||V4.replace}function Hu(c){return f2.createElementNS("http://www.w3.org/2000/svg",c)}function zu(c){return f2.createElement(c)}function qc(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.ceFn,r=e===void 0?c.tag==="svg"?Hu:zu:e;if(typeof c=="string")return f2.createTextNode(c);var s=r(c.tag);Object.keys(c.attributes||[]).forEach(function(i){s.setAttribute(i,c.attributes[i])});var n=c.children||[];return n.forEach(function(i){s.appendChild(qc(i,{ceFn:r}))}),s}function pu(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var V4={replace:function(a){var e=a[0];if(e.parentNode)if(a[1].forEach(function(s){e.parentNode.insertBefore(qc(s),e)}),e.getAttribute(F1)===null&&F.keepOriginalSource){var r=f2.createComment(pu(e));e.parentNode.replaceChild(r,e)}else e.remove()},nest:function(a){var e=a[0],r=a[1];if(~A0(e).indexOf(F.replacementClass))return V4.replace(a);var s=new RegExp("".concat(F.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var n=r[0].attributes.class.split(" ").reduce(function(t,o){return o===F.replacementClass||o.match(s)?t.toSvg.push(o):t.toNode.push(o),t},{toNode:[],toSvg:[]});r[0].attributes.class=n.toSvg.join(" "),n.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",n.toNode.join(" "))}var i=r.map(function(t){return U3(t)}).join(`
`);e.setAttribute(F1,""),e.innerHTML=i}};function Q5(c){c()}function Wc(c,a){var e=typeof a=="function"?a:p4;if(c.length===0)e();else{var r=Q5;F.mutateApproach===Cm&&(r=g1.requestAnimationFrame||Q5),r(function(){var s=hu(),n=F0.begin("mutate");c.map(s),n(),e()})}}var E0=!1;function $c(){E0=!0}function c0(){E0=!1}var w4=null;function X5(c){if(I5&&F.observeMutations){var a=c.treeCallback,e=a===void 0?p4:a,r=c.nodeCallback,s=r===void 0?p4:r,n=c.pseudoElementsCallback,i=n===void 0?p4:n,t=c.observeMutationsRoot,o=t===void 0?f2:t;w4=new I5(function(l){if(!E0){var f=L1();u3(l).forEach(function(u){if(u.type==="childList"&&u.addedNodes.length>0&&!Y5(u.addedNodes[0])&&(F.searchPseudoElements&&i(u.target),e(u.target)),u.type==="attributes"&&u.target.parentNode&&F.searchPseudoElements&&i(u.target.parentNode),u.type==="attributes"&&Y5(u.target)&&~Sm.indexOf(u.attributeName))if(u.attributeName==="class"&&uu(u.target)){var h=$4(A0(u.target)),z=h.prefix,N=h.iconName;u.target.setAttribute(S0,z||f),N&&u.target.setAttribute(y0,N)}else vu(u.target)&&s(u.target)})}}),l1&&w4.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Vu(){w4&&w4.disconnect()}function du(c){var a=c.getAttribute("style"),e=[];return a&&(e=a.split(";").reduce(function(r,s){var n=s.split(":"),i=n[0],t=n.slice(1);return i&&t.length>0&&(r[i]=t.join(":").trim()),r},{})),e}function Mu(c){var a=c.getAttribute("data-prefix"),e=c.getAttribute("data-icon"),r=c.innerText!==void 0?c.innerText.trim():"",s=$4(A0(c));return s.prefix||(s.prefix=L1()),a&&e&&(s.prefix=a,s.iconName=e),s.iconName&&s.prefix||(s.prefix&&r.length>0&&(s.iconName=Xm(s.prefix,c.innerText)||T0(s.prefix,j6(c.innerText))),!s.iconName&&F.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=c.firstChild.data)),s}function Cu(c){var a=u3(c.attributes).reduce(function(s,n){return s.name!=="class"&&s.name!=="style"&&(s[n.name]=n.value),s},{}),e=c.getAttribute("title"),r=c.getAttribute("data-fa-title-id");return F.autoA11y&&(e?a["aria-labelledby"]="".concat(F.replacementClass,"-title-").concat(r||E3()):(a["aria-hidden"]="true",a.focusable="false")),a}function gu(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Z2,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Z5(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=Mu(c),r=e.iconName,s=e.prefix,n=e.rest,i=Cu(c),t=Y6("parseNodeAttributes",{},c),o=a.styleParser?du(c):[];return _({iconName:r,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:s,transform:Z2,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:n,styles:o,attributes:i}},t)}var Lu=U2.styles;function Gc(c){var a=F.autoReplaceSvg==="nest"?Z5(c,{styleParser:!1}):Z5(c);return~a.extra.classes.indexOf(Sc)?t1("generateLayersText",c,a):t1("generateSvgReplacementMutation",c,a)}var x1=new Set;k0.map(function(c){x1.add("fa-".concat(c))});Object.keys(T3[l2]).map(x1.add.bind(x1));Object.keys(T3[v2]).map(x1.add.bind(x1));x1=I3(x1);function J5(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!l1)return Promise.resolve();var e=f2.documentElement.classList,r=function(u){return e.add("".concat(O5,"-").concat(u))},s=function(u){return e.remove("".concat(O5,"-").concat(u))},n=F.autoFetchSvg?x1:k0.map(function(f){return"fa-".concat(f)}).concat(Object.keys(Lu));n.includes("fa")||n.push("fa");var i=[".".concat(Sc,":not([").concat(F1,"])")].concat(n.map(function(f){return".".concat(f,":not([").concat(F1,"])")})).join(", ");if(i.length===0)return Promise.resolve();var t=[];try{t=u3(c.querySelectorAll(i))}catch{}if(t.length>0)r("pending"),s("complete");else return Promise.resolve();var o=F0.begin("onTree"),l=t.reduce(function(f,u){try{var h=Gc(u);h&&f.push(h)}catch(z){wc||z.name==="MissingIcon"&&console.error(z)}return f},[]);return new Promise(function(f,u){Promise.all(l).then(function(h){Wc(h,function(){r("active"),r("complete"),s("pending"),typeof a=="function"&&a(),o(),f()})}).catch(function(h){o(),u(h)})})}function xu(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Gc(c).then(function(e){e&&Wc([e],a)})}function bu(c){return function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(a||{}).icon?a:Q6(a||{}),s=e.mask;return s&&(s=(s||{}).icon?s:Q6(s||{})),c(r,_(_({},e),{},{mask:s}))}}var Nu=function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,s=r===void 0?Z2:r,n=e.symbol,i=n===void 0?!1:n,t=e.mask,o=t===void 0?null:t,l=e.maskId,f=l===void 0?null:l,u=e.title,h=u===void 0?null:u,z=e.titleId,N=z===void 0?null:z,g=e.classes,T=g===void 0?[]:g,d=e.attributes,C=d===void 0?{}:d,B=e.styles,k=B===void 0?{}:B;if(a){var O=a.prefix,n2=a.iconName,r2=a.icon;return G4(_({type:"icon"},a),function(){return E1("beforeDOMElementCreation",{iconDefinition:a,params:e}),F.autoA11y&&(h?C["aria-labelledby"]="".concat(F.replacementClass,"-title-").concat(N||E3()):(C["aria-hidden"]="true",C.focusable="false")),R0({icons:{main:X6(r2),mask:o?X6(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:O,iconName:n2,transform:_(_({},Z2),s),symbol:i,title:h,maskId:f,titleId:N,extra:{attributes:C,styles:k,classes:T}})})}},wu={mixout:function(){return{icon:bu(Nu)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=J5,e.nodeCallback=xu,e}}},provides:function(a){a.i2svg=function(e){var r=e.node,s=r===void 0?f2:r,n=e.callback,i=n===void 0?function(){}:n;return J5(s,i)},a.generateSvgReplacementMutation=function(e,r){var s=r.iconName,n=r.title,i=r.titleId,t=r.prefix,o=r.transform,l=r.symbol,f=r.mask,u=r.maskId,h=r.extra;return new Promise(function(z,N){Promise.all([Z6(s,t),f.iconName?Z6(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(g){var T=N0(g,2),d=T[0],C=T[1];z([e,R0({icons:{main:d,mask:C},prefix:t,iconName:s,transform:o,symbol:l,maskId:u,title:n,titleId:i,extra:h,watchable:!0})])}).catch(N)})},a.generateAbstractIcon=function(e){var r=e.children,s=e.attributes,n=e.main,i=e.transform,t=e.styles,o=q4(t);o.length>0&&(s.style=o);var l;return _0(i)&&(l=t1("generateAbstractTransformGrouping",{main:n,transform:i,containerWidth:n.width,iconWidth:n.width})),r.push(l||n.icon),{children:r,attributes:s}}}},Su={mixout:function(){return{layer:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.classes,n=s===void 0?[]:s;return G4({type:"layer"},function(){E1("beforeDOMElementCreation",{assembler:e,params:r});var i=[];return e(function(t){Array.isArray(t)?t.map(function(o){i=i.concat(o.abstract)}):i=i.concat(t.abstract)}),[{tag:"span",attributes:{class:["".concat(F.cssPrefix,"-layers")].concat(I3(n)).join(" ")},children:i}]})}}}},yu={mixout:function(){return{counter:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.title,n=s===void 0?null:s,i=r.classes,t=i===void 0?[]:i,o=r.attributes,l=o===void 0?{}:o,f=r.styles,u=f===void 0?{}:f;return G4({type:"counter",content:e},function(){return E1("beforeDOMElementCreation",{content:e,params:r}),ou({content:e.toString(),title:n,extra:{attributes:l,styles:u,classes:["".concat(F.cssPrefix,"-layers-counter")].concat(I3(t))}})})}}}},ku={mixout:function(){return{text:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.transform,n=s===void 0?Z2:s,i=r.title,t=i===void 0?null:i,o=r.classes,l=o===void 0?[]:o,f=r.attributes,u=f===void 0?{}:f,h=r.styles,z=h===void 0?{}:h;return G4({type:"text",content:e},function(){return E1("beforeDOMElementCreation",{content:e,params:r}),j5({content:e,transform:_(_({},Z2),n),title:t,extra:{attributes:u,styles:z,classes:["".concat(F.cssPrefix,"-layers-text")].concat(I3(l))}})})}}},provides:function(a){a.generateLayersText=function(e,r){var s=r.title,n=r.transform,i=r.extra,t=null,o=null;if(xc){var l=parseInt(getComputedStyle(e).fontSize,10),f=e.getBoundingClientRect();t=f.width/l,o=f.height/l}return F.autoA11y&&!s&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,j5({content:e.innerHTML,width:t,height:o,transform:n,title:s,extra:i,watchable:!0})])}}},Au=new RegExp('"',"ug"),c7=[1105920,1112319];function _u(c){var a=c.replace(Au,""),e=$m(a,0),r=e>=c7[0]&&e<=c7[1],s=a.length===2?a[0]===a[1]:!1;return{value:j6(s?a[0]:a),isSecondary:r||s}}function a7(c,a){var e="".concat(Mm).concat(a.replace(":","-"));return new Promise(function(r,s){if(c.getAttribute(e)!==null)return r();var n=u3(c.children),i=n.filter(function(r2){return r2.getAttribute(G6)===a})[0],t=g1.getComputedStyle(c,a),o=t.getPropertyValue("font-family").match(bm),l=t.getPropertyValue("font-weight"),f=t.getPropertyValue("content");if(i&&!o)return c.removeChild(i),r();if(o&&f!=="none"&&f!==""){var u=t.getPropertyValue("content"),h=~["Sharp"].indexOf(o[2])?v2:l2,z=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(o[2])?B3[h][o[2].toLowerCase()]:Nm[h][l],N=_u(u),g=N.value,T=N.isSecondary,d=o[0].startsWith("FontAwesome"),C=T0(z,g),B=C;if(d){var k=Zm(g);k.iconName&&k.prefix&&(C=k.iconName,z=k.prefix)}if(C&&!T&&(!i||i.getAttribute(S0)!==z||i.getAttribute(y0)!==B)){c.setAttribute(e,B),i&&c.removeChild(i);var O=gu(),n2=O.extra;n2.attributes[G6]=a,Z6(C,z).then(function(r2){var G=R0(_(_({},O),{},{icons:{main:r2,mask:B0()},prefix:z,iconName:B,extra:n2,watchable:!0})),W=f2.createElementNS("http://www.w3.org/2000/svg","svg");a==="::before"?c.insertBefore(W,c.firstChild):c.appendChild(W),W.outerHTML=G.map(function(u2){return U3(u2)}).join(`