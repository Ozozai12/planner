import { useState, useEffect, useRef } from 'react'
import { v4 as uuidv4 } from 'uuid';

import { TodoList } from './TodoList';

import {ITodo} from '../types/data'

const App: React.FC = () => {
    const [title, setTitle] = useState('')
    const [todos, setTodos] = useState<ITodo[]>([])

    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus()   
    }
    }, [])
    
    const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (e.key === 'Enter') {
            addTodo()
        }
    }

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setTitle(e.target.value)
    }
    
    const addTodo = () => {
        if (title) {
            setTodos([...todos, {
                id: uuidv4(),
                title,
                complete: false,
            }])
        setTitle('')
        }
    }

    const removeTodo = (id: string): void => {
        setTodos(todos.filter(todo => todo.id !== id))
     }
    
    const toggleTodo = (id: string): void => {
        setTodos(todos.map(todo => {
            if (todo.id !== id) return todo;

            return {
                ...todo,
            complete: !todo.complete}
        }))
    }

    return <div>
        <input value={title} onChange={handleChange} onKeyDown={handleKeyDown} ref={inputRef} />
        <label>Select time:</label>
        <button onClick={addTodo}>Add</button>
        <TodoList items={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
    </div>
}

export  {App}