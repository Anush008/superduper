"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[621],{1075:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>f,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=r(4848),o=r(8453),a=r(9489),s=r(7227),c=r(94);const l={sidebar_label:"Configure your production system",filename:"configure_your_production_system.md"},u="Configure your production system",i={id:"reusable_snippets/configure_your_production_system",title:"configure_your_production_system",description:"If you would like to use the production features",source:"@site/content/reusable_snippets/configure_your_production_system.md",sourceDirName:"reusable_snippets",slug:"/reusable_snippets/configure_your_production_system",permalink:"/docs/reusable_snippets/configure_your_production_system",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper-io/superduper/edit/main/docs/content/reusable_snippets/configure_your_production_system.md",tags:[],version:"current",frontMatter:{sidebar_label:"Configure your production system",filename:"configure_your_production_system.md"}},d={},p=[];function h(e){const t={admonition:"admonition",code:"code",h1:"h1",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"configure-your-production-system",children:"Configure your production system"}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:'If you would like to use the production features\nof superduper, then you should set the relevant\nconnections and configurations in a configuration\nfile. Otherwise you are welcome to use "development" mode\nto get going with superduper quickly.'})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"import os\n\nos.makedirs('.superduper', exist_ok=True)\nos.environ['SUPERDUPER_CONFIG'] = '.superduper/config.yaml'\n"})}),"\n",(0,n.jsxs)(a.A,{children:[(0,n.jsx)(s.A,{value:"MongoDB Community",label:"MongoDB Community",default:!0,children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"CFG = '''\ndata_backend: mongodb://127.0.0.1:27017/documents\nartifact_store: filesystem://./artifact_store\ncluster:\n  cdc:\n    strategy: null\n    uri: ray://127.0.0.1:20000\n  compute:\n    uri: ray://127.0.0.1:10001\n  vector_search:\n    backfill_batch_size: 100\n    type: in_memory\n    uri: http://127.0.0.1:21000\n'''        \n"})})}),(0,n.jsx)(s.A,{value:"MongoDB Atlas",label:"MongoDB Atlas",default:!0,children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"CFG = '''\nartifact_store: filesystem://<path-to-artifact-store>\ncluster: \n    compute: ray://<ray-host>\n    cdc:    \n        uri: http://<cdc-host>:<cdc-port>\n    vector_search:\n        uri: http://<vector-search-host>:<vector-search-port>\n        type: native\ndatabackend: mongodb+srv://<user>:<password>@<mongo-host>:27017/documents\n'''        \n"})})}),(0,n.jsx)(s.A,{value:"SQLite",label:"SQLite",default:!0,children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"CFG = '''\nartifact_store: filesystem://<path-to-artifact-store>\ncluster: \n    compute: ray://<ray-host>\n    cdc:    \n        uri: http://<cdc-host>:<cdc-port>\n    vector_search:\n        uri: http://<vector-search-host>:<vector-search-port>\ndatabackend: sqlite://<path-to-db>.db\n'''        \n"})})}),(0,n.jsx)(s.A,{value:"MySQL",label:"MySQL",default:!0,children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"CFG = '''\nartifact_store: filesystem://<path-to-artifact-store>\ncluster: \n    compute: ray://<ray-host>\n    cdc:    \n        uri: http://<cdc-host>:<cdc-port>\n    vector_search:\n        uri: http://<vector-search-host>:<vector-search-port>\ndatabackend: mysql://<user>:<password>@<host>:<port>/database\n'''        \n"})})}),(0,n.jsx)(s.A,{value:"Oracle",label:"Oracle",default:!0,children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"CFG = '''\nartifact_store: filesystem://<path-to-artifact-store>\ncluster: \n    compute: ray://<ray-host>\n    cdc:    \n        uri: http://<cdc-host>:<cdc-port>\n    vector_search:\n        uri: http://<vector-search-host>:<vector-search-port>\ndatabackend: mssql://<user>:<password>@<host>:<port>\n'''        \n"})})}),(0,n.jsx)(s.A,{value:"PostgreSQL",label:"PostgreSQL",default:!0,children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"CFG = '''\nartifact_store: filesystem://<path-to-artifact-store>\ncluster: \n    compute: ray://<ray-host>\n    cdc:    \n        uri: http://<cdc-host>:<cdc-port>\n    vector_search:\n        uri: http://<vector-search-host>:<vector-search-port>\ndatabackend: postgres://<user>:<password>@<host>:<port</<database>\n'''        \n"})})}),(0,n.jsx)(s.A,{value:"Snowflake",label:"Snowflake",default:!0,children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"CFG = '''\nartifact_store: filesystem://<path-to-artifact-store>\nmetadata_store: sqlite://<path-to-sqlite-db>.db\ncluster: \n    compute: ray://<ray-host>\n    cdc:    \n        uri: http://<cdc-host>:<cdc-port>\n    vector_search:\n        uri: http://<vector-search-host>:<vector-search-port>\ndatabackend: snowflake://<user>:<password>@<account>/<database>\n'''        \n"})})}),(0,n.jsx)(s.A,{value:"Clickhouse",label:"Clickhouse",default:!0,children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"CFG = '''\nartifact_store: filesystem://<path-to-artifact-store>\nmetadata_store: sqlite://<path-to-sqlite-db>.db\ncluster: \n    compute: ray://<ray-host>\n    cdc:    \n        uri: http://<cdc-host>:<cdc-port>\n    vector_search:\n        uri: http://<vector-search-host>:<vector-search-port>\ndatabackend: clickhouse://<user>:<password>@<host>:<port>\n'''        \n"})})})]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"with open(os.environ['SUPERDUPER_CONFIG'], 'w') as f:\n    f.write(CFG)\n"})}),"\n",(0,n.jsx)(c.A,{filename:"configure_your_production_system.md"})]})}function f(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},94:(e,t,r)=>{r.d(t,{A:()=>s});var n=r(6540);const o=e=>{const t=Array.from(document.querySelectorAll('.tabs > li[role="tab"]')).filter((e=>"true"===e.getAttribute("aria-selected"))).map((e=>e.textContent.trim()));console.log("About to process filename:",e),console.log("Selected tabs:",t);const r=`_${e.replace(/\.md$/,".ipynb")}`,n=encodeURIComponent(r);fetch(`https://build-use-cases-sddb.replit.app/build_notebook?usecase_path=.%2Fuse_cases%2F${n}`,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(t)}).then((e=>e.blob())).then((e=>{const t=window.URL.createObjectURL(e),n=document.createElement("a");n.style.display="none",n.href=t,n.download=r,document.body.appendChild(n),n.click(),window.URL.revokeObjectURL(t),alert("Your file has downloaded!")})).catch((()=>alert("There was an error."))),console.log("Sending JSON payload:",JSON.stringify(t))};var a=r(4848);const s=e=>{let{filename:t}=e;if(!t)return console.error("Filename is not provided or invalid."),null;const[r,s]=(0,n.useState)(!1),c={padding:"10px",borderRadius:"10px",border:"0",color:"#000",backgroundColor:"#C4F800",fontWeight:"bold",cursor:"pointer"};return(0,a.jsx)("button",{style:r?{...c,backgroundColor:"#B0E000"}:c,onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),onClick:()=>o(t),children:"Generate notebook from all selected tabs"})}},7227:(e,t,r)=>{r.d(t,{A:()=>s});r(6540);var n=r(870);const o={tabItem:"tabItem_Ymn6"};var a=r(4848);function s(e){let{children:t,hidden:r,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.A)(o.tabItem,s),hidden:r,children:t})}},9489:(e,t,r)=>{r.d(t,{A:()=>j});var n=r(6540),o=r(870),a=r(4245),s=r(6347),c=r(6494),l=r(2814),u=r(5167),i=r(1269);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:o}}=e;return{value:t,label:r,attributes:n,default:o}}))}(r);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function h(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const o=(0,s.W6)(),a=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l.aZ)(a),(0,n.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(o.location.search);t.set(a,e),o.replace({...o.location,search:t.toString()})}),[a,o])]}function m(e){const{defaultValue:t,queryString:r=!1,groupId:o}=e,a=p(e),[s,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[u,d]=f({queryString:r,groupId:o}),[m,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,a]=(0,i.Dv)(r);return[o,(0,n.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:o}),y=(()=>{const e=u??m;return h({value:e,tabValues:a})?e:null})();(0,c.A)((()=>{y&&l(y)}),[y]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,a]),tabValues:a}}var b=r(1062);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=r(4848);function v(e){let{className:t,block:r,selectedValue:n,selectValue:s,tabValues:c}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.a_)(),i=e=>{const t=e.currentTarget,r=l.indexOf(t),o=c[r].value;o!==n&&(u(t),s(o))},d=e=>{let t=null;switch(e.key){case"Enter":i(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;t=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;t=l[r]??l[l.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":r},t),children:c.map((e=>{let{value:t,label:r,attributes:a}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:d,onClick:i,...a,className:(0,o.A)("tabs__item",y.tabItem,a?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function _(e){let{lazy:t,children:r,selectedValue:o}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===o));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function x(e){const t=m(e);return(0,g.jsxs)("div",{className:(0,o.A)("tabs-container",y.tabList),children:[(0,g.jsx)(v,{...e,...t}),(0,g.jsx)(_,{...e,...t})]})}function j(e){const t=(0,b.A)();return(0,g.jsx)(x,{...e,children:d(e.children)},String(t))}},8453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>c});var n=r(6540);const o={},a=n.createContext(o);function s(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);