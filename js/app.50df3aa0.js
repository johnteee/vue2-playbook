(function(e){function t(t){for(var n,a,i=t[0],c=t[1],l=t[2],s=0,f=[];s<i.length;s++)a=i[s],o[a]&&f.push(o[a][0]),o[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);p&&p(t);while(f.length)f.shift()();return u.push.apply(u,l||[]),r()}function r(){for(var e,t=0;t<u.length;t++){for(var r=u[t],n=!0,a=1;a<r.length;a++){var i=r[a];0!==o[i]&&(n=!1)}n&&(u.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},a={app:0},o={app:0},u=[];function i(e){return c.p+"js/"+({about:"about",ajax:"ajax",clock:"clock","drag~graph~uml":"drag~graph~uml",drag:"drag",graph:"graph",uml:"uml",raf:"raf",recursive:"recursive","run-interval":"run-interval",test:"test"}[e]||e)+"."+{about:"930a3c7f",ajax:"590e90df",clock:"0941c52b","drag~graph~uml":"75e71c43",drag:"6da9e7a8",graph:"3ff30bd3",uml:"26ab2a44",raf:"e4fb06a9",recursive:"af75e5c4","run-interval":"c9d979b6",test:"cc950809"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],r={clock:1,drag:1,graph:1,uml:1,raf:1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise(function(t,r){for(var n="css/"+({about:"about",ajax:"ajax",clock:"clock","drag~graph~uml":"drag~graph~uml",drag:"drag",graph:"graph",uml:"uml",raf:"raf",recursive:"recursive","run-interval":"run-interval",test:"test"}[e]||e)+"."+{about:"31d6cfe0",ajax:"31d6cfe0",clock:"71ba016f","drag~graph~uml":"31d6cfe0",drag:"5e2b3bc5",graph:"4e866b38",uml:"47df8fa6",raf:"3b65e151",recursive:"31d6cfe0","run-interval":"31d6cfe0",test:"31d6cfe0"}[e]+".css",o=c.p+n,u=document.getElementsByTagName("link"),i=0;i<u.length;i++){var l=u[i],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===n||s===o))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){l=f[i],s=l.getAttribute("data-href");if(s===n||s===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");u.request=n,delete a[e],p.parentNode.removeChild(p),r(u)},p.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(p)}).then(function(){a[e]=0}));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var u=new Promise(function(t,r){n=o[e]=[t,r]});t.push(n[2]=u);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=i(e),l=function(t){s.onerror=s.onload=null,clearTimeout(f);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,u=new Error("Loading chunk "+e+" failed.\n("+n+": "+a+")");u.type=n,u.request=a,r[1](u)}o[e]=void 0}};var f=setTimeout(function(){l({type:"timeout",target:s})},12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var p=s;u.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("64a9"),a=r.n(n);a.a},"4f3d":function(e,t,r){},5604:function(e,t,r){"use strict";var n=r("4f3d"),a=r.n(n);a.a},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),a=r("d847"),o=r.n(a),u=r("795b"),i=r.n(u),c=r("bc3a"),l=r.n(c),s={},f=l.a.create(s);f.interceptors.request.use(function(e){return e},function(e){return i.a.reject(e)}),f.interceptors.response.use(function(e){return e},function(e){return i.a.reject(e)}),Plugin.install=function(e,t){e.axios=f,window.axios=f,o()(e.prototype,{axios:{get:function(){return f}},$axios:{get:function(){return f}}})},n["a"].use(Plugin);Plugin;var p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[e.showNav?r("div",{staticClass:"nav"},[r("router-link",{attrs:{to:"/"}},[e._v("Home")]),r("router-link",{attrs:{to:"/about"}},[e._v("About")]),r("router-link",{attrs:{to:"/ajax"}},[e._v("Ajax test")]),r("router-link",{attrs:{to:"/recursive"}},[e._v("Recursion test")]),r("router-link",{attrs:{to:"/run-interval"}},[e._v("Set interval test")]),r("router-link",{attrs:{to:"/raf"}},[e._v("Request animation frame test")]),r("router-link",{attrs:{to:"/drag"}},[e._v("Draggable")]),r("router-link",{attrs:{to:"/graph"}},[e._v("Graph")]),r("router-link",{attrs:{to:"/uml"}},[e._v("Graph2")]),r("router-link",{attrs:{to:"/clock"}},[e._v("Clock")]),r("router-link",{attrs:{to:"/sync-v-model-example"}},[e._v("Sync and v-model example")])],1):e._e(),r("div",{staticClass:"main"},[r("div",{staticClass:"toggle",on:{click:function(t){e.showNav=!e.showNav}}},[r("i",{staticClass:"fa fa-bars fa-2x",attrs:{"aria-hidden":"true"}})]),r("router-view")],1)])},d=[],m={data:function(){return{showNav:!0}}},h=m,v=(r("034f"),r("5604"),r("2877")),g=Object(v["a"])(h,p,d,!1,null,"edbed970",null),b=g.exports,k=r("8c4f"),y=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},x=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("img",{attrs:{alt:"Vue logo",src:r("cf05")}})])}],j={name:"home"},_=j,w=(r("7813"),Object(v["a"])(_,y,x,!1,null,"2e77b2b5",null)),P=w.exports;n["a"].use(k["a"]);var O=new k["a"]({base:"",routes:[{path:"/",name:"home",component:P},{path:"/ajax",name:"Ajax",component:function(){return r.e("ajax").then(r.bind(null,"4483"))}},{path:"/raf",name:"RequestAnimationFrame",component:function(){return r.e("raf").then(r.bind(null,"7430"))}},{path:"/run-interval",name:"Run Interval",component:function(){return r.e("run-interval").then(r.bind(null,"625c"))}},{path:"/recursive",name:"Run recursive",component:function(){return r.e("recursive").then(r.bind(null,"e1b2"))}},{path:"/drag",name:"drag",component:function(){return Promise.all([r.e("drag~graph~uml"),r.e("drag")]).then(r.bind(null,"a39b"))}},{path:"/graph",name:"graph",component:function(){return Promise.all([r.e("drag~graph~uml"),r.e("graph")]).then(r.bind(null,"8b30"))}},{path:"/clock",name:"clock",component:function(){return r.e("clock").then(r.bind(null,"79b0"))}},{path:"/sync-v-model-example",name:"sync-v-model-example",component:function(){return r.e("test").then(r.bind(null,"6ee3"))}},{path:"/about",name:"about",component:function(){return r.e("about").then(r.bind(null,"f820"))}},{path:"/uml",name:"uml",component:function(){return Promise.all([r.e("drag~graph~uml"),r.e("uml")]).then(r.bind(null,"03a3"))}}]});n["a"].config.productionTip=!1,new n["a"]({router:O,render:function(e){return e(b)}}).$mount("#app")},"64a9":function(e,t,r){},7813:function(e,t,r){"use strict";var n=r("b2f5"),a=r.n(n);a.a},b2f5:function(e,t,r){},cf05:function(e,t,r){e.exports=r.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.50df3aa0.js.map