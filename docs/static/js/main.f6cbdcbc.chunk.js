(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var r=n(5),a=n.n(r),c=n(2),s=n(1),i=n(0),o=function(e){var t=e.setQuery,n=Object(s.useState)(""),r=Object(c.a)(n,2),a=r[0],o=r[1];return Object(i.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),t(a),o("")}(e)},children:[Object(i.jsx)("input",{value:a,onChange:function(e){return function(e){o(e.target.value)}(e)},className:"mr-8",type:"text",placeholder:"\xa1Busca tu pel\xedcula"}),Object(i.jsx)("button",{children:"Buscar"})]})},u=function(e){var t=e.movie;return Object(i.jsx)("div",{className:"gridImages grid gap-8",children:"Sin poster"!==t.poster&&Object(i.jsxs)("div",{className:"movieItem text-center p-5 bg-white rounded-md",children:[Object(i.jsx)("img",{className:"u-max-full-width rounded-xl",src:t.poster,alt:t.title}),Object(i.jsx)("h5",{children:t.title}),Object(i.jsx)("small",{className:"nota bg-yellow-400 p-3 rounded-full font-bold text-2xl",children:t.nota}),Object(i.jsx)("p",{className:"-ml-2",children:t.fechaEstreno}),Object(i.jsx)("p",{className:"descripcion mb-2",children:t.resumen.substr(0,80)+"..."})]})})},d=n(4),p=n.n(d),l=n(6),b=function(){var e=Object(l.a)(p.a.mark((function e(t){var n,r,a,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"594939a196832017634a0d7b0271311b",e.next=3,fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat("594939a196832017634a0d7b0271311b","&query=").concat(t));case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,a=r.results,c=a.map((function(e){return{id:e.id,title:e.title,nota:e.vote_average,resumen:e.overview,fechaEstreno:e.release_date,poster:e.poster_path?"https://image.tmdb.org/t/p/w500/".concat(e.poster_path):"Sin poster",backdrop:e.backdrop_path?"https://image.tmdb.org/t/p/w500/".concat(e.backdrop_path):"Sin backdrop"}})),e.abrupt("return",c);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(e){var t=Object(s.useState)({data:[],loading:!0}),n=Object(c.a)(t,2),r=n[0],a=n[1];return Object(s.useEffect)((function(){r.data[0]&&a({data:[],loading:!0}),b(e).then((function(e){return setTimeout((function(){a({data:e,loading:!1})}),2e3)}))}),[e]),r},m=function(e){var t=e.query,n=j(t),r=n.loading,a=n.data;return Object(i.jsxs)("div",{children:[Object(i.jsx)("h4",{children:t}),r&&"Cargando datos...",Object(i.jsx)("div",{className:"gridImages grid gap-8",children:a.map((function(e){return"Sin poster"!==e.poster&&Object(i.jsx)(u,{movie:e},e.id)}))})]})},h=function(){var e=Object(s.useState)("Matrix"),t=Object(c.a)(e,2),n=t[0],r=t[1];return Object(i.jsxs)("div",{className:"mt-24 text-center",children:[Object(i.jsx)("h1",{children:"MovieApp"}),Object(i.jsx)(o,{setQuery:r}),Object(i.jsx)(m,{query:n})]})};n(13),n(14);a.a.render(Object(i.jsx)(h,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.f6cbdcbc.chunk.js.map