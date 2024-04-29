"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[8751],{3662:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>u,metadata:()=>i,toc:()=>c});var n=a(4848),r=a(8453),s=a(9489),l=a(7227);const u={sidebar_label:"Get useful sample data"},o="Get useful sample data",i={id:"docs/reusable_snippets/get_useful_sample_data",title:"get_useful_sample_data",description:"",source:"@site/content/docs/reusable_snippets/get_useful_sample_data.md",sourceDirName:"docs/reusable_snippets",slug:"/docs/reusable_snippets/get_useful_sample_data",permalink:"/docs/docs/reusable_snippets/get_useful_sample_data",draft:!1,unlisted:!1,editUrl:"https://github.com/SuperDuperDB/superduperdb/blob/main/docs/hr/content/docs/reusable_snippets/get_useful_sample_data.md",tags:[],version:"current",frontMatter:{sidebar_label:"Get useful sample data"},sidebar:"tutorialSidebar",previous:{title:"Create datatype",permalink:"/docs/docs/reusable_snippets/create_datatype"},next:{title:"Insert data",permalink:"/docs/docs/reusable_snippets/insert_data"}},d={},c=[];function p(e){const t={code:"code",h1:"h1",pre:"pre",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"get-useful-sample-data",children:"Get useful sample data"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"from superduperdb import dtype\n\n"})}),"\n",(0,n.jsxs)(s.A,{children:[(0,n.jsx)(l.A,{value:"Text",label:"Text",default:!0,children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"!curl -O https://superduperdb-public-demo.s3.amazonaws.com/text.json\nimport json\n\nwith open('text.json', 'r') as f:\n    data = json.load(f)\nsample_datapoint = \"What is mongodb?\"\n\nchunked_model_datatype = dtype('str')        \n"})})}),(0,n.jsx)(l.A,{value:"PDF",label:"PDF",default:!0,children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"!curl -O https://superduperdb-public-demo.s3.amazonaws.com/pdfs.zip && unzip -o pdfs.zip\nimport os\n\ndata = [f'pdfs/{x}' for x in os.listdir('./pdfs')]\n\nsample_datapoint = data[-1]\nchunked_model_datatype = dtype('str')        \n"})})}),(0,n.jsx)(l.A,{value:"Image",label:"Image",default:!0,children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"!curl -O s3://superduperdb-public-demo/images.zip && unzip images.zip\nimport os\nfrom PIL import Image\n\ndata = [f'images/{x}' for x in os.listdir('./images')]\ndata = [ Image.open(path) for path in data]\nsample_datapoint = data[-1]\n\nfrom superduperdb.ext.pillow import pil_image\nchunked_model_datatype = pil_image        \n"})})}),(0,n.jsx)(l.A,{value:"Video",label:"Video",default:!0,children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"!curl -O s3://superduperdb-public-demo/videos.zip && unzip videos.zip\nimport os\n\ndata = [f'videos/{x}' for x in os.listdir('./videos')]\nsample_datapoint = data[-1]\n\nfrom superduperdb.ext.pillow import pil_image\nchunked_model_datatype = pil_image        \n"})})}),(0,n.jsx)(l.A,{value:"Audio",label:"Audio",default:!0,children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"!curl -O s3://superduperdb-public-demo/audio.zip && unzip audio.zip\nimport os\n\ndata = [f'audios/{x}' for x in os.listdir('./audios')]\nsample_datapoint = data[-1]\nchunked_model_datatype = dtype('str')        \n"})})})]})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},7227:(e,t,a)=>{a.d(t,{A:()=>l});a(6540);var n=a(870);const r={tabItem:"tabItem_Ymn6"};var s=a(4848);function l(e){let{children:t,hidden:a,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(r.tabItem,l),hidden:a,children:t})}},9489:(e,t,a)=>{a.d(t,{A:()=>j});var n=a(6540),r=a(870),s=a(4245),l=a(6347),u=a(6494),o=a(2814),i=a(5167),d=a(1269);function c(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return c(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}(a);return function(e){const t=(0,i.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const r=(0,l.W6)(),s=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})}),[s,r])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,s=p(e),[l,o]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[i,c]=f({queryString:a,groupId:r}),[b,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,d.Dv)(a);return[r,(0,n.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:r}),g=(()=>{const e=i??b;return m({value:e,tabValues:s})?e:null})();(0,u.A)((()=>{g&&o(g)}),[g]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),c(e),h(e)}),[c,h,s]),tabValues:s}}var h=a(1062);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var _=a(4848);function v(e){let{className:t,block:a,selectedValue:n,selectValue:l,tabValues:u}=e;const o=[],{blockElementScrollPositionUntilNextRender:i}=(0,s.a_)(),d=e=>{const t=e.currentTarget,a=o.indexOf(t),r=u[a].value;r!==n&&(i(t),l(r))},c=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=o.indexOf(e.currentTarget)+1;t=o[a]??o[0];break}case"ArrowLeft":{const a=o.indexOf(e.currentTarget)-1;t=o[a]??o[o.length-1];break}}t?.focus()};return(0,_.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":a},t),children:u.map((e=>{let{value:t,label:a,attributes:s}=e;return(0,_.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>o.push(e),onKeyDown:c,onClick:d,...s,className:(0,r.A)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":n===t}),children:a??t},t)}))})}function x(e){let{lazy:t,children:a,selectedValue:r}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,_.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function y(e){const t=b(e);return(0,_.jsxs)("div",{className:(0,r.A)("tabs-container",g.tabList),children:[(0,_.jsx)(v,{...e,...t}),(0,_.jsx)(x,{...e,...t})]})}function j(e){const t=(0,h.A)();return(0,_.jsx)(y,{...e,children:c(e.children)},String(t))}},8453:(e,t,a)=>{a.d(t,{R:()=>l,x:()=>u});var n=a(6540);const r={},s=n.createContext(r);function l(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function u(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);