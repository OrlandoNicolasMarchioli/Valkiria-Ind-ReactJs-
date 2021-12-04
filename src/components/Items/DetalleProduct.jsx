import React from 'react'
import { useEffect,useState,useContext } from 'react';
import { CartContext } from "../Cart/cartContext";


const DetalleProduct = (prod) => {

    const [datos, setDatos] = useState({});


    const getDatos = ()=>{
        fetch('http://localhost:3000/' + prod.id)
        .then(res=>res.json())
        .then((resp)=>{
            setDatos(resp)
        })
    }

    const [cart,setCart] = useContext(CartContext)

    function agregar(){
        const product = {
            img:prod.img,
            id:prod.id,
            category:prod.category,
            name:prod.name,
            price:prod.price
        }
        const temporal = cart;
        temporal.push(product);
        setCart(temporal)
        console.log(product)
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
                        <button onClick={agregar}>Agregar al carrito</button>
                    </div>
        </section>
    )
}

export default DetalleProduct
