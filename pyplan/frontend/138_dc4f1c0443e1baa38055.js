/*! Copyright Novix S.A. 2019. All rights reserved. */
(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{813:function(e,t,r){"use strict";(function(i,s){var a,n,o=r(18);a=[r(729)],void 0===(n=function(e){return e.extend({preEvaluateNode:function(e,t,r,i){},drawChart:function(e){var t=this,r=this.currentResult;this.applyDefaultProperties(r.itemProperties),r.nodeResult&&this.applyStyleSeries(r.nodeResult);var a=i.extend(r.itemProperties.tooltip,{formatter:function(){return t.formatTooltip(this)}}),n=s.theme.extraStyles.chartLabels.fontSize.replace("px","");this.maxScaleFactorW>1&&(n*=this.maxScaleFactorW);var o={chart:{type:"pie",zoomType:r.itemProperties.hasOwnProperty("zoom")&&r.itemProperties.zoom?"x":"none",reflow:!1,marginBottom:20,events:{drillup:function(e){t.drillup(e)}}},plotOptions:{pie:{allowPointSelect:!0,innerSize:r.itemProperties.hasOwnProperty("donut")&&r.itemProperties.donut?"60%":"0",cursor:"pointer",showInLegend:!0,point:{events:{legendItemClick:function(e){t.legendClick(e)}}}},series:{dataLabels:{enabled:this.ensureProp(r.itemProperties.labels,"enabled",!1),inside:r.itemProperties.labels.inside,color:"#000000",connectorColor:"#000000",style:{fontSize:n,color:"contrast",fontWeight:"normal",textShadow:"none",width:r.itemProperties.hasOwnProperty("dataLabelsWidth")?r.itemProperties.dataLabelsWidth:""},formatter:function(){return t.formatLabel(this)}},events:{click:function(e){t.drilldown(e)}}}},title:{floating:!0,text:""},subtitle:{text:r.itemProperties.subtitle.text},credits:{enabled:!1},navigation:{buttonOptions:{enabled:!1}},tooltip:a,legend:this.getChartLegend(r.itemProperties.legend),series:r.nodeResult?this.sumarize(r.nodeResult):null};o=i.extend({},o,this.getExtraChartOptions(o)),i(e).highcharts(o)},applyDefaultProperties:function(e){e.labels||(e.labels={enabled:!0,inside:!1})},updateValues:function(e){for(this.currentResult.itemProperties.emptyTotal&&this.filterEmptyData(e),this.chart.xAxis.length>0&&this.chart.xAxis[0].setCategories(e.columns.categories,!1);this.chart.series.length;)this.chart.series[0].remove(!1);e&&(e.series.length>2e3&&(e.series=e.series.slice(0,2e3)),this.applyColorSeries(e.series));var t=this.sumarize(e);if(e)if(e.indexOnColumn){var r=this.createSecondSerie(e);this.chart.addSeries(r,!1,!1),this.preventDrilldown=!0}else this.preventDrilldown=!1;if(this.chart.addSeries(t,!1,!1),this.applyColorSeriesToChart(e),this.applyAxisTitles(),e&&e.indexOnColumn)try{this.chart.legend.group.hide(),this.chart.legend.box.hide(),this.chart.legend.pager.hide(),this.chart.legend.nav.hide(),this.chart.legend.display=!1}catch(e){}if(this.chart.redraw(),this.addHideAllButton(),this.isReady=!0,e&&e.indexOnColumn)try{this.chart.legend.group.hide(),this.chart.legend.box.hide(),this.chart.legend.pager.hide(),this.chart.legend.nav.hide(),this.chart.legend.display=!1}catch(e){}},setLabelsWidth:function(e){this.currentResult.itemProperties.dataLabelsWidth=e,this.recreateChart()},updateSize:function(e,t,r){if(void 0!=this.chart&&i(this.tagId).length>0&&(void 0==e&&(e=i(this.tagId).find(".item-area").width()),void 0==t&&(t=i(this.tagId).find(".item-area").height()),void 0==r&&(r=!1),this.chart.setSize(e,t-3,r),this.positionHideAllButton(),this.chart&&this.preventDrilldown))try{this.chart.legend.group.hide(),this.chart.legend.box.hide(),this.chart.legend.pager.hide(),this.chart.legend.nav.hide(),this.chart.legend.display=!1}catch(e){}},sumarize:function(e){var t={name:this.currentResult.itemProperties.title.text,data:[[]]};e.indexOnColumn&&(t.size="60%",t.dataLabels={distance:-30});for(var r=0;r<e.series.length;r++){var i=[],s="";e.series[r].name&&(s=e.series[r].name.toString()),i.splice(0,1,s),i.splice(1,1,e.series[r].data.reduce(function(e,t){return e+t})),t.data.splice(r,1,i)}return t},createSecondSerie:function(e){for(var t={name:e.indexOnColumn,data:[],innerSize:"60%",size:"80%"},r=0;r<e.series.length;r++)for(var i=e.series[r],s=0;s<i.data.length;s++){var a={name:e.columns.categories[s],y:i.data[s]};t.data.push(a)}return t},setPositionForDropDetails:function(){var e=i(this.tagId).find(".drop-area"),t=e.find(".for-row"),r=e.find(".for-column");t.find("span").text((0,o.translate)("drop_serie_here")),r.find("span").text((0,o.translate)("drop_second_serie_here")),t.css("left","10px").css("top","30px"),t.width(e.width()-20),t.height(e.height()-150),r.css("left","10px").css("top",e.height()-150+30+"px"),r.width(e.width()-20),r.height(90)},getCategoryDrilldown:function(e){return this.drilldownData&&this.drilldownData.length>0?e.point.name:"Total"},getSerieDrilldown:function(e){return this.drilldownData&&this.drilldownData.length>0?e.point.series.name:e.point.name},formatLabel:function(e){this.createFormatter();var t=e.key;if(this.rowFormatter&&(t=this.rowFormatter.format(t)),e.series.chart.series.length<2)return"<b>"+t+"</b>: "+this.numberFormatter.format(e.point.percentage)+" %";if(e.series.chart.series[0]!=e.series)return"<b>"+t+"</b>: "+this.numberFormatter.format(e.point.percentage)+" %";try{var r=Math.floor(e.point.index/(e.series.points.length/e.series.chart.series[1].points.length)),i=100*e.y/e.series.chart.series[1].points[r].y;return"<b>"+t+"</b>: "+this.numberFormatter.format(i)+" %"}catch(r){return"<b>"+t+"</b>: "+this.numberFormatter.format(e.point.percentage)+" %"}},formatTooltip:function(e){this.createFormatter();var t=e.key;if(this.rowFormatter&&(t=this.rowFormatter.format(t)),e.series.chart.series.length<2)return'<span style="color:'+e.point.color+'">●</span> '+t+": <b>"+this.numberFormatter.format(e.y)+"</b> ("+s.numberFormat(e.point.percentage)+"%)<br/>";if(e.series.chart.series[0]!=e.series)return'<span style="color:'+e.point.color+'">●</span> '+t+": <b>"+this.numberFormatter.format(e.y)+"</b> ("+s.numberFormat(e.point.percentage)+"%)<br/>";try{var r=Math.floor(e.point.index/(e.series.points.length/e.series.chart.series[1].points.length)),i=100*e.y/e.series.chart.series[1].points[r].y;return'<span style="color:'+e.point.color+'">●</span> '+t+": <b>"+this.numberFormatter.format(e.y)+"</b> ("+s.numberFormat(i)+"%)<br/>"}catch(r){return'<span style="color:'+e.point.color+'">●</span> '+t+": <b>"+this.numberFormatter.format(e.y)+"</b> ("+s.numberFormat(e.point.percentage)+"%)<br/>"}},applyColorSeriesToChart:function(e){if(this.chart.series.length>0)if(1==this.chart.series.length)for(var t=0;t<this.chart.series[0].data.length;t++)e.series[t].color&&(this.chart.series[0].data[t].color=e.series[t].color);else{for(t=0;t<this.chart.series[1].data.length;t++)e.series[t].color&&(this.chart.series[1].data[t].color=e.series[t].color);var r=e.columns.categories.length;if(r>0)for(var i,a,n=-1,o=0;o<this.chart.series[0].data.length;o++)o%r==0&&(++n<this.chart.series[1].data.length&&(i=this.chart.series[1].data[n].color),a=.2),this.chart.series[0].data[o].color=s.Color(i).brighten(a).get(),a=.2-(o+1-r*n)/r/__customer.deltaBrightness}}})}.apply(t,a))||(e.exports=n)}).call(this,r(1),r(26))}}]);