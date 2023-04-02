import React from "react";
import logo_dita from './../image/logo/logo_dita.png';
import './Logo.css';
const LogoDita = () => {
    return(
        <logo className='logoDita'>
            <div className="logo_dita">
                <img src={logo_dita} />
            </div>
        </logo>
    )
}
export default LogoDita;