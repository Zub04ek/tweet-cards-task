"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[819],{819:function(n,t,e){e.r(t),e.d(t,{default:function(){return J}});var r,o,a,i,p,s,c,u,x,l,d,f,h=e(433),g=e(861),b=e(439),m=e(687),Z=e.n(m),w=e(791),v=e(689),k=e(87),j=e(168),y=e(549),C=y.Z.div(r||(r=(0,j.Z)(["\n  position: relative;\n  width: 380px;\n  height: 460px;\n  background: linear-gradient(\n    114.99deg,\n    #471ca9 -0.99%,\n    #5736a3 54.28%,\n    #4b2a99 78.99%\n  );\n  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);\n  border-radius: 20px;\n"]))),S=y.Z.a(o||(o=(0,j.Z)(["\n  position: absolute;\n  top: 20px;\n  left: 20px;\n"]))),z=y.Z.img(a||(a=(0,j.Z)(["\n  background-image: url('../../images/Logo.png');\n"]))),F=y.Z.img(i||(i=(0,j.Z)(["\n  position: absolute;\n"]))),L=y.Z.div(p||(p=(0,j.Z)(["\n  position: absolute;\n  top: 214px;\n  width: 380px;\n  height: 8px;\n  background: #ebd8ff;\n  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),\n    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;\n"]))),U=y.Z.div(s||(s=(0,j.Z)(["\n  position: relative;\n  top: 222px;\n  height: 238px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 62px;\n  /* padding-bottom: 36px; */\n"]))),_=y.Z.div(c||(c=(0,j.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n"]))),T=y.Z.p(u||(u=(0,j.Z)(["\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 24px;\n  text-transform: uppercase;\n  /* text-align: center; */\n  color: #ebd8ff;\n"]))),E=y.Z.button(x||(x=(0,j.Z)(["\n  padding: 14px 56px;\n  margin-top: 26px;\n  width: 196px;\n  background: #ebd8ff;\n  border: 0px solid transparent;\n  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);\n  border-radius: 10.3108px;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 22px;\n  text-transform: uppercase;\n  color: #373737;\n  cursor: pointer;\n"]))),R=y.Z.button(l||(l=(0,j.Z)(["\n  padding: 14px 39px;\n  margin-top: 26px;\n  width: 196px;\n  background: #5cd3a8;\n  border: 0px solid transparent;\n  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);\n  border-radius: 10.3108px;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 22px;\n  text-transform: uppercase;\n  color: #373737;\n  cursor: pointer;\n"]))),G=e(243),H=new URL("https://63d513e420b08498cbc74eb4.mockapi.io/users"),I=function(){var n=(0,g.Z)(Z().mark((function n(){var t,e,r=arguments;return Z().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:1,n.next=3,G.Z.get("".concat(H,"?limit=").concat(3,"&page=").concat(t));case 3:return e=n.sent,n.abrupt("return",e.data);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),M=function(){var n=(0,g.Z)(Z().mark((function n(t,e){var r;return Z().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,G.Z.put("".concat(H,"/").concat(t),{followers:e},{headers:{"Content-type":"application/json; charset=UTF-8"}});case 2:return r=n.sent,console.log("resp",r.data),n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),N=e(184),q=function(n){var t=n.user,e=t.user,r=t.tweets,o=t.followers,a=t.id,i=(0,w.useState)(""),p=(0,b.Z)(i,2),s=p[0],c=p[1],u=(0,w.useState)(o),x=(0,b.Z)(u,2),l=x[0],d=x[1],f=(0,w.useState)(!1),h=(0,b.Z)(f,2),m=h[0],v=h[1],k=function(){c(a),m?(d((function(n){return n-1})),v(!1)):(d((function(n){return n+1})),v(!0))};(0,w.useEffect)((function(){if(s){var n=function(){var n=(0,g.Z)(Z().mark((function n(){return Z().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,M(s,l);case 3:n.next=8;break;case 5:n.prev=5,n.t0=n.catch(0),console.log(n.t0);case 8:case"end":return n.stop()}}),n,null,[[0,5]])})));return function(){return n.apply(this,arguments)}}();n()}}),[l,s]);var j=Intl.NumberFormat("en-US");return(0,N.jsxs)(C,{children:[(0,N.jsx)(S,{href:"https://goit.global/ua/",children:(0,N.jsx)(z,{src:"images/Logo.png",alt:"logo"})}),(0,N.jsx)(F,{src:"images/picture.png",alt:"background"}),(0,N.jsx)(L,{}),(0,N.jsxs)(U,{children:[(0,N.jsxs)(_,{children:[(0,N.jsx)(T,{children:e}),(0,N.jsxs)(T,{children:[j.format(r)," Tweets"]}),(0,N.jsxs)(T,{children:[j.format(l)," Followers"]})]}),m?(0,N.jsx)(R,{type:"button",onClick:k,children:"Following"}):(0,N.jsx)(E,{type:"button",onClick:k,children:"Follow"})]})]})},A=y.Z.ul(d||(d=(0,j.Z)(["\n  display: flex;\n  gap: 16px;\n  flex-wrap: wrap;\n"]))),B=y.Z.button(f||(f=(0,j.Z)(["\n  margin: 0px auto;\n  padding: 8px 16px;\n  border-radius: 2px;\n  background-color: #3f51b5;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  text-align: center;\n  display: inline-block;\n  color: #fff;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 18px;\n  line-height: 24px;\n  font-style: normal;\n  font-weight: 500;\n  min-width: 180px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n"]))),D=function(n){var t=n.users;return(0,N.jsx)(A,{children:t.map((function(n){return(0,N.jsx)("li",{children:(0,N.jsx)(q,{user:n})},n.id)}))})},J=function(){var n,t,e=(0,w.useState)([]),r=(0,b.Z)(e,2),o=r[0],a=r[1],i=(0,w.useState)(1),p=(0,b.Z)(i,2),s=p[0],c=p[1];(0,w.useEffect)((function(){var n=function(){var n=(0,g.Z)(Z().mark((function n(){var t;return Z().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,I(s);case 3:t=n.sent,a((function(n){return[].concat((0,h.Z)(n),(0,h.Z)(t))})),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}),[s]);var u=(0,w.useMemo)((function(){return 12>o.length}),[o]),x=(0,v.TH)(),l=(0,w.useRef)(null!==(n=null===(t=x.state)||void 0===t?void 0:t.from)&&void 0!==n?n:"/");return(0,N.jsxs)("main",{children:[(0,N.jsx)(k.rU,{to:l.current,children:"Go back"}),(0,N.jsx)(D,{users:o}),u&&(0,N.jsx)(B,{type:"button",onClick:function(){c((function(n){return n+1}))},children:"Load more"})]})}}}]);
//# sourceMappingURL=819.5cdb41cd.chunk.js.map