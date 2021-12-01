import React from 'react'
import ItemContainer from './itemContainer'
import Carrousel from './Carrousel'
/* import ItemDetailContainer from './itemDetailContainer' */
const Constructor = () => {
    return (
        <section className="sectionConstructorItems">
            {Carrousel()}
            {ItemContainer()}
        </section>
    )
}

export default Constructor
