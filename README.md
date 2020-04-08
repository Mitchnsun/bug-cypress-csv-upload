Issues:
- https://github.com/abramenal/cypress-file-upload/issues/183
- https://github.com/shystruk/csv-file-validator/issues/36

### Current behavior:
I tried to test the upload of a CSV file. Front side, I use [CSV-file-validator](https://github.com/shystruk/csv-file-validator) to read and validate my file. But I have a parsing error (see below, cannot read stream of null) that I do not have outside of cypress.
During cypress test, I can console.log `file` (see code below) and cannot see a difference between in cypress or in a real browser...

### Desired behavior:
CSV-file-validator could parse the file.

### Steps to reproduce: (app code and test code)
Cypress: `cy.get('input[type=file]').attachFile('myfile.csv');`
Front: 
```
function onFileUploaded(event) {
    const file = event.target.files[0];
    CSVFileValidator(file, CSVConfig)
      .then(csvData => {
          /* Do stuff with csvData */
      })
      .catch(err => console.error(err) });
  };
}
<input type="file" accept=".csv" onChange={onFileUploaded} />
```

Trace error:
```
TypeError: Cannot read property 'stream' of null
    at Object.parse (papaparse.min.js:46)
    at csv-file-validator.js:17
    at new Promise (<anonymous>)
    at csv-file-validator.js:16
    at Cr (AccountantFileUpload.js:64)
    at Object.<anonymous> (react-dom.production.min.js:49)
    at d (react-dom.production.min.js:69)
    at react-dom.production.min.js:73
    at k (react-dom.production.min.js:140)
    at T (react-dom.production.min.js:169)
```