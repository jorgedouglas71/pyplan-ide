/*! Copyright Novix S.A. 2019. All rights reserved. */
(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{1009:function(e,t,i){var n=i(690);function r(e){return e&&(e.__esModule?e.default:e)}e.exports=(n.default||n).template({1:function(e,t,i,n,r){return" mini "},3:function(e,t,i,n,r){return" orientation-vertical "},5:function(e,t,i,n,r){return"             \n"},7:function(e,t,n,s,l){return'            <li class="selectAll">'+e.escapeExpression(r(i(688)).call(null!=t?t:e.nullContext||{},"All",{name:"L",hash:{},data:l}))+"</li>\n"},9:function(e,t,n,s,l){var a,u=e.lambda,d=e.escapeExpression;return'            <li data-value="'+d(u(null!=t?t.value:t,t))+'"  class="indexOption '+(null!=(a=r(i(689)).call(null!=t?t:e.nullContext||{},null!=t?t.selected:t,"==",!0,{name:"ifCond",hash:{},fn:e.program(10,l,0),inverse:e.noop,data:l}))?a:"")+'" >'+d(u(null!=t?t.formattedValue:t,t))+"</li>\n"},10:function(e,t,i,n,r){return" selected "},compiler:[7,">= 4.0.0"],main:function(e,t,n,s,l){var a,u=null!=t?t:e.nullContext||{};return'<div class="index-list '+(null!=(a=r(i(689)).call(u,null!=(a=null!=(a=null!=t?t.itemProperties:t)?a.index:a)?a.ui:a,"==","mini",{name:"ifCond",hash:{},fn:e.program(1,l,0),inverse:e.noop,data:l}))?a:"")+" "+(null!=(a=r(i(689)).call(u,null!=(a=null!=(a=null!=t?t.itemProperties:t)?a.index:a)?a.orientation:a,"==","v",{name:"ifCond",hash:{},fn:e.program(3,l,0),inverse:e.noop,data:l}))?a:"")+'" node-id="'+e.escapeExpression(e.lambda(null!=(a=null!=t?t.itemProperties:t)?a.nodeId:a,t))+'">\n\n    <ul>\n'+(null!=(a=n.if.call(u,null!=(a=null!=(a=null!=t?t.itemProperties:t)?a.index:a)?a.singleSelect:a,{name:"if",hash:{},fn:e.program(5,l,0),inverse:e.program(7,l,0),data:l}))?a:"")+(null!=(a=n.each.call(u,null!=t?t.indexValues:t,{name:"each",hash:{},fn:e.program(9,l,0),inverse:e.noop,data:l}))?a:"")+"    </ul>\n    \n</div>"},useData:!0})},1010:function(e,t,i){var n=i(690);e.exports=(n.default||n).template({compiler:[7,">= 4.0.0"],main:function(e,t,n,r,s){return'<div class="index-hidden">\n    <a href="#" class="text" rel="tooltip"  title="">('+e.escapeExpression(function(e){return e&&(e.__esModule?e.default:e)}(i(688)).call(null!=t?t:e.nullContext||{},"all",{name:"L",hash:{},data:s}))+")</a>\n</div>"},useData:!0})},1011:function(e,t,i){var n=i(690);e.exports=(n.default||n).template({compiler:[7,">= 4.0.0"],main:function(e,t,i,n,r){return'<div class="index-range">\n    <div class="range_slider"></div>\n    <span class="range_min"></span>\n    <span class="range_max"></span>\n\n    <span class="label_range_min"></span>\n    <span class="label_range_sep">-</span>\n    <span class="label_range_max"></span>\n</div>'},useData:!0})},708:function(e,t){e.exports=function(){return""}},819:function(e,t,i){"use strict";(function(n){var r,s,l=i(18);r=[i(730),i(708),i(1009),i(1010),i(1011)],void 0===(s=function(e,t,r,s,a){return e.extend({el:n("#n_o_n_e"),table:void 0,clickTimeout:{},relatedTimeout:-1,uiFormat:"default",currentSelectedValues:void 0,render:function(e){this.baseRender(e),this.drawItem()},updateSize:function(e,t,i){if(n(this.tagId).find(".item-area ul").height(n(this.tagId).find(".item-area").height()-1),"hidden"==this.uiFormat){var r=n(this.tagId).find(".item-title .title").width()+n(this.tagId).find(".item-title .unit").width();n(this.tagId).find(".item-area .index-hidden").css("left",r+43),n(this.tagId).find(".item-area .index-hidden a").width(n(this.tagId).width()-r-15)}if(n(this.tagId).find(".index-list").length>0){var s=Math.min(this.maxScaleFactorW,this.maxScaleFactorH),l=11;n(this.tagId).find(".index-list").hasClass("mini")&&(l=10),n(this.tagId).find(".index-list").css("font-size",l*s+"px")}},updateValues:function(e){this.drawIndex(n(this.tagId).find(".item-area").first(),e),this.isReady=!0},drawItem:function(){var e=t();n(this.tagId).find(".item-area").html(e),this.currentResult&&this.currentResult.itemProperties&&this.currentResult.itemProperties.index&&(this.currentSelectedValues=this.currentResult.itemProperties.index.currentSelectedValues),this.drawIndex(n(this.tagId).find(".item-area").first())},redrawIndex:function(){this.drawIndex(n(this.tagId).find(".item-area").first(),this.currentResult)},drawIndex:function(e,t){if(void 0==t&&this.currentResult&&(t=this.currentResult.nodeResult),t){var i=r;if(this.currentResult&&(this.currentResult.itemProperties&&this.currentResult.itemProperties.index&&this.currentResult.itemProperties.index.ui&&(this.uiFormat=this.currentResult.itemProperties.index.ui,"hidden"==this.currentResult.itemProperties.index.ui&&(i=s),"range"==this.currentResult.itemProperties.index.ui&&(i=a)),t.itemProperties=this.currentResult.itemProperties,t.itemProperties.nodeId=this.currentResult.nodeId,!t.indexValues&&this.currentResult.indexValues&&(t.indexValues=this.currentResult.indexValues)),this.numberFormatter||this.createFormatter(),t&&t.indexValues)for(var n=0;n<t.indexValues.length;n++)this.numberFormatter&&"N"==t.indexValues[n].type?t.indexValues[n].formattedValue=this.numberFormatter.format(t.indexValues[n].value):t.indexValues[n].formattedValue=t.indexValues[n].value;var l=i(t);if(e.html(l),this.addIndexEvents(),this.currentResult&&this.currentResult.itemProperties.index&&this.currentResult.itemProperties.index.dynamic){var u=this;setTimeout(function(){u.refreshSettingChanges()},50)}else this.updateSelectedValues(),this.findAndQueryChildIndexes(),this.refreshSelectAll();this.updateSize()}},addIndexEvents:function(){var e=this;switch(this.uiFormat){case"hidden":n(this.tagId).find(".index-hidden a").on("click",function(){var t=e.currentNodeId,r=n(e.tagId).find(".item-title .title").text(),s=e.tagId,l=!1;return e.currentResult&&e.currentResult.itemProperties&&e.currentResult.itemProperties.index&&e.currentResult.itemProperties.index.singleSelect&&(l=!0),e.editMode||Promise.resolve().then(function(){var n=[i(699)];(function(i){(new i).getFilterView(function(i){var n=new i({singleSelect:l});n.setElement(),n.render(t,r,s,e)})}).apply(null,n)}).catch(i.oe),!1});break;case"range":if(this.currentResult&&this.currentResult.indexValues&&this.currentResult.indexValues.length>0){var t=n(this.tagId).find(".index-range .range_slider"),r=[];n(this.currentResult.indexValues).each(function(t,i){r.push(e.getTypedValue(i))}),t.hasClass(".ui-slider")&&t.slider("destroy"),t.slider({values:[0,r.length-1],range:!0,min:0,max:r.length-1,step:1,slide:function(t,i){n(e.tagId).find(".index-range  .label_range_min").text("("+e.secureFormatValue(r[i.values[0]])),n(e.tagId).find(".index-range  .label_range_max").text(e.secureFormatValue(r[i.values[1]])+")")},stop:function(t,i){e.queryOnClick(!0)},create:function(t,i){n(e.tagId).find(".index-range .range_min").text(e.secureFormatValue(r[0])),n(e.tagId).find(".index-range .range_max").text(e.secureFormatValue(r[r.length-1])),n(e.tagId).find(".index-range  .label_range_min").text("("+e.secureFormatValue(r[0])),n(e.tagId).find(".index-range  .label_range_max").text(e.secureFormatValue(r[r.length-1])+")")}})}break;default:n(this.tagId).find(".item-area .index-list ul li.indexOption").on("click",function(t){e.setDefaultOptions();var i=this;e.currentResult.itemProperties.index.singleSelect&&n(this).closest("ul").find("li.indexOption").each(function(e,t){t!=i&&n(t).removeClass("selected")}),n(this).toggleClass("selected"),e.refreshSelectAll(),e.queryOnClick();var r=n(e.tagId).find(".item-area .index-list ul li.indexOption.selected"),s=[];n.each(r,function(e,t){s.push(n(t).attr("data-value"))}),n("[node-filter-id='"+e.currentResult.nodeId+"']").trigger("dashboardIndexChange",[s])}),n(this.tagId).find(".item-area .index-list ul li.selectAll").on("click",function(t){n(this).hasClass("selected")?n(this).closest("ul").find("li").removeClass("selected"):n(this).closest("ul").find("li").addClass("selected"),e.queryOnClick();var i=n(e.tagId).find(".item-area .index-list ul li.indexOption.selected"),r=[];n.each(i,function(e,t){r.push(n(t).attr("data-value"))}),n("[node-filter-id='"+e.currentResult.nodeId+"']").trigger("dashboardIndexChange",[r,e.tagId])})}},queryOnClick:function(e){var t=[];if("range"==this.uiFormat){var i=n(this.tagId).find(".index-range .range_slider"),r=i.slider("values",0),s=i.slider("values",1);n(this.currentResult.indexValues).each(function(e,i){e>=r&&e<=s&&t.push(i.value)})}else n(this.tagId).find(".item-area ul li.indexOption.selected").each(function(e,i){t.push(n(this).attr("data-value"))});if(this.currentResult){var l=this.currentResult.nodeId,a=this.currentResult&&this.currentResult.itemProperties.index&&this.currentResult.itemProperties.index.dynamic,u=[];n.each(t,function(e,t){u.push({selected:!0,value:t})});var d=this.findAndQueryChildIndexes();clearTimeout(this.clickTimeout);var c=this;this.clickTimeout=setTimeout(function(){c.model.onFilterChange(l,u,a,d),c=null},400)}},onFilterChange:function(e,t,i,r){if(this.currentResult&&this.currentNodeId){var s=!1;if(e==this.currentNodeId&&(s=!0,this.currentSelectedValues=[],t)){var l=this;n.each(t,function(e,t){t.selected&&l.currentSelectedValues.push(t.value)}),l=null}this.updateSelectedValues(s),this.currentResult&&this.currentResult.itemProperties&&this.currentResult.itemProperties.index&&(this.currentResult.itemProperties.index.currentSelectedValues=this.currentSelectedValues),this.checkForRange()}},updateSelectedValues:function(e){if((e||this.currentSelectedValues&&this.currentSelectedValues.length>0)&&this.currentSelectedValues){var t=this;switch(this.uiFormat){case"hidden":var i="",r="",s=-1;if(this.currentResult&&this.currentResult.indexValues&&(s=this.currentResult.indexValues.length),this.currentSelectedValues&&0!=this.currentSelectedValues.length&&this.currentSelectedValues.length!=s){for(var a=0;a<this.currentSelectedValues.length;a++)a>0&&(r+=","),r+=this.currentSelectedValues[a];i=r,this.currentSelectedValues.length>50&&(i=(0,l.translate)("multiple"))}else i=(0,l.translate)("all");i="("+i+")",n(this.tagId).find(".item-area .index-hidden a").text(i).attr("title",r);break;case"range":if(this.currentResult&&this.currentResult.indexValues&&this.currentResult.indexValues.length>0){var u,d,c,o,h=n(this.tagId).find(".index-range .range_slider");this.currentSelectedValues&&this.currentSelectedValues.length>0?n(this.currentResult.indexValues).each(function(e,i){i.value==t.currentSelectedValues[0]&&(c=t.getTypedValue(i),u=e),i.value==t.currentSelectedValues[t.currentSelectedValues.length-1]&&(o=t.getTypedValue(i),d=e)}):(u=0,d=this.currentResult.indexValues.length-1,c=this.getTypedValue(this.currentResult.indexValues[u]),o=this.getTypedValue(this.currentResult.indexValues[d].value)),h.slider("values",0,u),h.slider("values",1,d),n(this.tagId).find(".index-range .label_range_min").text("("+t.secureFormatValue(c)),n(this.tagId).find(".index-range .label_range_max").text(t.secureFormatValue(o)+")")}break;default:n(this.tagId).find(".item-area ul li.indexOption").removeClass("selected"),n.each(this.currentSelectedValues,function(e,i){n(t.tagId).find(".item-area ul li.indexOption").each(function(e,t){n(this).attr("data-value")==i&&n(this).addClass("selected")})}),this.refreshSelectAll()}}},setSingleSelect:function(e){this.setDefaultOptions(),this.currentResult.itemProperties.index.singleSelect=e,e&&this.currentResult&&this.currentResult.indexValues&&this.currentResult.indexValues.length>0?this.currentSelectedValues=[this.currentResult.indexValues[0].value]:this.currentSelectedValues=[],this.redrawIndex(),this.queryOnClick(!0)},setUIFormat:function(e){this.setDefaultOptions(),this.currentResult.itemProperties.index.ui=e,this.redrawIndex()},setOrientation:function(e){this.setDefaultOptions(),this.currentResult.itemProperties.index.orientation=e,"v"==e?n(this.tagId).find(".index-list").addClass("orientation-vertical"):n(this.tagId).find(".index-list").removeClass("orientation-vertical")},setDynamic:function(e){this.setDefaultOptions(),!e&&this.currentResult.itemProperties.index.related&&(e=!0),this.currentResult.itemProperties.index.dynamic=e,this.refreshSettingChanges()},setRelated:function(e,t,i){this.setDefaultOptions(),this.currentResult.itemProperties.index.related=e,this.currentResult.itemProperties.index.related_index=void 0,e&&(this.currentResult.itemProperties.index.dynamic=e,this.currentResult.itemProperties.index.related_index=t,i&&(this.currentResult.itemProperties.index.related_table=i,n.each(this.model.getItemsModel(),function(e,i){i.currentResult&&i.currentResult.nodeId==t&&i.queryOnClick(!0)})))},setDefaultOptions:function(){this.currentResult.itemProperties.index||(this.currentResult.itemProperties.index={ui:"default",singleSelect:!1,orientation:"h",dynamic:!1,related:!1,related_index:void 0,related_table:void 0})},refreshSettingChanges:function(){this.currentResult.itemProperties.index.singleSelect?(n(this.tagId).find(".item-area .index-list ul li.indexOption").removeClass("selected"),n(this.tagId).find(".item-area .index-list ul li.indexOption").first().addClass("selected")):n(this.tagId).find(".item-area .index-list ul li.indexOption").addClass("selected"),this.queryOnClick(!0),this.refreshSelectAll()},getRelatedNoQuery:function(){var e=[];if(this.currentResult&&this.currentResult.itemProperties.index&&this.currentResult.itemProperties.index.dynamic){var t=this;n.each(this.model.getItemsModel(),function(i,r){var s=t.currentResult.nodeId;if(r.currentResult&&r.currentResult.dims&&r.currentResult.nodeId!=s){var l=!1;n.each(r.currentResult.dims,function(e,t){t.field==s&&(l=!0)}),l||n.each(r.currentResult.rows,function(e,t){t.field==s&&(l=!0)}),l||n.each(r.currentResult.columns,function(e,t){t.field==s&&(l=!0)}),l&&e.push(r.currentResult.nodeId)}})}return this.currentResult&&this.currentResult.itemProperties.index&&1==this.currentResult.itemProperties.index.related&&e.push(this.currentResult.nodeId),e},findAndQueryChildIndexes:function(){var e=!1,t=this.currentResult.nodeId,i=[];return n(this.tagId).find(".item-area .index-list ul li.indexOption.selected").each(function(e,t){i.push({selected:!0,value:n(this).attr("data-value")})}),n.each(this.model.getItemsModel(),function(n,r){r.currentResult&&r.currentResult.nodeId!=t&&"indexlist"==r.currentResult.itemType&&r.currentResult.itemProperties&&r.currentResult.itemProperties.index&&1==r.currentResult.itemProperties.index.related&&r.currentResult.itemProperties.index.related_index==t&&(e=!0,r.queryRelatedTable(t,i))}),e},queryRelatedTable:function(e,t){var i=this;clearTimeout(this.relatedTimeout),this.relatedTimeout=setTimeout(function(){if(i.currentResult.itemProperties.index.related){var r=i.currentResult.itemProperties.index.related_table,s=[{field:e,name:e,values:t}],l={field:i.currentResult.nodeId,name:i.currentResult.nodeId,values:[]};i.model.evaluateNode(r,s,[l],[],function(e){var t=[];n.each(e.series,function(e,i){i.data&&i.data.length>0&&i.data[0]>0&&t.push({selected:!1,type:"S",value:i.name})});var r={indexValues:t};i.updateValues(r),i=null})}},500)},refreshSelectAll:function(){var e=n(this.tagId).find(".item-area .index-list ul");e.find("li.indexOption").length==e.find("li.indexOption.selected").length?e.find("li.selectAll").addClass("selected"):e.find("li.selectAll").removeClass("selected")},getIndexByField:function(e){var t;if(e==this.currentNodeId){var i=[];this.currentSelectedValues&&this.currentSelectedValues.length>0&&n.each(this.currentSelectedValues,function(e,t){i.push({value:t,selected:!0})}),t={field:e,values:i}}return t},checkForRange:function(){if("range"==this.uiFormat&&this.currentResult&&this.currentResult.indexValues&&this.currentResult.indexValues.length>0&&this.currentSelectedValues&&this.currentSelectedValues.length>0){var e=this.currentSelectedValues[0],t=this.currentSelectedValues[this.currentSelectedValues.length-1],i=0,r=0;n(this.currentResult.indexValues).each(function(n,s){s.value==e&&(i=n),s.value==t&&(r=n)}),r-i+1>this.currentSelectedValues.length&&(this.currentResult.itemProperties.index.ui=this.uiFormat="default",this.redrawIndex())}},getTypedValue:function(e){return e?"N"==e.type?Number(e.value):e.value?e.value.toString():"":null},getOptionsMenu:function(){var e=this;e.currentResult&&e.currentResult.itemProperties&&(e.currentResult.itemProperties.rightTotal&&"fa fa-check-square",e.currentResult.itemProperties.bottomTotal);var t={callback:function(t){switch(t){case"_full":e.fullScreen();break;case"_knowledge":e.addDocumetation();break;case"_view_in_diagram":e.viewInDiagram()}},items:{_full:{type:"icon_text",name:(0,l.translate)("fullscreen"),iconClass:"fa fa-expand"},sep1:"---------"}};return t.items._knowledge={type:"icon_text",name:(0,l.translate)("knowledge_base"),iconClass:"fa fa-graduation-cap"},(0,l.haveAccess)("view_influence_diagram")&&(t.items._view_in_diagram={type:"icon_text",name:(0,l.translate)("view_in_diagram"),iconClass:"fa fa-sitemap"}),e.fromEmbedded&&(delete t.items._knowledge,delete t.items._view_in_diagram),t},addDocumetation:function(){var e=this;i.e(14).then(function(){var t=[i(753)];(function(t){(new t).show(e.currentNodeId)}).apply(null,t)}).catch(i.oe)}})}.apply(t,r))||(e.exports=s)}).call(this,i(1))}}]);