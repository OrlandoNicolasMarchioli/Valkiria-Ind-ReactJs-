
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../Cart/cartContext";

function Item ({img, id, category, name, price}) {

    const [cart,setCart] = useContext(CartContext)

    function agregar(){
        const product = {
            img:img,
            id:id,
            category:category,
            name:name,
            price:price
        }
        const temporal = cart;
        temporal.push(product);
        setCart(temporal)
        console.log(product)
    }


    return (
        <>
            <section className="sectionProduct">
                        <div>
                            <img className="sectionProduct__img" src={img} alt="img"></img>
                            <h2 className="sectionProduct__title">{name}</h2>
                            <h3 className="sectionProduct__price">{price}</h3>
                            <button onClick={agregar}>Agregar al carrito</button>
                            <Link to={`/detalle/${id}`}><button>Ver mas</button></Link>
                        </div>
            </section>
        </>
    )
}

export default Item

