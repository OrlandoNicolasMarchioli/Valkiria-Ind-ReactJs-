import React from 'react'
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
