/*! Copyright Novix S.A. 2019. All rights reserved. */
(window.webpackJsonp=window.webpackJsonp||[]).push([[270],{2107:function(n,a,t){"use strict";(function(s,e){var l,o,d=t(18);l=[t(2108),t(2109),t(2110)],void 0===(o=function(n,a,l){return s.View.extend({el:e("#main"),render:function(n){var t=this,s=a();this.$el.append(s),e("#dataSnapshot").on("hidden.bs.modal",function(){e("#dataSnapshot  .searchNode").select2("destroy"),e("#dataSnapshot").off("hidden"),e("#dataSnapshot").remove()}).modal("show"),setTimeout(function(){t.addHandlers(e("#dataSnapshot")),t.loadList(e("#dataSnapshot"))},200)},addHandlers:function(a){t.e(50).then(function(){var n=[t(1129)];(function(n){(new n).create({el:"#dataSnapshot .searchNode",filteredClasses:["variable","constant"]})}).apply(null,n)}).catch(t.oe),a.find(".searchNode").on("change",function(){var n=e(this).select2("data");if(0==a.find(".inputData ul li[data-id='"+n.id+"']").length){var t=l(n);a.find(".inputData ul").append(t)}a.find(".searchNode").select2("val","")}),e("#dataSnapshot").on("updateProgress",function(n,t){t&&(a.find(".progressBar div.progress-bar").css("width",t.percent+"%"),a.find(".progressBar p").html((0,d.translate)("saving")+" "+t.nodeTitle+" ..."))}),a.find(".node-list ul").on("click","li .remover",function(){e(this).closest("li").remove()}),a.find(".btnCreate").on("click",function(){var t=[];if(a.find(".node-list li").each(function(n,a){t.push({nodeId:e(this).attr("data-id")})}),t.length>0){var s={name:"Data snapshot scenario",description:"Data snapshot scenario",nodeList:t};a.find(".inputData").hide(),a.find(".progressBar").show(),a.find(".progressBar div.bar").css("width","10%"),a.find(".progressBar p").html((0,d.translate)("saving")+" ..."),(new n).updateDataSnapshot(s,function(){a.find(".progressBar div.bar").css("width","100%"),setTimeout(function(){a.find(".progressBar").hide(),a.find(".createResult").show(),a.find(".createResult button").show()},300)},function(){a.find(".createResult").hide(),a.find(".inputData").show()})}return!1}),a.find(".controls .btnDelete").on("click",function(){e(this).hasClass("disabled")||(a.find(".controls button").hide(),a.find(".controls .btnSure").show())}),a.find(".controls .btnCancel").on("click",function(){a.find(".controls button").show(),a.find(".controls .btnSure").hide()}),a.find(".controls .btnGoDelete").on("click",function(){a.find(".controls btnSure").hide(),(new n).clearDataSnapshot(function(){a.modal("hide")})}),a.find(".controls .btnClose").on("click",function(){a.modal("hide")})},loadList:function(a){(new n).getCurrentNodesInSnapshot(function(n){n&&n.length>0&&(a.find(".controls .btnDelete").removeClass("disabled"),e.each(n,function(n,t){var s=l(t);a.find(".inputData ul").append(s)}))})}})}.apply(a,l))||(n.exports=o)}).call(this,t(218),t(1))},2108:function(n,a,t){"use strict";(function(s){var e,l=t(693);void 0===(e=function(){return s.Model.extend({getCurrentNodesInSnapshot:function(n,a){(0,l.send)("DataSnapshot/getCurrentNodesInSnapshot",null,null,n,a)},updateDataSnapshot:function(n,a,t){(0,l.send)("DataSnapshot/updateDataSnapshot",n,{type:"POST"},a,t)},clearDataSnapshot:function(n,a){(0,l.send)("DataSnapshot/clearDataSnapshot",null,null,n,a)}})}.apply(a,[]))||(n.exports=e)}).call(this,t(218))},2109:function(n,a,t){var s=t(690);function e(n){return n&&(n.__esModule?n.default:n)}n.exports=(s.default||s).template({compiler:[7,">= 4.0.0"],main:function(n,a,s,l,o){var d=null!=a?a:n.nullContext||{},i=n.escapeExpression;return'<div id="dataSnapshot" class="modal fade" tabindex="-1" role="dialog" style="display: none;">\n    <div class="modal-dialog">\n        <div class="modal-content">\n            <div class="modal-header">\n                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">x</button>\n                <h3>'+i(e(t(688)).call(d,"data_snapshot",{name:"L",hash:{},data:o}))+'</h3>\n            </div>\n\n            <div class="modal-body">\n\n                <div class="inputData">\n                    <h5>'+i(e(t(688)).call(d,"data_snapshot_explain",{name:"L",hash:{},data:o}))+'</h5>\n\n                    <div class="node-list nodeslist">\n                        <ul>\n\n                        </ul>\n                    </div>\n\n                    <div>\n                        <h5>'+i(e(t(688)).call(d,"add_node_to_snapshot",{name:"L",hash:{},data:o}))+'</h5>\n                        <input class="searchNode">\n                        \x3c!--<button class="btn btnAddNode btn-small">'+i(e(t(688)).call(d,"add_node",{name:"L",hash:{},data:o}))+'</button>--\x3e\n                    </div>\n\n                    <div class="controls">\n                        <button class="btn btnDelete btn-small btn-red disabled"><i class="fa fa-trash"></i>\n                            '+i(e(t(688)).call(d,"delete_data_snapshot",{name:"L",hash:{},data:o}))+'</button>\n                        <button class="btn btnCreate btn-primary btn-small"><i class="fa fa-file"></i>\n                            '+i(e(t(688)).call(d,"create_data_snapshot",{name:"L",hash:{},data:o}))+'</button>\n\n                        <button class="btn btn-small btn-grey nodisplay btnCancel btnSure"></i> '+i(e(t(688)).call(d,"cancel",{name:"L",hash:{},data:o}))+'</button>\n                        <button class="btn btn-small btn-red nodisplay btnGoDelete btnSure">'+i(e(t(688)).call(d,"yes",{name:"L",hash:{},data:o}))+'</button>\n                        <span class="btnSure nodisplay">'+i(e(t(688)).call(d,"sure_clear_snapshot",{name:"L",hash:{},data:o}))+'</span>\n\n                    </div>\n\n                </div>\n\n                <div class="progressBar nodisplay">\n                    <p>'+i(e(t(688)).call(d,"saving",{name:"L",hash:{},data:o}))+' ...</p>\n                    <div class="progress progress-striped active">\n                        <div class="progress-bar" style="width: 10%;"></div>\n                    </div>\n                </div>\n\n                <div class="createResult nodisplay">\n                    <p>'+i(e(t(688)).call(d,"data_snapshot_created",{name:"L",hash:{},data:o}))+'</p>\n\n                    <div class="controls">\n                        <button class="btn btnClose btn-small">'+i(e(t(688)).call(d,"close",{name:"L",hash:{},data:o}))+"</button>\n                    </div>\n                </div>\n\n            </div>\n\n        </div>\n    </div>\n</div>"},useData:!0})},2110:function(n,a,t){var s=t(690);n.exports=(s.default||s).template({compiler:[7,">= 4.0.0"],main:function(n,a,t,s,e){var l,o=null!=a?a:n.nullContext||{},d=t.helperMissing,i=n.escapeExpression;return'<li data-id="'+i("function"==typeof(l=null!=(l=t.id||(null!=a?a.id:a))?l:d)?l.call(o,{name:"id",hash:{},data:e}):l)+'">\n    <span class="node">\n        <i class="fa fa-remove remover"></i>\n        <i class="icon-'+i("function"==typeof(l=null!=(l=t.nodeClass||(null!=a?a.nodeClass:a))?l:d)?l.call(o,{name:"nodeClass",hash:{},data:e}):l)+'"></i>   \n        <span class="nodeTitle">'+i("function"==typeof(l=null!=(l=t.name||(null!=a?a.name:a))?l:d)?l.call(o,{name:"name",hash:{},data:e}):l)+'</span>\n        <span class="nodeId">'+i("function"==typeof(l=null!=(l=t.id||(null!=a?a.id:a))?l:d)?l.call(o,{name:"id",hash:{},data:e}):l)+"</span>\n    </span>\n</li>"},useData:!0})}}]);