(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{335:function(e,t,n){"use strict";function r(e,t,n,r,o,c,a){try{var i=e[c](a),s=i.value}catch(e){return void n(e)}i.done?t(s):Promise.resolve(s).then(r,o)}function o(e){return function(){var t=this,n=arguments;return new Promise(function(o,c){var a=e.apply(t,n);function i(e){r(a,o,c,i,s,"next",e)}function s(e){r(a,o,c,i,s,"throw",e)}i(void 0)})}}n.r(t),n.d(t,"fetchLatestNews",function(){return c}),n.d(t,"fillModal",function(){return a});var c=function(){var e=o(regeneratorRuntime.mark(function e(){var t,n,r,o,c;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"b85765f3a10a43be9e59ec9706558361","in","cricket","2019-06-4",t="https://newsapi.org/v2/top-headlines?country=".concat("in","&apiKey=").concat("b85765f3a10a43be9e59ec9706558361","&q=").concat("cricket","&from=").concat("2019-06-4","&sortBy=popularity"),n=new Request(t),r=fetch(n),e.next=9,r;case 9:return o=e.sent,e.next=12,o.json();case 12:return c=e.sent,console.log(c),e.abrupt("return",c);case 15:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();function a(e){return i.apply(this,arguments)}function i(){return(i=o(regeneratorRuntime.mark(function e(t){var n,r,o,c,a,i,s,u,l;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:for(console.log(t),n=document.querySelector(".headlines"),console.log(n),r=t.articles.length,console.log(r),o=0;o<r;o++)n.insertAdjacentHTML("beforeend",'\n        <div class="card" style=" margin: 1rem 0">\n            <img class="card-img-top newsImg" src="" alt="">\n            <div class="card-body">\n                <p class="card-text articleTitle"> </p>\n            </div>\n        </div>\n        ');for(c=Array.from(document.querySelectorAll(".newsImg")),a=Array.from(document.querySelectorAll(".articleTitle")),console.log(a),i=t.articles,s=t.status,u=i,l=0;l<r;l++)c[l].setAttribute("src","".concat(u[l].urlToImage)),c[l].setAttribute("alt","".concat(u[l].title)),a[l].innerHTML=u[l].description;console.log(u),console.log(s);case 14:case"end":return e.stop()}},e)}))).apply(this,arguments)}}}]);
//# sourceMappingURL=2.bundle.js.map