(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{ObQG:function(P,f,a){P.exports={container:"container___1sYa-",lang:"lang___l6cji",content:"content___2zk1-",top:"top___1C1Zi",header:"header___5xZ3f",logo:"logo___2hXsy",title:"title___1-xuF",desc:"desc___-njyT",main:"main___x4OjT",icon:"icon___rzGKO",other:"other___lLyaU",register:"register___11Twg",prefixIcon:"prefixIcon___23Xrx"}},PdsH:function(P,f,a){"use strict";a.r(f);var ee=a("Znn+"),D=a("ZTPi"),ae=a("miYZ"),p=a("tsqr"),g=a("k1fw"),E=a("9og8"),M=a("tJVT"),te=a("fOrg"),C=a("+KLJ"),A=a("WmNS"),l=a.n(A),K=a("cJ7L"),y=a("FY4R"),j=a("q1tI"),se=a.n(j),R=a("VMEa"),h=a("Qurx"),W=a("tneF"),n=a("9kvl"),S=a("QttV"),F=a("CwrG"),N=a("74pX"),z=a("ObQG"),s=a.n(z),e=a("nKUr"),ne=a.n(e),G=function(c){var o=c.content;return Object(e.jsx)(C.a,{style:{marginBottom:24},message:o,type:"error",showIcon:!0})},J=function(){!n.c||setTimeout(function(){var c=n.c.location.query,o=c,v=o.redirect;n.c.push(v||"/")},10)},Z=function(){var c=Object(j.useState)(!1),o=Object(M.a)(c,2),v=o[0],L=o[1],Q=Object(j.useState)({}),T=Object(M.a)(Q,2),x=T[0],V=T[1],$=Object(j.useState)("account"),B=Object(M.a)($,2),b=B[0],X=B[1],U=Object(n.g)("@@initialState"),d=U.initialState,Y=U.setInitialState,m=Object(n.f)(),H=function(){var u=Object(E.a)(l.a.mark(function _(){var r,i;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d==null||(r=d.fetchUserInfo)===null||r===void 0?void 0:r.call(d);case 2:i=t.sent,i&&Y(Object(g.a)(Object(g.a)({},d),{},{currentUser:i}));case 4:case"end":return t.stop()}},_)}));return function(){return u.apply(this,arguments)}}(),w=function(){var u=Object(E.a)(l.a.mark(function _(r){var i;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return L(!0),t.prev=1,t.next=4,Object(N.c)(Object(g.a)(Object(g.a)({},r),{},{type:b}));case 4:if(i=t.sent,i.status!=="ok"){t.next=11;break}return p.default.success("\u767B\u5F55\u6210\u529F\uFF01"),t.next=9,H();case 9:return J(),t.abrupt("return");case 11:V(i),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(1),p.default.error("\u767B\u5F55\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\uFF01");case 17:L(!1);case 18:case"end":return t.stop()}},_,null,[[1,14]])}));return function(r){return u.apply(this,arguments)}}(),k=x.status,q=x.type;return Object(e.jsxs)("div",{className:s.a.container,children:[Object(e.jsx)("div",{className:s.a.lang,children:n.b&&Object(e.jsx)(n.b,{})}),Object(e.jsxs)("div",{className:s.a.content,children:[Object(e.jsxs)("div",{className:s.a.top,children:[Object(e.jsx)("div",{className:s.a.header,children:Object(e.jsxs)(S.a,{to:"/",children:[Object(e.jsx)("img",{alt:"logo",className:s.a.logo,src:"/logo.svg"}),Object(e.jsx)("span",{className:s.a.title,children:"kao mianjin"})]})}),Object(e.jsx)("div",{className:s.a.desc,children:"\u70E4\u9762\u7B4B \xB7 \u61D2\u4EBA\u7684\u5FC5\u5907"})]}),Object(e.jsx)("div",{className:s.a.main,children:Object(e.jsxs)(R.a,{initialValues:{autoLogin:!0},submitter:{searchConfig:{submitText:m.formatMessage({id:"pages.login.submit",defaultMessage:"\u767B\u5F55"})},render:function(_,r){return r.pop()},submitButtonProps:{loading:v,size:"large",style:{width:"100%"}}},onFinish:function(){var u=Object(E.a)(l.a.mark(function _(r){return l.a.wrap(function(O){for(;;)switch(O.prev=O.next){case 0:w(r);case 1:case"end":return O.stop()}},_)}));return function(_){return u.apply(this,arguments)}}(),children:[Object(e.jsx)(D.a,{activeKey:b,onChange:X,children:Object(e.jsx)(D.a.TabPane,{tab:m.formatMessage({id:"pages.login.accountLogin.tab",defaultMessage:"\u8D26\u6237\u5BC6\u7801\u767B\u5F55"})},"account")}),k==="error"&&q==="account"&&Object(e.jsx)(G,{content:m.formatMessage({id:"pages.login.accountLogin.errorMessage",defaultMessage:"\u8D26\u6237\u6216\u5BC6\u7801\u9519\u8BEF"})}),b==="account"&&Object(e.jsxs)(e.Fragment,{children:[Object(e.jsx)(h.a,{name:"username",fieldProps:{size:"large",prefix:Object(e.jsx)(K.a,{className:s.a.prefixIcon})},placeholder:m.formatMessage({id:"pages.login.username.placeholder",defaultMessage:"\u7528\u6237\u540D"}),rules:[{required:!0,message:Object(e.jsx)(n.a,{id:"pages.login.username.required",defaultMessage:"\u8BF7\u8F93\u5165\u7528\u6237\u540D!"})}]}),Object(e.jsx)(h.a.Password,{name:"password",fieldProps:{size:"large",prefix:Object(e.jsx)(y.a,{className:s.a.prefixIcon})},placeholder:m.formatMessage({id:"pages.login.password.placeholder",defaultMessage:"\u5BC6\u7801"}),rules:[{required:!0,message:Object(e.jsx)(n.a,{id:"pages.login.password.required",defaultMessage:"\u8BF7\u8F93\u5165\u5BC6\u7801\uFF01"})}]})]}),Object(e.jsx)("div",{style:{marginBottom:24},children:Object(e.jsx)(W.a,{noStyle:!0,name:"remember",children:Object(e.jsx)(n.a,{id:"pages.login.rememberMe",defaultMessage:"\u81EA\u52A8\u767B\u5F55"})})})]})})]}),Object(e.jsx)(F.a,{})]})};f.default=Z}}]);
