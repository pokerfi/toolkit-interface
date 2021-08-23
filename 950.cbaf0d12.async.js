(self.webpackChunk=self.webpackChunk||[]).push([[950],{26939:function(N,b,v){"use strict";v.d(b,{Q:function(){return _}});var O=v(17187),E=v.n(O),y=v(53653);function P(m,s){m.prototype=Object.create(s.prototype),m.prototype.constructor=m,m.__proto__=s}var _=function(m){P(s,m);function s(d){var h,A=d===void 0?{}:d,D=A.supportedChainIds;return h=m.call(this)||this,h.supportedChainIds=D,h}var C=s.prototype;return C.emitUpdate=function(h){this.emit(y._.Update,h)},C.emitError=function(h){this.emit(y._.Error,h)},C.emitDeactivate=function(){this.emit(y._.Deactivate)},s}(O.EventEmitter)},30950:function(N,b,v){"use strict";v.r(b),v.d(b,{InjectedConnector:function(){return U},NoEthereumProviderError:function(){return j},UserRejectedRequestError:function(){return I}});var O=v(26939);function E(){return E=Object.assign||function(n){for(var o=1;o<arguments.length;o++){var t=arguments[o];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},E.apply(this,arguments)}function y(n,o){n.prototype=Object.create(o.prototype),n.prototype.constructor=n,n.__proto__=o}function P(n){return P=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},P(n)}function _(n,o){return _=Object.setPrototypeOf||function(r,e){return r.__proto__=e,r},_(n,o)}function m(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(n){return!1}}function s(n,o,t){return m()?s=Reflect.construct:s=function(e,i,c){var u=[null];u.push.apply(u,i);var f=Function.bind.apply(e,u),a=new f;return c&&_(a,c.prototype),a},s.apply(null,arguments)}function C(n){return Function.toString.call(n).indexOf("[native code]")!==-1}function d(n){var o=typeof Map=="function"?new Map:void 0;return d=function(r){if(r===null||!C(r))return r;if(typeof r!="function")throw new TypeError("Super expression must either be null or a function");if(typeof o!="undefined"){if(o.has(r))return o.get(r);o.set(r,e)}function e(){return s(r,arguments,P(this).constructor)}return e.prototype=Object.create(r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),_(e,r)},d(n)}function h(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}var A=typeof Symbol!="undefined"?Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator")):"@@iterator",D=typeof Symbol!="undefined"?Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")):"@@asyncIterator";function g(n,o){try{var t=n()}catch(r){return o(r)}return t&&t.then?t.then(void 0,o):t}function l(n){return n.hasOwnProperty("result")?n.result:n}var j=function(n){y(o,n);function o(){var t;return t=n.call(this)||this,t.name=t.constructor.name,t.message="No Ethereum provider was found on window.ethereum.",t}return o}(d(Error)),I=function(n){y(o,n);function o(){var t;return t=n.call(this)||this,t.name=t.constructor.name,t.message="The user rejected the request.",t}return o}(d(Error)),U=function(n){y(o,n);function o(r){var e;return e=n.call(this,r)||this,e.handleNetworkChanged=e.handleNetworkChanged.bind(h(e)),e.handleChainChanged=e.handleChainChanged.bind(h(e)),e.handleAccountsChanged=e.handleAccountsChanged.bind(h(e)),e.handleClose=e.handleClose.bind(h(e)),e}var t=o.prototype;return t.handleChainChanged=function(e){this.emitUpdate({chainId:e,provider:window.ethereum})},t.handleAccountsChanged=function(e){e.length===0?this.emitDeactivate():this.emitUpdate({account:e[0]})},t.handleClose=function(e,i){this.emitDeactivate()},t.handleNetworkChanged=function(e){this.emitUpdate({chainId:e,provider:window.ethereum})},t.activate=function(){try{var e=function(w){if(i)return w;function p(){return E({provider:window.ethereum},u?{account:u}:{})}var S=function(){if(!u)return Promise.resolve(window.ethereum.enable().then(function(R){return R&&l(R)[0]})).then(function(R){u=R})}();return S&&S.then?S.then(p):p(S)},i=!1,c=this;if(!window.ethereum)throw new j;window.ethereum.on&&(window.ethereum.on("chainChanged",c.handleChainChanged),window.ethereum.on("accountsChanged",c.handleAccountsChanged),window.ethereum.on("close",c.handleClose),window.ethereum.on("networkChanged",c.handleNetworkChanged)),window.ethereum.isMetaMask&&(window.ethereum.autoRefreshOnNetworkChange=!1);var u,f=g(function(){return Promise.resolve(window.ethereum.send("eth_requestAccounts").then(function(a){return l(a)[0]})).then(function(a){u=a})},function(a){if(a.code===4001)throw new I});return Promise.resolve(f&&f.then?f.then(e):e(f))}catch(a){return Promise.reject(a)}},t.getProvider=function(){try{return Promise.resolve(window.ethereum)}catch(e){return Promise.reject(e)}},t.getChainId=function(){try{var e=function(){function f(){if(!i)try{i=l(window.ethereum.send({method:"net_version"}))}catch(w){}return i||(window.ethereum.isDapper?i=l(window.ethereum.cachedResults.net_version):i=window.ethereum.chainId||window.ethereum.netVersion||window.ethereum.networkVersion||window.ethereum._chainId),i}var a=function(){if(!i){var w=g(function(){return Promise.resolve(window.ethereum.send("net_version").then(l)).then(function(p){i=p})},function(){});if(w&&w.then)return w.then(function(){})}}();return a&&a.then?a.then(f):f(a)};if(!window.ethereum)throw new j;var i,c=g(function(){return Promise.resolve(window.ethereum.send("eth_chainId").then(l)).then(function(u){i=u})},function(){});return Promise.resolve(c&&c.then?c.then(e):e(c))}catch(u){return Promise.reject(u)}},t.getAccount=function(){try{var e=function(){function f(){return i||(i=l(window.ethereum.send({method:"eth_accounts"}))[0]),i}var a=function(){if(!i){var w=g(function(){return Promise.resolve(window.ethereum.enable().then(function(p){return l(p)[0]})).then(function(p){i=p})},function(){});if(w&&w.then)return w.then(function(){})}}();return a&&a.then?a.then(f):f(a)};if(!window.ethereum)throw new j;var i,c=g(function(){return Promise.resolve(window.ethereum.send("eth_accounts").then(function(u){return l(u)[0]})).then(function(u){i=u})},function(){});return Promise.resolve(c&&c.then?c.then(e):e(c))}catch(u){return Promise.reject(u)}},t.deactivate=function(){window.ethereum&&window.ethereum.removeListener&&(window.ethereum.removeListener("chainChanged",this.handleChainChanged),window.ethereum.removeListener("accountsChanged",this.handleAccountsChanged),window.ethereum.removeListener("close",this.handleClose),window.ethereum.removeListener("networkChanged",this.handleNetworkChanged))},t.isAuthorized=function(){try{return window.ethereum?Promise.resolve(g(function(){return Promise.resolve(window.ethereum.send("eth_accounts").then(function(e){return l(e).length>0}))},function(){return!1})):Promise.resolve(!1)}catch(e){return Promise.reject(e)}},o}(O.Q)}}]);
