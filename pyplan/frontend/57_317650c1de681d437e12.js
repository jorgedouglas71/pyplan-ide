/*! Copyright Novix S.A. 2019. All rights reserved. */
(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{686:function(e,t,r){"use strict";(function(n,o){var a,s=r(18);!function(e){e&&e.__esModule}(r(974));void 0===(a=function(){return n.Controller.extend({name:"NodeJs",socket:void 0,start:function(){},triggerEvent:function(e,t){var r={event:e,body:t};this.socket&&this.socket.connected&&this.socket.emit("sendMessage",__currentToken,r)},changeToken:function(e){this.socket&&this.socket.connected&&this.socket.emit("changeToken",e)},processMessage:function(e){if(e)switch(e.event){case"FPCaseAfterSave":o("#projectMapSidebar").trigger("refreshProject",[e.body]);break;case"DashboardShareAfterSave":o("#model-summary").trigger("reloadShared",[e.body]);break;case"UpdateCreateScenarioProgress":o("#scenarioManager,#dataSnapshot").trigger("updateProgress",[e.body]);break;case"RefreshImageDashboard":o("#summary").trigger("refreshImageDashboard",[e.body]),o("#report-manager").trigger("refreshImageDashboard",[e.body]),o("#main .mainTask[data-rel='dashboard-"+e.body+"']").trigger("refreshImageDashboard",[e.body]);break;case"AfterCreateDashboardComment":o(".dashboard-comments").trigger("refreshExternalComments",[e.body]);break;case"NeedLogout":o("body").trigger("needLogout");break;case"SessionKilled":o("body").trigger("sessionKilled");break;case"MemoryQuotaExceeded":o("body").trigger("memoryQuotaExceeded",[e.body]);break;case"ProcessCancelByMemoryQuotaExceeded":var t=(0,s.translate)("process_cancel_by_quota").replace("##quota##",e.body.memoryQuota).replace("##current##",e.body.modelMemory);(0,s.showMessage)(t,void 0,"error");break;case"modelprogressbar":Promise.all([r.e(2),r.e(6),r.e(59)]).then(function(){var t=[r(700)];(function(t){(new t).showProgressBar(e.body)}).apply(null,t)}).catch(r.oe);break;case"modelmsgbox":Promise.all([r.e(2),r.e(6),r.e(59)]).then(function(){var t=[r(700)];(function(t){(new t).showMsgBox(e.body)}).apply(null,t)}).catch(r.oe);break;case"GenericMessage":var n=e.body.title;t=e.body.text;(0,s.showMessage)(t,n);break;case"notify":Promise.all([r.e(2),r.e(106)]).then(function(){var t=[r(882)];(function(t){(new t).notify(e.body)}).apply(null,t)}).catch(r.oe);break;case"ReloadAllOpenDashboards":Promise.all([r.e(2),r.e(6),r.e(28)]).then(function(){var e=[r(699)];(function(e){(new e).refreshAllOpenDashboards()}).apply(null,e)}).catch(r.oe);break;case"UpdatePrintReportProgress":Promise.all([r.e(2),r.e(6),r.e(28)]).then(function(){var t=[r(699)];(function(t){(new t).updatePrintReportProgress(e.body)}).apply(null,t)}).catch(r.oe);break;case"UpdatePrintReportMessage":Promise.all([r.e(2),r.e(6),r.e(28)]).then(function(){var t=[r(699)];(function(t){(new t).updatePrintReportMessage(e.body)}).apply(null,t)}).catch(r.oe);break;case"UpdatePrintReportComplete":Promise.all([r.e(2),r.e(6),r.e(28)]).then(function(){var t=[r(699)];(function(t){(new t).updatePrintReportComplete(e.body)}).apply(null,t)}).catch(r.oe);break;case"ExecuteButtonComplete":o("#genericLoading").hide(),e&&e.body&&e.body.error&&(0,s.showMessage)(e.body.result,void 0,"error");break;case"loadInputTemplate":case"unloadInputTemplate":case"setInputTemplatePos":case"setInputTemplateValues":o(".inputFormTask").trigger("collabMessage",[e.event,e.body]);break;case"ModelEditionAvailable":e&&e.body&&e.body.message&&((0,s.showMessage)(e.body.message,void 0,"info"),__currentSession.modelInfo&&__currentSession.modelInfo.uri==e.body.modelfile&&r.e(37).then(function(){var e=[r(219)];(function(e){(new e).canEdit()&&(o("#navigation li.modelopened[data-key='btnSaveModel']").show(),o("#navigation li.modelopened[data-key='btnSaveModelAs']").show())}).apply(null,e)}).catch(r.oe))}}})}.apply(t,[]))||(e.exports=a)}).call(this,r(694),r(1))},694:function(e,t,r){var n,o;!function(a,s){if(!a.BackboneMVC){var i=a.BackboneMVC={};n=[r(218),r(220),r(1)],void 0===(o=function(e,t,r){return function(e,t,r,n,o){"use strict";if(void 0===r||void 0===n)return;var a=function(){function e(){this._created=(new Date).getTime()}return n.extend(e.prototype,{_created:null}),e.extend=function(t){var r,o=function(){return void 0!==r?r:(e.apply(this,arguments),void 0!==this.initialize&&this.initialize.apply(this,arguments),r=this)};return o.prototype=new e,n.extend(o.prototype,t),o.prototype.constructor=o,o.prototype.classId=n.uniqueId("controller_"),o},e}();n.extend(t,{namespace:function(t){for(var r=t.split("."),n=e,o=0,a=r.length;o<a;o++)void 0===n[r[o]]&&(n[r[o]]={}),n=n[r[o]]},Controller:{beforeFilter:function(){return(new o.Deferred).resolve()},afterRender:function(){return(new o.Deferred).resolve()},checkSession:function(){return(new o.Deferred).resolve(!0)},default:function(){return!0}},Router:function(){var e={_history:[],routes:{"*components":"dispatch"},dispatch:function(e){var t,r=(e||"").replace(/\/+$/g,"").split("/");if(s[r[0]]?t=r[0]:void 0!==s[u(r[0])]?t=u(r[0]):void 0!==s[d(r[0])]&&(t=d(r[0])),void 0===t)return this[404]();var a=new s[t],i=r.length>1?r[1]:"default";if("function"!=typeof a._actions[i])return this[404]();var p=r.length>2?n.rest(r,2):[];return function(e,t,r,o){e._history.length>888&&(e._history=n.last(e._history,888));e._history.push([t,r,o])}(this,t,i,p),function(e,t,r){var n=new s[e],a=[t].concat(r),i=o.Deferred(),u=n.beforeFilter.apply(n,a);c(u)?i=u:l(i,u);"function"==typeof n._secureActions[t]&&(i=i.pipe(function(){var e=n.checkSession.apply(n,r);return c(e)?e:l(new o.Deferred,e)}));return i=(i=i.pipe(function(){var e=n[t].apply(n,r);return c(e)?e:l(new o.Deferred,e)})).pipe(function(){var e=n.afterRender.apply(n,a);return c(e)?e:l(new o.Deferred,e)})}(t,i,p)},404:function(){},getLastAction:function(){return n.last(this._history,1)[0]},navigate:function(e,t){t&&!0!==t||(t={trigger:t});var a=n.extend({},t);return a.trigger=!1,r.Router.prototype.navigate.call(this,e,a),t.trigger?this.dispatch(e):(new o.Deferred).resolve()}};function t(t){var o=n.extend(t.routes||{},e.routes);return r.Router.extend(n.extend({},e,t,{routes:o}))}var a=r.Router.extend(n.extend({extend:t},e));return a.extend=t,a}(),Model:{extend:function(e){return e=n.extend({__fetchSuccessCallback:null,__fetchErrorCallback:null,fetch:function(e){var t=(e=e||{}).success;e.success=function(e,r){if(t&&t(e,r),e.__fetchSuccessCallback){var n=e.__fetchSuccessCallback;e.__fetchSuccessCallback=null,n.apply(e)}};var o=e.error;e.error=function(e,t){o&&o(e,t),e.trigger("error",o)},r.Model.prototype.fetch.apply(this,[e].concat(n.rest(arguments)))},parse:function(e){return this.__fetchSuccessCallback=null,this.__fetchErrorCallback=null,!e||e.error?(this.trigger("error",e&&e.error||e),{}):(this.__fetchSuccessCallback=function(){this.trigger("read",e.data)}.bind(this),e.data)}},e),r.Model.extend(e)}}}),t.Controller.extend=function e(r,o){return function(r){var c=r.name;if(void 0===c)throw"'name' property is mandatory ";r=n.extend({},o,r);var l=n.extend({},t.Controller),u={},d={};n.each(r,function(e,t){if(l[t]=e,"function"!=typeof e||"_"===t[0]||n.indexOf(i,t)>=0)return!1;if(u[t]=e,t.match(/^user_/i)){d[t]=e;var o=t.replace(/^user_/i,"");"function"!=typeof r[o]&&(d[o]=e,u[o]=e)}}),n.extend(l,u,{_actions:u,_secureActions:d}),"extend"in l&&delete l.extend;var p=a.extend(l);return n.extend(p,{extend:e(p,n.extend({},o,r))}),s[c]=p,p}}(t.Controller,{});var s={},i=["initialize","beforeFilter","afterRender","checkSession"];function c(e){return n.isObject(e)&&e.promise&&"function"==typeof e.promise}function l(e,t){return void 0===t&&(t=!0),e[t?"resolve":"reject"](t)}function u(e){return"string"!=typeof e?null:(e=e.replace(/\s{2,}/g," "),n.map(e.split(" "),function(e){return e.replace(/(^|_)[a-z]/gi,function(e){return e.toUpperCase()}).replace(/_/g,"")}).join(" "))}function d(e){return"string"!=typeof e?null:(e=e.replace(/\s{2,}/g," "),n.map(e.split(" "),function(e){return e.replace(/^[A-Z]/g,function(e){return e.toLowerCase()}).replace(/([a-z])([A-Z])/g,function(e,t,r){return t+"_"+r.toLowerCase()})}).join(" "))}}(a,i,e,t,r),i}.apply(t,n))||(e.exports=o)}}(this)}}]);