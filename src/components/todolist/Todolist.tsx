import React, {useState} from 'react';
import {Button} from "../Button";


type TaskPropsType = {
    id: number;
    title: string;
    isDone: boolean;

};

type FilterValueType = 'All' | 'Active' | 'Completed'

type TodoListPropsTypes = {
    title: string;
    tasks: Array<TaskPropsType>;
    taskRemove: (taskId: number) => void;

};

export const Todolist = (props: TodoListPropsTypes) => {

    let [filter, SetFilter] = useState('all')

    const changeFilter = (m: FilterValueType) => {
        SetFilter(m)
    }

    let filteredTasks = props.tasks

    if (filter === 'Completed') {
        filteredTasks = props.tasks.filter((task) => task.isDone)
    }
    if (filter === 'Active') {
        filteredTasks = props.tasks.filter((task) => !task.isDone)
    }

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {filteredTasks.map((task) => {

                    return <li key={task.id}>
                        <input type={'checkbox'} checked={task.isDone}/><span>{task.title}</span>
                        <Button title={'✖️'} callback={() => props.taskRemove(task.id)}/>
                    </li>
                })}
            </ul>
            <div>
                <Button title={'All'} callback={() => changeFilter('All')}/>
                <Button title={'Active'} callback={() => changeFilter('Active')}/>
                <Button title={'Completed'} callback={() => changeFilter('Completed')}/>

            </div>
        </div>
    );
};
