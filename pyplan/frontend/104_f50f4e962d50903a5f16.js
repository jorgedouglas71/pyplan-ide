/*! Copyright Novix S.A. 2019. All rights reserved. */
(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{1452:function(t,n,e){"use strict";(function(s,i){var a,o;a=[e(984),e(1453)],void 0===(o=function(t,n){return s.View.extend({el:i("#main"),render:function(t){var e=n();this.$el.append(e),this.addHandlers(t)},addHandlers:function(n){i("#cubePlanLoader").hide(),i("#resetPassword").on("click",function(e){e.preventDefault(),i("#resetInfo").html(""),(new t).passwordReset(n.query,function(t){i("#resetPassword").attr("disabled","disabled"),i("#resetInfo").html("An email has been sent to you with your new password")},function(t){i("#errorInfo").html(t)})})}})}.apply(n,a))||(t.exports=o)}).call(this,e(218),e(1))},1453:function(t,n,e){var s=e(690);t.exports=(s.default||s).template({compiler:[7,">= 4.0.0"],main:function(t,n,e,s,i){return'\n<div class="wrapper" style="width: 800px !important;\n  height: 300px !important;\n  position: absolute !important;\n  top: 50% !important;\n  left: 35% !important;\n  margin: -165px -150px !important;">\n    <div class="code" style="color: #fff !important;\n  font-size: 90px !important;\n  text-align: center !important;">\n        <i class="fa fa-warning"></i>\n        <span style="margin-right: 15px !important;">Reset Password</span>\t\t\n    </div>\n    <div class="desc" style="color: #fff !important;\n  font-size: 14px !important;\n  text-align: center;\n  margin: 20px 0 !important;">To reset your password please click the button.</div>\n  <div style="text-align: center;"><button class="btn btn-default" id="resetPassword">Reset Password</button></div>\t\n  <div style="text-align: center; color: white;" id="resetInfo"></div> \n  <div style="text-align: center; color: red;" id="errorInfo"></div> \n</div>\n    \n'},useData:!0})},984:function(t,n,e){"use strict";(function(s){var i,a=e(693);void 0===(i=function(){return s.Model.extend({sendPasswordResetEmail:function(t,n,e,s){(0,a.send)("sendPasswordResetEmail/",JSON.stringify({username:t,publicUrl:n}),{type:"POST",contentType:"application/json;charset=utf-8",dataType:"text"},e,s)},passwordReset:function(t,n,e){(0,a.send)("passwordReset/",JSON.stringify({query:t}),{type:"POST",contentType:"application/json;charset=utf-8",dataType:"text"},n,e)}})}.apply(n,[]))||(t.exports=i)}).call(this,e(218))}}]);