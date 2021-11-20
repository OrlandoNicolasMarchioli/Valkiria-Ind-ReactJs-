/* rafc */
/* rafcp */
/* rafce */
import React from "react";


let dropDown ={
    display : 'none'
}



/* Los componentes comienzan con mayuscula */
const NavBar = ()=>{
    return(
        <nav className="NavBar">
            <img className="logo" src='assets/logo.png'/>
            <ul className="NavBar__ul">
                <li className="NavBar__li"><a href="#">Inicio</a></li>
                <li className="NavBar__li">
                    <a href="#">Productos</a>
                    <ul style={dropDown}>
                        <div className="NavBar__li__Buscador">
                            <a href="#">Encontra tu producto</a>
                            <input type='text' placeholder/>
                        </div>
                        <li className="NavBar__li__ul__li"><a href="#">Abrigos</a></li>
                        <li className="NavBar__li__ul__li"><a href="#">Pantalones</a></li>
                        <li className="NavBar__li__ul__li"><a href="#">Remeras</a></li>
                        <li className="NavBar__li__ul__li"><a href="#">Accesorios</a></li>
                    </ul>
                </li>
                <li className="NavBar__li"><a href="#">Contacto</a></li>
                <li className="NavBar__li">

                </li>
            </ul>
            <button><img src='assets/bolsa.png'/></button>
        </nav>
    )
}

export default NavBar;


