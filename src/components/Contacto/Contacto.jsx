import React from 'react'


const Contacto = () => {
    return (
        <section className="sectionContainer">
            <h1 className="sectionContainer__title">Contactenos</h1>
            <section className="sectionContainer__map__form">
            <div className='map'>
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1331.5695599854118!2d-58.47094430893159!3d-34.61814778045578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc9f3e3635f0d%3A0x687688aa7a2e3d96!2sAv.%20Gaona%203134%2C%20C1416DST%20CABA!5e0!3m2!1ses!2sar!4v1640982072460!5m2!1ses!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe> */}
            </div>
            <form className="formContainer">
            <section className="form__input">
                <input type="text" placeholder="Ingrese su nombre"></input>
                <input type="text" placeholder="Ingrese su apellido"></input>
                <input type="text" placeholder="Ingrese su email"></input>
                <input type="textArea" placeholder="Dejenos su consulta"></input>
            </section>
                <button type="submit">Enviar</button>
            </form>
            </section>
        </section>
    )
}

export default Contacto
