import {useState, useEffect} from 'react';

export default function useCustomAPI(url){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        async function fetchData(){
            try{
                const response = await fetch(url);
                const data = await response.json();
                setData(data);
            }catch(err){
                setError(err);
            }finally{
                setLoading(false);
            }
        }
        fetchData()
    },[url]);

    return(
        {data, loading, error}
    )
}