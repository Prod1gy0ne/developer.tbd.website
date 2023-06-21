"use strict";(self.webpackChunkdeveloper_tbd_website=self.webpackChunkdeveloper_tbd_website||[]).push([[8203],{75942:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const o={},i="Web5 JS SDK",s={unversionedId:"api/web5-api",id:"api/web5-api",title:"Web5 JS SDK",description:"Making developing with Web5 components at least 5 times easier to work with.",source:"@site/docs/api/web5-api.mdx",sourceDirName:"api",slug:"/api/web5-api",permalink:"/docs/api/web5-api",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"API Reference",permalink:"/docs/api/"},next:{title:"Glossary",permalink:"/docs/glossary"}},l={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Docs",id:"docs",level:2},{value:"Installation",id:"installation",level:3},{value:"Importing the SDK",id:"importing-the-sdk",level:3},{value:"<strong><code>Web5.connect()</code></strong>",id:"web5connect",level:3},{value:"<strong>Response</strong>",id:"response",level:4},{value:"<strong><code>Record</code> instances from responses</strong>",id:"record-instances-from-responses",level:3},{value:"<strong><code>web5.dwn.records.query()</code></strong>",id:"web5dwnrecordsquery",level:3},{value:"<strong>Request</strong>",id:"request",level:4},{value:"<strong><code>web5.dwn.records.create()</code></strong>",id:"web5dwnrecordscreate",level:3},{value:"<strong>Request</strong>",id:"request-1",level:4},{value:"<strong><code>web5.dwn.records.write()</code></strong>",id:"web5dwnrecordswrite",level:3},{value:"<strong>Request</strong>",id:"request-2",level:4},{value:"<strong><code>web5.dwn.records.read()</code></strong>",id:"web5dwnrecordsread",level:3},{value:"<strong>Request</strong>",id:"request-3",level:4},{value:"<strong><code>web5.dwn.records.delete()</code></strong>",id:"web5dwnrecordsdelete",level:3},{value:"<strong>Request</strong>",id:"request-4",level:4},{value:"<strong><code>web5.dwn.protocols.configure()</code></strong>",id:"web5dwnprotocolsconfigure",level:3},{value:"<strong>Request</strong>",id:"request-5",level:4},{value:"<strong><code>web5.dwn.protocols.query()</code></strong>",id:"web5dwnprotocolsquery",level:3},{value:"<strong>Request</strong>",id:"request-6",level:4},{value:"<strong><code>web5.did.create(method, options)</code></strong>",id:"web5didcreatemethod-options",level:3}],p={toc:d},m="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"web5-js-sdk"},"Web5 JS SDK"),(0,r.kt)("p",null,"Making developing with Web5 components at least 5 times easier to work with."),(0,r.kt)("p",null,"\u26a0\ufe0f WEB5 JS SDK IS CURRENTLY IN TECH PREVIEW \u26a0\ufe0f"),(0,r.kt)("p",null,"The SDK is currently still under active development, but having entered the Tech Preview phase there is now a drive to avoid unnecessary changes unless backwards compatibility is provided. Additional functionality will be added in the lead up to 1.0 final, and modifications will be made to address issues and community feedback."),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Web5 consists of the following components:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Decentralized Identifiers"),(0,r.kt)("li",{parentName:"ul"},"Verifiable Credentials"),(0,r.kt)("li",{parentName:"ul"},"DWeb Node personal datastores")),(0,r.kt)("p",null,"The SDK sets out to gather the most oft used functionality from all three of these\npillar technologies to provide a simple library that is as close to effortless as\npossible."),(0,r.kt)("h2",{id:"docs"},"Docs"),(0,r.kt)("h3",{id:"installation"},"Installation"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"NPM")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"npm install @tbd54566975/web5\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"CDNs")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"https://unpkg.com/@tbd54566975/web5@0.7.0/dist/browser.js\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"https://cdn.jsdelivr.net/npm/@tbd54566975/web5@0.7.0/dist/browser.mjs\n")),(0,r.kt)("h3",{id:"importing-the-sdk"},"Importing the SDK"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Web5 } from '@tbd54566975/web5';\n")),(0,r.kt)("p",null,"or"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Web5 } from CDN_LINK_HERE;\n")),(0,r.kt)("h3",{id:"web5connect"},(0,r.kt)("strong",{parentName:"h3"},(0,r.kt)("inlineCode",{parentName:"strong"},"Web5.connect()"))),(0,r.kt)("p",null," Enables an app to request connection to a user's local identity app (like a desktop or mobile agent - work is underway for reference apps of each), or generate an in-app DID to represent the user (e.g. if the user does not have an identity app)."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"NOTE:")," The outputs of this method invocation with be used throughout the other API methods below.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const { web5, did: myDid } = await Web5.connect();\n")),(0,r.kt)("h4",{id:"response"},(0,r.kt)("strong",{parentName:"h4"},"Response")),(0,r.kt)("p",null,"An invocation of ",(0,r.kt)("inlineCode",{parentName:"p"},"Web5.connect()")," produces the following items in response:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"web5")),"  - ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"em"},"Web5 instance")),": A class instance that enables access to a locally running DWeb Node, DID interaction methods, and other capabilities related to the connected DID."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"did")),"  - ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"em"},"DID instance")),": A class instance representing the Decentralized Identifier of the DID that was created or attained connection to.")),(0,r.kt)("h3",{id:"record-instances-from-responses"},(0,r.kt)("strong",{parentName:"h3"},(0,r.kt)("inlineCode",{parentName:"strong"},"Record")," instances from responses")),(0,r.kt)("p",null,"Every modifying method (",(0,r.kt)("inlineCode",{parentName:"p"},"create"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"write"),", etc.) and the ",(0,r.kt)("inlineCode",{parentName:"p"},"entries")," from queries return an instance of a ",(0,r.kt)("inlineCode",{parentName:"p"},"Record")," class, which is a representation of the Record(s) being referenced. ",(0,r.kt)("inlineCode",{parentName:"p"},"Record")," class instances offer the following properties and methods:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"id")),"  - ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"em"},"string")),": The unique identifier based on the record entry's composition. Note: all entries across all records are deterministically unique."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"descriptor")),"  - ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"em"},"object")),": The descriptor object for the constructed DWeb Node message."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"data")),"  - ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"em"},"object")),": a object with the following convenience methods that read out the data of the record entry in the following formats:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"text")),"  - ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"em"},"function")),": produces a textual representation of the data."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"json")),"  - ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"em"},"function")),": if the value is JSON data, this method will return a parsed JSON object."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"stream")),"  - ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"em"},"function")),": returns the raw stream of bytes for the data."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"send")),"  - ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"em"},"function")),": sends the record represented by the instance to a specified DID's DWeb Node endpoints."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"update")),"  - ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"em"},"function")),": takes in a new request object matching the expected method signature of a ",(0,r.kt)("inlineCode",{parentName:"li"},"write")," and overwrites the record. This is a convenience method that allows you to easily overwrite records with less verbosity."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"delete")),"  - ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"em"},"function")),": generates a ",(0,r.kt)("inlineCode",{parentName:"li"},"delete")," entry tombstone for the record. This is a convenience method that allows you to easily delete records with less verbosity.")),(0,r.kt)("h3",{id:"web5dwnrecordsquery"},(0,r.kt)("strong",{parentName:"h3"},(0,r.kt)("inlineCode",{parentName:"strong"},"web5.dwn.records.query()"))),(0,r.kt)("p",null,"Method for querying the DWeb Node of a provided ",(0,r.kt)("inlineCode",{parentName:"p"},"target")," DID."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// This invocation will query the user's own DWeb Nodes\nconst { records } = await web5.dwn.records.query({\n  message: {\n    filter: {\n      schema: 'https://schema.org/Playlist',\n      dataFormat: 'application/json'\n    }\n  }\n});\n\n\nconsole.log(records) // an array of record entries from Bob's DWeb Nodes\n\n// This invocation will query Bob's DWeb Nodes\nconst { records } = await web5.dwn.records.query({\n  from: 'did:example:bob',\n  message: {\n    filter: {\n      protocol: 'https://music.org/protocol',\n      schema: 'https://schema.org/Playlist',\n      dataFormat: 'application/json'\n    }\n  }\n});\n\nconsole.log(records) // an array of record entries from Bob's DWeb Nodes\n")),(0,r.kt)("h4",{id:"request"},(0,r.kt)("strong",{parentName:"h4"},"Request")),(0,r.kt)("p",null,"The query ",(0,r.kt)("inlineCode",{parentName:"p"},"request")," must contain the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"from"))," - ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"em"},"DID string"))," (",(0,r.kt)("em",{parentName:"li"},"optional"),"): the decentralized identifier of the DWeb Node the query will fetch results from."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"message")),"  - ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"em"},"object")),": the properties of the DWeb Node Message Descriptor that will be used to construct a valid record query:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"filter")),"  - ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"em"},"object")),": properties against which results of the query will be filtered:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"protocol"))," - ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"em"},"URI string"))," (",(0,r.kt)("em",{parentName:"li"},"optional"),"): the URI of the protocol bucket in which to query."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"schema"))," - ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"em"},"URI string"))," (",(0,r.kt)("em",{parentName:"li"},"optional"),"): the URI of the protocol bucket in which to query."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"dataFormat"))," - ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"em"},"Media Type string"))," (",(0,r.kt)("em",{parentName:"li"},"optional"),"): the IANA string corresponding with the format of the data to filter for. See IANA's Media Type list here: ",(0,r.kt)("a",{parentName:"li",href:"https://www.iana.org/assignments/media-types/media-types.xhtml"},"https://www.iana.org/assignments/media-types/media-types.xhtml"))))))),(0,r.kt)("h3",{id:"web5dwnrecordscreate"},(0,r.kt)("strong",{parentName:"h3"},(0,r.kt)("inlineCode",{parentName:"strong"},"web5.dwn.records.create()"))),(0,r.kt)("p",null,"Method for creating a new record and storing it in the user's local DWeb Node, remote DWeb Nodes, or another party's DWeb Nodes (if permitted)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// this creates a record and stores it in the user's local DWeb Node\nconst { record } = await web5.dwn.records.create({\n  data: 'Hello World!',\n  message: {\n    dataFormat: 'text/plain'\n  }\n});\n\nconsole.log(await record.data.text()) // logs \"Hello World!\"\nconst { status } = await record.send(myDid) // send the record to the user's remote DWeb Nodes\nconst { status } = await record.send('did:example:bob') // send the newly generated record to Bob's DWeb Nodes\n\n// this creates a record, but does not store it in the user's local DWeb Node\nconst { record } = await web5.dwn.records.create({\n  store: false,\n  data: 'Hello again, World!',\n  message: {\n    dataFormat: 'text/plain'\n  }\n});\n\nconst { status } = await record.send('did:example:bob') // send the newly generated record to Bob's DWeb Nodes\n")),(0,r.kt)("h4",{id:"request-1"},(0,r.kt)("strong",{parentName:"h4"},"Request")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"create")," request object is composed as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"store")),"  - ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"em"},"boolean")),": tells the create function whether or not to store the record in the user's local DWeb Node. (you might pass ",(0,r.kt)("inlineCode",{parentName:"li"},"false")," if you didn't want to retain a copy of the record for yourself)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"data")),"  - ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"em"},"text|object|file|blob")),": The data payload of the record."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"message")),"  - ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"em"},"object")),": The properties of the DWeb Node Message Descriptor that will be used to construct a valid record query:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"protocol"))," - ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"em"},"URI string"))," (",(0,r.kt)("em",{parentName:"li"},"optional"),"): the URI of the protocol under which the record will be bucketed."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"schema"))," - ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"em"},"URI string"))," (",(0,r.kt)("em",{parentName:"li"},"optional"),"): the URI of the schema under which the record will be bucketed."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"dataFormat"))," - ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"em"},"Media Type string"))," (",(0,r.kt)("em",{parentName:"li"},"optional"),"): the IANA string corresponding with the format of the data the record will be bucketed. See IANA's Media Type list here: ",(0,r.kt)("a",{parentName:"li",href:"https://www.iana.org/assignments/media-types/media-types.xhtml"},"https://www.iana.org/assignments/media-types/media-types.xhtml"))))),(0,r.kt)("h3",{id:"web5dwnrecordswrite"},(0,r.kt)("strong",{parentName:"h3"},(0,r.kt)("inlineCode",{parentName:"strong"},"web5.dwn.records.write()"))),(0,r.kt)("p",null,"Method for writing an update to a record in the user's local DWeb Node, remote DWeb Nodes, or another party's DWeb Nodes (if permitted)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// this creates a record and stores it in the user's local DWeb Node\nconst { record } = await web5.dwn.records.create({\n  data: 'Hello World!',\n  message: {\n    dataFormat: 'text/plain'\n  }\n});\n\nconsole.log(await record.data.text()) // logs \"Hello World!\"\nconst { status } = await record.send(myDid) // send the record to the user's remote DWeb Nodes\nconst { status } = await record.send('did:example:bob') // send the newly generated record to Bob's DWeb Nodes\n\n// this overwrites the existing a record, but does not store it in the user's local DWeb Node\nconst { record } = await web5.dwn.records.write({\n  data: 'Hello again, World!',\n  message: {\n    recordId: record.id,\n    dataFormat: 'text/plain'\n  }\n});\n\nconsole.log(await record.data.text()) // logs \"Hello again, World!\"\nconst { status } = await record.send(myDid) // send updated record to the user's remote DWeb Nodes\nconst { status } = await record.send('did:example:bob') // send the updated record to Bob's DWeb Nodes\n\n// A convenience method of the Record instance\nconst { status } = await record.update({\n  data: 'Hello for a final time, world'\n})\n")),(0,r.kt)("h4",{id:"request-2"},(0,r.kt)("strong",{parentName:"h4"},"Request")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"write")," request object is composed as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"store")),"  - ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"em"},"boolean")),": tells the ",(0,r.kt)("inlineCode",{parentName:"li"},"write")," function whether or not to store the record in the user's local DWeb Node. (you might pass ",(0,r.kt)("inlineCode",{parentName:"li"},"false")," if you didn't want to retain a copy of the record for yourself)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"data")),"  - ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"em"},"text|object|file|blob")),": The data payload of the record."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"message")),"  - ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"em"},"object")),": The properties of the DWeb Node Message Descriptor that will be used to construct a valid record query:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"protocol"))," - ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"em"},"URI string"))," (",(0,r.kt)("em",{parentName:"li"},"optional"),"): the URI of the protocol under which the record will be bucketed."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"schema"))," - ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"em"},"URI string"))," (",(0,r.kt)("em",{parentName:"li"},"optional"),"): the URI of the schema under which the record will be bucketed."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"dataFormat"))," - ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"em"},"Media Type string"))," (",(0,r.kt)("em",{parentName:"li"},"optional"),"): the IANA string corresponding with the format of the data the record will be bucketed. See IANA's Media Type list here: ",(0,r.kt)("a",{parentName:"li",href:"https://www.iana.org/assignments/media-types/media-types.xhtml"},"https://www.iana.org/assignments/media-types/media-types.xhtml"))))),(0,r.kt)("h3",{id:"web5dwnrecordsread"},(0,r.kt)("strong",{parentName:"h3"},(0,r.kt)("inlineCode",{parentName:"strong"},"web5.dwn.records.read()"))),(0,r.kt)("p",null,"Method for reading a record stored in the DWeb Node of the user's local DWeb Node, remote DWeb Nodes, or another party's DWeb Nodes (if permitted)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// Reads the indicated record from the user's DWeb Nodes\nconst { record } = await web5.dwn.records.read({\n  message: {\n    recordId: 'bfw35evr6e54c4cqa4c589h4cq3v7w4nc534c9w7h5'\n  }\n});\n\nconsole.log(await record.data.text()) // assuming the record is a text payload, logs the text\n\n// Reads the indicated record from Bob's DWeb Nodes\nconst { record } = await web5.dwn.records.read({\n  from: 'did:example:bob',\n  message: {\n    recordId: 'bfw35evr6e54c4cqa4c589h4cq3v7w4nc534c9w7h5'\n  }\n});\n\nconsole.log(await record.data.text()) // assuming the record is a text payload, logs the text\n")),(0,r.kt)("h4",{id:"request-3"},(0,r.kt)("strong",{parentName:"h4"},"Request")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"read")," request object is composed as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"from"))," - ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"em"},"DID string"))," (",(0,r.kt)("em",{parentName:"li"},"optional"),"): The DID of the DWeb Node the read request will fetch the indicated record from."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"message")),"  - ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"em"},"object")),": The properties of the DWeb Node Message Descriptor that will be used to construct a valid DWeb Node message.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"recordId")),"  - ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"em"},"string")),": the required record ID string that identifies the record data you are fetching.")))),(0,r.kt)("h3",{id:"web5dwnrecordsdelete"},(0,r.kt)("strong",{parentName:"h3"},(0,r.kt)("inlineCode",{parentName:"strong"},"web5.dwn.records.delete()"))),(0,r.kt)("p",null,"Method for deleting a record stored in the DWeb Node of the user's local DWeb Node, remote DWeb Nodes, or another party's DWeb Nodes (if permitted)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// Deletes the indicated record from the user's DWeb Node\nconst { record } = await web5.dwn.records.delete({\n  message: {\n    recordId: 'bfw35evr6e54c4cqa4c589h4cq3v7w4nc534c9w7h5'\n  }\n});\n\n// Deletes the indicated record from Bob's DWeb Node\nconst { record } = await web5.dwn.records.delete({\n  from: 'did:example:bob',\n  message: {\n    recordId: 'bfw35evr6e54c4cqa4c589h4cq3v7w4nc534c9w7h5'\n  }\n});\n")),(0,r.kt)("h4",{id:"request-4"},(0,r.kt)("strong",{parentName:"h4"},"Request")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"delete")," request object is composed as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"from"))," - ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"em"},"DID string"))," (",(0,r.kt)("em",{parentName:"li"},"optional"),"): The DID of the DWeb Node the delete tombstone will be sent to."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"message")),"  - ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"em"},"object")),": The properties of the DWeb Node Message Descriptor that will be used to construct a valid DWeb Node message.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"recordId")),"  - ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"em"},"string")),": the required record ID string that identifies the record being deleted.")))),(0,r.kt)("h3",{id:"web5dwnprotocolsconfigure"},(0,r.kt)("strong",{parentName:"h3"},(0,r.kt)("inlineCode",{parentName:"strong"},"web5.dwn.protocols.configure()"))),(0,r.kt)("p",null,"Method for configuring a protocol definition in the DWeb Node of the user's local DWeb Node, remote DWeb Nodes, or another party's DWeb Nodes (if permitted)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const { protocol } = await web5.dwn.protocols.configure({\n  message: {\n    definition: {\n      protocol: "https://photos.org/protocol",\n      types: {\n        "album": {\n          "schema": "https://photos.org/protocol/album",\n          "dataFormat": [ "application/json" ]\n        },\n        "photo": {\n          "schema": "https://photos.org/protocols/photo",\n          "dataFormat": [ "application/json" ]\n        },\n        "binaryImage": {\n          "dataFormat": [\n            "image/png",\n            "jpeg",\n            "gif"\n          ]\n        }\n      },\n      structure: {\n        "album": {\n          $actions: [\n            {\n              who: "recipient",\n              can: "read"\n            }\n          ]\n        },\n        "photo": {\n          $actions: [\n            {\n              who: "recipient",\n              can: "read"\n            }\n          ],\n          "binaryImage": {\n            $actions: [\n              {\n                who: "author",\n                of: "photo",\n                can: "write"\n              }\n            ]\n          }\n        }\n      }\n    }\n  }\n});\n\nprotocol.send(myDid) // sends the protocol configuration to the user\'s other DWeb Nodes.\n')),(0,r.kt)("h4",{id:"request-5"},(0,r.kt)("strong",{parentName:"h4"},"Request")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"configure")," request object is composed as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"from")),"  - ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"em"},"string")),": The decentralized identifier of the DID signing the query. This may be the same as the ",(0,r.kt)("inlineCode",{parentName:"li"},"target")," parameter if the target and the signer of the query are the same entity, which is common for an app querying the DWeb Node of its own user."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"message")),"  - ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"em"},"object")),": The properties of the DWeb Node Message Descriptor that will be used to construct a valid DWeb Node message.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"definition")),"  - ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"em"},"object")),": an object that defines the enforced composition of the protocol.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"protocol")),"  - ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"em"},"URI string")),": a URI that represents the protocol being configured."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"types")),"  - ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"em"},"object")),": an object that defines the records that can be used in the ",(0,r.kt)("inlineCode",{parentName:"li"},"structure")," graph of the ",(0,r.kt)("inlineCode",{parentName:"li"},"definition")," object. The following properties are optional constraints you can set for the type being defined:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"schema"))," - ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"em"},"URI string"))," (",(0,r.kt)("em",{parentName:"li"},"optional"),"): the URI of the schema under which the record will be bucketed."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"dataFormat"))," - ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"em"},"Media Type string"))," (",(0,r.kt)("em",{parentName:"li"},"optional"),"): the IANA string corresponding with the format of the data the record will be bucketed. See IANA's Media Type list here: ",(0,r.kt)("a",{parentName:"li",href:"https://www.iana.org/assignments/media-types/media-types.xhtml"},"https://www.iana.org/assignments/media-types/media-types.xhtml")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"structure")),"  - ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"em"},"object")),": an object that defines the structure of a protocol, including data relationships and constraints on which entities can perform various activities. Fields under the ",(0,r.kt)("inlineCode",{parentName:"li"},"structure")," object of the Protocol definition are expected to be either type references matching those defined in the ",(0,r.kt)("inlineCode",{parentName:"li"},"types")," object. The type structures are recursive, so types form a graph and each type can have within it further attached types or the following rule statements that are all denoted with the prefix ",(0,r.kt)("inlineCode",{parentName:"li"},"$"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"$actions")),"  - ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"em"},"array")),": one or more rule objects that expose various allowed actions to actors (",(0,r.kt)("inlineCode",{parentName:"li"},"author"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"recipient"),"), composed as follows:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"who")),"  - ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"em"},"string")),": the actor (",(0,r.kt)("inlineCode",{parentName:"li"},"author"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"recipient"),") that is being permitted to invoke a given action."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"of")),"  - ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"em"},"string")),": the protocol path that refers to the record subject. Using the above example protocol, the protocol path to ",(0,r.kt)("inlineCode",{parentName:"li"},"binaryImage")," would be ",(0,r.kt)("inlineCode",{parentName:"li"},"photo/binaryImage"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"can")),"  - ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"em"},"string")),": the action being permitted by the rule.")))))))))),(0,r.kt)("h3",{id:"web5dwnprotocolsquery"},(0,r.kt)("strong",{parentName:"h3"},(0,r.kt)("inlineCode",{parentName:"strong"},"web5.dwn.protocols.query()"))),(0,r.kt)("p",null,"Method for querying a DID's DWeb Nodes for the presence of a protocol. This method is useful in detecting what protocols a given DID has installed to enable interaction over the protocol."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const { protocols } = await web5.dwn.protocols.query({\n  message: {\n    filter: {\n      protocol: 'https://music.org/protocol'\n    }\n  }\n});\n\nconsole.log(protocols) // logs an array of protocol configurations installed on the user's own DWeb Node\n\nconst { protocols } = await web5.dwn.protocols.query({\n  from: 'did:example:bob',\n  message: {\n    filter: {\n      protocol: 'https://music.org/protocol'\n    }\n  }\n});\n\nconsole.log(protocols) // logs an array of protocol configurations installed on Bob's DWeb Node\n")),(0,r.kt)("h4",{id:"request-6"},(0,r.kt)("strong",{parentName:"h4"},"Request")),(0,r.kt)("p",null,"The query ",(0,r.kt)("inlineCode",{parentName:"p"},"request")," must contain the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"from"))," - ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"em"},"DID string"))," (",(0,r.kt)("em",{parentName:"li"},"optional"),"): the decentralized identifier of the DID of the DWeb Node the query will fetch results from."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"message")),"  - ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"em"},"object")),": The properties of the DWeb Node Message Descriptor that will be used to construct a valid record query:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"filter")),"  - ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"em"},"object")),": properties against which results of the query will be filtered:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"protocol"))," - ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"em"},"URI string"))," (",(0,r.kt)("em",{parentName:"li"},"optional"),"): the URI of the protocol bucket in which to query.")))))),(0,r.kt)("h3",{id:"web5didcreatemethod-options"},(0,r.kt)("strong",{parentName:"h3"},(0,r.kt)("inlineCode",{parentName:"strong"},"web5.did.create(method, options)"))),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"create")," method under the ",(0,r.kt)("inlineCode",{parentName:"p"},"did")," object enables generation of DIDs for a supported set of DID Methods. The output is method-specific, and handles things like key generation and assembly of DID Documents that can be published to DID networks."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"NOTE: You do not usually need to manually invoke this, as the ",(0,r.kt)("inlineCode",{parentName:"p"},"Web5.connect()")," method already acquires a DID for the user (either by direct creation or connection to an identity agent app).")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const myDid = await Web5.did.create('ion');\n")))}c.isMDXComponent=!0}}]);