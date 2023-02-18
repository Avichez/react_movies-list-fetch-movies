(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){},18:function(e,t,c){},21:function(e,t,c){},22:function(e,t,c){"use strict";c.r(t);var i=c(7),a=c.n(i),n=(c(15),c(10)),s=c(2),r=c(1),l=c.n(r),o=(c(16),c(17),c(18),c(0)),d=function(e){var t=e.movie;return Object(o.jsxs)("div",{className:"card","data-cy":"movieCard",children:[Object(o.jsx)("div",{className:"card-image",children:Object(o.jsx)("figure",{className:"image is-4by3",children:Object(o.jsx)("img",{"data-cy":"moviePoster",src:t.imgUrl,alt:"Film logo"})})}),Object(o.jsxs)("div",{className:"card-content",children:[Object(o.jsxs)("div",{className:"media",children:[Object(o.jsx)("div",{className:"media-left",children:Object(o.jsx)("figure",{className:"image is-48x48",children:Object(o.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(o.jsx)("div",{className:"media-content",children:Object(o.jsx)("p",{className:"title is-8","data-cy":"movieTitle",children:t.title})})]}),Object(o.jsxs)("div",{className:"content","data-cy":"movieDescription",children:[t.description,Object(o.jsx)("br",{}),Object(o.jsx)("a",{href:t.imdbUrl,"data-cy":"movieURL",children:"IMDB"})]})]})]})},j=l.a.memo((function(e){var t=e.movies;return Object(o.jsx)("div",{className:"movies",children:t.map((function(e){return Object(o.jsx)(d,{movie:e},e.imdbId)}))})})),m=c(8),b=c(6),u=c.n(b),v=c(9),h=c.n(v),O=(c(21),"https://www.omdbapi.com/?apikey=".concat("bec8a251"));function x(e){return fetch("".concat(O,"&t=").concat(e)).then((function(e){return e.json()})).catch((function(){return{Response:"False",Error:"unexpected error"}}))}var p=function(e){var t=e.Title,c=e.Poster,i=e.Plot,a=e.imdbID;return{title:t,description:i,imgUrl:"N/A"===c?"https://via.placeholder.com/360x270.png?text=no%20preview":c,imdbUrl:"".concat("https://www.imdb.com/title/").concat(a),imdbId:a}},f=function(e){var t=e.onClickAddMovie,c=Object(r.useState)(null),i=Object(s.a)(c,2),a=i[0],n=i[1],l=Object(r.useState)(!0),j=Object(s.a)(l,2),b=j[0],v=j[1],O=Object(r.useState)(""),f=Object(s.a)(O,2),N=f[0],g=f[1],y=Object(r.useState)(!1),w=Object(s.a)(y,2),k=w[0],C=w[1],I=function(){var e=Object(m.a)(u.a.mark((function e(t){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,C(!0),v(!0),e.next=6,x(N);case 6:if(!("Error"in(c=e.sent))){e.next=9;break}throw new Error("Can't find movie such a ".concat(N));case 9:n(p(c)),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),v(!1);case 15:return e.prev=15,C(!1),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[1,12,15,18]])})));return function(t){return e.apply(this,arguments)}}();return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("form",{className:"find-movie",onSubmit:I,children:[Object(o.jsxs)("div",{className:"field",children:[Object(o.jsx)("label",{className:"label",htmlFor:"movie-title",children:"Movie title"}),Object(o.jsx)("div",{className:"control",children:Object(o.jsx)("input",{"data-cy":"titleField",type:"text",id:"movie-title",placeholder:"Enter a title to search",className:"input is-dander",value:N,onChange:function(e){g(e.target.value),b||v(!0)}})}),!b&&Object(o.jsx)("p",{className:"help is-danger","data-cy":"errorMessage",children:"Can't find a movie with such a title"})]}),Object(o.jsxs)("div",{className:"field is-grouped",children:[Object(o.jsx)("div",{className:"control",children:Object(o.jsx)("button",{"data-cy":"searchButton",type:"submit",className:h()("button is-light",{"is-loading":k}),disabled:!N,children:"Find a movie"})}),Object(o.jsx)("div",{className:"control",children:a&&Object(o.jsx)("button",{"data-cy":"addButton",type:"button",className:"button is-primary",onClick:function(){a&&t(a),g(""),n(null),v(!0)},children:"Add to the list"})})]})]}),a&&Object(o.jsxs)("div",{className:"container","data-cy":"previewContainer",children:[Object(o.jsx)("h2",{className:"title",children:"Preview"}),Object(o.jsx)(d,{movie:a})]})]})},N=function(){var e=Object(r.useState)([]),t=Object(s.a)(e,2),c=t[0],i=t[1],a=Object(r.useCallback)((function(e){c.some((function(t){return t.imdbId===e.imdbId}))||i((function(t){return[].concat(Object(n.a)(t),[e])}))}),[c]);return Object(o.jsxs)("div",{className:"page",children:[Object(o.jsx)("div",{className:"page-content",children:Object(o.jsx)(j,{movies:c})}),Object(o.jsx)("div",{className:"sidebar",children:Object(o.jsx)(f,{onClickAddMovie:a})})]})};a.a.render(Object(o.jsx)(N,{}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.91445219.chunk.js.map