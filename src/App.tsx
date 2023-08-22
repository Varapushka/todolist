import React, {useState} from 'react';
import './App.css';
import { Todolist } from './components/todolist/Todolist';




function App() {
    let [tasks, SetTasks] =useState( [
            {id: 1, title: 'Hello world', isDone: true},
            {id: 2, title: 'I am Happy', isDone: true},
            {id: 3, title: 'Yo', isDone: false},
            {id: 4, title: 'Yo Dude', isDone: true},
        ]
    )
    const removeTask = (id: number) =>{
       let filteredTasks = tasks.filter((task)=>task.id !== id)
            SetTasks(filteredTasks)
    }


    return (
        <div className="App">
       <Todolist title={'What to learn'} tasks={tasks} taskRemove={removeTask} />

        </div>
    );
}



export default App;
