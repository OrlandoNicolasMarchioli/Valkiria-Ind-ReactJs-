/* rafc */
/* rafcp */
/* rafce */
import React from "react";
import {Link} from 'react-router-dom';




/* Los componentes comienzan con mayuscula */
const NavBar = ()=>{
    return(
        <nav className="NavBar">
            <Link to='/'><img className="logo" src='assets/logo.png' alt="imagen logo"/></Link>
            <ul className="NavBar__ul">
                <Link to='/' ><li className="NavBar__li"><a>Inicio</a></li></Link>
                <Link to='/categoria/abrigos'><li className="NavBar__li"><a>Abrigos</a></li></Link>
                <Link to='/categoria/pantalones'><li className="NavBar__li"><a>Pantalones</a></li></Link>
                <Link to='/categoria/remeras'><li className="NavBar__li"><a>Remeras</a></li></Link>
                <Link to='/categoria/accesorios'><li className="NavBar__li"><a>Accesorios</a></li></Link>
                <Link to='/categoria/contacto/'><li className="NavBar__li"><a>Contacto</a></li></Link>
            </ul>
            <Link to="/carrito"><button><img src='assets/bolsa.png' alt="imagen Carrito"/></button></Link>
        </nav>
    )
}

export default NavBar;


