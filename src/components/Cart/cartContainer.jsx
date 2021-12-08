import React from 'react'
import Cart from './cart'
import CartEmpty from './cartEmpty'


const CartContainer = () => {

    let value = ""
    if (length(<Cart/>) == 0){
        value = false
    }else{
        value == true
    }

    const lenCart = (value) =>{
        return <>{
            value.condition ? <Cart/> : <CartEmpty/>
        }
        </>
    }


    return (
        <div className="cartContainer">
            <h1>Tus productos seleccionados</h1>
            {lenCart()}
        </div>
    )
}

export default CartContainer
