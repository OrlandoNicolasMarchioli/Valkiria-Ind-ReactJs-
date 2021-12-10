const Form = () => {
    return (
        <form className="formContainer">
            <h2 className="form__title">¡Escribinos!</h2>
            <section className="form__input">
                <input type="text" placeholder="Ingrese su nombre"></input>
                <input type="text" placeholder="Ingrese su apellido"></input>
                <input type="text" placeholder="Ingrese su email"></input>
                <input type="textArea" placeholder="Dejenos su consulta"></input>
            </section>
            <button type="submit">Enviar</button>
        </form>
    )
}

export default Form
