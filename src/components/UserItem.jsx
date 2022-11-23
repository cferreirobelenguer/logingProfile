import React, { useState } from "react";
import { useData } from "./hooks/useData";
import { UserDetailBody } from "./UserDetailBody";
import Imagen1 from "../assets/images/illustration-1.svg";

const UserItem = ({ resultadoDatos }) => {
  const [isUser, setIsUser] = useState(false);
  const { user, handlerPassword, handlerUser } = useData();
  const [dataPerson, setDataPerson] = useState({});

  const handlerSubmit = (e) => {
    e.preventDefault();
    //Cuando no encuentra resultados en el for dataPerson se queda con los datos vacíos
    setDataPerson({
      gender: "",
      firstName: "",
      lastName: "",
      email: "",
      picture: "",
      phone:""
    });

    for (let i of resultadoDatos) {
      //Se buscan coincidencias entre username y password y el resultado de la API
      //isUser se utiliza para renderizar a partir del primer resultado
      if (
        user.name === i.login.username &&
        user.password === i.login.password
      ) {
        setDataPerson({
          gender: i.gender,
          firstName: i.name.first,
          lastName: i.name.last,
          email: i.email,
          picture: i.picture.medium,
          phone:i.phone
        });
        setIsUser(true);
        break;
      }
    }

    console.log(isUser);
    console.log(dataPerson);
  };

  return (
    <section className="card_container">
      <div className="card_form">
        <div className="card_formText">
          <div className="card_title">
            <h1>Indentifícate para </h1>
            <h1>ver tu perfil</h1>
          </div>
          <div className="card_content">
            <form onSubmit={handlerSubmit}>
              <p>
                <input
                  type="text"
                  onChange={handlerUser}
                  required
                  placeholder="Usuario"
                ></input>
              </p>
              <p>
                <input
                  type="password"
                  onChange={handlerPassword}
                  required
                  placeholder="Contraseña"
                ></input>
              </p>

              <input
                type="submit"
                className="btn btn-primary"
                onClick={handlerSubmit}
                id="btnSubmit"
              />
              <input type="reset" className="btn btn-primary" id="btnReset" />
            </form>
          </div>
        </div>
        <div className="card_formImage">
          <img
            src={Imagen1}
            width="400"
            height="400"
            className="img-fluid"
            alt=""
          ></img>
        </div>
      </div>
      <div className="profile_wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="hsl(240, 75%, 98%)" fill-opacity="1" d="M0,192L80,176C160,160,320,128,480,106.7C640,85,800,75,960,101.3C1120,128,1280,192,1360,224L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>
      <div className="class_result">
        {
          //Si los atributos de dataPerson están definidos pero vacíos renderizamos que no se encuentran resutados
          //En cambio si dataPerson no tiene atributos definidos y es {} se renderiza el componente vacío; esto se imprime al inicio del programa únicamente
          dataPerson.gender === "" ? (
            <div className="no_results"><h2>No se encontraron resultados</h2></div>
          ) : (
            ""
          )
        }
        {
          //Si hay datos de persona se llama al componente UserDetailBody
          isUser && <UserDetailBody datos={dataPerson}></UserDetailBody>
        }
      </div>
    </section>
  );
};
export default UserItem;
