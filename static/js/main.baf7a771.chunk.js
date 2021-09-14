(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{10:function(e,t,n){e.exports={form:"PhonebookForm_form__3NUW9",label:"PhonebookForm_label__2d7zO",input:"PhonebookForm_input__JdvuE",btn:"PhonebookForm_btn__1hjGi"}},14:function(e,t,n){e.exports={enter:"pop_enter__135JA",enterActive:"pop_enterActive__1tr5Z",exit:"pop_exit__2nLi_",exitActive:"pop_exitActive__s0k3S"}},15:function(e,t,n){e.exports={list:"PhonebookList_list__3GWJ3",listItem:"PhonebookList_listItem__rmYD5",info:"PhonebookList_info__3c4Z9",btn:"PhonebookList_btn__1Sc5p"}},24:function(e,t,n){e.exports={filter:"Filter_filter__y1o24",input:"Filter_input__3ZpgM"}},31:function(e,t,n){e.exports={container:"Container_container__2ZSru"}},53:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var c,o=n(0),a=n(6),r=n.n(a),i=n(5),s=n(27),b=n(19),l=n(7),u=n(28),j=n.n(u),m=n(8),d=n(29),O=n.n(d),h=n(20),p=n(2),f=n(30),_=n.n(f),x=Object(l.b)("contacts/add",(function(e,t){return{payload:{id:_.a.generate(),name:e,number:t}}})),v=Object(l.b)("contacts/delete"),k=Object(l.b)("contacts/filter"),g=Object(l.c)([],(c={},Object(h.a)(c,x,(function(e,t){var n=t.payload;return[].concat(Object(b.a)(e),[n])})),Object(h.a)(c,v,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),c)),N=Object(l.c)("",Object(h.a)({},k,(function(e,t){return t.payload}))),y=Object(p.b)({items:g,filter:N}),C=[].concat(Object(b.a)(Object(l.d)({serializableCheck:{ignoredActions:[m.a,m.f,m.b,m.c,m.d,m.e]}})),[j.a]),E={key:"contacts",storage:O.a,blacklist:["filter"]},w=Object(l.a)({reducer:{contacts:Object(m.g)(E,y)},middleware:C,devTools:!1}),P=Object(m.h)(w),L=(n(53),n(9)),F=(n(54),n(31)),A=n.n(F),S=n(1);function I(e){var t=e.children;return Object(S.jsx)("div",{className:A.a.container,children:t})}var J=n(25),Z=n(10),z=n.n(Z),D=n(32),G=n.n(D),T=function(e){return e.contacts.items},W=function(e){return e.contacts.filter},Y=function(e){var t=T(e),n=W(e).toLowerCase();return t.filter((function(e){return e.name.toLowerCase().includes(n)}))};function B(){var e=Object(i.b)(),t=Object(i.c)(T),n=Object(o.useState)(""),c=Object(J.a)(n,2),a=c[0],r=c[1],s=Object(o.useState)(""),b=Object(J.a)(s,2),l=b[0],u=b[1],j=function(e){var t=e.currentTarget,n=t.name,c=t.value;switch(n){case"name":r(c);break;case"number":u(c);break;default:return}},m=function(){r(""),u("")};return Object(S.jsxs)("form",{className:z.a.form,onSubmit:function(n){n.preventDefault(),!function(e){return t.find((function(t){return t.name.toLowerCase()===e.toLowerCase()}))}(a)?!function(e){return t.find((function(t){return t.number===e}))}(l)?!function(e,t){return""===e.trim()||""===t.trim()}(a,l)?!function(e){return!/\d{3}[-]\d{2}[-]\d{2}/g.test(e)}(l)?e(x(a,l)):L.b.error("\ud83d\udca9 Enter the correct number phone!"):L.b.info("\ud83d\ude31 Enter the contact's name and number phone!"):Object(L.b)("\ud83e\udd14 ".concat(l," is already in the phonebook.")):Object(L.b)("\ud83e\udd14 ".concat(a," is already in the phonebook.")),m()},children:[Object(S.jsxs)("label",{className:z.a.label,children:["Name",Object(S.jsx)("input",{className:z.a.input,type:"text",name:"name",value:a,onChange:j,placeholder:"Ivan Ivanov"})]}),Object(S.jsxs)("label",{className:z.a.label,children:["Number",Object(S.jsx)(G.a,{options:{delimiter:"-",blocks:[3,2,2]},type:"tel",name:"number",value:l,onChange:j,className:z.a.input,placeholder:"111-11-11"})]}),Object(S.jsx)("button",{type:"submit",className:z.a.btn,children:"Add contact"})]})}var M=n(58),U=n(59),q=n(15),H=n.n(q),K=n(14),Q=n.n(K),R=n(33);function V(){var e=Object(i.b)(),t=Object(i.c)(Y),n=Object(i.c)(T);return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(M.a,{in:!n.length,timeout:250,classNames:Q.a,mountOnEnter:!0,unmountOnExit:!0,children:Object(S.jsx)("p",{children:"Your phonebook is empty. Please add contact."})}),Object(S.jsx)(U.a,{component:"ul",className:H.a.list,children:t.map((function(t){var n=t.id,c=t.name,o=t.number;return Object(S.jsx)(M.a,{timeout:250,mountOnEnter:!0,unmountOnExit:!0,classNames:Q.a,children:Object(S.jsxs)("li",{className:H.a.listItem,children:[Object(S.jsxs)("p",{className:H.a.info,children:[Object(S.jsx)("b",{children:c}),Object(S.jsx)("em",{children:o})]}),Object(S.jsx)(R.a,{color:"red",size:"20px",className:H.a.btn,type:"button",onClick:function(){return e(v(n))}})]})},n)}))})]})}var X=n(24),$=n.n(X);function ee(){var e=Object(i.b)(),t=Object(i.c)(W),n=Object(i.c)(T);return Object(S.jsx)(M.a,{in:n.length>0,timeout:250,classNames:Q.a,mountOnEnter:!0,unmountOnExit:!0,children:Object(S.jsxs)("div",{className:$.a.filter,children:["Find contacts by name"," ",Object(S.jsx)("input",{className:$.a.input,type:"text",value:t,onChange:function(t){return e(k(t.target.value))},placeholder:"Enter name"})]})})}function te(){return Object(S.jsxs)(I,{children:[Object(S.jsx)("h1",{children:"Phonebook"}),Object(S.jsx)(B,{}),Object(S.jsx)("h2",{children:"Contacts"}),Object(S.jsx)(ee,{}),Object(S.jsx)(V,{}),Object(S.jsx)(L.a,{autoClose:3e3,theme:"colored",toastStyle:{backgroundColor:"red"}})]})}r.a.render(Object(S.jsx)(i.a,{store:w,children:Object(S.jsx)(s.a,{loading:null,persistor:P,children:Object(S.jsx)(te,{})})}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.baf7a771.chunk.js.map