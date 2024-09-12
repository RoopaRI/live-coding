import React, {useState} from 'react';
import './Counter.css';

export default function Counter(){
    const [count, setCount] = useState(0); 

    const handleIncrement=()=>{
        setCount((prev)=>prev+1)
    }

    const handleDecrement=()=>{
        setCount((prev)=>prev-1)
    }

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
        </div>
    );
}