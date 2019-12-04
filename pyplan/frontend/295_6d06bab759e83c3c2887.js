/*! Copyright Novix S.A. 2019. All rights reserved. */
(window.webpackJsonp=window.webpackJsonp||[]).push([[295,65],{2163:function(t,a,e){"use strict";(function(n,l){var s,i;s=[e(731),e(2164)],void 0===(i=function(t,a){return n.View.extend({el:l("#main"),options:{},render:function(t){this.options=t;var e=this,n=a(t);this.$el.append(n),l("#styleLibraryManager").on("hidden.bs.modal",function(){l("#styleLibraryManager").off("hidden"),l("#styleLibraryManager").remove(),void 0!=t.callback&&t.callback()}),l("#styleLibraryManager").on("show.bs.modal",function(){if(0===l("#styleLibraryManager:visible").length){var a=100014+10*l(".modal:visible").length;l(this).css("z-index",a),setTimeout(function(){l(".modal-backdrop").not(".modal-stack").css("z-index",a-10).addClass("modal-stack")},0),t.hasOwnProperty("onLoad")&&t.onLoad(l("#styleLibraryManager")),!0!==t.okOnEnter&&void 0!==t.okOnEnter||l("#styleLibraryManager").keyup(function(t){13==t.keyCode&&l("#styleLibraryManager button.btn-primary").click()})}});var s=null;t.backdrop&&(s={backdrop:"static",keyboard:!1}),l("#styleLibraryManager ").modal(s),setTimeout(function(){e.addHandlers(l("#styleLibraryManager")),e.loadList(l("#styleLibraryManager"))},200)},addHandlers:function(a){var e=this;a.find("#styleLibrary_list .stylelibrary-table").cubeTable(null,{sDom:"ftp",iDisplayLength:7,bSort:!1,bDestroy:!0,bAutoWidth:!1,aoColumns:[{mData:"name"},{mData:"id",mRender:function(t,a,e){return'<span data-id="'+t+'"></span>'}}],fnDrawCallback:function(){a.find("#styleLibrary_list .stylelibrary-table tbody tr").removeClass("selected"),a.find("#styleLibrary_list  .controls button").show(),a.find("#styleLibrary_list  .controls .btnSure").hide()}}),a.find("#styleLibrary_list .stylelibrary-table").on("click","tr",function(){a.find("#styleLibrary_list .stylelibrary-table tr.selected").removeClass("selected"),l(this).addClass("selected"),a.find("#styleLibrary_list  .controls button").show().removeClass("disabled"),a.find("#styleLibrary_list  .controls .btnSure").hide()}),a.find("#styleLibrary_list  .controls .btnCreate").on("click",function(){e.showData()}),a.find("#styleLibrary_list  .controls .btnEdit").on("click",function(){if(!l(this).hasClass("disabled")&&a.find("#styleLibrary_list .stylelibrary-table tr.selected").length>0){var t=a.find("#styleLibrary_list .stylelibrary-table tr.selected td span").attr("data-id");e.showData(t)}}),a.find("#styleLibrary_list  .controls .btnDelete").on("click",function(){!l(this).hasClass("disabled")&&a.find("#styleLibrary_list .stylelibrary-table tr.selected").length>0&&(a.find("#styleLibrary_list  .controls button").hide(),a.find("#styleLibrary_list  .controls .btnSure").show())}),a.find("#styleLibrary_list  .controls .btnCancel").on("click",function(){a.find("#styleLibrary_list .controls button").show(),a.find("#styleLibrary_list .controls .btnSure").hide()}),a.find("#styleLibrary_list  .controls .btnGoDelete").on("click",function(){a.find("#styleLibrary_list  .controls btnSure").hide();var n=a.find("#styleLibrary_list .stylelibrary-table tr.selected td span").attr("data-id");(new t).delete(n,function(){e.loadList(a)})})},loadList:function(a){l("#styleLibrary_data").empty().removeClass("active"),l("#styleLibrary_list").addClass("active"),(new t).list(this.options.styleType,function(t){var e=a.find("#styleLibrary_list .stylelibrary-table").dataTable();e.fnClearTable(),l.each(t,function(t,a){e.fnAddData(a)})})},showData:function(t){var a,n=this;switch(this.options.styleType){case 0:a="rangeMapColor";break;case 1:a="rangeIndicator";break;case 2:a="rangeGauge";break;case 3:a="colorSeries";break;case 4:a="rangeIcons"}a&&e.e(300).then(function(){var s=[e(2178)("./styleLibrary_"+a)];(function(a){var e=new a;e.setElement(l("#styleLibrary_data"));var s=l.extend(n.options,{styleType:n.options.styleType,callbackOk:function(){n.loadList(l("#styleLibraryManager"))},callbackCancel:function(){l("#styleLibrary_data").empty().removeClass("active"),l("#styleLibrary_list").addClass("active")}});s.id=t,e.render(s),l("#styleLibrary_list").removeClass("active"),l("#styleLibrary_data").addClass("active")}).apply(null,s)}).catch(e.oe)}})}.apply(a,s))||(t.exports=i)}).call(this,e(218),e(1))},2164:function(t,a,e){var n=e(690);function l(t){return t&&(t.__esModule?t.default:t)}t.exports=(n.default||n).template({compiler:[7,">= 4.0.0"],main:function(t,a,n,s,i){var r=null!=a?a:t.nullContext||{},o=t.escapeExpression;return'<div id="styleLibraryManager" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"\n  aria-hidden="true">\n  <div class="modal-dialog">\n    <div class="modal-content">\n      <div class="modal-header">\n        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">x</button>\n        <h3 id="myModalLabel">'+o(l(e(688)).call(r,"style_library",{name:"L",hash:{},data:i}))+'</h3>\n      </div>\n\n      <div class="modal-body">\n        <div class="box-content nopadding">\n          <div class="tab-content tab-content-inline tab-content-bottom">\n            <div class="tab-pane active" id="styleLibrary_list">\n              <table class="table table-nomargin table-condensed stylelibrary-table">\n                <thead>\n                  <tr>\n                    <th width="95%">'+o(l(e(688)).call(r,"name",{name:"L",hash:{},data:i}))+'</th>\n                    <th width="5%"></th>\n                  </tr>\n                </thead>\n                <tbody>\n                </tbody>\n              </table>\n\n              <div class="controls">\n                <button class="btn btn-primary btn-small btnCreate"><i class="fa fa-file"></i>\n                  '+o(l(e(688)).call(r,"create_style",{name:"L",hash:{},data:i}))+'</button>\n\n                <button class="btn btn-small btn-red btnDelete disabled"><i class="fa fa-trash"></i>\n                  '+o(l(e(688)).call(r,"delete",{name:"L",hash:{},data:i}))+'</button>\n                <button class="btn btn-small btn-green btnEdit disabled"><i class="fa fa-pencil"></i>\n                  '+o(l(e(688)).call(r,"edit",{name:"L",hash:{},data:i}))+'</button>\n                <button class="btn btn-small btn-grey nodisplay btnCancel btnSure">'+o(l(e(688)).call(r,"cancel",{name:"L",hash:{},data:i}))+'</button>\n                <button class="btn btn-small btn-red nodisplay btnGoDelete btnSure">'+o(l(e(688)).call(r,"yes",{name:"L",hash:{},data:i}))+'</button>\n                <span class="btnSure nodisplay">'+o(l(e(688)).call(r,"sure_delete",{name:"L",hash:{},data:i}))+'</span>\n              </div>\n            </div>\n\n            <div class="tab-pane" id="styleLibrary_data">\n            </div>\n\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>'},useData:!0})},731:function(t,a,e){"use strict";(function(n){var l,s=e(693);void 0===(l=function(){return n.Model.extend({list:function(t,a){(0,s.send)("dashboardStyles/?styleType=".concat(t),null,{type:"GET",contentType:"application/json;charset=utf-8",dataType:"text"},a)},get:function(t,a){(0,s.send)("dashboardStyles/".concat(t,"/"),null,{type:"GET",contentType:"application/json;charset=utf-8",dataType:"text"},a)},update:function(t,a){(0,s.send)("dashboardStyles/".concat(t.id,"/"),JSON.stringify(t),{type:"PATCH",contentType:"application/json;charset=utf-8",dataType:"text"},a)},create:function(t,a){(0,s.send)("dashboardStyles/",JSON.stringify(t),{type:"POST",contentType:"application/json;charset=utf-8",dataType:"text"},a)},delete:function(t,a){(0,s.send)("dashboardStyles/".concat(t,"/"),null,{type:"DELETE",contentType:"application/json;charset=utf-8",dataType:"text"},a)}})}.apply(a,[]))||(t.exports=l)}).call(this,e(218))}}]);