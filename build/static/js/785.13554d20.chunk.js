"use strict";(self.webpackChunkukg_react=self.webpackChunkukg_react||[]).push([[785],{3155:function(e,s,a){a.d(s,{Z:function(){return d}});var n=a(9439),i=a(2791),t=a(3504),c=a(4804),l=a(7498),r=a(184);function d(){var e=(0,i.useState)(!1),s=(0,n.Z)(e,2),a=s[0],d=s[1];return(0,r.jsxs)("aside",{className:"cabinet__aside",children:[(0,r.jsx)("div",{className:"cabinet__aside-logo",children:(0,r.jsx)("img",{src:l.jY,alt:"logo"})}),(0,r.jsxs)("div",{className:"cabinet__aside-welcome grey-block",children:[(0,r.jsx)("span",{children:"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c123"}),(0,r.jsx)("div",{className:"cabinet__aside-welcome--name gold",children:"Artem"}),(0,r.jsx)("span",{children:"\u0412\u0430\u0448\u0430 \u0440\u0435\u0444\u0435\u0440\u0430\u043b\u044c\u043d\u0430\u044f \u0441\u0441\u044b\u043b\u043a\u0430"}),(0,r.jsxs)("button",{className:"gold",onClick:function(e){e.stopPropagation(),d(!0),navigator.clipboard.writeText(e.currentTarget.firstElementChild.innerText)},children:[(0,r.jsx)("span",{children:"https://google.com/awdawdawdawdawda"}),(0,r.jsx)("img",{src:l.UI,alt:"copy"})]}),(0,r.jsx)(c.Z,{message:"\u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u043e \u0432 \u0431\u0443\u0444\u0435\u0440 \u043e\u0431\u043c\u0435\u043d\u0430",anchorOrigin:{vertical:"top",horizontal:"center"},autoHideDuration:2e3,onClose:function(){return d(!1)},open:a})]}),(0,r.jsx)("nav",{className:"cabinet__aside-menu",children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)(t.OL,{to:"/",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430"})}),(0,r.jsx)("li",{children:(0,r.jsx)(t.OL,{to:"/investments",children:"\u0418\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u0438"})}),(0,r.jsx)("li",{children:(0,r.jsx)(t.OL,{to:"/token",children:"\u0422\u043e\u043a\u0435\u043d"})}),(0,r.jsx)("li",{children:(0,r.jsx)(t.OL,{to:"/partnership",children:"\u041f\u0430\u0440\u0442\u043d\u0435\u0440\u0441\u043a\u0430\u044f \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0430"})}),(0,r.jsx)("li",{children:(0,r.jsx)(t.OL,{to:"/profile",children:"\u041c\u043e\u0439 \u043f\u0440\u043e\u0444\u0438\u043b\u044c"})}),(0,r.jsx)("li",{children:(0,r.jsx)(t.OL,{to:"/promotion",children:"\u0420\u0435\u043a\u043b\u0430\u043c\u043d\u044b\u0435 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b"})}),(0,r.jsx)("li",{children:(0,r.jsx)(t.OL,{to:"/help",children:"\u041f\u043e\u043c\u043e\u0449\u044c"})})]})})]})}},9659:function(e,s,a){a.d(s,{Z:function(){return _}});var n=a(2791),i=a(6871),t=a(6764),c=a(9367),l=a(5671),r=a(3144),d=a(136),o=a(4062),p=a(4788),x=a(1528),h=a(184),u=function(e){(0,d.Z)(a,e);var s=(0,o.Z)(a);function a(e){var n;return(0,l.Z)(this,a),(n=s.call(this,e)).state={time:(0,p.Z)(new Date,"dd MMM yyyy HH : mm",{locale:x.Z})},n}return(0,r.Z)(a,[{key:"componentDidMount",value:function(){var e=this;this.intervalID=setInterval((function(){return e.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalID)}},{key:"tick",value:function(){this.setState({time:(0,p.Z)(new Date,"dd MMM yyyy HH : mm",{locale:x.Z})})}},{key:"render",value:function(){return(0,h.jsx)(h.Fragment,{children:this.state.time})}}]),a}(n.Component),j=a(8702),m=a(7498);function _(){var e=(0,n.useContext)(t.Z),s=e.getValue,a=e.onChange,l=e.options,r=(0,n.useContext)(j.V).store,d=(0,i.s0)();return(0,h.jsxs)("div",{className:"cabinet__header",children:[(0,h.jsxs)("div",{className:"cabinet__header-btns",children:[(0,h.jsxs)("a",{href:"/",className:"cabinet__header-btns--settings gold",children:[(0,h.jsx)("img",{src:m.HU,alt:"settings"}),(0,h.jsx)("span",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"})]}),(0,h.jsxs)("button",{onClick:function(){r.logout(),d("/signin")},className:"cabinet__header-btns--exit gold",children:[(0,h.jsx)("img",{src:m.Vu,alt:"exit"}),(0,h.jsx)("span",{children:"\u0412\u044b\u0445\u043e\u0434"})]})]}),(0,h.jsxs)("div",{className:"cabinet__header-rightside",children:[(0,h.jsx)("div",{className:"cabinet__header-social social",children:(0,h.jsxs)("ul",{children:[(0,h.jsx)("li",{children:(0,h.jsx)("a",{href:"/",children:(0,h.jsx)("img",{src:m.T_,alt:"youtube"})})}),(0,h.jsx)("li",{children:(0,h.jsx)("a",{href:"/",children:(0,h.jsx)("img",{src:m.qv,alt:"facebook"})})}),(0,h.jsx)("li",{children:(0,h.jsx)("a",{href:"/",children:(0,h.jsx)("img",{src:m.CR,alt:"instagram"})})}),(0,h.jsx)("li",{children:(0,h.jsx)("a",{href:"/",children:(0,h.jsx)("img",{src:m.wL,alt:"telegram"})})})]})}),(0,h.jsx)("div",{className:"cabinet__header-lang lang",children:(0,h.jsx)(c.ZP,{classNamePrefix:"lang-list",onChange:a,value:s(),className:"lang__list",options:l})}),(0,h.jsx)("div",{className:"cabinet__header-time",children:(0,h.jsx)(u,{})})]})]})}},8698:function(e,s,a){a.d(s,{Z:function(){return p}});var n=a(5861),i=a(9439),t=a(7757),c=a.n(t),l=a(2791),r=a(6470),d=a(7498),o=a(184);function p(){var e=(0,l.useState)(null),s=(0,i.Z)(e,2),a=s[0],t=s[1],d=function(){var e=(0,n.Z)(c().mark((function e(){var s;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.Z.userInfo();case 3:s=e.sent,t(s.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();(0,l.useEffect)((function(){d()}),[]);var p=a?(0,o.jsx)(x,{user:a}):null;return(0,o.jsx)(o.Fragment,{children:p})}var x=function(e){var s=e.user;return(0,o.jsx)("div",{className:"cabinet__topbar",children:(0,o.jsxs)("div",{className:"cabinet__topbar-wrapper",children:[(0,o.jsx)("div",{className:"cabinet__topbar-balance",children:(0,o.jsxs)("div",{className:"cabinet__topbar-balance--wrapper",children:[(0,o.jsx)("span",{children:"\u0412\u0430\u0448 \u0431\u0430\u043b\u0430\u043d\u0441"}),(0,o.jsx)("span",{className:"gold",children:s.balance.amount}),(0,o.jsx)("img",{src:d.cg,alt:"balance"}),(0,o.jsx)("img",{src:d.CZ,alt:"balance-money"})]})}),(0,o.jsxs)("div",{className:"cabinet__topbar-ew grey-block-dark",children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("span",{children:"\u0417\u0430\u0440\u0430\u0431\u043e\u0442\u0430\u043d\u043e"}),(0,o.jsxs)("span",{children:["391.14",(0,o.jsx)("img",{src:d.sd,alt:"earned"})]})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("span",{children:"\u0412\u044b\u0432\u0435\u0434\u0435\u043d\u043e"}),(0,o.jsxs)("span",{children:["144.14",(0,o.jsx)("img",{src:d.sd,alt:"withdrawn"})]})]})]}),(0,o.jsxs)("div",{className:"cabinet__topbar-actdep grey-block-dark",children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("span",{children:"\u0410\u043a\u0442\u0438\u0432\u043d\u044b\u0435 \u0434\u0435\u043f\u043e\u0437\u0438\u0442\u044b"}),(0,o.jsx)("span",{children:"4 "})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("span",{children:"\u041d\u0430 \u0441\u0443\u043c\u043c\u0443"}),(0,o.jsxs)("span",{children:["353.14",(0,o.jsx)("img",{src:d.sd,alt:"earned"})]})]})]}),(0,o.jsxs)("div",{className:"cabinet__topbar-reflvl grey-block-dark",children:[(0,o.jsxs)("div",{className:"grey-block",children:[(0,o.jsx)("span",{children:"\u0420\u0435\u0444\u0435\u0440\u0430\u043b\u044c\u043d\u044b\u0439 \u0443\u0440\u043e\u0432\u0435\u043d\u044c"}),(0,o.jsxs)("span",{children:[(0,o.jsx)("span",{children:"\u0423\u0440\u043e\u0432\u0435\u043d\u044c 5 "}),(0,o.jsx)("span",{className:"gold",children:"- 15%"})]})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("span",{children:"\u0423\u0440\u043e\u0432\u0435\u043d\u044c \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440\u0430"}),(0,o.jsx)("span",{children:"\u041c4"})]})]}),(0,o.jsxs)("div",{className:"cabinet__topbar-partnum grey-block-dark",children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("span",{children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0430\u0440\u0442\u043d\u0435\u0440\u043e\u0432"}),(0,o.jsx)("span",{children:"138"})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("span",{children:"\u0410\u043a\u0442"}),(0,o.jsx)("span",{className:"green",children:"125"}),(0,o.jsx)("span",{children:"\u041d\u0435\u0430\u043a."}),(0,o.jsx)("span",{className:"red",children:"54"})]})]}),(0,o.jsxs)("div",{className:"cabinet__topbar-gift grey-block-dark",children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("img",{src:d.gv,alt:"topbar-gift"}),(0,o.jsxs)("span",{children:["\u041f\u041e\u0414\u0410\u0420\u041e\u041a \u0417\u0410 \u0421\u041b\u0415\u0414\u0423\u042e\u0429\u0418\u0419",(0,o.jsx)("br",{}),"\u0423\u0420\u041e\u0412\u0415\u041d\u042c \u041c\u0415\u041d\u0415\u0414\u0416\u0415\u0420\u0410"]})]}),(0,o.jsx)("img",{src:d.ZB,alt:"topbar-car"})]})]})})}},3956:function(e,s,a){a.r(s),a.d(s,{default:function(){return d}});var n=a(5276),i=a(8698),t=a(3155),c=a(9659),l=(a(2791),a(7498)),r=a(184);function d(){return(0,r.jsx)("div",{className:"cabinet",children:(0,r.jsxs)("div",{className:"cabinet__wrapper",children:[(0,r.jsx)(t.Z,{}),(0,r.jsxs)("div",{className:"wrapper",children:[(0,r.jsxs)("main",{className:"page",children:[(0,r.jsx)(c.Z,{}),(0,r.jsx)(i.Z,{}),(0,r.jsx)("div",{className:"cabtopup",children:(0,r.jsxs)("div",{className:"cabtopup__wrapper",children:[(0,r.jsx)("div",{className:"cabtopup__title cabinet__title_36",children:"\u041f\u043e\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435"}),(0,r.jsxs)("div",{className:"cabtopup__inner",children:[(0,r.jsxs)("ul",{className:"cabtopup__body",children:[(0,r.jsxs)("li",{className:"cabtopup__item",children:[(0,r.jsx)("label",{htmlFor:"status",children:"\u0421\u0442\u0430\u0442\u0443\u0441"}),(0,r.jsx)("div",{className:"cabtopup__input-wrapper",children:(0,r.jsx)("input",{disabled:!0,autoComplete:"off",type:"text",name:"status",value:"\u041e\u0436\u0438\u0434\u0430\u0435\u0442 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u044f",className:"cabtopup__input"})})]}),(0,r.jsxs)("li",{className:"cabtopup__item",children:[(0,r.jsx)("label",{htmlFor:"status",children:"\u041f\u043b\u0430\u0442\u0435\u0436\u043d\u0430\u044f \u0441\u0438\u0441\u0442\u0435\u043c\u0430"}),(0,r.jsx)("div",{className:"cabtopup__input-wrapper",children:(0,r.jsx)("input",{disabled:!0,autoComplete:"off",type:"text",name:"status",value:"Bitcoin",className:"cabtopup__input"})})]}),(0,r.jsxs)("li",{className:"cabtopup__item",children:[(0,r.jsx)("label",{htmlFor:"status",children:"\u0414\u0430\u0442\u0430"}),(0,r.jsx)("div",{className:"cabtopup__input-wrapper",children:(0,r.jsx)("input",{disabled:!0,autoComplete:"off",type:"text",name:"status",value:"12.10.2021 14:15:25",className:"cabtopup__input"})})]}),(0,r.jsxs)("li",{className:"cabtopup__item",children:[(0,r.jsx)("label",{htmlFor:"status",children:"\u0421\u0443\u043c\u043c\u0430"}),(0,r.jsx)("div",{className:"cabtopup__input-wrapper",children:(0,r.jsx)("input",{disabled:!0,autoComplete:"off",type:"text",name:"status",value:"10 000 BTC",className:"cabtopup__input"})})]}),(0,r.jsxs)("li",{className:"cabtopup__item",children:[(0,r.jsx)("label",{htmlFor:"status",children:"\u0420\u0435\u043a\u0432\u0438\u0437\u0438\u0442\u044b \u0434\u043b\u044f \u043e\u043f\u043b\u0430\u0442\u044b"}),(0,r.jsxs)("div",{className:"cabtopup__input-wrapper",children:[(0,r.jsx)("input",{disabled:!0,autoComplete:"off",type:"text",name:"status",value:"161AEyUD9WzJ3cZnjQqg621ewANyKWuvaQ",className:"cabtopup__input"}),(0,r.jsx)("img",{src:l.q$,alt:"\u0420\u0435\u043a\u0432\u0438\u0437\u0438\u0442\u044b \u0434\u043b\u044f \u043e\u043f\u043b\u0430\u0442\u044b"})]})]})]}),(0,r.jsx)("div",{className:"cabtopup__qr",children:(0,r.jsx)("img",{src:l.qr,alt:"QR \u043a\u043e\u0434"})}),(0,r.jsxs)("div",{className:"cabtopup__footer",children:[(0,r.jsxs)("div",{className:"cabtopup__footer-descr",children:["\u0414\u043b\u044f \u043f\u043e\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0431\u0430\u043b\u0430\u043d\u0441\u0430 \u0441\u043e\u0432\u0435\u0440\u0448\u0438\u0442\u0435 \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u044e \u043f\u043e \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u043c \u0440\u0435\u043a\u0432\u0438\u0437\u0438\u0442\u0430\u043c, \u043b\u0438\u0431\u043e \u0432\u043e\u0441\u043a\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435\u0441\u044c ",(0,r.jsx)("span",{children:"qr-\u043a\u043e\u0434\u043e\u043c"})]}),(0,r.jsx)("button",{type:"submit",className:"cabtopup__footer-button button button_gold",children:"\u041e\u0422\u041c\u0415\u041d\u0418\u0422\u042c"})]})]})]})})]}),(0,r.jsx)(n.Z,{})]})]})})}}}]);
//# sourceMappingURL=785.13554d20.chunk.js.map