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
            <Link to='/'><img className="logo" src='assets/logo.png'/></Link>
            <ul className="NavBar__ul">
                <Link to='/' ><li className="NavBar__li"><a>Inicio</a></li></Link>
                <li className="NavBar__li">
                    <Link to='/productos/'><a>Productos</a></Link>
                    <ul style={dropDown}>
                        <div className="NavBar__li__Buscador">
                            <a>Encontra tu producto</a>
                            <input type='text' placeholder/>
                        </div>
                        <li className="NavBar__li__ul__li"><a href="#">Abrigos</a></li>
                        <li className="NavBar__li__ul__li"><a href="#">Pantalones</a></li>
                        <li className="NavBar__li__ul__li"><a href="#">Remeras</a></li>
                        <li className="NavBar__li__ul__li"><a href="#">Accesorios</a></li>
                    </ul>
                </li>
                <Link to='/contacto/'><li className="NavBar__li"><a>Contacto</a></li></Link>
                <li className="NavBar__li">

                </li>
            </ul>
            <Link to="/carrito"><button><img src='assets/bolsa.png'/></button></Link>
        </nav>
    )
}

export default NavBar;


