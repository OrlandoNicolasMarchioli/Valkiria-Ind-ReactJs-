import React,{useContext,useState,useEffect} from "react";
import { CartContext } from "./cartContext";


function Cart(){

    const [cart] = useContext(CartContext)
    let [total,setTotal] = useState(0);

    useEffect(()=>{
        let temp = 0;//para saber el valor total
        cart.map((item)=>{
            temp = temp + item.price;
            return(temp)
        })
        setTotal(temp)
    },[])

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
            <h1> Total a pagar: ${total}</h1>
        </>
    )

}

export default Cart