import { Link } from "react-router-dom"

const CartEmpty = () => {
    return (
        <section className="cartEmpty">
            <h1 className="cartEmpty__title">Su carrito está vacio</h1>
            <h2 className="cartEmpty__secondTitle">vuelva al inicio para ver mas productos</h2>
            <Link to="/"><button>productos</button></Link>
        </section>
    )
}

export default CartEmpty
