(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/churudengji/add-or-update"],{"0f16":function(e,n,t){},"388b":function(e,n,t){"use strict";var r=t("0f16"),a=t.n(r);a.a},"5c77":function(e,n,t){"use strict";t.r(n);var r=t("df4c"),a=t("6768");for(var u in a)"default"!==u&&function(e){t.d(n,e,(function(){return a[e]}))}(u);t("388b");var i,o=t("f0c5"),c=Object(o["a"])(a["default"],r["b"],r["c"],!1,null,"e877ccea",null,!1,r["a"],i);n["default"]=c.exports},6768:function(e,n,t){"use strict";t.r(n);var r=t("7795"),a=t.n(r);for(var u in r)"default"!==u&&function(e){t.d(n,e,(function(){return r[e]}))}(u);n["default"]=a.a},7795:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t("a34a"));function a(e){return e&&e.__esModule?e:{default:e}}function u(e,n,t,r,a,u,i){try{var o=e[u](i),c=o.value}catch(s){return void t(s)}o.done?n(c):Promise.resolve(c).then(r,a)}function i(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var i=e.apply(n,t);function o(e){u(i,r,a,o,c,"next",e)}function c(e){u(i,r,a,o,c,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("54d5"))}.bind(null,t)).catch(t.oe)},c={data:function(){return{cross:"",ruleForm:{dengjibianhao:this.getUUID(),yezhuzhanghao:"",yezhuxingming:"",lianxifangshi:"",shenfenzheng:"",tupian:"",churuleixing:"",churumude:"",sfsh:"",shhf:""},yezhuzhanghaoOptions:[],yezhuzhanghaoIndex:0,churuleixingOptions:[],churuleixingIndex:0,user:{},ro:{dengjibianhao:!1,yezhuzhanghao:!1,yezhuxingming:!1,lianxifangshi:!1,shenfenzheng:!1,tupian:!1,churuleixing:!1,churumude:!1,sfsh:!1,shhf:!1}}},components:{wPicker:o},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(n){var t=this;return i(r.default.mark((function a(){var u,i,o,c;return r.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return u=e.getStorageSync("nowTable"),a.next=3,t.$api.session(u);case 3:return i=a.sent,t.user=i.data,a.next=7,t.$api.option("yezhu","yezhuzhanghao",{});case 7:if(i=a.sent,t.yezhuzhanghaoOptions=i.data,t.churuleixingOptions="出,入".split(","),t.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(t.ruleForm.refid=n.refid,t.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){a.next=18;break}return t.ruleForm.id=n.id,a.next=16,t.$api.info("churudengji",t.ruleForm.id);case 16:i=a.sent,t.ruleForm=i.data;case 18:if(t.cross=n.cross,!n.cross){a.next=58;break}o=e.getStorageSync("crossObj"),a.t0=r.default.keys(o);case 22:if((a.t1=a.t0()).done){a.next=58;break}if(c=a.t1.value,"dengjibianhao"!=c){a.next=28;break}return t.ruleForm.dengjibianhao=o[c],t.ro.dengjibianhao=!0,a.abrupt("continue",22);case 28:if("yezhuzhanghao"!=c){a.next=32;break}return t.ruleForm.yezhuzhanghao=o[c],t.ro.yezhuzhanghao=!0,a.abrupt("continue",22);case 32:if("yezhuxingming"!=c){a.next=36;break}return t.ruleForm.yezhuxingming=o[c],t.ro.yezhuxingming=!0,a.abrupt("continue",22);case 36:if("lianxifangshi"!=c){a.next=40;break}return t.ruleForm.lianxifangshi=o[c],t.ro.lianxifangshi=!0,a.abrupt("continue",22);case 40:if("shenfenzheng"!=c){a.next=44;break}return t.ruleForm.shenfenzheng=o[c],t.ro.shenfenzheng=!0,a.abrupt("continue",22);case 44:if("tupian"!=c){a.next=48;break}return t.ruleForm.tupian=o[c],t.ro.tupian=!0,a.abrupt("continue",22);case 48:if("churuleixing"!=c){a.next=52;break}return t.ruleForm.churuleixing=o[c],t.ro.churuleixing=!0,a.abrupt("continue",22);case 52:if("churumude"!=c){a.next=56;break}return t.ruleForm.churumude=o[c],t.ro.churumude=!0,a.abrupt("continue",22);case 56:a.next=22;break;case 58:t.styleChange();case 59:case"end":return a.stop()}}),a)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},yezhuzhanghaoChange:function(e){var n=this;return i(r.default.mark((function t(){var a;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n.yezhuzhanghaoIndex=e.target.value,n.ruleForm.yezhuzhanghao=n.yezhuzhanghaoOptions[n.yezhuzhanghaoIndex],t.next=4,n.$api.follow("yezhu","yezhuzhanghao",{columnValue:n.ruleForm.yezhuzhanghao});case 4:a=t.sent,a.data.yezhuxingming&&(n.ruleForm.yezhuxingming=a.data.yezhuxingming),a.data.lianxifangshi&&(n.ruleForm.lianxifangshi=a.data.lianxifangshi),a.data.shenfenzheng&&(n.ruleForm.shenfenzheng=a.data.shenfenzheng);case 8:case"end":return t.stop()}}),t)})))()},churuleixingChange:function(e){this.churuleixingIndex=e.target.value,this.ruleForm.churuleixing=this.churuleixingOptions[this.churuleixingIndex]},tupianTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.tupian="upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return i(r.default.mark((function t(){var a,u,i,o,c,s,h,l,f,g;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!n.ruleForm.lianxifangshi||n.$validate.isMobile(n.ruleForm.lianxifangshi)){t.next=3;break}return n.$utils.msg("联系方式应输入手机格式"),t.abrupt("return");case 3:if(!n.ruleForm.shenfenzheng||n.$validate.checkIdCard(n.ruleForm.shenfenzheng)){t.next=6;break}return n.$utils.msg("身份证应输入身份证格式"),t.abrupt("return");case 6:if(!n.cross){t.next=22;break}if(o=e.getStorageSync("statusColumnName"),c=e.getStorageSync("statusColumnValue"),""==o){t.next=22;break}if(s=e.getStorageSync("crossObj"),o.startsWith("[")){t.next=18;break}for(h in s)h==o&&(s[h]=c);return l=e.getStorageSync("crossTable"),t.next=16,n.$api.update("".concat(l),s);case 16:t.next=22;break;case 18:a=Number(e.getStorageSync("userid")),u=s["id"],i=e.getStorageSync("statusColumnName"),i=i.replace(/\[/,"").replace(/\]/,"");case 22:if(!u||!a){t.next=44;break}return n.ruleForm.crossuserid=a,n.ruleForm.crossrefid=u,f={page:1,limit:10,crossuserid:a,crossrefid:u},t.next=28,n.$api.list("churudengji",f);case 28:if(g=t.sent,!(g.data.total>=i)){t.next=34;break}return n.$utils.msg(e.getStorageSync("tips")),t.abrupt("return",!1);case 34:if(!n.ruleForm.id){t.next=39;break}return t.next=37,n.$api.update("churudengji",n.ruleForm);case 37:t.next=41;break;case 39:return t.next=41,n.$api.add("churudengji",n.ruleForm);case 41:n.$utils.msgBack("提交成功");case 42:t.next=52;break;case 44:if(!n.ruleForm.id){t.next=49;break}return t.next=47,n.$api.update("churudengji",n.ruleForm);case 47:t.next=51;break;case 49:return t.next=51,n.$api.add("churudengji",n.ruleForm);case 51:n.$utils.msgBack("提交成功");case 52:case"end":return t.stop()}}),t)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,t=n.getFullYear(),r=n.getMonth()+1,a=n.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),r=r>9?r:"0"+r,a=a>9?a:"0"+a,"".concat(t,"-").concat(r,"-").concat(a)},toggleTab:function(e){this.$refs[e].show()}}};n.default=c}).call(this,t("543d")["default"])},df4c:function(e,n,t){"use strict";var r;t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return u})),t.d(n,"a",(function(){return r}));var a=function(){var e=this,n=e.$createElement;e._self._c},u=[]},f6f4:function(e,n,t){"use strict";(function(e){t("2070");r(t("66fd"));var n=r(t("5c77"));function r(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])}},[["f6f4","common/runtime","common/vendor"]]]);