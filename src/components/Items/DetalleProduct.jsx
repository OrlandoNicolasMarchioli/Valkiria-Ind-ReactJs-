import React from 'react'
import { useEffect,useState,useContext } from 'react';
import { useParams } from 'react-router';
import { CartContext } from "../Cart/cartContext";
import getFirestore from '../Firebase/fireBase';


const DetalleProduct = (prod) => {
    const [datos, setDatos] = useState({});
    const [cart,setCart] = useContext(CartContext)
    const {idProducto} = useParams()


    const getDatos = ()=>{
        fetch('dataBase.json')
        .then(res=>res.json())
        .then((resp)=>{
            setDatos(resp.find())
        })
    }


    /* function agregar(){

    } */

    useEffect(() => {
        getDatos();
        const db = getFirestore()
        const dbQuery = db.collection('productos').doc('X8z63sLj9x2vb9rgEakj')//apunto a un unico documento y lo traigo (es una promesa)
        dbQuery.get()
        .then(resp => setDatos({id: resp.id, ...resp.data()}))//extraigo los datos con data
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
