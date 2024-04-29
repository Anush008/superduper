"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[450],{3888:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>p,frontMatter:()=>c,metadata:()=>s,toc:()=>d});var r=t(4848),o=t(8453);const c={sidebar_position:4},a="Setting up SuperDuperDB as a change-data-capture daemon",s={id:"docs/production/change_data_capture",title:"Setting up SuperDuperDB as a change-data-capture daemon",description:"This functionality is currently for MongoDB only",source:"@site/content/docs/production/change_data_capture.md",sourceDirName:"docs/production",slug:"/docs/production/change_data_capture",permalink:"/docs/docs/production/change_data_capture",draft:!1,unlisted:!1,editUrl:"https://github.com/SuperDuperDB/superduperdb/blob/main/docs/hr/content/docs/production/change_data_capture.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Command line interface",permalink:"/docs/docs/production/command_line_interface"},next:{title:"YAML/ JSON formalism",permalink:"/docs/docs/production/yaml_formalism"}},i={},d=[];function u(e){const n={admonition:"admonition",code:"code",h1:"h1",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"setting-up-superduperdb-as-a-change-data-capture-daemon",children:"Setting up SuperDuperDB as a change-data-capture daemon"}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"This functionality is currently for MongoDB only"})}),"\n",(0,r.jsx)(n.p,{children:"Setting-up SuperDuperDB as a change-data-capture daemon, is a simple call:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"db.cdc.listen()\n"})}),"\n",(0,r.jsx)(n.p,{children:"... or"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"superduperdb cdc\n"})}),"\n",(0,r.jsxs)(n.p,{children:["When ",(0,r.jsx)(n.code,{children:"superduperdb"})," is configured in this way, this daemon handles all inserts to\nSuperDuperDB, therefore, if ",(0,r.jsx)(n.code,{children:"superduperdb"})," is run in another process or service,\nit's important to configure the existence of the daemon:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"from superduperdb import CFG\n\nCFG.cluster.cdc = True\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Now that the daemon is running, even when data is inserted using a different client, such as\nthe native ",(0,r.jsx)(n.code,{children:"pymongo.MongoClient"})," client, then ",(0,r.jsx)(n.code,{children:"Listener"})," outputs are still created on those inputs."]})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>s});var r=t(6540);const o={},c=r.createContext(o);function a(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);