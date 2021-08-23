(self.webpackChunk=self.webpackChunk||[]).push([[929],{26939:function(E,g,c){"use strict";c.d(g,{Q:function(){return O}});var y=c(17187),I=c.n(y),f=c(53653);function v(a,h){a.prototype=Object.create(h.prototype),a.prototype.constructor=a,a.__proto__=h}var O=function(a){v(h,a);function h(s){var d,w=s===void 0?{}:s,A=w.supportedChainIds;return d=a.call(this)||this,d.supportedChainIds=A,d}var p=h.prototype;return p.emitUpdate=function(d){this.emit(f._.Update,d)},p.emitError=function(d){this.emit(f._.Error,d)},p.emitDeactivate=function(){this.emit(f._.Deactivate)},h}(y.EventEmitter)},83929:function(E,g,c){"use strict";c.r(g),c.d(g,{URI_AVAILABLE:function(){return d},UserRejectedRequestError:function(){return w},WalletConnectConnector:function(){return D}});var y=c(26939);function I(n,o){n.prototype=Object.create(o.prototype),n.prototype.constructor=n,v(n,o)}function f(n){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)},f(n)}function v(n,o){return v=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},v(n,o)}function O(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(n){return!1}}function a(n,o,r){return O()?a=Reflect.construct:a=function(e,i,l){var u=[null];u.push.apply(u,i);var C=Function.bind.apply(e,u),P=new C;return l&&v(P,l.prototype),P},a.apply(null,arguments)}function h(n){return Function.toString.call(n).indexOf("[native code]")!==-1}function p(n){var o=typeof Map=="function"?new Map:void 0;return p=function(t){if(t===null||!h(t))return t;if(typeof t!="function")throw new TypeError("Super expression must either be null or a function");if(typeof o!="undefined"){if(o.has(t))return o.get(t);o.set(t,e)}function e(){return a(t,arguments,f(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),v(e,t)},p(n)}function s(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}var d="URI_AVAILABLE",w=function(n){I(o,n);function o(){var r;return r=n.call(this)||this,r.name=r.constructor.name,r.message="The user rejected the request.",r}return o}(p(Error));function A(n){var o=n.supportedChainIds,r=n.rpc;return o||(r?Object.keys(r).map(function(t){return Number(t)}):void 0)}var D=function(n){I(o,n);function o(t){var e;return e=n.call(this,{supportedChainIds:A(t)})||this,e.config=t,e.handleChainChanged=e.handleChainChanged.bind(s(e)),e.handleAccountsChanged=e.handleAccountsChanged.bind(s(e)),e.handleDisconnect=e.handleDisconnect.bind(s(e)),e}var r=o.prototype;return r.handleChainChanged=function(e){this.emitUpdate({chainId:e})},r.handleAccountsChanged=function(e){this.emitUpdate({account:e[0]})},r.handleDisconnect=function(){this.emitDeactivate(),this.walletConnectProvider&&(this.walletConnectProvider.stop(),this.walletConnectProvider.removeListener("chainChanged",this.handleChainChanged),this.walletConnectProvider.removeListener("accountsChanged",this.handleAccountsChanged),this.walletConnectProvider=void 0),this.emitDeactivate()},r.activate=function(){try{var e=this,i=function(){function C(){return Promise.resolve(e.walletConnectProvider.enable().then(function(m){return m[0]}).catch(function(m){throw m.message==="User closed modal"?new w:m})).then(function(m){return e.walletConnectProvider.on("disconnect",e.handleDisconnect),e.walletConnectProvider.on("chainChanged",e.handleChainChanged),e.walletConnectProvider.on("accountsChanged",e.handleAccountsChanged),{provider:e.walletConnectProvider,account:m}})}var P=function(){if(!e.walletConnectProvider.wc.connected)return Promise.resolve(e.walletConnectProvider.wc.createSession({chainId:e.supportedChainIds&&e.supportedChainIds.length>0?e.supportedChainIds[0]:1})).then(function(){e.emit(d,e.walletConnectProvider.wc.uri)})}();return P&&P.then?P.then(C):C(P)},l=function(){if(!e.walletConnectProvider)return Promise.resolve(Promise.all([c.e(118),c.e(913),c.e(536),c.e(413),c.e(90),c.e(960),c.e(485),c.e(348)]).then(c.bind(c,72485)).then(function(u){var C;return(C=u==null?void 0:u.default)!=null?C:u})).then(function(u){e.walletConnectProvider=new u(e.config)})}();return Promise.resolve(l&&l.then?l.then(i):i(l))}catch(u){return Promise.reject(u)}},r.getProvider=function(){try{var e=this;return Promise.resolve(e.walletConnectProvider)}catch(i){return Promise.reject(i)}},r.getChainId=function(){try{var e=this;return Promise.resolve(e.walletConnectProvider.send("eth_chainId"))}catch(i){return Promise.reject(i)}},r.getAccount=function(){try{var e=this;return Promise.resolve(e.walletConnectProvider.send("eth_accounts").then(function(i){return i[0]}))}catch(i){return Promise.reject(i)}},r.deactivate=function(){this.walletConnectProvider&&(this.walletConnectProvider.stop(),this.walletConnectProvider.removeListener("disconnect",this.handleDisconnect),this.walletConnectProvider.removeListener("chainChanged",this.handleChainChanged),this.walletConnectProvider.removeListener("accountsChanged",this.handleAccountsChanged))},r.close=function(){try{var e,i=this;return Promise.resolve((e=i.walletConnectProvider)==null?void 0:e.close()).then(function(){})}catch(l){return Promise.reject(l)}},o}(y.Q)}}]);
