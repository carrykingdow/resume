(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{298:function(t,e,n){"use strict";var r=n(1),i=n(42).some,s=n(43),o=n(20),a=s("some"),u=o("some");r({target:"Array",proto:!0,forced:!a||!u},{some:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},299:function(t,e,n){},300:function(t,e,n){},301:function(t,e,n){},302:function(t,e,n){},303:function(t,e,n){},304:function(t,e,n){},305:function(t,e,n){},306:function(t,e,n){},307:function(t,e,n){"use strict";var r=n(164),i=n(6),s=n(14),o=n(24),a=n(165),u=n(166);r("match",1,(function(t,e,n){return[function(e){var n=o(this),r=null==e?void 0:e[t];return void 0!==r?r.call(e,n):new RegExp(e)[t](String(n))},function(t){var r=n(e,t,this);if(r.done)return r.value;var o=i(t),l=String(this);if(!o.global)return u(o,l);var c=o.unicode;o.lastIndex=0;for(var p,f=[],h=0;null!==(p=u(o,l));){var d=String(p[0]);f[h]=d,""===d&&(o.lastIndex=a(l,s(o.lastIndex),c)),h++}return 0===h?null:f}]}))},308:function(t,e,n){var r,i;
/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */void 0===(i="function"==typeof(r=function(){var t,e,n={version:"0.2.0"},r=n.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};function i(t,e,n){return t<e?e:t>n?n:t}function s(t){return 100*(-1+t)}n.configure=function(t){var e,n;for(e in t)void 0!==(n=t[e])&&t.hasOwnProperty(e)&&(r[e]=n);return this},n.status=null,n.set=function(t){var e=n.isStarted();t=i(t,r.minimum,1),n.status=1===t?null:t;var u=n.render(!e),l=u.querySelector(r.barSelector),c=r.speed,p=r.easing;return u.offsetWidth,o((function(e){""===r.positionUsing&&(r.positionUsing=n.getPositioningCSS()),a(l,function(t,e,n){var i;return(i="translate3d"===r.positionUsing?{transform:"translate3d("+s(t)+"%,0,0)"}:"translate"===r.positionUsing?{transform:"translate("+s(t)+"%,0)"}:{"margin-left":s(t)+"%"}).transition="all "+e+"ms "+n,i}(t,c,p)),1===t?(a(u,{transition:"none",opacity:1}),u.offsetWidth,setTimeout((function(){a(u,{transition:"all "+c+"ms linear",opacity:0}),setTimeout((function(){n.remove(),e()}),c)}),c)):setTimeout(e,c)})),this},n.isStarted=function(){return"number"==typeof n.status},n.start=function(){n.status||n.set(0);var t=function(){setTimeout((function(){n.status&&(n.trickle(),t())}),r.trickleSpeed)};return r.trickle&&t(),this},n.done=function(t){return t||n.status?n.inc(.3+.5*Math.random()).set(1):this},n.inc=function(t){var e=n.status;return e?("number"!=typeof t&&(t=(1-e)*i(Math.random()*e,.1,.95)),e=i(e+t,0,.994),n.set(e)):n.start()},n.trickle=function(){return n.inc(Math.random()*r.trickleRate)},t=0,e=0,n.promise=function(r){return r&&"resolved"!==r.state()?(0===e&&n.start(),t++,e++,r.always((function(){0==--e?(t=0,n.done()):n.set((t-e)/t)})),this):this},n.render=function(t){if(n.isRendered())return document.getElementById("nprogress");l(document.documentElement,"nprogress-busy");var e=document.createElement("div");e.id="nprogress",e.innerHTML=r.template;var i,o=e.querySelector(r.barSelector),u=t?"-100":s(n.status||0),c=document.querySelector(r.parent);return a(o,{transition:"all 0 linear",transform:"translate3d("+u+"%,0,0)"}),r.showSpinner||(i=e.querySelector(r.spinnerSelector))&&f(i),c!=document.body&&l(c,"nprogress-custom-parent"),c.appendChild(e),e},n.remove=function(){c(document.documentElement,"nprogress-busy"),c(document.querySelector(r.parent),"nprogress-custom-parent");var t=document.getElementById("nprogress");t&&f(t)},n.isRendered=function(){return!!document.getElementById("nprogress")},n.getPositioningCSS=function(){var t=document.body.style,e="WebkitTransform"in t?"Webkit":"MozTransform"in t?"Moz":"msTransform"in t?"ms":"OTransform"in t?"O":"";return e+"Perspective"in t?"translate3d":e+"Transform"in t?"translate":"margin"};var o=function(){var t=[];function e(){var n=t.shift();n&&n(e)}return function(n){t.push(n),1==t.length&&e()}}(),a=function(){var t=["Webkit","O","Moz","ms"],e={};function n(n){return n=n.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,(function(t,e){return e.toUpperCase()})),e[n]||(e[n]=function(e){var n=document.body.style;if(e in n)return e;for(var r,i=t.length,s=e.charAt(0).toUpperCase()+e.slice(1);i--;)if((r=t[i]+s)in n)return r;return e}(n))}function r(t,e,r){e=n(e),t.style[e]=r}return function(t,e){var n,i,s=arguments;if(2==s.length)for(n in e)void 0!==(i=e[n])&&e.hasOwnProperty(n)&&r(t,n,i);else r(t,s[1],s[2])}}();function u(t,e){return("string"==typeof t?t:p(t)).indexOf(" "+e+" ")>=0}function l(t,e){var n=p(t),r=n+e;u(n,e)||(t.className=r.substring(1))}function c(t,e){var n,r=p(t);u(t,e)&&(n=r.replace(" "+e+" "," "),t.className=n.substring(1,n.length-1))}function p(t){return(" "+(t.className||"")+" ").replace(/\s+/gi," ")}function f(t){t&&t.parentNode&&t.parentNode.removeChild(t)}return n})?r.call(e,n,e,t):r)||(t.exports=i)},309:function(t,e,n){"use strict";var r=n(299);n.n(r).a},310:function(t,e,n){"use strict";var r=n(164),i=n(163),s=n(6),o=n(24),a=n(93),u=n(165),l=n(14),c=n(166),p=n(65),f=n(2),h=[].push,d=Math.min,g=!f((function(){return!RegExp(4294967295,"y")}));r("split",2,(function(t,e,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var r=String(o(this)),s=void 0===n?4294967295:n>>>0;if(0===s)return[];if(void 0===t)return[r];if(!i(t))return e.call(r,t,s);for(var a,u,l,c=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),d=0,g=new RegExp(t.source,f+"g");(a=p.call(g,r))&&!((u=g.lastIndex)>d&&(c.push(r.slice(d,a.index)),a.length>1&&a.index<r.length&&h.apply(c,a.slice(1)),l=a[0].length,d=u,c.length>=s));)g.lastIndex===a.index&&g.lastIndex++;return d===r.length?!l&&g.test("")||c.push(""):c.push(r.slice(d)),c.length>s?c.slice(0,s):c}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var i=o(this),s=null==e?void 0:e[t];return void 0!==s?s.call(e,i,n):r.call(String(i),e,n)},function(t,i){var o=n(r,t,this,i,r!==e);if(o.done)return o.value;var p=s(t),f=String(this),h=a(p,RegExp),v=p.unicode,m=(p.ignoreCase?"i":"")+(p.multiline?"m":"")+(p.unicode?"u":"")+(g?"y":"g"),b=new h(g?p:"^(?:"+p.source+")",m),k=void 0===i?4294967295:i>>>0;if(0===k)return[];if(0===f.length)return null===c(b,f)?[f]:[];for(var y=0,x=0,S=[];x<f.length;){b.lastIndex=g?x:0;var _,C=c(b,g?f:f.slice(x));if(null===C||(_=d(l(b.lastIndex+(g?0:x)),f.length))===y)x=u(f,x,v);else{if(S.push(f.slice(y,x)),S.length===k)return S;for(var w=1;w<=C.length-1;w++)if(S.push(C[w]),S.length===k)return S;x=y=_}}return S.push(f.slice(y)),S}]}),!g)},311:function(t,e,n){"use strict";var r=n(300);n.n(r).a},312:function(t,e,n){"use strict";var r=n(301);n.n(r).a},313:function(t,e,n){"use strict";var r=n(302);n.n(r).a},314:function(t,e,n){var r=n(7),i=n(4),s=n(91),o=n(315),a=n(9).f,u=n(64).f,l=n(163),c=n(96),p=n(168),f=n(10),h=n(2),d=n(28).set,g=n(167),v=n(3)("match"),m=i.RegExp,b=m.prototype,k=/a/g,y=/a/g,x=new m(k)!==k,S=p.UNSUPPORTED_Y;if(r&&s("RegExp",!x||S||h((function(){return y[v]=!1,m(k)!=k||m(y)==y||"/a/i"!=m(k,"i")})))){for(var _=function(t,e){var n,r=this instanceof _,i=l(t),s=void 0===e;if(!r&&i&&t.constructor===_&&s)return t;x?i&&!s&&(t=t.source):t instanceof _&&(s&&(e=c.call(t)),t=t.source),S&&(n=!!e&&e.indexOf("y")>-1)&&(e=e.replace(/y/g,""));var a=o(x?new m(t,e):m(t,e),r?this:b,_);return S&&n&&d(a,{sticky:n}),a},C=function(t){t in _||a(_,t,{configurable:!0,get:function(){return m[t]},set:function(e){m[t]=e}})},w=u(m),$=0;w.length>$;)C(w[$++]);b.constructor=_,_.prototype=b,f(i,"RegExp",_)}g("RegExp")},315:function(t,e,n){var r=n(5),i=n(92);t.exports=function(t,e,n){var s,o;return i&&"function"==typeof(s=e.constructor)&&s!==n&&r(o=s.prototype)&&o!==n.prototype&&i(t,o),t}},316:function(t,e,n){"use strict";var r=n(1),i=n(317);r({target:"String",proto:!0,forced:n(318)("link")},{link:function(t){return i(this,"a","href",t)}})},317:function(t,e,n){var r=n(24),i=/"/g;t.exports=function(t,e,n,s){var o=String(r(t)),a="<"+e;return""!==n&&(a+=" "+n+'="'+String(s).replace(i,"&quot;")+'"'),a+">"+o+"</"+e+">"}},318:function(t,e,n){var r=n(2);t.exports=function(t){return r((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},319:function(t,e,n){"use strict";var r=n(303);n.n(r).a},320:function(t,e,n){"use strict";var r=n(304);n.n(r).a},321:function(t,e,n){"use strict";var r=n(305);n.n(r).a},322:function(t,e,n){"use strict";var r=n(306);n.n(r).a},323:function(t,e,n){"use strict";n.r(e);n(98);var r=n(0),i=n(308),s=n.n(i),o={props:["sidebarItems"]},a=(n(309),n(41)),u=Object(a.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page"},[e("Content",{staticClass:"content",attrs:{custom:!1}})],1)}),[],!1,null,null,null).exports,l=(n(298),n(62),n(29),n(94),n(171),n(97),n(170),n(63),n(307),n(90),n(310),n(95),/#.*$/),c=/\.(md|html)$/,p=/\/$/,f=/^(https?:|mailto:|tel:)/;function h(t){return t.replace(l,"").replace(c,"")}function d(t){return f.test(t)}function g(t){if(d(t))return t;var e=t.match(l),n=e?e[0]:"",r=h(t);return p.test(r)?t:r+".html"+n}function v(t,e){var n=t.hash,r=function(t){var e=t.match(l);if(e)return e[0]}(e);return(!r||n===r)&&h(t.path)===h(e)}function m(t,e,n){n&&(e=function(t,e,n){var r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return e+t;var i=e.split("/");n&&i[i.length-1]||i.pop();for(var s=t.replace(/^\//,"").split("/"),o=0;o<s.length;o++){var a=s[o];".."===a?i.pop():"."!==a&&i.push(a)}""!==i[0]&&i.unshift("");return i.join("/")}(e,n));for(var r=h(e),i=0;i<t.length;i++)if(h(t[i].path)===r)return Object.assign({},t[i],{type:"page",path:g(e)});return console.error('[vuepress] No matching page found for sidebar item "'.concat(e,'"')),{}}function b(t,e,n,r){if("auto"===t.frontmatter.sidebar)return function(t){var e=k(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,children:e.map((function(e){return{type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}}))}]}(t);var i=n.pages,s=n.themeConfig,o=(r&&s.locales&&s.locales[r]||s).sidebar||s.sidebar;if(o){var a=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(var n in e)if(0===(r=t.path,/(\.html|\/)$/.test(r)?r:r+"/").indexOf(n))return{base:n,config:e[n]};var r;return{}}(e,o),u=a.base,l=a.config;return l?l.map((function(t){return function t(e,n,r,i){if("string"==typeof e)return m(n,e,r);if(Array.isArray(e))return Object.assign(m(n,e[0],r),{title:e[1]});i&&console.error("[vuepress] Nested sidebar groups are not supported. Consider using navbar + categories instead.");var s=e.children||[];return{type:"group",title:e.title,children:s.map((function(e){return t(e,n,r,!0)})),collapsable:!1!==e.collapsable}}(t,i,u)})):[]}return[]}function k(t){var e;return(t=t.map((function(t){return Object.assign({},t)}))).forEach((function(t){2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)})),t.filter((function(t){return 2===t.level}))}function y(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}function x(t,e,n,r){return t("router-link",{props:{to:e,activeClass:"",exactActiveClass:""},class:{active:r,"sidebar-link":!0}},n)}function S(t,e,n,r,i){var s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;return!e||s>i?null:t("ul",{class:"sidebar-sub-headers"},e.map((function(e){var o=v(r,n+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[x(t,"#"+e.slug,e.title,o),S(t,e.children,n,r,i,s+1)])})))}var _={functional:!0,props:["item"],render:function(t,e){var n=e.parent,r=n.$page,i=n.$site,s=n.$route,o=e.props.item,a=v(s,o.path),u="auto"===o.type?a||o.children.some((function(t){return v(s,o.basePath+"#"+t.slug)})):a,c=x(t,o.path,o.title||o.path,u),p=null!=r.frontmatter.sidebarDepth?r.frontmatter.sidebarDepth:i.themeConfig.sidebarDepth,f=null==p?1:p;return"auto"===o.type?[c,S(t,o.children,o.basePath,s,f)]:u&&o.headers&&!l.test(o.path)?[c,S(t,k(o.headers),o.path,s,f)]:c}},C=(n(311),Object(a.a)(_,void 0,void 0,!1,null,null,null).exports),w={name:"DropdownTransition",methods:{setHeight:function(t){t.style.height=t.scrollHeight+"px"},unsetHeight:function(t){t.style.height=""}}},$=(n(312),Object(a.a)(w,(function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null).exports),L={name:"SidebarGroup",props:["item","first","open","collapsable"],components:{SidebarLink:C,DropdownTransition:$}},O=(n(313),Object(a.a)(L,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-group",class:{first:t.first,collapsable:t.collapsable}},[n("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),n("DropdownTransition",[t.open||!t.collapsable?n("ul",{ref:"items",staticClass:"sidebar-group-items"},t._l(t.item.children,(function(t){return n("li",[n("SidebarLink",{attrs:{item:t}})],1)})),0):t._e()])],1)}),[],!1,null,null,null).exports),E=(n(169),n(89),n(314),n(99),n(39)),T=(n(316),{props:{item:{required:!0}},computed:{link:function(){return g(this.item.link)},exact:function(){var t=this;return this.$site.locales?Object.keys(this.$site.locales).some((function(e){return e===t.link})):"/"===this.link}},methods:{isExternal:d,isMailto:function(t){return/^mailto:/.test(t)},isTel:function(t){return/^tel:/.test(t)}}}),I=Object(a.a)(T,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isExternal(t.link)?n("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.isMailto(t.link)||t.isTel(t.link)?null:"_blank",rel:t.isMailto(t.link)||t.isTel(t.link)?null:"noopener noreferrer"}},[t._v("\n  "+t._s(t.item.text)+"\n  "),n("OutboundLink")],1):n("router-link",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact}},[t._v(t._s(t.item.text))])}),[],!1,null,null,null).exports,N={components:{NavLink:I,DropdownTransition:$},data:function(){return{open:!1}},props:{item:{required:!0}},methods:{toggle:function(){this.open=!this.open}}},j=(n(319),{components:{NavLink:I,DropdownLink:Object(a.a)(N,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[n("a",{staticClass:"dropdown-title",on:{click:t.toggle}},[n("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),n("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),n("DropdownTransition",[n("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,(function(e,r){return n("li",{key:e.link||r,staticClass:"dropdown-item"},["links"===e.type?n("h4",[t._v(t._s(e.text))]):t._e(),t._v(" "),"links"===e.type?n("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(e.items,(function(t){return n("li",{key:t.link,staticClass:"dropdown-subitem"},[n("NavLink",{attrs:{item:t}})],1)})),0):n("NavLink",{attrs:{item:e}})],1)})),0)])],1)}),[],!1,null,null,null).exports},computed:{userNav:function(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav:function(){var t=this,e=this.$site.locales;if(e&&Object.keys(e).length>1){var n=this.$page.path,r=this.$router.options.routes,i=this.$site.themeConfig.locales||{},s={text:this.$themeLocaleConfig.selectText||"Languages",items:Object.keys(e).map((function(s){var o,a=e[s],u=i[s]&&i[s].label||a.lang;return a.lang===t.$lang?o=n:(o=n.replace(t.$localeConfig.path,s),r.some((function(t){return t.path===o}))||(o=s)),{text:u,link:o}}))};return[].concat(Object(E.a)(this.userNav),[s])}return this.userNav},userLinks:function(){return(this.nav||[]).map((function(t){return Object.assign(y(t),{items:(t.items||[]).map(y)})}))},repoLink:function(){var t=this.$site.themeConfig.repo;if(t)return/^https?:/.test(t)?t:"https://github.com/".concat(t)},repoLabel:function(){if(this.repoLink){if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;for(var t=this.repoLink.match(/^https?:\/\/[^/]+/)[0],e=["GitHub","GitLab","Bitbucket"],n=0;n<e.length;n++){var r=e[n];if(new RegExp(r,"i").test(t))return r}return"Source"}}}});n(320);var M={components:{SidebarGroup:O,SidebarLink:C,NavLinks:Object(a.a)(j,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.userLinks.length||t.repoLink?n("nav",{staticClass:"nav-links"},[t._l(t.userLinks,(function(t){return n("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?n("DropdownLink",{attrs:{item:t}}):n("NavLink",{attrs:{item:t}})],1)})),t._v(" "),t.repoLink?n("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),n("OutboundLink")],1):t._e()],2):t._e()}),[],!1,null,null,null).exports},props:["items"],data:function(){return{openGroupIndex:0}},created:function(){this.refreshIndex()},watch:{$route:function(){this.refreshIndex()}},methods:{refreshIndex:function(){var t=function(t,e){for(var n=0;n<e.length;n++){var r=e[n];if("group"===r.type&&r.children.some((function(e){return v(t,e.path)})))return n}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup:function(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive:function(t){return v(this.$route,t.path)}}},R=(n(321),{components:{Page:u,Sidebar:Object(a.a)(M,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar"},[n("NavLinks"),t._v(" "),t._t("top"),t._v(" "),t.items.length?n("ul",{staticClass:"sidebar-links"},t._l(t.items,(function(e,r){return n("li",{key:r},["group"===e.type?n("SidebarGroup",{attrs:{item:e,first:0===r,open:r===t.openGroupIndex,collapsable:e.collapsable},on:{toggle:function(e){return t.toggleGroup(r)}}}):n("SidebarLink",{attrs:{item:e}})],1)})),0):t._e(),t._v(" "),t._t("bottom")],2)}),[],!1,null,null,null).exports},data:function(){return{isSidebarOpen:!1}},computed:{shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.layout&&!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return b(this.$page,this.$route,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted:function(){var t=this;window.addEventListener("scroll",this.onScroll),s.a.configure({showSpinner:!1}),this.$router.beforeEach((function(t,e,n){t.path===e.path||r.a.component(t.name)||s.a.start(),n()})),this.$router.afterEach((function(){s.a.done(),t.isSidebarOpen=!1}))},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,n=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(n)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}}),P=(n(322),Object(a.a)(R,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[n("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),n("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar}},[t._t("sidebar-top",null,{slot:"top"}),t._v(" "),t._t("sidebar-bottom",null,{slot:"bottom"})],2),t._v(" "),t.$page.frontmatter.layout?n("div",{staticClass:"custom-layout"},[n(t.$page.frontmatter.layout,{tag:"component"})],1):n("Page",{attrs:{"sidebar-items":t.sidebarItems}},[t._t("page-top",null,{slot:"top"}),t._v(" "),t._t("page-bottom",null,{slot:"bottom"})],2)],1)}),[],!1,null,null,null));e.default=P.exports}}]);