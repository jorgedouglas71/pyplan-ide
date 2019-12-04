/*! Copyright Novix S.A. 2019. All rights reserved. */
(window.webpackJsonp=window.webpackJsonp||[]).push([[216,24],{1961:function(n,t,e){"use strict";(function(a,l){var i,o,c=e(18);i=[e(726),e(710),e(780),e(1962)],void 0===(o=function(n,t,i,o){return a.View.extend({el:l("#main"),_uId:"",render:function(){l("#mainLoading").show(),l("div[data-rel='abm-company']").remove();var e=new n,a=this;this._uId=l.uuid(),e.list(function(n){var e={id:a._uId,dataRel:"abm-company",tmpClass:"company-manager",title:(0,c.translate)("_companyManager")},s={headers:[(0,c.translate)("_name"),(0,c.translate)("_code"),(0,c.translate)("_options")]},d={data:n.results},r=t(e),u=i(s),p=o(d);a.$el.append(r),l("div[data-id='"+a._uId+"']").find("div.abm-content").append(u),l("div[data-id='"+a._uId+"']").find("tbody").append(p),a.addTableHandlers(l("div[data-id='"+a._uId+"']").find("table")),l("div[data-id='"+a._uId+"']").find("table").cubeTable(null,null,"companyManager"),l("div[data-id='"+a._uId+"']").find("div.data-table-options").append(l('<a href="#" class="btn btn-addcompany" rel="tooltip" data-title="'+(0,c.translate)("_newCompany")+'"><i class="fa fa-plus"></i></a>')),a.addHandlers(),l("#mainLoading").hide(),(0,c.postRender)(a.$el.find("div[data-id='"+a._uId+"']"))})},edit:function(n){var t=l(n.currentTarget).closest("tr").attr("data-id");Promise.resolve().then(function(){var n=[e(748)];(function(n){(new n).showEdit(t)}).apply(null,n)}).catch(e.oe)},editPreferences:function(n){var t=l(n.currentTarget).closest("tr").attr("data-id");Promise.resolve().then(function(){var n=[e(748)];(function(n){(new n).showEditPref(t)}).apply(null,n)}).catch(e.oe)},deleteCompany:function(t){var a=l(t.currentTarget).closest("tr").attr("data-id");e.e(3).then(function(){var t=[e(683)];(function(t){(new t).show({title:(0,c.translate)("_deleteCompany"),text:(0,c.translate)("_sure_delete_company"),buttons:[{title:(0,c.translate)("yes"),css:"primary",code:"yes"},{title:(0,c.translate)("no"),code:"no"}],callback:function(t){if("yes"==t){var i=new n;l("#mainLoading").show(),i.delete(a,function(){l("#mainLoading").hide(),Promise.resolve().then(function(){var n=[e(748)];(function(n){(new n).show()}).apply(null,n)}).catch(e.oe)})}}})}).apply(null,t)}).catch(e.oe)},changeState:function(t){var e=l(this).closest("tr").attr("data-id"),a=new n;a.getCompany(e,function(n){n.active=!n.active;a.partialUpdate(e,n,function(){})})},sendTestEmail:function(t,a){var l=t.closest("tr").attr("data-id"),i=new n;i.GetCompany(l,function(n){n.contact=a,i.sendTestEmail(n,function(n){e.e(17).then(function(){var n=[e(685)];(function(n){(new n).show({title:"info",text:(0,c.translate)("_sendedTestEmail"),notifyType:"info"})}).apply(null,n)}).catch(e.oe)})})},addCompany:function(){Promise.resolve().then(function(){var n=[e(748)];(function(n){(new n).addCompany()}).apply(null,n)}).catch(e.oe)},close:function(){var n=l("#currentTask").attr("data-rel");Promise.resolve().then(function(){var t=[e(684)];(function(t){(new t).removeTask(n)}).apply(null,t)}).catch(e.oe)},addTableHandlers:function(n){var t=this;l(n).find("button.btn-edit").on("click",this.edit),l(n).find("button.btn-preference").on("click",this.editPreferences),l(n).find("input.company-state").on("ifToggled",this.changeState),l(n).find("button.btn-delete").on("click",this.deleteCompany),l(n).find("button.btn-testmail").on("click",function(n){var a=l(this);Promise.resolve().then(function(){var n=[e(748)];(function(n){(new n).showEmailModal(a,t.sendTestEmail)}).apply(null,n)}).catch(e.oe)})},addHandlers:function(){l("div[data-id='"+this._uId+"']").find("div.data-table-options a.btn-addcompany").on("click",this.addCompany),l("div[data-id='"+this._uId+"']").find("div.abm-top-options a.btn-close").on("click",this.close),l(".iCheck-helper").attr("title",(0,c.translate)("_changeState")).tooltip()}})}.apply(t,i))||(n.exports=o)}).call(this,e(218),e(1))},1962:function(n,t,e){var a=e(690);function l(n){return n&&(n.__esModule?n.default:n)}n.exports=(a.default||a).template({1:function(n,t,a,i,o){var c,s=n.lambda,d=n.escapeExpression,r=null!=t?t:n.nullContext||{};return'<tr data-id="'+d(s(null!=t?t.id:t,t))+'">\n        <td class="companyName">'+d(s(null!=t?t.name:t,t))+"</td>\n        <td>"+d(s(null!=t?t.code:t,t))+"</td>\n        <td>\n"+(null!=(c=l(e(698)).call(r,"change_company",{name:"haveAccess",hash:{},fn:n.program(2,o,0),inverse:n.noop,data:o}))?c:"")+'                \x3c!--button class="btn btn-mini btn-blue btn-preference" rel="tooltip" data-title=\''+d(l(e(688)).call(r,"_editCompanyPreferences",{name:"L",hash:{},data:o}))+'\'><i class="fa fa-list-ol"></i></button--\x3e\n'+(null!=(c=l(e(689)).call(r,null!=t?t.active:t,"==",!0,{name:"ifCond",hash:{},fn:n.program(4,o,0),inverse:n.program(6,o,0),data:o}))?c:"")+(null!=(c=l(e(698)).call(r,"delete_company",{name:"haveAccess",hash:{},fn:n.program(8,o,0),inverse:n.noop,data:o}))?c:"")+'                \x3c!--button class="btn btn-mini btn-blue btn-testmail" rel="tooltip" data-title=\''+d(l(e(688)).call(r,"_sendTestEmail",{name:"L",hash:{},data:o}))+'\'><i class="fa fa-envelope"></i></button--\x3e\n        </td>\n</tr>\n'},2:function(n,t,a,i,o){return'                <button class="btn btn-mini btn-green btn-edit" rel="tooltip" data-title=\''+n.escapeExpression(l(e(688)).call(null!=t?t:n.nullContext||{},"_editCompany",{name:"L",hash:{},data:o}))+'\'><i\n                                class="fa fa-pencil-square-o"></i></button>\n'},4:function(n,t,e,a,l){return'                <input type="checkbox" name="remember" class="icheck-me company-state" data-skin="square"\n                        data-color="blue" checked>\n'},6:function(n,t,e,a,l){return'                <input type="checkbox" name="remember" class="icheck-me company-state" data-skin="square"\n                        data-color="blue">\n'},8:function(n,t,a,i,o){return'                <button class="btn btn-mini btn-red btn-delete" rel="tooltip" data-title=\''+n.escapeExpression(l(e(688)).call(null!=t?t:n.nullContext||{},"_deleteCompany",{name:"L",hash:{},data:o}))+'\'><i\n                                class="fa fa-trash"></i></button>\n'},compiler:[7,">= 4.0.0"],main:function(n,t,e,a,l){var i;return null!=(i=e.each.call(null!=t?t:n.nullContext||{},null!=t?t.data:t,{name:"each",hash:{},fn:n.program(1,l,0),inverse:n.noop,data:l}))?i:""},useData:!0})},710:function(n,t,e){var a=e(690);n.exports=(a.default||a).template({compiler:[7,">= 4.0.0"],main:function(n,t,e,a,l){var i,o=null!=t?t:n.nullContext||{},c=e.helperMissing,s=n.escapeExpression;return'<div class="abm-base-tmp '+s("function"==typeof(i=null!=(i=e.tmpClass||(null!=t?t.tmpClass:t))?i:c)?i.call(o,{name:"tmpClass",hash:{},data:l}):i)+' container-fluid mainTask" data-id="'+s("function"==typeof(i=null!=(i=e.id||(null!=t?t.id:t))?i:c)?i.call(o,{name:"id",hash:{},data:l}):i)+'" data-rel="'+s("function"==typeof(i=null!=(i=e.dataRel||(null!=t?t.dataRel:t))?i:c)?i.call(o,{name:"dataRel",hash:{},data:l}):i)+'" data-type="tab-content">\n    <div class="row">\n        <div class="col-sm-12">\n            <div class="box">\n                <div class="box-title">\n                    <h3><i class="fa fa-th-list"></i>'+s("function"==typeof(i=null!=(i=e.title||(null!=t?t.title:t))?i:c)?i.call(o,{name:"title",hash:{},data:l}):i)+'</h3>\n                    <div class="actions abm-top-options">\n                        <a href="#" class="btn btn-close"><i class="fa fa-times"></i></a>\n                    </div>\n                </div>\n        <div class="box-content nopadding abm-content">\n\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n'},useData:!0})},726:function(n,t,e){"use strict";(function(a){var l,i=e(693);void 0===(l=function(){return a.Model.extend({list:function(n){(0,i.send)("companies/?limit=1000&offset=0",null,null,n)},fullList:function(n){(0,i.send)("companies/list_with_groups_and_depts/",null,null,n)},getCompany:function(n,t){(0,i.send)("companies/".concat(n,"/"),null,null,t)},update:function(n,t,e){(0,i.send)("companies/".concat(n,"/"),JSON.stringify(t),{type:"PUT",contentType:"application/json;charset=utf-8",dataType:"text"},e)},partialUpdate:function(n,t,e){(0,i.send)("companies/".concat(n,"/"),JSON.stringify(t),{type:"PATCH",contentType:"application/json;charset=utf-8",dataType:"text"},e)},create:function(n,t){(0,i.send)("companies/",n,{type:"POST"},t)},delete:function(n,t){(0,i.send)("companies/".concat(n,"/"),null,{type:"DELETE"},t)},UpdateCompanyPreference:function(n,t,e){var a={companyId:__currentSession.companyId,preferenceCode:n,value:t};(0,i.send)("company/UpdateCompanyPreference",a,{type:"PUT"},e)},GetCompanyPreference:function(n,t){(0,i.send)("companies/preference_by_code/?code=".concat(n),null,{type:"GET"},t)},sendTestEmail:function(n,t){(0,i.send)("company/SendTestEmail",n,{type:"PUT"},t)},getLicenceKey:function(n,t){(0,i.send)("company/GetLK/"+n,null,null,t)},setLicenceKey:function(n,t){(0,i.send)("company/SetLK/",n,{type:"POST"},t)}})}.apply(t,[]))||(n.exports=l)}).call(this,e(218))},780:function(n,t,e){var a=e(690);n.exports=(a.default||a).template({1:function(n,t,e,a,l){return"      <th>"+n.escapeExpression(n.lambda(t,t))+"</th>\n"},compiler:[7,">= 4.0.0"],main:function(n,t,e,a,l){var i;return'<table class="table table-hover table-nomargin table-bordered">\n  <thead>\n    <tr>\n'+(null!=(i=e.each.call(null!=t?t:n.nullContext||{},null!=t?t.headers:t,{name:"each",hash:{},fn:n.program(1,l,0),inverse:n.noop,data:l}))?i:"")+"    </tr>\n  </thead>\n  <tbody>\n\n  </tbody>\n</table>"},useData:!0})}}]);