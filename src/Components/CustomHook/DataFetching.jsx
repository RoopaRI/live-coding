import React from 'react';
import useCustomAPI from './UseCustomAPI';

export default function DataFetching() {
    const { data, loading, error } = useCustomAPI('https://jsonplaceholder.typicode.com/posts');

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            {data && data.map((ele) => (
                <p key={ele.id}>{ele.title}</p>
            ))}
        </div>
    );
}
