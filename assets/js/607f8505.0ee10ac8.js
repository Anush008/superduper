"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[8434],{6651:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>d,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var i=t(4848),a=t(8453);const o={},d="Validation",r={id:"docs/apply_api/validation",title:"Validation",description:"- Validate a Model by attaching a Validation component",source:"@site/content/docs/apply_api/validation.md",sourceDirName:"docs/apply_api",slug:"/docs/apply_api/validation",permalink:"/docs/docs/apply_api/validation",draft:!1,unlisted:!1,editUrl:"https://github.com/SuperDuperDB/superduperdb/blob/main/docs/hr/content/docs/apply_api/validation.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Metric",permalink:"/docs/docs/apply_api/metric"},next:{title:"Trainer",permalink:"/docs/docs/apply_api/trainer"}},s={},c=[];function l(n){const e={code:"code",em:"em",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"validation",children:(0,i.jsx)(e.code,{children:"Validation"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["Validate a ",(0,i.jsx)(e.code,{children:"Model"})," by attaching a ",(0,i.jsx)(e.code,{children:"Validation"})," component"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.em,{children:(0,i.jsx)(e.strong,{children:"Dependencies"})})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"Metric"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"Dataset"})}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.em,{children:(0,i.jsx)(e.strong,{children:"Usage pattern"})})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"from superduperdb import Validation\n\nvalidation = Validation(\n    datasets=[dataset_1, ...],\n    metrics=[metric_1, ...],\n    key=('X', 'y')    # key to use for the comparison\n)\n\nmodel = Model(\n    ...     # standard arguments\n    validation=validation,\n)\n\n# Applying model recognizes `.validation` attribute\n# and validates model on the `.datasets` with `.metrics`\ndb.apply(model)\n"})})]})}function p(n={}){const{wrapper:e}={...(0,a.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(l,{...n})}):l(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>d,x:()=>r});var i=t(6540);const a={},o=i.createContext(a);function d(n){const e=i.useContext(o);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:d(n.components),i.createElement(o.Provider,{value:e},n.children)}}}]);