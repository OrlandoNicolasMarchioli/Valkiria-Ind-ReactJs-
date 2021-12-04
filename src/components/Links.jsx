import react from "react";
import { Link } from "react-router-dom";


function Links() {

let enlace1 ={
    backgroundImage : "url('assets/productos/productos/jeanRoto.jpg')",
}
let enlace2 ={
    backgroundImage : "url('assets/productos/productos/sweater.jpg')",
}
let enlace3 ={
    backgroundImage : "url('assets/productos/productos/index/image2.jpeg')",
}
let enlace4 ={
    backgroundImage : "url('assets/productos/productos/billeteras.jpg')",
}


    return (
        <section className="section__enlaces">

            <div className="enlace1" style={enlace1}>
                <h4 className="titleEnlace">Pantalones</h4>
                <Link to="/pantalones"><a className="botonEnlace">VER MÁS</a></Link>
            </div>
            <section className="enlaces2_3_4">
                <div className="enlace2" style={enlace2}>
                    <h4 className="titleEnlace2">Abrigos</h4>
                    <Link to="/abrigos"><a className="botonEnlace">VER MÁS</a></Link>
                </div>
                <div className="container">
                    <div className="enlace3" style={enlace3}>
                        <h4 className="titleEnlace">Remeras</h4>
                        <Link to="/remeras"><a  className="botonEnlace">VER MÁS</a></Link>
                    </div>
                    <div className="enlace4" style={enlace4}>
                        <h4 className="titleEnlace">Accesorios</h4>
                        <Link to="/accesorios"><a className="botonEnlace">VER MÁS</a></Link>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Links
