/*! Copyright Novix S.A. 2019. All rights reserved. */
(window.webpackJsonp=window.webpackJsonp||[]).push([[205,16,27,62,273,280],{688:function(e,t,n){"use strict";var a=n(18);e.exports=function(e){return(0,a.translate)(e)}},694:function(e,t,n){var a,o;!function(r,i){if(!r.BackboneMVC){var l=r.BackboneMVC={};a=[n(218),n(220),n(1)],void 0===(o=function(e,t,n){return function(e,t,n,a,o){"use strict";if(void 0===n||void 0===a)return;var r=function(){function e(){this._created=(new Date).getTime()}return a.extend(e.prototype,{_created:null}),e.extend=function(t){var n,o=function(){return void 0!==n?n:(e.apply(this,arguments),void 0!==this.initialize&&this.initialize.apply(this,arguments),n=this)};return o.prototype=new e,a.extend(o.prototype,t),o.prototype.constructor=o,o.prototype.classId=a.uniqueId("controller_"),o},e}();a.extend(t,{namespace:function(t){for(var n=t.split("."),a=e,o=0,r=n.length;o<r;o++)void 0===a[n[o]]&&(a[n[o]]={}),a=a[n[o]]},Controller:{beforeFilter:function(){return(new o.Deferred).resolve()},afterRender:function(){return(new o.Deferred).resolve()},checkSession:function(){return(new o.Deferred).resolve(!0)},default:function(){return!0}},Router:function(){var e={_history:[],routes:{"*components":"dispatch"},dispatch:function(e){var t,n=(e||"").replace(/\/+$/g,"").split("/");if(i[n[0]]?t=n[0]:void 0!==i[u(n[0])]?t=u(n[0]):void 0!==i[d(n[0])]&&(t=d(n[0])),void 0===t)return this[404]();var r=new i[t],l=n.length>1?n[1]:"default";if("function"!=typeof r._actions[l])return this[404]();var f=n.length>2?a.rest(n,2):[];return function(e,t,n,o){e._history.length>888&&(e._history=a.last(e._history,888));e._history.push([t,n,o])}(this,t,l,f),function(e,t,n){var a=new i[e],r=[t].concat(n),l=o.Deferred(),u=a.beforeFilter.apply(a,r);c(u)?l=u:s(l,u);"function"==typeof a._secureActions[t]&&(l=l.pipe(function(){var e=a.checkSession.apply(a,n);return c(e)?e:s(new o.Deferred,e)}));return l=(l=l.pipe(function(){var e=a[t].apply(a,n);return c(e)?e:s(new o.Deferred,e)})).pipe(function(){var e=a.afterRender.apply(a,r);return c(e)?e:s(new o.Deferred,e)})}(t,l,f)},404:function(){},getLastAction:function(){return a.last(this._history,1)[0]},navigate:function(e,t){t&&!0!==t||(t={trigger:t});var r=a.extend({},t);return r.trigger=!1,n.Router.prototype.navigate.call(this,e,r),t.trigger?this.dispatch(e):(new o.Deferred).resolve()}};function t(t){var o=a.extend(t.routes||{},e.routes);return n.Router.extend(a.extend({},e,t,{routes:o}))}var r=n.Router.extend(a.extend({extend:t},e));return r.extend=t,r}(),Model:{extend:function(e){return e=a.extend({__fetchSuccessCallback:null,__fetchErrorCallback:null,fetch:function(e){var t=(e=e||{}).success;e.success=function(e,n){if(t&&t(e,n),e.__fetchSuccessCallback){var a=e.__fetchSuccessCallback;e.__fetchSuccessCallback=null,a.apply(e)}};var o=e.error;e.error=function(e,t){o&&o(e,t),e.trigger("error",o)},n.Model.prototype.fetch.apply(this,[e].concat(a.rest(arguments)))},parse:function(e){return this.__fetchSuccessCallback=null,this.__fetchErrorCallback=null,!e||e.error?(this.trigger("error",e&&e.error||e),{}):(this.__fetchSuccessCallback=function(){this.trigger("read",e.data)}.bind(this),e.data)}},e),n.Model.extend(e)}}}),t.Controller.extend=function e(n,o){return function(n){var c=n.name;if(void 0===c)throw"'name' property is mandatory ";n=a.extend({},o,n);var s=a.extend({},t.Controller),u={},d={};a.each(n,function(e,t){if(s[t]=e,"function"!=typeof e||"_"===t[0]||a.indexOf(l,t)>=0)return!1;if(u[t]=e,t.match(/^user_/i)){d[t]=e;var o=t.replace(/^user_/i,"");"function"!=typeof n[o]&&(d[o]=e,u[o]=e)}}),a.extend(s,u,{_actions:u,_secureActions:d}),"extend"in s&&delete s.extend;var f=r.extend(s);return a.extend(f,{extend:e(f,a.extend({},o,n))}),i[c]=f,f}}(t.Controller,{});var i={},l=["initialize","beforeFilter","afterRender","checkSession"];function c(e){return a.isObject(e)&&e.promise&&"function"==typeof e.promise}function s(e,t){return void 0===t&&(t=!0),e[t?"resolve":"reject"](t)}function u(e){return"string"!=typeof e?null:(e=e.replace(/\s{2,}/g," "),a.map(e.split(" "),function(e){return e.replace(/(^|_)[a-z]/gi,function(e){return e.toUpperCase()}).replace(/_/g,"")}).join(" "))}function d(e){return"string"!=typeof e?null:(e=e.replace(/\s{2,}/g," "),a.map(e.split(" "),function(e){return e.replace(/^[A-Z]/g,function(e){return e.toLowerCase()}).replace(/([a-z])([A-Z])/g,function(e,t,n){return t+"_"+n.toLowerCase()})}).join(" "))}}(r,l,e,t,n),l}.apply(t,a))||(e.exports=o)}}(this)},699:function(e,t,n){"use strict";(function(a,o){var r,i;r=[n(684),n(706)],void 0===(i=function(e,t){return a.Controller.extend({name:"dashboardManager",showDashboard:function(t,a,r,i,l,c){var s="dashboard-"+t,u=new e;u.existsTask(s)?(u.selectTask(s),i&&o(".mainTask[data-rel='"+s+"']").length>0&&o(".mainTask[data-rel='"+s+"']").trigger("refreshView")):(u.addSimpleTask(s,r),n.e(19).then(function(){var e=[n(747)];(function(e){(new e).render(t,a,l,c),u.selectTask(s)}).apply(null,e)}).catch(n.oe))},showEmbeddableDashboard:function(t,a,r,i,l,c){var s="dashboard-"+t,u=new e;__currentSession.fromEmbedded&&u.removeAllTask(),u.existsTask(s)?(u.selectTask(s),i&&o(".mainTask[data-rel='"+s+"']").length>0&&o(".mainTask[data-rel='"+s+"']").trigger("refreshView")):(u.addSimpleTask(s,r),Promise.all([n.e(19),n.e(124)]).then(function(){var e=[n(801)];(function(e){(new e).render(t,a,l,c),u.selectTask(s)}).apply(null,e)}).catch(n.oe))},removeDashboardTaskFromHome:function(t){var n="dashboard-"+t,a=new e;a.existsTask(n)&&a.removeTask(n)},drawDashboardBars:function(e,t){this.drawToolbar(e,function(){t()})},drawBottombar:function(e,t){n.e(125).then(function(){var a=[n(802)];(function(n){var a=new n;a.setElement(e),a.render(),void 0!=t&&t()}).apply(null,a)}).catch(n.oe)},drawToolbar:function(e,t){n.e(44).then(function(){var a=[n(754)];(function(n){(new n).show({el:e,positions:["left","right"],onLoad:t,className:"dockDashboardProperty"})}).apply(null,a)}).catch(n.oe)},drawMoreDashboard:function(e,t){n.e(126).then(function(){var e=[n(803)];(function(e){var n=new e;n.setElement("body"),n.render(t)}).apply(null,e)}).catch(n.oe)},getDefaultContent:function(e,t){Promise.all([n.e(1),n.e(8),n.e(63)]).then(function(){var a=[n(727)];(function(n){var a=new n({model:e});t(a)}).apply(null,a)}).catch(n.oe)},getEmptyContent:function(e,t){Promise.all([n.e(1),n.e(64)]).then(function(){var a=[n(739)];(function(n){var a=new n({model:e});t(a)}).apply(null,a)}).catch(n.oe)},getChartToolbar:function(e,t,a,o){var r;switch(e){case"linechart":r="line/lineToolbar";break;case"columnchart":case"columnchartstacked":case"columnchartpercent":case"barchart":case"barchartstacked":case"barchartpercent":r="columnAndBar/columnAndBarToolbar";break;case"areachart":case"areachartstacked":case"areachartpercent":r="area/areaToolbar";break;case"piechart":r="pie/pieToolbar";break;case"funnelchart":r="funnelToolbar/funnelToolbar";break;case"pyramidchart":r="pyramidToolbar/pyramidToolbar";break;case"gaugechart":r="gauge/gaugeToolbar";break;case"waterfallchart":r="waterfall/waterfallToolbar";break;case"scatterchart":r="scatter/scatterToolbar";break;case"table":r="table/tableToolbar";break;case"indexlist":r="index/indexToolbar";break;case"map":r="map/mapToolbar";break;case"indicator":r="indicator/indicatorToolbar";break;case"selector":r="selector/selectorToolbar";break;case"formnode":r="formnode/formnodeToolbar";break;case"nodetable":r="nodeTable/nodetableToolbar";break;case"button":r="button/buttonToolbar";break;case"analyticachart":r="analyticaChart/analyticaChartToolbar";break;case"objectItem":switch(t){case"texteditor":r="texteditor/texteditorToolbar";break;case"cubeviewer":r="cubeviewer/cubeviewerToolbar";break;case"diagramviewer":r="diagramViewer/diagramViewerToolbar";break;case"mapviewer":r="mapViewer/mapViewerToolbar";break;case"menuwidget":r="menuWidget/menuWidgetToolbar";break;case"dashboardcontainer_QUITAR_ESTO_PARA_MOSTRAR":r="dashboardContainer/dashboardContainerToolbar"}break;case"complexchart":r="complexchart/complexChartToolbar";break;default:r=!1}r?Promise.all([n.e(25),n.e(56),n.e(127)]).then(function(){var e=[n(804)("./"+r)];(function(e){var t=new e({model:a});o(t)}).apply(null,e)}).catch(n.oe):Promise.all([n.e(25),n.e(56),n.e(128)]).then(function(){var e=[n(805)];(function(e){var t=new e({model:a});o(t)}).apply(null,e)}).catch(n.oe)},getChartItemViewFromType:function(e,t){switch(e){case"empty":Promise.all([n.e(1),n.e(64)]).then(function(){var e=[n(739)];(function(e){t(e)}).apply(null,e)}).catch(n.oe);break;case"linechart":Promise.all([n.e(1),n.e(8),n.e(129)]).then(function(){var e=[n(806)];(function(e){t(e)}).apply(null,e)}).catch(n.oe);break;case"columnchart":Promise.all([n.e(1),n.e(8),n.e(63)]).then(function(){var e=[n(727)];(function(e){t(e)}).apply(null,e)}).catch(n.oe);break;case"columnchartstacked":Promise.all([n.e(1),n.e(8),n.e(130)]).then(function(){var e=[n(807)];(function(e){t(e)}).apply(null,e)}).catch(n.oe);break;case"columnchartpercent":Promise.all([n.e(1),n.e(8),n.e(131)]).then(function(){var e=[n(808)];(function(e){t(e)}).apply(null,e)}).catch(n.oe);break;case"barchart":Promise.all([n.e(1),n.e(8),n.e(132)]).then(function(){var e=[n(756)];(function(e){t(e)}).apply(null,e)}).catch(n.oe);break;case"barchartstacked":Promise.all([n.e(1),n.e(8),n.e(133)]).then(function(){var e=[n(809)];(function(e){t(e)}).apply(null,e)}).catch(n.oe);break;case"barchartpercent":Promise.all([n.e(1),n.e(8),n.e(134)]).then(function(){var e=[n(810)];(function(e){t(e)}).apply(null,e)}).catch(n.oe);break;case"areachart":Promise.all([n.e(1),n.e(8),n.e(135)]).then(function(){var e=[n(757)];(function(e){t(e)}).apply(null,e)}).catch(n.oe);break;case"areachartstacked":Promise.all([n.e(1),n.e(8),n.e(136)]).then(function(){var e=[n(811)];(function(e){t(e)}).apply(null,e)}).catch(n.oe);break;case"areachartpercent":Promise.all([n.e(1),n.e(8),n.e(137)]).then(function(){var e=[n(812)];(function(e){t(e)}).apply(null,e)}).catch(n.oe);break;case"piechart":Promise.all([n.e(1),n.e(8),n.e(138)]).then(function(){var e=[n(813)];(function(e){t(e)}).apply(null,e)}).catch(n.oe);break;case"gaugechart":Promise.all([n.e(1),n.e(8),n.e(139)]).then(function(){var e=[n(814)];(function(e){t(e)}).apply(null,e)}).catch(n.oe);break;case"waterfallchart":Promise.all([n.e(1),n.e(8),n.e(140)]).then(function(){var e=[n(815)];(function(e){t(e)}).apply(null,e)}).catch(n.oe);break;case"scatterchart":Promise.all([n.e(1),n.e(8),n.e(141)]).then(function(){var e=[n(816)];(function(e){t(e)}).apply(null,e)}).catch(n.oe);break;case"complexchart":Promise.all([n.e(1),n.e(8),n.e(142)]).then(function(){var e=[n(817)];(function(e){t(e)}).apply(null,e)}).catch(n.oe);break;case"table":Promise.all([n.e(1),n.e(11),n.e(143)]).then(function(){var e=[n(818)];(function(e){t(e)}).apply(null,e)}).catch(n.oe);break;case"indexlist":Promise.all([n.e(1),n.e(144)]).then(function(){var e=[n(819)];(function(e){t(e)}).apply(null,e)}).catch(n.oe);break;case"map":Promise.all([n.e(34),n.e(1),n.e(11),n.e(93),n.e(145)]).then(function(){var e=[n(820)];(function(e){t(e)}).apply(null,e)}).catch(n.oe);break;case"indicator":Promise.all([n.e(91),n.e(1),n.e(146)]).then(function(){var e=[n(821)];(function(e){t(e)}).apply(null,e)}).catch(n.oe);break;case"selector":Promise.all([n.e(1),n.e(147)]).then(function(){var e=[n(822)];(function(e){t(e)}).apply(null,e)}).catch(n.oe);break;case"formnode":Promise.all([n.e(1),n.e(148)]).then(function(){var e=[n(823)];(function(e){t(e)}).apply(null,e)}).catch(n.oe);break;case"nodetable":Promise.all([n.e(1),n.e(15),n.e(35),n.e(149)]).then(function(){var e=[n(824)];(function(e){t(e)}).apply(null,e)}).catch(n.oe);break;case"button":Promise.all([n.e(1),n.e(150)]).then(function(){var e=[n(825)];(function(e){t(e)}).apply(null,e)}).catch(n.oe);break;case"funnelchart":Promise.all([n.e(1),n.e(8),n.e(151)]).then(function(){var e=[n(826)];(function(e){t(e)}).apply(null,e)}).catch(n.oe);break;case"pyramidchart":Promise.all([n.e(1),n.e(8),n.e(152)]).then(function(){var e=[n(827)];(function(e){t(e)}).apply(null,e)}).catch(n.oe);break;case"analyticachart":Promise.all([n.e(1),n.e(153)]).then(function(){var e=[n(828)];(function(e){t(e)}).apply(null,e)}).catch(n.oe)}},getObjectItemViewFromType:function(e,t){switch(e){case"texteditor":Promise.all([n.e(1),n.e(92),n.e(154)]).then(function(){var e=[n(829)];(function(e){t(e)}).apply(null,e)}).catch(n.oe);break;case"cubeviewer":Promise.all([n.e(1),n.e(15),n.e(35),n.e(155)]).then(function(){var e=[n(830)];(function(e){t(e)}).apply(null,e)}).catch(n.oe);break;case"diagramviewer":Promise.all([n.e(1),n.e(11),n.e(21),n.e(156)]).then(function(){var e=[n(831)];(function(e){t(e)}).apply(null,e)}).catch(n.oe);break;case"mapviewer":Promise.all([n.e(34),n.e(1),n.e(11),n.e(94),n.e(157)]).then(function(){var e=[n(832)];(function(e){t(e)}).apply(null,e)}).catch(n.oe);break;case"inputform":Promise.all([n.e(20),n.e(1),n.e(15),n.e(36),n.e(158)]).then(function(){var e=[n(833)];(function(e){t(e)}).apply(null,e)}).catch(n.oe);break;case"dashboardcontainer":Promise.all([n.e(1),n.e(159)]).then(function(){var e=[n(834)];(function(e){t(e)}).apply(null,e)}).catch(n.oe)}},getFilterView:function(e){n.e(160).then(function(){var t=[n(835)];(function(t){e(t)}).apply(null,t)}).catch(n.oe)},showCopyDashboard:function(e,t,a){n.e(161).then(function(){var o=[n(836)];(function(n){(new n).render(e,t,a)}).apply(null,o)}).catch(n.oe)},showDashboardComments:function(e){n.e(162).then(function(){var t=[n(837)];(function(t){var n=new t;n.setElement(e.parent),n.render(e)}).apply(null,t)}).catch(n.oe)},refreshAllOpenDashboards:function(){o(".mainTask.dashboardTask .btnRefresh").trigger("click")},showTimeFrameSetting:function(e){n.e(163).then(function(){var t=[n(838)];(function(t){var n=new t(e);n.setElement(e.el),n.render()}).apply(null,t)}).catch(n.oe)},updatePrintReportProgress:function(e){n.e(45).then(function(){var t=[n(717)];(function(t){new t(e).updatePrintReportProgress()}).apply(null,t)}).catch(n.oe)},updatePrintReportMessage:function(e){n.e(45).then(function(){var t=[n(717)];(function(t){new t(e).updatePrintReportMessage()}).apply(null,t)}).catch(n.oe)},updatePrintReportComplete:function(e){n.e(45).then(function(){var t=[n(717)];(function(t){new t(e).updatePrintReportComplete()}).apply(null,t)}).catch(n.oe)}})}.apply(t,r))||(e.exports=i)}).call(this,n(694),n(1))},706:function(e,t,n){"use strict";(function(a,o){var r,i=n(693);void 0===(r=function(){return a.Model.extend({defaults:{dashId:null,dashboardViewList:[],modifiedDash:!1,noQuery:[],styleLibraries:[],nodeOwner:"",extraOptions:void 0},resizeTimeOut:0,getDashboard:function(e,t){(0,i.send)("dashboardManager/by_id/".concat(e,"/"),null,null,function(e){e&&(t(e),o("#summary").trigger("refresh"))})},getNavigator:function(e,t){var n=e.reportId,a=void 0===n?null:n,o=e.dashboardId,r=void 0===o?null:o,l="";a?(l="?report_id=".concat(a),r&&(l+="&dashboard_id=".concat(r))):r&&(l="?dashboard_id=".concat(r)),(0,i.send)("reportManager/getNavigator/".concat(l),null,null,t)},calculateScaleFactor:function(e,t){if(this.getItemsModel().length>0)for(var n=this.getItemsModel(),a=0;a<n.length;a++)n[a].calculateScaleFactor(e,t)},updateSizes:function(e,t){if(this.getItemsModel().length>0){var n=300;t&&(n=1),clearTimeout(this.resizeTimeOut);var a=this.getItemsModel();this.resizeTimeOut=setTimeout(function(){var e;for(e=0;e<a.length;e++)a[e].baseUpdateSize(),a[e].updateSize()},n)}},setStateModified:function(e){this.set({modifiedDash:e})},getStateModified:function(){return this.get("modifiedDash")},addItemToModel:function(e){this.get("dashboardViewList").push(e)},getItemsModel:function(){return this.get("dashboardViewList")},getItemModel:function(e){var t,n=this.getItemsModel();for(t=0;t<n.length;t++)if(n[t].tagId==e)return n[t]},countItemsModelByNodeId:function(e){for(var t=0,n=this.getItemsModel(),a=0;a<n.length;a++)n[a].currentNodeId&&e&&n[a].currentNodeId.toLowerCase()==e.toLowerCase()&&t++;return t},removeItemModel:function(e){var t,n=this.getItemsModel();for(t=0;t<n.length;t++)if(n[t].tagId==e.tagId){n.splice(t,1);break}this.set({dashboardViewList:n})},removeAllItemsModel:function(){this.set("dashboardViewList",[])},changeItemModel:function(e,t){this.removeItemModel(e),this.addItemToModel(t)},setNodeOwner:function(e){this.set("node",e)},getNodeOwner:function(){return this.get("node")},onFilterChange:function(e,t,n,a,o,r){if(o){var i=this.getItemModel(o);if(i&&i.isUnlinkedIndex(e))return void i.onFilterChange(e,t,n,a,!0)}var l=this.getItemsModel();if(l)for(var c=0;c<l.length;c++)l[c].onFilterChange(e,t,n,a,!1,r)},onFiltersChange:function(e){var t=this.getItemsModel();if(t)for(var n=0;n<t.length;n++)t[n].onFiltersChange(e)},synchronizeDrop:function(e,t,n,a,o,r,i){if(i){var l=this.getItemsModel();if(l)for(var c=0;c<l.length;c++)l[c].tagId&&l[c].tagId!=i&&l[c].onSynchronizeDrop(e,t,n,a,o,r)}},synchronizeLevel:function(e,t,n){if(n){var a=this.getItemsModel();if(a)for(var o=0;o<a.length;o++)a[o].tagId&&a[o].tagId!=n&&a[o].onSynchronizeLevel(e,t)}},getNodeFullData:function(e,t,n,a){var o={node:e};t&&(o.fromRow=1,o.toRow=t),(0,i.send)("dashboardManager/getNodeFullData/",o,{type:"GET"},n,a)},getNodeIndexes:function(e,t){(0,i.send)("dashboardManager/getNodeIndexes/",{node:e},null,function(e){e&&t(e)})},getIndexValues:function(e,t){(0,i.send)("dashboardManager/getIndexValues/",e,null,function(e){e&&t(e)})},getGeoDef:function(e,t){(0,i.send)("Dashboard/GetGeoDef/"+e,null,null,function(e){e&&t(e)})},evaluateNode:function(e,t,n,a,o,r,l,c,s,u,d,f,h,p,b){c||(c="sum");var v={node:e,dims:t,rows:n,columns:a,summaryBy:c,bottomTotal:d,rightTotal:f,timeFormat:h,timeFormatType:p,calendarType:b},m="evaluateNode";r&&(m="evaluateNodeDef"),s&&s>0&&u&&u>0&&(v.fromRow=s*(u-1)+1,v.toRow=s*u),(0,i.send)("dashboardManager/".concat(m,"/"),JSON.stringify(v),{type:"POST",contentType:"application/json;charset=utf-8"},o,l)},evaluateNodeForPivot:function(e,t,n,a){(0,i.send)("Dashboard/EvaluateNodeForPivot/",{node:e},{type:"GET"},function(e){var r=e.value,i={success:function(e,n,a){t(e)},complete:function(){o("#mainLoading").hide(),o("#secondLoading").hide(),n()},dataType:"json",progress:function(e){if(e.lengthComputable){var t=e.loaded/e.total*100;a(t)}else try{var n=this.getResponseHeader("X-Content-Length");t=e.loaded/n*100;a(t)}catch(e){}}};o("#secondLoading").show(),o.ajax("".concat(__apiURL,"/scripts/download.aspx?name=").concat(r),i)},n)},updateDefinition:function(e,t,n,a){var r=[];n&&o.each(n,function(e,t){r.push({id:t})});var l={dashboardId:e,definition:t,styles:n};(0,i.send)("dashboardManager/".concat(e,"/"),JSON.stringify(l),{type:"PATCH",contentType:"application/json;charset=utf-8",dataType:"text"},function(e){void 0!=a&&a(e)})},updateDashboardImage:function(e,t,n){var a={id:e,fileData:t};(0,i.send)("Dashboard/UpdateImage/",a,{type:"PUT"},function(t){o("#summary").trigger("refresh"),o("#model-summary").trigger("refresh",{id:e}),t&&n&&n(t)})},validateIndexes:function(e,t){var n=function(t){var n;for(n=0;n<e.length;n++)if(e[n].field==t)return e[n]},a=function(e){var t,a;for(t=0;t<e.length;t++)void 0!=(a=n(e[t].field))&&(e[t].name=a.name)};a(t.dims),a(t.rows),a(t.columns)},initializeDashboardQuery:function(e){this.set("noQuery",e),this._initNoQuery()},_initNoQuery:function(){var e=this.get("noQuery");e&&e.length>0&&o.each(e,function(e,t){t.started=!1})},isReadyForEvaluate:function(e,t){var n=!0,a=this.get("noQuery");return a&&a.length>0&&o.each(a,function(a,o){o.node==e?o.started=!0:0==o.started&&o.rel&&o.rel.indexOf(t)>=0&&(n=!1)}),n},setNodeValueChanges:function(e,t){(0,i.send)("dashboardManager/pivotGrid/setCubeChanges/",JSON.stringify(e),{type:"POST",contentType:"application/json;charset=utf-8"},function(e){t(e),o("body").trigger("pendingChanges",[!0])})},isResultComputed:function(e,t){(0,i.send)("dashboardManager/isResultComputed/",JSON.stringify({nodes:e}),{type:"POST",contentType:"application/json;charset=utf-8"},function(e){t(e)})},reevaluateNodesNeeded:function(e){o(".dashboardTask").trigger("reevaluateNodesNeeded",[e])},reevaluateNodesNeededInThisDashboard:function(e){for(var t=[],n=this.getItemsModel(),a=0;a<n.length;a++){var r=n[a].getNodesOfView();r&&(t=t.concat(r))}t.length>0&&this.isResultComputed(t,function(t){if(t&&t.length>0)for(var a=0;a<n.length;a++)e&&n[a].tagId==e||(t.indexOf(n[a].currentNodeId)>=0&&o(n[a].tagId).trigger("evaluateNodeFromCurrentResult"),n[a].needRefresh(t)&&n[a].refreshItemDash())})},applyNumberFormat:function(e){for(var t=this.getItemsModel(),n=0;n<t.length;n++)t[n].currentNodeId==e&&t[n].applyNumberFormat()},getStyleLibrary:function(e){var t=this.get("styleLibraries");if(t)for(var n=0;n<t.length;n++)if(t[n].id==e)return t[n].definition;return[]},getStyleLibraries:function(){return this.get("styleLibraries")},setStyleLibraries:function(e){return this.set("styleLibraries",e)},refreshStyleLibraries:function(e){var t=this;n.e(65).then(function(){var a=[n(731)];(function(n){(new n).list(null,function(n){t.set("styleLibraries",n),e(n)})}).apply(null,a)}).catch(n.oe)},syncDrilldown:function(e,t,n){var a=this.getItemsModel();if(a)for(var o=0;o<a.length;o++)a[o].tagId!=n&&a[o].syncDrilldown(e,t,n)},syncDrillUp:function(e,t){var n=this.getItemsModel();if(n)for(var a=0;a<n.length;a++)n[a].tagId!=t&&n[a].syncDrillup(e,t)},syncShowHideLegend:function(e,t,n){},viewAsChart:function(e,t){(0,i.send)("Dashboard/viewAsChart/",e,{type:"POST"},t)}})}.apply(t,[]))||(e.exports=r)}).call(this,n(218),n(1))},724:function(e,t,n){"use strict";(function(a){var o,r=n(18),i=n(693);void 0===(o=function(){var e=function(e,t,a){null!==e.companySettingFile&&""!==e.companySettingFile&&n.e(42).then(function(){var t=[n(713)("./".concat(e.companySettingFile))];(function(){Promise.resolve().then(function(){n(221)}).catch(n.oe)}).apply(null,t)}).catch(n.oe),__currentSession=e,(0,r.setProcessDictionary)(e.process),(0,i.ajaxSetup)(),Promise.all([n.e(2),n.e(6),n.e(43)]).then(function(){var a=[n(684)];(function(n){(new n).clearUI(),t(e)}).apply(null,a)}).catch(n.oe)};return a.Model.extend({isConnected:function(){return""!=__currentToken&&null!==__currentSession},connect:function(e,t,n,a,o){var r={error:function(e,t,n){alert("Could not contact server ".concat(__apiURL))},type:"POST"};(0,i.send)("token-auth/",{username:e,password:t},r,function(e){e&&e.token&&(__currentToken=e.token,(0,i.ajaxSetup)(),a(e))},o,!0,!0)},createSession:function(t,n,a){(0,i.send)("security/createSession",{companyId:t},{type:"POST"},function(t){e(t,n)},a)},getUserCompanies:function(e,t,n){(0,i.send)("security/getUserCompanies",{user:e,password:t},null,function(e){n(e)})},getUserCompaniesFromUserId:function(e,t){(0,i.send)("security/GetUserCompaniesFromUserId/?userId=".concat(e),null,null,function(e){t(e)})},logout:function(e){(0,i.send)("security/logout/",null,{dataType:"text"},function(t){void 0!=e&&e(t)})},getAllSessions:function(e){(0,i.send)("security/getAllSessions/",null,null,e,null,!0)},getMySessions:function(e){(0,i.send)("security/getMySessions/",null,null,e,null,!0)},getAllProcess:function(e){(0,i.send)("security/getAllProcess",null,null,e)},createFromToken:function(e,t,n){__currentToken=e,__currentSession={},(0,r.setProcessDictionary)([]),(0,i.ajaxSetup)(),(0,r.setLanguageDictionary)({}),t()},useExternalLink:function(e,t){(0,i.send)("security/useExternalLink/?guid=".concat(e),null,null,function(e,a){200===a.status?(null!==e.session.companySettingFile&&""!==e.session.companySettingFile&&n.e(42).then(function(){var t=[n(713)("./".concat(e.session.companySettingFile))];(function(){Promise.resolve().then(function(){n(221)}).catch(n.oe)}).apply(null,t)}).catch(n.oe),t(e,a)):t(e,a)})},killSessionByKey:function(e,t){(0,i.send)("security/killSessionByKey/",{session_key:e},{type:"GET",dataType:"text"},t)},createNewSession:function(t,n){(0,i.send)("security/createNewSession/",null,null,function(n){e(n,t)})},requireLogoutSessionByToken:function(e,t){(0,i.send)("security/requireLogoutSessionByToken/",{token:e},null,t)},ssoTest:function(){(0,i.send)("security/ssoTest",null,null,function(e){console.log(e)})},ssoCheckUser:function(e,t){(0,i.send)("security/SSOCheckUser/",null,null,e,t)},loginas:function(t,n,a,o,r){var l={error:function(e,t,n){alert("Could not contact server ".concat(__apiURL))}};(0,i.send)("security/loginas",{userId:t,token:n,companyId:a},l,function(t){e(t,o)})},loginFromToken:function(t,n,a){var o={error:function(e,t,n){alert("Could not contact server ".concat(__apiURL))}};(0,i.send)("security/loginFromToken",{token:t},o,function(t){e(t,n)})}})}.apply(t,[]))||(e.exports=o)}).call(this,n(218))},880:function(e,t,n){var a=n(690);e.exports=(a.default||a).template({1:function(e,t,n,a,o){var r,i=null!=t?t:e.nullContext||{},l=n.helperMissing,c=e.escapeExpression;return'    <li>\n        <a data-rel="'+c("function"==typeof(r=null!=(r=n.id||(null!=t?t.id:t))?r:l)?r.call(i,{name:"id",hash:{},data:o}):r)+'" data-key="dashboard-'+c("function"==typeof(r=null!=(r=n.key||(null!=t?t.key:t))?r:l)?r.call(i,{name:"key",hash:{},data:o}):r)+'" title="'+c("function"==typeof(r=null!=(r=n.title||(null!=t?t.title:t))?r:l)?r.call(i,{name:"title",hash:{},data:o}):r)+'" data-toggle="tab" data-opened="false">'+c("function"==typeof(r=null!=(r=n.title||(null!=t?t.title:t))?r:l)?r.call(i,{name:"title",hash:{},data:o}):r)+"</a>\n    </li>\n"},compiler:[7,">= 4.0.0"],main:function(e,t,n,a,o){var r;return null!=(r=n.each.call(null!=t?t:e.nullContext||{},t,{name:"each",hash:{},fn:e.program(1,o,0),inverse:e.noop,data:o}))?r:""},useData:!0})},917:function(e,t,n){"use strict";(function(a){var o,r,i=n(18),l="en";try{"es"!=(l=(l=navigator.language?navigator.language:navigator.userLanguage).substr(0,2).toLowerCase())&&"en"!=l&&(l="en")}catch(e){}o=[n(747),n(706),n(879),n(855),n(983),n(880)],void 0===(r=function(e,t,o,r,l,c){return(0,i.setLanguageDictionary)(new o),e.extend({el:a("#main"),keyView:"",currentDashboardId:-1,currentDashboardName:void 0,dashboardModel:{},dashboardController:{},noQuery:void 0,lastSize:void 0,ownerWidth:void 0,ownerHeight:void 0,editionModeInitiated:!1,editMode:!1,initialSizeTimeOut:-1,dashboardName:"",fromExternal:!1,render:function(e){a(".embedded").length>0&&(a(".embedded").remove(),a('div[data-rel="embeddable"]').remove(),a(".embeddableFooter").remove()),a("body").css("background-color","#fff"),a("#main").css("background-color","#fff"),this._uId=a.uuid(),void 0!==__currentSession.fromEmbedded&&(this.fromEmbedded=__currentSession.fromEmbedded),this.fromEmbedded&&a("body").css("background-color","#368ee0"),this.dashboardModel=new t({dashboardViewList:[],nodeOwner:"",extraOptions:null});var o=l();a("#main").append(o);var r=e.entity_id;"report"===e.entity_type?(this.getNavigator(r),Promise.resolve().then(function(){var t=[n(699)];(function(t){(new t).showEmbeddableDashboard(e.extra_data[0],null,"My title",!1,!1,null)}).apply(null,t)}).catch(n.oe)):Promise.resolve().then(function(){var e=[n(699)];(function(e){(new e).showEmbeddableDashboard(r,null,"My title",!1,!1,null)}).apply(null,e)}).catch(n.oe),setTimeout(function(){a(".resolution-alert").remove()},2e4)},getNavigator:function(e){var t=this;this.dashboardModel.getNavigator({reportId:e},function(e){e&&t.tabsToTitles(e)})},tabsToTitles:function(e){var t=[];if(a.each(e.list,function(e,n){var a=n.id,o=n.id,r=n.name;t.push({id:o,key:a,title:r,closeBtn:!1})}),a(".dashboard-titles").empty(),a(".dashboard-titles").hide(),t.length>0){var n=c(t);a(".dashboard-titles").html(n),a(".dashboard-titles").show()}else a(".dashboard-titles").hide(),a(".dashboard-title").show(),a(".report-navigator").hide();a(".dashboard-titles li:first").each(function(e,t){var n=a(t).find("a").attr("data-rel");a(this).addClass("active"),a(".container-fluid.mainTask[data-rel='"+n+"']").addClass("active")}),this.addTabsHandlers()},addTabsHandlers:function(){a(".dashboard-titles").on("click","li a",function(){a(".dashboard-titles li").removeClass("active");var e=a(this).attr("data-rel"),t=a(this).attr("data-key");"false"===a(this).attr("data-opened")&&(a(".dashboard-titles li a").attr("data-opened",!1),a(this).attr("data-opened",!0),Promise.resolve().then(function(){var t=[n(699)];(function(t){(new t).showEmbeddableDashboard(e,null,"My title",!1,!1,null)}).apply(null,t)}).catch(n.oe)),Promise.resolve().then(function(){var e=[n(684)];(function(e){(new e).selectTask(t)}).apply(null,e)}).catch(n.oe)}),a(".btnNavigatorPrior").click(function(){a("ul.dashboard-titles").animate({scrollLeft:"-=200"},1e3)}),a(".btnNavigatorNext").click(function(){a("ul.dashboard-titles").animate({scrollLeft:"+=200"},1e3)}),a(".dashboard-titles").on("scroll",function(){var e=a(this).scrollLeft();e+a(this).innerWidth()>=this.scrollWidth?a(".btnNavigatorNext").prop("disabled",!0):e<=0?a(".btnNavigatorPrior").prop("disabled",!0):(a(".btnNavigatorPrior").prop("disabled",!1),a(".btnNavigatorNext").prop("disabled",!1))})},onRemoveView:function(){},updateSizes:function(e){},getParent:function(){return a(this.keyView)},addHandlers:function(){}})}.apply(t,o))||(e.exports=r)}).call(this,n(1))},983:function(e,t,n){var a=n(690);e.exports=(a.default||a).template({compiler:[7,">= 4.0.0"],main:function(e,t,a,o,r){return'    <div class="alert alert-success alert-warning resolution-alert">\n        <button type="button" class="close" data-dismiss="alert">x</button>\n        '+e.escapeExpression(function(e){return e&&(e.__esModule?e.default:e)}(n(688)).call(null!=t?t:e.nullContext||{},"resolution_text",{name:"L",hash:{},data:r}))+'\n    </div>\n\n<div class="embedded">\n\n    <ul class="dashboard-title nodisplay">\n        <li class="disabled">\n            <span href="#" ></span>\n        </li>\n    </ul>\n\n    \n    <ul class="dashboard-titles nodisplay">\n    </ul>\n\n    <ul class="pagination pagination-sm report-navigator" style="\n      position: absolute;\n      right: 0;\n      top: 3px;\n      padding: 0;\n      margin: 0;">\n        <li>\n            <button class="btn btn-small btnNavigatorPrior" disabled="disabled"><i class="fa fa-chevron-left"></i></button>\n        </li>\n        <li>\n            <button class="btn btn-small btnNavigatorNext" data-id="861" title="New dashboard"><i class="fa fa-chevron-right"></i></button>\n        </li>\n    </ul>\n\n</div>\n<div data-rel="embeddable" style="background-color: #368ee0;">\n    <div class="loader embeddable">\n        <div class="cubePlanLoaderEmbed">\n            <span>Loading...</span>\n\n            <div class="sk-cube-grid">\n              <div class="sk-cube sk-cube1"></div>\n              <div class="sk-cube sk-cube2"></div>\n              <div class="sk-cube sk-cube3"></div>\n              <div class="sk-cube sk-cube4"></div>\n              <div class="sk-cube sk-cube5"></div>\n              <div class="sk-cube sk-cube6"></div>\n              <div class="sk-cube sk-cube7"></div>\n              <div class="sk-cube sk-cube8"></div>\n              <div class="sk-cube sk-cube9"></div>\n            </div>\n        </div>\n\n    </div>\n        \n</div>\n<div class="embeddableFooter">\n  <a href="http://pyplan.com" target="_blank"> <img src="img/abbb5d72614615ac35f33bfab14b6444-powered-by-small.png"></a>\n</div>\n'},useData:!0})}}]);