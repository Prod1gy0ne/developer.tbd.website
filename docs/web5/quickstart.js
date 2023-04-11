import React, { useEffect } from 'react';

import Web5QuickstartIntro from './_quickstart-01-intro.mdx';
import Web5QuickstartPrereqsAndInstallation from './_quickstart-02-prereqs-and-installation.mdx';
import Web5QuickstartCreateDid from './_quickstart-03-create-did.mdx';
import Web5QuickstartRegisterDid from './_quickstart-04-register-did.mdx';
import Web5QuickstartWriteDwn from './_quickstart-05-write-record.mdx';
import Web5QuickstartQueryDwn from './_quickstart-06-query-record.mdx';
import Web5QuickstartReadDwn from './_quickstart-07-read-record.mdx';
import Web5QuickstartDeleteDwn from './_quickstart-08-delete-record.mdx';

import { Web5 } from 'https://cdn.jsdelivr.net/npm/@tbd54566975/web5@0.4.0-unstable.e6470ce-2023.4.01-19-39-11/dist/browser.mjs';

let web5 = new Web5();

function parseDid() {
  try {
    return JSON.parse(didCreateOutputDetailsTextarea.value);
  } catch {
    return undefined;
  }
}

function parseQuery() {
  try {
    return JSON.parse(dwnQueryOutputDetailsTextarea.value);
  } catch {
    return undefined;
  }
}

function update() {
  if (!parseDid()) {
    didRegisterInputButton.disabled = true;
    didRegisterOutput.innerHTML = '';
  }

  if (!didRegisterOutput.innerHTML) {
    dwnWriteInputFile.disabled = true;
    dwnWriteInputButton.disabled = true;
    dwnWriteInputProgress.style.visibility = 'hidden';
    dwnWriteOutputSummary.innerHTML = '...';
    dwnWriteOutputDetailsTextarea.value = '';

    dwnQueryInputButton.disabled = true;
    dwnQueryInputProgress.style.visibility = 'hidden';
    dwnQueryOutputSummary.innerHTML = '...';
    dwnQueryOutputDetailsTextarea.value = '';
  }

  if (!parseQuery()?.entries?.length) {
    dwnReadInputButton.disabled = true;
    dwnReadInputProgress.style.visibility = 'hidden';
    dwnReadOutput.innerHTML = '';

    dwnDeleteInputButton.disabled = true;
    dwnDeleteInputProgress.style.visibility = 'hidden';
    dwnDeleteOutputSummary.innerHTML = '...';
    dwnDeleteOutputDetailsTextarea.value = '';
  }
}

async function didCreate() {
  let did = await web5.did.create('ion');
  return did;
}

async function didRegister(did) {
  await web5.did.register({
    connected: true,
    did: did.id,
    endpoint: 'app://dwn',
    keys: did.keys[0].keypair,
  });
}

async function dwnWritePNGRecord(did, data) {
  let result = await web5.dwn.records.write(did.id, {
    author: did.id,
    data,
    message: {
      dataFormat: 'image/png',
    },
  });
  return result;
}

async function dwnQueryPNGRecords(did) {
  let result = await web5.dwn.records.query(did.id, {
    author: did.id,
    message: {
      filter: {
        dataFormat: 'image/png',
      },
    },
  });
  return result;
}

async function dwnReadDataFromRecordWithId(did, recordId) {
  let result = await web5.dwn.records.read(did.id, {
    author: did.id,
    message: {
      recordId,
    },
  });
  return result;
}

async function dwnDeleteRecordWithId(did, recordId) {
  let result = await web5.dwn.records.delete(did.id, {
    author: did.id,
    message: {
      recordId,
    },
  });
  return result;
}

let didCreateInputButton;
let didCreateOutputSummaryCode;
let didCreateOutputDetailsTextarea;

let didRegisterInputButton;
let didRegisterOutput;

let dwnWriteInputFile;
let dwnWriteInputButton;
let dwnWriteInputProgress;
let dwnWriteOutputSummary;
let dwnWriteOutputDetailsTextarea;

let dwnQueryInputButton;
let dwnQueryInputProgress;
let dwnQueryOutputSummary;
let dwnQueryOutputDetailsTextarea;

let dwnReadInputButton;
let dwnReadInputProgress;
let dwnReadOutput;

let dwnDeleteInputButton;
let dwnDeleteInputProgress;
let dwnDeleteOutputSummary;
let dwnDeleteOutputDetailsTextarea;

function Web5Quickstart() {
  useEffect(() => {
    // query selectors

    didCreateInputButton = document.querySelector('#did-create .input button');
    didCreateInputButton = document.querySelector('#did-create .input button');
    didCreateOutputSummaryCode = document.querySelector(
      '#did-create .output details summary code',
    );
    didCreateOutputDetailsTextarea = document.querySelector(
      '#did-create .output details textarea',
    );

    didRegisterInputButton = document.querySelector(
      '#did-register .input button',
    );
    didRegisterOutput = document.querySelector('#did-register .output');

    dwnWriteInputFile = document.querySelector(
      '#dwn-write .input input[type="file"]',
    );
    dwnWriteInputButton = document.querySelector('#dwn-write .input button');
    dwnWriteInputProgress = document.querySelector(
      '#dwn-write .input progress',
    );
    dwnWriteOutputSummary = document.querySelector(
      '#dwn-write .output details summary',
    );
    dwnWriteOutputDetailsTextarea = document.querySelector(
      '#dwn-write .output details textarea',
    );

    dwnQueryInputButton = document.querySelector('#dwn-query .input button');
    dwnQueryInputProgress = document.querySelector(
      '#dwn-query .input progress',
    );
    dwnQueryOutputSummary = document.querySelector(
      '#dwn-query .output details summary',
    );
    dwnQueryOutputDetailsTextarea = document.querySelector(
      '#dwn-query .output details textarea',
    );

    dwnReadInputButton = document.querySelector('#dwn-read .input button');
    dwnReadInputProgress = document.querySelector('#dwn-read .input progress');
    dwnReadOutput = document.querySelector('#dwn-read .output');

    dwnDeleteInputButton = document.querySelector('#dwn-delete .input button');
    dwnDeleteInputProgress = document.querySelector(
      '#dwn-delete .input progress',
    );
    dwnDeleteOutputSummary = document.querySelector(
      '#dwn-delete .output details summary',
    );
    dwnDeleteOutputDetailsTextarea = document.querySelector(
      '#dwn-delete .output details textarea',
    );

    // event listeners

    didCreateInputButton.addEventListener('click', async () => {
      let did = await didCreate();
      console.log(did);

      didCreateOutputSummaryCode.innerHTML = did.internalId;
      didCreateOutputDetailsTextarea.value = JSON.stringify(did, null, 2);

      didRegisterInputButton.disabled = false;
      console.log(didCreateInputButton);
      didRegisterOutput.innerHTML = '';
      update();
    });

    didCreateOutputDetailsTextarea.addEventListener('input', () => {
      didCreateOutputSummaryCode.innerHTML = parseDid()?.internalId ?? '...';

      didRegisterInputButton.disabled = false;
      didRegisterOutput.innerHTML = '';
      update();
    });

    didRegisterInputButton.addEventListener('click', async () => {
      didRegisterInputButton.disabled = true;

      let did = parseDid();
      await didRegister(did);

      didRegisterOutput.innerHTML = '&#x2714; Registered!';

      dwnWriteInputFile.disabled = false;
      dwnQueryInputButton.disabled = false;
      update();
    });

    // dwnWriteInputFile.addEventListener('input', () => {
    //   dwnWriteInputButton.disabled = false;
    //   dwnWriteOutputSummary.innerHTML = '...';
    //   dwnWriteOutputDetailsTextarea.value = '';
    //   update();
    // });

    // dwnWriteInputButton.addEventListener('click', async () => {
    //   dwnWriteInputButton.disabled = true;
    //   dwnWriteInputProgress.style.visibility = 'visible';

    //   dwnWriteOutputSummary.innerHTML = '...';

    //   let did = parseDid();
    //   for (let file of dwnWriteInputFile.files) {
    //     let buffer = await file.arrayBuffer();
    //     let data = new Uint8Array(buffer);
    //     let result = await dwnWritePNGRecord(did, data);

    //     dwnWriteOutputDetailsTextarea.value +=
    //       JSON.stringify(result, null, 2) + '\n';
    //   }
    //   dwnWriteOutputDetailsTextarea.scrollTop =
    //     dwnWriteOutputDetailsTextarea.scrollHeight;

    //   dwnWriteOutputSummary.innerHTML = '&#x2714; Written!';

    //   dwnWriteInputButton.disabled = false;
    //   dwnWriteInputProgress.style.visibility = 'hidden';
    //   dwnQueryInputButton.disabled = false;
    //   update();
    // });

    // dwnQueryInputButton.addEventListener('click', async () => {
    //   dwnQueryInputButton.disabled = true;
    //   dwnQueryInputProgress.style.visibility = 'visible';

    //   dwnQueryOutputSummary.innerHTML = '...';
    //   dwnQueryOutputDetailsTextarea.value = '';

    //   let did = parseDid();
    //   let result = await dwnQueryPNGRecords(did);

    //   dwnQueryOutputSummary.innerHTML = `&#x2714; Found ${
    //     result.entries?.length ?? 0
    //   } entries!`;
    //   dwnQueryOutputDetailsTextarea.value = JSON.stringify(
    //     result,
    //     (key, value) => (key !== 'encodedData' ? value : undefined),
    //     2,
    //   );

    //   dwnQueryInputButton.disabled = false;
    //   dwnQueryInputProgress.style.visibility = 'hidden';
    //   dwnReadInputButton.disabled = false;
    //   dwnDeleteInputButton.disabled = false;
    //   update();
    // });

    // dwnReadInputButton.addEventListener('click', async () => {
    //   dwnReadInputButton.disabled = true;
    //   dwnReadInputProgress.style.visibility = 'visible';

    //   dwnReadOutput.innerHTML = '';

    //   let did = parseDid();
    //   let query = parseQuery();
    //   for (let { recordId } of query.entries) {
    //     let result = await dwnReadDataFromRecordWithId(did, recordId);
    //     let data = await web5.dwn.SDK.DataStream.toBytes(result.data);

    //     let img = dwnReadOutput.appendChild(document.createElement('img'));
    //     img.src = URL.createObjectURL(new Blob([data]));
    //   }

    //   dwnReadInputButton.disabled = false;
    //   dwnReadInputProgress.style.visibility = 'hidden';
    //   update();
    // });

    // dwnDeleteInputButton.addEventListener('click', async () => {
    //   dwnDeleteInputButton.disabled = true;
    //   dwnDeleteInputProgress.style.visibility = 'visible';

    //   dwnDeleteOutputSummary.innerHTML = '...';

    //   let did = parseDid();
    //   let query = parseQuery();
    //   for (let { recordId } of query.entries) {
    //     let result = await dwnDeleteRecordWithId(did, recordId);
    //     dwnDeleteOutputDetailsTextarea.value +=
    //       JSON.stringify(result, null, 2) + '\n';
    //   }
    //   dwnDeleteOutputDetailsTextarea.scrollTop =
    //     dwnDeleteOutputDetailsTextarea.scrollHeight;

    //   dwnDeleteOutputSummary.innerHTML = `&#x2714; Deleted ${query.entries.length} entries!`;

    //   dwnReadInputButton.disabled = true;
    //   dwnDeleteInputProgress.style.visibility = 'hidden';
    //   update();
    // });
  }, []);
  return (
    <div>
      <Web5QuickstartIntro />

      <Web5QuickstartPrereqsAndInstallation />

      <Web5QuickstartCreateDid />
      <section id="did-create">
        <div className="input">
          <button>Run!</button>
        </div>
        <div className="output">
          <details>
            <summary>
              <code>...</code>
            </summary>
            <textarea></textarea>
          </details>
        </div>
      </section>

      {/* Below is a WIP */}

      <Web5QuickstartRegisterDid />
      <section id="did-register">
        <div className="input">
          <button disabled>Run!</button>
        </div>
        <div className="output"></div>
      </section>

      <Web5QuickstartWriteDwn />

      <section id="dwn-write">
        <h1>Write some data</h1>
        <div className="input">
          <input type="file" accept="image/png" disabled />
          <button disabled>Run!</button>
          <progress></progress>
        </div>
        <div className="output">
          <details>
            <summary>...</summary>
            <textarea readonly></textarea>
          </details>
        </div>
      </section>

      <Web5QuickstartQueryDwn />
      <section id="dwn-query">
        <h1>Query for messages</h1>
        <div className="input">
          <button disabled>Run!</button>
          <progress></progress>
        </div>
        <div className="output">
          <details>
            <summary>...</summary>
            <textarea readonly></textarea>
          </details>
        </div>
      </section>

      <Web5QuickstartReadDwn />
      <section id="dwn-read">
        <h1>Read the data</h1>
        <div className="input">
          <button disabled>Run!</button>
          <progress></progress>
        </div>
        <div className="output"></div>
      </section>

      <Web5QuickstartDeleteDwn />

      <section id="dwn-delete">
        <h1>Delete the messages</h1>
        <div className="input">
          <button disabled>Run!</button>
          <progress></progress>
        </div>
        <div className="output">
          <details>
            <summary>...</summary>
            <textarea readonly></textarea>
          </details>
        </div>
      </section>
    </div>
  );
}

export default Web5Quickstart;