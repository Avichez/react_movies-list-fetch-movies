(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){},18:function(e,t,c){},21:function(e,t,c){},22:function(e,t,c){"use strict";c.r(t);var i=c(7),a=c.n(i),s=(c(15),c(10)),n=c(2),r=c(1),o=c.n(r),l=(c(16),c(17),c(18),c(0)),d=function(e){var t=e.movie;return Object(l.jsxs)("div",{className:"card","data-cy":"movieCard",children:[Object(l.jsx)("div",{className:"card-image",children:Object(l.jsx)("figure",{className:"image is-4by3",children:Object(l.jsx)("img",{"data-cy":"moviePoster",src:t.imgUrl,alt:"Film logo"})})}),Object(l.jsxs)("div",{className:"card-content",children:[Object(l.jsxs)("div",{className:"media",children:[Object(l.jsx)("div",{className:"media-left",children:Object(l.jsx)("figure",{className:"image is-48x48",children:Object(l.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(l.jsx)("div",{className:"media-content",children:Object(l.jsx)("p",{className:"title is-8","data-cy":"movieTitle",children:t.title})})]}),Object(l.jsxs)("div",{className:"content","data-cy":"movieDescription",children:[t.description,Object(l.jsx)("br",{}),Object(l.jsx)("a",{href:t.imdbUrl,"data-cy":"movieURL",children:"IMDB"})]})]})]})},j=o.a.memo((function(e){var t=e.movies;return Object(l.jsx)("div",{className:"movies",children:t.map((function(e){return Object(l.jsx)(d,{movie:e},e.imdbId)}))})})),m=c(8),b=c(6),u=c.n(b),v=c(9),h=c.n(v),O=(c(21),"https://www.omdbapi.com/?apikey=".concat("bec8a251"));function x(e){return fetch("".concat(O,"&t=").concat(e)).then((function(e){return e.json()})).catch((function(){return{Response:"False",Error:"unexpected error"}}))}var p=function(e){var t=e.onClickAddMovie,c=Object(r.useState)(null),i=Object(n.a)(c,2),a=i[0],s=i[1],o=Object(r.useState)(!0),j=Object(n.a)(o,2),b=j[0],v=j[1],O=Object(r.useState)(""),p=Object(n.a)(O,2),f=p[0],N=p[1],g=Object(r.useState)(!1),y=Object(n.a)(g,2),w=y[0],k=y[1],C=function(){var e=Object(m.a)(u.a.mark((function e(t){var c,i,a,n,r,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,k(!0),v(!0),e.next=6,x(f);case 6:if(!("Error"in(c=e.sent))){e.next=9;break}throw new Error("Can't find movie such a ".concat(f));case 9:i=c.Title,a=c.Poster,n=c.Plot,r=c.imdbID,o={title:i,description:n,imgUrl:"N/A"===a?"https://via.placeholder.com/360x270.png?text=no%20preview":a,imdbUrl:"".concat("https://www.imdb.com/title/").concat(r),imdbId:r},s(o),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),v(!1);case 17:return e.prev=17,k(!1),e.finish(17);case 20:case"end":return e.stop()}}),e,null,[[1,14,17,20]])})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("form",{className:"find-movie",onSubmit:C,children:[Object(l.jsxs)("div",{className:"field",children:[Object(l.jsx)("label",{className:"label",htmlFor:"movie-title",children:"Movie title"}),Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("input",{"data-cy":"titleField",type:"text",id:"movie-title",placeholder:"Enter a title to search",className:"input is-dander",value:f,onChange:function(e){N(e.target.value),b||v(!0)}})}),!b&&Object(l.jsx)("p",{className:"help is-danger","data-cy":"errorMessage",children:"Can't find a movie with such a title"})]}),Object(l.jsxs)("div",{className:"field is-grouped",children:[Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{"data-cy":"searchButton",type:"submit",className:h()("button is-light",{"is-loading":w}),disabled:!f,children:"Find a movie"})}),Object(l.jsx)("div",{className:"control",children:a&&Object(l.jsx)("button",{"data-cy":"addButton",type:"button",className:"button is-primary",onClick:function(){a&&t(a),N(""),s(null),v(!0)},children:"Add to the list"})})]})]}),a&&Object(l.jsxs)("div",{className:"container","data-cy":"previewContainer",children:[Object(l.jsx)("h2",{className:"title",children:"Preview"}),Object(l.jsx)(d,{movie:a})]})]})},f=function(){var e=Object(r.useState)([]),t=Object(n.a)(e,2),c=t[0],i=t[1];return Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)("div",{className:"page-content",children:Object(l.jsx)(j,{movies:c})}),Object(l.jsx)("div",{className:"sidebar",children:Object(l.jsx)(p,{onClickAddMovie:function(e){c.some((function(t){return t.imdbId===e.imdbId}))||i((function(t){return[].concat(Object(s.a)(t),[e])}))}})})]})};a.a.render(Object(l.jsx)(f,{}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.5a9a9f30.chunk.js.map