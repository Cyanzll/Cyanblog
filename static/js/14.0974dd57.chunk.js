(this.webpackJsonpcyanblog=this.webpackJsonpcyanblog||[]).push([[14],{405:function(e,n,t){"use strict";t.r(n);t(168);var r=t(174),a=t(0),i=t.n(a),l=t(33),o=(t(239),t(237)),c=t(2),u=t(3);function s(){var e=Object(c.a)(["\n    width: 200px;\n    margin-top: 30px;\n    display: flex;\n    justify-content: space-between;\n    span {\n        display: block;\n        cursor: pointer;\n        font-size: 13px;\n    }\n"]);return s=function(){return e},e}function m(){var e=Object(c.a)(["\n    width: 200px;\n    height: 25px;\n    div {\n        font-size: 13px;\n        line-height: 18px;\n        color: #DC143C;\n    }\n"]);return m=function(){return e},e}function p(){var e=Object(c.a)(["\n    height: 40px;\n    width: 200px;\n    font-size: 16px;\n    border: none;\n    background: #1E90FF;\n    color: white;\n    border-radius: 2px;\n    cursor: pointer;\n    transition: background 50ms ease-in;\n    &:hover {\n        background: #40a9ff\n    }\n    &:active {\n        background: #096dd9;\n    }\n    \n"]);return p=function(){return e},e}function d(){var e=Object(c.a)(["\n    width: 200px;\n    height: 40px;\n    font-size: 15px;\n    transition-duration: 100ms;\n"]);return d=function(){return e},e}function b(){var e=Object(c.a)(["\n    width: 200px;\n    height: 40px;\n    font-size: 25px;\n    line-height: 25px;\n    font-weight: 450;\n    color: #444;\n    margin-bottom: 20px;\n"]);return b=function(){return e},e}function f(){var e=Object(c.a)(["\n    height: 500px;\n    position: relative;\n    width: 350px;\n    background: #fff;\n    border-radius: 15px;\n    padding: 40px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    label {\n        display: block;\n        font-size: 15px;\n        width: 200px;\n        text-align: left;\n        margin-bottom: 5px;\n    }\n"]);return f=function(){return e},e}function h(){var e=Object(c.a)(["\n    height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background: #f0f2f5;\n"]);return h=function(){return e},e}var g=u.b.div(h()),x=u.b.div(f()),v=u.b.h1(b()),E=Object(u.b)(o.a).attrs((function(e){return{placeholder:e.name}}))(d()),w=u.b.button(p()),j=u.b.div(m()),y=u.b.div(s()),O=t(14),k=t.n(O),F=t(390),z=t(389);n.default=function(e){var n=Object(F.a)({initialValues:{username:"",email:"",password:""},validationSchema:z.a({username:z.b().max(15,"\u8bf7\u8f93\u51653~15\u4e2a\u5b57\u7b26\u7684\u7528\u6237\u540d").min(3,"\u8bf7\u8f93\u51653~15\u4e2a\u5b57\u7b26\u7684\u7528\u6237\u540d").required("\u7528\u6237\u540d\u4e0d\u5f97\u4e3a\u7a7a"),email:z.b().email("\u65e0\u6548\u7684\u90ae\u7bb1\u540d\u79f0").required("\u7528\u6237\u540d\u4e0d\u5f97\u4e3a\u7a7a"),password:z.b().max(15,"\u5bc6\u7801\u592a\u957f\uff01").min(3,"\u5bc6\u7801\u592a\u77ed\uff01").required("\u5bc6\u7801\u4e0d\u5f97\u4e3a\u7a7a")}),onSubmit:function(e){k()({method:"post",url:"/user/12345",headers:{"Content-Type":"application/json;charset=utf-8"},data:JSON.stringify(e)}).then((function(e){var n=e.data.token;localStorage.setItem("Token",n)})).catch((function(e){console.log(e),r.a.error("\u767b\u5f55\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5\u4fe1\u606f\u662f\u5426\u6b63\u786e",1)}))}});return i.a.createElement(g,null,i.a.createElement(x,null,i.a.createElement(v,null,"\u6ce8\u518c"),i.a.createElement("form",{onSubmit:n.handleSubmit},i.a.createElement("label",{htmlFor:"username"},"\u7528\u6237\u540d"),i.a.createElement(E,Object.assign({name:"username",type:"text"},n.getFieldProps("username"))),i.a.createElement(j,null,n.touched.username&&n.errors.username?i.a.createElement("div",null,n.errors.username):null),i.a.createElement("label",{htmlFor:"email"},"\u90ae\u7bb1"),i.a.createElement(E,Object.assign({name:"email",type:"email"},n.getFieldProps("email"))),i.a.createElement(j,null,n.touched.email&&n.errors.email?i.a.createElement("div",null,n.errors.email):null),i.a.createElement("label",{htmlFor:"password"},"\u5bc6\u7801"),i.a.createElement(E,Object.assign({name:"password",type:"password"},n.getFieldProps("password"))),i.a.createElement(j,null,n.touched.password&&n.errors.password?i.a.createElement("div",null,n.errors.password):null),i.a.createElement("br",null),i.a.createElement(w,{type:"suBmit"},"\u63d0\u4ea4")),i.a.createElement(y,null,i.a.createElement("span",null,"\u5df2\u6709\u8d26\u53f7?"),i.a.createElement("span",null,i.a.createElement(l.b,{to:"/login"},"\u7acb\u5373\u767b\u5f55")))))}}}]);
//# sourceMappingURL=14.0974dd57.chunk.js.map