import React, {useState, useEffect} from 'react';
import './Fetch.css';

export default function Fetch(){
    const [data, setData] = useState([]);

    useEffect(()=>{
        async function fetchData(){
            try{
                const response = await fetch("https://jsonplaceholder.typicode.com/posts");
                const data = await response.json();
                setData(data);
            }
            catch(err){
                window.alert(err);
            }
        }
        fetchData();
    },[])

    return(
        <div>
            <h1>Data</h1>
            {data.length>0 && data.map((ele, id)=>(
                <p key={id}>{ele.title}</p>
            ))}
        </div>        
    )
}