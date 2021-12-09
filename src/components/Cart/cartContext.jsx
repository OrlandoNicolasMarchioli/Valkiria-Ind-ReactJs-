import React, {createContext, useState} from "react";
import LenghtCart from "./LenghtCart";

export const CartContext= createContext()

const CartProvider=(props)=>{
    const [cart,setCart] = useState([]);
    const Length = (cart)=>{
        if (cart.Length() == 0) {
            return false
        } else {
            return true
        }
    }

    return(
        <CartContext.Provider value ={[cart,setCart]}>
            {props.children}
            {cart.map((value)=>{return(LenghtCart(cart.value))})}
        </CartContext.Provider>
    )
}

export default CartProvider
