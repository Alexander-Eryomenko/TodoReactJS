import TodoInput from "./components/TodoInput/TodoInput";
import TodoList from "./components/TodoList/TodoList";
import FooterButton from "./components/FooterButton/FooterButton";
import Wrapper from "./components/UI/Wrapper";
import './App.css';
import { useState, useEffect} from "react";

function App() {

    const [listOfTodo, setListOfTodo] = useState([])
    const [currentList, setCurrentList] = useState(null)

    // useEffect(() => {
    //     const dataOfTodo = JSON.stringify(listOfTodo)
    //     localStorage.setItem('todos', dataOfTodo)
    //
    //     return () => {
    //         localStorage.setItem('todos', dataOfTodo)
    //     }
    // }, [listOfTodo, currentList]);
    //
    // useEffect(() => {
    //     const itemsInLocalStorage =  localStorage.getItem('todos')
    //
    //         // const dataInLocalStorage = localStorage.getItem('todos')
    //         // console.log('localStorage', dataInLocalStorage)
    //
    // }, [listOfTodo])


    const counterTodo = listOfTodo > currentList ? currentList.length : listOfTodo.length

    const someIsDone = listOfTodo.some((item) => item.isDone === true)
    let someIsFalse = listOfTodo.some((item) => item.isDone === false) || listOfTodo.length === 0

    const editTodoHandler = (data) => {
        if (data.text.length) {
            const editItems = listOfTodo.map(item => {
                return item.id === data.id ? {
                    ...item,
                    text: data.text
                } : item
            })
            setListOfTodo(editItems)
        }
    }

    const addNewItem = (data) => {
        if (data.text.length) {
            setListOfTodo((prevState) => {
                return [
                    ...prevState,
                    data
                ]
            })
        }
    }

    const onToggleDone = (data) => {
        const mappedTodoList = listOfTodo.map(todo => {
            return todo.id === data.id ? {
                ...todo,
                isDone: data.isDone
            } : todo
        })
        setListOfTodo(mappedTodoList)
        setCurrentList(mappedTodoList)
    }

    const showAllList = () => {
        setListOfTodo(listOfTodo)
        setCurrentList(null)
    }

    const showActiveList = () => {
        const active = listOfTodo.filter(item => item.isDone === false)
        setCurrentList(active)
    }

    const showCompeted = () => {
        const completed = listOfTodo.filter(item => item.isDone === true)
        setCurrentList(completed)
    }

    const clearAll = () => {
        const clear = listOfTodo.map(item => {
            return {
                ...item,
                isDone: false
            }
        })
        setListOfTodo(clear)
        setCurrentList(null)
    }

    const selectAll = () => {
        const select = listOfTodo.map(item => {
            return {
                ...item,
                isDone: true
            }
        })
        setListOfTodo(select)
        setCurrentList(null)
    }

    const deleteItems = () => {
        const filtered = listOfTodo.filter(item => item.isDone === false)
        setListOfTodo(filtered)
        setCurrentList(null)
    }

  return (
        <Wrapper>
            <TodoInput
                addNewItem={addNewItem}
            />
            <TodoList
                toggleDone={onToggleDone}
                todos={currentList ? currentList : listOfTodo}
                onEdit={editTodoHandler}
            />
            {listOfTodo.length > 0 && (
                <FooterButton
                    onShowAll={showAllList}
                    onShowActive={showActiveList}
                    onShowCompleted={showCompeted}
                    onClearItems={clearAll}
                    onSelectItems={selectAll}
                    onDeleteItems={deleteItems}
                    countItems={counterTodo}
                    triggerButton={someIsDone}
                    someIsFalse={someIsFalse}
                />
            )}
        </Wrapper>
  );
}

export default App;
