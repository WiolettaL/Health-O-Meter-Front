(this["webpackJsonphom-front"]=this["webpackJsonphom-front"]||[]).push([[0],{75:function(e,t,n){},76:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n(0),i=n.n(a),r=n(10),s=n.n(r),o=(n(75),n(23)),l=n(11),j=n(127),u=n(130),d=n(132),b=n(134),h=n(135),O=n(133),x=n(50),m=n.n(x),p=(n(76),function(e){var t=Object(j.a)((function(e){return{root:{flexGrow:1},button:{marginRight:"2.5rem"},appBar:{backgroundColor:"#184d47"},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},hidden:{display:"none"}}}))();return Object(c.jsx)(u.a,{className:t.appBar,position:"static",children:Object(c.jsxs)(d.a,{children:[Object(c.jsx)(O.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"menu",children:e.isLoggedIn?Object(c.jsx)(m.a,{}):Object(c.jsx)(m.a,{className:t.hidden})}),Object(c.jsx)(b.a,{variant:"h6",className:t.title,children:"Health-O-Meter"}),Object(c.jsx)(o.b,{className:"Link",to:e.linkTo1,children:Object(c.jsx)(h.a,{className:t.button,color:"inherit",children:e.navMenuBtn1})}),Object(c.jsx)(o.b,{className:"Link",to:e.linkTo2,children:Object(c.jsx)(h.a,{className:t.button,color:"inherit",children:e.navMenuBtn2})})]})})}),g=(n(83),function(e){return Object(c.jsxs)("div",{className:"HeaderBox",children:[Object(c.jsx)("span",{children:e.children}),Object(c.jsx)("p",{className:"HeaderBox-txt",children:e.text})]})}),f=n.p+"static/media/Header.bcbc4d00.svg",k=n(136),w=n(58),v=n.n(w),y=n(59),N=n.n(y),C=n(60),z=n.n(C),B=(n(84),function(){return Object(c.jsx)("header",{className:"Header",children:Object(c.jsxs)(k.a,{container:!0,direction:"row",justify:"space-around",alignItems:"center",children:[Object(c.jsx)("img",{className:"Header-svg",src:f,alt:"Header"}),Object(c.jsx)(g,{text:"Zadbaj o swoje zdrowie",children:Object(c.jsx)(v.a,{})}),Object(c.jsx)(g,{text:"Zapisuj wyniki bada\u0144",children:Object(c.jsx)(N.a,{})}),Object(c.jsx)(g,{text:"i \u015bled\u017a rezultaty na przestrzeni czasu",children:Object(c.jsx)(z.a,{})})]})})}),M=function(){return Object(c.jsxs)(i.a.Fragment,{children:[Object(c.jsx)(p,{navMenuBtn1:"Utw\xf3rz konto",linkTo1:"/signup",navMenuBtn2:"Zaloguj si\u0119",linkTo2:"/signin"}),Object(c.jsx)(B,{})]})},I=n(137),S=(n(85),function(){var e=Object(j.a)((function(e){return{btnOutlined:{color:"#21665e","&:hover":{backgroundColor:"#f9fcf7"},margin:".8rem"},btnFilled:{color:"#c9eab2",backgroundColor:"#7e9e68",margin:".8rem","&:hover":{backgroundColor:"#2a756c"}},rowButtons:{margin:"2rem"}}}))();return Object(c.jsxs)("form",{className:"Login-form",noValidate:!0,autoComplete:"off",children:[Object(c.jsxs)(k.a,{container:!0,direction:"column",justify:"center",alignItems:"center",children:[Object(c.jsx)("h1",{className:"Login-heading",children:"Logowanie"}),Object(c.jsx)(I.a,{required:!0,id:"standard-required",label:"Login",color:"secondary"}),Object(c.jsx)(I.a,{id:"standard-password-input",label:"Has\u0142o",type:"password",autoComplete:"current-password",color:"secondary"})]}),Object(c.jsxs)(k.a,{className:e.rowButtons,container:!0,direction:"row",justify:"center",alignItems:"center",children:[Object(c.jsx)(o.b,{to:"/logged",children:Object(c.jsx)(h.a,{className:e.btnFilled,variant:"outlined",children:"Zaloguj"})}),Object(c.jsx)(h.a,{className:e.btnOutlined,variant:"contained",children:"Przypomnij has\u0142o"})]})]})}),H=(n(86),function(){return Object(c.jsx)("footer",{className:"Footer",children:Object(c.jsx)("p",{children:"Lorem Ipsilum, 2020 Copyrights, etc."})})}),L=n.p+"static/media/LoginSvg.56b2e73c.svg",R=(n(87),function(){return Object(c.jsxs)(i.a.Fragment,{children:[Object(c.jsx)(p,{navMenuBtn1:"Strona G\u0142\xf3wna",linkTo1:"/",navMenuBtn2:"Utw\xf3rz konto",linkTo2:"/signup"}),Object(c.jsxs)(k.a,{container:!0,direction:"row",justify:"space-around",alignItems:"center",children:[Object(c.jsx)("img",{className:"Login-svg",src:L,alt:"Login"}),Object(c.jsx)(S,{})]})]})}),W=n(13),F=(n(88),n(89),function(e){return Object(c.jsxs)("div",{onClick:e.onClick,className:e.primaryClassName,children:[Object(c.jsx)("img",{className:"OptionBox-img",alt:e.alt,src:e.src}),Object(c.jsx)("p",{className:"OptionBox-txt",children:e.txt})]})}),T=(n(90),n(53)),E=n.n(T),K=n(61),G=function(){var e=Object(K.a)(E.a.mark((function e(t,n,c){var a,i;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(n,{method:c,mode:"cors",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 2:return a=e.sent,e.prev=3,e.next=6,a.json();case 6:return i=e.sent,e.abrupt("return",i);case 10:e.prev=10,e.t0=e.catch(3),console.log("Error:",e.t0);case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t,n,c){return e.apply(this,arguments)}}(),P=function(e){var t=Object(a.useState)(null),n=Object(W.a)(t,2),i=n[0],r=n[1],s=Object(a.useState)(null),o=Object(W.a)(s,2),l=o[0],j=o[1],u=Object(a.useState)(null),d=Object(W.a)(u,2),b=d[0],h=d[1],O="https://healthomater.herokuapp.com/hom/bmi?height=".concat(l,"&weight=").concat(i);return null==b?Object(c.jsxs)("div",{className:e.classes,children:[Object(c.jsx)("h2",{children:"Kalkulator BMI"}),Object(c.jsx)("p",{children:"Wprowad\u017a nast\u0119puj\u0105ce informacje: "}),Object(c.jsx)("label",{forHtml:"height",children:"Wzrost:"}),Object(c.jsx)("input",{onInput:function(e){return j(e.target.value)},type:"number",id:"height",name:"height"}),Object(c.jsx)("label",{forHtml:"weight",children:"Waga:"}),Object(c.jsx)("input",{onInput:function(e){return r(e.target.value)},type:"number",id:"weight",name:"weight"}),Object(c.jsx)("button",{onClick:function(){return G(undefined,O,"GET").then((function(e){h(e)}))},children:"Oblicz"})]}):Object(c.jsxs)("div",{className:e.classes,children:[Object(c.jsx)("h2",{children:"Kalkulator BMI"}),Object(c.jsxs)("p",{children:["Tw\xf3j wska\u017anik BMI wynosi ",b]}),Object(c.jsx)("button",{onClick:function(){h(null)},children:"Oblicz jeszcze raz"})]})},U=function(e){var t=Object(a.useState)(null),n=Object(W.a)(t,2),i=n[0],r=n[1],s=Object(a.useState)(null),o=Object(W.a)(s,2),l=o[0],j=o[1],u=Object(a.useState)(null),d=Object(W.a)(u,2),b=d[0],h=d[1],O=Object(a.useState)(null),x=Object(W.a)(O,2),m=x[0],p=x[1],g="https://healthomater.herokuapp.com/hom/rfm?gender=".concat(i,"&height=").concat(l,"&waistRatio=").concat(b);return null==m?Object(c.jsxs)("div",{className:e.classes,children:[Object(c.jsx)("h2",{children:"Kalkulator RFM"}),Object(c.jsx)("p",{children:"Wprowad\u017a nast\u0119puj\u0105ce informacje: "}),Object(c.jsx)("label",{forHtml:"gender",children:"P\u0142e\u0107:"}),Object(c.jsxs)("select",{name:"gender",id:"genderChoice",children:[Object(c.jsx)("option",{disabled:!0,children:"Wybierz jedn\u0105 z opcji:"}),Object(c.jsx)("option",{onClick:function(){return r("FEMALE")},children:"Kobieta"}),Object(c.jsx)("option",{onClick:function(){return r("MALE")},children:"M\u0119\u017cczyzna"})]}),Object(c.jsx)("label",{forHtml:"height",children:"Wzrost:"}),Object(c.jsx)("input",{onInput:function(e){return j(e.target.value)},type:"number",id:"height",name:"height"}),Object(c.jsx)("label",{forHtml:"waistCircum",children:"Obw\xf3d talii:"}),Object(c.jsx)("input",{onInput:function(e){return h(e.target.value)},type:"number",id:"waistRat",name:"waistRat"}),Object(c.jsx)("button",{onClick:function(){return G(undefined,g,"GET").then((function(e){p(e)}))},children:"Oblicz"})]}):Object(c.jsxs)("div",{className:e.classes,children:[Object(c.jsx)("h2",{children:"Kalkulator RFM"}),Object(c.jsxs)("p",{children:["Tw\xf3j wska\u017anik RFM wynosi ",m]}),Object(c.jsx)("button",{onClick:function(){p(null)},children:"Oblicz jeszcze raz"})]})},Z=function(e){var t=Object(a.useState)(null),n=Object(W.a)(t,2),i=n[0],r=n[1],s=Object(a.useState)(null),o=Object(W.a)(s,2),l=o[0],j=o[1],u=Object(a.useState)(null),d=Object(W.a)(u,2),b=d[0],h=d[1],O="https://healthomater.herokuapp.com/hom/whr?waistRatio=".concat(l,"&hipRatio=").concat(i);return null==b?Object(c.jsxs)("div",{className:e.classes,children:[Object(c.jsx)("h2",{children:"Kalkulator WHR"}),Object(c.jsx)("p",{children:"Wprowad\u017a nast\u0119puj\u0105ce informacje: "}),Object(c.jsx)("label",{forHtml:"waistCircum",children:"Obw\xf3d talii:"}),Object(c.jsx)("input",{onInput:function(e){return j(e.target.value)},type:"number",id:"waistRat",name:"waistRat"}),Object(c.jsx)("label",{forHtml:"hipsCircum",children:"Obw\xf3d bioder:"}),Object(c.jsx)("input",{onInput:function(e){return r(e.target.value)},type:"number",id:"waistRat",name:"waistRat"}),Object(c.jsx)("button",{onClick:function(){return G(undefined,O,"GET").then((function(e){h(e)}))},children:"Oblicz"})]}):Object(c.jsxs)("div",{className:e.classes,children:[Object(c.jsx)("h2",{children:"Kalkulator WHR"}),Object(c.jsxs)("p",{children:["Tw\xf3j wska\u017anik WHR wynosi ",b]}),Object(c.jsx)("button",{onClick:function(){h(null)},children:"Oblicz jeszcze raz"})]})},A=n.p+"static/media/healthReport.dd76c9a2.svg",J=n.p+"static/media/calculators.79dc27b5.svg",q=n.p+"static/media/chart.7d86bc97.svg",D=(n(92),function(){var e=Object(j.a)((function(e){return{btnFilled:{color:"#c9eab2",backgroundColor:"#7e9e68",marginLeft:"50%",transform:"translateX(-50%)",display:"block","&:hover":{backgroundColor:"#2a756c"}}}}))(),t=Object(a.useState)(!0),n=Object(W.a)(t,2),r=n[0],s=n[1],o=Object(a.useState)(!0),l=Object(W.a)(o,2),u=l[0],d=l[1],b=Object(a.useState)(!0),O=Object(W.a)(b,2),x=O[0],m=O[1],g=Object(a.useState)(null),f=Object(W.a)(g,2),w=f[0],v=f[1],y=Object(a.useState)("hidden"),N=Object(W.a)(y,2),C=N[0],z=N[1],B=function(){s(!0),d(!0),m(!0),v(null),z("hidden")};return Object(c.jsxs)(i.a.Fragment,{children:[Object(c.jsx)(p,{isLoggedIn:!0,navMenuBtn1:"Moje konto",linkTo1:"/logged",navMenuBtn2:"Wyloguj",linkTo2:"/signout"}),Object(c.jsxs)("main",{className:"LoggedUserPage",children:[Object(c.jsxs)(k.a,{container:!0,direction:"row",justify:"center",alignItems:"center",children:[Object(c.jsx)(F,{onClick:function(){return s(!1),d(!1),m(!1),void v(Object(c.jsx)(h.a,{onClick:B,className:e.btnFilled,variant:"contained",children:"Wr\xf3\u0107"}))},primaryClassName:r?"OptionBox":"OptionBox hidden",alt:"Wyniki",src:A,txt:"Dodaj swoje wyniki bada\u0144"}),Object(c.jsx)(F,{onClick:function(){return d(!1),s(!1),m(!1),z("CalculatorBMI"),void v(Object(c.jsx)(h.a,{onClick:B,className:e.btnFilled,variant:"contained",children:"Wr\xf3\u0107"}))},alt:"Kalkulatory",primaryClassName:u?"OptionBox":"hidden",src:J,txt:"Skorzystaj z kalkulator\xf3w dietetycznych"}),Object(c.jsx)(F,{onClick:function(){return m(!1),s(!1),d(!1),void v(Object(c.jsx)(h.a,{onClick:B,className:e.btnFilled,variant:"contained",children:"Wr\xf3\u0107"}))},alt:"Wykresy",primaryClassName:x?"OptionBox":"hidden",src:q,txt:"\u015aled\u017a wyniki"})]}),Object(c.jsxs)(k.a,{className:"LoggedUserPage-calc",container:!0,direction:"row",justify:"center",alignItems:"center",children:[Object(c.jsx)(P,{classes:C}),Object(c.jsx)(U,{classes:C}),Object(c.jsx)(Z,{classes:C})]}),Object(c.jsx)("div",{className:"LoggedUserPage-btnWrapper",children:w})]})]})}),V=function(){return Object(c.jsxs)(i.a.Fragment,{children:[Object(c.jsx)(l.a,{path:"/",exact:!0,component:M}),Object(c.jsx)(l.a,{path:"/signin",component:R}),Object(c.jsx)(l.a,{path:"/logged",component:D}),Object(c.jsx)(l.a,{path:"/signout",component:M})," "]})},X=(n(93),function(){return Object(c.jsx)(o.a,{children:Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(V,{}),Object(c.jsx)(H,{})]})})});s.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(X,{})}),document.getElementById("root"))}},[[94,1,2]]]);
//# sourceMappingURL=main.1dce109b.chunk.js.map