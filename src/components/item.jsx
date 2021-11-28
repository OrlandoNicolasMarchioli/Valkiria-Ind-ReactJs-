import React from 'react'
import {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'

function Item() {

    const db = 'dataBase.json'

    const [product, setProduct] = useState([])//estado con todos los productos del Json

    const { idCategoria } = useParams()

    useEffect(() => {//utilizo useEfect para el renderizado asincrono
        if (idCategoria) {
            try{
                fetch(db)
                .then(response => response.json())
                .then(data => {setProduct(data.filter(product => product.category === idCategoria))});/* filtro de categorias */
            }catch(err){
                console.log(err)
            }
        } else {
            try{
                fetch(db)
                .then(response => response.json())
                .then(data => {setProduct(data)});
            }catch(err){
                console.log(err)
            }
        }


    }, [idCategoria])

    /* function getCard(){
        fetch(db)
        .then(response => response.json())
        .then(data => {console.log(data);setProduct(data)});
    } */
    /* function filter(){
        fetch(db)
        .then(response => response.json())
        .then(data => {console.log(data);setProduct(data.filter(product => product.idCategoria === idCategoria))});
    } */

    return (
        <section className="sectionProduct">
        {
            product.map(product =>{//me trae cada uno de los productos y genera la card

                return(
                    <div>
                        <img className="sectionProduct__img" src={product.img} alt="img"></img>
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