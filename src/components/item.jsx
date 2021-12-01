
import { Link } from "react-router-dom";

function Item (img, id, category, name, price) {
    return (
        <section className="sectionProduct">
                    <div>
                        <img className="sectionProduct__img" src={img} alt="img"></img>
                        <h2 className="sectionProduct__title">{name}</h2>
                        <h3 className="sectionProduct__price">{price}</h3>
                        <button>Agregar al carrito</button>
                        <Link to={`/`+id}><button>Ver mas</button></Link>
                    </div>
        </section>
    )
}

export default Item
