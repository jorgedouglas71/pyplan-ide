/*! Copyright Novix S.A. 2019. All rights reserved. */
(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{883:function(e,t,n){(function(e){!function(e){function t(){e[o].glbl||(a={$wndw:e(window),$html:e("html"),$body:e("body")},n={},s={},i={},e.each([n,s,i],function(e,t){t.add=function(e){for(var n=0,s=(e=e.split(" ")).length;s>n;n++)t[e[n]]=t.mm(e[n])}}),n.mm=function(e){return"mm-"+e},n.add("wrapper menu panel nopanel current highest opened subopened navbar hasnavbar title btn prev next listview nolistview inset vertical selected divider spacer hidden fullsubopen"),n.umm=function(e){return"mm-"==e.slice(0,3)&&(e=e.slice(3)),e},s.mm=function(e){return"mm-"+e},s.add("parent sub"),i.mm=function(e){return e+".mm"},i.add("transitionend webkitTransitionEnd mousedown mouseup touchstart touchmove touchend click keydown"),e[o]._c=n,e[o]._d=s,e[o]._e=i,e[o].glbl=a)}var n,s,i,a,o="mmenu";e[o]||(e[o]=function(e,t,n){this.$menu=e,this._api=["bind","init","update","setSelected","getInstance","openPanel","closePanel","closeAllPanels"],this.opts=t,this.conf=n,this.vars={},this.cbck={},"function"==typeof this.___deprecated&&this.___deprecated(),this._initMenu(),this._initAnchors();var s=this.$menu.children(this.conf.panelNodetype);return this._initAddons(),this.init(s),"function"==typeof this.___debug&&this.___debug(),this},e[o].version="5.3.0",e[o].addons={},e[o].uniqueId=0,e[o].defaults={extensions:[],navbar:{title:"Menu",titleLink:"panel"},onClick:{setSelected:!0},slidingSubmenus:!0},e[o].configuration={classNames:{divider:"Divider",inset:"Inset",panel:"Panel",selected:"Selected",spacer:"Spacer",vertical:"Vertical"},clone:!1,openingInterval:25,panelNodetype:"ul, ol, div",transitionDuration:400},e[o].prototype={init:function(e){e=e.not("."+n.nopanel),e=this._initPanels(e),this.trigger("init",e),this.trigger("update")},update:function(){this.trigger("update")},setSelected:function(e){this.$menu.find("."+n.listview).children().removeClass(n.selected),e.addClass(n.selected),this.trigger("setSelected",e)},openPanel:function(e){var t=e.parent();if(t.hasClass(n.vertical)){var s=t.parents("."+n.subopened);if(s.length)return this.openPanel(s.first());t.addClass(n.opened)}else{if(e.hasClass(n.current))return;var i=this.$menu.children("."+n.panel),a=i.filter("."+n.current);i.removeClass(n.highest).removeClass(n.current).not(e).not(a).not("."+n.vertical).addClass(n.hidden),e.hasClass(n.opened)?e.nextAll("."+n.opened).addClass(n.highest).removeClass(n.opened).removeClass(n.subopened):(e.addClass(n.highest),a.addClass(n.subopened)),e.removeClass(n.hidden).addClass(n.current),setTimeout(function(){e.removeClass(n.subopened).addClass(n.opened)},this.conf.openingInterval)}this.trigger("openPanel",e)},closePanel:function(e){var t=e.parent();t.hasClass(n.vertical)&&(t.removeClass(n.opened),this.trigger("closePanel",e))},closeAllPanels:function(){this.$menu.find("."+n.listview).children().removeClass(n.selected).filter("."+n.vertical).removeClass(n.opened);var e=this.$menu.children("."+n.panel).first();this.$menu.children("."+n.panel).not(e).removeClass(n.subopened).removeClass(n.opened).removeClass(n.current).removeClass(n.highest).addClass(n.hidden),this.openPanel(e)},togglePanel:function(e){var t=e.parent();t.hasClass(n.vertical)&&this[t.hasClass(n.opened)?"closePanel":"openPanel"](e)},getInstance:function(){return this},bind:function(e,t){this.cbck[e]=this.cbck[e]||[],this.cbck[e].push(t)},trigger:function(){var e=Array.prototype.slice.call(arguments),t=e.shift();if(this.cbck[t])for(var n=0,s=this.cbck[t].length;s>n;n++)this.cbck[t][n].apply(this,e)},_initMenu:function(){this.opts.offCanvas&&this.conf.clone&&(this.$menu=this.$menu.clone(!0),this.$menu.add(this.$menu.find("[id]")).filter("[id]").each(function(){e(this).attr("id",n.mm(e(this).attr("id")))})),this.$menu.contents().each(function(){3==e(this)[0].nodeType&&e(this).remove()}),this.$menu.parent().addClass(n.wrapper);var t=[n.menu];this.opts.slidingSubmenus||t.push(n.vertical),this.opts.extensions=this.opts.extensions.length?"mm-"+this.opts.extensions.join(" mm-"):"",this.opts.extensions&&t.push(this.opts.extensions),this.$menu.addClass(t.join(" "))},_initPanels:function(t){var i=this,a=this.__findAddBack(t,"ul, ol");this.__refactorClass(a,this.conf.classNames.inset,"inset").addClass(n.nolistview+" "+n.nopanel),a.not("."+n.nolistview).addClass(n.listview);var o=this.__findAddBack(t,"."+n.listview).children();this.__refactorClass(o,this.conf.classNames.selected,"selected"),this.__refactorClass(o,this.conf.classNames.divider,"divider"),this.__refactorClass(o,this.conf.classNames.spacer,"spacer"),this.__refactorClass(this.__findAddBack(t,"."+this.conf.classNames.panel),this.conf.classNames.panel,"panel");var r=e(),d=t.add(t.find("."+n.panel)).add(this.__findAddBack(t,"."+n.listview).children().children(this.conf.panelNodetype)).not("."+n.nopanel);this.__refactorClass(d,this.conf.classNames.vertical,"vertical"),this.opts.slidingSubmenus||d.addClass(n.vertical),d.each(function(){var t=e(this),s=t;t.is("ul, ol")?(t.wrap('<div class="'+n.panel+'" />'),s=t.parent()):s.addClass(n.panel);var a=t.attr("id");t.removeAttr("id"),s.attr("id",a||i.__getUniqueId()),t.hasClass(n.vertical)&&(t.removeClass(i.conf.classNames.vertical),s.add(s.parent()).addClass(n.vertical)),r=r.add(s)});var l=e("."+n.panel,this.$menu);r.each(function(){var t=e(this),a=(d=t.parent()).children("a, span").first();if(d.is("."+n.menu)||(d.data(s.sub,t),t.data(s.parent,d)),!d.children("."+n.next).length&&d.parent().is("."+n.listview)){var o=t.attr("id"),r=e('<a class="'+n.next+'" href="#'+o+'" data-target="#'+o+'" />').insertBefore(a);a.is("span")&&r.addClass(n.fullsubopen)}if(!t.children("."+n.navbar).length&&!d.hasClass(n.vertical)){if(d.parent().is("."+n.listview))var d=d.closest("."+n.panel);else d=(a=d.closest("."+n.panel).find('a[href="#'+t.attr("id")+'"]').first()).closest("."+n.panel);var l=e('<div class="'+n.navbar+'" />');if(d.length){o=d.attr("id");switch(i.opts.navbar.titleLink){case"anchor":_url=a.attr("href");break;case"panel":case"parent":_url="#"+o;break;case"none":default:_url=!1}l.append('<a class="'+n.btn+" "+n.prev+'" href="#'+o+'" data-target="#'+o+'"></a>').append('<a class="'+n.title+'"'+(_url?' href="'+_url+'"':"")+">"+a.text()+"</a>").prependTo(t),t.addClass(n.hasnavbar)}else i.opts.navbar.title&&(l.append('<a class="'+n.title+'">'+i.opts.navbar.title+"</a>").prependTo(t),t.addClass(n.hasnavbar))}});var c=this.__findAddBack(t,"."+n.listview).children("."+n.selected).removeClass(n.selected).last().addClass(n.selected);c.add(c.parentsUntil("."+n.menu,"li")).filter("."+n.vertical).addClass(n.opened).end().not("."+n.vertical).each(function(){e(this).parentsUntil("."+n.menu,"."+n.panel).not("."+n.vertical).first().addClass(n.opened).parentsUntil("."+n.menu,"."+n.panel).not("."+n.vertical).first().addClass(n.opened).addClass(n.subopened)}),c.children("."+n.panel).not("."+n.vertical).addClass(n.opened).parentsUntil("."+n.menu,"."+n.panel).not("."+n.vertical).first().addClass(n.opened).addClass(n.subopened);var h=l.filter("."+n.opened);return h.length||(h=r.first()),h.addClass(n.opened).last().addClass(n.current),r.not("."+n.vertical).not(h.last()).addClass(n.hidden).end().appendTo(this.$menu),r},_initAnchors:function(){var t=this;a.$body.on(i.click+"-oncanvas","a[href]",function(s){var i=e(this),r=!1,d=t.$menu.find(i).length;for(var l in e[o].addons)if(r=e[o].addons[l].clickAnchor.call(t,i,d))break;if(!r&&d){var c=i.attr("href");if(c.length>1&&"#"==c.slice(0,1)){var h=e(c,t.$menu);h.is("."+n.panel)&&(r=!0,t[i.parent().hasClass(n.vertical)?"togglePanel":"openPanel"](h))}}if(r&&s.preventDefault(),!r&&d&&i.is("."+n.listview+" > li > a")&&!i.is('[rel="external"]')&&!i.is('[target="_blank"]')){t.__valueOrFn(t.opts.onClick.setSelected,i)&&t.setSelected(e(s.target).parent());var f=t.__valueOrFn(t.opts.onClick.preventDefault,i,"#"==c.slice(0,1));f&&s.preventDefault(),t.__valueOrFn(t.opts.onClick.blockUI,i,!f)&&a.$html.addClass(n.blocking),t.__valueOrFn(t.opts.onClick.close,i,f)&&t.close()}})},_initAddons:function(){for(var t in e[o].addons)e[o].addons[t].add.call(this),e[o].addons[t].add=function(){};for(var t in e[o].addons)e[o].addons[t].setup.call(this)},__api:function(){var t=this,n={};return e.each(this._api,function(){var e=this;n[e]=function(){var s=t[e].apply(t,arguments);return void 0===s?n:s}}),n},__valueOrFn:function(e,t,n){return"function"==typeof e?e.call(t[0]):void 0===e&&void 0!==n?n:e},__refactorClass:function(e,t,s){return e.filter("."+t).removeClass(t).addClass(n[s])},__findAddBack:function(e,t){return e.find(t).add(e.filter(t))},__filterListItems:function(e){return e.not("."+n.divider).not("."+n.hidden)},__transitionend:function(e,t,n){var s=!1,a=function(){s||t.call(e[0]),s=!0};e.one(i.transitionend,a),e.one(i.webkitTransitionEnd,a),setTimeout(a,1.1*n)},__getUniqueId:function(){return n.mm(e[o].uniqueId++)}},e.fn[o]=function(n,s){return t(),n=e.extend(!0,{},e[o].defaults,n),s=e.extend(!0,{},e[o].configuration,s),this.each(function(){var t=e(this);if(!t.data(o)){var i=new e[o](t,n,s);t.data(o,i.__api())}})},e[o].support={touch:"ontouchstart"in window||navigator.msMaxTouchPoints})}(e),function(e){var t,n,s,i,a="mmenu",o="offCanvas";e[a].addons[o]={setup:function(){if(this.opts[o]){var n=this.opts[o],s=this.conf[o];i=e[a].glbl,this._api=e.merge(this._api,["open","close","setPage"]),("top"==n.position||"bottom"==n.position)&&(n.zposition="front"),"string"!=typeof s.pageSelector&&(s.pageSelector="> "+s.pageNodetype),i.$allMenus=(i.$allMenus||e()).add(this.$menu),this.vars.opened=!1;var r=[t.offcanvas];"left"!=n.position&&r.push(t.mm(n.position)),"back"!=n.zposition&&r.push(t.mm(n.zposition)),this.$menu.addClass(r.join(" ")).parent().removeClass(t.wrapper),this.setPage(i.$page),this._initBlocker(),this["_initWindow_"+o](),this.$menu[s.menuInjectMethod+"To"](s.menuWrapperSelector)}},add:function(){t=e[a]._c,n=e[a]._d,s=e[a]._e,t.add("offcanvas slideout modal background opening blocker page"),n.add("style"),s.add("resize")},clickAnchor:function(e){return!!this.opts[o]&&((n=this.$menu.attr("id"))&&n.length&&(this.conf.clone&&(n=t.umm(n)),e.is('[href="#'+n+'"]'))?(this.open(),!0):i.$page?!!((n=i.$page.first().attr("id"))&&n.length&&e.is('[href="#'+n+'"]'))&&(this.close(),!0):void 0);var n}},e[a].defaults[o]={position:"left",zposition:"back",modal:!1,moveBackground:!0},e[a].configuration[o]={pageNodetype:"div",pageSelector:null,wrapPageIfNeeded:!0,menuWrapperSelector:"body",menuInjectMethod:"prepend"},e[a].prototype.open=function(){if(!this.vars.opened){var e=this;this._openSetup(),setTimeout(function(){e._openFinish()},this.conf.openingInterval),this.trigger("open")}},e[a].prototype._openSetup=function(){var a=this;this.closeAllOthers(),i.$page.each(function(){e(this).data(n.style,e(this).attr("style")||"")}),i.$wndw.trigger(s.resize+"-offcanvas",[!0]);var r=[t.opened];this.opts[o].modal&&r.push(t.modal),this.opts[o].moveBackground&&r.push(t.background),"left"!=this.opts[o].position&&r.push(t.mm(this.opts[o].position)),"back"!=this.opts[o].zposition&&r.push(t.mm(this.opts[o].zposition)),this.opts.extensions&&r.push(this.opts.extensions),i.$html.addClass(r.join(" ")),setTimeout(function(){a.vars.opened=!0},this.conf.openingInterval),this.$menu.addClass(t.current+" "+t.opened)},e[a].prototype._openFinish=function(){var e=this;this.__transitionend(i.$page.first(),function(){e.trigger("opened")},this.conf.transitionDuration),i.$html.addClass(t.opening),this.trigger("opening")},e[a].prototype.close=function(){if(this.vars.opened){var s=this;this.__transitionend(i.$page.first(),function(){s.$menu.removeClass(t.current).removeClass(t.opened),i.$html.removeClass(t.opened).removeClass(t.modal).removeClass(t.background).removeClass(t.mm(s.opts[o].position)).removeClass(t.mm(s.opts[o].zposition)),s.opts.extensions&&i.$html.removeClass(s.opts.extensions),i.$page.each(function(){e(this).attr("style",e(this).data(n.style))}),s.vars.opened=!1,s.trigger("closed")},this.conf.transitionDuration),i.$html.removeClass(t.opening),this.trigger("close"),this.trigger("closing")}},e[a].prototype.closeAllOthers=function(){i.$allMenus.not(this.$menu).each(function(){var t=e(this).data(a);t&&t.close&&t.close()})},e[a].prototype.setPage=function(n){var s=this,a=this.conf[o];n&&n.length||(n=i.$body.find(a.pageSelector)).length>1&&a.wrapPageIfNeeded&&(n=n.wrapAll("<"+this.conf[o].pageNodetype+" />").parent()),n.each(function(){e(this).attr("id",e(this).attr("id")||s.__getUniqueId())}),n.addClass(t.page+" "+t.slideout),i.$page=n,this.trigger("setPage",n)},e[a].prototype["_initWindow_"+o]=function(){i.$wndw.off(s.keydown+"-offcanvas").on(s.keydown+"-offcanvas",function(e){return i.$html.hasClass(t.opened)&&9==e.keyCode?(e.preventDefault(),!1):void 0});var e=0;i.$wndw.off(s.resize+"-offcanvas").on(s.resize+"-offcanvas",function(n,s){if(1==i.$page.length&&(s||i.$html.hasClass(t.opened))){var a=i.$wndw.height();(s||a!=e)&&(e=a,i.$page.css("minHeight",a))}})},e[a].prototype._initBlocker=function(){var n=this;i.$blck||(i.$blck=e('<div id="'+t.blocker+'" class="'+t.slideout+'" />')),i.$blck.appendTo(i.$body).off(s.touchstart+"-offcanvas "+s.touchmove+"-offcanvas").on(s.touchstart+"-offcanvas "+s.touchmove+"-offcanvas",function(e){e.preventDefault(),e.stopPropagation(),i.$blck.trigger(s.mousedown+"-offcanvas")}).off(s.mousedown+"-offcanvas").on(s.mousedown+"-offcanvas",function(e){e.preventDefault(),i.$html.hasClass(t.modal)||(n.closeAllOthers(),n.close())})}}(e),function(e){var t,n,s,i="mmenu",a="autoHeight";e[i].addons[a]={setup:function(){if(this.opts.offCanvas){switch(this.opts.offCanvas.position){case"left":case"right":return}var o=this,r=this.opts[a];if(this.conf[a],s=e[i].glbl,"boolean"==typeof r&&r&&(r={height:"auto"}),"object"!=typeof r&&(r={}),"auto"==(r=this.opts[a]=e.extend(!0,{},e[i].defaults[a],r)).height){this.$menu.addClass(t.autoheight);var d=function(e){var n=this.$menu.children("."+t.current);_top=parseInt(n.css("top"),10)||0,_bot=parseInt(n.css("bottom"),10)||0,this.$menu.addClass(t.measureheight),(e=e||this.$menu.children("."+t.current)).is("."+t.vertical)&&(e=e.parents("."+t.panel).not("."+t.vertical).first()),this.$menu.height(e.outerHeight()+_top+_bot).removeClass(t.measureheight)};this.bind("update",d),this.bind("openPanel",d),this.bind("closePanel",d),this.bind("open",d),s.$wndw.off(n.resize+"-autoheight").on(n.resize+"-autoheight",function(){d.call(o)})}}},add:function(){t=e[i]._c,e[i]._d,n=e[i]._e,t.add("autoheight measureheight"),n.add("resize")},clickAnchor:function(){}},e[i].defaults[a]={height:"default"}}(e),function(e){var t,n,s="mmenu",i="backButton";e[s].addons[i]={setup:function(){if(this.opts.offCanvas){var a=this,o=this.opts[i];if(this.conf[i],n=e[s].glbl,"boolean"==typeof o&&(o={close:o}),"object"!=typeof o&&(o={}),(o=e.extend(!0,{},e[s].defaults[i],o)).close){var r="#"+a.$menu.attr("id");this.bind("opened",function(){location.hash!=r&&history.pushState(null,document.title,r)}),e(window).on("popstate",function(e){n.$html.hasClass(t.opened)?(e.stopPropagation(),a.close()):location.hash==r&&(e.stopPropagation(),a.open())})}}},add:function(){return window.history&&window.history.pushState?(t=e[s]._c,e[s]._d,void e[s]._e):void(e[s].addons[i].setup=function(){})},clickAnchor:function(){}},e[s].defaults[i]={close:!1}}(e),function(e){var t,n,s="mmenu",i="counters";e[s].addons[i]={setup:function(){var a=this,o=this.opts[i];this.conf[i],e[s].glbl,"boolean"==typeof o&&(o={add:o,update:o}),"object"!=typeof o&&(o={}),o=this.opts[i]=e.extend(!0,{},e[s].defaults[i],o),this.bind("init",function(t){this.__refactorClass(e("em",t),this.conf.classNames[i].counter,"counter")}),o.add&&this.bind("init",function(s){s.each(function(){var s=e(this).data(n.parent);s&&(s.children("em."+t.counter).length||s.prepend(e('<em class="'+t.counter+'" />')))})}),o.update&&this.bind("update",function(){this.$menu.find("."+t.panel).each(function(){var s=e(this),i=s.data(n.parent);if(i){var o=i.children("em."+t.counter);o.length&&((s=s.children("."+t.listview)).length&&o.html(a.__filterListItems(s.children()).length))}})})},add:function(){t=e[s]._c,n=e[s]._d,e[s]._e,t.add("counter search noresultsmsg")},clickAnchor:function(){}},e[s].defaults[i]={add:!1,update:!1},e[s].configuration.classNames[i]={counter:"Counter"}}(e),function(e){var t,n,s="mmenu",i="dividers";e[s].addons[i]={setup:function(){var a=this,o=this.opts[i];if(this.conf[i],e[s].glbl,"boolean"==typeof o&&(o={add:o,fixed:o}),"object"!=typeof o&&(o={}),o=this.opts[i]=e.extend(!0,{},e[s].defaults[i],o),this.bind("init",function(){this.__refactorClass(e("li",this.$menu),this.conf.classNames[i].collapsed,"collapsed")}),o.add&&this.bind("init",function(n){switch(o.addTo){case"panels":var s=n;break;default:s=e(o.addTo,this.$menu).filter("."+t.panel)}e("."+t.divider,s).remove(),s.find("."+t.listview).not("."+t.vertical).each(function(){var n="";a.__filterListItems(e(this).children()).each(function(){var s=e.trim(e(this).children("a, span").text()).slice(0,1).toLowerCase();s!=n&&s.length&&(n=s,e('<li class="'+t.divider+'">'+s+"</li>").insertBefore(this))})})}),o.collapse&&this.bind("init",function(n){e("."+t.divider,n).each(function(){var n=e(this);n.nextUntil("."+t.divider,"."+t.collapsed).length&&(n.children("."+t.subopen).length||(n.wrapInner("<span />"),n.prepend('<a href="#" class="'+t.subopen+" "+t.fullsubopen+'" />')))})}),o.fixed){var r=function(n){if((n=n||this.$menu.children("."+t.current)).find("."+t.divider).not("."+t.hidden).length){this.$menu.addClass(t.hasdividers);var s=n.scrollTop()||0,i="";n.is(":visible")&&n.find("."+t.divider).not("."+t.hidden).each(function(){e(this).position().top+s<s+1&&(i=e(this).text())}),this.$fixeddivider.text(i)}else this.$menu.removeClass(t.hasdividers)};this.$fixeddivider=e('<ul class="'+t.listview+" "+t.fixeddivider+'"><li class="'+t.divider+'"></li></ul>').prependTo(this.$menu).children(),this.bind("openPanel",r),this.bind("init",function(t){t.off(n.scroll+"-dividers "+n.touchmove+"-dividers").on(n.scroll+"-dividers "+n.touchmove+"-dividers",function(){r.call(a,e(this))})})}},add:function(){t=e[s]._c,e[s]._d,n=e[s]._e,t.add("collapsed uncollapsed fixeddivider hasdividers"),n.add("scroll")},clickAnchor:function(e,n){if(this.opts[i].collapse&&n){var s=e.parent();if(s.is("."+t.divider)){var a=s.nextUntil("."+t.divider,"."+t.collapsed);return s.toggleClass(t.opened),a[s.hasClass(t.opened)?"addClass":"removeClass"](t.uncollapsed),!0}}return!1}},e[s].defaults[i]={add:!1,addTo:"panels",fixed:!1,collapse:!1},e[s].configuration.classNames[i]={collapsed:"Collapsed"}}(e),function(e){function t(e,t,n){return t>e&&(e=t),e>n&&(e=n),e}var n,s,i="mmenu",a="dragOpen";e[i].addons[a]={setup:function(){if(this.opts.offCanvas){var o=this,r=this.opts[a],d=this.conf[a];if(s=e[i].glbl,"boolean"==typeof r&&(r={open:r}),"object"!=typeof r&&(r={}),(r=this.opts[a]=e.extend(!0,{},e[i].defaults[a],r)).open){var l,c,h,f,p,u={},v=0,m=!1,g=!1,b=0,_=0;switch(this.opts.offCanvas.position){case"left":case"right":u.events="panleft panright",u.typeLower="x",u.typeUpper="X",g="width";break;case"top":case"bottom":u.events="panup pandown",u.typeLower="y",u.typeUpper="Y",g="height"}switch(this.opts.offCanvas.position){case"right":case"bottom":u.negative=!0,f=function(e){e>=s.$wndw[g]()-r.maxStartPos&&(v=1)};break;default:u.negative=!1,f=function(e){e<=r.maxStartPos&&(v=1)}}switch(this.opts.offCanvas.position){case"left":u.open_dir="right",u.close_dir="left";break;case"right":u.open_dir="left",u.close_dir="right";break;case"top":u.open_dir="down",u.close_dir="up";break;case"bottom":u.open_dir="up",u.close_dir="down"}switch(this.opts.offCanvas.zposition){case"front":p=function(){return this.$menu};break;default:p=function(){return e("."+n.slideout)}}var C=this.__valueOrFn(r.pageNode,this.$menu,s.$page);"string"==typeof C&&(C=e(C)),new Hammer(C[0],r.vendors.hammer).on("panstart",function(e){f(e.center[u.typeLower]),s.$slideOutNodes=p(),m=u.open_dir}).on(u.events+" panend",function(e){v>0&&e.preventDefault()}).on(u.events,function(e){if(l=e["delta"+u.typeUpper],u.negative&&(l=-l),l!=b&&(m=l>=b?u.open_dir:u.close_dir),(b=l)>r.threshold&&1==v){if(s.$html.hasClass(n.opened))return;v=2,o._openSetup(),o.trigger("opening"),s.$html.addClass(n.dragging),_=t(s.$wndw[g]()*d[g].perc,d[g].min,d[g].max)}2==v&&(c=t(b,10,_)-("front"==o.opts.offCanvas.zposition?_:0),u.negative&&(c=-c),h="translate"+u.typeUpper+"("+c+"px )",s.$slideOutNodes.css({"-webkit-transform":"-webkit-"+h,transform:h}))}).on("panend",function(){2==v&&(s.$html.removeClass(n.dragging),s.$slideOutNodes.css("transform",""),o[m==u.open_dir?"_openFinish":"close"]()),v=0})}}},add:function(){return"function"!=typeof Hammer||Hammer.VERSION<2?void(e[i].addons[a].setup=function(){}):(n=e[i]._c,e[i]._d,e[i]._e,void n.add("dragging"))},clickAnchor:function(){}},e[i].defaults[a]={open:!1,maxStartPos:100,threshold:50,vendors:{hammer:{}}},e[i].configuration[a]={width:{perc:.8,min:140,max:440},height:{perc:.8,min:140,max:880}}}(e),function(e){var t,n,s="mmenu",i="fixedElements";e[s].addons[i]={setup:function(){if(this.opts.offCanvas){this.opts[i],this.conf[i],n=e[s].glbl;var t=function(e){var t=this.conf.classNames[i].fixed;this.__refactorClass(e.find("."+t),t,"slideout").appendTo(n.$body)};t.call(this,n.$page),this.bind("setPage",t)}},add:function(){t=e[s]._c,e[s]._d,e[s]._e,t.add("fixed")},clickAnchor:function(){}},e[s].configuration.classNames[i]={fixed:"Fixed"}}(e),function(e){var t,n="mmenu",s="iconPanels";e[n].addons[s]={setup:function(){var i=this,a=this.opts[s];if(this.conf[s],e[n].glbl,"boolean"==typeof a&&(a={add:a}),"number"==typeof a&&(a={add:!0,visible:a}),"object"!=typeof a&&(a={}),(a=this.opts[s]=e.extend(!0,{},e[n].defaults[s],a)).visible++,a.add){this.$menu.addClass(t.iconpanel);for(var o=[],r=0;r<=a.visible;r++)o.push(t.iconpanel+"-"+r);o=o.join(" ");var d=function(n){i.$menu.children("."+t.panel).removeClass(o).filter("."+t.subopened).removeClass(t.hidden).add(n).slice(-a.visible).each(function(n){e(this).addClass(t.iconpanel+"-"+n)})};this.bind("openPanel",d),this.bind("init",function(n){d.call(i,i.$menu.children("."+t.current)),a.hideNavbars&&n.removeClass(t.hasnavbar),n.each(function(){e(this).children("."+t.subblocker).length||e(this).prepend('<a href="#'+e(this).closest("."+t.panel).attr("id")+'" class="'+t.subblocker+'" />')})})}},add:function(){t=e[n]._c,e[n]._d,e[n]._e,t.add("iconpanel subblocker")},clickAnchor:function(){}},e[n].defaults[s]={add:!1,visible:3,hideNavbars:!1}}(e),function(e){var t,n="mmenu",s="navbars";e[n].addons[s]={setup:function(){var i=this,a=this.opts[s];if(this.conf[s],e[n].glbl,void 0!==a){a instanceof Array||(a=[a]);var o={};for(var r in e.each(a,function(r){var d=a[r];"boolean"==typeof d&&d&&(d={}),"object"!=typeof d&&(d={}),void 0===d.content&&(d.content=["prev","title"]),d.content instanceof Array||(d.content=[d.content]);var l=(d=e.extend(!0,{},i.opts.navbar,d)).position,c=d.height;"number"!=typeof c&&(c=1),c=Math.min(4,Math.max(1,c)),"bottom"!=l&&(l="top"),o[l]||(o[l]=0),o[l]++;var h=e("<div />").addClass(t.navbar+" "+t.navbar+"-"+l+" "+t.navbar+"-"+l+"-"+o[l]+" "+t.navbar+"-size-"+c);o[l]+=c-1;for(var f=0,p=d.content.length;p>f;f++){var u=e[n].addons[s][d.content[f]]||!1;u?u.call(i,h,d):((u=d.content[f])instanceof e||(u=e(d.content[f])),u.each(function(){h.append(e(this))}))}var v=Math.ceil(h.children().not("."+t.btn).length/c);v>1&&h.addClass(t.navbar+"-content-"+v),h.children("."+t.btn).length&&h.addClass(t.hasbtns),h.prependTo(i.$menu)}),o)i.$menu.addClass(t.hasnavbar+"-"+r+"-"+o[r])}},add:function(){t=e[n]._c,e[n]._d,e[n]._e,t.add("close hasbtns")},clickAnchor:function(){}},e[n].configuration.classNames[s]={panelTitle:"Title",panelNext:"Next",panelPrev:"Prev"}}(e),function(e){var t="mmenu";e[t].addons.navbars.close=function(n){var s=e[t]._c,i=e[t].glbl;n.append('<a class="'+s.close+" "+s.btn+'" href="#"></a>');var a=function(e){n.find("."+s.close).attr("href","#"+e.attr("id"))};a.call(this,i.$page),this.bind("setPage",a)}}(e),function(e){var t="mmenu",n="navbars";e[t].addons[n].next=function(s){var i=e[t]._c;s.append('<a class="'+i.next+" "+i.btn+'" href="#"></a>');var a=function(e){e=e||this.$menu.children("."+i.current);var t=s.find("."+i.next),a=e.find("."+this.conf.classNames[n].panelNext),o=a.attr("href"),r=a.html();t[o?"attr":"removeAttr"]("href",o),t[o||r?"removeClass":"addClass"](i.hidden),t.html(r)};this.bind("openPanel",a),this.bind("init",function(){a.call(this)})}}(e),function(e){var t="mmenu",n="navbars";e[t].addons[n].prev=function(s){var i=e[t]._c;s.append('<a class="'+i.prev+" "+i.btn+'" href="#"></a>'),this.bind("init",function(e){e.removeClass(i.hasnavbar)});var a=function(e){e=e||this.$menu.children("."+i.current);var t=s.find("."+i.prev),a=e.find("."+this.conf.classNames[n].panelPrev);a.length||(a=e.children("."+i.navbar).children("."+i.prev));var o=a.attr("href"),r=a.html();t[o?"attr":"removeAttr"]("href",o),t[o||r?"removeClass":"addClass"](i.hidden),t.html(r)};this.bind("openPanel",a),this.bind("init",function(){a.call(this)})}}(e),function(e){var t="mmenu";e[t].addons.navbars.searchfield=function(n){var s=e[t]._c,i=e('<div class="'+s.search+'" />').appendTo(n);"object"!=typeof this.opts.searchfield&&(this.opts.searchfield={}),this.opts.searchfield.add=!0,this.opts.searchfield.addTo=i}}(e),function(e){var t="mmenu",n="navbars";e[t].addons[n].title=function(s,i){var a=e[t]._c;s.append('<a class="'+a.title+'"></a>');var o=function(e){e=e||this.$menu.children("."+a.current);var t=s.find("."+a.title),o=e.find("."+this.conf.classNames[n].panelTitle);o.length||(o=e.children("."+a.navbar).children("."+a.title));var r=o.attr("href"),d=o.html()||i.title;t[r?"attr":"removeAttr"]("href",r),t[r||d?"removeClass":"addClass"](a.hidden),t.html(d)};this.bind("openPanel",o),this.bind("init",function(){o.call(this)})}}(e),function(e){var t,n,s,i="mmenu",a="searchfield";e[i].addons[a]={setup:function(){var o=this,r=this.opts[a],d=this.conf[a];e[i].glbl,"boolean"==typeof r&&(r={add:r}),"object"!=typeof r&&(r={}),r=this.opts[a]=e.extend(!0,{},e[i].defaults[a],r),this.bind("close",function(){this.$menu.find("."+t.search).find("input").blur()}),this.bind("init",function(i){if(r.add){switch(r.addTo){case"panels":var a=i;break;default:a=e(r.addTo,this.$menu)}a.each(function(){var n=e(this);if(!n.is("."+t.panel)||!n.is("."+t.vertical)){if(!n.children("."+t.search).length){var s=d.form?"form":"div",i=e("<"+s+' class="'+t.search+'" />');if(d.form&&"object"==typeof d.form)for(var a in d.form)i.attr(a,d.form[a]);i.append('<input placeholder="'+r.placeholder+'" type="text" autocomplete="off" />'),n.hasClass(t.search)?n.replaceWith(i):n.prepend(i).addClass(t.hassearch)}if(r.noResults)if(n.closest("."+t.panel).length||(n=o.$menu.children("."+t.panel).first()),!n.children("."+t.noresultsmsg).length){var l=n.children("."+t.listview);e('<div class="'+t.noresultsmsg+'" />').append(r.noResults)[l.length?"insertBefore":"prependTo"](l.length?l:n)}}}),r.search&&e("."+t.search,this.$menu).each(function(){var i=e(this),a=i.closest("."+t.panel).length;if(a)var d=l=i.closest("."+t.panel);else{var l=e("."+t.panel,o.$menu);d=o.$menu}var c=i.children("input"),h=o.__findAddBack(l,"."+t.listview).children("li"),f=h.filter("."+t.divider),p=o.__filterListItems(h),u=function(){var s=c.val().toLowerCase();l.scrollTop(0),p.add(f).addClass(t.hidden).find("."+t.fullsubopensearch).removeClass(t.fullsubopen).removeClass(t.fullsubopensearch),p.each(function(){var n=e(this),i="> a";(r.showTextItems||r.showSubPanels&&n.find("."+t.next))&&(i="> a, > span"),e(i,n).text().toLowerCase().indexOf(s)>-1&&n.add(n.prevAll("."+t.divider).first()).removeClass(t.hidden)}),r.showSubPanels&&l.each(function(){var s=e(this);o.__filterListItems(s.find("."+t.listview).children()).each(function(){var s=e(this),i=s.data(n.sub);s.removeClass(t.nosubresults),i&&i.find("."+t.listview).children().removeClass(t.hidden)})}),e(l.get().reverse()).each(function(s){var i=e(this),r=i.data(n.parent);r&&(o.__filterListItems(i.find("."+t.listview).children()).length?(r.hasClass(t.hidden)&&r.children("."+t.next).not("."+t.fullsubopen).addClass(t.fullsubopen).addClass(t.fullsubopensearch),r.removeClass(t.hidden).removeClass(t.nosubresults).prevAll("."+t.divider).first().removeClass(t.hidden)):a||(i.hasClass(t.opened)&&setTimeout(function(){o.openPanel(r.closest("."+t.panel))},1.5*(s+1)*o.conf.openingInterval),r.addClass(t.nosubresults)))}),d[p.not("."+t.hidden).length?"removeClass":"addClass"](t.noresults),this.update()};c.off(s.keyup+"-searchfield "+s.change+"-searchfield").on(s.keyup+"-searchfield",function(e){(function(e){switch(e){case 9:case 16:case 17:case 18:case 37:case 38:case 39:case 40:return!0}return!1})(e.keyCode)||u.call(o)}).on(s.change+"-searchfield",function(){u.call(o)})})}})},add:function(){t=e[i]._c,n=e[i]._d,s=e[i]._e,t.add("search hassearch noresultsmsg noresults nosubresults fullsubopensearch"),s.add("change keyup")},clickAnchor:function(){}},e[i].defaults[a]={add:!1,addTo:"panels",search:!0,placeholder:"Search",noResults:"No results found.",showTextItems:!1,showSubPanels:!0},e[i].configuration[a]={form:!1}}(e),function(e){var t,n,s="mmenu",i="sectionIndexer";e[s].addons[i]={setup:function(){var a=this,o=this.opts[i];this.conf[i],e[s].glbl,"boolean"==typeof o&&(o={add:o}),"object"!=typeof o&&(o={}),o=this.opts[i]=e.extend(!0,{},e[s].defaults[i],o),this.bind("init",function(s){if(o.add){switch(o.addTo){case"panels":var i=s;break;default:i=e(o.addTo,this.$menu).filter("."+t.panel)}i.find("."+t.divider).closest("."+t.panel).addClass(t.hasindexer)}if(!this.$indexer&&this.$menu.children("."+t.hasindexer).length){this.$indexer=e('<div class="'+t.indexer+'" />').prependTo(this.$menu).append('<a href="#a">a</a><a href="#b">b</a><a href="#c">c</a><a href="#d">d</a><a href="#e">e</a><a href="#f">f</a><a href="#g">g</a><a href="#h">h</a><a href="#i">i</a><a href="#j">j</a><a href="#k">k</a><a href="#l">l</a><a href="#m">m</a><a href="#n">n</a><a href="#o">o</a><a href="#p">p</a><a href="#q">q</a><a href="#r">r</a><a href="#s">s</a><a href="#t">t</a><a href="#u">u</a><a href="#v">v</a><a href="#w">w</a><a href="#x">x</a><a href="#y">y</a><a href="#z">z</a>'),this.$indexer.children().on(n.mouseover+"-sectionindexer "+t.touchstart+"-sectionindexer",function(){var n=e(this).attr("href").slice(1),s=a.$menu.children("."+t.current),i=s.find("."+t.listview),o=!1,r=s.scrollTop(),d=i.position().top+parseInt(i.css("margin-top"),10)+parseInt(i.css("padding-top"),10)+r;s.scrollTop(0),i.children("."+t.divider).not("."+t.hidden).each(function(){!1===o&&n==e(this).text().slice(0,1).toLowerCase()&&(o=e(this).position().top+d)}),s.scrollTop(!1!==o?o:r)});var r=function(e){a.$menu[(e.hasClass(t.hasindexer)?"add":"remove")+"Class"](t.hasindexer)};this.bind("openPanel",r),r.call(this,this.$menu.children("."+t.current))}})},add:function(){t=e[s]._c,e[s]._d,n=e[s]._e,t.add("indexer hasindexer"),n.add("mouseover touchstart")},clickAnchor:function(e){return!!e.parent().is("."+t.indexer)||void 0}},e[s].defaults[i]={add:!1,addTo:"panels"}}(e),function(e){var t,n="mmenu",s="toggles";e[n].addons[s]={setup:function(){var i=this;this.opts[s],this.conf[s],e[n].glbl,this.bind("init",function(n){this.__refactorClass(e("input",n),this.conf.classNames[s].toggle,"toggle"),this.__refactorClass(e("input",n),this.conf.classNames[s].check,"check"),e("input."+t.toggle+", input."+t.check,n).each(function(){var n=e(this),s=n.closest("li"),a=n.hasClass(t.toggle)?"toggle":"check",o=n.attr("id")||i.__getUniqueId();s.children('label[for="'+o+'"]').length||(n.attr("id",o),s.prepend(n),e('<label for="'+o+'" class="'+t[a]+'"></label>').insertBefore(s.children("a, span").last()))})})},add:function(){t=e[n]._c,e[n]._d,e[n]._e,t.add("toggle check")},clickAnchor:function(){}},e[n].configuration.classNames[s]={toggle:"Toggle",check:"Check"}}(e)}).call(this,n(1))}}]);