import React from 'react'
import {useState,useEffect} from 'react'

function Item() {
    /* const [product, setProduct] = useState([]) */

    const db = 'dataBase.json'

    const [product, setProduct] = useState([])//estado con todos los productos del Json

    useEffect(() => {//utilizo useEfect para el renderizado asincrono
        getCard()
    }, [])

    function getCard(){
        fetch(db)//fetch es una promesa
        .then(dataBase =>{//recibo el archivo json
            const {data = []} = dataBase //muestro el archivo de mejor forma
            setProduct(data)//le paso data a mi estado
        })
    }

    return (
        <section className="sectionProduct">
        {
            product.map(product =>{//me trae cada uno de los productos y genera la card

                return(
                    <div>
                        <img className="sectionProduct__img" src={product.img}></img>
                        <h2 className="sectionProduct__title">{product.name}</h2>
                        <h3 className="sectionProduct__price">{product.price}</h3>
                        <button>Agregar al carrito</button>
                    </div>
                )
            })
        }
        </section>
    )
}

export default Item;