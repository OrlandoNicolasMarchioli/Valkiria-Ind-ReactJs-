import React, {createContext, useState} from "react";
import LenghtCart from "./LenghtCart";

export const CartContext= createContext()

function CartProvider({children}){
    const [cart,setCart] = useState([]);

    LenghtCart(cart)

    const addProduct =(item)=>{
        const index = cart.findIndex(i => i.id === item.id)
        cart.splice(index,1)//elimina repetidos
            setCart(...cart, item)
    }


    return(
        <CartContext.Provider value ={{
            cart,
            addProduct
        }}>
            {children},
        </CartContext.Provider>
    )
}

export default CartProvider
