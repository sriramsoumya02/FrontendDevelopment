import React from 'react';
import './App.css';
import Search from './components/search';
import Todo from './components/todo';
import Pokemon from './components/pokemon';

function App() {
  return (
    <div className="App">
      <Todo></Todo>
      <Search></Search>
      <Pokemon></Pokemon>
    </div>
  );
}

export default App;
