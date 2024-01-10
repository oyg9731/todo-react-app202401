import React from 'react';
import {MdDelete, MdDone} from "react-icons/md";
import './sass/TodoMain.scss';
import TodoItem from "./TodoItem";

const TodoMain = () => {
    return (
        <ul className='todo-list'>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
        </ul>
    );
};

export default TodoMain;