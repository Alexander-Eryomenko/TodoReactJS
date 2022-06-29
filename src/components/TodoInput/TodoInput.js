import Input from "../UI/Input";
import {useState} from "react";

import './TodoInput.css'


const TodoInput = ({addNewItem}) => {
    const [enteredValue, setEnteredValue] = useState('')

    const inputHandler = ({target}) => {
        setEnteredValue(target.value)
    }

    const submitHandler = (event) => {
        if (event.key === 'Enter') {
            addNewItem({
                text: enteredValue,
                id: Math.floor(Math.random() * 1000 + 3),
                isDone: false
            })
            setEnteredValue('')
        }
    }

    return (
            <Input
                value={enteredValue}
                onChange={inputHandler}
                onKeyDown={submitHandler}
                placeholder='What needs to be done?'
                type="text"
                className="input"
            />
    )
}

export default TodoInput
