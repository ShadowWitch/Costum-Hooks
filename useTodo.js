import { useEffect, useReducer } from "react"
import { todoReducer } from "../08-useReducer/todoReducer"

export const useTodo = () => {
    const initialState = []
    const init = () => {
        return JSON.parse(localStorage.getItem('todos')) || []
    }


    // Reeducer
    const [todos, dispatch] = useReducer( todoReducer, initialState, init )

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos) || [])
    }, [todos])


    // Functions handle
    const handleNewtodo = (todo) =>{
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }

        dispatch(action)
    }

    const handleDeleteTodo = (todo) => {
        const action = {
            type: '[TODO] Remove Todo',
            payload: todo
        }
        dispatch(action)
    }

    const handleToggleTodo = (todo) => {
        const action = {
            type: '[TODO] Toggle Todo',
            payload: todo
        }
        dispatch(action)
    }
    
    return {
        todos,
        handleDeleteTodo,
        handleToggleTodo,
        handleNewtodo,
        allTodos: todos.length,
        pendingTodos: todos.filter(todo => todo.done !== true).length
    }
}