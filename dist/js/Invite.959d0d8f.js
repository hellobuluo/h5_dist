(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Invite"],{"0aac":function(t,i,e){},"1a6c":function(t,i,e){},"9ce6":function(t,i,e){"use strict";e.r(i);var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"invite-container"},[t._m(0),e("img",{attrs:{src:t.userData.qrcodePicUrl,alt:"",id:"qrCode"}}),e("img",{attrs:{src:"/static/img/invite-bg.png",alt:"",id:"invite-bg"}}),e("div",{attrs:{id:"rule-container"}},[e("div",{attrs:{id:"invited"},on:{click:t.toInvitedList}},[e("p",{staticClass:"invited-text"},[t._v("我（ID 436567）已累计成功邀请用户")]),e("span",{staticClass:"invited-num"},[e("strong",[t._v(t._s(t.invitedCount))]),t._v("个 >")])]),t._m(1)])])},s=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"invite-con"}},[e("canvas",{attrs:{id:"canvas"}}),e("canvas",{attrs:{id:"canvas-save"}}),e("img",{attrs:{src:"",alt:"",id:"invite-save"}})])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("dl",{attrs:{id:"rule"}},[e("dt",[t._v("邀请活动规则")]),e("dd",[t._v("1、邀请活动规则邀请活动规则邀请活动规则邀请活动规则邀请活动规则邀请活动规则邀请活动规则邀请活动规则。")]),e("dd",[t._v("2、邀请活动规则邀请活动规则邀请活动规则邀请活动规则邀请活动规则邀请活动规则邀请活动规则邀请活动规则。")]),e("dd",[t._v("3、邀请活动规则邀请活动规则邀请活动规则邀请活动规则邀请活动规则邀请活动规则邀请活动规则邀请活动规则。")]),e("dd",[t._v("4、邀请活动规则邀请活动规则邀请活动规则邀请活动规则邀请活动规则邀请活动规则邀请活动规则邀请活动规则。")])])}],a=(e("b0c0"),e("5530")),d=e("2f62"),c={name:"invite",computed:Object(a["a"])(Object(a["a"])({},Object(d["e"])({userData:"userData"})),Object(d["e"])("invite",{invitedCount:"invitedCount"})),data:function(){return{loadedImgCount:0}},methods:Object(a["a"])(Object(a["a"])({},Object(d["b"])("invite",{fetchInvitedList:"fetchInvitedList"})),{},{toInvitedList:function(){this.$router.push("/invited-list.html")},draw:function(){var t=document.querySelector("#invite-bg"),i=document.querySelector("#canvas");if(!i)return this.$toast("获取邀请二维码失败，请联系豆子姐处理");this.drawContent(i,t,"长按保存图片后分享给好友吧~");var e=document.querySelector("#canvas-save");if(!e)return this.$toast("获取邀请二维码失败，请联系豆子姐处理");this.drawContent(e,t,"长按识别进入hello部落");var n=document.querySelector("#invite-save");n.src=e.toDataURL("image/png")},drawContent:function(t,i,e){var n=t.getContext("2d"),s=i.width,a=i.height;t.width=s,t.height=a,n.clearRect(0,0,s,a),n.drawImage(i,0,0,s,a);var d=document.querySelector("#qrCode"),c=s/(375/72);n.drawImage(d,s/(375/283),a-404,c,c),t.style.width="100%",n.fillStyle="#a4a4a4",n.textAlign="right",n.font=s/31.25+"px 'PingFangSC-Regular', 'PingFang SC', 'sans-serif', 'Arial'",n.fillText(e,s-80,a-50)}}),mounted:function(){var t=this,i=document.querySelector("#qrCode"),e=document.querySelector("#invite-bg");i.onload=function(){t.loadedImgCount>=1&&"Invite"===t.$route.name?t.draw():t.loadedImgCount++},e.onload=function(){console.log("img load"),t.loadedImgCount>=1?t.draw():t.loadedImgCount++},void 0===this.invitedCount&&this.fetchInvitedList()}},r=c,o=(e("df0c"),e("2877")),v=Object(o["a"])(r,n,s,!1,null,null,null);i["default"]=v.exports},c467:function(t,i,e){"use strict";e.r(i);var n=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"invited-list"},[n("div",{attrs:{id:"invited"}},[n("p",{staticClass:"invited-text"},[t._v("我（ID "+t._s(t.mId)+"）已累计成功邀请用户")]),n("span",{staticClass:"invited-num"},[n("strong",[t._v(t._s(t.invitedCount))]),t._v("个")])]),n("van-list",{attrs:{finished:t.isFinished,"finished-text":t.isInit||t.invitedList&&0!==t.invitedList.length?"没有更多了":""},on:{load:t.fetchList},model:{value:t.isLoading,callback:function(i){t.isLoading=i},expression:"isLoading"}},[!t.isInit&&t.invitedList&&t.invitedList.length>0?n("ul",{staticClass:"list"},[t.item in t.item.list?n("li",{key:t.item.id,staticClass:"item"},[n("div",{staticClass:"head-box"},[n("div",{staticClass:"head img-box"},[n("img",{staticClass:"img",attrs:{src:t.item.headPicUrl,alt:""}})]),n("span",{staticClass:"nickname"},[t._v(t._s(t.item.nickName))])]),n("span",{staticClass:"status"},[t._v(t._s(t.item.firstAllAuth?"已认证证件":t.item.firstBaseAuth?"已完善资料":"已注册"))])]):t._e()]):t._e()]),t.isInit||t.invitedList&&0!==t.invitedList.length?t._e():n("div",{staticClass:"no-invited"},[n("p",{staticClass:"no-message-tips"},[t._v("当前暂无邀请的人")]),n("img",{staticClass:"no-message-img",attrs:{src:e("e7de"),alt:""}})])],1)},s=[],a=(e("d3b7"),e("5530")),d=e("2f62"),c={name:"invitedList",data:function(){return{isInit:!0,isLoading:!1,isFinished:!1}},computed:Object(a["a"])(Object(a["a"])({},Object(d["e"])("invite",{invitedCount:"invitedCount",currentPage:"currentPage",invitedList:"invitedList"})),Object(d["c"])({mId:"mId"})),methods:Object(a["a"])(Object(a["a"])({},Object(d["b"])("invite",{fetchInvitedList:"fetchInvitedList"})),{},{fetchList:function(){var t=this;this.isLoading=!0,this.fetchInvitedList({currentPage:this.currentPage,pageSize:20}).then((function(i){t.isLoading=!1,"0000"===i.code?t.currentPage>=Math.ceil(t.invitedCount/20)&&(t.isFinished=!0):(t.isFinished=!0,t.$toast(i.msg))}),(function(i){t.isLoading=!1,t.isFinished=!0,t.$toast(i)})).finally((function(){t.isInit=!1,t.isLoading=!1}))}})},r=c,o=(e("e1ed"),e("2877")),v=Object(o["a"])(r,n,s,!1,null,null,null);i["default"]=v.exports},df0c:function(t,i,e){"use strict";var n=e("0aac"),s=e.n(n);s.a},e1ed:function(t,i,e){"use strict";var n=e("1a6c"),s=e.n(n);s.a}}]);
//# sourceMappingURL=Invite.959d0d8f.js.map