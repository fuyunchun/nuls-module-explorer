(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-90abc680"],{"35a4":function(t,e,a){},"41ac":function(t,e,a){"use strict";var i=a("35a4"),s=a.n(i);s.a},"56cd":function(t,e,a){"use strict";var i=a("c8d6"),s=a.n(i);s.a},"75b4":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"block bg-gray"},[a("div",{staticClass:"bg-white"},[a("div",{staticClass:"w1200"},[a("h2",{staticClass:"title font24 fl capitalize"},[t._v(t._s(t.$t("block.block0")))]),a("el-switch",{staticClass:"hide-switch fr",attrs:{width:32,"inactive-text":t.$t("block.block2")},on:{change:t.hideOneList},model:{value:t.hideSwitch,callback:function(e){t.hideSwitch=e},expression:"hideSwitch"}})],1)]),a("div",{staticClass:"tabs w1200"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.blockLoading,expression:"blockLoading"}],staticStyle:{width:"100%"},attrs:{data:t.blockList,stripe:"",border:""}},[a("el-table-column",{attrs:{label:"",width:"30"}}),a("el-table-column",{attrs:{label:t.$t("public.height"),width:"130"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticClass:"cursor-p click",on:{click:function(a){t.toUrl("blockInfo",e.row.height)}}},[t._v(t._s(e.row.height))])]}}])}),a("el-table-column",{attrs:{prop:"createTime",label:t.$t("public.time"),width:"230"}}),a("el-table-column",{attrs:{prop:"txCount",label:t.$t("public.transactionNo"),width:"180"}}),a("el-table-column",{attrs:{label:t.$t("public.outNode"),"min-width":"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("label",{directives:[{name:"show",rawName:"v-show",value:e.row.seedPacked,expression:"scope.row.seedPacked"}],staticClass:"cursor-p"},[t._v("\n            "+t._s(t.$t("public.seedNode"))+"\n          ")]),a("span",{directives:[{name:"show",rawName:"v-show",value:!e.row.seedPacked,expression:"!scope.row.seedPacked"}],staticClass:"cursor-p click",class:e.row.agentAlias?"":"uppercase",on:{click:function(a){t.toUrl("consensusInfo",e.row.agentHash)}}},[t._v("\n            "+t._s(e.row.agentAlias?e.row.agentAlias:e.row.agentId)+"\n          ")])]}}])}),a("el-table-column",{attrs:{prop:"size",label:t.$t("public.size")+"(byte)",width:"100"}}),a("el-table-column",{attrs:{label:t.$t("public.blockReward"),width:"180",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.reward/1e8))]}}])})],1),a("paging",{directives:[{name:"show",rawName:"v-show",value:t.pager.total>t.pager.rows,expression:"pager.total > pager.rows"}],attrs:{pager:t.pager},on:{change:t.pagesList}})],1)])},s=[],n=(a("ac4d"),a("8a81"),a("ac6a"),a("c32d")),o=a.n(n),c=a("89d1"),r=a("6ace"),l={data:function(){return{blockLoading:!0,hideSwitch:!1,blockList:[],pager:{total:0,page:1,rows:15}}},components:{paging:c["a"]},created:function(){this.getBlockList(this.pager.page,this.pager.rows,"",this.hideSwitch)},methods:{getBlockList:function(t,e,a,i){var s=this;this.$post("/","getBlockList",[t,e,a,i]).then(function(t){if(t.hasOwnProperty("result")){var e=!0,a=!1,i=void 0;try{for(var n,c=t.result.list[Symbol.iterator]();!(e=(n=c.next()).done);e=!0){var l=n.value;l.createTime=o()(Object(r["c"])(l.createTime)).format("YYYY-MM-DD HH:mm:ss")}}catch(u){a=!0,i=u}finally{try{e||null==c.return||c.return()}finally{if(a)throw i}}s.blockList=t.result.list,s.pager.total=t.result.totalCount,s.blockLoading=!1}})},pagesList:function(){this.blockLoading=!0,this.getBlockList(this.pager.page,this.pager.rows,"",this.hideSwitch)},hideOneList:function(){this.blockLoading=!0,this.getBlockList(this.pager.page,this.pager.rows,"",this.hideSwitch)},toUrl:function(t,e){this.$router.push({name:t,query:"blockInfo"===t?{height:e}:{hash:e}})}}},u=l,h=(a("56cd"),a("2877")),p=Object(h["a"])(u,i,s,!1,null,null,null);e["default"]=p.exports},"89d1":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"paging"},[a("el-pagination",{staticClass:"pages",attrs:{background:"",small:"",layout:"total,prev, pager, next, jumper",total:t.pager.total,"current-page":t.pager.page,"page-size":t.pager.rows,"pager-count":5},on:{"update:currentPage":function(e){t.$set(t.pager,"page",e)},"size-change":t.onChangeSize,"current-change":t.onChangePage}})],1)},s=[],n={props:["pager"],computed:{total:function(){return this.pager.total},initBack:function(){return this.pager.total/this.pager.rows<this.pager.page}},watch:{total:function(){this.initBack&&(this.pager.page-=1,this.$emit("change"))}},methods:{onChangeSize:function(t){this.pager.rows=t,this.$emit("change")},onChangePage:function(t){this.pager.page=t,this.$emit("change")}}},o=n,c=(a("41ac"),a("2877")),r=Object(c["a"])(o,i,s,!1,null,null,null);e["a"]=r.exports},c8d6:function(t,e,a){}}]);