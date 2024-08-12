"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[4517],{7895:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>d,contentTitle:()=>c,default:()=>l,frontMatter:()=>i,metadata:()=>s,toc:()=>a});var r=o(4848),t=o(8453);const i={sidebar_position:3},c="Running non-blocking Ray computations in the background",s={id:"production/non_blocking_ray_jobs",title:"Running non-blocking Ray computations in the background",description:"superduper offers the possiblity to run all long running blocking jobs in the background via ray.",source:"@site/content/production/non_blocking_ray_jobs.md",sourceDirName:"production",slug:"/production/non_blocking_ray_jobs",permalink:"/docs/production/non_blocking_ray_jobs",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper-io/superduper/edit/main/docs/content/production/non_blocking_ray_jobs.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"RESTful service",permalink:"/docs/production/rest_api"},next:{title:"Vector-searcher service",permalink:"/docs/production/vector_comparison_service"}},d={},a=[];function u(n){const e={a:"a",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"running-non-blocking-ray-computations-in-the-background",children:"Running non-blocking Ray computations in the background"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"superduper"})," offers the possiblity to run all long running blocking jobs in the background via ",(0,r.jsx)(e.code,{children:"ray"}),".\nRead about the ",(0,r.jsx)(e.code,{children:"ray"})," project ",(0,r.jsx)(e.a,{href:"https://www.ray.io/",children:"here"}),"."]}),"\n",(0,r.jsx)(e.p,{children:"To configure this feature, configure:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-yaml",children:"cluster:\n  compute:\n    uri: ray://<ray_host>:<ray_port>\n"})}),"\n",(0,r.jsxs)(e.p,{children:["When this is so-configured the following functions push their computations to the ",(0,r.jsx)(e.code,{children:"ray"})," cluster:"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.code,{children:"db.apply"})}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"db.execute"})," (if data is inserted, deleted, updated)"]}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:["When ",(0,r.jsx)(e.code,{children:"ray"})," is configured, these functions returns either a ",(0,r.jsx)(e.code,{children:"superduper.job.Job"})," object, or an iterable thereof."]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"jobs = db.apply(<component>)[0]\n"})})]})}function l(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(u,{...n})}):u(n)}},8453:(n,e,o)=>{o.d(e,{R:()=>c,x:()=>s});var r=o(6540);const t={},i=r.createContext(t);function c(n){const e=r.useContext(i);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:c(n.components),r.createElement(i.Provider,{value:e},n.children)}}}]);