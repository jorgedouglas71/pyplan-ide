/*! Copyright Novix S.A. 2019. All rights reserved. */
(window.webpackJsonp=window.webpackJsonp||[]).push([[72,24,41,277],{1335:function(a,e,n){"use strict";(function(t,i){var s,l,o=n(18);s=[n(721),n(726),n(746),n(989),n(710),n(725),n(1969),n(1970)],void 0===(l=function(a,e,s,l,d,r,c,u){return t.View.extend({el:i("#main"),_uId:"",picManagerView:void 0,_userData:{user:{}},companyList:[],deletedUserCompanies:[],render:function(){i("#mainLoading").show(),i("div[data-rel='abm-user']").remove();var e=this;this._uId=i.uuid(),this.picManagerView=new l,this.deletedUserCompanies=[];var t,s,u=new a;t=this.options.userId?new Promise(function(a,n){u.get(e.options.userId,function(n){e._userData={user:n};var t={id:e._uId,dataRel:"abm-user",tmpClass:"user-edit",title:(0,o.translate)("_editUser")};a({userData:n,dataBaseTemplate:t})})}):new Promise(function(a,n){a({userData:null,dataBaseTemplate:{id:e._uId,dataRel:"abm-user",tmpClass:"user-add",title:(0,o.translate)("_addUser")}})}),s=new Promise(function(a,e){Promise.resolve().then(function(){var e=[n(726)];(function(e){(new e).fullList(function(e){a(e)})}).apply(null,e)}).catch(n.oe)}),Promise.all([t,s]).then(function(a){var n=a[0].userData,t=a[0].dataBaseTemplate;e.companyList=a[1];var s={user:n,companies:e.companyList},l=d(t),u=r(),p=c(s);e.$el.append(l),i("div[data-id='"+e._uId+"']").find("div.abm-content").append(u),i("div[data-id='"+e._uId+"']").find("div.form-content").append(p),e.options.userId?e.initialValues():i("div[data-id='"+e._uId+"']").find("div.user-login input").removeAttr("disabled"),(0,o.postRender)(e.$el.find("div[data-id='"+e._uId+"']")),e.addHandlers(),i("#mainLoading").hide()})},initialValues:function(a){for(var e=i("div[data-id='"+this._uId+"']").find("div.user-company-items"),n=0;n<e.length;n++){var t=i(e[n]).find("div.user-company-assigned").attr("data-value"),s=i(e[n]).find("div.user-group a"),l=i(e[n]).find("div.user-rol a"),o=this.companyList.find(function(a){return a.company.id==t});this.chargeRolNGroup(o,l,s)}},getLicencedRoles:function(a,n){(new e).getLicenceKey(a,function(a){var e={};if(a&&a.currentLicenceValidation&&a.currentLicenceValidation.currentLicence&&a.currentLicenceValidation.currentLicence.roleLicences&&a.currentLicenceValidation.currentLicence.roleLicences.length>0)for(var t=a.currentLicenceValidation.currentLicence.roleLicences,i=0;i<t.length;i++)e[t[i].roleCode]=t[i].totalUsers-t[i].currentTotalUsers+" licences availables";n(e)})},chargeRolNGroup:function(a,e,n){var t=a.departments,s=a.groups,l=this._userData.user.assigned.find(function(e){return e.id==a.company.id});if(t.length>0){for(var o=[{value:"",text:""}],d=0;d<t.length;d++)o[d]={value:t[d].id,text:t[d].name};for(var r=[],c=0;c<l.departments.length;c++)r[c]=l.departments[c].id;e.editable({pk:1,value:r,source:o,success:function(a,e){i(this).attr("data-value",e)}}),e.on("shown",function(){var a=i(this).data("editable").input.$input.closest("form"),e=a.parents("form").eq(0);a.data("validator",e.data("validator"))})}if(s.length>0){var u=[{value:"",text:""}];for(d=0;d<s.length;d++)u[d]={value:s[d].id,text:s[d].name};var p=[];for(c=0;c<l.groups.length;c++)p[c]=l.groups[c].id;n.editable({pk:1,value:p,source:u,success:function(a,e){i(this).attr("data-value",e)}}),n.on("shown",function(){var a=i(this).data("editable").input.$input.closest("form"),e=a.parents("form").eq(0);a.data("validator",e.data("validator"))})}},save:function(){var e=this._uId;this._userData.companies=[];var t=i("div[data-id='"+e+"']").find("form");if(!i(t).validate().errorList.length>0){var s=i("div[data-id='"+e+"']").find("div.user-company-items");if(s.length>0){this._userData.user.first_name=i("div[data-id='"+e+"']").find("div.first-name input").val(),this._userData.user.last_name=i("div[data-id='"+e+"']").find("div.last-name input").val(),this._userData.user.username=i("div[data-id='"+e+"']").find("div.user-login input").val();var l=i("div[data-id='"+e+"']").find("div.user-password input").val();l&&(this._userData.user.password=l),this._userData.user.email=i("div[data-id='"+e+"']").find("div.user-email input").val(),this._userData.user.active=i("div[data-id='"+e+"']").find("div.user-state input").is(":checked");for(var d,r={},c=0;c<s.length;c++){var u;r={company_id:i(s[c]).find("div.user-company-assigned").attr("data-value"),delete:!1},void 0==(d=i(s[c]).find("div.user-rol a").attr("data-value"))?(d=[],i.each(i(s[c]).find("div.user-rol a div"),function(a,e){d.push(i(e).attr("data-value"))})):r.departments=d.split(","),void 0==(u=i(s[c]).find("div.user-group a").attr("data-value"))?(u=[],i.each(i(s[c]).find("div.user-group a div"),function(a,e){u.push(i(e).attr("data-value"))})):r.groups=u.split(","),this._userData.companies.push(r)}if(this.deletedUserCompanies.length>0)for(var p=0;p<this.deletedUserCompanies.length;p++)this._userData.companies.push({company_id:this.deletedUserCompanies[p],delete:!0});this.options.userId?(new a).partialUpdate(this.options.userId,this._userData,function(){Promise.resolve().then(function(){var a=[n(761)];(function(a){(new a).show()}).apply(null,a)}).catch(n.oe)}):(new a).create(this._userData,function(){Promise.resolve().then(function(){var a=[n(761)];(function(a){(new a).show()}).apply(null,a)}).catch(n.oe)})}else i.gritter.add({title:(0,o.translate)("_wait"),text:(0,o.translate)("_noCompanyAssigned"),image:null,time:"3000"})}},changeState:function(){this.checked?i(this).attr("value",1):i(this).attr("value",0)},refreshListLabels:function(){i("div[data-id='"+this._uId+"']").find("div.cmpy-list").css({display:"0"==i("div[data-id='"+this._uId+"']").find("div.user-company-assigned").length?"none":""})},addUserCompany:function(){for(var a=this,e=i("div[data-id='"+a._uId+"']").find("div.user-cmpy"),n=i("div[data-id='"+a._uId+"']").find("div.user-company-assigned"),t=i("div[data-id='"+a._uId+"']").find("div.add-company select").select2("data").id,s=i("div[data-id='"+a._uId+"']").find("div.add-company select").select2("data").text,l=0;l<n.length;l++)if(i(n[l]).attr("data-value")==t)return void i.gritter.add({title:(0,o.translate)("_wait"),text:(0,o.translate)("_companyAlreadyAssigned"),image:null,time:"3000"});var d=a.companyList.find(function(a){return a.company.id==t}),r=u({groups:[],departments:[],company:{id:t,name:s}});i(e).append(r);var c=i(e).find("div.user-company-items").last();if(d.departments.length>0){for(var p=i(c).find("div.user-rol a"),m=[{value:"",text:""}],f=0;f<d.departments.length;f++)m[f]={value:d.departments[f].id,text:d.departments[f].name};p.editable({pk:1,source:m,success:function(a,e){i(this).attr("data-value",e)}}),p.on("shown",function(){var a=i(this).data("editable").input.$input.closest("form"),e=a.parents("form").eq(0);a.data("validator",e.data("validator"))})}if(d.groups.length>0){var v=i(c).find("div.user-group a"),h=[{value:"",text:""}];for(l=0;l<d.groups.length;l++)h[l]={value:d.groups[l].id,text:d.groups[l].name};v.editable({pk:1,source:h,success:function(a,e){i(this).attr("data-value",e)}}),v.on("shown",function(){var a=i(this).data("editable").input.$input.closest("form"),e=a.parents("form").eq(0);a.data("validator",e.data("validator"))})}i(c).find("a.btn-removeCompany").on("click",i.proxy(function(){return a.removeUserCompany(event),!1},a))},removeUserCompany:function(a){var e=i(a.currentTarget).parent("div").parent("div"),t=this;n.e(3).then(function(){var a=[n(683)];(function(a){(new a).show({title:(0,o.translate)("_deleteUserCompany"),text:(0,o.translate)("_sure_delete_user_company"),buttons:[{title:(0,o.translate)("yes"),css:"primary",code:"yes"},{title:(0,o.translate)("no"),code:"no"}],callback:function(a){if("yes"==a){i("#mainLoading").show();var n=e.find(".user-company-assigned").attr("data-value");t.deletedUserCompanies.push(n),e.prev("hr").remove(),e.remove(),t.refreshListLabels(),i("#mainLoading").hide()}}})}).apply(null,a)}).catch(n.oe)},cancel:function(){Promise.resolve().then(function(){var a=[n(761)];(function(a){(new a).show()}).apply(null,a)}).catch(n.oe)},addHandlers:function(){i("div[data-id='"+this._uId+"']").find("input.user-state").on("ifToggled",this.changeState),i("div[data-id='"+this._uId+"']").find("form").on("submit",i.proxy(function(){return this.save(),!1},this)),i("div[data-id='"+this._uId+"']").find("div.submit button.btn-cancel").on("click",i.proxy(function(){return this.cancel(),!1},this)),i("div[data-id='"+this._uId+"']").find("form div.add-company a.btn-add-company").on("click",i.proxy(function(){return this.addUserCompany(),!1},this)),i("div[data-id='"+this._uId+"']").find("form div.user-cmpy a.btn-removeCompany").on("click",i.proxy(function(){return this.removeUserCompany(event),!1},this)),i("div[data-id='"+this._uId+"']").find("div.abm-top-options a.btn-close").on("click",this.cancel)}})}.apply(e,s))||(a.exports=l)}).call(this,n(218),n(1))},1969:function(a,e,n){var t=n(690);function i(a){return a&&(a.__esModule?a.default:a)}a.exports=(t.default||t).template({1:function(a,e,n,t,i){return'      <input type="checkbox" class="icheck-me user-state" value="1" data-skin="square" data-color="blue" checked />\n'},3:function(a,e,n,t,i){return'      <input type="checkbox" class="icheck-me user-state" value="0" data-skin="square" data-color="blue" />\n'},5:function(a,e,n,t,i){var s,l=a.lambda,o=a.escapeExpression;return"            <option value='"+o(l(null!=(s=null!=e?e.company:e)?s.id:s,e))+"'>"+o(l(null!=(s=null!=e?e.company:e)?s.name:s,e))+"</option>\n"},7:function(a,e,t,s,l){var o,d=a.lambda,r=a.escapeExpression,c=null!=e?e:a.nullContext||{};return'\n      <div class="container-fluid">\n        <hr />\n        <div class="row user-company-items">\n          <div class="col-sm-3 user-company-assigned" data-value=\''+r(d(null!=e?e.id:e,e))+"'>\n            "+r(d(null!=e?e.name:e,e))+'\n          </div>\n          <div class="col-sm-3 user-rol">\n            <a href="#" class="editable editable-click" data-type="checklist" data-original-title=\''+r(i(n(688)).call(c,"_department",{name:"L",hash:{},data:l}))+"'>\n"+(null!=(o=i(n(689)).call(c,null!=(o=null!=e?e.departments:e)?o.length:o,"==",0,{name:"ifCond",hash:{},fn:a.program(8,l,0),inverse:a.program(10,l,0),data:l}))?o:"")+'            </a>\n          </div>\n          <div class="col-sm-3 user-group">\n            <a href="#" class="editable editable-click" data-type="checklist" data-original-title=\''+r(i(n(688)).call(c,"_groups",{name:"L",hash:{},data:l}))+"'>\n"+(null!=(o=i(n(689)).call(c,null!=(o=null!=e?e.groups:e)?o.length:o,"==",0,{name:"ifCond",hash:{},fn:a.program(8,l,0),inverse:a.program(13,l,0),data:l}))?o:"")+'            </a>\n          </div>\n          <div class="col-sm-3">\n            <a href="#" class="btn btn-removeCompany"><i class="fa fa-minus"></i></a>\n          </div>\n        </div>\n      </div>\n'},8:function(a,e,n,t,i){return'              <div data-value=""></div>\n'},10:function(a,e,n,t,i){var s;return null!=(s=n.each.call(null!=e?e:a.nullContext||{},null!=e?e.departments:e,{name:"each",hash:{},fn:a.program(11,i,0),inverse:a.noop,data:i}))?s:""},11:function(a,e,n,t,i){var s=a.lambda,l=a.escapeExpression;return"              <div data-value='"+l(s(null!=e?e.id:e,e))+"'>"+l(s(null!=e?e.name:e,e))+"</div>\n"},13:function(a,e,n,t,i){var s;return null!=(s=n.each.call(null!=e?e:a.nullContext||{},null!=e?e.groups:e,{name:"each",hash:{},fn:a.program(11,i,0),inverse:a.noop,data:i}))?s:""},compiler:[7,">= 4.0.0"],main:function(a,e,t,s,l){var o,d=null!=e?e:a.nullContext||{},r=a.escapeExpression,c=a.lambda;return'<div class="form-horizontal form-bordered">\n\n  \x3c!--div class="form-group" data-key="picManager">\n  </div--\x3e\n  <div class="form-group">\n    <label for="textfield" class="control-label col-sm-2">'+r(i(n(688)).call(d,"_firstName",{name:"L",hash:{},data:l}))+'</label>\n    <div class="first-name col-sm-10">\n      <div class="col-sm-6">\n        <input type="text" value="'+r(c(null!=(o=null!=e?e.user:e)?o.first_name:o,e))+'" class="form-control" name="firstName" data-rule-required="true"\n          data-rule-minlength="3">\n      </div>\n    </div>\n  </div>\n  <div class="form-group">\n    <label for="textfield" class="control-label col-sm-2">'+r(i(n(688)).call(d,"_lastName",{name:"L",hash:{},data:l}))+'</label>\n    <div class="last-name col-sm-10">\n      <div class="col-sm-6">\n        <input type="text" value="'+r(c(null!=(o=null!=e?e.user:e)?o.last_name:o,e))+'" class="form-control" name="lastName" data-rule-required="true"\n          data-rule-minlength="3">\n      </div>\n    </div>\n  </div>\n  <div class="form-group">\n    <label for="textfield" class="control-label col-sm-2">'+r(i(n(688)).call(d,"_login",{name:"L",hash:{},data:l}))+'</label>\n    <div class="user-login col-sm-10">\n      <div class="col-sm-6">\n        <input type="text" value="'+r(c(null!=(o=null!=e?e.user:e)?o.username:o,e))+'" class="form-control" disabled="disabled">\n      </div>\n    </div>\n  </div>\n  <div class="form-group">\n    <label for="textfield" class="control-label col-sm-2">'+r(i(n(688)).call(d,"_password",{name:"L",hash:{},data:l}))+'</label>\n    <div class="user-password col-sm-10">\n      <div class="col-sm-6">\n        <input type="password" value="'+r(c(null!=(o=null!=e?e.user:e)?o.password:o,e))+'" class="form-control" name="password" id="user-password"\n          data-rule-minlength="6">\n      </div>\n    </div>\n  </div>\n  <div class="form-group">\n    <label for="textfield" class="control-label col-sm-2">'+r(i(n(688)).call(d,"_confirmPassword",{name:"L",hash:{},data:l}))+'</label>\n    <div class="user-password-confirm col-sm-10">\n      <div class="col-sm-6">\n        <input type="password" value="'+r(c(null!=(o=null!=e?e.user:e)?o.password:o,e))+'" class="form-control" name="password2" data-rule-minlength="6"\n          data-rule-equalTo="#user-password">\n      </div>\n    </div>\n  </div>\n  <div class="form-group">\n    <label for="textfield" class="control-label col-sm-2">'+r(i(n(688)).call(d,"_email",{name:"L",hash:{},data:l}))+'</label>\n    <div class="user-email col-sm-10">\n      <div class="col-sm-6">\n        <input type="email" value="'+r(c(null!=(o=null!=e?e.user:e)?o.email:o,e))+'" class="form-control" data-rule-required="true"\n          data-rule-minlength="3">\n      </div>\n    </div>\n  </div>\n  <div class="form-group">\n    <label class="control-label col-sm-2">'+r(i(n(688)).call(d,"active",{name:"L",hash:{},data:l}))+'</label>\n    <div class="user-state col-sm-10">\n'+(null!=(o=i(n(689)).call(d,null!=(o=null!=e?e.user:e)?o.active:o,"==",!0,{name:"ifCond",hash:{},fn:a.program(1,l,0),inverse:a.program(3,l,0),data:l}))?o:"")+'    </div>\n  </div>\n  <div class="form-group">\n    <label class="control-label col-sm-2">'+r(i(n(688)).call(d,"_company",{name:"L",hash:{},data:l}))+"<small>"+r(i(n(688)).call(d,"_multipleAssignment",{name:"L",hash:{},data:l}))+'</small></label>\n    <div class="user-cmpy col-sm-10">\n\n      <div class="col-sm-12 add-company" style="margin-bottom: 15px;">\n        <div class="col-sm-4">\n          <select class="select2-me" style="width: 100%;">\n'+(null!=(o=t.each.call(d,null!=e?e.companies:e,{name:"each",hash:{},fn:a.program(5,l,0),inverse:a.noop,data:l}))?o:"")+'          </select>\n        </div>\n        <div class="col-sm-8">\n          <div class="actions user-options">\n            <a href="#" class="btn btn-add-company" style="height:30px; margin-left:10px;">\n              <i class="fa fa-plus"></i></a>\n            <label>'+r(i(n(688)).call(d,"_assignNewCompany",{name:"L",hash:{},data:l}))+'</label>\n          </div>\n        </div>\n      </div>\n\n      <div class="container-fluid">\n        <div class="row cmpy-list">\n          <div class="col-sm-3">'+r(i(n(688)).call(d,"_name",{name:"L",hash:{},data:l}))+'</div>\n          <div class="col-sm-3">'+r(i(n(688)).call(d,"_department",{name:"L",hash:{},data:l}))+'</div>\n          <div class="col-sm-3">'+r(i(n(688)).call(d,"_groups",{name:"L",hash:{},data:l}))+'</div>\n          <div class="col-sm-3">'+r(i(n(688)).call(d,"_options",{name:"L",hash:{},data:l}))+"</div>\n        </div>\n      </div>\n"+(null!=(o=t.each.call(d,null!=(o=null!=e?e.user:e)?o.assigned:o,{name:"each",hash:{},fn:a.program(7,l,0),inverse:a.noop,data:l}))?o:"")+"\n    </div>\n  </div>\n</div>"},useData:!0})},1970:function(a,e,n){var t=n(690);function i(a){return a&&(a.__esModule?a.default:a)}a.exports=(t.default||t).template({1:function(a,e,n,t,i){var s=a.lambda,l=a.escapeExpression;return'        <div data-value="'+l(s(null!=e?e.id:e,e))+'">'+l(s(null!=e?e.name:e,e))+"</div>\n"},compiler:[7,">= 4.0.0"],main:function(a,e,t,s,l){var o,d=a.lambda,r=a.escapeExpression,c=null!=e?e:a.nullContext||{};return'<div class="container-fluid">\n  <hr />\n  <div class="row user-company-items">\n    <div class="col-sm-3 user-company-assigned" data-value=\''+r(d(null!=(o=null!=e?e.company:e)?o.id:o,e))+"'>\n      "+r(d(null!=(o=null!=e?e.company:e)?o.name:o,e))+'\n    </div>\n    <div class="col-sm-3 user-rol">\n      <a href="#" class="editable editable-click" data-type="checklist" data-original-title=\''+r(i(n(688)).call(c,"_department",{name:"L",hash:{},data:l}))+"'>\n"+(null!=(o=t.each.call(c,null!=e?e.department:e,{name:"each",hash:{},fn:a.program(1,l,0),inverse:a.noop,data:l}))?o:"")+'      </a>\n    </div>\n    <div class="col-sm-3 user-group">\n      <a href="#" class="editable editable-click" data-type="checklist" data-original-title=\''+r(i(n(688)).call(c,"_groups",{name:"L",hash:{},data:l}))+"'>\n"+(null!=(o=t.each.call(c,null!=e?e.groups:e,{name:"each",hash:{},fn:a.program(1,l,0),inverse:a.noop,data:l}))?o:"")+'      </a>\n    </div>\n    <div class="col-sm-3">\n      <a href="#" class="btn btn-removeCompany"><i class="fa fa-minus"></i></a>\n    </div>\n  </div>\n</div>'},useData:!0})},710:function(a,e,n){var t=n(690);a.exports=(t.default||t).template({compiler:[7,">= 4.0.0"],main:function(a,e,n,t,i){var s,l=null!=e?e:a.nullContext||{},o=n.helperMissing,d=a.escapeExpression;return'<div class="abm-base-tmp '+d("function"==typeof(s=null!=(s=n.tmpClass||(null!=e?e.tmpClass:e))?s:o)?s.call(l,{name:"tmpClass",hash:{},data:i}):s)+' container-fluid mainTask" data-id="'+d("function"==typeof(s=null!=(s=n.id||(null!=e?e.id:e))?s:o)?s.call(l,{name:"id",hash:{},data:i}):s)+'" data-rel="'+d("function"==typeof(s=null!=(s=n.dataRel||(null!=e?e.dataRel:e))?s:o)?s.call(l,{name:"dataRel",hash:{},data:i}):s)+'" data-type="tab-content">\n    <div class="row">\n        <div class="col-sm-12">\n            <div class="box">\n                <div class="box-title">\n                    <h3><i class="fa fa-th-list"></i>'+d("function"==typeof(s=null!=(s=n.title||(null!=e?e.title:e))?s:o)?s.call(l,{name:"title",hash:{},data:i}):s)+'</h3>\n                    <div class="actions abm-top-options">\n                        <a href="#" class="btn btn-close"><i class="fa fa-times"></i></a>\n                    </div>\n                </div>\n        <div class="box-content nopadding abm-content">\n\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n'},useData:!0})},721:function(a,e,n){"use strict";(function(t){var i,s=n(693);void 0===(i=function(){return t.Model.extend({list:function(a,e){(0,s.send)("users/?page=1",null,{type:"GET",contentType:"application/json;charset=utf-8",dataType:"text"},e)},listByCompany:function(a){(0,s.send)("usercompanies/list_by_company_id/",null,{type:"GET",contentType:"application/json;charset=utf-8",dataType:"text"},a)},get:function(a,e){(0,s.send)("users/".concat(a,"/"),null,{type:"GET",contentType:"application/json;charset=utf-8",dataType:"text"},e)},update:function(a,e,n){(0,s.send)("users/".concat(a,"/"),e,{type:"PUT",contentType:"application/json;charset=utf-8",dataType:"text"},n)},EditProfile:function(a,e){(0,s.send)("users/".concat(a.id,"/"),JSON.stringify(a),{type:"PATCH",contentType:"application/json;charset=utf-8",dataType:"text"},e)},create:function(a,e){(0,s.send)("usercompanies/",JSON.stringify(a),{type:"POST",contentType:"application/json;charset=utf-8",dataType:"text"},e)},partialUpdate:function(a,e,n){(0,s.send)("usercompanies/".concat(a,"/"),JSON.stringify(e),{type:"PATCH",contentType:"application/json;charset=utf-8",dataType:"text"},n)},deleteUser:function(a,e){(0,s.send)("users/".concat(a,"/"),null,{type:"DELETE"},e)},deleteUserCompany:function(a,e){(0,s.send)("usercompanies/".concat(a,"/"),null,{type:"DELETE"},e)},UpdateUserPreference:function(a,e){var n={userCompanyId:__currentSession.userId,preferenceCode:a,value:e};(0,s.send)("user/UpdateUserPreference",n,{type:"PUT"})},GetUserPreference:function(a,e){(0,s.send)("usercompanies/preference_by_code/?code=".concat(a),null,{type:"GET"},e)},GetRelatedDashboard:function(a){(0,s.send)("user/GetRelatedDashboard",null,null,a)}})}.apply(e,[]))||(a.exports=i)}).call(this,n(218))},725:function(a,e,n){var t=n(690);function i(a){return a&&(a.__esModule?a.default:a)}a.exports=(t.default||t).template({compiler:[7,">= 4.0.0"],main:function(a,e,t,s,l){var o=null!=e?e:a.nullContext||{},d=a.escapeExpression;return'<form action="#" id="baseForm" method="POST" class=\'form-horizontal form-bordered form-validate\' novalidate="novalidate">\n    <div class="form-content">\n\n    </div>\n    <div class="submit form-actions col-sm-12">\n        <button type="submit" class="btn btn-primary btn-save">'+d(i(n(688)).call(o,"_save",{name:"L",hash:{},data:l}))+'</button>\n        <button type="button" class="btn btn-cancel">'+d(i(n(688)).call(o,"cancel",{name:"L",hash:{},data:l}))+"</button>\n    </div>\n</form>\n"},useData:!0})},726:function(a,e,n){"use strict";(function(t){var i,s=n(693);void 0===(i=function(){return t.Model.extend({list:function(a){(0,s.send)("companies/?limit=1000&offset=0",null,null,a)},fullList:function(a){(0,s.send)("companies/list_with_groups_and_depts/",null,null,a)},getCompany:function(a,e){(0,s.send)("companies/".concat(a,"/"),null,null,e)},update:function(a,e,n){(0,s.send)("companies/".concat(a,"/"),JSON.stringify(e),{type:"PUT",contentType:"application/json;charset=utf-8",dataType:"text"},n)},partialUpdate:function(a,e,n){(0,s.send)("companies/".concat(a,"/"),JSON.stringify(e),{type:"PATCH",contentType:"application/json;charset=utf-8",dataType:"text"},n)},create:function(a,e){(0,s.send)("companies/",a,{type:"POST"},e)},delete:function(a,e){(0,s.send)("companies/".concat(a,"/"),null,{type:"DELETE"},e)},UpdateCompanyPreference:function(a,e,n){var t={companyId:__currentSession.companyId,preferenceCode:a,value:e};(0,s.send)("company/UpdateCompanyPreference",t,{type:"PUT"},n)},GetCompanyPreference:function(a,e){(0,s.send)("companies/preference_by_code/?code=".concat(a),null,{type:"GET"},e)},sendTestEmail:function(a,e){(0,s.send)("company/SendTestEmail",a,{type:"PUT"},e)},getLicenceKey:function(a,e){(0,s.send)("company/GetLK/"+a,null,null,e)},setLicenceKey:function(a,e){(0,s.send)("company/SetLK/",a,{type:"POST"},e)}})}.apply(e,[]))||(a.exports=i)}).call(this,n(218))},746:function(a,e,n){"use strict";(function(t){var i,s=n(693);void 0===(i=function(){return t.Model.extend({list:function(a,e){var n=null!=a?"?company_id=".concat(a):"";(0,s.send)("groups/".concat(n),null,{type:"GET",contentType:"application/json;charset=utf-8",dataType:"text"},e)},get:function(a,e){(0,s.send)("groups/".concat(a,"/"),null,{type:"GET",contentType:"application/json;charset=utf-8",dataType:"text"},e)},update:function(a,e,n){(0,s.send)("groups/".concat(a,"/"),JSON.stringify(e),{type:"PUT",contentType:"application/json;charset=utf-8",dataType:"text"},n)},create:function(a,e){(0,s.send)("groups/",JSON.stringify(a),{type:"POST",contentType:"application/json;charset=utf-8",dataType:"text"},e)},delete:function(a,e){(0,s.send)("groups/".concat(a,"/"),null,{type:"DELETE"},e)},listPermissions:function(a){(0,s.send)("permissions/",null,{type:"GET",contentType:"application/json;charset=utf-8",dataType:"text"},a)},updateGroupPermissions:function(a,e){(0,s.send)("groups/update_groups_permissions/",JSON.stringify(a),{type:"PATCH",contentType:"application/json;charset=utf-8",dataType:"text"},e)}})}.apply(e,[]))||(a.exports=i)}).call(this,n(218))},989:function(a,e,n){"use strict";(function(t,i){var s,l;s=[n(990)],void 0===(l=function(a){return t.View.extend({el:i("#main"),imageChange:!1,render:function(e){var n=a(e);this.$el.append(n),this.addHandlers()},addHandlers:function(){var a=this;this.$el.find(".fileupload").on("change.bs.fileinput",function(e){a.imageChange=!0})},getSrc:function(){return this.$el.find(".fileinput-preview.thumbnail img").attr("src")}})}.apply(e,s))||(a.exports=l)}).call(this,n(218),n(1))},990:function(a,e,n){var t=n(690);a.exports=(t.default||t).template({compiler:[7,">= 4.0.0"],main:function(a,e,t,i,s){var l,o=a.escapeExpression;return'<label for="textfield" class="control-label col-sm-2"></label>\n\n<div class="fileinput fileinput-new col-sm-10" data-provides="fileinput">\n  <div class="input-group">\n    <div class="fileinput-preview thumbnail" data-trigger="fileinput" style="width: 113px; height: 150px;">\n      \x3c!--img src="'+o(function(a){return a&&(a.__esModule?a.default:a)}(n(719)).call(null!=e?e:a.nullContext||{},{name:"baseURL",hash:{},data:s}))+"thumbs/view.ashx?img=users-"+o(a.lambda(null!=(l=null!=e?e.user:e)?l.imageUrl:l,e))+'&w=113&h=150&t=cropt" /--\x3e\n    </div>\n\n    <div>\n\n      <span class="btn btn-default btn-file">\n        <span class="fileinput-new">Select image</span>\n        <span class="fileinput-exists">Change</span>\n        <input type="file" name="imagefile" class="valid fileupload">\n      </span>\n\n      <a href="#" class="btn fileinput-exists" data-dismiss="fileinput">Remove</a>\n    </div>\n  </div>\n</div>'},useData:!0})}}]);