
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./cartContext";

function Item (img, id, category, name, price) {

    const [cart,setCart] = useContext(CartContext)

    function agregar(){
        const product = {
            id:id,
            img:img,
            price:price,
            category:category,
            name:name
        }
        const temporal = cart;
        temporal.push(product);
        setCart(temporal)

    }


    return (
        <>
            <section className="sectionProduct">
                        <div>
                            <img className="sectionProduct__img" src={img} alt="img"></img>
                            <h2 className="sectionProduct__title">{name}</h2>
                            <h3 className="sectionProduct__price">{price}</h3>
                            <button onClick={agregar}>Agregar al carrito</button>
                            <Link to={`/`+id}><button>Ver mas</button></Link>
                        </div>
            </section>
        </>
    )
}

export default Item
