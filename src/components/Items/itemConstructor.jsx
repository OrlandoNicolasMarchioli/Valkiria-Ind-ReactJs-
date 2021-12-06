import React from 'react'
import ItemContainer from './itemContainer'
import Links from '../Items/Links'
import Title from './Title'

const Constructor = () => {
    return (
        <section className="sectionConstructorItems">
            <Links />
            {/* <Title/> */}
            <ItemContainer />
        </section>
    )
}

export default Constructor
