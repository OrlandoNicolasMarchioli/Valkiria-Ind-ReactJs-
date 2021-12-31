import React from 'react'
import Cart from './cart'
import { CartContext } from './cartContext'
import { useContext } from 'react'
import CartEmpty from './cartEmpty'



const CartContainer = () => {
    const [cart,setCart] = useContext(CartContext)
    const totalPrice = cart.reduce((acc,curr)=> acc + curr.price, 0)

    return (
        <div className="cartContainer">
            <h1>Tus productos seleccionados</h1>
            {cart.length === 0 && <div><CartEmpty/></div>}
            {cart.lenght != 0 && <Cart/>}
            <h2>Precio Total: {totalPrice} </h2>
        </div>
    )
}

export default CartContainer
