import React, {useState, useEffect} from 'react';

export default function LoadingSpinner(){
    const [data, setData] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        async function fetchData(){
            try{
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                const data = await response.json();
                setData(data);
                setLoading(false);
            }catch(err){
                setError(err);
            }
        }
        fetchData();
    },[])

    if(error){
        return <div>Error: {error.message}</div>
    }

    return(
        <div>
            {loading ? (
                <h1>Loading.......</h1>
            ) : (
                data.map((ele, index)=>(
                    <p key={index}>{ele.title}</p>
                ))
            )}
        </div>
    );
}