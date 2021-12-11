import React from 'react'
import { useEffect,useState,useContext } from 'react';
import { useParams } from 'react-router';
import { CartContext } from "../Cart/cartContext";
import getFirestore from '../Firebase/fireBase';


const DetalleProduct = (prod) => {
    const [datos, setDatos] = useState({});
    const [cart,setCart] = useContext(CartContext)
    const {idProducto} = useParams()

    function agregar(){
        const product = {
            img:datos.img,
            category:datos.category,
            name:datos.name,
            price:datos.price
        }
        const temporal = cart;
        temporal.push(product);
        setCart(temporal)
        console.log(product)
    }


    useEffect(() => {
        const db = getFirestore()
        const dbQuery = db.collection('productos').doc(idProducto).get()//apunto a un unico documento y lo traigo (es una promesa)
        .then(resp => setDatos({id: resp.id, ...resp.data()}))//extraigo los datos con data
        .then(resp=> agregar(datos.img,datos.category,datos.name,datos.price))
    }
        , [])


    return (
        <section className="sectionProduct">
                    <div>
                        <img className="sectionProduct__img" src={datos.img} alt="img"></img>
                        <h2 className="sectionProduct__title">{datos.name}</h2>
                        <h3 className="sectionProduct__price">{datos.price}</h3>
                        <button onClick={agregar}>Agregar al carrito</button>
                    </div>
        </section>
    )
}

export default DetalleProduct
