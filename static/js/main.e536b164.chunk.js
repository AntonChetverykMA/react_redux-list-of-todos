(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{21:function(e,t,n){e.exports=n(32)},30:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(9),c=n.n(r),l=n(4),s=n(20),u=n(5),i=n(7),d=n(18),m=n(19),f=function(){return function(e){var t,n;(t="todos",fetch("".concat("https://mate-api.herokuapp.com/").concat(t),n).then((function(e){if(!e.ok)throw new Error("".concat(e.status));return e.json()}))).then((function(t){return e({type:"GET_TODOS",todos:t.data})}))}},g=function(e){return e.loading},b=function(e){return e.message},O={loading:!1,message:"",todos:[]},p=Object(i.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"START_LOADING":return Object(u.a)(Object(u.a)({},e),{},{loading:!0});case"FINISH_LOADING":return Object(u.a)(Object(u.a)({},e),{},{loading:!1,message:t.message});case"GET_TODOS":return console.log("todos"),Object(u.a)(Object(u.a)({},e),{},{todos:t.todos});default:return e}}),Object(d.composeWithDevTools)(Object(i.applyMiddleware)(m.a))),h=(n(30),{load:function(){return{type:"START_LOADING"}}}),E=Object(l.b)((function(e){return{loading:g(e)}}),h)((function(e){var t=e.load,n=e.loading,a=e.title;return o.a.createElement("button",{type:"button",onClick:t,disabled:n},a)})),j=function(e){var t=e.title,n=e.message,a=Object(l.c)(),r=Object(l.d)(g);return o.a.createElement("button",{type:"button",onClick:function(){a(f()),a(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"No message";return{type:"FINISH_LOADING",message:e}}(n))},disabled:!r},t)},v=function(){var e=Object(l.d)(g),t=Object(l.d)(b)||"Ready!";return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"Redux list of todos"),o.a.createElement("h2",null,e?"Loading...":t),o.a.createElement(E,{title:"Start loading"}),o.a.createElement(j,{title:"Succeed loading",message:"Loaded successfully!"}),o.a.createElement(j,{title:"Fail loading",message:"An error occurred when loading data."}))},y=function(){return o.a.createElement(l.a,{store:p},o.a.createElement(s.a,null,o.a.createElement(v,null)))};c.a.render(o.a.createElement(y,null),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.e536b164.chunk.js.map