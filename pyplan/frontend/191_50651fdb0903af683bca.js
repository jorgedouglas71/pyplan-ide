/*! Copyright Novix S.A. 2019. All rights reserved. */
(window.webpackJsonp=window.webpackJsonp||[]).push([[191],{1101:function(t,e,r){"use strict";(function(i,s){var o,n,a=r(18);o=[r(732)],void 0===(n=function(t){return t.extend({preEvaluateNode:function(t,e,r,i){this.ensureOneRow(e,r,i)},drawChart:function(t){var e=this,r=this.currentResult;this.applyDefaultProperties(r.itemProperties),r.nodeResult&&this.applyStyleSeries(r.nodeResult);var s=i.extend(r.itemProperties.tooltip,{formatter:function(){return e.formatTooltip(this)}}),o={chart:{type:"funnel",marginRight:100,zoomType:r.itemProperties.hasOwnProperty("zoom")&&r.itemProperties.zoom?"x":"none",reflow:!1,marginBottom:20,events:{drillup:function(t){e.drillup(t)}}},plotOptions:{series:{dataLabels:{enabled:this.ensureProp(r.itemProperties.labels,"enabled",!1),inside:r.itemProperties.labels.inside,color:"#000000",connectorColor:"#000000",style:this.getLabelStyle(),formatter:function(){return e.formatLabel(this)}},neckWidth:"30%",neckHeight:"25%",events:{click:function(t){e.drilldown(t)}}}},title:{floating:!0,text:""},subtitle:{text:r.itemProperties.subtitle.text},credits:{enabled:!1},navigation:{buttonOptions:{enabled:!1}},tooltip:s,series:r.nodeResult?this.sumarize(r.nodeResult):null};o=i.extend({},o,this.getExtraChartOptions(o)),i(t).highcharts(o)},applyDefaultProperties:function(t){t.labels||(t.labels={enabled:!0,inside:!1})},updateValues:function(t){for(this.currentResult.itemProperties.emptyTotal&&this.filterEmptyData(t),this.chart.xAxis.length>0&&this.chart.xAxis[0].setCategories(t.columns.categories,!1);this.chart.series.length;)this.chart.series[0].remove(!1);t&&(t.series.length>200&&(t.series=t.series.slice(0,200)),this.applyColorSeries(t.series));var e=this.sumarize(t);this.chart.addSeries(e,!1,!1);for(var r=0;r<this.chart.series[0].data.length;r++)t.series[r].color&&(this.chart.series[0].data[r].color=t.series[r].color);this.chart.redraw(),this.addHideAllButton(),this.isReady=!0},positionHideAllButton:function(){i(this.tagId).find(".item-area .showhideserie").hide()},sumarize:function(t){for(var e={name:this.currentResult.itemProperties.title.text,data:[[]]},r=0;r<t.series.length;r++){var i=[],s="";t.series[r].name&&(s=t.series[r].name.toString()),i.splice(0,1,s),i.splice(1,1,t.series[r].data.reduce(function(t,e){return t+e})),e.data.splice(r,1,i)}return e},setPositionForDropDetails:function(){var t=i(this.tagId).find(".drop-area");t.find(".for-column").hide();var e=t.find(".for-row");e.find("span").text((0,a.translate)("drop_serie_here")),e.css("left","10px").css("top","30px"),e.width(t.width()-20),e.height(t.height()-70)},getCategoryDrilldown:function(t){return this.drilldownData&&this.drilldownData.length>0?t.point.name:"Total"},getSerieDrilldown:function(t){return this.drilldownData&&this.drilldownData.length>0?t.point.series.name:t.point.name},formatLabel:function(t){this.createFormatter();var e=t.key;return this.rowFormatter&&(e=this.rowFormatter.format(e)),"<b>"+e+"</b>: "+this.numberFormatter.format(t.point.percentage)+" %"},formatTooltip:function(t){this.createFormatter();var e=t.key;return this.rowFormatter&&(e=this.rowFormatter.format(e)),'<span style="color:'+t.point.color+'">●</span> '+e+": <b>"+this.numberFormatter.format(t.y)+"</b> ("+s.numberFormat(t.point.percentage)+"%)<br/>"}})}.apply(e,o))||(t.exports=n)}).call(this,r(1),r(26))}}]);