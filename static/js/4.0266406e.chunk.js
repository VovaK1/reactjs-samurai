(this["webpackJsonp01-project"]=this["webpackJsonp01-project"]||[]).push([[4],{87:function(e,s,t){"use strict";t.d(s,"a",(function(){return g}));var n=t(2),a=t(21),i=t(22),c=t(24),o=t(23),r=t(0),u=t.n(r),l=t(4),d=t(13),j=t(1),b=function(e){return{isAuth:e.auth.isAuth}},g=function(e){var s=function(s){Object(c.a)(r,s);var t=Object(o.a)(r);function r(){return Object(a.a)(this,r),t.apply(this,arguments)}return Object(i.a)(r,[{key:"render",value:function(){return this.props.isAuth?Object(j.jsx)(e,Object(n.a)({},this.props)):Object(j.jsx)(l.a,{to:"/login"})}}]),r}(u.a.Component);return Object(d.b)(b)(s)}},90:function(e,s,t){e.exports={dialogs:"Dialogs_dialogs__2xRSA",dialogsList:"Dialogs_dialogsList__137kM",messagesList:"Dialogs_messagesList__3P5tp"}},91:function(e,s,t){e.exports={dialog:"Dialog_dialog__1323i",active:"Dialog_active__2fc4o"}},92:function(e,s,t){},98:function(e,s,t){"use strict";t.r(s);t(0);var n=t(48),a=t(90),i=t.n(a),c=t(91),o=t.n(c),r=t(10),u=t(1),l=function(e){return Object(u.jsx)("li",{className:o.a.dialog+" "+o.a.active,children:Object(u.jsx)(r.b,{to:"/dialogs/".concat(e.id),activeClassName:o.a.active,children:e.name})})},d=t(92),j=t.n(d),b=function(e){return Object(u.jsx)("li",{className:j.a.message,children:e.message})},g=t(18),m=t(28),O=function(e){var s=function(e){return e?void 0:"Required"};return Object(u.jsx)(g.b,{onSubmit:e.sendNewMessage,children:function(e){return Object(u.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(u.jsx)("div",{children:Object(u.jsx)(g.a,{name:"newMessageBody",validate:s,component:m.b,placeholder:"Enter your message"})}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{children:"Send message"})})]})}})},f=function(e){var s=e.dialogsPage,t=s.dialogs.map((function(e){return Object(u.jsx)(l,{name:e.name,id:e.id},e.key)})),n=s.messages.map((function(e){return Object(u.jsx)(b,{message:e.message},e.key)}));return Object(u.jsxs)("div",{className:i.a.dialogs,children:[Object(u.jsx)("ul",{className:i.a.dialogsList,children:t}),Object(u.jsxs)("div",{children:[Object(u.jsx)("ul",{className:i.a.messagesList,children:n}),Object(u.jsx)(O,{sendNewMessage:function(s){e.sendMessage(s.newMessageBody)}})]})]})},h=t(13),p=t(87),x=t(14);s.default=Object(x.c)(Object(h.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(s){e(Object(n.b)(s))}}})),p.a)(f)}}]);
//# sourceMappingURL=4.0266406e.chunk.js.map