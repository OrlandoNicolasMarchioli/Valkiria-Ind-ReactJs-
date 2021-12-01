import React from 'react'
import {useState,useEffect} from 'react'
import Item from './Item'


function ItemContainer() {


    const [items, setItems] = useState([])//estado con todos los productos del Json

    const getItem = ()=>{
        fetch('dataBase.json')
        .then(resp => resp.json())
        .then((resp)=>{setItems(resp)})
    }

    useEffect(() => {//utilizo useEfect para el renderizado asincrono
        getItem()
    }, [])

    return (
        <>
            {items && items.map((item,index)=>{
            return <Item key={index} img={item.img} id={item.id} category={item.category} name={item.name} price={item.price}></Item>
        })}

    </>
    )
}

export default ItemContainer;