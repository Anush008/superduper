"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[5735],{3551:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var c=s(4848),d=s(8453);const a={},t="Schema",i={id:"docs/apply_api/schema",title:"Schema",description:"- Apply a dictionary of FieldType and DataType to encode columnar data",source:"@site/content/docs/apply_api/schema.md",sourceDirName:"docs/apply_api",slug:"/docs/apply_api/schema",permalink:"/docs/docs/apply_api/schema",draft:!1,unlisted:!1,editUrl:"https://github.com/SuperDuperDB/superduperdb/blob/main/docs/hr/content/docs/apply_api/schema.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"DataType",permalink:"/docs/docs/apply_api/datatype"},next:{title:"Table",permalink:"/docs/docs/apply_api/table"}},o={},l=[];function r(e){const n={a:"a",code:"code",em:"em",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:"schema",children:(0,c.jsx)(n.code,{children:"Schema"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["Apply a dictionary of ",(0,c.jsx)(n.code,{children:"FieldType"})," and ",(0,c.jsx)(n.code,{children:"DataType"})," to encode columnar data"]}),"\n",(0,c.jsx)(n.li,{children:"Mostly relevant to SQL databases, but can also be used with MongoDB"}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"Schema"})," leverages encoding functionality of contained ",(0,c.jsx)(n.code,{children:"DataType"})," instances"]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.em,{children:(0,c.jsx)(n.strong,{children:"Dependencies"})})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:"DataType"})}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.em,{children:(0,c.jsx)(n.strong,{children:"Usage pattern"})})}),"\n",(0,c.jsxs)(n.p,{children:["(Learn how to build a ",(0,c.jsx)(n.code,{children:"DataType"})," ",(0,c.jsx)(n.a,{href:"datatype",children:"here"}),")"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.em,{children:"Vanilla usage"})}),"\n",(0,c.jsx)(n.p,{children:"Table can potentially include\nmore columns which don't need encoding:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:"from superduperdb import Schema\n\nschema = Schema(\n    'my-schema',\n    fields={\n        'img': dt_1,   # A `DataType`\n        'video': dt_2,   # Another `DataType`\n    }\n)\n\ndb.apply(schema)\n"})}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.em,{children:"Usage with SQL"})}),"\n",(0,c.jsxs)(n.p,{children:["All columns should be flagged with either ",(0,c.jsx)(n.code,{children:"DataType"})," or ",(0,c.jsx)(n.code,{children:"FieldType"}),":"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:"from superduperdb.backends.ibis import FieldType\n\nschema = Schema(\n    'my-schema',\n    fields={\n        'img': dt_1,   # A `DataType`\n        'video': dt_2,   # Another `DataType`\n        'txt', FieldType('str'),\n        'numer', FieldType('int'),\n    }\n)\n\ndb.apply(schema)\n"})}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.em,{children:"Usage with MongoDB"})}),"\n",(0,c.jsx)(n.p,{children:"!!!TODO!!!"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsxs)(n.em,{children:["Usage with ",(0,c.jsx)(n.code,{children:"Model"})," descendants (MongoDB only)"]})}),"\n",(0,c.jsxs)(n.p,{children:["If used together with ",(0,c.jsx)(n.code,{children:"Model"}),", the model is assumed to emit ",(0,c.jsx)(n.code,{children:"tuple"})," outputs, and these\nneed differential encoding. The ",(0,c.jsx)(n.code,{children:"Schema"})," is applied to the columns of output,\nto get something which can be saved in the ",(0,c.jsx)(n.code,{children:"db.databackend"}),"."]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:"from superduperdb import ObjectModel\n\nm = Model(\n    'my-model',\n    object=my_object,\n    output_schema=schema\n)\n\ndb.apply(m)    # adds model and schema\n"})}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.em,{children:(0,c.jsx)(n.strong,{children:"See also"})})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:"../cluster_mode/change_data_capture",children:"Change-data capture"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(r,{...e})}):r(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>i});var c=s(6540);const d={},a=c.createContext(d);function t(e){const n=c.useContext(a);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),c.createElement(a.Provider,{value:n},e.children)}}}]);