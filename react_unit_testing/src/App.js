import React from 'react';
import './App.css';
import Search from './components/search';
import Todo from './components/todo';

function App() {
  return (
    <div className="App">
      <Todo></Todo>
      <Search></Search>
    </div>
  );
}

export default App;
