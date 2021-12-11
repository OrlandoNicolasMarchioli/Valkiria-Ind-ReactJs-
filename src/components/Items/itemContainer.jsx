import React from 'react'
import {useState,useEffect} from 'react'
import { useParams } from 'react-router'//captura los parametros que defino en la ruta
import getFirestore from '../Firebase/fireBase'
import Item from './Item'


function ItemContainer() {


    const [items, setItems] = useState([])//estado con todos los productos del Json

    const {idCategoria} = useParams()//capturo el parametro del a ruta

    useEffect(() => {//utilizo useEfect para el renderizado asincrono\
        try{
            if(idCategoria){
                const db = getFirestore()
                console.log(db)
                const dbQuery = db.collection('productos').where('category','==',idCategoria)
                dbQuery.get()//traigo toda la base de datos
                .then(data => setItems(data.docs.map( item=> ( {id: item.id, ...item.data()} ))))//seteo los datos, docs.map(donde esta el array y lo mapeo)
            }else{
                const db = getFirestore()
                const dbQuery = db.collection('productos')
                dbQuery.get()//traigo toda la base de datos
                .then(data => setItems(data.docs.map( item=> ( {id: item.id, ...item.data()} ))))
            }
        }catch(err){
            console.log(err)
        }
    }, [idCategoria])

    return (
        <>
                {items.map((item)=>{//Le envio al componente Item los datos recibidos de la base de datos
                    return(Item(item.img,item.id, item.category, item.name, item.price))

                })}
        </>
    )
}

export default ItemContainer;