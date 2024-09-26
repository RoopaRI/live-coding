import React, {useState, useEffect, useRef} from 'react';

const cities = [
    "Bengaluru",
    "Mysore",
    "Hubli-Dharwad",
    "Mangalore",
    "Belgaum",
    "Davanagere",
    "Bellary",
    "Bijapur",
    "Shimoga",
    "Tumkur",
    "Raichur",
    "Bidar",
    "Udupi",
    "Hospet",
    "Gadag-Betageri",
    "Bhadravati",
    "Robertsonpet",
    "Chitradurga",
    "Kolar",
    "Mandya",
    "Hassan",
    "Chikmagalur",
    "Bagalkot",
    "Ranebennur",
    "Gangawati"
  ];
  

export default function DebounceSearch(){
    const [search, setSearch] = useState('');
    const [filtered, setFiltered] = useState([]);
    const [debounce, setDebounce] = useState('');
    const [error, setError] = useState('');
    const debounceRef = useRef(null);

    useEffect(()=>{
        if(debounceRef.current){
            clearTimeout(debounceRef.current);
        }

        debounceRef.current = setTimeout(()=>{
            setDebounce(search);
        },3000);

        return () => clearTimeout(debounceRef.current);
    },[search])

    useEffect(()=>{
        if(search===''){
            setFiltered(cities);
            setError('');
        }
        else{
            const filteredCity = cities.filter((city)=>(city.toLowerCase().includes(search.toLowerCase())));
            setFiltered(filteredCity);
            if(filteredCity.length===0){
                setError('City not found');
            }
            else{
                setError('');
            }
        }
    },[debounce])

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    return(
        <div>
            <h1>Debouncing</h1>
            <input
                type='text'
                placeholder='Search city'
                value={search}
                onChange={handleSearch} 
            />
            {error && <p style={{color:'red'}}>{error}</p>}
            {filtered.map((city, id)=>(
                <div key={id}>
                    <p>{city}</p>
                </div>
            ))}
        </div>
    );
}


