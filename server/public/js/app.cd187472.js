(function(e){function t(t){for(var a,r,i=t[0],s=t[1],u=t[2],l=0,d=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);f&&f(t);while(d.length)d.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,r=1;r<n.length;r++){var i=n[r];0!==o[i]&&(a=!1)}a&&(c.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={app:0},o={app:0},c=[];function i(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-119ada4c":"00609501","chunk-2d0ac3bb":"4f381397","chunk-2d21629f":"05ddd75d","chunk-37b6586c":"640cb17b","chunk-39e529ec":"ff60d31f","chunk-4aedaf34":"3a67ac92","chunk-b267d934":"59976a5e"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-119ada4c":1,"chunk-37b6586c":1,"chunk-39e529ec":1,"chunk-4aedaf34":1,"chunk-b267d934":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-119ada4c":"659157a6","chunk-2d0ac3bb":"31d6cfe0","chunk-2d21629f":"31d6cfe0","chunk-37b6586c":"5d5d710b","chunk-39e529ec":"5d5d710b","chunk-4aedaf34":"f96b1464","chunk-b267d934":"d281e5da"}[e]+".css",o=s.p+a,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var u=c[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===o))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){u=d[i],l=u.getAttribute("data-href");if(l===a||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete r[e],f.parentNode.removeChild(f),n(c)},f.href=o;var v=document.getElementsByTagName("head")[0];v.appendChild(f)})).then((function(){r[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var c=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}o[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0d79":function(e,t,n){},"0f13":function(e,t,n){var a={"./dashboard/archives.vue":["f1d3","chunk-4aedaf34"],"./dashboard/article.vue":["080f","chunk-119ada4c"],"./dashboard/categories.vue":["6117","chunk-b267d934"],"./dashboard/login.vue":["c0fb","chunk-2d21629f"],"./dashboard/logout.vue":["1952","chunk-2d0ac3bb"],"./detail.vue":["5358","chunk-39e529ec"],"./index.vue":["6e78","chunk-37b6586c"]};function r(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],r=t[0];return n.e(t[1]).then((function(){return n(r)}))}r.keys=function(){return Object.keys(a)},r.id="0f13",e.exports=r},"4b4d":function(e,t,n){"use strict";var a=n("0d79"),r=n.n(a);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("4160"),n("b64b"),n("159b"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=n("bc3a"),o=n.n(r),c=n("a7fe"),i=n.n(c),s=n("58ca"),u=n("9062"),l=n.n(u),d=n("0628"),f=n.n(d),v=n("7bb1"),h=n("60d4"),p=n("4c93"),b=(n("4989"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)}),m=[],g=(n("cf25"),n("2877")),k={},y=Object(g["a"])(k,b,m,!1,null,null,null),C=y.exports,_=n("9483");Object(_["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7");var w=n("8c4f"),x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("nav",{staticClass:"navbar navbar-expand-lg navbar-dark",staticStyle:{"background-color":"#0a7773"}},[n("router-link",{staticClass:"navbar-brand",attrs:{to:{name:"Index"}}},[n("i",{staticClass:"fa fa-address-book",attrs:{"aria-hidden":"true"}}),e._v(" 部落格 ")]),e._m(0),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[n("ul",{staticClass:"navbar-nav mr-auto"},[n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",class:{active:"Index"==e.router},attrs:{to:{name:"Index"}}},[e._v("首頁")])],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",class:{active:"Dashboard"==e.router},attrs:{to:{name:"Login"}}},[e._v("後台")])],1)])])],1),n("router-view"),e._m(1)],1)},O=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[n("span",{staticClass:"navbar-toggler-icon"})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",{staticClass:"bg-light text-muted py-5"},[n("div",{staticClass:"container"},[n("ul",{staticClass:"list-unstyled d-flex justify-content-between"},[n("li",{},[e._v("© Copright 2020 部落格")])])])])}],j=(n("b0c0"),n("96cf"),n("1da1")),A={name:"Home",data:function(){return{router:""}},created:function(){var e=this;return Object(j["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.router=e.$route.name;case 1:case"end":return t.stop()}}),t)})))()}},E=A,N=(n("4b4d"),Object(g["a"])(E,x,O,!1,null,"0bede943",null)),L=N.exports,S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("nav",{staticClass:"navbar navbar-expand-md navbar-dark bg-dark"},[n("a",{staticClass:"navbar-brand",attrs:{href:"/auth/login"}},[e._v("Blog 控制台")]),e._m(0),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNavAltMarkup"}},[n("div",{staticClass:"navbar-nav"},[n("router-link",{staticClass:"nav-item nav-link",attrs:{to:{name:"Index"}}},[e._v("回前台 ")]),n("router-link",{staticClass:"nav-item nav-link",attrs:{to:{name:"Categories"}}},[e._v("管理文章分類 ")]),n("router-link",{staticClass:"nav-item nav-link",attrs:{to:{name:"Archives"}}},[e._v(" 文章列表 ")]),n("router-link",{staticClass:"nav-item nav-link",attrs:{to:{name:"Logout"}}},[e._v(" 登出 ")])],1)])]),n("div",{staticClass:"main container-fluid my-4"},[n("router-view")],1),n("footer",{staticClass:"mt-5 py-3 bg-light text-secondary text-center"},[e._v(" 後台管理系統 ")])])},P=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"}},[n("span",{staticClass:"navbar-toggler-icon"})])}],T={name:"Deshboard"},M=T,q=Object(g["a"])(M,S,P,!1,null,null,null),D=q.exports,$=function(e){return function(){return n("0f13")("./".concat(e,".vue"))}},I=function(e){return function(){return n("6139")("./".concat(e,".vue"))}};a["a"].use(w["a"]);var B=[{path:"/",component:L,children:[{path:"",name:"Index",component:$("index")},{path:"detail/:wordId",name:"detail",component:$("detail")}]},{path:"/dashboard",name:"Dashboard",component:D,children:[{path:"*",redirect:{name:"Login"},meta:{requiresAuth:!0}},{path:"login",name:"Login",component:I("login")},{path:"categories",name:"Categories",component:I("categories"),meta:{requiresAuth:!0}},{path:"archives",name:"Archives",component:I("archives"),meta:{requiresAuth:!0}},{path:"article/:articleId",name:"Article",component:I("article"),meta:{requiresAuth:!0}},{path:"logout",name:"Logout",component:I("logout"),meta:{requiresAuth:!0}}]}],F=new w["a"]({mode:"history",base:"/",routes:B});F.beforeEach((function(e,t,n){var r=a["a"].prototype.$session.get("jwt");if(e.meta.requiresAuth){console.log("需驗證");var o="/api/auth/check";a["a"].prototype.axios.post(o,{token:r}).then((function(e){e.data.success?n():n({name:"Login"})})).catch((function(e){console.log(e)}))}else n()}));var U=F,H=n("2f62");a["a"].use(H["a"]);var J=new H["a"].Store({state:{},mutations:{},actions:{},modules:{}});a["a"].use(i.a,o.a),a["a"].use(n("2ead")),a["a"].use(s["a"]),a["a"].component("Loading",l.a),a["a"].use(f.a),Object.keys(p).forEach((function(e){Object(v["c"])(e,p[e])})),a["a"].component("ValidationObserver",v["a"]),a["a"].component("ValidationProvider",v["b"]),Object(v["d"])("zh_TW",h),a["a"].config.productionTip=!1,new a["a"]({router:U,store:J,render:function(e){return e(C)}}).$mount("#app")},6139:function(e,t,n){var a={"./archives.vue":["f1d3","chunk-4aedaf34"],"./article.vue":["080f","chunk-119ada4c"],"./categories.vue":["6117","chunk-b267d934"],"./login.vue":["c0fb","chunk-2d21629f"],"./logout.vue":["1952","chunk-2d0ac3bb"]};function r(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],r=t[0];return n.e(t[1]).then((function(){return n(r)}))}r.keys=function(){return Object.keys(a)},r.id="6139",e.exports=r},cf25:function(e,t,n){"use strict";var a=n("fea6"),r=n.n(a);r.a},fea6:function(e,t,n){}});
//# sourceMappingURL=app.cd187472.js.map