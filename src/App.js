import React,{useEffect} from 'react'
import './App.css';
import { useFetch } from './components/hooks/useFetch';
import UserItem from './components/UserItem'
import Header from './components/Header'
import "bootstrap/dist/css/bootstrap.min.css"
import '../src/assets/scss/style.css'

function App() {
  const {result,getData}=useFetch("https://randomuser.me/api/?results=1000")
    //Llamada a la api y se pasan los resultados por props al componente useItem
    useEffect(()=>{
        getData()
        
    },[])
    console.log(result)
  return (
    <div className="App">
      <Header></Header>
      <UserItem resultadoDatos={result}></UserItem>
    </div>
  );
}

export default App;
