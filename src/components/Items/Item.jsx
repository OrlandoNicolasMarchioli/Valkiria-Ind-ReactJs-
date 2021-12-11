
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../Cart/cartContext";

function Item (img, id, category, name, price) {

    const {addProduct} = useContext(CartContext)

    function add(){
        addProduct(img, id, category, name, price)
    }


    return (
        <>
            <section className="sectionProduct">
                        <div>
                            <img className="sectionProduct__img" src={img} alt="img"></img>
                            <h2 className="sectionProduct__title">{name}</h2>
                            <h3 className="sectionProduct__price">${price}</h3>
                            <button onClick={add}>Agregar al carrito</button>
                            <Link to={`/detalle/${id}`}><button>Ver mas</button></Link>
                        </div>
            </section>
        </>
    )
}

export default Item

