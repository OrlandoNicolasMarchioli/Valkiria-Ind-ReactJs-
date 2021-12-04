import React from "react";
import { useEffect } from "react";
import Aos from "aos";

const Title = () => {

    useEffect(() => {
        Aos.init({duration:2000});
    }, [])


    return (
        <div>
            <h1 data-aos="fade-up" className="title">Nuestros productos</h1>
        </div>
    )
}

export default Title
