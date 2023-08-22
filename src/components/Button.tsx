import React from "react";



type ButtonType = {
    title: string;
    callback: ()=>void;
}
export const Button = (props: ButtonType)=>{

    const onClickHandler = () => {
        props.callback()
    }

    return <button onClick={onClickHandler}>{props.title}</button>


}