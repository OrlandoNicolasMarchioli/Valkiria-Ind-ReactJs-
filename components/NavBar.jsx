/* rafc */
/* rafcp */
/* rafce */
import React from "react";

/* Los componentes comienzan con mayuscula */
const Nav = ()=>{
    return(
        <nav className="NavBar">
            <li className="NavBar__li"><a href="#">Inicio</a></li>
            <li className="NavBar__li">
                <a href="#">Productos</a>
                <ul>
                    <li className="NavBar__li__ul__li"><a href="#">Abrigos</a></li>
                    <li className="NavBar__li__ul__li"><a href="#">Pantalones</a></li>
                    <li className="NavBar__li__ul__li"><a href="#">Remeras</a></li>
                    <li className="NavBar__li__ul__li"><a href="#">Accesorios</a></li>
                </ul>
            </li>
            <li className="NavBar__li"><a href="#">Contacto</a></li>
            <li className="NavBar__li">
                <a href="#">Search</a>
                <prompt></prompt>
            </li>
        </nav>
    )
}

export default Nav;


