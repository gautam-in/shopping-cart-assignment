!function(t){var e={};function r(n){if(e[n])return e[n].exports;var a=e[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){r(1),t.exports=r(2)},function(t,e,r){var n=document.getElementById("carousel"),a=3;function o(t){c[t].setAttribute("data-state",""),a[t].setAttribute("data-state",""),a[t].style.opacity=0}function u(t){c[t].checked=!0,c[t].setAttribute("data-state","active"),a[t].setAttribute("data-state","active"),a[t].style.opacity=1}function i(t){return function(){for(var e=0;e<c.length;e++)c[e].setAttribute("data-state",""),a[e].setAttribute("data-state",""),o(e);c[t].setAttribute("data-state","active"),a[t].setAttribute("data-state","active"),u(t),clearInterval(l)}}if(n){a=n.querySelectorAll(".slide");for(var c=n.querySelectorAll(".indicator"),l=setInterval((function(){!function(){for(var t=0,e=0;e<c.length;e++)"active"==c[e].getAttribute("data-state")&&e!==c.length-1&&(t=e+1),o(e);u(t)}()}),7e3),f=0;f<c.length;f++)c[f].addEventListener("click",i(f))}console.log("hello")},function(t,e,r){}]);
//# sourceMappingURL=app.bundle.js.map