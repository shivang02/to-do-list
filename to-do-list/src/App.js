import React from 'react';
import './App.css';
import Header from './components/Header'
import InputBox from './components/InputBox'
import SavedList from './components/SavedList';

function App() {
  return (
    <div className="App">
        <div className="sidebar">
          <SavedList />
        </div>
    <div className="inner-app">
      <Header />
      <InputBox />
    </div>
    </div>
  );
}

export default App;
