import React,{useContext,useState,useEffect} from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./cartContext";


function Cart(){

    const [cart,setCart] = useContext(CartContext)

    return(
        <>
            {cart.map((item)=>{
                return(
                    <section className="sectionProduct">
                        <div>
                            <img className="sectionProduct__img" src={item.img} alt="img"></img>
                            <h2 className="sectionProduct__title">{item.name}</h2>
                            <h3 className="sectionProduct__price">{item.price}</h3>
                        </div>
            </section>
                )
            })}
        </>
    )

}

export default Cart