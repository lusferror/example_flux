import logo from '../logo.svg'
import '../App.css';
import React from'react';
import InputTask from '../components/inputTask.jsx';
import List from '../components/list.jsx';

function App() {

  
  return (
    <div>

      <div>
        <h1>TodoList</h1>
      </div>
      
      <div>
        <InputTask />
      </div>

      <div>
        <List />
      </div>

    </div>
  );
}

export default App;
