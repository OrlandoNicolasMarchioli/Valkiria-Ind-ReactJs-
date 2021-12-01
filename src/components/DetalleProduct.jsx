import React from 'react'
import { useEffect,useState } from 'react';


const DetalleProduct = (props) => {

    const [identificador] = props.match.params.id;
    const [datos, setDatos] = useState({});


    const getDatos = ()=>{
        fetch('dataBase.json' + identificador)
        .then(res=>res.json())
        .then((resp)=>{
            setDatos(resp)
        })
    }

    useEffect(() => {
        getDatos();
        }
    , [])


    return (
        <section className="sectionProduct">
                    <div>
                        <img className="sectionProduct__img" src={datos.img} alt="img"></img>
                        <h2 className="sectionProduct__title">{datos.name}</h2>
                        <h3 className="sectionProduct__price">{datos.price}</h3>
                        <button>Agregar al carrito</button>
                    </div>
        </section>
    )
}

export default DetalleProduct
