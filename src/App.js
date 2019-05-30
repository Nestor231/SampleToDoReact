import React, {Component, useState} from 'react';
import logo from './logo.svg';
import TodoTable from './TodoTable.js';
import Form from './ToDoForm.js';
import './App.css';
import {StatusContext} from './ContextList';

function App() {
  const [taskList, setTask] = useState([]);
  const contentstate = {
    states: {taskList},
    stateSetters: {createTask,resetList}
  }

  function createTask(task){
    var rows = [...taskList];
    rows.push(task);
    setTask(rows);
  }

  function resetList(){
    console.log('resetting list')
    setTask([]);
  }

  return (
    <div>
      <StatusContext.Provider value={contentstate}>
        <div style={{width:"60%", marginLeft:"20%"}} align="Center">
          <p align="Center"> Hello World </p>
          <Form />
          <TodoTable/>
        </div>
      </StatusContext.Provider>
    </div>
  );
}


export default App;
