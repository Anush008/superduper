"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[2643],{4306:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>m,toc:()=>a});var r=t(4848),o=t(8453);const s={},i="Basic RAG tutorial",m={id:"tutorials/rag",title:"Basic RAG tutorial",description:"In this tutorial we show you how to do retrieval augmented generation (RAG) with superduper.",source:"@site/content/tutorials/rag.md",sourceDirName:"tutorials",slug:"/tutorials/rag",permalink:"/docs/tutorials/rag",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper-io/superduper/edit/main/docs/content/tutorials/rag.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Listening for new data",permalink:"/docs/tutorials/listening"},next:{title:"Training and Managing MNIST Predictions with superduper",permalink:"/docs/tutorials/training"}},d={},a=[];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",p:"p",pre:"pre",...(0,o.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"basic-rag-tutorial",children:"Basic RAG tutorial"}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["In this tutorial we show you how to do retrieval augmented generation (RAG) with ",(0,r.jsx)(n.code,{children:"superduper"}),".\nNote that this is just an example of the flexibility and power which ",(0,r.jsx)(n.code,{children:"superduper"})," gives\nto developers. ",(0,r.jsx)(n.code,{children:"superduper"})," is about much more than RAG and LLMs."]})}),"\n",(0,r.jsxs)(n.p,{children:["As in the vector-search tutorial we'll use ",(0,r.jsx)(n.code,{children:"superduper"})," documentation for the tutorial.\nWe'll add this to a testing database by downloading the data snapshot:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"!curl -O https://superduper-public-demo.s3.amazonaws.com/text.json\n"})}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Outputs"}),(0,r.jsx)("pre",{children:(0,r.jsx)(n.p,{children:"% Total    % Received % Xferd  Average Speed   Time    Time     Time  Current\nDload  Upload   Total   Spent    Left  Speed\n100  720k  100  720k    0     0   679k      0  0:00:01  0:00:01 --:--:--  681k"})})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"import json\n\nfrom superduper import superduper, Document\n\ndb = superduper('mongomock://test')\n\nwith open('text.json') as f:\n    data = json.load(f)\n\n_ = db['docu'].insert_many([{'txt': r} for r in data]).execute()\n"})}),"\n",(0,r.jsx)(t,{children:(0,r.jsx)("summary",{children:"Outputs"})}),"\n",(0,r.jsxs)(n.p,{children:["Let's verify the data in the ",(0,r.jsx)(n.code,{children:"db"})," by querying one datapoint:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"db['docu'].find_one().execute()\n"})}),"\n",(0,r.jsx)(t,{children:(0,r.jsx)("summary",{children:"Outputs"})}),"\n",(0,r.jsxs)(n.p,{children:["The first step in a RAG application is to create a ",(0,r.jsx)(n.code,{children:"VectorIndex"}),". The results of searching\nwith this index will be used as input to the LLM for answering questions."]}),"\n",(0,r.jsxs)(n.p,{children:["Read about ",(0,r.jsx)(n.code,{children:"VectorIndex"})," ",(0,r.jsx)(n.a,{href:"/docs/apply_api/vector_index",children:"here"})," and follow along the tutorial on\nvector-search ",(0,r.jsx)(n.a,{href:"/docs/tutorials/vector_search",children:"here"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'import requests \n\nfrom superduper import Application, Document, VectorIndex, Listener, vector\nfrom superduper.ext.sentence_transformers.model import SentenceTransformer\nfrom superduper.base.code import Code\n\ndef postprocess(x):\n    return x.tolist()\n\ndatatype = vector(shape=384, identifier="my-vec")\n    \nmodel = SentenceTransformer(\n    identifier="my-embedding",\n    datatype=datatype,\n    predict_kwargs={"show_progress_bar": True},\n    signature="*args,**kwargs",\n    model="all-MiniLM-L6-v2",      \n    device="cpu",\n    postprocess=Code.from_object(postprocess),\n)\n\nlistener = Listener(\n    identifier="my-listener",\n    model=model,\n    key=\'txt\',\n    select=db[\'docu\'].find(),\n    predict_kwargs={\'max_chunk_size\': 50},\n)\n\nvector_index = VectorIndex(\n    identifier="my-index",\n    indexing_listener=listener,\n    measure="cosine"\n)\n\ndb.apply(vector_index)\n'})}),"\n",(0,r.jsx)(t,{children:(0,r.jsx)("summary",{children:"Outputs"})}),"\n",(0,r.jsxs)(n.p,{children:["Now that we've set up a ",(0,r.jsx)(n.code,{children:"VectorIndex"}),", we can connect this index with an LLM in a number of ways.\nA simple way to do that is with the ",(0,r.jsx)(n.code,{children:"SequentialModel"}),". The first part of the ",(0,r.jsx)(n.code,{children:"SequentialModel"}),"\nexecutes a query and provides the results to the LLM in the second part."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"RetrievalPrompt"}),' component takes a query with a "free" variable as input, signified with ',(0,r.jsx)(n.code,{children:"<var:???>"}),".\nThis gives users great flexibility with regard to how they fetch the context\nfor their downstream models."]}),"\n",(0,r.jsxs)(n.p,{children:["We're using OpenAI, but you can use any type of LLm with ",(0,r.jsx)(n.code,{children:"superduper"}),". We have several\nnative integrations (see ",(0,r.jsx)(n.a,{href:"../ai_integraitons/",children:"here"}),") but you can also ",(0,r.jsx)(n.a,{href:"/docs/models/bring_your_own_models",children:"bring your own model"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"from superduper.ext.llm.prompter import *\nfrom superduper import Document\nfrom superduper.components.model import SequentialModel\nfrom superduper.ext.openai import OpenAIChatCompletion\n\nq = db['docu'].like(Document({'txt': '<var:prompt>'}), vector_index='my-index', n=5).find().limit(10)\n\ndef get_output(c):\n    return [r['txt'] for r in c]\n\nprompt_template = RetrievalPrompt('my-prompt', select=q, postprocess=Code.from_object(get_output))\n\nllm = OpenAIChatCompletion('gpt-3.5-turbo')\nseq = SequentialModel('rag', models=[prompt_template, llm])\n\ndb.apply(seq)\n"})}),"\n",(0,r.jsx)(t,{children:(0,r.jsx)("summary",{children:"Outputs"})}),"\n",(0,r.jsxs)(n.p,{children:["Now we can test the ",(0,r.jsx)(n.code,{children:"SequentialModel"})," with a sample question:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"seq.predict('Tell be about vector-indexes')\n"})}),"\n",(0,r.jsx)(t,{children:(0,r.jsx)("summary",{children:"Outputs"})}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["Did you know you can use any tools from the Python ecosystem with ",(0,r.jsx)(n.code,{children:"superduper"}),".\nThat includes ",(0,r.jsx)(n.code,{children:"langchain"})," and ",(0,r.jsx)(n.code,{children:"llamaindex"})," which can be very useful for RAG applications."]})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"from superduper import Application\n\napp = Application('rag-app', components=[vector_index, seq, plugin_1, plugin_2])\n"})}),"\n",(0,r.jsx)(t,{children:(0,r.jsx)("summary",{children:"Outputs"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"app.encode()\n"})}),"\n",(0,r.jsx)(t,{children:(0,r.jsx)("summary",{children:"Outputs"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"app.export('rag-app')\n"})}),"\n",(0,r.jsx)(t,{children:(0,r.jsx)("summary",{children:"Outputs"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"!cat rag-app/requirements.txt\n"})}),"\n",(0,r.jsx)(t,{children:(0,r.jsx)("summary",{children:"Outputs"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"from superduper import *\n\napp = Component.read('rag-app')\n"})}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Outputs"}),(0,r.jsx)("pre",{children:(0,r.jsxs)(n.p,{children:["/Users/dodo/.pyenv/versions/3.11.7/envs/superduper-3.11/lib/python3.11/site-packages/huggingface_hub/file_download.py:1132: FutureWarning: ",(0,r.jsx)(n.code,{children:"resume_download"})," is deprecated and will be removed in version 1.0.0. Downloads always resume when possible. If you want to force a new download, use ",(0,r.jsx)(n.code,{children:"force_download=True"}),".\nwarnings.warn("]})})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"app.info()\n"})}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Outputs"}),(0,r.jsx)("pre",{children:(0,r.jsx)(n.p,{children:"2024-Jun-17 09:42:33.43| INFO     | Duncans-MBP.fritz.box| superduper.base.document:362  | Building leaf <class 'superduper.components.vector_index.VectorIndex'> with identifier: my-index\n2024-Jun-17 09:42:33.43| INFO     | Duncans-MBP.fritz.box| superduper.base.document:362  | Building leaf <class 'superduper.components.listener.Listener'> with identifier: my-listener\n2024-Jun-17 09:42:33.43| INFO     | Duncans-MBP.fritz.box| superduper.base.document:362  | Building leaf <class 'superduper.ext.sentence_transformers.model.SentenceTransformer'> with identifier: my-embedding\n2024-Jun-17 09:42:33.44| INFO     | Duncans-MBP.fritz.box| superduper.base.document:362  | Building leaf <class 'superduper.components.datatype.DataType'> with identifier: my-vec\n2024-Jun-17 09:42:33.44| INFO     | Duncans-MBP.fritz.box| superduper.base.document:362  | Building leaf <class 'superduper.base.code.Code'> with identifier: postprocess\n2024-Jun-17 09:42:33.44| INFO     | Duncans-MBP.fritz.box| superduper.base.document:362  | Building leaf <class 'superduper.backends.mongodb.query.MongoQuery'> with identifier: docu-find\n2024-Jun-17 09:42:33.44| INFO     | Duncans-MBP.fritz.box| superduper.base.document:362  | Building leaf <class 'superduper.components.model.SequentialModel'> with identifier: rag\n2024-Jun-17 09:42:33.44| INFO     | Duncans-MBP.fritz.box| superduper.base.document:362  | Building leaf <class 'superduper.ext.llm.prompter.RetrievalPrompt'> with identifier: my-prompt\n2024-Jun-17 09:42:33.44| INFO     | Duncans-MBP.fritz.box| superduper.base.document:362  | Building leaf <class 'superduper.base.code.Code'> with identifier: get_output\n2024-Jun-17 09:42:33.44| INFO     | Duncans-MBP.fritz.box| superduper.base.document:362  | Building leaf <class 'superduper.backends.mongodb.query.MongoQuery'> with identifier: docu-like-txt-var-prompt-vector-index-my-index-n-5-find-limit-10\n2024-Jun-17 09:42:33.44| INFO     | Duncans-MBP.fritz.box| superduper.base.document:362  | Building leaf <class 'superduper.ext.openai.model.OpenAIChatCompletion'> with identifier: gpt-3.5-turbo"})}),(0,r.jsx)("pre",{children:(0,r.jsxs)(n.p,{children:["\x1b[1;32m\u256d\u2500\x1b[0m\x1b[1;32m\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\x1b[0m\x1b[1;32m rag-app \x1b[0m\x1b[1;32m\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\x1b[0m\x1b[1;32m\u2500\u256e\x1b[0m\n\x1b[1;32m\u2502\x1b[0m \x1b[35midentifier\x1b[0m: \x1b[34mrag-app\x1b[0m                                                                                             \x1b[1;32m\u2502\x1b[0m\n\x1b[1;32m\u2502\x1b[0m \x1b[35muuid\x1b[0m: \x1b[34m9115f5ec-5575-4a11-8678-664f3904bab7\x1b[0m                                                                      \x1b[1;32m\u2502\x1b[0m\n\x1b[1;32m\u2502\x1b[0m \x1b[35mcomponents\x1b[0m: \x1b[34m[VectorIndex(identifier='my-index', uuid='650db68c-8786-4204-bc2d-6cc4f1d2511c', \x1b[0m                   \x1b[1;32m\u2502\x1b[0m\n\x1b[1;32m\u2502\x1b[0m \x1b[34mindexing_listener=Listener(identifier='my-listener', uuid='02f5b3d4-7a0a-48d8-990c-bdae29424038', key='txt', \x1b[0m   \x1b[1;32m\u2502\x1b[0m\n\x1b[1;32m\u2502\x1b[0m \x1b[34mmodel=SentenceTransformer(preferred_devices=('cuda', 'mps', 'cpu'), device='cpu', identifier='my-embedding', \x1b[0m   \x1b[1;32m\u2502\x1b[0m\n\x1b[1;32m\u2502\x1b[0m \x1b[34muuid='b1351454-3714-4c57-bacf-2f2a667d5fdc', signature='*args,**kwargs', datatype=DataType(identifier='my-vec',\x1b[0m \x1b[1;32m\u2502\x1b[0m\n\x1b[1;32m\u2502\x1b[0m \x1b[34muuid='ecfbe6d5-5c1f-4b80-b224-aaf0a1f3ee1d', encoder=None, decoder=None, info=None, shape=(384,), \x1b[0m              \x1b[1;32m\u2502\x1b[0m\n\x1b[1;32m\u2502\x1b[0m \x1b[34mdirectory=None, encodable='native', bytes_encoding=<BytesEncoding.BYTES: 'Bytes'>, intermediate_type='bytes', \x1b[0m  \x1b[1;32m\u2502\x1b[0m\n\x1b[1;32m\u2502\x1b[0m \x1b[34mmedia_type=None), output_schema=None, flatten=False, model_update_kwargs={}, \x1b[0m                                   \x1b[1;32m\u2502\x1b[0m\n\x1b[1;32m\u2502\x1b[0m \x1b[34mpredict_kwargs={'show_progress_bar': True}, compute_kwargs={}, validation=None, metric_values={}, \x1b[0m              \x1b[1;32m\u2502\x1b[0m\n\x1b[1;32m\u2502\x1b[0m \x1b[34mnum_workers=0, object=SentenceTransformer(\x1b[0m                                                                      \x1b[1;32m\u2502\x1b[0m\n\x1b[1;32m\u2502\x1b[0m \x1b[34m  (0): Transformer({'max_seq_length': 256, 'do_lower_case': False}) with Transformer model: BertModel \x1b[0m          \x1b[1;32m\u2502\x1b[0m\n\x1b[1;32m\u2502\x1b[0m \x1b[34m  (1): Pooling({'word_embedding_dimension': 384, 'pooling_mode_cls_token': False, 'pooling_mode_mean_tokens': \x1b[0m  \x1b[1;32m\u2502\x1b[0m\n\x1b[1;32m\u2502\x1b[0m \x1b[34mTrue, 'pooling_mode_max_tokens': False, 'pooling_mode_mean_sqrt_len_tokens': False, \x1b[0m                            \x1b[1;32m\u2502\x1b[0m\n\x1b[1;32m\u2502\x1b[0m \x1b[34m'pooling_mode_weightedmean_tokens': False, 'pooling_mode_lasttoken': False, 'include_prompt': True})\x1b[0m            \x1b[1;32m\u2502\x1b[0m\n\x1b[1;32m\u2502\x1b[0m \x1b[34m  (2): Normalize()\x1b[0m                                                                                              \x1b[1;32m\u2502\x1b[0m\n\x1b[1;32m\u2502\x1b[0m \x1b[34m), model='all-MiniLM-L6-v2', preprocess=None, postprocess=Code(identifier='postprocess', \x1b[0m                       \x1b[1;32m\u2502\x1b[0m\n\x1b[1;32m\u2502\x1b[0m \x1b[34muuid='fadfa78c-4c6b-4914-885a-e1372da93078', code='from superduper import code\\n\\n@code\\ndef \x1b[0m                 \x1b[1;32m\u2502\x1b[0m\n\x1b[1;32m\u2502\x1b[0m \x1b[34mpostprocess(x):\\n    return x.tolist()\\n')), select=docu.find(), active=True, predict_kwargs={'max_chunk_size':\x1b[0m \x1b[1;32m\u2502\x1b[0m\n\x1b[1;32m\u2502\x1b[0m \x1b[34m50}), compatible_listener=None, measure=<VectorIndexMeasureType.cosine: 'cosine'>, metric_values={}), \x1b[0m          \x1b[1;32m\u2502\x1b[0m\n\x1b[1;32m\u2502\x1b[0m \x1b[34mSequentialModel(identifier='rag', uuid='fa46eb15-112c-496f-965f-c935494825c5', signature='**kwargs', \x1b[0m           \x1b[1;32m\u2502\x1b[0m\n\x1b[1;32m\u2502\x1b[0m \x1b[34mdatatype=None, output_schema=None, flatten=False, model_update_kwargs={}, predict_kwargs={}, compute_kwargs={},\x1b[0m \x1b[1;32m\u2502\x1b[0m\n\x1b[1;32m\u2502\x1b[0m \x1b[34mvalidation=None, metric_values={}, num_workers=0, models=[RetrievalPrompt(identifier='my-prompt', \x1b[0m              \x1b[1;32m\u2502\x1b[0m\n\x1b[1;32m\u2502\x1b[0m \x1b[34muuid='ded3b9b8-828d-41a4-bc37-02217fe0bc08', signature='**kwargs', datatype=None, output_schema=None, \x1b[0m          \x1b[1;32m\u2502\x1b[0m\n\x1b[1;32m\u2502\x1b[0m \x1b[34mflatten=False, model_update_kwargs={}, predict_kwargs={}, compute_kwargs={}, validation=None, metric_values={},\x1b[0m \x1b[1;32m\u2502\x1b[0m\n\x1b[1;32m\u2502\x1b[0m \x1b[34mnum_workers=0, preprocess=None, postprocess=Code(identifier='get_output', \x1b[0m                                      \x1b[1;32m\u2502\x1b[0m\n\x1b[1;32m\u2502\x1b[0m \x1b[34muuid='c1d6fb70-b6c7-42b4-8872-8bfd243ddf07', code=\"from superduper import code\\n\\n@code\\ndef get_output(c):\\n\x1b[0m \x1b[1;32m\u2502\x1b[0m\n\x1b[1;32m\u2502\x1b[0m \x1b[34mreturn [r['txt'] for r in c]\\n\"), select=docu.like({'txt': '<var",":prompt",">'}, vector_index=\"my-index\", \x1b[0m           \x1b[1;32m\u2502\x1b[0m\n\x1b[1;32m\u2502\x1b[0m \x1b[34mn=5).find().limit(10), prompt_explanation=\"HERE ARE SOME FACTS SEPARATED BY '---' IN OUR DATA REPOSITORY WHICH \x1b[0m \x1b[1;32m\u2502\x1b[0m\n\x1b[1;32m\u2502\x1b[0m \x1b[34mWILL HELP YOU ANSWER THE QUESTION.\", prompt_introduction='HERE IS THE QUESTION WHICH YOU SHOULD ANSWER BASED \x1b[0m   \x1b[1;32m\u2502\x1b[0m\n\x1b[1;32m\u2502\x1b[0m \x1b[34mONLY ON THE PREVIOUS FACTS:', join='\\n---\\n'), OpenAIChatCompletion(identifier='gpt-3.5-turbo', \x1b[0m                \x1b[1;32m\u2502\x1b[0m\n\x1b[1;32m\u2502\x1b[0m \x1b[34muuid='bc04fcdf-3217-4cb7-9517-38fc632fc8f7', signature='singleton', datatype=None, output_schema=None, \x1b[0m         \x1b[1;32m\u2502\x1b[0m\n\x1b[1;32m\u2502\x1b[0m \x1b[34mflatten=False, model_update_kwargs={}, predict_kwargs={}, compute_kwargs={}, validation=None, metric_values={},\x1b[0m \x1b[1;32m\u2502\x1b[0m\n\x1b[1;32m\u2502\x1b[0m \x1b[34mnum_workers=0, model='gpt-3.5-turbo', max_batch_size=8, openai_api_key=None, openai_api_base=None, \x1b[0m             \x1b[1;32m\u2502\x1b[0m\n\x1b[1;32m\u2502\x1b[0m \x1b[34mclient_kwargs={}, batch_size=1, prompt='')])]\x1b[0m                                                                   \x1b[1;32m\u2502\x1b[0m\n\x1b[1;32m\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256f\x1b[0m\n\x1b[34m\u256d\u2500\x1b[0m\x1b[34m\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\x1b[0m\x1b[34m Component Metadata \x1b[0m\x1b[34m\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\x1b[0m\x1b[34m\u2500\u256e\x1b[0m\n\x1b[34m\u2502\x1b[0m \x1b[33mVariables\x1b[0m                                                                                                       \x1b[34m\u2502\x1b[0m\n\x1b[34m\u2502\x1b[0m \x1b[35mprompt\x1b[0m                                                                                                          \x1b[34m\u2502\x1b[0m\n\x1b[34m\u2502\x1b[0m                                                                                                                 \x1b[34m\u2502\x1b[0m\n\x1b[34m\u2502\x1b[0m                                                                                                                 \x1b[34m\u2502\x1b[0m\n\x1b[34m\u2502\x1b[0m \x1b[33mLeaves\x1b[0m                                                                                                          \x1b[34m\u2502\x1b[0m\n\x1b[34m\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256f\x1b[0m"]})})]})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>m});var r=t(6540);const o={},s=r.createContext(o);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function m(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);