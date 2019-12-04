/*! Copyright Novix S.A. 2019. All rights reserved. */
(window.webpackJsonp=window.webpackJsonp||[]).push([[53,10],{2116:function(n,t,o){var e=o(690);function a(n){return n&&(n.__esModule?n.default:n)}n.exports=(e.default||e).template({1:function(n,t,e,s,l){var i=null!=t?t:n.nullContext||{},r=n.escapeExpression;return'          <div class="col-sm-3">\n              <div class="btn-toolbar tasksActions" style="display: none;">\n                  <div class="btn-group">\n                      <button class="btn btn-primary btn-small btnSaveTasks">'+r(a(o(688)).call(i,"accept",{name:"L",hash:{},data:l}))+'</button>\n                      <button class="btn btn-small btnCancel">'+r(a(o(688)).call(i,"cancel",{name:"L",hash:{},data:l}))+"</button>\n                  </div>\n              </div>\n          </div>\n"},3:function(n,t,o,e,a){return" max-height:"+n.escapeExpression(n.lambda(null!=t?t.maxHeight:t,t))+"px "},5:function(n,t,e,s,l,i,r){var p,c=null!=t?t:n.nullContext||{};return"\n"+(null!=(p=a(o(689)).call(c,null!=t?t.fromImputTemplate:t,"!=",!0,{name:"ifCond",hash:{},fn:n.program(6,l,0,i,r),inverse:n.noop,data:l}))?p:"")+"\n"+(null!=(p=e.if.call(c,null!=t?t.workflowData:t,{name:"if",hash:{},fn:n.program(9,l,0,i,r),inverse:n.noop,data:l}))?p:"")},6:function(n,t,e,s,l){var i;return"            <h5>Workflow\n"+(null!=(i=a(o(689)).call(null!=t?t:n.nullContext||{},null!=t?t.fromEmbedded:t,"==",!1,{name:"ifCond",hash:{},fn:n.program(7,l,0),inverse:n.noop,data:l}))?i:"")+"\n            </h5>\n"},7:function(n,t,o,e,a){return'              <button class="btn btn-white btn-small openWorkflow"><i class="fa fa-external-link-square"></i></button>\n              <button class="btn btn-white btn-small addTaskForNode"><i class="fa fa-plus-square"></i> Add task</button>\n'},9:function(n,t,o,e,a,s,l){var i;return'            <div class="row nomargin" style="border-style: solid; border-width:0 0 1px 0; border-color:#E0E0E0;\n            margin:0 0 5px 0 !important;">\n              <div class="col-sm-3 nopadding">\n                <strong>Task</strong>\n              </div>\n              <div class="col-sm-3">\n                <strong>Progress</strong>\n              </div>\n              <div class="col-sm-2 nopadding">\n                <strong>Status</strong>\n              </div>\n              <div class="col-sm-2">\n                <strong>Start-End</strong>\n              </div>\n              <div class="col-sm-2 nopadding text-right">\n                <strong>Responsible</strong>\n              </div>\n            </div>\n'+(null!=(i=o.each.call(null!=t?t:n.nullContext||{},null!=(i=null!=t?t.workflow:t)?i.tasks:i,{name:"each",hash:{},fn:n.program(10,a,0,s,l),inverse:n.noop,data:a}))?i:"")},10:function(n,t,e,s,l,i,r){var p,c=n.lambda,d=n.escapeExpression,u=null!=t?t:n.nullContext||{};return'\n\n              <div class="row nomargin item-task" task-id="'+d(c(null!=t?t.taskId:t,t))+'">\n                <div class="col-sm-3 nopadding">\n                    \n'+(null!=(p=a(o(689)).call(u,null!=r[1]?r[1].fromEmbedded:r[1],"==",!1,{name:"ifCond",hash:{},fn:n.program(11,l,0,i,r),inverse:n.noop,data:l}))?p:"")+"\n"+(null!=(p=a(o(689)).call(u,null!=r[1]?r[1].fromEmbedded:r[1],"==",!0,{name:"ifCond",hash:{},fn:n.program(16,l,0,i,r),inverse:n.noop,data:l}))?p:"")+"                  \n                </div>\n\n"+(null!=(p=a(o(689)).call(u,null!=r[1]?r[1].fromImputTemplate:r[1],"==",!0,{name:"ifCond",hash:{},fn:n.program(18,l,0,i,r),inverse:n.program(20,l,0,i,r),data:l}))?p:"")+"\n"+(null!=(p=a(o(689)).call(u,null!=r[1]?r[1].fromImputTemplate:r[1],"==",!0,{name:"ifCond",hash:{},fn:n.program(22,l,0,i,r),inverse:n.program(26,l,0,i,r),data:l}))?p:"")+'\n                <div class="col-sm-2">\n                '+d(c(null!=t?t.startDate:t,t))+"-"+d(c(null!=t?t.endDate:t,t))+'\n                </div>\n                <div class="col-sm-2 nopadding text-right">\n                  '+d(c(null!=t?t.userFullName:t,t))+"\n\n"+(null!=(p=a(o(689)).call(u,null!=r[1]?r[1].fromImputTemplate:r[1],"==",!0,{name:"ifCond",hash:{},fn:n.program(28,l,0,i,r),inverse:n.noop,data:l}))?p:"")+"                </div>\n              </div>\n"},11:function(n,t,e,s,l,i,r){var p;return"\n"+(null!=(p=a(o(689)).call(null!=t?t:n.nullContext||{},null!=r[2]?r[2].fromImputTemplate:r[2],"==",!0,{name:"ifCond",hash:{},fn:n.program(12,l,0,i,r),inverse:n.program(14,l,0,i,r),data:l}))?p:"")+"                      \n"},12:function(n,t,o,e,a){return'                        <span style="float:left;">\n                          '+n.escapeExpression(n.lambda(null!=t?t.title:t,t))+"\n                        </span>\n"},14:function(n,t,o,e,a){var s=n.lambda,l=n.escapeExpression;return'                        <span style="float:left; cursor:pointer;">\n                          <a class="workflowtask" data-rel="'+l(s(null!=t?t.taskId:t,t))+'">'+l(s(null!=t?t.title:t,t))+"</a>\n                        </span>\n"},16:function(n,t,o,e,a){return'                      <span style="float:left;">\n                        '+n.escapeExpression(n.lambda(null!=t?t.title:t,t))+"\n                      </span>\n"},18:function(n,t,o,e,a){return'                  <div class="col-sm-3 progress-edit">\n                    <input type="text" class="input-sm" data-rolid="1" name="progress" data-id="progress" \n                      value="'+n.escapeExpression(n.lambda(null!=t?t.percent:t,t))+'">\n                  </div>\n'},20:function(n,t,o,e,a){var s=n.lambda,l=n.escapeExpression;return'                  <div class="col-sm-3 progress-noedit">\n                    <div class="progress" style="background-color:#EFEFEF; position: relative;">\n                      <span class="sr-only">'+l(s(null!=t?t.percent:t,t))+'%</span>\n                      <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: '+l(s(null!=t?t.percent:t,t))+'%">\n\n                      </div>\n                    </div>\n                  </div>\n'},22:function(n,t,o,e,a,s,l){var i;return'\n                  <div class="col-sm-2 nopadding">\n                    <select class="form-control input-sm selStatus">\n'+(null!=(i=o.each.call(null!=t?t:n.nullContext||{},null!=t?t.transitions:t,{name:"each",hash:{},fn:n.program(23,a,0,s,l),inverse:n.noop,data:a}))?i:"")+"\n                    </select>\n                  </div>\n"},23:function(n,t,e,s,l,i,r){var p,c=n.lambda,d=n.escapeExpression;return'                        <option value="'+d(c(null!=t?t.taskStateId:t,t))+'" '+(null!=(p=a(o(689)).call(null!=t?t:n.nullContext||{},null!=r[1]?r[1].stateId:r[1],"==",null!=t?t.taskStateId:t,{name:"ifCond",hash:{},fn:n.program(24,l,0,i,r),inverse:n.noop,data:l}))?p:"")+">"+d(c(null!=t?t.name:t,t))+"</option>\n"},24:function(n,t,o,e,a){return' selected="selected" '},26:function(n,t,o,e,a){var s=n.lambda,l=n.escapeExpression;return'                  <div class="col-sm-2 nopadding">\n                    <i class="fa fa-tag" style="color:#'+l(s(null!=t?t.stateColor:t,t))+';"></i>'+l(s(null!=t?t.stateName:t,t))+"\n                  </div>\n"},28:function(n,t,o,e,a){var s=n.lambda,l=n.escapeExpression;return'                    <i class="fa fa-commenting btnComment" aria-hidden="true" task-id="'+l(s(null!=t?t.taskId:t,t))+'" task-title="'+l(s(null!=t?t.title:t,t))+'"></i>\n'},compiler:[7,">= 4.0.0"],main:function(n,t,e,s,l,i,r){var p,c=n.lambda,d=n.escapeExpression,u=null!=t?t:n.nullContext||{};return'\n\n    <div id="'+d(c(null!=t?t.id:t,t))+'" class="popover fade in '+d(c(null!=t?t.position:t,t))+" "+d(c(null!=t?t.className:t,t))+' " style="top: '+d(c(null!=t?t.top:t,t))+"px; left: "+d(c(null!=t?t.left:t,t))+'px; display: block;">\n      <div class="arrow"></div>\n\n\n      <div class="row popover-title">\n          <div class="col-sm-9 nopadding">\n              <h3>'+d(c(null!=t?t.title:t,t))+"</h3>\n          </div>\n"+(null!=(p=a(o(689)).call(u,null!=t?t.fromImputTemplate:t,"==",!0,{name:"ifCond",hash:{},fn:n.program(1,l,0,i,r),inverse:n.noop,data:l}))?p:"")+'      </div>\n\n      <div class="popover-content" style="'+(null!=(p=e.if.call(u,null!=t?t.maxHeight:t,{name:"if",hash:{},fn:n.program(3,l,0,i,r),inverse:n.noop,data:l}))?p:"")+' ">\n\n        \x3c!--<h5>Description</h5>--\x3e\n\n        '+(null!=(p=c(null!=t?t.content:t,t))?p:"")+"\n\n\n"+(null!=(p=e.if.call(u,null!=t?t.workflowEnabled:t,{name:"if",hash:{},fn:n.program(5,l,0,i,r),inverse:n.noop,data:l}))?p:"")+"\n      </div>\n\n    </div>\n\n"},useData:!0,useDepths:!0})},703:function(n,t,o){"use strict";(function(e){var a;void 0===(a=function(){return e.Controller.extend({name:"workflow",show:function(){o.e(75).then(function(){var n=[o(952)];(function(n){(new n).render()}).apply(null,n)}).catch(o.oe)},showAddTaskForNode:function(n){o.e(75).then(function(){var t=[o(952)];(function(t){(new t).render(n)}).apply(null,t)}).catch(o.oe)},showTaskModal:function(n){o.e(255).then(function(){var t=[o(1339)];(function(t){(new t).render(n)}).apply(null,t)}).catch(o.oe)},showCommentsModal:function(n){o.e(256).then(function(){var t=[o(1341)];(function(t){(new t).render(n)}).apply(null,t)}).catch(o.oe)},deleteTaskModal:function(n){o.e(257).then(function(){var t=[o(1342)];(function(t){(new t).render(n)}).apply(null,t)}).catch(o.oe)},showStatesManager:function(){o.e(258).then(function(){var n=[o(1343)];(function(n){(new n).render()}).apply(null,n)}).catch(o.oe)},showTransitionsManager:function(n){o.e(259).then(function(){var t=[o(1344)];(function(t){(new t).render(n)}).apply(null,t)}).catch(o.oe)},showTransitionsByRolManager:function(n){o.e(260).then(function(){var t=[o(1345)];(function(t){(new t).render(n)}).apply(null,t)}).catch(o.oe)},addState:function(){o.e(76).then(function(){var n=[o(955)];(function(n){(new n).render()}).apply(null,n)}).catch(o.oe)},editState:function(n){o.e(76).then(function(){var t=[o(955)];(function(t){(new t).render(n)}).apply(null,t)}).catch(o.oe)},showTaskGroupManager:function(n){o.e(261).then(function(){var t=[o(1346)];(function(t){(new t).render(n)}).apply(null,t)}).catch(o.oe)},addTaskGroup:function(){o.e(52).then(function(){var n=[o(875)];(function(n){(new n).render()}).apply(null,n)}).catch(o.oe)},addTaskGroupAsModal:function(n){o.e(52).then(function(){var t=[o(875)];(function(t){(new t).renderAsModal(n)}).apply(null,t)}).catch(o.oe)},editTaskGroup:function(n){o.e(52).then(function(){var t=[o(875)];(function(t){(new t).render(n)}).apply(null,t)}).catch(o.oe)}})}.apply(t,[]))||(n.exports=a)}).call(this,o(694))},911:function(n,t,o){"use strict";(function(e,a){var s,l,i=o(18);s=[o(2116),o(703)],void 0===(l=function(n,t){return e.View.extend({el:a("#main"),hasChanges:!1,render:function(e){var s=a.uuid();this.options.id="popover_"+s;var l=n(this.options);this.$el.append(l),this.positionPopover(),this.options.hasOwnProperty("onLoad")&&this.options.onLoad(a("#"+this.options.id));var r=this,p=a('div[id="popover_'+s+'"]'),c=a('div[id="popover_'+s+'"] .arrow');p.position().top<1&&(p.css({top:"10px"}),c.css({top:"40px"}));a("#"+this.options.id).on("updatePosition",function(){r.positionPopover()}),a("#"+this.options.id).on("hide",function(){r.removePopover()}),a("#"+this.options.id+" a.workflowtask").on("click",function(n){var o=new t,e={id:a(this).attr("data-rel"),fromDashboard:!0};o.showTaskModal(e),r.removePopover(),n.preventDefault()}),a("#"+this.options.id).find(".btnComment").on("click",function(n){var o=new t,e={id:a(this).attr("task-id"),taskTitle:a(this).attr("task-title"),fromDashboard:!1};o.showCommentsModal(e),r.removePopover(),n.preventDefault()}),a(document).on("mousedown",function n(t){var o=a("#"+r.options.id);o.is(t.target)||0!==o.has(t.target).length||(r.removePopover(),a(document).off("mousedown",n))}),!this.options.fromEmbedded&&this.options.fromImputTemplate&&(a(p).find("input[data-id='progress']").TouchSpin({min:0,max:100,step:10,decimals:0,boostat:5,maxboostedstep:10,forcestepdivisibility:"none",postfix:"%"}),a(p).find("input[data-id='progress']").on("touchspin.on.startspin",function(n){a(p).find(".tasksActions").show()}),a(p).find("input[data-id='progress']").on("keypress, change",function(n){a(p).find(".tasksActions").show()}),a(p).find(".selStatus").on("change",function(n){a(p).find(".tasksActions").show()}),a(p).find(".btnCancel").on("click",function(n){r.removePopover()}),a(p).find(".btnSaveTasks").on("click",function(n){var t=r;o.e(33).then(function(){var n=[o(707)];(function(n){var o={values:[]};a("#"+r.options.id).find(".item-task").each(function(n,t){var e={taskId:a(t).attr("task-id"),percent:a(t).find('input[data-id="progress"]').val(),stateId:a(t).find(".selStatus").val()};o.values.push(e)}),(new n).updateTasksProperty(o,function(n){(0,i.showMessage)((0,i.translate)("task_updated"),"Success","success",!0),t.options.onSaveCallback()})}).apply(null,n)}).catch(o.oe)}))},setContent:function(n){a("#"+this.options.id).find(".popover-content").html(n),this.positionPopover()},removePopover:function(){a("#"+this.options.id).remove()},positionPopover:function(){var n=a("#navigation").height(),t="top",o=a("#"+this.options.id),e=o.width(),s=o.height();switch(this.options.top-s-n<0&&(t="bottom"),this.options.left>e?t="left":this.options.left+e<a(window).width()?t="right":e<a(window).width()?(this.options.left=0,t="right"):(this.options.left=0,t="right",o.removeClass(this.options.className),o.css("maxWidth"," "),o.css("maxWidth",(.9*a(window).width()|0)+"px"),o.css("width"," "),o.css("width",(.9*a(window).width()|0)+"px")),o.removeClass("top").removeClass("left").removeClass("right").removeClass("bottom"),o.addClass(t),t){case"top":o.css("top",this.options.top-s-n+"px"),o.css("left",this.options.left-e/2+"px");break;case"bottom":o.css("top",this.options.top-n+"px"),o.css("left",this.options.left-e/2+"px");break;case"left":o.css("top",this.options.top-s/2-n+"px"),o.css("left",this.options.left-e-10+"px");break;case"right":o.css("top",this.options.top-s/2-n+"px"),o.css("left",this.options.left+10+"px")}}})}.apply(t,s))||(n.exports=l)}).call(this,o(218),o(1))}}]);