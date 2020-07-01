import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'

import InputBox from './components/InputBox'
import ClickHandler from './components/InputBox'
import ItemVal from './components/InputBox'

function App() {
  return (
    <div className="App">
    <div className="inner-app">
      <Header />
      <InputBox />
    </div>
    </div>
  );
}

export default App;
