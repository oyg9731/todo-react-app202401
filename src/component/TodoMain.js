import React from 'react';
import {MdDelete, MdDone} from "react-icons/md";
import './scss/TodoMain.scss';
import TodoItem from "./TodoItem";

const TodoMain = ({todoList, onRemove}) => {

    return (
        <ul className='todo-list'>
            {
                todoList.map(todo  => <TodoItem key={todo.id} item={todo} onRemove={onRemove} />)
            }
        </ul>
    );
};

export default TodoMain;