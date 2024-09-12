import React, {useState} from 'react';
import './ToggleButton.css';

export default function ToggleButton(){
    const [toggle, setToggle] = useState(true);

    const handleToggle=()=>{
        setToggle(!toggle);
        console.log(toggle)
    }

    return(
        <div>
            <button onClick={handleToggle}>{toggle ? 'ON' : 'OFF'}</button>
        </div>

        
    )
}