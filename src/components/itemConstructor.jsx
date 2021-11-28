import React from 'react'
import Item from './item'
import Carrousel from './Carrousel'
import ItemDetailContainer from './itemDetailContainer'
const Constructor = () => {
    return (
        <section className="sectionConstructorItems">
            {Carrousel()}
            {Item()}
            {ItemDetailContainer()}
        </section>
    )
}

export default Constructor
