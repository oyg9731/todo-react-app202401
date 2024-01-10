import React from "react";
import {MdAdd, MdDelete, MdDone} from "react-icons/md";

import './sass/TodoTemplate.scss';
import TodoHeader from "./TodoHeader";
import Todonput from "./Todonput";
import TodoMain from "./TodoMain";

const TodoTemplate = () => {
    return (
        <div className='TodoTemplate'>
            <TodoHeader/>
            <TodoMain/>
            <Todonput/>
        </div>
    );
};

export default TodoTemplate;