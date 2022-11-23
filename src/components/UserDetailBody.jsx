import React from "react";
import imagen2 from '../assets/images/illustration-2.svg'

export const UserDetailBody = ({ datos }) => {
  //Destructuración de objeto dataPerson pasado por props
  const { gender, firstName, lastName, email, picture, phone} = datos;
  return (
    <>
      <div className="profile_container">
        <div className="profile_image">
          <img
            src={picture}
            alt=""
            width="180"
            weight="180"
            className="img-fluid"
            id="profile_photo"
          ></img>
        </div>
        <div className="profile_title">
          <div className="profile_name">
            <h2>{firstName}</h2>
          </div>
          <div className="profile_lastname">
            <h2>{lastName}</h2>
          </div>
        </div>
        
        <div className="profile_gender">
            <h4>{gender}</h4>
        </div>
        <div className="profile_email">
            <div className="email_text">
                <div className="email_icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                    </svg>
                </div>
                <div className="email_title">
                    <h4>{email}</h4>
                </div>
                <div className="phone_icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                    </svg>
                </div>
                <div className="phone_title">
                    <h4>{phone}</h4>
                </div>
            </div>
            
            <div className="email_image">
                
                <img src={imagen2} alt="" width="400" heigth="400" className="img-fluid"></img>
            </div>
            
        </div>
      </div>
    </>
  );
};
