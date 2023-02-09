
import { ButtonGroup } from "@site/src/components";
import { TBDBreadcrumbs } from "@site/src/components";

<head>
  <title>Decentralized Web Node | TBD</title>
  <meta property="og:title" content="Decentralized Web Node | TBD" />
  <meta property="og:description" content="We build decentralized platforms, protocols, and tools that empower every individual to own their data and participate in the global economy." />
  <meta name="description" content="We build decentralized platforms, protocols, and tools that empower every individual to own their data and participate in the global economy." />
  <meta
    property="og:url"
    content="https://developer.tbd.website/projects/dwn-sdk-js/README"
  />
  <link
    rel="apple-touch-icon"
    href="https://developer.tbd.website/img/tbd-fav-icon-main.png"
  />
</head>

<div className="prose prose-pink">

<TBDBreadcrumbs></TBDBreadcrumbs>

<div className="mb-18"><ButtonGroup buttons={[{"type":"button","data":{"label":"Source on GitHub","url":"https://github.com/TBD54566975/dwn-sdk-js","isExternalLink":true,"imageURL":"/img/external-link-blue-icon.svg"}},{"type":"button","data":{"label":"Issues","url":"https://github.com/TBD54566975/dwn-sdk-js/issues","isExternalLink":true,"imageURL":"/img/external-link-blue-icon.svg"}}]} /></div>

<!-- @format -->

# Decentralized Web Node (DWN) SDK

Code Coverage
![Statements](https://img.shields.io/badge/statements-94.74%25-brightgreen.svg?style=flat) ![Branches](https://img.shields.io/badge/branches-94.12%25-brightgreen.svg?style=flat) ![Functions](https://img.shields.io/badge/functions-91.61%25-brightgreen.svg?style=flat) ![Lines](https://img.shields.io/badge/lines-94.74%25-brightgreen.svg?style=flat)

## Introduction

This repository contains a reference implementation of Decentralized Web Node (DWN) as per the [specification](https://identity.foundation/decentralized-web-node/spec/). This specification is in a draft state and very much so a WIP. For the foreseeable future, a lot of the work on DWN will be split across this repo and the repo that houses the specification, which you can find [here](https://github.com/decentralized-identity/decentralized-web-node). The current goal is to produce a beta implementation by March 2023. This won't include all interfaces described in the DWN spec, but will be enough to begin building applications.

Proposals and issues for the specification itself should be submitted as pull requests to the [spec repo](https://github.com/decentralized-identity/decentralized-web-node).

## Installation

```bash
npm install @tbd54566975/dwn-sdk-js
```

## Usage

[API docs](https://tbd54566975.github.io/dwn-sdk-js/)

```javascript
import { Dwn } from '@tbd54566975/dwn-sdk-js';

// cool things
```

_Note: Works in both node and browser environments_

## Project Resources

| Resource                                                                                     | Description                                                                   |
| -------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [CODEOWNERS](https://github.com/TBD54566975/dwn-sdk-js/blob/main/CODEOWNERS)                 | Outlines the project lead(s)                                                  |
| [CODE_OF_CONDUCT.md](https://github.com/TBD54566975/dwn-sdk-js/blob/main/CODE_OF_CONDUCT.md) | Expected behavior for project contributors, promoting a welcoming environment |
| [CONTRIBUTING.md](https://github.com/TBD54566975/dwn-sdk-js/blob/main/CONTRIBUTING.md)       | Developer guide to build, test, run, access CI, chat, discuss, file issues    |
| [GOVERNANCE.md](https://github.com/TBD54566975/dwn-sdk-js/blob/main/GOVERNANCE.md)           | Project governance                                                            |
| [LICENSE](https://github.com/TBD54566975/dwn-sdk-js/blob/main/LICENSE)                       | Apache License, Version 2.0                                                   |


</div>