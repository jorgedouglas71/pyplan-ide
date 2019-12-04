/*! Copyright Novix S.A. 2019. All rights reserved. */
(window.webpackJsonp=window.webpackJsonp||[]).push([[28,16,27,37,80,102,273,280],{219:function(e,n,t){"use strict";(function(o,a){var r,i=t(18),s=t(693);void 0===(r=function(){var e=function(e,n,t,a){if(__currentSession.modelInfo=e,o("#licenceExpiration").hide(),__currentSession.modelInfo.daysToExpire)try{var r=parseInt(__currentSession.modelInfo.daysToExpire)-1;r>=0&&r<15&&(r>=0?o("#licenceExpiration span").html((0,i.translate)("days_to_expire").replace("#days#",r)):o("#licenceExpiration span").html((0,i.translate)("license_expired")),o("#licenceExpiration").show(),setTimeout(function(){o("#licenceExpiration").hide()},15e3))}catch(e){}if(""!=e.new_session_key&&(__currentSession.session_key=e.new_session_key,(0,s.ajaxSetup)()),n(e),o(".wikiLink").attr("href","http://docs.pyplan.com"),t||o("#summary").trigger("refresh"),o("#navigation .modelopened").show(),o("#left .navigation .modelopened").show(),o("#currentModel").html(e.uri.substring(e.uri.lastIndexOf("/")+1,e.uri.lastIndexOf("."))),e.useSnapshot){var c=(0,i.translate)("use_snapshot");o("#navigation .snapshotactive").show().attr("title",c).attr("data-snapdate",e.snapshotDate)}a.canEdit()?(o("#navigation li.modelopened[data-key='btnSaveModel']").show(),o("#navigation li.modelopened[data-key='btnSaveModelAs']").show(),__currentSession.modelInfo&&__currentSession.modelInfo.readonly&&(o("#navigation li.modelopened[data-key='btnSaveModel']").hide(),(0,i.showMessage)(__currentSession.modelInfo.readOnlyReason,"","info",!1))):(o("#navigation li.modelopened[data-key='btnSaveModel']").hide(),o("#navigation li.modelopened[data-key='btnSaveModelAs']").hide())};return a.Model.extend({openModel:function(n,t,a,r){o("#navigation .snapshotactive").hide();var i=this;(0,s.send)("modelManager/openModel/",{file:n},null,function(n){n&&e(n,t,a,i)},r)},createNewModel:function(n,t,a,r){o("#navigation .snapshotactive").hide();var i=this;(0,s.send)("modelManager/createNewModel/",{modelName:n},null,function(n){n&&e(n,t,a,i)},r)},closeModel:function(e){(0,s.send)("modelManager/closeModel/",null,null,function(){Promise.all([t.e(2),t.e(6),t.e(62)]).then(function(){var n=[t(684)];(function(n){(new n).clearUI(),e()}).apply(null,n)}).catch(t.oe)})},saveModel:function(e){(0,s.send)("modelManager/saveModel/",null,{dataType:"text"},function(){e()})},saveModelAs:function(e,n){(0,s.send)("modelManager/saveModelAs/",{name:e},{type:"GET"},function(e){n(e)})},getModelInfo:function(e){(0,s.send)("modelManager/getModelInfo/",null,null,e)},isInPublic:function(){return!!(__currentSession.modelInfo.uri&&__currentSession.modelInfo.uri.toLowerCase().indexOf("/public/")>=0)},canEdit:function(){var e=!1,n=this.isInPublic();return((0,i.haveAccess)("change_model")&&!n||(0,i.haveAccess)("change_public_model")&&n)&&(e=!0),e},setModelPreferences:function(e,n,t,a){(0,s.send)("modelManager/setModelPreferences/",JSON.stringify(e),{type:"POST",contentType:"application/json;charset=utf-8",dataType:"text"},function(e){void 0!=n&&n(e),o("body").trigger("pendingChanges",[!0])},function(e){t(e)},!1,a)},getModelPreferences:function(e,n,t){(0,s.send)("modelManager/getModelPreferences/",null,{type:"GET"},e,n,!0,t)},setNodeProperties:function(e,n,t,a,r,i){void 0===i&&(i=!0),(0,s.send)("modelManager/setNodeProperties/",JSON.stringify({node:e,properties:n}),{type:"POST",contentType:"application/json;charset=utf-8",dataType:"text"},function(e){void 0!=t&&t(e),o("body").trigger("pendingChanges",[i])},function(e){a(e)},!1,r)},setNodesProperties:function(e,n){(0,s.send)("modelManager/setNodesProperties/",JSON.stringify(e),{type:"POST",contentType:"application/json;charset=utf-8",dataType:"text"},function(e){n(e),o("body").trigger("pendingChanges",[!0])})},setNodeIdFromTitle:function(e,n){(0,s.send)("modelManager/setNodeIdFromTitle/",{value:e},{type:"POST"},function(e){n(e),o("body").trigger("pendingChanges",[!0])})},getNodeProperties:function(e,n,t,o,a,r){(0,s.send)("modelManager/getNodeProperties/",JSON.stringify({node:e,properties:n,forceThisNode:r}),{type:"POST",contentType:"application/json;charset=utf-8"},t,o,!0,a)},getInputs:function(e,n){(0,s.send)("modelManager/getNodeInputs/?node="+e,null,{type:"GET"},n)},getOutputs:function(e,n){(0,s.send)("modelManager/getNodeOutputs/?node="+e,null,{type:"GET"},n)},executeForRefresh:function(e){(0,s.send)("modelManager/executeForRefresh/",null,{type:"POST",dataType:"text"},function(n){void 0!=e&&e(n)})},createNode:function(e,n,t){(0,s.send)("modelManager/createNode/",e,{type:"POST"},function(e){o("body").trigger("pendingChanges",[!0]),void 0!=n&&n(e)},t)},createAlias:function(e,n,t){(0,s.send)("modelManager/createAlias/",JSON.stringify({values:e}),{type:"POST",contentType:"application/json;charset=utf-8",dataType:"text"},function(e){o("body").trigger("pendingChanges",[!0]),void 0!=n&&n(e)},t)},createInputNode:function(e,n,t){(0,s.send)("modelManager/createInputNode/",JSON.stringify({values:e}),{type:"POST",contentType:"application/json;charset=utf-8",dataType:"text"},function(e){o("body").trigger("pendingChanges",[!0]),void 0!=n&&n(e)},t)},deleteNodes:function(e,n,t){(0,s.send)("modelManager/deleteNodes/",JSON.stringify({values:e}),{type:"DELETE",contentType:"application/json;charset=utf-8",dataType:"text"},function(e){o("body").trigger("pendingChanges",[!0]),void 0!=n&&n(e)},t)},searchNode:function(e,n,t){var o=e.text,a=void 0===o?"":o,r=e.extraClasses,i=void 0===r?[]:r,c=e.moduleId,l=e.nodeClass,u=e.fillDetail;(0,s.send)("modelManager/searchNodes/?text=".concat(a).concat(c?"&moduleId=".concat(c):"").concat(l?"&nodeClass=".concat(l):"").concat(u?"&fillDetail=".concat(u):""),JSON.stringify({extraClasses:i}),{type:"POST",contentType:"application/json;charset=utf-8"},n,t)},SearchForAutocomplete:function(e,n,t){(0,s.send)("modelManager/searchForAutocomplete/",{text:e},{type:"GET",dataType:"text"},n,t)},navigateDiagram:function(e,n,t){(0,s.send)("modelManager/navigateDiagram/",{moduleId:e,includeArrows:!1},null,n,t)},getArrows:function(e,n,t){(0,s.send)("modelManager/getArrows/",{moduleId:e},null,n,t)},executeButton:function(e,n,t){(0,s.send)("modelManager/executeButton/",JSON.stringify({nodeId:e}),{type:"POST",contentType:"application/json;charset=utf-8",dataType:"text"},n,t)},evaluateNode:function(e,n,t){(0,s.send)("dashboardManager/getOrCreate/",{node:e},void 0,n,t)},isInBackground:function(e,n,t){(0,s.send)("modelManager/isInBackground/",{nodeId:e},{type:"GET",contentType:"application/json;charset=utf-8",dataType:"text"},n,t,!0)},abortProcess:function(e,n){(0,s.send)("modelManager/abortProcess/",null,{type:"GET"},e,n)},getIndexValues:function(e,n){(0,s.send)("dashboardManager/getIndexValues/",e,null,function(e){e&&n(e)})},getNodeIndexes:function(e,n){(0,s.send)("dashboardManager/getNodeIndexes/",{node:e},null,function(e){e&&n(e)})},getSelector:function(e,n){(0,s.send)("modelManager/getSelector/",{node:e},{type:"POST"},n)},exportFlatNode:function(e,n,o,a,r,i){var s={nodeId:e,fileFormat:n,numberFormat:o,columnFormat:a,compressed:r},c=new XMLHttpRequest;c.responseType="arraybuffer",c.open("POST","".concat(__apiURL,"/modelManager/exportFlatNode/")),c.setRequestHeader("Authorization","Token ".concat(__currentToken)),c.setRequestHeader("session-key",__currentSession?__currentSession.session_key:""),c.setRequestHeader("Content-type","application/json;charset=utf-8"),c.onreadystatechange=function(e){var n=e.currentTarget;n.readyState==n.DONE&&(200==n.status?i(n):Promise.all([t.e(2),t.e(18)]).then(function(){var e=[t(685)];(function(e){(new e).show({title:"ERROR!",text:n.response,notifyType:"error"})}).apply(null,e)}).catch(t.oe))},c.send(JSON.stringify(s))},exportCurrentNode:function(e,n,o,a,r,i,s){var c={nodeId:e,fileFormat:n,numberFormat:o,columnFormat:a,compressed:r,nodeQuery:i},l=new XMLHttpRequest;l.responseType="arraybuffer",l.open("POST","".concat(__apiURL,"/modelManager/exportCurrentNode/")),l.setRequestHeader("Authorization","Token ".concat(__currentToken)),l.setRequestHeader("session-key",__currentSession?__currentSession.session_key:""),l.setRequestHeader("Content-type","application/json;charset=utf-8"),l.onreadystatechange=function(e){var n=e.currentTarget;n.readyState==n.DONE&&(200==n.status?s(n):Promise.all([t.e(2),t.e(18)]).then(function(){var e=[t(685)];(function(e){(new e).show({title:"ERROR!",text:n.response,notifyType:"error"})}).apply(null,e)}).catch(t.oe))},l.send(JSON.stringify(c))},getDepartments:function(e){(0,s.send)("departments/by_current_company/",null,{type:"GET"},e)},getDeniedDepartments:function(e,n){(0,s.send)("departments/denied/?module=".concat(e),null,{type:"GET"},n)},setDeniedModule:function(e,n){(0,s.send)("departments/deny_items/",JSON.stringify(e),{type:"POST",contentType:"application/json;charset=utf-8"},n)},openParallelModel:function(e,n){(0,s.send)("ModelManager/openParallelModel/?file="+e,null,{type:"GET"},n)},closeParallelModel:function(e,n){(0,s.send)("ModelManager/closeParallelModel/?parallelToken="+e,null,{type:"GET"},n)},moveNodes:function(e,n,t){(0,s.send)("modelManager/moveNodes/",JSON.stringify({values:e}),{type:"POST",contentType:"application/json;charset=utf-8",dataType:"text"},function(e){o("body").trigger("pendingChanges",[!0]),void 0!=n&&n(e)},t)},copyNodes:function(e,n,t){(0,s.send)("modelManager/copyNodes/",JSON.stringify({values:e}),{type:"POST",contentType:"application/json;charset=utf-8",dataType:"text"},function(e){o("body").trigger("pendingChanges",[!0]),void 0!=n&&n(e)},t)},copyAsValues:function(e,n,t,a){(0,s.send)("modelManager/copyAsValues/",JSON.stringify({nodeId:e,asNewNode:n}),{type:"POST",contentType:"application/json;charset=utf-8",dataType:"text"},function(e){o("body").trigger("pendingChanges",[!0]),void 0!=t&&t(e)},a)},setNodePosition:function(e,n,t){(0,s.send)("modelManager/setNodesPosition/",JSON.stringify({values:e}),{type:"POST",contentType:"application/json;charset=utf-8",dataType:"text"},function(e){o("body").trigger("pendingChanges",[!0]),void 0!=n&&n(e)},t)},setNodeSize:function(e,n,t){(0,s.send)("modelManager/setNodesSize/",JSON.stringify({values:e}),{type:"POST",contentType:"application/json;charset=utf-8",dataType:"text"},function(e){o("body").trigger("pendingChanges",[!0]),void 0!=n&&n(e)},t)},setNodeZ:function(e,n,t){(0,s.send)("modelManager/setNodeZ/",JSON.stringify({values:e}),{type:"POST",contentType:"application/json;charset=utf-8",dataType:"text"},function(e){o("body").trigger("pendingChanges",[!0]),void 0!=n&&n(e)},t)},changeSession:function(n,o){var a=this;(0,s.send)("modelManager/changeToOtherModelSession/",{new_session_key:n},null,function(n){Promise.all([t.e(2),t.e(6),t.e(62)]).then(function(){var r=[t(684)];(function(t){(new t).clearUI(),e(n,o,!0,a)}).apply(null,r)}).catch(t.oe)})},getSharedNode:function(e,n){(0,s.send)("result/by_node_id/".concat(e,"/"),null,{type:"GET"},function(e){e&&n(e)},function(e,t){e&&n&&n(e)})},setSharedNode:function(e,n){(0,s.send)("result/".concat(e.id,"/"),JSON.stringify(e),{type:"PATCH",contentType:"application/json;charset=utf-8"},function(e){e&&n&&n(e)})},exportModuleToFile:function(e,n,t,o){var a={moduleId:e,exportType:n},r=new XMLHttpRequest;r.responseType="arraybuffer",r.open("POST","".concat(__apiURL,"/modelManager/exportModuleToFile/")),r.setRequestHeader("Authorization","Token ".concat(__currentToken)),r.setRequestHeader("session-key",__currentSession?__currentSession.session_key:""),r.setRequestHeader("Content-type","application/json;charset=utf-8"),r.onreadystatechange=function(e){var n=e.currentTarget;n.readyState==n.DONE&&(200==n.status?t(n):o(n.response))},r.send(JSON.stringify(a))},importModuleFromFile:function(e,n,t){(0,s.send)("modelManager/importModuleFromFile/",JSON.stringify(e),{type:"POST",contentType:"application/json;charset=utf-8",dataType:"text"},function(e){o("body").trigger("pendingChanges",[!0]),void 0!=n&&n(e)},t)},getProfile:function(e,n,t,o){(0,s.send)("modelManager/getNodeProfile/",{nodeId:e},{type:"GET"},n,t,!0,o)},previewNode:function(e,n,t){var o={node:e};(0,s.send)("modelManager/previewNode/",o,{type:"POST"},n,t)},stopProcess:function(e,n){(0,s.send)("modelManager/stop/",null,{type:"POST",contentType:"application/json;charset=utf-8",dataType:"text"},e,n,!1,!1)},listShortcuts:function(e){(0,s.send)("diagramShortcut/",null,{type:"GET"},e)},createShortcut:function(e,n){(0,s.send)("diagramShortcut/?node_id=".concat(e),null,{type:"POST"},function(e){void 0!=n&&n(e)})},deleteShortcut:function(e,n){(0,s.send)("diagramShortcut/".concat(e,"/"),null,{type:"DELETE"},function(e){void 0!=n&&n(e)})},getToolbars:function(e){(0,s.send)("modelManager/getToolbars/",null,{type:"GET"},e)},callWizard:function(e,n,t){(0,s.send)("modelManager/callWizard/",JSON.stringify(e),{type:"POST",contentType:"application/json;charset=utf-8",dataType:"text"},n,t)},getFilesForImportWizard:function(e,n){(0,s.send)("modelManager/getFilesForImportWizard/",{extension:e},{type:"GET",contentType:"application/json;charset=utf-8",dataType:"text"},n)},installLibrary:function(e,n){(0,s.send)("modelManager/installLibrary/",JSON.stringify({lib:e}),{type:"POST",contentType:"application/json;charset=utf-8",dataType:"text"},n)},getInstallProgress:function(e,n,t){(0,s.send)("modelManager/getInstallProgress/",{from_line:e},{type:"GET",contentType:"application/json;charset=utf-8",dataType:"text"},n,t,!0,!0)}})}.apply(n,[]))||(e.exports=r)}).call(this,t(1),t(218))},688:function(e,n,t){"use strict";var o=t(18);e.exports=function(e){return(0,o.translate)(e)}},693:function(e,n,t){"use strict";t.r(n),function(e){t.d(n,"ajaxSetup",function(){return a}),t.d(n,"send",function(){return r});var o=t(18);function a(n=null){e.ajaxSetup({...{dataType:"json",crossDomain:!0,headers:{Authorization:`Token ${__currentToken}`,"session-key":__currentSession?__currentSession.session_key:""}},...()=>n||{}})}function r(n,a,r,i,s,c,l){r||(r=new Object),c||e("#secondLoading").show(),r.hasOwnProperty("success")||(r.success=function(n,o,a){if("object"!=typeof n&&null!=n&&""!=n)try{n=e.parseJSON(n)}catch(e){}c||(e("#mainLoading").hide(),e("#secondLoading").hide());var r=function(e,n,o,a,r){e&&e.hasOwnProperty("hasError")?(o||Promise.all([t.e(2),t.e(18)]).then(function(){var n=[t(685)];(function(n){(new n).show({title:"WARNING!",text:e.error,notifyType:"error"})}).apply(null,n)}).catch(t.oe),void 0!=r&&r(e.error)):void 0!=a&&a(e,n)};n&&n.hasOwnProperty("isCompressed")&&n.hasOwnProperty("obj")?t.e(105).then(function(){var o=[t(856)];(function(t){n=e.parseJSON(t.inflate(atob(n.obj),{to:"string"})),r(n,a,l,i,s)}).apply(null,o)}).catch(t.oe):r(n,a,l,i,s)}),r.hasOwnProperty("type")||(r.type="GET"),a&&(r.data=a),r.error=function(a,i,u){if(c||(e("#mainLoading").hide(),e("#secondLoading").hide()),a){let e="";const i=`[${r.type}] ${n}`;if(a.responseJSON)for(const n in a.responseJSON)e+="non_field_errors"==n?`${a.responseJSON[n]}\n`:`[${n}]: ${a.responseJSON[n]}\n`;else e=`${a.responseText}\n`;let c="info",u=void 0,d=void 0,p="WARNING!";const f=[];switch(a.status){case 401:c="info",d=15e3,u=(()=>{location.reload()}),f.push({css:"warning",code:"401",title:Object(o.translate)("relog")});break;case 403:c="info",d=1e4,p=Object(o.translate)("access_denied")}void 0!=l&&0!=l||Promise.all([t.e(2),t.e(18)]).then(function(){var n=[t(685)];(function(n){(new n).show({title:p,text:e,endpoint:i,notifyType:c,timeOut:d,buttons:f,callback:u})}).apply(null,n)}).catch(t.oe),void 0!=s&&s(e,a)}},e.ajax({url:`${__apiURL}/${n}`,contentType:r.contentType,data:a,dataType:r.dataType?r.dataType:"json",method:r.type,success:r.success,error:r.error})}}.call(this,t(1))},699:function(e,n,t){"use strict";(function(o,a){var r,i;r=[t(684),t(706)],void 0===(i=function(e,n){return o.Controller.extend({name:"dashboardManager",showDashboard:function(n,o,r,i,s,c){var l="dashboard-"+n,u=new e;u.existsTask(l)?(u.selectTask(l),i&&a(".mainTask[data-rel='"+l+"']").length>0&&a(".mainTask[data-rel='"+l+"']").trigger("refreshView")):(u.addSimpleTask(l,r),t.e(19).then(function(){var e=[t(747)];(function(e){(new e).render(n,o,s,c),u.selectTask(l)}).apply(null,e)}).catch(t.oe))},showEmbeddableDashboard:function(n,o,r,i,s,c){var l="dashboard-"+n,u=new e;__currentSession.fromEmbedded&&u.removeAllTask(),u.existsTask(l)?(u.selectTask(l),i&&a(".mainTask[data-rel='"+l+"']").length>0&&a(".mainTask[data-rel='"+l+"']").trigger("refreshView")):(u.addSimpleTask(l,r),Promise.all([t.e(19),t.e(124)]).then(function(){var e=[t(801)];(function(e){(new e).render(n,o,s,c),u.selectTask(l)}).apply(null,e)}).catch(t.oe))},removeDashboardTaskFromHome:function(n){var t="dashboard-"+n,o=new e;o.existsTask(t)&&o.removeTask(t)},drawDashboardBars:function(e,n){this.drawToolbar(e,function(){n()})},drawBottombar:function(e,n){t.e(125).then(function(){var o=[t(802)];(function(t){var o=new t;o.setElement(e),o.render(),void 0!=n&&n()}).apply(null,o)}).catch(t.oe)},drawToolbar:function(e,n){t.e(44).then(function(){var o=[t(754)];(function(t){(new t).show({el:e,positions:["left","right"],onLoad:n,className:"dockDashboardProperty"})}).apply(null,o)}).catch(t.oe)},drawMoreDashboard:function(e,n){t.e(126).then(function(){var e=[t(803)];(function(e){var t=new e;t.setElement("body"),t.render(n)}).apply(null,e)}).catch(t.oe)},getDefaultContent:function(e,n){Promise.all([t.e(1),t.e(8),t.e(63)]).then(function(){var o=[t(727)];(function(t){var o=new t({model:e});n(o)}).apply(null,o)}).catch(t.oe)},getEmptyContent:function(e,n){Promise.all([t.e(1),t.e(64)]).then(function(){var o=[t(739)];(function(t){var o=new t({model:e});n(o)}).apply(null,o)}).catch(t.oe)},getChartToolbar:function(e,n,o,a){var r;switch(e){case"linechart":r="line/lineToolbar";break;case"columnchart":case"columnchartstacked":case"columnchartpercent":case"barchart":case"barchartstacked":case"barchartpercent":r="columnAndBar/columnAndBarToolbar";break;case"areachart":case"areachartstacked":case"areachartpercent":r="area/areaToolbar";break;case"piechart":r="pie/pieToolbar";break;case"funnelchart":r="funnelToolbar/funnelToolbar";break;case"pyramidchart":r="pyramidToolbar/pyramidToolbar";break;case"gaugechart":r="gauge/gaugeToolbar";break;case"waterfallchart":r="waterfall/waterfallToolbar";break;case"scatterchart":r="scatter/scatterToolbar";break;case"table":r="table/tableToolbar";break;case"indexlist":r="index/indexToolbar";break;case"map":r="map/mapToolbar";break;case"indicator":r="indicator/indicatorToolbar";break;case"selector":r="selector/selectorToolbar";break;case"formnode":r="formnode/formnodeToolbar";break;case"nodetable":r="nodeTable/nodetableToolbar";break;case"button":r="button/buttonToolbar";break;case"analyticachart":r="analyticaChart/analyticaChartToolbar";break;case"objectItem":switch(n){case"texteditor":r="texteditor/texteditorToolbar";break;case"cubeviewer":r="cubeviewer/cubeviewerToolbar";break;case"diagramviewer":r="diagramViewer/diagramViewerToolbar";break;case"mapviewer":r="mapViewer/mapViewerToolbar";break;case"menuwidget":r="menuWidget/menuWidgetToolbar";break;case"dashboardcontainer_QUITAR_ESTO_PARA_MOSTRAR":r="dashboardContainer/dashboardContainerToolbar"}break;case"complexchart":r="complexchart/complexChartToolbar";break;default:r=!1}r?Promise.all([t.e(25),t.e(56),t.e(127)]).then(function(){var e=[t(804)("./"+r)];(function(e){var n=new e({model:o});a(n)}).apply(null,e)}).catch(t.oe):Promise.all([t.e(25),t.e(56),t.e(128)]).then(function(){var e=[t(805)];(function(e){var n=new e({model:o});a(n)}).apply(null,e)}).catch(t.oe)},getChartItemViewFromType:function(e,n){switch(e){case"empty":Promise.all([t.e(1),t.e(64)]).then(function(){var e=[t(739)];(function(e){n(e)}).apply(null,e)}).catch(t.oe);break;case"linechart":Promise.all([t.e(1),t.e(8),t.e(129)]).then(function(){var e=[t(806)];(function(e){n(e)}).apply(null,e)}).catch(t.oe);break;case"columnchart":Promise.all([t.e(1),t.e(8),t.e(63)]).then(function(){var e=[t(727)];(function(e){n(e)}).apply(null,e)}).catch(t.oe);break;case"columnchartstacked":Promise.all([t.e(1),t.e(8),t.e(130)]).then(function(){var e=[t(807)];(function(e){n(e)}).apply(null,e)}).catch(t.oe);break;case"columnchartpercent":Promise.all([t.e(1),t.e(8),t.e(131)]).then(function(){var e=[t(808)];(function(e){n(e)}).apply(null,e)}).catch(t.oe);break;case"barchart":Promise.all([t.e(1),t.e(8),t.e(132)]).then(function(){var e=[t(756)];(function(e){n(e)}).apply(null,e)}).catch(t.oe);break;case"barchartstacked":Promise.all([t.e(1),t.e(8),t.e(133)]).then(function(){var e=[t(809)];(function(e){n(e)}).apply(null,e)}).catch(t.oe);break;case"barchartpercent":Promise.all([t.e(1),t.e(8),t.e(134)]).then(function(){var e=[t(810)];(function(e){n(e)}).apply(null,e)}).catch(t.oe);break;case"areachart":Promise.all([t.e(1),t.e(8),t.e(135)]).then(function(){var e=[t(757)];(function(e){n(e)}).apply(null,e)}).catch(t.oe);break;case"areachartstacked":Promise.all([t.e(1),t.e(8),t.e(136)]).then(function(){var e=[t(811)];(function(e){n(e)}).apply(null,e)}).catch(t.oe);break;case"areachartpercent":Promise.all([t.e(1),t.e(8),t.e(137)]).then(function(){var e=[t(812)];(function(e){n(e)}).apply(null,e)}).catch(t.oe);break;case"piechart":Promise.all([t.e(1),t.e(8),t.e(138)]).then(function(){var e=[t(813)];(function(e){n(e)}).apply(null,e)}).catch(t.oe);break;case"gaugechart":Promise.all([t.e(1),t.e(8),t.e(139)]).then(function(){var e=[t(814)];(function(e){n(e)}).apply(null,e)}).catch(t.oe);break;case"waterfallchart":Promise.all([t.e(1),t.e(8),t.e(140)]).then(function(){var e=[t(815)];(function(e){n(e)}).apply(null,e)}).catch(t.oe);break;case"scatterchart":Promise.all([t.e(1),t.e(8),t.e(141)]).then(function(){var e=[t(816)];(function(e){n(e)}).apply(null,e)}).catch(t.oe);break;case"complexchart":Promise.all([t.e(1),t.e(8),t.e(142)]).then(function(){var e=[t(817)];(function(e){n(e)}).apply(null,e)}).catch(t.oe);break;case"table":Promise.all([t.e(1),t.e(11),t.e(143)]).then(function(){var e=[t(818)];(function(e){n(e)}).apply(null,e)}).catch(t.oe);break;case"indexlist":Promise.all([t.e(1),t.e(144)]).then(function(){var e=[t(819)];(function(e){n(e)}).apply(null,e)}).catch(t.oe);break;case"map":Promise.all([t.e(34),t.e(1),t.e(11),t.e(93),t.e(145)]).then(function(){var e=[t(820)];(function(e){n(e)}).apply(null,e)}).catch(t.oe);break;case"indicator":Promise.all([t.e(91),t.e(1),t.e(146)]).then(function(){var e=[t(821)];(function(e){n(e)}).apply(null,e)}).catch(t.oe);break;case"selector":Promise.all([t.e(1),t.e(147)]).then(function(){var e=[t(822)];(function(e){n(e)}).apply(null,e)}).catch(t.oe);break;case"formnode":Promise.all([t.e(1),t.e(148)]).then(function(){var e=[t(823)];(function(e){n(e)}).apply(null,e)}).catch(t.oe);break;case"nodetable":Promise.all([t.e(1),t.e(15),t.e(35),t.e(149)]).then(function(){var e=[t(824)];(function(e){n(e)}).apply(null,e)}).catch(t.oe);break;case"button":Promise.all([t.e(1),t.e(150)]).then(function(){var e=[t(825)];(function(e){n(e)}).apply(null,e)}).catch(t.oe);break;case"funnelchart":Promise.all([t.e(1),t.e(8),t.e(151)]).then(function(){var e=[t(826)];(function(e){n(e)}).apply(null,e)}).catch(t.oe);break;case"pyramidchart":Promise.all([t.e(1),t.e(8),t.e(152)]).then(function(){var e=[t(827)];(function(e){n(e)}).apply(null,e)}).catch(t.oe);break;case"analyticachart":Promise.all([t.e(1),t.e(153)]).then(function(){var e=[t(828)];(function(e){n(e)}).apply(null,e)}).catch(t.oe)}},getObjectItemViewFromType:function(e,n){switch(e){case"texteditor":Promise.all([t.e(1),t.e(92),t.e(154)]).then(function(){var e=[t(829)];(function(e){n(e)}).apply(null,e)}).catch(t.oe);break;case"cubeviewer":Promise.all([t.e(1),t.e(15),t.e(35),t.e(155)]).then(function(){var e=[t(830)];(function(e){n(e)}).apply(null,e)}).catch(t.oe);break;case"diagramviewer":Promise.all([t.e(1),t.e(11),t.e(21),t.e(156)]).then(function(){var e=[t(831)];(function(e){n(e)}).apply(null,e)}).catch(t.oe);break;case"mapviewer":Promise.all([t.e(34),t.e(1),t.e(11),t.e(94),t.e(157)]).then(function(){var e=[t(832)];(function(e){n(e)}).apply(null,e)}).catch(t.oe);break;case"inputform":Promise.all([t.e(20),t.e(1),t.e(15),t.e(36),t.e(158)]).then(function(){var e=[t(833)];(function(e){n(e)}).apply(null,e)}).catch(t.oe);break;case"dashboardcontainer":Promise.all([t.e(1),t.e(159)]).then(function(){var e=[t(834)];(function(e){n(e)}).apply(null,e)}).catch(t.oe)}},getFilterView:function(e){t.e(160).then(function(){var n=[t(835)];(function(n){e(n)}).apply(null,n)}).catch(t.oe)},showCopyDashboard:function(e,n,o){t.e(161).then(function(){var a=[t(836)];(function(t){(new t).render(e,n,o)}).apply(null,a)}).catch(t.oe)},showDashboardComments:function(e){t.e(162).then(function(){var n=[t(837)];(function(n){var t=new n;t.setElement(e.parent),t.render(e)}).apply(null,n)}).catch(t.oe)},refreshAllOpenDashboards:function(){a(".mainTask.dashboardTask .btnRefresh").trigger("click")},showTimeFrameSetting:function(e){t.e(163).then(function(){var n=[t(838)];(function(n){var t=new n(e);t.setElement(e.el),t.render()}).apply(null,n)}).catch(t.oe)},updatePrintReportProgress:function(e){t.e(45).then(function(){var n=[t(717)];(function(n){new n(e).updatePrintReportProgress()}).apply(null,n)}).catch(t.oe)},updatePrintReportMessage:function(e){t.e(45).then(function(){var n=[t(717)];(function(n){new n(e).updatePrintReportMessage()}).apply(null,n)}).catch(t.oe)},updatePrintReportComplete:function(e){t.e(45).then(function(){var n=[t(717)];(function(n){new n(e).updatePrintReportComplete()}).apply(null,n)}).catch(t.oe)}})}.apply(n,r))||(e.exports=i)}).call(this,t(694),t(1))},706:function(e,n,t){"use strict";(function(o,a){var r,i=t(693);void 0===(r=function(){return o.Model.extend({defaults:{dashId:null,dashboardViewList:[],modifiedDash:!1,noQuery:[],styleLibraries:[],nodeOwner:"",extraOptions:void 0},resizeTimeOut:0,getDashboard:function(e,n){(0,i.send)("dashboardManager/by_id/".concat(e,"/"),null,null,function(e){e&&(n(e),a("#summary").trigger("refresh"))})},getNavigator:function(e,n){var t=e.reportId,o=void 0===t?null:t,a=e.dashboardId,r=void 0===a?null:a,s="";o?(s="?report_id=".concat(o),r&&(s+="&dashboard_id=".concat(r))):r&&(s="?dashboard_id=".concat(r)),(0,i.send)("reportManager/getNavigator/".concat(s),null,null,n)},calculateScaleFactor:function(e,n){if(this.getItemsModel().length>0)for(var t=this.getItemsModel(),o=0;o<t.length;o++)t[o].calculateScaleFactor(e,n)},updateSizes:function(e,n){if(this.getItemsModel().length>0){var t=300;n&&(t=1),clearTimeout(this.resizeTimeOut);var o=this.getItemsModel();this.resizeTimeOut=setTimeout(function(){var e;for(e=0;e<o.length;e++)o[e].baseUpdateSize(),o[e].updateSize()},t)}},setStateModified:function(e){this.set({modifiedDash:e})},getStateModified:function(){return this.get("modifiedDash")},addItemToModel:function(e){this.get("dashboardViewList").push(e)},getItemsModel:function(){return this.get("dashboardViewList")},getItemModel:function(e){var n,t=this.getItemsModel();for(n=0;n<t.length;n++)if(t[n].tagId==e)return t[n]},countItemsModelByNodeId:function(e){for(var n=0,t=this.getItemsModel(),o=0;o<t.length;o++)t[o].currentNodeId&&e&&t[o].currentNodeId.toLowerCase()==e.toLowerCase()&&n++;return n},removeItemModel:function(e){var n,t=this.getItemsModel();for(n=0;n<t.length;n++)if(t[n].tagId==e.tagId){t.splice(n,1);break}this.set({dashboardViewList:t})},removeAllItemsModel:function(){this.set("dashboardViewList",[])},changeItemModel:function(e,n){this.removeItemModel(e),this.addItemToModel(n)},setNodeOwner:function(e){this.set("node",e)},getNodeOwner:function(){return this.get("node")},onFilterChange:function(e,n,t,o,a,r){if(a){var i=this.getItemModel(a);if(i&&i.isUnlinkedIndex(e))return void i.onFilterChange(e,n,t,o,!0)}var s=this.getItemsModel();if(s)for(var c=0;c<s.length;c++)s[c].onFilterChange(e,n,t,o,!1,r)},onFiltersChange:function(e){var n=this.getItemsModel();if(n)for(var t=0;t<n.length;t++)n[t].onFiltersChange(e)},synchronizeDrop:function(e,n,t,o,a,r,i){if(i){var s=this.getItemsModel();if(s)for(var c=0;c<s.length;c++)s[c].tagId&&s[c].tagId!=i&&s[c].onSynchronizeDrop(e,n,t,o,a,r)}},synchronizeLevel:function(e,n,t){if(t){var o=this.getItemsModel();if(o)for(var a=0;a<o.length;a++)o[a].tagId&&o[a].tagId!=t&&o[a].onSynchronizeLevel(e,n)}},getNodeFullData:function(e,n,t,o){var a={node:e};n&&(a.fromRow=1,a.toRow=n),(0,i.send)("dashboardManager/getNodeFullData/",a,{type:"GET"},t,o)},getNodeIndexes:function(e,n){(0,i.send)("dashboardManager/getNodeIndexes/",{node:e},null,function(e){e&&n(e)})},getIndexValues:function(e,n){(0,i.send)("dashboardManager/getIndexValues/",e,null,function(e){e&&n(e)})},getGeoDef:function(e,n){(0,i.send)("Dashboard/GetGeoDef/"+e,null,null,function(e){e&&n(e)})},evaluateNode:function(e,n,t,o,a,r,s,c,l,u,d,p,f,h,g){c||(c="sum");var y={node:e,dims:n,rows:t,columns:o,summaryBy:c,bottomTotal:d,rightTotal:p,timeFormat:f,timeFormatType:h,calendarType:g},m="evaluateNode";r&&(m="evaluateNodeDef"),l&&l>0&&u&&u>0&&(y.fromRow=l*(u-1)+1,y.toRow=l*u),(0,i.send)("dashboardManager/".concat(m,"/"),JSON.stringify(y),{type:"POST",contentType:"application/json;charset=utf-8"},a,s)},evaluateNodeForPivot:function(e,n,t,o){(0,i.send)("Dashboard/EvaluateNodeForPivot/",{node:e},{type:"GET"},function(e){var r=e.value,i={success:function(e,t,o){n(e)},complete:function(){a("#mainLoading").hide(),a("#secondLoading").hide(),t()},dataType:"json",progress:function(e){if(e.lengthComputable){var n=e.loaded/e.total*100;o(n)}else try{var t=this.getResponseHeader("X-Content-Length");n=e.loaded/t*100;o(n)}catch(e){}}};a("#secondLoading").show(),a.ajax("".concat(__apiURL,"/scripts/download.aspx?name=").concat(r),i)},t)},updateDefinition:function(e,n,t,o){var r=[];t&&a.each(t,function(e,n){r.push({id:n})});var s={dashboardId:e,definition:n,styles:t};(0,i.send)("dashboardManager/".concat(e,"/"),JSON.stringify(s),{type:"PATCH",contentType:"application/json;charset=utf-8",dataType:"text"},function(e){void 0!=o&&o(e)})},updateDashboardImage:function(e,n,t){var o={id:e,fileData:n};(0,i.send)("Dashboard/UpdateImage/",o,{type:"PUT"},function(n){a("#summary").trigger("refresh"),a("#model-summary").trigger("refresh",{id:e}),n&&t&&t(n)})},validateIndexes:function(e,n){var t=function(n){var t;for(t=0;t<e.length;t++)if(e[t].field==n)return e[t]},o=function(e){var n,o;for(n=0;n<e.length;n++)void 0!=(o=t(e[n].field))&&(e[n].name=o.name)};o(n.dims),o(n.rows),o(n.columns)},initializeDashboardQuery:function(e){this.set("noQuery",e),this._initNoQuery()},_initNoQuery:function(){var e=this.get("noQuery");e&&e.length>0&&a.each(e,function(e,n){n.started=!1})},isReadyForEvaluate:function(e,n){var t=!0,o=this.get("noQuery");return o&&o.length>0&&a.each(o,function(o,a){a.node==e?a.started=!0:0==a.started&&a.rel&&a.rel.indexOf(n)>=0&&(t=!1)}),t},setNodeValueChanges:function(e,n){(0,i.send)("dashboardManager/pivotGrid/setCubeChanges/",JSON.stringify(e),{type:"POST",contentType:"application/json;charset=utf-8"},function(e){n(e),a("body").trigger("pendingChanges",[!0])})},isResultComputed:function(e,n){(0,i.send)("dashboardManager/isResultComputed/",JSON.stringify({nodes:e}),{type:"POST",contentType:"application/json;charset=utf-8"},function(e){n(e)})},reevaluateNodesNeeded:function(e){a(".dashboardTask").trigger("reevaluateNodesNeeded",[e])},reevaluateNodesNeededInThisDashboard:function(e){for(var n=[],t=this.getItemsModel(),o=0;o<t.length;o++){var r=t[o].getNodesOfView();r&&(n=n.concat(r))}n.length>0&&this.isResultComputed(n,function(n){if(n&&n.length>0)for(var o=0;o<t.length;o++)e&&t[o].tagId==e||(n.indexOf(t[o].currentNodeId)>=0&&a(t[o].tagId).trigger("evaluateNodeFromCurrentResult"),t[o].needRefresh(n)&&t[o].refreshItemDash())})},applyNumberFormat:function(e){for(var n=this.getItemsModel(),t=0;t<n.length;t++)n[t].currentNodeId==e&&n[t].applyNumberFormat()},getStyleLibrary:function(e){var n=this.get("styleLibraries");if(n)for(var t=0;t<n.length;t++)if(n[t].id==e)return n[t].definition;return[]},getStyleLibraries:function(){return this.get("styleLibraries")},setStyleLibraries:function(e){return this.set("styleLibraries",e)},refreshStyleLibraries:function(e){var n=this;t.e(65).then(function(){var o=[t(731)];(function(t){(new t).list(null,function(t){n.set("styleLibraries",t),e(t)})}).apply(null,o)}).catch(t.oe)},syncDrilldown:function(e,n,t){var o=this.getItemsModel();if(o)for(var a=0;a<o.length;a++)o[a].tagId!=t&&o[a].syncDrilldown(e,n,t)},syncDrillUp:function(e,n){var t=this.getItemsModel();if(t)for(var o=0;o<t.length;o++)t[o].tagId!=n&&t[o].syncDrillup(e,n)},syncShowHideLegend:function(e,n,t){},viewAsChart:function(e,n){(0,i.send)("Dashboard/viewAsChart/",e,{type:"POST"},n)}})}.apply(n,[]))||(e.exports=r)}).call(this,t(218),t(1))},724:function(e,n,t){"use strict";(function(o){var a,r=t(18),i=t(693);void 0===(a=function(){var e=function(e,n,o){null!==e.companySettingFile&&""!==e.companySettingFile&&t.e(42).then(function(){var n=[t(713)("./".concat(e.companySettingFile))];(function(){Promise.resolve().then(function(){t(221)}).catch(t.oe)}).apply(null,n)}).catch(t.oe),__currentSession=e,(0,r.setProcessDictionary)(e.process),(0,i.ajaxSetup)(),Promise.all([t.e(2),t.e(6),t.e(43)]).then(function(){var o=[t(684)];(function(t){(new t).clearUI(),n(e)}).apply(null,o)}).catch(t.oe)};return o.Model.extend({isConnected:function(){return""!=__currentToken&&null!==__currentSession},connect:function(e,n,t,o,a){var r={error:function(e,n,t){alert("Could not contact server ".concat(__apiURL))},type:"POST"};(0,i.send)("token-auth/",{username:e,password:n},r,function(e){e&&e.token&&(__currentToken=e.token,(0,i.ajaxSetup)(),o(e))},a,!0,!0)},createSession:function(n,t,o){(0,i.send)("security/createSession",{companyId:n},{type:"POST"},function(n){e(n,t)},o)},getUserCompanies:function(e,n,t){(0,i.send)("security/getUserCompanies",{user:e,password:n},null,function(e){t(e)})},getUserCompaniesFromUserId:function(e,n){(0,i.send)("security/GetUserCompaniesFromUserId/?userId=".concat(e),null,null,function(e){n(e)})},logout:function(e){(0,i.send)("security/logout/",null,{dataType:"text"},function(n){void 0!=e&&e(n)})},getAllSessions:function(e){(0,i.send)("security/getAllSessions/",null,null,e,null,!0)},getMySessions:function(e){(0,i.send)("security/getMySessions/",null,null,e,null,!0)},getAllProcess:function(e){(0,i.send)("security/getAllProcess",null,null,e)},createFromToken:function(e,n,t){__currentToken=e,__currentSession={},(0,r.setProcessDictionary)([]),(0,i.ajaxSetup)(),(0,r.setLanguageDictionary)({}),n()},useExternalLink:function(e,n){(0,i.send)("security/useExternalLink/?guid=".concat(e),null,null,function(e,o){200===o.status?(null!==e.session.companySettingFile&&""!==e.session.companySettingFile&&t.e(42).then(function(){var n=[t(713)("./".concat(e.session.companySettingFile))];(function(){Promise.resolve().then(function(){t(221)}).catch(t.oe)}).apply(null,n)}).catch(t.oe),n(e,o)):n(e,o)})},killSessionByKey:function(e,n){(0,i.send)("security/killSessionByKey/",{session_key:e},{type:"GET",dataType:"text"},n)},createNewSession:function(n,t){(0,i.send)("security/createNewSession/",null,null,function(t){e(t,n)})},requireLogoutSessionByToken:function(e,n){(0,i.send)("security/requireLogoutSessionByToken/",{token:e},null,n)},ssoTest:function(){(0,i.send)("security/ssoTest",null,null,function(e){console.log(e)})},ssoCheckUser:function(e,n){(0,i.send)("security/SSOCheckUser/",null,null,e,n)},loginas:function(n,t,o,a,r){var s={error:function(e,n,t){alert("Could not contact server ".concat(__apiURL))}};(0,i.send)("security/loginas",{userId:n,token:t,companyId:o},s,function(n){e(n,a)})},loginFromToken:function(n,t,o){var a={error:function(e,n,t){alert("Could not contact server ".concat(__apiURL))}};(0,i.send)("security/loginFromToken",{token:n},a,function(n){e(n,t)})}})}.apply(n,[]))||(e.exports=a)}).call(this,t(218))}}]);