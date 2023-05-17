import { TodoItem } from "./TodoItem"

import {ITodo} from '../types/data'

interface ITodoListProps {
    items: ITodo[],
    removeTodo: (id: string) => void,
    toggleTodo: (id: string) => void
}

const TodoList: React.FC<ITodoListProps> = (props) => {
    const {items, toggleTodo, removeTodo } = props;

    return <>
        {items.map(todo => (<TodoItem key={todo.id}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
            {...todo} />))}
    </>
 }

export {TodoList}