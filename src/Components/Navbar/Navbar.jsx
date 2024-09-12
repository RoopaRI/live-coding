import React, {useState} from 'react';
import './Navbar.css';

export default function Navbar(){
    const [menu, setMenu] = useState(true);

    const handleMenu=()=>{
        setMenu(!menu);
    }

    return(
        <div className='navbar'>
            <h1>Logo</h1>
            <div className={`menu ${menu ? 'open' : ''} `}>
                <p>Home</p>
                <p>Explore</p>
            </div>
            <div className='hamburger'>
                <button onClick={handleMenu}>Menu</button>
            </div>
        </div>
    );
}