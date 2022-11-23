import React,{useState} from 'react'
import { useData } from './hooks/useData'
import {UserDetailBody} from './UserDetailBody'


const UserItem=({resultadoDatos})=>{
    const [isUser,setIsUser]=useState(false)
    const {user,handlerPassword,handlerUser}=useData()
    const [dataPerson,setDataPerson]=useState({})

    
    const handlerSubmit=(e)=>{
        e.preventDefault()
        //Cuando no encuentra resultados en el for dataPerson se queda con los datos vacíos
        setDataPerson({
            gender:"",
            firstName:"",
            lastName:"",
            email:"",
            picture:""})
        
        for(let i of resultadoDatos){
            //Se buscan coincidencias entre username y password y el resultado de la API
            //isUser se utiliza para renderizar a partir del primer resultado
            if((user.name===i.login.username)&&(user.password===i.login.password)){
                
                setDataPerson({
                    gender:i.gender,
                    firstName:i.name.first,
                    lastName: i.name.last,
                    email:i.email,
                    picture:i.picture.medium
                })
                setIsUser(true)
                break;
                
            }
        }
        
        console.log(isUser)
        console.log(dataPerson)
    }

    return(
            <div>
                <form onSubmit={handlerSubmit}>
                    <p>
                        <label htmlFor='username'>
                            Usuario&nbsp;
                        </label>
                        <input
                        type="text"
                        onChange={handlerUser}
                        required
                        ></input>
                    
                    </p>
                    <p>
                        <label htmlFor='password'>
                            Contraseña&nbsp;
                        </label>
                        <input
                        type="password"
                        onChange={handlerPassword}
                        required
                        ></input>
                    </p>

                    <input type="submit" onClick={handlerSubmit} />
                    <input type="reset"/>
                </form>
                {
                //Si los atributos de dataPerson están definidos pero vacíos renderizamos que no se encuentran resutados
                //En cambio si dataPerson no tiene atributos definidos y es {} se renderiza el componente vacío; esto se imprime al inicio del programa únicamente
                dataPerson.gender===""?(<div>No se encontraron resultados</div>):"" }
                {
                //Si hay datos de persona se llama al componente UserDetailBody
                isUser &&
                    <section>
                        <UserDetailBody datos={dataPerson}></UserDetailBody>
                    </section>
                }
                
                
            </div>
        
    )
}
export default UserItem