import React, {useState, useEffect} from 'react';
import './Pagination.css';

export default function Pagination(){
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

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

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(data.length / itemsPerPage);

    const handlePrevPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    }

    const handleNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    }

    return(
        <div>
            <h1>Data</h1>
            {loading ? (
                <h1>Loading....</h1>
            ) : (
                currentItems.map((ele, id)=>(
                    <p key={id}>{ele.title}</p>
                ))
            )}

            <div>
                <button onClick={handlePrevPage} disabled={currentPage === 1}>Prev</button>
                <span>{currentPage}/{totalPages}</span>
                <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
            </div>
        </div>
    );
}