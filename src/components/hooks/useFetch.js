import {useState} from 'react'

export const useFetch=(url)=>{
    //Petición a la api que llama a 1000 resultados de usuarios
    const [result,setResult]=useState([])
    const getData=()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setResult(data.results)
        })
        
    }
    return{
        result,
        getData
    }
}