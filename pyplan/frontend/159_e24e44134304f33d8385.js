/*! Copyright Novix S.A. 2019. All rights reserved. */
(window.webpackJsonp=window.webpackJsonp||[]).push([[159],{1016:function(e,t,i){var r=i(690);e.exports=(r.default||r).template({compiler:[7,">= 4.0.0"],main:function(e,t,i,r,n){return'<div class="dashboard-container" style="height:100%">\n\n</div>'},useData:!0})},834:function(e,t,i){"use strict";(function(r){var n,a;n=[i(730),i(219),i(699),i(1016)],void 0===(a=function(e,t,i,n){return e.extend({currentNodeId:null,currentDashboardId:null,currentViews:[],noQuery:void 0,ownerWidth:void 0,ownerHeight:void 0,el:r("#n_o_n_e"),render:function(e){this.baseRender(e),this.drawItem()},refreshItemDash:function(){this.fullRefresh(!0)},drawItem:function(){var e=this;r(this.tagId).find(".item-area").addClass("extrafullSize"),r(this.tagId).find(".item-area").addClass("dashboardContainer"),r(this.tagId).find(".item-title").remove();var t=n();r(this.tagId).find(".item-area").empty(),r(this.tagId).find(".item-area").html(t),this.updateSize(),r(this.tagId).off("showDashboardInContainer"),r(this.tagId).on("showDashboardInContainer",function(t,i,r){e.showDashboard(i,r)})},fullRefresh:function(){(this.currentNodeId||this.currentDashboardId)&&this.showDashboard(this.currentNodeId,this.currentDashboardId)},onRemoveItemView:function(){this.removeCurrentViews(),this.currentViews=null,r(this.tagId).find(".item-area .colorpick").spectrum("destroy")},removeCurrentViews:function(){if(this.currentViews.length>0)for(var e=0;e<this.currentViews.length;e++)this.currentViews[e].onRemoveItemView(),this.model.removeItemModel(this.currentViews[e]);r(this.tagId).find("div.dashboard-container").empty(),this.currentViews=[]},updateValues:function(e){},_evaluateNode:function(e,t,i,r,n){},baseUpdateSize:function(){r(this.tagId).find(".item-area").height(r(this.tagId).parent().height()),r(this.tagId).find(".item-area").css("top","0px")},updateSize:function(){r(this.tagId).find(".item-area").height(r(this.tagId).parent().height()-7)},editModeChanged:function(){this.editMode?(this.removeCurrentViews(),r(this.tagId).find("div.dashboard-container").css("border","1px dashed gray")):(this.showDashboard(this.currentNodeId,this.currentDashboardId),r(this.tagId).find("div.dashboard-container").css("border","none"))},showDashboard:function(e,i){if(this.currentNodeId=e,this.currentDashboardId=i,this.removeCurrentViews(),i){var r=this;this.model.getDashboard(i,function(e){r.parseDashboard(e),r=null})}else{r=this;(new t).evaluateNode(e,function(e){e&&r.model.getDashboard(e.dashboardId,function(e){r.parseDashboard(e),r=null})})}},parseDashboard:function(e){var t=this;(new i).getEmptyContent(this.model,function(i){i.setElement(r(t.tagId).find("div.dashboard-container")),i.render();if(e.definition&&""!=e.definition){var n=e.definition,a=[],s=[];n.noQuery&&n.noQuery.length>0&&void 0!=n.noQuery[0].rel&&(a=n.noQuery,r.each(a,function(e,t){r.each(t.rel,function(e,t){s.push(t)})})),t.noQuery=a,t.ownerWidth=n.ownerWidth,t.ownerHeight=n.ownerHeight,t._recursiveDashboardParser(n,i,s)}else i.initializeWithNode(e.nodes,!1),this.currentViews.push(i),setTimeout(function(){},200)})},_recursiveDashboardParser:function(e,t,i){var n=this;if("container"==e.type)r(t.tagId).parent().attr("data-factor",e.factor),t.splitPane("horizontal"==e.direction?"splith":"splitv",function(a){"horizontal"==e.direction?t.splitter.position((r(t.tagId).parent().parent().width()+7)*e.pane1.width,!0):t.splitter.position((r(t.tagId).parent().parent().height()+7)*e.pane1.height,!0),n._recursiveDashboardParser(e.pane1,t,i),n._recursiveDashboardParser(e.pane2,a,i)});else{var a=i.indexOf(e.nodeId)>=0;t.calculateScaleFactor(this.ownerWidth,this.ownerHeight),t.createNewView(e,a),r(t.tagId).parent().attr("data-factor",e.factor),this.currentViews.push(t)}}})}.apply(t,n))||(e.exports=a)}).call(this,i(1))}}]);