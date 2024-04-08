"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[7917],{2950:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>r,contentTitle:()=>d,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var s=a(4848),t=a(8453);const i={sidebar_position:5},d="Multimodal DuckDB",o={id:"use_cases/sql_examples/multi-modal-duckdb",title:"Multimodal DuckDB",description:"End-to-End Example Using SQL Databases",source:"@site/content/use_cases/sql_examples/multi-modal-duckdb.md",sourceDirName:"use_cases/sql_examples",slug:"/use_cases/sql_examples/multi-modal-duckdb",permalink:"/docs/use_cases/sql_examples/multi-modal-duckdb",draft:!1,unlisted:!1,editUrl:"https://github.com/SuperDuperDB/superduperdb/blob/main/docs/hr/content/use_cases/sql_examples/multi-modal-duckdb.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"SQL examples",permalink:"/docs/category/sql-examples-1"},next:{title:"Question answering",permalink:"/docs/category/question-answering-1"}},r={},c=[{value:"End-to-End Example Using SQL Databases",id:"end-to-end-example-using-sql-databases",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Connect to Datastore",id:"connect-to-datastore",level:2},{value:"Load Dataset",id:"load-dataset",level:2},{value:"Define Schema",id:"define-schema",level:2},{value:"Add data to the datastore",id:"add-data-to-the-datastore",level:2},{value:"Build SuperDuperDB <code>Model</code> Instances",id:"build-superduperdb-model-instances",level:2},{value:"Create a Vector-Search Index",id:"create-a-vector-search-index",level:2},{value:"Search Images Using Text",id:"search-images-using-text",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"multimodal-duckdb",children:"Multimodal DuckDB"}),"\n",(0,s.jsx)(n.h2,{id:"end-to-end-example-using-sql-databases",children:"End-to-End Example Using SQL Databases"}),"\n",(0,s.jsx)(n.p,{children:"SuperDuperDB offers the flexibility to connect to various SQL databases, including but not limited to:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"MongoDB"}),"\n",(0,s.jsx)(n.li,{children:"PostgreSQL"}),"\n",(0,s.jsx)(n.li,{children:"SQLite"}),"\n",(0,s.jsx)(n.li,{children:"DuckDB"}),"\n",(0,s.jsx)(n.li,{children:"BigQuery"}),"\n",(0,s.jsx)(n.li,{children:"ClickHouse"}),"\n",(0,s.jsx)(n.li,{children:"DataFusion"}),"\n",(0,s.jsx)(n.li,{children:"Druid"}),"\n",(0,s.jsx)(n.li,{children:"Impala"}),"\n",(0,s.jsx)(n.li,{children:"MSSQL"}),"\n",(0,s.jsx)(n.li,{children:"MySQL"}),"\n",(0,s.jsx)(n.li,{children:"Oracle"}),"\n",(0,s.jsx)(n.li,{children:"pandas"}),"\n",(0,s.jsx)(n.li,{children:"Polars"}),"\n",(0,s.jsx)(n.li,{children:"PySpark"}),"\n",(0,s.jsx)(n.li,{children:"Snowflake"}),"\n",(0,s.jsx)(n.li,{children:"Trino"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["In this example, we showcase how to implement multimodal vector-search with DuckDB. This is an extension of multimodal vector-search with MongoDB, which is just slightly easier to set up (see ",(0,s.jsx)(n.a,{href:"https://docs.superduperdb.com/docs/use_cases/items/multimodal_image_search_clip",children:"here"}),"). Everything demonstrated here applies equally to any of the supported SQL databases mentioned above, as well as to tabular data formats on disk, such as ",(0,s.jsx)(n.code,{children:"pandas"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Real life use cases could be vectorizing diverse things like images, texts and searching it efficiently with SuperDuperDB."}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(n.p,{children:"Before proceeding with this use-case, ensure that you have installed the necessary software requirements:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"!pip install superduperdb[demo]\n"})}),"\n",(0,s.jsx)(n.h2,{id:"connect-to-datastore",children:"Connect to Datastore"}),"\n",(0,s.jsxs)(n.p,{children:["The initial step in any ",(0,s.jsx)(n.code,{children:"superduperdb"})," workflow is to connect to your datastore. To connect to a different datastore, simply add a different ",(0,s.jsx)(n.code,{children:"URI"}),", for example, ",(0,s.jsx)(n.code,{children:"postgres://..."}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"import os\nfrom superduperdb import superduper\n\nos.makedirs('.superduperdb', exist_ok=True)\n\n# Let's super duper your SQL database\ndb = superduper('duckdb://.superduperdb/test.ddb')\n"})}),"\n",(0,s.jsx)(n.h2,{id:"load-dataset",children:"Load Dataset"}),"\n",(0,s.jsx)(n.p,{children:"Now that you're connected, add some data to the datastore:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"# Download the coco_sample.zip file\n!curl -O https://superduperdb-public.s3.eu-west-1.amazonaws.com/coco_sample.zip\n\n# Download the captions_tiny.json file\n!curl -O https://superduperdb-public.s3.eu-west-1.amazonaws.com/captions_tiny.json\n\n# Unzip the contents of coco_sample.zip\n!unzip coco_sample.zip\n\n# Create a directory named 'data/coco'\n!mkdir -p data/coco\n\n# Move the 'images_small' directory to 'data/coco/images'\n!mv images_small data/coco/images\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"# Import necessary libraries\nimport json\nimport pandas as pd\nfrom PIL import Image\n\n# Open the 'captions_tiny.json' file and load its contents\nwith open('captions_tiny.json') as f:\n    data = json.load(f)[:500]\n\n# Create a DataFrame from a list comprehension with image paths and captions\ndata = pd.DataFrame([\n    {\n        'image': r['image']['_content']['path'],\n        'captions': r['captions']\n    } for r in data\n])\n\n# Add an 'id' column to the DataFrame\ndata['id'] = pd.Series(data.index).apply(str)\n\n# Create a DataFrame with 'id' and 'image' columns\nimages_df = data[['id', 'image']]\n\n# Open each image using PIL.Image\nimages_df['image'] = images_df['image'].apply(Image.open)\n\n# Create a DataFrame with 'id' and 'captions' columns, exploding the 'captions' column\ncaptions_df = data[['id', 'captions']].explode('captions')\n"})}),"\n",(0,s.jsx)(n.h2,{id:"define-schema",children:"Define Schema"}),"\n",(0,s.jsxs)(n.p,{children:["For this use-case, you need a table with images and another table with text. SuperDuperDB extends standard SQL functionality, allowing developers to define their own data types through the ",(0,s.jsx)(n.code,{children:"Encoder"})," abstraction."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"from superduperdb.backends.ibis.query import Table\nfrom superduperdb.backends.ibis.field_types import dtype\nfrom superduperdb.ext.pillow import pil_image\nfrom superduperdb import Schema\n\n# Define the 'captions' table\ncaptions = Table(\n    'captions',\n    primary_id='id',\n    schema=Schema(\n        'captions-schema',\n        fields={'id': dtype(str), 'captions': dtype(str)},\n    )\n)\n\n# Define the 'images' table\nimages = Table(\n    'images',\n    primary_id='id',\n    schema=Schema(\n        'images-schema',\n        fields={'id': dtype(str), 'image': pil_image},\n    )\n)\n\n# Add the 'captions' and 'images' tables to the SuperDuperDB database\ndb.add(captions)\ndb.add(images)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"add-data-to-the-datastore",children:"Add data to the datastore"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"# Insert data from the 'images_df' DataFrame into the 'images' table\n_ = db.execute(images.insert(images_df))\n\n# Insert data from the 'captions_df' DataFrame into the 'captions' table\n_ = db.execute(captions.insert(captions_df))\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"build-superduperdb-model-instances",children:["Build SuperDuperDB ",(0,s.jsx)(n.code,{children:"Model"})," Instances"]}),"\n",(0,s.jsxs)(n.p,{children:["This use-case utilizes the ",(0,s.jsx)(n.code,{children:"superduperdb.ext.torch"})," extension. Both models used output ",(0,s.jsx)(n.code,{children:"torch"})," tensors, which are encoded with ",(0,s.jsx)(n.code,{children:"tensor"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"import clip\nimport torch\nfrom superduperdb.ext.torch import TorchModel, tensor\n\n# Load the CLIP model\nmodel, preprocess = clip.load(\"RN50\", device='cpu')\n\n# Define a tensor type\nt = tensor(torch.float, shape=(1024,))\n\n# Create a TorchModel for text encoding\ntext_model = TorchModel(\n    identifier='clip_text',\n    object=model,\n    preprocess=lambda x: clip.tokenize(x)[0],\n    encoder=t,\n    forward_method='encode_text',    \n)\n\n# Create a TorchModel for visual encoding\nvisual_model = TorchModel(\n    identifier='clip_image',\n    object=model.visual,    \n    preprocess=preprocess,\n    encoder=t,\n)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"create-a-vector-search-index",children:"Create a Vector-Search Index"}),"\n",(0,s.jsxs)(n.p,{children:["Define a multimodal search index based on the imported models. The ",(0,s.jsx)(n.code,{children:"visual_model"})," is applied to the images, making the ",(0,s.jsx)(n.code,{children:"images"})," table searchable."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"from superduperdb import VectorIndex, Listener\n\n# Add a VectorIndex\ndb.add(\n    VectorIndex(\n        'my-index',\n        indexing_listener=Listener(\n            model=visual_model,\n            key='image',\n            select=images,\n        ),\n        compatible_listener=Listener(\n            model=text_model,\n            key='captions',\n            active=False,\n            select=None,\n        )\n    )\n)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"search-images-using-text",children:"Search Images Using Text"}),"\n",(0,s.jsx)(n.p,{children:"Now, let's demonstrate how to search for images using text queries:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"from superduperdb import Document\n\n# Execute a query to find images with captions containing 'dog catches frisbee'\nres = db.execute(\n    images\n        .like(Document({'captions': 'dog catches frisbee'}), vector_index='my-index', n=10)\n        .limit(10)\n)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Display images"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"# Display the image data from the fourth result in the search\nres[3]['image'].x\n"})})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>d,x:()=>o});var s=a(6540);const t={},i=s.createContext(t);function d(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);