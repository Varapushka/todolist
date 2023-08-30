import React, {useState} from 'react';
import {Button} from "../Button";
import {FilterValueType} from "../FilterTypes";
import {Input} from "./Input";


type TaskPropsType = {
    id: string;
    title: string;
    isDone: boolean;

};



type TodoListPropsTypes = {
    title: string;
    tasks: Array<TaskPropsType>;
    taskRemove: (taskId: string) => void;
    taskAllRemove: () => void;
    changeFilter: (m: FilterValueType) => void;
    addNewTask: (t: string)=> void;

};

export const Todolist = (props: TodoListPropsTypes) => {


    let [title, setTitle]= useState('')
const onClickAddButtonOrKeyHandler = () => {
    props.addNewTask(title)
    setTitle('')
}

const onAllClickButtonHandler = ()=>{
    props.changeFilter('All')
}
const onActiveClickButtonHandler = ()=>{
    props.changeFilter('Active')
}
const onCompletedClickButtonHandler = ()=>{
    props.changeFilter('Completed')
}
const onAllRemoveClickButtonHandler = ()=>{
    props.taskAllRemove()
}

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <Input title={title} setTitle={setTitle} onClickAddButtonOrKeyHandler={onClickAddButtonOrKeyHandler}/>
                <Button title={'+'} callback={onClickAddButtonOrKeyHandler}/>
            </div>
            <ul>
                {props.tasks.map((task) => {

                    return <li key={task.id}>
                        <input type={'checkbox'} checked={task.isDone}/><span>{task.title}</span>
                        <Button title={'✖️'} callback={() => props.taskRemove(task.id)}/>
                    </li>
                })}
            </ul>
            <div>
                <Button title={'All'} callback={onAllClickButtonHandler}/>
                <Button title={'Active'} callback={onActiveClickButtonHandler}/>
                <Button title={'Completed'} callback={onCompletedClickButtonHandler}/>
                <Button title={'Delete all'} callback={onAllRemoveClickButtonHandler}/>

            </div>
        </div>
    );
};
