(this.webpackJsonpcurrency_convertor=this.webpackJsonpcurrency_convertor||[]).push([[0],{40:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var n=c(2),s=c.n(n),a=c(15),r=c.n(a),i=c(3),o=c(6),l=c.n(o),j=c(0);function p(e){var t=e.handleInput,c=e.search;return Object(j.jsx)("section",{className:"searchbox",children:Object(j.jsx)("input",{type:"text",placeholder:"Search for a movie...",className:"input",onChange:t,onKeyPress:c})})}function u(e){var t=e.result,c=e.openPopup;return Object(j.jsxs)("div",{className:"result",onClick:function(){return c(t.imdbID)},children:[Object(j.jsx)("img",{src:t.Poster}),Object(j.jsx)("h3",{className:"title",children:t.Title}),Object(j.jsx)("h3",{className:"title2",children:t.Year})]})}function d(e){var t=e.results,c=e.openPopup;return Object(j.jsx)("section",{className:"results",children:t.map((function(e){return Object(j.jsx)(u,{result:e,openPopup:c},e.imdbID)}))})}function b(e){var t=e.pop,c=e.closedPopup;return Object(j.jsxs)("div",{className:"main-div",children:[Object(j.jsx)("h2",{className:"pop-title",children:t.Title}),Object(j.jsx)("h3",{className:"pop-year",children:t.Year}),Object(j.jsxs)("h3",{className:"pop-rating",children:["Rating:",t.imdbRating]}),Object(j.jsxs)("div",{className:"pop-image-div",children:[Object(j.jsx)("div",{className:"img-div-main",children:Object(j.jsx)("img",{src:t.Poster,alt:"Image",className:"pop-image"})}),Object(j.jsx)("p",{className:"pop-plot",children:t.Plot})]}),Object(j.jsx)("button",{onClick:c,children:"Close"})]})}c(40);var h=function(){var e=Object(n.useState)(),t=Object(i.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)([]),r=Object(i.a)(a,2),o=r[0],u=r[1],h=Object(n.useState)({}),m=Object(i.a)(h,2),O=m[0],x=m[1],v=" http://www.omdbapi.com/?apikey=b53d643a";return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("header",{children:"MovieSpot"}),Object(j.jsxs)("main",{children:[Object(j.jsx)(p,{handleInput:function(e){var t=e.target.value;s(t)},search:function(e){"Enter"===e.key&&l()(v+"&s="+c).then((function(e){var t=e.data.Search;console.log(t),void 0!==t?u(t):alert("Enter a valid movie name...!!!")}))}}),Object(j.jsx)(d,{results:o,openPopup:function(e){l()(v+"&i="+e).then((function(e){var t=e.data;x(t)}))}}),"undefined"!=typeof O.Title&&Object(j.jsx)(b,{pop:O,closedPopup:function(){x({})}})]})]})};r.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(h,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.2a8de0b8.chunk.js.map