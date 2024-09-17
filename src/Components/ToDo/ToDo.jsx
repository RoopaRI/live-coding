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

    const handleEdit = (index, editedTask) => {
        const updatedtasks = [...todo];
        updatedtasks[index] = editedTask;
        setTodo(updatedtasks);
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
                    <input type='text' value={ele} className='edit' onChange={(e)=>{handleEdit(id, e.target.value)}}/>
                    <button className='delete' onClick={()=>handleDelete(id)}>Delete</button>
                </div>  
            ))}
        </div>
    );
}
