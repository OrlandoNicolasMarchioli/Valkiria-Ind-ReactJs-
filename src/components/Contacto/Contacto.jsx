import Form from "./Form"
import Maps from "./Maps"

const Contacto = () => {
    return (
        <section className="sectionContainer">
            <h1 className="sectionContainer__title">Contactenos</h1>
            <section className="sectionContainer__map__form">
                <div className="map">
                    <Maps/>
                </div>
                <div>
                    <Form/>
                </div>
            </section>
        </section>
    )
}

export default Contacto
