import React from 'react';

export default function navigateInfo({c}){
    return(
        <>
        <h2>{c.name}</h2>
        <div>{c.description}</div>
        </>
    )
}