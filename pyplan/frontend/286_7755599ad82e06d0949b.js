/*! Copyright Novix S.A. 2019. All rights reserved. */
(window.webpackJsonp=window.webpackJsonp||[]).push([[286,3,241,285],{1131:function(e,t,a){var n=a(690);e.exports=(n.default||n).template({compiler:[7,">= 4.0.0"],main:function(e,t,a,n,i){var o;return'<div class="container-fluid mainTask full-horizontal inputFormTask hideClose" data-rel="form-'+e.escapeExpression("function"==typeof(o=null!=(o=a.id||(null!=t?t.id:t))?o:a.helperMissing)?o.call(null!=t?t:e.nullContext||{},{name:"id",hash:{},data:i}):o)+'"\n    data-type="tab-content">\n\n    <div class="breadcrumbs nodisplay">\n        <div class="toolbar">\n            <button class="btn addRow" style="display: none;"><i class="fas fa-plus-square"></i></button>\n            <button class="btn showFilters"><i class="fa fa-filter"></i></button>\n            <button class="btn showWorkflow nodisplay"><i class="fa fa-tasks"></i></button>\n            <button class="btn showHistory nodisplay"><i class="fa fa-exclamation-triangle"></i></button>\n        </div>\n        <ul class="nav nav-tabs form-tabs nodisplay">\n\n\n        </ul>\n        <ul class="openNewTab">\n            <li>\n                <select class="selForms">\n\n                </select>\n            </li>\n        </ul>\n\n    </div>\n\n\n\n    <div class="row-fluid form-area">\n        <div class="col-sm-12 main-pane">\n\n\n        </div>\n\n    </div>\n</div>'},useData:!0})},1132:function(e,t,a){var n=a(690);e.exports=(n.default||n).template({1:function(e,t,a,n,i){var o,l=null!=t?t:e.nullContext||{},r=a.helperMissing,s=e.escapeExpression;return'    <li>\n        <a href="#" data-rel="'+s("function"==typeof(o=null!=(o=a.id||(null!=t?t.id:t))?o:r)?o.call(l,{name:"id",hash:{},data:i}):o)+'" data-key="'+s("function"==typeof(o=null!=(o=a.key||(null!=t?t.key:t))?o:r)?o.call(l,{name:"key",hash:{},data:i}):o)+'" title="'+s("function"==typeof(o=null!=(o=a.title||(null!=t?t.title:t))?o:r)?o.call(l,{name:"title",hash:{},data:i}):o)+'">\n            '+s("function"==typeof(o=null!=(o=a.title||(null!=t?t.title:t))?o:r)?o.call(l,{name:"title",hash:{},data:i}):o)+'\n            <div class="dataStatus green"></div>\n        </a>\n        <i class="fa fa-close"></i>\n    </li>\n'},compiler:[7,">= 4.0.0"],main:function(e,t,a,n,i){var o;return null!=(o=a.each.call(null!=t?t:e.nullContext||{},t,{name:"each",hash:{},fn:e.program(1,i,0),inverse:e.noop,data:i}))?o:""},useData:!0})},1133:function(e,t,a){var n=a(690);e.exports=(n.default||n).template({1:function(e,t,n,i,o){var l,r=e.lambda,s=e.escapeExpression;return'    \n            <div class="itemList" style="display: block;" >\n                <label class="control control--checkbox">'+s(r(null!=t?t.text:t,t))+'\n                  <input type="checkbox" value="'+s(r(null!=t?t.value:t,t))+'" '+(null!=(l=function(e){return e&&(e.__esModule?e.default:e)}(a(689)).call(null!=t?t:e.nullContext||{},null!=t?t.selected:t,"==",!0,{name:"ifCond",hash:{},fn:e.program(2,o,0),inverse:e.noop,data:o}))?l:"")+'>\n                  <div class="control__indicator"></div>\n                </label>\n            </div>\n\n'},2:function(e,t,a,n,i){return" checked "},compiler:[7,">= 4.0.0"],main:function(e,t,a,n,i){var o;return'\n\n<div class="form-group" style="overflow-y: scroll; overflow-x: hidden; max-height: 400px;">\n    <div class="col-sm-10">\n'+(null!=(o=a.each.call(null!=t?t:e.nullContext||{},null!=t?t.sourceGroups:t,{name:"each",hash:{},fn:e.program(1,i,0),inverse:e.noop,data:i}))?o:"")+"    </div>\n</div>"},useData:!0})},1356:function(e){e.exports={fixedColumns:1,columnResize:!0,allowAdd:!0,allowRemove:!0,colHeaders:!0,rowHeaders:!0,sortBy:"name",filters:[{filterType:"multipleSelect",entity:"ex_title",entityLabel:"name",field:"title_id",header:"Title",readOnly:!1}],columns:[{type:"text",field:"name",header:"Name",style:{backgroundColor:"#f6f6f6",color:"#204e81"}},{type:"text",field:"title_id",header:"Title",entity:"ex_title",entityLabel:"name"},{type:"text",field:"state_id",header:"State",entity:"ex_state",entityLabel:"name"},{type:"text",field:"comments",header:"Comments"},{type:"date",field:"start_date",header:"Start"},{type:"date",field:"end_date",header:"End"},{type:"numeric",field:"hr_per_week",header:"Hr/Week"},{type:"date",field:"raise_date",header:"Raise Date"},{type:"numeric",field:"pay_raise",header:"Pay Raise %",format:"0.00 %"},{type:"numeric",field:"pay_rate",header:"Pay Rate",format:"0,0"}]}},1357:function(e){e.exports={fixedColumns:1,columnResize:!0,allowAdd:!0,allowRemove:!0,colHeaders:!0,rowHeaders:!0,sortBy:"name",enableHistoryChanges:!0,workflowGroups:[],filters:[{filterType:"multipleSelect",entity:"ex_product",entityLabel:"name",field:"product_id",header:"Product",readOnly:!1},{filterType:"singleSelect",entity:"ex_customer",entityLabel:"name",field:"customer_id",header:"Customer",readOnly:!1}],columns:[{type:"text",field:"product_id",header:"Product",hidden:!0},{type:"text",field:"customer_id",header:"Customer",hidden:!0},{type:"text",field:"account_id",header:"Accounts",style:{backgroundColor:"#f6f6f6",color:"#204e81"}},{type:"numeric",field:"jan_2018",header:"Jan-2018",format:"0.00 %"},{type:"numeric",field:"feb_2018",header:"Feb-2018",format:"0.00 %"},{type:"numeric",field:"mar_2018",header:"Mar-2018",format:"0.00 %"},{type:"numeric",field:"apr_2018",header:"Apr-2018",format:"0.00 %"},{type:"numeric",field:"may_2018",header:"May-2018",format:"0.00 %"},{type:"numeric",field:"jun_2018",header:"Jun-2018",format:"0.00 %"},{type:"numeric",field:"jul_2018",header:"Jul-2018",format:"0.00 %"},{type:"numeric",field:"aug_2018",header:"Aug-2018",format:"0.00 %"},{type:"numeric",field:"sep_2018",header:"Sep-2018",format:"0.00 %"},{type:"numeric",field:"oct_2018",header:"Oct-2018",format:"0.00 %"},{type:"numeric",field:"nov_2018",header:"Nov-2018",format:"0.00 %"},{type:"numeric",field:"dec_2018",header:"Dec-2018",format:"0.00 %"}]}},1358:function(e){e.exports=[{id:1,marca:{id:2,label:"ZIMMER"},grupo:{id:1,label:"ARTROSCOPIA DE CADERA"},subgrupo:{id:1,label:"RHK"},precioProm2016:10,totalUF:"",totalIngresos:"",precioBase2017:"",costoUnitario2017:"",preTotalUF:"",preTotalCostos:"",preTotalIngresos:"",cufEne17:"",cufFeb17:"",cufMar17:"",cufAbr17:"",cufMay17:"",cufJun17:"",cufJul17:"",cufAgo17:"",cufSep17:"",cufOct17:"",cufNov17:"",cufDic17:"",ipvEne17:"",ipvFeb17:"",ipvMar17:"",ipvAbr17:"",ipvMay17:"",ipvJun17:"",ipvJul17:"",ipvAgo17:"",ipvSep17:"",ipvOct17:"",ipvNov17:"",ipvDic17:"",cdvEne17:"",cdvFeb17:"",cdvMar17:"",cdvAbr17:"",cdvMay17:"",cdvJun17:"",cdvJul17:"",cdvAgo17:"",cdvSep17:"",cdvOct17:"",cdvNov17:"",cdvDic17:""},{id:2,marca:{id:1,label:"ARTHREX"},grupo:{id:2,label:"ARTROSCOPIA DE HOMBRO"},subgrupo:{id:2,label:"MG UNI"},precioProm2016:20,totalUF:"",totalIngresos:"",precioBase2017:"",costoUnitario2017:"",preTotalUF:"",preTotalCostos:"",preTotalIngresos:"",cufEne17:"",cufFeb17:"",cufMar17:"",cufAbr17:"",cufMay17:"",cufJun17:"",cufJul17:"",cufAgo17:"",cufSep17:"",cufOct17:"",cufNov17:"",cufDic17:"",ipvEne17:"",ipvFeb17:"",ipvMar17:"",ipvAbr17:"",ipvMay17:"",ipvJun17:"",ipvJul17:"",ipvAgo17:"",ipvSep17:"",ipvOct17:"",ipvNov17:"",ipvDic17:"",cdvEne17:"",cdvFeb17:"",cdvMar17:"",cdvAbr17:"",cdvMay17:"",cdvJun17:"",cdvJul17:"",cdvAgo17:"",cdvSep17:"",cdvOct17:"",cdvNov17:"",cdvDic17:""},{id:3,marca:{id:1,label:"ARTHREX"},grupo:{id:3,label:"ARTROSCOPIA DE RODILLA"},subgrupo:{id:3,label:"ZUK"},precioProm2016:10,totalUF:"",totalIngresos:"",precioBase2017:"",costoUnitario2017:"",preTotalUF:"",preTotalCostos:"",preTotalIngresos:"",cufEne17:"",cufFeb17:"",cufMar17:"",cufAbr17:"",cufMay17:"",cufJun17:"",cufJul17:"",cufAgo17:"",cufSep17:"",cufOct17:"",cufNov17:"",cufDic17:"",ipvEne17:"",ipvFeb17:"",ipvMar17:"",ipvAbr17:"",ipvMay17:"",ipvJun17:"",ipvJul17:"",ipvAgo17:"",ipvSep17:"",ipvOct17:"",ipvNov17:"",ipvDic17:"",cdvEne17:"",cdvFeb17:"",cdvMar17:"",cdvAbr17:"",cdvMay17:"",cdvJun17:"",cdvJul17:"",cdvAgo17:"",cdvSep17:"",cdvOct17:"",cdvNov17:"",cdvDic17:""},{}]},1359:function(e){e.exports={fixedColumns:0,columnResize:!0,allowAdd:!0,allowRemove:!0,filters:[],colHeaders:!0,rowHeaders:!0,sortBy:"name",columns:[{type:"text",field:"name",header:"Name"},{type:"text",field:"comment",header:"Comment"}]}},2129:function(e,t,a){var n={"./demo/demoList":956,"./demo/demoList.json":956,"./groupSelectorModal":951,"./groupSelectorModal.js":951,"./inputForm":886,"./inputForm.js":886,"./inputFormViewer":910,"./inputFormViewer.js":910,"./inputModuleManager":1130,"./inputModuleManager.js":1130,"./personnel":1356,"./personnel.json":1356,"./productSales":1357,"./productSales.json":1357,"./sampleDataMapping":1358,"./sampleDataMapping.json":1358,"./simpleIndex":1359,"./simpleIndex.json":1359};function i(e){var t=o(e);return a(t)}function o(e){var t=n[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}i.keys=function(){return Object.keys(n)},i.resolve=o,e.exports=i,i.id=2129},683:function(e,t,a){"use strict";(function(n){var i;void 0===(i=function(){return n.Controller.extend({name:"showModal",show:function(e){Promise.all([a.e(2),a.e(118)]).then(function(){var t=[a(701)];(function(t){(new t).render(e)}).apply(null,t)}).catch(a.oe)}})}.apply(t,[]))||(e.exports=i)}).call(this,a(694))},910:function(e,t,a){"use strict";(function(n,i){var o,l,r=a(18);o=[a(749),a(857),a(1131),a(1132)],void 0===(l=function(e,t,o,l){return n.View.extend({el:i("#main"),diagram:void 0,nodeFinder:void 0,diagramClipboard:void 0,render:function(){var n=this;this.currentTemplateId=this.options.templateId?this.options.templateId:"empty",this.options.templateName=this.options.templateId?this.options.templateName:"Open form",this.keyView="div.mainTask[data-rel='form-"+this.currentTemplateId+"']";var l="form-"+this.currentTemplateId;if(i('.navigation ul li a[rel="form-empty"]').attr("rel",l),i('.inputFormTask[data-rel="'+l+'"]').length>0&&"form-empty"!==l)return Promise.resolve().then(function(){var e=[a(684)];(function(e){(new e).selectTask(l)}).apply(null,e)}).catch(a.oe),n.getParent().find('.form-tabs li a[data-key="'+l+'"]').click(),!1;var r={id:this.currentTemplateId};this.inputModuleModel=new e({formsViewList:[]}),this.inputModuleController=new t;var s=o(r);this.$el.append(s),this.loadSelectEntities(),this.reloadInputform(this.options),this.updateSizes(),this.addHandlers(this.getParent()),this.refreshInputFormTabs(),this.getParent().on("removeView",function(){n.onRemoveView()}),this.getParent().on("beforeRemoveView",function(e,t){n.onBeforeRemoveView(e,t)})},getParent:function(){return i(this.keyView)},onBeforeRemoveView:function(){},onRemoveView:function(){var e=this;setTimeout(function(){e.refreshInputFormTabs(),e=null},100)},updateSizes:function(){if(this.$el.find(".diagram-area").is(":visible")){this.$el.find(".diagram-area").height(i(window).height()-50),this.$el.find(".diagram-area").width(i(window).width()-90)}},addHandlers:function(e){var t=this;e.find(".form-tabs").on("click","li a",function(){var e=i(this).attr("data-key");i('.mainTask[data-rel="'+e+'"]').trigger("refreshOnFocus"),Promise.resolve().then(function(){var t=[a(684)];(function(t){(new t).selectTask(e)}).apply(null,t)}).catch(a.oe)}),e.find(".form-tabs").on("click","li i",function(){var e=i(this).closest("li").find("a").attr("data-key");Promise.resolve().then(function(){var t=[a(684)];(function(t){(new t).removeTask(e)}).apply(null,t)}).catch(a.oe)}),e.find(".openNewTab").on("change","select.selForms",function(){var n=i(this).val();if(i("div.mainTask[data-rel='form-empty']").length>0&&(Promise.resolve().then(function(){var e=[a(684)];(function(e){(new e).removeTask(o)}).apply(null,e)}).catch(a.oe),i("div.mainTask[data-rel='form-empty']").remove()),""!==n){var o,l=i(this).find(":selected").html().trim(),r={templateId:n,templateName:l},s=!1;e.find("ul.form-tabs li").each(function(t,a){o=i(a).find("a").attr("data-key"),i(a).find("a").attr("data-rel")===n&&(s=!0,e.find('.nav-tabs li a[data-key="'+o+'"]').click())}),s||t.inputModuleController.openViewer(r)}i(this).val(""),event.preventDefault()}),i(document).off("contextmenu",".form-tabs li a"),i(document).on("contextmenu",".form-tabs li a",function(e){return t.showTabContextMenu(i(this),e),!1})},loadSelectEntities:function(){var e=this.getParent().find("select.selForms");e.enable(!1),e.empty(),this.inputModuleModel.list(function(t){e.append(i('<option value="">  </option>'));for(var a=0;a<t.length;a++)e.append(i('<option value="'+t[a].id+'">'+t[a].name+" </option>"));e.enable(!0)})},reloadInputform:function(e){this.refreshFormName(e),this.getParent().find(".main-pane").empty();var t=this.getParent().find(".main-pane");e.templateId&&this.inputModuleController.openForm(e.templateId,t),this.getParent().find("div.breadcrumbs").show()},refreshFormName:function(e){if(e){var t=e.templateId,a=e.templateName;this.formName=a,i("span[data-rel='dashboard-"+t+"']").text(a),i("#topMenuBar li a[rel='form-"+t+"']").text(a),i(".dashboard-tabs li a[data-rel='"+t+"']").text(a)}},refreshInputFormTabs:function(){var e=[];if(i(".inputFormTask").each(function(t,a){var n=i(a).attr("data-rel"),o=n.split("-")[1],l=i("#topMenuBar ul li a[rel='"+n+"']").text();e.push({id:o,key:n,title:l,closeBtn:!0})}),i(".mainTask .form-tabs").empty(),i(".mainTask .form-tabs").hide(),e.length>0){var t=l(e);i(".mainTask .form-tabs").html(t),i(".mainTask .form-tabs").show()}i(".inputFormTask").each(function(e,t){var a=i(t).attr("data-rel");i(this).find(".form-tabs li a[data-key='"+a+"']").closest("li").addClass("active")}),0===i(".inputFormTask").length&&i('.navigation ul li a[rel^="form-"]').attr("rel","form-empty")},showTabContextMenu:function(e,t){var n={_me:{name:(0,r.translate)("close")},_all:{name:(0,r.translate)("close_all")},_others:{name:(0,r.translate)("close_all_but_this")}};i.contextMenu("destroy",".form-tabs"),i.contextMenu({selector:".form-tabs",callback:function(t,n){switch(t){case"_me":e.closest("li").find("i").click();break;case"_all":case"_others":var o=e.attr("data-key");"_all"==t&&(o="_123123_"),Promise.resolve().then(function(){var n=[a(684)];(function(a){var n=new a,l=[];e.closest("ul.form-tabs").find("li a").each(function(e,t){i(t).attr("data-key")!=o&&l.push(i(t).attr("data-key"))}),l.length>0&&i.each(l,function(e,a){"_all"==t?n.removeTask(a,!1):(n.selectTask(o),n.removeTask(a,!0))})}).apply(null,n)}).catch(a.oe)}},items:n,events:{hide:function(e){i.contextMenu("destroy",".form-tabs")}},zIndex:0}),i(".form-tabs").contextMenu({x:t.clientX,y:t.clientY})},close:function(){},openForm:function(e){i(".entityList").empty(),this.inputModuleController.openForm(e,this._uId)}})}.apply(t,o))||(e.exports=l)}).call(this,a(218),a(1))},951:function(e,t,a){"use strict";(function(n,i){var o,l,r=a(18);o=[a(683),a(1133)],void 0===(l=function(e,t){return n.View.extend({el:i("#main"),render:function(a,n){var o=t(a.params);(new e).show({title:(0,r.translate)("Choose groups"),html:o,modalClass:"shortModal",buttons:[{title:(0,r.translate)("accept"),css:"primary",code:"yes"},{title:(0,r.translate)("cancel"),code:"close"}],callback:function(e,t){if("yes"==e){var n="";return i.each(t.find('input[type="checkbox"]'),function(e,t){i(t).is(":checked")&&(n+=i(t).val()+",")}),n=n.slice(0,-1),a.params.callback(n),t.modal("hide"),!1}},onLoad:function(e){setTimeout(function(){},200)}})}})}.apply(t,o))||(e.exports=l)}).call(this,a(218),a(1))},956:function(e){e.exports=[{name:"Simple Index",file:"simpleIndex.json"},{name:"Personnel",file:"personnel.json"},{name:"Product Sales",file:"productSales.json"}]}}]);