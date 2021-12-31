import React from 'react'
import { useEffect,useState,useContext} from 'react';
import { useParams } from 'react-router';
import getFirestore from '../Firebase/fireBase';
import { CartContext } from '../Cart/cartContext';


const DetalleProduct = (prod) => {
    const [data, setData] = useState({});
    const [cart,setCart] = useContext(CartContext)
    const {idProducto} = useParams()

    const addToCart = ()=>{
        const prod = {img: data.img, name: data.name, price: data.price}
        setCart(curr =>[...curr, prod])
    }


    useEffect(() => {
        const db = getFirestore()
        const dbQuery = db.collection('productos').doc(idProducto).get()//apunto a un unico documento y lo traigo (es una promesa)
        .then(resp => setData({id: resp.id, ...resp.data()}))//extraigo los datos con data
    }
        , [])


    return (
        <section className="sectionProduct">
                    <div>
                        <img className="sectionProduct__img" src={data.img} alt="img"></img>
                        <h2 className="sectionProduct__title">{data.name}</h2>
                        <h3 className="sectionProduct__price">{data.price}</h3>
                        <button onClick={addToCart}>Agregar al carrito</button>
                    </div>
        </section>
    )
}

export default DetalleProduct
