import React from 'react';

function Card({name, email, role}){

    return(
        <div className="card-border">
            <h1>{name}</h1>
            <h2>{role}</h2>
            <h3>{email}</h3>
        </div>
    )
}

export default Card;