(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){},18:function(e,t,c){},21:function(e,t,c){},22:function(e,t,c){"use strict";c.r(t);var i=c(7),s=c.n(i),a=(c(15),c(2)),n=c(1),r=(c(16),c(17),c(18),c(0)),l=function(e){var t=e.movie;return Object(r.jsxs)("div",{className:"card","data-cy":"movieCard",children:[Object(r.jsx)("div",{className:"card-image",children:Object(r.jsx)("figure",{className:"image is-4by3",children:Object(r.jsx)("img",{"data-cy":"moviePoster",src:t.imgUrl,alt:"Film logo"})})}),Object(r.jsxs)("div",{className:"card-content",children:[Object(r.jsxs)("div",{className:"media",children:[Object(r.jsx)("div",{className:"media-left",children:Object(r.jsx)("figure",{className:"image is-48x48",children:Object(r.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(r.jsx)("div",{className:"media-content",children:Object(r.jsx)("p",{className:"title is-8","data-cy":"movieTitle",children:t.title})})]}),Object(r.jsxs)("div",{className:"content","data-cy":"movieDescription",children:[t.description,Object(r.jsx)("br",{}),Object(r.jsx)("a",{href:t.imdbUrl,"data-cy":"movieURL",children:"IMDB"})]})]})]})},o=function(e){var t=e.movies;return Object(r.jsx)("div",{className:"movies",children:t.map((function(e){return Object(r.jsx)(l,{movie:e},e.imdbId)}))})},d=c(10),j=c(8),m=c(6),b=c.n(m),u=(c(21),c(9)),v=c.n(u);function h(e){return fetch("".concat("https://www.omdbapi.com/?apikey=your-key","&t=").concat(e)).then((function(e){return e.json()})).catch((function(){return{Response:"False",Error:"unexpected error"}}))}var O=function(e){var t=e.setMovies,c=Object(n.useState)(""),i=Object(a.a)(c,2),s=i[0],o=i[1],m=Object(n.useState)(null),u=Object(a.a)(m,2),O=u[0],x=u[1],p=Object(n.useState)(!1),f=Object(a.a)(p,2),N=f[0],g=f[1],y=Object(n.useState)(!1),w=Object(a.a)(y,2),I=w[0],k=w[1],S=function(){var e=Object(j.a)(b.a.mark((function e(t){var c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(t);case 2:if(!(c=e.sent).imdbID){e.next=8;break}return x({title:(i=c).Title,description:i.Plot,imgUrl:"N/A"===i.Poster?"https://via.placeholder.com/360x270.png?text=no%20preview":i.Poster,imdbUrl:"https://www.imdb.com/title/".concat(i.imdbID),imdbId:i.imdbID}),g(!1),k(!1),e.abrupt("return");case 8:g(!1),k(!0);case 10:case"end":return e.stop()}var i}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("form",{className:"find-movie",onSubmit:function(e){e.preventDefault(),S(s),g(!0)},children:[Object(r.jsxs)("div",{className:"field",children:[Object(r.jsx)("label",{className:"label",htmlFor:"movie-title",children:"Movie title"}),Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("input",{"data-cy":"titleField",type:"text",id:"movie-title",placeholder:"Enter a title to search",className:"input is-dander",value:s,onChange:function(e){o(e.target.value),k(!1)}})}),I&&Object(r.jsx)("p",{className:"help is-danger","data-cy":"errorMessage",children:"Can't find a movie with such a title"})]}),Object(r.jsxs)("div",{className:"field is-grouped",children:[Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("button",{"data-cy":"searchButton",type:"submit",disabled:!s.length,className:v()("button is-light",{"is-loading":N}),children:O?"Search again":"Find a movie"})}),O&&Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("button",{"data-cy":"addButton",type:"button",className:"button is-primary",onClick:function(){O&&(t((function(e){return e.some((function(e){return e.imdbId===O.imdbId}))?e:[].concat(Object(d.a)(e),[O])})),x(null),o(""),k(!1))},children:"Add to the list"})})]})]}),O&&Object(r.jsxs)("div",{className:"container","data-cy":"previewContainer",children:[Object(r.jsx)("h2",{className:"title",children:"Preview"}),Object(r.jsx)(l,{movie:O})]})]})},x=function(){var e=Object(n.useState)([]),t=Object(a.a)(e,2),c=t[0],i=t[1];return Object(r.jsxs)("div",{className:"page",children:[Object(r.jsx)("div",{className:"page-content",children:Object(r.jsx)(o,{movies:c})}),Object(r.jsx)("div",{className:"sidebar",children:Object(r.jsx)(O,{setMovies:i})})]})};s.a.render(Object(r.jsx)(x,{}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.8a07c64a.chunk.js.map