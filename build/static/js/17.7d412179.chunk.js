(this["webpackJsonptctm-farm"]=this["webpackJsonptctm-farm"]||[]).push([[17],{904:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return qe}));var c,r,a,s,o,i,b,j,l,d,u,x,O,p,m,h,f,k=n(13),g=n(0),y=n(29),v=n(45),T=n(12),S=n.n(T),C=n(89),B=n(59),w=n(882),A=n(883),P=n(239),q=n(237),I=n(180),F=n(179),D=n(22),z=n(863),L=n(21),M=n(78),N=n(9),E=n(888),Q=n(875),R=n(16),W=N.e.div(c||(c=Object(M.a)(["\n  margin-top: 24px;\n"]))),V=Object(N.e)(B.r)(r||(r=Object(M.a)(["\n  text-decoration: none;\n  font-weight: normal;\n  color: ",";\n  display: flex;\n  align-items: center;\n\n  svg {\n    padding-left: 4px;\n    height: 18px;\n    width: auto;\n    fill: ",";\n  }\n"])),(function(e){return e.theme.colors.text}),(function(e){return e.theme.colors.primary})),G=function(e){var t=e.bscScanAddress,n=e.removed,c=e.totalValueFormated,r=e.lpLabel,a=e.quoteTokenAdresses,s=e.quoteTokenSymbol,o=e.tokenAddresses,i=Object(z.a)(),b=Object(Q.a)({quoteTokenAdresses:a,quoteTokenSymbol:s,tokenAddresses:o});return Object(R.jsxs)(W,{children:[Object(R.jsxs)(B.m,{justifyContent:"space-between",children:[Object(R.jsxs)(B.B,{children:[i(316,"Stake"),":"]}),Object(R.jsx)(V,{href:"https://exchange.pancakeswap.finance/#/add/".concat(b),children:r})]}),!n&&Object(R.jsxs)(B.m,{justifyContent:"space-between",children:[Object(R.jsxs)(B.B,{children:[i(23,"Total Liquidity"),":"]}),Object(R.jsx)(B.B,{children:c})]}),Object(R.jsx)(B.m,{justifyContent:"flex-start",children:Object(R.jsx)(B.q,{external:!0,href:t,bold:!1,children:i(356,"View on BscScan")})})]})},J=n(884),U=Object(N.e)(B.m)(a||(a=Object(M.a)(["\n  svg {\n    margin-right: 0.25rem;\n  }\n"]))),X=Object(N.e)(B.A)(s||(s=Object(M.a)(["\n  margin-left: 4px;\n"]))),$=function(e){var t=e.lpLabel,n=e.multiplier,c=e.farmImage,r=e.tokenSymbol,a=e.depositFee;return Object(R.jsxs)(U,{justifyContent:"space-between",alignItems:"center",mb:"12px",children:[Object(R.jsx)(B.p,{src:"/images/farms/".concat(c,".png"),alt:r,width:64,height:64}),Object(R.jsxs)(B.m,{flexDirection:"column",alignItems:"flex-end",children:[Object(R.jsx)(B.n,{mb:"4px",children:t}),Object(R.jsxs)(B.m,{justifyContent:"center",children:[0===a?Object(R.jsx)(J.a,{}):null,Object(R.jsx)(X,{variant:"secondary",children:n})]})]})]})},H=n(15),K=n(5),Y=n.n(K),Z=n(874),_=n(873),ee=n(885),te=n(876),ne=n(886),ce=n(864),re=n(877),ae=n(878),se=function(e){var t=e.max,n=e.onConfirm,c=e.onDismiss,r=e.tokenName,a=void 0===r?"":r,s=e.depositFeeBP,o=void 0===s?0:s,i=Object(g.useState)(""),b=Object(L.a)(i,2),j=b[0],l=b[1],d=Object(g.useState)(!1),u=Object(L.a)(d,2),x=u[0],O=u[1],p=Object(z.a)(),m=Object(g.useMemo)((function(){return Object(ce.b)(t)}),[t]),h=Object(g.useCallback)((function(e){l(e.currentTarget.value)}),[l]),f=Object(g.useCallback)((function(){l(m)}),[m,l]);return Object(R.jsxs)(B.v,{title:"".concat(p(316,"Deposit")," ").concat(a," Tokens"),onDismiss:c,children:[Object(R.jsx)(ae.a,{value:j,onSelectMax:f,onChange:h,max:m,symbol:a,depositFeeBP:o}),Object(R.jsxs)(re.a,{children:[Object(R.jsx)(B.d,{variant:"secondary",onClick:c,children:p(462,"Cancel")}),Object(R.jsx)(B.d,{disabled:x,onClick:Object(H.a)(Y.a.mark((function e(){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O(!0),e.next=3,n(j);case 3:O(!1),c();case 5:case"end":return e.stop()}}),e)}))),children:x?p(488,"Pending Confirmation"):p(464,"Confirm")})]})]})},oe=function(e){var t=e.onConfirm,n=e.onDismiss,c=e.max,r=e.tokenName,a=void 0===r?"":r,s=Object(g.useState)(""),o=Object(L.a)(s,2),i=o[0],b=o[1],j=Object(g.useState)(!1),l=Object(L.a)(j,2),d=l[0],u=l[1],x=Object(z.a)(),O=Object(g.useMemo)((function(){return Object(ce.b)(c)}),[c]),p=Object(g.useCallback)((function(e){b(e.currentTarget.value)}),[b]),m=Object(g.useCallback)((function(){b(O)}),[O,b]);return Object(R.jsxs)(B.v,{title:"Withdraw ".concat(a),onDismiss:n,children:[Object(R.jsx)(ae.a,{onSelectMax:m,onChange:p,value:i,max:O,symbol:a}),Object(R.jsxs)(re.a,{children:[Object(R.jsx)(B.d,{variant:"secondary",onClick:n,children:x(462,"Cancel")}),Object(R.jsx)(B.d,{disabled:d,onClick:Object(H.a)(Y.a.mark((function e(){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.next=3,t(i);case 3:u(!1),n();case 5:case"end":return e.stop()}}),e)}))),children:d?x(488,"Pending Confirmation"):x(464,"Confirm")})]})]})},ie=N.e.div(o||(o=Object(M.a)(["\n  display: flex;\n  svg {\n    width: 20px;\n  }\n"]))),be=function(e){var t=e.stakedBalance,n=e.tokenBalance,c=e.tokenName,r=e.pid,a=e.depositFeeBP,s=Object(z.a)(),o=Object(te.a)(r).onStake,i=Object(ne.a)(r).onUnstake,b=Object(ce.a)(t),j=b.toLocaleString(),l=Object(B.F)(Object(R.jsx)(se,{max:n,onConfirm:o,tokenName:c,depositFeeBP:a})),d=Object(L.a)(l,1)[0],u=Object(B.F)(Object(R.jsx)(oe,{max:t,onConfirm:i,tokenName:c})),x=Object(L.a)(u,1)[0];return Object(R.jsxs)(B.m,{justifyContent:"space-between",alignItems:"center",children:[Object(R.jsx)(B.n,{color:0===b?"textDisabled":"text",children:j}),0===b?Object(R.jsx)(B.d,{onClick:d,children:s(999,"Stake")}):Object(R.jsxs)(ie,{children:[Object(R.jsx)(B.o,{variant:"tertiary",onClick:x,mr:"6px",children:Object(R.jsx)(B.u,{color:"primary"})}),Object(R.jsx)(B.o,{variant:"tertiary",onClick:d,children:Object(R.jsx)(B.a,{color:"primary"})})]})]})},je=n(872),le=N.e.div(i||(i=Object(M.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: column;\n"]))),de=function(e){var t=e.earnings,n=e.pid,c=Object(z.a)(),r=Object(g.useState)(!1),a=Object(L.a)(r,2),s=a[0],o=a[1],i=Object(je.b)(n).onReward,b=Object(te.a)(n).onStake,j=Object(ce.a)(t),l=j.toLocaleString();return Object(R.jsxs)(B.m,{mb:"8px",justifyContent:"space-between",alignItems:"center",children:[Object(R.jsx)(B.n,{color:0===j?"textDisabled":"text",children:l}),Object(R.jsxs)(le,{children:[9===n?Object(R.jsx)(B.d,{disabled:0===j||s,size:"sm",variant:"secondary",marginBottom:"15px",onClick:Object(H.a)(Y.a.mark((function e(){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),e.next=3,b(j.toString());case 3:o(!1);case 4:case"end":return e.stop()}}),e)}))),children:c(999,"Compound")}):null,Object(R.jsx)(B.d,{disabled:0===j||s,onClick:Object(H.a)(Y.a.mark((function e(){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),e.next=3,i();case 3:o(!1);case 4:case"end":return e.stop()}}),e)}))),children:c(999,"Harvest")})]})]})},ue=N.e.div(b||(b=Object(M.a)(["\n  padding-top: 16px;\n"]))),xe=function(e){var t=e.farm,n=e.ethereum,c=e.account,r=Object(z.a)(),a=Object(g.useState)(!1),s=Object(L.a)(a,2),o=s[0],i=s[1],b=Object(q.a)(t.pid),j=b.pid,l=b.lpAddresses,d=b.tokenAddresses,u=b.isTokenOnly,x=b.depositFeeBP,O=Object(q.b)(j),p=O.allowance,m=O.tokenBalance,h=O.stakedBalance,f=O.earnings,k=l[56],y=d[56],v=t.lpSymbol.toUpperCase(),T=c&&p&&p.isGreaterThan(0),S=Object(g.useMemo)((function(){return u?Object(Z.a)(n,y):Object(Z.a)(n,k)}),[n,k,y,u]),C=Object(ee.a)(S).onApprove,w=Object(g.useCallback)(Object(H.a)(Y.a.mark((function e(){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i(!0),e.next=4,C();case 4:i(!1),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[C]);return Object(R.jsxs)(ue,{children:[Object(R.jsxs)(B.m,{children:[Object(R.jsx)(B.B,{bold:!0,textTransform:"uppercase",color:"secondary",fontSize:"12px",pr:"3px",children:"TCTM"}),Object(R.jsx)(B.B,{bold:!0,textTransform:"uppercase",color:"textSubtle",fontSize:"12px",children:r(999,"Earned")})]}),Object(R.jsx)(de,{earnings:f,pid:j}),Object(R.jsxs)(B.m,{children:[Object(R.jsx)(B.B,{bold:!0,textTransform:"uppercase",color:"secondary",fontSize:"12px",pr:"3px",children:v}),Object(R.jsx)(B.B,{bold:!0,textTransform:"uppercase",color:"textSubtle",fontSize:"12px",children:r(999,"Staked")})]}),c?T?Object(R.jsx)(be,{stakedBalance:h,tokenBalance:m,tokenName:v,pid:j,depositFeeBP:x}):Object(R.jsx)(B.d,{mt:"8px",fullWidth:!0,disabled:o,onClick:w,children:r(999,"Approve Contract")}):Object(R.jsx)(_.a,{mt:"8px",fullWidth:!0})]})},Oe=n(887),pe=N.e.div(j||(j=Object(M.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(4, auto);\n  margin-bottom: 24px;\n"]))),me=N.e.div(l||(l=Object(M.a)(["\n  margin-bottom: '10px';\n"]))),he=Object(N.e)(B.B)(d||(d=Object(M.a)(["\n  max-width: 320px;\n  margin-bottom: 28px;\n"]))),fe=function(e){var t=e.onDismiss,n=e.lpLabel,c=e.quoteTokenAdresses,r=e.quoteTokenSymbol,a=e.tokenAddresses,s=e.cakePrice,o=e.apy,i=Object(z.a)(),b=Object(Q.a)({quoteTokenAdresses:c,quoteTokenSymbol:r,tokenAddresses:a}),j=o.times(new S.a(100)).toNumber(),l=1e3/s.toNumber(),d=Object(Oe.b)({numberOfDays:1,farmApy:j,cakePrice:s}),u=Object(Oe.b)({numberOfDays:7,farmApy:j,cakePrice:s}),x=Object(Oe.b)({numberOfDays:30,farmApy:j,cakePrice:s}),O=Object(Oe.b)({numberOfDays:365,farmApy:j,cakePrice:s});return Object(R.jsxs)(B.v,{title:"ROI",onDismiss:t,children:[Object(R.jsxs)(pe,{children:[Object(R.jsx)(me,{children:Object(R.jsx)(B.B,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:i(999,"Timeframe")})}),Object(R.jsx)(me,{children:Object(R.jsx)(B.B,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:i(999,"ROI")})}),Object(R.jsx)(me,{children:Object(R.jsx)(B.B,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:i(999,"TCTM per $1000")})}),Object(R.jsx)(me,{children:Object(R.jsx)(B.B,{children:"1d"})}),Object(R.jsx)(me,{children:Object(R.jsxs)(B.B,{children:[Object(Oe.a)({amountEarned:d,amountInvested:l}),"%"]})}),Object(R.jsx)(me,{children:Object(R.jsx)(B.B,{children:d})}),Object(R.jsx)(me,{children:Object(R.jsx)(B.B,{children:"7d"})}),Object(R.jsx)(me,{children:Object(R.jsxs)(B.B,{children:[Object(Oe.a)({amountEarned:u,amountInvested:l}),"%"]})}),Object(R.jsx)(me,{children:Object(R.jsx)(B.B,{children:u})}),Object(R.jsx)(me,{children:Object(R.jsx)(B.B,{children:"30d"})}),Object(R.jsx)(me,{children:Object(R.jsxs)(B.B,{children:[Object(Oe.a)({amountEarned:x,amountInvested:l}),"%"]})}),Object(R.jsx)(me,{children:Object(R.jsx)(B.B,{children:x})}),Object(R.jsx)(me,{children:Object(R.jsx)(B.B,{children:"365d(APY)"})}),Object(R.jsx)(me,{children:Object(R.jsxs)(B.B,{children:[Object(Oe.a)({amountEarned:O,amountInvested:l}),"%"]})}),Object(R.jsx)(me,{children:Object(R.jsx)(B.B,{children:O})})]}),Object(R.jsx)(he,{fontSize:"12px",color:"textSubtle",children:i(999,"Calculated based on current rates. Compounding once daily. Rates are estimates provided for your convenience only, and by no means represent guaranteed returns.")}),Object(R.jsx)(B.m,{justifyContent:"center",children:Object(R.jsxs)(B.r,{href:"https://exchange.pancakeswap.finance/#/add/".concat(b),children:[i(999,"Get")," ",n]})})]})},ke=function(e){var t=e.lpLabel,n=e.quoteTokenAdresses,c=e.quoteTokenSymbol,r=e.tokenAddresses,a=e.cakePrice,s=e.apy,o=Object(B.F)(Object(R.jsx)(fe,{lpLabel:t,quoteTokenAdresses:n,quoteTokenSymbol:c,tokenAddresses:r,cakePrice:a,apy:s})),i=Object(L.a)(o,1)[0];return Object(R.jsx)(B.o,{onClick:i,variant:"text",size:"sm",ml:"4px",children:Object(R.jsx)(B.g,{})})},ge=Object(N.f)(u||(u=Object(M.a)(["\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n"]))),ye=N.e.div(x||(x=Object(M.a)(["\n  background: linear-gradient(\n    45deg,\n    rgba(255, 0, 0, 1) 0%,\n    rgba(255, 154, 0, 1) 10%,\n    rgba(208, 222, 33, 1) 20%,\n    rgba(79, 220, 74, 1) 30%,\n    rgba(63, 218, 216, 1) 40%,\n    rgba(47, 201, 226, 1) 50%,\n    rgba(28, 127, 238, 1) 60%,\n    rgba(95, 21, 242, 1) 70%,\n    rgba(186, 12, 248, 1) 80%,\n    rgba(251, 7, 217, 1) 90%,\n    rgba(255, 0, 0, 1) 100%\n  );\n  background-size: 300% 300%;\n  animation: "," 2s linear infinite;\n  border-radius: 16px;\n  filter: blur(6px);\n  position: absolute;\n  top: -2px;\n  right: -2px;\n  bottom: -2px;\n  left: -2px;\n  z-index: -1;\n"])),ge),ve=N.e.div(O||(O=Object(M.a)(["\n  align-self: baseline;\n  background: ",";\n  border-radius: 32px;\n  box-shadow: 0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  padding: 24px;\n  position: relative;\n  text-align: center;\n"])),(function(e){return e.theme.card.background})),Te=N.e.div(p||(p=Object(M.a)(["\n  background-color: ",";\n  height: 1px;\n  margin: 28px auto;\n  width: 100%;\n"])),(function(e){return e.theme.colors.borderColor})),Se=N.e.div(m||(m=Object(M.a)(["\n  height: ",";\n  overflow: hidden;\n"])),(function(e){return e.expanded?"100%":"0px"})),Ce=function(e){var t=e.farm,n=e.removed,c=e.cakePrice,r=e.bnbPrice,a=e.ethereum,s=e.account,o=Object(z.a)(),i=Object(g.useState)(!1),b=Object(L.a)(i,2),j=b[0],l=b[1],d=t.isTokenOnly?t.tokenSymbol.toLowerCase():"".concat(t.tokenSymbol.toLowerCase(),"-").concat(t.quoteTokenSymbol.toLowerCase()),u=Object(g.useMemo)((function(){return t.lpTotalInQuoteToken?t.quoteTokenSymbol===D.b.BNB?r.times(t.lpTotalInQuoteToken):t.quoteTokenSymbol===D.b.CAKE?c.times(t.lpTotalInQuoteToken):t.lpTotalInQuoteToken:null}),[r,c,t.lpTotalInQuoteToken,t.quoteTokenSymbol]),x=u?"$".concat(Number(u).toLocaleString(void 0,{maximumFractionDigits:0})):"-",O=t.lpSymbol,p=t.apy&&t.apy.times(new S.a(100)).toNumber().toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),m=t.quoteTokenAdresses,h=t.quoteTokenSymbol,f=t.tokenAddresses,k=t.risk;return Object(R.jsxs)(ve,{children:["TCTM"===t.tokenSymbol&&Object(R.jsx)(ye,{}),Object(R.jsx)($,{lpLabel:O,multiplier:t.multiplier,risk:k,depositFee:t.depositFeeBP,farmImage:d,tokenSymbol:t.tokenSymbol}),!n&&Object(R.jsxs)(B.m,{justifyContent:"space-between",alignItems:"center",children:[Object(R.jsxs)(B.B,{children:[o(352,"APR"),":"]}),Object(R.jsx)(B.B,{bold:!0,style:{display:"flex",alignItems:"center"},children:t.apy?Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(ke,{lpLabel:O,quoteTokenAdresses:m,quoteTokenSymbol:h,tokenAddresses:f,cakePrice:c,apy:t.apy}),p,"%"]}):Object(R.jsx)(B.y,{height:24,width:80})})]}),Object(R.jsxs)(B.m,{justifyContent:"space-between",children:[Object(R.jsxs)(B.B,{children:[o(318,"Earn"),":"]}),Object(R.jsx)(B.B,{bold:!0,children:"TCTM"})]}),Object(R.jsxs)(B.m,{justifyContent:"space-between",children:[Object(R.jsxs)(B.B,{style:{fontSize:"24px"},children:[o(10001,"Deposit Fee"),":"]}),Object(R.jsxs)(B.B,{bold:!0,style:{fontSize:"24px"},children:[t.depositFeeBP/100,"%"]})]}),Object(R.jsx)(xe,{farm:t,ethereum:a,account:s}),Object(R.jsx)(Te,{}),Object(R.jsx)(E.a,{onClick:function(){return l(!j)},expanded:j}),Object(R.jsx)(Se,{expanded:j,children:Object(R.jsx)(G,{removed:n,bscScanAddress:t.isTokenOnly?"https://bscscan.com/token/".concat(t.tokenAddresses[56]):"https://bscscan.com/token/".concat(t.lpAddresses[56]),totalValueFormated:x,lpLabel:O,quoteTokenAdresses:m,quoteTokenSymbol:h,tokenAddresses:f})})]})},Be=n(104),we=function(){var e=Object(y.g)(),t=e.url,n=e.isExact,c=Object(z.a)();return Object(R.jsx)(Ae,{children:Object(R.jsxs)(B.e,{activeIndex:n?0:1,size:"sm",variant:"subtle",children:[Object(R.jsx)(B.f,{as:Be.b,to:"".concat(t),children:c(999,"Active")}),Object(R.jsx)(B.f,{as:Be.b,to:"".concat(t,"/history"),children:c(999,"Inactive")})]})})},Ae=N.e.div(h||(h=Object(M.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 32px;\n"]))),Pe=N.e.div(f||(f=Object(M.a)(["\n  background-color: ",";\n  height: 1px;\n  margin: 0 auto 32px;\n  width: 100%;\n"])),(function(e){return e.theme.colors.textSubtle})),qe=function(e){var t=Object(y.g)().path,n=Object(z.a)(),c=Object(q.h)(),r=Object(q.f)(),a=Object(q.e)(),s=Object(C.m)(),o=s.account,i=s.ethereum,b=e.tokenMode,j=Object(v.b)(),l=Object(I.a)().fastRefresh;Object(g.useEffect)((function(){o&&j(Object(F.a)(o))}),[o,j,l]);var d=c.filter((function(e){return!!e.isTokenOnly===!!b&&"0X"!==e.multiplier})),u=c.filter((function(e){return!!e.isTokenOnly===!!b&&"0X"===e.multiplier})),x=Object(g.useCallback)((function(e,t){return e.map((function(e){var t=new S.a(e.TCTMPerBlock||1).times(new S.a(e.poolWeight)).div(new S.a(10).pow(18)).times(w.a),n=r.times(t),c=new S.a(e.lpTotalInQuoteToken||0);return e.quoteTokenSymbol===D.b.BNB&&(c=c.times(a)),c.comparedTo(0)>0&&(n=n.div(c)),Object(k.a)(Object(k.a)({},e),{},{apy:n})})).map((function(e){return Object(R.jsx)(Ce,{farm:e,removed:t,bnbPrice:a,cakePrice:r,ethereum:i,account:o},e.pid)}))}),[a,o,r,i]),O=b?{}:{background:"url()",backgroundSize:"contain",height:140,backgroundrepeat:"no-repeat"};return Object(R.jsxs)(P.a,{children:[Object(R.jsxs)("div",{style:O,children:[Object(R.jsx)(B.n,{as:"h1",size:"lg",color:"primary",mb:"50px",style:{textAlign:"center"},children:n(10004,b?"Stake tokens to earn TCTM":"Stake LP tokens to earn TCTM")}),b&&Object(R.jsx)("img",{src:"",alt:"",width:200,style:{position:"absolute",top:50,right:20}})]}),Object(R.jsx)(we,{}),Object(R.jsxs)("div",{children:[Object(R.jsx)(Pe,{}),Object(R.jsxs)(A.a,{children:[Object(R.jsx)(y.a,{exact:!0,path:"".concat(t),children:x(d,!1)}),Object(R.jsx)(y.a,{exact:!0,path:"".concat(t,"/history"),children:x(u,!0)})]})]})]})}}}]);
//# sourceMappingURL=17.7d412179.chunk.js.map