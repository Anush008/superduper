"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[5359],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},16650:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={},i="Perform change data capture (CDC)",c={unversionedId:"docs/how_to/implement_change_data_capture_with_mongodb",id:"docs/how_to/implement_change_data_capture_with_mongodb",title:"Perform change data capture (CDC)",description:"In a standalone MongoDB deployment, users are required to insert data directly through the",source:"@site/content/docs/how_to/implement_change_data_capture_with_mongodb.md",sourceDirName:"docs/how_to",slug:"/docs/how_to/implement_change_data_capture_with_mongodb",permalink:"/docs/docs/how_to/implement_change_data_capture_with_mongodb",draft:!1,editUrl:"https://github.com/SuperDuperDB/superduperdb/tree/main/docs/content/docs/how_to/implement_change_data_capture_with_mongodb.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"How to connect your datastore to LanceDB vector-search",permalink:"/docs/docs/how_to/connect_datastore_to_lancedb_vector_search"},next:{title:"Implementing downstream models with SuperDuperDB",permalink:"/docs/docs/how_to/implement_downstream_models"}},s={},l=[],p={toc:l},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"perform-change-data-capture-cdc"},"Perform change data capture (CDC)"),(0,r.kt)("p",null,"In a standalone MongoDB deployment, users are required to insert data directly through the\nSuperDuperDB ",(0,r.kt)("inlineCode",{parentName:"p"},"Datalayer")," or client (which triggers the ",(0,r.kt)("inlineCode",{parentName:"p"},"Datalayer"),"). For use-cases\nwith multiple users, stakeholders, and potentially automated data-updates on the database,\nthis is not sufficient. For that reason SuperDuperDB supports a paradigm known as\nchange-data-capture (CDC). "),(0,r.kt)("p",null,"In change-data-capture, a service is deployed which listeners the data deployment for changes, and\nreacts to these changes, activating models which are configured to compute outputs over new data."),(0,r.kt)("p",null,"In this notebook, we demonstrate how to use CDC with SuperDuperDB."),(0,r.kt)("p",null,"The notebook requires that a MongoDB replica set has been set up. Read about how to do that ",(0,r.kt)("a",{parentName:"p",href:"replicasetup"},"here"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import pymongo\nimport sys\n\nsys.path.append('../')\n\nfrom superduperdb.ext.numpy.array import array\nfrom superduperdb.db.mongodb.query import Collection\nfrom superduperdb import superduper\nfrom superduperdb.container.listener import Listener\nfrom superduperdb.container.vector_index import VectorIndex\nfrom superduperdb.db.base.cdc import DatabaseListener\nfrom superduperdb.container.document import Document as D\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"db = pymongo.MongoClient().documents\ndb = superduper(db)\n\ncollection = Collection('cdc_example')\n")),(0,r.kt)("p",null,"Insert the data into ",(0,r.kt)("inlineCode",{parentName:"p"},"documents")," collection"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'data = [\n  {\n    "title": "Politics of Armenia",\n    "abstract": "The politics of Armenia take place in the framework of the parliamentary representative democratic republic of Armenia, whereby the President of Armenia is the head of state and the Prime Minister of Armenia the head of government, and of a multi-party system. Executive power is exercised by the President and the Government."\n  },\n  {\n    "title": "Foreign relations of Armenia",\n    "abstract": "Since its independence, Armenia has maintained a policy of complementarism by trying to have positive and friendly relations with Iran, Russia, and the West, including the United States and the European Union.\u2013 \\"Armenian Foreign Policy Between Russia, Iran And U."\n  },\n  {\n    "title": "Demographics of American Samoa",\n    "abstract": "This article is about the demographics of American Samoa, including population density, ethnicity, education level, health of the populace, economic status, religious affiliations and other aspects of the population. American Samoa is an unincorporated territory of the United States located in the South Pacific Ocean."\n  },\n  {\n    "title": "Analysis",\n    "abstract": "Analysis is the process of breaking a complex topic or substance into smaller parts in order to gain a better understanding of it. The technique has been applied in the study of mathematics and logic since before Aristotle (384\u2013322 B."\n  }\n]\n\ndata = [D(d) for d in data]\n\ndb.execute(collection.insert_many(data))\n')),(0,r.kt)("p",null,"Create a vector index listener.\nThis consist a indexing listener (SentenceTransformer) model to vectorize a key."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import sentence_transformers \nfrom superduperdb.container.model import Model\n\nmodel = Model(\n    identifier='all-MiniLM-L6-v2',\n    object=sentence_transformers.SentenceTransformer('all-MiniLM-L6-v2'),\n    encoder=array('float32', shape=(384,)),\n    predict_method='encode',\n    batch_predict=True,\n)\n\ndb.add(VectorIndex(\n    identifier='my-index',\n    indexing_listener=Listener(\n        model=model,\n        key='abstract',\n        select=Collection(name='documents').find()\n    ),\n))\n")),(0,r.kt)("p",null,"Create instance of ",(0,r.kt)("inlineCode",{parentName:"p"},"DatabaseListener")," and start listening the ",(0,r.kt)("inlineCode",{parentName:"p"},"documents")," collection."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"database_listener = DatabaseListener(\n    db=db,\n    identifier='basic-cdc-listener',\n    on=collection,\n)\ndatabase_listener.listen()\n")),(0,r.kt)("p",null,"Check the listener's status"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"database_listener.is_available()\n")),(0,r.kt)("p",null,"You can check information stored by the listener."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"database_listener.info()\n")),(0,r.kt)("p",null,"Add 2 documents and check the info again"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'data = [\n    {\n        "title": "Politics of India",\n        "abstract": "Some despriction 1",\n    }, \n    {\n        "title": "Politics of Asia",\n        "abstract": "some description 2",\n    }\n]\ndoc = db_mongo.test_db.documents.insert_many(data)\n')),(0,r.kt)("p",null,"Check the inserts info again"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"database_listener.info()\n")),(0,r.kt)("p",null,"Check that the vectors synced between LanceDB and MongoDB"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from superduperdb.vector_search.lancedb_client import LanceDBClient\nfrom superduperdb import CFG\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"client = db.vector_database.client\n")),(0,r.kt)("p",null,"Use the identifier to extract the correct table in LanceDB (",(0,r.kt)("inlineCode",{parentName:"p"},"<model>/<key>"),")"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"table = client.get_table('test-st/abstract')\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"table.table.to_pandas()\n")))}u.isMDXComponent=!0}}]);