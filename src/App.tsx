import React from 'react';
import './App.css';
import { TodoList, Pokemo } from './components';

function App(){
  return (
    <div className="App">
      <TodoList />
      <Pokemo />
    </div> 
  );
}

export default App;
