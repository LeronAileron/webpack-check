!function(e){var t={};function s(o){if(t[o])return t[o].exports;var c=t[o]={i:o,l:!1,exports:{}};return e[o].call(c.exports,c,c.exports,s),c.l=!0,c.exports}s.m=e,s.c=t,s.d=function(e,t,o){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)s.d(o,c,function(t){return e[t]}.bind(null,c));return o},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=0)}([function(e,t,s){e.exports=s(1)},function(e,t,s){"use strict";s.r(t);s(2),s(3);console.log("Works!")},function(e,t,s){},function(e,t){for(var s=document.querySelectorAll(".to-hide--mobile"),o=document.querySelectorAll(".to-hide--ipad"),c=document.querySelectorAll(".to-hide--mac"),n=document.querySelector(".read-more"),i=document.querySelector(".read-less"),r=function(e){n.addEventListener("click",(function(){e.classList.remove("item--hide--mobile"),e.classList.remove("item--hide--ipad"),e.classList.remove("item--hide--mac"),n.classList.add("hidden"),i.classList.remove("hidden")}))},a=function(e){i.addEventListener("click",(function(){e.classList.add("item--hide--mobile"),i.classList.add("hidden"),n.classList.remove("hidden")}))},d=function(e){i.addEventListener("click",(function(){e.classList.add("item--hide--ipad"),i.classList.add("hidden"),n.classList.remove("hidden")}))},l=function(e){i.addEventListener("click",(function(){e.classList.add("item--hide--mac"),i.classList.add("hidden"),n.classList.remove("hidden")}))},u=0;u<s.length;u++)r(s[u]),a(s[u]);for(var f=0;f<o.length;f++)r(o[f]),d(o[f]);for(var h=0;h<c.length;h++)r(c[h]),l(c[h]);var m=document.querySelector(".brands"),g=document.querySelector(".devices");function b(e){return"Скрыть"===e.textContent?e.textContent="Показать все":e.textContent="Скрыть"}document.querySelectorAll(".more").forEach((function(e){e.addEventListener("click",(function(t){"brands"==t.target.id&&(m.classList.toggle("cards--short-list"),e.classList.toggle("more-button--rotate"),b(e)),"devices"==t.target.id&&(g.classList.toggle("cards--short-list"),e.classList.toggle("more-button--rotate"),b(e))}))}));var L=document.querySelector(".icon--the-burger"),p=document.querySelector(".page-holder"),k=document.querySelector(".side-menu");L.addEventListener("click",(function(){p.classList.toggle("page-holder--side-menu--show"),k.classList.toggle("side-menu--show")}));var v=document.querySelector(".icon--phone"),y=document.querySelector(".icon--message"),w=(document.querySelectorAll(".feedback"),document.querySelector(".feedback-call")),S=document.querySelector(".feedback-message"),q=document.querySelector(".icon--side-phone"),E=document.querySelector(".icon--side--message");v.addEventListener("click",(function(){p.classList.add("page-holder--feedback--show"),w.classList.add("feedback--show"),w.classList.contains("feedback--show")&&document.addEventListener("click",(function(e){e.target.closest(".icon--the-burger")||e.target.closest(".icon--phone")||e.target.closest(".feedback-phone")||(p.classList.remove("page-holder--feedback--show"),w.classList.remove("feedback--show"),console.log("phone"))}))})),q.addEventListener("click",(function(){p.classList.add("page-holder--feedback--show"),w.classList.add("feedback--show"),w.classList.contains("feedback--show")&&document.addEventListener("click",(function(e){e.target.closest(".icon--the-burger")||e.target.closest(".icon--side--phone")||e.target.closest(".feedback-phone")||(p.classList.remove("page-holder--feedback--show"),w.classList.remove("feedback--show"),console.log("phone"))}))})),y.addEventListener("click",(function(){p.classList.add("page-holder--feedback--show"),S.classList.add("feedback--show"),S.classList.contains("feedback--show")&&document.addEventListener("click",(function(e){e.target.closest(".icon--the-burger")||e.target.closest(".icon--message")||e.target.closest(".feedback-message")||(p.classList.remove("page-holder--feedback--show"),S.classList.remove("feedback--show"),console.log("message"))}))})),E.addEventListener("click",(function(){p.classList.add("page-holder--feedback--show"),S.classList.add("feedback--show"),S.classList.contains("feedback--show")&&document.addEventListener("click",(function(e){e.target.closest(".icon--the-burger")||e.target.closest(".icon--side--message")||e.target.closest(".feedback-message")||(p.classList.remove("page-holder--feedback--show"),S.classList.remove("feedback--show"),console.log("message"))}))}));new Swiper(".swiper",{direction:"horizontal",loop:!1,spaceBetween:16,breakpoints:{768:{enabled:!1,spaceBetween:24}},width:240,pagination:{el:".swiper-pagination",type:"bullets",clickable:!0},slideToClickedSlide:!0})}]);
//# sourceMappingURL=bundle.js.map