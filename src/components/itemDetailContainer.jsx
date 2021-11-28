import { useState, useEffect } from "react";
import { useParams } from "react-router";


const ItemDetailContainer = () =>{

    const id = 'dataBase.json'

    const {item, setItem} = useState({});
    const {idProducto} = useParams();

    useEffect(() => {
        if(idProducto){
            try{
                fetch(id)
                .then(response => response.json())
                .then(data => {setItem(data.filter(item =>{item.id ===idProducto}))})
            }catch(err){
                console.log(err)
            }
        }else{
            fetch(id)
            .then(response => response.json())
            .then(data => {setItem(data)})
        }
    }, [idProducto])

    return (

        <section className="sectionProduct">
        {
            item.map(item =>{//me trae cada uno de los productos y genera la card de detalle

                return(
                    <div>
                        <img className="sectionProduct__img" src={item.img} alt="img"></img>
                        <h2 className="sectionProduct__title">{item.name}</h2>
                        <h3 className="sectionProduct__price">{item.price}</h3>
                        <button>Agregar al carrito</button>
                    </div>
                )
            })
        }
        </section>
    )
}

export default ItemDetailContainer