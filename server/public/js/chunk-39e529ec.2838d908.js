(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-39e529ec"],{4343:function(t,a,e){},5358:function(t,a,e){"use strict";e.r(a);var i,r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("loading",{attrs:{loader:"spinner",active:t.isLoading,"can-cancel":!1,"is-full-page":!0,"background-color":t.loadingbgColor,color:t.loadingColor},on:{"update:active":function(a){t.isLoading=a}}}),e("nav",{staticClass:"breadcrumb p-3"},[e("router-link",{staticClass:"breadcrumb-item text-primary",attrs:{to:{name:"Index"}}},[t._v("Home")]),e("router-link",{staticClass:"breadcrumb-item text-primary",attrs:{to:{name:"Index",query:{category:t.article.category}}}},[t._v(" "+t._s(t.categories.name)+" ")]),e("span",{staticClass:"breadcrumb-item active"},[t._v(" "+t._s(t.article.title)+" ")])],1),e("div",{staticClass:"container"},[e("div",{staticClass:"hex-blog"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-md-9"},[e("h1",{staticClass:"text-primary"},[t._v(" "+t._s(t.article.title)+" ")]),e("div",{staticClass:"d-flex flex-row text-secondary"},[e("div",{staticClass:"p-2 card-icon"},[e("i",{staticClass:"bi bi-person-fill",attrs:{"aria-hidden":"true"}}),t._v(" "+t._s(t.article.user)+" ")]),e("div",{staticClass:"p-2 card-icon"},[e("i",{staticClass:"bi bi-calendar3-fill"}),t._v(" "+t._s(t._f("moment")(t.article.update_time,"YYYY/MM/DD h:mm:ss"))+" ")]),e("div",{staticClass:"p-2 card-icon"},[e("i",{staticClass:"bi bi-tag-fill",attrs:{"aria-hidden":"true"}}),e("router-link",{staticClass:"text-info",attrs:{to:{name:"Index",query:{category:t.article.category}}}},[t._v(" "+t._s(t.categories.name)+" ")])],1)]),e("article",{staticClass:"text-dark post mb-4"},[e("div",{domProps:{innerHTML:t._s(t.article.content)}})]),e("div",{staticClass:"pt-3 pb-5 text-center"},[e("a",{staticClass:"btn btn-primary",attrs:{href:"",role:"button"},on:{click:function(a){return a.preventDefault(),t.goBack()}}},[t._v("回上一頁")])])])])])])],1)},n=[],s=(e("b0c0"),e("ade3")),c=(e("96cf"),e("1da1")),o=(i={metaInfo:{title:"內容頁"}},Object(s["a"])(i,"metaInfo",(function(){return{title:this.title}})),Object(s["a"])(i,"data",(function(){return{categories:{},article:{},error:{},wordId:"",title:"",isLoading:!1,loadingbgColor:"#fff",loadingColor:"rgb(10, 119, 115)"}})),Object(s["a"])(i,"methods",{getData:function(t){var a=this,e=this,i="/api/post/".concat(t);this.isLoading=!0,this.$http.get(i).then((function(t){e.article=t.data.article,e.categories.name=t.data.categories[t.data.article.category].name,e.title=t.data.article.title,a.isLoading=!1})).catch((function(t){a.error=t.message}))},goBack:function(){this.$router.go(-1)}}),Object(s["a"])(i,"created",(function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:t.wordId=t.$route.params.wordId,t.getData(t.wordId);case 2:case"end":return a.stop()}}),a)})))()})),i),l=o,d=(e("fb19"),e("2877")),u=Object(d["a"])(l,r,n,!1,null,null,null);a["default"]=u.exports},ade3:function(t,a,e){"use strict";function i(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}e.d(a,"a",(function(){return i}))},fb19:function(t,a,e){"use strict";var i=e("4343"),r=e.n(i);r.a}}]);
//# sourceMappingURL=chunk-39e529ec.2838d908.js.map