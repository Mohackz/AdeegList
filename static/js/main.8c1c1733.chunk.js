(this.webpackJsonpadeeglist=this.webpackJsonpadeeglist||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(2),i=n.n(c),o=n(9),a=n.n(o),r=n(12),s=n(8),u=(n(17),n(18),n(10)),l=n(11),j=n(0),d=function(){return Object(j.jsx)("nav",{id:"app-nav",children:Object(j.jsxs)("div",{id:"app-logo",children:["Just show some ",Object(j.jsx)(u.a,{icon:l.a,color:"rebeccapurple"})]})})},p=(n(25),n(26),function(e){var t=e.onClick;return Object(j.jsx)("button",{className:"button",onClick:t,children:"Add"})}),b=(n(27),function(e){var t=e.onChange,n=e.value;return Object(j.jsx)("input",{type:"text",className:"input",placeholder:"Do not forget 2 kg of Hiliib",onChange:t,value:n})}),f=function(e){var t=e.onInputChange,n=e.onButtonClick,c=e.inputTextValue;return Object(j.jsxs)("header",{id:"app-header",children:[Object(j.jsx)("h1",{id:"app-header-title",children:"Adeeg List"}),Object(j.jsxs)("div",{id:"app-header-fields",children:[Object(j.jsx)(b,{onChange:t,value:c}),Object(j.jsx)(p,{onClick:n})]})]})},h=(n(28),function(e){var t=e.item,n=e.onClick,c=e.itemIndex;return Object(j.jsx)("li",{onClick:function(){return n(c)},className:"app-list-items ".concat(t.completed?"completed":""),children:t.task})}),x=(n(29),function(e){var t=e.items,n=e.onListItemsClick;return Object(j.jsx)("ul",{id:"app-list",children:t.map((function(e,t){return Object(j.jsx)(h,{itemIndex:t,item:e,onClick:n},t)}))})}),O=function(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),n=t[0],i=t[1],o=Object(c.useState)(""),a=Object(s.a)(o,2),u=a[0],l=a[1],p=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e&&(i([].concat(Object(r.a)(n),[{task:e,completed:t}])),l(""))};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(d,{}),Object(j.jsx)(f,{onInputChange:function(e){l(e.target.value)},inputTextValue:u,onButtonClick:function(){p(u)}}),Object(j.jsx)(x,{onListItemsClick:function(e){!function(e){var t=Array.from(n);t[e].completed=!t[e].completed,i(t)}(e)},items:n})]})};a.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(O,{})}),document.getElementById("root"))}],[[30,1,2]]]);
//# sourceMappingURL=main.8c1c1733.chunk.js.map