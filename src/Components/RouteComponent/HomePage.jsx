import React from 'react';
import {Link} from 'react-router-dom';

const posts = [
    {id:1, title:'First Post'},
    {id:2, title:'Second Post'},
    {id:3, title:'Third Psot'}
];

export default function HomePage(){
    return(
        <div>
            <h1>Blog Posts</h1>
            {posts.map((post)=>(
                <div key={post.id}>
                    <Link to={`/post/${post.id}`}>{post.title}</Link>
                </div>
            ))}
        </div>
    )
}

