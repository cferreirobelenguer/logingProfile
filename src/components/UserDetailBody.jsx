import React from 'react'

export const UserDetailBody=({datos})=>{
    //Destructuración de objeto dataPerson pasado por props
    const {gender,firstName,lastName,email,picture}=datos
    return(
        <div>
            <h1>{firstName}</h1>
            <h1>{gender}</h1>
            <h1>{lastName}</h1>
            <h1>{email}</h1>
            <h1>{picture}</h1>
            
        </div>
    )
}