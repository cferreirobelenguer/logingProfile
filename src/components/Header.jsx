import React from 'react'
import logo from '../assets/images/logo.svg'

const Header=()=>{
    return(
        <section>
            <div className='header'>
                <img src={logo} width="110" height="50" alt="" className="img-fluid"></img>
            </div>
        </section>
        )
}
export default Header;