"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[5432],{1559:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>b,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=n(4848),l=n(8453),a=n(9489),o=n(7227),s=n(94);const i={sidebar_label:"Build LLM",filename:"build_llm.md"},u="Build LLM",c={id:"reusable_snippets/build_llm",title:"build_llm",description:"",source:"@site/content/reusable_snippets/build_llm.md",sourceDirName:"reusable_snippets",slug:"/reusable_snippets/build_llm",permalink:"/docs/reusable_snippets/build_llm",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper-io/superduper/edit/main/docs/content/reusable_snippets/build_llm.md",tags:[],version:"current",frontMatter:{sidebar_label:"Build LLM",filename:"build_llm.md"},sidebar:"tutorialSidebar",previous:{title:"Build multimodal embedding models",permalink:"/docs/reusable_snippets/build_multimodal_embedding_models"},next:{title:"Create vector-index",permalink:"/docs/reusable_snippets/create_vector_index"}},d={},p=[];function m(e){const t={code:"code",h1:"h1",pre:"pre",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"build-llm",children:"Build LLM"}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsx)(o.A,{value:"OpenAI",label:"OpenAI",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"!pip install openai\nfrom superduper.ext.openai import OpenAIChatCompletion\n\nllm = OpenAIChatCompletion(identifier='llm', model='gpt-3.5-turbo')        \n"})})}),(0,r.jsx)(o.A,{value:"Anthropic",label:"Anthropic",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'!pip install anthropic\nfrom superduper.ext.anthropic import AnthropicCompletions\nimport os\n\nos.environ["ANTHROPIC_API_KEY"] = "sk-xxx"\n\npredict_kwargs = {\n    "max_tokens": 1024,\n    "temperature": 0.8,\n}\n\nllm = AnthropicCompletions(identifier=\'llm\', model=\'claude-2.1\', predict_kwargs=predict_kwargs)        \n'})})}),(0,r.jsx)(o.A,{value:"vLLM",label:"vLLM",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'!pip install vllm\nfrom superduper.ext.vllm import VllmModel\n\npredict_kwargs = {\n    "max_tokens": 1024,\n    "temperature": 0.8,\n}\n\n\nllm = VllmModel(\n    identifier="llm",\n    model_name="TheBloke/Mistral-7B-Instruct-v0.2-AWQ",\n    vllm_kwargs={\n        "gpu_memory_utilization": 0.7,\n        "max_model_len": 1024,\n        "quantization": "awq",\n    },\n    predict_kwargs=predict_kwargs,\n)        \n'})})}),(0,r.jsx)(o.A,{value:"Transformers",label:"Transformers",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'!pip install transformers datasets bitsandbytes accelerate\nfrom superduper.ext.transformers import LLM\n\nllm = LLM.from_pretrained("mistralai/Mistral-7B-Instruct-v0.2", load_in_8bit=True, device_map="cuda", identifier="llm", predict_kwargs=dict(max_new_tokens=128))        \n'})})}),(0,r.jsx)(o.A,{value:"Llama.cpp",label:"Llama.cpp",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'!pip install llama_cpp_python\n# !huggingface-cli download TheBloke/Mistral-7B-Instruct-v0.2-GGUF mistral-7b-instruct-v0.2.Q4_K_M.gguf --local-dir . --local-dir-use-symlinks False\n\nfrom superduper.ext.llamacpp.model import LlamaCpp\nllm = LlamaCpp(identifier="llm", model_name_or_path="mistral-7b-instruct-v0.2.Q4_K_M.gguf")        \n'})})})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'# test the llm model\nllm.predict("Tell me about the superduper")\n'})}),"\n",(0,r.jsx)(s.A,{filename:"build_llm.md"})]})}function b(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},94:(e,t,n)=>{n.d(t,{A:()=>o});var r=n(6540);const l=e=>{const t=Array.from(document.querySelectorAll('.tabs > li[role="tab"]')).filter((e=>"true"===e.getAttribute("aria-selected"))).map((e=>e.textContent.trim()));console.log("About to process filename:",e),console.log("Selected tabs:",t);const n=`_${e.replace(/\.md$/,".ipynb")}`,r=encodeURIComponent(n);fetch(`https://build-use-cases-sddb.replit.app/build_notebook?usecase_path=.%2Fuse_cases%2F${r}`,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(t)}).then((e=>e.blob())).then((e=>{const t=window.URL.createObjectURL(e),r=document.createElement("a");r.style.display="none",r.href=t,r.download=n,document.body.appendChild(r),r.click(),window.URL.revokeObjectURL(t),alert("Your file has downloaded!")})).catch((()=>alert("There was an error."))),console.log("Sending JSON payload:",JSON.stringify(t))};var a=n(4848);const o=e=>{let{filename:t}=e;if(!t)return console.error("Filename is not provided or invalid."),null;const[n,o]=(0,r.useState)(!1),s={padding:"10px",borderRadius:"10px",border:"0",color:"#000",backgroundColor:"#C4F800",fontWeight:"bold",cursor:"pointer"};return(0,a.jsx)("button",{style:n?{...s,backgroundColor:"#B0E000"}:s,onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),onClick:()=>l(t),children:"Generate notebook from all selected tabs"})}},7227:(e,t,n)=>{n.d(t,{A:()=>o});n(6540);var r=n(870);const l={tabItem:"tabItem_Ymn6"};var a=n(4848);function o(e){let{children:t,hidden:n,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,o),hidden:n,children:t})}},9489:(e,t,n)=>{n.d(t,{A:()=>w});var r=n(6540),l=n(870),a=n(4245),o=n(6347),s=n(6494),i=n(2814),u=n(5167),c=n(1269);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:l}}=e;return{value:t,label:n,attributes:r,default:l}}))}(n);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const l=(0,o.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(l.location.search);t.set(a,e),l.replace({...l.location,search:t.toString()})}),[a,l])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:l}=e,a=p(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[u,d]=b({queryString:n,groupId:l}),[h,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[l,a]=(0,c.Dv)(n);return[l,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:l}),g=(()=>{const e=u??h;return m({value:e,tabValues:a})?e:null})();(0,s.A)((()=>{g&&i(g)}),[g]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),f(e)}),[d,f,a]),tabValues:a}}var f=n(1062);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(4848);function _(e){let{className:t,block:n,selectedValue:r,selectValue:o,tabValues:s}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.a_)(),c=e=>{const t=e.currentTarget,n=i.indexOf(t),l=s[n].value;l!==r&&(u(t),o(l))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":n},t),children:s.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>i.push(e),onKeyDown:d,onClick:c,...a,className:(0,l.A)("tabs__item",g.tabItem,a?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function x(e){let{lazy:t,children:n,selectedValue:l}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===l));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==l})))})}function y(e){const t=h(e);return(0,v.jsxs)("div",{className:(0,l.A)("tabs-container",g.tabList),children:[(0,v.jsx)(_,{...e,...t}),(0,v.jsx)(x,{...e,...t})]})}function w(e){const t=(0,f.A)();return(0,v.jsx)(y,{...e,children:d(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>s});var r=n(6540);const l={},a=r.createContext(l);function o(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);