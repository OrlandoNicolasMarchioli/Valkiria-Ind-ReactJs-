

function NavBar(){
    return(
        <nav>
            <li><a>Inicio</a></li>
            <li>
                <a>Productos</a>
                <ul>
                    <li><a href="#">Abrigos</a></li>
                    <li><a href="#">Pantalones</a></li>
                    <li><a href="#">Remeras</a></li>
                    <li><a href="#">Accesorios</a></li>
                </ul>
            </li>
            <li><a>Contacto</a></li>
            <li>
                <a>Search</a>
                <prompt></prompt>
            </li>
        </nav>
    )
}


export default NavBar;