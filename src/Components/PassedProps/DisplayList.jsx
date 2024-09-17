import React from 'react';

export default function DisplayList({items}){

    return(
        <div>
            {items.map((ele, index)=>(
                <p key={index}>{ele}</p>
            ))}
        </div>
    )
}
