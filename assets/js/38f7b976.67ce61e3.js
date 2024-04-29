"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[9935],{5459:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var t=r(4848),a=r(8453);const i={},o="Trainer",s={id:"docs/apply_api/trainer",title:"Trainer",description:"- Train a Model by attaching a Trainer component",source:"@site/content/docs/apply_api/trainer.md",sourceDirName:"docs/apply_api",slug:"/docs/apply_api/trainer",permalink:"/docs/docs/apply_api/trainer",draft:!1,unlisted:!1,editUrl:"https://github.com/SuperDuperDB/superduperdb/blob/main/docs/hr/content/docs/apply_api/trainer.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Validation",permalink:"/docs/docs/apply_api/validation"},next:{title:"Execute API",permalink:"/docs/docs/execute_api/overview"}},c={},d=[];function l(e){const n={a:"a",code:"code",em:"em",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"trainer",children:(0,t.jsx)(n.code,{children:"Trainer"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Train a ",(0,t.jsx)(n.code,{children:"Model"})," by attaching a ",(0,t.jsx)(n.code,{children:"Trainer"})," component"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"Usage pattern"})})}),"\n",(0,t.jsxs)(n.p,{children:["(Learn how to build a ",(0,t.jsx)(n.code,{children:"Model"})," ",(0,t.jsx)(n.a,{href:"model",children:"here"}),")"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"from superduperdb.ext.<extension> import <ExtensionTrainer>\n\ntrainer = <ExtensionTrainer>(\n    'my-trainer',\n    select=train_query,   # data to use for training\n    key=('X', 'y'),       # the columns/keys to use for training\n    **training_params,    # can vary greatly from framework to framework\n)\n\nmodel = Model(\n    ...     # standard arguments\n    validation=validation,   # validation will be executed after training\n    trainer=trainer,\n)\n\n# Applying model recognizes `.trainer` attribute\n# and trains model on the `.trainer.select` attribute\ndb.apply(model)\n"})})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>s});var t=r(6540);const a={},i=t.createContext(a);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);