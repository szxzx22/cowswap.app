import{g as v}from"./@1inch-pDUeek01.js";function _(e,n){for(var r=0;r<n.length;r++){const s=n[r];if(typeof s!="string"&&!Array.isArray(s)){for(const c in s)if(c!=="default"&&!(c in e)){const i=Object.getOwnPropertyDescriptor(s,c);i&&Object.defineProperty(e,c,i.get?i:{enumerable:!0,get:()=>s[c]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var F={space:"",cycles:!1,replacer:(e,n)=>n,stringify:JSON.stringify},o={isArray:Array.isArray,assign:Object.assign,isObject:e=>typeof e=="object",isFunction:e=>typeof e=="function",isBoolean:e=>typeof e=="boolean",isRegex:e=>e instanceof RegExp,keys:Object.keys};const g=F,D=o.isFunction,N=o.isBoolean,R=o.isObject,B=o.isArray,E=o.isRegex,J=o.assign,P=o.keys;function w(e){return e==null?e:E(e)?e.toString():e.toJSON?e.toJSON():e}function z(e,n){n=n||J({},g),D(n)&&(n={compare:n});const r=n.space||g.space,s=N(n.cycles)?n.cycles:g.cycles,c=n.replacer||g.replacer,i=n.stringify||g.stringify,A=n.compare&&function(O){return function(m){return function(k,t){const f={key:k,value:m[k]},u={key:t,value:m[t]};return O(f,u)}}}(n.compare);s||i(e);const p=[];return function O(m,k,t,f){const u=r?`
`+new Array(f+1).join(r):"",j=r?": ":":";if(t=w(t),t=c.call(m,k,t),t!==void 0){if(!R(t)||t===null)return i(t);if(B(t)){const l=[];for(let a=0;a<t.length;a++){const y=O(t,a,t[a],f+1)||i(null);l.push(u+r+y)}return"["+l.join(",")+u+"]"}else{if(s){if(p.indexOf(t)!==-1)return i("[Circular]");p.push(t)}const l=P(t).sort(A&&A(t)),a=[];for(let y=0;y<l.length;y++){const x=l[y],S=O(t,x,t[x],f+1);if(!S)continue;const h=i(x)+j+S;a.push(u+r+h)}return p.splice(p.indexOf(t),1),"{"+a.join(",")+u+"}"}}}({"":e},"",e,0)}var b=z;const C=v(b),K=_({__proto__:null,default:C},[b]);export{K as i};
