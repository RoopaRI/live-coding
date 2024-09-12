import React, { useState } from 'react';
import './ToDo.css';

export default function ToDo(){
    const [todo, setTodo] = useState([]);
    const [input, setInput] = useState('');

    const handleInput = (e) => {
        setInput(e.target.value)
    }

    const handleAdd = () => {
        setTodo([...todo, input])
        setInput('');
    }

    const handleDelete = (index) => {
        setTodo(todo.filter((_, id)=>id !== index));
    }

    return(
        <div className='todo'>
            <div className='in'>
                <input
                    className='input'
                    type='text'
                    value={input}
                    placeholder='Enter activity...'
                    onChange={handleInput}
                />
                <button className='add' onClick={handleAdd}>ADD</button>
            </div>
            
            {todo.length>0 && todo.map((ele, id)=>(
                <div className='activities'>
                    <p key={id}>{ele}</p>
                    <button className='delete' onClick={()=>handleDelete(id)}>Delete</button>
                </div>  
            ))}
        </div>
    );
}
