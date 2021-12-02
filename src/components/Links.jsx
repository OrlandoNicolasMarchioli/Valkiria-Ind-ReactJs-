import react from "react";
import { useEffect,useState } from "react";
import { Link } from "react-router-dom";


function Links() {



    return (
        <section className="section__enlaces">

            <div className="enlace1">
                <img src="assets/productos/productos/jeanRoto2.jpg"/>
                <h4 className="titleEnlace">Pantalones</h4>
                <Link to="/pantalones"><a className="botonEnlace">VER MÁS</a></Link>
            </div>
            <section className="enlaces2_3_4">
                <div className="enlace2">
                    <img src="assets/productos/productos/jeanRoto2.jpg"/>
                    <h4 className="titleEnlace2">Abrigos</h4>
                    <Link to="/abrigos"><a className="botonEnlace">VER MÁS</a></Link>
                </div>
                <div className="container">
                    <div className="enlace3">
                    <img src="assets/productos/productos/jeanRoto2.jpg"/>
                    <h4 className="titleEnlace">Remeras</h4>
                    <Link to="/remeras"><a className="botonEnlace">VER MÁS</a></Link>
                    </div>
                    <div className="enlace4">
                    <img src="assets/productos/productos/jeanRoto2.jpg"/>
                    <h4 className="titleEnlace">Accesorios</h4>
                    <Link to="/accesorios"><a className="botonEnlace">VER MÁS</a></Link>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Links
