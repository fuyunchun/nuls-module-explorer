(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-495f1631"],{"06d1":function(t,o,s){},"1b7c":function(t,o,s){"use strict";s.r(o);var e=function(){var t=this,o=t.$createElement,s=t._self._c||o;return s("div",{directives:[{name:"loading",rawName:"v-loading",value:t.rotationInfoLoading,expression:"rotationInfoLoading"}],staticClass:"rotation-info bg-gray"},[s("div",{staticClass:"bg-white"},[s("h2",{staticClass:"title w1200 font16 fw"},[t._v(t._s(t.rotation)+" "+t._s(t.$t("rotationInfo.rotationInfo0")))])]),s("div",{staticClass:"info_tabs w1200"},[s("h3",{staticClass:"tabs_title tabs_header capitalize"},[t._v(t._s(t.$t("public.basicInfo")))]),s("ul",{staticClass:"ul"},[s("li",{staticClass:"tabs_infos fl"},[s("p",[t._v(t._s(t.$t("consensus.consensus9"))),s("span",{staticClass:"mobile_s"},[t._v(t._s(t.rotationInfo.startTime)+"-"+t._s(t.rotationInfo.endTime))])])]),s("li",{staticClass:"tabs_infos fl"},[s("p",[t._v(t._s(t.$t("public.yellowCard"))),s("span",[t._v(t._s(t.rotationInfo.yellowCardCount))])])]),s("li",{staticClass:"tabs_infos fl"},[s("p",[t._v(t._s(t.$t("consensus.consensus10"))),s("span",[t._v(t._s(t.rotationInfo.memberCount))])])]),s("li",{staticClass:"tabs_infos fl"},[s("p",[t._v(t._s(t.$t("public.redCard"))),s("span",[t._v(t._s(t.rotationInfo.redCardCount))])])]),s("li",{staticClass:"tabs_infos fl"},[s("p",[t._v(t._s(t.$t("consensus.consensus11"))+" "),s("span",[t._v(t._s(t.rotationInfo.producedBlockCount))])])]),s("li",{staticClass:"tabs_infos fl"},[s("p",[t._v(t._s(t.$t("public.lostRate"))),s("span",[t._v(t._s(t.rotationInfo.lostRate))])])])])]),s("div",{staticClass:"r_tab w1200"},[s("el-col",{attrs:{span:24}},[s("h4",{staticClass:"cards-title font16"},[t._v(t._s(t.$t("rotationInfo.rotationInfo3")))]),s("el-switch",{staticClass:"hide-switch fr",attrs:{width:32,"inactive-text":t.$t("rotationInfo.rotationInfo1")},on:{change:t.showRY},model:{value:t.hideSwitch,callback:function(o){t.hideSwitch=o},expression:"hideSwitch"}}),s("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.rotationInfoLoading,expression:"rotationInfoLoading"}],staticStyle:{width:"100%",margin:"45px 0 100px 0"},attrs:{data:t.rotationList,stripe:"",border:""}},[s("el-table-column",{attrs:{label:"",width:"30"}}),s("el-table-column",{attrs:{label:t.$t("public.height"),width:"120",align:"left"},scopedSlots:t._u([{key:"default",fn:function(o){return["1"===t.rotation?s("span",{staticClass:"cursor-p click",on:{click:function(s){t.toUrl("blockInfo",o.row.blockHeight)}}},[t._v(t._s(o.row.blockHeight))]):s("span",[s("span",{directives:[{name:"show",rawName:"v-show",value:0===o.row.blockHeight&&o.row.newTime-o.row.times>=0,expression:"scope.row.blockHeight === 0 && scope.row.newTime- scope.row.times >= 0"}]},[s("i",{staticClass:"iconfont font20",class:(o.row.yellow,"icon-huang yellow")})]),s("span",{directives:[{name:"show",rawName:"v-show",value:0!==o.row.blockHeight,expression:"scope.row.blockHeight !== 0"}],staticClass:"cursor-p click",on:{click:function(s){t.toUrl("blockInfo",o.row.blockHeight)}}},[t._v("\n                "+t._s(0===o.row.blockHeight?"--":o.row.blockHeight)+"\n              ")])])]}}])}),s("el-table-column",{attrs:{prop:"time",label:t.$t("public.time"),width:"160",align:"left"}}),s("el-table-column",{attrs:{prop:"txCount",label:t.$t("public.transactionNo"),width:"120",align:"left"}}),s("el-table-column",{attrs:{prop:"txid",label:t.$t("public.outNode"),"min-width":"180",align:"left"},scopedSlots:t._u([{key:"default",fn:function(o){return[s("label",{directives:[{name:"show",rawName:"v-show",value:o.row.seedPacked,expression:"scope.row.seedPacked "}],staticClass:"cursor-p"},[t._v("\n              "+t._s(t.$t("public.seedNode"))+"\n            ")]),s("span",{directives:[{name:"show",rawName:"v-show",value:!o.row.seedPacked,expression:"!scope.row.seedPacked"}],staticClass:"cursor-p click",on:{click:function(s){t.toUrl("consensusInfo",o.row.agentHash)}}},[t._v("\n              "+t._s(o.row.agentName)+"\n            ")])]}}])}),s("el-table-column",{attrs:{prop:"order",label:t.$t("rotationInfo.rotationInfo2"),width:"120",align:"left"}}),s("el-table-column",{attrs:{prop:"fee",label:t.$t("public.blockReward")+"(NULS)",width:"120",align:"left"},scopedSlots:t._u([{key:"default",fn:function(o){return[t._v("\n            "+t._s(o.row.reward)+"\n          ")]}}])})],1)],1)],1)])},i=[],a=(s("ac4d"),s("8a81"),s("ac6a"),s("c32d")),n=s.n(a),r=s("6ace"),l={data:function(){return{rotation:this.$route.query.rotation,rotationInfo:[],rotationInfoLoading:!0,hideSwitch:!1,rotationList:[],rotationListOld:[]}},created:function(){this.getRotationInfo(this.rotation)},mounted:function(){},methods:{getRotationInfo:function(t){var o=this;this.$post("/","getRoundInfo",[t]).then(function(t){if(t.hasOwnProperty("result")){t.result.startTime=n()(Object(r["c"])(t.result.startTime)).format("YYYY-MM-DD HH:mm:ss"),t.result.endTime=n()(Object(r["c"])(t.result.endTime)).format("YYYY-MM-DD HH:mm:ss"),o.rotationInfo=t.result;var s=!0,e=!1,i=void 0;try{for(var a,l=t.result.itemList[Symbol.iterator]();!(s=(a=l.next()).done);s=!0){var c=a.value;c.times=c.time;var u=new Date,f=u.getSeconds();u.setSeconds(f-10),c.newTime=u.getTime(),c.time=n()(Object(r["c"])(c.time)).format("YYYY-MM-DD HH:mm:ss"),c.reward=Object(r["f"])(c.reward,8),c.seedPacked=!c.agentHash}}catch(d){e=!0,i=d}finally{try{s||null==l.return||l.return()}finally{if(e)throw i}}o.rotationList=t.result.itemList,o.rotationInfoLoading=!1}})},showRY:function(){if(this.hideSwitch){this.rotationListOld=this.rotationList;var t=[],o=!0,s=!1,e=void 0;try{for(var i,a=this.rotationList[Symbol.iterator]();!(o=(i=a.next()).done);o=!0){var n=i.value;n.yellow&&t.push(n)}}catch(r){s=!0,e=r}finally{try{o||null==a.return||a.return()}finally{if(s)throw e}}this.rotationList=t}else this.rotationList=this.rotationListOld},toUrl:function(t,o){this.$router.push({name:t,query:"blockInfo"===t?{height:o}:{hash:o}})}}},c=l,u=(s("800f"),s("2877")),f=Object(u["a"])(c,e,i,!1,null,null,null);o["default"]=f.exports},"800f":function(t,o,s){"use strict";var e=s("06d1"),i=s.n(e);i.a}}]);