"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[5690],{4015:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>d,metadata:()=>i,toc:()=>a});var r=n(4848),s=n(8453);const d={},c=void 0,i={id:"api/ext/torch/model",title:"model",description:"superduper.ext.torch.model",source:"@site/content/api/ext/torch/model.md",sourceDirName:"api/ext/torch",slug:"/api/ext/torch/model",permalink:"/docs/api/ext/torch/model",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper.io/superduper/blob/main/docs/hr/content/api/ext/torch/model.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"encoder",permalink:"/docs/api/ext/torch/encoder"},next:{title:"training",permalink:"/docs/api/ext/torch/training"}},o={},a=[{value:"<code>create_batch</code>",id:"create_batch",level:2},{value:"<code>torchmodel</code>",id:"torchmodel",level:2},{value:"<code>unpack_batch</code>",id:"unpack_batch",level:2},{value:"<code>TorchModel</code>",id:"torchmodel-1",level:2},{value:"<code>BasicDataset</code>",id:"basicdataset",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"superduper.ext.torch.model"})})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://github.com/superduper/superduper/blob/main/superduper/ext/torch/model.py",children:"Source code"})}),"\n",(0,r.jsx)(t.h2,{id:"create_batch",children:(0,r.jsx)(t.code,{children:"create_batch"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"create_batch(args)\n"})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"args"}),(0,r.jsx)(t.td,{children:"single data point for batching"})]})})]}),"\n",(0,r.jsx)(t.p,{children:"Create a singleton batch in a manner similar to the PyTorch dataloader."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"create_batch(3.).shape\n# torch.Size([1])\nx, y = create_batch([torch.randn(5), torch.randn(3, 7)])\nx.shape\n# torch.Size([1, 5])\ny.shape\n# torch.Size([1, 3, 7])\nd = create_batch(({'a': torch.randn(4)}))\nd['a'].shape\n# torch.Size([1, 4])\n"})}),"\n",(0,r.jsx)(t.h2,{id:"torchmodel",children:(0,r.jsx)(t.code,{children:"torchmodel"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"torchmodel(class_obj)\n"})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"class_obj"}),(0,r.jsx)(t.td,{children:"Class to decorate"})]})})]}),"\n",(0,r.jsxs)(t.p,{children:["A decorator to convert a ",(0,r.jsx)(t.code,{children:"torch.nn.Module"})," into a ",(0,r.jsx)(t.code,{children:"TorchModel"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["Decorate a ",(0,r.jsx)(t.code,{children:"torch.nn.Module"})," so that when it is invoked,\nthe result is a ",(0,r.jsx)(t.code,{children:"TorchModel"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"unpack_batch",children:(0,r.jsx)(t.code,{children:"unpack_batch"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"unpack_batch(args)\n"})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"args"}),(0,r.jsx)(t.td,{children:"a batch of model outputs"})]})})]}),"\n",(0,r.jsx)(t.p,{children:"Unpack a batch into lines of tensor output."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"unpack_batch(torch.randn(1, 10))[0].shape\n# torch.Size([10])\nout = unpack_batch([torch.randn(2, 10), torch.randn(2, 3, 5)])\ntype(out)\n# <class 'list'>\nlen(out)\n# 2\nout = unpack_batch({'a': torch.randn(2, 10), 'b': torch.randn(2, 3, 5)})\n[type(x) for x in out]\n# [<class 'dict'>, <class 'dict'>]\nout[0]['a'].shape\n# torch.Size([10])\nout[0]['b'].shape\n# torch.Size([3, 5])\nout = unpack_batch({'a': {'b': torch.randn(2, 10)}})\nout[0]['a']['b'].shape\n# torch.Size([10])\nout[1]['a']['b'].shape\n# torch.Size([10])\n"})}),"\n",(0,r.jsx)(t.h2,{id:"torchmodel-1",children:(0,r.jsx)(t.code,{children:"TorchModel"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"TorchModel(self,\n     identifier: str,\n     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,\n     uuid: str = None,\n     *,\n     preferred_devices: 't.Sequence[str]' = ('cuda',\n     'mps',\n     'cpu'),\n     device: 't.Optional[str]' = None,\n     trainer: 't.Optional[Trainer]' = None,\n     artifacts: 'dc.InitVar[t.Optional[t.Dict]]' = None,\n     signature: 'Signature' = '*args,\n    **kwargs',\n     datatype: 'EncoderArg' = None,\n     output_schema: 't.Optional[Schema]' = None,\n     flatten: 'bool' = False,\n     model_update_kwargs: 't.Dict' = None,\n     predict_kwargs: 't.Dict' = None,\n     compute_kwargs: 't.Dict' = None,\n     validation: 't.Optional[Validation]' = None,\n     metric_values: 't.Dict' = None,\n     object: 'torch.nn.Module',\n     preprocess: 't.Optional[t.Callable]' = None,\n     preprocess_signature: 'Signature' = 'singleton',\n     postprocess: 't.Optional[t.Callable]' = None,\n     postprocess_signature: 'Signature' = 'singleton',\n     forward_method: 'str' = '__call__',\n     forward_signature: 'Signature' = 'singleton',\n     train_forward_method: 'str' = '__call__',\n     train_forward_signature: 'Signature' = 'singleton',\n     train_preprocess: 't.Optional[t.Callable]' = None,\n     train_preprocess_signature: 'Signature' = 'singleton',\n     collate_fn: 't.Optional[t.Callable]' = None,\n     optimizer_state: 't.Optional[t.Any]' = None,\n     loader_kwargs: 't.Dict' = None) -> None\n"})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"identifier"}),(0,r.jsx)(t.td,{children:"Identifier of the leaf."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"db"}),(0,r.jsx)(t.td,{children:"Datalayer instance."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"uuid"}),(0,r.jsx)(t.td,{children:"UUID of the leaf."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"artifacts"}),(0,r.jsxs)(t.td,{children:["A dictionary of artifacts paths and ",(0,r.jsx)(t.code,{children:"DataType"})," objects"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"signature"}),(0,r.jsx)(t.td,{children:"Model signature."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"datatype"}),(0,r.jsx)(t.td,{children:"DataType instance."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"output_schema"}),(0,r.jsx)(t.td,{children:"Output schema (mapping of encoders)."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"flatten"}),(0,r.jsx)(t.td,{children:"Flatten the model outputs."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"model_update_kwargs"}),(0,r.jsx)(t.td,{children:"The kwargs to use for model update."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"predict_kwargs"}),(0,r.jsx)(t.td,{children:"Additional arguments to use at prediction time."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"compute_kwargs"}),(0,r.jsx)(t.td,{children:"Kwargs used for compute backend job submit. Example (Ray backend): compute_kwargs = dict(resources=...)."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"validation"}),(0,r.jsxs)(t.td,{children:["The validation ",(0,r.jsx)(t.code,{children:"Dataset"})," instances to use."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"metric_values"}),(0,r.jsx)(t.td,{children:"The metrics to evaluate on."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"object"}),(0,r.jsxs)(t.td,{children:["Torch model, e.g. ",(0,r.jsx)(t.code,{children:"torch.nn.Module"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"preprocess"}),(0,r.jsx)(t.td,{children:"Preprocess function, the function to apply to the input"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"preprocess_signature"}),(0,r.jsx)(t.td,{children:"The signature of the preprocess function"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"postprocess"}),(0,r.jsx)(t.td,{children:"The postprocess function, the function to apply to the output"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"postprocess_signature"}),(0,r.jsx)(t.td,{children:"The signature of the postprocess function"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"forward_method"}),(0,r.jsx)(t.td,{children:"The forward method, the method to call on the model"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"forward_signature"}),(0,r.jsx)(t.td,{children:"The signature of the forward method"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"train_forward_method"}),(0,r.jsx)(t.td,{children:"Train forward method, the method to call on the model"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"train_forward_signature"}),(0,r.jsx)(t.td,{children:"The signature of the train forward method"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"train_preprocess"}),(0,r.jsx)(t.td,{children:"Train preprocess function, the function to apply to the input"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"train_preprocess_signature"}),(0,r.jsx)(t.td,{children:"The signature of the train preprocess function"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"collate_fn"}),(0,r.jsx)(t.td,{children:"The collate function for the dataloader"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"optimizer_state"}),(0,r.jsx)(t.td,{children:"The optimizer state"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"loader_kwargs"}),(0,r.jsx)(t.td,{children:"The kwargs for the dataloader"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"trainer"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"Trainer"})," object to train the model"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"preferred_devices"}),(0,r.jsx)(t.td,{children:"The order of devices to use"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"device"}),(0,r.jsx)(t.td,{children:"The device to be used"})]})]})]}),"\n",(0,r.jsx)(t.p,{children:"Torch model. This class is a wrapper around a PyTorch model."}),"\n",(0,r.jsx)(t.h2,{id:"basicdataset",children:(0,r.jsx)(t.code,{children:"BasicDataset"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"BasicDataset(self,\n     items,\n     transform,\n     signature)\n"})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"items"}),(0,r.jsx)(t.td,{children:"items, typically documents"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"transform"}),(0,r.jsx)(t.td,{children:"function, typically a preprocess function"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"signature"}),(0,r.jsx)(t.td,{children:"signature of the transform function"})]})]})]}),"\n",(0,r.jsx)(t.p,{children:"Basic database iterating over a list of documents and applying a transformation."})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>i});var r=n(6540);const s={},d=r.createContext(s);function c(e){const t=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(d.Provider,{value:t},e.children)}}}]);