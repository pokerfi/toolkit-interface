(self.webpackChunk=self.webpackChunk||[]).push([[913],{48583:function(O,d,b){"use strict";var t=b(27418);/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */function P(s,l){if(s===l)return 0;for(var _=s.length,B=l.length,K=0,q=Math.min(_,B);K<q;++K)if(s[K]!==l[K]){_=s[K],B=l[K];break}return _<B?-1:B<_?1:0}function E(s){return b.g.Buffer&&typeof b.g.Buffer.isBuffer=="function"?b.g.Buffer.isBuffer(s):!!(s!=null&&s._isBuffer)}var w=b(30069),a=Object.prototype.hasOwnProperty,n=Array.prototype.slice,h=function(){return function(){}.name==="foo"}();function g(s){return Object.prototype.toString.call(s)}function o(s){return E(s)||typeof b.g.ArrayBuffer!="function"?!1:typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(s):s?!!(s instanceof DataView||s.buffer&&s.buffer instanceof ArrayBuffer):!1}var r=O.exports=v,c=/\s*function\s+([^\(\s]*)\s*/;function S(s){if(!!w.isFunction(s)){if(h)return s.name;var l=s.toString(),_=l.match(c);return _&&_[1]}}r.AssertionError=function(l){this.name="AssertionError",this.actual=l.actual,this.expected=l.expected,this.operator=l.operator,l.message?(this.message=l.message,this.generatedMessage=!1):(this.message=e(this),this.generatedMessage=!0);var _=l.stackStartFunction||u;if(Error.captureStackTrace)Error.captureStackTrace(this,_);else{var B=new Error;if(B.stack){var K=B.stack,q=S(_),L=K.indexOf(`
`+q);if(L>=0){var i=K.indexOf(`
`,L+1);K=K.substring(i+1)}this.stack=K}}},w.inherits(r.AssertionError,Error);function y(s,l){return typeof s=="string"?s.length<l?s:s.slice(0,l):s}function f(s){if(h||!w.isFunction(s))return w.inspect(s);var l=S(s),_=l?": "+l:"";return"[Function"+_+"]"}function e(s){return y(f(s.actual),128)+" "+s.operator+" "+y(f(s.expected),128)}function u(s,l,_,B,K){throw new r.AssertionError({message:_,actual:s,expected:l,operator:B,stackStartFunction:K})}r.fail=u;function v(s,l){s||u(s,!0,l,"==",r.ok)}r.ok=v,r.equal=function(l,_,B){l!=_&&u(l,_,B,"==",r.equal)},r.notEqual=function(l,_,B){l==_&&u(l,_,B,"!=",r.notEqual)},r.deepEqual=function(l,_,B){m(l,_,!1)||u(l,_,B,"deepEqual",r.deepEqual)},r.deepStrictEqual=function(l,_,B){m(l,_,!0)||u(l,_,B,"deepStrictEqual",r.deepStrictEqual)};function m(s,l,_,B){if(s===l)return!0;if(E(s)&&E(l))return P(s,l)===0;if(w.isDate(s)&&w.isDate(l))return s.getTime()===l.getTime();if(w.isRegExp(s)&&w.isRegExp(l))return s.source===l.source&&s.global===l.global&&s.multiline===l.multiline&&s.lastIndex===l.lastIndex&&s.ignoreCase===l.ignoreCase;if((s===null||typeof s!="object")&&(l===null||typeof l!="object"))return _?s===l:s==l;if(o(s)&&o(l)&&g(s)===g(l)&&!(s instanceof Float32Array||s instanceof Float64Array))return P(new Uint8Array(s.buffer),new Uint8Array(l.buffer))===0;if(E(s)!==E(l))return!1;B=B||{actual:[],expected:[]};var K=B.actual.indexOf(s);return K!==-1&&K===B.expected.indexOf(l)?!0:(B.actual.push(s),B.expected.push(l),I(s,l,_,B))}function x(s){return Object.prototype.toString.call(s)=="[object Arguments]"}function I(s,l,_,B){if(s==null||l===null||l===void 0)return!1;if(w.isPrimitive(s)||w.isPrimitive(l))return s===l;if(_&&Object.getPrototypeOf(s)!==Object.getPrototypeOf(l))return!1;var K=x(s),q=x(l);if(K&&!q||!K&&q)return!1;if(K)return s=n.call(s),l=n.call(l),m(s,l,_);var L=F(s),i=F(l),p,A;if(L.length!==i.length)return!1;for(L.sort(),i.sort(),A=L.length-1;A>=0;A--)if(L[A]!==i[A])return!1;for(A=L.length-1;A>=0;A--)if(p=L[A],!m(s[p],l[p],_,B))return!1;return!0}r.notDeepEqual=function(l,_,B){m(l,_,!1)&&u(l,_,B,"notDeepEqual",r.notDeepEqual)},r.notDeepStrictEqual=T;function T(s,l,_){m(s,l,!0)&&u(s,l,_,"notDeepStrictEqual",T)}r.strictEqual=function(l,_,B){l!==_&&u(l,_,B,"===",r.strictEqual)},r.notStrictEqual=function(l,_,B){l===_&&u(l,_,B,"!==",r.notStrictEqual)};function k(s,l){if(!s||!l)return!1;if(Object.prototype.toString.call(l)=="[object RegExp]")return l.test(s);try{if(s instanceof l)return!0}catch(_){}return Error.isPrototypeOf(l)?!1:l.call({},s)===!0}function N(s){var l;try{s()}catch(_){l=_}return l}function M(s,l,_,B){var K;if(typeof l!="function")throw new TypeError('"block" argument must be a function');typeof _=="string"&&(B=_,_=null),K=N(l),B=(_&&_.name?" ("+_.name+").":".")+(B?" "+B:"."),s&&!K&&u(K,_,"Missing expected exception"+B);var q=typeof B=="string",L=!s&&w.isError(K),i=!s&&K&&!_;if((L&&q&&k(K,_)||i)&&u(K,_,"Got unwanted exception"+B),s&&K&&_&&!k(K,_)||!s&&K)throw K}r.throws=function(s,l,_){M(!0,s,l,_)},r.doesNotThrow=function(s,l,_){M(!1,s,l,_)},r.ifError=function(s){if(s)throw s};function V(s,l){s||u(s,!0,l,"==",V)}r.strict=t(V,r,{equal:r.strictEqual,deepEqual:r.deepStrictEqual,notEqual:r.notStrictEqual,notDeepEqual:r.notDeepStrictEqual}),r.strict.strict=r.strict;var F=Object.keys||function(s){var l=[];for(var _ in s)a.call(s,_)&&l.push(_);return l}},16076:function(O){typeof Object.create=="function"?O.exports=function(b,t){b.super_=t,b.prototype=Object.create(t.prototype,{constructor:{value:b,enumerable:!1,writable:!0,configurable:!0}})}:O.exports=function(b,t){b.super_=t;var P=function(){};P.prototype=t.prototype,b.prototype=new P,b.prototype.constructor=b}},52014:function(O){O.exports=function(b){return b&&typeof b=="object"&&typeof b.copy=="function"&&typeof b.fill=="function"&&typeof b.readUInt8=="function"}},30069:function(O,d,b){var t=b(34155),P=/%[sdj%]/g;d.format=function(i){if(!I(i)){for(var p=[],A=0;A<arguments.length;A++)p.push(a(arguments[A]));return p.join(" ")}for(var A=1,R=arguments,D=R.length,j=String(i).replace(P,function(U){if(U==="%%")return"%";if(A>=D)return U;switch(U){case"%s":return String(R[A++]);case"%d":return Number(R[A++]);case"%j":try{return JSON.stringify(R[A++])}catch(C){return"[Circular]"}default:return U}}),z=R[A];A<D;z=R[++A])v(z)||!M(z)?j+=" "+z:j+=" "+a(z);return j},d.deprecate=function(i,p){if(k(b.g.process))return function(){return d.deprecate(i,p).apply(this,arguments)};if(t.noDeprecation===!0)return i;var A=!1;function R(){if(!A){if(t.throwDeprecation)throw new Error(p);t.traceDeprecation?console.trace(p):console.error(p),A=!0}return i.apply(this,arguments)}return R};var E={},w;d.debuglog=function(i){if(k(w)&&(w={NODE_ENV:"production"}.NODE_DEBUG||""),i=i.toUpperCase(),!E[i])if(new RegExp("\\b"+i+"\\b","i").test(w)){var p=t.pid;E[i]=function(){var A=d.format.apply(d,arguments);console.error("%s %d: %s",i,p,A)}}else E[i]=function(){};return E[i]};function a(i,p){var A={seen:[],stylize:h};return arguments.length>=3&&(A.depth=arguments[2]),arguments.length>=4&&(A.colors=arguments[3]),u(p)?A.showHidden=p:p&&d._extend(A,p),k(A.showHidden)&&(A.showHidden=!1),k(A.depth)&&(A.depth=2),k(A.colors)&&(A.colors=!1),k(A.customInspect)&&(A.customInspect=!0),A.colors&&(A.stylize=n),o(A,i,A.depth)}d.inspect=a,a.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},a.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"};function n(i,p){var A=a.styles[p];return A?"["+a.colors[A][0]+"m"+i+"["+a.colors[A][1]+"m":i}function h(i,p){return i}function g(i){var p={};return i.forEach(function(A,R){p[A]=!0}),p}function o(i,p,A){if(i.customInspect&&p&&s(p.inspect)&&p.inspect!==d.inspect&&!(p.constructor&&p.constructor.prototype===p)){var R=p.inspect(A,i);return I(R)||(R=o(i,R,A)),R}var D=r(i,p);if(D)return D;var j=Object.keys(p),z=g(j);if(i.showHidden&&(j=Object.getOwnPropertyNames(p)),F(p)&&(j.indexOf("message")>=0||j.indexOf("description")>=0))return c(p);if(j.length===0){if(s(p)){var U=p.name?": "+p.name:"";return i.stylize("[Function"+U+"]","special")}if(N(p))return i.stylize(RegExp.prototype.toString.call(p),"regexp");if(V(p))return i.stylize(Date.prototype.toString.call(p),"date");if(F(p))return c(p)}var C="",H=!1,Z=["{","}"];if(e(p)&&(H=!0,Z=["[","]"]),s(p)){var G=p.name?": "+p.name:"";C=" [Function"+G+"]"}if(N(p)&&(C=" "+RegExp.prototype.toString.call(p)),V(p)&&(C=" "+Date.prototype.toUTCString.call(p)),F(p)&&(C=" "+c(p)),j.length===0&&(!H||p.length==0))return Z[0]+C+Z[1];if(A<0)return N(p)?i.stylize(RegExp.prototype.toString.call(p),"regexp"):i.stylize("[Object]","special");i.seen.push(p);var Y;return H?Y=S(i,p,A,z,j):Y=j.map(function($){return y(i,p,A,z,$,H)}),i.seen.pop(),f(Y,C,Z)}function r(i,p){if(k(p))return i.stylize("undefined","undefined");if(I(p)){var A="'"+JSON.stringify(p).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return i.stylize(A,"string")}if(x(p))return i.stylize(""+p,"number");if(u(p))return i.stylize(""+p,"boolean");if(v(p))return i.stylize("null","null")}function c(i){return"["+Error.prototype.toString.call(i)+"]"}function S(i,p,A,R,D){for(var j=[],z=0,U=p.length;z<U;++z)L(p,String(z))?j.push(y(i,p,A,R,String(z),!0)):j.push("");return D.forEach(function(C){C.match(/^\d+$/)||j.push(y(i,p,A,R,C,!0))}),j}function y(i,p,A,R,D,j){var z,U,C;if(C=Object.getOwnPropertyDescriptor(p,D)||{value:p[D]},C.get?C.set?U=i.stylize("[Getter/Setter]","special"):U=i.stylize("[Getter]","special"):C.set&&(U=i.stylize("[Setter]","special")),L(R,D)||(z="["+D+"]"),U||(i.seen.indexOf(C.value)<0?(v(A)?U=o(i,C.value,null):U=o(i,C.value,A-1),U.indexOf(`
`)>-1&&(j?U=U.split(`
`).map(function(H){return"  "+H}).join(`
`).substr(2):U=`
`+U.split(`
`).map(function(H){return"   "+H}).join(`
`))):U=i.stylize("[Circular]","special")),k(z)){if(j&&D.match(/^\d+$/))return U;z=JSON.stringify(""+D),z.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(z=z.substr(1,z.length-2),z=i.stylize(z,"name")):(z=z.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),z=i.stylize(z,"string"))}return z+": "+U}function f(i,p,A){var R=0,D=i.reduce(function(j,z){return R++,z.indexOf(`
`)>=0&&R++,j+z.replace(/\u001b\[\d\d?m/g,"").length+1},0);return D>60?A[0]+(p===""?"":p+`
 `)+" "+i.join(`,
  `)+" "+A[1]:A[0]+p+" "+i.join(", ")+" "+A[1]}function e(i){return Array.isArray(i)}d.isArray=e;function u(i){return typeof i=="boolean"}d.isBoolean=u;function v(i){return i===null}d.isNull=v;function m(i){return i==null}d.isNullOrUndefined=m;function x(i){return typeof i=="number"}d.isNumber=x;function I(i){return typeof i=="string"}d.isString=I;function T(i){return typeof i=="symbol"}d.isSymbol=T;function k(i){return i===void 0}d.isUndefined=k;function N(i){return M(i)&&_(i)==="[object RegExp]"}d.isRegExp=N;function M(i){return typeof i=="object"&&i!==null}d.isObject=M;function V(i){return M(i)&&_(i)==="[object Date]"}d.isDate=V;function F(i){return M(i)&&(_(i)==="[object Error]"||i instanceof Error)}d.isError=F;function s(i){return typeof i=="function"}d.isFunction=s;function l(i){return i===null||typeof i=="boolean"||typeof i=="number"||typeof i=="string"||typeof i=="symbol"||typeof i=="undefined"}d.isPrimitive=l,d.isBuffer=b(52014);function _(i){return Object.prototype.toString.call(i)}function B(i){return i<10?"0"+i.toString(10):i.toString(10)}var K=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function q(){var i=new Date,p=[B(i.getHours()),B(i.getMinutes()),B(i.getSeconds())].join(":");return[i.getDate(),K[i.getMonth()],p].join(" ")}d.log=function(){console.log("%s - %s",q(),d.format.apply(d,arguments))},d.inherits=b(16076),d._extend=function(i,p){if(!p||!M(p))return i;for(var A=Object.keys(p),R=A.length;R--;)i[A[R]]=p[A[R]];return i};function L(i,p){return Object.prototype.hasOwnProperty.call(i,p)}},75443:function(O,d,b){"use strict";var t=b(48764).Buffer;Object.defineProperty(d,"__esModule",{value:!0});function P(E){return function(w){var a=E();return a.update(w),t.from(a.digest())}}d.createHashFunction=P},82192:function(O,d,b){"use strict";Object.defineProperty(d,"__esModule",{value:!0});var t=b(75443),P=b(95811);d.keccak224=t.createHashFunction(function(){return P("keccak224")}),d.keccak256=t.createHashFunction(function(){return P("keccak256")}),d.keccak384=t.createHashFunction(function(){return P("keccak384")}),d.keccak512=t.createHashFunction(function(){return P("keccak512")})},53242:function(O,d,b){O.exports=b(39203)(b(25166))},25166:function(O,d,b){const t=b(86266).ec,P=new t("secp256k1"),E=P.curve,w=E.n.constructor;function a(o,r){let c=new w(r);if(c.cmp(E.p)>=0)return null;c=c.toRed(E.red);let S=c.redSqr().redIMul(c).redIAdd(E.b).redSqrt();return o===3!==S.isOdd()&&(S=S.redNeg()),P.keyPair({pub:{x:c,y:S}})}function n(o,r,c){let S=new w(r),y=new w(c);if(S.cmp(E.p)>=0||y.cmp(E.p)>=0||(S=S.toRed(E.red),y=y.toRed(E.red),(o===6||o===7)&&y.isOdd()!==(o===7)))return null;const f=S.redSqr().redIMul(S);return y.redSqr().redISub(f.redIAdd(E.b)).isZero()?P.keyPair({pub:{x:S,y}}):null}function h(o){const r=o[0];switch(r){case 2:case 3:return o.length!==33?null:a(r,o.subarray(1,33));case 4:case 6:case 7:return o.length!==65?null:n(r,o.subarray(1,33),o.subarray(33,65));default:return null}}function g(o,r){const c=r.encode(null,o.length===33);for(let S=0;S<o.length;++S)o[S]=c[S]}O.exports={contextRandomize(){return 0},privateKeyVerify(o){const r=new w(o);return r.cmp(E.n)<0&&!r.isZero()?0:1},privateKeyNegate(o){const r=new w(o),c=E.n.sub(r).umod(E.n).toArrayLike(Uint8Array,"be",32);return o.set(c),0},privateKeyTweakAdd(o,r){const c=new w(r);if(c.cmp(E.n)>=0||(c.iadd(new w(o)),c.cmp(E.n)>=0&&c.isub(E.n),c.isZero()))return 1;const S=c.toArrayLike(Uint8Array,"be",32);return o.set(S),0},privateKeyTweakMul(o,r){let c=new w(r);if(c.cmp(E.n)>=0||c.isZero())return 1;c.imul(new w(o)),c.cmp(E.n)>=0&&(c=c.umod(E.n));const S=c.toArrayLike(Uint8Array,"be",32);return o.set(S),0},publicKeyVerify(o){return h(o)===null?1:0},publicKeyCreate(o,r){const c=new w(r);if(c.cmp(E.n)>=0||c.isZero())return 1;const S=P.keyFromPrivate(r).getPublic();return g(o,S),0},publicKeyConvert(o,r){const c=h(r);if(c===null)return 1;const S=c.getPublic();return g(o,S),0},publicKeyNegate(o,r){const c=h(r);if(c===null)return 1;const S=c.getPublic();return S.y=S.y.redNeg(),g(o,S),0},publicKeyCombine(o,r){const c=new Array(r.length);for(let y=0;y<r.length;++y)if(c[y]=h(r[y]),c[y]===null)return 1;let S=c[0].getPublic();for(let y=1;y<c.length;++y)S=S.add(c[y].pub);return S.isInfinity()?2:(g(o,S),0)},publicKeyTweakAdd(o,r,c){const S=h(r);if(S===null)return 1;if(c=new w(c),c.cmp(E.n)>=0)return 2;const y=S.getPublic().add(E.g.mul(c));return y.isInfinity()?2:(g(o,y),0)},publicKeyTweakMul(o,r,c){const S=h(r);if(S===null)return 1;if(c=new w(c),c.cmp(E.n)>=0||c.isZero())return 2;const y=S.getPublic().mul(c);return g(o,y),0},signatureNormalize(o){const r=new w(o.subarray(0,32)),c=new w(o.subarray(32,64));return r.cmp(E.n)>=0||c.cmp(E.n)>=0?1:(c.cmp(P.nh)===1&&o.set(E.n.sub(c).toArrayLike(Uint8Array,"be",32),32),0)},signatureExport(o,r){const c=r.subarray(0,32),S=r.subarray(32,64);if(new w(c).cmp(E.n)>=0||new w(S).cmp(E.n)>=0)return 1;const{output:y}=o;let f=y.subarray(4,4+33);f[0]=0,f.set(c,1);let e=33,u=0;for(;e>1&&f[u]===0&&!(f[u+1]&128);--e,++u);if(f=f.subarray(u),f[0]&128||e>1&&f[0]===0&&!(f[1]&128))return 1;let v=y.subarray(6+33,6+33+33);v[0]=0,v.set(S,1);let m=33,x=0;for(;m>1&&v[x]===0&&!(v[x+1]&128);--m,++x);return v=v.subarray(x),v[0]&128||m>1&&v[0]===0&&!(v[1]&128)?1:(o.outputlen=6+e+m,y[0]=48,y[1]=o.outputlen-2,y[2]=2,y[3]=f.length,y.set(f,4),y[4+e]=2,y[5+e]=v.length,y.set(v,6+e),0)},signatureImport(o,r){if(r.length<8||r.length>72||r[0]!==48||r[1]!==r.length-2||r[2]!==2)return 1;const c=r[3];if(c===0||5+c>=r.length||r[4+c]!==2)return 1;const S=r[5+c];if(S===0||6+c+S!==r.length||r[4]&128||c>1&&r[4]===0&&!(r[5]&128)||r[c+6]&128||S>1&&r[c+6]===0&&!(r[c+7]&128))return 1;let y=r.subarray(4,4+c);if(y.length===33&&y[0]===0&&(y=y.subarray(1)),y.length>32)return 1;let f=r.subarray(6+c);if(f.length===33&&f[0]===0&&(f=f.slice(1)),f.length>32)throw new Error("S length is too long");let e=new w(y);e.cmp(E.n)>=0&&(e=new w(0));let u=new w(r.subarray(6+c));return u.cmp(E.n)>=0&&(u=new w(0)),o.set(e.toArrayLike(Uint8Array,"be",32),0),o.set(u.toArrayLike(Uint8Array,"be",32),32),0},ecdsaSign(o,r,c,S,y){if(y){const u=y;y=v=>{const m=u(r,c,null,S,v);if(!(m instanceof Uint8Array&&m.length===32))throw new Error("This is the way");return new w(m)}}const f=new w(c);if(f.cmp(E.n)>=0||f.isZero())return 1;let e;try{e=P.sign(r,c,{canonical:!0,k:y,pers:S})}catch(u){return 1}return o.signature.set(e.r.toArrayLike(Uint8Array,"be",32),0),o.signature.set(e.s.toArrayLike(Uint8Array,"be",32),32),o.recid=e.recoveryParam,0},ecdsaVerify(o,r,c){const S={r:o.subarray(0,32),s:o.subarray(32,64)},y=new w(S.r),f=new w(S.s);if(y.cmp(E.n)>=0||f.cmp(E.n)>=0)return 1;if(f.cmp(P.nh)===1||y.isZero()||f.isZero())return 3;const e=h(c);if(e===null)return 2;const u=e.getPublic();return P.verify(r,S,u)?0:3},ecdsaRecover(o,r,c,S){const y={r:r.slice(0,32),s:r.slice(32,64)},f=new w(y.r),e=new w(y.s);if(f.cmp(E.n)>=0||e.cmp(E.n)>=0)return 1;if(f.isZero()||e.isZero())return 2;let u;try{u=P.recoverPubKey(S,y,c)}catch(v){return 2}return g(o,u),0},ecdh(o,r,c,S,y,f,e){const u=h(r);if(u===null)return 1;const v=new w(c);if(v.cmp(E.n)>=0||v.isZero())return 2;const m=u.getPublic().mul(v);if(y===void 0){const x=m.encode(null,!0),I=P.hash().update(x).digest();for(let T=0;T<32;++T)o[T]=I[T]}else{f||(f=new Uint8Array(32));const x=m.getX().toArray("be",32);for(let N=0;N<32;++N)f[N]=x[N];e||(e=new Uint8Array(32));const I=m.getY().toArray("be",32);for(let N=0;N<32;++N)e[N]=I[N];const T=y(f,e,S);if(!(T instanceof Uint8Array&&T.length===o.length))return 2;o.set(T)}return 0}}},39203:function(O){const d={IMPOSSIBLE_CASE:"Impossible case. Please create issue.",TWEAK_ADD:"The tweak was out of range or the resulted private key is invalid",TWEAK_MUL:"The tweak was out of range or equal to zero",CONTEXT_RANDOMIZE_UNKNOW:"Unknow error on context randomization",SECKEY_INVALID:"Private Key is invalid",PUBKEY_PARSE:"Public Key could not be parsed",PUBKEY_SERIALIZE:"Public Key serialization error",PUBKEY_COMBINE:"The sum of the public keys is not valid",SIG_PARSE:"Signature could not be parsed",SIGN:"The nonce generation function failed, or the private key was invalid",RECOVER:"Public key could not be recover",ECDH:"Scalar was invalid (zero or overflow)"};function b(a,n){if(!a)throw new Error(n)}function t(a,n,h){if(b(n instanceof Uint8Array,`Expected ${a} to be an Uint8Array`),h!==void 0)if(Array.isArray(h)){const g=h.join(", "),o=`Expected ${a} to be an Uint8Array with length [${g}]`;b(h.includes(n.length),o)}else{const g=`Expected ${a} to be an Uint8Array with length ${h}`;b(n.length===h,g)}}function P(a){b(w(a)==="Boolean","Expected compressed to be a Boolean")}function E(a=h=>new Uint8Array(h),n){return typeof a=="function"&&(a=a(n)),t("output",a,n),a}function w(a){return Object.prototype.toString.call(a).slice(8,-1)}O.exports=a=>({contextRandomize(n){switch(b(n===null||n instanceof Uint8Array,"Expected seed to be an Uint8Array or null"),n!==null&&t("seed",n,32),a.contextRandomize(n)){case 1:throw new Error(d.CONTEXT_RANDOMIZE_UNKNOW)}},privateKeyVerify(n){return t("private key",n,32),a.privateKeyVerify(n)===0},privateKeyNegate(n){switch(t("private key",n,32),a.privateKeyNegate(n)){case 0:return n;case 1:throw new Error(d.IMPOSSIBLE_CASE)}},privateKeyTweakAdd(n,h){switch(t("private key",n,32),t("tweak",h,32),a.privateKeyTweakAdd(n,h)){case 0:return n;case 1:throw new Error(d.TWEAK_ADD)}},privateKeyTweakMul(n,h){switch(t("private key",n,32),t("tweak",h,32),a.privateKeyTweakMul(n,h)){case 0:return n;case 1:throw new Error(d.TWEAK_MUL)}},publicKeyVerify(n){return t("public key",n,[33,65]),a.publicKeyVerify(n)===0},publicKeyCreate(n,h=!0,g){switch(t("private key",n,32),P(h),g=E(g,h?33:65),a.publicKeyCreate(g,n)){case 0:return g;case 1:throw new Error(d.SECKEY_INVALID);case 2:throw new Error(d.PUBKEY_SERIALIZE)}},publicKeyConvert(n,h=!0,g){switch(t("public key",n,[33,65]),P(h),g=E(g,h?33:65),a.publicKeyConvert(g,n)){case 0:return g;case 1:throw new Error(d.PUBKEY_PARSE);case 2:throw new Error(d.PUBKEY_SERIALIZE)}},publicKeyNegate(n,h=!0,g){switch(t("public key",n,[33,65]),P(h),g=E(g,h?33:65),a.publicKeyNegate(g,n)){case 0:return g;case 1:throw new Error(d.PUBKEY_PARSE);case 2:throw new Error(d.IMPOSSIBLE_CASE);case 3:throw new Error(d.PUBKEY_SERIALIZE)}},publicKeyCombine(n,h=!0,g){b(Array.isArray(n),"Expected public keys to be an Array"),b(n.length>0,"Expected public keys array will have more than zero items");for(const o of n)t("public key",o,[33,65]);switch(P(h),g=E(g,h?33:65),a.publicKeyCombine(g,n)){case 0:return g;case 1:throw new Error(d.PUBKEY_PARSE);case 2:throw new Error(d.PUBKEY_COMBINE);case 3:throw new Error(d.PUBKEY_SERIALIZE)}},publicKeyTweakAdd(n,h,g=!0,o){switch(t("public key",n,[33,65]),t("tweak",h,32),P(g),o=E(o,g?33:65),a.publicKeyTweakAdd(o,n,h)){case 0:return o;case 1:throw new Error(d.PUBKEY_PARSE);case 2:throw new Error(d.TWEAK_ADD)}},publicKeyTweakMul(n,h,g=!0,o){switch(t("public key",n,[33,65]),t("tweak",h,32),P(g),o=E(o,g?33:65),a.publicKeyTweakMul(o,n,h)){case 0:return o;case 1:throw new Error(d.PUBKEY_PARSE);case 2:throw new Error(d.TWEAK_MUL)}},signatureNormalize(n){switch(t("signature",n,64),a.signatureNormalize(n)){case 0:return n;case 1:throw new Error(d.SIG_PARSE)}},signatureExport(n,h){t("signature",n,64),h=E(h,72);const g={output:h,outputlen:72};switch(a.signatureExport(g,n)){case 0:return h.slice(0,g.outputlen);case 1:throw new Error(d.SIG_PARSE);case 2:throw new Error(d.IMPOSSIBLE_CASE)}},signatureImport(n,h){switch(t("signature",n),h=E(h,64),a.signatureImport(h,n)){case 0:return h;case 1:throw new Error(d.SIG_PARSE);case 2:throw new Error(d.IMPOSSIBLE_CASE)}},ecdsaSign(n,h,g={},o){t("message",n,32),t("private key",h,32),b(w(g)==="Object","Expected options to be an Object"),g.data!==void 0&&t("options.data",g.data),g.noncefn!==void 0&&b(w(g.noncefn)==="Function","Expected options.noncefn to be a Function"),o=E(o,64);const r={signature:o,recid:null};switch(a.ecdsaSign(r,n,h,g.data,g.noncefn)){case 0:return r;case 1:throw new Error(d.SIGN);case 2:throw new Error(d.IMPOSSIBLE_CASE)}},ecdsaVerify(n,h,g){switch(t("signature",n,64),t("message",h,32),t("public key",g,[33,65]),a.ecdsaVerify(n,h,g)){case 0:return!0;case 3:return!1;case 1:throw new Error(d.SIG_PARSE);case 2:throw new Error(d.PUBKEY_PARSE)}},ecdsaRecover(n,h,g,o=!0,r){switch(t("signature",n,64),b(w(h)==="Number"&&h>=0&&h<=3,"Expected recovery id to be a Number within interval [0, 3]"),t("message",g,32),P(o),r=E(r,o?33:65),a.ecdsaRecover(r,n,h,g)){case 0:return r;case 1:throw new Error(d.SIG_PARSE);case 2:throw new Error(d.RECOVER);case 3:throw new Error(d.IMPOSSIBLE_CASE)}},ecdh(n,h,g={},o){switch(t("public key",n,[33,65]),t("private key",h,32),b(w(g)==="Object","Expected options to be an Object"),g.data!==void 0&&t("options.data",g.data),g.hashfn!==void 0?(b(w(g.hashfn)==="Function","Expected options.hashfn to be a Function"),g.xbuf!==void 0&&t("options.xbuf",g.xbuf,32),g.ybuf!==void 0&&t("options.ybuf",g.ybuf,32),t("output",o)):o=E(o,32),a.ecdh(o,n,h,g.data,g.hashfn,g.xbuf,g.ybuf)){case 0:return o;case 1:throw new Error(d.PUBKEY_PARSE);case 2:throw new Error(d.ECDH)}}})},90472:function(O,d,b){"use strict";Object.defineProperty(d,"__esModule",{value:!0});var t=b(61798);function P(w){return new Promise(function(a,n){t(w,function(h,g){if(h){n(h);return}a(g)})})}d.getRandomBytes=P;function E(w){return t(w)}d.getRandomBytesSync=E},95053:function(O,d,b){"use strict";var t=this&&this.__awaiter||function(o,r,c,S){function y(f){return f instanceof c?f:new c(function(e){e(f)})}return new(c||(c=Promise))(function(f,e){function u(x){try{m(S.next(x))}catch(I){e(I)}}function v(x){try{m(S.throw(x))}catch(I){e(I)}}function m(x){x.done?f(x.value):y(x.value).then(u,v)}m((S=S.apply(o,r||[])).next())})},P=this&&this.__generator||function(o,r){var c={label:0,sent:function(){if(f[0]&1)throw f[1];return f[1]},trys:[],ops:[]},S,y,f,e;return e={next:u(0),throw:u(1),return:u(2)},typeof Symbol=="function"&&(e[Symbol.iterator]=function(){return this}),e;function u(m){return function(x){return v([m,x])}}function v(m){if(S)throw new TypeError("Generator is already executing.");for(;c;)try{if(S=1,y&&(f=m[0]&2?y.return:m[0]?y.throw||((f=y.return)&&f.call(y),0):y.next)&&!(f=f.call(y,m[1])).done)return f;switch(y=0,f&&(m=[m[0]&2,f.value]),m[0]){case 0:case 1:f=m;break;case 4:return c.label++,{value:m[1],done:!1};case 5:c.label++,y=m[1],m=[0];continue;case 7:m=c.ops.pop(),c.trys.pop();continue;default:if(f=c.trys,!(f=f.length>0&&f[f.length-1])&&(m[0]===6||m[0]===2)){c=0;continue}if(m[0]===3&&(!f||m[1]>f[0]&&m[1]<f[3])){c.label=m[1];break}if(m[0]===6&&c.label<f[1]){c.label=f[1],f=m;break}if(f&&c.label<f[2]){c.label=f[2],c.ops.push(m);break}f[2]&&c.ops.pop(),c.trys.pop();continue}m=r.call(o,c)}catch(x){m=[6,x],y=0}finally{S=f=0}if(m[0]&5)throw m[1];return{value:m[0]?m[1]:void 0,done:!0}}};function E(o){for(var r in o)d.hasOwnProperty(r)||(d[r]=o[r])}Object.defineProperty(d,"__esModule",{value:!0});var w=b(53242),a=b(90472),n=32;function h(){return t(this,void 0,void 0,function(){var o;return P(this,function(r){switch(r.label){case 0:return[4,a.getRandomBytes(n)];case 1:return o=r.sent(),w.privateKeyVerify(o)?[2,o]:[3,0];case 2:return[2]}})})}d.createPrivateKey=h;function g(){for(;;){var o=a.getRandomBytesSync(n);if(w.privateKeyVerify(o))return o}}d.createPrivateKeySync=g,E(b(53242))},80884:function(O,d,b){"use strict";var t=b(48764).Buffer,P=b(23944),E=b(49604);function w(e){var u=e;if(typeof u!="string")throw new Error("[ethjs-util] while padding to even, value must be string, is currently "+typeof u+", while padToEven.");return u.length%2&&(u="0"+u),u}function a(e){var u=e.toString(16);return"0x"+u}function n(e){var u=a(e);return new t(w(u.slice(2)),"hex")}function h(e){if(typeof e!="string")throw new Error("[ethjs-util] while getting binary size, method getBinarySize requires input 'str' to be type String, got '"+typeof e+"'.");return t.byteLength(e,"utf8")}function g(e,u,v){if(Array.isArray(e)!==!0)throw new Error("[ethjs-util] method arrayContainsArray requires input 'superset' to be an array got type '"+typeof e+"'");if(Array.isArray(u)!==!0)throw new Error("[ethjs-util] method arrayContainsArray requires input 'subset' to be an array got type '"+typeof u+"'");return u[Boolean(v)&&"some"||"every"](function(m){return e.indexOf(m)>=0})}function o(e){var u=new t(w(E(e).replace(/^0+|0+$/g,"")),"hex");return u.toString("utf8")}function r(e){var u="",v=0,m=e.length;for(e.substring(0,2)==="0x"&&(v=2);v<m;v+=2){var x=parseInt(e.substr(v,2),16);u+=String.fromCharCode(x)}return u}function c(e){var u=new t(e,"utf8");return"0x"+w(u.toString("hex")).replace(/^0+|0+$/g,"")}function S(e){for(var u="",v=0;v<e.length;v++){var m=e.charCodeAt(v),x=m.toString(16);u+=x.length<2?"0"+x:x}return"0x"+u}function y(e,u,v){if(!Array.isArray(e))throw new Error("[ethjs-util] method getKeys expecting type Array as 'params' input, got '"+typeof e+"'");if(typeof u!="string")throw new Error("[ethjs-util] method getKeys expecting type String for input 'key' got '"+typeof u+"'.");for(var m=[],x=0;x<e.length;x++){var I=e[x][u];if(v&&!I)I="";else if(typeof I!="string")throw new Error("invalid abi");m.push(I)}return m}function f(e,u){return!(typeof e!="string"||!e.match(/^0x[0-9A-Fa-f]*$/)||u&&e.length!==2+2*u)}O.exports={arrayContainsArray:g,intToBuffer:n,getBinarySize:h,isHexPrefixed:P,stripHexPrefix:E,padToEven:w,intToHex:a,fromAscii:S,fromUtf8:c,toAscii:r,toUtf8:o,getKeys:y,isHexString:f}},23944:function(O){O.exports=function(b){if(typeof b!="string")throw new Error("[is-hex-prefixed] value must be type 'string', is currently type "+typeof b+", while checking isHexPrefixed.");return b.slice(0,2)==="0x"}},95811:function(O,d,b){O.exports=b(26066)(b(79653))},26066:function(O,d,b){const t=b(37016),P=b(5675);O.exports=function(E){const w=t(E),a=P(E);return function(n,h){switch(typeof n=="string"?n.toLowerCase():n){case"keccak224":return new w(1152,448,null,224,h);case"keccak256":return new w(1088,512,null,256,h);case"keccak384":return new w(832,768,null,384,h);case"keccak512":return new w(576,1024,null,512,h);case"sha3-224":return new w(1152,448,6,224,h);case"sha3-256":return new w(1088,512,6,256,h);case"sha3-384":return new w(832,768,6,384,h);case"sha3-512":return new w(576,1024,6,512,h);case"shake128":return new a(1344,256,31,h);case"shake256":return new a(1088,512,31,h);default:throw new Error("Invald algorithm: "+n)}}}},37016:function(O,d,b){var t=b(48764).Buffer;const{Transform:P}=b(42830);O.exports=E=>class ue extends P{constructor(a,n,h,g,o){super(o);this._rate=a,this._capacity=n,this._delimitedSuffix=h,this._hashBitLength=g,this._options=o,this._state=new E,this._state.initialize(a,n),this._finalized=!1}_transform(a,n,h){let g=null;try{this.update(a,n)}catch(o){g=o}h(g)}_flush(a){let n=null;try{this.push(this.digest())}catch(h){n=h}a(n)}update(a,n){if(!t.isBuffer(a)&&typeof a!="string")throw new TypeError("Data must be a string or a buffer");if(this._finalized)throw new Error("Digest already called");return t.isBuffer(a)||(a=t.from(a,n)),this._state.absorb(a),this}digest(a){if(this._finalized)throw new Error("Digest already called");this._finalized=!0,this._delimitedSuffix&&this._state.absorbLastFewBits(this._delimitedSuffix);let n=this._state.squeeze(this._hashBitLength/8);return a!==void 0&&(n=n.toString(a)),this._resetState(),n}_resetState(){return this._state.initialize(this._rate,this._capacity),this}_clone(){const a=new ue(this._rate,this._capacity,this._delimitedSuffix,this._hashBitLength,this._options);return this._state.copy(a._state),a._finalized=this._finalized,a}}},5675:function(O,d,b){var t=b(48764).Buffer;const{Transform:P}=b(42830);O.exports=E=>class fe extends P{constructor(a,n,h,g){super(g);this._rate=a,this._capacity=n,this._delimitedSuffix=h,this._options=g,this._state=new E,this._state.initialize(a,n),this._finalized=!1}_transform(a,n,h){let g=null;try{this.update(a,n)}catch(o){g=o}h(g)}_flush(){}_read(a){this.push(this.squeeze(a))}update(a,n){if(!t.isBuffer(a)&&typeof a!="string")throw new TypeError("Data must be a string or a buffer");if(this._finalized)throw new Error("Squeeze already called");return t.isBuffer(a)||(a=t.from(a,n)),this._state.absorb(a),this}squeeze(a,n){this._finalized||(this._finalized=!0,this._state.absorbLastFewBits(this._delimitedSuffix));let h=this._state.squeeze(a);return n!==void 0&&(h=h.toString(n)),h}_resetState(){return this._state.initialize(this._rate,this._capacity),this}_clone(){const a=new fe(this._rate,this._capacity,this._delimitedSuffix,this._options);return this._state.copy(a._state),a._finalized=this._finalized,a}}},34040:function(O,d){const b=[1,0,32898,0,32906,2147483648,2147516416,2147483648,32907,0,2147483649,0,2147516545,2147483648,32777,2147483648,138,0,136,0,2147516425,0,2147483658,0,2147516555,0,139,2147483648,32905,2147483648,32771,2147483648,32770,2147483648,128,2147483648,32778,0,2147483658,2147483648,2147516545,2147483648,32896,2147483648,2147483649,0,2147516424,2147483648];d.p1600=function(t){for(let P=0;P<24;++P){const E=t[0]^t[10]^t[20]^t[30]^t[40],w=t[1]^t[11]^t[21]^t[31]^t[41],a=t[2]^t[12]^t[22]^t[32]^t[42],n=t[3]^t[13]^t[23]^t[33]^t[43],h=t[4]^t[14]^t[24]^t[34]^t[44],g=t[5]^t[15]^t[25]^t[35]^t[45],o=t[6]^t[16]^t[26]^t[36]^t[46],r=t[7]^t[17]^t[27]^t[37]^t[47],c=t[8]^t[18]^t[28]^t[38]^t[48],S=t[9]^t[19]^t[29]^t[39]^t[49];let y=c^(a<<1|n>>>31),f=S^(n<<1|a>>>31);const e=t[0]^y,u=t[1]^f,v=t[10]^y,m=t[11]^f,x=t[20]^y,I=t[21]^f,T=t[30]^y,k=t[31]^f,N=t[40]^y,M=t[41]^f;y=E^(h<<1|g>>>31),f=w^(g<<1|h>>>31);const V=t[2]^y,F=t[3]^f,s=t[12]^y,l=t[13]^f,_=t[22]^y,B=t[23]^f,K=t[32]^y,q=t[33]^f,L=t[42]^y,i=t[43]^f;y=a^(o<<1|r>>>31),f=n^(r<<1|o>>>31);const p=t[4]^y,A=t[5]^f,R=t[14]^y,D=t[15]^f,j=t[24]^y,z=t[25]^f,U=t[34]^y,C=t[35]^f,H=t[44]^y,Z=t[45]^f;y=h^(c<<1|S>>>31),f=g^(S<<1|c>>>31);const G=t[6]^y,Y=t[7]^f,$=t[16]^y,Zt=t[17]^f,Yt=t[26]^y,Gt=t[27]^f,$t=t[36]^y,Wt=t[37]^f,Jt=t[46]^y,Xt=t[47]^f;y=o^(E<<1|w>>>31),f=r^(w<<1|E>>>31);const Qt=t[8]^y,te=t[9]^f,ee=t[18]^y,re=t[19]^f,ne=t[28]^y,ie=t[29]^f,oe=t[38]^y,se=t[39]^f,ae=t[48]^y,ce=t[49]^f,W=e,J=u,X=m<<4|v>>>28,Q=v<<4|m>>>28,tt=x<<3|I>>>29,et=I<<3|x>>>29,rt=k<<9|T>>>23,nt=T<<9|k>>>23,it=N<<18|M>>>14,ot=M<<18|N>>>14,st=V<<1|F>>>31,at=F<<1|V>>>31,ct=l<<12|s>>>20,ut=s<<12|l>>>20,ft=_<<10|B>>>22,lt=B<<10|_>>>22,ht=q<<13|K>>>19,yt=K<<13|q>>>19,dt=L<<2|i>>>30,gt=i<<2|L>>>30,wt=A<<30|p>>>2,pt=p<<30|A>>>2,Et=R<<6|D>>>26,bt=D<<6|R>>>26,mt=z<<11|j>>>21,St=j<<11|z>>>21,vt=U<<15|C>>>17,At=C<<15|U>>>17,_t=Z<<29|H>>>3,xt=H<<29|Z>>>3,Pt=G<<28|Y>>>4,Bt=Y<<28|G>>>4,Kt=Zt<<23|$>>>9,Ot=$<<23|Zt>>>9,zt=Yt<<25|Gt>>>7,It=Gt<<25|Yt>>>7,Rt=$t<<21|Wt>>>11,kt=Wt<<21|$t>>>11,Ut=Xt<<24|Jt>>>8,jt=Jt<<24|Xt>>>8,Nt=Qt<<27|te>>>5,Tt=te<<27|Qt>>>5,Ct=ee<<20|re>>>12,Dt=re<<20|ee>>>12,Lt=ie<<7|ne>>>25,qt=ne<<7|ie>>>25,Mt=oe<<8|se>>>24,Ht=se<<8|oe>>>24,Ft=ae<<14|ce>>>18,Vt=ce<<14|ae>>>18;t[0]=W^~ct&mt,t[1]=J^~ut&St,t[10]=Pt^~Ct&tt,t[11]=Bt^~Dt&et,t[20]=st^~Et&zt,t[21]=at^~bt&It,t[30]=Nt^~X&ft,t[31]=Tt^~Q&lt,t[40]=wt^~Kt&Lt,t[41]=pt^~Ot&qt,t[2]=ct^~mt&Rt,t[3]=ut^~St&kt,t[12]=Ct^~tt&ht,t[13]=Dt^~et&yt,t[22]=Et^~zt&Mt,t[23]=bt^~It&Ht,t[32]=X^~ft&vt,t[33]=Q^~lt&At,t[42]=Kt^~Lt&rt,t[43]=Ot^~qt&nt,t[4]=mt^~Rt&Ft,t[5]=St^~kt&Vt,t[14]=tt^~ht&_t,t[15]=et^~yt&xt,t[24]=zt^~Mt&it,t[25]=It^~Ht&ot,t[34]=ft^~vt&Ut,t[35]=lt^~At&jt,t[44]=Lt^~rt&dt,t[45]=qt^~nt&gt,t[6]=Rt^~Ft&W,t[7]=kt^~Vt&J,t[16]=ht^~_t&Pt,t[17]=yt^~xt&Bt,t[26]=Mt^~it&st,t[27]=Ht^~ot&at,t[36]=vt^~Ut&Nt,t[37]=At^~jt&Tt,t[46]=rt^~dt&wt,t[47]=nt^~gt&pt,t[8]=Ft^~W&ct,t[9]=Vt^~J&ut,t[18]=_t^~Pt&Ct,t[19]=xt^~Bt&Dt,t[28]=it^~st&Et,t[29]=ot^~at&bt,t[38]=Ut^~Nt&X,t[39]=jt^~Tt&Q,t[48]=dt^~wt&Kt,t[49]=gt^~pt&Ot,t[0]^=b[P*2],t[1]^=b[P*2+1]}}},79653:function(O,d,b){var t=b(48764).Buffer;const P=b(34040);function E(){this.state=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],this.blockSize=null,this.count=0,this.squeezing=!1}E.prototype.initialize=function(w,a){for(let n=0;n<50;++n)this.state[n]=0;this.blockSize=w/8,this.count=0,this.squeezing=!1},E.prototype.absorb=function(w){for(let a=0;a<w.length;++a)this.state[~~(this.count/4)]^=w[a]<<8*(this.count%4),this.count+=1,this.count===this.blockSize&&(P.p1600(this.state),this.count=0)},E.prototype.absorbLastFewBits=function(w){this.state[~~(this.count/4)]^=w<<8*(this.count%4),(w&128)!=0&&this.count===this.blockSize-1&&P.p1600(this.state),this.state[~~((this.blockSize-1)/4)]^=128<<8*((this.blockSize-1)%4),P.p1600(this.state),this.count=0,this.squeezing=!0},E.prototype.squeeze=function(w){this.squeezing||this.absorbLastFewBits(1);const a=t.alloc(w);for(let n=0;n<w;++n)a[n]=this.state[~~(this.count/4)]>>>8*(this.count%4)&255,this.count+=1,this.count===this.blockSize&&(P.p1600(this.state),this.count=0);return a},E.prototype.copy=function(w){for(let a=0;a<50;++a)w.state[a]=this.state[a];w.blockSize=this.blockSize,w.count=this.count,w.squeezing=this.squeezing},O.exports=E},6636:function(O,d,b){"use strict";var t=b(48764).Buffer;Object.defineProperty(d,"__esModule",{value:!0}),d.getLength=d.decode=d.encode=void 0;var P=b(13550);function E(e){if(Array.isArray(e)){for(var u=[],v=0;v<e.length;v++)u.push(E(e[v]));var m=t.concat(u);return t.concat([a(m.length,192),m])}else{var x=f(e);return x.length===1&&x[0]<128?x:t.concat([a(x.length,128),x])}}d.encode=E;function w(e,u){if(e.slice(0,2)==="00")throw new Error("invalid RLP: extra zeros");return parseInt(e,u)}function a(e,u){if(e<56)return t.from([e+u]);var v=c(e),m=v.length/2,x=c(u+55+m);return t.from(x+v,"hex")}function n(e,u){if(u===void 0&&(u=!1),!e||e.length===0)return t.from([]);var v=f(e),m=g(v);if(u)return m;if(m.remainder.length!==0)throw new Error("invalid remainder");return m.data}d.decode=n;function h(e){if(!e||e.length===0)return t.from([]);var u=f(e),v=u[0];if(v<=127)return u.length;if(v<=183)return v-127;if(v<=191)return v-182;if(v<=247)return v-191;var m=v-246,x=w(u.slice(1,m).toString("hex"),16);return m+x}d.getLength=h;function g(e){var u,v,m,x,I,T=[],k=e[0];if(k<=127)return{data:e.slice(0,1),remainder:e.slice(1)};if(k<=183){if(u=k-127,k===128?m=t.from([]):m=e.slice(1,u),u===2&&m[0]<128)throw new Error("invalid rlp encoding: byte must be less 0x80");return{data:m,remainder:e.slice(u)}}else if(k<=191){if(v=k-182,e.length-1<v)throw new Error("invalid RLP: not enough bytes for string length");if(u=w(e.slice(1,v).toString("hex"),16),u<=55)throw new Error("invalid RLP: expected string length to be greater than 55");if(m=e.slice(v,u+v),m.length<u)throw new Error("invalid RLP: not enough bytes for string");return{data:m,remainder:e.slice(u+v)}}else if(k<=247){for(u=k-191,x=e.slice(1,u);x.length;)I=g(x),T.push(I.data),x=I.remainder;return{data:T,remainder:e.slice(u)}}else{v=k-246,u=w(e.slice(1,v).toString("hex"),16);var N=v+u;if(N>e.length)throw new Error("invalid rlp: total length is larger than the data");if(x=e.slice(v,N),x.length===0)throw new Error("invalid rlp, List has a invalid length");for(;x.length;)I=g(x),T.push(I.data),x=I.remainder;return{data:T,remainder:e.slice(N)}}}function o(e){return e.slice(0,2)==="0x"}function r(e){return typeof e!="string"?e:o(e)?e.slice(2):e}function c(e){if(e<0)throw new Error("Invalid integer as argument, must be unsigned!");var u=e.toString(16);return u.length%2?"0"+u:u}function S(e){return e.length%2?"0"+e:e}function y(e){var u=c(e);return t.from(u,"hex")}function f(e){if(!t.isBuffer(e)){if(typeof e=="string")return o(e)?t.from(S(r(e)),"hex"):t.from(e);if(typeof e=="number"||typeof e=="bigint")return e?y(e):t.from([]);if(e==null)return t.from([]);if(e instanceof Uint8Array)return t.from(e);if(P.isBN(e))return t.from(e.toArray());throw new Error("invalid type")}return e}},49604:function(O,d,b){var t=b(23944);O.exports=function(E){return typeof E!="string"?E:t(E)?E.slice(2):E}}}]);
