import React from 'react';
import './App.css';
import { Todolist } from './components/todolist/Todolist';

const tasks1 = [
    {id: 1, title: 'Hello world', isDone: true},
    {id: 2, title: 'I am Happy', isDone: true},
    {id: 3, title: 'Yo', isDone: false},
]
const tasks2 = [
    {id: 1, title: 'Html&CSS', isDone: true},
    {id: 2, title: 'TS', isDone: false},
    {id: 3, title: 'ReactTS', isDone: false},
]


function App() {
    return (
        <div className="App">
       <Todolist title={'What to learn'} tasks={tasks1}/>
       <Todolist title={'Songs'} tasks={tasks2}/>
        </div>
    );
}



export default App;
