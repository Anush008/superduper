"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[3981],{7925:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var o=t(4848),s=t(8453);const r={sidebar_position:2},c="MongoDB",i={id:"docs/data_integrations/mongodb",title:"MongoDB",description:"In general the MongoDB query API works exactly as pymongo, with the exception that:",source:"@site/content/docs/data_integrations/mongodb.md",sourceDirName:"docs/data_integrations",slug:"/docs/data_integrations/mongodb",permalink:"/docs/docs/data_integrations/mongodb",draft:!1,unlisted:!1,editUrl:"https://github.com/SuperDuperDB/superduperdb/blob/main/docs/hr/content/docs/data_integrations/mongodb.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Data integrations",permalink:"/docs/docs/data_integrations/intro"},next:{title:"SQL",permalink:"/docs/docs/data_integrations/sql"}},a={},d=[{value:"Inserts",id:"inserts",level:2},{value:"Updates",id:"updates",level:2},{value:"Selects",id:"selects",level:2},{value:"Vector-search",id:"vector-search",level:3},{value:"Deletes",id:"deletes",level:2},{value:"Aggregate",id:"aggregate",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"mongodb",children:"MongoDB"}),"\n",(0,o.jsxs)(n.p,{children:["In general the MongoDB query API works exactly as ",(0,o.jsx)(n.code,{children:"pymongo"}),", with the exception that:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["inputs are wrapped in ",(0,o.jsx)(n.code,{children:"Document"})]}),"\n",(0,o.jsx)(n.li,{children:"additional support for vector-search is provided"}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"inserts",children:"Inserts"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"from superduperdb.backends.mongodb import Collection\n\ncollection = Collection('my-collection-name')\n\ndb.execute(\n    collection.insert_many([\n        Document({'my-field': ..., ...})\n        for _ in range(20)\n    ])\n)\n"})}),"\n",(0,o.jsx)(n.h2,{id:"updates",children:"Updates"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"db.execute(\n    collection.update_many(\n        {'<my>': '<filter>'},\n        Document({'$set': ...})\n    )\n)\n"})}),"\n",(0,o.jsx)(n.h2,{id:"selects",children:"Selects"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"db.execute(\n    collection.find({}, {'_id': 1}).limit(10)\n)\n"})}),"\n",(0,o.jsx)(n.h3,{id:"vector-search",children:"Vector-search"}),"\n",(0,o.jsxs)(n.p,{children:["Vector-searches are a subset of standard select statements.\nThey may be integrated with ",(0,o.jsx)(n.code,{children:".find"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"from superduperdb import Document\ndb.execute(\n    collection.like(Document({'img': <my_image>}), vector_index='my-index-name').find({}, {'img': 1})\n)\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Read more about vector-search ",(0,o.jsx)(n.a,{href:"/docs/docs/fundamentals/vector_search_algorithm",children:"here"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"deletes",children:"Deletes"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"db.execute(collection.delete_many({}))\n"})}),"\n",(0,o.jsx)(n.h2,{id:"aggregate",children:"Aggregate"}),"\n",(0,o.jsxs)(n.p,{children:["Aggregates are exactly as in ",(0,o.jsx)(n.code,{children:"pymongo"}),", with the exception that a ",(0,o.jsx)(n.code,{children:"$vectorSearch"})," stage may be\nfed with an additional field ",(0,o.jsx)(n.code,{children:"'like': Document({...})"}),", which plays the same role as in selects."]}),"\n",(0,o.jsxs)(n.p,{children:["Read more about this in ",(0,o.jsx)(n.a,{href:"../walkthrough/vector_search",children:"the vector-search section"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>i});var o=t(6540);const s={},r=o.createContext(s);function c(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);