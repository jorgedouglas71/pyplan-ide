/*! Copyright Novix S.A. 2019. All rights reserved. */
(window.webpackJsonp=window.webpackJsonp||[]).push([[194],{1104:function(t,e,i){"use strict";(function(a){var n,o,r=i(18),s=function(t){return t&&t.__esModule?t:{default:t}}(i(926));i(1199),i(1200),n=[i(722),i(708),i(1201),i(1202),i(1203)],void 0===(o=function(t,e,n,o,l){return t.extend({el:a("#n_o_n_e"),editorInitiated:void 0,render:function(t,e){this.baseRender(t),this.drawItem()},drawItem:function(){var t=e();a(this.tagId).find(".item-area").html(t),a(this.tagId).find(".btnMenu").hide(),a(this.tagId).find(".item-area").addClass("fullSize"),this.drawTextEditor(a(this.tagId).find(".item-area").first())},onRemoveItemView:function(){a(this.tagId).find(".item-area .colorpick").spectrum("destroy")},updateValues:function(t){},_evaluateNode:function(t,e,i,a,n){},baseUpdateSize:function(){a(this.tagId).find(".item-area").height(a(this.tagId).find(".item-area").parent().height()-30)},updateSize:function(){var t=a(this.tagId).find(".item-area").parent().height()-28;a(this.tagId).find(".item-area").height(t);var e=a(this.tagId).find(".item-area").height()-10;a(this.tagId).find(".item-area .text-editor-wraper .wysiwyg_editor").height(e),a(this.tagId).find(".item-area .text-editor-content").height(e)},drawTextEditor:function(t){var e="";this.currentResult&&this.currentResult.itemProperties&&(e=this.currentResult.itemProperties.htmlcontent);var i={key:"editor_"+this.tagId.substring(1)},a=n(i);t.html(a),t.find(".wysiwyg_editor").html(e),this.setVisibleItem(),this.isReady=!0},editModeChanged:function(){this.setVisibleItem();var t=a(this.tagId).find(".item-area .text-editor-wraper .wysiwyg_editor"),e=a(this.tagId).find(".item-area .text-editor-content");if(!this.editMode){var i=t.html();e.html(i),this.currentResult.itemProperties.htmlcontent=i}this.ensureLinks()},setVisibleItem:function(){if(this.editMode){if(a(this.tagId).find(".item-area .text-editor-content").hide(),a(this.tagId).find(".item-area .text-editor-wraper").show(),!this.editorInitiated){this.editorInitiated=!0;this.tagId.substring(1);var t=a(this.tagId).find(".item-area .text-editor-wraper .wysiwyg_editor");t.wysiwyg({toolbar:"selection",hijackcontextmenu:!1,placeholder:"Type your text here...",dropfileclick:"Click or drop image",placeholderUrl:"www.example.com",buttons:{attachImage:{title:"Insert image",image:"",popup:function(e,i){var n=l(),o=a("<div/>").addClass("wysiwyg-toolbar-linktodashboard").attr("unselectable","on");o.append(n),e.append(o);var r=a("#drop-area"),s=a("#fileElem"),d=a(".drop-area-error"),c=function(e){if(["image/jpg","image/jpeg","image/png"].includes(e.type)){var i=e,a=new FileReader;a.onload=function(e){var i=e.target.result,a=document.createElement("img");a.src=i,t.wysiwyg("shell").insertHTML(a.outerHTML).closePopup()},a.readAsDataURL(i)}else d[0].innerHTML="Only .jpg, .jpeg or .png"},h=function(t){t.preventDefault(),t.stopPropagation(),d[0].innerHTML=""},u=function(){r[0].classList.add("highlight")},p=function(){r[0].classList.remove("highlight")};r[0].addEventListener("dragenter",function(t){h(t),u()},!1),r[0].addEventListener("dragover",function(t){h(t),u()},!1),r[0].addEventListener("dragleave",function(t){h(t),p()},!1),r[0].addEventListener("drop",function(t){h(t),p(),t.dataTransfer.files.length>0&&c(t.dataTransfer.files[0])},!1),s[0].addEventListener("change",function(t){h(t),s[0].files.length>0&&c(s[0].files[0])},!1),o.find("button.wysiwyg-toolbar-icon").on("click",function(){var e="<img src='"+o.find("input.imgUrl").val()+"' />";t.wysiwyg("shell").insertHTML(e).closePopup()})}},insertlink:{title:"Insert link",image:""},linktodashboard:{title:(0,r.translate)("link_to_dashboard"),image:"",popup:function(e,n){var o=t.wysiwyg("shell").getSelectedHTML();if(o){var s=a("<div/>").addClass("wysiwyg-toolbar-linktodashboard").attr("unselectable","on"),l="<select class='dashboard_selector'><option>"+(0,r.translate)("loading")+"</option></select>",d="<select class='target_selector'><option value='_self'>"+(0,r.translate)("close_current")+"</option><option value='_blank'>"+(0,r.translate)("open_new")+"</option></select>";s.append(l),s.append(d),s.append("<a class='wysiwyg-toolbar-icon' href='#' title='Ok' unselectable='on'><i class='fa fa-check'></i></a>"),e.append(s),s.find("a.wysiwyg-toolbar-icon").on("click",function(){var e=s.find("select.dashboard_selector"),i=s.find("select.target_selector"),a=e.val(),n=(e.select2("data").text,"<span class='link-to-dashboard' data-dashboard-id='"+a+"' "+("data-target='"+i.val()+"'")+">"+o+"</span>");t.wysiwyg("shell").insertHTML(n).closePopup()}),setTimeout(function(){var t=s.find("select.dashboard_selector"),e=a("<div></div>").html(o).find("span.link-to-dashboard").attr("data-dashboard-id");e&&t.val(e),t.select2({width:210,minimumResultsForSearch:1,escapeMarkup:function(t){return t}}),i.e(12).then(function(){var e=[i(743)];(function(e){(new e).show(t)}).apply(null,e)}).catch(i.oe),s.find(".select2-chosen").html((0,r.translate)("select_dashboard"))},100)}}},linktomodule:{title:(0,r.translate)("link_to_module"),image:"",popup:function(e,n){var o=t.wysiwyg("shell").getSelectedHTML();if(o){var r=a("<div/>").addClass("wysiwyg-toolbar-linktodashboard").attr("unselectable","on");r.append("<select class='module_selector'></select>"),r.append("<a class='wysiwyg-toolbar-icon' href='#' title='Ok' unselectable='on'><i class='fa fa-check'></i></a>"),e.append(r),r.find("a.wysiwyg-toolbar-icon").on("click",function(){var e=r.find("select.module_selector"),i=e.val(),a=e.find("option:selected").text(),n="<span class='cubeplan-module' data-module='"+i+"' data-title='"+(a=a.replace("'",""))+"'>"+o+"</span>";t.wysiwyg("shell").insertHTML(n).closePopup()}),setTimeout(function(){var t=r.find("select.module_selector");Promise.resolve().then(function(){var e=[i(684)];(function(e){var i=(new e).getModuleList();a.each(i,function(e,i){a("<option/>").val(i.key).text(i.name).appendTo(t)})}).apply(null,e)}).catch(i.oe)},100)}}},fontsize:{title:"Size",image:"",popup:function(e,i){for(var n=[{name:"Select size",size:"10"}],o=10;o<121;o++)n.push({name:o+"px",size:o});var r=a("<select />").addClass("wysiwyg-toolbar-list").change(function(e){s.default.init();var i="rangyTemp_"+ +new Date;return s.default.createCssClassApplier(i,!0).applyToSelection(),a("."+i).css("font-size",a(this).val()+"px").removeClass(i),t.wysiwyg("shell").closePopup(),e.stopPropagation(),e.preventDefault(),!1});a.each(n,function(t,e){var i=a('<option value="'+e.size+'">'+e.name+"</option>");r.append(i)}),e.append(r)}},bold:{title:"Bold (Ctrl+B)",image:"",hotkey:"b"},italic:{title:"Italic (Ctrl+I)",image:"",hotkey:"i"},underline:{title:"Underline (Ctrl+U)",image:"",hotkey:"u"},strikethrough:{title:"Strikethrough (Ctrl+S)",image:"",hotkey:"s"},forecolor:{title:"Text color",image:""},highlight:{title:"Background color",image:""},alignleft:{title:"Left",image:""},aligncenter:{title:"Center",image:""},alignright:{title:"Right",image:""},alignjustify:{title:"Justify",image:""},indent:!1,outdent:!1,orderedList:{title:"Ordered list",image:""},unorderedList:{title:"Unordered list",image:""},removeformat:{title:"Remove format",image:""},viewhtml:{title:"View html",image:"",click:function(e){t.wysiwyg("shell").closePopup();var a={html:t.html()},n=o(a);i.e(3).then(function(){var e=[i(683)];(function(e){(new e).show({title:(0,r.translate)("edit_html"),html:n,okOnEnter:!1,buttons:[{title:(0,r.translate)("ok"),css:"primary",code:"ok"},{title:(0,r.translate)("cancel"),code:"cancel"}],callback:function(e,i){"ok"==e&&t.wysiwyg("shell").setHTML(i.find(".pureHtmlEditor").val())},onLoad:function(t){t.find(".pureHtmlEditor").focus()}})}).apply(null,e)}).catch(i.oe)}}},submit:{title:"Submit",image:""}})}}else a(this.tagId).find(".item-area .text-editor-content").show(),a(this.tagId).find(".item-area .text-editor-wraper").hide();this.updateSize()},ensureLinks:function(){a(this.tagId).find(".item-area .text-editor-content").find("a").each(function(t,e){var i=a(this).attr("href");i&&0!=i.toLowerCase().indexOf("http")&&a(this).attr("href","http://"+a(this).attr("href")),a(this).attr("target")&&"_blank"==a(this).attr("target")||a(this).attr("target","_blank")})}})}.apply(e,n))||(t.exports=o)}).call(this,i(1))}}]);