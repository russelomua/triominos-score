!function(){function e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function t(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||a(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t,n,r,o,a,i){try{var u=e[a](i),s=u.value}catch(c){return void n(c)}u.done?t(s):Promise.resolve(s).then(r,o)}function r(e){return function(){var t=this,r=arguments;return new Promise(function(o,a){var i=e.apply(t,r);function u(e){n(i,o,a,u,s,"next",e)}function s(e){n(i,o,a,u,s,"throw",e)}u(void 0)})}}function o(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=a(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return u=e.done,e},e:function(e){s=!0,i=e},f:function(){try{u||null==n.return||n.return()}finally{if(s)throw i}}}}function a(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{k5eQ:function(n,a,i){"use strict";i.r(a),i.d(a,"ion_route",function(){return p}),i.d(a,"ion_route_redirect",function(){return v}),i.d(a,"ion_router",function(){return A}),i.d(a,"ion_router_link",function(){return U});var s=i("wEJo"),h=i("1vRN"),f=i("E/Mt"),l=i("74mu"),p=function(){function e(t){u(this,e),Object(s.o)(this,t),this.ionRouteDataChanged=Object(s.g)(this,"ionRouteDataChanged",7),this.url=""}return c(e,[{key:"onUpdate",value:function(e){this.ionRouteDataChanged.emit(e)}},{key:"onComponentProps",value:function(e,t){if(e!==t){var n=e?Object.keys(e):[],r=t?Object.keys(t):[];if(n.length===r.length){var a,i=o(n);try{for(i.s();!(a=i.n()).done;){var u=a.value;if(e[u]!==t[u])return void this.onUpdate(e)}}catch(s){i.e(s)}finally{i.f()}}else this.onUpdate(e)}}},{key:"connectedCallback",value:function(){this.ionRouteDataChanged.emit()}}],[{key:"watchers",get:function(){return{url:["onUpdate"],component:["onUpdate"],componentProps:["onComponentProps"]}}}]),e}(),v=function(){function e(t){u(this,e),Object(s.o)(this,t),this.ionRouteRedirectChanged=Object(s.g)(this,"ionRouteRedirectChanged",7)}return c(e,[{key:"propDidChange",value:function(){this.ionRouteRedirectChanged.emit()}},{key:"connectedCallback",value:function(){this.ionRouteRedirectChanged.emit()}}],[{key:"watchers",get:function(){return{from:["propDidChange"],to:["propDidChange"]}}}]),e}(),d=function(e){return"/"+e.filter(function(e){return e.length>0}).join("/")},g=function(e){var t,n=[""];if(null!=e){var r=e.indexOf("?");r>-1&&(t=e.substr(r+1),e=e.substr(0,r)),0===(n=e.split("/").map(function(e){return e.trim()}).filter(function(e){return e.length>0})).length&&(n=[""])}return{segments:n,queryString:t}},m=function(){var e=r(regeneratorRuntime.mark(function e(t,n,r,o){var a,i,u,s,c,f=arguments;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=f.length>4&&void 0!==f[4]&&f[4],i=f.length>5?f[5]:void 0,e.prev=2,u=y(t),!(o>=n.length)&&u){e.next=6;break}return e.abrupt("return",a);case 6:return e.next=8,new Promise(function(e){return Object(h.c)(u,e)});case 8:return s=n[o],e.next=11,u.setRouteId(s.id,s.params,r,i);case 11:return(c=e.sent).changed&&(r="root",a=!0),e.next=15,m(c.element,n,r,o+1,a,i);case 15:if(a=e.sent,e.t0=c.markVisible,!e.t0){e.next=20;break}return e.next=20,c.markVisible();case 20:return e.abrupt("return",a);case 23:return e.prev=23,e.t1=e.catch(2),e.abrupt("return",(console.error(e.t1),!1));case 26:case"end":return e.stop()}},e,null,[[2,23]])}));return function(t,n,r,o){return e.apply(this,arguments)}}(),b=":not([no-router]) ion-nav, :not([no-router]) ion-tabs, :not([no-router]) ion-router-outlet",y=function(e){if(e){if(e.matches(b))return e;var t=e.querySelector(b);return null!=t?t:void 0}},w=function(e,t){return t.find(function(t){return function(e,t){var n=t.from;if(void 0===t.to)return!1;if(n.length>e.length)return!1;for(var r=0;r<n.length;r++){var o=n[r];if("*"===o)return!0;if(o!==e[r])return!1}return n.length===e.length}(e,t)})},k=function(e,t){for(var n=Math.min(e.length,t.length),r=0;r<n&&e[r].toLowerCase()===t[r].id;r++);return r},R=function(e,t){for(var n,r=new O(e),a=!1,i=0;i<t.length;i++){var u=t[i].path;if(""===u[0])a=!0;else{var s,c=o(u);try{for(c.s();!(s=c.n()).done;){var h=s.value,f=r.next();if(":"===h[0]){if(""===f)return null;((n=n||[])[i]||(n[i]={}))[h.slice(1)]=f}else if(f!==h)return null}}catch(l){c.e(l)}finally{c.f()}a=!1}}return a&&a!==(""===r.next())?null:n?t.map(function(e,t){return{id:e.id,path:e.path,params:x(e.params,n[t]),beforeEnter:e.beforeEnter,beforeLeave:e.beforeLeave}}):t},x=function(e,t){return e||t?Object.assign(Object.assign({},e),t):void 0},C=function(e,t){var n,r=null,a=0,i=o(t);try{for(i.s();!(n=i.n()).done;){var u=n.value,s=R(e,u);if(null!==s){var c=j(s);c>a&&(a=c,r=s)}}}catch(h){i.e(h)}finally{i.f()}return r},j=function(e){var t,n=1,r=1,a=o(e);try{for(a.s();!(t=a.n()).done;){var i,u=o(t.value.path);try{for(u.s();!(i=u.n()).done;){var s=i.value;":"===s[0]?n+=Math.pow(1,r):""!==s&&(n+=Math.pow(2,r)),r++}}catch(c){u.e(c)}finally{u.f()}}}catch(c){a.e(c)}finally{a.f()}return n},O=function(){function e(t){u(this,e),this.path=t.slice()}return c(e,[{key:"next",value:function(){return this.path.length>0?this.path.shift():""}}]),e}(),S=function(e,t){return t in e?e[t]:e.hasAttribute(t)?e.getAttribute(t):null},P=function(e){return Array.from(e.children).filter(function(e){return"ION-ROUTE-REDIRECT"===e.tagName}).map(function(e){var t=S(e,"to");return{from:g(S(e,"from")).segments,to:null==t?void 0:g(t)}})},E=function(e){return L(D(e))},D=function e(t){return Array.from(t.children).filter(function(e){return"ION-ROUTE"===e.tagName&&e.component}).map(function(t){var n=S(t,"component");return{path:g(S(t,"url")).segments,id:n.toLowerCase(),params:t.componentProps,beforeLeave:t.beforeLeave,beforeEnter:t.beforeEnter,children:e(t)}})},L=function(e){var t,n=[],r=o(e);try{for(r.s();!(t=r.n()).done;){var a=t.value;N([],n,a)}}catch(i){r.e(i)}finally{r.f()}return n},N=function e(t,n,r){if((t=t.slice()).push({id:r.id,path:r.path,params:r.params,beforeLeave:r.beforeLeave,beforeEnter:r.beforeEnter}),0!==r.children.length){var a,i=o(r.children);try{for(i.s();!(a=i.n()).done;){e(t,n,a.value)}}catch(u){i.e(u)}finally{i.f()}}else n.push(t)},A=function(){function e(t){u(this,e),Object(s.o)(this,t),this.ionRouteWillChange=Object(s.g)(this,"ionRouteWillChange",7),this.ionRouteDidChange=Object(s.g)(this,"ionRouteDidChange",7),this.previousPath=null,this.busy=!1,this.state=0,this.lastState=0,this.root="/",this.useHash=!0}var n,a,i,f,l,p,v,b,R,j,O;return c(e,[{key:"componentWillLoad",value:(O=r(regeneratorRuntime.mark(function e(){var t,n,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(document.body)?Promise.resolve():new Promise(function(e){window.addEventListener("ionNavWillLoad",e,{once:!0})});case 2:return e.next=4,this.runGuards(this.getPath());case 4:if(!0===(t=e.sent)){e.next=13;break}if("object"!=typeof t){e.next=11;break}return n=t.redirect,r=g(n),this.setPath(r.segments,"root",r.queryString),e.next=11,this.writeNavStateRoot(r.segments,"root");case 11:e.next=15;break;case 13:return e.next=15,this.onRoutesChanged();case 15:case"end":return e.stop()}},e,this)})),function(){return O.apply(this,arguments)})},{key:"componentDidLoad",value:function(){window.addEventListener("ionRouteRedirectChanged",Object(h.n)(this.onRedirectChanged.bind(this),10)),window.addEventListener("ionRouteDataChanged",Object(h.n)(this.onRoutesChanged.bind(this),100))}},{key:"onPopState",value:(j=r(regeneratorRuntime.mark(function e(){var t,n,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.historyDirection(),n=this.getPath(),e.next=4,this.runGuards(n);case 4:if(!0===(r=e.sent)){e.next=9;break}if("object"==typeof r){e.next=8;break}return e.abrupt("return",!1);case 8:n=g(r.redirect).segments;case 9:return e.abrupt("return",this.writeNavStateRoot(n,t));case 10:case"end":return e.stop()}},e,this)})),function(){return j.apply(this,arguments)})},{key:"onBackButton",value:function(e){var t=this;e.detail.register(0,function(e){t.back(),e()})}},{key:"canTransition",value:(R=r(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.runGuards();case 2:return t=e.sent,e.abrupt("return",!0===t||"object"==typeof t&&t.redirect);case 4:case"end":return e.stop()}},e,this)})),function(){return R.apply(this,arguments)})},{key:"push",value:(b=r(regeneratorRuntime.mark(function e(t){var n,r,o,a,i=arguments;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:"forward",r=i.length>2?i[2]:void 0,t.startsWith(".")&&(t=new URL(t,window.location.href).pathname),o=g(t),e.next=6,this.runGuards(o.segments);case 6:if(!0===(a=e.sent)){e.next=11;break}if("object"==typeof a){e.next=10;break}return e.abrupt("return",!1);case 10:o=g(a.redirect);case 11:return e.abrupt("return",(this.setPath(o.segments,n,o.queryString),this.writeNavStateRoot(o.segments,n,r)));case 12:case"end":return e.stop()}},e,this)})),function(e){return b.apply(this,arguments)})},{key:"back",value:function(){return window.history.back(),Promise.resolve(this.waitPromise)}},{key:"printDebug",value:(v=r(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:(function(e){console.group("[ion-core] ROUTES[".concat(e.length,"]"));var n,r=o(e);try{var a=function(){var e=n.value,r=[];e.forEach(function(e){return r.push.apply(r,t(e.path))});var o=e.map(function(e){return e.id});console.debug("%c ".concat(d(r)),"font-weight: bold; padding-left: 20px","=>\t","(".concat(o.join(", "),")"))};for(r.s();!(n=r.n()).done;)a()}catch(i){r.e(i)}finally{r.f()}console.groupEnd()})(E(this.el)),function(e){console.group("[ion-core] REDIRECTS[".concat(e.length,"]"));var t,n=o(e);try{for(n.s();!(t=n.n()).done;){var r=t.value;r.to&&console.debug("FROM: ","$c ".concat(d(r.from)),"font-weight: bold"," TO: ","$c ".concat(d(r.to.segments)),"font-weight: bold")}}catch(a){n.e(a)}finally{n.f()}console.groupEnd()}(P(this.el));case 1:case"end":return e.stop()}},e,this)})),function(){return v.apply(this,arguments)})},{key:"navChanged",value:(p=r(regeneratorRuntime.mark(function e(t){var n,a,i,u,s;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.busy){e.next=2;break}return e.abrupt("return",(console.warn("[ion-router] router is busy, navChanged was cancelled"),!1));case 2:return e.next=4,function(){var e=r(regeneratorRuntime.mark(function e(t){var n,r,o,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=[],o=window.document.body;case 2:if(!(r=y(o))){e.next=11;break}return e.next=5,r.getRouteId();case 5:if(a=e.sent){e.next=8;break}return e.abrupt("break",11);case 8:o=a.element,a.element=void 0,n.push(a);case 9:e.next=2;break;case 11:return e.abrupt("return",{ids:n,outlet:r});case 12:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()();case 4:if(n=e.sent,a=n.ids,i=n.outlet,u=function(e,t){var n,r=null,a=0,i=e.map(function(e){return e.id}),u=o(t);try{for(u.s();!(n=u.n()).done;){var s=n.value,c=k(i,s);c>a&&(r=s,a=c)}}catch(h){u.e(h)}finally{u.f()}return r?r.map(function(t,n){return{id:t.id,path:t.path,params:x(t.params,e[n]&&e[n].params)}}):null}(a,E(this.el))){e.next=10;break}return e.abrupt("return",(console.warn("[ion-router] no matching URL for ",a.map(function(e){return e.id})),!1));case 10:if(!(s=function(e){var t,n=[],r=o(e);try{for(r.s();!(t=r.n()).done;){var a,i=t.value,u=o(i.path);try{for(u.s();!(a=u.n()).done;){var s=a.value;if(":"===s[0]){var c=i.params&&i.params[s.slice(1)];if(!c)return null;n.push(c)}else""!==s&&n.push(s)}}catch(h){u.e(h)}finally{u.f()}}}catch(h){r.e(h)}finally{r.f()}return n}(u))){e.next=18;break}return this.setPath(s,t),e.next=15,this.safeWriteNavState(i,u,"root",s,null,a.length);case 15:e.t0=!0,e.next=19;break;case 18:e.t0=(console.warn("[ion-router] router could not match path because some required param is missing"),!1);case 19:return e.abrupt("return",e.t0);case 20:case"end":return e.stop()}},e,this)})),function(e){return p.apply(this,arguments)})},{key:"onRedirectChanged",value:function(){var e=this.getPath();e&&w(e,P(this.el))&&this.writeNavStateRoot(e,"root")}},{key:"onRoutesChanged",value:function(){return this.writeNavStateRoot(this.getPath(),"root")}},{key:"historyDirection",value:function(){var e,t=window;null===t.history.state&&(this.state++,t.history.replaceState(this.state,t.document.title,null===(e=t.document.location)||void 0===e?void 0:e.href));var n=t.history.state,r=this.lastState;return this.lastState=n,n>r||n>=r&&r>0?"forward":n<r?"back":"root"}},{key:"writeNavStateRoot",value:(l=r(regeneratorRuntime.mark(function e(t,n,r){var o,a,i,u,s,c,h,f;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",(console.error("[ion-router] URL is not part of the routing set"),!1));case 2:return o=P(this.el),a=w(t,o),i=null,a&&(u=a.to,s=u.segments,c=u.queryString,this.setPath(s,n,c),i=a.from,t=s),h=E(this.el),f=C(t,h),e.abrupt("return",f?this.safeWriteNavState(document.body,f,n,t,i,0,r):(console.error("[ion-router] the path does not match any route"),!1));case 7:case"end":return e.stop()}},e,this)})),function(e,t,n){return l.apply(this,arguments)})},{key:"safeWriteNavState",value:(f=r(regeneratorRuntime.mark(function e(t,n,r,o,a){var i,u,s,c,h=arguments;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return i=h.length>5&&void 0!==h[5]?h[5]:0,u=h.length>6?h[6]:void 0,e.next=4,this.lock();case 4:return s=e.sent,c=!1,e.prev=6,e.next=9,this.writeNavState(t,n,r,o,a,i,u);case 9:c=e.sent,e.next=15;break;case 12:e.prev=12,e.t0=e.catch(6),console.error(e.t0);case 15:return e.abrupt("return",(s(),c));case 16:case"end":return e.stop()}},e,this,[[6,12]])})),function(e,t,n,r,o){return f.apply(this,arguments)})},{key:"lock",value:(i=r(regeneratorRuntime.mark(function e(){var t,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.waitPromise,this.waitPromise=new Promise(function(e){return n=e}),e.t0=void 0!==t,!e.t0){e.next=6;break}return e.next=6,t;case 6:return e.abrupt("return",n);case 7:case"end":return e.stop()}},e,this)})),function(){return i.apply(this,arguments)})},{key:"runGuards",value:(a=r(regeneratorRuntime.mark(function e(){var t,n,r,o,a,i,u,s,c=arguments;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=c.length>0&&void 0!==c[0]?c[0]:this.getPath(),void 0===(n=c.length>1?c[1]:void 0)&&(n=g(this.previousPath).segments),t&&n){e.next=4;break}return e.abrupt("return",!0);case 4:if(r=E(this.el),o=C(n,r),a=o&&o[o.length-1].beforeLeave,e.t0=!a,e.t0){e.next=12;break}return e.next=11,a();case 11:e.t0=e.sent;case 12:if(!1!==(i=e.t0)&&"object"!=typeof i){e.next=15;break}return e.abrupt("return",i);case 15:return u=C(t,r),s=u&&u[u.length-1].beforeEnter,e.abrupt("return",!s||s());case 17:case"end":return e.stop()}},e,this)})),function(){return a.apply(this,arguments)})},{key:"writeNavState",value:(n=r(regeneratorRuntime.mark(function e(t,n,r,o,a){var i,u,s,c,h=arguments;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(i=h.length>5&&void 0!==h[5]?h[5]:0,u=h.length>6?h[6]:void 0,!this.busy){e.next=4;break}return e.abrupt("return",(console.warn("[ion-router] router is busy, transition was cancelled"),!1));case 4:return this.busy=!0,(s=this.routeChangeEvent(o,a))&&this.ionRouteWillChange.emit(s),e.next=9,m(t,n,r,i,!1,u);case 9:return c=e.sent,e.abrupt("return",(this.busy=!1,s&&this.ionRouteDidChange.emit(s),c));case 11:case"end":return e.stop()}},e,this)})),function(e,t,r,o,a){return n.apply(this,arguments)})},{key:"setPath",value:function(e,n,r){var o=this;this.state++,function(e,n,r,a,i,u,s){var c=function(e,t,n){var r=d(e);return t&&(r="#"+r),void 0!==n&&(r+="?"+n),r}([].concat(t(g(o.root).segments),t(a)),r,s);"forward"===i?e.pushState(u,"",c):e.replaceState(u,"",c)}(window.history,0,this.useHash,e,n,this.state,r)}},{key:"getPath",value:function(){var e,t,n,r,o=this;return e=window.location,t=this.useHash,n=g(o.root).segments,r=t?e.hash.slice(1):e.pathname,function(e,t){if(e.length>t.length)return null;if(e.length<=1&&""===e[0])return t;for(var n=0;n<e.length;n++)if(e[n]!==t[n])return null;return t.length===e.length?[""]:t.slice(e.length)}(n,g(r).segments)}},{key:"routeChangeEvent",value:function(e,t){var n=this.previousPath,r=d(e);return this.previousPath=r,r===n?null:{from:n,redirectedFrom:t?d(t):null,to:r}}},{key:"el",get:function(){return Object(s.k)(this)}}]),e}(),U=function(){function t(e){var n=this;u(this,t),Object(s.o)(this,e),this.routerDirection="forward",this.onClick=function(e){Object(l.d)(n.href,e,n.routerDirection,n.routerAnimation)}}return c(t,[{key:"render",value:function(){var t,n=Object(f.b)(this),r={href:this.href,rel:this.rel,target:this.target};return Object(s.j)(s.c,{onClick:this.onClick,class:Object(l.a)(this.color,(t={},e(t,n,!0),e(t,"ion-activatable",!0),t))},Object(s.j)("a",Object.assign({},r),Object(s.j)("slot",null)))}}]),t}();U.style=":host{--background:transparent;--color:var(--ion-color-primary, #3880ff);background:var(--background);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}a{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit}"}}])}();