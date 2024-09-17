import React, {useEffect, useState} from 'react';
import './DarkModeToggle.css';

export default function DarkModeToggle(){
    const [theme, setTheme] = useState('light');

    useEffect(()=>{
        const savedTheme = localStorage.getItem('theme');
        if(savedTheme){
            setTheme(savedTheme);
            document.body.className = savedTheme;
        }
    },[]);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.body.className = newTheme;
    }

    return(
        <div>
            <h1>My App</h1>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    )
}