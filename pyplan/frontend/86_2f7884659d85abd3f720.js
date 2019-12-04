/*! Copyright Novix S.A. 2019. All rights reserved. */
(window.webpackJsonp=window.webpackJsonp||[]).push([[86,3],{1031:function(e,t,n){var a=n(690);function i(e){return e&&(e.__esModule?e.default:e)}e.exports=(a.default||a).template({compiler:[7,">= 4.0.0"],main:function(e,t,a,r,s){var l=null!=t?t:e.nullContext||{},d=e.escapeExpression;return'<div class="map-event-popup">\n\n    <div class="line input-prepend">\n        <span class="add-on">'+d(i(n(688)).call(l,"event_type",{name:"L",hash:{},data:s}))+'</span>\n\n        <select name="mapEventType" class="medium-selector input-xlarge">\n            <option value="none">'+d(i(n(688)).call(l,"none",{name:"L",hash:{},data:s}))+'</option>\n            <option value="relatednode">'+d(i(n(688)).call(l,"show_choice_from_related_node",{name:"L",hash:{},data:s}))+'</option>\n            <option value="link_dashboard">'+d(i(n(688)).call(l,"show_add_link_deashboard_to_info",{name:"L",hash:{},data:s}))+'</option>\n        </select>\n    </div>\n\n    <div class="line nodisplay eventTypeDetail" data-rel="relatednode">\n\n        <div class="line">\n            <span >'+d(i(n(688)).call(l,"related_node_explain",{name:"L",hash:{},data:s}))+'</span>\n        </div>\n\n        <div class="line input-prepend">\n            <span class="add-on">'+d(i(n(688)).call(l,"related_node",{name:"L",hash:{},data:s}))+'</span>\n            <select name="mapEventRelatedNode" class="medium-selector input-xlarge">\n                <option value="">'+d(i(n(688)).call(l,"searching",{name:"L",hash:{},data:s}))+'...</option>\n            </select>\n        </div>\n    </div>\n\n\n    <div class="line nodisplay eventTypeDetail" data-rel="link_dashboard">\n        <div class="line">\n            <span >'+d(i(n(688)).call(l,"link_deashboard_explain",{name:"L",hash:{},data:s}))+'</span>\n        </div>\n\n        <div class="line input-prepend">\n            <span class="add-on">'+d(i(n(688)).call(l,"dashboard",{name:"L",hash:{},data:s}))+'</span>\n            <select class="medium-selector input-xlarge dashboardLinked">\n                <option value="">'+d(i(n(688)).call(l,"loading",{name:"L",hash:{},data:s}))+'</option>\n            </select>\n        </div>\n\n\n        <table class="table table-hover table-nomargin table-condensed mapEventTable">\n            <thead>\n                <tr>\n                    <th width="50%">'+d(i(n(688)).call(l,"node_to_set",{name:"L",hash:{},data:s}))+'</th>\n                    <th width="50%">'+d(i(n(688)).call(l,"value_to_set",{name:"L",hash:{},data:s}))+'</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr class="nodisplay template">\n                    <td>\n                        <input class="input-medium nodename" type="text" >\n                        <button class="btn btn-satblue btn-mini btnSearchNode"><i class="fa fa-search"></i></button>\n                    </td>\n                    <td>\n                        <select class="medium-selector input-xlarge attribute_selector">\n                        </select>\n                    </td>\n                </tr>\n\n            </tbody>\n\n        </table>\n\n        \n\n        \n    </div>\n\n    \n\n\n</div>'},useData:!0})},683:function(e,t,n){"use strict";(function(a){var i;void 0===(i=function(){return a.Controller.extend({name:"showModal",show:function(e){Promise.all([n.e(2),n.e(118)]).then(function(){var t=[n(701)];(function(t){(new t).render(e)}).apply(null,t)}).catch(n.oe)}})}.apply(t,[]))||(e.exports=i)}).call(this,n(694))},859:function(e,t,n){"use strict";(function(a,i){var r,s,l=n(18);r=[n(683),n(1031)],void 0===(s=function(e,t){return a.View.extend({el:i("body"),relatedInitiated:!1,linkInitiated:!1,render:function(n){var a=t(),r=n,s=this;(new e).show({title:(0,l.translate)("map_events"),html:a,height:500,modalClass:"__conditional-format-popup",buttons:[{title:(0,l.translate)("yes"),css:"primary",code:"yes"},{title:(0,l.translate)("cancel"),code:"cancel"}],callback:function(e,t){if("yes"==e){var n=r.getView();if(n){var a,i=t.find("select[name='mapEventType']").val();switch(i){case"relatednode":a={relatedNode:t.find("select[name='mapEventRelatedNode']").val()};break;case"link_dashboard":a={dashboardId:t.find("select.dashboardLinked").val(),dashboardName:t.find("select.dashboardLinked").select2("data").text,params:s.getLinkDashboardParams(t)}}a&&n.setMapEventData(a),n.setMapEventType(i)}}},onLoad:function(e){e.find("select[name='mapEventType']").on("change",function(){var t=i(this).val();e.find("div.eventTypeDetail").hide(),e.find("div.eventTypeDetail[data-rel='"+t+"']").show(),"relatednode"==t&&s.searchRelatedNodes(e,r),"link_dashboard"==t&&s.initiateLinkDashboard(e,r)});var t=r.getView();t.currentResult&&t.currentResult.itemProperties&&t.currentResult.itemProperties.map&&t.currentResult.itemProperties.map.event&&(e.find("select[name='mapEventType']").val(t.currentResult.itemProperties.map.event.type),e.find("select[name='mapEventType']").trigger("change"))}})},searchRelatedNodes:function(e,t){if(!this.relatedInitiated){this.relatedInitiated=!0;var a=t.getView(),r=e.find("select[name='mapEventRelatedNode']");r.html(""),r.append(i("<option />").val("").text((0,l.translate)("searching")));var s=a.currentResult.itemProperties.map.drawIndexes[0];s&&""!=s&&Promise.resolve().then(function(){var e=[n(219)];(function(e){(new e).getOutputs(s,function(e){r.empty(""),i.each(e,function(){r.append(i("<option />").val(this.id).text(this.name))}),a.currentResult.itemProperties.map&&a.currentResult.itemProperties.map.event&&a.currentResult.itemProperties.map.event.eventData&&a.currentResult.itemProperties.map.event.eventData.relatedNode&&r.val(a.currentResult.itemProperties.map.event.eventData.relatedNode)})}).apply(null,e)}).catch(n.oe)}},initiateLinkDashboard:function(e,t){if(!this.linkInitiated){var a=this;this.linkInitiated=!0;var r=t.getView();if(r.currentResult&&r.currentResult.itemProperties&&r.currentResult.itemProperties.map&&r.currentResult.itemProperties.map.attrByDim&&"-1"!=r.currentResult.itemProperties.map.attrByDim){var s=r.currentResult.itemProperties.map.attrByDim;r.model.getIndexValues({id:s},function(t){var n=t.results;n&&(i.each(n,function(t,n){i("<option value='"+n.value+"'>"+n.value+"</option>").appendTo(e.find(".attribute_selector"))}),r.currentResult&&r.currentResult.itemProperties&&r.currentResult.itemProperties.map&&r.currentResult.itemProperties.map.event&&"link_dashboard"==r.currentResult.itemProperties.map.event.type&&a.loadLinkDashboardData(e,r.currentResult.itemProperties.map.event.eventData),a.ensureOneRowFree(e))})}e.on("click","button.btnSearchNode",function(){var e=i(this);n.e(9).then(function(){var t=[n(700)];(function(t){(new t).searchNode(function(t){e.closest("tr").find("input.nodename").val(t.id).trigger("change")})}).apply(null,t)}).catch(n.oe)});var d=e.find("select.dashboardLinked");d.select2({width:230,minimumResultsForSearch:1,escapeMarkup:function(e){return e}}),n.e(12).then(function(){var e=[n(743)];(function(e){(new e).show(d,{complete:function(){d.parent().find(".select2-chosen").html((0,l.translate)("select_dashboard")),r.currentResult&&r.currentResult.itemProperties&&r.currentResult.itemProperties.map&&r.currentResult.itemProperties.map.event&&"link_dashboard"==r.currentResult.itemProperties.map.event.type&&d.select2("val",r.currentResult.itemProperties.map.event.eventData.dashboardId)}})}).apply(null,e)}).catch(n.oe),e.find(".mapEventTable").on("change","input.nodename",function(){a.ensureOneRowFree(e)})}},ensureOneRowFree:function(e){var t=e.find(".mapEventTable"),n=!1;if(1==t.find("tbody tr").length?n=!0:(n=!0,t.find("tbody tr").each(function(e,t){i(t).hasClass("template")||""!=i(t).find("input.nodename").val()||(n=!1)})),n){var a=t.find("tbody tr").first().html();i("<tr/>").append(a).appendTo(t.find("tbody"))}var r=0;t.find("tbody tr").each(function(e,t){i(t).hasClass("template")||""!=i(t).find("input.nodename").val()||r++}),r>1&&t.find("tbody tr").each(function(e,t){if(!i(t).hasClass("template")&&""==i(t).find("input.nodename").val()&&(r++,i(t).remove(),1==r))return!1})},getLinkDashboardParams:function(e){var t=[];return e.find(".mapEventTable").find("tbody tr").each(function(e,n){i(n).hasClass("template")||""==i(n).find("input.nodename").val()||t.push({node:i(n).find("input.nodename").val(),attribute:i(n).find("select.attribute_selector").val()})}),t},loadLinkDashboardData:function(e,t){if(t.params){var n=e.find(".mapEventTable");i.each(t.params,function(e,t){var a=n.find("tbody tr").first().html(),r=i("<tr/>").append(a).appendTo(n.find("tbody"));r.find("input.nodename").val(t.node),r.find("select.attribute_selector").val(t.attribute)})}}})}.apply(t,r))||(e.exports=s)}).call(this,n(218),n(1))}}]);