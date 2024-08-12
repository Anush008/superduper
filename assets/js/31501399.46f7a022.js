"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[1862],{7984:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>u,metadata:()=>c,toc:()=>p});var n=r(4848),a=r(8453),o=r(9489),s=r(7227),l=r(94);const u={sidebar_label:"Start your cluster",filename:"start_your_cluster.md"},i="Start your cluster",c={id:"reusable_snippets/start_your_cluster",title:"start_your_cluster",description:"Starting a superduper cluster is useful in production and model development",source:"@site/content/reusable_snippets/start_your_cluster.md",sourceDirName:"reusable_snippets",slug:"/reusable_snippets/start_your_cluster",permalink:"/docs/reusable_snippets/start_your_cluster",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper-io/superduper/edit/main/docs/content/reusable_snippets/start_your_cluster.md",tags:[],version:"current",frontMatter:{sidebar_label:"Start your cluster",filename:"start_your_cluster.md"}},d={},p=[];function b(e){const t={admonition:"admonition",code:"code",h1:"h1",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"start-your-cluster",children:"Start your cluster"}),"\n",(0,n.jsxs)(t.admonition,{type:"note",children:[(0,n.jsx)(t.p,{children:"Starting a superduper cluster is useful in production and model development\nif you want to enable scalable compute, access to the models by multiple users for collaboration,\nmonitoring."}),(0,n.jsx)(t.p,{children:"If you don't need this, then it is simpler to start in development mode."})]}),"\n",(0,n.jsxs)(o.A,{children:[(0,n.jsx)(s.A,{value:"Experimental Cluster",label:"Experimental Cluster",default:!0,children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"!python -m superduper local-cluster up        \n"})})}),(0,n.jsx)(s.A,{value:"Docker-Compose",label:"Docker-Compose",default:!0,children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"!make build_sandbox\n!make testenv_init        \n"})})})]}),"\n",(0,n.jsx)(l.A,{filename:"start_your_cluster.md"})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(b,{...e})}):b(e)}},94:(e,t,r)=>{r.d(t,{A:()=>s});var n=r(6540);const a=e=>{const t=Array.from(document.querySelectorAll('.tabs > li[role="tab"]')).filter((e=>"true"===e.getAttribute("aria-selected"))).map((e=>e.textContent.trim()));console.log("About to process filename:",e),console.log("Selected tabs:",t);const r=`_${e.replace(/\.md$/,".ipynb")}`,n=encodeURIComponent(r);fetch(`https://build-use-cases-sddb.replit.app/build_notebook?usecase_path=.%2Fuse_cases%2F${n}`,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(t)}).then((e=>e.blob())).then((e=>{const t=window.URL.createObjectURL(e),n=document.createElement("a");n.style.display="none",n.href=t,n.download=r,document.body.appendChild(n),n.click(),window.URL.revokeObjectURL(t),alert("Your file has downloaded!")})).catch((()=>alert("There was an error."))),console.log("Sending JSON payload:",JSON.stringify(t))};var o=r(4848);const s=e=>{let{filename:t}=e;if(!t)return console.error("Filename is not provided or invalid."),null;const[r,s]=(0,n.useState)(!1),l={padding:"10px",borderRadius:"10px",border:"0",color:"#000",backgroundColor:"#C4F800",fontWeight:"bold",cursor:"pointer"};return(0,o.jsx)("button",{style:r?{...l,backgroundColor:"#B0E000"}:l,onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),onClick:()=>a(t),children:"Generate notebook from all selected tabs"})}},7227:(e,t,r)=>{r.d(t,{A:()=>s});r(6540);var n=r(870);const a={tabItem:"tabItem_Ymn6"};var o=r(4848);function s(e){let{children:t,hidden:r,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,s),hidden:r,children:t})}},9489:(e,t,r)=>{r.d(t,{A:()=>w});var n=r(6540),a=r(870),o=r(4245),s=r(6347),l=r(6494),u=r(2814),i=r(5167),c=r(1269);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}(r);return function(e){const t=(0,i.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function b(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const a=(0,s.W6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,u.aZ)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=p(e),[s,u]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!b({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[i,d]=m({queryString:r,groupId:a}),[f,h]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Dv)(r);return[a,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),v=(()=>{const e=i??f;return b({value:e,tabValues:o})?e:null})();(0,l.A)((()=>{v&&u(v)}),[v]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!b({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),h(e)}),[d,h,o]),tabValues:o}}var h=r(1062);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=r(4848);function g(e){let{className:t,block:r,selectedValue:n,selectValue:s,tabValues:l}=e;const u=[],{blockElementScrollPositionUntilNextRender:i}=(0,o.a_)(),c=e=>{const t=e.currentTarget,r=u.indexOf(t),a=l[r].value;a!==n&&(i(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;t=u[r]??u[0];break}case"ArrowLeft":{const r=u.indexOf(e.currentTarget)-1;t=u[r]??u[u.length-1];break}}t?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},t),children:l.map((e=>{let{value:t,label:r,attributes:o}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>u.push(e),onKeyDown:d,onClick:c,...o,className:(0,a.A)("tabs__item",v.tabItem,o?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function x(e){let{lazy:t,children:r,selectedValue:a}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function _(e){const t=f(e);return(0,y.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,y.jsx)(g,{...e,...t}),(0,y.jsx)(x,{...e,...t})]})}function w(e){const t=(0,h.A)();return(0,y.jsx)(_,{...e,children:d(e.children)},String(t))}},8453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>l});var n=r(6540);const a={},o=n.createContext(a);function s(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);