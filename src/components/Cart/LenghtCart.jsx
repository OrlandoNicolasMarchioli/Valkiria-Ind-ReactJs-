import React from 'react'
import Cart from './cart'
import CartEmpty from './cartEmpty'

const LenghtCart = ({value}) => {
    if (value.length() === 0){
        value = false
    }else{
        value = true
    }
    return (
        value.condition ? <Cart/> : <CartEmpty/>
    )
}

export default LenghtCart
