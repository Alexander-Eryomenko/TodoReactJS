import TodoListItem from "../TodoListItem/TodoListItem";

import './TodoList.css'

const TodoList = ({todos, toggleDone, onEdit}) => {
    return (
        <ul className="list">
            {todos.map(({id, text, isDone}) => {
                return (
                    <TodoListItem onEdit={onEdit} toggleDone={toggleDone} id={id} key={id} text={text} isDone={isDone} />
                )
            })}
        </ul>
    )
}

export default TodoList
