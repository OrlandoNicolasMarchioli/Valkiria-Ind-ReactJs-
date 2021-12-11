import React from 'react'
import Cart from './cart'
import CartEmpty from './cartEmpty'

const LenghtCart = (cart) => {
    return cart.length === 0 ? <Cart/> : <CartEmpty/>
}

export default LenghtCart
