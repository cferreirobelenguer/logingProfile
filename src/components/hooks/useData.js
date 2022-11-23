import {useState} from 'react'

export const useData=()=>{
    //Custom hook que recoge los datos del formulario de username y password
    const[user, setUser]=useState({
        name:"",
        password:""
    })
    const {name,password}=user
    
    const handlerUser=(e)=>{
        setUser({
            ...user,
            name:e.target.value
        })
        
    }
    const handlerPassword=(e)=>{
        setUser({
            ...user,
            password:e.target.value
        })
        
    }
    return{
        user,
        handlerPassword,
        handlerUser
    }
}