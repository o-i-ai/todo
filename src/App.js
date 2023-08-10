import React from 'react';
import logo from './logo.svg';
import './App.css';
import { DataStore } from '@aws-amplify/datastore';
import { Item } from './models';

function App() {
  async function onClickQueryButton() {
    const models = await DataStore.query(Item);
    console.log(models);
  }

  async function onClickSaveButton(){
    await DataStore.save(
      new Item({
        
      "name": "Lorem ipsum dolor sit amet"
    })
  );}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <input type="text" name="itemText" value="item1"></input>
        <button
          name='saveButton'

          onClick={onClickSaveButton}
        >saveButton</button>
        <button
          name='queryButton'
          onClick={onClickQueryButton}
        >queryButton</button>
      </header>
    </div>
  );
}

export default App;
