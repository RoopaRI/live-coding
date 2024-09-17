import React from 'react';
import {useParams} from 'react-router-dom';

export default function BlogPost(){
    const {id} = useParams();

    return(
        <div>
            <h1>Blog Post {id}</h1>
            <p>This is the detail of blog post with ID: {id}</p>
        </div>
    )
}