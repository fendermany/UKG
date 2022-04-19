"use strict";(self.webpackChunkukg_react=self.webpackChunkukg_react||[]).push([[888],{3155:function(s,e,a){a.d(e,{Z:function(){return d}});var i=a(9439),l=a(2791),n=a(3504),c=a(4804),r=a(7498),t=a(184);function d(){var s=(0,l.useState)(!1),e=(0,i.Z)(s,2),a=e[0],d=e[1];return(0,t.jsxs)("aside",{className:"cabinet__aside",children:[(0,t.jsx)("div",{className:"cabinet__aside-logo",children:(0,t.jsx)("img",{src:r.jY,alt:"logo"})}),(0,t.jsxs)("div",{className:"cabinet__aside-welcome grey-block",children:[(0,t.jsx)("span",{children:"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c123"}),(0,t.jsx)("div",{className:"cabinet__aside-welcome--name gold",children:"Artem"}),(0,t.jsx)("span",{children:"\u0412\u0430\u0448\u0430 \u0440\u0435\u0444\u0435\u0440\u0430\u043b\u044c\u043d\u0430\u044f \u0441\u0441\u044b\u043b\u043a\u0430"}),(0,t.jsxs)("button",{className:"gold",onClick:function(s){s.stopPropagation(),d(!0),navigator.clipboard.writeText(s.currentTarget.firstElementChild.innerText)},children:[(0,t.jsx)("span",{children:"https://google.com/awdawdawdawdawda"}),(0,t.jsx)("img",{src:r.UI,alt:"copy"})]}),(0,t.jsx)(c.Z,{message:"\u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u043e \u0432 \u0431\u0443\u0444\u0435\u0440 \u043e\u0431\u043c\u0435\u043d\u0430",anchorOrigin:{vertical:"top",horizontal:"center"},autoHideDuration:2e3,onClose:function(){return d(!1)},open:a})]}),(0,t.jsx)("nav",{className:"cabinet__aside-menu",children:(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:(0,t.jsx)(n.OL,{to:"/",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430"})}),(0,t.jsx)("li",{children:(0,t.jsx)(n.OL,{to:"/investments",children:"\u0418\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u0438"})}),(0,t.jsx)("li",{children:(0,t.jsx)(n.OL,{to:"/token",children:"\u0422\u043e\u043a\u0435\u043d"})}),(0,t.jsx)("li",{children:(0,t.jsx)(n.OL,{to:"/partnership",children:"\u041f\u0430\u0440\u0442\u043d\u0435\u0440\u0441\u043a\u0430\u044f \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0430"})}),(0,t.jsx)("li",{children:(0,t.jsx)(n.OL,{to:"/profile",children:"\u041c\u043e\u0439 \u043f\u0440\u043e\u0444\u0438\u043b\u044c"})}),(0,t.jsx)("li",{children:(0,t.jsx)(n.OL,{to:"/promotion",children:"\u0420\u0435\u043a\u043b\u0430\u043c\u043d\u044b\u0435 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b"})}),(0,t.jsx)("li",{children:(0,t.jsx)(n.OL,{to:"/help",children:"\u041f\u043e\u043c\u043e\u0449\u044c"})})]})})]})}},9659:function(s,e,a){a.d(e,{Z:function(){return b}});var i=a(2791),l=a(6871),n=a(6764),c=a(9367),r=a(5671),t=a(3144),d=a(136),h=a(4062),o=a(4788),x=a(1528),j=a(184),m=function(s){(0,d.Z)(a,s);var e=(0,h.Z)(a);function a(s){var i;return(0,r.Z)(this,a),(i=e.call(this,s)).state={time:(0,o.Z)(new Date,"dd MMM yyyy HH : mm",{locale:x.Z})},i}return(0,t.Z)(a,[{key:"componentDidMount",value:function(){var s=this;this.intervalID=setInterval((function(){return s.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalID)}},{key:"tick",value:function(){this.setState({time:(0,o.Z)(new Date,"dd MMM yyyy HH : mm",{locale:x.Z})})}},{key:"render",value:function(){return(0,j.jsx)(j.Fragment,{children:this.state.time})}}]),a}(i.Component),_=a(8702),p=a(7498);function b(){var s=(0,i.useContext)(n.Z),e=s.getValue,a=s.onChange,r=s.options,t=(0,i.useContext)(_.V).store,d=(0,l.s0)();return(0,j.jsxs)("div",{className:"cabinet__header",children:[(0,j.jsxs)("div",{className:"cabinet__header-btns",children:[(0,j.jsxs)("a",{href:"/",className:"cabinet__header-btns--settings gold",children:[(0,j.jsx)("img",{src:p.HU,alt:"settings"}),(0,j.jsx)("span",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"})]}),(0,j.jsxs)("button",{onClick:function(){t.logout(),d("/signin")},className:"cabinet__header-btns--exit gold",children:[(0,j.jsx)("img",{src:p.Vu,alt:"exit"}),(0,j.jsx)("span",{children:"\u0412\u044b\u0445\u043e\u0434"})]})]}),(0,j.jsxs)("div",{className:"cabinet__header-rightside",children:[(0,j.jsx)("div",{className:"cabinet__header-social social",children:(0,j.jsxs)("ul",{children:[(0,j.jsx)("li",{children:(0,j.jsx)("a",{href:"/",children:(0,j.jsx)("img",{src:p.T_,alt:"youtube"})})}),(0,j.jsx)("li",{children:(0,j.jsx)("a",{href:"/",children:(0,j.jsx)("img",{src:p.qv,alt:"facebook"})})}),(0,j.jsx)("li",{children:(0,j.jsx)("a",{href:"/",children:(0,j.jsx)("img",{src:p.CR,alt:"instagram"})})}),(0,j.jsx)("li",{children:(0,j.jsx)("a",{href:"/",children:(0,j.jsx)("img",{src:p.wL,alt:"telegram"})})})]})}),(0,j.jsx)("div",{className:"cabinet__header-lang lang",children:(0,j.jsx)(c.ZP,{classNamePrefix:"lang-list",onChange:a,value:e(),className:"lang__list",options:r})}),(0,j.jsx)("div",{className:"cabinet__header-time",children:(0,j.jsx)(m,{})})]})]})}},8698:function(s,e,a){a.d(e,{Z:function(){return o}});var i=a(5861),l=a(9439),n=a(7757),c=a.n(n),r=a(2791),t=a(6470),d=a(7498),h=a(184);function o(){var s=(0,r.useState)(null),e=(0,l.Z)(s,2),a=e[0],n=e[1],d=function(){var s=(0,i.Z)(c().mark((function s(){var e;return c().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,t.Z.userInfo();case 3:e=s.sent,n(e.data),s.next=10;break;case 7:s.prev=7,s.t0=s.catch(0),console.log(s.t0);case 10:case"end":return s.stop()}}),s,null,[[0,7]])})));return function(){return s.apply(this,arguments)}}();(0,r.useEffect)((function(){d()}),[]);var o=a?(0,h.jsx)(x,{user:a}):null;return(0,h.jsx)(h.Fragment,{children:o})}var x=function(s){var e=s.user;return(0,h.jsx)("div",{className:"cabinet__topbar",children:(0,h.jsxs)("div",{className:"cabinet__topbar-wrapper",children:[(0,h.jsx)("div",{className:"cabinet__topbar-balance",children:(0,h.jsxs)("div",{className:"cabinet__topbar-balance--wrapper",children:[(0,h.jsx)("span",{children:"\u0412\u0430\u0448 \u0431\u0430\u043b\u0430\u043d\u0441"}),(0,h.jsx)("span",{className:"gold",children:e.balance.amount}),(0,h.jsx)("img",{src:d.cg,alt:"balance"}),(0,h.jsx)("img",{src:d.CZ,alt:"balance-money"})]})}),(0,h.jsxs)("div",{className:"cabinet__topbar-ew grey-block-dark",children:[(0,h.jsxs)("div",{children:[(0,h.jsx)("span",{children:"\u0417\u0430\u0440\u0430\u0431\u043e\u0442\u0430\u043d\u043e"}),(0,h.jsxs)("span",{children:["391.14",(0,h.jsx)("img",{src:d.sd,alt:"earned"})]})]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("span",{children:"\u0412\u044b\u0432\u0435\u0434\u0435\u043d\u043e"}),(0,h.jsxs)("span",{children:["144.14",(0,h.jsx)("img",{src:d.sd,alt:"withdrawn"})]})]})]}),(0,h.jsxs)("div",{className:"cabinet__topbar-actdep grey-block-dark",children:[(0,h.jsxs)("div",{children:[(0,h.jsx)("span",{children:"\u0410\u043a\u0442\u0438\u0432\u043d\u044b\u0435 \u0434\u0435\u043f\u043e\u0437\u0438\u0442\u044b"}),(0,h.jsx)("span",{children:"4 "})]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("span",{children:"\u041d\u0430 \u0441\u0443\u043c\u043c\u0443"}),(0,h.jsxs)("span",{children:["353.14",(0,h.jsx)("img",{src:d.sd,alt:"earned"})]})]})]}),(0,h.jsxs)("div",{className:"cabinet__topbar-reflvl grey-block-dark",children:[(0,h.jsxs)("div",{className:"grey-block",children:[(0,h.jsx)("span",{children:"\u0420\u0435\u0444\u0435\u0440\u0430\u043b\u044c\u043d\u044b\u0439 \u0443\u0440\u043e\u0432\u0435\u043d\u044c"}),(0,h.jsxs)("span",{children:[(0,h.jsx)("span",{children:"\u0423\u0440\u043e\u0432\u0435\u043d\u044c 5 "}),(0,h.jsx)("span",{className:"gold",children:"- 15%"})]})]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("span",{children:"\u0423\u0440\u043e\u0432\u0435\u043d\u044c \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440\u0430"}),(0,h.jsx)("span",{children:"\u041c4"})]})]}),(0,h.jsxs)("div",{className:"cabinet__topbar-partnum grey-block-dark",children:[(0,h.jsxs)("div",{children:[(0,h.jsx)("span",{children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0430\u0440\u0442\u043d\u0435\u0440\u043e\u0432"}),(0,h.jsx)("span",{children:"138"})]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("span",{children:"\u0410\u043a\u0442"}),(0,h.jsx)("span",{className:"green",children:"125"}),(0,h.jsx)("span",{children:"\u041d\u0435\u0430\u043a."}),(0,h.jsx)("span",{className:"red",children:"54"})]})]}),(0,h.jsxs)("div",{className:"cabinet__topbar-gift grey-block-dark",children:[(0,h.jsxs)("div",{children:[(0,h.jsx)("img",{src:d.gv,alt:"topbar-gift"}),(0,h.jsxs)("span",{children:["\u041f\u041e\u0414\u0410\u0420\u041e\u041a \u0417\u0410 \u0421\u041b\u0415\u0414\u0423\u042e\u0429\u0418\u0419",(0,h.jsx)("br",{}),"\u0423\u0420\u041e\u0412\u0415\u041d\u042c \u041c\u0415\u041d\u0415\u0414\u0416\u0415\u0420\u0410"]})]}),(0,h.jsx)("img",{src:d.ZB,alt:"topbar-car"})]})]})})}},5712:function(s,e,a){a.r(e),a.d(e,{default:function(){return t}});var i=a(5276),l=a(8698),n=a(3155),c=a(9659),r=(a(2791),a(184));function t(){return(0,r.jsx)("div",{className:"cabinet",children:(0,r.jsxs)("div",{className:"cabinet__wrapper",children:[(0,r.jsx)(n.Z,{}),(0,r.jsxs)("div",{className:"wrapper",children:[(0,r.jsxs)("main",{className:"page",children:[(0,r.jsx)(c.Z,{}),(0,r.jsx)(l.Z,{}),(0,r.jsx)("div",{className:"cabhelp",children:(0,r.jsxs)("div",{className:"cabhelp__wrapper",children:[(0,r.jsx)("div",{className:"cabhelp__form",children:(0,r.jsxs)("div",{className:"cabhelp__form-wrapper",children:[(0,r.jsx)("div",{className:"cabhelp__form-title cabinet__title_36",children:"\u041f\u043e\u043c\u043e\u0449\u044c"}),(0,r.jsxs)("div",{className:"cabhelp__form-options options",children:[(0,r.jsxs)("div",{className:"options__item",children:[(0,r.jsx)("input",{hidden:!0,id:"o_1",className:"options__input",checked:!0,type:"radio",value:"1",name:"option"}),(0,r.jsx)("label",{htmlFor:"o_1",className:"options__label",children:(0,r.jsx)("span",{className:"options__text",children:"Technical questions"})})]}),(0,r.jsxs)("div",{className:"options__item",children:[(0,r.jsx)("input",{hidden:!0,id:"o_2",className:"options__input",type:"radio",value:"2",name:"option"}),(0,r.jsx)("label",{htmlFor:"o_2",className:"options__label",children:(0,r.jsx)("span",{className:"options__text",children:"Financial questions"})})]})]}),(0,r.jsx)("div",{className:"cabhelp__form-subtitle",children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435:"}),(0,r.jsxs)("form",{action:"#",className:"cabhelp__form-form",children:[(0,r.jsx)("div",{className:"form__line",children:(0,r.jsx)("textarea",{className:"cabhelp__form-textarea input",autoComplete:"off",type:"text",name:"help"})}),(0,r.jsx)("button",{type:"submit",className:"cabhelp__form-button button button_gold",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})]})}),(0,r.jsxs)("ul",{className:"cabhelp__history grey-block-dark-414",children:[(0,r.jsxs)("li",{className:"cabhelp__history-item",children:[(0,r.jsx)("div",{className:"cabhelp__history-title",children:"\u0412\u043e\u043f\u0440\u043e\u0441"}),(0,r.jsx)("div",{className:"cabhelp__history-body",children:"\u042f \u0441\u0434\u0435\u043b\u0430\u043b \u0437\u0432\u043e\u043d\u043e\u043a \u0432 \u043a\u043b\u0438\u0435\u043d\u0442\u0441\u043a\u0443\u044e \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0443, \u043d\u043e \u043d\u0435 \u043f\u043e\u043b\u0443\u0447\u0438\u043b \u043a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0430\u0446\u0438\u044e. \u0427\u0442\u043e \u044f \u0434\u0435\u043b\u0430\u044e \u043d\u0435 \u0442\u0430\u043a?"})]}),(0,r.jsxs)("li",{className:"cabhelp__history-item",children:[(0,r.jsx)("div",{className:"cabhelp__history-title",children:"\u0412\u043e\u043f\u0440\u043e\u0441"}),(0,r.jsx)("div",{className:"cabhelp__history-body",children:"\u042f \u0441\u0434\u0435\u043b\u0430\u043b \u0437\u0432\u043e\u043d\u043e\u043a \u0432 \u043a\u043b\u0438\u0435\u043d\u0442\u0441\u043a\u0443\u044e \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0443, \u043d\u043e \u043d\u0435 \u043f\u043e\u043b\u0443\u0447\u0438\u043b \u043a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0430\u0446\u0438\u044e. \u0427\u0442\u043e \u044f \u0434\u0435\u043b\u0430\u044e \u043d\u0435 \u0442\u0430\u043a?"})]}),(0,r.jsxs)("li",{className:"cabhelp__history-item",children:[(0,r.jsx)("div",{className:"cabhelp__history-title",children:"\u0412\u043e\u043f\u0440\u043e\u0441"}),(0,r.jsx)("div",{className:"cabhelp__history-body",children:"\u042f \u0441\u0434\u0435\u043b\u0430\u043b \u0437\u0432\u043e\u043d\u043e\u043a \u0432 \u043a\u043b\u0438\u0435\u043d\u0442\u0441\u043a\u0443\u044e \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0443, \u043d\u043e \u043d\u0435 \u043f\u043e\u043b\u0443\u0447\u0438\u043b \u043a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0430\u0446\u0438\u044e. \u0427\u0442\u043e \u044f \u0434\u0435\u043b\u0430\u044e \u043d\u0435 \u0442\u0430\u043a?"})]}),(0,r.jsxs)("li",{className:"cabhelp__history-item",children:[(0,r.jsx)("div",{className:"cabhelp__history-title",children:"\u0412\u043e\u043f\u0440\u043e\u0441"}),(0,r.jsx)("div",{className:"cabhelp__history-body",children:"\u042f \u0441\u0434\u0435\u043b\u0430\u043b \u0437\u0432\u043e\u043d\u043e\u043a \u0432 \u043a\u043b\u0438\u0435\u043d\u0442\u0441\u043a\u0443\u044e \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0443, \u043d\u043e \u043d\u0435 \u043f\u043e\u043b\u0443\u0447\u0438\u043b \u043a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0430\u0446\u0438\u044e. \u0427\u0442\u043e \u044f \u0434\u0435\u043b\u0430\u044e \u043d\u0435 \u0442\u0430\u043a?"})]}),(0,r.jsxs)("li",{className:"cabhelp__history-item",children:[(0,r.jsx)("div",{className:"cabhelp__history-title",children:"\u0412\u043e\u043f\u0440\u043e\u0441"}),(0,r.jsx)("div",{className:"cabhelp__history-body",children:"\u042f \u0441\u0434\u0435\u043b\u0430\u043b \u0437\u0432\u043e\u043d\u043e\u043a \u0432 \u043a\u043b\u0438\u0435\u043d\u0442\u0441\u043a\u0443\u044e \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0443, \u043d\u043e \u043d\u0435 \u043f\u043e\u043b\u0443\u0447\u0438\u043b \u043a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0430\u0446\u0438\u044e. \u0427\u0442\u043e \u044f \u0434\u0435\u043b\u0430\u044e \u043d\u0435 \u0442\u0430\u043a?"})]}),(0,r.jsxs)("li",{className:"cabhelp__history-item",children:[(0,r.jsx)("div",{className:"cabhelp__history-title",children:"\u0412\u043e\u043f\u0440\u043e\u0441"}),(0,r.jsx)("div",{className:"cabhelp__history-body",children:"\u042f \u0441\u0434\u0435\u043b\u0430\u043b \u0437\u0432\u043e\u043d\u043e\u043a \u0432 \u043a\u043b\u0438\u0435\u043d\u0442\u0441\u043a\u0443\u044e \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0443, \u043d\u043e \u043d\u0435 \u043f\u043e\u043b\u0443\u0447\u0438\u043b \u043a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0430\u0446\u0438\u044e. \u0427\u0442\u043e \u044f \u0434\u0435\u043b\u0430\u044e \u043d\u0435 \u0442\u0430\u043a?"})]})]}),(0,r.jsx)("div",{className:"cabhelp__faq",children:(0,r.jsxs)("div",{className:"cabhelp__faq-wrapper",children:[(0,r.jsxs)("div",{className:"cabhelp__faq-top",children:[(0,r.jsx)("div",{className:"cabhelp__faq-title cabinet__title_36",children:"\u041e\u0431\u0449\u0438\u0435 \u0432\u043e\u043f\u0440\u043e\u0441\u044b"}),(0,r.jsxs)("div",{className:"cabhelp__faq-subtitle",children:["\u041d\u0435 \u043d\u0430\u0448\u043b\u0438 \u043e\u0442\u0432\u0435\u0442\u0430 \u043d\u0430 \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u0443\u044e\u0449\u0438\u0439 \u0432\u043e\u043f\u0440\u043e\u0441?",(0,r.jsx)("br",{}),"\u041d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u043d\u0430\u043c \u0438 \u043c\u044b \u0432\u0430\u043c \u043e\u0442\u0432\u0435\u0442\u0438\u043c",(0,r.jsx)("span",{className:"gold",children:"support@com.ua"})]})]}),(0,r.jsxs)("ul",{className:"cabhelp__faq-list",children:[(0,r.jsxs)("li",{className:"cabhelp__faq-item",children:[(0,r.jsxs)("div",{className:"cabhelp__faq-question",children:[(0,r.jsx)("div",{children:(0,r.jsx)("span",{children:(0,r.jsx)("span",{className:"gold",children:"?"})})}),(0,r.jsx)("span",{children:"\u0427\u0435\u043c \u0437\u0430\u043d\u0438\u043c\u0430\u0435\u0442\u0441\u044f UKG?"})]}),(0,r.jsx)("div",{className:"cabhelp__faq-answer"})]}),(0,r.jsxs)("li",{className:"cabhelp__faq-item",children:[(0,r.jsxs)("div",{className:"cabhelp__faq-question",children:[(0,r.jsx)("div",{children:(0,r.jsx)("span",{children:(0,r.jsx)("span",{className:"gold",children:"?"})})}),(0,r.jsx)("span",{children:"\u0417\u0430\u043a\u043e\u043d\u043d\u0430 \u043b\u0438 \u0434\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438?"})]}),(0,r.jsx)("div",{className:"cabhelp__faq-answer"})]}),(0,r.jsxs)("li",{className:"cabhelp__faq-item",children:[(0,r.jsxs)("div",{className:"cabhelp__faq-question",children:[(0,r.jsx)("div",{children:(0,r.jsx)("span",{children:(0,r.jsx)("span",{className:"gold",children:"?"})})}),(0,r.jsx)("span",{children:"\u0427\u0435\u043c \u0437\u0430\u043d\u0438\u043c\u0430\u0435\u0442\u0441\u044f UKG?"})]}),(0,r.jsx)("div",{className:"cabhelp__faq-answer"})]}),(0,r.jsxs)("li",{className:"cabhelp__faq-item",children:[(0,r.jsxs)("div",{className:"cabhelp__faq-question",children:[(0,r.jsx)("div",{children:(0,r.jsx)("span",{children:(0,r.jsx)("span",{className:"gold",children:"?"})})}),(0,r.jsx)("span",{children:"\u0417\u0430\u043a\u043e\u043d\u043d\u0430 \u043b\u0438 \u0434\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438?"})]}),(0,r.jsx)("div",{className:"cabhelp__faq-answer"})]})]})]})})]})})]}),(0,r.jsx)(i.Z,{})]})]})})}}}]);
//# sourceMappingURL=888.382c5906.chunk.js.map