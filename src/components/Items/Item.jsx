
import { Link } from "react-router-dom";
import { CartContext } from "../Cart/cartContext";
import { useContext } from "react";

function Item (img, id, category, name, price) {
    const [cart,setCart] = useContext(CartContext)

    const addToCart = ()=>{
        const prod = {img: img, name: name, price: price}
        setCart(curr =>[...curr, prod])
    }

    return (
        <>
            <section className="sectionProduct">
                        <div>
                            <img className="sectionProduct__img" src={img} alt="img"></img>
                            <h2 className="sectionProduct__title">{name}</h2>
                            <h3 className="sectionProduct__price">${price}</h3>
                            <button onClick={addToCart}>Agregar al carrito</button>
                            <Link to={`/detalle/${id}`}><button>Ver mas</button></Link>
                        </div>
            </section>
        </>
    )
}

export default Item

