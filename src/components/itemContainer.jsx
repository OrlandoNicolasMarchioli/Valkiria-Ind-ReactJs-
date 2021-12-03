import React from 'react'
import {useState,useEffect} from 'react'
import { useParams } from 'react-router'//captura los parametros que defino en la ruta
import Item from './Item'


function ItemContainer() {


    const [items, setItems] = useState([])//estado con todos los productos del Json

    const {idCategoria} = useParams()//capturo el parametro del a ruta

    useEffect(() => {//utilizo useEfect para el renderizado asincrono
        try{
            if (idCategoria) {
                fetch('dataBase.json')
                .then(resp => resp.json())
                .then((resp)=>{setItems(resp.filter(item => item.category === idCategoria))})
                console.log(idCategoria)

            } else {
                fetch('dataBase.json')
                .then(resp => resp.json())
                .then((resp)=>{setItems(resp)})
            }
        }catch(err){
            console.log(err)
        }
    }, [idCategoria])

    return (
        <>
                {items.map((item)=>{
                    return(Item(item.img, item.id, item.category, item.name, item.price))

                })}
        </>
    )
}

export default ItemContainer;