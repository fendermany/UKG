/*! For license information please see 561.92d3c3fe.chunk.js.LICENSE.txt */
(self.webpackChunkukg_react=self.webpackChunkukg_react||[]).push([[561],{3804:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return _}});var a=n(885),r=n(2791),s=n(1933),i=n(3504),c=n(4677),l=n(5276),o=n(7975),u=n(3394),f=n(7498),m=(n(3708),n(184));function _(){var e=(0,r.useState)(""),t=(0,a.Z)(e,2),n=t[0],_=t[1],p=(0,r.useState)(""),d=(0,a.Z)(p,2),h=d[0],x=d[1],b=(0,r.useState)(""),v=(0,a.Z)(b,2),j=v[0],g=v[1],N=(0,r.useState)("AUTO"),y=(0,a.Z)(N,2),k=y[0],S=(y[1],(0,s.useMutation)("Registration",(function(){return(0,c.W)({url:"/pub/users/register",type:"POST",auth:!1,body:{fullName:j,email:n,phone:h,registerTag:k}})}),{onSuccess:function(){x(""),g(""),_("")}})),Z=S.mutate,w=S.isLoading,C=S.error;return(0,m.jsx)("div",{className:"cabinet",children:(0,m.jsxs)("div",{className:"wrapper",children:[(0,m.jsx)("main",{className:"page",children:(0,m.jsxs)("div",{className:"cabinet__container",children:[(0,m.jsx)("div",{className:"cabinet__logo",children:(0,m.jsx)("img",{src:f.jY,alt:"\u0412\u0445\u043e\u0434 \u043b\u0438\u0447\u043d\u044b\u0439 \u043a\u0430\u0431\u0438\u043d\u0435\u0442"})}),(0,m.jsx)("div",{className:"cabinet__form",children:(0,m.jsxs)("div",{className:"cabinet__form-wrapper",children:[(0,m.jsx)("div",{className:"cabinet__form-title gold",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),C&&(0,m.jsx)(o.Z,{type:"error",text:C}),w&&(0,m.jsx)(u.Z,{}),(0,m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),Z()},className:"cabinet__form-form",children:[(0,m.jsx)("div",{className:"cabinet__form-line",children:(0,m.jsx)("input",{autoComplete:"off",type:"text",name:"name",placeholder:"\u0418\u043c\u044f",value:j,onChange:function(e){var t=e.target.value;return g(t)},className:"cabinet__form-input"})}),(0,m.jsx)("div",{className:"cabinet__form-line",children:(0,m.jsx)("input",{autoComplete:"off",type:"text",name:"email",placeholder:"E-mail",value:n,onChange:function(e){var t=e.target.value;return _(t)},className:"cabinet__form-input"})}),(0,m.jsx)("div",{className:"cabinet__form-line",children:(0,m.jsx)("input",{autoComplete:"off",type:"text",name:"phone",value:h,onChange:function(e){var t=e.target.value;return x(t)},placeholder:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d",className:"cabinet__form-input"})}),(0,m.jsxs)("div",{className:"cabinet__form-checkbox checkbox",children:[(0,m.jsx)("input",{id:"c_1","data-error":"\u041e\u0448\u0438\u0431\u043a\u0430",className:"checkbox__input",type:"checkbox",value:"1",name:"form[]"}),(0,m.jsx)("label",{htmlFor:"c_1",className:"checkbox__label",children:(0,m.jsx)("span",{className:"checkbox__text",children:"\u0421\u043e\u0433\u043b\u0430\u0441\u0435\u043d \u0441 \u043f\u0440\u0430\u0432\u0438\u043b\u0430\u043c\u0438 \u0438 \u0441\u043e\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u044f\u043c\u0438, \u0430 \u0442\u0430\u043a \u0436\u0435 \u0441 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u043c\u0438 \u0440\u0438\u0441\u043a\u0430\u043c\u0438."})})]}),(0,m.jsx)("button",{className:"cabinet__form-btn button button_gold",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})]}),(0,m.jsxs)("div",{className:"cabinet__form-links",children:[(0,m.jsx)(i.OL,{to:"/signin",children:"\u0412\u0445\u043e\u0434"}),(0,m.jsx)(i.OL,{to:"/recovery",children:"\u0417\u0430\u0431\u044b\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c?"})]})]})})]})}),(0,m.jsx)(l.Z,{})]})})}},7975:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var a=n(4942),r=(n(2791),n(1694)),s=n.n(r),i="Alert_alert__DbnVS",c="Alert_error__9S5lH",l="Alert_info__OyXxL",o="Alert_warning__bw7IE",u=n(184),f=function(e){var t,n=e.type,r=void 0===n?"success":n,f=e.text;return(0,u.jsx)("div",{className:s()(i,(t={},(0,a.Z)(t,c,"error"===r),(0,a.Z)(t,o,"warning"===r),(0,a.Z)(t,l,"info"===r),t)),children:f})}},1694:function(e,t){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var s=typeof n;if("string"===s||"number"===s)e.push(n);else if(Array.isArray(n)){if(n.length){var i=r.apply(null,n);i&&e.push(i)}}else if("object"===s)if(n.toString===Object.prototype.toString)for(var c in n)a.call(n,c)&&n[c]&&e.push(c);else e.push(n.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},3708:function(){}}]);
//# sourceMappingURL=561.92d3c3fe.chunk.js.map