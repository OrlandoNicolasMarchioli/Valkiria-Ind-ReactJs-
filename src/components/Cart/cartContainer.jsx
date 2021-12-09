import React from 'react'
import Cart from './cart'
import CartEmpty from './cartEmpty'
import LenghtCart from './LenghtCart'


const CartContainer = () => {

    return (
        <div className="cartContainer">
            <h1>Tus productos seleccionados</h1>
            {<LenghtCart/>}
        </div>
    )
}

export default CartContainer
