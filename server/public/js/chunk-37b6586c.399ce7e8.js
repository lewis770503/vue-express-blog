(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-37b6586c"],{"0d2c":function(t,a,e){"use strict";var i=e("b377"),n=e.n(i);n.a},"1dde":function(t,a,e){var i=e("d039"),n=e("b622"),r=e("2d00"),c=n("species");t.exports=function(t){return r>=51||!i((function(){var a=[],e=a.constructor={};return e[c]=function(){return{foo:1}},1!==a[t](Boolean).foo}))}},"6e78":function(t,a,e){"use strict";e.r(a);var i,n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("loading",{attrs:{loader:"spinner",active:t.isLoading,"can-cancel":!1,"is-full-page":!0,"background-color":t.loadingbgColor,color:t.loadingColor},on:{"update:active":function(a){t.isLoading=a}}}),e("div",{staticClass:"container"},[e("div",{staticClass:"row my-5 justify-content-center"},[e("div",{staticClass:"col-12"},[e("a",{staticClass:"btn btn-outline-info mr-2",class:{active:"all"==t.data.page_category},attrs:{href:""},on:{click:function(a){return a.preventDefault(),t.getList("all")}}},[t._v("All")]),t._l(t.data.categories,(function(a,i){return e("a",{key:a.id,staticClass:"btn btn-outline-info mr-2",class:{active:t.data.page_category===i},attrs:{href:"javascript:;",index:i},on:{click:function(e){return e.preventDefault(),t.getList(a.id)}}},[t._v(t._s(a.name))])}))],2),e("div",{staticClass:"row my-5 justify-content-center"},[e("div",{staticClass:"col-md-12"},[t._l(t.data.articles,(function(a,i){return e("div",{key:a.id,staticClass:"card mb-3",attrs:{index:i}},[e("div",{staticClass:"card-body"},[e("router-link",{attrs:{to:{name:"detail",params:{wordId:a.id}}}},[e("h2",{staticClass:"text-primary"},[t._v(t._s(a.title))])]),e("div",{staticClass:"d-flex flex-row text-secondary "},[e("div",{staticClass:"p-2 card-icon"},[e("i",{staticClass:"bi bi-person-fill"}),t._v(" "+t._s(a.user)+" ")]),e("div",{staticClass:"p-2 card-icon"},[e("i",{staticClass:"bi bi-calendar3-fill"}),t._v(" "+t._s(t._f("moment")(a.update_time,"YYYY/MM/DD h:mm:ss"))+" ")]),e("div",{staticClass:"p-2 card-icon"},[e("i",{staticClass:"bi bi-tag-fill",attrs:{"aria-hidden":"true"}}),e("a",{staticClass:"text-info",attrs:{href:"javascript:;"},on:{click:function(e){return e.preventDefault(),t.getList(a.category)}}},[t._v(" "+t._s(t.data.categories[a.category].name)+" ")])])])],1)])})),t.data.dataNull?e("div",[e("h2",[t._v("目前暫無資料")])]):t._e()],2)]),t.data.dataNull?t._e():e("nav",{staticClass:"my-2",attrs:{"aria-label":"Page navigation example"}},[e("ul",{staticClass:"pagination justify-content-center"},[e("li",{staticClass:"page-item",class:{disabled:!t.pagination.hasPrev}},[e("a",{staticClass:"page-link",attrs:{href:"",tabindex:"-1"},on:{click:function(a){return a.preventDefault(),t.getList(t.data.page_category,t.pagination.currentPage-1)}}},[t._v("Previous")])]),t._l(t.pagination.maxPage,(function(a){return e("li",{staticClass:"page-item",class:{active:a==t.pagination.currentPage}},[e("a",{staticClass:"page-link",attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.getList(t.data.page_category,a+t.pagination.pageNum)}}},[t._v(" "+t._s(a+t.pagination.pageNum)+" ")])])})),e("li",{staticClass:"page-item",class:{disabled:!t.pagination.hasNext}},[e("a",{staticClass:"page-link",attrs:{href:""},on:{click:function(a){return a.preventDefault(),t.getList(t.data.page_category,t.pagination.currentPage+1)}}},[t._v("Next")])])],2)])])])],1)},r=[],c=(e("99af"),e("b0c0"),e("ade3")),s=(e("96cf"),e("1da1")),o=(i={metaInfo:{title:"首頁"}},Object(c["a"])(i,"metaInfo",(function(){return{title:this.title}})),Object(c["a"])(i,"data",(function(){return{data:{},pagination:{},error:{},query:"all",title:"",isLoading:!1,loadingbgColor:"#fff",loadingColor:"rgb(10, 119, 115)"}})),Object(c["a"])(i,"methods",{getList:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"all",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,i=this,n="/api?status=public&category=".concat(a,"&page=").concat(e);this.isLoading=!0,this.$http.get(n).then((function(a){i.data=a.data;a.data.page_category;"all"==a.data.page_category?i.title="首頁":i.title=a.data.categories[a.data.page_category].name,0===a.data.articles.length&&(i.data.dataNull=!0),i.pagination=a.data.page,i.pagination.maxPage=a.data.page.currentPage+4,i.pagination.pageNum=a.data.page.currentPage-1,i.pagination.maxPage>a.data.page.pageTotal&&(i.pagination.maxPage=a.data.page.pageTotal,i.pagination.pageNum=i.pagination.maxPage-4,i.pagination.pageNum<=0&&(i.pagination.pageNum=0)),t.isLoading=!1})).catch((function(a){t.error=a.message}))}}),Object(c["a"])(i,"created",(function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:t.query=t.$route.query.category,t.$route.query.category?t.getList(t.query,1):t.getList();case 2:case"end":return a.stop()}}),a)})))()})),i),l=o,u=(e("0d2c"),e("2877")),d=Object(u["a"])(l,n,r,!1,null,null,null);a["default"]=d.exports},8418:function(t,a,e){"use strict";var i=e("c04e"),n=e("9bf2"),r=e("5c6c");t.exports=function(t,a,e){var c=i(a);c in t?n.f(t,c,r(0,e)):t[c]=e}},"99af":function(t,a,e){"use strict";var i=e("23e7"),n=e("d039"),r=e("e8b5"),c=e("861d"),s=e("7b0b"),o=e("50c4"),l=e("8418"),u=e("65f0"),d=e("1dde"),g=e("b622"),p=e("2d00"),f=g("isConcatSpreadable"),v=9007199254740991,b="Maximum allowed index exceeded",m=p>=51||!n((function(){var t=[];return t[f]=!1,t.concat()[0]!==t})),h=d("concat"),y=function(t){if(!c(t))return!1;var a=t[f];return void 0!==a?!!a:r(t)},_=!m||!h;i({target:"Array",proto:!0,forced:_},{concat:function(t){var a,e,i,n,r,c=s(this),d=u(c,0),g=0;for(a=-1,i=arguments.length;a<i;a++)if(r=-1===a?c:arguments[a],y(r)){if(n=o(r.length),g+n>v)throw TypeError(b);for(e=0;e<n;e++,g++)e in r&&l(d,g,r[e])}else{if(g>=v)throw TypeError(b);l(d,g++,r)}return d.length=g,d}})},ade3:function(t,a,e){"use strict";function i(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}e.d(a,"a",(function(){return i}))},b377:function(t,a,e){}}]);
//# sourceMappingURL=chunk-37b6586c.399ce7e8.js.map