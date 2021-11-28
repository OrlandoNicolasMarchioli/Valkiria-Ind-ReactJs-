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
            <Link to='/'><img className="logo" src='assets/logo.png' alt="imagen logo"/></Link>
            <ul className="NavBar__ul">
                <Link to='/' ><li className="NavBar__li"><a>Inicio</a></li></Link>
                <Link to='/productos/'><li className="NavBar__li"><a>Productos</a></li></Link>
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
                <Link to='/contacto/'><li className="NavBar__li"><a>Contacto</a></li></Link>
            </ul>
            <Link to="/carrito/"><button><img src='assets/bolsa.png'/></button></Link>
        </nav>
    )
}

export default NavBar;


