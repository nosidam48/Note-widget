(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(2),i=n.n(l),r=(n(15),n(16),n(3)),c=n(4),m=n(5),s=n(7),u=n(6),p=n(8),h=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={message:"",position:"topLeft",type:"alert"},n.handleChange=function(e){var t=e.target,a=t.name,o=t.value;n.setState(Object(r.a)({},a,o))},n.handleSubmit=function(e){e.preventDefault();var t=n.state.message,a=n.state.position,o=n.state.type;if(t){var l=document.getElementById(a),i=document.createElement("p");i.innerHTML=t,i.classList.add(o),"topLeft"!==a&&"topRight"!==a||l.prepend(i),"bottomLeft"!==a&&"bottomRight"!==a||l.append(i),setTimeout(function(){i.style.opacity="0",i.addEventListener("transitionend",function(){l.removeChild(i)},!1)},3e3)}else alert("You got nothing to say?!")},n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("form",null,o.a.createElement("label",{htmlFor:"message"},"Message:",o.a.createElement("input",{type:"text",value:this.state.message,onChange:this.handleChange,id:"message",name:"message"})),o.a.createElement("br",null),o.a.createElement("label",{htmlFor:"position"},"Location:",o.a.createElement("select",{value:this.state.position,onChange:this.handleChange,id:"position",name:"position"},o.a.createElement("option",{value:"topLeft"},"Top-left"),o.a.createElement("option",{value:"topRight"},"Top-right"),o.a.createElement("option",{value:"bottomLeft"},"Bottom-left"),o.a.createElement("option",{value:"bottomRight"},"Bottom-right"))),o.a.createElement("br",null),o.a.createElement("label",{htmlFor:"type"},"Type:",o.a.createElement("select",{value:this.state.type,onChange:this.handleChange,id:"type",name:"type"},o.a.createElement("option",{value:"info"},"Info"),o.a.createElement("option",{value:"alert"},"Alert"),o.a.createElement("option",{value:"warning"},"Warning"))),o.a.createElement("br",null),o.a.createElement("button",{type:"submit",id:"submit",onClick:this.handleSubmit},"Transmit")))}}]),t}(o.a.Component);var d=function(){return o.a.createElement("div",{className:"note",id:"bottomLeft"})};var v=function(){return o.a.createElement("div",{className:"note",id:"bottomRight"})};var E=function(){return o.a.createElement("div",{className:"note",id:"topLeft"})};var f=function(){return o.a.createElement("div",{className:"note",id:"topRight"})},g=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"Notefun"),o.a.createElement(E,null),o.a.createElement(f,null),o.a.createElement(d,null),o.a.createElement(v,null),o.a.createElement(h,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports=n(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.824f2bbd.chunk.js.map