import React, {useState} from 'react';
import './App.css';
import { Todolist } from './components/todolist/Todolist';
import {FilterValueType} from "./components/FilterTypes";
import {v1} from "uuid";




function App() {
    let [tasks, SetTasks] =useState( [
            {id: v1(), title: 'Hello world', isDone: true},
            {id: v1(), title: 'I am Happy', isDone: true},
            {id: v1(), title: 'Yo', isDone: false},
            {id: v1(), title: 'Yo Dude', isDone: true},
        ]
    )
    const removeTask = (id: string) =>{
       let filteredTasks = tasks.filter((task)=>task.id !== id)
            SetTasks(filteredTasks)
    }
    const removeAllTask = () =>{
        SetTasks([])
    }

    let [filter, SetFilter] = useState('all')

    const changeFilter = (m: FilterValueType) => {
        SetFilter(m)
    }

    let filteredTasks = tasks

    if (filter === 'All') {
        filteredTasks = tasks
    }
    if (filter === 'Completed') {
        filteredTasks = tasks.filter((task) => task.isDone)
    }
    if (filter === 'Active') {
        filteredTasks = tasks.filter((task) => !task.isDone)
    }


    const addNewTask = (t: string) => {
        const newTask = {id: v1(), title: t, isDone: false}
        const newTasks = [newTask, ...tasks]
        SetTasks(newTasks)
    }

    return (
        <div className="App">
       <Todolist title={'What to learn'} tasks={filteredTasks}
                 taskRemove={removeTask} taskAllRemove={removeAllTask}
                 changeFilter={changeFilter} addNewTask={addNewTask}/>

        </div>
    );
}



export default App;
