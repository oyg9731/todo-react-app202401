import React from 'react';
import {MdAdd} from "react-icons/md";
import './sass/TodoInput.scss'

const Todonput = () => {
    return (
        <>
        <div>
            <div className='form-wrapper'>
                <form className='insert-form'>
                    <input
                        type='text'
                        placeholder='할 일을 입력 후, 엔터를 누르세요!'
                    />
                </form>
            </div>
            <button className='insert-btn'>
                <MdAdd/>
            </button>
        </div>
        </>
    );
};

export default Todonput;