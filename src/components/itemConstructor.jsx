import React from 'react'
import ItemContainer from './itemContainer'
import Links from './Links'
/* import ItemDetailContainer from './itemDetailContainer' */
const Constructor = () => {
    return (
        <section className="sectionConstructorItems">
            {Links()}
            {ItemContainer()}
        </section>
    )
}

export default Constructor
