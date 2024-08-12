"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[3123],{1043:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>u,metadata:()=>c,toc:()=>p});var r=n(4848),o=n(8453),a=n(9489),s=n(7227),l=n(94);const u={sidebar_label:"Answer question with LLM",filename:"answer_question_with_llm.md"},i="Answer question with LLM",c={id:"reusable_snippets/answer_question_with_llm",title:"answer_question_with_llm",description:"",source:"@site/content/reusable_snippets/answer_question_with_llm.md",sourceDirName:"reusable_snippets",slug:"/reusable_snippets/answer_question_with_llm",permalink:"/docs/reusable_snippets/answer_question_with_llm",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper-io/superduper/edit/main/docs/content/reusable_snippets/answer_question_with_llm.md",tags:[],version:"current",frontMatter:{sidebar_label:"Answer question with LLM",filename:"answer_question_with_llm.md"}},d={},p=[];function m(e){const t={code:"code",h1:"h1",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"answer-question-with-llm",children:"Answer question with LLM"}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsx)(s.A,{value:"No-context",label:"No-context",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"\nllm.predict(query)        \n"})})}),(0,r.jsx)(s.A,{value:"Prompt",label:"Prompt",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'from superduper import model\nfrom superduper.components.graph import Graph, input_node\n\n@model\ndef build_prompt(query):\n    return f"Translate the sentence into German: {query}"\n\nin_ = input_node(\'query\')\nprompt = build_prompt(query=in_)\nanswer = llm(prompt)\nprompt_llm = answer.to_graph("prompt_llm")\nprompt_llm.predict(query)[0]        \n'})})}),(0,r.jsx)(s.A,{value:"Context",label:"Context",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'from superduper import model\nfrom superduper.components.graph import Graph, input_node\n\nprompt_template = (\n    "Use the following context snippets, these snippets are not ordered!, Answer the question based on this context.\\n"\n    "{context}\\n\\n"\n    "Here\'s the question: {query}"\n)\n\n\n@model\ndef build_prompt(query, docs):\n    chunks = [doc["text"] for doc in docs]\n    context = "\\n\\n".join(chunks)\n    prompt = prompt_template.format(context=context, query=query)\n    return prompt\n    \n\nin_ = input_node(\'query\')\nvector_search_results = vector_search_model(query=in_)\nprompt = build_prompt(query=in_, docs=vector_search_results)\nanswer = llm(prompt)\ncontext_llm = answer.to_graph("context_llm")\ncontext_llm.predict(query)        \n'})})})]}),"\n",(0,r.jsx)(l.A,{filename:"answer_question_with_llm.md"})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},94:(e,t,n)=>{n.d(t,{A:()=>s});var r=n(6540);const o=e=>{const t=Array.from(document.querySelectorAll('.tabs > li[role="tab"]')).filter((e=>"true"===e.getAttribute("aria-selected"))).map((e=>e.textContent.trim()));console.log("About to process filename:",e),console.log("Selected tabs:",t);const n=`_${e.replace(/\.md$/,".ipynb")}`,r=encodeURIComponent(n);fetch(`https://build-use-cases-sddb.replit.app/build_notebook?usecase_path=.%2Fuse_cases%2F${r}`,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(t)}).then((e=>e.blob())).then((e=>{const t=window.URL.createObjectURL(e),r=document.createElement("a");r.style.display="none",r.href=t,r.download=n,document.body.appendChild(r),r.click(),window.URL.revokeObjectURL(t),alert("Your file has downloaded!")})).catch((()=>alert("There was an error."))),console.log("Sending JSON payload:",JSON.stringify(t))};var a=n(4848);const s=e=>{let{filename:t}=e;if(!t)return console.error("Filename is not provided or invalid."),null;const[n,s]=(0,r.useState)(!1),l={padding:"10px",borderRadius:"10px",border:"0",color:"#000",backgroundColor:"#C4F800",fontWeight:"bold",cursor:"pointer"};return(0,a.jsx)("button",{style:n?{...l,backgroundColor:"#B0E000"}:l,onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),onClick:()=>o(t),children:"Generate notebook from all selected tabs"})}},7227:(e,t,n)=>{n.d(t,{A:()=>s});n(6540);var r=n(870);const o={tabItem:"tabItem_Ymn6"};var a=n(4848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,s),hidden:n,children:t})}},9489:(e,t,n)=>{n.d(t,{A:()=>x});var r=n(6540),o=n(870),a=n(4245),s=n(6347),l=n(6494),u=n(2814),i=n(5167),c=n(1269);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:o}}=e;return{value:t,label:n,attributes:r,default:o}}))}(n);return function(e){const t=(0,i.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const o=(0,s.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(o.location.search);t.set(a,e),o.replace({...o.location,search:t.toString()})}),[a,o])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:o}=e,a=p(e),[s,u]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[i,d]=h({queryString:n,groupId:o}),[b,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,a]=(0,c.Dv)(n);return[o,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:o}),_=(()=>{const e=i??b;return m({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{_&&u(_)}),[_]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),f(e)}),[d,f,a]),tabValues:a}}var f=n(1062);const _={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var w=n(4848);function v(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:l}=e;const u=[],{blockElementScrollPositionUntilNextRender:i}=(0,a.a_)(),c=e=>{const t=e.currentTarget,n=u.indexOf(t),o=l[n].value;o!==r&&(i(t),s(o))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return(0,w.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,w.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>u.push(e),onKeyDown:d,onClick:c,...a,className:(0,o.A)("tabs__item",_.tabItem,a?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function g(e){let{lazy:t,children:n,selectedValue:o}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,w.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function y(e){const t=b(e);return(0,w.jsxs)("div",{className:(0,o.A)("tabs-container",_.tabList),children:[(0,w.jsx)(v,{...e,...t}),(0,w.jsx)(g,{...e,...t})]})}function x(e){const t=(0,f.A)();return(0,w.jsx)(y,{...e,children:d(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>l});var r=n(6540);const o={},a=r.createContext(o);function s(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);