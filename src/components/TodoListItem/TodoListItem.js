import {useRef, useState} from "react";

import Input from "../UI/Input";

import './TodoListItem.css'


const TodoListItem = ({isDone, text, id, toggleDone, onEdit}) => {
    const editInput = useRef()
    const [isEdit, setIsEdit] = useState(false)
    const [editText, setEditText] = useState(text)

    const onOpenEditInput = () => {
        setIsEdit(true)
    }

    const onEditInput = (event) => {
        setEditText(event.target.value)
    }

    const onBlurInput = () => {
        if(text === editText) {
            setIsEdit(false)
            console.log('the same text')
        } else {
            onEdit({
                text: editText,
                id,
                isDone
            })
            console.log('edit text')
            setIsEdit(false)
        }


    }

    const onChecked = event => {
        toggleDone({
            text,
            id,
            isDone: event.target.checked
        })
    }
    return (
        <li className="listItem">
            <input
                checked={isDone}
                onChange={onChecked}
                className="listItem__checkbox"
                type="checkbox"/>
            {isEdit ?
                <input
                    className="inputEdit"
                    ref={editInput}
                    onBlur={onBlurInput}
                    onChange={onEditInput}
                    value={editText} /> :
                <div
                    onDoubleClick={onOpenEditInput}
                    className={`listItem__text ${isDone ? 'done': ''}`}
                >
                    {text}
                </div>}
        </li>
    )
}
export default TodoListItem
