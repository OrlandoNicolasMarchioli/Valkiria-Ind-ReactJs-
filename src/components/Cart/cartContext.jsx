import React, {createContext, useState} from "react";
import LenghtCart from "./LenghtCart";

export const CartContext= createContext()

const CartProvider=(props)=>{
    const [cart,setCart] = useState([]);


    return(
        <CartContext.Provider value ={[cart,setCart]}>
            {props.children}
            {LenghtCart(cart)}
        </CartContext.Provider>
    )
}

export default CartProvider
