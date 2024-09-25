import React, {useState, useEffect} from 'react';

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
  

export default function SearchQuery(){
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredCity, setFilteredCity] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(()=>{
        if(searchQuery === ''){
            setFilteredCity(cities);
            setErrorMessage('');
        }
        else{
            const filtered = cities.filter((city)=>city.toLowerCase().includes(searchQuery.toLowerCase()));
            setFilteredCity(filtered);
            if (filtered.length === 0) {
                setErrorMessage('City not found');
            } else {
                setErrorMessage('');
            }
        }
    },[searchQuery])

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    }

    return(
        <div>
            <input
                type='text'
                placeholder='Search city'
                value={searchQuery}
                onChange={handleSearch} 
            />
            {errorMessage && <p style={{color:'red'}}>{errorMessage}</p>}
            {filteredCity.map((city, id)=>(
                <div key={id}>
                    <p>{city}</p>
                </div>
            ))}
        </div>
    );
}