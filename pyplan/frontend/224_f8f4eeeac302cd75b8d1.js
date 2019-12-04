/*! Copyright Novix S.A. 2019. All rights reserved. */
(window.webpackJsonp=window.webpackJsonp||[]).push([[224],{1980:function(e,n,t){"use strict";(function(a,l){var i,d,s=t(18);i=[t(852),t(710),t(725),t(1981)],void 0===(d=function(e,n,i,d){return a.View.extend({el:l("#main"),_uId:"",render:function(){l("#mainLoading").show(),l("div[data-rel='abm-preference']").remove();var t=new e,a=this;this._uId=l.uuid(),t.GetPreference(this.options.preferenceId,function(e){var t={id:a._uId,dataRel:"abm-preference",tmpClass:"preference-edit",title:(0,s.translate)("_editPreference")},r={preference:e},o=n(t),c=i(),u=d(r);a.$el.append(o),l("div[data-id='"+a._uId+"']").find("div.abm-content").append(c),l("div[data-id='"+a._uId+"']").find("div.form-content").append(u),(0,s.postRender)(a.$el.find("div[data-id='"+a._uId+"']")),a.addHandlers(),l("#mainLoading").hide()})},save:function(){var n=this._uId,a=l("div[data-id='"+n+"']").find("form");if(!l(a).validate().errorList.length>0){var i={defaultValue:l("div[data-id='"+n+"']").find("div.preference-value input").val(),description:l("div[data-id='"+n+"']").find("div.preference-description input").val(),preferenceId:this.options.preferenceId};(new e).Update(i,function(){Promise.resolve().then(function(){var e=[t(918)];(function(e){(new e).show()}).apply(null,e)}).catch(t.oe)})}},cancel:function(){Promise.resolve().then(function(){var e=[t(918)];(function(e){(new e).show()}).apply(null,e)}).catch(t.oe)},addHandlers:function(){l("div[data-id='"+this._uId+"']").find("form").on("submit",l.proxy(function(){return this.save(),!1},this)),l("div[data-id='"+this._uId+"']").find("div.submit button.btn-cancel").on("click",l.proxy(function(){return this.cancel(),!1},this)),l("div[data-id='"+this._uId+"']").find("div.abm-top-options a.btn-close").on("click",this.cancel)}})}.apply(n,i))||(e.exports=d)}).call(this,t(218),t(1))},1981:function(e,n,t){var a=t(690);function l(e){return e&&(e.__esModule?e.default:e)}e.exports=(a.default||a).template({compiler:[7,">= 4.0.0"],main:function(e,n,a,i,d){var s,r=null!=n?n:e.nullContext||{},o=e.escapeExpression,c=e.lambda;return'<div class="control-group">\n    <label for="textfield" class="control-label">'+o(l(t(688)).call(r,"_defaultValue",{name:"L",hash:{},data:d}))+'</label>\n    <div class="controls preference-value">\n        <input type="text" value="'+o(c(null!=(s=null!=n?n.preference:n)?s.defaultValue:s,n))+'" class="input-xlarge" name="prefDefVal"\n            data-rule-required="true" data-rule-minlength="2">\n    </div>\n</div>\n<div class="control-group">\n    <label for="textfield" class="control-label">'+o(l(t(688)).call(r,"_description",{name:"L",hash:{},data:d}))+'</label>\n    <div class="controls preference-description">\n        <input type="text" value="'+o(c(null!=(s=null!=n?n.preference:n)?s.description:s,n))+'" class="input-xlarge" name="prefDescr"\n            data-rule-required="true" data-rule-minlength="2">\n    </div>\n</div>\n<div class="control-group">\n    <label for="textfield" class="control-label">'+o(l(t(688)).call(r,"_code",{name:"L",hash:{},data:d}))+'</label>\n    <div class="controls preference-code">\n        <input type="text" value="'+o(c(null!=(s=null!=n?n.preference:n)?s.code:s,n))+'" class="input-xlarge" \n            disabled="disabled">\n    </div>\n</div>\n<div class="control-group">\n    <label for="textfield" class="control-label">'+o(l(t(688)).call(r,"_type",{name:"L",hash:{},data:d}))+'</label>\n    <div class="controls preference-type">\n        <input type="text" value="'+o(c(null!=(s=null!=n?n.preference:n)?s.type:s,n))+'" class="input-xlarge"\n            disabled="disabled">\n    </div>\n</div>'},useData:!0})},710:function(e,n,t){var a=t(690);e.exports=(a.default||a).template({compiler:[7,">= 4.0.0"],main:function(e,n,t,a,l){var i,d=null!=n?n:e.nullContext||{},s=t.helperMissing,r=e.escapeExpression;return'<div class="abm-base-tmp '+r("function"==typeof(i=null!=(i=t.tmpClass||(null!=n?n.tmpClass:n))?i:s)?i.call(d,{name:"tmpClass",hash:{},data:l}):i)+' container-fluid mainTask" data-id="'+r("function"==typeof(i=null!=(i=t.id||(null!=n?n.id:n))?i:s)?i.call(d,{name:"id",hash:{},data:l}):i)+'" data-rel="'+r("function"==typeof(i=null!=(i=t.dataRel||(null!=n?n.dataRel:n))?i:s)?i.call(d,{name:"dataRel",hash:{},data:l}):i)+'" data-type="tab-content">\n    <div class="row">\n        <div class="col-sm-12">\n            <div class="box">\n                <div class="box-title">\n                    <h3><i class="fa fa-th-list"></i>'+r("function"==typeof(i=null!=(i=t.title||(null!=n?n.title:n))?i:s)?i.call(d,{name:"title",hash:{},data:l}):i)+'</h3>\n                    <div class="actions abm-top-options">\n                        <a href="#" class="btn btn-close"><i class="fa fa-times"></i></a>\n                    </div>\n                </div>\n        <div class="box-content nopadding abm-content">\n\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n'},useData:!0})},725:function(e,n,t){var a=t(690);function l(e){return e&&(e.__esModule?e.default:e)}e.exports=(a.default||a).template({compiler:[7,">= 4.0.0"],main:function(e,n,a,i,d){var s=null!=n?n:e.nullContext||{},r=e.escapeExpression;return'<form action="#" id="baseForm" method="POST" class=\'form-horizontal form-bordered form-validate\' novalidate="novalidate">\n    <div class="form-content">\n\n    </div>\n    <div class="submit form-actions col-sm-12">\n        <button type="submit" class="btn btn-primary btn-save">'+r(l(t(688)).call(s,"_save",{name:"L",hash:{},data:d}))+'</button>\n        <button type="button" class="btn btn-cancel">'+r(l(t(688)).call(s,"cancel",{name:"L",hash:{},data:d}))+"</button>\n    </div>\n</form>\n"},useData:!0})},852:function(e,n,t){"use strict";(function(a){var l,i=t(693);void 0===(l=function(){return a.Model.extend({List:function(e,n){(0,i.send)("preference/List",{moduleId:e},null,n)},GetPreference:function(e,n){(0,i.send)("preference/Get/"+e,null,null,n)},Update:function(e,n){(0,i.send)("preference/Update",e,{type:"PUT"},n)},Create:function(e,n){(0,i.send)("preference/Create",e,{type:"POST"},n)},DeletePreference:function(e,n){(0,i.send)("preference/Delete/"+e,null,{type:"DELETE"},n)},ListPrefModules:function(e){(0,i.send)("preferenceModule/List",null,null,e)}})}.apply(n,[]))||(e.exports=l)}).call(this,t(218))}}]);