(this["webpackJsonptctm-farm"]=this["webpackJsonptctm-farm"]||[]).push([[7],{863:function(t,e,n){"use strict";var r=n(0),a=n(239),c=/%(.*?)%/,u=function(t,e,n){var r=t.find((function(t){return t.data.stringId===e}));if(r){var a=r.data.text;return a.includes("%")?function(t,e){var n=c.exec(t)[0],r=e.split(" ")[0];return t.replace(n,r)}(a,n):a}return n};e.a=function(){var t=Object(r.useContext)(a.a).translations;return function(e,n){return"error"===t[0]?n:t.length>0?u(t,e,n):n}}},864:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return u}));var r=n(12),a=n.n(r),c=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:18,n=new a.a(t).dividedBy(new a.a(10).pow(e));return n.toNumber()},u=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:18;return t.dividedBy(new a.a(10).pow(e)).toFixed()}},866:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"i",(function(){return f})),n.d(e,"d",(function(){return b})),n.d(e,"e",(function(){return j})),n.d(e,"j",(function(){return d})),n.d(e,"f",(function(){return p})),n.d(e,"c",(function(){return l})),n.d(e,"b",(function(){return O})),n.d(e,"g",(function(){return h})),n.d(e,"h",(function(){return m}));var r=n(15),a=n(5),c=n.n(a),u=n(12),i=n.n(u),s=n(880),o=function(){var t=Object(r.a)(c.a.mark((function t(e,n,r){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.methods.approve(n.options.address,s.ethers.constants.MaxUint256).send({from:r}));case 1:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}(),f=function(){var t=Object(r.a)(c.a.mark((function t(e,n,r,a){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.methods.deposit(n,new i.a(r).times(new i.a(10).pow(18)).toString()).send({from:a}).on("transactionHash",(function(t){return t.transactionHash})));case 1:case"end":return t.stop()}}),t)})));return function(e,n,r,a){return t.apply(this,arguments)}}(),b=function(){var t=Object(r.a)(c.a.mark((function t(e,n,r){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.methods.deposit(new i.a(n).times(new i.a(10).pow(18)).toString()).send({from:r}).on("transactionHash",(function(t){return t.transactionHash})));case 1:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}(),j=function(){var t=Object(r.a)(c.a.mark((function t(e,n,r){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.methods.deposit().send({from:r,value:new i.a(n).times(new i.a(10).pow(18)).toString()}).on("transactionHash",(function(t){return t.transactionHash})));case 1:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}(),d=function(){var t=Object(r.a)(c.a.mark((function t(e,n,r,a){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.methods.withdraw(n,new i.a(r).times(new i.a(10).pow(18)).toString()).send({from:a}).on("transactionHash",(function(t){return t.transactionHash})));case 1:case"end":return t.stop()}}),t)})));return function(e,n,r,a){return t.apply(this,arguments)}}(),p=function(){var t=Object(r.a)(c.a.mark((function t(e,n,r){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("0x3B9B74f48E89Ebd8b45a53444327013a2308A9BC"!==e.options.address){t.next=2;break}return t.abrupt("return",e.methods.emergencyWithdraw().send({from:r}).on("transactionHash",(function(t){return t.transactionHash})));case 2:if("0xBb2B66a2c7C2fFFB06EA60BeaD69741b3f5BF831"!==e.options.address){t.next=4;break}return t.abrupt("return",e.methods.emergencyWithdraw().send({from:r}).on("transactionHash",(function(t){return t.transactionHash})));case 4:return t.abrupt("return",e.methods.withdraw(new i.a(n).times(new i.a(10).pow(18)).toString()).send({from:r}).on("transactionHash",(function(t){return t.transactionHash})));case 5:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}(),l=function(){var t=Object(r.a)(c.a.mark((function t(e,n,r){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.methods.emergencyWithdraw().send({from:r}).on("transactionHash",(function(t){return t.transactionHash})));case 1:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}(),O=function(){var t=Object(r.a)(c.a.mark((function t(e,n,r){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.methods.deposit(n,"0").send({from:r}).on("transactionHash",(function(t){return t.transactionHash})));case 1:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}(),h=function(){var t=Object(r.a)(c.a.mark((function t(e,n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.methods.deposit("0").send({from:n}).on("transactionHash",(function(t){return t.transactionHash})));case 1:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),m=function(){var t=Object(r.a)(c.a.mark((function t(e,n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.methods.deposit().send({from:n,value:new i.a(0)}).on("transactionHash",(function(t){return t.transactionHash})));case 1:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},868:function(t,e,n){"use strict";n.d(e,"a",(function(){return h})),n.d(e,"b",(function(){return m}));var r=n(21),a=n(0),c=n(181),u=n.n(c),i=n(89),s=n(176),o=Object(s.a)(),f=new u.a.providers.HttpProvider(o,{timeout:1e4}),b=function(){var t=Object(i.m)().ethereum,e=Object(a.useRef)(t),n=Object(a.useState)(new u.a(t||f)),c=Object(r.a)(n,2),s=c[0],o=c[1];return Object(a.useEffect)((function(){t!==e.current&&(o(new u.a(t||f)),e.current=t)}),[t]),s},j=n(25),d=n(869),p=(n(44),n(57)),l=n(129),O=function(t,e,n){var c=b(),u=Object(a.useState)(new c.eth.Contract(t,e,n)),i=Object(r.a)(u,2),s=i[0],o=i[1];return Object(a.useEffect)((function(){o(new c.eth.Contract(t,e,n))}),[t,e,n,c]),s},h=function(){return O(p,Object(j.b)())},m=function(t){var e=d.b.find((function(e){return e.sousId===t}));return O(l,e.contractAddress[56])}},869:function(t,e,n){"use strict";var r=n(63);n.d(e,"a",(function(){return r.a}));var a=n(58);n.d(e,"b",(function(){return a.a}));r.a.filter((function(t){return t.isCommunity})).map((function(t){return t.tokenSymbol}))},873:function(t,e,n){"use strict";n.d(e,"b",(function(){return d})),n.d(e,"a",(function(){return p}));var r=n(46),a=n(15),c=n(5),u=n.n(c),i=n(0),s=n(89),o=n(45),f=n(179),b=n(866),j=n(868),d=function(t){var e=Object(o.b)(),n=Object(s.m)().account,r=Object(j.a)();return{onReward:Object(i.useCallback)(Object(a.a)(u.a.mark((function a(){var c;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(b.b)(r,t,n);case 2:return c=a.sent,e(Object(f.a)(n)),a.abrupt("return",c);case 5:case"end":return a.stop()}}),a)}))),[n,e,t,r])}},p=function(t){var e=Object(s.m)().account,n=Object(j.a)();return{onReward:Object(i.useCallback)(Object(a.a)(u.a.mark((function a(){var c;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c=t.reduce((function(t,a){return[].concat(Object(r.a)(t),[Object(b.b)(n,a,e)])}),[]),a.abrupt("return",Promise.all(c));case 2:case"end":return a.stop()}}),a)}))),[e,t,n])}}},874:function(t,e,n){"use strict";var r=n(13),a=(n(0),n(50)),c=n(89),u=n(863),i=n(16);e.a=function(t){var e=Object(u.a)(),n=Object(c.m)(),s=n.connect,o=n.reset,f=Object(a.G)(s,o).onPresentConnectModal;return Object(i.jsx)(a.d,Object(r.a)(Object(r.a)({onClick:f},t),{},{children:e(292,"Unlock Wallet")}))}},875:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return f}));var r=n(15),a=n(5),c=n.n(a),u=n(181),i=n.n(u),s=n(44),o=function(t,e){return new(new i.a(t).eth.Contract)(s,e)},f=function(){var t=Object(r.a)(c.a.mark((function t(e,n,r){var a,u;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=o(e,n),t.prev=1,t.next=4,a.methods.balanceOf(r).call();case 4:return u=t.sent,t.abrupt("return",u);case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return","0");case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e,n,r){return t.apply(this,arguments)}}()},905:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return st}));var r,a,c,u,i,s,o,f,b,j,d=n(78),p=n(0),l=n(9),O=n(50),h=n(237),m=n(15),x=n(21),v=n(5),w=n.n(v),g=n(89),k=n(863),y=n(872),S=n(873),C=n(13),T=n(12),H=n.n(T),B=n(23),z=n(25),M=n(57),E=n(869),R=n(180),F=function(){var t=Object(p.useState)([]),e=Object(x.a)(t,2),n=e[0],r=e[1],a=Object(g.m)().account,c=Object(R.a)().fastRefresh;return Object(p.useEffect)((function(){var t=function(){var t=Object(m.a)(w.a.mark((function t(){var e,n,c;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=E.a.map((function(t){return{address:Object(z.b)(),name:"pendingTCTM",params:[t.pid,a]}})),t.next=3,Object(B.a)(M,e);case 3:n=t.sent,c=E.a.map((function(t,e){return Object(C.a)(Object(C.a)({},t),{},{balance:new H.a(n[e])})})),r(c);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();a&&t()}),[a,c]),n},N=n(874),W=n(890),P=n(16),A=function(t){var e=t.value,n=t.decimals,r=t.fontSize,a=void 0===r?"40px":r,c=t.prefix,u=Object(W.useCountUp)({start:0,end:e,duration:1,separator:",",decimals:void 0!==n?n:e<0?4:e>1e5?0:3}),i=u.countUp,s=u.update,o=Object(p.useRef)(s);return Object(p.useEffect)((function(){o.current(e)}),[e,o]),Object(P.jsxs)(O.B,{bold:!0,fontSize:a,children:[c,i]})},D=function(t){var e=t.earningsSum,n=Object(k.a)();return Object(g.m)().account?Object(P.jsx)(A,{value:e}):Object(P.jsx)(O.B,{color:"textDisabled",style:{lineHeight:"60px"},children:n(298,"Locked")})},L=function(t){var e=t.cakeBalance,n=Object(k.a)();return Object(g.m)().account?Object(P.jsx)(A,{value:e,fontSize:"24px"}):Object(P.jsx)(O.B,{color:"textDisabled",style:{lineHeight:"36px"},children:n(298,"Locked")})},U=function(){var t=Object(p.useState)([]),e=Object(x.a)(t,2),n=e[0],r=e[1],a=Object(g.m)().account,c=Object(R.a)().fastRefresh;return Object(p.useEffect)((function(){var t=function(){var t=Object(m.a)(w.a.mark((function t(){var e,n;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=E.a.map((function(t){return{address:Object(z.b)(),name:"pendingTCTM",params:[t.pid,a]}})),t.next=3,Object(B.a)(M,e);case 3:n=t.sent,r(n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();a&&t()}),[a,c]),n},$=n(238),I=n(369),J=n(128),Q=n(875),V=function(t){var e=Object(p.useState)(new H.a(0)),n=Object(x.a)(e,2),r=n[0],a=n[1],c=Object(g.m)(),u=c.account,i=c.ethereum,s=Object(R.a)().fastRefresh;return Object(p.useEffect)((function(){var e=function(){var e=Object(m.a)(w.a.mark((function e(){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Q.b)(i,t,u);case 2:n=e.sent,a(new H.a(n));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();u&&i&&e()}),[u,i,t,s]),r},G=n(864),q=Object(l.e)(O.h)(r||(r=Object(d.a)(["\n  background-repeat: no-repeat;\n  background-position: top right;\n  min-height: 376px;\n"]))),K=l.e.div(a||(a=Object(d.a)(["\n  margin-bottom: 16px;\n"]))),X=l.e.div(c||(c=Object(d.a)(["\n  color: ",";\n  font-size: 14px;\n"])),(function(t){return t.theme.colors.textSubtle})),Y=l.e.div(u||(u=Object(d.a)(["\n  margin-top: 24px;\n"]))),Z=function(){var t=Object(p.useState)(!1),e=Object(x.a)(t,2),n=e[0],r=e[1],a=Object(g.m)().account,c=Object(k.a)(),u=F(),i=Object(G.a)(V(Object(z.a)())),s=Object($.f)().toNumber(),o=U().reduce((function(t,e){return t+new y.a(e).div(new y.a(10).pow(18)).toNumber()}),0),f=u.filter((function(t){return t.balance.toNumber()>0})),b=Object(S.a)(f.map((function(t){return t.pid}))).onReward,j=Object(p.useCallback)(Object(m.a)(w.a.mark((function t(){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r(!0),t.prev=1,t.next=4,b();case 4:t.next=8;break;case 6:t.prev=6,t.t0=t.catch(1);case 8:return t.prev=8,r(!1),t.finish(8);case 11:case"end":return t.stop()}}),t,null,[[1,6,8,11]])}))),[b]);return Object(P.jsx)(q,{children:Object(P.jsxs)(O.i,{children:[Object(P.jsx)(O.n,{size:"xl",mb:"24px",children:c(542,"Farms & Staking")}),Object(P.jsxs)(K,{children:[Object(P.jsx)(X,{children:c(544,"TCTM to Harvest")}),Object(P.jsx)(D,{earningsSum:o}),Object(P.jsxs)(X,{children:["~$",(s*o).toFixed(2)]})]}),Object(P.jsxs)(K,{children:[Object(P.jsx)(X,{children:c(546,"TCTM in Wallet")}),Object(P.jsx)(L,{cakeBalance:i}),Object(P.jsxs)(X,{children:["~$",(s*i).toFixed(2)]})]}),Object(P.jsx)(Y,{children:a?Object(P.jsx)(O.d,{id:"harvest-all",disabled:f.length<=0||n,onClick:j,fullWidth:!0,children:n?c(548,"Collecting TCTM"):c(999,"Harvest all (".concat(f.length,")"))}):Object(P.jsx)(N.a,{fullWidth:!0})})]})})},_=Object(l.e)(O.h)(i||(i=Object(d.a)(["\n  margin-left: auto;\n  margin-right: auto;\n"]))),tt=l.e.div(s||(s=Object(d.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]))),et=function(){var t=Object(k.a)(),e=function(){var t=Object(R.a)().slowRefresh,e=Object(p.useState)(),n=Object(x.a)(e,2),r=n[0],a=n[1];return Object(p.useEffect)((function(){function t(){return(t=Object(m.a)(w.a.mark((function t(){var e,n;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=Object(J.a)(I,Object(z.a)()),t.next=3,e.methods.totalSupply().call();case 3:n=t.sent,a(new H.a(n));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[t]),r}(),n=function(t){var e=Object(p.useState)(new H.a(0)),n=Object(x.a)(e,2),r=n[0],a=n[1],c=Object(R.a)().slowRefresh;return Object(p.useEffect)((function(){var t=function(){var t=Object(m.a)(w.a.mark((function t(){var e,n;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=Object(J.a)(I,Object(z.a)()),t.next=3,e.methods.balanceOf("0x000000000000000000000000000000000000dEaD").call();case 3:n=t.sent,a(new H.a(n));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[t,c]),r}(Object(z.a)()),r=Object($.c)(),a=Object($.f)(),c=e?e.minus(n):new y.a(0),u=Object(G.a)(c),i=a.times(c),s=0;return r&&r[0]&&r[0].TCTMPerBlock&&(s=new y.a(r[0].TCTMPerBlock).div(new y.a(10).pow(18)).toNumber()),Object(P.jsx)(_,{children:Object(P.jsxs)(O.i,{children:[Object(P.jsx)(O.n,{size:"xl",mb:"24px",children:t(534,"TCTM Stats")}),Object(P.jsxs)(tt,{children:[Object(P.jsx)(O.B,{fontSize:"14px",children:t(536,"Total TCTM Supply")}),u&&Object(P.jsx)(A,{fontSize:"14px",value:u,decimals:0})]}),Object(P.jsxs)(tt,{children:[Object(P.jsx)(O.B,{fontSize:"14px",children:t(999,"Market Cap")}),Object(P.jsx)(A,{fontSize:"14px",value:Object(G.a)(i),decimals:0,prefix:"$"})]}),Object(P.jsxs)(tt,{children:[Object(P.jsx)(O.B,{fontSize:"14px",children:t(538,"Total TCTM Burned")}),Object(P.jsx)(A,{fontSize:"14px",value:Object(G.a)(n),decimals:0})]}),Object(P.jsxs)(tt,{children:[Object(P.jsx)(O.B,{fontSize:"14px",children:t(540,"New TCTM/block")}),Object(P.jsx)(O.B,{bold:!0,fontSize:"14px",children:s})]})]})})},nt=Object(l.e)(O.h)(o||(o=Object(d.a)(["\n  align-items: center;\n  display: flex;\n  flex: 1;\n"]))),rt=function(){var t=Object(k.a)(),e=Object($.g)();return Object(P.jsx)(nt,{children:Object(P.jsxs)(O.i,{children:[Object(P.jsx)(O.n,{size:"lg",mb:"24px",children:t(999,"Total Value Locked (TVL)")}),Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(A,{value:e.toNumber(),prefix:"$",decimals:2}),Object(P.jsx)(O.B,{color:"textSubtle",children:t(999,"Across all Farms and Pools")})]})]})})},at=n(901),ct=Object(l.e)(O.h)(f||(f=Object(d.a)(["\n  margin-left: auto;\n  margin-right: auto;\n"]))),ut=(l.e.div(b||(b=Object(d.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]))),function(){var t=Object(k.a)();return Object(P.jsx)(ct,{children:Object(P.jsxs)(O.i,{children:[Object(P.jsx)(O.n,{size:"xl",mb:"24px",children:t(10003,"Announcements")}),Object(P.jsx)(at.a,{dataSource:{sourceType:"profile",screenName:"2TalkCrypto"},options:{height:"300",chrome:"noheader, nofooter",width:"400"}})]})})}),it=Object(l.e)(O.b)(j||(j=Object(d.a)(["\n  align-items: start;\n  justify-content: start;\n  margin-bottom: 48px;\n\n  & > div {\n    grid-column: span 6;\n    width: 100%;\n  }\n\n  "," {\n    & > div {\n      grid-column: span 8;\n    }\n  }\n\n  "," {\n    & > div {\n      grid-column: span 6;\n    }\n  }\n"])),(function(t){return t.theme.mediaQueries.sm}),(function(t){return t.theme.mediaQueries.lg})),st=function(){return Object(P.jsx)(h.a,{children:Object(P.jsx)("div",{children:Object(P.jsxs)(it,{children:[Object(P.jsx)(Z,{}),Object(P.jsx)(ut,{}),Object(P.jsx)(et,{}),Object(P.jsx)(rt,{})]})})})}}}]);
//# sourceMappingURL=7.fa10b4d9.chunk.js.map