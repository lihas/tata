!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.tata=n():t.tata=n()}(this,function(){return function(t){function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}var e={};return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:o})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=0)}([function(t,n,e){"use strict";function o(){switch(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"tr"){case"tr":return"top-right";case"tm":return"top-mid";case"tl":return"top-left";case"mr":return"mid-right";case"mm":return"mid-mid";case"ml":return"mid-left";case"br":return"bottom-right";case"bm":return"bottom-mid";case"bl":return"bottom-left";default:return"top-right"}}function r(){switch(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"text"){case"text":return"chat_bubble";case"log":return"textsms";case"info":return"forum";case"warn":return"info_outline";case"success":return"check";case"error":return"block";default:return""}}function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"fade",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"tr";if("slide"===t)switch(n){case"tr":case"mr":case"br":return"slide-right-in";case"tl":case"ml":case"bl":return"slide-left-in";case"tm":return"slide-top-in";case"bm":return"slide-bottom-in"}return"fade-in"}function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"fade",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"tr";if("slide"===t)switch(n){case"tr":case"mr":case"br":return"slide-right-out";case"tl":case"ml":case"bl":return"slide-left-out";case"tm":return"slide-top-out";case"bm":return"slide-bottom-out"}return"fade-out"}function s(){return"tata-"+Date.now()}function c(t){t.target.classList.contains("tata-close")||this.opts.onClick.call(this)}function l(t){var n=t.target;if(n.classList.contains("tata-close")){var e=n.parentNode.getAttribute("id"),o=m.find(function(t){return t.id===e}),r=document.getElementById(e);r.classList.add(a(o.opts.animate,o.opts.position)),f(r),!!o.opts.onClose&&"function"==typeof o.opts.onClose&&o.opts.onClose.call(o)}}function f(t){var n=setTimeout(function(){"function"==typeof t.remove?t.remove():document.body.removeChild(t),clearTimeout(n)},800)}function u(t,n,e){var l=r(e.type),u=o(e.position),d=i(e.animate,e.position),p=s(),h={title:t,text:n,opts:e,id:p},g=m.findIndex(function(t){return t.id===p}),b=0===g?null:m[g-1];m.push(h);var v='\n    <div class="tata '+e.type+" "+d+" "+u+'" id='+p+'>\n      <i class="tata-icon material-icons">'+l+'</i>\n      <div class="tata-body">\n        <h4 class="tata-title">'+t+'</h4>\n        <p class="tata-text">'+n+"</p>\n      </div>\n      "+(e.closeBtn?'<button class="tata-close material-icons">clear</button>':"")+"\n      "+(!e.holding&&e.progress?'<div class="tata-progress"></div>':"")+"\n    </div>\n  ";document.body.insertAdjacentHTML("beforeend",v),b&&b.opts.position===h.opts.position&&f(document.getElementById(b.id));var x=document.getElementById(p);if(!!e.onClick&&"function"==typeof e.onClick&&x.addEventListener("click",c.bind(h),{capture:!0,once:!0}),!e.holding&&e.progress){x.querySelector(".tata-progress").style.animation=e.duration/1e3+"s reduceWidth linear forwards";setTimeout(function(){var t=m.findIndex(function(t){return t===t});m.splice(t,1),x.classList.add(a(h.opts.animate,h.opts.position)),f(x),!!h.opts.onClose&&"function"==typeof h.opts.onClose&&h.opts.onClose.call(h)},e.duration)}}e(1);var d=document.createElement("link");d.rel="stylesheet",d.href="https://fonts.googleapis.com/icon?family=Material+Icons",document.head.appendChild(d);var p={type:"log",position:"tr",animate:"fade",duration:3e3,progress:!0,holding:!1,closeBtn:!0,onClick:null,onClose:null},m=[],h={text:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"你好",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"你好, 今天是"+(new Date).toLocaleString(),e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};u(t,n,Object.assign({},p,e,{type:"text"}))},log:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"你好",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"今天是"+(new Date).toLocaleString(),e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};u(t,n,Object.assign({},p,e,{type:"log"}))},info:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"你好",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"今天是"+(new Date).toLocaleString(),e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};u(t,n,Object.assign({},p,e,{type:"info"}))},warn:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"你好",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"今天是"+(new Date).toLocaleString(),e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};u(t,n,Object.assign({},p,e,{type:"warn"}))},error:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"你好",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"今天是"+(new Date).toLocaleString(),e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};u(t,n,Object.assign({},p,e,{type:"error"}))},success:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"你好",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"今天是"+(new Date).toLocaleString(),e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};u(t,n,Object.assign({},p,e,{type:"success"}))},clear:function(){m.forEach(function(t){f(document.getElementById(t.id))}),m.length=0}};document.addEventListener("click",l,!1),t.exports=h},function(t,n,e){var o=e(2);"string"==typeof o&&(o=[[t.i,o,""]]);var r={hmr:!0};r.transform=void 0;e(4)(o,r);o.locals&&(t.exports=o.locals)},function(t,n,e){n=t.exports=e(3)(void 0),n.push([t.i,".tata {\n  position: fixed;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  width: 300px;\n  opacity: .9;\n  border-radius: 3px;\n  color: #ffffff;\n  font-size: 16px;\n  z-index: 9999;\n  pointer-events: auto;\n  padding: 12px 14px 12px 20px;\n  box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.2);\n}\n\n.tata:hover {\n  opacity: 1;\n}\n\n.tata * {\n  box-sizing: border-box;\n}\n\n.tata .tata-icon {\n  font-size: 2em;\n  color: inherit;\n}\n\n.tata .tata-body {\n  margin: 0;\n  padding: 0 14px;\n  min-height: 38px;\n  min-width: 260px;\n}\n\n.tata .tata-title {\n  margin: 0 0 2px 0;\n  font-size: 1em;\n}\n\n.tata .tata-text {\n  margin: 0;\n  font-size: .9em;\n}\n\n.tata .tata-close {\n  position: absolute;\n  top: 6px;\n  right: 6px;\n  border: none;\n  margin: 0;\n  padding: 0;\n  font-size: 1em;\n  font-weight: bold;\n  color: inherit;\n  cursor: pointer;\n  outline: none;\n  background: transparent;\n}\n\n.tata-progress {\n  position: absolute;\n  bottom: -1px;\n  left: 0;\n  width: 100%;\n  height: 5px;\n  border-radius: 0 0 3px 3px;\n  background: rgba(0, 0, 0, 0.2);\n}\n\n.tata .tata-close:hover {\n  opacity: 0.4;\n}\n\n.tata.top-right {\n  top: 12px;\n  right: 12px;\n}\n\n.tata.top-mid {\n  top: 12px;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n.tata.top-left {\n  top: 12px;\n  left: 12px;\n}\n\n.tata.bottom-right {\n  right: 12px;\n  bottom: 18px;\n}\n\n.tata.bottom-mid {\n  left: 50%;\n  bottom: 18px;\n  transform: translateX(-50%);\n}\n\n.tata.bottom-left {\n  bottom: 18px;\n  left: 12px;\n}\n\n.tata.mid-right {\n  top: 50%;\n  right: 12px;\n  transform: translateY(-50%);\n}\n\n.tata.mid-left {\n  top: 50%;\n  left: 12px;\n  transform: translateY(-50%);\n}\n\n.tata.mid-mid {\n  top: 35%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.tata.text {\n  color: #fff;\n  background: #323232;\n}\n\n.tata.log {\n  color: #333333;\n  background: #fffffc;\n}\n\n.tata.info {\n  background: #2ca9e1;\n}\n\n.tata.warn {\n  background: #f89406;\n}\n\n.tata.error {\n  background: #e9546b;\n}\n\n.tata.success {\n  background: #38b48b;\n}\n\n.tata.fade-in {\n  animation: .4s ease-in fadeIn forwards;\n}\n\n.tata.fade-out {\n  animation: .4s linear fadeOut forwards;\n}\n\n.tata.slide-right-in {\n  animation: .4s ease slideRightIn forwards;\n}\n\n.tata.slide-right-out {\n  animation: .4s ease slideRightOut forwards;\n}\n\n.tata.slide-left-in {\n  animation: .4s ease slideLeftIn forwards;\n}\n\n.tata.slide-left-out {\n  animation: .4s ease slideLeftOut forwards;\n}\n\n.tata.slide-top-in {\n  animation: .4s ease slideTopIn forwards;\n}\n\n.tata.slide-top-out {\n  animation: .4s ease slideTopOut forwards;\n}\n\n.tata.slide-bottom-in {\n  animation: .4s ease slideBottomIn forwards;\n}\n\n.tata.slide-bottom-out {\n  animation: .4s ease slideBottomOut forwards;\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: .9;\n  }\n}\n\n@keyframes fadeOut {\n  from {\n    opacity: .9;\n  }\n\n  to {\n    opacity: 0;\n  }\n}\n\n@keyframes slideRightIn {\n  from {\n    right: -310px;\n  }\n\n  to {\n    right: 12px;\n  }\n}\n\n@keyframes slideRightOut {\n  from {\n    right: 12px;\n  }\n\n  to {\n    right: -310px;\n  }\n}\n\n@keyframes slideLeftIn {\n  from {\n    left: -310px;\n  }\n\n  to {\n    left: 12px;\n  }\n}\n\n@keyframes slideLeftOut {\n  from {\n    left: 12px;\n  }\n\n  to {\n    left: -310px;\n  }\n}\n\n@keyframes slideTopIn {\n  from {\n    top: calc(-100% + -12px);\n  }\n  to {\n    top: 12px;\n  }\n}\n\n@keyframes slideTopOut {\n  from {\n    top: 12px;\n  }\n  to {\n    top: calc(-100% + -12px);\n  }\n}\n\n@keyframes slideBottomIn {\n  from {\n    bottom: calc(-100% + -18px);\n  }\n  to {\n    bottom: 18px;\n  }\n}\n\n@keyframes slideBottomOut {\n  from {\n    bottom: 18px;\n  }\n  to {\n    bottom: calc(-100% + -18px);\n  }\n}\n\n@keyframes reduceWidth {\n  from {\n    width: 100%;\n  }\n\n  to {\n    width: 0%;\n  }\n}",""])},function(t,n){function e(t,n){var e=t[1]||"",r=t[3];if(!r)return e;if(n&&"function"==typeof btoa){var i=o(r);return[e].concat(r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"})).concat([i]).join("\n")}return[e].join("\n")}function o(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var n=[];return n.toString=function(){return this.map(function(n){var o=e(n,t);return n[2]?"@media "+n[2]+"{"+o+"}":o}).join("")},n.i=function(t,e){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<t.length;r++){var a=t[r];"number"==typeof a[0]&&o[a[0]]||(e&&!a[2]?a[2]=e:e&&(a[2]="("+a[2]+") and ("+e+")"),n.push(a))}},n}},function(t,n,e){function o(t,n){for(var e=0;e<t.length;e++){var o=t[e],r=m[o.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](o.parts[i]);for(;i<o.parts.length;i++)r.parts.push(f(o.parts[i],n))}else{for(var a=[],i=0;i<o.parts.length;i++)a.push(f(o.parts[i],n));m[o.id]={id:o.id,refs:1,parts:a}}}}function r(t,n){for(var e=[],o={},r=0;r<t.length;r++){var i=t[r],a=n.base?i[0]+n.base:i[0],s=i[1],c=i[2],l=i[3],f={css:s,media:c,sourceMap:l};o[a]?o[a].parts.push(f):e.push(o[a]={id:a,parts:[f]})}return e}function i(t,n){var e=g(t.insertInto);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=x[x.length-1];if("top"===t.insertAt)o?o.nextSibling?e.insertBefore(n,o.nextSibling):e.appendChild(n):e.insertBefore(n,e.firstChild),x.push(n);else if("bottom"===t.insertAt)e.appendChild(n);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=g(t.insertInto+" "+t.insertAt.before);e.insertBefore(n,r)}}function a(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var n=x.indexOf(t);n>=0&&x.splice(n,1)}function s(t){var n=document.createElement("style");return t.attrs.type="text/css",l(n,t.attrs),i(t,n),n}function c(t){var n=document.createElement("link");return t.attrs.type="text/css",t.attrs.rel="stylesheet",l(n,t.attrs),i(t,n),n}function l(t,n){Object.keys(n).forEach(function(e){t.setAttribute(e,n[e])})}function f(t,n){var e,o,r,i;if(n.transform&&t.css){if(!(i=n.transform(t.css)))return function(){};t.css=i}if(n.singleton){var l=v++;e=b||(b=s(n)),o=u.bind(null,e,l,!1),r=u.bind(null,e,l,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=c(n),o=p.bind(null,e,n),r=function(){a(e),e.href&&URL.revokeObjectURL(e.href)}):(e=s(n),o=d.bind(null,e),r=function(){a(e)});return o(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;o(t=n)}else r()}}function u(t,n,e,o){var r=e?"":o.css;if(t.styleSheet)t.styleSheet.cssText=w(n,r);else{var i=document.createTextNode(r),a=t.childNodes;a[n]&&t.removeChild(a[n]),a.length?t.insertBefore(i,a[n]):t.appendChild(i)}}function d(t,n){var e=n.css,o=n.media;if(o&&t.setAttribute("media",o),t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}function p(t,n,e){var o=e.css,r=e.sourceMap,i=void 0===n.convertToAbsoluteUrls&&r;(n.convertToAbsoluteUrls||i)&&(o=y(o)),r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([o],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}var m={},h=function(t){var n;return function(){return void 0===n&&(n=t.apply(this,arguments)),n}}(function(){return window&&document&&document.all&&!window.atob}),g=function(t){var n={};return function(e){if(void 0===n[e]){var o=t.call(this,e);if(o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(t){o=null}n[e]=o}return n[e]}}(function(t){return document.querySelector(t)}),b=null,v=0,x=[],y=e(5);t.exports=function(t,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");n=n||{},n.attrs="object"==typeof n.attrs?n.attrs:{},n.singleton||(n.singleton=h()),n.insertInto||(n.insertInto="head"),n.insertAt||(n.insertAt="bottom");var e=r(t,n);return o(e,n),function(t){for(var i=[],a=0;a<e.length;a++){var s=e[a],c=m[s.id];c.refs--,i.push(c)}if(t){o(r(t,n),n)}for(var a=0;a<i.length;a++){var c=i[a];if(0===c.refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete m[c.id]}}}};var w=function(){var t=[];return function(n,e){return t[n]=e,t.filter(Boolean).join("\n")}}()},function(t,n){t.exports=function(t){var n="undefined"!=typeof window&&window.location;if(!n)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var e=n.protocol+"//"+n.host,o=e+n.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,n){var r=n.trim().replace(/^"(.*)"$/,function(t,n){return n}).replace(/^'(.*)'$/,function(t,n){return n});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(r))return t;var i;return i=0===r.indexOf("//")?r:0===r.indexOf("/")?e+r:o+r.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}}])});