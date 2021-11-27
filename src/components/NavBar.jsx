/* rafc */
/* rafcp */
/* rafce */
import React from "react";
import {Link} from 'react-router-dom';

let dropDown ={
    display : 'none'
}



/* Los componentes comienzan con mayuscula */
const NavBar = ()=>{
    return(
        <nav className="NavBar">
            <ul className="NavBar__ul">
            <Link to='/'><img className="logo" src='assets/logo.png' alt="imagen logo"/></Link>
                <Link to='/' ><li className="NavBar__li"><a>Inicio</a></li></Link>
                <li className="NavBar__li">
                    <Link to='/productos/'><a>Productos</a></Link>
                    <ul style={dropDown}>
                        <div className="NavBar__li__Buscador">
                            <a>Encontra tu producto</a>
                            <input type='text' placeholder/>
                        </div>
                        <Link to="/abrigos/"><li className="NavBar__li__ul__li"><a>Abrigos</a></li></Link>
                        <Link to="/pantalones/"><li className="NavBar__li__ul__li"><a>Pantalones</a></li></Link>
                        <Link to="/remeras/"><li className="NavBar__li__ul__li"><a>Remeras</a></li></Link>
                        <Link to="/accesorios/"><li className="NavBar__li__ul__li"><a>Accesorios</a></li></Link>
                    </ul>
                </li>
                <Link to='/contacto/'><li className="NavBar__li"><a>Contacto</a></li></Link>
                <li className="NavBar__li">

                </li>
            </ul>
            <Link to="/carrito/"><button><img src='assets/bolsa.png'/></button></Link>
        </nav>
    )
}

export default NavBar;


