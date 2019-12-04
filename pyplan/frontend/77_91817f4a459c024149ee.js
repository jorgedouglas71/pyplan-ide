/*! Copyright Novix S.A. 2019. All rights reserved. */
(window.webpackJsonp=window.webpackJsonp||[]).push([[77,41,301],{1347:function(e,n,t){"use strict";(function(a,o,l,s){var i,c,r=t(18);i=[t(684),t(744),t(738),t(219),t(721),t(2088)],void 0===(c=function(e,n,i,c,d,p){return a.View.extend({el:o("#main"),taskSchedulerCtrl:new n,initialize:function(){},render:function(e){o('.container-fluid.mainTask[data-rel="run-model-task"]').remove();var n=this,a=p();this.$el.append(a);var s="run-model-task",i="New model task";(0,r.postRender)(o('.container-fluid.mainTask[data-rel="run-model-task"]')),this.instanceTable(),e&&(i="Edit model task",this.fillForm(e)),Promise.resolve().then(function(){var e=[t(684)];(function(e){(new e).hideAllTasks(),(new e).addSimpleTask(s,i),(new e).selectTask(s,i)}).apply(null,e)}).catch(t.oe);var c=o(".run-model-task-content");function d(){var e=o(window).height();e-=95,c.height(e-(o(".page-header").height()+20))}o(window).resize(d),d(),o(".txtInstances").TouchSpin({min:1,max:50,step:1,decimals:0,boostat:5,maxboostedstep:10,forcestepdivisibility:"none"}),o(".datepick").length>0&&o(".datepick").each(function(){var n=o(this);n.datepicker({format:"yyyy-mm-dd"}),e||n.datepicker("setValue",l().format("YYYY-MM-DD")),n.on("changeDate",function(){n.datepicker("hide")})}),o(".timepick").length>0&&o(".timepick").timepicker({minuteStep:1,template:"dropdown",showMeridian:!1,maxHours:24,showSeconds:!0}),o(".btn-add-node").attr("disabled",!0),o(".selScheduleType").on("change",function(e){return n.triggerChange(e.currentTarget.value,n),!1}),o(".task-log-btn").on("click",function(){return n.showTaskLog(event,n),!1}),o(".btn-open-model-selector").on("click",function(){return n.openModelSelector(n),!1}),o(".btn-add-node").on("click",function(){return n.addNode(n),!1}),o(".selOnDone").on("change",function(e){return n.onDoneChange(e.currentTarget.value,n),!1}),o(".save").on("click",function(){return n.save(n,e),!1}),o(".cancel").on("click",function(){return n.cancel(n),!1}),o(".add-param").on("click",function(e){return n.openParamModal(null,n,e),!1}),o("div[data-rel='run-model-task']").find("div.abm-top-options a.btn-close").on("click",this.close);var u=o("#right-column").height();o("#tree-container").height(u),this.getBase().on("removeView",function(){n.onRemoveView()}),this.getBase().on("beforeRemoveView",function(e,t){n.onBeforeRemoveView(e,t)}),this.fillUsers(e)},close:function(){Promise.resolve().then(function(){var e=[t(684)];(function(e){(new e).removeTask("run-model-task")}).apply(null,e)}).catch(t.oe)},cancel:function(e){e.taskSchedulerCtrl.listTasks("model-tasks"),e.close()},fillForm:function(e){var n=JSON.parse(e.kwargs);if(this.getBase().find(".txtTaskName").val(e.name),this.getBase().find(".txtModelPath").val(n.model_path),this.getBase().find(".txtNodes").val(n.node_id),e.enabled?this.getBase().find(".chkEnabledTask").iCheck("check"):this.getBase().find(".chkEnabledTask").iCheck("uncheck"),this.getBase().find(".chkEnabledTask").iCheck("update"),n.on_done?(this.getBase().find(".selOnDone").val(n.on_done.action),this.getBase().find(".txtInstances").val(n.on_done.instances),this.onDoneChange(n.on_done.action,this),this.getBase().find(".selUser").val(n.on_done.usercompany_id)):(this.getBase().find(".selOnDone").val("close_model"),this.onDoneChange("close_model",this)),e.interval)this.getBase().find(".selScheduleType").val("interval"),this.triggerChange("interval"),this.getBase().find(".txtEvery").val(e.interval.every),this.getBase().find(".selPeriod").val(e.interval.period);else if(e.crontab){var t=e.crontab.split(" ");this.getBase().find(".selScheduleType").val("crontab"),this.triggerChange("crontab"),this.getBase().find(".txtMinutes").val(t[0]),this.getBase().find(".txtHours").val(t[1]),this.getBase().find(".txtDayOfWeek").val(t[2]),this.getBase().find(".txtDayOfMonth").val(t[3]),this.getBase().find(".txtMonthOfYear").val(t[4]),this.getBase().find(".selTimezone").val(t[6])}else this.getBase().find(".selScheduleType").val("clocked"),this.triggerChange("clocked"),this.getBase().find(".datepick").val(e.clocked.split(" ")[0]),this.getBase().find(".timepick").val(e.clocked.split(" ")[1]);if(null!==n.params)for(var a in n.params)this.$el.find(".paramList").DataTable().row.add(n.params[a]).draw()},triggerChange:function(e,n){o(".formScheduleType").hide(),o(".form-".concat(e)).show()},fillUsers:function(e){var n=o("div[data-rel=run-model-task]"),t=e?JSON.parse(e.kwargs):null;(new d).listByCompany(function(a){var l=n.find("select[id='selUser']");l.empty(),o.each(a,function(e,n){o("<option></option>").attr("value",n.user_company_id).text(n.first_name+""+n.last_name).appendTo(l)}),e&&t.on_done&&o("#selUser").select2("val",t.on_done.usercompany_id.toString())})},openModelSelector:function(e){this.taskSchedulerCtrl.showOpenModelSelector(function(e){s.some([".ana",".cbpy",".ppl"],function(n){return e.toLowerCase().includes(n)})?(o(".model-path").val(e),o(".help-block").html("")):(o(".model-path").val(""),o(".help-block").html("You should select a model file type"))})},instanceTable:function(){var e,n=this.$el.find(".paramList"),t=this,a=n.DataTable();a.clear(),a.destroy(),e=n.DataTable({searching:!1,paging:!1,ordering:!1,info:!1,columns:[{data:"paramType"},{data:"name"},{data:"label"},{data:"defaultValue"},{data:null}],columnDefs:[{width:"15%",targets:-1,defaultContent:'<button class="btn btn-small btn-primary edit-param" rel="tooltip" title="" data-original-title="'+(0,r.translate)("_edit_param")+'"> <i class="fa fa-pencil"></i></button><button class="btn btn-small btn-red remove-param" rel="tooltip" title="" data-original-title="'+(0,r.translate)("_delete_param")+'"> <i class="fa fa-trash"></i></button>'}]}),t.$el.find(".paramList tbody").on("click","button.edit-param",function(n){var a=e.row(o(this).parents("tr")).data();a.indexTable=e.row(o(this).parents("tr")).index(),t.openParamModal(a,t,n),n.preventDefault()}),t.$el.find(".paramList tbody").on("click","button.remove-param",function(n){var t=e.row(o(this).parents("tr")).index();e.row(t).remove().draw(),n.preventDefault()})},onAddParam:function(e,n){var t=n;null!==e.indexTable?t.$el.find(".paramList").DataTable().row(e.indexTable).data(e).draw():t.$el.find(".paramList").DataTable().row.add(e).draw()},openParamModal:function(e,n,a){n=n;return t.e(89).then(function(){var a=[t(1360)];(function(t){(new t).render(e,n,n.onAddParam)}).apply(null,a)}).catch(t.oe),a.preventDefault(),!1},addNode:function(e){!function(n,a,o){t.e(31).then(function(){var a=[t(928)];(function(t){(new t).show(n,{callback:o,parallelToken:e.parallelToken,filteredClasses:["decision","variable","chance","objective","index","constant","function","button"]})}).apply(null,a)}).catch(t.oe)}(event,0,function(e){var n=e.nodeId;e.nodeClass;o(".tagsinput").addTag(n)})},onDoneChange:function(e,n){"keep_for_everyone"===e?(o(".instances-selector-group").show(),o(".user-selector-group").hide()):"keep_for_user"===e?(o(".instances-selector-group").hide(),o(".user-selector-group").show()):(o(".instances-selector-group").hide(),o(".user-selector-group").hide())},save:function(e,n){e=this;if(!this.getBase().find(".form-horizontal").valid())return!1;var t={task:"app.pyplan.scheduler.tasks.run_model_node",name:o(".txtTaskName").val()};o(".chkEnabledTask").prop("checked")||(t.enabled=!1);var a={usercompany_id:__currentSession.userCompanyId,company_id:__currentSession.companyId,model_path:o(".txtModelPath").val(),node_id:o(".txtNodes").val(),on_done:{action:o(".selOnDone").val()}};"keep_for_everyone"===o(".selOnDone").val()?a.on_done.instances=o(".txtInstances").val():"keep_for_user"===o(".selOnDone").val()?a.on_done.usercompany_id=o(".selUser").select2("val"):delete a.on_done;var l,s=o(".selScheduleType").val(),c={type:s};switch(s){case"interval":c.period=o(".selPeriod").val(),c.every=o(".txtEvery").val();break;case"crontab":c.minute=o(".txtMinutes").val(),c.hour=o(".txtHours").val(),c.day_of_week=o(".txtDayOfWeek").val(),c.day_of_month=o(".txtDayOfMonth").val(),c.month_of_year=o(".txtMonthOfYear").val(),c.timezone=o(".selTimezone").val();break;case"clocked":c.clocked_time=o(".datepick").val()+" "+o(".timepick").val()}a.params={};for(var d=0;d<this.$el.find(".paramList").DataTable().data().length;d++)delete(l=this.$el.find(".paramList").DataTable().row(d).data()).indexTable,a.params[l.name]=l;t.kwargs=a,t.schedule=c;var p=new i;return n?(t.id=n.id,p.edit(t,function(n){e.taskSchedulerCtrl.listTasks("model-tasks"),e.close()},function(e){(0,r.showMessage)((0,r.translate)("must_select_scheduler_type"),"Error","error",!0)})):p.create(t,function(n){e.taskSchedulerCtrl.listTasks("model-tasks"),e.close()},function(e){(0,r.showMessage)((0,r.translate)("must_select_scheduler_type"),"Error","error",!0)}),!1},getBase:function(){return this.$el.find(".mainTask[data-rel='run-model-task']")},onRemoveView:function(){this.el=o("#main")},onBeforeRemoveView:function(e,n){this.$el.find(".mainTask[data-rel='run-model-task']").remove()}})}.apply(n,i))||(e.exports=c)}).call(this,t(218),t(1),t(134),t(220))},2088:function(e,n,t){var a=t(690);function o(e){return e&&(e.__esModule?e.default:e)}e.exports=(a.default||a).template({compiler:[7,">= 4.0.0"],main:function(e,n,a,l,s){var i=null!=n?n:e.nullContext||{},c=e.escapeExpression;return'<div class="abm-base-tmp container-fluid mainTask" data-rel="run-model-task" data-type="tab-content">\n\n  \x3c!-- LIST VIEW --\x3e\n\n  <div class="box run-model-task-content">\n    <div class="box-title">\n      <h3><i class="fa fa-th-list"></i>Schedule Model task</h3>\n      <div class="actions abm-top-options">\n        <a href="#" class="btn btn-close"><i class="fa fa-times"></i></a>\n      </div>\n    </div>\n    <div class="box-content abm-content">\n\n\n      <ul class="tabs tabs-inline tabs-top" style="border-color: #DDD; border-width: 0 0 1px 0; border-style: solid;">\n        <li class="active">\n          <a href="#run-model-1" data-toggle="tab">\n            <i class="fa fa-clock"></i>General</a>\n        </li>\n        <li>\n          <a href="#run-model-2" data-toggle="tab">\n            <i class="fa fa-lock"></i>Scheduler</a>\n        </li>\n        <li>\n          <a href="#run-model-3" data-toggle="tab">\n            <i class="fa fa-list-alt"></i>Params</a>\n        </li>\n      </ul>\n\n      <form action="#" id="stateForm" method="POST" class="form-horizontal form-bordered form-validate">\n        <div class="tab-content padding tab-content-inline tab-content-bottom">\n\n          \x3c!-- START TAB 1 --\x3e\n          <div class="tab-pane active" id="run-model-1">\n            <div class="row">\n              <div class="col-sm-6">\n                <div class="form-group">\n                  <label for="textfield" class="control-label col-sm-4">Task name</label>\n                  <div class="col-sm-8">\n                    <input type="text" class="form-control txtTaskName" data-rule-required="true">\n                  </div>\n                </div>\n\n                <div class="form-group">\n                  <label for="textfield" class="control-label col-sm-4">Model path</label>\n                  <div class="col-sm-8">\n                    <div class="input-group">\n                      <input type="text" class="model-path form-control txtModelPath" disabled="true"\n                        data-rule-required="true">\n                      <div class="input-group-btn">\n                        <a href="#" class="btn username-check-force btn-open-model-selector">\n                          <i class="fa fa-plus"></i>\n                        </a>\n                      </div>\n                    </div>\n\n                  </div>\n                </div>\n\n                <div class="form-group">\n                  <label for="textfield" class="control-label col-sm-4">Node to evaluate</label>\n                  <div class="col-sm-8">\n                    <input type="text" class="tagsinput txtNodes form-control" data-rule-required="true">\n                    \x3c!--div class="input-group">\n                      <input type="text" id="txtNodesinput" class="tagsinput form-control" value="">\n                      <div class="input-group-btn">\n                        <button class="btn btn-add-node" type="button" style="display:none;">\n                          ...\n                          <i class="fa fa-spinner fa-spin" style="display:none;"></i>\n                        </button>\n                      </div>\n                    </div--\x3e\n                  </div>\n                </div>\n\n                <div class="form-group">\n                  <label for="textfield" class="control-label col-sm-4">Enabled</label>\n                  <div class="col-sm-8">\n                    <input type="checkbox" class=\'icheck-me all chkEnabledTask\' name="enabledTask" data-skin="square"\n                      data-color="blue" checked />\n                  </div>\n                </div>\n\n                <div class="form-group">\n                  <label for="textfield" class="control-label col-sm-4">Action on done</label>\n                  <div class="col-sm-8">\n                    <select name="selOnDone" id="selOnDone" class="form-control selOnDone">\n                      <option value="close_model">Close model</option>\n                      <option value="keep_for_user">Keep for user</option>\n                      <option value="keep_for_everyone">Keep available for everyone</option>\n                    </select>\n                  </div>\n                </div>\n\n                <div class="form-group user-selector-group" style="display:none;">\n                  <label for="textfield" class="control-label col-sm-4">User</label>\n                  <div class="col-sm-8">\n                    <select name="selUser" id="selUser" class="select2-me selUser" style="width:250px;">\n                    </select>\n                  </div>\n                </div>\n\n                <div class="form-group instances-selector-group" style="display:none;">\n                  <label for="textfield" class="control-label col-sm-4">Instances</label>\n                  <div class="col-sm-8">\n                    <div class="col-sm-2">\n                      <input type="text" placeholder="" class="form-control txtInstances" value="1">\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          \x3c!-- END TAB 1 --\x3e\n\n          \x3c!-- START TAB 2 --\x3e\n          <div class="tab-pane" id="run-model-2">\n            <div class="row">\n              <div class="col-sm-6">\n                <div class="form-group">\n                  <label for="textfield" class="control-label col-sm-4">Type</label>\n                  <div class="col-sm-8">\n                    <select class="form-control selScheduleType">\n                      <option value="">Select type</option>\n                      <option value="interval">Interval</option>\n                      <option value="crontab">Crontab</option>\n                      \x3c!--option value="Solar">Solar</option--\x3e\n                      <option value="clocked">Clocked</option>\n                    </select>\n                  </div>\n                </div>\n\n                \x3c!-- INTERVAL --\x3e\n                <div class="formScheduleType form-interval" style="display: none;">\n                  <div class="form-group date-time">\n                    <label for="textfield" class="control-label col-sm-4">Every</label>\n                    <div class="col-sm-8">\n                      <div class="col-sm-3">\n                        <input type="text" class="form-control txtEvery">\n                      </div>\n                    </div>\n                  </div>\n\n                  <div class="form-group">\n                    <label for="textfield" class="control-label col-sm-4">Period</label>\n                    <div class="col-sm-8">\n                      <select class="form-control selPeriod">\n                        <option value="days">Days</option>\n                        <option value="hours">Hours</option>\n                        <option value="minutes">Minutes</option>\n                        <option value="seconds">Seconds</option>\n                        <option value="microseconds">Microseconds</option>\n                      </select>\n                    </div>\n                  </div>\n                </div>\n\n                \x3c!-- CRONTAB --\x3e\n                <div class="formScheduleType form-crontab" style="display: none;">\n                  <div class="form-group date-time">\n                    <label class="control-label col-sm-4">Minutes</label>\n                    <div class="col-sm-8">\n                      <div class="col-sm-3">\n                        <input type="text" class="form-control txtMinutes">\n                      </div> <br><br>\n                      <span class="help-block">Use * for \'all\'. (Example: 0,30)\') | possible values = 0..59</span>\n                    </div>\n                  </div>\n                  <div class="form-group">\n                    <label class="control-label col-sm-4">Hours</label>\n                    <div class="col-sm-8">\n                      <div class="col-sm-3">\n                        <input type="text" class="form-control txtHours">\n                      </div> <br><br>\n                      <span class="help-block">Use * for \'all\'. (Example: 8,20)\') | possible values = 0..23</span>\n                    </div>\n                  </div>\n                  <div class="form-group">\n                    <label class="control-label col-sm-4">Day of week</label>\n                    <div class="col-sm-8">\n                      <div class="col-sm-3">\n                        <input type="text" class="form-control txtDayOfWeek">\n                      </div> <br><br>\n                      <span class="help-block">Use * for \'all\'. (Example: 0,5)\') | possible values = 0..6</span>\n                    </div>\n                  </div>\n                  <div class="form-group">\n                    <label class="control-label col-sm-4">Day of month</label>\n                    <div class="col-sm-8">\n                      <div class="col-sm-3">\n                        <input type="text" class="form-control txtDayOfMonth">\n                      </div> <br><br>\n                      <span class="help-block">Use * for \'all\'. (Example: 1,15)\') | possible values = 1..31</span>\n                    </div>\n                  </div>\n                  <div class="form-group">\n                    <label class="control-label col-sm-4">Month of year</label>\n                    <div class="col-sm-8">\n                      <div class="col-sm-3">\n                        <input type="text" class="form-control txtMonthOfYear">\n                      </div><br><br>\n                      <span class="help-block">Use * for \'all\'. (Example: 0,6)\') | possible values = 0..11</span>\n                    </div>\n                  </div>\n                  <div class="form-group">\n                    <label class="control-label col-sm-4">Timezone</label>\n                    <div class="col-sm-8">\n                      <select type="text" class="form-control selTimezone">\n                        <option value="Etc/GMT">Etc/GMT</option>\n                        <option value="Etc/GMT+0">Etc/GMT+0</option>\n                        <option value="Etc/GMT+1">Etc/GMT+1</option>\n                        <option value="Etc/GMT+10">Etc/GMT+10</option>\n                        <option value="Etc/GMT+11">Etc/GMT+11</option>\n                        <option value="Etc/GMT+12">Etc/GMT+12</option>\n                        <option value="Etc/GMT+2">Etc/GMT+2</option>\n                        <option value="Etc/GMT+3">Etc/GMT+3</option>\n                        <option value="Etc/GMT+4">Etc/GMT+4</option>\n                        <option value="Etc/GMT+5">Etc/GMT+5</option>\n                        <option value="Etc/GMT+6">Etc/GMT+6</option>\n                        <option value="Etc/GMT+7">Etc/GMT+7</option>\n                        <option value="Etc/GMT+8">Etc/GMT+8</option>\n                        <option value="Etc/GMT+9">Etc/GMT+9</option>\n                        <option value="Etc/GMT-0">Etc/GMT-0</option>\n                        <option value="Etc/GMT-1">Etc/GMT-1</option>\n                        <option value="Etc/GMT-10">Etc/GMT-10</option>\n                        <option value="Etc/GMT-11">Etc/GMT-11</option>\n                        <option value="Etc/GMT-12">Etc/GMT-12</option>\n                        <option value="Etc/GMT-13">Etc/GMT-13</option>\n                        <option value="Etc/GMT-14">Etc/GMT-14</option>\n                        <option value="Etc/GMT-2">Etc/GMT-2</option>\n                        <option value="Etc/GMT-3">Etc/GMT-3</option>\n                        <option value="Etc/GMT-4">Etc/GMT-4</option>\n                        <option value="Etc/GMT-5">Etc/GMT-5</option>\n                        <option value="Etc/GMT-6">Etc/GMT-6</option>\n                        <option value="Etc/GMT-7">Etc/GMT-7</option>\n                        <option value="Etc/GMT-8">Etc/GMT-8</option>\n                        <option value="Etc/GMT-9">Etc/GMT-9</option>\n                        <option value="Etc/GMT0">Etc/GMT0</option>\n                        <option value="Etc/Greenwich">Etc/Greenwich</option>\n                        <option value="Etc/UCT">Etc/UCT</option>\n                        <option value="Etc/UTC">Etc/UTC</option>\n                        <option value="Etc/Universal">Etc/Universal</option>\n                        <option value="Etc/Zulu">Etc/Zulu</option>\n                      </select>\n                    </div>\n                  </div>\n                </div>\n\n                \x3c!-- SOLAR --\x3e\n                <div class="formScheduleType formSolar" style="display: none;">\n                  <div class="form-group">\n                    <label for="textfield" class="control-label col-sm-4">Event</label>\n                    <div class="col-sm-8">\n                      <select name="selEvent" class="form-control">\n                        <option value="dawn_astronomical">dawn_astronomical</option>\n                        <option value="dawn_civil">dawn_civil</option>\n                        <option value="dawn_nautical">dawn_nautical</option>\n                        <option value="dusk_astronomical">dusk_astronomical</option>\n                        <option value="dusk_civil">dusk_civil</option>\n                        <option value="dusk_nautical">dusk_nautical</option>\n                        <option value="solar_noon">solar_noon</option>\n                        <option value="sunrise">sunrise</option>\n                        <option value="sunset">sunset</option>\n                      </select>\n                    </div>\n                  </div>\n                  <div class="form-group">\n                    <label class="control-label col-sm-4">Latitude</label>\n                    <div class="col-sm-8">\n                      <input type="text" class="form-control txtLatitude">\n                    </div>\n                  </div>\n                  <div class="form-group">\n                    <label class="control-label col-sm-4">Longitude</label>\n                    <div class="col-sm-8">\n                      <input type="text" class="form-control txtLongitude">\n                    </div>\n                  </div>\n\n                </div>\n\n                \x3c!-- CLOCKED --\x3e\n                <div class="formScheduleType form-clocked" style="display: none;">\n                  <div class="form-group date-time">\n                    <label for="textfield" class="control-label col-sm-4" id="lblDate">Date time</label>\n                    <div class="col-sm-4">\n                      <input type="text" name="txtDate" id="txtDate" data-date-format="yyyy/mm/dd"\n                        class="form-control datepick" data-rule-required="true">\n                    </div>\n                    <div class="col-sm-4">\n                      <input type="text" name="txtTime" id="txtTime" class="form-control timepick"\n                        data-rule-required="true">\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n              <div class="col-sm-6">\n                <div class="form-group date-time" style="display:none;">\n                  <label for="textfield" class="control-label col-sm-4" id="lblDate">Date time</label>\n                  <div class="col-sm-4">\n                    <input type="text" name="txtDate" id="txtDate" data-date-format="yyyy/mm/dd"\n                      class="form-control datepick">\n                  </div>\n                  <div class="col-sm-4">\n                    <input type="text" class="form-control timepick">\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          \x3c!-- END TAB 2 --\x3e\n\n          \x3c!-- START TAB 3 --\x3e\n          <div class="tab-pane" id="run-model-3">\n            <div class="row">\n\n              <div class="col-sm-12">\n                <button class="btn btn-green add-param">Add param</button>\n\n                <table class="table table-hover table-nomargin paramList" width="100%">\n                  <thead>\n                    <tr>\n                      <th width="15%">'+c(o(t(688)).call(i,"_type",{name:"L",hash:{},data:s}))+'</th>\n                      <th width="20%">'+c(o(t(688)).call(i,"_name",{name:"L",hash:{},data:s}))+'</th>\n                      <th width="20%">'+c(o(t(688)).call(i,"_label",{name:"L",hash:{},data:s}))+'</th>\n                      <th width="15%">'+c(o(t(688)).call(i,"_default_value",{name:"L",hash:{},data:s}))+'</th>\n                      <th width="15%">'+c(o(t(688)).call(i,"actions",{name:"L",hash:{},data:s}))+'</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                  </tbody>\n                </table>\n              </div>\n\n            </div>\n          </div>\n          \x3c!-- END TAB 3 --\x3e\n\n          <div class="row">\n            <div class="form-actions">\n              <button type="submit" class="btn btn-primary save">Save</button>\n              <button type="button" class="btn cancel">Cancel</button>\n            </div>\n          </div>\n\n        </div>\n      </form>\n\n    </div>\n  </div>\n\n</div>'},useData:!0})},721:function(e,n,t){"use strict";(function(a){var o,l=t(693);void 0===(o=function(){return a.Model.extend({list:function(e,n){(0,l.send)("users/?page=1",null,{type:"GET",contentType:"application/json;charset=utf-8",dataType:"text"},n)},listByCompany:function(e){(0,l.send)("usercompanies/list_by_company_id/",null,{type:"GET",contentType:"application/json;charset=utf-8",dataType:"text"},e)},get:function(e,n){(0,l.send)("users/".concat(e,"/"),null,{type:"GET",contentType:"application/json;charset=utf-8",dataType:"text"},n)},update:function(e,n,t){(0,l.send)("users/".concat(e,"/"),n,{type:"PUT",contentType:"application/json;charset=utf-8",dataType:"text"},t)},EditProfile:function(e,n){(0,l.send)("users/".concat(e.id,"/"),JSON.stringify(e),{type:"PATCH",contentType:"application/json;charset=utf-8",dataType:"text"},n)},create:function(e,n){(0,l.send)("usercompanies/",JSON.stringify(e),{type:"POST",contentType:"application/json;charset=utf-8",dataType:"text"},n)},partialUpdate:function(e,n,t){(0,l.send)("usercompanies/".concat(e,"/"),JSON.stringify(n),{type:"PATCH",contentType:"application/json;charset=utf-8",dataType:"text"},t)},deleteUser:function(e,n){(0,l.send)("users/".concat(e,"/"),null,{type:"DELETE"},n)},deleteUserCompany:function(e,n){(0,l.send)("usercompanies/".concat(e,"/"),null,{type:"DELETE"},n)},UpdateUserPreference:function(e,n){var t={userCompanyId:__currentSession.userId,preferenceCode:e,value:n};(0,l.send)("user/UpdateUserPreference",t,{type:"PUT"})},GetUserPreference:function(e,n){(0,l.send)("usercompanies/preference_by_code/?code=".concat(e),null,{type:"GET"},n)},GetRelatedDashboard:function(e){(0,l.send)("user/GetRelatedDashboard",null,null,e)}})}.apply(n,[]))||(e.exports=o)}).call(this,t(218))},738:function(e,n,t){"use strict";(function(a){var o,l=t(693);void 0===(o=function(){return a.Model.extend({url:"myFileManager",getTask:function(e,n){(0,l.send)("scheduler/".concat(e,"/"),null,{type:"GET"},n)},getTaskLog:function(e,n){(0,l.send)("taskLog/by_periodic_task/",e,{type:"POST"},n,null,!0)},filterLogs:function(e,n){(0,l.send)("taskLog/filter_logs/",e,{type:"POST"},n,null,!0)},create:function(e,n,t){(0,l.send)("scheduler/",JSON.stringify(e),{type:"POST",contentType:"application/json;charset=utf-8",dataType:"text"},n,t,!1,!0)},edit:function(e,n,t){(0,l.send)("scheduler/".concat(e.id,"/"),JSON.stringify(e),{type:"PATCH",contentType:"application/json;charset=utf-8",dataType:"text"},n,t,!1,!0)},partialEdit:function(e,n,t,a){(0,l.send)("scheduler/".concat(e,"/"),JSON.stringify(n),{type:"PATCH",contentType:"application/json;charset=utf-8",dataType:"text"},t,a,!1,!0)},list:function(e){(0,l.send)("scheduler/",null,{type:"GET"},e)},deleteTask:function(e,n){(0,l.send)("scheduler/".concat(e,"/"),null,{type:"DELETE"},n)},runTask:function(e,n){var t=e.periodic_task_id;e.scheduleTaskId;(0,l.send)("scheduler/".concat(t,"/runTask/"),null,{type:"POST"},n)}})}.apply(n,[]))||(e.exports=o)}).call(this,t(218))}}]);