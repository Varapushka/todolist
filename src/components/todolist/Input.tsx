import { ChangeEvent, KeyboardEvent} from "react";

type InputPropsType = {
    title: string;
    setTitle: (t: string) => void
    onClickAddButtonOrKeyHandler: () => void;
}
export const Input = (props: InputPropsType) => {

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(event.currentTarget.value)
        console.log(event.currentTarget.value)
    }
    const onKeyPressEnterHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        event.key === 'Enter' ? props.onClickAddButtonOrKeyHandler() : console.log('i didnt done this')
    }


    return <>
        <input value={props.title} onChange={onChangeInputHandler} onKeyPress={onKeyPressEnterHandler}/>
    </>

}