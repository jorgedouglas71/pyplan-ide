/*! Copyright Novix S.A. 2019. All rights reserved. */
(window.webpackJsonp=window.webpackJsonp||[]).push([[89,3],{1360:function(a,e,l){"use strict";(function(n,t){var o,s,r=l(18);o=[l(683),l(2135)],void 0===(s=function(a,e){return n.View.extend({el:t("#main"),render:function(l,n,o){var s=this,i=e(l),c=(0,r.translate)("_add_parameter");s.indexTable=null,null!==l&&(c=(0,r.translate)("_edit_parameter"),s.indexTable=l.indexTable),(new a).show({title:c,html:i,modalClass:"smallModal",buttons:[{title:(0,r.translate)("Ok"),css:"primary",code:"yes"},{title:(0,r.translate)("cancel"),code:"close"}],callback:function(a,e){if("yes"==a){var l=e.find("select.paramType").val(),r=e.find("input.paramName").val(),i=e.find("input.paramLabel").val(),c=e.find("input.paramDefaultValue").val(),p=e.find("textarea.sourceList").val();p=t.map(p.split(","),t.trim);var u={indexTable:s.indexTable,paramType:l,name:r,label:i,defaultValue:c,list:p};return o(u,n),e.modal("hide"),!1}},onLoad:function(a){setTimeout(function(){a.find("select.paramType").on("change",function(){"checkbox"===t(this).val()||"input"===t(this).val()?a.find(".form-group.source-group").hide():a.find(".form-group.source-group").show()}),l&&(a.find("select.paramType").val(l.paramType),a.find("input.paramName").val(l.name),a.find("input.paramLabel").val(l.label),a.find("input.paramDefaultValue").val(l.defaultValue),a.find("textarea.sourceList").val(l.list.join(", ")),"checkbox"!==l.paramType&&"input"!==l.paramType||a.find(".form-group.source-group").hide())},500)}})}})}.apply(e,o))||(a.exports=s)}).call(this,l(218),l(1))},2135:function(a,e,l){var n=l(690);function t(a){return a&&(a.__esModule?a.default:a)}a.exports=(n.default||n).template({compiler:[7,">= 4.0.0"],main:function(a,e,n,o,s){var r=null!=e?e:a.nullContext||{},i=a.escapeExpression;return'\n\n<form class="form-horizontal form-bordered">\n  <div class="form-group">\n    <label for="textfield" class="control-label col-sm-3">'+i(t(l(688)).call(r,"_type",{name:"L",hash:{},data:s}))+'</label>\n    <div class="col-sm-9">\n      <select name="paramType" class="select2-me paramType" style="width:250;">\n        <option value="select">Select</option>\n        <option value="checkbox">Checkbox</option>\n        <option value="input">Input</option>\n      </select>\n    </div>\n  </div>\n\n  <div class="form-group">\n    <label for="textfield" class="control-label col-sm-3">'+i(t(l(688)).call(r,"_name",{name:"L",hash:{},data:s}))+'</label>\n    <div class="col-sm-9">\n      <input type="text" class="form-control paramName">\n    </div>\n  </div>\n\n  <div class="form-group">\n    <label for="textfield" class="control-label col-sm-3">'+i(t(l(688)).call(r,"_label",{name:"L",hash:{},data:s}))+'</label>\n    <div class="col-sm-9">\n      <input type="text" class="form-control paramLabel">\n    </div>\n  </div>\n\n  <div class="form-group">\n    <label for="textfield" class="control-label col-sm-3">'+i(t(l(688)).call(r,"_default_value",{name:"L",hash:{},data:s}))+'</label>\n    <div class="col-sm-9">\n      <input type="text" class="form-control paramDefaultValue">\n    </div>\n  </div>\n\n  <div class="form-group source-group">\n    <label for="textfield" class="control-label col-sm-3">'+i(t(l(688)).call(r,"_source",{name:"L",hash:{},data:s}))+"\n      <small>"+i(t(l(688)).call(r,"_comma_separated",{name:"L",hash:{},data:s}))+'</small>\n    </label>\n    <div class="col-sm-9">\n      <textarea rows="3" class="form-control sourceList"></textarea>\n    </div>\n  </div>\n\n</form>\n\n'},useData:!0})},683:function(a,e,l){"use strict";(function(n){var t;void 0===(t=function(){return n.Controller.extend({name:"showModal",show:function(a){Promise.all([l.e(2),l.e(118)]).then(function(){var e=[l(701)];(function(e){(new e).render(a)}).apply(null,e)}).catch(l.oe)}})}.apply(e,[]))||(a.exports=t)}).call(this,l(694))}}]);