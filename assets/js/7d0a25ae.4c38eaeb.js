"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[3490],{9299:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var t=r(4848),o=r(8453);const s={},c="Core superduper usage",i={id:"core_api/intro",title:"Core superduper usage",description:"In this section we walk through how to perform the key operations with superduper.",source:"@site/content/core_api/intro.md",sourceDirName:"core_api",slug:"/core_api/intro",permalink:"/docs/core_api/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper-io/superduper/edit/main/docs/content/core_api/intro.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Eager Mode (Aplpa)",permalink:"/docs/tutorials/eager_mode"},next:{title:"Connect",permalink:"/docs/core_api/connect"}},p={},d=[];function a(e){const n={code:"code",em:"em",h1:"h1",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"core-superduper-usage",children:"Core superduper usage"}),"\n",(0,t.jsx)(n.p,{children:"In this section we walk through how to perform the key operations with superduper.\nThere are three key patterns C-A-E:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"Connect"})})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"from superduper import superduper\ndb = superduper('<data-connection>')\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"Apply"})})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"db.apply(<ai_component>)\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"Execute"})})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"to_execute = <build_your_database_query_or_model_prediction>\ndb.execute(to_execute)\n"})})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>i});var t=r(6540);const o={},s=t.createContext(o);function c(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);