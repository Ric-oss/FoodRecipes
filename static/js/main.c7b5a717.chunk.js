(this.webpackJsonpfoodproject=this.webpackJsonpfoodproject||[]).push([[0],{10:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),a=c(4),o=c.n(a),r=(c(9),c(2)),s=(c.p,c(10),c(0));var l=function(e){return Object(s.jsxs)("div",{className:"rcontain",children:[Object(s.jsx)("h1",{children:e.title}),Object(s.jsx)("img",{src:e.image,alt:""}),Object(s.jsx)("ol",{children:e.ingredients.map((function(e){return Object(s.jsx)("li",{children:e.text})}))}),Object(s.jsx)("p",{children:e.calories})]})};var j=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),c=t[0],i=t[1],a=Object(n.useState)(""),o=Object(r.a)(a,2),j=o[0],u=o[1],f=Object(n.useState)(""),b=Object(r.a)(f,2),d=b[0],p=b[1];Object(n.useEffect)((function(){console.log("useeffect"),O()}),[d]);var h=function(e){e.preventDefault(),console.log("submit"),p(j),console.log("before cleaning search"),u("")},O=function(){console.log("fetching data from apis");fetch("https://api.edamam.com/search?q=".concat(d,"&app_id=").concat("cdaaf1d1","&app_key=").concat("5f3035d5705cae5677366736fd53fff1")).then((function(e){return e.json()})).then((function(e){i(e.hits)}))};return Object(s.jsx)("div",{children:Object(s.jsxs)("div",{className:"container",children:[Object(s.jsxs)("form",{onSubmit:h,children:[Object(s.jsx)("input",{type:"text",value:j,onChange:function(e){u(e.target.value)}}),Object(s.jsx)("button",{type:"submit",onClick:h,children:"Search"})]}),Object(s.jsx)("div",{className:"recipe",children:c.map((function(e){return Object(s.jsx)(l,{title:e.recipe.label,calories:e.recipe.calories,image:e.recipe.image,ingredients:e.recipe.ingredients},e.recipe.label)}))})]})})},u=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,13)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,a=t.getLCP,o=t.getTTFB;c(e),n(e),i(e),a(e),o(e)}))};o.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(j,{})}),document.getElementById("root")),u()},9:function(e,t,c){}},[[12,1,2]]]);
//# sourceMappingURL=main.c7b5a717.chunk.js.map