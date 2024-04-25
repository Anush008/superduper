"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[7612],{2171:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>t,toc:()=>c});var i=r(4848),s=r(8453);const o={},l="Model",t={id:"docs/apply_api/model",title:"Model",description:"- Wrap a standard AI model with functionality necessary for SuperDuperDB",source:"@site/content/docs/apply_api/model.md",sourceDirName:"docs/apply_api",slug:"/docs/apply_api/model",permalink:"/docs/docs/apply_api/model",draft:!1,unlisted:!1,editUrl:"https://github.com/SuperDuperDB/superduperdb/blob/main/docs/hr/content/docs/apply_api/model.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Apply API",permalink:"/docs/docs/apply_api/component"},next:{title:"Listener",permalink:"/docs/docs/apply_api/listener"}},d={},c=[];function a(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"model",children:(0,i.jsx)(n.code,{children:"Model"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Wrap a standard AI model with functionality necessary for SuperDuperDB"}),"\n",(0,i.jsx)(n.li,{children:"Configure validation and training of a model on database data"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Dependencies"})})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"Datatype"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"(Optional dependencies)"})})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"Validation"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"Trainer"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Usage pattern"})})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["Note that ",(0,i.jsx)(n.code,{children:"Model"})," is an abstract base class which cannot be called directly.\nTo use ",(0,i.jsx)(n.code,{children:"Model"})," you should call any of its downstream implementations,\nsuch as ",(0,i.jsx)(n.code,{children:"ObjectModel"})," or models in the AI-integrations."]})}),"\n",(0,i.jsx)(n.p,{children:"Here are a few SuperDuperDB native implementations:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"ObjectModel"})})}),"\n",(0,i.jsxs)(n.p,{children:["Use a self-built model (",(0,i.jsx)(n.code,{children:"object"}),") or function with the system:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"from superduperdb import ObjectModel\n\nm = ObjectModel(\n    'my-model',\n    object=lambda x: x + 2,\n)\n\ndb.apply(m)\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"QueryModel"})})}),"\n",(0,i.jsxs)(n.p,{children:["Use a SuperDuperDB query to extract data from ",(0,i.jsx)(n.code,{children:"db"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"from superduperdb.components.model import QueryModel\n\nquery = ... # build a select query\nm = QueryModel('my-query', select=query, key='<key-to-extract>')\n\ndb.apply(m)\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"APIModel"})})}),"\n",(0,i.jsx)(n.p,{children:"Request model outputs hosted behind an API:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"from superduperdb.components.model import APIModel\n\nm = APIModel('my-api', url='http://localhost:6666?token={MY_DEV_TOKEN}&model={model}&text={text}')\n\ndb.apply(m)\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"SequentialModel"})})}),"\n",(0,i.jsx)(n.p,{children:"Make predictions on the basis of a sequence of models:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"from superduperdb.components.model import SequentialModel\n\nm = SequentialModel(\n    'my-sequence',\n    models=[\n        model1,\n        model2,\n        model3,\n    ]\n)\n\ndb.apply(m)\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"See also"})})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"../ai_integrations/sklearn",children:"Scikit-learn extension"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"../ai_integrations/pytorch",children:"Pytorch extension"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"../ai_integrations/transformers",children:"Transformers extension"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"../ai_integrations/llama_cpp",children:"Llama.cpp extension"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"../ai_integrations/vllm",children:"Vllm extension"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"../ai_integrations/openai",children:"OpenAI extension"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"../ai_integrations/anthropic",children:"Anthropic extension"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"../ai_integrations/cohere",children:"Cohere extension"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"../ai_integrations/jina",children:"Jina extension"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>t});var i=r(6540);const s={},o=i.createContext(s);function l(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);