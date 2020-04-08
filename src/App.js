import React, { useState } from 'react';
import CSVFileValidator from 'csv-file-validator'
import './App.css';

const config = {
  headers: [
    {
      name: 'ID',
      inputName: 'id',
      required: true,
      unique: true,
    },
    {
      name: 'Name',
      inputName: 'name',
      required: true,
    },
  ],
}

function onFileUploaded(setList) {
  return event => {
    const file = event.target.files[0];
    console.log('## FILE UPLOAD', file);
    CSVFileValidator(file, config)
      .then(csvData => setList(csvData.data.slice(1)))
      .catch(err => console.error(err))
  };
}

function App() {
  const [list, setList] = useState([]);
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Upload CSV
        </h1>
        <p>
          <input type="file" accept=".csv" onChange={onFileUploaded(setList)} />
        </p>
        {list.length ? (
          <table>
            <thead>
              <tr><td>ID</td><td>Name</td></tr>
            </thead>
            <tbody>
              {list.map(item => <tr key={item.id}><td>{item.id}</td><td>{item.name}</td></tr>)}
            </tbody>
          </table>
        ): null}
      </header>
    </div>
  );
}

export default App;
