"use strict";(self.webpackChunkukg_react=self.webpackChunkukg_react||[]).push([[451],{3155:function(e,s,n){n.d(s,{Z:function(){return d}});var a=n(885),i=n(2791),r=n(3504),c=n(218),l=n(7498),t=n(184);function d(){var e=(0,i.useState)(!1),s=(0,a.Z)(e,2),n=s[0],d=s[1];return(0,t.jsxs)("aside",{className:"cabinet__aside",children:[(0,t.jsx)("div",{className:"cabinet__aside-logo",children:(0,t.jsx)("img",{src:l.jY,alt:"logo"})}),(0,t.jsxs)("div",{className:"cabinet__aside-welcome grey-block",children:[(0,t.jsx)("span",{children:"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c123"}),(0,t.jsx)("div",{className:"cabinet__aside-welcome--name gold",children:"Artem"}),(0,t.jsx)("span",{children:"\u0412\u0430\u0448\u0430 \u0440\u0435\u0444\u0435\u0440\u0430\u043b\u044c\u043d\u0430\u044f \u0441\u0441\u044b\u043b\u043a\u0430"}),(0,t.jsxs)("button",{className:"gold",onClick:function(e){e.stopPropagation(),d(!0),navigator.clipboard.writeText(e.currentTarget.firstElementChild.innerText)},children:[(0,t.jsx)("span",{children:"https://google.com/awdawdawdawdawda"}),(0,t.jsx)("img",{src:l.UI,alt:"copy"})]}),(0,t.jsx)(c.Z,{message:"\u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u043e \u0432 \u0431\u0443\u0444\u0435\u0440 \u043e\u0431\u043c\u0435\u043d\u0430",anchorOrigin:{vertical:"top",horizontal:"center"},autoHideDuration:2e3,onClose:function(){return d(!1)},open:n})]}),(0,t.jsx)("nav",{className:"cabinet__aside-menu",children:(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:(0,t.jsx)(r.OL,{to:"/",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430"})}),(0,t.jsx)("li",{children:(0,t.jsx)(r.OL,{to:"/investments",children:"\u0418\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u0438"})}),(0,t.jsx)("li",{children:(0,t.jsx)(r.OL,{to:"/token",children:"\u0422\u043e\u043a\u0435\u043d"})}),(0,t.jsx)("li",{children:(0,t.jsx)(r.OL,{to:"/partnership",children:"\u041f\u0430\u0440\u0442\u043d\u0435\u0440\u0441\u043a\u0430\u044f \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0430"})}),(0,t.jsx)("li",{children:(0,t.jsx)(r.OL,{to:"/profile",children:"\u041c\u043e\u0439 \u043f\u0440\u043e\u0444\u0438\u043b\u044c"})}),(0,t.jsx)("li",{children:(0,t.jsx)(r.OL,{to:"/promotion",children:"\u0420\u0435\u043a\u043b\u0430\u043c\u043d\u044b\u0435 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b"})}),(0,t.jsx)("li",{children:(0,t.jsx)(r.OL,{to:"/help",children:"\u041f\u043e\u043c\u043e\u0449\u044c"})})]})})]})}},9659:function(e,s,n){n.d(s,{Z:function(){return u}});var a=n(2791),i=n(6764),r=n(5505),c=n(5671),l=n(3144),t=n(136),d=n(2882),h=n(4788),x=n(1528),j=n(184),o=function(e){(0,t.Z)(n,e);var s=(0,d.Z)(n);function n(e){var a;return(0,c.Z)(this,n),(a=s.call(this,e)).state={time:(0,h.Z)(new Date,"dd MMM yyyy HH : mm",{locale:x.Z})},a}return(0,l.Z)(n,[{key:"componentDidMount",value:function(){var e=this;this.intervalID=setInterval((function(){return e.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalID)}},{key:"tick",value:function(){this.setState({time:(0,h.Z)(new Date,"dd MMM yyyy HH : mm",{locale:x.Z})})}},{key:"render",value:function(){return(0,j.jsx)(j.Fragment,{children:this.state.time})}}]),n}(a.Component),m=n(7834),p=n(7498);function u(){var e=(0,a.useContext)(i.Z),s=e.getValue,n=e.onChange,c=e.options,l=(0,m.a)().setIsAuth;return(0,j.jsxs)("div",{className:"cabinet__header",children:[(0,j.jsxs)("div",{className:"cabinet__header-btns",children:[(0,j.jsxs)("a",{href:"/",className:"cabinet__header-btns--settings gold",children:[(0,j.jsx)("img",{src:p.HU,alt:"settings"}),(0,j.jsx)("span",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"})]}),(0,j.jsxs)("button",{onClick:function(){localStorage.removeItem("token"),l(!1)},className:"cabinet__header-btns--exit gold",children:[(0,j.jsx)("img",{src:p.Vu,alt:"exit"}),(0,j.jsx)("span",{children:"\u0412\u044b\u0445\u043e\u0434"})]})]}),(0,j.jsxs)("div",{className:"cabinet__header-rightside",children:[(0,j.jsx)("div",{className:"cabinet__header-social social",children:(0,j.jsxs)("ul",{children:[(0,j.jsx)("li",{children:(0,j.jsx)("a",{href:"/",children:(0,j.jsx)("img",{src:p.T_,alt:"youtube"})})}),(0,j.jsx)("li",{children:(0,j.jsx)("a",{href:"/",children:(0,j.jsx)("img",{src:p.qv,alt:"facebook"})})}),(0,j.jsx)("li",{children:(0,j.jsx)("a",{href:"/",children:(0,j.jsx)("img",{src:p.CR,alt:"instagram"})})}),(0,j.jsx)("li",{children:(0,j.jsx)("a",{href:"/",children:(0,j.jsx)("img",{src:p.wL,alt:"telegram"})})})]})}),(0,j.jsx)("div",{className:"cabinet__header-lang lang",children:(0,j.jsx)(r.ZP,{classNamePrefix:"lang-list",onChange:n,value:s(),className:"lang__list",options:c})}),(0,j.jsx)("div",{className:"cabinet__header-time",children:(0,j.jsx)(o,{})})]})]})}},8698:function(e,s,n){n.d(s,{Z:function(){return r}});var a=n(7498),i=n(184);function r(){return(0,i.jsx)("div",{className:"cabinet__topbar",children:(0,i.jsxs)("div",{className:"cabinet__topbar-wrapper",children:[(0,i.jsx)("div",{className:"cabinet__topbar-balance",children:(0,i.jsxs)("div",{className:"cabinet__topbar-balance--wrapper",children:[(0,i.jsx)("span",{children:"\u0412\u0430\u0448 \u0431\u0430\u043b\u0430\u043d\u0441"}),(0,i.jsx)("span",{className:"gold",children:"1046.14"}),(0,i.jsx)("img",{src:a.cg,alt:"balance"}),(0,i.jsx)("img",{src:a.CZ,alt:"balance-money"})]})}),(0,i.jsxs)("div",{className:"cabinet__topbar-ew grey-block-dark",children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("span",{children:"\u0417\u0430\u0440\u0430\u0431\u043e\u0442\u0430\u043d\u043e"}),(0,i.jsxs)("span",{children:["391.14",(0,i.jsx)("img",{src:a.sd,alt:"earned"})]})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("span",{children:"\u0412\u044b\u0432\u0435\u0434\u0435\u043d\u043e"}),(0,i.jsxs)("span",{children:["144.14",(0,i.jsx)("img",{src:a.sd,alt:"withdrawn"})]})]})]}),(0,i.jsxs)("div",{className:"cabinet__topbar-actdep grey-block-dark",children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("span",{children:"\u0410\u043a\u0442\u0438\u0432\u043d\u044b\u0435 \u0434\u0435\u043f\u043e\u0437\u0438\u0442\u044b"}),(0,i.jsx)("span",{children:"4 "})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("span",{children:"\u041d\u0430 \u0441\u0443\u043c\u043c\u0443"}),(0,i.jsxs)("span",{children:["353.14",(0,i.jsx)("img",{src:a.sd,alt:"earned"})]})]})]}),(0,i.jsxs)("div",{className:"cabinet__topbar-reflvl grey-block-dark",children:[(0,i.jsxs)("div",{className:"grey-block",children:[(0,i.jsx)("span",{children:"\u0420\u0435\u0444\u0435\u0440\u0430\u043b\u044c\u043d\u044b\u0439 \u0443\u0440\u043e\u0432\u0435\u043d\u044c"}),(0,i.jsxs)("span",{children:[(0,i.jsx)("span",{children:"\u0423\u0440\u043e\u0432\u0435\u043d\u044c 5 "}),(0,i.jsx)("span",{className:"gold",children:"- 15%"})]})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("span",{children:"\u0423\u0440\u043e\u0432\u0435\u043d\u044c \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440\u0430"}),(0,i.jsx)("span",{children:"\u041c4"})]})]}),(0,i.jsxs)("div",{className:"cabinet__topbar-partnum grey-block-dark",children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("span",{children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0430\u0440\u0442\u043d\u0435\u0440\u043e\u0432"}),(0,i.jsx)("span",{children:"138"})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("span",{children:"\u0410\u043a\u0442"}),(0,i.jsx)("span",{className:"green",children:"125"}),(0,i.jsx)("span",{children:"\u041d\u0435\u0430\u043a."}),(0,i.jsx)("span",{className:"red",children:"54"})]})]}),(0,i.jsxs)("div",{className:"cabinet__topbar-gift grey-block-dark",children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("img",{src:a.gv,alt:"topbar-gift"}),(0,i.jsxs)("span",{children:["\u041f\u041e\u0414\u0410\u0420\u041e\u041a \u0417\u0410 \u0421\u041b\u0415\u0414\u0423\u042e\u0429\u0418\u0419",(0,i.jsx)("br",{}),"\u0423\u0420\u041e\u0412\u0415\u041d\u042c \u041c\u0415\u041d\u0415\u0414\u0416\u0415\u0420\u0410"]})]}),(0,i.jsx)("img",{src:a.ZB,alt:"topbar-car"})]})]})})}},1966:function(e,s,n){n.r(s),n.d(s,{default:function(){return t}});var a=n(5276),i=n(8698),r=n(3155),c=n(9659),l=n(184);function t(){return(0,l.jsx)("div",{className:"cabinet",children:(0,l.jsxs)("div",{className:"cabinet__wrapper",children:[(0,l.jsx)(r.Z,{}),(0,l.jsxs)("div",{className:"wrapper",children:[(0,l.jsxs)("main",{className:"page",children:[(0,l.jsx)(c.Z,{}),(0,l.jsx)(i.Z,{}),(0,l.jsx)("div",{className:"mt-5",children:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430"})]}),(0,l.jsx)(a.Z,{})]})]})})}}}]);
//# sourceMappingURL=451.4ba7f41e.chunk.js.map